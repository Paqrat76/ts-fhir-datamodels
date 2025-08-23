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
 * ExampleScenario Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ExampleScenario
 * StructureDefinition.name: ExampleScenario
 * StructureDefinition.description: A walkthrough of a workflow showing the interaction between systems and the instances shared, possibly including the evolution of instances over time.
 * StructureDefinition.fhirVersion: 5.0.0
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
  InvalidTypeError,
  JSON,
  MarkdownType,
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
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { ExamplescenarioActorTypeEnum } from '../code-systems/ExamplescenarioActorTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ExampleScenario Class
 *
 * @remarks
 * A walkthrough of a workflow showing the interaction between systems and the instances shared, possibly including the evolution of instances over time.
 *
 * **FHIR Specification**
 * - **Short:** Example of workflow instance
 * - **Definition:** Example of workflow instance.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR ExampleScenario](http://hl7.org/fhir/StructureDefinition/ExampleScenario)
 */
export class ExampleScenario extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'ExampleScenario.status',
    );
  }

  /**
   * Parse the provided `ExampleScenario` JSON to instantiate the ExampleScenario data model.
   *
   * @param sourceJson - JSON representing FHIR `ExampleScenario`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExampleScenario
   * @returns ExampleScenario data model or undefined for `ExampleScenario`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ExampleScenario | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExampleScenario';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExampleScenario();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ExampleScenario');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ExampleScenario[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ExampleScenario`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'copyrightLabel';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCopyrightLabelElement(datatype);
    }

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ExampleScenarioActorComponent | undefined = ExampleScenarioActorComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addActor(component);
        }
      });
    }

    fieldName = 'instance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ExampleScenarioInstanceComponent | undefined = ExampleScenarioInstanceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInstance(component);
        }
      });
    }

    fieldName = 'process';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ExampleScenarioProcessComponent | undefined = ExampleScenarioProcessComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProcess(component);
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
   * ExampleScenario.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this example scenario, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this example scenario when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this example scenario is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the example scenario is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the example scenario to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * ExampleScenario.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the example scenario
   * - **Definition:** A formal identifier that is used to identify this example scenario when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this example scenario outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * ExampleScenario.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the example scenario
   * - **Definition:** The identifier that is used to identify this version of the example scenario when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the example scenario author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different example scenario instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the example scenario with the format [url]|[version]. The version SHOULD NOT contain a \'#\' - see [Business Version](https://hl7.org/fhir/resource.html#bv-format).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * ExampleScenario.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExampleScenario.versionAlgorithm[x]', ['string','Coding',]`
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
  @ChoiceDataTypesMeta('ExampleScenario.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * ExampleScenario.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** To be removed?
   * - **Definition:** Temporarily retained for tooling purposes.
   * - **Comment:** Not needed as code will never be generated from one of these
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * ExampleScenario.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this example scenario (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the ExampleScenario.
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
   * ExampleScenario.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this example scenario. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of example scenarios that are appropriate for use versus not. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
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
   * ExampleScenario.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this example scenario is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of example scenarios that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level example scenario.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * ExampleScenario.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the example scenario was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the example scenario changes. (e.g. the \'content logical definition\').
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the example scenario. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * ExampleScenario.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher/steward (organization or individual)
   * - **Definition:** The name of the organization or individual responsible for the release and ongoing maintenance of the example scenario.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization or individual primarily responsible for the maintenance and upkeep of the example scenario. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the example scenario. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the example scenario.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * ExampleScenario.contact Element
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
   * ExampleScenario.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the ExampleScenario
   * - **Definition:** A free text natural language description of the ExampleScenario from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse. It is not a rendering of the ExampleScenario as conveyed in the \'text\' field of the resource itself.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * ExampleScenario.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate example scenario instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * ExampleScenario.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for example scenario (if applicable)
   * - **Definition:** A legal or geographic region in which the example scenario is intended to be used.
   * - **Comment:** It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally designed or intended. DEPRECATION NOTE: For consistency, implementations are encouraged to migrate to using the new \'jurisdiction\' code in the useContext element.  (I.e. useContext.code indicating http://terminology.hl7.org/CodeSystem/usage-context-type#jurisdiction and useContext.valueCodeableConcept indicating the jurisdiction.)
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * ExampleScenario.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The purpose of the example, e.g. to illustrate a scenario
   * - **Definition:** What the example scenario resource is created for. This should not be used to show the business purpose of the scenario itself, but the purpose of documenting a scenario.
   * - **Comment:** This element does not describe the usage of the example scenario. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this example scenario.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * ExampleScenario.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the example scenario and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the example scenario.
   * - **Comment:** ...
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the example scenario and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * ExampleScenario.copyrightLabel Element
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
   * ExampleScenario.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual involved in exchange
   * - **Definition:** A system or person who shares or receives an instance within the scenario.
   * - **Requirements:** This is optional to allow for ExampleScenarios that are still draft
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actor?: ExampleScenarioActorComponent[] | undefined;

  /**
   * ExampleScenario.instance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data used in the scenario
   * - **Definition:** A single data collection that is shared as part of the scenario.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instance_?: ExampleScenarioInstanceComponent[] | undefined;

  /**
   * ExampleScenario.process Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Major process within scenario
   * - **Definition:** A group of operations that represents a significant step within a scenario.
   * - **Comment:** Some scenarios might describe only one process.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private process?: ExampleScenarioProcessComponent[] | undefined;

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
      const optErrMsg = `Invalid ExampleScenario.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid ExampleScenario.url (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ExampleScenario.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ExampleScenario.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ExampleScenario.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('ExampleScenario.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExampleScenario.versionAlgorithm[x]')
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
        `DataType mismatch for ExampleScenario.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for ExampleScenario.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
      const optErrMsg = `Invalid ExampleScenario.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ExampleScenario.name (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ExampleScenario.title (${String(value)})`;
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
    assertIsDefined<EnumCodeType>(enumType, `ExampleScenario.status is required`);
    const errMsgPrefix = `Invalid ExampleScenario.status`;
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
    assertIsDefined<CodeType>(element, `ExampleScenario.status is required`);
    const optErrMsg = `Invalid ExampleScenario.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `ExampleScenario.status is required`);
    const optErrMsg = `Invalid ExampleScenario.status (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid ExampleScenario.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ExampleScenario.date (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ExampleScenario.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ExampleScenario.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ExampleScenario.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ExampleScenario.description (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ExampleScenario.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ExampleScenario.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExampleScenario.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ExampleScenario.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ExampleScenario.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ExampleScenario.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.copyrightLabel; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ExampleScenario.copyrightLabel (${String(value)})`;
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
   * @returns the `actor` property value as a ExampleScenarioActorComponent array
   */
  public getActor(): ExampleScenarioActorComponent[] {
    return this.actor ?? ([] as ExampleScenarioActorComponent[]);
  }

  /**
   * Assigns the provided ExampleScenarioActorComponent array value to the `actor` property.
   *
   * @param value - the `actor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setActor(value: ExampleScenarioActorComponent[] | undefined): this {
    if (isDefinedList<ExampleScenarioActorComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.actor; Provided value array has an element that is not an instance of ExampleScenarioActorComponent.`;
      assertFhirTypeList<ExampleScenarioActorComponent>(value, ExampleScenarioActorComponent, optErrMsg);
      this.actor = value;
    } else {
      this.actor = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExampleScenarioActorComponent value to the `actor` array property.
   *
   * @param value - the `actor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addActor(value: ExampleScenarioActorComponent | undefined): this {
    if (isDefined<ExampleScenarioActorComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.actor; Provided element is not an instance of ExampleScenarioActorComponent.`;
      assertFhirType<ExampleScenarioActorComponent>(value, ExampleScenarioActorComponent, optErrMsg);
      this.initActor();
      this.actor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `actor` property exists and has a value; `false` otherwise
   */
  public hasActor(): boolean {
    return isDefinedList<ExampleScenarioActorComponent>(this.actor) && this.actor.some((item: ExampleScenarioActorComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `actor` property
   */
  private initActor(): void {
    if(!this.hasActor()) {
      this.actor = [] as ExampleScenarioActorComponent[];
    }
  }

  /**
   * @returns the `instance_` property value as a ExampleScenarioInstanceComponent array
   */
  public getInstance(): ExampleScenarioInstanceComponent[] {
    return this.instance_ ?? ([] as ExampleScenarioInstanceComponent[]);
  }

  /**
   * Assigns the provided ExampleScenarioInstanceComponent array value to the `instance_` property.
   *
   * @param value - the `instance_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInstance(value: ExampleScenarioInstanceComponent[] | undefined): this {
    if (isDefinedList<ExampleScenarioInstanceComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.instance; Provided value array has an element that is not an instance of ExampleScenarioInstanceComponent.`;
      assertFhirTypeList<ExampleScenarioInstanceComponent>(value, ExampleScenarioInstanceComponent, optErrMsg);
      this.instance_ = value;
    } else {
      this.instance_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExampleScenarioInstanceComponent value to the `instance_` array property.
   *
   * @param value - the `instance_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInstance(value: ExampleScenarioInstanceComponent | undefined): this {
    if (isDefined<ExampleScenarioInstanceComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.instance; Provided element is not an instance of ExampleScenarioInstanceComponent.`;
      assertFhirType<ExampleScenarioInstanceComponent>(value, ExampleScenarioInstanceComponent, optErrMsg);
      this.initInstance();
      this.instance_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `instance_` property exists and has a value; `false` otherwise
   */
  public hasInstance(): boolean {
    return isDefinedList<ExampleScenarioInstanceComponent>(this.instance_) && this.instance_.some((item: ExampleScenarioInstanceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `instance_` property
   */
  private initInstance(): void {
    if(!this.hasInstance()) {
      this.instance_ = [] as ExampleScenarioInstanceComponent[];
    }
  }

  /**
   * @returns the `process` property value as a ExampleScenarioProcessComponent array
   */
  public getProcess(): ExampleScenarioProcessComponent[] {
    return this.process ?? ([] as ExampleScenarioProcessComponent[]);
  }

  /**
   * Assigns the provided ExampleScenarioProcessComponent array value to the `process` property.
   *
   * @param value - the `process` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcess(value: ExampleScenarioProcessComponent[] | undefined): this {
    if (isDefinedList<ExampleScenarioProcessComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process; Provided value array has an element that is not an instance of ExampleScenarioProcessComponent.`;
      assertFhirTypeList<ExampleScenarioProcessComponent>(value, ExampleScenarioProcessComponent, optErrMsg);
      this.process = value;
    } else {
      this.process = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExampleScenarioProcessComponent value to the `process` array property.
   *
   * @param value - the `process` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProcess(value: ExampleScenarioProcessComponent | undefined): this {
    if (isDefined<ExampleScenarioProcessComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process; Provided element is not an instance of ExampleScenarioProcessComponent.`;
      assertFhirType<ExampleScenarioProcessComponent>(value, ExampleScenarioProcessComponent, optErrMsg);
      this.initProcess();
      this.process?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `process` property exists and has a value; `false` otherwise
   */
  public hasProcess(): boolean {
    return isDefinedList<ExampleScenarioProcessComponent>(this.process) && this.process.some((item: ExampleScenarioProcessComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `process` property
   */
  private initProcess(): void {
    if(!this.hasProcess()) {
      this.process = [] as ExampleScenarioProcessComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExampleScenario';
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
      this.actor,
      this.instance_,
      this.process,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExampleScenario {
    const dest = new ExampleScenario();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExampleScenario): void {
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
    const actorList = copyListValues<ExampleScenarioActorComponent>(this.actor);
    dest.actor = actorList.length === 0 ? undefined : actorList;
    const instanceList = copyListValues<ExampleScenarioInstanceComponent>(this.instance_);
    dest.instance_ = instanceList.length === 0 ? undefined : instanceList;
    const processList = copyListValues<ExampleScenarioProcessComponent>(this.process);
    dest.process = processList.length === 0 ? undefined : processList;
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
    } else {
      missingReqdProperties.push(`ExampleScenario.status`);
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

    if (this.hasActor()) {
      setFhirBackboneElementListJson(this.getActor(), 'actor', jsonObj);
    }

    if (this.hasInstance()) {
      setFhirBackboneElementListJson(this.getInstance(), 'instance', jsonObj);
    }

    if (this.hasProcess()) {
      setFhirBackboneElementListJson(this.getProcess(), 'process', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ExampleScenarioActorComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Individual involved in exchange
 * - **Definition:** A system or person who shares or receives an instance within the scenario.
 * - **Requirements:** This is optional to allow for ExampleScenarios that are still draft
 *
 * @category Data Models: Resource
 * @see [FHIR ExampleScenario](http://hl7.org/fhir/StructureDefinition/ExampleScenario)
 */
export class ExampleScenarioActorComponent extends BackboneElement implements IBackboneElement {
  constructor(key: StringType | fhirString | null = null, type_: EnumCodeType | CodeType | fhirCode | null = null, title: StringType | fhirString | null = null) {
    super();

    this.examplescenarioActorTypeEnum = new ExamplescenarioActorTypeEnum();

    this.key = null;
    if (isDefined<StringType | fhirString>(key)) {
      if (key instanceof PrimitiveType) {
        this.setKeyElement(key);
      } else {
        this.setKey(key);
      }
    }

    this.type_ = constructorCodeValueAsEnumCodeType<ExamplescenarioActorTypeEnum>(
      type_,
      ExamplescenarioActorTypeEnum,
      this.examplescenarioActorTypeEnum,
      'ExampleScenario.actor.type',
    );

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
   * Parse the provided `ExampleScenarioActorComponent` JSON to instantiate the ExampleScenarioActorComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExampleScenarioActorComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExampleScenarioActorComponent
   * @returns ExampleScenarioActorComponent data model or undefined for `ExampleScenarioActorComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExampleScenarioActorComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExampleScenarioActorComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExampleScenarioActorComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'key';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setKeyElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
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
   * ExampleScenario.actor.key Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** ID or acronym of the actor
   * - **Definition:** A unique string within the scenario that is used to reference the actor.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private key: StringType | null;

  /**
   * FHIR CodeSystem: ExamplescenarioActorType
   *
   * @see {@link ExamplescenarioActorTypeEnum }
   */
  private readonly examplescenarioActorTypeEnum: ExamplescenarioActorTypeEnum;

  /**
   * ExampleScenario.actor.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** person | system
   * - **Definition:** The category of actor - person or system.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ExamplescenarioActorTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * ExampleScenario.actor.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for actor when rendering
   * - **Definition:** The human-readable name for the actor used when rendering the scenario.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title: StringType | null;

  /**
   * ExampleScenario.actor.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details about actor
   * - **Definition:** An explanation of who/what the actor is and its role in the scenario.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `key` property value as a StringType object if defined; else null
   */
  public getKeyElement(): StringType | null {
    return this.key;
  }

  /**
   * Assigns the provided PrimitiveType value to the `key` property.
   *
   * @param element - the `key` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setKeyElement(element: StringType): this {
    assertIsDefined<StringType>(element, `ExampleScenario.actor.key is required`);
    const optErrMsg = `Invalid ExampleScenario.actor.key; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.key = element;
    return this;
  }

  /**
   * @returns `true` if the `key` property exists and has a value; `false` otherwise
   */
  public hasKeyElement(): boolean {
    return isDefined<StringType>(this.key) && !this.key.isEmpty();
  }

  /**
   * @returns the `key` property value as a fhirString if defined; else null
   */
  public getKey(): fhirString | null {
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
  public setKey(value: fhirString): this {
    assertIsDefined<fhirString>(value, `ExampleScenario.actor.key is required`);
    const optErrMsg = `Invalid ExampleScenario.actor.key (${String(value)})`;
    this.key = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `key` property exists and has a value; `false` otherwise
   */
  public hasKey(): boolean {
    return this.hasKeyElement();
  }

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ExamplescenarioActorTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ExamplescenarioActorTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ExampleScenario.actor.type is required`);
    const errMsgPrefix = `Invalid ExampleScenario.actor.type`;
    assertEnumCodeType<ExamplescenarioActorTypeEnum>(enumType, ExamplescenarioActorTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ExamplescenarioActorTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ExamplescenarioActorTypeEnum }
   */
  public setTypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ExampleScenario.actor.type is required`);
    const optErrMsg = `Invalid ExampleScenario.actor.type; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.type_ = new EnumCodeType(element, this.examplescenarioActorTypeEnum);
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
   * @see CodeSystem Enumeration: {@link ExamplescenarioActorTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ExamplescenarioActorTypeEnum }
   */
  public setType(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ExampleScenario.actor.type is required`);
    const optErrMsg = `Invalid ExampleScenario.actor.type (${String(value)})`;
    this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.examplescenarioActorTypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
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
    assertIsDefined<StringType>(element, `ExampleScenario.actor.title is required`);
    const optErrMsg = `Invalid ExampleScenario.actor.title; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ExampleScenario.actor.title is required`);
    const optErrMsg = `Invalid ExampleScenario.actor.title (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.actor.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ExampleScenario.actor.description (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExampleScenario.actor';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.key,
      this.type_,
      this.title,
      this.description,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExampleScenarioActorComponent {
    const dest = new ExampleScenarioActorComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExampleScenarioActorComponent): void {
    super.copyValues(dest);
    dest.key = this.key ? this.key.copy() : null;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.title = this.title ? this.title.copy() : null;
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

    if (this.hasKeyElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getKeyElement()!, 'key', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.actor.key`);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.actor.type`);
    }

    if (this.hasTitleElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getTitleElement()!, 'title', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.actor.title`);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ExampleScenarioInstanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Data used in the scenario
 * - **Definition:** A single data collection that is shared as part of the scenario.
 *
 * @category Data Models: Resource
 * @see [FHIR ExampleScenario](http://hl7.org/fhir/StructureDefinition/ExampleScenario)
 */
export class ExampleScenarioInstanceComponent extends BackboneElement implements IBackboneElement {
  constructor(key: StringType | fhirString | null = null, structureType: Coding | null = null, title: StringType | fhirString | null = null) {
    super();

    this.key = null;
    if (isDefined<StringType | fhirString>(key)) {
      if (key instanceof PrimitiveType) {
        this.setKeyElement(key);
      } else {
        this.setKey(key);
      }
    }

    this.structureType = null;
    if (isDefined<Coding>(structureType)) {
      this.setStructureType(structureType);
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
   * Parse the provided `ExampleScenarioInstanceComponent` JSON to instantiate the ExampleScenarioInstanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExampleScenarioInstanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExampleScenarioInstanceComponent
   * @returns ExampleScenarioInstanceComponent data model or undefined for `ExampleScenarioInstanceComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExampleScenarioInstanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExampleScenarioInstanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExampleScenarioInstanceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ExampleScenarioInstanceComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ExampleScenarioInstanceComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'key';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setKeyElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'structureType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStructureType(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'structureVersion';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setStructureVersionElement(datatype);
    }

    fieldName = 'structureProfile[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const structureProfile: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setStructureProfile(structureProfile);

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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'content';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContent(datatype);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ExampleScenarioInstanceVersionComponent | undefined = ExampleScenarioInstanceVersionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addVersion(component);
        }
      });
    }

    fieldName = 'containedInstance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ExampleScenarioInstanceContainedInstanceComponent | undefined = ExampleScenarioInstanceContainedInstanceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addContainedInstance(component);
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
   * ExampleScenario.instance.key Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** ID or acronym of the instance
   * - **Definition:** A unique string within the scenario that is used to reference the instance.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private key: StringType | null;

  /**
   * ExampleScenario.instance.structureType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data structure for example
   * - **Definition:** A code indicating the kind of data structure (FHIR resource or some other standard) this is an instance of.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private structureType: Coding | null;

  /**
   * ExampleScenario.instance.structureVersion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. 4.0.1
   * - **Definition:** Conveys the version of the data structure instantiated.  I.e. what release of FHIR, X12, OpenEHR, etc. is instance compliant with.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private structureVersion?: StringType | undefined;

  /**
   * ExampleScenario.instance.structureProfile[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ExampleScenario.instance.structureProfile[x]', ['canonical','uri',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Rules instance adheres to
   * - **Definition:** Refers to a profile, template or other ruleset the instance adheres to.
   * - **FHIR Types:**
   *     'canonical',
   *     'uri',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ExampleScenario.instance.structureProfile[x]',[
    'canonical',
    'uri',
  ])
  private structureProfile?: IDataType | undefined;

  /**
   * ExampleScenario.instance.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for instance
   * - **Definition:** A short descriptive label the instance to be used in tables or diagrams.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title: StringType | null;

  /**
   * ExampleScenario.instance.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-friendly description of the instance
   * - **Definition:** An explanation of what the instance contains and what it\'s for.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ExampleScenario.instance.content Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Example instance data
   * - **Definition:** Points to an instance (typically an example) that shows the data that would corespond to this instance.
   * - **Comment:** If not conveying FHIR data or not using the same version of FHIR as this ExampleScenario instance, the reference must be to a Binary.
   * - **FHIR Type:** `Reference`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private content?: Reference | undefined;

  /**
   * ExampleScenario.instance.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Snapshot of instance that changes
   * - **Definition:** Represents the instance as it was at a specific time-point.
   * - **Comment:** Not used if an instance doesn\'t change
   * - **Requirements:** Allows representing the \'same\' instance as it evolves throughout the scenario.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private version?: ExampleScenarioInstanceVersionComponent[] | undefined;

  /**
   * ExampleScenario.instance.containedInstance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resources contained in the instance
   * - **Definition:** References to other instances that can be found within this instance (e.g. the observations contained in a bundle).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private containedInstance?: ExampleScenarioInstanceContainedInstanceComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `key` property value as a StringType object if defined; else null
   */
  public getKeyElement(): StringType | null {
    return this.key;
  }

  /**
   * Assigns the provided PrimitiveType value to the `key` property.
   *
   * @param element - the `key` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setKeyElement(element: StringType): this {
    assertIsDefined<StringType>(element, `ExampleScenario.instance.key is required`);
    const optErrMsg = `Invalid ExampleScenario.instance.key; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.key = element;
    return this;
  }

  /**
   * @returns `true` if the `key` property exists and has a value; `false` otherwise
   */
  public hasKeyElement(): boolean {
    return isDefined<StringType>(this.key) && !this.key.isEmpty();
  }

  /**
   * @returns the `key` property value as a fhirString if defined; else null
   */
  public getKey(): fhirString | null {
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
  public setKey(value: fhirString): this {
    assertIsDefined<fhirString>(value, `ExampleScenario.instance.key is required`);
    const optErrMsg = `Invalid ExampleScenario.instance.key (${String(value)})`;
    this.key = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `key` property exists and has a value; `false` otherwise
   */
  public hasKey(): boolean {
    return this.hasKeyElement();
  }

  /**
   * @returns the `structureType` property value as a Coding object if defined; else null
   */
  public getStructureType(): Coding | null {
    return this.structureType;
  }

  /**
   * Assigns the provided Coding object value to the `structureType` property.
   *
   * @param value - the `structureType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStructureType(value: Coding): this {
    assertIsDefined<Coding>(value, `ExampleScenario.instance.structureType is required`);
    const optErrMsg = `Invalid ExampleScenario.instance.structureType; Provided element is not an instance of Coding.`;
    assertFhirType<Coding>(value, Coding, optErrMsg);
    this.structureType = value;
    return this;
  }

  /**
   * @returns `true` if the `structureType` property exists and has a value; `false` otherwise
   */
  public hasStructureType(): boolean {
    return isDefined<Coding>(this.structureType) && !this.structureType.isEmpty();
  }

  /**
   * @returns the `structureVersion` property value as a StringType object if defined; else an empty StringType object
   */
  public getStructureVersionElement(): StringType {
    return this.structureVersion ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `structureVersion` property.
   *
   * @param element - the `structureVersion` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStructureVersionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ExampleScenario.instance.structureVersion; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.structureVersion = element;
    } else {
      this.structureVersion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `structureVersion` property exists and has a value; `false` otherwise
   */
  public hasStructureVersionElement(): boolean {
    return isDefined<StringType>(this.structureVersion) && !this.structureVersion.isEmpty();
  }

  /**
   * @returns the `structureVersion` property value as a fhirString if defined; else undefined
   */
  public getStructureVersion(): fhirString | undefined {
    return this.structureVersion?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `structureVersion` property.
   *
   * @param value - the `structureVersion` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStructureVersion(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ExampleScenario.instance.structureVersion (${String(value)})`;
      this.structureVersion = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.structureVersion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `structureVersion` property exists and has a value; `false` otherwise
   */
  public hasStructureVersion(): boolean {
    return this.hasStructureVersionElement();
  }

  /**
   * @returns the `structureProfile` property value as a DataType object if defined; else undefined
   */
  public getStructureProfile(): IDataType | undefined {
    return this.structureProfile;
  }

  /**
   * Assigns the provided DataType object value to the `structureProfile` property.
   *
   * @decorator `@ChoiceDataTypes('ExampleScenario.instance.structureProfile[x]')`
   *
   * @param value - the `structureProfile` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ExampleScenario.instance.structureProfile[x]')
  public setStructureProfile(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.structureProfile = value;
    } else {
      this.structureProfile = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `structureProfile` property exists and has a value; `false` otherwise
   */
  public hasStructureProfile(): boolean {
    return isDefined<IDataType>(this.structureProfile) && !this.structureProfile.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `structureProfile` property value as a CanonicalType object if defined; else undefined
   */
  public getStructureProfileCanonicalType(): CanonicalType | undefined {
    if (!isDefined<IDataType | undefined>(this.structureProfile)) {
      return undefined;
    }
    if (!(this.structureProfile instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ExampleScenario.instance.structureProfile[x]: Expected CanonicalType but encountered ${this.structureProfile.fhirType()}`,
      );
    }
    return this.structureProfile;
  }

  /**
   * @returns `true` if the `structureProfile` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasStructureProfileCanonicalType(): boolean {
    return this.hasStructureProfile() && this.structureProfile instanceof CanonicalType;
  }

  /**
   * @returns the `structureProfile` property value as a UriType object if defined; else undefined
   */
  public getStructureProfileUriType(): UriType | undefined {
    if (!isDefined<IDataType | undefined>(this.structureProfile)) {
      return undefined;
    }
    if (!(this.structureProfile instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ExampleScenario.instance.structureProfile[x]: Expected UriType but encountered ${this.structureProfile.fhirType()}`,
      );
    }
    return this.structureProfile;
  }

  /**
   * @returns `true` if the `structureProfile` property exists as a UriType and has a value; `false` otherwise
   */
  public hasStructureProfileUriType(): boolean {
    return this.hasStructureProfile() && this.structureProfile instanceof UriType;
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
    assertIsDefined<StringType>(element, `ExampleScenario.instance.title is required`);
    const optErrMsg = `Invalid ExampleScenario.instance.title; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ExampleScenario.instance.title is required`);
    const optErrMsg = `Invalid ExampleScenario.instance.title (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.instance.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ExampleScenario.instance.description (${String(value)})`;
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
   * @returns the `content` property value as a Reference object; else an empty Reference object
   */
  public getContent(): Reference {
    return this.content ?? new Reference();
  }

  /**
   * Assigns the provided Content object value to the `content` property.
   *
   * @decorator `@ReferenceTargets('ExampleScenario.instance.content', [])`
   *
   * @param value - the `content` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExampleScenario.instance.content', [])
  public setContent(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.content = value;
    } else {
      this.content = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return isDefined<Reference>(this.content) && !this.content.isEmpty();
  }

  /**
   * @returns the `version` property value as a ExampleScenarioInstanceVersionComponent array
   */
  public getVersion(): ExampleScenarioInstanceVersionComponent[] {
    return this.version ?? ([] as ExampleScenarioInstanceVersionComponent[]);
  }

  /**
   * Assigns the provided ExampleScenarioInstanceVersionComponent array value to the `version` property.
   *
   * @param value - the `version` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVersion(value: ExampleScenarioInstanceVersionComponent[] | undefined): this {
    if (isDefinedList<ExampleScenarioInstanceVersionComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.instance.version; Provided value array has an element that is not an instance of ExampleScenarioInstanceVersionComponent.`;
      assertFhirTypeList<ExampleScenarioInstanceVersionComponent>(value, ExampleScenarioInstanceVersionComponent, optErrMsg);
      this.version = value;
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExampleScenarioInstanceVersionComponent value to the `version` array property.
   *
   * @param value - the `version` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVersion(value: ExampleScenarioInstanceVersionComponent | undefined): this {
    if (isDefined<ExampleScenarioInstanceVersionComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.instance.version; Provided element is not an instance of ExampleScenarioInstanceVersionComponent.`;
      assertFhirType<ExampleScenarioInstanceVersionComponent>(value, ExampleScenarioInstanceVersionComponent, optErrMsg);
      this.initVersion();
      this.version?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersion(): boolean {
    return isDefinedList<ExampleScenarioInstanceVersionComponent>(this.version) && this.version.some((item: ExampleScenarioInstanceVersionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `version` property
   */
  private initVersion(): void {
    if(!this.hasVersion()) {
      this.version = [] as ExampleScenarioInstanceVersionComponent[];
    }
  }

  /**
   * @returns the `containedInstance` property value as a ExampleScenarioInstanceContainedInstanceComponent array
   */
  public getContainedInstance(): ExampleScenarioInstanceContainedInstanceComponent[] {
    return this.containedInstance ?? ([] as ExampleScenarioInstanceContainedInstanceComponent[]);
  }

  /**
   * Assigns the provided ExampleScenarioInstanceContainedInstanceComponent array value to the `containedInstance` property.
   *
   * @param value - the `containedInstance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContainedInstance(value: ExampleScenarioInstanceContainedInstanceComponent[] | undefined): this {
    if (isDefinedList<ExampleScenarioInstanceContainedInstanceComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.instance.containedInstance; Provided value array has an element that is not an instance of ExampleScenarioInstanceContainedInstanceComponent.`;
      assertFhirTypeList<ExampleScenarioInstanceContainedInstanceComponent>(value, ExampleScenarioInstanceContainedInstanceComponent, optErrMsg);
      this.containedInstance = value;
    } else {
      this.containedInstance = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExampleScenarioInstanceContainedInstanceComponent value to the `containedInstance` array property.
   *
   * @param value - the `containedInstance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContainedInstance(value: ExampleScenarioInstanceContainedInstanceComponent | undefined): this {
    if (isDefined<ExampleScenarioInstanceContainedInstanceComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.instance.containedInstance; Provided element is not an instance of ExampleScenarioInstanceContainedInstanceComponent.`;
      assertFhirType<ExampleScenarioInstanceContainedInstanceComponent>(value, ExampleScenarioInstanceContainedInstanceComponent, optErrMsg);
      this.initContainedInstance();
      this.containedInstance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `containedInstance` property exists and has a value; `false` otherwise
   */
  public hasContainedInstance(): boolean {
    return isDefinedList<ExampleScenarioInstanceContainedInstanceComponent>(this.containedInstance) && this.containedInstance.some((item: ExampleScenarioInstanceContainedInstanceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `containedInstance` property
   */
  private initContainedInstance(): void {
    if(!this.hasContainedInstance()) {
      this.containedInstance = [] as ExampleScenarioInstanceContainedInstanceComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExampleScenario.instance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.key,
      this.structureType,
      this.structureVersion,
      this.structureProfile,
      this.title,
      this.description,
      this.content,
      this.version,
      this.containedInstance,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExampleScenarioInstanceComponent {
    const dest = new ExampleScenarioInstanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExampleScenarioInstanceComponent): void {
    super.copyValues(dest);
    dest.key = this.key ? this.key.copy() : null;
    dest.structureType = this.structureType ? this.structureType.copy() : null;
    dest.structureVersion = this.structureVersion?.copy();
    dest.structureProfile = this.structureProfile?.copy() as IDataType;
    dest.title = this.title ? this.title.copy() : null;
    dest.description = this.description?.copy();
    dest.content = this.content?.copy();
    const versionList = copyListValues<ExampleScenarioInstanceVersionComponent>(this.version);
    dest.version = versionList.length === 0 ? undefined : versionList;
    const containedInstanceList = copyListValues<ExampleScenarioInstanceContainedInstanceComponent>(this.containedInstance);
    dest.containedInstance = containedInstanceList.length === 0 ? undefined : containedInstanceList;
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

    if (this.hasKeyElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getKeyElement()!, 'key', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.instance.key`);
    }

    if (this.hasStructureType()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getStructureType()!, 'structureType', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.instance.structureType`);
    }

    if (this.hasStructureVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getStructureVersionElement(), 'structureVersion', jsonObj);
    }

    if (this.hasStructureProfile()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getStructureProfile()!, 'structureProfile', jsonObj);
    }

    if (this.hasTitleElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getTitleElement()!, 'title', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.instance.title`);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasContent()) {
      setFhirComplexJson(this.getContent(), 'content', jsonObj);
    }

    if (this.hasVersion()) {
      setFhirBackboneElementListJson(this.getVersion(), 'version', jsonObj);
    }

    if (this.hasContainedInstance()) {
      setFhirBackboneElementListJson(this.getContainedInstance(), 'containedInstance', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ExampleScenarioInstanceVersionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Snapshot of instance that changes
 * - **Definition:** Represents the instance as it was at a specific time-point.
 * - **Comment:** Not used if an instance doesn\'t change
 * - **Requirements:** Allows representing the \'same\' instance as it evolves throughout the scenario.
 *
 * @category Data Models: Resource
 * @see [FHIR ExampleScenario](http://hl7.org/fhir/StructureDefinition/ExampleScenario)
 */
export class ExampleScenarioInstanceVersionComponent extends BackboneElement implements IBackboneElement {
  constructor(key: StringType | fhirString | null = null, title: StringType | fhirString | null = null) {
    super();

    this.key = null;
    if (isDefined<StringType | fhirString>(key)) {
      if (key instanceof PrimitiveType) {
        this.setKeyElement(key);
      } else {
        this.setKey(key);
      }
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
   * Parse the provided `ExampleScenarioInstanceVersionComponent` JSON to instantiate the ExampleScenarioInstanceVersionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExampleScenarioInstanceVersionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExampleScenarioInstanceVersionComponent
   * @returns ExampleScenarioInstanceVersionComponent data model or undefined for `ExampleScenarioInstanceVersionComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExampleScenarioInstanceVersionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExampleScenarioInstanceVersionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExampleScenarioInstanceVersionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'key';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setKeyElement(datatype);
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
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTitleElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'content';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContent(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ExampleScenario.instance.version.key Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** ID or acronym of the version
   * - **Definition:** A unique string within the instance that is used to reference the version of the instance.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private key: StringType | null;

  /**
   * ExampleScenario.instance.version.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for instance version
   * - **Definition:** A short descriptive label the version to be used in tables or diagrams.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title: StringType | null;

  /**
   * ExampleScenario.instance.version.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details about version
   * - **Definition:** An explanation of what this specific version of the instance contains and represents.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ExampleScenario.instance.version.content Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Example instance version data
   * - **Definition:** Points to an instance (typically an example) that shows the data that would flow at this point in the scenario.
   * - **Comment:** If not conveying FHIR data or not using the same version of FHIR as this ExampleScenario instance, the reference must be to a Binary.
   * - **FHIR Type:** `Reference`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private content?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `key` property value as a StringType object if defined; else null
   */
  public getKeyElement(): StringType | null {
    return this.key;
  }

  /**
   * Assigns the provided PrimitiveType value to the `key` property.
   *
   * @param element - the `key` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setKeyElement(element: StringType): this {
    assertIsDefined<StringType>(element, `ExampleScenario.instance.version.key is required`);
    const optErrMsg = `Invalid ExampleScenario.instance.version.key; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.key = element;
    return this;
  }

  /**
   * @returns `true` if the `key` property exists and has a value; `false` otherwise
   */
  public hasKeyElement(): boolean {
    return isDefined<StringType>(this.key) && !this.key.isEmpty();
  }

  /**
   * @returns the `key` property value as a fhirString if defined; else null
   */
  public getKey(): fhirString | null {
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
  public setKey(value: fhirString): this {
    assertIsDefined<fhirString>(value, `ExampleScenario.instance.version.key is required`);
    const optErrMsg = `Invalid ExampleScenario.instance.version.key (${String(value)})`;
    this.key = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `key` property exists and has a value; `false` otherwise
   */
  public hasKey(): boolean {
    return this.hasKeyElement();
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
    assertIsDefined<StringType>(element, `ExampleScenario.instance.version.title is required`);
    const optErrMsg = `Invalid ExampleScenario.instance.version.title; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ExampleScenario.instance.version.title is required`);
    const optErrMsg = `Invalid ExampleScenario.instance.version.title (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.instance.version.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ExampleScenario.instance.version.description (${String(value)})`;
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
   * @returns the `content` property value as a Reference object; else an empty Reference object
   */
  public getContent(): Reference {
    return this.content ?? new Reference();
  }

  /**
   * Assigns the provided Content object value to the `content` property.
   *
   * @decorator `@ReferenceTargets('ExampleScenario.instance.version.content', [])`
   *
   * @param value - the `content` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ExampleScenario.instance.version.content', [])
  public setContent(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.content = value;
    } else {
      this.content = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return isDefined<Reference>(this.content) && !this.content.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExampleScenario.instance.version';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.key,
      this.title,
      this.description,
      this.content,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExampleScenarioInstanceVersionComponent {
    const dest = new ExampleScenarioInstanceVersionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExampleScenarioInstanceVersionComponent): void {
    super.copyValues(dest);
    dest.key = this.key ? this.key.copy() : null;
    dest.title = this.title ? this.title.copy() : null;
    dest.description = this.description?.copy();
    dest.content = this.content?.copy();
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

    if (this.hasKeyElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getKeyElement()!, 'key', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.instance.version.key`);
    }

    if (this.hasTitleElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getTitleElement()!, 'title', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.instance.version.title`);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasContent()) {
      setFhirComplexJson(this.getContent(), 'content', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ExampleScenarioInstanceContainedInstanceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Resources contained in the instance
 * - **Definition:** References to other instances that can be found within this instance (e.g. the observations contained in a bundle).
 *
 * @category Data Models: Resource
 * @see [FHIR ExampleScenario](http://hl7.org/fhir/StructureDefinition/ExampleScenario)
 */
export class ExampleScenarioInstanceContainedInstanceComponent extends BackboneElement implements IBackboneElement {
  constructor(instanceReference: StringType | fhirString | null = null) {
    super();

    this.instanceReference = null;
    if (isDefined<StringType | fhirString>(instanceReference)) {
      if (instanceReference instanceof PrimitiveType) {
        this.setInstanceReferenceElement(instanceReference);
      } else {
        this.setInstanceReference(instanceReference);
      }
    }
  }

  /**
   * Parse the provided `ExampleScenarioInstanceContainedInstanceComponent` JSON to instantiate the ExampleScenarioInstanceContainedInstanceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExampleScenarioInstanceContainedInstanceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExampleScenarioInstanceContainedInstanceComponent
   * @returns ExampleScenarioInstanceContainedInstanceComponent data model or undefined for `ExampleScenarioInstanceContainedInstanceComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExampleScenarioInstanceContainedInstanceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExampleScenarioInstanceContainedInstanceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExampleScenarioInstanceContainedInstanceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'instanceReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setInstanceReferenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'versionReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionReferenceElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ExampleScenario.instance.containedInstance.instanceReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Key of contained instance
   * - **Definition:** A reference to the key of an instance found within this one.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instanceReference: StringType | null;

  /**
   * ExampleScenario.instance.containedInstance.versionReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Key of contained instance version
   * - **Definition:** A reference to the key of a specific version of an instance in this instance.
   * - **Comment:** Required if the referenced instance has versions
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private versionReference?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `instanceReference` property value as a StringType object if defined; else null
   */
  public getInstanceReferenceElement(): StringType | null {
    return this.instanceReference;
  }

  /**
   * Assigns the provided PrimitiveType value to the `instanceReference` property.
   *
   * @param element - the `instanceReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstanceReferenceElement(element: StringType): this {
    assertIsDefined<StringType>(element, `ExampleScenario.instance.containedInstance.instanceReference is required`);
    const optErrMsg = `Invalid ExampleScenario.instance.containedInstance.instanceReference; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.instanceReference = element;
    return this;
  }

  /**
   * @returns `true` if the `instanceReference` property exists and has a value; `false` otherwise
   */
  public hasInstanceReferenceElement(): boolean {
    return isDefined<StringType>(this.instanceReference) && !this.instanceReference.isEmpty();
  }

  /**
   * @returns the `instanceReference` property value as a fhirString if defined; else null
   */
  public getInstanceReference(): fhirString | null {
    if (this.instanceReference?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.instanceReference.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `instanceReference` property.
   *
   * @param value - the `instanceReference` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstanceReference(value: fhirString): this {
    assertIsDefined<fhirString>(value, `ExampleScenario.instance.containedInstance.instanceReference is required`);
    const optErrMsg = `Invalid ExampleScenario.instance.containedInstance.instanceReference (${String(value)})`;
    this.instanceReference = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `instanceReference` property exists and has a value; `false` otherwise
   */
  public hasInstanceReference(): boolean {
    return this.hasInstanceReferenceElement();
  }

  /**
   * @returns the `versionReference` property value as a StringType object if defined; else an empty StringType object
   */
  public getVersionReferenceElement(): StringType {
    return this.versionReference ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `versionReference` property.
   *
   * @param element - the `versionReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersionReferenceElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ExampleScenario.instance.containedInstance.versionReference; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.versionReference = element;
    } else {
      this.versionReference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `versionReference` property exists and has a value; `false` otherwise
   */
  public hasVersionReferenceElement(): boolean {
    return isDefined<StringType>(this.versionReference) && !this.versionReference.isEmpty();
  }

  /**
   * @returns the `versionReference` property value as a fhirString if defined; else undefined
   */
  public getVersionReference(): fhirString | undefined {
    return this.versionReference?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `versionReference` property.
   *
   * @param value - the `versionReference` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersionReference(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ExampleScenario.instance.containedInstance.versionReference (${String(value)})`;
      this.versionReference = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.versionReference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `versionReference` property exists and has a value; `false` otherwise
   */
  public hasVersionReference(): boolean {
    return this.hasVersionReferenceElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExampleScenario.instance.containedInstance';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.instanceReference,
      this.versionReference,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExampleScenarioInstanceContainedInstanceComponent {
    const dest = new ExampleScenarioInstanceContainedInstanceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExampleScenarioInstanceContainedInstanceComponent): void {
    super.copyValues(dest);
    dest.instanceReference = this.instanceReference ? this.instanceReference.copy() : null;
    dest.versionReference = this.versionReference?.copy();
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

    if (this.hasInstanceReferenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getInstanceReferenceElement()!, 'instanceReference', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.instance.containedInstance.instanceReference`);
    }

    if (this.hasVersionReferenceElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionReferenceElement(), 'versionReference', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ExampleScenarioProcessComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Major process within scenario
 * - **Definition:** A group of operations that represents a significant step within a scenario.
 * - **Comment:** Some scenarios might describe only one process.
 *
 * @category Data Models: Resource
 * @see [FHIR ExampleScenario](http://hl7.org/fhir/StructureDefinition/ExampleScenario)
 */
export class ExampleScenarioProcessComponent extends BackboneElement implements IBackboneElement {
  constructor(title: StringType | fhirString | null = null) {
    super();

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
   * Parse the provided `ExampleScenarioProcessComponent` JSON to instantiate the ExampleScenarioProcessComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExampleScenarioProcessComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExampleScenarioProcessComponent
   * @returns ExampleScenarioProcessComponent data model or undefined for `ExampleScenarioProcessComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExampleScenarioProcessComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExampleScenarioProcessComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExampleScenarioProcessComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'preConditions';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setPreConditionsElement(datatype);
    }

    fieldName = 'postConditions';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setPostConditionsElement(datatype);
    }

    fieldName = 'step';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ExampleScenarioProcessStepComponent | undefined = ExampleScenarioProcessStepComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStep(component);
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
   * ExampleScenario.process.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for procss
   * - **Definition:** A short descriptive label the process to be used in tables or diagrams.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title: StringType | null;

  /**
   * ExampleScenario.process.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-friendly description of the process
   * - **Definition:** An explanation of what the process represents and what it does.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ExampleScenario.process.preConditions Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Status before process starts
   * - **Definition:** Description of the initial state of the actors, environment and data before the process starts.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preConditions?: MarkdownType | undefined;

  /**
   * ExampleScenario.process.postConditions Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Status after successful completion
   * - **Definition:** Description of the final state of the actors, environment and data after the process has been successfully completed.
   * - **Comment:** Alternate steps might not result in all post conditions holding
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private postConditions?: MarkdownType | undefined;

  /**
   * ExampleScenario.process.step Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Event within of the process
   * - **Definition:** A significant action that occurs as part of the process.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private step?: ExampleScenarioProcessStepComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
    assertIsDefined<StringType>(element, `ExampleScenario.process.title is required`);
    const optErrMsg = `Invalid ExampleScenario.process.title; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ExampleScenario.process.title is required`);
    const optErrMsg = `Invalid ExampleScenario.process.title (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.process.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ExampleScenario.process.description (${String(value)})`;
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
   * @returns the `preConditions` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getPreConditionsElement(): MarkdownType {
    return this.preConditions ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `preConditions` property.
   *
   * @param element - the `preConditions` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreConditionsElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid ExampleScenario.process.preConditions; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.preConditions = element;
    } else {
      this.preConditions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preConditions` property exists and has a value; `false` otherwise
   */
  public hasPreConditionsElement(): boolean {
    return isDefined<MarkdownType>(this.preConditions) && !this.preConditions.isEmpty();
  }

  /**
   * @returns the `preConditions` property value as a fhirMarkdown if defined; else undefined
   */
  public getPreConditions(): fhirMarkdown | undefined {
    return this.preConditions?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `preConditions` property.
   *
   * @param value - the `preConditions` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreConditions(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.preConditions (${String(value)})`;
      this.preConditions = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.preConditions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preConditions` property exists and has a value; `false` otherwise
   */
  public hasPreConditions(): boolean {
    return this.hasPreConditionsElement();
  }

  /**
   * @returns the `postConditions` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getPostConditionsElement(): MarkdownType {
    return this.postConditions ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `postConditions` property.
   *
   * @param element - the `postConditions` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPostConditionsElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid ExampleScenario.process.postConditions; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.postConditions = element;
    } else {
      this.postConditions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `postConditions` property exists and has a value; `false` otherwise
   */
  public hasPostConditionsElement(): boolean {
    return isDefined<MarkdownType>(this.postConditions) && !this.postConditions.isEmpty();
  }

  /**
   * @returns the `postConditions` property value as a fhirMarkdown if defined; else undefined
   */
  public getPostConditions(): fhirMarkdown | undefined {
    return this.postConditions?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `postConditions` property.
   *
   * @param value - the `postConditions` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPostConditions(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.postConditions (${String(value)})`;
      this.postConditions = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.postConditions = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `postConditions` property exists and has a value; `false` otherwise
   */
  public hasPostConditions(): boolean {
    return this.hasPostConditionsElement();
  }

  /**
   * @returns the `step` property value as a ExampleScenarioProcessStepComponent array
   */
  public getStep(): ExampleScenarioProcessStepComponent[] {
    return this.step ?? ([] as ExampleScenarioProcessStepComponent[]);
  }

  /**
   * Assigns the provided ExampleScenarioProcessStepComponent array value to the `step` property.
   *
   * @param value - the `step` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStep(value: ExampleScenarioProcessStepComponent[] | undefined): this {
    if (isDefinedList<ExampleScenarioProcessStepComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step; Provided value array has an element that is not an instance of ExampleScenarioProcessStepComponent.`;
      assertFhirTypeList<ExampleScenarioProcessStepComponent>(value, ExampleScenarioProcessStepComponent, optErrMsg);
      this.step = value;
    } else {
      this.step = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExampleScenarioProcessStepComponent value to the `step` array property.
   *
   * @param value - the `step` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStep(value: ExampleScenarioProcessStepComponent | undefined): this {
    if (isDefined<ExampleScenarioProcessStepComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step; Provided element is not an instance of ExampleScenarioProcessStepComponent.`;
      assertFhirType<ExampleScenarioProcessStepComponent>(value, ExampleScenarioProcessStepComponent, optErrMsg);
      this.initStep();
      this.step?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `step` property exists and has a value; `false` otherwise
   */
  public hasStep(): boolean {
    return isDefinedList<ExampleScenarioProcessStepComponent>(this.step) && this.step.some((item: ExampleScenarioProcessStepComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `step` property
   */
  private initStep(): void {
    if(!this.hasStep()) {
      this.step = [] as ExampleScenarioProcessStepComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExampleScenario.process';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.title,
      this.description,
      this.preConditions,
      this.postConditions,
      this.step,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExampleScenarioProcessComponent {
    const dest = new ExampleScenarioProcessComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExampleScenarioProcessComponent): void {
    super.copyValues(dest);
    dest.title = this.title ? this.title.copy() : null;
    dest.description = this.description?.copy();
    dest.preConditions = this.preConditions?.copy();
    dest.postConditions = this.postConditions?.copy();
    const stepList = copyListValues<ExampleScenarioProcessStepComponent>(this.step);
    dest.step = stepList.length === 0 ? undefined : stepList;
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

    if (this.hasTitleElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getTitleElement()!, 'title', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.process.title`);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasPreConditionsElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPreConditionsElement(), 'preConditions', jsonObj);
    }

    if (this.hasPostConditionsElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPostConditionsElement(), 'postConditions', jsonObj);
    }

    if (this.hasStep()) {
      setFhirBackboneElementListJson(this.getStep(), 'step', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ExampleScenarioProcessStepComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Event within of the process
 * - **Definition:** A significant action that occurs as part of the process.
 *
 * @category Data Models: Resource
 * @see [FHIR ExampleScenario](http://hl7.org/fhir/StructureDefinition/ExampleScenario)
 */
export class ExampleScenarioProcessStepComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ExampleScenarioProcessStepComponent` JSON to instantiate the ExampleScenarioProcessStepComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExampleScenarioProcessStepComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExampleScenarioProcessStepComponent
   * @returns ExampleScenarioProcessStepComponent data model or undefined for `ExampleScenarioProcessStepComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExampleScenarioProcessStepComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExampleScenarioProcessStepComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExampleScenarioProcessStepComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'number';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNumberElement(datatype);
    }

    fieldName = 'process';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ExampleScenarioProcessComponent | undefined = ExampleScenarioProcessComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProcess(component);
    }

    fieldName = 'workflow';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setWorkflowElement(datatype);
    }

    fieldName = 'operation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ExampleScenarioProcessStepOperationComponent | undefined = ExampleScenarioProcessStepOperationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOperation(component);
    }

    fieldName = 'alternative';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ExampleScenarioProcessStepAlternativeComponent | undefined = ExampleScenarioProcessStepAlternativeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAlternative(component);
        }
      });
    }

    fieldName = 'pause';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setPauseElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ExampleScenario.process.step.number Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sequential number of the step
   * - **Definition:** The sequential number of the step, e.g. 1.2.5.
   * - **Comment:** If step numbers are simultaneous, they will be the same.  Numbers don\'t have to be numeric.  E.g. \'2c)\' is a valid step number
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private number?: StringType | undefined;

  /**
   * ExampleScenario.process.step.process Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Step is nested process
   * - **Definition:** Indicates that the step is a complex sub-process with its own steps.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private process?: ExampleScenarioProcessComponent | undefined;

  /**
   * ExampleScenario.process.step.workflow Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Step is nested workflow
   * - **Definition:** Indicates that the step is defined by a seaparate scenario instance.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ExampleScenario',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private workflow?: CanonicalType | undefined;

  /**
   * ExampleScenario.process.step.operation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Step is simple action
   * - **Definition:** The step represents a single operation invoked on receiver by sender.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private operation?: ExampleScenarioProcessStepOperationComponent | undefined;

  /**
   * ExampleScenario.process.step.alternative Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Alternate non-typical step action
   * - **Definition:** Indicates an alternative step that can be taken instead of the sub-process, scenario or operation.  E.g. to represent non-happy-path/exceptional/atypical circumstances.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private alternative?: ExampleScenarioProcessStepAlternativeComponent[] | undefined;

  /**
   * ExampleScenario.process.step.pause Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pause in the flow?
   * - **Definition:** If true, indicates that, following this step, there is a pause in the flow and the subsequent step will occur at some later time (triggered by some event).
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private pause?: BooleanType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `number` property value as a StringType object if defined; else an empty StringType object
   */
  public getNumberElement(): StringType {
    return this.number ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `number` property.
   *
   * @param element - the `number` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.number; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.number = element;
    } else {
      this.number = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `number` property exists and has a value; `false` otherwise
   */
  public hasNumberElement(): boolean {
    return isDefined<StringType>(this.number) && !this.number.isEmpty();
  }

  /**
   * @returns the `number` property value as a fhirString if defined; else undefined
   */
  public getNumber(): fhirString | undefined {
    return this.number?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `number` property.
   *
   * @param value - the `number` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumber(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.number (${String(value)})`;
      this.number = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.number = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `number` property exists and has a value; `false` otherwise
   */
  public hasNumber(): boolean {
    return this.hasNumberElement();
  }

  /**
   * @returns the `process` property value as a ExampleScenarioProcessComponent object if defined; else an empty ExampleScenarioProcessComponent object
   */
  public getProcess(): ExampleScenarioProcessComponent {
    return this.process ?? new ExampleScenarioProcessComponent();
  }

  /**
   * Assigns the provided Process object value to the `process` property.
   *
   * @param value - the `process` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcess(value: ExampleScenarioProcessComponent | undefined): this {
    if (isDefined<ExampleScenarioProcessComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.process; Provided element is not an instance of ExampleScenarioProcessComponent.`;
      assertFhirType<ExampleScenarioProcessComponent>(value, ExampleScenarioProcessComponent, optErrMsg);
      this.process = value;
    } else {
      this.process = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `process` property exists and has a value; `false` otherwise
   */
  public hasProcess(): boolean {
    return isDefined<ExampleScenarioProcessComponent>(this.process) && !this.process.isEmpty();
  }

  /**
   * @returns the `workflow` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getWorkflowElement(): CanonicalType {
    return this.workflow ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `workflow` property.
   *
   * @param element - the `workflow` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWorkflowElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.workflow; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.workflow = element;
    } else {
      this.workflow = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `workflow` property exists and has a value; `false` otherwise
   */
  public hasWorkflowElement(): boolean {
    return isDefined<CanonicalType>(this.workflow) && !this.workflow.isEmpty();
  }

  /**
   * @returns the `workflow` property value as a fhirCanonical if defined; else undefined
   */
  public getWorkflow(): fhirCanonical | undefined {
    return this.workflow?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `workflow` property.
   *
   * @param value - the `workflow` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWorkflow(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.workflow (${String(value)})`;
      this.workflow = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.workflow = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `workflow` property exists and has a value; `false` otherwise
   */
  public hasWorkflow(): boolean {
    return this.hasWorkflowElement();
  }

  /**
   * @returns the `operation` property value as a ExampleScenarioProcessStepOperationComponent object if defined; else an empty ExampleScenarioProcessStepOperationComponent object
   */
  public getOperation(): ExampleScenarioProcessStepOperationComponent {
    return this.operation ?? new ExampleScenarioProcessStepOperationComponent();
  }

  /**
   * Assigns the provided Operation object value to the `operation` property.
   *
   * @param value - the `operation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperation(value: ExampleScenarioProcessStepOperationComponent | undefined): this {
    if (isDefined<ExampleScenarioProcessStepOperationComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation; Provided element is not an instance of ExampleScenarioProcessStepOperationComponent.`;
      assertFhirType<ExampleScenarioProcessStepOperationComponent>(value, ExampleScenarioProcessStepOperationComponent, optErrMsg);
      this.operation = value;
    } else {
      this.operation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operation` property exists and has a value; `false` otherwise
   */
  public hasOperation(): boolean {
    return isDefined<ExampleScenarioProcessStepOperationComponent>(this.operation) && !this.operation.isEmpty();
  }

  /**
   * @returns the `alternative` property value as a ExampleScenarioProcessStepAlternativeComponent array
   */
  public getAlternative(): ExampleScenarioProcessStepAlternativeComponent[] {
    return this.alternative ?? ([] as ExampleScenarioProcessStepAlternativeComponent[]);
  }

  /**
   * Assigns the provided ExampleScenarioProcessStepAlternativeComponent array value to the `alternative` property.
   *
   * @param value - the `alternative` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAlternative(value: ExampleScenarioProcessStepAlternativeComponent[] | undefined): this {
    if (isDefinedList<ExampleScenarioProcessStepAlternativeComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.alternative; Provided value array has an element that is not an instance of ExampleScenarioProcessStepAlternativeComponent.`;
      assertFhirTypeList<ExampleScenarioProcessStepAlternativeComponent>(value, ExampleScenarioProcessStepAlternativeComponent, optErrMsg);
      this.alternative = value;
    } else {
      this.alternative = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExampleScenarioProcessStepAlternativeComponent value to the `alternative` array property.
   *
   * @param value - the `alternative` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAlternative(value: ExampleScenarioProcessStepAlternativeComponent | undefined): this {
    if (isDefined<ExampleScenarioProcessStepAlternativeComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.alternative; Provided element is not an instance of ExampleScenarioProcessStepAlternativeComponent.`;
      assertFhirType<ExampleScenarioProcessStepAlternativeComponent>(value, ExampleScenarioProcessStepAlternativeComponent, optErrMsg);
      this.initAlternative();
      this.alternative?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `alternative` property exists and has a value; `false` otherwise
   */
  public hasAlternative(): boolean {
    return isDefinedList<ExampleScenarioProcessStepAlternativeComponent>(this.alternative) && this.alternative.some((item: ExampleScenarioProcessStepAlternativeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `alternative` property
   */
  private initAlternative(): void {
    if(!this.hasAlternative()) {
      this.alternative = [] as ExampleScenarioProcessStepAlternativeComponent[];
    }
  }

  /**
   * @returns the `pause` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getPauseElement(): BooleanType {
    return this.pause ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `pause` property.
   *
   * @param element - the `pause` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPauseElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.pause; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.pause = element;
    } else {
      this.pause = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `pause` property exists and has a value; `false` otherwise
   */
  public hasPauseElement(): boolean {
    return isDefined<BooleanType>(this.pause) && !this.pause.isEmpty();
  }

  /**
   * @returns the `pause` property value as a fhirBoolean if defined; else undefined
   */
  public getPause(): fhirBoolean | undefined {
    return this.pause?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `pause` property.
   *
   * @param value - the `pause` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPause(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.pause (${String(value)})`;
      this.pause = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.pause = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `pause` property exists and has a value; `false` otherwise
   */
  public hasPause(): boolean {
    return this.hasPauseElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExampleScenario.process.step';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.number,
      this.process,
      this.workflow,
      this.operation,
      this.alternative,
      this.pause,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExampleScenarioProcessStepComponent {
    const dest = new ExampleScenarioProcessStepComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExampleScenarioProcessStepComponent): void {
    super.copyValues(dest);
    dest.number = this.number?.copy();
    dest.process = this.process?.copy();
    dest.workflow = this.workflow?.copy();
    dest.operation = this.operation?.copy();
    const alternativeList = copyListValues<ExampleScenarioProcessStepAlternativeComponent>(this.alternative);
    dest.alternative = alternativeList.length === 0 ? undefined : alternativeList;
    dest.pause = this.pause?.copy();
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

    if (this.hasNumberElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNumberElement(), 'number', jsonObj);
    }

    if (this.hasProcess()) {
      setFhirBackboneElementJson(this.getProcess(), 'process', jsonObj);
    }

    if (this.hasWorkflowElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getWorkflowElement(), 'workflow', jsonObj);
    }

    if (this.hasOperation()) {
      setFhirBackboneElementJson(this.getOperation(), 'operation', jsonObj);
    }

    if (this.hasAlternative()) {
      setFhirBackboneElementListJson(this.getAlternative(), 'alternative', jsonObj);
    }

    if (this.hasPauseElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getPauseElement(), 'pause', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ExampleScenarioProcessStepOperationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Step is simple action
 * - **Definition:** The step represents a single operation invoked on receiver by sender.
 *
 * @category Data Models: Resource
 * @see [FHIR ExampleScenario](http://hl7.org/fhir/StructureDefinition/ExampleScenario)
 */
export class ExampleScenarioProcessStepOperationComponent extends BackboneElement implements IBackboneElement {
  constructor(title: StringType | fhirString | null = null) {
    super();

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
   * Parse the provided `ExampleScenarioProcessStepOperationComponent` JSON to instantiate the ExampleScenarioProcessStepOperationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExampleScenarioProcessStepOperationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExampleScenarioProcessStepOperationComponent
   * @returns ExampleScenarioProcessStepOperationComponent data model or undefined for `ExampleScenarioProcessStepOperationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExampleScenarioProcessStepOperationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExampleScenarioProcessStepOperationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExampleScenarioProcessStepOperationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
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

    fieldName = 'initiator';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setInitiatorElement(datatype);
    }

    fieldName = 'receiver';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setReceiverElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'initiatorActive';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setInitiatorActiveElement(datatype);
    }

    fieldName = 'receiverActive';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setReceiverActiveElement(datatype);
    }

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ExampleScenarioInstanceContainedInstanceComponent | undefined = ExampleScenarioInstanceContainedInstanceComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequest(component);
    }

    fieldName = 'response';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ExampleScenarioInstanceContainedInstanceComponent | undefined = ExampleScenarioInstanceContainedInstanceComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setResponse(component);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ExampleScenario.process.step.operation.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of action
   * - **Definition:** The standardized type of action (FHIR or otherwise).
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: Coding | undefined;

  /**
   * ExampleScenario.process.step.operation.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for step
   * - **Definition:** A short descriptive label the step to be used in tables or diagrams.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title: StringType | null;

  /**
   * ExampleScenario.process.step.operation.initiator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who starts the operation
   * - **Definition:** The system that invokes the action/transmits the data.
   * - **Comment:** This must either be the \'key\' of one of the actors defined in this scenario or the special keyword \'OTHER\' if the initiator is not one of the actors defined for the scenario.  (Multiple references to \'OTHER\' don\'t necessarily indicate the same actor.)
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private initiator?: StringType | undefined;

  /**
   * ExampleScenario.process.step.operation.receiver Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who receives the operation
   * - **Definition:** The system on which the action is invoked/receives the data.
   * - **Comment:** This must either be the \'key\' of one of the actors defined in this scenario or the special keyword \'OTHER\' if the receiver is not one of the actors defined for the scenario.  (Multiple references to \'OTHER\' don\'t necessarily indicate the same actor.)  In some cases, receiver could be same as sender if representing a local operation
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private receiver?: StringType | undefined;

  /**
   * ExampleScenario.process.step.operation.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-friendly description of the operation
   * - **Definition:** An explanation of what the operation represents and what it does.
   * - **Comment:** This should contain information not already present in the process step.  It\'s more of a description of what the operation in general does - if not already evident from the operation.type
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ExampleScenario.process.step.operation.initiatorActive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Initiator stays active?
   * - **Definition:** If false, the initiator is deactivated right after the operation.
   * - **Comment:** De-activation of an actor means they have no further role until such time as they are the recipient of an operation.
   * - **Requirements:** The notion of \'activation\' in a flow diagram is used to indicate \'who has responsibility/is still doing work\'.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private initiatorActive?: BooleanType | undefined;

  /**
   * ExampleScenario.process.step.operation.receiverActive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Receiver stays active?
   * - **Definition:** If false, the receiver is deactivated right after the operation.
   * - **Comment:** De-activation of an actor means they have no further role until such time as they are the recipient of an operation.
   * - **Requirements:** The notion of \'activation\' in a flow diagram is used to indicate \'who has responsibility/is still doing work\'.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private receiverActive?: BooleanType | undefined;

  /**
   * ExampleScenario.process.step.operation.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instance transmitted on invocation
   * - **Definition:** A reference to the instance that is transmitted from requester to receiver as part of the invocation of the operation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private request?: ExampleScenarioInstanceContainedInstanceComponent | undefined;

  /**
   * ExampleScenario.process.step.operation.response Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instance transmitted on invocation response
   * - **Definition:** A reference to the instance that is transmitted from receiver to requester as part of the operation\'s synchronous response (if any).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private response?: ExampleScenarioInstanceContainedInstanceComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a Coding object if defined; else an empty Coding object
   */
  public getType(): Coding {
    return this.type_ ?? new Coding();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.type; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
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
    return isDefined<Coding>(this.type_) && !this.type_.isEmpty();
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
    assertIsDefined<StringType>(element, `ExampleScenario.process.step.operation.title is required`);
    const optErrMsg = `Invalid ExampleScenario.process.step.operation.title; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ExampleScenario.process.step.operation.title is required`);
    const optErrMsg = `Invalid ExampleScenario.process.step.operation.title (${String(value)})`;
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
   * @returns the `initiator` property value as a StringType object if defined; else an empty StringType object
   */
  public getInitiatorElement(): StringType {
    return this.initiator ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `initiator` property.
   *
   * @param element - the `initiator` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInitiatorElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.initiator; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initiator = element;
    } else {
      this.initiator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `initiator` property exists and has a value; `false` otherwise
   */
  public hasInitiatorElement(): boolean {
    return isDefined<StringType>(this.initiator) && !this.initiator.isEmpty();
  }

  /**
   * @returns the `initiator` property value as a fhirString if defined; else undefined
   */
  public getInitiator(): fhirString | undefined {
    return this.initiator?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `initiator` property.
   *
   * @param value - the `initiator` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInitiator(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.initiator (${String(value)})`;
      this.initiator = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.initiator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `initiator` property exists and has a value; `false` otherwise
   */
  public hasInitiator(): boolean {
    return this.hasInitiatorElement();
  }

  /**
   * @returns the `receiver` property value as a StringType object if defined; else an empty StringType object
   */
  public getReceiverElement(): StringType {
    return this.receiver ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `receiver` property.
   *
   * @param element - the `receiver` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReceiverElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.receiver; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.receiver = element;
    } else {
      this.receiver = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `receiver` property exists and has a value; `false` otherwise
   */
  public hasReceiverElement(): boolean {
    return isDefined<StringType>(this.receiver) && !this.receiver.isEmpty();
  }

  /**
   * @returns the `receiver` property value as a fhirString if defined; else undefined
   */
  public getReceiver(): fhirString | undefined {
    return this.receiver?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `receiver` property.
   *
   * @param value - the `receiver` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReceiver(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.receiver (${String(value)})`;
      this.receiver = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.receiver = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `receiver` property exists and has a value; `false` otherwise
   */
  public hasReceiver(): boolean {
    return this.hasReceiverElement();
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
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.description (${String(value)})`;
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
   * @returns the `initiatorActive` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getInitiatorActiveElement(): BooleanType {
    return this.initiatorActive ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `initiatorActive` property.
   *
   * @param element - the `initiatorActive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInitiatorActiveElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.initiatorActive; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.initiatorActive = element;
    } else {
      this.initiatorActive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `initiatorActive` property exists and has a value; `false` otherwise
   */
  public hasInitiatorActiveElement(): boolean {
    return isDefined<BooleanType>(this.initiatorActive) && !this.initiatorActive.isEmpty();
  }

  /**
   * @returns the `initiatorActive` property value as a fhirBoolean if defined; else undefined
   */
  public getInitiatorActive(): fhirBoolean | undefined {
    return this.initiatorActive?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `initiatorActive` property.
   *
   * @param value - the `initiatorActive` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInitiatorActive(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.initiatorActive (${String(value)})`;
      this.initiatorActive = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.initiatorActive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `initiatorActive` property exists and has a value; `false` otherwise
   */
  public hasInitiatorActive(): boolean {
    return this.hasInitiatorActiveElement();
  }

  /**
   * @returns the `receiverActive` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getReceiverActiveElement(): BooleanType {
    return this.receiverActive ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `receiverActive` property.
   *
   * @param element - the `receiverActive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReceiverActiveElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.receiverActive; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.receiverActive = element;
    } else {
      this.receiverActive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `receiverActive` property exists and has a value; `false` otherwise
   */
  public hasReceiverActiveElement(): boolean {
    return isDefined<BooleanType>(this.receiverActive) && !this.receiverActive.isEmpty();
  }

  /**
   * @returns the `receiverActive` property value as a fhirBoolean if defined; else undefined
   */
  public getReceiverActive(): fhirBoolean | undefined {
    return this.receiverActive?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `receiverActive` property.
   *
   * @param value - the `receiverActive` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReceiverActive(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.receiverActive (${String(value)})`;
      this.receiverActive = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.receiverActive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `receiverActive` property exists and has a value; `false` otherwise
   */
  public hasReceiverActive(): boolean {
    return this.hasReceiverActiveElement();
  }

  /**
   * @returns the `request` property value as a ExampleScenarioInstanceContainedInstanceComponent object if defined; else an empty ExampleScenarioInstanceContainedInstanceComponent object
   */
  public getRequest(): ExampleScenarioInstanceContainedInstanceComponent {
    return this.request ?? new ExampleScenarioInstanceContainedInstanceComponent();
  }

  /**
   * Assigns the provided Request object value to the `request` property.
   *
   * @param value - the `request` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRequest(value: ExampleScenarioInstanceContainedInstanceComponent | undefined): this {
    if (isDefined<ExampleScenarioInstanceContainedInstanceComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.request; Provided element is not an instance of ExampleScenarioInstanceContainedInstanceComponent.`;
      assertFhirType<ExampleScenarioInstanceContainedInstanceComponent>(value, ExampleScenarioInstanceContainedInstanceComponent, optErrMsg);
      this.request = value;
    } else {
      this.request = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `request` property exists and has a value; `false` otherwise
   */
  public hasRequest(): boolean {
    return isDefined<ExampleScenarioInstanceContainedInstanceComponent>(this.request) && !this.request.isEmpty();
  }

  /**
   * @returns the `response` property value as a ExampleScenarioInstanceContainedInstanceComponent object if defined; else an empty ExampleScenarioInstanceContainedInstanceComponent object
   */
  public getResponse(): ExampleScenarioInstanceContainedInstanceComponent {
    return this.response ?? new ExampleScenarioInstanceContainedInstanceComponent();
  }

  /**
   * Assigns the provided Response object value to the `response` property.
   *
   * @param value - the `response` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResponse(value: ExampleScenarioInstanceContainedInstanceComponent | undefined): this {
    if (isDefined<ExampleScenarioInstanceContainedInstanceComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.operation.response; Provided element is not an instance of ExampleScenarioInstanceContainedInstanceComponent.`;
      assertFhirType<ExampleScenarioInstanceContainedInstanceComponent>(value, ExampleScenarioInstanceContainedInstanceComponent, optErrMsg);
      this.response = value;
    } else {
      this.response = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `response` property exists and has a value; `false` otherwise
   */
  public hasResponse(): boolean {
    return isDefined<ExampleScenarioInstanceContainedInstanceComponent>(this.response) && !this.response.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExampleScenario.process.step.operation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.title,
      this.initiator,
      this.receiver,
      this.description,
      this.initiatorActive,
      this.receiverActive,
      this.request,
      this.response,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExampleScenarioProcessStepOperationComponent {
    const dest = new ExampleScenarioProcessStepOperationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExampleScenarioProcessStepOperationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.title = this.title ? this.title.copy() : null;
    dest.initiator = this.initiator?.copy();
    dest.receiver = this.receiver?.copy();
    dest.description = this.description?.copy();
    dest.initiatorActive = this.initiatorActive?.copy();
    dest.receiverActive = this.receiverActive?.copy();
    dest.request = this.request?.copy();
    dest.response = this.response?.copy();
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasTitleElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getTitleElement()!, 'title', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.process.step.operation.title`);
    }

    if (this.hasInitiatorElement()) {
      setFhirPrimitiveJson<fhirString>(this.getInitiatorElement(), 'initiator', jsonObj);
    }

    if (this.hasReceiverElement()) {
      setFhirPrimitiveJson<fhirString>(this.getReceiverElement(), 'receiver', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasInitiatorActiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getInitiatorActiveElement(), 'initiatorActive', jsonObj);
    }

    if (this.hasReceiverActiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getReceiverActiveElement(), 'receiverActive', jsonObj);
    }

    if (this.hasRequest()) {
      setFhirBackboneElementJson(this.getRequest(), 'request', jsonObj);
    }

    if (this.hasResponse()) {
      setFhirBackboneElementJson(this.getResponse(), 'response', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ExampleScenarioProcessStepAlternativeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Alternate non-typical step action
 * - **Definition:** Indicates an alternative step that can be taken instead of the sub-process, scenario or operation.  E.g. to represent non-happy-path/exceptional/atypical circumstances.
 *
 * @category Data Models: Resource
 * @see [FHIR ExampleScenario](http://hl7.org/fhir/StructureDefinition/ExampleScenario)
 */
export class ExampleScenarioProcessStepAlternativeComponent extends BackboneElement implements IBackboneElement {
  constructor(title: StringType | fhirString | null = null) {
    super();

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
   * Parse the provided `ExampleScenarioProcessStepAlternativeComponent` JSON to instantiate the ExampleScenarioProcessStepAlternativeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ExampleScenarioProcessStepAlternativeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ExampleScenarioProcessStepAlternativeComponent
   * @returns ExampleScenarioProcessStepAlternativeComponent data model or undefined for `ExampleScenarioProcessStepAlternativeComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ExampleScenarioProcessStepAlternativeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ExampleScenarioProcessStepAlternativeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ExampleScenarioProcessStepAlternativeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'step';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ExampleScenarioProcessStepComponent | undefined = ExampleScenarioProcessStepComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStep(component);
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
   * ExampleScenario.process.step.alternative.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for alternative
   * - **Definition:** The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title: StringType | null;

  /**
   * ExampleScenario.process.step.alternative.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-readable description of option
   * - **Definition:** A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ExampleScenario.process.step.alternative.step Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Alternative action(s)
   * - **Definition:** Indicates the operation, sub-process or scenario that happens if the alternative option is selected.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private step?: ExampleScenarioProcessStepComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
    assertIsDefined<StringType>(element, `ExampleScenario.process.step.alternative.title is required`);
    const optErrMsg = `Invalid ExampleScenario.process.step.alternative.title; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ExampleScenario.process.step.alternative.title is required`);
    const optErrMsg = `Invalid ExampleScenario.process.step.alternative.title (${String(value)})`;
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
      const optErrMsg = `Invalid ExampleScenario.process.step.alternative.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ExampleScenario.process.step.alternative.description (${String(value)})`;
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
   * @returns the `step` property value as a ExampleScenarioProcessStepComponent array
   */
  public getStep(): ExampleScenarioProcessStepComponent[] {
    return this.step ?? ([] as ExampleScenarioProcessStepComponent[]);
  }

  /**
   * Assigns the provided ExampleScenarioProcessStepComponent array value to the `step` property.
   *
   * @param value - the `step` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStep(value: ExampleScenarioProcessStepComponent[] | undefined): this {
    if (isDefinedList<ExampleScenarioProcessStepComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.alternative.step; Provided value array has an element that is not an instance of ExampleScenarioProcessStepComponent.`;
      assertFhirTypeList<ExampleScenarioProcessStepComponent>(value, ExampleScenarioProcessStepComponent, optErrMsg);
      this.step = value;
    } else {
      this.step = undefined;
    }
    return this;
  }

  /**
   * Add the provided ExampleScenarioProcessStepComponent value to the `step` array property.
   *
   * @param value - the `step` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStep(value: ExampleScenarioProcessStepComponent | undefined): this {
    if (isDefined<ExampleScenarioProcessStepComponent>(value)) {
      const optErrMsg = `Invalid ExampleScenario.process.step.alternative.step; Provided element is not an instance of ExampleScenarioProcessStepComponent.`;
      assertFhirType<ExampleScenarioProcessStepComponent>(value, ExampleScenarioProcessStepComponent, optErrMsg);
      this.initStep();
      this.step?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `step` property exists and has a value; `false` otherwise
   */
  public hasStep(): boolean {
    return isDefinedList<ExampleScenarioProcessStepComponent>(this.step) && this.step.some((item: ExampleScenarioProcessStepComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `step` property
   */
  private initStep(): void {
    if(!this.hasStep()) {
      this.step = [] as ExampleScenarioProcessStepComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ExampleScenario.process.step.alternative';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.title,
      this.description,
      this.step,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ExampleScenarioProcessStepAlternativeComponent {
    const dest = new ExampleScenarioProcessStepAlternativeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ExampleScenarioProcessStepAlternativeComponent): void {
    super.copyValues(dest);
    dest.title = this.title ? this.title.copy() : null;
    dest.description = this.description?.copy();
    const stepList = copyListValues<ExampleScenarioProcessStepComponent>(this.step);
    dest.step = stepList.length === 0 ? undefined : stepList;
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

    if (this.hasTitleElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getTitleElement()!, 'title', jsonObj);
    } else {
      missingReqdProperties.push(`ExampleScenario.process.step.alternative.title`);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasStep()) {
      setFhirBackboneElementListJson(this.getStep(), 'step', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
