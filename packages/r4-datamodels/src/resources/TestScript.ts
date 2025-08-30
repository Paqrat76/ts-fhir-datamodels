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
 * TestScript Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/TestScript
 * StructureDefinition.name: TestScript
 * StructureDefinition.description: A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  BooleanType,
  CanonicalType,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  IdType,
  IntegerType,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { AssertDirectionCodesEnum } from '../code-systems/AssertDirectionCodesEnum';
import { AssertOperatorCodesEnum } from '../code-systems/AssertOperatorCodesEnum';
import { AssertResponseCodeTypesEnum } from '../code-systems/AssertResponseCodeTypesEnum';
import { CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { HttpOperationsEnum } from '../code-systems/HttpOperationsEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

/**
 * TestScript Class
 *
 * @remarks
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 *
 * **FHIR Specification**
 * - **Short:** Describes a set of tests
 * - **Definition:** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScript extends DomainResource implements IDomainResource {
  constructor(url: UriType | fhirUri | null = null, name: StringType | fhirString | null = null, status: EnumCodeType | CodeType | fhirCode | null = null) {
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
      'TestScript.status',
    );
  }

  /**
   * Parse the provided `TestScript` JSON to instantiate the TestScript data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScript`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScript
   * @returns TestScript data model or undefined for `TestScript`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): TestScript | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScript';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScript();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'TestScript');
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
      if (datatype === undefined) {
        instance.setUrl(null);
      } else {
        instance.setUrlElement(datatype);
      }
    } else {
      instance.setUrl(null);
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

    fieldName = 'origin';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestScriptOriginComponent | undefined = TestScriptOriginComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOrigin(component);
        }
      });
    }

    fieldName = 'destination';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestScriptDestinationComponent | undefined = TestScriptDestinationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDestination(component);
        }
      });
    }

    fieldName = 'metadata';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestScriptMetadataComponent | undefined = TestScriptMetadataComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMetadata(component);
    }

    fieldName = 'fixture';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestScriptFixtureComponent | undefined = TestScriptFixtureComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addFixture(component);
        }
      });
    }

    fieldName = 'profile';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addProfile(datatype);
        }
      });
  }

    fieldName = 'variable';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestScriptVariableComponent | undefined = TestScriptVariableComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addVariable(component);
        }
      });
    }

    fieldName = 'setup';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestScriptSetupComponent | undefined = TestScriptSetupComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSetup(component);
    }

    fieldName = 'test';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestScriptTestComponent | undefined = TestScriptTestComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTest(component);
        }
      });
    }

    fieldName = 'teardown';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestScriptTeardownComponent | undefined = TestScriptTeardownComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTeardown(component);
    }

    return instance;
  }

  /**
   * TestScript.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this test script, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this test script when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this test script is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the test script is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the test script to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url: UriType | null;

  /**
   * TestScript.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the test script
   * - **Definition:** A formal identifier that is used to identify this test script when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this test script outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * TestScript.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the test script
   * - **Definition:** The identifier that is used to identify this version of the test script when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the test script author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different test script instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the test script with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * TestScript.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this test script (computer friendly)
   * - **Definition:** A natural language name identifying the test script. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * TestScript.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this test script (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the test script.
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
   * TestScript.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this test script. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of test scripts that are appropriate for use versus not.
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
   * TestScript.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this test script is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of test scripts that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level test script.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * TestScript.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the test script was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the test script changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the test script. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * TestScript.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the test script.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the test script is the organization or individual primarily responsible for the maintenance and upkeep of the test script. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the test script. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the test script.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * TestScript.contact Element
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
   * TestScript.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the test script
   * - **Definition:** A free text natural language description of the test script from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the test script was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the test script as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the test script is presumed to be the predominant language in the place the test script was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * TestScript.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate test script instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * TestScript.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for test script (if applicable)
   * - **Definition:** A legal or geographic region in which the test script is intended to be used.
   * - **Comment:** It may be possible for the test script to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * TestScript.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this test script is defined
   * - **Definition:** Explanation of why this test script is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the test script. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this test script.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * TestScript.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the test script and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * TestScript.origin Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An abstract server representing a client or sender in a message exchange
   * - **Definition:** An abstract server used in operations within this test script in the origin element.
   * - **Comment:** The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private origin?: TestScriptOriginComponent[] | undefined;

  /**
   * TestScript.destination Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An abstract server representing a destination or receiver in a message exchange
   * - **Definition:** An abstract server used in operations within this test script in the destination element.
   * - **Comment:** The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private destination?: TestScriptDestinationComponent[] | undefined;

  /**
   * TestScript.metadata Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Required capability that is assumed to function correctly on the FHIR server being tested
   * - **Definition:** The required capability must exist and are assumed to function correctly on the FHIR server being tested.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private metadata?: TestScriptMetadataComponent | undefined;

  /**
   * TestScript.fixture Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fixture in the test script - by reference (uri)
   * - **Definition:** Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private fixture?: TestScriptFixtureComponent[] | undefined;

  /**
   * TestScript.profile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference of the validation profile
   * - **Definition:** Reference to the profile to be used for validation.
   * - **Comment:** See http://build.fhir.org/resourcelist.html for complete list of resource types.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private profile?: Reference[] | undefined;

  /**
   * TestScript.variable Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Placeholder for evaluated elements
   * - **Definition:** Variable is set based either on element value in response body or on header field value in the response headers.
   * - **Comment:** Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private variable?: TestScriptVariableComponent[] | undefined;

  /**
   * TestScript.setup Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A series of required setup operations before tests are executed
   * - **Definition:** A series of required setup operations before tests are executed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private setup?: TestScriptSetupComponent | undefined;

  /**
   * TestScript.test Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A test in this script
   * - **Definition:** A test in this script.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private test?: TestScriptTestComponent[] | undefined;

  /**
   * TestScript.teardown Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A series of required clean up steps
   * - **Definition:** A series of operations required to clean up after all the tests are executed (successfully or otherwise).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private teardown?: TestScriptTeardownComponent | undefined;

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
      const optErrMsg = `Invalid TestScript.url; Provided value is not an instance of UriType.`;
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
      const optErrMsg = `Invalid TestScript.url (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid TestScript.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.version (${String(value)})`;
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
  public setNameElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.name; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.name (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.title (${String(value)})`;
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
      const errMsgPrefix = `Invalid TestScript.status`;
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
      const optErrMsg = `Invalid TestScript.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid TestScript.status (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid TestScript.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid TestScript.date (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid TestScript.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid TestScript.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid TestScript.description (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid TestScript.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid TestScript.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid TestScript.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid TestScript.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid TestScript.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid TestScript.copyright (${String(value)})`;
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
   * @returns the `origin` property value as a TestScriptOriginComponent array
   */
  public getOrigin(): TestScriptOriginComponent[] {
    return this.origin ?? ([] as TestScriptOriginComponent[]);
  }

  /**
   * Assigns the provided TestScriptOriginComponent array value to the `origin` property.
   *
   * @param value - the `origin` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOrigin(value: TestScriptOriginComponent[] | undefined): this {
    if (isDefinedList<TestScriptOriginComponent>(value)) {
      const optErrMsg = `Invalid TestScript.origin; Provided value array has an element that is not an instance of TestScriptOriginComponent.`;
      assertFhirTypeList<TestScriptOriginComponent>(value, TestScriptOriginComponent, optErrMsg);
      this.origin = value;
    } else {
      this.origin = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestScriptOriginComponent value to the `origin` array property.
   *
   * @param value - the `origin` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOrigin(value: TestScriptOriginComponent | undefined): this {
    if (isDefined<TestScriptOriginComponent>(value)) {
      const optErrMsg = `Invalid TestScript.origin; Provided element is not an instance of TestScriptOriginComponent.`;
      assertFhirType<TestScriptOriginComponent>(value, TestScriptOriginComponent, optErrMsg);
      this.initOrigin();
      this.origin?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `origin` property exists and has a value; `false` otherwise
   */
  public hasOrigin(): boolean {
    return isDefinedList<TestScriptOriginComponent>(this.origin) && this.origin.some((item: TestScriptOriginComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `origin` property
   */
  private initOrigin(): void {
    if(!this.hasOrigin()) {
      this.origin = [] as TestScriptOriginComponent[];
    }
  }

  /**
   * @returns the `destination` property value as a TestScriptDestinationComponent array
   */
  public getDestination(): TestScriptDestinationComponent[] {
    return this.destination ?? ([] as TestScriptDestinationComponent[]);
  }

  /**
   * Assigns the provided TestScriptDestinationComponent array value to the `destination` property.
   *
   * @param value - the `destination` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDestination(value: TestScriptDestinationComponent[] | undefined): this {
    if (isDefinedList<TestScriptDestinationComponent>(value)) {
      const optErrMsg = `Invalid TestScript.destination; Provided value array has an element that is not an instance of TestScriptDestinationComponent.`;
      assertFhirTypeList<TestScriptDestinationComponent>(value, TestScriptDestinationComponent, optErrMsg);
      this.destination = value;
    } else {
      this.destination = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestScriptDestinationComponent value to the `destination` array property.
   *
   * @param value - the `destination` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDestination(value: TestScriptDestinationComponent | undefined): this {
    if (isDefined<TestScriptDestinationComponent>(value)) {
      const optErrMsg = `Invalid TestScript.destination; Provided element is not an instance of TestScriptDestinationComponent.`;
      assertFhirType<TestScriptDestinationComponent>(value, TestScriptDestinationComponent, optErrMsg);
      this.initDestination();
      this.destination?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `destination` property exists and has a value; `false` otherwise
   */
  public hasDestination(): boolean {
    return isDefinedList<TestScriptDestinationComponent>(this.destination) && this.destination.some((item: TestScriptDestinationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `destination` property
   */
  private initDestination(): void {
    if(!this.hasDestination()) {
      this.destination = [] as TestScriptDestinationComponent[];
    }
  }

  /**
   * @returns the `metadata` property value as a TestScriptMetadataComponent object if defined; else an empty TestScriptMetadataComponent object
   */
  public getMetadata(): TestScriptMetadataComponent {
    return this.metadata ?? new TestScriptMetadataComponent();
  }

  /**
   * Assigns the provided Metadata object value to the `metadata` property.
   *
   * @param value - the `metadata` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMetadata(value: TestScriptMetadataComponent | undefined): this {
    if (isDefined<TestScriptMetadataComponent>(value)) {
      const optErrMsg = `Invalid TestScript.metadata; Provided element is not an instance of TestScriptMetadataComponent.`;
      assertFhirType<TestScriptMetadataComponent>(value, TestScriptMetadataComponent, optErrMsg);
      this.metadata = value;
    } else {
      this.metadata = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `metadata` property exists and has a value; `false` otherwise
   */
  public hasMetadata(): boolean {
    return isDefined<TestScriptMetadataComponent>(this.metadata) && !this.metadata.isEmpty();
  }

  /**
   * @returns the `fixture` property value as a TestScriptFixtureComponent array
   */
  public getFixture(): TestScriptFixtureComponent[] {
    return this.fixture ?? ([] as TestScriptFixtureComponent[]);
  }

  /**
   * Assigns the provided TestScriptFixtureComponent array value to the `fixture` property.
   *
   * @param value - the `fixture` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFixture(value: TestScriptFixtureComponent[] | undefined): this {
    if (isDefinedList<TestScriptFixtureComponent>(value)) {
      const optErrMsg = `Invalid TestScript.fixture; Provided value array has an element that is not an instance of TestScriptFixtureComponent.`;
      assertFhirTypeList<TestScriptFixtureComponent>(value, TestScriptFixtureComponent, optErrMsg);
      this.fixture = value;
    } else {
      this.fixture = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestScriptFixtureComponent value to the `fixture` array property.
   *
   * @param value - the `fixture` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFixture(value: TestScriptFixtureComponent | undefined): this {
    if (isDefined<TestScriptFixtureComponent>(value)) {
      const optErrMsg = `Invalid TestScript.fixture; Provided element is not an instance of TestScriptFixtureComponent.`;
      assertFhirType<TestScriptFixtureComponent>(value, TestScriptFixtureComponent, optErrMsg);
      this.initFixture();
      this.fixture?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `fixture` property exists and has a value; `false` otherwise
   */
  public hasFixture(): boolean {
    return isDefinedList<TestScriptFixtureComponent>(this.fixture) && this.fixture.some((item: TestScriptFixtureComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `fixture` property
   */
  private initFixture(): void {
    if(!this.hasFixture()) {
      this.fixture = [] as TestScriptFixtureComponent[];
    }
  }

  /**
   * @returns the `profile` property value as a Reference array
   */
  public getProfile(): Reference[] {
    return this.profile ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `profile` property.
   *
   * @decorator `@ReferenceTargets('TestScript.profile', ['Resource',])`
   *
   * @param value - the `profile` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('TestScript.profile', [
    'Resource',
  ])
  public setProfile(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.profile = value;
    } else {
      this.profile = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `profile` array property.
   *
   * @decorator `@ReferenceTargets('TestScript.profile', ['Resource',])`
   *
   * @param value - the `profile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('TestScript.profile', [
    'Resource',
  ])
  public addProfile(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initProfile();
      this.profile?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfile(): boolean {
    return isDefinedList<Reference>(this.profile) && this.profile.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `profile` property
   */
  private initProfile(): void {
    if (!this.hasProfile()) {
      this.profile = [] as Reference[];
    }
  }

  /**
   * @returns the `variable` property value as a TestScriptVariableComponent array
   */
  public getVariable(): TestScriptVariableComponent[] {
    return this.variable ?? ([] as TestScriptVariableComponent[]);
  }

  /**
   * Assigns the provided TestScriptVariableComponent array value to the `variable` property.
   *
   * @param value - the `variable` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVariable(value: TestScriptVariableComponent[] | undefined): this {
    if (isDefinedList<TestScriptVariableComponent>(value)) {
      const optErrMsg = `Invalid TestScript.variable; Provided value array has an element that is not an instance of TestScriptVariableComponent.`;
      assertFhirTypeList<TestScriptVariableComponent>(value, TestScriptVariableComponent, optErrMsg);
      this.variable = value;
    } else {
      this.variable = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestScriptVariableComponent value to the `variable` array property.
   *
   * @param value - the `variable` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVariable(value: TestScriptVariableComponent | undefined): this {
    if (isDefined<TestScriptVariableComponent>(value)) {
      const optErrMsg = `Invalid TestScript.variable; Provided element is not an instance of TestScriptVariableComponent.`;
      assertFhirType<TestScriptVariableComponent>(value, TestScriptVariableComponent, optErrMsg);
      this.initVariable();
      this.variable?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `variable` property exists and has a value; `false` otherwise
   */
  public hasVariable(): boolean {
    return isDefinedList<TestScriptVariableComponent>(this.variable) && this.variable.some((item: TestScriptVariableComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `variable` property
   */
  private initVariable(): void {
    if(!this.hasVariable()) {
      this.variable = [] as TestScriptVariableComponent[];
    }
  }

  /**
   * @returns the `setup` property value as a TestScriptSetupComponent object if defined; else an empty TestScriptSetupComponent object
   */
  public getSetup(): TestScriptSetupComponent {
    return this.setup ?? new TestScriptSetupComponent();
  }

  /**
   * Assigns the provided Setup object value to the `setup` property.
   *
   * @param value - the `setup` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSetup(value: TestScriptSetupComponent | undefined): this {
    if (isDefined<TestScriptSetupComponent>(value)) {
      const optErrMsg = `Invalid TestScript.setup; Provided element is not an instance of TestScriptSetupComponent.`;
      assertFhirType<TestScriptSetupComponent>(value, TestScriptSetupComponent, optErrMsg);
      this.setup = value;
    } else {
      this.setup = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `setup` property exists and has a value; `false` otherwise
   */
  public hasSetup(): boolean {
    return isDefined<TestScriptSetupComponent>(this.setup) && !this.setup.isEmpty();
  }

  /**
   * @returns the `test` property value as a TestScriptTestComponent array
   */
  public getTest(): TestScriptTestComponent[] {
    return this.test ?? ([] as TestScriptTestComponent[]);
  }

  /**
   * Assigns the provided TestScriptTestComponent array value to the `test` property.
   *
   * @param value - the `test` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTest(value: TestScriptTestComponent[] | undefined): this {
    if (isDefinedList<TestScriptTestComponent>(value)) {
      const optErrMsg = `Invalid TestScript.test; Provided value array has an element that is not an instance of TestScriptTestComponent.`;
      assertFhirTypeList<TestScriptTestComponent>(value, TestScriptTestComponent, optErrMsg);
      this.test = value;
    } else {
      this.test = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestScriptTestComponent value to the `test` array property.
   *
   * @param value - the `test` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTest(value: TestScriptTestComponent | undefined): this {
    if (isDefined<TestScriptTestComponent>(value)) {
      const optErrMsg = `Invalid TestScript.test; Provided element is not an instance of TestScriptTestComponent.`;
      assertFhirType<TestScriptTestComponent>(value, TestScriptTestComponent, optErrMsg);
      this.initTest();
      this.test?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `test` property exists and has a value; `false` otherwise
   */
  public hasTest(): boolean {
    return isDefinedList<TestScriptTestComponent>(this.test) && this.test.some((item: TestScriptTestComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `test` property
   */
  private initTest(): void {
    if(!this.hasTest()) {
      this.test = [] as TestScriptTestComponent[];
    }
  }

  /**
   * @returns the `teardown` property value as a TestScriptTeardownComponent object if defined; else an empty TestScriptTeardownComponent object
   */
  public getTeardown(): TestScriptTeardownComponent {
    return this.teardown ?? new TestScriptTeardownComponent();
  }

  /**
   * Assigns the provided Teardown object value to the `teardown` property.
   *
   * @param value - the `teardown` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTeardown(value: TestScriptTeardownComponent | undefined): this {
    if (isDefined<TestScriptTeardownComponent>(value)) {
      const optErrMsg = `Invalid TestScript.teardown; Provided element is not an instance of TestScriptTeardownComponent.`;
      assertFhirType<TestScriptTeardownComponent>(value, TestScriptTeardownComponent, optErrMsg);
      this.teardown = value;
    } else {
      this.teardown = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `teardown` property exists and has a value; `false` otherwise
   */
  public hasTeardown(): boolean {
    return isDefined<TestScriptTeardownComponent>(this.teardown) && !this.teardown.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript';
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
      this.origin,
      this.destination,
      this.metadata,
      this.fixture,
      this.profile,
      this.variable,
      this.setup,
      this.test,
      this.teardown,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.url, this.name, this.status, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScript {
    const dest = new TestScript();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScript): void {
    super.copyValues(dest);
    dest.url = this.url ? this.url.copy() : null;
    dest.identifier = this.identifier?.copy();
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
    const originList = copyListValues<TestScriptOriginComponent>(this.origin);
    dest.origin = originList.length === 0 ? undefined : originList;
    const destinationList = copyListValues<TestScriptDestinationComponent>(this.destination);
    dest.destination = destinationList.length === 0 ? undefined : destinationList;
    dest.metadata = this.metadata?.copy();
    const fixtureList = copyListValues<TestScriptFixtureComponent>(this.fixture);
    dest.fixture = fixtureList.length === 0 ? undefined : fixtureList;
    const profileList = copyListValues<Reference>(this.profile);
    dest.profile = profileList.length === 0 ? undefined : profileList;
    const variableList = copyListValues<TestScriptVariableComponent>(this.variable);
    dest.variable = variableList.length === 0 ? undefined : variableList;
    dest.setup = this.setup?.copy();
    const testList = copyListValues<TestScriptTestComponent>(this.test);
    dest.test = testList.length === 0 ? undefined : testList;
    dest.teardown = this.teardown?.copy();
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

    if (this.hasIdentifier()) {
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
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

    if (this.hasJurisdiction()) {
      setFhirComplexListJson(this.getJurisdiction(), 'jurisdiction', jsonObj);
    }

    if (this.hasPurposeElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPurposeElement(), 'purpose', jsonObj);
    }

    if (this.hasCopyrightElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCopyrightElement(), 'copyright', jsonObj);
    }

    if (this.hasOrigin()) {
      setFhirBackboneElementListJson(this.getOrigin(), 'origin', jsonObj);
    }

    if (this.hasDestination()) {
      setFhirBackboneElementListJson(this.getDestination(), 'destination', jsonObj);
    }

    if (this.hasMetadata()) {
      setFhirBackboneElementJson(this.getMetadata(), 'metadata', jsonObj);
    }

    if (this.hasFixture()) {
      setFhirBackboneElementListJson(this.getFixture(), 'fixture', jsonObj);
    }

    if (this.hasProfile()) {
      setFhirComplexListJson(this.getProfile(), 'profile', jsonObj);
    }

    if (this.hasVariable()) {
      setFhirBackboneElementListJson(this.getVariable(), 'variable', jsonObj);
    }

    if (this.hasSetup()) {
      setFhirBackboneElementJson(this.getSetup(), 'setup', jsonObj);
    }

    if (this.hasTest()) {
      setFhirBackboneElementListJson(this.getTest(), 'test', jsonObj);
    }

    if (this.hasTeardown()) {
      setFhirBackboneElementJson(this.getTeardown(), 'teardown', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * TestScriptOriginComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An abstract server representing a client or sender in a message exchange
 * - **Definition:** An abstract server used in operations within this test script in the origin element.
 * - **Comment:** The purpose of this element is to define the profile of an origin element used elsewhere in the script.  Test engines could then use the origin-profile mapping to offer a filtered list of test systems that can serve as the sender for the interaction.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptOriginComponent extends BackboneElement implements IBackboneElement {
  constructor(index: IntegerType | fhirInteger | null = null, profile: Coding | null = null) {
    super();

    this.index = null;
    if (isDefined<IntegerType | fhirInteger>(index)) {
      if (index instanceof PrimitiveType) {
        this.setIndexElement(index);
      } else {
        this.setIndex(index);
      }
    }

    this.profile = null;
    if (isDefined<Coding>(profile)) {
      this.setProfile(profile);
    }
  }

  /**
   * Parse the provided `TestScriptOriginComponent` JSON to instantiate the TestScriptOriginComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptOriginComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptOriginComponent
   * @returns TestScriptOriginComponent data model or undefined for `TestScriptOriginComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptOriginComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptOriginComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptOriginComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'index';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setIndex(null);
      } else {
        instance.setIndexElement(datatype);
      }
    } else {
      instance.setIndex(null);
    }

    fieldName = 'profile';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setProfile(null);
      } else {
        instance.setProfile(datatype);
      }
    } else {
      instance.setProfile(null);
    }

    return instance;
  }

  /**
   * TestScript.origin.index Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The index of the abstract origin server starting at 1
   * - **Definition:** Abstract name given to an origin server in this test script.  The name is provided as a number starting at 1.
   * - **Comment:** A given origin index (e.g. 1) can appear only once in the list (e.g. Origin 1 cannot be specified twice ... once as FormFiller and again as FormProcessor within the same script as that could get confusing during test configuration).  Different origin indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Filler). The origin indices provided elsewhere in the test script must be one of these origin indices.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private index: IntegerType | null;

  /**
   * TestScript.origin.profile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIR-Client | FHIR-SDC-FormFiller
   * - **Definition:** The type of origin profile the test system supports.
   * - **Comment:** Must be a "sender"/"client" profile.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private profile: Coding | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `index` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getIndexElement(): IntegerType {
    return this.index ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `index` property.
   *
   * @param element - the `index` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIndexElement(element: IntegerType | undefined | null): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid TestScript.origin.index; Provided value is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.index = element;
    } else {
      this.index = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `index` property exists and has a value; `false` otherwise
   */
  public hasIndexElement(): boolean {
    return isDefined<IntegerType>(this.index) && !this.index.isEmpty();
  }

  /**
   * @returns the `index` property value as a fhirInteger if defined; else null
   */
  public getIndex(): fhirInteger | null {
    if (this.index?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.index.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `index` property.
   *
   * @param value - the `index` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIndex(value: fhirInteger | undefined | null): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid TestScript.origin.index (${String(value)})`;
      this.index = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.index = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `index` property exists and has a value; `false` otherwise
   */
  public hasIndex(): boolean {
    return this.hasIndexElement();
  }

  /**
   * @returns the `profile` property value as a Coding object if defined; else an empty Coding object
   */
  public getProfile(): Coding {
    return this.profile ?? new Coding();
  }

  /**
   * Assigns the provided Coding object value to the `profile` property.
   *
   * @param value - the `profile` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProfile(value: Coding | undefined | null): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid TestScript.origin.profile; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.profile = value;
    } else {
      this.profile = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfile(): boolean {
    return isDefined<Coding>(this.profile) && !this.profile.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.origin';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.index,
      this.profile,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.index, this.profile, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptOriginComponent {
    const dest = new TestScriptOriginComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptOriginComponent): void {
    super.copyValues(dest);
    dest.index = this.index ? this.index.copy() : null;
    dest.profile = this.profile ? this.profile.copy() : null;
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

    if (this.hasIndexElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getIndexElement(), 'index', jsonObj);
    } else {
      jsonObj['index'] = null;
    }

    if (this.hasProfile()) {
      setFhirComplexJson(this.getProfile(), 'profile', jsonObj);
    } else {
      jsonObj['profile'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestScriptDestinationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An abstract server representing a destination or receiver in a message exchange
 * - **Definition:** An abstract server used in operations within this test script in the destination element.
 * - **Comment:** The purpose of this element is to define the profile of a destination element used elsewhere in the script.  Test engines could then use the destination-profile mapping to offer a filtered list of test systems that can serve as the receiver for the interaction.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptDestinationComponent extends BackboneElement implements IBackboneElement {
  constructor(index: IntegerType | fhirInteger | null = null, profile: Coding | null = null) {
    super();

    this.index = null;
    if (isDefined<IntegerType | fhirInteger>(index)) {
      if (index instanceof PrimitiveType) {
        this.setIndexElement(index);
      } else {
        this.setIndex(index);
      }
    }

    this.profile = null;
    if (isDefined<Coding>(profile)) {
      this.setProfile(profile);
    }
  }

  /**
   * Parse the provided `TestScriptDestinationComponent` JSON to instantiate the TestScriptDestinationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptDestinationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptDestinationComponent
   * @returns TestScriptDestinationComponent data model or undefined for `TestScriptDestinationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptDestinationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptDestinationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptDestinationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'index';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setIndex(null);
      } else {
        instance.setIndexElement(datatype);
      }
    } else {
      instance.setIndex(null);
    }

    fieldName = 'profile';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setProfile(null);
      } else {
        instance.setProfile(datatype);
      }
    } else {
      instance.setProfile(null);
    }

    return instance;
  }

  /**
   * TestScript.destination.index Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The index of the abstract destination server starting at 1
   * - **Definition:** Abstract name given to a destination server in this test script.  The name is provided as a number starting at 1.
   * - **Comment:** A given destination index (e.g. 1) can appear only once in the list (e.g. Destination 1 cannot be specified twice ... once as Form-Manager and again as Form-Processor within the same script as that could get confusing during test configuration).  Different destination indices could play the same actor in the same test script (e.g. You could have two different test systems acting as Form-Manager). The destination indices provided elsewhere in the test script must be one of these destination indices.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private index: IntegerType | null;

  /**
   * TestScript.destination.profile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor
   * - **Definition:** The type of destination profile the test system supports.
   * - **Comment:** Must be a "receiver"/"server" profile.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private profile: Coding | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `index` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getIndexElement(): IntegerType {
    return this.index ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `index` property.
   *
   * @param element - the `index` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIndexElement(element: IntegerType | undefined | null): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid TestScript.destination.index; Provided value is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.index = element;
    } else {
      this.index = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `index` property exists and has a value; `false` otherwise
   */
  public hasIndexElement(): boolean {
    return isDefined<IntegerType>(this.index) && !this.index.isEmpty();
  }

  /**
   * @returns the `index` property value as a fhirInteger if defined; else null
   */
  public getIndex(): fhirInteger | null {
    if (this.index?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.index.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `index` property.
   *
   * @param value - the `index` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIndex(value: fhirInteger | undefined | null): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid TestScript.destination.index (${String(value)})`;
      this.index = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.index = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `index` property exists and has a value; `false` otherwise
   */
  public hasIndex(): boolean {
    return this.hasIndexElement();
  }

  /**
   * @returns the `profile` property value as a Coding object if defined; else an empty Coding object
   */
  public getProfile(): Coding {
    return this.profile ?? new Coding();
  }

  /**
   * Assigns the provided Coding object value to the `profile` property.
   *
   * @param value - the `profile` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProfile(value: Coding | undefined | null): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid TestScript.destination.profile; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.profile = value;
    } else {
      this.profile = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfile(): boolean {
    return isDefined<Coding>(this.profile) && !this.profile.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.destination';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.index,
      this.profile,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.index, this.profile, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptDestinationComponent {
    const dest = new TestScriptDestinationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptDestinationComponent): void {
    super.copyValues(dest);
    dest.index = this.index ? this.index.copy() : null;
    dest.profile = this.profile ? this.profile.copy() : null;
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

    if (this.hasIndexElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getIndexElement(), 'index', jsonObj);
    } else {
      jsonObj['index'] = null;
    }

    if (this.hasProfile()) {
      setFhirComplexJson(this.getProfile(), 'profile', jsonObj);
    } else {
      jsonObj['profile'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestScriptMetadataComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Required capability that is assumed to function correctly on the FHIR server being tested
 * - **Definition:** The required capability must exist and are assumed to function correctly on the FHIR server being tested.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptMetadataComponent extends BackboneElement implements IBackboneElement {
  constructor(capability: TestScriptMetadataCapabilityComponent[] | null = null) {
    super();

    this.capability = null;
    if (isDefinedList<TestScriptMetadataCapabilityComponent>(capability)) {
      this.setCapability(capability);
    }
  }

  /**
   * Parse the provided `TestScriptMetadataComponent` JSON to instantiate the TestScriptMetadataComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptMetadataComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptMetadataComponent
   * @returns TestScriptMetadataComponent data model or undefined for `TestScriptMetadataComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptMetadataComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptMetadataComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptMetadataComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'link';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestScriptMetadataLinkComponent | undefined = TestScriptMetadataLinkComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addLink(component);
        }
      });
    }

    fieldName = 'capability';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestScriptMetadataCapabilityComponent | undefined = TestScriptMetadataCapabilityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setCapability(null);
        } else {
          instance.addCapability(component);
        }
      });
    } else {
      instance.setCapability(null);
    }

    return instance;
  }

  /**
   * TestScript.metadata.link Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Links to the FHIR specification
   * - **Definition:** A link to the FHIR specification that this test is covering.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private link?: TestScriptMetadataLinkComponent[] | undefined;

  /**
   * TestScript.metadata.capability Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Capabilities  that are assumed to function correctly on the FHIR server being tested
   * - **Definition:** Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
   * - **Comment:** When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server\'s conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server\'s conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private capability: TestScriptMetadataCapabilityComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `link` property value as a TestScriptMetadataLinkComponent array
   */
  public getLink(): TestScriptMetadataLinkComponent[] {
    return this.link ?? ([] as TestScriptMetadataLinkComponent[]);
  }

  /**
   * Assigns the provided TestScriptMetadataLinkComponent array value to the `link` property.
   *
   * @param value - the `link` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLink(value: TestScriptMetadataLinkComponent[] | undefined): this {
    if (isDefinedList<TestScriptMetadataLinkComponent>(value)) {
      const optErrMsg = `Invalid TestScript.metadata.link; Provided value array has an element that is not an instance of TestScriptMetadataLinkComponent.`;
      assertFhirTypeList<TestScriptMetadataLinkComponent>(value, TestScriptMetadataLinkComponent, optErrMsg);
      this.link = value;
    } else {
      this.link = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestScriptMetadataLinkComponent value to the `link` array property.
   *
   * @param value - the `link` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLink(value: TestScriptMetadataLinkComponent | undefined): this {
    if (isDefined<TestScriptMetadataLinkComponent>(value)) {
      const optErrMsg = `Invalid TestScript.metadata.link; Provided element is not an instance of TestScriptMetadataLinkComponent.`;
      assertFhirType<TestScriptMetadataLinkComponent>(value, TestScriptMetadataLinkComponent, optErrMsg);
      this.initLink();
      this.link?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `link` property exists and has a value; `false` otherwise
   */
  public hasLink(): boolean {
    return isDefinedList<TestScriptMetadataLinkComponent>(this.link) && this.link.some((item: TestScriptMetadataLinkComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `link` property
   */
  private initLink(): void {
    if(!this.hasLink()) {
      this.link = [] as TestScriptMetadataLinkComponent[];
    }
  }

  /**
   * @returns the `capability` property value as a TestScriptMetadataCapabilityComponent array
   */
  public getCapability(): TestScriptMetadataCapabilityComponent[] {
    return this.capability ?? ([] as TestScriptMetadataCapabilityComponent[]);
  }

  /**
   * Assigns the provided TestScriptMetadataCapabilityComponent array value to the `capability` property.
   *
   * @param value - the `capability` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCapability(value: TestScriptMetadataCapabilityComponent[] | undefined | null): this {
    if (isDefinedList<TestScriptMetadataCapabilityComponent>(value)) {
      const optErrMsg = `Invalid TestScript.metadata.capability; Provided value array has an element that is not an instance of TestScriptMetadataCapabilityComponent.`;
      assertFhirTypeList<TestScriptMetadataCapabilityComponent>(value, TestScriptMetadataCapabilityComponent, optErrMsg);
      this.capability = value;
    } else {
      this.capability = null;
    }
    return this;
  }

  /**
   * Add the provided TestScriptMetadataCapabilityComponent value to the `capability` array property.
   *
   * @param value - the `capability` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCapability(value: TestScriptMetadataCapabilityComponent | undefined): this {
    if (isDefined<TestScriptMetadataCapabilityComponent>(value)) {
      const optErrMsg = `Invalid TestScript.metadata.capability; Provided element is not an instance of TestScriptMetadataCapabilityComponent.`;
      assertFhirType<TestScriptMetadataCapabilityComponent>(value, TestScriptMetadataCapabilityComponent, optErrMsg);
      this.initCapability();
      this.capability?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `capability` property exists and has a value; `false` otherwise
   */
  public hasCapability(): boolean {
    return isDefinedList<TestScriptMetadataCapabilityComponent>(this.capability) && this.capability.some((item: TestScriptMetadataCapabilityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `capability` property
   */
  private initCapability(): void {
    if(!this.hasCapability()) {
      this.capability = [] as TestScriptMetadataCapabilityComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.metadata';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.link,
      this.capability,
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
  public override copy(): TestScriptMetadataComponent {
    const dest = new TestScriptMetadataComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptMetadataComponent): void {
    super.copyValues(dest);
    const linkList = copyListValues<TestScriptMetadataLinkComponent>(this.link);
    dest.link = linkList.length === 0 ? undefined : linkList;
    const capabilityList = copyListValues<TestScriptMetadataCapabilityComponent>(this.capability);
    dest.capability = capabilityList.length === 0 ? null : capabilityList;
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

    if (this.hasLink()) {
      setFhirBackboneElementListJson(this.getLink(), 'link', jsonObj);
    }

    if (this.hasCapability()) {
      setFhirBackboneElementListJson(this.getCapability(), 'capability', jsonObj);
    } else {
      jsonObj['capability'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestScriptMetadataLinkComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Links to the FHIR specification
 * - **Definition:** A link to the FHIR specification that this test is covering.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptMetadataLinkComponent extends BackboneElement implements IBackboneElement {
  constructor(url: UriType | fhirUri | null = null) {
    super();

    this.url = null;
    if (isDefined<UriType | fhirUri>(url)) {
      if (url instanceof PrimitiveType) {
        this.setUrlElement(url);
      } else {
        this.setUrl(url);
      }
    }
  }

  /**
   * Parse the provided `TestScriptMetadataLinkComponent` JSON to instantiate the TestScriptMetadataLinkComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptMetadataLinkComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptMetadataLinkComponent
   * @returns TestScriptMetadataLinkComponent data model or undefined for `TestScriptMetadataLinkComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptMetadataLinkComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptMetadataLinkComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptMetadataLinkComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    return instance;
  }

  /**
   * TestScript.metadata.link.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** URL to the specification
   * - **Definition:** URL to a particular requirement or feature within the FHIR specification.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private url: UriType | null;

  /**
   * TestScript.metadata.link.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Short description
   * - **Definition:** Short description of the link.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

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
      const optErrMsg = `Invalid TestScript.metadata.link.url; Provided value is not an instance of UriType.`;
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
      const optErrMsg = `Invalid TestScript.metadata.link.url (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.metadata.link.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.metadata.link.description (${String(value)})`;
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
    return 'TestScript.metadata.link';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
      this.description,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.url, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptMetadataLinkComponent {
    const dest = new TestScriptMetadataLinkComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptMetadataLinkComponent): void {
    super.copyValues(dest);
    dest.url = this.url ? this.url.copy() : null;
    dest.description = this.description?.copy();
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestScriptMetadataCapabilityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Capabilities  that are assumed to function correctly on the FHIR server being tested
 * - **Definition:** Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
 * - **Comment:** When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server\'s conformance statement does not contain the elements defined in the minimal conformance statement, then all the tests in the TestScript are skipped.  When the metadata capabilities section is defined at TestScript.test.metadata and the server\'s conformance statement does not contain the elements defined in the minimal conformance statement, then only that test is skipped.  The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not.  They do not impact the skipping logic.  Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptMetadataCapabilityComponent extends BackboneElement implements IBackboneElement {
  constructor(required: BooleanType | fhirBoolean | null = null, validated: BooleanType | fhirBoolean | null = null, capabilities: CanonicalType | fhirCanonical | null = null) {
    super();

    this.required = null;
    if (isDefined<BooleanType | fhirBoolean>(required)) {
      if (required instanceof PrimitiveType) {
        this.setRequiredElement(required);
      } else {
        this.setRequired(required);
      }
    }

    this.validated = null;
    if (isDefined<BooleanType | fhirBoolean>(validated)) {
      if (validated instanceof PrimitiveType) {
        this.setValidatedElement(validated);
      } else {
        this.setValidated(validated);
      }
    }

    this.capabilities = null;
    if (isDefined<CanonicalType | fhirCanonical>(capabilities)) {
      if (capabilities instanceof PrimitiveType) {
        this.setCapabilitiesElement(capabilities);
      } else {
        this.setCapabilities(capabilities);
      }
    }
  }

  /**
   * Parse the provided `TestScriptMetadataCapabilityComponent` JSON to instantiate the TestScriptMetadataCapabilityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptMetadataCapabilityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptMetadataCapabilityComponent
   * @returns TestScriptMetadataCapabilityComponent data model or undefined for `TestScriptMetadataCapabilityComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptMetadataCapabilityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptMetadataCapabilityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptMetadataCapabilityComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'required';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setRequired(null);
      } else {
        instance.setRequiredElement(datatype);
      }
    } else {
      instance.setRequired(null);
    }

    fieldName = 'validated';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setValidated(null);
      } else {
        instance.setValidatedElement(datatype);
      }
    } else {
      instance.setValidated(null);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'origin';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const dataJsonArray: PrimitiveTypeJson[] = getPrimitiveTypeListJson(
        classJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      dataJsonArray.forEach((dataJson: PrimitiveTypeJson) => {
        const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addOriginElement(datatype);
        }
      });
    }

    fieldName = 'destination';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setDestinationElement(datatype);
    }

    fieldName = 'link';
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
        const datatype: UriType | undefined = fhirParser.parseUriType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addLinkElement(datatype);
        }
      });
    }

    fieldName = 'capabilities';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setCapabilities(null);
      } else {
        instance.setCapabilitiesElement(datatype);
      }
    } else {
      instance.setCapabilities(null);
    }

    return instance;
  }

  /**
   * TestScript.metadata.capability.required Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Are the capabilities required?
   * - **Definition:** Whether or not the test execution will require the given capabilities of the server in order for this test script to execute.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private required: BooleanType | null;

  /**
   * TestScript.metadata.capability.validated Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Are the capabilities validated?
   * - **Definition:** Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private validated: BooleanType | null;

  /**
   * TestScript.metadata.capability.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The expected capabilities of the server
   * - **Definition:** Description of the capabilities that this test script is requiring the server to support.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * TestScript.metadata.capability.origin Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Which origin server these requirements apply to
   * - **Definition:** Which origin server these requirements apply to.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private origin?: IntegerType[] | undefined;

  /**
   * TestScript.metadata.capability.destination Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Which server these requirements apply to
   * - **Definition:** Which server these requirements apply to.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private destination?: IntegerType | undefined;

  /**
   * TestScript.metadata.capability.link Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Links to the FHIR specification
   * - **Definition:** Links to the FHIR specification that describes this interaction and the resources involved in more detail.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private link?: UriType[] | undefined;

  /**
   * TestScript.metadata.capability.capabilities Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Required Capability Statement
   * - **Definition:** Minimum capabilities required of server for test script to execute successfully.   If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped.
   * - **Comment:** The conformance statement of the server has to contain at a minimum the contents of the reference pointed to by this element.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CapabilityStatement',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private capabilities: CanonicalType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `required` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getRequiredElement(): BooleanType {
    return this.required ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `required` property.
   *
   * @param element - the `required` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequiredElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.required; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.required = element;
    } else {
      this.required = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `required` property exists and has a value; `false` otherwise
   */
  public hasRequiredElement(): boolean {
    return isDefined<BooleanType>(this.required) && !this.required.isEmpty();
  }

  /**
   * @returns the `required` property value as a fhirBoolean if defined; else null
   */
  public getRequired(): fhirBoolean | null {
    if (this.required?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.required.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `required` property.
   *
   * @param value - the `required` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequired(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.required (${String(value)})`;
      this.required = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.required = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `required` property exists and has a value; `false` otherwise
   */
  public hasRequired(): boolean {
    return this.hasRequiredElement();
  }

  /**
   * @returns the `validated` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getValidatedElement(): BooleanType {
    return this.validated ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `validated` property.
   *
   * @param element - the `validated` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValidatedElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.validated; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.validated = element;
    } else {
      this.validated = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `validated` property exists and has a value; `false` otherwise
   */
  public hasValidatedElement(): boolean {
    return isDefined<BooleanType>(this.validated) && !this.validated.isEmpty();
  }

  /**
   * @returns the `validated` property value as a fhirBoolean if defined; else null
   */
  public getValidated(): fhirBoolean | null {
    if (this.validated?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.validated.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `validated` property.
   *
   * @param value - the `validated` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValidated(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.validated (${String(value)})`;
      this.validated = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.validated = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `validated` property exists and has a value; `false` otherwise
   */
  public hasValidated(): boolean {
    return this.hasValidatedElement();
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
      const optErrMsg = `Invalid TestScript.metadata.capability.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.metadata.capability.description (${String(value)})`;
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
   * @returns the `origin` property value as a IntegerType array
   */
  public getOriginElement(): IntegerType[] {
    return this.origin ?? ([] as IntegerType[]);
  }

  /**
   * Assigns the provided IntegerType array value to the `origin` property.
   *
   * @param element - the `origin` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOriginElement(element: IntegerType[] | undefined): this {
    if (isDefinedList<IntegerType>(element)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.origin; Provided value array has an element that is not an instance of IntegerType.`;
      assertFhirTypeList<IntegerType>(element, IntegerType, optErrMsg);
      this.origin = element;
    } else {
      this.origin = undefined;
    }
    return this;
  }

  /**
   * Add the provided IntegerType value to the `origin` array property.
   *
   * @param element - the `origin` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addOriginElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.origin; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.initOrigin();
      this.origin?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `origin` property exists and has a value; `false` otherwise
   */
  public hasOriginElement(): boolean {
    return isDefinedList<IntegerType>(this.origin) && this.origin.some((item: IntegerType) => !item.isEmpty());
  }

  /**
   * @returns the `origin` property value as a fhirInteger array
   */
  public getOrigin(): fhirInteger[] {
    this.initOrigin();
    const originValues = [] as fhirInteger[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.origin!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        originValues.push(value);
      }
    }
    return originValues;
  }

  /**
   * Assigns the provided primitive value array to the `origin` property.
   *
   * @param value - the `origin` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOrigin(value: fhirInteger[] | undefined): this {
    if (isDefinedList<fhirInteger>(value)) {
      const originElements = [] as IntegerType[];
      for (const originValue of value) {
        const optErrMsg = `Invalid TestScript.metadata.capability.origin array item (${String(originValue)})`;
        const element = new IntegerType(parseFhirPrimitiveData(originValue, fhirIntegerSchema, optErrMsg));
        originElements.push(element);
      }
      this.origin = originElements;
    } else {
      this.origin = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `origin` array property.
   *
   * @param value - the `origin` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addOrigin(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.origin array item (${String(value)})`;
      const element = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
      this.initOrigin();
      this.addOriginElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `origin` property exists and has a value; `false` otherwise
   */
  public hasOrigin(): boolean {
    return this.hasOriginElement();
  }

  /**
   * Initialize the `origin` property
   */
  private initOrigin(): void {
    if (!this.hasOrigin()) {
      this.origin = [] as IntegerType[];
    }
  }

  /**
   * @returns the `destination` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getDestinationElement(): IntegerType {
    return this.destination ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `destination` property.
   *
   * @param element - the `destination` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDestinationElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.destination; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.destination = element;
    } else {
      this.destination = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `destination` property exists and has a value; `false` otherwise
   */
  public hasDestinationElement(): boolean {
    return isDefined<IntegerType>(this.destination) && !this.destination.isEmpty();
  }

  /**
   * @returns the `destination` property value as a fhirInteger if defined; else undefined
   */
  public getDestination(): fhirInteger | undefined {
    return this.destination?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `destination` property.
   *
   * @param value - the `destination` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDestination(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.destination (${String(value)})`;
      this.destination = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.destination = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `destination` property exists and has a value; `false` otherwise
   */
  public hasDestination(): boolean {
    return this.hasDestinationElement();
  }

  /**
   * @returns the `link` property value as a UriType array
   */
  public getLinkElement(): UriType[] {
    return this.link ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `link` property.
   *
   * @param element - the `link` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.link; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.link = element;
    } else {
      this.link = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `link` array property.
   *
   * @param element - the `link` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLinkElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.link; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initLink();
      this.link?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `link` property exists and has a value; `false` otherwise
   */
  public hasLinkElement(): boolean {
    return isDefinedList<UriType>(this.link) && this.link.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `link` property value as a fhirUri array
   */
  public getLink(): fhirUri[] {
    this.initLink();
    const linkValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.link!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        linkValues.push(value);
      }
    }
    return linkValues;
  }

  /**
   * Assigns the provided primitive value array to the `link` property.
   *
   * @param value - the `link` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLink(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const linkElements = [] as UriType[];
      for (const linkValue of value) {
        const optErrMsg = `Invalid TestScript.metadata.capability.link array item (${String(linkValue)})`;
        const element = new UriType(parseFhirPrimitiveData(linkValue, fhirUriSchema, optErrMsg));
        linkElements.push(element);
      }
      this.link = linkElements;
    } else {
      this.link = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `link` array property.
   *
   * @param value - the `link` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLink(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.link array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initLink();
      this.addLinkElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `link` property exists and has a value; `false` otherwise
   */
  public hasLink(): boolean {
    return this.hasLinkElement();
  }

  /**
   * Initialize the `link` property
   */
  private initLink(): void {
    if (!this.hasLink()) {
      this.link = [] as UriType[];
    }
  }

  /**
   * @returns the `capabilities` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getCapabilitiesElement(): CanonicalType {
    return this.capabilities ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `capabilities` property.
   *
   * @param element - the `capabilities` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCapabilitiesElement(element: CanonicalType | undefined | null): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.capabilities; Provided value is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.capabilities = element;
    } else {
      this.capabilities = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `capabilities` property exists and has a value; `false` otherwise
   */
  public hasCapabilitiesElement(): boolean {
    return isDefined<CanonicalType>(this.capabilities) && !this.capabilities.isEmpty();
  }

  /**
   * @returns the `capabilities` property value as a fhirCanonical if defined; else null
   */
  public getCapabilities(): fhirCanonical | null {
    if (this.capabilities?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.capabilities.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `capabilities` property.
   *
   * @param value - the `capabilities` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCapabilities(value: fhirCanonical | undefined | null): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid TestScript.metadata.capability.capabilities (${String(value)})`;
      this.capabilities = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.capabilities = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `capabilities` property exists and has a value; `false` otherwise
   */
  public hasCapabilities(): boolean {
    return this.hasCapabilitiesElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.metadata.capability';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.required,
      this.validated,
      this.description,
      this.origin,
      this.destination,
      this.link,
      this.capabilities,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.required, this.validated, this.capabilities, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptMetadataCapabilityComponent {
    const dest = new TestScriptMetadataCapabilityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptMetadataCapabilityComponent): void {
    super.copyValues(dest);
    dest.required = this.required ? this.required.copy() : null;
    dest.validated = this.validated ? this.validated.copy() : null;
    dest.description = this.description?.copy();
    const originList = copyListValues<IntegerType>(this.origin);
    dest.origin = originList.length === 0 ? undefined : originList;
    dest.destination = this.destination?.copy();
    const linkList = copyListValues<UriType>(this.link);
    dest.link = linkList.length === 0 ? undefined : linkList;
    dest.capabilities = this.capabilities ? this.capabilities.copy() : null;
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

    if (this.hasRequiredElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getRequiredElement(), 'required', jsonObj);
    } else {
      jsonObj['required'] = null;
    }

    if (this.hasValidatedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getValidatedElement(), 'validated', jsonObj);
    } else {
      jsonObj['validated'] = null;
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasOrigin()) {
      setFhirPrimitiveListJson(this.getOriginElement(), 'origin', jsonObj);
    }

    if (this.hasDestinationElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getDestinationElement(), 'destination', jsonObj);
    }

    if (this.hasLink()) {
      setFhirPrimitiveListJson(this.getLinkElement(), 'link', jsonObj);
    }

    if (this.hasCapabilitiesElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getCapabilitiesElement(), 'capabilities', jsonObj);
    } else {
      jsonObj['capabilities'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestScriptFixtureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Fixture in the test script - by reference (uri)
 * - **Definition:** Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptFixtureComponent extends BackboneElement implements IBackboneElement {
  constructor(autocreate: BooleanType | fhirBoolean | null = null, autodelete: BooleanType | fhirBoolean | null = null) {
    super();

    this.autocreate = null;
    if (isDefined<BooleanType | fhirBoolean>(autocreate)) {
      if (autocreate instanceof PrimitiveType) {
        this.setAutocreateElement(autocreate);
      } else {
        this.setAutocreate(autocreate);
      }
    }

    this.autodelete = null;
    if (isDefined<BooleanType | fhirBoolean>(autodelete)) {
      if (autodelete instanceof PrimitiveType) {
        this.setAutodeleteElement(autodelete);
      } else {
        this.setAutodelete(autodelete);
      }
    }
  }

  /**
   * Parse the provided `TestScriptFixtureComponent` JSON to instantiate the TestScriptFixtureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptFixtureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptFixtureComponent
   * @returns TestScriptFixtureComponent data model or undefined for `TestScriptFixtureComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptFixtureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptFixtureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptFixtureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'autocreate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setAutocreate(null);
      } else {
        instance.setAutocreateElement(datatype);
      }
    } else {
      instance.setAutocreate(null);
    }

    fieldName = 'autodelete';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setAutodelete(null);
      } else {
        instance.setAutodeleteElement(datatype);
      }
    } else {
      instance.setAutodelete(null);
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setResource(datatype);
    }

    return instance;
  }

  /**
   * TestScript.fixture.autocreate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether or not to implicitly create the fixture during setup
   * - **Definition:** Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private autocreate: BooleanType | null;

  /**
   * TestScript.fixture.autodelete Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether or not to implicitly delete the fixture during teardown
   * - **Definition:** Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private autodelete: BooleanType | null;

  /**
   * TestScript.fixture.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference of the resource
   * - **Definition:** Reference to the resource (containing the contents of the resource needed for operations).
   * - **Comment:** See http://build.fhir.org/resourcelist.html for complete list of resource types.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private resource?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `autocreate` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAutocreateElement(): BooleanType {
    return this.autocreate ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `autocreate` property.
   *
   * @param element - the `autocreate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAutocreateElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TestScript.fixture.autocreate; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.autocreate = element;
    } else {
      this.autocreate = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `autocreate` property exists and has a value; `false` otherwise
   */
  public hasAutocreateElement(): boolean {
    return isDefined<BooleanType>(this.autocreate) && !this.autocreate.isEmpty();
  }

  /**
   * @returns the `autocreate` property value as a fhirBoolean if defined; else null
   */
  public getAutocreate(): fhirBoolean | null {
    if (this.autocreate?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.autocreate.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `autocreate` property.
   *
   * @param value - the `autocreate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAutocreate(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TestScript.fixture.autocreate (${String(value)})`;
      this.autocreate = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.autocreate = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `autocreate` property exists and has a value; `false` otherwise
   */
  public hasAutocreate(): boolean {
    return this.hasAutocreateElement();
  }

  /**
   * @returns the `autodelete` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAutodeleteElement(): BooleanType {
    return this.autodelete ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `autodelete` property.
   *
   * @param element - the `autodelete` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAutodeleteElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TestScript.fixture.autodelete; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.autodelete = element;
    } else {
      this.autodelete = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `autodelete` property exists and has a value; `false` otherwise
   */
  public hasAutodeleteElement(): boolean {
    return isDefined<BooleanType>(this.autodelete) && !this.autodelete.isEmpty();
  }

  /**
   * @returns the `autodelete` property value as a fhirBoolean if defined; else null
   */
  public getAutodelete(): fhirBoolean | null {
    if (this.autodelete?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.autodelete.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `autodelete` property.
   *
   * @param value - the `autodelete` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAutodelete(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TestScript.fixture.autodelete (${String(value)})`;
      this.autodelete = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.autodelete = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `autodelete` property exists and has a value; `false` otherwise
   */
  public hasAutodelete(): boolean {
    return this.hasAutodeleteElement();
  }

  /**
   * @returns the `resource` property value as a Reference object; else an empty Reference object
   */
  public getResource(): Reference {
    return this.resource ?? new Reference();
  }

  /**
   * Assigns the provided Resource object value to the `resource` property.
   *
   * @decorator `@ReferenceTargets('TestScript.fixture.resource', ['Resource',])`
   *
   * @param value - the `resource` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('TestScript.fixture.resource', [
    'Resource',
  ])
  public setResource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.resource = value;
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return isDefined<Reference>(this.resource) && !this.resource.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.fixture';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.autocreate,
      this.autodelete,
      this.resource,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.autocreate, this.autodelete, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptFixtureComponent {
    const dest = new TestScriptFixtureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptFixtureComponent): void {
    super.copyValues(dest);
    dest.autocreate = this.autocreate ? this.autocreate.copy() : null;
    dest.autodelete = this.autodelete ? this.autodelete.copy() : null;
    dest.resource = this.resource?.copy();
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

    if (this.hasAutocreateElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAutocreateElement(), 'autocreate', jsonObj);
    } else {
      jsonObj['autocreate'] = null;
    }

    if (this.hasAutodeleteElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAutodeleteElement(), 'autodelete', jsonObj);
    } else {
      jsonObj['autodelete'] = null;
    }

    if (this.hasResource()) {
      setFhirComplexJson(this.getResource(), 'resource', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestScriptVariableComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Placeholder for evaluated elements
 * - **Definition:** Variable is set based either on element value in response body or on header field value in the response headers.
 * - **Comment:** Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptVariableComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `TestScriptVariableComponent` JSON to instantiate the TestScriptVariableComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptVariableComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptVariableComponent
   * @returns TestScriptVariableComponent data model or undefined for `TestScriptVariableComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptVariableComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptVariableComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptVariableComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'defaultValue';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDefaultValueElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setExpressionElement(datatype);
    }

    fieldName = 'headerField';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setHeaderFieldElement(datatype);
    }

    fieldName = 'hint';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setHintElement(datatype);
    }

    fieldName = 'path';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPathElement(datatype);
    }

    fieldName = 'sourceId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setSourceIdElement(datatype);
    }

    return instance;
  }

  /**
   * TestScript.variable.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Descriptive name for this variable
   * - **Definition:** Descriptive name for this variable.
   * - **Comment:** Placeholders would contain the variable name wrapped in ${} in "operation.params", "operation.requestHeader.value", and "operation.url" elements.  These placeholders would need to be replaced by the variable value before the operation is executed.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name: StringType | null;

  /**
   * TestScript.variable.defaultValue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Default, hard-coded, or user-defined value for this variable
   * - **Definition:** A default, hard-coded, or user-defined value for this variable.
   * - **Comment:** The purpose of this element is to allow for a pre-defined value that can be used as a default or as an override value. Test engines can optionally use this as a placeholder for user-defined execution time values.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private defaultValue?: StringType | undefined;

  /**
   * TestScript.variable.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the variable
   * - **Definition:** A free text natural language description of the variable and its purpose.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * TestScript.variable.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The FHIRPath expression against the fixture body
   * - **Definition:** The FHIRPath expression to evaluate against the fixture body. When variables are defined, only one of either expression, headerField or path must be specified.
   * - **Comment:** If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression?: StringType | undefined;

  /**
   * TestScript.variable.headerField Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** HTTP header field name for source
   * - **Definition:** Will be used to grab the HTTP header field value from the headers that sourceId is pointing to.
   * - **Comment:** If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define both headerField and path.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private headerField?: StringType | undefined;

  /**
   * TestScript.variable.hint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Hint help text for default value to enter
   * - **Definition:** Displayable text string with hint help information to the user when entering a default value.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private hint?: StringType | undefined;

  /**
   * TestScript.variable.path Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** XPath or JSONPath against the fixture body
   * - **Definition:** XPath or JSONPath to evaluate against the fixture body.  When variables are defined, only one of either expression, headerField or path must be specified.
   * - **Comment:** If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private path?: StringType | undefined;

  /**
   * TestScript.variable.sourceId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fixture Id of source expression or headerField within this variable
   * - **Definition:** Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable.
   * - **Comment:** This can be a statically defined fixture (at the top of the TestScript) or a dynamically set fixture created by responseId of the `action.operation` element.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sourceId?: IdType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid TestScript.variable.name; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.variable.name (${String(value)})`;
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
   * @returns the `defaultValue` property value as a StringType object if defined; else an empty StringType object
   */
  public getDefaultValueElement(): StringType {
    return this.defaultValue ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `defaultValue` property.
   *
   * @param element - the `defaultValue` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefaultValueElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.variable.defaultValue; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.defaultValue = element;
    } else {
      this.defaultValue = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `defaultValue` property exists and has a value; `false` otherwise
   */
  public hasDefaultValueElement(): boolean {
    return isDefined<StringType>(this.defaultValue) && !this.defaultValue.isEmpty();
  }

  /**
   * @returns the `defaultValue` property value as a fhirString if defined; else undefined
   */
  public getDefaultValue(): fhirString | undefined {
    return this.defaultValue?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `defaultValue` property.
   *
   * @param value - the `defaultValue` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefaultValue(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.variable.defaultValue (${String(value)})`;
      this.defaultValue = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.defaultValue = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `defaultValue` property exists and has a value; `false` otherwise
   */
  public hasDefaultValue(): boolean {
    return this.hasDefaultValueElement();
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
      const optErrMsg = `Invalid TestScript.variable.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.variable.description (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.variable.expression; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.variable.expression (${String(value)})`;
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
   * @returns the `headerField` property value as a StringType object if defined; else an empty StringType object
   */
  public getHeaderFieldElement(): StringType {
    return this.headerField ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `headerField` property.
   *
   * @param element - the `headerField` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHeaderFieldElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.variable.headerField; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.headerField = element;
    } else {
      this.headerField = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `headerField` property exists and has a value; `false` otherwise
   */
  public hasHeaderFieldElement(): boolean {
    return isDefined<StringType>(this.headerField) && !this.headerField.isEmpty();
  }

  /**
   * @returns the `headerField` property value as a fhirString if defined; else undefined
   */
  public getHeaderField(): fhirString | undefined {
    return this.headerField?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `headerField` property.
   *
   * @param value - the `headerField` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHeaderField(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.variable.headerField (${String(value)})`;
      this.headerField = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.headerField = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `headerField` property exists and has a value; `false` otherwise
   */
  public hasHeaderField(): boolean {
    return this.hasHeaderFieldElement();
  }

  /**
   * @returns the `hint` property value as a StringType object if defined; else an empty StringType object
   */
  public getHintElement(): StringType {
    return this.hint ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `hint` property.
   *
   * @param element - the `hint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHintElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.variable.hint; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.hint = element;
    } else {
      this.hint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hint` property exists and has a value; `false` otherwise
   */
  public hasHintElement(): boolean {
    return isDefined<StringType>(this.hint) && !this.hint.isEmpty();
  }

  /**
   * @returns the `hint` property value as a fhirString if defined; else undefined
   */
  public getHint(): fhirString | undefined {
    return this.hint?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `hint` property.
   *
   * @param value - the `hint` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHint(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.variable.hint (${String(value)})`;
      this.hint = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.hint = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hint` property exists and has a value; `false` otherwise
   */
  public hasHint(): boolean {
    return this.hasHintElement();
  }

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
      const optErrMsg = `Invalid TestScript.variable.path; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.variable.path (${String(value)})`;
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
   * @returns the `sourceId` property value as a IdType object if defined; else an empty IdType object
   */
  public getSourceIdElement(): IdType {
    return this.sourceId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sourceId` property.
   *
   * @param element - the `sourceId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid TestScript.variable.sourceId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.sourceId = element;
    } else {
      this.sourceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceId` property exists and has a value; `false` otherwise
   */
  public hasSourceIdElement(): boolean {
    return isDefined<IdType>(this.sourceId) && !this.sourceId.isEmpty();
  }

  /**
   * @returns the `sourceId` property value as a fhirId if defined; else undefined
   */
  public getSourceId(): fhirId | undefined {
    return this.sourceId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sourceId` property.
   *
   * @param value - the `sourceId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid TestScript.variable.sourceId (${String(value)})`;
      this.sourceId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.sourceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceId` property exists and has a value; `false` otherwise
   */
  public hasSourceId(): boolean {
    return this.hasSourceIdElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.variable';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.defaultValue,
      this.description,
      this.expression,
      this.headerField,
      this.hint,
      this.path,
      this.sourceId,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.name, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptVariableComponent {
    const dest = new TestScriptVariableComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptVariableComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.defaultValue = this.defaultValue?.copy();
    dest.description = this.description?.copy();
    dest.expression = this.expression?.copy();
    dest.headerField = this.headerField?.copy();
    dest.hint = this.hint?.copy();
    dest.path = this.path?.copy();
    dest.sourceId = this.sourceId?.copy();
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    } else {
      jsonObj['name'] = null;
    }

    if (this.hasDefaultValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDefaultValueElement(), 'defaultValue', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasExpressionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getExpressionElement(), 'expression', jsonObj);
    }

    if (this.hasHeaderFieldElement()) {
      setFhirPrimitiveJson<fhirString>(this.getHeaderFieldElement(), 'headerField', jsonObj);
    }

    if (this.hasHintElement()) {
      setFhirPrimitiveJson<fhirString>(this.getHintElement(), 'hint', jsonObj);
    }

    if (this.hasPathElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPathElement(), 'path', jsonObj);
    }

    if (this.hasSourceIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getSourceIdElement(), 'sourceId', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestScriptSetupComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A series of required setup operations before tests are executed
 * - **Definition:** A series of required setup operations before tests are executed.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptSetupComponent extends BackboneElement implements IBackboneElement {
  constructor(action: TestScriptSetupActionComponent[] | null = null) {
    super();

    this.action = null;
    if (isDefinedList<TestScriptSetupActionComponent>(action)) {
      this.setAction(action);
    }
  }

  /**
   * Parse the provided `TestScriptSetupComponent` JSON to instantiate the TestScriptSetupComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptSetupComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptSetupComponent
   * @returns TestScriptSetupComponent data model or undefined for `TestScriptSetupComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptSetupComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptSetupComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptSetupComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestScriptSetupActionComponent | undefined = TestScriptSetupActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setAction(null);
        } else {
          instance.addAction(component);
        }
      });
    } else {
      instance.setAction(null);
    }

    return instance;
  }

  /**
   * TestScript.setup.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A setup operation or assert to perform
   * - **Definition:** Action would contain either an operation or an assertion.
   * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action: TestScriptSetupActionComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `action` property value as a TestScriptSetupActionComponent array
   */
  public getAction(): TestScriptSetupActionComponent[] {
    return this.action ?? ([] as TestScriptSetupActionComponent[]);
  }

  /**
   * Assigns the provided TestScriptSetupActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: TestScriptSetupActionComponent[] | undefined | null): this {
    if (isDefinedList<TestScriptSetupActionComponent>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action; Provided value array has an element that is not an instance of TestScriptSetupActionComponent.`;
      assertFhirTypeList<TestScriptSetupActionComponent>(value, TestScriptSetupActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = null;
    }
    return this;
  }

  /**
   * Add the provided TestScriptSetupActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: TestScriptSetupActionComponent | undefined): this {
    if (isDefined<TestScriptSetupActionComponent>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action; Provided element is not an instance of TestScriptSetupActionComponent.`;
      assertFhirType<TestScriptSetupActionComponent>(value, TestScriptSetupActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<TestScriptSetupActionComponent>(this.action) && this.action.some((item: TestScriptSetupActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as TestScriptSetupActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.setup';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.action,
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
  public override copy(): TestScriptSetupComponent {
    const dest = new TestScriptSetupComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptSetupComponent): void {
    super.copyValues(dest);
    const actionList = copyListValues<TestScriptSetupActionComponent>(this.action);
    dest.action = actionList.length === 0 ? null : actionList;
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

    if (this.hasAction()) {
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    } else {
      jsonObj['action'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestScriptSetupActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A setup operation or assert to perform
 * - **Definition:** Action would contain either an operation or an assertion.
 * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptSetupActionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TestScriptSetupActionComponent` JSON to instantiate the TestScriptSetupActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptSetupActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptSetupActionComponent
   * @returns TestScriptSetupActionComponent data model or undefined for `TestScriptSetupActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptSetupActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptSetupActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptSetupActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'operation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestScriptSetupActionOperationComponent | undefined = TestScriptSetupActionOperationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOperation(component);
    }

    fieldName = 'assert';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestScriptSetupActionAssertComponent | undefined = TestScriptSetupActionAssertComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAssert(component);
    }

    return instance;
  }

  /**
   * TestScript.setup.action.operation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The setup operation to perform
   * - **Definition:** The operation to perform.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private operation?: TestScriptSetupActionOperationComponent | undefined;

  /**
   * TestScript.setup.action.assert Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The assertion to perform
   * - **Definition:** Evaluates the results of previous operations to determine if the server under test behaves appropriately.
   * - **Comment:** In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private assert?: TestScriptSetupActionAssertComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `operation` property value as a TestScriptSetupActionOperationComponent object if defined; else an empty TestScriptSetupActionOperationComponent object
   */
  public getOperation(): TestScriptSetupActionOperationComponent {
    return this.operation ?? new TestScriptSetupActionOperationComponent();
  }

  /**
   * Assigns the provided Operation object value to the `operation` property.
   *
   * @param value - the `operation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperation(value: TestScriptSetupActionOperationComponent | undefined): this {
    if (isDefined<TestScriptSetupActionOperationComponent>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation; Provided element is not an instance of TestScriptSetupActionOperationComponent.`;
      assertFhirType<TestScriptSetupActionOperationComponent>(value, TestScriptSetupActionOperationComponent, optErrMsg);
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
    return isDefined<TestScriptSetupActionOperationComponent>(this.operation) && !this.operation.isEmpty();
  }

  /**
   * @returns the `assert` property value as a TestScriptSetupActionAssertComponent object if defined; else an empty TestScriptSetupActionAssertComponent object
   */
  public getAssert(): TestScriptSetupActionAssertComponent {
    return this.assert ?? new TestScriptSetupActionAssertComponent();
  }

  /**
   * Assigns the provided Assert object value to the `assert` property.
   *
   * @param value - the `assert` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAssert(value: TestScriptSetupActionAssertComponent | undefined): this {
    if (isDefined<TestScriptSetupActionAssertComponent>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert; Provided element is not an instance of TestScriptSetupActionAssertComponent.`;
      assertFhirType<TestScriptSetupActionAssertComponent>(value, TestScriptSetupActionAssertComponent, optErrMsg);
      this.assert = value;
    } else {
      this.assert = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assert` property exists and has a value; `false` otherwise
   */
  public hasAssert(): boolean {
    return isDefined<TestScriptSetupActionAssertComponent>(this.assert) && !this.assert.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.setup.action';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.operation,
      this.assert,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptSetupActionComponent {
    const dest = new TestScriptSetupActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptSetupActionComponent): void {
    super.copyValues(dest);
    dest.operation = this.operation?.copy();
    dest.assert = this.assert?.copy();
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

    if (this.hasOperation()) {
      setFhirBackboneElementJson(this.getOperation(), 'operation', jsonObj);
    }

    if (this.hasAssert()) {
      setFhirBackboneElementJson(this.getAssert(), 'assert', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestScriptSetupActionOperationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The setup operation to perform
 * - **Definition:** The operation to perform.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptSetupActionOperationComponent extends BackboneElement implements IBackboneElement {
  constructor(encodeRequestUrl: BooleanType | fhirBoolean | null = null) {
    super();

    this.httpOperationsEnum = new HttpOperationsEnum();

    this.encodeRequestUrl = null;
    if (isDefined<BooleanType | fhirBoolean>(encodeRequestUrl)) {
      if (encodeRequestUrl instanceof PrimitiveType) {
        this.setEncodeRequestUrlElement(encodeRequestUrl);
      } else {
        this.setEncodeRequestUrl(encodeRequestUrl);
      }
    }
  }

  /**
   * Parse the provided `TestScriptSetupActionOperationComponent` JSON to instantiate the TestScriptSetupActionOperationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptSetupActionOperationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptSetupActionOperationComponent
   * @returns TestScriptSetupActionOperationComponent data model or undefined for `TestScriptSetupActionOperationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptSetupActionOperationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptSetupActionOperationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptSetupActionOperationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setResourceElement(datatype);
    }

    fieldName = 'label';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLabelElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'accept';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setAcceptElement(datatype);
    }

    fieldName = 'contentType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setContentTypeElement(datatype);
    }

    fieldName = 'destination';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setDestinationElement(datatype);
    }

    fieldName = 'encodeRequestUrl';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setEncodeRequestUrl(null);
      } else {
        instance.setEncodeRequestUrlElement(datatype);
      }
    } else {
      instance.setEncodeRequestUrl(null);
    }

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setMethodElement(datatype);
    }

    fieldName = 'origin';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setOriginElement(datatype);
    }

    fieldName = 'params';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setParamsElement(datatype);
    }

    fieldName = 'requestHeader';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestScriptSetupActionOperationRequestHeaderComponent | undefined = TestScriptSetupActionOperationRequestHeaderComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRequestHeader(component);
        }
      });
    }

    fieldName = 'requestId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setRequestIdElement(datatype);
    }

    fieldName = 'responseId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setResponseIdElement(datatype);
    }

    fieldName = 'sourceId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setSourceIdElement(datatype);
    }

    fieldName = 'targetId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setTargetIdElement(datatype);
    }

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
    }

    return instance;
  }

  /**
   * TestScript.setup.action.operation.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The operation code type that will be executed
   * - **Definition:** Server interaction or operation type.
   * - **Comment:** See http://build.fhir.org/http.html for list of server interactions.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: Coding | undefined;

  /**
   * TestScript.setup.action.operation.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource type
   * - **Definition:** The type of the resource.  See http://build.fhir.org/resourcelist.html.
   * - **Comment:** If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored. For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present. For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url. For "vread" and "history" operations, the versionId value will also be used.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private resource?: CodeType | undefined;

  /**
   * TestScript.setup.action.operation.label Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Tracking/logging operation label
   * - **Definition:** The label would be used for tracking/logging purposes by test engines.
   * - **Comment:** This has no impact on the verification itself.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private label?: StringType | undefined;

  /**
   * TestScript.setup.action.operation.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Tracking/reporting operation description
   * - **Definition:** The description would be used by test engines for tracking and reporting purposes.
   * - **Comment:** This has no impact on the verification itself.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * TestScript.setup.action.operation.accept Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Mime type to accept in the payload of the response, with charset etc.
   * - **Definition:** The mime-type to use for RESTful operation in the \'Accept\' header.
   * - **Comment:** If this is specified, then test engine shall set the \'Accept\' header to the corresponding value.  If you\'d like to explicitly set the \'Accept\' to some other value then use the \'requestHeader\' element.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private accept?: CodeType | undefined;

  /**
   * TestScript.setup.action.operation.contentType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Mime type of the request payload contents, with charset etc.
   * - **Definition:** The mime-type to use for RESTful operation in the \'Content-Type\' header.
   * - **Comment:** If this is specified, then test engine shall set the \'Content-Type\' header to the corresponding value.  If you\'d like to explicitly set the \'Content-Type\' to some other value then use the \'requestHeader\' element.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contentType?: CodeType | undefined;

  /**
   * TestScript.setup.action.operation.destination Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Server responding to the request
   * - **Definition:** The server where the request message is destined for.  Must be one of the server numbers listed in TestScript.destination section.
   * - **Comment:** If multiple TestScript.destination elements are defined and operation.destination is undefined, test engine will report an error as it cannot determine what destination to use for the exchange.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private destination?: IntegerType | undefined;

  /**
   * TestScript.setup.action.operation.encodeRequestUrl Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether or not to send the request url in encoded format
   * - **Definition:** Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private encodeRequestUrl: BooleanType | null;

  /**
   * FHIR CodeSystem: HttpOperations
   *
   * @see {@link HttpOperationsEnum }
   */
  private readonly httpOperationsEnum: HttpOperationsEnum;

  /**
   * TestScript.setup.action.operation.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** delete | get | options | patch | post | put | head
   * - **Definition:** The HTTP method the test engine MUST use for this operation regardless of any other operation details.
   * - **Comment:** The primary purpose of the explicit HTTP method is support of  HTTP POST method invocation of the FHIR search. Other uses will include support of negative testing.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  private method?: EnumCodeType | undefined;

  /**
   * TestScript.setup.action.operation.origin Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Server initiating the request
   * - **Definition:** The server where the request message originates from.  Must be one of the server numbers listed in TestScript.origin section.
   * - **Comment:** If absent, test engine will send the message.  When present, test engine will not send the request message but will wait for the request message to be sent from this origin server.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private origin?: IntegerType | undefined;

  /**
   * TestScript.setup.action.operation.params Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Explicitly defined path parameters
   * - **Definition:** Path plus parameters after [type].  Used to set parts of the request URL explicitly.
   * - **Comment:** If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.   Test engines would append whatever is specified for "params" to the URL after the resource type without tampering with the string (beyond encoding the URL for HTTP).  The "params" element does not correspond exactly to "search parameters".  Nor is it the "path".  It corresponds to the part of the URL that comes after the [type] (when "resource" element is specified); e.g. It corresponds to "/[id]/_history/[vid] {?_format=[mime-type]}" in the following operation: GET [base]/[type]/[id]/_history/[vid] {?_format=[mime-type]}  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private params?: StringType | undefined;

  /**
   * TestScript.setup.action.operation.requestHeader Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Each operation can have one or more header elements
   * - **Definition:** Header elements would be used to set HTTP headers.
   * - **Comment:** This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requestHeader?: TestScriptSetupActionOperationRequestHeaderComponent[] | undefined;

  /**
   * TestScript.setup.action.operation.requestId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fixture Id of mapped request
   * - **Definition:** The fixture id (maybe new) to map to the request.
   * - **Comment:** If a requestId is supplied, then the resulting request (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "requestId".  If requestId is not specified, it is the test engine\'s responsibility to store the request and use it as the requestId in subsequent assertions when assertion path and/or headerField is specified, direction is equal to request, and the requestId in not specified.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requestId?: IdType | undefined;

  /**
   * TestScript.setup.action.operation.responseId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fixture Id of mapped response
   * - **Definition:** The fixture id (maybe new) to map to the response.
   * - **Comment:** If a responseId is supplied, and the server responds, then the resulting response (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "responseId".  If responseId is not specified, it is the test engine\'s responsibility to store the response and use it as the responseId in subsequent assertions when assertion path and/or headerField is specified and the responseId is not specified.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private responseId?: IdType | undefined;

  /**
   * TestScript.setup.action.operation.sourceId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fixture Id of body for PUT and POST requests
   * - **Definition:** The id of the fixture used as the body of a PUT or POST request.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sourceId?: IdType | undefined;

  /**
   * TestScript.setup.action.operation.targetId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Id of fixture used for extracting the [id],  [type], and [vid] for GET requests
   * - **Definition:** Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.
   * - **Comment:** If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private targetId?: IdType | undefined;

  /**
   * TestScript.setup.action.operation.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request URL
   * - **Definition:** Complete request URL.
   * - **Comment:** Used to set the request URL explicitly.  If "url" element is defined, then "targetId", "resource", and "params" elements will be ignored.  Test engines would use whatever is specified in "url" without tampering with the string (beyond encoding the URL for HTTP).  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private url?: StringType | undefined;

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
      const optErrMsg = `Invalid TestScript.setup.action.operation.type; Provided element is not an instance of Coding.`;
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
   * @returns the `resource` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getResourceElement(): CodeType {
    return this.resource ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `resource` property.
   *
   * @param element - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResourceElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.resource; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.resource = element;
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResourceElement(): boolean {
    return isDefined<CodeType>(this.resource) && !this.resource.isEmpty();
  }

  /**
   * @returns the `resource` property value as a fhirCode if defined; else undefined
   */
  public getResource(): fhirCode | undefined {
    return this.resource?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `resource` property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResource(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.resource (${String(value)})`;
      this.resource = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return this.hasResourceElement();
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
      const optErrMsg = `Invalid TestScript.setup.action.operation.label; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.setup.action.operation.label (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.setup.action.operation.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.setup.action.operation.description (${String(value)})`;
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
   * @returns the `accept` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getAcceptElement(): CodeType {
    return this.accept ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `accept` property.
   *
   * @param element - the `accept` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAcceptElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.accept; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.accept = element;
    } else {
      this.accept = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `accept` property exists and has a value; `false` otherwise
   */
  public hasAcceptElement(): boolean {
    return isDefined<CodeType>(this.accept) && !this.accept.isEmpty();
  }

  /**
   * @returns the `accept` property value as a fhirCode if defined; else undefined
   */
  public getAccept(): fhirCode | undefined {
    return this.accept?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `accept` property.
   *
   * @param value - the `accept` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAccept(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.accept (${String(value)})`;
      this.accept = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.accept = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `accept` property exists and has a value; `false` otherwise
   */
  public hasAccept(): boolean {
    return this.hasAcceptElement();
  }

  /**
   * @returns the `contentType` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getContentTypeElement(): CodeType {
    return this.contentType ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `contentType` property.
   *
   * @param element - the `contentType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContentTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.contentType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.contentType = element;
    } else {
      this.contentType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contentType` property exists and has a value; `false` otherwise
   */
  public hasContentTypeElement(): boolean {
    return isDefined<CodeType>(this.contentType) && !this.contentType.isEmpty();
  }

  /**
   * @returns the `contentType` property value as a fhirCode if defined; else undefined
   */
  public getContentType(): fhirCode | undefined {
    return this.contentType?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `contentType` property.
   *
   * @param value - the `contentType` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContentType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.contentType (${String(value)})`;
      this.contentType = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.contentType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contentType` property exists and has a value; `false` otherwise
   */
  public hasContentType(): boolean {
    return this.hasContentTypeElement();
  }

  /**
   * @returns the `destination` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getDestinationElement(): IntegerType {
    return this.destination ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `destination` property.
   *
   * @param element - the `destination` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDestinationElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.destination; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.destination = element;
    } else {
      this.destination = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `destination` property exists and has a value; `false` otherwise
   */
  public hasDestinationElement(): boolean {
    return isDefined<IntegerType>(this.destination) && !this.destination.isEmpty();
  }

  /**
   * @returns the `destination` property value as a fhirInteger if defined; else undefined
   */
  public getDestination(): fhirInteger | undefined {
    return this.destination?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `destination` property.
   *
   * @param value - the `destination` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDestination(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.destination (${String(value)})`;
      this.destination = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.destination = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `destination` property exists and has a value; `false` otherwise
   */
  public hasDestination(): boolean {
    return this.hasDestinationElement();
  }

  /**
   * @returns the `encodeRequestUrl` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getEncodeRequestUrlElement(): BooleanType {
    return this.encodeRequestUrl ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `encodeRequestUrl` property.
   *
   * @param element - the `encodeRequestUrl` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEncodeRequestUrlElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.encodeRequestUrl; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.encodeRequestUrl = element;
    } else {
      this.encodeRequestUrl = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `encodeRequestUrl` property exists and has a value; `false` otherwise
   */
  public hasEncodeRequestUrlElement(): boolean {
    return isDefined<BooleanType>(this.encodeRequestUrl) && !this.encodeRequestUrl.isEmpty();
  }

  /**
   * @returns the `encodeRequestUrl` property value as a fhirBoolean if defined; else null
   */
  public getEncodeRequestUrl(): fhirBoolean | null {
    if (this.encodeRequestUrl?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.encodeRequestUrl.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `encodeRequestUrl` property.
   *
   * @param value - the `encodeRequestUrl` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setEncodeRequestUrl(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.encodeRequestUrl (${String(value)})`;
      this.encodeRequestUrl = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.encodeRequestUrl = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `encodeRequestUrl` property exists and has a value; `false` otherwise
   */
  public hasEncodeRequestUrl(): boolean {
    return this.hasEncodeRequestUrlElement();
  }

  /**
   * @returns the `method` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public getMethodEnumType(): EnumCodeType | undefined {
    return this.method;
  }

  /**
   * Assigns the provided EnumCodeType value to the `method` property.
   *
   * @param enumType - the `method` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public setMethodEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid TestScript.setup.action.operation.method';
      assertEnumCodeType<HttpOperationsEnum>(enumType, HttpOperationsEnum, errMsgPrefix);
      this.method = enumType;
    } else {
      this.method = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethodEnumType(): boolean {
    return isDefined<EnumCodeType>(this.method) && !this.method.isEmpty() && this.method.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `method` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public getMethodElement(): CodeType | undefined {
    if (this.method === undefined) {
      return undefined;
    }
    return this.method as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `method` property.
   *
   * @param element - the `method` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public setMethodElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.method; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.method = new EnumCodeType(element, this.httpOperationsEnum);
    } else {
      this.method = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethodElement(): boolean {
    return this.hasMethodEnumType();
  }

  /**
   * @returns the `method` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public getMethod(): fhirCode | undefined {
    if (this.method === undefined) {
      return undefined;
    }
    return this.method.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `method` property.
   *
   * @param value - the `method` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public setMethod(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.method; Provided value is not an instance of fhirCode.`;
      this.method = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.httpOperationsEnum);
    } else {
      this.method = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethod(): boolean {
    return this.hasMethodEnumType();
  }

  /**
   * @returns the `origin` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getOriginElement(): IntegerType {
    return this.origin ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `origin` property.
   *
   * @param element - the `origin` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOriginElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.origin; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.origin = element;
    } else {
      this.origin = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `origin` property exists and has a value; `false` otherwise
   */
  public hasOriginElement(): boolean {
    return isDefined<IntegerType>(this.origin) && !this.origin.isEmpty();
  }

  /**
   * @returns the `origin` property value as a fhirInteger if defined; else undefined
   */
  public getOrigin(): fhirInteger | undefined {
    return this.origin?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `origin` property.
   *
   * @param value - the `origin` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOrigin(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.origin (${String(value)})`;
      this.origin = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.origin = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `origin` property exists and has a value; `false` otherwise
   */
  public hasOrigin(): boolean {
    return this.hasOriginElement();
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
      const optErrMsg = `Invalid TestScript.setup.action.operation.params; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.setup.action.operation.params (${String(value)})`;
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
   * @returns the `requestHeader` property value as a TestScriptSetupActionOperationRequestHeaderComponent array
   */
  public getRequestHeader(): TestScriptSetupActionOperationRequestHeaderComponent[] {
    return this.requestHeader ?? ([] as TestScriptSetupActionOperationRequestHeaderComponent[]);
  }

  /**
   * Assigns the provided TestScriptSetupActionOperationRequestHeaderComponent array value to the `requestHeader` property.
   *
   * @param value - the `requestHeader` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRequestHeader(value: TestScriptSetupActionOperationRequestHeaderComponent[] | undefined): this {
    if (isDefinedList<TestScriptSetupActionOperationRequestHeaderComponent>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.requestHeader; Provided value array has an element that is not an instance of TestScriptSetupActionOperationRequestHeaderComponent.`;
      assertFhirTypeList<TestScriptSetupActionOperationRequestHeaderComponent>(value, TestScriptSetupActionOperationRequestHeaderComponent, optErrMsg);
      this.requestHeader = value;
    } else {
      this.requestHeader = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestScriptSetupActionOperationRequestHeaderComponent value to the `requestHeader` array property.
   *
   * @param value - the `requestHeader` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRequestHeader(value: TestScriptSetupActionOperationRequestHeaderComponent | undefined): this {
    if (isDefined<TestScriptSetupActionOperationRequestHeaderComponent>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.requestHeader; Provided element is not an instance of TestScriptSetupActionOperationRequestHeaderComponent.`;
      assertFhirType<TestScriptSetupActionOperationRequestHeaderComponent>(value, TestScriptSetupActionOperationRequestHeaderComponent, optErrMsg);
      this.initRequestHeader();
      this.requestHeader?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `requestHeader` property exists and has a value; `false` otherwise
   */
  public hasRequestHeader(): boolean {
    return isDefinedList<TestScriptSetupActionOperationRequestHeaderComponent>(this.requestHeader) && this.requestHeader.some((item: TestScriptSetupActionOperationRequestHeaderComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `requestHeader` property
   */
  private initRequestHeader(): void {
    if(!this.hasRequestHeader()) {
      this.requestHeader = [] as TestScriptSetupActionOperationRequestHeaderComponent[];
    }
  }

  /**
   * @returns the `requestId` property value as a IdType object if defined; else an empty IdType object
   */
  public getRequestIdElement(): IdType {
    return this.requestId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `requestId` property.
   *
   * @param element - the `requestId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequestIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.requestId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.requestId = element;
    } else {
      this.requestId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestId` property exists and has a value; `false` otherwise
   */
  public hasRequestIdElement(): boolean {
    return isDefined<IdType>(this.requestId) && !this.requestId.isEmpty();
  }

  /**
   * @returns the `requestId` property value as a fhirId if defined; else undefined
   */
  public getRequestId(): fhirId | undefined {
    return this.requestId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `requestId` property.
   *
   * @param value - the `requestId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequestId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.requestId (${String(value)})`;
      this.requestId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.requestId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestId` property exists and has a value; `false` otherwise
   */
  public hasRequestId(): boolean {
    return this.hasRequestIdElement();
  }

  /**
   * @returns the `responseId` property value as a IdType object if defined; else an empty IdType object
   */
  public getResponseIdElement(): IdType {
    return this.responseId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `responseId` property.
   *
   * @param element - the `responseId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResponseIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.responseId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.responseId = element;
    } else {
      this.responseId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `responseId` property exists and has a value; `false` otherwise
   */
  public hasResponseIdElement(): boolean {
    return isDefined<IdType>(this.responseId) && !this.responseId.isEmpty();
  }

  /**
   * @returns the `responseId` property value as a fhirId if defined; else undefined
   */
  public getResponseId(): fhirId | undefined {
    return this.responseId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `responseId` property.
   *
   * @param value - the `responseId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResponseId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.responseId (${String(value)})`;
      this.responseId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.responseId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `responseId` property exists and has a value; `false` otherwise
   */
  public hasResponseId(): boolean {
    return this.hasResponseIdElement();
  }

  /**
   * @returns the `sourceId` property value as a IdType object if defined; else an empty IdType object
   */
  public getSourceIdElement(): IdType {
    return this.sourceId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sourceId` property.
   *
   * @param element - the `sourceId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.sourceId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.sourceId = element;
    } else {
      this.sourceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceId` property exists and has a value; `false` otherwise
   */
  public hasSourceIdElement(): boolean {
    return isDefined<IdType>(this.sourceId) && !this.sourceId.isEmpty();
  }

  /**
   * @returns the `sourceId` property value as a fhirId if defined; else undefined
   */
  public getSourceId(): fhirId | undefined {
    return this.sourceId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sourceId` property.
   *
   * @param value - the `sourceId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.sourceId (${String(value)})`;
      this.sourceId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.sourceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceId` property exists and has a value; `false` otherwise
   */
  public hasSourceId(): boolean {
    return this.hasSourceIdElement();
  }

  /**
   * @returns the `targetId` property value as a IdType object if defined; else an empty IdType object
   */
  public getTargetIdElement(): IdType {
    return this.targetId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `targetId` property.
   *
   * @param element - the `targetId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.targetId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.targetId = element;
    } else {
      this.targetId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `targetId` property exists and has a value; `false` otherwise
   */
  public hasTargetIdElement(): boolean {
    return isDefined<IdType>(this.targetId) && !this.targetId.isEmpty();
  }

  /**
   * @returns the `targetId` property value as a fhirId if defined; else undefined
   */
  public getTargetId(): fhirId | undefined {
    return this.targetId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `targetId` property.
   *
   * @param value - the `targetId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.targetId (${String(value)})`;
      this.targetId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.targetId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `targetId` property exists and has a value; `false` otherwise
   */
  public hasTargetId(): boolean {
    return this.hasTargetIdElement();
  }

  /**
   * @returns the `url` property value as a StringType object if defined; else an empty StringType object
   */
  public getUrlElement(): StringType {
    return this.url ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.url; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
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
    return isDefined<StringType>(this.url) && !this.url.isEmpty();
  }

  /**
   * @returns the `url` property value as a fhirString if defined; else undefined
   */
  public getUrl(): fhirString | undefined {
    return this.url?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `url` property.
   *
   * @param value - the `url` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrl(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.url (${String(value)})`;
      this.url = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
    return 'TestScript.setup.action.operation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.resource,
      this.label,
      this.description,
      this.accept,
      this.contentType,
      this.destination,
      this.encodeRequestUrl,
      this.method,
      this.origin,
      this.params,
      this.requestHeader,
      this.requestId,
      this.responseId,
      this.sourceId,
      this.targetId,
      this.url,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.encodeRequestUrl, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptSetupActionOperationComponent {
    const dest = new TestScriptSetupActionOperationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptSetupActionOperationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.resource = this.resource?.copy();
    dest.label = this.label?.copy();
    dest.description = this.description?.copy();
    dest.accept = this.accept?.copy();
    dest.contentType = this.contentType?.copy();
    dest.destination = this.destination?.copy();
    dest.encodeRequestUrl = this.encodeRequestUrl ? this.encodeRequestUrl.copy() : null;
    dest.method = this.method?.copy();
    dest.origin = this.origin?.copy();
    dest.params = this.params?.copy();
    const requestHeaderList = copyListValues<TestScriptSetupActionOperationRequestHeaderComponent>(this.requestHeader);
    dest.requestHeader = requestHeaderList.length === 0 ? undefined : requestHeaderList;
    dest.requestId = this.requestId?.copy();
    dest.responseId = this.responseId?.copy();
    dest.sourceId = this.sourceId?.copy();
    dest.targetId = this.targetId?.copy();
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

    if (this.hasResourceElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getResourceElement(), 'resource', jsonObj);
    }

    if (this.hasLabelElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLabelElement(), 'label', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasAcceptElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getAcceptElement(), 'accept', jsonObj);
    }

    if (this.hasContentTypeElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getContentTypeElement(), 'contentType', jsonObj);
    }

    if (this.hasDestinationElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getDestinationElement(), 'destination', jsonObj);
    }

    if (this.hasEncodeRequestUrlElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getEncodeRequestUrlElement(), 'encodeRequestUrl', jsonObj);
    } else {
      jsonObj['encodeRequestUrl'] = null;
    }

    if (this.hasMethodElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getMethodElement()!, 'method', jsonObj);
    }

    if (this.hasOriginElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getOriginElement(), 'origin', jsonObj);
    }

    if (this.hasParamsElement()) {
      setFhirPrimitiveJson<fhirString>(this.getParamsElement(), 'params', jsonObj);
    }

    if (this.hasRequestHeader()) {
      setFhirBackboneElementListJson(this.getRequestHeader(), 'requestHeader', jsonObj);
    }

    if (this.hasRequestIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getRequestIdElement(), 'requestId', jsonObj);
    }

    if (this.hasResponseIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getResponseIdElement(), 'responseId', jsonObj);
    }

    if (this.hasSourceIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getSourceIdElement(), 'sourceId', jsonObj);
    }

    if (this.hasTargetIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getTargetIdElement(), 'targetId', jsonObj);
    }

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirString>(this.getUrlElement(), 'url', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestScriptSetupActionOperationRequestHeaderComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Each operation can have one or more header elements
 * - **Definition:** Header elements would be used to set HTTP headers.
 * - **Comment:** This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptSetupActionOperationRequestHeaderComponent extends BackboneElement implements IBackboneElement {
  constructor(field: StringType | fhirString | null = null, value: StringType | fhirString | null = null) {
    super();

    this.field = null;
    if (isDefined<StringType | fhirString>(field)) {
      if (field instanceof PrimitiveType) {
        this.setFieldElement(field);
      } else {
        this.setField(field);
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
   * Parse the provided `TestScriptSetupActionOperationRequestHeaderComponent` JSON to instantiate the TestScriptSetupActionOperationRequestHeaderComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptSetupActionOperationRequestHeaderComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptSetupActionOperationRequestHeaderComponent
   * @returns TestScriptSetupActionOperationRequestHeaderComponent data model or undefined for `TestScriptSetupActionOperationRequestHeaderComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptSetupActionOperationRequestHeaderComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptSetupActionOperationRequestHeaderComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptSetupActionOperationRequestHeaderComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'field';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setField(null);
      } else {
        instance.setFieldElement(datatype);
      }
    } else {
      instance.setField(null);
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

    return instance;
  }

  /**
   * TestScript.setup.action.operation.requestHeader.field Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** HTTP header field name
   * - **Definition:** The HTTP header field e.g. "Accept".
   * - **Comment:** If header element is specified, then field is required.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private field: StringType | null;

  /**
   * TestScript.setup.action.operation.requestHeader.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** HTTP headerfield value
   * - **Definition:** The value of the header e.g. "application/fhir+xml".
   * - **Comment:** If header element is specified, then value is required.  No conversions will be done by the test engine e.g. "xml" to "application/fhir+xml".  The values will be set in HTTP headers "as-is".  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `field` property value as a StringType object if defined; else an empty StringType object
   */
  public getFieldElement(): StringType {
    return this.field ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `field` property.
   *
   * @param element - the `field` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFieldElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.requestHeader.field; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.field = element;
    } else {
      this.field = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `field` property exists and has a value; `false` otherwise
   */
  public hasFieldElement(): boolean {
    return isDefined<StringType>(this.field) && !this.field.isEmpty();
  }

  /**
   * @returns the `field` property value as a fhirString if defined; else null
   */
  public getField(): fhirString | null {
    if (this.field?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.field.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `field` property.
   *
   * @param value - the `field` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setField(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.operation.requestHeader.field (${String(value)})`;
      this.field = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.field = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `field` property exists and has a value; `false` otherwise
   */
  public hasField(): boolean {
    return this.hasFieldElement();
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
      const optErrMsg = `Invalid TestScript.setup.action.operation.requestHeader.value; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.setup.action.operation.requestHeader.value (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.setup.action.operation.requestHeader';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.field,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.field, this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptSetupActionOperationRequestHeaderComponent {
    const dest = new TestScriptSetupActionOperationRequestHeaderComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptSetupActionOperationRequestHeaderComponent): void {
    super.copyValues(dest);
    dest.field = this.field ? this.field.copy() : null;
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

    if (this.hasFieldElement()) {
      setFhirPrimitiveJson<fhirString>(this.getFieldElement(), 'field', jsonObj);
    } else {
      jsonObj['field'] = null;
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestScriptSetupActionAssertComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The assertion to perform
 * - **Definition:** Evaluates the results of previous operations to determine if the server under test behaves appropriately.
 * - **Comment:** In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptSetupActionAssertComponent extends BackboneElement implements IBackboneElement {
  constructor(warningOnly: BooleanType | fhirBoolean | null = null) {
    super();

    this.assertDirectionCodesEnum = new AssertDirectionCodesEnum();
    this.assertOperatorCodesEnum = new AssertOperatorCodesEnum();
    this.httpOperationsEnum = new HttpOperationsEnum();
    this.assertResponseCodeTypesEnum = new AssertResponseCodeTypesEnum();

    this.warningOnly = null;
    if (isDefined<BooleanType | fhirBoolean>(warningOnly)) {
      if (warningOnly instanceof PrimitiveType) {
        this.setWarningOnlyElement(warningOnly);
      } else {
        this.setWarningOnly(warningOnly);
      }
    }
  }

  /**
   * Parse the provided `TestScriptSetupActionAssertComponent` JSON to instantiate the TestScriptSetupActionAssertComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptSetupActionAssertComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptSetupActionAssertComponent
   * @returns TestScriptSetupActionAssertComponent data model or undefined for `TestScriptSetupActionAssertComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptSetupActionAssertComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptSetupActionAssertComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptSetupActionAssertComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'label';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLabelElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'direction';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setDirectionElement(datatype);
    }

    fieldName = 'compareToSourceId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCompareToSourceIdElement(datatype);
    }

    fieldName = 'compareToSourceExpression';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCompareToSourceExpressionElement(datatype);
    }

    fieldName = 'compareToSourcePath';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCompareToSourcePathElement(datatype);
    }

    fieldName = 'contentType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setContentTypeElement(datatype);
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setExpressionElement(datatype);
    }

    fieldName = 'headerField';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setHeaderFieldElement(datatype);
    }

    fieldName = 'minimumId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMinimumIdElement(datatype);
    }

    fieldName = 'navigationLinks';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setNavigationLinksElement(datatype);
    }

    fieldName = 'operator';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setOperatorElement(datatype);
    }

    fieldName = 'path';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPathElement(datatype);
    }

    fieldName = 'requestMethod';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setRequestMethodElement(datatype);
    }

    fieldName = 'requestURL';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setRequestURLElement(datatype);
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setResourceElement(datatype);
    }

    fieldName = 'response';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setResponseElement(datatype);
    }

    fieldName = 'responseCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setResponseCodeElement(datatype);
    }

    fieldName = 'sourceId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setSourceIdElement(datatype);
    }

    fieldName = 'validateProfileId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setValidateProfileIdElement(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setValueElement(datatype);
    }

    fieldName = 'warningOnly';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setWarningOnly(null);
      } else {
        instance.setWarningOnlyElement(datatype);
      }
    } else {
      instance.setWarningOnly(null);
    }

    return instance;
  }

  /**
   * TestScript.setup.action.assert.label Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Tracking/logging assertion label
   * - **Definition:** The label would be used for tracking/logging purposes by test engines.
   * - **Comment:** This has no impact on the verification itself.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private label?: StringType | undefined;

  /**
   * TestScript.setup.action.assert.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Tracking/reporting assertion description
   * - **Definition:** The description would be used by test engines for tracking and reporting purposes.
   * - **Comment:** This has no impact on the verification itself.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * FHIR CodeSystem: AssertDirectionCodes
   *
   * @see {@link AssertDirectionCodesEnum }
   */
  private readonly assertDirectionCodesEnum: AssertDirectionCodesEnum;

  /**
   * TestScript.setup.action.assert.direction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** response | request
   * - **Definition:** The direction to use for the assertion.
   * - **Comment:** If the direction is specified as "response" (the default), then the processing of this assert is against the received response message. If the direction is specified as "request", then the processing of this assert is against the sent request message.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link AssertDirectionCodesEnum }
   */
  private direction?: EnumCodeType | undefined;

  /**
   * TestScript.setup.action.assert.compareToSourceId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Id of the source fixture to be evaluated
   * - **Definition:** Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private compareToSourceId?: StringType | undefined;

  /**
   * TestScript.setup.action.assert.compareToSourceExpression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The FHIRPath expression to evaluate against the source fixture
   * - **Definition:** The FHIRPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
   * - **Comment:** Thefhirpath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private compareToSourceExpression?: StringType | undefined;

  /**
   * TestScript.setup.action.assert.compareToSourcePath Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** XPath or JSONPath expression to evaluate against the source fixture
   * - **Definition:** XPath or JSONPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both.
   * - **Comment:** The XPath or JSONPath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private compareToSourcePath?: StringType | undefined;

  /**
   * TestScript.setup.action.assert.contentType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Mime type to compare against the \'Content-Type\' header
   * - **Definition:** The mime-type contents to compare against the request or response message \'Content-Type\' header.
   * - **Comment:** If this is specified, then test engine shall confirm that the content-type of the last operation\'s headers is set to this value.  If "assert.sourceId" element is specified, then the evaluation will be done against the headers mapped to that sourceId (and not the last operation\'s headers).  If you\'d like to have more control over the string, then use \'assert.headerField\' instead.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private contentType?: CodeType | undefined;

  /**
   * TestScript.setup.action.assert.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The FHIRPath expression to be evaluated
   * - **Definition:** The FHIRPath expression to be evaluated against the request or response message contents - HTTP headers and payload.
   * - **Comment:** If both "expression" and a "fixtureId" are specified, then the expression will be evaluated against the request or response body mapped to the fixtureId.  If "expression" is specified and a "fixtureId" is not, then the expression will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression?: StringType | undefined;

  /**
   * TestScript.setup.action.assert.headerField Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** HTTP header field name
   * - **Definition:** The HTTP header field name e.g. \'Location\'.
   * - **Comment:** If "headerField" is specified then "value" must be specified.  If "sourceId" is not specified, then "headerField" will be evaluated against the last operation\'s response headers.  Test engines are to keep track of the last operation\'s response body and response headers.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private headerField?: StringType | undefined;

  /**
   * TestScript.setup.action.assert.minimumId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fixture Id of minimum content resource
   * - **Definition:** The ID of a fixture.  Asserts that the response contains at a minimum the fixture specified by minimumId.
   * - **Comment:** Asserts that the response contains all the element/content in another fixture pointed to by minimumId.  This can be a statically defined fixture or one that is dynamically set via responseId.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private minimumId?: StringType | undefined;

  /**
   * TestScript.setup.action.assert.navigationLinks Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Perform validation on navigation links?
   * - **Definition:** Whether or not the test execution performs validation on the bundle navigation links.
   * - **Comment:** Asserts that the Bundle contains first, last, and next links.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private navigationLinks?: BooleanType | undefined;

  /**
   * FHIR CodeSystem: AssertOperatorCodes
   *
   * @see {@link AssertOperatorCodesEnum }
   */
  private readonly assertOperatorCodesEnum: AssertOperatorCodesEnum;

  /**
   * TestScript.setup.action.assert.operator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval
   * - **Definition:** The operator type defines the conditional behavior of the assert. If not defined, the default is equals.
   * - **Comment:** Operators are useful especially for negative testing.  If operator is not specified, then the "equals" operator is assumed; e.g. ```<code>   <assert>  <operator value="in" />  <responseCode value="200,201,204" />    </assert>    <assert>  <operator value="notEquals" />  <response value="okay"/>   </assert>    <assert>  <operator value="greaterThan" />    <responseHeader>     <field value="Content-Length" />     <value value="0" />    </responseHeader/>   </assert> </code> ```.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link AssertOperatorCodesEnum }
   */
  private operator?: EnumCodeType | undefined;

  /**
   * TestScript.setup.action.assert.path Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** XPath or JSONPath expression
   * - **Definition:** The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server.
   * - **Comment:** If both "path" and a "fixtureId" are specified, then the path will be evaluated against the request or response body mapped to the fixtureId.  If "path" is specified and a "fixtureId" is not, then the path will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private path?: StringType | undefined;

  /**
   * FHIR CodeSystem: HttpOperations
   *
   * @see {@link HttpOperationsEnum }
   */
  private readonly httpOperationsEnum: HttpOperationsEnum;

  /**
   * TestScript.setup.action.assert.requestMethod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** delete | get | options | patch | post | put | head
   * - **Definition:** The request method or HTTP operation code to compare against that used by the client system under test.
   * - **Comment:** If "requestMethod" is specified then it will be used in place of "value". The "requestMethod" will evaluate against the last operation\'s request HTTP operation.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  private requestMethod?: EnumCodeType | undefined;

  /**
   * TestScript.setup.action.assert.requestURL Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request URL comparison value
   * - **Definition:** The value to use in a comparison against the request URL path string.
   * - **Comment:** If "requestURL" is specified then it will be used in place of "value". The "requestURL" will evaluate against the last operation\'s full request URL path string.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requestURL?: StringType | undefined;

  /**
   * TestScript.setup.action.assert.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource type
   * - **Definition:** The type of the resource.  See http://build.fhir.org/resourcelist.html.
   * - **Comment:** This will be expected resource type in response body e.g. in read, vread, search, etc.  See http://build.fhir.org/resourcelist.html for complete list of resource types; e.g. <assert > <resourceType value="Patient" </assert>.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private resource?: CodeType | undefined;

  /**
   * FHIR CodeSystem: AssertResponseCodeTypes
   *
   * @see {@link AssertResponseCodeTypesEnum }
   */
  private readonly assertResponseCodeTypesEnum: AssertResponseCodeTypesEnum;

  /**
   * TestScript.setup.action.assert.response Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable
   * - **Definition:** okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
   * - **Comment:** This is a shorter way of achieving similar verifications via "assert.responseCode".  If you need more control, then use "assert.responseCode"  e.g. <assert>  <contentType value="json" />  <response value="okay"/> </assert>.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link AssertResponseCodeTypesEnum }
   */
  private response?: EnumCodeType | undefined;

  /**
   * TestScript.setup.action.assert.responseCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** HTTP response code to test
   * - **Definition:** The value of the HTTP response code to be tested.
   * - **Comment:** To be used with "operator" attribute value. Asserts that the response code equals this value if "operator" is not specified.   If the operator is "in" or "notIn" then the responseCode would be a comma-separated list of values e.g. "200,201". Otherwise, it\'s expected to be a numeric value.   If "fixture" is not specified, then the "responseBodyId" value of the last operation is assumed.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private responseCode?: StringType | undefined;

  /**
   * TestScript.setup.action.assert.sourceId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Fixture Id of source expression or headerField
   * - **Definition:** Fixture to evaluate the XPath/JSONPath expression or the headerField  against.
   * - **Comment:** This can be a statically defined fixture (at the top of the testscript) or a dynamically set fixture created by responseId of the action.operation element.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sourceId?: IdType | undefined;

  /**
   * TestScript.setup.action.assert.validateProfileId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Profile Id of validation profile reference
   * - **Definition:** The ID of the Profile to validate against.
   * - **Comment:** The ID of a Profile fixture. Asserts that the response is valid according to the Profile specified by validateProfileId.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private validateProfileId?: IdType | undefined;

  /**
   * TestScript.setup.action.assert.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The value to compare to
   * - **Definition:** The value to compare to.
   * - **Comment:** The string-representation of a number, string, or boolean that is expected.  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before comparing this value to the actual value.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value?: StringType | undefined;

  /**
   * TestScript.setup.action.assert.warningOnly Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Will this assert produce a warning only on error?
   * - **Definition:** Whether or not the test execution will produce a warning only on error for this assert.
   * - **Comment:** If this element is specified and it is true, then assertion failures can be logged by test engine but should not stop the test script execution from proceeding.  There are likely cases where the spec is not clear on what should happen. If the spec says something is optional (maybe a response header for example), but a server doesn\'t do it, we could choose to issue a warning.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private warningOnly: BooleanType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid TestScript.setup.action.assert.label; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.setup.action.assert.label (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.setup.action.assert.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.setup.action.assert.description (${String(value)})`;
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
   * @returns the `direction` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AssertDirectionCodesEnum }
   */
  public getDirectionEnumType(): EnumCodeType | undefined {
    return this.direction;
  }

  /**
   * Assigns the provided EnumCodeType value to the `direction` property.
   *
   * @param enumType - the `direction` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AssertDirectionCodesEnum }
   */
  public setDirectionEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid TestScript.setup.action.assert.direction';
      assertEnumCodeType<AssertDirectionCodesEnum>(enumType, AssertDirectionCodesEnum, errMsgPrefix);
      this.direction = enumType;
    } else {
      this.direction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `direction` property exists and has a value; `false` otherwise
   */
  public hasDirectionEnumType(): boolean {
    return isDefined<EnumCodeType>(this.direction) && !this.direction.isEmpty() && this.direction.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `direction` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AssertDirectionCodesEnum }
   */
  public getDirectionElement(): CodeType | undefined {
    if (this.direction === undefined) {
      return undefined;
    }
    return this.direction as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `direction` property.
   *
   * @param element - the `direction` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AssertDirectionCodesEnum }
   */
  public setDirectionElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.direction; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.direction = new EnumCodeType(element, this.assertDirectionCodesEnum);
    } else {
      this.direction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `direction` property exists and has a value; `false` otherwise
   */
  public hasDirectionElement(): boolean {
    return this.hasDirectionEnumType();
  }

  /**
   * @returns the `direction` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AssertDirectionCodesEnum }
   */
  public getDirection(): fhirCode | undefined {
    if (this.direction === undefined) {
      return undefined;
    }
    return this.direction.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `direction` property.
   *
   * @param value - the `direction` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link AssertDirectionCodesEnum }
   */
  public setDirection(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.direction; Provided value is not an instance of fhirCode.`;
      this.direction = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.assertDirectionCodesEnum);
    } else {
      this.direction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `direction` property exists and has a value; `false` otherwise
   */
  public hasDirection(): boolean {
    return this.hasDirectionEnumType();
  }

  /**
   * @returns the `compareToSourceId` property value as a StringType object if defined; else an empty StringType object
   */
  public getCompareToSourceIdElement(): StringType {
    return this.compareToSourceId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `compareToSourceId` property.
   *
   * @param element - the `compareToSourceId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompareToSourceIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.compareToSourceId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.compareToSourceId = element;
    } else {
      this.compareToSourceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `compareToSourceId` property exists and has a value; `false` otherwise
   */
  public hasCompareToSourceIdElement(): boolean {
    return isDefined<StringType>(this.compareToSourceId) && !this.compareToSourceId.isEmpty();
  }

  /**
   * @returns the `compareToSourceId` property value as a fhirString if defined; else undefined
   */
  public getCompareToSourceId(): fhirString | undefined {
    return this.compareToSourceId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `compareToSourceId` property.
   *
   * @param value - the `compareToSourceId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompareToSourceId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.compareToSourceId (${String(value)})`;
      this.compareToSourceId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.compareToSourceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `compareToSourceId` property exists and has a value; `false` otherwise
   */
  public hasCompareToSourceId(): boolean {
    return this.hasCompareToSourceIdElement();
  }

  /**
   * @returns the `compareToSourceExpression` property value as a StringType object if defined; else an empty StringType object
   */
  public getCompareToSourceExpressionElement(): StringType {
    return this.compareToSourceExpression ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `compareToSourceExpression` property.
   *
   * @param element - the `compareToSourceExpression` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompareToSourceExpressionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.compareToSourceExpression; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.compareToSourceExpression = element;
    } else {
      this.compareToSourceExpression = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `compareToSourceExpression` property exists and has a value; `false` otherwise
   */
  public hasCompareToSourceExpressionElement(): boolean {
    return isDefined<StringType>(this.compareToSourceExpression) && !this.compareToSourceExpression.isEmpty();
  }

  /**
   * @returns the `compareToSourceExpression` property value as a fhirString if defined; else undefined
   */
  public getCompareToSourceExpression(): fhirString | undefined {
    return this.compareToSourceExpression?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `compareToSourceExpression` property.
   *
   * @param value - the `compareToSourceExpression` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompareToSourceExpression(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.compareToSourceExpression (${String(value)})`;
      this.compareToSourceExpression = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.compareToSourceExpression = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `compareToSourceExpression` property exists and has a value; `false` otherwise
   */
  public hasCompareToSourceExpression(): boolean {
    return this.hasCompareToSourceExpressionElement();
  }

  /**
   * @returns the `compareToSourcePath` property value as a StringType object if defined; else an empty StringType object
   */
  public getCompareToSourcePathElement(): StringType {
    return this.compareToSourcePath ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `compareToSourcePath` property.
   *
   * @param element - the `compareToSourcePath` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompareToSourcePathElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.compareToSourcePath; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.compareToSourcePath = element;
    } else {
      this.compareToSourcePath = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `compareToSourcePath` property exists and has a value; `false` otherwise
   */
  public hasCompareToSourcePathElement(): boolean {
    return isDefined<StringType>(this.compareToSourcePath) && !this.compareToSourcePath.isEmpty();
  }

  /**
   * @returns the `compareToSourcePath` property value as a fhirString if defined; else undefined
   */
  public getCompareToSourcePath(): fhirString | undefined {
    return this.compareToSourcePath?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `compareToSourcePath` property.
   *
   * @param value - the `compareToSourcePath` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompareToSourcePath(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.compareToSourcePath (${String(value)})`;
      this.compareToSourcePath = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.compareToSourcePath = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `compareToSourcePath` property exists and has a value; `false` otherwise
   */
  public hasCompareToSourcePath(): boolean {
    return this.hasCompareToSourcePathElement();
  }

  /**
   * @returns the `contentType` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getContentTypeElement(): CodeType {
    return this.contentType ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `contentType` property.
   *
   * @param element - the `contentType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContentTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.contentType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.contentType = element;
    } else {
      this.contentType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contentType` property exists and has a value; `false` otherwise
   */
  public hasContentTypeElement(): boolean {
    return isDefined<CodeType>(this.contentType) && !this.contentType.isEmpty();
  }

  /**
   * @returns the `contentType` property value as a fhirCode if defined; else undefined
   */
  public getContentType(): fhirCode | undefined {
    return this.contentType?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `contentType` property.
   *
   * @param value - the `contentType` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContentType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.contentType (${String(value)})`;
      this.contentType = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.contentType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `contentType` property exists and has a value; `false` otherwise
   */
  public hasContentType(): boolean {
    return this.hasContentTypeElement();
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
      const optErrMsg = `Invalid TestScript.setup.action.assert.expression; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.setup.action.assert.expression (${String(value)})`;
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
   * @returns the `headerField` property value as a StringType object if defined; else an empty StringType object
   */
  public getHeaderFieldElement(): StringType {
    return this.headerField ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `headerField` property.
   *
   * @param element - the `headerField` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHeaderFieldElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.headerField; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.headerField = element;
    } else {
      this.headerField = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `headerField` property exists and has a value; `false` otherwise
   */
  public hasHeaderFieldElement(): boolean {
    return isDefined<StringType>(this.headerField) && !this.headerField.isEmpty();
  }

  /**
   * @returns the `headerField` property value as a fhirString if defined; else undefined
   */
  public getHeaderField(): fhirString | undefined {
    return this.headerField?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `headerField` property.
   *
   * @param value - the `headerField` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHeaderField(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.headerField (${String(value)})`;
      this.headerField = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.headerField = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `headerField` property exists and has a value; `false` otherwise
   */
  public hasHeaderField(): boolean {
    return this.hasHeaderFieldElement();
  }

  /**
   * @returns the `minimumId` property value as a StringType object if defined; else an empty StringType object
   */
  public getMinimumIdElement(): StringType {
    return this.minimumId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `minimumId` property.
   *
   * @param element - the `minimumId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMinimumIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.minimumId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.minimumId = element;
    } else {
      this.minimumId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `minimumId` property exists and has a value; `false` otherwise
   */
  public hasMinimumIdElement(): boolean {
    return isDefined<StringType>(this.minimumId) && !this.minimumId.isEmpty();
  }

  /**
   * @returns the `minimumId` property value as a fhirString if defined; else undefined
   */
  public getMinimumId(): fhirString | undefined {
    return this.minimumId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `minimumId` property.
   *
   * @param value - the `minimumId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMinimumId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.minimumId (${String(value)})`;
      this.minimumId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.minimumId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `minimumId` property exists and has a value; `false` otherwise
   */
  public hasMinimumId(): boolean {
    return this.hasMinimumIdElement();
  }

  /**
   * @returns the `navigationLinks` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getNavigationLinksElement(): BooleanType {
    return this.navigationLinks ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `navigationLinks` property.
   *
   * @param element - the `navigationLinks` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNavigationLinksElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.navigationLinks; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.navigationLinks = element;
    } else {
      this.navigationLinks = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `navigationLinks` property exists and has a value; `false` otherwise
   */
  public hasNavigationLinksElement(): boolean {
    return isDefined<BooleanType>(this.navigationLinks) && !this.navigationLinks.isEmpty();
  }

  /**
   * @returns the `navigationLinks` property value as a fhirBoolean if defined; else undefined
   */
  public getNavigationLinks(): fhirBoolean | undefined {
    return this.navigationLinks?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `navigationLinks` property.
   *
   * @param value - the `navigationLinks` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNavigationLinks(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.navigationLinks (${String(value)})`;
      this.navigationLinks = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.navigationLinks = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `navigationLinks` property exists and has a value; `false` otherwise
   */
  public hasNavigationLinks(): boolean {
    return this.hasNavigationLinksElement();
  }

  /**
   * @returns the `operator` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AssertOperatorCodesEnum }
   */
  public getOperatorEnumType(): EnumCodeType | undefined {
    return this.operator;
  }

  /**
   * Assigns the provided EnumCodeType value to the `operator` property.
   *
   * @param enumType - the `operator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AssertOperatorCodesEnum }
   */
  public setOperatorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid TestScript.setup.action.assert.operator';
      assertEnumCodeType<AssertOperatorCodesEnum>(enumType, AssertOperatorCodesEnum, errMsgPrefix);
      this.operator = enumType;
    } else {
      this.operator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operator` property exists and has a value; `false` otherwise
   */
  public hasOperatorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.operator) && !this.operator.isEmpty() && this.operator.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `operator` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AssertOperatorCodesEnum }
   */
  public getOperatorElement(): CodeType | undefined {
    if (this.operator === undefined) {
      return undefined;
    }
    return this.operator as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `operator` property.
   *
   * @param element - the `operator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AssertOperatorCodesEnum }
   */
  public setOperatorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.operator; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.operator = new EnumCodeType(element, this.assertOperatorCodesEnum);
    } else {
      this.operator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operator` property exists and has a value; `false` otherwise
   */
  public hasOperatorElement(): boolean {
    return this.hasOperatorEnumType();
  }

  /**
   * @returns the `operator` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AssertOperatorCodesEnum }
   */
  public getOperator(): fhirCode | undefined {
    if (this.operator === undefined) {
      return undefined;
    }
    return this.operator.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `operator` property.
   *
   * @param value - the `operator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link AssertOperatorCodesEnum }
   */
  public setOperator(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.operator; Provided value is not an instance of fhirCode.`;
      this.operator = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.assertOperatorCodesEnum);
    } else {
      this.operator = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operator` property exists and has a value; `false` otherwise
   */
  public hasOperator(): boolean {
    return this.hasOperatorEnumType();
  }

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
      const optErrMsg = `Invalid TestScript.setup.action.assert.path; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.setup.action.assert.path (${String(value)})`;
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
   * @returns the `requestMethod` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public getRequestMethodEnumType(): EnumCodeType | undefined {
    return this.requestMethod;
  }

  /**
   * Assigns the provided EnumCodeType value to the `requestMethod` property.
   *
   * @param enumType - the `requestMethod` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public setRequestMethodEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid TestScript.setup.action.assert.requestMethod';
      assertEnumCodeType<HttpOperationsEnum>(enumType, HttpOperationsEnum, errMsgPrefix);
      this.requestMethod = enumType;
    } else {
      this.requestMethod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestMethod` property exists and has a value; `false` otherwise
   */
  public hasRequestMethodEnumType(): boolean {
    return isDefined<EnumCodeType>(this.requestMethod) && !this.requestMethod.isEmpty() && this.requestMethod.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `requestMethod` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public getRequestMethodElement(): CodeType | undefined {
    if (this.requestMethod === undefined) {
      return undefined;
    }
    return this.requestMethod as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `requestMethod` property.
   *
   * @param element - the `requestMethod` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public setRequestMethodElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.requestMethod; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.requestMethod = new EnumCodeType(element, this.httpOperationsEnum);
    } else {
      this.requestMethod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestMethod` property exists and has a value; `false` otherwise
   */
  public hasRequestMethodElement(): boolean {
    return this.hasRequestMethodEnumType();
  }

  /**
   * @returns the `requestMethod` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public getRequestMethod(): fhirCode | undefined {
    if (this.requestMethod === undefined) {
      return undefined;
    }
    return this.requestMethod.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `requestMethod` property.
   *
   * @param value - the `requestMethod` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link HttpOperationsEnum }
   */
  public setRequestMethod(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.requestMethod; Provided value is not an instance of fhirCode.`;
      this.requestMethod = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.httpOperationsEnum);
    } else {
      this.requestMethod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestMethod` property exists and has a value; `false` otherwise
   */
  public hasRequestMethod(): boolean {
    return this.hasRequestMethodEnumType();
  }

  /**
   * @returns the `requestURL` property value as a StringType object if defined; else an empty StringType object
   */
  public getRequestURLElement(): StringType {
    return this.requestURL ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `requestURL` property.
   *
   * @param element - the `requestURL` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequestURLElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.requestURL; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.requestURL = element;
    } else {
      this.requestURL = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestURL` property exists and has a value; `false` otherwise
   */
  public hasRequestURLElement(): boolean {
    return isDefined<StringType>(this.requestURL) && !this.requestURL.isEmpty();
  }

  /**
   * @returns the `requestURL` property value as a fhirString if defined; else undefined
   */
  public getRequestURL(): fhirString | undefined {
    return this.requestURL?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `requestURL` property.
   *
   * @param value - the `requestURL` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequestURL(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.requestURL (${String(value)})`;
      this.requestURL = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.requestURL = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestURL` property exists and has a value; `false` otherwise
   */
  public hasRequestURL(): boolean {
    return this.hasRequestURLElement();
  }

  /**
   * @returns the `resource` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getResourceElement(): CodeType {
    return this.resource ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `resource` property.
   *
   * @param element - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResourceElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.resource; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.resource = element;
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResourceElement(): boolean {
    return isDefined<CodeType>(this.resource) && !this.resource.isEmpty();
  }

  /**
   * @returns the `resource` property value as a fhirCode if defined; else undefined
   */
  public getResource(): fhirCode | undefined {
    return this.resource?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `resource` property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResource(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.resource (${String(value)})`;
      this.resource = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return this.hasResourceElement();
  }

  /**
   * @returns the `response` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AssertResponseCodeTypesEnum }
   */
  public getResponseEnumType(): EnumCodeType | undefined {
    return this.response;
  }

  /**
   * Assigns the provided EnumCodeType value to the `response` property.
   *
   * @param enumType - the `response` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AssertResponseCodeTypesEnum }
   */
  public setResponseEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid TestScript.setup.action.assert.response';
      assertEnumCodeType<AssertResponseCodeTypesEnum>(enumType, AssertResponseCodeTypesEnum, errMsgPrefix);
      this.response = enumType;
    } else {
      this.response = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `response` property exists and has a value; `false` otherwise
   */
  public hasResponseEnumType(): boolean {
    return isDefined<EnumCodeType>(this.response) && !this.response.isEmpty() && this.response.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `response` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AssertResponseCodeTypesEnum }
   */
  public getResponseElement(): CodeType | undefined {
    if (this.response === undefined) {
      return undefined;
    }
    return this.response as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `response` property.
   *
   * @param element - the `response` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AssertResponseCodeTypesEnum }
   */
  public setResponseElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.response; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.response = new EnumCodeType(element, this.assertResponseCodeTypesEnum);
    } else {
      this.response = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `response` property exists and has a value; `false` otherwise
   */
  public hasResponseElement(): boolean {
    return this.hasResponseEnumType();
  }

  /**
   * @returns the `response` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AssertResponseCodeTypesEnum }
   */
  public getResponse(): fhirCode | undefined {
    if (this.response === undefined) {
      return undefined;
    }
    return this.response.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `response` property.
   *
   * @param value - the `response` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link AssertResponseCodeTypesEnum }
   */
  public setResponse(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.response; Provided value is not an instance of fhirCode.`;
      this.response = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.assertResponseCodeTypesEnum);
    } else {
      this.response = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `response` property exists and has a value; `false` otherwise
   */
  public hasResponse(): boolean {
    return this.hasResponseEnumType();
  }

  /**
   * @returns the `responseCode` property value as a StringType object if defined; else an empty StringType object
   */
  public getResponseCodeElement(): StringType {
    return this.responseCode ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `responseCode` property.
   *
   * @param element - the `responseCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResponseCodeElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.responseCode; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.responseCode = element;
    } else {
      this.responseCode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `responseCode` property exists and has a value; `false` otherwise
   */
  public hasResponseCodeElement(): boolean {
    return isDefined<StringType>(this.responseCode) && !this.responseCode.isEmpty();
  }

  /**
   * @returns the `responseCode` property value as a fhirString if defined; else undefined
   */
  public getResponseCode(): fhirString | undefined {
    return this.responseCode?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `responseCode` property.
   *
   * @param value - the `responseCode` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResponseCode(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.responseCode (${String(value)})`;
      this.responseCode = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.responseCode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `responseCode` property exists and has a value; `false` otherwise
   */
  public hasResponseCode(): boolean {
    return this.hasResponseCodeElement();
  }

  /**
   * @returns the `sourceId` property value as a IdType object if defined; else an empty IdType object
   */
  public getSourceIdElement(): IdType {
    return this.sourceId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sourceId` property.
   *
   * @param element - the `sourceId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.sourceId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.sourceId = element;
    } else {
      this.sourceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceId` property exists and has a value; `false` otherwise
   */
  public hasSourceIdElement(): boolean {
    return isDefined<IdType>(this.sourceId) && !this.sourceId.isEmpty();
  }

  /**
   * @returns the `sourceId` property value as a fhirId if defined; else undefined
   */
  public getSourceId(): fhirId | undefined {
    return this.sourceId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sourceId` property.
   *
   * @param value - the `sourceId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.sourceId (${String(value)})`;
      this.sourceId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.sourceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceId` property exists and has a value; `false` otherwise
   */
  public hasSourceId(): boolean {
    return this.hasSourceIdElement();
  }

  /**
   * @returns the `validateProfileId` property value as a IdType object if defined; else an empty IdType object
   */
  public getValidateProfileIdElement(): IdType {
    return this.validateProfileId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `validateProfileId` property.
   *
   * @param element - the `validateProfileId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValidateProfileIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.validateProfileId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.validateProfileId = element;
    } else {
      this.validateProfileId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validateProfileId` property exists and has a value; `false` otherwise
   */
  public hasValidateProfileIdElement(): boolean {
    return isDefined<IdType>(this.validateProfileId) && !this.validateProfileId.isEmpty();
  }

  /**
   * @returns the `validateProfileId` property value as a fhirId if defined; else undefined
   */
  public getValidateProfileId(): fhirId | undefined {
    return this.validateProfileId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `validateProfileId` property.
   *
   * @param value - the `validateProfileId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValidateProfileId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.validateProfileId (${String(value)})`;
      this.validateProfileId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.validateProfileId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validateProfileId` property exists and has a value; `false` otherwise
   */
  public hasValidateProfileId(): boolean {
    return this.hasValidateProfileIdElement();
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
      const optErrMsg = `Invalid TestScript.setup.action.assert.value; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.setup.action.assert.value (${String(value)})`;
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
   * @returns the `warningOnly` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getWarningOnlyElement(): BooleanType {
    return this.warningOnly ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `warningOnly` property.
   *
   * @param element - the `warningOnly` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWarningOnlyElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.warningOnly; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.warningOnly = element;
    } else {
      this.warningOnly = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `warningOnly` property exists and has a value; `false` otherwise
   */
  public hasWarningOnlyElement(): boolean {
    return isDefined<BooleanType>(this.warningOnly) && !this.warningOnly.isEmpty();
  }

  /**
   * @returns the `warningOnly` property value as a fhirBoolean if defined; else null
   */
  public getWarningOnly(): fhirBoolean | null {
    if (this.warningOnly?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.warningOnly.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `warningOnly` property.
   *
   * @param value - the `warningOnly` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setWarningOnly(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TestScript.setup.action.assert.warningOnly (${String(value)})`;
      this.warningOnly = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.warningOnly = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `warningOnly` property exists and has a value; `false` otherwise
   */
  public hasWarningOnly(): boolean {
    return this.hasWarningOnlyElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.setup.action.assert';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.label,
      this.description,
      this.direction,
      this.compareToSourceId,
      this.compareToSourceExpression,
      this.compareToSourcePath,
      this.contentType,
      this.expression,
      this.headerField,
      this.minimumId,
      this.navigationLinks,
      this.operator,
      this.path,
      this.requestMethod,
      this.requestURL,
      this.resource,
      this.response,
      this.responseCode,
      this.sourceId,
      this.validateProfileId,
      this.value,
      this.warningOnly,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.warningOnly, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptSetupActionAssertComponent {
    const dest = new TestScriptSetupActionAssertComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptSetupActionAssertComponent): void {
    super.copyValues(dest);
    dest.label = this.label?.copy();
    dest.description = this.description?.copy();
    dest.direction = this.direction?.copy();
    dest.compareToSourceId = this.compareToSourceId?.copy();
    dest.compareToSourceExpression = this.compareToSourceExpression?.copy();
    dest.compareToSourcePath = this.compareToSourcePath?.copy();
    dest.contentType = this.contentType?.copy();
    dest.expression = this.expression?.copy();
    dest.headerField = this.headerField?.copy();
    dest.minimumId = this.minimumId?.copy();
    dest.navigationLinks = this.navigationLinks?.copy();
    dest.operator = this.operator?.copy();
    dest.path = this.path?.copy();
    dest.requestMethod = this.requestMethod?.copy();
    dest.requestURL = this.requestURL?.copy();
    dest.resource = this.resource?.copy();
    dest.response = this.response?.copy();
    dest.responseCode = this.responseCode?.copy();
    dest.sourceId = this.sourceId?.copy();
    dest.validateProfileId = this.validateProfileId?.copy();
    dest.value = this.value?.copy();
    dest.warningOnly = this.warningOnly ? this.warningOnly.copy() : null;
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

    if (this.hasLabelElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLabelElement(), 'label', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasDirectionElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getDirectionElement()!, 'direction', jsonObj);
    }

    if (this.hasCompareToSourceIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCompareToSourceIdElement(), 'compareToSourceId', jsonObj);
    }

    if (this.hasCompareToSourceExpressionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCompareToSourceExpressionElement(), 'compareToSourceExpression', jsonObj);
    }

    if (this.hasCompareToSourcePathElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCompareToSourcePathElement(), 'compareToSourcePath', jsonObj);
    }

    if (this.hasContentTypeElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getContentTypeElement(), 'contentType', jsonObj);
    }

    if (this.hasExpressionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getExpressionElement(), 'expression', jsonObj);
    }

    if (this.hasHeaderFieldElement()) {
      setFhirPrimitiveJson<fhirString>(this.getHeaderFieldElement(), 'headerField', jsonObj);
    }

    if (this.hasMinimumIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMinimumIdElement(), 'minimumId', jsonObj);
    }

    if (this.hasNavigationLinksElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getNavigationLinksElement(), 'navigationLinks', jsonObj);
    }

    if (this.hasOperatorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getOperatorElement()!, 'operator', jsonObj);
    }

    if (this.hasPathElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPathElement(), 'path', jsonObj);
    }

    if (this.hasRequestMethodElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRequestMethodElement()!, 'requestMethod', jsonObj);
    }

    if (this.hasRequestURLElement()) {
      setFhirPrimitiveJson<fhirString>(this.getRequestURLElement(), 'requestURL', jsonObj);
    }

    if (this.hasResourceElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getResourceElement(), 'resource', jsonObj);
    }

    if (this.hasResponseElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getResponseElement()!, 'response', jsonObj);
    }

    if (this.hasResponseCodeElement()) {
      setFhirPrimitiveJson<fhirString>(this.getResponseCodeElement(), 'responseCode', jsonObj);
    }

    if (this.hasSourceIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getSourceIdElement(), 'sourceId', jsonObj);
    }

    if (this.hasValidateProfileIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getValidateProfileIdElement(), 'validateProfileId', jsonObj);
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    }

    if (this.hasWarningOnlyElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getWarningOnlyElement(), 'warningOnly', jsonObj);
    } else {
      jsonObj['warningOnly'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestScriptTestComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A test in this script
 * - **Definition:** A test in this script.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptTestComponent extends BackboneElement implements IBackboneElement {
  constructor(action: TestScriptTestActionComponent[] | null = null) {
    super();

    this.action = null;
    if (isDefinedList<TestScriptTestActionComponent>(action)) {
      this.setAction(action);
    }
  }

  /**
   * Parse the provided `TestScriptTestComponent` JSON to instantiate the TestScriptTestComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptTestComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptTestComponent
   * @returns TestScriptTestComponent data model or undefined for `TestScriptTestComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptTestComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptTestComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptTestComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestScriptTestActionComponent | undefined = TestScriptTestActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setAction(null);
        } else {
          instance.addAction(component);
        }
      });
    } else {
      instance.setAction(null);
    }

    return instance;
  }

  /**
   * TestScript.test.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Tracking/logging name of this test
   * - **Definition:** The name of this test used for tracking/logging purposes by test engines.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * TestScript.test.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Tracking/reporting short description of the test
   * - **Definition:** A short description of the test used by test engines for tracking and reporting purposes.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * TestScript.test.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A test operation or assert to perform
   * - **Definition:** Action would contain either an operation or an assertion.
   * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action: TestScriptTestActionComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid TestScript.test.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.test.name (${String(value)})`;
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
      const optErrMsg = `Invalid TestScript.test.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestScript.test.description (${String(value)})`;
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
   * @returns the `action` property value as a TestScriptTestActionComponent array
   */
  public getAction(): TestScriptTestActionComponent[] {
    return this.action ?? ([] as TestScriptTestActionComponent[]);
  }

  /**
   * Assigns the provided TestScriptTestActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: TestScriptTestActionComponent[] | undefined | null): this {
    if (isDefinedList<TestScriptTestActionComponent>(value)) {
      const optErrMsg = `Invalid TestScript.test.action; Provided value array has an element that is not an instance of TestScriptTestActionComponent.`;
      assertFhirTypeList<TestScriptTestActionComponent>(value, TestScriptTestActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = null;
    }
    return this;
  }

  /**
   * Add the provided TestScriptTestActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: TestScriptTestActionComponent | undefined): this {
    if (isDefined<TestScriptTestActionComponent>(value)) {
      const optErrMsg = `Invalid TestScript.test.action; Provided element is not an instance of TestScriptTestActionComponent.`;
      assertFhirType<TestScriptTestActionComponent>(value, TestScriptTestActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<TestScriptTestActionComponent>(this.action) && this.action.some((item: TestScriptTestActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as TestScriptTestActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.test';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.description,
      this.action,
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
  public override copy(): TestScriptTestComponent {
    const dest = new TestScriptTestComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptTestComponent): void {
    super.copyValues(dest);
    dest.name = this.name?.copy();
    dest.description = this.description?.copy();
    const actionList = copyListValues<TestScriptTestActionComponent>(this.action);
    dest.action = actionList.length === 0 ? null : actionList;
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasAction()) {
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    } else {
      jsonObj['action'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestScriptTestActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A test operation or assert to perform
 * - **Definition:** Action would contain either an operation or an assertion.
 * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptTestActionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TestScriptTestActionComponent` JSON to instantiate the TestScriptTestActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptTestActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptTestActionComponent
   * @returns TestScriptTestActionComponent data model or undefined for `TestScriptTestActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptTestActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptTestActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptTestActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'operation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestScriptSetupActionOperationComponent | undefined = TestScriptSetupActionOperationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOperation(component);
    }

    fieldName = 'assert';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestScriptSetupActionAssertComponent | undefined = TestScriptSetupActionAssertComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAssert(component);
    }

    return instance;
  }

  /**
   * TestScript.test.action.operation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The setup operation to perform
   * - **Definition:** An operation would involve a REST request to a server.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private operation?: TestScriptSetupActionOperationComponent | undefined;

  /**
   * TestScript.test.action.assert Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The setup assertion to perform
   * - **Definition:** Evaluates the results of previous operations to determine if the server under test behaves appropriately.
   * - **Comment:** In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private assert?: TestScriptSetupActionAssertComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `operation` property value as a TestScriptSetupActionOperationComponent object if defined; else an empty TestScriptSetupActionOperationComponent object
   */
  public getOperation(): TestScriptSetupActionOperationComponent {
    return this.operation ?? new TestScriptSetupActionOperationComponent();
  }

  /**
   * Assigns the provided Operation object value to the `operation` property.
   *
   * @param value - the `operation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperation(value: TestScriptSetupActionOperationComponent | undefined): this {
    if (isDefined<TestScriptSetupActionOperationComponent>(value)) {
      const optErrMsg = `Invalid TestScript.test.action.operation; Provided element is not an instance of TestScriptSetupActionOperationComponent.`;
      assertFhirType<TestScriptSetupActionOperationComponent>(value, TestScriptSetupActionOperationComponent, optErrMsg);
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
    return isDefined<TestScriptSetupActionOperationComponent>(this.operation) && !this.operation.isEmpty();
  }

  /**
   * @returns the `assert` property value as a TestScriptSetupActionAssertComponent object if defined; else an empty TestScriptSetupActionAssertComponent object
   */
  public getAssert(): TestScriptSetupActionAssertComponent {
    return this.assert ?? new TestScriptSetupActionAssertComponent();
  }

  /**
   * Assigns the provided Assert object value to the `assert` property.
   *
   * @param value - the `assert` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAssert(value: TestScriptSetupActionAssertComponent | undefined): this {
    if (isDefined<TestScriptSetupActionAssertComponent>(value)) {
      const optErrMsg = `Invalid TestScript.test.action.assert; Provided element is not an instance of TestScriptSetupActionAssertComponent.`;
      assertFhirType<TestScriptSetupActionAssertComponent>(value, TestScriptSetupActionAssertComponent, optErrMsg);
      this.assert = value;
    } else {
      this.assert = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assert` property exists and has a value; `false` otherwise
   */
  public hasAssert(): boolean {
    return isDefined<TestScriptSetupActionAssertComponent>(this.assert) && !this.assert.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.test.action';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.operation,
      this.assert,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptTestActionComponent {
    const dest = new TestScriptTestActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptTestActionComponent): void {
    super.copyValues(dest);
    dest.operation = this.operation?.copy();
    dest.assert = this.assert?.copy();
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

    if (this.hasOperation()) {
      setFhirBackboneElementJson(this.getOperation(), 'operation', jsonObj);
    }

    if (this.hasAssert()) {
      setFhirBackboneElementJson(this.getAssert(), 'assert', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestScriptTeardownComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A series of required clean up steps
 * - **Definition:** A series of operations required to clean up after all the tests are executed (successfully or otherwise).
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptTeardownComponent extends BackboneElement implements IBackboneElement {
  constructor(action: TestScriptTeardownActionComponent[] | null = null) {
    super();

    this.action = null;
    if (isDefinedList<TestScriptTeardownActionComponent>(action)) {
      this.setAction(action);
    }
  }

  /**
   * Parse the provided `TestScriptTeardownComponent` JSON to instantiate the TestScriptTeardownComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptTeardownComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptTeardownComponent
   * @returns TestScriptTeardownComponent data model or undefined for `TestScriptTeardownComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptTeardownComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptTeardownComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptTeardownComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TestScriptTeardownActionComponent | undefined = TestScriptTeardownActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          instance.setAction(null);
        } else {
          instance.addAction(component);
        }
      });
    } else {
      instance.setAction(null);
    }

    return instance;
  }

  /**
   * TestScript.teardown.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** One or more teardown operations to perform
   * - **Definition:** The teardown action will only contain an operation.
   * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action: TestScriptTeardownActionComponent[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `action` property value as a TestScriptTeardownActionComponent array
   */
  public getAction(): TestScriptTeardownActionComponent[] {
    return this.action ?? ([] as TestScriptTeardownActionComponent[]);
  }

  /**
   * Assigns the provided TestScriptTeardownActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: TestScriptTeardownActionComponent[] | undefined | null): this {
    if (isDefinedList<TestScriptTeardownActionComponent>(value)) {
      const optErrMsg = `Invalid TestScript.teardown.action; Provided value array has an element that is not an instance of TestScriptTeardownActionComponent.`;
      assertFhirTypeList<TestScriptTeardownActionComponent>(value, TestScriptTeardownActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = null;
    }
    return this;
  }

  /**
   * Add the provided TestScriptTeardownActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: TestScriptTeardownActionComponent | undefined): this {
    if (isDefined<TestScriptTeardownActionComponent>(value)) {
      const optErrMsg = `Invalid TestScript.teardown.action; Provided element is not an instance of TestScriptTeardownActionComponent.`;
      assertFhirType<TestScriptTeardownActionComponent>(value, TestScriptTeardownActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<TestScriptTeardownActionComponent>(this.action) && this.action.some((item: TestScriptTeardownActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as TestScriptTeardownActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.teardown';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.action,
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
  public override copy(): TestScriptTeardownComponent {
    const dest = new TestScriptTeardownComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptTeardownComponent): void {
    super.copyValues(dest);
    const actionList = copyListValues<TestScriptTeardownActionComponent>(this.action);
    dest.action = actionList.length === 0 ? null : actionList;
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

    if (this.hasAction()) {
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    } else {
      jsonObj['action'] = null;
    }

    return jsonObj;
  }
}
/**
 * TestScriptTeardownActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** One or more teardown operations to perform
 * - **Definition:** The teardown action will only contain an operation.
 * - **Comment:** An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
 *
 * @category Data Models: Resource
 * @see [FHIR TestScript](http://hl7.org/fhir/StructureDefinition/TestScript)
 */
export class TestScriptTeardownActionComponent extends BackboneElement implements IBackboneElement {
  constructor(operation: TestScriptSetupActionOperationComponent | null = null) {
    super();

    this.operation = null;
    if (isDefined<TestScriptSetupActionOperationComponent>(operation)) {
      this.setOperation(operation);
    }
  }

  /**
   * Parse the provided `TestScriptTeardownActionComponent` JSON to instantiate the TestScriptTeardownActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestScriptTeardownActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestScriptTeardownActionComponent
   * @returns TestScriptTeardownActionComponent data model or undefined for `TestScriptTeardownActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestScriptTeardownActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestScriptTeardownActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestScriptTeardownActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'operation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestScriptSetupActionOperationComponent | undefined = TestScriptSetupActionOperationComponent.parse(classJsonObj[fieldName]!, sourceField);
      if (component === undefined) {
        instance.setOperation(null);
      } else {
        instance.setOperation(component);
      }
    } else {
      instance.setOperation(null);
    }

    return instance;
  }

  /**
   * TestScript.teardown.action.operation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The teardown operation to perform
   * - **Definition:** An operation would involve a REST request to a server.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private operation: TestScriptSetupActionOperationComponent | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `operation` property value as a TestScriptSetupActionOperationComponent object if defined; else an empty TestScriptSetupActionOperationComponent object
   */
  public getOperation(): TestScriptSetupActionOperationComponent {
    return this.operation ?? new TestScriptSetupActionOperationComponent();
  }

  /**
   * Assigns the provided TestScriptSetupActionOperationComponent object value to the `operation` property.
   *
   * @param value - the `operation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperation(value: TestScriptSetupActionOperationComponent | undefined | null): this {
    if (isDefined<TestScriptSetupActionOperationComponent>(value)) {
      const optErrMsg = `Invalid TestScript.teardown.action.operation; Provided element is not an instance of TestScriptSetupActionOperationComponent.`;
      assertFhirType<TestScriptSetupActionOperationComponent>(value, TestScriptSetupActionOperationComponent, optErrMsg);
      this.operation = value;
    } else {
      this.operation = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `operation` property exists and has a value; `false` otherwise
   */
  public hasOperation(): boolean {
    return isDefined<TestScriptSetupActionOperationComponent>(this.operation) && !this.operation.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestScript.teardown.action';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.operation,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.operation, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestScriptTeardownActionComponent {
    const dest = new TestScriptTeardownActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestScriptTeardownActionComponent): void {
    super.copyValues(dest);
    dest.operation = this.operation ? this.operation.copy() : null;
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

    if (this.hasOperation()) {
      setFhirBackboneElementJson(this.getOperation(), 'operation', jsonObj);
    } else {
      jsonObj['operation'] = null;
    }

    return jsonObj;
  }
}
