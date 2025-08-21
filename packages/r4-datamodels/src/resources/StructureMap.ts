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
 * StructureMap Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/StructureMap
 * StructureDefinition.name: StructureMap
 * StructureDefinition.description: A Map of relationships between 2 structures that can be used to transform data.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  Base64BinaryType,
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
  IdType,
  InstantType,
  IntegerType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  OidType,
  PositiveIntType,
  PrimitiveType,
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  StringType,
  TimeType,
  UnsignedIntType,
  UriType,
  UrlType,
  UuidType,
  assertEnumCodeType,
  assertEnumCodeTypeList,
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
  fhirDateTime,
  fhirDateTimeSchema,
  fhirId,
  fhirIdSchema,
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
  setFhirBackboneElementListJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, Age, Annotation, Attachment, CodeableConcept, Coding, ContactDetail, ContactPoint, Contributor, Count, DataRequirement, Distance, Dosage, Duration, Expression, HumanName, Identifier, Meta, Money, PARSABLE_DATATYPE_MAP, ParameterDefinition, Period, Quantity, Range, Ratio, Reference, RelatedArtifact, SampledData, Signature, Timing, TriggerDefinition, UsageContext } from '../complex-types/complex-datatypes';
import { MapContextTypeEnum } from '../code-systems/MapContextTypeEnum';
import { MapGroupTypeModeEnum } from '../code-systems/MapGroupTypeModeEnum';
import { MapInputModeEnum } from '../code-systems/MapInputModeEnum';
import { MapModelModeEnum } from '../code-systems/MapModelModeEnum';
import { MapSourceListModeEnum } from '../code-systems/MapSourceListModeEnum';
import { MapTargetListModeEnum } from '../code-systems/MapTargetListModeEnum';
import { MapTransformEnum } from '../code-systems/MapTransformEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * StructureMap Class
 *
 * @remarks
 * A Map of relationships between 2 structures that can be used to transform data.
 *
 * **FHIR Specification**
 * - **Short:** A Map of relationships between 2 structures that can be used to transform data
 * - **Definition:** A Map of relationships between 2 structures that can be used to transform data.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR StructureMap](http://hl7.org/fhir/StructureDefinition/StructureMap)
 */
export class StructureMap extends DomainResource implements IDomainResource {
  constructor(url: UriType | fhirUri | null = null, name: StringType | fhirString | null = null, status: EnumCodeType | CodeType | fhirCode | null = null, group: StructureMapGroupComponent[] | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

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
      'StructureMap.status',
    );

    this.group = null;
    if (isDefinedList<StructureMapGroupComponent>(group)) {
      this.setGroup(group);
    }
  }

  /**
   * Parse the provided `StructureMap` JSON to instantiate the StructureMap data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureMap`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureMap
   * @returns StructureMap data model or undefined for `StructureMap`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): StructureMap | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureMap';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureMap();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'StructureMap');
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
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setUrlElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'structure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: StructureMapStructureComponent | undefined = StructureMapStructureComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStructure(component);
        }
      });
    }

    fieldName = 'import';
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
          instance.addImportElement(datatype);
        }
      });
    }

    fieldName = 'group';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: StructureMapGroupComponent | undefined = StructureMapGroupComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addGroup(component);
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
   * StructureMap.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this structure map, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this structure map when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this structure map is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the structure map is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the structure map to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url: UriType | null;

  /**
   * StructureMap.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the structure map
   * - **Definition:** A formal identifier that is used to identify this structure map when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure map outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * StructureMap.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the structure map
   * - **Definition:** The identifier that is used to identify this version of the structure map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure map author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different structure map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure map with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * StructureMap.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this structure map (computer friendly)
   * - **Definition:** A natural language name identifying the structure map. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * StructureMap.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this structure map (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the structure map.
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
   * StructureMap.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this structure map. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of structure maps that are appropriate for use versus not.
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
   * StructureMap.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this structure map is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of structure maps that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level structure map.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * StructureMap.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the structure map was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure map changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * StructureMap.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the structure map.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the structure map.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * StructureMap.contact Element
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
   * StructureMap.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the structure map
   * - **Definition:** A free text natural language description of the structure map from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * StructureMap.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate structure map instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * StructureMap.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for structure map (if applicable)
   * - **Definition:** A legal or geographic region in which the structure map is intended to be used.
   * - **Comment:** It may be possible for the structure map to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * StructureMap.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this structure map is defined
   * - **Definition:** Explanation of why this structure map is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the structure map. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure map.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * StructureMap.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the structure map and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * StructureMap.structure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structure Definition used by this map
   * - **Definition:** A structure definition used by this map. The structure definition may describe instances that are converted, or the instances that are produced.
   * - **Comment:** It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private structure?: StructureMapStructureComponent[] | undefined;

  /**
   * StructureMap.import Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Other maps used by this map (canonical URLs)
   * - **Definition:** Other maps used by this map (canonical URLs).
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureMap',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private import_?: CanonicalType[] | undefined;

  /**
   * StructureMap.group Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Named sections for reader convenience
   * - **Definition:** Organizes the mapping into manageable chunks for human review/ease of maintenance.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private group: StructureMapGroupComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `url` property value as a UriType object if defined; else null
   */
  public getUrlElement(): UriType | null {
    return this.url;
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: UriType): this {
    assertIsDefined<UriType>(element, `StructureMap.url is required`);
    const optErrMsg = `Invalid StructureMap.url; Provided value is not an instance of UriType.`;
    assertFhirType<UriType>(element, UriType, optErrMsg);
    this.url = element;
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
  public setUrl(value: fhirUri): this {
    assertIsDefined<fhirUri>(value, `StructureMap.url is required`);
    const optErrMsg = `Invalid StructureMap.url (${String(value)})`;
    this.url = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
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
      const optErrMsg = `Invalid StructureMap.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid StructureMap.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid StructureMap.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureMap.version (${String(value)})`;
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
    assertIsDefined<StringType>(element, `StructureMap.name is required`);
    const optErrMsg = `Invalid StructureMap.name; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `StructureMap.name is required`);
    const optErrMsg = `Invalid StructureMap.name (${String(value)})`;
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
      const optErrMsg = `Invalid StructureMap.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureMap.title (${String(value)})`;
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
    assertIsDefined<EnumCodeType>(enumType, `StructureMap.status is required`);
    const errMsgPrefix = `Invalid StructureMap.status`;
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
    assertIsDefined<CodeType>(element, `StructureMap.status is required`);
    const optErrMsg = `Invalid StructureMap.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `StructureMap.status is required`);
    const optErrMsg = `Invalid StructureMap.status (${String(value)})`;
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
      const optErrMsg = `Invalid StructureMap.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid StructureMap.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid StructureMap.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid StructureMap.date (${String(value)})`;
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
      const optErrMsg = `Invalid StructureMap.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureMap.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid StructureMap.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid StructureMap.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid StructureMap.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid StructureMap.description (${String(value)})`;
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
      const optErrMsg = `Invalid StructureMap.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid StructureMap.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid StructureMap.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid StructureMap.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid StructureMap.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid StructureMap.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid StructureMap.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid StructureMap.copyright (${String(value)})`;
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
   * @returns the `structure` property value as a StructureMapStructureComponent array
   */
  public getStructure(): StructureMapStructureComponent[] {
    return this.structure ?? ([] as StructureMapStructureComponent[]);
  }

  /**
   * Assigns the provided StructureMapStructureComponent array value to the `structure` property.
   *
   * @param value - the `structure` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStructure(value: StructureMapStructureComponent[] | undefined): this {
    if (isDefinedList<StructureMapStructureComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.structure; Provided value array has an element that is not an instance of StructureMapStructureComponent.`;
      assertFhirTypeList<StructureMapStructureComponent>(value, StructureMapStructureComponent, optErrMsg);
      this.structure = value;
    } else {
      this.structure = undefined;
    }
    return this;
  }

  /**
   * Add the provided StructureMapStructureComponent value to the `structure` array property.
   *
   * @param value - the `structure` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStructure(value: StructureMapStructureComponent | undefined): this {
    if (isDefined<StructureMapStructureComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.structure; Provided element is not an instance of StructureMapStructureComponent.`;
      assertFhirType<StructureMapStructureComponent>(value, StructureMapStructureComponent, optErrMsg);
      this.initStructure();
      this.structure?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `structure` property exists and has a value; `false` otherwise
   */
  public hasStructure(): boolean {
    return isDefinedList<StructureMapStructureComponent>(this.structure) && this.structure.some((item: StructureMapStructureComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `structure` property
   */
  private initStructure(): void {
    if(!this.hasStructure()) {
      this.structure = [] as StructureMapStructureComponent[];
    }
  }

  /**
   * @returns the `import_` property value as a CanonicalType array
   */
  public getImportElement(): CanonicalType[] {
    return this.import_ ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `import_` property.
   *
   * @param element - the `import_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setImportElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid StructureMap.import; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.import_ = element;
    } else {
      this.import_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `import_` array property.
   *
   * @param element - the `import_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addImportElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid StructureMap.import; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initImport();
      this.import_?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `import_` property exists and has a value; `false` otherwise
   */
  public hasImportElement(): boolean {
    return isDefinedList<CanonicalType>(this.import_) && this.import_.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `import_` property value as a fhirCanonical array
   */
  public getImport(): fhirCanonical[] {
    this.initImport();
    const importValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.import_!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        importValues.push(value);
      }
    }
    return importValues;
  }

  /**
   * Assigns the provided primitive value array to the `import_` property.
   *
   * @param value - the `import_` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setImport(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const importElements = [] as CanonicalType[];
      for (const importValue of value) {
        const optErrMsg = `Invalid StructureMap.import array item (${String(importValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(importValue, fhirCanonicalSchema, optErrMsg));
        importElements.push(element);
      }
      this.import_ = importElements;
    } else {
      this.import_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `import_` array property.
   *
   * @param value - the `import_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addImport(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid StructureMap.import array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initImport();
      this.addImportElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `import_` property exists and has a value; `false` otherwise
   */
  public hasImport(): boolean {
    return this.hasImportElement();
  }

  /**
   * Initialize the `import_` property
   */
  private initImport(): void {
    if (!this.hasImport()) {
      this.import_ = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `group` property value as a StructureMapGroupComponent array
   */
  public getGroup(): StructureMapGroupComponent[] {
    return this.group ?? ([] as StructureMapGroupComponent[]);
  }

  /**
   * Assigns the provided StructureMapGroupComponent array value to the `group` property.
   *
   * @param value - the `group` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGroup(value: StructureMapGroupComponent[]): this {
    assertIsDefinedList<StructureMapGroupComponent>(value, `StructureMap.group is required`);
    const optErrMsg = `Invalid StructureMap.group; Provided value array has an element that is not an instance of StructureMapGroupComponent.`;
    assertFhirTypeList<StructureMapGroupComponent>(value, StructureMapGroupComponent, optErrMsg);
    this.group = value;
    return this;
  }

  /**
   * Add the provided StructureMapGroupComponent value to the `group` array property.
   *
   * @param value - the `group` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGroup(value: StructureMapGroupComponent | undefined): this {
    if (isDefined<StructureMapGroupComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group; Provided element is not an instance of StructureMapGroupComponent.`;
      assertFhirType<StructureMapGroupComponent>(value, StructureMapGroupComponent, optErrMsg);
      this.initGroup();
      this.group?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `group` property exists and has a value; `false` otherwise
   */
  public hasGroup(): boolean {
    return isDefinedList<StructureMapGroupComponent>(this.group) && this.group.some((item: StructureMapGroupComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `group` property
   */
  private initGroup(): void {
    if(!this.hasGroup()) {
      this.group = [] as StructureMapGroupComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureMap';
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
      this.structure,
      this.import_,
      this.group,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureMap {
    const dest = new StructureMap();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureMap): void {
    super.copyValues(dest);
    dest.url = this.url ? this.url.copy() : null;
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
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
    const jurisdictionList = copyListValues<CodeableConcept>(this.jurisdiction);
    dest.jurisdiction = jurisdictionList.length === 0 ? undefined : jurisdictionList;
    dest.purpose = this.purpose?.copy();
    dest.copyright = this.copyright?.copy();
    const structureList = copyListValues<StructureMapStructureComponent>(this.structure);
    dest.structure = structureList.length === 0 ? undefined : structureList;
    const importList = copyListValues<CanonicalType>(this.import_);
    dest.import_ = importList.length === 0 ? undefined : importList;
    const groupList = copyListValues<StructureMapGroupComponent>(this.group);
    dest.group = groupList.length === 0 ? null : groupList;
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement()!, 'url', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.url`);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasNameElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.name`);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.status`);
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

    if (this.hasStructure()) {
      setFhirBackboneElementListJson(this.getStructure(), 'structure', jsonObj);
    }

    if (this.hasImport()) {
      setFhirPrimitiveListJson(this.getImportElement(), 'import', jsonObj);
    }

    if (this.hasGroup()) {
      setFhirBackboneElementListJson(this.getGroup(), 'group', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * StructureMapStructureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Structure Definition used by this map
 * - **Definition:** A structure definition used by this map. The structure definition may describe instances that are converted, or the instances that are produced.
 * - **Comment:** It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
 *
 * @category Data Models: Resource
 * @see [FHIR StructureMap](http://hl7.org/fhir/StructureDefinition/StructureMap)
 */
export class StructureMapStructureComponent extends BackboneElement implements IBackboneElement {
  constructor(url: CanonicalType | fhirCanonical | null = null, mode: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.mapModelModeEnum = new MapModelModeEnum();

    this.url = null;
    if (isDefined<CanonicalType | fhirCanonical>(url)) {
      if (url instanceof PrimitiveType) {
        this.setUrlElement(url);
      } else {
        this.setUrl(url);
      }
    }

    this.mode = constructorCodeValueAsEnumCodeType<MapModelModeEnum>(
      mode,
      MapModelModeEnum,
      this.mapModelModeEnum,
      'StructureMap.structure.mode',
    );
  }

  /**
   * Parse the provided `StructureMapStructureComponent` JSON to instantiate the StructureMapStructureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureMapStructureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureMapStructureComponent
   * @returns StructureMapStructureComponent data model or undefined for `StructureMapStructureComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureMapStructureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureMapStructureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureMapStructureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setUrlElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'mode';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setModeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'alias';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setAliasElement(datatype);
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * StructureMap.structure.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical reference to structure definition
   * - **Definition:** The canonical reference to the structure.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url: CanonicalType | null;

  /**
   * FHIR CodeSystem: MapModelMode
   *
   * @see {@link MapModelModeEnum }
   */
  private readonly mapModelModeEnum: MapModelModeEnum;

  /**
   * StructureMap.structure.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** source | queried | target | produced
   * - **Definition:** How the referenced structure is used in this mapping.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MapModelModeEnum }
   */
  private mode: EnumCodeType | null;

  /**
   * StructureMap.structure.alias Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for type in this map
   * - **Definition:** The name used for this type in the map.
   * - **Comment:** This is needed if both types have the same name (e.g. version conversion).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private alias?: StringType | undefined;

  /**
   * StructureMap.structure.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Documentation on use of structure
   * - **Definition:** Documentation that describes how the structure is used in the mapping.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `url` property value as a CanonicalType object if defined; else null
   */
  public getUrlElement(): CanonicalType | null {
    return this.url;
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: CanonicalType): this {
    assertIsDefined<CanonicalType>(element, `StructureMap.structure.url is required`);
    const optErrMsg = `Invalid StructureMap.structure.url; Provided value is not an instance of CanonicalType.`;
    assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
    this.url = element;
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrlElement(): boolean {
    return isDefined<CanonicalType>(this.url) && !this.url.isEmpty();
  }

  /**
   * @returns the `url` property value as a fhirCanonical if defined; else null
   */
  public getUrl(): fhirCanonical | null {
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
  public setUrl(value: fhirCanonical): this {
    assertIsDefined<fhirCanonical>(value, `StructureMap.structure.url is required`);
    const optErrMsg = `Invalid StructureMap.structure.url (${String(value)})`;
    this.url = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  public hasUrl(): boolean {
    return this.hasUrlElement();
  }

  /**
   * @returns the `mode` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MapModelModeEnum }
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
   * @see CodeSystem Enumeration: {@link MapModelModeEnum }
   */
  public setModeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `StructureMap.structure.mode is required`);
    const errMsgPrefix = `Invalid StructureMap.structure.mode`;
    assertEnumCodeType<MapModelModeEnum>(enumType, MapModelModeEnum, errMsgPrefix);
    this.mode = enumType;
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
   * @see CodeSystem Enumeration: {@link MapModelModeEnum }
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
   * @see CodeSystem Enumeration: {@link MapModelModeEnum }
   */
  public setModeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `StructureMap.structure.mode is required`);
    const optErrMsg = `Invalid StructureMap.structure.mode; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.mode = new EnumCodeType(element, this.mapModelModeEnum);
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
   * @see CodeSystem Enumeration: {@link MapModelModeEnum }
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
   * @see CodeSystem Enumeration: {@link MapModelModeEnum }
   */
  public setMode(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `StructureMap.structure.mode is required`);
    const optErrMsg = `Invalid StructureMap.structure.mode (${String(value)})`;
    this.mode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.mapModelModeEnum);
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasMode(): boolean {
    return this.hasModeEnumType();
  }

  /**
   * @returns the `alias` property value as a StringType object if defined; else an empty StringType object
   */
  public getAliasElement(): StringType {
    return this.alias ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `alias` property.
   *
   * @param element - the `alias` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAliasElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureMap.structure.alias; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.alias = element;
    } else {
      this.alias = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `alias` property exists and has a value; `false` otherwise
   */
  public hasAliasElement(): boolean {
    return isDefined<StringType>(this.alias) && !this.alias.isEmpty();
  }

  /**
   * @returns the `alias` property value as a fhirString if defined; else undefined
   */
  public getAlias(): fhirString | undefined {
    return this.alias?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `alias` property.
   *
   * @param value - the `alias` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAlias(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureMap.structure.alias (${String(value)})`;
      this.alias = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.alias = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `alias` property exists and has a value; `false` otherwise
   */
  public hasAlias(): boolean {
    return this.hasAliasElement();
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
      const optErrMsg = `Invalid StructureMap.structure.documentation; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureMap.structure.documentation (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureMap.structure';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
      this.mode,
      this.alias,
      this.documentation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureMapStructureComponent {
    const dest = new StructureMapStructureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureMapStructureComponent): void {
    super.copyValues(dest);
    dest.url = this.url ? this.url.copy() : null;
    dest.mode = this.mode ? this.mode.copy() : null;
    dest.alias = this.alias?.copy();
    dest.documentation = this.documentation?.copy();
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCanonical>(this.getUrlElement()!, 'url', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.structure.url`);
    }

    if (this.hasModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getModeElement()!, 'mode', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.structure.mode`);
    }

    if (this.hasAliasElement()) {
      setFhirPrimitiveJson<fhirString>(this.getAliasElement(), 'alias', jsonObj);
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * StructureMapGroupComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Named sections for reader convenience
 * - **Definition:** Organizes the mapping into manageable chunks for human review/ease of maintenance.
 *
 * @category Data Models: Resource
 * @see [FHIR StructureMap](http://hl7.org/fhir/StructureDefinition/StructureMap)
 */
export class StructureMapGroupComponent extends BackboneElement implements IBackboneElement {
  constructor(name: IdType | fhirId | null = null, typeMode: EnumCodeType | CodeType | fhirCode | null = null, input: StructureMapGroupInputComponent[] | null = null, rule: StructureMapGroupRuleComponent[] | null = null) {
    super();

    this.mapGroupTypeModeEnum = new MapGroupTypeModeEnum();

    this.name = null;
    if (isDefined<IdType | fhirId>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }

    this.typeMode = constructorCodeValueAsEnumCodeType<MapGroupTypeModeEnum>(
      typeMode,
      MapGroupTypeModeEnum,
      this.mapGroupTypeModeEnum,
      'StructureMap.group.typeMode',
    );

    this.input = null;
    if (isDefinedList<StructureMapGroupInputComponent>(input)) {
      this.setInput(input);
    }

    this.rule = null;
    if (isDefinedList<StructureMapGroupRuleComponent>(rule)) {
      this.setRule(rule);
    }
  }

  /**
   * Parse the provided `StructureMapGroupComponent` JSON to instantiate the StructureMapGroupComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureMapGroupComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureMapGroupComponent
   * @returns StructureMapGroupComponent data model or undefined for `StructureMapGroupComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureMapGroupComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureMapGroupComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureMapGroupComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'extends';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setExtendsElement(datatype);
    }

    fieldName = 'typeMode';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTypeModeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    fieldName = 'input';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: StructureMapGroupInputComponent | undefined = StructureMapGroupInputComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addInput(component);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'rule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: StructureMapGroupRuleComponent | undefined = StructureMapGroupRuleComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addRule(component);
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
   * StructureMap.group.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-readable label
   * - **Definition:** A unique name for the group for the convenience of human readers.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: IdType | null;

  /**
   * StructureMap.group.extends Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Another group that this group adds rules to
   * - **Definition:** Another group that this group adds rules to.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private extends_?: IdType | undefined;

  /**
   * FHIR CodeSystem: MapGroupTypeMode
   *
   * @see {@link MapGroupTypeModeEnum }
   */
  private readonly mapGroupTypeModeEnum: MapGroupTypeModeEnum;

  /**
   * StructureMap.group.typeMode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** none | types | type-and-types
   * - **Definition:** If this is the default rule set to apply for the source type or this combination of types.
   * - **Comment:** Not applicable if the underlying model is untyped. There can only be one default mapping for any particular type combination.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MapGroupTypeModeEnum }
   */
  private typeMode: EnumCodeType | null;

  /**
   * StructureMap.group.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional description/explanation for group
   * - **Definition:** Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private documentation?: StringType | undefined;

  /**
   * StructureMap.group.input Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Named instance provided when invoking the map
   * - **Definition:** A name assigned to an instance of data. The instance must be provided when the mapping is invoked.
   * - **Comment:** If no inputs are named, then the entry mappings are type based.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private input: StructureMapGroupInputComponent[] | null;

  /**
   * StructureMap.group.rule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Transform Rule from source to target
   * - **Definition:** Transform Rule from source to target.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private rule: StructureMapGroupRuleComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `name` property value as a IdType object if defined; else null
   */
  public getNameElement(): IdType | null {
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
  public setNameElement(element: IdType): this {
    assertIsDefined<IdType>(element, `StructureMap.group.name is required`);
    const optErrMsg = `Invalid StructureMap.group.name; Provided value is not an instance of IdType.`;
    assertFhirType<IdType>(element, IdType, optErrMsg);
    this.name = element;
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<IdType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirId if defined; else null
   */
  public getName(): fhirId | null {
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
  public setName(value: fhirId): this {
    assertIsDefined<fhirId>(value, `StructureMap.group.name is required`);
    const optErrMsg = `Invalid StructureMap.group.name (${String(value)})`;
    this.name = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `extends_` property value as a IdType object if defined; else an empty IdType object
   */
  public getExtendsElement(): IdType {
    return this.extends_ ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `extends_` property.
   *
   * @param element - the `extends_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExtendsElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.extends; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.extends_ = element;
    } else {
      this.extends_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `extends_` property exists and has a value; `false` otherwise
   */
  public hasExtendsElement(): boolean {
    return isDefined<IdType>(this.extends_) && !this.extends_.isEmpty();
  }

  /**
   * @returns the `extends_` property value as a fhirId if defined; else undefined
   */
  public getExtends(): fhirId | undefined {
    return this.extends_?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `extends_` property.
   *
   * @param value - the `extends_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExtends(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid StructureMap.group.extends (${String(value)})`;
      this.extends_ = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.extends_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `extends_` property exists and has a value; `false` otherwise
   */
  public hasExtends(): boolean {
    return this.hasExtendsElement();
  }

  /**
   * @returns the `typeMode` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MapGroupTypeModeEnum }
   */
  public getTypeModeEnumType(): EnumCodeType | null {
    return this.typeMode;
  }

  /**
   * Assigns the provided EnumCodeType value to the `typeMode` property.
   *
   * @param enumType - the `typeMode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MapGroupTypeModeEnum }
   */
  public setTypeModeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `StructureMap.group.typeMode is required`);
    const errMsgPrefix = `Invalid StructureMap.group.typeMode`;
    assertEnumCodeType<MapGroupTypeModeEnum>(enumType, MapGroupTypeModeEnum, errMsgPrefix);
    this.typeMode = enumType;
    return this;
  }

  /**
   * @returns `true` if the `typeMode` property exists and has a value; `false` otherwise
   */
  public hasTypeModeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.typeMode) && !this.typeMode.isEmpty() && this.typeMode.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `typeMode` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MapGroupTypeModeEnum }
   */
  public getTypeModeElement(): CodeType | null {
    if (this.typeMode === null) {
      return null;
    }
    return this.typeMode as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `typeMode` property.
   *
   * @param element - the `typeMode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MapGroupTypeModeEnum }
   */
  public setTypeModeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `StructureMap.group.typeMode is required`);
    const optErrMsg = `Invalid StructureMap.group.typeMode; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.typeMode = new EnumCodeType(element, this.mapGroupTypeModeEnum);
    return this;
  }

  /**
   * @returns `true` if the `typeMode` property exists and has a value; `false` otherwise
   */
  public hasTypeModeElement(): boolean {
    return this.hasTypeModeEnumType();
  }

  /**
   * @returns the `typeMode` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MapGroupTypeModeEnum }
   */
  public getTypeMode(): fhirCode | null {
    if (this.typeMode === null) {
      return null;
    }
    return this.typeMode.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `typeMode` property.
   *
   * @param value - the `typeMode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link MapGroupTypeModeEnum }
   */
  public setTypeMode(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `StructureMap.group.typeMode is required`);
    const optErrMsg = `Invalid StructureMap.group.typeMode (${String(value)})`;
    this.typeMode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.mapGroupTypeModeEnum);
    return this;
  }

  /**
   * @returns `true` if the `typeMode` property exists and has a value; `false` otherwise
   */
  public hasTypeMode(): boolean {
    return this.hasTypeModeEnumType();
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
      const optErrMsg = `Invalid StructureMap.group.documentation; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureMap.group.documentation (${String(value)})`;
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
   * @returns the `input` property value as a StructureMapGroupInputComponent array
   */
  public getInput(): StructureMapGroupInputComponent[] {
    return this.input ?? ([] as StructureMapGroupInputComponent[]);
  }

  /**
   * Assigns the provided StructureMapGroupInputComponent array value to the `input` property.
   *
   * @param value - the `input` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInput(value: StructureMapGroupInputComponent[]): this {
    assertIsDefinedList<StructureMapGroupInputComponent>(value, `StructureMap.group.input is required`);
    const optErrMsg = `Invalid StructureMap.group.input; Provided value array has an element that is not an instance of StructureMapGroupInputComponent.`;
    assertFhirTypeList<StructureMapGroupInputComponent>(value, StructureMapGroupInputComponent, optErrMsg);
    this.input = value;
    return this;
  }

  /**
   * Add the provided StructureMapGroupInputComponent value to the `input` array property.
   *
   * @param value - the `input` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInput(value: StructureMapGroupInputComponent | undefined): this {
    if (isDefined<StructureMapGroupInputComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group.input; Provided element is not an instance of StructureMapGroupInputComponent.`;
      assertFhirType<StructureMapGroupInputComponent>(value, StructureMapGroupInputComponent, optErrMsg);
      this.initInput();
      this.input?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `input` property exists and has a value; `false` otherwise
   */
  public hasInput(): boolean {
    return isDefinedList<StructureMapGroupInputComponent>(this.input) && this.input.some((item: StructureMapGroupInputComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `input` property
   */
  private initInput(): void {
    if(!this.hasInput()) {
      this.input = [] as StructureMapGroupInputComponent[];
    }
  }

  /**
   * @returns the `rule` property value as a StructureMapGroupRuleComponent array
   */
  public getRule(): StructureMapGroupRuleComponent[] {
    return this.rule ?? ([] as StructureMapGroupRuleComponent[]);
  }

  /**
   * Assigns the provided StructureMapGroupRuleComponent array value to the `rule` property.
   *
   * @param value - the `rule` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRule(value: StructureMapGroupRuleComponent[]): this {
    assertIsDefinedList<StructureMapGroupRuleComponent>(value, `StructureMap.group.rule is required`);
    const optErrMsg = `Invalid StructureMap.group.rule; Provided value array has an element that is not an instance of StructureMapGroupRuleComponent.`;
    assertFhirTypeList<StructureMapGroupRuleComponent>(value, StructureMapGroupRuleComponent, optErrMsg);
    this.rule = value;
    return this;
  }

  /**
   * Add the provided StructureMapGroupRuleComponent value to the `rule` array property.
   *
   * @param value - the `rule` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRule(value: StructureMapGroupRuleComponent | undefined): this {
    if (isDefined<StructureMapGroupRuleComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule; Provided element is not an instance of StructureMapGroupRuleComponent.`;
      assertFhirType<StructureMapGroupRuleComponent>(value, StructureMapGroupRuleComponent, optErrMsg);
      this.initRule();
      this.rule?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `rule` property exists and has a value; `false` otherwise
   */
  public hasRule(): boolean {
    return isDefinedList<StructureMapGroupRuleComponent>(this.rule) && this.rule.some((item: StructureMapGroupRuleComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `rule` property
   */
  private initRule(): void {
    if(!this.hasRule()) {
      this.rule = [] as StructureMapGroupRuleComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureMap.group';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.extends_,
      this.typeMode,
      this.documentation,
      this.input,
      this.rule,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureMapGroupComponent {
    const dest = new StructureMapGroupComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureMapGroupComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.extends_ = this.extends_?.copy();
    dest.typeMode = this.typeMode ? this.typeMode.copy() : null;
    dest.documentation = this.documentation?.copy();
    const inputList = copyListValues<StructureMapGroupInputComponent>(this.input);
    dest.input = inputList.length === 0 ? null : inputList;
    const ruleList = copyListValues<StructureMapGroupRuleComponent>(this.rule);
    dest.rule = ruleList.length === 0 ? null : ruleList;
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
      setFhirPrimitiveJson<fhirId>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group.name`);
    }

    if (this.hasExtendsElement()) {
      setFhirPrimitiveJson<fhirId>(this.getExtendsElement(), 'extends', jsonObj);
    }

    if (this.hasTypeModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeModeElement()!, 'typeMode', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group.typeMode`);
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    if (this.hasInput()) {
      setFhirBackboneElementListJson(this.getInput(), 'input', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group.input`);
    }

    if (this.hasRule()) {
      setFhirBackboneElementListJson(this.getRule(), 'rule', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group.rule`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * StructureMapGroupInputComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Named instance provided when invoking the map
 * - **Definition:** A name assigned to an instance of data. The instance must be provided when the mapping is invoked.
 * - **Comment:** If no inputs are named, then the entry mappings are type based.
 *
 * @category Data Models: Resource
 * @see [FHIR StructureMap](http://hl7.org/fhir/StructureDefinition/StructureMap)
 */
export class StructureMapGroupInputComponent extends BackboneElement implements IBackboneElement {
  constructor(name: IdType | fhirId | null = null, mode: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.mapInputModeEnum = new MapInputModeEnum();

    this.name = null;
    if (isDefined<IdType | fhirId>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }

    this.mode = constructorCodeValueAsEnumCodeType<MapInputModeEnum>(
      mode,
      MapInputModeEnum,
      this.mapInputModeEnum,
      'StructureMap.group.input.mode',
    );
  }

  /**
   * Parse the provided `StructureMapGroupInputComponent` JSON to instantiate the StructureMapGroupInputComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureMapGroupInputComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureMapGroupInputComponent
   * @returns StructureMapGroupInputComponent data model or undefined for `StructureMapGroupInputComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureMapGroupInputComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureMapGroupInputComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureMapGroupInputComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'mode';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setModeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * StructureMap.group.input.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this instance of data
   * - **Definition:** Name for this instance of data.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: IdType | null;

  /**
   * StructureMap.group.input.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type for this instance of data
   * - **Definition:** Type for this instance of data.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: StringType | undefined;

  /**
   * FHIR CodeSystem: MapInputMode
   *
   * @see {@link MapInputModeEnum }
   */
  private readonly mapInputModeEnum: MapInputModeEnum;

  /**
   * StructureMap.group.input.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** source | target
   * - **Definition:** Mode for this instance of data.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MapInputModeEnum }
   */
  private mode: EnumCodeType | null;

  /**
   * StructureMap.group.input.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Documentation for this instance of data
   * - **Definition:** Documentation for this instance of data.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `name` property value as a IdType object if defined; else null
   */
  public getNameElement(): IdType | null {
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
  public setNameElement(element: IdType): this {
    assertIsDefined<IdType>(element, `StructureMap.group.input.name is required`);
    const optErrMsg = `Invalid StructureMap.group.input.name; Provided value is not an instance of IdType.`;
    assertFhirType<IdType>(element, IdType, optErrMsg);
    this.name = element;
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<IdType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirId if defined; else null
   */
  public getName(): fhirId | null {
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
  public setName(value: fhirId): this {
    assertIsDefined<fhirId>(value, `StructureMap.group.input.name is required`);
    const optErrMsg = `Invalid StructureMap.group.input.name (${String(value)})`;
    this.name = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `type_` property value as a StringType object if defined; else an empty StringType object
   */
  public getTypeElement(): StringType {
    return this.type_ ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTypeElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.input.type; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.type_ = element;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return isDefined<StringType>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `type_` property value as a fhirString if defined; else undefined
   */
  public getType(): fhirString | undefined {
    return this.type_?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `type_` property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setType(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureMap.group.input.type (${String(value)})`;
      this.type_ = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeElement();
  }

  /**
   * @returns the `mode` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MapInputModeEnum }
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
   * @see CodeSystem Enumeration: {@link MapInputModeEnum }
   */
  public setModeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `StructureMap.group.input.mode is required`);
    const errMsgPrefix = `Invalid StructureMap.group.input.mode`;
    assertEnumCodeType<MapInputModeEnum>(enumType, MapInputModeEnum, errMsgPrefix);
    this.mode = enumType;
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
   * @see CodeSystem Enumeration: {@link MapInputModeEnum }
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
   * @see CodeSystem Enumeration: {@link MapInputModeEnum }
   */
  public setModeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `StructureMap.group.input.mode is required`);
    const optErrMsg = `Invalid StructureMap.group.input.mode; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.mode = new EnumCodeType(element, this.mapInputModeEnum);
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
   * @see CodeSystem Enumeration: {@link MapInputModeEnum }
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
   * @see CodeSystem Enumeration: {@link MapInputModeEnum }
   */
  public setMode(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `StructureMap.group.input.mode is required`);
    const optErrMsg = `Invalid StructureMap.group.input.mode (${String(value)})`;
    this.mode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.mapInputModeEnum);
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasMode(): boolean {
    return this.hasModeEnumType();
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
      const optErrMsg = `Invalid StructureMap.group.input.documentation; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureMap.group.input.documentation (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureMap.group.input';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.type_,
      this.mode,
      this.documentation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureMapGroupInputComponent {
    const dest = new StructureMapGroupInputComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureMapGroupInputComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.type_ = this.type_?.copy();
    dest.mode = this.mode ? this.mode.copy() : null;
    dest.documentation = this.documentation?.copy();
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
      setFhirPrimitiveJson<fhirId>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group.input.name`);
    }

    if (this.hasTypeElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTypeElement(), 'type', jsonObj);
    }

    if (this.hasModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getModeElement()!, 'mode', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group.input.mode`);
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * StructureMapGroupRuleComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Transform Rule from source to target
 * - **Definition:** Transform Rule from source to target.
 *
 * @category Data Models: Resource
 * @see [FHIR StructureMap](http://hl7.org/fhir/StructureDefinition/StructureMap)
 */
export class StructureMapGroupRuleComponent extends BackboneElement implements IBackboneElement {
  constructor(name: IdType | fhirId | null = null, source: StructureMapGroupRuleSourceComponent[] | null = null) {
    super();

    this.name = null;
    if (isDefined<IdType | fhirId>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }

    this.source = null;
    if (isDefinedList<StructureMapGroupRuleSourceComponent>(source)) {
      this.setSource(source);
    }
  }

  /**
   * Parse the provided `StructureMapGroupRuleComponent` JSON to instantiate the StructureMapGroupRuleComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureMapGroupRuleComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureMapGroupRuleComponent
   * @returns StructureMapGroupRuleComponent data model or undefined for `StructureMapGroupRuleComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureMapGroupRuleComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureMapGroupRuleComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureMapGroupRuleComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: StructureMapGroupRuleSourceComponent | undefined = StructureMapGroupRuleSourceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addSource(component);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: StructureMapGroupRuleTargetComponent | undefined = StructureMapGroupRuleTargetComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTarget(component);
        }
      });
    }

    fieldName = 'rule';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: StructureMapGroupRuleComponent | undefined = StructureMapGroupRuleComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRule(component);
        }
      });
    }

    fieldName = 'dependent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: StructureMapGroupRuleDependentComponent | undefined = StructureMapGroupRuleDependentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDependent(component);
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

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * StructureMap.group.rule.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the rule for internal references
   * - **Definition:** Name of the rule for internal references.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: IdType | null;

  /**
   * StructureMap.group.rule.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Source inputs to the mapping
   * - **Definition:** Source inputs to the mapping.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source: StructureMapGroupRuleSourceComponent[] | null;

  /**
   * StructureMap.group.rule.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Content to create because of this mapping rule
   * - **Definition:** Content to create because of this mapping rule.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private target?: StructureMapGroupRuleTargetComponent[] | undefined;

  /**
   * StructureMap.group.rule.rule Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Rules contained in this rule
   * - **Definition:** Rules contained in this rule.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private rule?: StructureMapGroupRuleComponent[] | undefined;

  /**
   * StructureMap.group.rule.dependent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Which other rules to apply in the context of this rule
   * - **Definition:** Which other rules to apply in the context of this rule.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dependent?: StructureMapGroupRuleDependentComponent[] | undefined;

  /**
   * StructureMap.group.rule.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Documentation for this instance of data
   * - **Definition:** Documentation for this instance of data.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `name` property value as a IdType object if defined; else null
   */
  public getNameElement(): IdType | null {
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
  public setNameElement(element: IdType): this {
    assertIsDefined<IdType>(element, `StructureMap.group.rule.name is required`);
    const optErrMsg = `Invalid StructureMap.group.rule.name; Provided value is not an instance of IdType.`;
    assertFhirType<IdType>(element, IdType, optErrMsg);
    this.name = element;
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<IdType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirId if defined; else null
   */
  public getName(): fhirId | null {
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
  public setName(value: fhirId): this {
    assertIsDefined<fhirId>(value, `StructureMap.group.rule.name is required`);
    const optErrMsg = `Invalid StructureMap.group.rule.name (${String(value)})`;
    this.name = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `source` property value as a StructureMapGroupRuleSourceComponent array
   */
  public getSource(): StructureMapGroupRuleSourceComponent[] {
    return this.source ?? ([] as StructureMapGroupRuleSourceComponent[]);
  }

  /**
   * Assigns the provided StructureMapGroupRuleSourceComponent array value to the `source` property.
   *
   * @param value - the `source` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSource(value: StructureMapGroupRuleSourceComponent[]): this {
    assertIsDefinedList<StructureMapGroupRuleSourceComponent>(value, `StructureMap.group.rule.source is required`);
    const optErrMsg = `Invalid StructureMap.group.rule.source; Provided value array has an element that is not an instance of StructureMapGroupRuleSourceComponent.`;
    assertFhirTypeList<StructureMapGroupRuleSourceComponent>(value, StructureMapGroupRuleSourceComponent, optErrMsg);
    this.source = value;
    return this;
  }

  /**
   * Add the provided StructureMapGroupRuleSourceComponent value to the `source` array property.
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSource(value: StructureMapGroupRuleSourceComponent | undefined): this {
    if (isDefined<StructureMapGroupRuleSourceComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source; Provided element is not an instance of StructureMapGroupRuleSourceComponent.`;
      assertFhirType<StructureMapGroupRuleSourceComponent>(value, StructureMapGroupRuleSourceComponent, optErrMsg);
      this.initSource();
      this.source?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefinedList<StructureMapGroupRuleSourceComponent>(this.source) && this.source.some((item: StructureMapGroupRuleSourceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `source` property
   */
  private initSource(): void {
    if(!this.hasSource()) {
      this.source = [] as StructureMapGroupRuleSourceComponent[];
    }
  }

  /**
   * @returns the `target` property value as a StructureMapGroupRuleTargetComponent array
   */
  public getTarget(): StructureMapGroupRuleTargetComponent[] {
    return this.target ?? ([] as StructureMapGroupRuleTargetComponent[]);
  }

  /**
   * Assigns the provided StructureMapGroupRuleTargetComponent array value to the `target` property.
   *
   * @param value - the `target` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTarget(value: StructureMapGroupRuleTargetComponent[] | undefined): this {
    if (isDefinedList<StructureMapGroupRuleTargetComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target; Provided value array has an element that is not an instance of StructureMapGroupRuleTargetComponent.`;
      assertFhirTypeList<StructureMapGroupRuleTargetComponent>(value, StructureMapGroupRuleTargetComponent, optErrMsg);
      this.target = value;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * Add the provided StructureMapGroupRuleTargetComponent value to the `target` array property.
   *
   * @param value - the `target` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTarget(value: StructureMapGroupRuleTargetComponent | undefined): this {
    if (isDefined<StructureMapGroupRuleTargetComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target; Provided element is not an instance of StructureMapGroupRuleTargetComponent.`;
      assertFhirType<StructureMapGroupRuleTargetComponent>(value, StructureMapGroupRuleTargetComponent, optErrMsg);
      this.initTarget();
      this.target?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefinedList<StructureMapGroupRuleTargetComponent>(this.target) && this.target.some((item: StructureMapGroupRuleTargetComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `target` property
   */
  private initTarget(): void {
    if(!this.hasTarget()) {
      this.target = [] as StructureMapGroupRuleTargetComponent[];
    }
  }

  /**
   * @returns the `rule` property value as a StructureMapGroupRuleComponent array
   */
  public getRule(): StructureMapGroupRuleComponent[] {
    return this.rule ?? ([] as StructureMapGroupRuleComponent[]);
  }

  /**
   * Assigns the provided StructureMapGroupRuleComponent array value to the `rule` property.
   *
   * @param value - the `rule` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRule(value: StructureMapGroupRuleComponent[] | undefined): this {
    if (isDefinedList<StructureMapGroupRuleComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.rule; Provided value array has an element that is not an instance of StructureMapGroupRuleComponent.`;
      assertFhirTypeList<StructureMapGroupRuleComponent>(value, StructureMapGroupRuleComponent, optErrMsg);
      this.rule = value;
    } else {
      this.rule = undefined;
    }
    return this;
  }

  /**
   * Add the provided StructureMapGroupRuleComponent value to the `rule` array property.
   *
   * @param value - the `rule` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRule(value: StructureMapGroupRuleComponent | undefined): this {
    if (isDefined<StructureMapGroupRuleComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.rule; Provided element is not an instance of StructureMapGroupRuleComponent.`;
      assertFhirType<StructureMapGroupRuleComponent>(value, StructureMapGroupRuleComponent, optErrMsg);
      this.initRule();
      this.rule?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `rule` property exists and has a value; `false` otherwise
   */
  public hasRule(): boolean {
    return isDefinedList<StructureMapGroupRuleComponent>(this.rule) && this.rule.some((item: StructureMapGroupRuleComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `rule` property
   */
  private initRule(): void {
    if(!this.hasRule()) {
      this.rule = [] as StructureMapGroupRuleComponent[];
    }
  }

  /**
   * @returns the `dependent` property value as a StructureMapGroupRuleDependentComponent array
   */
  public getDependent(): StructureMapGroupRuleDependentComponent[] {
    return this.dependent ?? ([] as StructureMapGroupRuleDependentComponent[]);
  }

  /**
   * Assigns the provided StructureMapGroupRuleDependentComponent array value to the `dependent` property.
   *
   * @param value - the `dependent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDependent(value: StructureMapGroupRuleDependentComponent[] | undefined): this {
    if (isDefinedList<StructureMapGroupRuleDependentComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.dependent; Provided value array has an element that is not an instance of StructureMapGroupRuleDependentComponent.`;
      assertFhirTypeList<StructureMapGroupRuleDependentComponent>(value, StructureMapGroupRuleDependentComponent, optErrMsg);
      this.dependent = value;
    } else {
      this.dependent = undefined;
    }
    return this;
  }

  /**
   * Add the provided StructureMapGroupRuleDependentComponent value to the `dependent` array property.
   *
   * @param value - the `dependent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDependent(value: StructureMapGroupRuleDependentComponent | undefined): this {
    if (isDefined<StructureMapGroupRuleDependentComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.dependent; Provided element is not an instance of StructureMapGroupRuleDependentComponent.`;
      assertFhirType<StructureMapGroupRuleDependentComponent>(value, StructureMapGroupRuleDependentComponent, optErrMsg);
      this.initDependent();
      this.dependent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dependent` property exists and has a value; `false` otherwise
   */
  public hasDependent(): boolean {
    return isDefinedList<StructureMapGroupRuleDependentComponent>(this.dependent) && this.dependent.some((item: StructureMapGroupRuleDependentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dependent` property
   */
  private initDependent(): void {
    if(!this.hasDependent()) {
      this.dependent = [] as StructureMapGroupRuleDependentComponent[];
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
      const optErrMsg = `Invalid StructureMap.group.rule.documentation; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureMap.group.rule.documentation (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureMap.group.rule';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.source,
      this.target,
      this.rule,
      this.dependent,
      this.documentation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureMapGroupRuleComponent {
    const dest = new StructureMapGroupRuleComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureMapGroupRuleComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    const sourceList = copyListValues<StructureMapGroupRuleSourceComponent>(this.source);
    dest.source = sourceList.length === 0 ? null : sourceList;
    const targetList = copyListValues<StructureMapGroupRuleTargetComponent>(this.target);
    dest.target = targetList.length === 0 ? undefined : targetList;
    const ruleList = copyListValues<StructureMapGroupRuleComponent>(this.rule);
    dest.rule = ruleList.length === 0 ? undefined : ruleList;
    const dependentList = copyListValues<StructureMapGroupRuleDependentComponent>(this.dependent);
    dest.dependent = dependentList.length === 0 ? undefined : dependentList;
    dest.documentation = this.documentation?.copy();
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
      setFhirPrimitiveJson<fhirId>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group.rule.name`);
    }

    if (this.hasSource()) {
      setFhirBackboneElementListJson(this.getSource(), 'source', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group.rule.source`);
    }

    if (this.hasTarget()) {
      setFhirBackboneElementListJson(this.getTarget(), 'target', jsonObj);
    }

    if (this.hasRule()) {
      setFhirBackboneElementListJson(this.getRule(), 'rule', jsonObj);
    }

    if (this.hasDependent()) {
      setFhirBackboneElementListJson(this.getDependent(), 'dependent', jsonObj);
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * StructureMapGroupRuleSourceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Source inputs to the mapping
 * - **Definition:** Source inputs to the mapping.
 *
 * @category Data Models: Resource
 * @see [FHIR StructureMap](http://hl7.org/fhir/StructureDefinition/StructureMap)
 */
export class StructureMapGroupRuleSourceComponent extends BackboneElement implements IBackboneElement {
  constructor(context: IdType | fhirId | null = null) {
    super();

    this.mapSourceListModeEnum = new MapSourceListModeEnum();

    this.context = null;
    if (isDefined<IdType | fhirId>(context)) {
      if (context instanceof PrimitiveType) {
        this.setContextElement(context);
      } else {
        this.setContext(context);
      }
    }
  }

  /**
   * Parse the provided `StructureMapGroupRuleSourceComponent` JSON to instantiate the StructureMapGroupRuleSourceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureMapGroupRuleSourceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureMapGroupRuleSourceComponent
   * @returns StructureMapGroupRuleSourceComponent data model or undefined for `StructureMapGroupRuleSourceComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureMapGroupRuleSourceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureMapGroupRuleSourceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureMapGroupRuleSourceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = StructureMapGroupRuleSourceComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for StructureMapGroupRuleSourceComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'context';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setContextElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'defaultValue[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const defaultValue: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDefaultValue(defaultValue);

    fieldName = 'element';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setElementElement(datatype);
    }

    fieldName = 'listMode';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setListModeElement(datatype);
    }

    fieldName = 'variable';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setVariableElement(datatype);
    }

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setConditionElement(datatype);
    }

    fieldName = 'check';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCheckElement(datatype);
    }

    fieldName = 'logMessage';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLogMessageElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * StructureMap.group.rule.source.context Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type or variable this rule applies to
   * - **Definition:** Type or variable this rule applies to.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private context: IdType | null;

  /**
   * StructureMap.group.rule.source.min Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specified minimum cardinality
   * - **Definition:** Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private min?: IntegerType | undefined;

  /**
   * StructureMap.group.rule.source.max Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specified maximum cardinality (number or *)
   * - **Definition:** Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it\'s the default value).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private max?: StringType | undefined;

  /**
   * StructureMap.group.rule.source.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Rule only applies if source has this type
   * - **Definition:** Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: StringType | undefined;

  /**
   * StructureMap.group.rule.source.defaultValue[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('StructureMap.group.rule.source.defaultValue[x]', ['base64Binary','boolean','canonical','code','date','dateTime','decimal','id','instant','integer','markdown','oid','positiveInt','string','time','unsignedInt','uri','url','uuid','Address','Age','Annotation','Attachment','CodeableConcept','Coding','ContactPoint','Count','Distance','Duration','HumanName','Identifier','Money','Period','Quantity','Range','Ratio','Reference','SampledData','Signature','Timing','ContactDetail','Contributor','DataRequirement','Expression','ParameterDefinition','RelatedArtifact','TriggerDefinition','UsageContext','Dosage','Meta',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Default value if no value exists
   * - **Definition:** A value to use if there is no existing value in the source object.
   * - **Comment:** If there\'s a default value on an item that can repeat, it will only be used once.
   * - **FHIR Types:**
   *     'base64Binary',
   *     'boolean',
   *     'canonical',
   *     'code',
   *     'date',
   *     'dateTime',
   *     'decimal',
   *     'id',
   *     'instant',
   *     'integer',
   *     'markdown',
   *     'oid',
   *     'positiveInt',
   *     'string',
   *     'time',
   *     'unsignedInt',
   *     'uri',
   *     'url',
   *     'uuid',
   *     'Address',
   *     'Age',
   *     'Annotation',
   *     'Attachment',
   *     'CodeableConcept',
   *     'Coding',
   *     'ContactPoint',
   *     'Count',
   *     'Distance',
   *     'Duration',
   *     'HumanName',
   *     'Identifier',
   *     'Money',
   *     'Period',
   *     'Quantity',
   *     'Range',
   *     'Ratio',
   *     'Reference',
   *     'SampledData',
   *     'Signature',
   *     'Timing',
   *     'ContactDetail',
   *     'Contributor',
   *     'DataRequirement',
   *     'Expression',
   *     'ParameterDefinition',
   *     'RelatedArtifact',
   *     'TriggerDefinition',
   *     'UsageContext',
   *     'Dosage',
   *     'Meta',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('StructureMap.group.rule.source.defaultValue[x]',[
    'base64Binary',
    'boolean',
    'canonical',
    'code',
    'date',
    'dateTime',
    'decimal',
    'id',
    'instant',
    'integer',
    'markdown',
    'oid',
    'positiveInt',
    'string',
    'time',
    'unsignedInt',
    'uri',
    'url',
    'uuid',
    'Address',
    'Age',
    'Annotation',
    'Attachment',
    'CodeableConcept',
    'Coding',
    'ContactPoint',
    'Count',
    'Distance',
    'Duration',
    'HumanName',
    'Identifier',
    'Money',
    'Period',
    'Quantity',
    'Range',
    'Ratio',
    'Reference',
    'SampledData',
    'Signature',
    'Timing',
    'ContactDetail',
    'Contributor',
    'DataRequirement',
    'Expression',
    'ParameterDefinition',
    'RelatedArtifact',
    'TriggerDefinition',
    'UsageContext',
    'Dosage',
    'Meta',
  ])
  private defaultValue?: IDataType | undefined;

  /**
   * StructureMap.group.rule.source.element Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Optional field for this source
   * - **Definition:** Optional field for this source.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private element?: StringType | undefined;

  /**
   * FHIR CodeSystem: MapSourceListMode
   *
   * @see {@link MapSourceListModeEnum }
   */
  private readonly mapSourceListModeEnum: MapSourceListModeEnum;

  /**
   * StructureMap.group.rule.source.listMode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** first | not_first | last | not_last | only_one
   * - **Definition:** How to handle the list mode for this element.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MapSourceListModeEnum }
   */
  private listMode?: EnumCodeType | undefined;

  /**
   * StructureMap.group.rule.source.variable Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Named context for field, if a field is specified
   * - **Definition:** Named context for field, if a field is specified.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private variable?: IdType | undefined;

  /**
   * StructureMap.group.rule.source.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIRPath expression  - must be true or the rule does not apply
   * - **Definition:** FHIRPath expression  - must be true or the rule does not apply.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private condition?: StringType | undefined;

  /**
   * StructureMap.group.rule.source.check Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIRPath expression  - must be true or the mapping engine throws an error instead of completing
   * - **Definition:** FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private check?: StringType | undefined;

  /**
   * StructureMap.group.rule.source.logMessage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Message to put in log if source exists (FHIRPath)
   * - **Definition:** A FHIRPath expression which specifies a message to put in the transform log when content matching the source rule is found.
   * - **Comment:** This is typically used for recording that something Is not transformed to the target for some reason.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private logMessage?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `context` property value as a IdType object if defined; else null
   */
  public getContextElement(): IdType | null {
    return this.context;
  }

  /**
   * Assigns the provided PrimitiveType value to the `context` property.
   *
   * @param element - the `context` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContextElement(element: IdType): this {
    assertIsDefined<IdType>(element, `StructureMap.group.rule.source.context is required`);
    const optErrMsg = `Invalid StructureMap.group.rule.source.context; Provided value is not an instance of IdType.`;
    assertFhirType<IdType>(element, IdType, optErrMsg);
    this.context = element;
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContextElement(): boolean {
    return isDefined<IdType>(this.context) && !this.context.isEmpty();
  }

  /**
   * @returns the `context` property value as a fhirId if defined; else null
   */
  public getContext(): fhirId | null {
    if (this.context?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.context.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `context` property.
   *
   * @param value - the `context` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContext(value: fhirId): this {
    assertIsDefined<fhirId>(value, `StructureMap.group.rule.source.context is required`);
    const optErrMsg = `Invalid StructureMap.group.rule.source.context (${String(value)})`;
    this.context = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContext(): boolean {
    return this.hasContextElement();
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
      const optErrMsg = `Invalid StructureMap.group.rule.source.min; Provided element is not an instance of IntegerType.`;
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
      const optErrMsg = `Invalid StructureMap.group.rule.source.min (${String(value)})`;
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
      const optErrMsg = `Invalid StructureMap.group.rule.source.max; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureMap.group.rule.source.max (${String(value)})`;
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
   * @returns the `type_` property value as a StringType object if defined; else an empty StringType object
   */
  public getTypeElement(): StringType {
    return this.type_ ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTypeElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.type; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.type_ = element;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return isDefined<StringType>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `type_` property value as a fhirString if defined; else undefined
   */
  public getType(): fhirString | undefined {
    return this.type_?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `type_` property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setType(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.type (${String(value)})`;
      this.type_ = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeElement();
  }

  /**
   * @returns the `defaultValue` property value as a DataType object if defined; else undefined
   */
  public getDefaultValue(): IDataType | undefined {
    return this.defaultValue;
  }

  /**
   * Assigns the provided DataType object value to the `defaultValue` property.
   *
   * @decorator `@ChoiceDataTypes('StructureMap.group.rule.source.defaultValue[x]')`
   *
   * @param value - the `defaultValue` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('StructureMap.group.rule.source.defaultValue[x]')
  public setDefaultValue(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.defaultValue = value;
    } else {
      this.defaultValue = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `defaultValue` property exists and has a value; `false` otherwise
   */
  public hasDefaultValue(): boolean {
    return isDefined<IDataType>(this.defaultValue) && !this.defaultValue.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `defaultValue` property value as a Base64BinaryType object if defined; else undefined
   */
  public getDefaultValueBase64BinaryType(): Base64BinaryType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Base64BinaryType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Base64BinaryType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Base64BinaryType and has a value; `false` otherwise
   */
  public hasDefaultValueBase64BinaryType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Base64BinaryType;
  }

  /**
   * @returns the `defaultValue` property value as a BooleanType object if defined; else undefined
   */
  public getDefaultValueBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected BooleanType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasDefaultValueBooleanType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof BooleanType;
  }

  /**
   * @returns the `defaultValue` property value as a CanonicalType object if defined; else undefined
   */
  public getDefaultValueCanonicalType(): CanonicalType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected CanonicalType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasDefaultValueCanonicalType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof CanonicalType;
  }

  /**
   * @returns the `defaultValue` property value as a CodeType object if defined; else undefined
   */
  public getDefaultValueCodeType(): CodeType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof CodeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected CodeType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a CodeType and has a value; `false` otherwise
   */
  public hasDefaultValueCodeType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof CodeType;
  }

  /**
   * @returns the `defaultValue` property value as a DateType object if defined; else undefined
   */
  public getDefaultValueDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected DateType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a DateType and has a value; `false` otherwise
   */
  public hasDefaultValueDateType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof DateType;
  }

  /**
   * @returns the `defaultValue` property value as a DateTimeType object if defined; else undefined
   */
  public getDefaultValueDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected DateTimeType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasDefaultValueDateTimeType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof DateTimeType;
  }

  /**
   * @returns the `defaultValue` property value as a DecimalType object if defined; else undefined
   */
  public getDefaultValueDecimalType(): DecimalType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected DecimalType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasDefaultValueDecimalType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof DecimalType;
  }

  /**
   * @returns the `defaultValue` property value as a IdType object if defined; else undefined
   */
  public getDefaultValueIdType(): IdType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof IdType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected IdType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a IdType and has a value; `false` otherwise
   */
  public hasDefaultValueIdType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof IdType;
  }

  /**
   * @returns the `defaultValue` property value as a InstantType object if defined; else undefined
   */
  public getDefaultValueInstantType(): InstantType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof InstantType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected InstantType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a InstantType and has a value; `false` otherwise
   */
  public hasDefaultValueInstantType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof InstantType;
  }

  /**
   * @returns the `defaultValue` property value as a IntegerType object if defined; else undefined
   */
  public getDefaultValueIntegerType(): IntegerType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected IntegerType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasDefaultValueIntegerType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof IntegerType;
  }

  /**
   * @returns the `defaultValue` property value as a MarkdownType object if defined; else undefined
   */
  public getDefaultValueMarkdownType(): MarkdownType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof MarkdownType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected MarkdownType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a MarkdownType and has a value; `false` otherwise
   */
  public hasDefaultValueMarkdownType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof MarkdownType;
  }

  /**
   * @returns the `defaultValue` property value as a OidType object if defined; else undefined
   */
  public getDefaultValueOidType(): OidType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof OidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected OidType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a OidType and has a value; `false` otherwise
   */
  public hasDefaultValueOidType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof OidType;
  }

  /**
   * @returns the `defaultValue` property value as a PositiveIntType object if defined; else undefined
   */
  public getDefaultValuePositiveIntType(): PositiveIntType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected PositiveIntType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasDefaultValuePositiveIntType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof PositiveIntType;
  }

  /**
   * @returns the `defaultValue` property value as a StringType object if defined; else undefined
   */
  public getDefaultValueStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected StringType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a StringType and has a value; `false` otherwise
   */
  public hasDefaultValueStringType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof StringType;
  }

  /**
   * @returns the `defaultValue` property value as a TimeType object if defined; else undefined
   */
  public getDefaultValueTimeType(): TimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected TimeType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasDefaultValueTimeType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof TimeType;
  }

  /**
   * @returns the `defaultValue` property value as a UnsignedIntType object if defined; else undefined
   */
  public getDefaultValueUnsignedIntType(): UnsignedIntType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof UnsignedIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected UnsignedIntType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a UnsignedIntType and has a value; `false` otherwise
   */
  public hasDefaultValueUnsignedIntType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof UnsignedIntType;
  }

  /**
   * @returns the `defaultValue` property value as a UriType object if defined; else undefined
   */
  public getDefaultValueUriType(): UriType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected UriType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a UriType and has a value; `false` otherwise
   */
  public hasDefaultValueUriType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof UriType;
  }

  /**
   * @returns the `defaultValue` property value as a UrlType object if defined; else undefined
   */
  public getDefaultValueUrlType(): UrlType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof UrlType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected UrlType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a UrlType and has a value; `false` otherwise
   */
  public hasDefaultValueUrlType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof UrlType;
  }

  /**
   * @returns the `defaultValue` property value as a UuidType object if defined; else undefined
   */
  public getDefaultValueUuidType(): UuidType | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof UuidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected UuidType but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a UuidType and has a value; `false` otherwise
   */
  public hasDefaultValueUuidType(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof UuidType;
  }

  /**
   * @returns the `defaultValue` property value as a Address object if defined; else undefined
   */
  public getDefaultValueAddress(): Address | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Address)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Address but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Address and has a value; `false` otherwise
   */
  public hasDefaultValueAddress(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Address;
  }

  /**
   * @returns the `defaultValue` property value as a Age object if defined; else undefined
   */
  public getDefaultValueAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Age but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Age and has a value; `false` otherwise
   */
  public hasDefaultValueAge(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Age;
  }

  /**
   * @returns the `defaultValue` property value as a Annotation object if defined; else undefined
   */
  public getDefaultValueAnnotation(): Annotation | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Annotation)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Annotation but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Annotation and has a value; `false` otherwise
   */
  public hasDefaultValueAnnotation(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Annotation;
  }

  /**
   * @returns the `defaultValue` property value as a Attachment object if defined; else undefined
   */
  public getDefaultValueAttachment(): Attachment | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Attachment but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasDefaultValueAttachment(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Attachment;
  }

  /**
   * @returns the `defaultValue` property value as a CodeableConcept object if defined; else undefined
   */
  public getDefaultValueCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected CodeableConcept but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasDefaultValueCodeableConcept(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof CodeableConcept;
  }

  /**
   * @returns the `defaultValue` property value as a Coding object if defined; else undefined
   */
  public getDefaultValueCoding(): Coding | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Coding but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Coding and has a value; `false` otherwise
   */
  public hasDefaultValueCoding(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Coding;
  }

  /**
   * @returns the `defaultValue` property value as a ContactPoint object if defined; else undefined
   */
  public getDefaultValueContactPoint(): ContactPoint | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof ContactPoint)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected ContactPoint but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a ContactPoint and has a value; `false` otherwise
   */
  public hasDefaultValueContactPoint(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof ContactPoint;
  }

  /**
   * @returns the `defaultValue` property value as a Count object if defined; else undefined
   */
  public getDefaultValueCount(): Count | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Count)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Count but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Count and has a value; `false` otherwise
   */
  public hasDefaultValueCount(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Count;
  }

  /**
   * @returns the `defaultValue` property value as a Distance object if defined; else undefined
   */
  public getDefaultValueDistance(): Distance | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Distance)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Distance but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Distance and has a value; `false` otherwise
   */
  public hasDefaultValueDistance(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Distance;
  }

  /**
   * @returns the `defaultValue` property value as a Duration object if defined; else undefined
   */
  public getDefaultValueDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Duration but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Duration and has a value; `false` otherwise
   */
  public hasDefaultValueDuration(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Duration;
  }

  /**
   * @returns the `defaultValue` property value as a HumanName object if defined; else undefined
   */
  public getDefaultValueHumanName(): HumanName | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof HumanName)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected HumanName but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a HumanName and has a value; `false` otherwise
   */
  public hasDefaultValueHumanName(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof HumanName;
  }

  /**
   * @returns the `defaultValue` property value as a Identifier object if defined; else undefined
   */
  public getDefaultValueIdentifier(): Identifier | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Identifier but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Identifier and has a value; `false` otherwise
   */
  public hasDefaultValueIdentifier(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Identifier;
  }

  /**
   * @returns the `defaultValue` property value as a Money object if defined; else undefined
   */
  public getDefaultValueMoney(): Money | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Money but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Money and has a value; `false` otherwise
   */
  public hasDefaultValueMoney(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Money;
  }

  /**
   * @returns the `defaultValue` property value as a Period object if defined; else undefined
   */
  public getDefaultValuePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Period but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Period and has a value; `false` otherwise
   */
  public hasDefaultValuePeriod(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Period;
  }

  /**
   * @returns the `defaultValue` property value as a Quantity object if defined; else undefined
   */
  public getDefaultValueQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Quantity but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasDefaultValueQuantity(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Quantity;
  }

  /**
   * @returns the `defaultValue` property value as a Range object if defined; else undefined
   */
  public getDefaultValueRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Range but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Range and has a value; `false` otherwise
   */
  public hasDefaultValueRange(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Range;
  }

  /**
   * @returns the `defaultValue` property value as a Ratio object if defined; else undefined
   */
  public getDefaultValueRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Ratio but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasDefaultValueRatio(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Ratio;
  }

  /**
   * @returns the `defaultValue` property value as a Reference object if defined; else undefined
   */
  public getDefaultValueReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Reference but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Reference and has a value; `false` otherwise
   */
  public hasDefaultValueReference(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Reference;
  }

  /**
   * @returns the `defaultValue` property value as a SampledData object if defined; else undefined
   */
  public getDefaultValueSampledData(): SampledData | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof SampledData)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected SampledData but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a SampledData and has a value; `false` otherwise
   */
  public hasDefaultValueSampledData(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof SampledData;
  }

  /**
   * @returns the `defaultValue` property value as a Signature object if defined; else undefined
   */
  public getDefaultValueSignature(): Signature | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Signature)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Signature but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Signature and has a value; `false` otherwise
   */
  public hasDefaultValueSignature(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Signature;
  }

  /**
   * @returns the `defaultValue` property value as a Timing object if defined; else undefined
   */
  public getDefaultValueTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Timing but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Timing and has a value; `false` otherwise
   */
  public hasDefaultValueTiming(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Timing;
  }

  /**
   * @returns the `defaultValue` property value as a ContactDetail object if defined; else undefined
   */
  public getDefaultValueContactDetail(): ContactDetail | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof ContactDetail)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected ContactDetail but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a ContactDetail and has a value; `false` otherwise
   */
  public hasDefaultValueContactDetail(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof ContactDetail;
  }

  /**
   * @returns the `defaultValue` property value as a Contributor object if defined; else undefined
   */
  public getDefaultValueContributor(): Contributor | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Contributor)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Contributor but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Contributor and has a value; `false` otherwise
   */
  public hasDefaultValueContributor(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Contributor;
  }

  /**
   * @returns the `defaultValue` property value as a DataRequirement object if defined; else undefined
   */
  public getDefaultValueDataRequirement(): DataRequirement | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof DataRequirement)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected DataRequirement but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a DataRequirement and has a value; `false` otherwise
   */
  public hasDefaultValueDataRequirement(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof DataRequirement;
  }

  /**
   * @returns the `defaultValue` property value as a Expression object if defined; else undefined
   */
  public getDefaultValueExpression(): Expression | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Expression)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Expression but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Expression and has a value; `false` otherwise
   */
  public hasDefaultValueExpression(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Expression;
  }

  /**
   * @returns the `defaultValue` property value as a ParameterDefinition object if defined; else undefined
   */
  public getDefaultValueParameterDefinition(): ParameterDefinition | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof ParameterDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected ParameterDefinition but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a ParameterDefinition and has a value; `false` otherwise
   */
  public hasDefaultValueParameterDefinition(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof ParameterDefinition;
  }

  /**
   * @returns the `defaultValue` property value as a RelatedArtifact object if defined; else undefined
   */
  public getDefaultValueRelatedArtifact(): RelatedArtifact | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof RelatedArtifact)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected RelatedArtifact but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a RelatedArtifact and has a value; `false` otherwise
   */
  public hasDefaultValueRelatedArtifact(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof RelatedArtifact;
  }

  /**
   * @returns the `defaultValue` property value as a TriggerDefinition object if defined; else undefined
   */
  public getDefaultValueTriggerDefinition(): TriggerDefinition | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof TriggerDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected TriggerDefinition but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a TriggerDefinition and has a value; `false` otherwise
   */
  public hasDefaultValueTriggerDefinition(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof TriggerDefinition;
  }

  /**
   * @returns the `defaultValue` property value as a UsageContext object if defined; else undefined
   */
  public getDefaultValueUsageContext(): UsageContext | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof UsageContext)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected UsageContext but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a UsageContext and has a value; `false` otherwise
   */
  public hasDefaultValueUsageContext(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof UsageContext;
  }

  /**
   * @returns the `defaultValue` property value as a Dosage object if defined; else undefined
   */
  public getDefaultValueDosage(): Dosage | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Dosage)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Dosage but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Dosage and has a value; `false` otherwise
   */
  public hasDefaultValueDosage(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Dosage;
  }

  /**
   * @returns the `defaultValue` property value as a Meta object if defined; else undefined
   */
  public getDefaultValueMeta(): Meta | undefined {
    if (!isDefined<IDataType | undefined>(this.defaultValue)) {
      return undefined;
    }
    if (!(this.defaultValue instanceof Meta)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.source.defaultValue[x]: Expected Meta but encountered ${this.defaultValue.fhirType()}`,
      );
    }
    return this.defaultValue;
  }

  /**
   * @returns `true` if the `defaultValue` property exists as a Meta and has a value; `false` otherwise
   */
  public hasDefaultValueMeta(): boolean {
    return this.hasDefaultValue() && this.defaultValue instanceof Meta;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `element` property value as a StringType object if defined; else an empty StringType object
   */
  public getElementElement(): StringType {
    return this.element ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `element` property.
   *
   * @param element - the `element` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setElementElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.element; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.element = element;
    } else {
      this.element = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `element` property exists and has a value; `false` otherwise
   */
  public hasElementElement(): boolean {
    return isDefined<StringType>(this.element) && !this.element.isEmpty();
  }

  /**
   * @returns the `element` property value as a fhirString if defined; else undefined
   */
  public getElement(): fhirString | undefined {
    return this.element?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `element` property.
   *
   * @param value - the `element` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setElement(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.element (${String(value)})`;
      this.element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.element = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `element` property exists and has a value; `false` otherwise
   */
  public hasElement(): boolean {
    return this.hasElementElement();
  }

  /**
   * @returns the `listMode` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MapSourceListModeEnum }
   */
  public getListModeEnumType(): EnumCodeType | undefined {
    return this.listMode;
  }

  /**
   * Assigns the provided EnumCodeType value to the `listMode` property.
   *
   * @param enumType - the `listMode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MapSourceListModeEnum }
   */
  public setListModeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid StructureMap.group.rule.source.listMode';
      assertEnumCodeType<MapSourceListModeEnum>(enumType, MapSourceListModeEnum, errMsgPrefix);
      this.listMode = enumType;
    } else {
      this.listMode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `listMode` property exists and has a value; `false` otherwise
   */
  public hasListModeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.listMode) && !this.listMode.isEmpty() && this.listMode.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `listMode` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MapSourceListModeEnum }
   */
  public getListModeElement(): CodeType | undefined {
    if (this.listMode === undefined) {
      return undefined;
    }
    return this.listMode as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `listMode` property.
   *
   * @param element - the `listMode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MapSourceListModeEnum }
   */
  public setListModeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.listMode; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.listMode = new EnumCodeType(element, this.mapSourceListModeEnum);
    } else {
      this.listMode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `listMode` property exists and has a value; `false` otherwise
   */
  public hasListModeElement(): boolean {
    return this.hasListModeEnumType();
  }

  /**
   * @returns the `listMode` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MapSourceListModeEnum }
   */
  public getListMode(): fhirCode | undefined {
    if (this.listMode === undefined) {
      return undefined;
    }
    return this.listMode.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `listMode` property.
   *
   * @param value - the `listMode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link MapSourceListModeEnum }
   */
  public setListMode(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.listMode; Provided value is not an instance of fhirCode.`;
      this.listMode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.mapSourceListModeEnum);
    } else {
      this.listMode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `listMode` property exists and has a value; `false` otherwise
   */
  public hasListMode(): boolean {
    return this.hasListModeEnumType();
  }

  /**
   * @returns the `variable` property value as a IdType object if defined; else an empty IdType object
   */
  public getVariableElement(): IdType {
    return this.variable ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `variable` property.
   *
   * @param element - the `variable` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVariableElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.variable; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.variable = element;
    } else {
      this.variable = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `variable` property exists and has a value; `false` otherwise
   */
  public hasVariableElement(): boolean {
    return isDefined<IdType>(this.variable) && !this.variable.isEmpty();
  }

  /**
   * @returns the `variable` property value as a fhirId if defined; else undefined
   */
  public getVariable(): fhirId | undefined {
    return this.variable?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `variable` property.
   *
   * @param value - the `variable` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVariable(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.variable (${String(value)})`;
      this.variable = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.variable = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `variable` property exists and has a value; `false` otherwise
   */
  public hasVariable(): boolean {
    return this.hasVariableElement();
  }

  /**
   * @returns the `condition` property value as a StringType object if defined; else an empty StringType object
   */
  public getConditionElement(): StringType {
    return this.condition ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `condition` property.
   *
   * @param element - the `condition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConditionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.condition; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.condition = element;
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasConditionElement(): boolean {
    return isDefined<StringType>(this.condition) && !this.condition.isEmpty();
  }

  /**
   * @returns the `condition` property value as a fhirString if defined; else undefined
   */
  public getCondition(): fhirString | undefined {
    return this.condition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `condition` property.
   *
   * @param value - the `condition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCondition(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.condition (${String(value)})`;
      this.condition = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return this.hasConditionElement();
  }

  /**
   * @returns the `check` property value as a StringType object if defined; else an empty StringType object
   */
  public getCheckElement(): StringType {
    return this.check ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `check` property.
   *
   * @param element - the `check` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCheckElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.check; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.check = element;
    } else {
      this.check = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `check` property exists and has a value; `false` otherwise
   */
  public hasCheckElement(): boolean {
    return isDefined<StringType>(this.check) && !this.check.isEmpty();
  }

  /**
   * @returns the `check` property value as a fhirString if defined; else undefined
   */
  public getCheck(): fhirString | undefined {
    return this.check?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `check` property.
   *
   * @param value - the `check` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCheck(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.check (${String(value)})`;
      this.check = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.check = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `check` property exists and has a value; `false` otherwise
   */
  public hasCheck(): boolean {
    return this.hasCheckElement();
  }

  /**
   * @returns the `logMessage` property value as a StringType object if defined; else an empty StringType object
   */
  public getLogMessageElement(): StringType {
    return this.logMessage ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `logMessage` property.
   *
   * @param element - the `logMessage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLogMessageElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.logMessage; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.logMessage = element;
    } else {
      this.logMessage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `logMessage` property exists and has a value; `false` otherwise
   */
  public hasLogMessageElement(): boolean {
    return isDefined<StringType>(this.logMessage) && !this.logMessage.isEmpty();
  }

  /**
   * @returns the `logMessage` property value as a fhirString if defined; else undefined
   */
  public getLogMessage(): fhirString | undefined {
    return this.logMessage?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `logMessage` property.
   *
   * @param value - the `logMessage` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLogMessage(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.source.logMessage (${String(value)})`;
      this.logMessage = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.logMessage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `logMessage` property exists and has a value; `false` otherwise
   */
  public hasLogMessage(): boolean {
    return this.hasLogMessageElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureMap.group.rule.source';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.context,
      this.min,
      this.max,
      this.type_,
      this.defaultValue,
      this.element,
      this.listMode,
      this.variable,
      this.condition,
      this.check,
      this.logMessage,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureMapGroupRuleSourceComponent {
    const dest = new StructureMapGroupRuleSourceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureMapGroupRuleSourceComponent): void {
    super.copyValues(dest);
    dest.context = this.context ? this.context.copy() : null;
    dest.min = this.min?.copy();
    dest.max = this.max?.copy();
    dest.type_ = this.type_?.copy();
    dest.defaultValue = this.defaultValue?.copy() as IDataType;
    dest.element = this.element?.copy();
    dest.listMode = this.listMode?.copy();
    dest.variable = this.variable?.copy();
    dest.condition = this.condition?.copy();
    dest.check = this.check?.copy();
    dest.logMessage = this.logMessage?.copy();
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

    if (this.hasContextElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirId>(this.getContextElement()!, 'context', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group.rule.source.context`);
    }

    if (this.hasMinElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getMinElement(), 'min', jsonObj);
    }

    if (this.hasMaxElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMaxElement(), 'max', jsonObj);
    }

    if (this.hasTypeElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTypeElement(), 'type', jsonObj);
    }

    if (this.hasDefaultValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDefaultValue()!, 'defaultValue', jsonObj);
    }

    if (this.hasElementElement()) {
      setFhirPrimitiveJson<fhirString>(this.getElementElement(), 'element', jsonObj);
    }

    if (this.hasListModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getListModeElement()!, 'listMode', jsonObj);
    }

    if (this.hasVariableElement()) {
      setFhirPrimitiveJson<fhirId>(this.getVariableElement(), 'variable', jsonObj);
    }

    if (this.hasConditionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getConditionElement(), 'condition', jsonObj);
    }

    if (this.hasCheckElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCheckElement(), 'check', jsonObj);
    }

    if (this.hasLogMessageElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLogMessageElement(), 'logMessage', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * StructureMapGroupRuleTargetComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Content to create because of this mapping rule
 * - **Definition:** Content to create because of this mapping rule.
 *
 * @category Data Models: Resource
 * @see [FHIR StructureMap](http://hl7.org/fhir/StructureDefinition/StructureMap)
 */
export class StructureMapGroupRuleTargetComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.mapContextTypeEnum = new MapContextTypeEnum();
    this.mapTargetListModeEnum = new MapTargetListModeEnum();
    this.mapTransformEnum = new MapTransformEnum();
  }

  /**
   * Parse the provided `StructureMapGroupRuleTargetComponent` JSON to instantiate the StructureMapGroupRuleTargetComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureMapGroupRuleTargetComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureMapGroupRuleTargetComponent
   * @returns StructureMapGroupRuleTargetComponent data model or undefined for `StructureMapGroupRuleTargetComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureMapGroupRuleTargetComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureMapGroupRuleTargetComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureMapGroupRuleTargetComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'context';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setContextElement(datatype);
    }

    fieldName = 'contextType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setContextTypeElement(datatype);
    }

    fieldName = 'element';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setElementElement(datatype);
    }

    fieldName = 'variable';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setVariableElement(datatype);
    }

    fieldName = 'listMode';
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
        const datatype: CodeType | undefined = fhirParser.parseCodeType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addListModeElement(datatype);
        }
      });
    }

    fieldName = 'listRuleId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setListRuleIdElement(datatype);
    }

    fieldName = 'transform';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setTransformElement(datatype);
    }

    fieldName = 'parameter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: StructureMapGroupRuleTargetParameterComponent | undefined = StructureMapGroupRuleTargetParameterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParameter(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * StructureMap.group.rule.target.context Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type or variable this rule applies to
   * - **Definition:** Type or variable this rule applies to.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private context?: IdType | undefined;

  /**
   * FHIR CodeSystem: MapContextType
   *
   * @see {@link MapContextTypeEnum }
   */
  private readonly mapContextTypeEnum: MapContextTypeEnum;

  /**
   * StructureMap.group.rule.target.contextType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** type | variable
   * - **Definition:** How to interpret the context.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MapContextTypeEnum }
   */
  private contextType?: EnumCodeType | undefined;

  /**
   * StructureMap.group.rule.target.element Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Field to create in the context
   * - **Definition:** Field to create in the context.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private element?: StringType | undefined;

  /**
   * StructureMap.group.rule.target.variable Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Named context for field, if desired, and a field is specified
   * - **Definition:** Named context for field, if desired, and a field is specified.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private variable?: IdType | undefined;

  /**
   * FHIR CodeSystem: MapTargetListMode
   *
   * @see {@link MapTargetListModeEnum }
   */
  private readonly mapTargetListModeEnum: MapTargetListModeEnum;

  /**
   * StructureMap.group.rule.target.listMode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** first | share | last | collate
   * - **Definition:** If field is a list, how to manage the list.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MapTargetListModeEnum }
   */
  private listMode?: EnumCodeType[] | undefined;

  /**
   * StructureMap.group.rule.target.listRuleId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Internal rule reference for shared list items
   * - **Definition:** Internal rule reference for shared list items.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private listRuleId?: IdType | undefined;

  /**
   * FHIR CodeSystem: MapTransform
   *
   * @see {@link MapTransformEnum }
   */
  private readonly mapTransformEnum: MapTransformEnum;

  /**
   * StructureMap.group.rule.target.transform Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** create | copy +
   * - **Definition:** How the data is copied / created.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MapTransformEnum }
   */
  private transform?: EnumCodeType | undefined;

  /**
   * StructureMap.group.rule.target.parameter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Parameters to the transform
   * - **Definition:** Parameters to the transform.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private parameter?: StructureMapGroupRuleTargetParameterComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `context` property value as a IdType object if defined; else an empty IdType object
   */
  public getContextElement(): IdType {
    return this.context ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `context` property.
   *
   * @param element - the `context` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContextElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.context; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.context = element;
    } else {
      this.context = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContextElement(): boolean {
    return isDefined<IdType>(this.context) && !this.context.isEmpty();
  }

  /**
   * @returns the `context` property value as a fhirId if defined; else undefined
   */
  public getContext(): fhirId | undefined {
    return this.context?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `context` property.
   *
   * @param value - the `context` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContext(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.context (${String(value)})`;
      this.context = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.context = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContext(): boolean {
    return this.hasContextElement();
  }

  /**
   * @returns the `contextType` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MapContextTypeEnum }
   */
  public getContextTypeEnumType(): EnumCodeType | undefined {
    return this.contextType;
  }

  /**
   * Assigns the provided EnumCodeType value to the `contextType` property.
   *
   * @param enumType - the `contextType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MapContextTypeEnum }
   */
  public setContextTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid StructureMap.group.rule.target.contextType';
      assertEnumCodeType<MapContextTypeEnum>(enumType, MapContextTypeEnum, errMsgPrefix);
      this.contextType = enumType;
    } else {
      this.contextType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contextType` property exists and has a value; `false` otherwise
   */
  public hasContextTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.contextType) && !this.contextType.isEmpty() && this.contextType.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `contextType` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MapContextTypeEnum }
   */
  public getContextTypeElement(): CodeType | undefined {
    if (this.contextType === undefined) {
      return undefined;
    }
    return this.contextType as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `contextType` property.
   *
   * @param element - the `contextType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MapContextTypeEnum }
   */
  public setContextTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.contextType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.contextType = new EnumCodeType(element, this.mapContextTypeEnum);
    } else {
      this.contextType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contextType` property exists and has a value; `false` otherwise
   */
  public hasContextTypeElement(): boolean {
    return this.hasContextTypeEnumType();
  }

  /**
   * @returns the `contextType` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MapContextTypeEnum }
   */
  public getContextType(): fhirCode | undefined {
    if (this.contextType === undefined) {
      return undefined;
    }
    return this.contextType.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `contextType` property.
   *
   * @param value - the `contextType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link MapContextTypeEnum }
   */
  public setContextType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.contextType; Provided value is not an instance of fhirCode.`;
      this.contextType = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.mapContextTypeEnum);
    } else {
      this.contextType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contextType` property exists and has a value; `false` otherwise
   */
  public hasContextType(): boolean {
    return this.hasContextTypeEnumType();
  }

  /**
   * @returns the `element` property value as a StringType object if defined; else an empty StringType object
   */
  public getElementElement(): StringType {
    return this.element ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `element` property.
   *
   * @param element - the `element` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setElementElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.element; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.element = element;
    } else {
      this.element = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `element` property exists and has a value; `false` otherwise
   */
  public hasElementElement(): boolean {
    return isDefined<StringType>(this.element) && !this.element.isEmpty();
  }

  /**
   * @returns the `element` property value as a fhirString if defined; else undefined
   */
  public getElement(): fhirString | undefined {
    return this.element?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `element` property.
   *
   * @param value - the `element` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setElement(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.element (${String(value)})`;
      this.element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.element = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `element` property exists and has a value; `false` otherwise
   */
  public hasElement(): boolean {
    return this.hasElementElement();
  }

  /**
   * @returns the `variable` property value as a IdType object if defined; else an empty IdType object
   */
  public getVariableElement(): IdType {
    return this.variable ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `variable` property.
   *
   * @param element - the `variable` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVariableElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.variable; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.variable = element;
    } else {
      this.variable = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `variable` property exists and has a value; `false` otherwise
   */
  public hasVariableElement(): boolean {
    return isDefined<IdType>(this.variable) && !this.variable.isEmpty();
  }

  /**
   * @returns the `variable` property value as a fhirId if defined; else undefined
   */
  public getVariable(): fhirId | undefined {
    return this.variable?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `variable` property.
   *
   * @param value - the `variable` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVariable(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.variable (${String(value)})`;
      this.variable = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.variable = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `variable` property exists and has a value; `false` otherwise
   */
  public hasVariable(): boolean {
    return this.hasVariableElement();
  }

  /**
   * @returns the `listMode` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link MapTargetListModeEnum }
   */
  public getListModeEnumType(): EnumCodeType[] {
    return this.listMode ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `listMode` property.
   *
   * @param enumType - the `listMode` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MapTargetListModeEnum }
   */
  public setListModeEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid StructureMap.group.rule.target.listMode`;
      assertEnumCodeTypeList<MapTargetListModeEnum>(enumType, MapTargetListModeEnum, errMsgPrefix);
      this.listMode = enumType;
    } else {
      this.listMode = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `listMode` array property.
   *
   * @param enumType - the `listMode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link MapTargetListModeEnum }
   */
  public addListModeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid StructureMap.group.rule.target.listMode`;
      assertEnumCodeType<MapTargetListModeEnum>(enumType, MapTargetListModeEnum, errMsgPrefix);
      this.initListMode();
      this.listMode?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `listMode` property exists and has a value; `false` otherwise
   */
  public hasListModeEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.listMode) && this.listMode.some((item: EnumCodeType) => !item.isEmpty()) && this.listMode.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `listMode` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link MapTargetListModeEnum }
   */
  public getListModeElement(): CodeType[] {
    if (this.listMode === undefined) {
      return [] as CodeType[];
    }
    return this.listMode as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `listMode` property.
   *
   * @param element - the `listMode` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MapTargetListModeEnum }
   */
  public setListModeElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.listMode; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.mapTargetListModeEnum));
      });
      this.listMode = enumCodeTypes;
    } else {
      this.listMode = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `listMode` array property.
   *
   * @param element - the `listMode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MapTargetListModeEnum }
   */
  public addListModeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.listMode; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initListMode();
      this.listMode?.push(new EnumCodeType(element, this.mapTargetListModeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `listMode` property exists and has a value; `false` otherwise
   */
  public hasListModeElement(): boolean {
    return this.hasListModeEnumType();
  }

  /**
   * @returns the `listMode` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link MapTargetListModeEnum }
   */
  public getListMode(): fhirCode[] {
    if (this.listMode === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.listMode) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `listMode` property.
   *
   * @param value - the `listMode` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link MapTargetListModeEnum }
   */
  public setListMode(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid StructureMap.group.rule.target.listMode; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.mapTargetListModeEnum));
      });
      this.listMode = enumCodeTypes;
    } else {
      this.listMode = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `listMode` array property.
   *
   * @param value - the `listMode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link MapTargetListModeEnum }
   */
  public addListMode(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initListMode();
      const optErrMsg = `Invalid StructureMap.group.rule.target.listMode; Provided value is not an instance of fhirCode.`;
      this.listMode?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.mapTargetListModeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `listMode` property exists and has a value; `false` otherwise
   */
  public hasListMode(): boolean {
    return this.hasListModeEnumType();
  }

  /**
   * Initialize the listMode property
   */
  private initListMode(): void {
    if(!this.hasListModeEnumType()) {
      this.listMode = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `listRuleId` property value as a IdType object if defined; else an empty IdType object
   */
  public getListRuleIdElement(): IdType {
    return this.listRuleId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `listRuleId` property.
   *
   * @param element - the `listRuleId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setListRuleIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.listRuleId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.listRuleId = element;
    } else {
      this.listRuleId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `listRuleId` property exists and has a value; `false` otherwise
   */
  public hasListRuleIdElement(): boolean {
    return isDefined<IdType>(this.listRuleId) && !this.listRuleId.isEmpty();
  }

  /**
   * @returns the `listRuleId` property value as a fhirId if defined; else undefined
   */
  public getListRuleId(): fhirId | undefined {
    return this.listRuleId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `listRuleId` property.
   *
   * @param value - the `listRuleId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setListRuleId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.listRuleId (${String(value)})`;
      this.listRuleId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.listRuleId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `listRuleId` property exists and has a value; `false` otherwise
   */
  public hasListRuleId(): boolean {
    return this.hasListRuleIdElement();
  }

  /**
   * @returns the `transform` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MapTransformEnum }
   */
  public getTransformEnumType(): EnumCodeType | undefined {
    return this.transform;
  }

  /**
   * Assigns the provided EnumCodeType value to the `transform` property.
   *
   * @param enumType - the `transform` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MapTransformEnum }
   */
  public setTransformEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid StructureMap.group.rule.target.transform';
      assertEnumCodeType<MapTransformEnum>(enumType, MapTransformEnum, errMsgPrefix);
      this.transform = enumType;
    } else {
      this.transform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `transform` property exists and has a value; `false` otherwise
   */
  public hasTransformEnumType(): boolean {
    return isDefined<EnumCodeType>(this.transform) && !this.transform.isEmpty() && this.transform.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `transform` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MapTransformEnum }
   */
  public getTransformElement(): CodeType | undefined {
    if (this.transform === undefined) {
      return undefined;
    }
    return this.transform as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `transform` property.
   *
   * @param element - the `transform` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MapTransformEnum }
   */
  public setTransformElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.transform; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.transform = new EnumCodeType(element, this.mapTransformEnum);
    } else {
      this.transform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `transform` property exists and has a value; `false` otherwise
   */
  public hasTransformElement(): boolean {
    return this.hasTransformEnumType();
  }

  /**
   * @returns the `transform` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MapTransformEnum }
   */
  public getTransform(): fhirCode | undefined {
    if (this.transform === undefined) {
      return undefined;
    }
    return this.transform.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `transform` property.
   *
   * @param value - the `transform` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link MapTransformEnum }
   */
  public setTransform(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.transform; Provided value is not an instance of fhirCode.`;
      this.transform = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.mapTransformEnum);
    } else {
      this.transform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `transform` property exists and has a value; `false` otherwise
   */
  public hasTransform(): boolean {
    return this.hasTransformEnumType();
  }

  /**
   * @returns the `parameter` property value as a StructureMapGroupRuleTargetParameterComponent array
   */
  public getParameter(): StructureMapGroupRuleTargetParameterComponent[] {
    return this.parameter ?? ([] as StructureMapGroupRuleTargetParameterComponent[]);
  }

  /**
   * Assigns the provided StructureMapGroupRuleTargetParameterComponent array value to the `parameter` property.
   *
   * @param value - the `parameter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParameter(value: StructureMapGroupRuleTargetParameterComponent[] | undefined): this {
    if (isDefinedList<StructureMapGroupRuleTargetParameterComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.parameter; Provided value array has an element that is not an instance of StructureMapGroupRuleTargetParameterComponent.`;
      assertFhirTypeList<StructureMapGroupRuleTargetParameterComponent>(value, StructureMapGroupRuleTargetParameterComponent, optErrMsg);
      this.parameter = value;
    } else {
      this.parameter = undefined;
    }
    return this;
  }

  /**
   * Add the provided StructureMapGroupRuleTargetParameterComponent value to the `parameter` array property.
   *
   * @param value - the `parameter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParameter(value: StructureMapGroupRuleTargetParameterComponent | undefined): this {
    if (isDefined<StructureMapGroupRuleTargetParameterComponent>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.target.parameter; Provided element is not an instance of StructureMapGroupRuleTargetParameterComponent.`;
      assertFhirType<StructureMapGroupRuleTargetParameterComponent>(value, StructureMapGroupRuleTargetParameterComponent, optErrMsg);
      this.initParameter();
      this.parameter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parameter` property exists and has a value; `false` otherwise
   */
  public hasParameter(): boolean {
    return isDefinedList<StructureMapGroupRuleTargetParameterComponent>(this.parameter) && this.parameter.some((item: StructureMapGroupRuleTargetParameterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `parameter` property
   */
  private initParameter(): void {
    if(!this.hasParameter()) {
      this.parameter = [] as StructureMapGroupRuleTargetParameterComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureMap.group.rule.target';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.context,
      this.contextType,
      this.element,
      this.variable,
      this.listMode,
      this.listRuleId,
      this.transform,
      this.parameter,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureMapGroupRuleTargetComponent {
    const dest = new StructureMapGroupRuleTargetComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureMapGroupRuleTargetComponent): void {
    super.copyValues(dest);
    dest.context = this.context?.copy();
    dest.contextType = this.contextType?.copy();
    dest.element = this.element?.copy();
    dest.variable = this.variable?.copy();
    const listModeList = copyListValues<EnumCodeType>(this.listMode);
    dest.listMode = listModeList.length === 0 ? undefined : listModeList;
    dest.listRuleId = this.listRuleId?.copy();
    dest.transform = this.transform?.copy();
    const parameterList = copyListValues<StructureMapGroupRuleTargetParameterComponent>(this.parameter);
    dest.parameter = parameterList.length === 0 ? undefined : parameterList;
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

    if (this.hasContextElement()) {
      setFhirPrimitiveJson<fhirId>(this.getContextElement(), 'context', jsonObj);
    }

    if (this.hasContextTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getContextTypeElement()!, 'contextType', jsonObj);
    }

    if (this.hasElementElement()) {
      setFhirPrimitiveJson<fhirString>(this.getElementElement(), 'element', jsonObj);
    }

    if (this.hasVariableElement()) {
      setFhirPrimitiveJson<fhirId>(this.getVariableElement(), 'variable', jsonObj);
    }

    if (this.hasListModeElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getListModeElement(), 'listMode', jsonObj);
    }

    if (this.hasListRuleIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getListRuleIdElement(), 'listRuleId', jsonObj);
    }

    if (this.hasTransformElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTransformElement()!, 'transform', jsonObj);
    }

    if (this.hasParameter()) {
      setFhirBackboneElementListJson(this.getParameter(), 'parameter', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * StructureMapGroupRuleTargetParameterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Parameters to the transform
 * - **Definition:** Parameters to the transform.
 *
 * @category Data Models: Resource
 * @see [FHIR StructureMap](http://hl7.org/fhir/StructureDefinition/StructureMap)
 */
export class StructureMapGroupRuleTargetParameterComponent extends BackboneElement implements IBackboneElement {
  constructor(value: IDataType | null = null) {
    super();

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `StructureMapGroupRuleTargetParameterComponent` JSON to instantiate the StructureMapGroupRuleTargetParameterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureMapGroupRuleTargetParameterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureMapGroupRuleTargetParameterComponent
   * @returns StructureMapGroupRuleTargetParameterComponent data model or undefined for `StructureMapGroupRuleTargetParameterComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureMapGroupRuleTargetParameterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureMapGroupRuleTargetParameterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureMapGroupRuleTargetParameterComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = StructureMapGroupRuleTargetParameterComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for StructureMapGroupRuleTargetParameterComponent`;
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
   * StructureMap.group.rule.target.parameter.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('StructureMap.group.rule.target.parameter.value[x]', ['id','string','boolean','integer','decimal',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Parameter value - variable or literal
   * - **Definition:** Parameter value - variable or literal.
   * - **FHIR Types:**
   *     'id',
   *     'string',
   *     'boolean',
   *     'integer',
   *     'decimal',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('StructureMap.group.rule.target.parameter.value[x]',[
    'id',
    'string',
    'boolean',
    'integer',
    'decimal',
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
   * @decorator `@ChoiceDataTypes('StructureMap.group.rule.target.parameter.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('StructureMap.group.rule.target.parameter.value[x]')
  public setValue(value: IDataType): this {
    assertIsDefined<IDataType>(value, `StructureMap.group.rule.target.parameter.value[x] is required`);
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
   * @returns the `value` property value as a IdType object if defined; else null
   */
  public getValueIdType(): IdType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IdType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.target.parameter.value[x]: Expected IdType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IdType and has a value; `false` otherwise
   */
  public hasValueIdType(): boolean {
    return this.hasValue() && this.value instanceof IdType;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueStringType(): StringType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.target.parameter.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
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
        `DataType mismatch for StructureMap.group.rule.target.parameter.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.target.parameter.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a DecimalType object if defined; else null
   */
  public getValueDecimalType(): DecimalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for StructureMap.group.rule.target.parameter.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasValueDecimalType(): boolean {
    return this.hasValue() && this.value instanceof DecimalType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureMap.group.rule.target.parameter';
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
  public override copy(): StructureMapGroupRuleTargetParameterComponent {
    const dest = new StructureMapGroupRuleTargetParameterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureMapGroupRuleTargetParameterComponent): void {
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
      missingReqdProperties.push(`StructureMap.group.rule.target.parameter.value[x]`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * StructureMapGroupRuleDependentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Which other rules to apply in the context of this rule
 * - **Definition:** Which other rules to apply in the context of this rule.
 *
 * @category Data Models: Resource
 * @see [FHIR StructureMap](http://hl7.org/fhir/StructureDefinition/StructureMap)
 */
export class StructureMapGroupRuleDependentComponent extends BackboneElement implements IBackboneElement {
  constructor(name: IdType | fhirId | null = null, variable: StringType[] | fhirString[] | null = null) {
    super();

    this.name = null;
    if (isDefined<IdType | fhirId>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }

    this.variable = null;
    if (isDefinedList<StringType | fhirString>(variable)) {
      if (variable[0] instanceof PrimitiveType) {
        this.setVariableElement(variable as StringType[]);
      } else {
        this.setVariable(variable as fhirString[]);
      }
    }
  }

  /**
   * Parse the provided `StructureMapGroupRuleDependentComponent` JSON to instantiate the StructureMapGroupRuleDependentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureMapGroupRuleDependentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureMapGroupRuleDependentComponent
   * @returns StructureMapGroupRuleDependentComponent data model or undefined for `StructureMapGroupRuleDependentComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureMapGroupRuleDependentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureMapGroupRuleDependentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureMapGroupRuleDependentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'variable';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson, idx) => {
        const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addVariableElement(datatype);
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
   * StructureMap.group.rule.dependent.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of a rule or group to apply
   * - **Definition:** Name of a rule or group to apply.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: IdType | null;

  /**
   * StructureMap.group.rule.dependent.variable Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Variable to pass to the rule or group
   * - **Definition:** Variable to pass to the rule or group.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private variable: StringType[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `name` property value as a IdType object if defined; else null
   */
  public getNameElement(): IdType | null {
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
  public setNameElement(element: IdType): this {
    assertIsDefined<IdType>(element, `StructureMap.group.rule.dependent.name is required`);
    const optErrMsg = `Invalid StructureMap.group.rule.dependent.name; Provided value is not an instance of IdType.`;
    assertFhirType<IdType>(element, IdType, optErrMsg);
    this.name = element;
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<IdType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirId if defined; else null
   */
  public getName(): fhirId | null {
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
  public setName(value: fhirId): this {
    assertIsDefined<fhirId>(value, `StructureMap.group.rule.dependent.name is required`);
    const optErrMsg = `Invalid StructureMap.group.rule.dependent.name (${String(value)})`;
    this.name = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `variable` property value as a StringType array
   */
  public getVariableElement(): StringType[] {
    return this.variable ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `variable` property.
   *
   * @param element - the `variable` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVariableElement(element: StringType[]): this {
    assertIsDefinedList<StringType>(element, `StructureMap.group.rule.dependent.variable is required`);
    const optErrMsg = `Invalid StructureMap.group.rule.dependent.variable; Provided value array has an element that is not an instance of StringType.`;
    assertFhirTypeList<StringType>(element, StringType, optErrMsg);
    this.variable = element;
    return this;
  }

  /**
   * Add the provided StringType value to the `variable` array property.
   *
   * @param element - the `variable` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addVariableElement(element: StringType): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureMap.group.rule.dependent.variable; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initVariable();
      this.variable?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `variable` property exists and has a value; `false` otherwise
   */
  public hasVariableElement(): boolean {
    return isDefinedList<StringType>(this.variable) && this.variable.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `variable` property value as a fhirString array
   */
  public getVariable(): fhirString[] {
    this.initVariable();
    const variableValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.variable!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        variableValues.push(value);
      }
    }
    return variableValues;
  }

  /**
   * Assigns the provided primitive value array to the `variable` property.
   *
   * @param value - the `variable` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVariable(value: fhirString[]): this {
    assertIsDefinedList<fhirString>(value, `StructureMap.group.rule.dependent.variable is required`);
    const variableElements = [] as StringType[];
    for (const variableValue of value) {
      const optErrMsg = `Invalid StructureMap.group.rule.dependent.variable array item (${String(variableValue)})`;
      const element = new StringType(parseFhirPrimitiveData(variableValue, fhirStringSchema, optErrMsg));
      variableElements.push(element);
    }
    this.variable = variableElements;
    return this;
  }

  /**
   * Add the provided primitive value to the `variable` array property.
   *
   * @param value - the `variable` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addVariable(value: fhirString): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureMap.group.rule.dependent.variable array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initVariable();
      this.addVariableElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `variable` property exists and has a value; `false` otherwise
   */
  public hasVariable(): boolean {
    return this.hasVariableElement();
  }

  /**
   * Initialize the `variable` property
   */
  private initVariable(): void {
    if (!this.hasVariable()) {
      this.variable = [] as StringType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureMap.group.rule.dependent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.variable,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureMapGroupRuleDependentComponent {
    const dest = new StructureMapGroupRuleDependentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureMapGroupRuleDependentComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    const variableList = copyListValues<StringType>(this.variable);
    dest.variable = variableList.length === 0 ? null : variableList;
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
      setFhirPrimitiveJson<fhirId>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group.rule.dependent.name`);
    }

    if (this.hasVariableElement()) {
      setFhirPrimitiveListJson(this.getVariableElement(), 'variable', jsonObj);
    } else {
      missingReqdProperties.push(`StructureMap.group.rule.dependent.variable`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
