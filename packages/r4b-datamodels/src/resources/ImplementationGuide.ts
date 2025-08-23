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
 * ImplementationGuide Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
 * StructureDefinition.name: ImplementationGuide
 * StructureDefinition.description: A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
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
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  IdType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  UriType,
  UrlType,
  assertEnumCodeType,
  assertEnumCodeTypeList,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  assertIsDefinedList,
  constructorCodeValueAsEnumCodeType,
  constructorCodeValueAsEnumCodeTypeList,
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
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, ContactDetail, PARSABLE_DATATYPE_MAP, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { FhirVersionEnum } from '../code-systems/FhirVersionEnum';
import { GuidePageGenerationEnum } from '../code-systems/GuidePageGenerationEnum';
import { GuideParameterCodeEnum } from '../code-systems/GuideParameterCodeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { ResourceTypesEnum } from '../code-systems/ResourceTypesEnum';
import { SpdxLicenseEnum } from '../code-systems/SpdxLicenseEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ImplementationGuide Class
 *
 * @remarks
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 *
 * An implementation guide is able to define default profiles that must apply to any use of a resource, so validation services may need to take one or more implementation guide resources when validating.
 *
 * **FHIR Specification**
 * - **Short:** A set of rules about how FHIR is used
 * - **Definition:** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuide extends DomainResource implements IDomainResource {
  constructor(url: UriType | fhirUri | null = null, name: StringType | fhirString | null = null, status: EnumCodeType | CodeType | fhirCode | null = null, packageId: IdType | fhirId | null = null, fhirVersion: EnumCodeType[] | CodeType[] | fhirCode[] | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.spdxLicenseEnum = new SpdxLicenseEnum();
    this.fhirVersionEnum = new FhirVersionEnum();

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
      'ImplementationGuide.status',
    );

    this.packageId = null;
    if (isDefined<IdType | fhirId>(packageId)) {
      if (packageId instanceof PrimitiveType) {
        this.setPackageIdElement(packageId);
      } else {
        this.setPackageId(packageId);
      }
    }

    this.fhirVersion = constructorCodeValueAsEnumCodeTypeList<FhirVersionEnum>(
      fhirVersion,
      FhirVersionEnum,
      this.fhirVersionEnum,
      'ImplementationGuide.fhirVersion',
    );
  }

  /**
   * Parse the provided `ImplementationGuide` JSON to instantiate the ImplementationGuide data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuide`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuide
   * @returns ImplementationGuide data model or undefined for `ImplementationGuide`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuide | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuide';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuide();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ImplementationGuide');
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

    fieldName = 'copyright';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setCopyrightElement(datatype);
    }

    fieldName = 'packageId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPackageIdElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'license';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setLicenseElement(datatype);
    }

    fieldName = 'fhirVersion';
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
        const datatype: CodeType | undefined = fhirParser.parseCodeType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addFhirVersionElement(datatype);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'dependsOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImplementationGuideDependsOnComponent | undefined = ImplementationGuideDependsOnComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDependsOn(component);
        }
      });
    }

    fieldName = 'global';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImplementationGuideGlobalComponent | undefined = ImplementationGuideGlobalComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addGlobal(component);
        }
      });
    }

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ImplementationGuideDefinitionComponent | undefined = ImplementationGuideDefinitionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDefinition(component);
    }

    fieldName = 'manifest';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ImplementationGuideManifestComponent | undefined = ImplementationGuideManifestComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setManifest(component);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ImplementationGuide.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this implementation guide, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this implementation guide is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the implementation guide is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the implementation guide to be referenced by a single globally unique identifier. This is required to allow hosting Implementation Guides on multiple different servers, and to allow for the editorial process.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url: UriType | null;

  /**
   * ImplementationGuide.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the implementation guide
   * - **Definition:** The identifier that is used to identify this version of the implementation guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the implementation guide author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * ImplementationGuide.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this implementation guide (computer friendly)
   * - **Definition:** A natural language name identifying the implementation guide. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * ImplementationGuide.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this implementation guide (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the implementation guide.
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
   * ImplementationGuide.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this implementation guide. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of implementation guides that are appropriate for use versus not.
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
   * ImplementationGuide.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this implementation guide is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of implementation guides that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level implementation guide.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * ImplementationGuide.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the implementation guide was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * ImplementationGuide.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the implementation guide.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the implementation guide.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * ImplementationGuide.contact Element
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
   * ImplementationGuide.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the implementation guide
   * - **Definition:** A free text natural language description of the implementation guide from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ImplementationGuide.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate implementation guide instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * ImplementationGuide.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for implementation guide (if applicable)
   * - **Definition:** A legal or geographic region in which the implementation guide is intended to be used.
   * - **Comment:** It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * ImplementationGuide.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the implementation guide and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * ImplementationGuide.packageId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** NPM Package name for IG
   * - **Definition:** The NPM package name for this Implementation Guide, used in the NPM package distribution, which is the primary mechanism by which FHIR based tooling manages IG dependencies. This value must be globally unique, and should be assigned with care.
   * - **Comment:** Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private packageId: IdType | null;

  /**
   * FHIR CodeSystem: SpdxLicense
   *
   * @see {@link SpdxLicenseEnum }
   */
  private readonly spdxLicenseEnum: SpdxLicenseEnum;

  /**
   * ImplementationGuide.license Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** SPDX license code for this IG (or not-open-source)
   * - **Definition:** The license that applies to this Implementation Guide, using an SPDX license code, or \'not-open-source\'.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SpdxLicenseEnum }
   */
  private license?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: FhirVersion
   *
   * @see {@link FhirVersionEnum }
   */
  private readonly fhirVersionEnum: FhirVersionEnum;

  /**
   * ImplementationGuide.fhirVersion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIR Version(s) this Implementation Guide targets
   * - **Definition:** The version(s) of the FHIR specification that this ImplementationGuide targets - e.g. describes how to use. The value of this element is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.3.0. for this version.
   * - **Comment:** Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  private fhirVersion: EnumCodeType[] | null;

  /**
   * ImplementationGuide.dependsOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Another Implementation guide this depends on
   * - **Definition:** Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private dependsOn?: ImplementationGuideDependsOnComponent[] | undefined;

  /**
   * ImplementationGuide.global Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Profiles that apply globally
   * - **Definition:** A set of profiles that all resources covered by this implementation guide must conform to.
   * - **Comment:** See [Default Profiles](https://hl7.org/fhir/implementationguide.html#default) for a discussion of which resources are \'covered\' by an implementation guide.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private global?: ImplementationGuideGlobalComponent[] | undefined;

  /**
   * ImplementationGuide.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information needed to build the IG
   * - **Definition:** The information needed by an IG publisher tool to publish the whole implementation guide.
   * - **Comment:** Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definition?: ImplementationGuideDefinitionComponent | undefined;

  /**
   * ImplementationGuide.manifest Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about an assembled IG
   * - **Definition:** Information about an assembled implementation guide, created by the publication tooling.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private manifest?: ImplementationGuideManifestComponent | undefined;

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
    assertIsDefined<UriType>(element, `ImplementationGuide.url is required`);
    const optErrMsg = `Invalid ImplementationGuide.url; Provided value is not an instance of UriType.`;
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
    assertIsDefined<fhirUri>(value, `ImplementationGuide.url is required`);
    const optErrMsg = `Invalid ImplementationGuide.url (${String(value)})`;
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
      const optErrMsg = `Invalid ImplementationGuide.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.version (${String(value)})`;
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
    assertIsDefined<StringType>(element, `ImplementationGuide.name is required`);
    const optErrMsg = `Invalid ImplementationGuide.name; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ImplementationGuide.name is required`);
    const optErrMsg = `Invalid ImplementationGuide.name (${String(value)})`;
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
      const optErrMsg = `Invalid ImplementationGuide.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.title (${String(value)})`;
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
    assertIsDefined<EnumCodeType>(enumType, `ImplementationGuide.status is required`);
    const errMsgPrefix = `Invalid ImplementationGuide.status`;
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
    assertIsDefined<CodeType>(element, `ImplementationGuide.status is required`);
    const optErrMsg = `Invalid ImplementationGuide.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `ImplementationGuide.status is required`);
    const optErrMsg = `Invalid ImplementationGuide.status (${String(value)})`;
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
      const optErrMsg = `Invalid ImplementationGuide.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid ImplementationGuide.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.date (${String(value)})`;
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
      const optErrMsg = `Invalid ImplementationGuide.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid ImplementationGuide.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ImplementationGuide.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ImplementationGuide.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.description (${String(value)})`;
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
      const optErrMsg = `Invalid ImplementationGuide.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ImplementationGuide.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ImplementationGuide.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ImplementationGuide.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ImplementationGuide.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.copyright (${String(value)})`;
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
   * @returns the `packageId` property value as a IdType object if defined; else null
   */
  public getPackageIdElement(): IdType | null {
    return this.packageId;
  }

  /**
   * Assigns the provided PrimitiveType value to the `packageId` property.
   *
   * @param element - the `packageId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPackageIdElement(element: IdType): this {
    assertIsDefined<IdType>(element, `ImplementationGuide.packageId is required`);
    const optErrMsg = `Invalid ImplementationGuide.packageId; Provided value is not an instance of IdType.`;
    assertFhirType<IdType>(element, IdType, optErrMsg);
    this.packageId = element;
    return this;
  }

  /**
   * @returns `true` if the `packageId` property exists and has a value; `false` otherwise
   */
  public hasPackageIdElement(): boolean {
    return isDefined<IdType>(this.packageId) && !this.packageId.isEmpty();
  }

  /**
   * @returns the `packageId` property value as a fhirId if defined; else null
   */
  public getPackageId(): fhirId | null {
    if (this.packageId?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.packageId.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `packageId` property.
   *
   * @param value - the `packageId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPackageId(value: fhirId): this {
    assertIsDefined<fhirId>(value, `ImplementationGuide.packageId is required`);
    const optErrMsg = `Invalid ImplementationGuide.packageId (${String(value)})`;
    this.packageId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `packageId` property exists and has a value; `false` otherwise
   */
  public hasPackageId(): boolean {
    return this.hasPackageIdElement();
  }

  /**
   * @returns the `license` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SpdxLicenseEnum }
   */
  public getLicenseEnumType(): EnumCodeType | undefined {
    return this.license;
  }

  /**
   * Assigns the provided EnumCodeType value to the `license` property.
   *
   * @param enumType - the `license` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SpdxLicenseEnum }
   */
  public setLicenseEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ImplementationGuide.license';
      assertEnumCodeType<SpdxLicenseEnum>(enumType, SpdxLicenseEnum, errMsgPrefix);
      this.license = enumType;
    } else {
      this.license = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `license` property exists and has a value; `false` otherwise
   */
  public hasLicenseEnumType(): boolean {
    return isDefined<EnumCodeType>(this.license) && !this.license.isEmpty() && this.license.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `license` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SpdxLicenseEnum }
   */
  public getLicenseElement(): CodeType | undefined {
    if (this.license === undefined) {
      return undefined;
    }
    return this.license as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `license` property.
   *
   * @param element - the `license` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SpdxLicenseEnum }
   */
  public setLicenseElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.license; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.license = new EnumCodeType(element, this.spdxLicenseEnum);
    } else {
      this.license = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `license` property exists and has a value; `false` otherwise
   */
  public hasLicenseElement(): boolean {
    return this.hasLicenseEnumType();
  }

  /**
   * @returns the `license` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SpdxLicenseEnum }
   */
  public getLicense(): fhirCode | undefined {
    if (this.license === undefined) {
      return undefined;
    }
    return this.license.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `license` property.
   *
   * @param value - the `license` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SpdxLicenseEnum }
   */
  public setLicense(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.license; Provided value is not an instance of fhirCode.`;
      this.license = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.spdxLicenseEnum);
    } else {
      this.license = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `license` property exists and has a value; `false` otherwise
   */
  public hasLicense(): boolean {
    return this.hasLicenseEnumType();
  }

  /**
   * @returns the `fhirVersion` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersionEnumType(): EnumCodeType[] {
    return this.fhirVersion ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `fhirVersion` property.
   *
   * @param enumType - the `fhirVersion` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public setFhirVersionEnumType(enumType: EnumCodeType[]): this {
    assertIsDefinedList<EnumCodeType>(enumType, `ImplementationGuide.fhirVersion is required`);
    const errMsgPrefix = `Invalid ImplementationGuide.fhirVersion`;
    assertEnumCodeTypeList<FhirVersionEnum>(enumType, FhirVersionEnum, errMsgPrefix);
    this.fhirVersion = enumType;
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `fhirVersion` array property.
   *
   * @param enumType - the `fhirVersion` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public addFhirVersionEnumType(enumType: EnumCodeType): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ImplementationGuide.fhirVersion`;
      assertEnumCodeType<FhirVersionEnum>(enumType, FhirVersionEnum, errMsgPrefix);
      this.initFhirVersion();
      this.fhirVersion?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `fhirVersion` property exists and has a value; `false` otherwise
   */
  public hasFhirVersionEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.fhirVersion) && this.fhirVersion.some((item: EnumCodeType) => !item.isEmpty()) && this.fhirVersion.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `fhirVersion` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersionElement(): CodeType[] {
    if (this.fhirVersion === null) {
      return [] as CodeType[];
    }
    return this.fhirVersion as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `fhirVersion` property.
   *
   * @param element - the `fhirVersion` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public setFhirVersionElement(element: CodeType[]): this {
    assertIsDefinedList<CodeType>(element, `ImplementationGuide.fhirVersion is required`);
    const optErrMsg = `Invalid ImplementationGuide.fhirVersion; Provided element array has an element that is not an instance of CodeType.`;
    assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
    const enumCodeTypes = [] as EnumCodeType[];
    element.forEach((type: CodeType) => {
      enumCodeTypes.push(new EnumCodeType(type, this.fhirVersionEnum));
    });
    this.fhirVersion = enumCodeTypes;
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `fhirVersion` array property.
   *
   * @param element - the `fhirVersion` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public addFhirVersionElement(element: CodeType): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.fhirVersion; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initFhirVersion();
      this.fhirVersion?.push(new EnumCodeType(element, this.fhirVersionEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `fhirVersion` property exists and has a value; `false` otherwise
   */
  public hasFhirVersionElement(): boolean {
    return this.hasFhirVersionEnumType();
  }

  /**
   * @returns the `fhirVersion` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersion(): fhirCode[] {
    if (this.fhirVersion === null) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.fhirVersion) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `fhirVersion` property.
   *
   * @param value - the `fhirVersion` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public setFhirVersion(value: fhirCode[]): this {
    assertIsDefinedList<fhirCode>(value, `ImplementationGuide.fhirVersion is required`);
    const enumCodeTypes = [] as EnumCodeType[];
    const optErrMsg = `Invalid ImplementationGuide.fhirVersion; Provided value is not an instance of fhirCode.`;
    value.forEach((val: fhirCode) => {
      enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.fhirVersionEnum));
    });
    this.fhirVersion = enumCodeTypes;
    return this;
  }

  /**
   * Add the provided primitive value to the `fhirVersion` array property.
   *
   * @param value - the `fhirVersion` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public addFhirVersion(value: fhirCode): this {
    if (isDefined<fhirCode>(value)) {
      this.initFhirVersion();
      const optErrMsg = `Invalid ImplementationGuide.fhirVersion; Provided value is not an instance of fhirCode.`;
      this.fhirVersion?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fhirVersionEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `fhirVersion` property exists and has a value; `false` otherwise
   */
  public hasFhirVersion(): boolean {
    return this.hasFhirVersionEnumType();
  }

  /**
   * Initialize the fhirVersion property
   */
  private initFhirVersion(): void {
    if(!this.hasFhirVersionEnumType()) {
      this.fhirVersion = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `dependsOn` property value as a ImplementationGuideDependsOnComponent array
   */
  public getDependsOn(): ImplementationGuideDependsOnComponent[] {
    return this.dependsOn ?? ([] as ImplementationGuideDependsOnComponent[]);
  }

  /**
   * Assigns the provided ImplementationGuideDependsOnComponent array value to the `dependsOn` property.
   *
   * @param value - the `dependsOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDependsOn(value: ImplementationGuideDependsOnComponent[] | undefined): this {
    if (isDefinedList<ImplementationGuideDependsOnComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.dependsOn; Provided value array has an element that is not an instance of ImplementationGuideDependsOnComponent.`;
      assertFhirTypeList<ImplementationGuideDependsOnComponent>(value, ImplementationGuideDependsOnComponent, optErrMsg);
      this.dependsOn = value;
    } else {
      this.dependsOn = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImplementationGuideDependsOnComponent value to the `dependsOn` array property.
   *
   * @param value - the `dependsOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDependsOn(value: ImplementationGuideDependsOnComponent | undefined): this {
    if (isDefined<ImplementationGuideDependsOnComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.dependsOn; Provided element is not an instance of ImplementationGuideDependsOnComponent.`;
      assertFhirType<ImplementationGuideDependsOnComponent>(value, ImplementationGuideDependsOnComponent, optErrMsg);
      this.initDependsOn();
      this.dependsOn?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dependsOn` property exists and has a value; `false` otherwise
   */
  public hasDependsOn(): boolean {
    return isDefinedList<ImplementationGuideDependsOnComponent>(this.dependsOn) && this.dependsOn.some((item: ImplementationGuideDependsOnComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dependsOn` property
   */
  private initDependsOn(): void {
    if(!this.hasDependsOn()) {
      this.dependsOn = [] as ImplementationGuideDependsOnComponent[];
    }
  }

  /**
   * @returns the `global` property value as a ImplementationGuideGlobalComponent array
   */
  public getGlobal(): ImplementationGuideGlobalComponent[] {
    return this.global ?? ([] as ImplementationGuideGlobalComponent[]);
  }

  /**
   * Assigns the provided ImplementationGuideGlobalComponent array value to the `global` property.
   *
   * @param value - the `global` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGlobal(value: ImplementationGuideGlobalComponent[] | undefined): this {
    if (isDefinedList<ImplementationGuideGlobalComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.global; Provided value array has an element that is not an instance of ImplementationGuideGlobalComponent.`;
      assertFhirTypeList<ImplementationGuideGlobalComponent>(value, ImplementationGuideGlobalComponent, optErrMsg);
      this.global = value;
    } else {
      this.global = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImplementationGuideGlobalComponent value to the `global` array property.
   *
   * @param value - the `global` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGlobal(value: ImplementationGuideGlobalComponent | undefined): this {
    if (isDefined<ImplementationGuideGlobalComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.global; Provided element is not an instance of ImplementationGuideGlobalComponent.`;
      assertFhirType<ImplementationGuideGlobalComponent>(value, ImplementationGuideGlobalComponent, optErrMsg);
      this.initGlobal();
      this.global?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `global` property exists and has a value; `false` otherwise
   */
  public hasGlobal(): boolean {
    return isDefinedList<ImplementationGuideGlobalComponent>(this.global) && this.global.some((item: ImplementationGuideGlobalComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `global` property
   */
  private initGlobal(): void {
    if(!this.hasGlobal()) {
      this.global = [] as ImplementationGuideGlobalComponent[];
    }
  }

  /**
   * @returns the `definition` property value as a ImplementationGuideDefinitionComponent object if defined; else an empty ImplementationGuideDefinitionComponent object
   */
  public getDefinition(): ImplementationGuideDefinitionComponent {
    return this.definition ?? new ImplementationGuideDefinitionComponent();
  }

  /**
   * Assigns the provided Definition object value to the `definition` property.
   *
   * @param value - the `definition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDefinition(value: ImplementationGuideDefinitionComponent | undefined): this {
    if (isDefined<ImplementationGuideDefinitionComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition; Provided element is not an instance of ImplementationGuideDefinitionComponent.`;
      assertFhirType<ImplementationGuideDefinitionComponent>(value, ImplementationGuideDefinitionComponent, optErrMsg);
      this.definition = value;
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinition(): boolean {
    return isDefined<ImplementationGuideDefinitionComponent>(this.definition) && !this.definition.isEmpty();
  }

  /**
   * @returns the `manifest` property value as a ImplementationGuideManifestComponent object if defined; else an empty ImplementationGuideManifestComponent object
   */
  public getManifest(): ImplementationGuideManifestComponent {
    return this.manifest ?? new ImplementationGuideManifestComponent();
  }

  /**
   * Assigns the provided Manifest object value to the `manifest` property.
   *
   * @param value - the `manifest` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setManifest(value: ImplementationGuideManifestComponent | undefined): this {
    if (isDefined<ImplementationGuideManifestComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest; Provided element is not an instance of ImplementationGuideManifestComponent.`;
      assertFhirType<ImplementationGuideManifestComponent>(value, ImplementationGuideManifestComponent, optErrMsg);
      this.manifest = value;
    } else {
      this.manifest = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `manifest` property exists and has a value; `false` otherwise
   */
  public hasManifest(): boolean {
    return isDefined<ImplementationGuideManifestComponent>(this.manifest) && !this.manifest.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImplementationGuide';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
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
      this.copyright,
      this.packageId,
      this.license,
      this.fhirVersion,
      this.dependsOn,
      this.global,
      this.definition,
      this.manifest,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuide {
    const dest = new ImplementationGuide();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuide): void {
    super.copyValues(dest);
    dest.url = this.url ? this.url.copy() : null;
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
    dest.copyright = this.copyright?.copy();
    dest.packageId = this.packageId ? this.packageId.copy() : null;
    dest.license = this.license?.copy();
    const fhirVersionList = copyListValues<EnumCodeType>(this.fhirVersion);
    dest.fhirVersion = fhirVersionList.length === 0 ? null : fhirVersionList;
    const dependsOnList = copyListValues<ImplementationGuideDependsOnComponent>(this.dependsOn);
    dest.dependsOn = dependsOnList.length === 0 ? undefined : dependsOnList;
    const globalList = copyListValues<ImplementationGuideGlobalComponent>(this.global);
    dest.global = globalList.length === 0 ? undefined : globalList;
    dest.definition = this.definition?.copy();
    dest.manifest = this.manifest?.copy();
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
      missingReqdProperties.push(`ImplementationGuide.url`);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasNameElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.name`);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.status`);
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

    if (this.hasCopyrightElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCopyrightElement(), 'copyright', jsonObj);
    }

    if (this.hasPackageIdElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirId>(this.getPackageIdElement()!, 'packageId', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.packageId`);
    }

    if (this.hasLicenseElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getLicenseElement()!, 'license', jsonObj);
    }

    if (this.hasFhirVersionElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getFhirVersionElement(), 'fhirVersion', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.fhirVersion`);
    }

    if (this.hasDependsOn()) {
      setFhirBackboneElementListJson(this.getDependsOn(), 'dependsOn', jsonObj);
    }

    if (this.hasGlobal()) {
      setFhirBackboneElementListJson(this.getGlobal(), 'global', jsonObj);
    }

    if (this.hasDefinition()) {
      setFhirBackboneElementJson(this.getDefinition(), 'definition', jsonObj);
    }

    if (this.hasManifest()) {
      setFhirBackboneElementJson(this.getManifest(), 'manifest', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ImplementationGuideDependsOnComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Another Implementation guide this depends on
 * - **Definition:** Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuideDependsOnComponent extends BackboneElement implements IBackboneElement {
  constructor(uri: CanonicalType | fhirCanonical | null = null) {
    super();

    this.uri = null;
    if (isDefined<CanonicalType | fhirCanonical>(uri)) {
      if (uri instanceof PrimitiveType) {
        this.setUriElement(uri);
      } else {
        this.setUri(uri);
      }
    }
  }

  /**
   * Parse the provided `ImplementationGuideDependsOnComponent` JSON to instantiate the ImplementationGuideDependsOnComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuideDependsOnComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuideDependsOnComponent
   * @returns ImplementationGuideDependsOnComponent data model or undefined for `ImplementationGuideDependsOnComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuideDependsOnComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuideDependsOnComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuideDependsOnComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'uri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setUriElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'packageId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setPackageIdElement(datatype);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ImplementationGuide.dependsOn.uri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identity of the IG that this depends on
   * - **Definition:** A canonical reference to the Implementation guide for the dependency.
   * - **Comment:** Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ImplementationGuide',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private uri: CanonicalType | null;

  /**
   * ImplementationGuide.dependsOn.packageId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** NPM Package name for IG this depends on
   * - **Definition:** The NPM package name for the Implementation Guide that this IG depends on.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private packageId?: IdType | undefined;

  /**
   * ImplementationGuide.dependsOn.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Version of the IG
   * - **Definition:** The version of the IG that is depended on, when the correct version is required to understand the IG correctly.
   * - **Comment:** This follows the syntax of the NPM packaging version field - see [[reference]].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `uri` property value as a CanonicalType object if defined; else null
   */
  public getUriElement(): CanonicalType | null {
    return this.uri;
  }

  /**
   * Assigns the provided PrimitiveType value to the `uri` property.
   *
   * @param element - the `uri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUriElement(element: CanonicalType): this {
    assertIsDefined<CanonicalType>(element, `ImplementationGuide.dependsOn.uri is required`);
    const optErrMsg = `Invalid ImplementationGuide.dependsOn.uri; Provided value is not an instance of CanonicalType.`;
    assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
    this.uri = element;
    return this;
  }

  /**
   * @returns `true` if the `uri` property exists and has a value; `false` otherwise
   */
  public hasUriElement(): boolean {
    return isDefined<CanonicalType>(this.uri) && !this.uri.isEmpty();
  }

  /**
   * @returns the `uri` property value as a fhirCanonical if defined; else null
   */
  public getUri(): fhirCanonical | null {
    if (this.uri?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.uri.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `uri` property.
   *
   * @param value - the `uri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUri(value: fhirCanonical): this {
    assertIsDefined<fhirCanonical>(value, `ImplementationGuide.dependsOn.uri is required`);
    const optErrMsg = `Invalid ImplementationGuide.dependsOn.uri (${String(value)})`;
    this.uri = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `uri` property exists and has a value; `false` otherwise
   */
  public hasUri(): boolean {
    return this.hasUriElement();
  }

  /**
   * @returns the `packageId` property value as a IdType object if defined; else an empty IdType object
   */
  public getPackageIdElement(): IdType {
    return this.packageId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `packageId` property.
   *
   * @param element - the `packageId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPackageIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.dependsOn.packageId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.packageId = element;
    } else {
      this.packageId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `packageId` property exists and has a value; `false` otherwise
   */
  public hasPackageIdElement(): boolean {
    return isDefined<IdType>(this.packageId) && !this.packageId.isEmpty();
  }

  /**
   * @returns the `packageId` property value as a fhirId if defined; else undefined
   */
  public getPackageId(): fhirId | undefined {
    return this.packageId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `packageId` property.
   *
   * @param value - the `packageId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPackageId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.dependsOn.packageId (${String(value)})`;
      this.packageId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.packageId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `packageId` property exists and has a value; `false` otherwise
   */
  public hasPackageId(): boolean {
    return this.hasPackageIdElement();
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
      const optErrMsg = `Invalid ImplementationGuide.dependsOn.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.dependsOn.version (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImplementationGuide.dependsOn';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.uri,
      this.packageId,
      this.version,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuideDependsOnComponent {
    const dest = new ImplementationGuideDependsOnComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuideDependsOnComponent): void {
    super.copyValues(dest);
    dest.uri = this.uri ? this.uri.copy() : null;
    dest.packageId = this.packageId?.copy();
    dest.version = this.version?.copy();
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

    if (this.hasUriElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCanonical>(this.getUriElement()!, 'uri', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.dependsOn.uri`);
    }

    if (this.hasPackageIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getPackageIdElement(), 'packageId', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ImplementationGuideGlobalComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Profiles that apply globally
 * - **Definition:** A set of profiles that all resources covered by this implementation guide must conform to.
 * - **Comment:** See [Default Profiles](https://hl7.org/fhir/implementationguide.html#default) for a discussion of which resources are \'covered\' by an implementation guide.
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuideGlobalComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null, profile: CanonicalType | fhirCanonical | null = null) {
    super();

    this.resourceTypesEnum = new ResourceTypesEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<ResourceTypesEnum>(
      type_,
      ResourceTypesEnum,
      this.resourceTypesEnum,
      'ImplementationGuide.global.type',
    );

    this.profile = null;
    if (isDefined<CanonicalType | fhirCanonical>(profile)) {
      if (profile instanceof PrimitiveType) {
        this.setProfileElement(profile);
      } else {
        this.setProfile(profile);
      }
    }
  }

  /**
   * Parse the provided `ImplementationGuideGlobalComponent` JSON to instantiate the ImplementationGuideGlobalComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuideGlobalComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuideGlobalComponent
   * @returns ImplementationGuideGlobalComponent data model or undefined for `ImplementationGuideGlobalComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuideGlobalComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuideGlobalComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuideGlobalComponent();

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

    fieldName = 'profile';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setProfileElement(datatype);
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
   * FHIR CodeSystem: ResourceTypes
   *
   * @see {@link ResourceTypesEnum }
   */
  private readonly resourceTypesEnum: ResourceTypesEnum;

  /**
   * ImplementationGuide.global.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type this profile applies to
   * - **Definition:** The type of resource that all instances must conform to.
   * - **Comment:** The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * ImplementationGuide.global.profile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Profile that all resources must conform to
   * - **Definition:** A reference to the profile that all instances must conform to.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private profile: CanonicalType | null;

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
    assertIsDefined<EnumCodeType>(enumType, `ImplementationGuide.global.type is required`);
    const errMsgPrefix = `Invalid ImplementationGuide.global.type`;
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
    assertIsDefined<CodeType>(element, `ImplementationGuide.global.type is required`);
    const optErrMsg = `Invalid ImplementationGuide.global.type; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `ImplementationGuide.global.type is required`);
    const optErrMsg = `Invalid ImplementationGuide.global.type (${String(value)})`;
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
   * @returns the `profile` property value as a CanonicalType object if defined; else null
   */
  public getProfileElement(): CanonicalType | null {
    return this.profile;
  }

  /**
   * Assigns the provided PrimitiveType value to the `profile` property.
   *
   * @param element - the `profile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProfileElement(element: CanonicalType): this {
    assertIsDefined<CanonicalType>(element, `ImplementationGuide.global.profile is required`);
    const optErrMsg = `Invalid ImplementationGuide.global.profile; Provided value is not an instance of CanonicalType.`;
    assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
    this.profile = element;
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfileElement(): boolean {
    return isDefined<CanonicalType>(this.profile) && !this.profile.isEmpty();
  }

  /**
   * @returns the `profile` property value as a fhirCanonical if defined; else null
   */
  public getProfile(): fhirCanonical | null {
    if (this.profile?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.profile.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `profile` property.
   *
   * @param value - the `profile` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProfile(value: fhirCanonical): this {
    assertIsDefined<fhirCanonical>(value, `ImplementationGuide.global.profile is required`);
    const optErrMsg = `Invalid ImplementationGuide.global.profile (${String(value)})`;
    this.profile = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfile(): boolean {
    return this.hasProfileElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImplementationGuide.global';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.profile,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuideGlobalComponent {
    const dest = new ImplementationGuideGlobalComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuideGlobalComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.profile = this.profile ? this.profile.copy() : null;
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
      missingReqdProperties.push(`ImplementationGuide.global.type`);
    }

    if (this.hasProfileElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCanonical>(this.getProfileElement()!, 'profile', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.global.profile`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ImplementationGuideDefinitionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information needed to build the IG
 * - **Definition:** The information needed by an IG publisher tool to publish the whole implementation guide.
 * - **Comment:** Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuideDefinitionComponent extends BackboneElement implements IBackboneElement {
  constructor(resource: ImplementationGuideDefinitionResourceComponent[] | null = null) {
    super();

    this.resource = null;
    if (isDefinedList<ImplementationGuideDefinitionResourceComponent>(resource)) {
      this.setResource(resource);
    }
  }

  /**
   * Parse the provided `ImplementationGuideDefinitionComponent` JSON to instantiate the ImplementationGuideDefinitionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuideDefinitionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuideDefinitionComponent
   * @returns ImplementationGuideDefinitionComponent data model or undefined for `ImplementationGuideDefinitionComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuideDefinitionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuideDefinitionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuideDefinitionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'grouping';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImplementationGuideDefinitionGroupingComponent | undefined = ImplementationGuideDefinitionGroupingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addGrouping(component);
        }
      });
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImplementationGuideDefinitionResourceComponent | undefined = ImplementationGuideDefinitionResourceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addResource(component);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'page';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ImplementationGuideDefinitionPageComponent | undefined = ImplementationGuideDefinitionPageComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPage(component);
    }

    fieldName = 'parameter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImplementationGuideDefinitionParameterComponent | undefined = ImplementationGuideDefinitionParameterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParameter(component);
        }
      });
    }

    fieldName = 'template';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImplementationGuideDefinitionTemplateComponent | undefined = ImplementationGuideDefinitionTemplateComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTemplate(component);
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
   * ImplementationGuide.definition.grouping Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Grouping used to present related resources in the IG
   * - **Definition:** A logical group of resources. Logical groups can be used when building pages.
   * - **Comment:** Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private grouping?: ImplementationGuideDefinitionGroupingComponent[] | undefined;

  /**
   * ImplementationGuide.definition.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource in the implementation guide
   * - **Definition:** A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private resource: ImplementationGuideDefinitionResourceComponent[] | null;

  /**
   * ImplementationGuide.definition.page Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Page/Section in the Guide
   * - **Definition:** A page / section in the implementation guide. The root page is the implementation guide home page.
   * - **Comment:** Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private page?: ImplementationGuideDefinitionPageComponent | undefined;

  /**
   * ImplementationGuide.definition.parameter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defines how IG is built by tools
   * - **Definition:** Defines how IG is built by tools.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parameter?: ImplementationGuideDefinitionParameterComponent[] | undefined;

  /**
   * ImplementationGuide.definition.template Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A template for building resources
   * - **Definition:** A template for building resources.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private template?: ImplementationGuideDefinitionTemplateComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `grouping` property value as a ImplementationGuideDefinitionGroupingComponent array
   */
  public getGrouping(): ImplementationGuideDefinitionGroupingComponent[] {
    return this.grouping ?? ([] as ImplementationGuideDefinitionGroupingComponent[]);
  }

  /**
   * Assigns the provided ImplementationGuideDefinitionGroupingComponent array value to the `grouping` property.
   *
   * @param value - the `grouping` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGrouping(value: ImplementationGuideDefinitionGroupingComponent[] | undefined): this {
    if (isDefinedList<ImplementationGuideDefinitionGroupingComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.grouping; Provided value array has an element that is not an instance of ImplementationGuideDefinitionGroupingComponent.`;
      assertFhirTypeList<ImplementationGuideDefinitionGroupingComponent>(value, ImplementationGuideDefinitionGroupingComponent, optErrMsg);
      this.grouping = value;
    } else {
      this.grouping = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImplementationGuideDefinitionGroupingComponent value to the `grouping` array property.
   *
   * @param value - the `grouping` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGrouping(value: ImplementationGuideDefinitionGroupingComponent | undefined): this {
    if (isDefined<ImplementationGuideDefinitionGroupingComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.grouping; Provided element is not an instance of ImplementationGuideDefinitionGroupingComponent.`;
      assertFhirType<ImplementationGuideDefinitionGroupingComponent>(value, ImplementationGuideDefinitionGroupingComponent, optErrMsg);
      this.initGrouping();
      this.grouping?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `grouping` property exists and has a value; `false` otherwise
   */
  public hasGrouping(): boolean {
    return isDefinedList<ImplementationGuideDefinitionGroupingComponent>(this.grouping) && this.grouping.some((item: ImplementationGuideDefinitionGroupingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `grouping` property
   */
  private initGrouping(): void {
    if(!this.hasGrouping()) {
      this.grouping = [] as ImplementationGuideDefinitionGroupingComponent[];
    }
  }

  /**
   * @returns the `resource` property value as a ImplementationGuideDefinitionResourceComponent array
   */
  public getResource(): ImplementationGuideDefinitionResourceComponent[] {
    return this.resource ?? ([] as ImplementationGuideDefinitionResourceComponent[]);
  }

  /**
   * Assigns the provided ImplementationGuideDefinitionResourceComponent array value to the `resource` property.
   *
   * @param value - the `resource` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResource(value: ImplementationGuideDefinitionResourceComponent[]): this {
    assertIsDefinedList<ImplementationGuideDefinitionResourceComponent>(value, `ImplementationGuide.definition.resource is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.resource; Provided value array has an element that is not an instance of ImplementationGuideDefinitionResourceComponent.`;
    assertFhirTypeList<ImplementationGuideDefinitionResourceComponent>(value, ImplementationGuideDefinitionResourceComponent, optErrMsg);
    this.resource = value;
    return this;
  }

  /**
   * Add the provided ImplementationGuideDefinitionResourceComponent value to the `resource` array property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addResource(value: ImplementationGuideDefinitionResourceComponent | undefined): this {
    if (isDefined<ImplementationGuideDefinitionResourceComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.resource; Provided element is not an instance of ImplementationGuideDefinitionResourceComponent.`;
      assertFhirType<ImplementationGuideDefinitionResourceComponent>(value, ImplementationGuideDefinitionResourceComponent, optErrMsg);
      this.initResource();
      this.resource?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return isDefinedList<ImplementationGuideDefinitionResourceComponent>(this.resource) && this.resource.some((item: ImplementationGuideDefinitionResourceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `resource` property
   */
  private initResource(): void {
    if(!this.hasResource()) {
      this.resource = [] as ImplementationGuideDefinitionResourceComponent[];
    }
  }

  /**
   * @returns the `page` property value as a ImplementationGuideDefinitionPageComponent object if defined; else an empty ImplementationGuideDefinitionPageComponent object
   */
  public getPage(): ImplementationGuideDefinitionPageComponent {
    return this.page ?? new ImplementationGuideDefinitionPageComponent();
  }

  /**
   * Assigns the provided Page object value to the `page` property.
   *
   * @param value - the `page` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPage(value: ImplementationGuideDefinitionPageComponent | undefined): this {
    if (isDefined<ImplementationGuideDefinitionPageComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.page; Provided element is not an instance of ImplementationGuideDefinitionPageComponent.`;
      assertFhirType<ImplementationGuideDefinitionPageComponent>(value, ImplementationGuideDefinitionPageComponent, optErrMsg);
      this.page = value;
    } else {
      this.page = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `page` property exists and has a value; `false` otherwise
   */
  public hasPage(): boolean {
    return isDefined<ImplementationGuideDefinitionPageComponent>(this.page) && !this.page.isEmpty();
  }

  /**
   * @returns the `parameter` property value as a ImplementationGuideDefinitionParameterComponent array
   */
  public getParameter(): ImplementationGuideDefinitionParameterComponent[] {
    return this.parameter ?? ([] as ImplementationGuideDefinitionParameterComponent[]);
  }

  /**
   * Assigns the provided ImplementationGuideDefinitionParameterComponent array value to the `parameter` property.
   *
   * @param value - the `parameter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParameter(value: ImplementationGuideDefinitionParameterComponent[] | undefined): this {
    if (isDefinedList<ImplementationGuideDefinitionParameterComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.parameter; Provided value array has an element that is not an instance of ImplementationGuideDefinitionParameterComponent.`;
      assertFhirTypeList<ImplementationGuideDefinitionParameterComponent>(value, ImplementationGuideDefinitionParameterComponent, optErrMsg);
      this.parameter = value;
    } else {
      this.parameter = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImplementationGuideDefinitionParameterComponent value to the `parameter` array property.
   *
   * @param value - the `parameter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParameter(value: ImplementationGuideDefinitionParameterComponent | undefined): this {
    if (isDefined<ImplementationGuideDefinitionParameterComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.parameter; Provided element is not an instance of ImplementationGuideDefinitionParameterComponent.`;
      assertFhirType<ImplementationGuideDefinitionParameterComponent>(value, ImplementationGuideDefinitionParameterComponent, optErrMsg);
      this.initParameter();
      this.parameter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parameter` property exists and has a value; `false` otherwise
   */
  public hasParameter(): boolean {
    return isDefinedList<ImplementationGuideDefinitionParameterComponent>(this.parameter) && this.parameter.some((item: ImplementationGuideDefinitionParameterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `parameter` property
   */
  private initParameter(): void {
    if(!this.hasParameter()) {
      this.parameter = [] as ImplementationGuideDefinitionParameterComponent[];
    }
  }

  /**
   * @returns the `template` property value as a ImplementationGuideDefinitionTemplateComponent array
   */
  public getTemplate(): ImplementationGuideDefinitionTemplateComponent[] {
    return this.template ?? ([] as ImplementationGuideDefinitionTemplateComponent[]);
  }

  /**
   * Assigns the provided ImplementationGuideDefinitionTemplateComponent array value to the `template` property.
   *
   * @param value - the `template` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTemplate(value: ImplementationGuideDefinitionTemplateComponent[] | undefined): this {
    if (isDefinedList<ImplementationGuideDefinitionTemplateComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.template; Provided value array has an element that is not an instance of ImplementationGuideDefinitionTemplateComponent.`;
      assertFhirTypeList<ImplementationGuideDefinitionTemplateComponent>(value, ImplementationGuideDefinitionTemplateComponent, optErrMsg);
      this.template = value;
    } else {
      this.template = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImplementationGuideDefinitionTemplateComponent value to the `template` array property.
   *
   * @param value - the `template` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTemplate(value: ImplementationGuideDefinitionTemplateComponent | undefined): this {
    if (isDefined<ImplementationGuideDefinitionTemplateComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.template; Provided element is not an instance of ImplementationGuideDefinitionTemplateComponent.`;
      assertFhirType<ImplementationGuideDefinitionTemplateComponent>(value, ImplementationGuideDefinitionTemplateComponent, optErrMsg);
      this.initTemplate();
      this.template?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `template` property exists and has a value; `false` otherwise
   */
  public hasTemplate(): boolean {
    return isDefinedList<ImplementationGuideDefinitionTemplateComponent>(this.template) && this.template.some((item: ImplementationGuideDefinitionTemplateComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `template` property
   */
  private initTemplate(): void {
    if(!this.hasTemplate()) {
      this.template = [] as ImplementationGuideDefinitionTemplateComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImplementationGuide.definition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.grouping,
      this.resource,
      this.page,
      this.parameter,
      this.template,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuideDefinitionComponent {
    const dest = new ImplementationGuideDefinitionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuideDefinitionComponent): void {
    super.copyValues(dest);
    const groupingList = copyListValues<ImplementationGuideDefinitionGroupingComponent>(this.grouping);
    dest.grouping = groupingList.length === 0 ? undefined : groupingList;
    const resourceList = copyListValues<ImplementationGuideDefinitionResourceComponent>(this.resource);
    dest.resource = resourceList.length === 0 ? null : resourceList;
    dest.page = this.page?.copy();
    const parameterList = copyListValues<ImplementationGuideDefinitionParameterComponent>(this.parameter);
    dest.parameter = parameterList.length === 0 ? undefined : parameterList;
    const templateList = copyListValues<ImplementationGuideDefinitionTemplateComponent>(this.template);
    dest.template = templateList.length === 0 ? undefined : templateList;
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

    if (this.hasGrouping()) {
      setFhirBackboneElementListJson(this.getGrouping(), 'grouping', jsonObj);
    }

    if (this.hasResource()) {
      setFhirBackboneElementListJson(this.getResource(), 'resource', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.definition.resource`);
    }

    if (this.hasPage()) {
      setFhirBackboneElementJson(this.getPage(), 'page', jsonObj);
    }

    if (this.hasParameter()) {
      setFhirBackboneElementListJson(this.getParameter(), 'parameter', jsonObj);
    }

    if (this.hasTemplate()) {
      setFhirBackboneElementListJson(this.getTemplate(), 'template', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ImplementationGuideDefinitionGroupingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Grouping used to present related resources in the IG
 * - **Definition:** A logical group of resources. Logical groups can be used when building pages.
 * - **Comment:** Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuideDefinitionGroupingComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ImplementationGuideDefinitionGroupingComponent` JSON to instantiate the ImplementationGuideDefinitionGroupingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuideDefinitionGroupingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuideDefinitionGroupingComponent
   * @returns ImplementationGuideDefinitionGroupingComponent data model or undefined for `ImplementationGuideDefinitionGroupingComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuideDefinitionGroupingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuideDefinitionGroupingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuideDefinitionGroupingComponent();

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
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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
   * ImplementationGuide.definition.grouping.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Descriptive name for the package
   * - **Definition:** The human-readable title to display for the package of resources when rendering the implementation guide.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name: StringType | null;

  /**
   * ImplementationGuide.definition.grouping.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human readable text describing the package
   * - **Definition:** Human readable text describing the package.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

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
    assertIsDefined<StringType>(element, `ImplementationGuide.definition.grouping.name is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.grouping.name; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ImplementationGuide.definition.grouping.name is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.grouping.name (${String(value)})`;
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
      const optErrMsg = `Invalid ImplementationGuide.definition.grouping.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.definition.grouping.description (${String(value)})`;
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
    return 'ImplementationGuide.definition.grouping';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.description,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuideDefinitionGroupingComponent {
    const dest = new ImplementationGuideDefinitionGroupingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuideDefinitionGroupingComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
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

    if (this.hasNameElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.definition.grouping.name`);
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
/**
 * ImplementationGuideDefinitionResourceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Resource in the implementation guide
 * - **Definition:** A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuideDefinitionResourceComponent extends BackboneElement implements IBackboneElement {
  constructor(reference: Reference | null = null) {
    super();

    this.fhirVersionEnum = new FhirVersionEnum();

    this.reference = null;
    if (isDefined<Reference>(reference)) {
      this.setReference(reference);
    }
  }

  /**
   * Parse the provided `ImplementationGuideDefinitionResourceComponent` JSON to instantiate the ImplementationGuideDefinitionResourceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuideDefinitionResourceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuideDefinitionResourceComponent
   * @returns ImplementationGuideDefinitionResourceComponent data model or undefined for `ImplementationGuideDefinitionResourceComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuideDefinitionResourceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuideDefinitionResourceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuideDefinitionResourceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ImplementationGuideDefinitionResourceComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ImplementationGuideDefinitionResourceComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setReference(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'fhirVersion';
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
          instance.addFhirVersionElement(datatype);
        }
      });
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'example[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const example: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setExample(example);

    fieldName = 'groupingId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setGroupingIdElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ImplementationGuide.definition.resource.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location of the resource
   * - **Definition:** Where this resource is found.
   * - **Comment:** Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference: Reference | null;

  /**
   * FHIR CodeSystem: FhirVersion
   *
   * @see {@link FhirVersionEnum }
   */
  private readonly fhirVersionEnum: FhirVersionEnum;

  /**
   * ImplementationGuide.definition.resource.fhirVersion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Versions this applies to (if different to IG)
   * - **Definition:** Indicates the FHIR Version(s) this artifact is intended to apply to. If no versions are specified, the resource is assumed to apply to all the versions stated in ImplementationGuide.fhirVersion.
   * - **Comment:** The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](https://hl7.org/fhir/extension-structuredefinition-applicable-version.html) extension.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  private fhirVersion?: EnumCodeType[] | undefined;

  /**
   * ImplementationGuide.definition.resource.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human Name for the resource
   * - **Definition:** A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * ImplementationGuide.definition.resource.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reason why included in guide
   * - **Definition:** A description of the reason that a resource has been included in the implementation guide.
   * - **Comment:** This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * ImplementationGuide.definition.resource.example[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ImplementationGuide.definition.resource.example[x]', ['boolean','canonical',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Is an example/What is this an example of?
   * - **Definition:** If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.
   * - **Comment:** Examples:  * StructureDefinition -> Any  * ValueSet -> expansion  * OperationDefinition -> Parameters  * Questionnaire -> QuestionnaireResponse.
   * - **FHIR Types:**
   *     'boolean',
   *     'canonical',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ImplementationGuide.definition.resource.example[x]',[
    'boolean',
    'canonical',
  ])
  private example?: IDataType | undefined;

  /**
   * ImplementationGuide.definition.resource.groupingId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Grouping this is part of
   * - **Definition:** Reference to the id of the grouping this resource appears in.
   * - **Comment:** This must correspond to a package.id element within this implementation guide.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private groupingId?: IdType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `reference` property value as a Reference object if defined; else null
   */
  public getReference(): Reference | null {
    return this.reference;
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('ImplementationGuide.definition.resource.reference', ['Resource',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImplementationGuide.definition.resource.reference', [
    'Resource',
  ])
  public setReference(value: Reference): this {
    assertIsDefined<Reference>(value, `ImplementationGuide.definition.resource.reference is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.reference = value;
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /**
   * @returns the `fhirVersion` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersionEnumType(): EnumCodeType[] {
    return this.fhirVersion ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `fhirVersion` property.
   *
   * @param enumType - the `fhirVersion` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public setFhirVersionEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ImplementationGuide.definition.resource.fhirVersion`;
      assertEnumCodeTypeList<FhirVersionEnum>(enumType, FhirVersionEnum, errMsgPrefix);
      this.fhirVersion = enumType;
    } else {
      this.fhirVersion = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `fhirVersion` array property.
   *
   * @param enumType - the `fhirVersion` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public addFhirVersionEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ImplementationGuide.definition.resource.fhirVersion`;
      assertEnumCodeType<FhirVersionEnum>(enumType, FhirVersionEnum, errMsgPrefix);
      this.initFhirVersion();
      this.fhirVersion?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `fhirVersion` property exists and has a value; `false` otherwise
   */
  public hasFhirVersionEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.fhirVersion) && this.fhirVersion.some((item: EnumCodeType) => !item.isEmpty()) && this.fhirVersion.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `fhirVersion` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersionElement(): CodeType[] {
    if (this.fhirVersion === undefined) {
      return [] as CodeType[];
    }
    return this.fhirVersion as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `fhirVersion` property.
   *
   * @param element - the `fhirVersion` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public setFhirVersionElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.resource.fhirVersion; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.fhirVersionEnum));
      });
      this.fhirVersion = enumCodeTypes;
    } else {
      this.fhirVersion = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `fhirVersion` array property.
   *
   * @param element - the `fhirVersion` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public addFhirVersionElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.resource.fhirVersion; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initFhirVersion();
      this.fhirVersion?.push(new EnumCodeType(element, this.fhirVersionEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `fhirVersion` property exists and has a value; `false` otherwise
   */
  public hasFhirVersionElement(): boolean {
    return this.hasFhirVersionEnumType();
  }

  /**
   * @returns the `fhirVersion` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersion(): fhirCode[] {
    if (this.fhirVersion === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.fhirVersion) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `fhirVersion` property.
   *
   * @param value - the `fhirVersion` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public setFhirVersion(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid ImplementationGuide.definition.resource.fhirVersion; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.fhirVersionEnum));
      });
      this.fhirVersion = enumCodeTypes;
    } else {
      this.fhirVersion = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `fhirVersion` array property.
   *
   * @param value - the `fhirVersion` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public addFhirVersion(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initFhirVersion();
      const optErrMsg = `Invalid ImplementationGuide.definition.resource.fhirVersion; Provided value is not an instance of fhirCode.`;
      this.fhirVersion?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fhirVersionEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `fhirVersion` property exists and has a value; `false` otherwise
   */
  public hasFhirVersion(): boolean {
    return this.hasFhirVersionEnumType();
  }

  /**
   * Initialize the fhirVersion property
   */
  private initFhirVersion(): void {
    if(!this.hasFhirVersionEnumType()) {
      this.fhirVersion = [] as EnumCodeType[];
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
      const optErrMsg = `Invalid ImplementationGuide.definition.resource.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.definition.resource.name (${String(value)})`;
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
      const optErrMsg = `Invalid ImplementationGuide.definition.resource.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.definition.resource.description (${String(value)})`;
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
   * @returns the `example` property value as a DataType object if defined; else undefined
   */
  public getExample(): IDataType | undefined {
    return this.example;
  }

  /**
   * Assigns the provided DataType object value to the `example` property.
   *
   * @decorator `@ChoiceDataTypes('ImplementationGuide.definition.resource.example[x]')`
   *
   * @param value - the `example` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ImplementationGuide.definition.resource.example[x]')
  public setExample(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.example = value;
    } else {
      this.example = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `example` property exists and has a value; `false` otherwise
   */
  public hasExample(): boolean {
    return isDefined<IDataType>(this.example) && !this.example.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `example` property value as a BooleanType object if defined; else undefined
   */
  public getExampleBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.example)) {
      return undefined;
    }
    if (!(this.example instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ImplementationGuide.definition.resource.example[x]: Expected BooleanType but encountered ${this.example.fhirType()}`,
      );
    }
    return this.example;
  }

  /**
   * @returns `true` if the `example` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasExampleBooleanType(): boolean {
    return this.hasExample() && this.example instanceof BooleanType;
  }

  /**
   * @returns the `example` property value as a CanonicalType object if defined; else undefined
   */
  public getExampleCanonicalType(): CanonicalType | undefined {
    if (!isDefined<IDataType | undefined>(this.example)) {
      return undefined;
    }
    if (!(this.example instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ImplementationGuide.definition.resource.example[x]: Expected CanonicalType but encountered ${this.example.fhirType()}`,
      );
    }
    return this.example;
  }

  /**
   * @returns `true` if the `example` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasExampleCanonicalType(): boolean {
    return this.hasExample() && this.example instanceof CanonicalType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `groupingId` property value as a IdType object if defined; else an empty IdType object
   */
  public getGroupingIdElement(): IdType {
    return this.groupingId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `groupingId` property.
   *
   * @param element - the `groupingId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGroupingIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.resource.groupingId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.groupingId = element;
    } else {
      this.groupingId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupingId` property exists and has a value; `false` otherwise
   */
  public hasGroupingIdElement(): boolean {
    return isDefined<IdType>(this.groupingId) && !this.groupingId.isEmpty();
  }

  /**
   * @returns the `groupingId` property value as a fhirId if defined; else undefined
   */
  public getGroupingId(): fhirId | undefined {
    return this.groupingId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `groupingId` property.
   *
   * @param value - the `groupingId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGroupingId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.resource.groupingId (${String(value)})`;
      this.groupingId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.groupingId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupingId` property exists and has a value; `false` otherwise
   */
  public hasGroupingId(): boolean {
    return this.hasGroupingIdElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImplementationGuide.definition.resource';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.reference,
      this.fhirVersion,
      this.name,
      this.description,
      this.example,
      this.groupingId,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuideDefinitionResourceComponent {
    const dest = new ImplementationGuideDefinitionResourceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuideDefinitionResourceComponent): void {
    super.copyValues(dest);
    dest.reference = this.reference ? this.reference.copy() : null;
    const fhirVersionList = copyListValues<EnumCodeType>(this.fhirVersion);
    dest.fhirVersion = fhirVersionList.length === 0 ? undefined : fhirVersionList;
    dest.name = this.name?.copy();
    dest.description = this.description?.copy();
    dest.example = this.example?.copy() as IDataType;
    dest.groupingId = this.groupingId?.copy();
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

    if (this.hasReference()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getReference()!, 'reference', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.definition.resource.reference`);
    }

    if (this.hasFhirVersionElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getFhirVersionElement(), 'fhirVersion', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasExample()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getExample()!, 'example', jsonObj);
    }

    if (this.hasGroupingIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getGroupingIdElement(), 'groupingId', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ImplementationGuideDefinitionPageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Page/Section in the Guide
 * - **Definition:** A page / section in the implementation guide. The root page is the implementation guide home page.
 * - **Comment:** Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuideDefinitionPageComponent extends BackboneElement implements IBackboneElement {
  constructor(name: IDataType | null = null, title: StringType | fhirString | null = null, generation: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.guidePageGenerationEnum = new GuidePageGenerationEnum();

    this.name = null;
    if (isDefined<IDataType>(name)) {
      this.setName(name);
    }


    this.title = null;
    if (isDefined<StringType | fhirString>(title)) {
      if (title instanceof PrimitiveType) {
        this.setTitleElement(title);
      } else {
        this.setTitle(title);
      }
    }

    this.generation = constructorCodeValueAsEnumCodeType<GuidePageGenerationEnum>(
      generation,
      GuidePageGenerationEnum,
      this.guidePageGenerationEnum,
      'ImplementationGuide.definition.page.generation',
    );
  }

  /**
   * Parse the provided `ImplementationGuideDefinitionPageComponent` JSON to instantiate the ImplementationGuideDefinitionPageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuideDefinitionPageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuideDefinitionPageComponent
   * @returns ImplementationGuideDefinitionPageComponent data model or undefined for `ImplementationGuideDefinitionPageComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuideDefinitionPageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuideDefinitionPageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuideDefinitionPageComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ImplementationGuideDefinitionPageComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ImplementationGuideDefinitionPageComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'name[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const name: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (name === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setName(name);
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

    fieldName = 'generation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setGenerationElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'page';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImplementationGuideDefinitionPageComponent | undefined = ImplementationGuideDefinitionPageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPage(component);
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
   * ImplementationGuide.definition.page.name[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ImplementationGuide.definition.page.name[x]', ['url','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where to find that page
   * - **Definition:** The source address for the page.
   * - **Comment:** The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
   * - **FHIR Types:**
   *     'url',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ImplementationGuide.definition.page.name[x]',[
    'url',
    'Reference',
  ])
  private name: IDataType | null;

  /**
   * ImplementationGuide.definition.page.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Short title shown for navigational assistance
   * - **Definition:** A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title: StringType | null;

  /**
   * FHIR CodeSystem: GuidePageGeneration
   *
   * @see {@link GuidePageGenerationEnum }
   */
  private readonly guidePageGenerationEnum: GuidePageGenerationEnum;

  /**
   * ImplementationGuide.definition.page.generation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** html | markdown | xml | generated
   * - **Definition:** A code that indicates how the page is generated.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link GuidePageGenerationEnum }
   */
  private generation: EnumCodeType | null;

  /**
   * ImplementationGuide.definition.page.page Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Nested Pages / Sections
   * - **Definition:** Nested Pages/Sections under this page.
   * - **Comment:** The implementation guide breadcrumbs are generated from this structure.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private page?: ImplementationGuideDefinitionPageComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `name` property value as a DataType object; else null
   */
  public getName(): IDataType | null {
    return this.name;
  }

  /**
   * Assigns the provided DataType object value to the `name` property.
   *
   * @decorator `@ChoiceDataTypes('ImplementationGuide.definition.page.name[x]')`
   *
   * @param value - the `name` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ImplementationGuide.definition.page.name[x]')
  public setName(value: IDataType): this {
    assertIsDefined<IDataType>(value, `ImplementationGuide.definition.page.name[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.name = value;
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return isDefined<IDataType>(this.name) && !this.name.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `name` property value as a UrlType object if defined; else null
   */
  public getNameUrlType(): UrlType | null {
    if (!isDefined<IDataType>(this.name)) {
      return null;
    }
    if (!(this.name instanceof UrlType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ImplementationGuide.definition.page.name[x]: Expected UrlType but encountered ${this.name.fhirType()}`,
      );
    }
    return this.name;
  }

  /**
   * @returns `true` if the `` property exists as a UrlType and has a value; `false` otherwise
   */
  public hasNameUrlType(): boolean {
    return this.hasName() && this.name instanceof UrlType;
  }

  /**
   * @returns the `name` property value as a Reference object if defined; else null
   */
  public getNameReference(): Reference | null {
    if (!isDefined<IDataType>(this.name)) {
      return null;
    }
    if (!(this.name instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for ImplementationGuide.definition.page.name[x]: Expected Reference but encountered ${this.name.fhirType()}`,
      );
    }
    return this.name;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasNameReference(): boolean {
    return this.hasName() && this.name instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

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
    assertIsDefined<StringType>(element, `ImplementationGuide.definition.page.title is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.page.title; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ImplementationGuide.definition.page.title is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.page.title (${String(value)})`;
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
   * @returns the `generation` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GuidePageGenerationEnum }
   */
  public getGenerationEnumType(): EnumCodeType | null {
    return this.generation;
  }

  /**
   * Assigns the provided EnumCodeType value to the `generation` property.
   *
   * @param enumType - the `generation` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GuidePageGenerationEnum }
   */
  public setGenerationEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ImplementationGuide.definition.page.generation is required`);
    const errMsgPrefix = `Invalid ImplementationGuide.definition.page.generation`;
    assertEnumCodeType<GuidePageGenerationEnum>(enumType, GuidePageGenerationEnum, errMsgPrefix);
    this.generation = enumType;
    return this;
  }

  /**
   * @returns `true` if the `generation` property exists and has a value; `false` otherwise
   */
  public hasGenerationEnumType(): boolean {
    return isDefined<EnumCodeType>(this.generation) && !this.generation.isEmpty() && this.generation.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `generation` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GuidePageGenerationEnum }
   */
  public getGenerationElement(): CodeType | null {
    if (this.generation === null) {
      return null;
    }
    return this.generation as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `generation` property.
   *
   * @param element - the `generation` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GuidePageGenerationEnum }
   */
  public setGenerationElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ImplementationGuide.definition.page.generation is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.page.generation; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.generation = new EnumCodeType(element, this.guidePageGenerationEnum);
    return this;
  }

  /**
   * @returns `true` if the `generation` property exists and has a value; `false` otherwise
   */
  public hasGenerationElement(): boolean {
    return this.hasGenerationEnumType();
  }

  /**
   * @returns the `generation` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GuidePageGenerationEnum }
   */
  public getGeneration(): fhirCode | null {
    if (this.generation === null) {
      return null;
    }
    return this.generation.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `generation` property.
   *
   * @param value - the `generation` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link GuidePageGenerationEnum }
   */
  public setGeneration(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ImplementationGuide.definition.page.generation is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.page.generation (${String(value)})`;
    this.generation = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.guidePageGenerationEnum);
    return this;
  }

  /**
   * @returns `true` if the `generation` property exists and has a value; `false` otherwise
   */
  public hasGeneration(): boolean {
    return this.hasGenerationEnumType();
  }

  /**
   * @returns the `page` property value as a ImplementationGuideDefinitionPageComponent array
   */
  public getPage(): ImplementationGuideDefinitionPageComponent[] {
    return this.page ?? ([] as ImplementationGuideDefinitionPageComponent[]);
  }

  /**
   * Assigns the provided ImplementationGuideDefinitionPageComponent array value to the `page` property.
   *
   * @param value - the `page` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPage(value: ImplementationGuideDefinitionPageComponent[] | undefined): this {
    if (isDefinedList<ImplementationGuideDefinitionPageComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.page.page; Provided value array has an element that is not an instance of ImplementationGuideDefinitionPageComponent.`;
      assertFhirTypeList<ImplementationGuideDefinitionPageComponent>(value, ImplementationGuideDefinitionPageComponent, optErrMsg);
      this.page = value;
    } else {
      this.page = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImplementationGuideDefinitionPageComponent value to the `page` array property.
   *
   * @param value - the `page` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPage(value: ImplementationGuideDefinitionPageComponent | undefined): this {
    if (isDefined<ImplementationGuideDefinitionPageComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.page.page; Provided element is not an instance of ImplementationGuideDefinitionPageComponent.`;
      assertFhirType<ImplementationGuideDefinitionPageComponent>(value, ImplementationGuideDefinitionPageComponent, optErrMsg);
      this.initPage();
      this.page?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `page` property exists and has a value; `false` otherwise
   */
  public hasPage(): boolean {
    return isDefinedList<ImplementationGuideDefinitionPageComponent>(this.page) && this.page.some((item: ImplementationGuideDefinitionPageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `page` property
   */
  private initPage(): void {
    if(!this.hasPage()) {
      this.page = [] as ImplementationGuideDefinitionPageComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImplementationGuide.definition.page';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.title,
      this.generation,
      this.page,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuideDefinitionPageComponent {
    const dest = new ImplementationGuideDefinitionPageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuideDefinitionPageComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() as IDataType : null;
    dest.title = this.title ? this.title.copy() : null;
    dest.generation = this.generation ? this.generation.copy() : null;
    const pageList = copyListValues<ImplementationGuideDefinitionPageComponent>(this.page);
    dest.page = pageList.length === 0 ? undefined : pageList;
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

    if (this.hasName()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getName()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.definition.page.name[x]`);
    }

    if (this.hasTitleElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getTitleElement()!, 'title', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.definition.page.title`);
    }

    if (this.hasGenerationElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getGenerationElement()!, 'generation', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.definition.page.generation`);
    }

    if (this.hasPage()) {
      setFhirBackboneElementListJson(this.getPage(), 'page', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ImplementationGuideDefinitionParameterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Defines how IG is built by tools
 * - **Definition:** Defines how IG is built by tools.
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuideDefinitionParameterComponent extends BackboneElement implements IBackboneElement {
  constructor(code: EnumCodeType | CodeType | fhirCode | null = null, value: StringType | fhirString | null = null) {
    super();

    this.guideParameterCodeEnum = new GuideParameterCodeEnum();

    this.code = constructorCodeValueAsEnumCodeType<GuideParameterCodeEnum>(
      code,
      GuideParameterCodeEnum,
      this.guideParameterCodeEnum,
      'ImplementationGuide.definition.parameter.code',
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
   * Parse the provided `ImplementationGuideDefinitionParameterComponent` JSON to instantiate the ImplementationGuideDefinitionParameterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuideDefinitionParameterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuideDefinitionParameterComponent
   * @returns ImplementationGuideDefinitionParameterComponent data model or undefined for `ImplementationGuideDefinitionParameterComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuideDefinitionParameterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuideDefinitionParameterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuideDefinitionParameterComponent();

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
   * FHIR CodeSystem: GuideParameterCode
   *
   * @see {@link GuideParameterCodeEnum }
   */
  private readonly guideParameterCodeEnum: GuideParameterCodeEnum;

  /**
   * ImplementationGuide.definition.parameter.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template
   * - **Definition:** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link GuideParameterCodeEnum }
   */
  private code: EnumCodeType | null;

  /**
   * ImplementationGuide.definition.parameter.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value for named type
   * - **Definition:** Value for named type.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GuideParameterCodeEnum }
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
   * @see CodeSystem Enumeration: {@link GuideParameterCodeEnum }
   */
  public setCodeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ImplementationGuide.definition.parameter.code is required`);
    const errMsgPrefix = `Invalid ImplementationGuide.definition.parameter.code`;
    assertEnumCodeType<GuideParameterCodeEnum>(enumType, GuideParameterCodeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link GuideParameterCodeEnum }
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
   * @see CodeSystem Enumeration: {@link GuideParameterCodeEnum }
   */
  public setCodeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ImplementationGuide.definition.parameter.code is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.parameter.code; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.code = new EnumCodeType(element, this.guideParameterCodeEnum);
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
   * @see CodeSystem Enumeration: {@link GuideParameterCodeEnum }
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
   * @see CodeSystem Enumeration: {@link GuideParameterCodeEnum }
   */
  public setCode(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ImplementationGuide.definition.parameter.code is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.parameter.code (${String(value)})`;
    this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.guideParameterCodeEnum);
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return this.hasCodeEnumType();
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
    assertIsDefined<StringType>(element, `ImplementationGuide.definition.parameter.value is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.parameter.value; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ImplementationGuide.definition.parameter.value is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.parameter.value (${String(value)})`;
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
    return 'ImplementationGuide.definition.parameter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuideDefinitionParameterComponent {
    const dest = new ImplementationGuideDefinitionParameterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuideDefinitionParameterComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
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

    if (this.hasCodeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.definition.parameter.code`);
    }

    if (this.hasValueElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getValueElement()!, 'value', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.definition.parameter.value`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ImplementationGuideDefinitionTemplateComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A template for building resources
 * - **Definition:** A template for building resources.
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuideDefinitionTemplateComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeType | fhirCode | null = null, source: StringType | fhirString | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeType | fhirCode>(code)) {
      if (code instanceof PrimitiveType) {
        this.setCodeElement(code);
      } else {
        this.setCode(code);
      }
    }

    this.source = null;
    if (isDefined<StringType | fhirString>(source)) {
      if (source instanceof PrimitiveType) {
        this.setSourceElement(source);
      } else {
        this.setSource(source);
      }
    }
  }

  /**
   * Parse the provided `ImplementationGuideDefinitionTemplateComponent` JSON to instantiate the ImplementationGuideDefinitionTemplateComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuideDefinitionTemplateComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuideDefinitionTemplateComponent
   * @returns ImplementationGuideDefinitionTemplateComponent data model or undefined for `ImplementationGuideDefinitionTemplateComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuideDefinitionTemplateComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuideDefinitionTemplateComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuideDefinitionTemplateComponent();

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

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSourceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'scope';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setScopeElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ImplementationGuide.definition.template.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of template specified
   * - **Definition:** Type of template specified.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeType | null;

  /**
   * ImplementationGuide.definition.template.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The source location for the template
   * - **Definition:** The source location for the template.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private source: StringType | null;

  /**
   * ImplementationGuide.definition.template.scope Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The scope in which the template applies
   * - **Definition:** The scope in which the template applies.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private scope?: StringType | undefined;

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
    assertIsDefined<CodeType>(element, `ImplementationGuide.definition.template.code is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.template.code; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `ImplementationGuide.definition.template.code is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.template.code (${String(value)})`;
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
   * @returns the `source` property value as a StringType object if defined; else null
   */
  public getSourceElement(): StringType | null {
    return this.source;
  }

  /**
   * Assigns the provided PrimitiveType value to the `source` property.
   *
   * @param element - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceElement(element: StringType): this {
    assertIsDefined<StringType>(element, `ImplementationGuide.definition.template.source is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.template.source; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.source = element;
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSourceElement(): boolean {
    return isDefined<StringType>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `source` property value as a fhirString if defined; else null
   */
  public getSource(): fhirString | null {
    if (this.source?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.source.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `source` property.
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSource(value: fhirString): this {
    assertIsDefined<fhirString>(value, `ImplementationGuide.definition.template.source is required`);
    const optErrMsg = `Invalid ImplementationGuide.definition.template.source (${String(value)})`;
    this.source = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return this.hasSourceElement();
  }

  /**
   * @returns the `scope` property value as a StringType object if defined; else an empty StringType object
   */
  public getScopeElement(): StringType {
    return this.scope ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `scope` property.
   *
   * @param element - the `scope` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setScopeElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.template.scope; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.scope = element;
    } else {
      this.scope = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `scope` property exists and has a value; `false` otherwise
   */
  public hasScopeElement(): boolean {
    return isDefined<StringType>(this.scope) && !this.scope.isEmpty();
  }

  /**
   * @returns the `scope` property value as a fhirString if defined; else undefined
   */
  public getScope(): fhirString | undefined {
    return this.scope?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `scope` property.
   *
   * @param value - the `scope` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setScope(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.definition.template.scope (${String(value)})`;
      this.scope = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.scope = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `scope` property exists and has a value; `false` otherwise
   */
  public hasScope(): boolean {
    return this.hasScopeElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImplementationGuide.definition.template';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.source,
      this.scope,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuideDefinitionTemplateComponent {
    const dest = new ImplementationGuideDefinitionTemplateComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuideDefinitionTemplateComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.source = this.source ? this.source.copy() : null;
    dest.scope = this.scope?.copy();
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
      missingReqdProperties.push(`ImplementationGuide.definition.template.code`);
    }

    if (this.hasSourceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getSourceElement()!, 'source', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.definition.template.source`);
    }

    if (this.hasScopeElement()) {
      setFhirPrimitiveJson<fhirString>(this.getScopeElement(), 'scope', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ImplementationGuideManifestComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about an assembled IG
 * - **Definition:** Information about an assembled implementation guide, created by the publication tooling.
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuideManifestComponent extends BackboneElement implements IBackboneElement {
  constructor(resource: ImplementationGuideManifestResourceComponent[] | null = null) {
    super();

    this.resource = null;
    if (isDefinedList<ImplementationGuideManifestResourceComponent>(resource)) {
      this.setResource(resource);
    }
  }

  /**
   * Parse the provided `ImplementationGuideManifestComponent` JSON to instantiate the ImplementationGuideManifestComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuideManifestComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuideManifestComponent
   * @returns ImplementationGuideManifestComponent data model or undefined for `ImplementationGuideManifestComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuideManifestComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuideManifestComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuideManifestComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'rendering';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UrlType | undefined = fhirParser.parseUrlType(dtJson, dtSiblingJson);
      instance.setRenderingElement(datatype);
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImplementationGuideManifestResourceComponent | undefined = ImplementationGuideManifestResourceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addResource(component);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'page';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ImplementationGuideManifestPageComponent | undefined = ImplementationGuideManifestPageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPage(component);
        }
      });
    }

    fieldName = 'image';
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
          instance.addImageElement(datatype);
        }
      });
    }

    fieldName = 'other';
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
          instance.addOtherElement(datatype);
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
   * ImplementationGuide.manifest.rendering Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location of rendered implementation guide
   * - **Definition:** A pointer to official web page, PDF or other rendering of the implementation guide.
   * - **FHIR Type:** `url`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private rendering?: UrlType | undefined;

  /**
   * ImplementationGuide.manifest.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource in the implementation guide
   * - **Definition:** A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource: ImplementationGuideManifestResourceComponent[] | null;

  /**
   * ImplementationGuide.manifest.page Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** HTML page within the parent IG
   * - **Definition:** Information about a page within the IG.
   * - **Requirements:** Allows validation of hyperlinks from a derived IG to this IG without a local copy of the IG.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private page?: ImplementationGuideManifestPageComponent[] | undefined;

  /**
   * ImplementationGuide.manifest.image Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Image within the IG
   * - **Definition:** Indicates a relative path to an image that exists within the IG.
   * - **Requirements:** Allows validation of image links from a derived IG to this IG without a local copy of the IG.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private image?: StringType[] | undefined;

  /**
   * ImplementationGuide.manifest.other Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional linkable file in IG
   * - **Definition:** Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
   * - **Requirements:** Allows validation of links from a derived IG to this IG without a local copy of the IG.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private other?: StringType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `rendering` property value as a UrlType object if defined; else an empty UrlType object
   */
  public getRenderingElement(): UrlType {
    return this.rendering ?? new UrlType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `rendering` property.
   *
   * @param element - the `rendering` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRenderingElement(element: UrlType | undefined): this {
    if (isDefined<UrlType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.rendering; Provided element is not an instance of UrlType.`;
      assertFhirType<UrlType>(element, UrlType, optErrMsg);
      this.rendering = element;
    } else {
      this.rendering = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rendering` property exists and has a value; `false` otherwise
   */
  public hasRenderingElement(): boolean {
    return isDefined<UrlType>(this.rendering) && !this.rendering.isEmpty();
  }

  /**
   * @returns the `rendering` property value as a fhirUrl if defined; else undefined
   */
  public getRendering(): fhirUrl | undefined {
    return this.rendering?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `rendering` property.
   *
   * @param value - the `rendering` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRendering(value: fhirUrl | undefined): this {
    if (isDefined<fhirUrl>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.rendering (${String(value)})`;
      this.rendering = new UrlType(parseFhirPrimitiveData(value, fhirUrlSchema, optErrMsg));
    } else {
      this.rendering = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rendering` property exists and has a value; `false` otherwise
   */
  public hasRendering(): boolean {
    return this.hasRenderingElement();
  }

  /**
   * @returns the `resource` property value as a ImplementationGuideManifestResourceComponent array
   */
  public getResource(): ImplementationGuideManifestResourceComponent[] {
    return this.resource ?? ([] as ImplementationGuideManifestResourceComponent[]);
  }

  /**
   * Assigns the provided ImplementationGuideManifestResourceComponent array value to the `resource` property.
   *
   * @param value - the `resource` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResource(value: ImplementationGuideManifestResourceComponent[]): this {
    assertIsDefinedList<ImplementationGuideManifestResourceComponent>(value, `ImplementationGuide.manifest.resource is required`);
    const optErrMsg = `Invalid ImplementationGuide.manifest.resource; Provided value array has an element that is not an instance of ImplementationGuideManifestResourceComponent.`;
    assertFhirTypeList<ImplementationGuideManifestResourceComponent>(value, ImplementationGuideManifestResourceComponent, optErrMsg);
    this.resource = value;
    return this;
  }

  /**
   * Add the provided ImplementationGuideManifestResourceComponent value to the `resource` array property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addResource(value: ImplementationGuideManifestResourceComponent | undefined): this {
    if (isDefined<ImplementationGuideManifestResourceComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.resource; Provided element is not an instance of ImplementationGuideManifestResourceComponent.`;
      assertFhirType<ImplementationGuideManifestResourceComponent>(value, ImplementationGuideManifestResourceComponent, optErrMsg);
      this.initResource();
      this.resource?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return isDefinedList<ImplementationGuideManifestResourceComponent>(this.resource) && this.resource.some((item: ImplementationGuideManifestResourceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `resource` property
   */
  private initResource(): void {
    if(!this.hasResource()) {
      this.resource = [] as ImplementationGuideManifestResourceComponent[];
    }
  }

  /**
   * @returns the `page` property value as a ImplementationGuideManifestPageComponent array
   */
  public getPage(): ImplementationGuideManifestPageComponent[] {
    return this.page ?? ([] as ImplementationGuideManifestPageComponent[]);
  }

  /**
   * Assigns the provided ImplementationGuideManifestPageComponent array value to the `page` property.
   *
   * @param value - the `page` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPage(value: ImplementationGuideManifestPageComponent[] | undefined): this {
    if (isDefinedList<ImplementationGuideManifestPageComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.page; Provided value array has an element that is not an instance of ImplementationGuideManifestPageComponent.`;
      assertFhirTypeList<ImplementationGuideManifestPageComponent>(value, ImplementationGuideManifestPageComponent, optErrMsg);
      this.page = value;
    } else {
      this.page = undefined;
    }
    return this;
  }

  /**
   * Add the provided ImplementationGuideManifestPageComponent value to the `page` array property.
   *
   * @param value - the `page` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPage(value: ImplementationGuideManifestPageComponent | undefined): this {
    if (isDefined<ImplementationGuideManifestPageComponent>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.page; Provided element is not an instance of ImplementationGuideManifestPageComponent.`;
      assertFhirType<ImplementationGuideManifestPageComponent>(value, ImplementationGuideManifestPageComponent, optErrMsg);
      this.initPage();
      this.page?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `page` property exists and has a value; `false` otherwise
   */
  public hasPage(): boolean {
    return isDefinedList<ImplementationGuideManifestPageComponent>(this.page) && this.page.some((item: ImplementationGuideManifestPageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `page` property
   */
  private initPage(): void {
    if(!this.hasPage()) {
      this.page = [] as ImplementationGuideManifestPageComponent[];
    }
  }

  /**
   * @returns the `image` property value as a StringType array
   */
  public getImageElement(): StringType[] {
    return this.image ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `image` property.
   *
   * @param element - the `image` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setImageElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.image; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.image = element;
    } else {
      this.image = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `image` array property.
   *
   * @param element - the `image` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addImageElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.image; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initImage();
      this.image?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `image` property exists and has a value; `false` otherwise
   */
  public hasImageElement(): boolean {
    return isDefinedList<StringType>(this.image) && this.image.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `image` property value as a fhirString array
   */
  public getImage(): fhirString[] {
    this.initImage();
    const imageValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.image!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        imageValues.push(value);
      }
    }
    return imageValues;
  }

  /**
   * Assigns the provided primitive value array to the `image` property.
   *
   * @param value - the `image` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setImage(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const imageElements = [] as StringType[];
      for (const imageValue of value) {
        const optErrMsg = `Invalid ImplementationGuide.manifest.image array item (${String(imageValue)})`;
        const element = new StringType(parseFhirPrimitiveData(imageValue, fhirStringSchema, optErrMsg));
        imageElements.push(element);
      }
      this.image = imageElements;
    } else {
      this.image = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `image` array property.
   *
   * @param value - the `image` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addImage(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.image array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initImage();
      this.addImageElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `image` property exists and has a value; `false` otherwise
   */
  public hasImage(): boolean {
    return this.hasImageElement();
  }

  /**
   * Initialize the `image` property
   */
  private initImage(): void {
    if (!this.hasImage()) {
      this.image = [] as StringType[];
    }
  }

  /**
   * @returns the `other` property value as a StringType array
   */
  public getOtherElement(): StringType[] {
    return this.other ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `other` property.
   *
   * @param element - the `other` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOtherElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.other; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.other = element;
    } else {
      this.other = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `other` array property.
   *
   * @param element - the `other` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addOtherElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.other; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initOther();
      this.other?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `other` property exists and has a value; `false` otherwise
   */
  public hasOtherElement(): boolean {
    return isDefinedList<StringType>(this.other) && this.other.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `other` property value as a fhirString array
   */
  public getOther(): fhirString[] {
    this.initOther();
    const otherValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.other!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        otherValues.push(value);
      }
    }
    return otherValues;
  }

  /**
   * Assigns the provided primitive value array to the `other` property.
   *
   * @param value - the `other` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOther(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const otherElements = [] as StringType[];
      for (const otherValue of value) {
        const optErrMsg = `Invalid ImplementationGuide.manifest.other array item (${String(otherValue)})`;
        const element = new StringType(parseFhirPrimitiveData(otherValue, fhirStringSchema, optErrMsg));
        otherElements.push(element);
      }
      this.other = otherElements;
    } else {
      this.other = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `other` array property.
   *
   * @param value - the `other` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addOther(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.other array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initOther();
      this.addOtherElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `other` property exists and has a value; `false` otherwise
   */
  public hasOther(): boolean {
    return this.hasOtherElement();
  }

  /**
   * Initialize the `other` property
   */
  private initOther(): void {
    if (!this.hasOther()) {
      this.other = [] as StringType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImplementationGuide.manifest';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.rendering,
      this.resource,
      this.page,
      this.image,
      this.other,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuideManifestComponent {
    const dest = new ImplementationGuideManifestComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuideManifestComponent): void {
    super.copyValues(dest);
    dest.rendering = this.rendering?.copy();
    const resourceList = copyListValues<ImplementationGuideManifestResourceComponent>(this.resource);
    dest.resource = resourceList.length === 0 ? null : resourceList;
    const pageList = copyListValues<ImplementationGuideManifestPageComponent>(this.page);
    dest.page = pageList.length === 0 ? undefined : pageList;
    const imageList = copyListValues<StringType>(this.image);
    dest.image = imageList.length === 0 ? undefined : imageList;
    const otherList = copyListValues<StringType>(this.other);
    dest.other = otherList.length === 0 ? undefined : otherList;
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

    if (this.hasRenderingElement()) {
      setFhirPrimitiveJson<fhirUrl>(this.getRenderingElement(), 'rendering', jsonObj);
    }

    if (this.hasResource()) {
      setFhirBackboneElementListJson(this.getResource(), 'resource', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.manifest.resource`);
    }

    if (this.hasPage()) {
      setFhirBackboneElementListJson(this.getPage(), 'page', jsonObj);
    }

    if (this.hasImage()) {
      setFhirPrimitiveListJson(this.getImageElement(), 'image', jsonObj);
    }

    if (this.hasOther()) {
      setFhirPrimitiveListJson(this.getOtherElement(), 'other', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ImplementationGuideManifestResourceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Resource in the implementation guide
 * - **Definition:** A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuideManifestResourceComponent extends BackboneElement implements IBackboneElement {
  constructor(reference: Reference | null = null) {
    super();

    this.reference = null;
    if (isDefined<Reference>(reference)) {
      this.setReference(reference);
    }
  }

  /**
   * Parse the provided `ImplementationGuideManifestResourceComponent` JSON to instantiate the ImplementationGuideManifestResourceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuideManifestResourceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuideManifestResourceComponent
   * @returns ImplementationGuideManifestResourceComponent data model or undefined for `ImplementationGuideManifestResourceComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuideManifestResourceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuideManifestResourceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuideManifestResourceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = ImplementationGuideManifestResourceComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ImplementationGuideManifestResourceComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setReference(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'example[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const example: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setExample(example);

    fieldName = 'relativePath';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UrlType | undefined = fhirParser.parseUrlType(dtJson, dtSiblingJson);
      instance.setRelativePathElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ImplementationGuide.manifest.resource.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Location of the resource
   * - **Definition:** Where this resource is found.
   * - **Comment:** Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private reference: Reference | null;

  /**
   * ImplementationGuide.manifest.resource.example[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ImplementationGuide.manifest.resource.example[x]', ['boolean','canonical',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Is an example/What is this an example of?
   * - **Definition:** If true or a reference, indicates the resource is an example instance.  If a reference is present, indicates that the example is an example of the specified profile.
   * - **Comment:** Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
   * - **FHIR Types:**
   *     'boolean',
   *     'canonical',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ImplementationGuide.manifest.resource.example[x]',[
    'boolean',
    'canonical',
  ])
  private example?: IDataType | undefined;

  /**
   * ImplementationGuide.manifest.resource.relativePath Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relative path for page in IG
   * - **Definition:** The relative path for primary page for this resource within the IG.
   * - **Comment:** Appending \'rendering\' + "/" + this should resolve to the resource page.
   * - **FHIR Type:** `url`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relativePath?: UrlType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `reference` property value as a Reference object if defined; else null
   */
  public getReference(): Reference | null {
    return this.reference;
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('ImplementationGuide.manifest.resource.reference', ['Resource',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ImplementationGuide.manifest.resource.reference', [
    'Resource',
  ])
  public setReference(value: Reference): this {
    assertIsDefined<Reference>(value, `ImplementationGuide.manifest.resource.reference is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.reference = value;
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /**
   * @returns the `example` property value as a DataType object if defined; else undefined
   */
  public getExample(): IDataType | undefined {
    return this.example;
  }

  /**
   * Assigns the provided DataType object value to the `example` property.
   *
   * @decorator `@ChoiceDataTypes('ImplementationGuide.manifest.resource.example[x]')`
   *
   * @param value - the `example` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ImplementationGuide.manifest.resource.example[x]')
  public setExample(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.example = value;
    } else {
      this.example = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `example` property exists and has a value; `false` otherwise
   */
  public hasExample(): boolean {
    return isDefined<IDataType>(this.example) && !this.example.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `example` property value as a BooleanType object if defined; else undefined
   */
  public getExampleBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.example)) {
      return undefined;
    }
    if (!(this.example instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ImplementationGuide.manifest.resource.example[x]: Expected BooleanType but encountered ${this.example.fhirType()}`,
      );
    }
    return this.example;
  }

  /**
   * @returns `true` if the `example` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasExampleBooleanType(): boolean {
    return this.hasExample() && this.example instanceof BooleanType;
  }

  /**
   * @returns the `example` property value as a CanonicalType object if defined; else undefined
   */
  public getExampleCanonicalType(): CanonicalType | undefined {
    if (!isDefined<IDataType | undefined>(this.example)) {
      return undefined;
    }
    if (!(this.example instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ImplementationGuide.manifest.resource.example[x]: Expected CanonicalType but encountered ${this.example.fhirType()}`,
      );
    }
    return this.example;
  }

  /**
   * @returns `true` if the `example` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasExampleCanonicalType(): boolean {
    return this.hasExample() && this.example instanceof CanonicalType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `relativePath` property value as a UrlType object if defined; else an empty UrlType object
   */
  public getRelativePathElement(): UrlType {
    return this.relativePath ?? new UrlType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `relativePath` property.
   *
   * @param element - the `relativePath` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRelativePathElement(element: UrlType | undefined): this {
    if (isDefined<UrlType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.resource.relativePath; Provided element is not an instance of UrlType.`;
      assertFhirType<UrlType>(element, UrlType, optErrMsg);
      this.relativePath = element;
    } else {
      this.relativePath = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `relativePath` property exists and has a value; `false` otherwise
   */
  public hasRelativePathElement(): boolean {
    return isDefined<UrlType>(this.relativePath) && !this.relativePath.isEmpty();
  }

  /**
   * @returns the `relativePath` property value as a fhirUrl if defined; else undefined
   */
  public getRelativePath(): fhirUrl | undefined {
    return this.relativePath?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `relativePath` property.
   *
   * @param value - the `relativePath` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRelativePath(value: fhirUrl | undefined): this {
    if (isDefined<fhirUrl>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.resource.relativePath (${String(value)})`;
      this.relativePath = new UrlType(parseFhirPrimitiveData(value, fhirUrlSchema, optErrMsg));
    } else {
      this.relativePath = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `relativePath` property exists and has a value; `false` otherwise
   */
  public hasRelativePath(): boolean {
    return this.hasRelativePathElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImplementationGuide.manifest.resource';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.reference,
      this.example,
      this.relativePath,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuideManifestResourceComponent {
    const dest = new ImplementationGuideManifestResourceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuideManifestResourceComponent): void {
    super.copyValues(dest);
    dest.reference = this.reference ? this.reference.copy() : null;
    dest.example = this.example?.copy() as IDataType;
    dest.relativePath = this.relativePath?.copy();
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

    if (this.hasReference()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getReference()!, 'reference', jsonObj);
    } else {
      missingReqdProperties.push(`ImplementationGuide.manifest.resource.reference`);
    }

    if (this.hasExample()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getExample()!, 'example', jsonObj);
    }

    if (this.hasRelativePathElement()) {
      setFhirPrimitiveJson<fhirUrl>(this.getRelativePathElement(), 'relativePath', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ImplementationGuideManifestPageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** HTML page within the parent IG
 * - **Definition:** Information about a page within the IG.
 * - **Requirements:** Allows validation of hyperlinks from a derived IG to this IG without a local copy of the IG.
 *
 * @category Data Models: Resource
 * @see [FHIR ImplementationGuide](http://hl7.org/fhir/StructureDefinition/ImplementationGuide)
 */
export class ImplementationGuideManifestPageComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ImplementationGuideManifestPageComponent` JSON to instantiate the ImplementationGuideManifestPageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ImplementationGuideManifestPageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ImplementationGuideManifestPageComponent
   * @returns ImplementationGuideManifestPageComponent data model or undefined for `ImplementationGuideManifestPageComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ImplementationGuideManifestPageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ImplementationGuideManifestPageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ImplementationGuideManifestPageComponent();

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

    fieldName = 'anchor';
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
          instance.addAnchorElement(datatype);
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
   * ImplementationGuide.manifest.page.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** HTML page name
   * - **Definition:** Relative path to the page.
   * - **Comment:** Appending \'rendering\' + "/" + this should resolve to the page.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name: StringType | null;

  /**
   * ImplementationGuide.manifest.page.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Title of the page, for references
   * - **Definition:** Label for the page intended for human display.
   * - **Requirements:** Allows generation of labels for markdown-generated hyperlinks.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title?: StringType | undefined;

  /**
   * ImplementationGuide.manifest.page.anchor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Anchor available on the page
   * - **Definition:** The name of an anchor available on the page.
   * - **Comment:** Appending \'rendering\' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
   * - **Requirements:** Allows validation of hyperlinks from a derived IG to this IG without a local copy of the IG.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private anchor?: StringType[] | undefined;

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
    assertIsDefined<StringType>(element, `ImplementationGuide.manifest.page.name is required`);
    const optErrMsg = `Invalid ImplementationGuide.manifest.page.name; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ImplementationGuide.manifest.page.name is required`);
    const optErrMsg = `Invalid ImplementationGuide.manifest.page.name (${String(value)})`;
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
      const optErrMsg = `Invalid ImplementationGuide.manifest.page.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ImplementationGuide.manifest.page.title (${String(value)})`;
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
   * @returns the `anchor` property value as a StringType array
   */
  public getAnchorElement(): StringType[] {
    return this.anchor ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `anchor` property.
   *
   * @param element - the `anchor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAnchorElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.page.anchor; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.anchor = element;
    } else {
      this.anchor = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `anchor` array property.
   *
   * @param element - the `anchor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addAnchorElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.page.anchor; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initAnchor();
      this.anchor?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `anchor` property exists and has a value; `false` otherwise
   */
  public hasAnchorElement(): boolean {
    return isDefinedList<StringType>(this.anchor) && this.anchor.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `anchor` property value as a fhirString array
   */
  public getAnchor(): fhirString[] {
    this.initAnchor();
    const anchorValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.anchor!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        anchorValues.push(value);
      }
    }
    return anchorValues;
  }

  /**
   * Assigns the provided primitive value array to the `anchor` property.
   *
   * @param value - the `anchor` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAnchor(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const anchorElements = [] as StringType[];
      for (const anchorValue of value) {
        const optErrMsg = `Invalid ImplementationGuide.manifest.page.anchor array item (${String(anchorValue)})`;
        const element = new StringType(parseFhirPrimitiveData(anchorValue, fhirStringSchema, optErrMsg));
        anchorElements.push(element);
      }
      this.anchor = anchorElements;
    } else {
      this.anchor = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `anchor` array property.
   *
   * @param value - the `anchor` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addAnchor(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ImplementationGuide.manifest.page.anchor array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initAnchor();
      this.addAnchorElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `anchor` property exists and has a value; `false` otherwise
   */
  public hasAnchor(): boolean {
    return this.hasAnchorElement();
  }

  /**
   * Initialize the `anchor` property
   */
  private initAnchor(): void {
    if (!this.hasAnchor()) {
      this.anchor = [] as StringType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ImplementationGuide.manifest.page';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.title,
      this.anchor,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ImplementationGuideManifestPageComponent {
    const dest = new ImplementationGuideManifestPageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ImplementationGuideManifestPageComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.title = this.title?.copy();
    const anchorList = copyListValues<StringType>(this.anchor);
    dest.anchor = anchorList.length === 0 ? undefined : anchorList;
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
      missingReqdProperties.push(`ImplementationGuide.manifest.page.name`);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasAnchor()) {
      setFhirPrimitiveListJson(this.getAnchorElement(), 'anchor', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
