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
 * TestPlan Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/TestPlan
 * StructureDefinition.name: TestPlan
 * StructureDefinition.description: A plan for executing testing on an artifact or specifications
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
  IntegerType,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, CodeableReference, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * TestPlan Class
 *
 * @remarks
 * A plan for executing testing on an artifact or specifications
 *
 * **FHIR Specification**
 * - **Short:** Description of intented testing
 * - **Definition:** A plan for executing testing on an artifact or specifications.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR TestPlan](http://hl7.org/fhir/StructureDefinition/TestPlan)
 */
export class TestPlan extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'TestPlan.status',
    );
  }

  /**
   * Parse the provided `TestPlan` JSON to instantiate the TestPlan data model.
   *
   * @param sourceJson - JSON representing FHIR `TestPlan`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestPlan
   * @returns TestPlan data model or undefined for `TestPlan`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): TestPlan | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestPlan';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestPlan();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'TestPlan');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = TestPlan[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for TestPlan`;
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

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCategory(datatype);
          }
        });
      }
    }

    fieldName = 'scope';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addScope(datatype);
          }
        });
      }
  }

    fieldName = 'testTools';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setTestToolsElement(datatype);
    }

    fieldName = 'dependency';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: TestPlanDependencyComponent | undefined = TestPlanDependencyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDependency(component);
          }
        });
      }
    }

    fieldName = 'exitCriteria';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setExitCriteriaElement(datatype);
    }

    fieldName = 'testCase';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: TestPlanTestCaseComponent | undefined = TestPlanTestCaseComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addTestCase(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * TestPlan.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this test plan, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this test plan when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this test plan is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the test plan is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the test plan to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * TestPlan.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier identifier for the test plan
   * - **Definition:** A formal identifier that is used to identify this test plan when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this test plan outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * TestPlan.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the test plan
   * - **Definition:** The identifier that is used to identify this version of the test plan when it is referenced in a specification, model, design or instance.  This is an arbitrary value managed by the test plan author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different test plan instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the test plan with the format [url]|[version]. The version SHOULD NOT contain a \'#\' - see [Business Version](https://hl7.org/fhir/resource.html#bv-format).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * TestPlan.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('TestPlan.versionAlgorithm[x]', ['string','Coding',]`
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
  @ChoiceDataTypesMeta('TestPlan.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * TestPlan.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this test plan (computer friendly)
   * - **Definition:** A natural language name identifying the test plan. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * TestPlan.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this test plan (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the test plan.
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title?: StringType | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * TestPlan.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this test plan. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of test plans that are appropriate for use versus not. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
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
   * TestPlan.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this test plan is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of test plans that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level test plan.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * TestPlan.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date (and optionally time) when the test plan was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the test plan changes.
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the test plan. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * TestPlan.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher/steward (organization or individual)
   * - **Definition:** The name of the organization or individual responsible for the release and ongoing maintenance of the test plan.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the test plan is the organization or individual primarily responsible for the maintenance and upkeep of the test plan. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the test plan. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the test plan.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * TestPlan.contact Element
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
   * TestPlan.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the test plan
   * - **Definition:** A free text natural language description of the test plan from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the test plan as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the test plan is presumed to be the predominant language in the place the test plan was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * TestPlan.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate test plan instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * TestPlan.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction where the test plan applies (if applicable)
   * - **Definition:** A legal or geographic region in which the test plan is intended to be used.
   * - **Comment:** It may be possible for the test plan to be used in jurisdictions other than those for which it was originally designed or intended. DEPRECATION NOTE: For consistency, implementations are encouraged to migrate to using the new \'jurisdiction\' code in the useContext element.  (I.e. useContext.code indicating http://terminology.hl7.org/CodeSystem/usage-context-type#jurisdiction and useContext.valueCodeableConcept indicating the jurisdiction.)
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * TestPlan.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this test plan is defined
   * - **Definition:** Explanation of why this test plan is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the test plan Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this test plan.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * TestPlan.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the test plan and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test plan. The short copyright declaration (e.g. (c) \'2015+ xyz organization\' should be sent in the copyrightLabel element.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the test plan and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * TestPlan.copyrightLabel Element
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
   * TestPlan.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The category of the Test Plan - can be acceptance, unit, performance
   * - **Definition:** The category of the Test Plan - can be acceptance, unit, performance, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * TestPlan.scope Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What is being tested with this Test Plan - a conformance resource, or narrative criteria, or an external reference
   * - **Definition:** What is being tested with this Test Plan - a conformance resource, or narrative criteria, or an external reference...
   * - **FHIR Type:** `Reference`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private scope?: Reference[] | undefined;

  /**
   * TestPlan.testTools Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A description of test tools to be used in the test plan - narrative for now
   * - **Definition:** A description of test tools to be used in the test plan.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private testTools?: MarkdownType | undefined;

  /**
   * TestPlan.dependency Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The required criteria to execute the test plan - e.g. preconditions, previous tests
   * - **Definition:** The required criteria to execute the test plan - e.g. preconditions, previous tests...
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dependency?: TestPlanDependencyComponent[] | undefined;

  /**
   * TestPlan.exitCriteria Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The threshold or criteria for the test plan to be considered successfully executed - narrative
   * - **Definition:** The threshold or criteria for the test plan to be considered successfully executed - narrative.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private exitCriteria?: MarkdownType | undefined;

  /**
   * TestPlan.testCase Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The test cases that constitute this plan
   * - **Definition:** The individual test cases that are part of this plan, when they they are made explicit.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private testCase?: TestPlanTestCaseComponent[] | undefined;

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
      const optErrMsg = `Invalid TestPlan.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid TestPlan.url (${String(value)})`;
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
      const optErrMsg = `Invalid TestPlan.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid TestPlan.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid TestPlan.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestPlan.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('TestPlan.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('TestPlan.versionAlgorithm[x]')
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
        `DataType mismatch for TestPlan.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for TestPlan.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
      const optErrMsg = `Invalid TestPlan.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestPlan.name (${String(value)})`;
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
      const optErrMsg = `Invalid TestPlan.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestPlan.title (${String(value)})`;
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
      const errMsgPrefix = `Invalid TestPlan.status`;
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
      const optErrMsg = `Invalid TestPlan.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid TestPlan.status (${String(value)})`;
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
      const optErrMsg = `Invalid TestPlan.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid TestPlan.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid TestPlan.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid TestPlan.date (${String(value)})`;
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
      const optErrMsg = `Invalid TestPlan.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestPlan.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid TestPlan.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid TestPlan.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid TestPlan.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid TestPlan.description (${String(value)})`;
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
      const optErrMsg = `Invalid TestPlan.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid TestPlan.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid TestPlan.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid TestPlan.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid TestPlan.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid TestPlan.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid TestPlan.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid TestPlan.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid TestPlan.copyrightLabel; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TestPlan.copyrightLabel (${String(value)})`;
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
   * @returns the `category` property value as a CodeableConcept array
   */
  public getCategory(): CodeableConcept[] {
    return this.category ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `category` property.
   *
   * @param value - the `category` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid TestPlan.category; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `category` array property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid TestPlan.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCategory();
      this.category?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefinedList<CodeableConcept>(this.category) && this.category.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `category` property
   */
  private initCategory(): void {
    if(!this.hasCategory()) {
      this.category = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `scope` property value as a Reference array
   */
  public getScope(): Reference[] {
    return this.scope ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `scope` property.
   *
   * @decorator `@ReferenceTargets('TestPlan.scope', [])`
   *
   * @param value - the `scope` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('TestPlan.scope', [])
  public setScope(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.scope = value;
    } else {
      this.scope = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `scope` array property.
   *
   * @decorator `@ReferenceTargets('TestPlan.scope', [])`
   *
   * @param value - the `scope` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('TestPlan.scope', [])
  public addScope(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initScope();
      this.scope?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `scope` property exists and has a value; `false` otherwise
   */
  public hasScope(): boolean {
    return isDefinedList<Reference>(this.scope) && this.scope.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `scope` property
   */
  private initScope(): void {
    if (!this.hasScope()) {
      this.scope = [] as Reference[];
    }
  }

  /**
   * @returns the `testTools` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getTestToolsElement(): MarkdownType {
    return this.testTools ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `testTools` property.
   *
   * @param element - the `testTools` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTestToolsElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid TestPlan.testTools; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.testTools = element;
    } else {
      this.testTools = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `testTools` property exists and has a value; `false` otherwise
   */
  public hasTestToolsElement(): boolean {
    return isDefined<MarkdownType>(this.testTools) && !this.testTools.isEmpty();
  }

  /**
   * @returns the `testTools` property value as a fhirMarkdown if defined; else undefined
   */
  public getTestTools(): fhirMarkdown | undefined {
    return this.testTools?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `testTools` property.
   *
   * @param value - the `testTools` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTestTools(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid TestPlan.testTools (${String(value)})`;
      this.testTools = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.testTools = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `testTools` property exists and has a value; `false` otherwise
   */
  public hasTestTools(): boolean {
    return this.hasTestToolsElement();
  }

  /**
   * @returns the `dependency` property value as a TestPlanDependencyComponent array
   */
  public getDependency(): TestPlanDependencyComponent[] {
    return this.dependency ?? ([] as TestPlanDependencyComponent[]);
  }

  /**
   * Assigns the provided TestPlanDependencyComponent array value to the `dependency` property.
   *
   * @param value - the `dependency` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDependency(value: TestPlanDependencyComponent[] | undefined): this {
    if (isDefinedList<TestPlanDependencyComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.dependency; Provided value array has an element that is not an instance of TestPlanDependencyComponent.`;
      assertFhirTypeList<TestPlanDependencyComponent>(value, TestPlanDependencyComponent, optErrMsg);
      this.dependency = value;
    } else {
      this.dependency = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestPlanDependencyComponent value to the `dependency` array property.
   *
   * @param value - the `dependency` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDependency(value: TestPlanDependencyComponent | undefined): this {
    if (isDefined<TestPlanDependencyComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.dependency; Provided element is not an instance of TestPlanDependencyComponent.`;
      assertFhirType<TestPlanDependencyComponent>(value, TestPlanDependencyComponent, optErrMsg);
      this.initDependency();
      this.dependency?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dependency` property exists and has a value; `false` otherwise
   */
  public hasDependency(): boolean {
    return isDefinedList<TestPlanDependencyComponent>(this.dependency) && this.dependency.some((item: TestPlanDependencyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dependency` property
   */
  private initDependency(): void {
    if(!this.hasDependency()) {
      this.dependency = [] as TestPlanDependencyComponent[];
    }
  }

  /**
   * @returns the `exitCriteria` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getExitCriteriaElement(): MarkdownType {
    return this.exitCriteria ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `exitCriteria` property.
   *
   * @param element - the `exitCriteria` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExitCriteriaElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid TestPlan.exitCriteria; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.exitCriteria = element;
    } else {
      this.exitCriteria = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `exitCriteria` property exists and has a value; `false` otherwise
   */
  public hasExitCriteriaElement(): boolean {
    return isDefined<MarkdownType>(this.exitCriteria) && !this.exitCriteria.isEmpty();
  }

  /**
   * @returns the `exitCriteria` property value as a fhirMarkdown if defined; else undefined
   */
  public getExitCriteria(): fhirMarkdown | undefined {
    return this.exitCriteria?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `exitCriteria` property.
   *
   * @param value - the `exitCriteria` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExitCriteria(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid TestPlan.exitCriteria (${String(value)})`;
      this.exitCriteria = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.exitCriteria = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `exitCriteria` property exists and has a value; `false` otherwise
   */
  public hasExitCriteria(): boolean {
    return this.hasExitCriteriaElement();
  }

  /**
   * @returns the `testCase` property value as a TestPlanTestCaseComponent array
   */
  public getTestCase(): TestPlanTestCaseComponent[] {
    return this.testCase ?? ([] as TestPlanTestCaseComponent[]);
  }

  /**
   * Assigns the provided TestPlanTestCaseComponent array value to the `testCase` property.
   *
   * @param value - the `testCase` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTestCase(value: TestPlanTestCaseComponent[] | undefined): this {
    if (isDefinedList<TestPlanTestCaseComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase; Provided value array has an element that is not an instance of TestPlanTestCaseComponent.`;
      assertFhirTypeList<TestPlanTestCaseComponent>(value, TestPlanTestCaseComponent, optErrMsg);
      this.testCase = value;
    } else {
      this.testCase = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestPlanTestCaseComponent value to the `testCase` array property.
   *
   * @param value - the `testCase` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTestCase(value: TestPlanTestCaseComponent | undefined): this {
    if (isDefined<TestPlanTestCaseComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase; Provided element is not an instance of TestPlanTestCaseComponent.`;
      assertFhirType<TestPlanTestCaseComponent>(value, TestPlanTestCaseComponent, optErrMsg);
      this.initTestCase();
      this.testCase?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `testCase` property exists and has a value; `false` otherwise
   */
  public hasTestCase(): boolean {
    return isDefinedList<TestPlanTestCaseComponent>(this.testCase) && this.testCase.some((item: TestPlanTestCaseComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `testCase` property
   */
  private initTestCase(): void {
    if(!this.hasTestCase()) {
      this.testCase = [] as TestPlanTestCaseComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestPlan';
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
      this.category,
      this.scope,
      this.testTools,
      this.dependency,
      this.exitCriteria,
      this.testCase,
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
  public override copy(): TestPlan {
    const dest = new TestPlan();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestPlan): void {
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
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    const scopeList = copyListValues<Reference>(this.scope);
    dest.scope = scopeList.length === 0 ? undefined : scopeList;
    dest.testTools = this.testTools?.copy();
    const dependencyList = copyListValues<TestPlanDependencyComponent>(this.dependency);
    dest.dependency = dependencyList.length === 0 ? undefined : dependencyList;
    dest.exitCriteria = this.exitCriteria?.copy();
    const testCaseList = copyListValues<TestPlanTestCaseComponent>(this.testCase);
    dest.testCase = testCaseList.length === 0 ? undefined : testCaseList;
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

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasScope()) {
      setFhirComplexListJson(this.getScope(), 'scope', jsonObj);
    }

    if (this.hasTestToolsElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getTestToolsElement(), 'testTools', jsonObj);
    }

    if (this.hasDependency()) {
      setFhirBackboneElementListJson(this.getDependency(), 'dependency', jsonObj);
    }

    if (this.hasExitCriteriaElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getExitCriteriaElement(), 'exitCriteria', jsonObj);
    }

    if (this.hasTestCase()) {
      setFhirBackboneElementListJson(this.getTestCase(), 'testCase', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * TestPlanDependencyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The required criteria to execute the test plan - e.g. preconditions, previous tests
 * - **Definition:** The required criteria to execute the test plan - e.g. preconditions, previous tests...
 *
 * @category Data Models: Resource
 * @see [FHIR TestPlan](http://hl7.org/fhir/StructureDefinition/TestPlan)
 */
export class TestPlanDependencyComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TestPlanDependencyComponent` JSON to instantiate the TestPlanDependencyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestPlanDependencyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestPlanDependencyComponent
   * @returns TestPlanDependencyComponent data model or undefined for `TestPlanDependencyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestPlanDependencyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestPlanDependencyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestPlanDependencyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'predecessor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPredecessor(datatype);
    }

    return instance;
  }

  /**
   * TestPlan.dependency.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the dependency criterium
   * - **Definition:** A textual description of the criterium - what is needed for the dependency to be considered met.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * TestPlan.dependency.predecessor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link to predecessor test plans
   * - **Definition:** Predecessor test plans - those that are expected to be successfully performed as a dependency for the execution of this test plan.
   * - **FHIR Type:** `Reference`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private predecessor?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid TestPlan.dependency.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid TestPlan.dependency.description (${String(value)})`;
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
   * @returns the `predecessor` property value as a Reference object; else an empty Reference object
   */
  public getPredecessor(): Reference {
    return this.predecessor ?? new Reference();
  }

  /**
   * Assigns the provided Predecessor object value to the `predecessor` property.
   *
   * @decorator `@ReferenceTargets('TestPlan.dependency.predecessor', [])`
   *
   * @param value - the `predecessor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('TestPlan.dependency.predecessor', [])
  public setPredecessor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.predecessor = value;
    } else {
      this.predecessor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `predecessor` property exists and has a value; `false` otherwise
   */
  public hasPredecessor(): boolean {
    return isDefined<Reference>(this.predecessor) && !this.predecessor.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestPlan.dependency';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.predecessor,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestPlanDependencyComponent {
    const dest = new TestPlanDependencyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestPlanDependencyComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.predecessor = this.predecessor?.copy();
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasPredecessor()) {
      setFhirComplexJson(this.getPredecessor(), 'predecessor', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestPlanTestCaseComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The test cases that constitute this plan
 * - **Definition:** The individual test cases that are part of this plan, when they they are made explicit.
 *
 * @category Data Models: Resource
 * @see [FHIR TestPlan](http://hl7.org/fhir/StructureDefinition/TestPlan)
 */
export class TestPlanTestCaseComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TestPlanTestCaseComponent` JSON to instantiate the TestPlanTestCaseComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestPlanTestCaseComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestPlanTestCaseComponent
   * @returns TestPlanTestCaseComponent data model or undefined for `TestPlanTestCaseComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestPlanTestCaseComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestPlanTestCaseComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestPlanTestCaseComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'sequence';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setSequenceElement(datatype);
    }

    fieldName = 'scope';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addScope(datatype);
          }
        });
      }
  }

    fieldName = 'dependency';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: TestPlanTestCaseDependencyComponent | undefined = TestPlanTestCaseDependencyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addDependency(component);
          }
        });
      }
    }

    fieldName = 'testRun';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: TestPlanTestCaseTestRunComponent | undefined = TestPlanTestCaseTestRunComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addTestRun(component);
          }
        });
      }
    }

    fieldName = 'testData';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: TestPlanTestCaseTestDataComponent | undefined = TestPlanTestCaseTestDataComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addTestData(component);
          }
        });
      }
    }

    fieldName = 'assertion';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: TestPlanTestCaseAssertionComponent | undefined = TestPlanTestCaseAssertionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAssertion(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * TestPlan.testCase.sequence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sequence of test case in the test plan
   * - **Definition:** Sequence of test case - an ordinal number that indicates the order for the present test case in the test plan.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sequence?: IntegerType | undefined;

  /**
   * TestPlan.testCase.scope Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The scope or artifact covered by the case
   * - **Definition:** The scope or artifact covered by the case, when the individual test case is associated with a testable artifact.
   * - **FHIR Type:** `Reference`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private scope?: Reference[] | undefined;

  /**
   * TestPlan.testCase.dependency Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Required criteria to execute the test case
   * - **Definition:** The required criteria to execute the test case - e.g. preconditions, previous tests.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dependency?: TestPlanTestCaseDependencyComponent[] | undefined;

  /**
   * TestPlan.testCase.testRun Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual test to be executed
   * - **Definition:** The actual test to be executed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private testRun?: TestPlanTestCaseTestRunComponent[] | undefined;

  /**
   * TestPlan.testCase.testData Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The test data used in the test case
   * - **Definition:** The test data used in the test case.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private testData?: TestPlanTestCaseTestDataComponent[] | undefined;

  /**
   * TestPlan.testCase.assertion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Test assertions or expectations
   * - **Definition:** The test assertions - the expectations of test results from the execution of the test case.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private assertion?: TestPlanTestCaseAssertionComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `sequence` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getSequenceElement(): IntegerType {
    return this.sequence ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sequence` property.
   *
   * @param element - the `sequence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequenceElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid TestPlan.testCase.sequence; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.sequence = element;
    } else {
      this.sequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequenceElement(): boolean {
    return isDefined<IntegerType>(this.sequence) && !this.sequence.isEmpty();
  }

  /**
   * @returns the `sequence` property value as a fhirInteger if defined; else undefined
   */
  public getSequence(): fhirInteger | undefined {
    return this.sequence?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sequence` property.
   *
   * @param value - the `sequence` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSequence(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.sequence (${String(value)})`;
      this.sequence = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.sequence = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sequence` property exists and has a value; `false` otherwise
   */
  public hasSequence(): boolean {
    return this.hasSequenceElement();
  }

  /**
   * @returns the `scope` property value as a Reference array
   */
  public getScope(): Reference[] {
    return this.scope ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `scope` property.
   *
   * @decorator `@ReferenceTargets('TestPlan.testCase.scope', [])`
   *
   * @param value - the `scope` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('TestPlan.testCase.scope', [])
  public setScope(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.scope = value;
    } else {
      this.scope = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `scope` array property.
   *
   * @decorator `@ReferenceTargets('TestPlan.testCase.scope', [])`
   *
   * @param value - the `scope` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('TestPlan.testCase.scope', [])
  public addScope(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initScope();
      this.scope?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `scope` property exists and has a value; `false` otherwise
   */
  public hasScope(): boolean {
    return isDefinedList<Reference>(this.scope) && this.scope.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `scope` property
   */
  private initScope(): void {
    if (!this.hasScope()) {
      this.scope = [] as Reference[];
    }
  }

  /**
   * @returns the `dependency` property value as a TestPlanTestCaseDependencyComponent array
   */
  public getDependency(): TestPlanTestCaseDependencyComponent[] {
    return this.dependency ?? ([] as TestPlanTestCaseDependencyComponent[]);
  }

  /**
   * Assigns the provided TestPlanTestCaseDependencyComponent array value to the `dependency` property.
   *
   * @param value - the `dependency` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDependency(value: TestPlanTestCaseDependencyComponent[] | undefined): this {
    if (isDefinedList<TestPlanTestCaseDependencyComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.dependency; Provided value array has an element that is not an instance of TestPlanTestCaseDependencyComponent.`;
      assertFhirTypeList<TestPlanTestCaseDependencyComponent>(value, TestPlanTestCaseDependencyComponent, optErrMsg);
      this.dependency = value;
    } else {
      this.dependency = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestPlanTestCaseDependencyComponent value to the `dependency` array property.
   *
   * @param value - the `dependency` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDependency(value: TestPlanTestCaseDependencyComponent | undefined): this {
    if (isDefined<TestPlanTestCaseDependencyComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.dependency; Provided element is not an instance of TestPlanTestCaseDependencyComponent.`;
      assertFhirType<TestPlanTestCaseDependencyComponent>(value, TestPlanTestCaseDependencyComponent, optErrMsg);
      this.initDependency();
      this.dependency?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dependency` property exists and has a value; `false` otherwise
   */
  public hasDependency(): boolean {
    return isDefinedList<TestPlanTestCaseDependencyComponent>(this.dependency) && this.dependency.some((item: TestPlanTestCaseDependencyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dependency` property
   */
  private initDependency(): void {
    if(!this.hasDependency()) {
      this.dependency = [] as TestPlanTestCaseDependencyComponent[];
    }
  }

  /**
   * @returns the `testRun` property value as a TestPlanTestCaseTestRunComponent array
   */
  public getTestRun(): TestPlanTestCaseTestRunComponent[] {
    return this.testRun ?? ([] as TestPlanTestCaseTestRunComponent[]);
  }

  /**
   * Assigns the provided TestPlanTestCaseTestRunComponent array value to the `testRun` property.
   *
   * @param value - the `testRun` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTestRun(value: TestPlanTestCaseTestRunComponent[] | undefined): this {
    if (isDefinedList<TestPlanTestCaseTestRunComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.testRun; Provided value array has an element that is not an instance of TestPlanTestCaseTestRunComponent.`;
      assertFhirTypeList<TestPlanTestCaseTestRunComponent>(value, TestPlanTestCaseTestRunComponent, optErrMsg);
      this.testRun = value;
    } else {
      this.testRun = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestPlanTestCaseTestRunComponent value to the `testRun` array property.
   *
   * @param value - the `testRun` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTestRun(value: TestPlanTestCaseTestRunComponent | undefined): this {
    if (isDefined<TestPlanTestCaseTestRunComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.testRun; Provided element is not an instance of TestPlanTestCaseTestRunComponent.`;
      assertFhirType<TestPlanTestCaseTestRunComponent>(value, TestPlanTestCaseTestRunComponent, optErrMsg);
      this.initTestRun();
      this.testRun?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `testRun` property exists and has a value; `false` otherwise
   */
  public hasTestRun(): boolean {
    return isDefinedList<TestPlanTestCaseTestRunComponent>(this.testRun) && this.testRun.some((item: TestPlanTestCaseTestRunComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `testRun` property
   */
  private initTestRun(): void {
    if(!this.hasTestRun()) {
      this.testRun = [] as TestPlanTestCaseTestRunComponent[];
    }
  }

  /**
   * @returns the `testData` property value as a TestPlanTestCaseTestDataComponent array
   */
  public getTestData(): TestPlanTestCaseTestDataComponent[] {
    return this.testData ?? ([] as TestPlanTestCaseTestDataComponent[]);
  }

  /**
   * Assigns the provided TestPlanTestCaseTestDataComponent array value to the `testData` property.
   *
   * @param value - the `testData` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTestData(value: TestPlanTestCaseTestDataComponent[] | undefined): this {
    if (isDefinedList<TestPlanTestCaseTestDataComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.testData; Provided value array has an element that is not an instance of TestPlanTestCaseTestDataComponent.`;
      assertFhirTypeList<TestPlanTestCaseTestDataComponent>(value, TestPlanTestCaseTestDataComponent, optErrMsg);
      this.testData = value;
    } else {
      this.testData = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestPlanTestCaseTestDataComponent value to the `testData` array property.
   *
   * @param value - the `testData` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTestData(value: TestPlanTestCaseTestDataComponent | undefined): this {
    if (isDefined<TestPlanTestCaseTestDataComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.testData; Provided element is not an instance of TestPlanTestCaseTestDataComponent.`;
      assertFhirType<TestPlanTestCaseTestDataComponent>(value, TestPlanTestCaseTestDataComponent, optErrMsg);
      this.initTestData();
      this.testData?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `testData` property exists and has a value; `false` otherwise
   */
  public hasTestData(): boolean {
    return isDefinedList<TestPlanTestCaseTestDataComponent>(this.testData) && this.testData.some((item: TestPlanTestCaseTestDataComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `testData` property
   */
  private initTestData(): void {
    if(!this.hasTestData()) {
      this.testData = [] as TestPlanTestCaseTestDataComponent[];
    }
  }

  /**
   * @returns the `assertion` property value as a TestPlanTestCaseAssertionComponent array
   */
  public getAssertion(): TestPlanTestCaseAssertionComponent[] {
    return this.assertion ?? ([] as TestPlanTestCaseAssertionComponent[]);
  }

  /**
   * Assigns the provided TestPlanTestCaseAssertionComponent array value to the `assertion` property.
   *
   * @param value - the `assertion` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAssertion(value: TestPlanTestCaseAssertionComponent[] | undefined): this {
    if (isDefinedList<TestPlanTestCaseAssertionComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.assertion; Provided value array has an element that is not an instance of TestPlanTestCaseAssertionComponent.`;
      assertFhirTypeList<TestPlanTestCaseAssertionComponent>(value, TestPlanTestCaseAssertionComponent, optErrMsg);
      this.assertion = value;
    } else {
      this.assertion = undefined;
    }
    return this;
  }

  /**
   * Add the provided TestPlanTestCaseAssertionComponent value to the `assertion` array property.
   *
   * @param value - the `assertion` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAssertion(value: TestPlanTestCaseAssertionComponent | undefined): this {
    if (isDefined<TestPlanTestCaseAssertionComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.assertion; Provided element is not an instance of TestPlanTestCaseAssertionComponent.`;
      assertFhirType<TestPlanTestCaseAssertionComponent>(value, TestPlanTestCaseAssertionComponent, optErrMsg);
      this.initAssertion();
      this.assertion?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `assertion` property exists and has a value; `false` otherwise
   */
  public hasAssertion(): boolean {
    return isDefinedList<TestPlanTestCaseAssertionComponent>(this.assertion) && this.assertion.some((item: TestPlanTestCaseAssertionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `assertion` property
   */
  private initAssertion(): void {
    if(!this.hasAssertion()) {
      this.assertion = [] as TestPlanTestCaseAssertionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestPlan.testCase';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.sequence,
      this.scope,
      this.dependency,
      this.testRun,
      this.testData,
      this.assertion,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestPlanTestCaseComponent {
    const dest = new TestPlanTestCaseComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestPlanTestCaseComponent): void {
    super.copyValues(dest);
    dest.sequence = this.sequence?.copy();
    const scopeList = copyListValues<Reference>(this.scope);
    dest.scope = scopeList.length === 0 ? undefined : scopeList;
    const dependencyList = copyListValues<TestPlanTestCaseDependencyComponent>(this.dependency);
    dest.dependency = dependencyList.length === 0 ? undefined : dependencyList;
    const testRunList = copyListValues<TestPlanTestCaseTestRunComponent>(this.testRun);
    dest.testRun = testRunList.length === 0 ? undefined : testRunList;
    const testDataList = copyListValues<TestPlanTestCaseTestDataComponent>(this.testData);
    dest.testData = testDataList.length === 0 ? undefined : testDataList;
    const assertionList = copyListValues<TestPlanTestCaseAssertionComponent>(this.assertion);
    dest.assertion = assertionList.length === 0 ? undefined : assertionList;
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

    if (this.hasSequenceElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getSequenceElement(), 'sequence', jsonObj);
    }

    if (this.hasScope()) {
      setFhirComplexListJson(this.getScope(), 'scope', jsonObj);
    }

    if (this.hasDependency()) {
      setFhirBackboneElementListJson(this.getDependency(), 'dependency', jsonObj);
    }

    if (this.hasTestRun()) {
      setFhirBackboneElementListJson(this.getTestRun(), 'testRun', jsonObj);
    }

    if (this.hasTestData()) {
      setFhirBackboneElementListJson(this.getTestData(), 'testData', jsonObj);
    }

    if (this.hasAssertion()) {
      setFhirBackboneElementListJson(this.getAssertion(), 'assertion', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestPlanTestCaseDependencyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Required criteria to execute the test case
 * - **Definition:** The required criteria to execute the test case - e.g. preconditions, previous tests.
 *
 * @category Data Models: Resource
 * @see [FHIR TestPlan](http://hl7.org/fhir/StructureDefinition/TestPlan)
 */
export class TestPlanTestCaseDependencyComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TestPlanTestCaseDependencyComponent` JSON to instantiate the TestPlanTestCaseDependencyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestPlanTestCaseDependencyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestPlanTestCaseDependencyComponent
   * @returns TestPlanTestCaseDependencyComponent data model or undefined for `TestPlanTestCaseDependencyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestPlanTestCaseDependencyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestPlanTestCaseDependencyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestPlanTestCaseDependencyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'predecessor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPredecessor(datatype);
    }

    return instance;
  }

  /**
   * TestPlan.testCase.dependency.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the criteria
   * - **Definition:** Description of the criteria.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * TestPlan.testCase.dependency.predecessor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link to predecessor test plans
   * - **Definition:** Link to predecessor test plans.
   * - **FHIR Type:** `Reference`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private predecessor?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid TestPlan.testCase.dependency.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid TestPlan.testCase.dependency.description (${String(value)})`;
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
   * @returns the `predecessor` property value as a Reference object; else an empty Reference object
   */
  public getPredecessor(): Reference {
    return this.predecessor ?? new Reference();
  }

  /**
   * Assigns the provided Predecessor object value to the `predecessor` property.
   *
   * @decorator `@ReferenceTargets('TestPlan.testCase.dependency.predecessor', [])`
   *
   * @param value - the `predecessor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('TestPlan.testCase.dependency.predecessor', [])
  public setPredecessor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.predecessor = value;
    } else {
      this.predecessor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `predecessor` property exists and has a value; `false` otherwise
   */
  public hasPredecessor(): boolean {
    return isDefined<Reference>(this.predecessor) && !this.predecessor.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestPlan.testCase.dependency';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.predecessor,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestPlanTestCaseDependencyComponent {
    const dest = new TestPlanTestCaseDependencyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestPlanTestCaseDependencyComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.predecessor = this.predecessor?.copy();
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasPredecessor()) {
      setFhirComplexJson(this.getPredecessor(), 'predecessor', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestPlanTestCaseTestRunComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The actual test to be executed
 * - **Definition:** The actual test to be executed.
 *
 * @category Data Models: Resource
 * @see [FHIR TestPlan](http://hl7.org/fhir/StructureDefinition/TestPlan)
 */
export class TestPlanTestCaseTestRunComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TestPlanTestCaseTestRunComponent` JSON to instantiate the TestPlanTestCaseTestRunComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestPlanTestCaseTestRunComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestPlanTestCaseTestRunComponent
   * @returns TestPlanTestCaseTestRunComponent data model or undefined for `TestPlanTestCaseTestRunComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestPlanTestCaseTestRunComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestPlanTestCaseTestRunComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestPlanTestCaseTestRunComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'narrative';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setNarrativeElement(datatype);
    }

    fieldName = 'script';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TestPlanTestCaseTestRunScriptComponent | undefined = TestPlanTestCaseTestRunScriptComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setScript(component);
    }

    return instance;
  }

  /**
   * TestPlan.testCase.testRun.narrative Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The narrative description of the tests
   * - **Definition:** The narrative description of the tests.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private narrative?: MarkdownType | undefined;

  /**
   * TestPlan.testCase.testRun.script Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript
   * - **Definition:** The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private script?: TestPlanTestCaseTestRunScriptComponent | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `narrative` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getNarrativeElement(): MarkdownType {
    return this.narrative ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `narrative` property.
   *
   * @param element - the `narrative` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNarrativeElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid TestPlan.testCase.testRun.narrative; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.narrative = element;
    } else {
      this.narrative = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `narrative` property exists and has a value; `false` otherwise
   */
  public hasNarrativeElement(): boolean {
    return isDefined<MarkdownType>(this.narrative) && !this.narrative.isEmpty();
  }

  /**
   * @returns the `narrative` property value as a fhirMarkdown if defined; else undefined
   */
  public getNarrative(): fhirMarkdown | undefined {
    return this.narrative?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `narrative` property.
   *
   * @param value - the `narrative` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNarrative(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.testRun.narrative (${String(value)})`;
      this.narrative = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.narrative = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `narrative` property exists and has a value; `false` otherwise
   */
  public hasNarrative(): boolean {
    return this.hasNarrativeElement();
  }

  /**
   * @returns the `script` property value as a TestPlanTestCaseTestRunScriptComponent object if defined; else an empty TestPlanTestCaseTestRunScriptComponent object
   */
  public getScript(): TestPlanTestCaseTestRunScriptComponent {
    return this.script ?? new TestPlanTestCaseTestRunScriptComponent();
  }

  /**
   * Assigns the provided Script object value to the `script` property.
   *
   * @param value - the `script` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setScript(value: TestPlanTestCaseTestRunScriptComponent | undefined): this {
    if (isDefined<TestPlanTestCaseTestRunScriptComponent>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.testRun.script; Provided element is not an instance of TestPlanTestCaseTestRunScriptComponent.`;
      assertFhirType<TestPlanTestCaseTestRunScriptComponent>(value, TestPlanTestCaseTestRunScriptComponent, optErrMsg);
      this.script = value;
    } else {
      this.script = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `script` property exists and has a value; `false` otherwise
   */
  public hasScript(): boolean {
    return isDefined<TestPlanTestCaseTestRunScriptComponent>(this.script) && !this.script.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestPlan.testCase.testRun';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.narrative,
      this.script,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestPlanTestCaseTestRunComponent {
    const dest = new TestPlanTestCaseTestRunComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestPlanTestCaseTestRunComponent): void {
    super.copyValues(dest);
    dest.narrative = this.narrative?.copy();
    dest.script = this.script?.copy();
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

    if (this.hasNarrativeElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getNarrativeElement(), 'narrative', jsonObj);
    }

    if (this.hasScript()) {
      setFhirBackboneElementJson(this.getScript(), 'script', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestPlanTestCaseTestRunScriptComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript
 * - **Definition:** The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript.
 *
 * @category Data Models: Resource
 * @see [FHIR TestPlan](http://hl7.org/fhir/StructureDefinition/TestPlan)
 */
export class TestPlanTestCaseTestRunScriptComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TestPlanTestCaseTestRunScriptComponent` JSON to instantiate the TestPlanTestCaseTestRunScriptComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestPlanTestCaseTestRunScriptComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestPlanTestCaseTestRunScriptComponent
   * @returns TestPlanTestCaseTestRunScriptComponent data model or undefined for `TestPlanTestCaseTestRunScriptComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestPlanTestCaseTestRunScriptComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestPlanTestCaseTestRunScriptComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestPlanTestCaseTestRunScriptComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = TestPlanTestCaseTestRunScriptComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for TestPlanTestCaseTestRunScriptComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLanguage(datatype);
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

    return instance;
  }

  /**
   * TestPlan.testCase.testRun.script.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The language for the test cases e.g. \'gherkin\', \'testscript\'
   * - **Definition:** The language for the test cases e.g. \'gherkin\', \'testscript\'.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language?: CodeableConcept | undefined;

  /**
   * TestPlan.testCase.testRun.script.source[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('TestPlan.testCase.testRun.script.source[x]', ['string','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual content of the cases - references to TestScripts or externally defined content
   * - **Definition:** The actual content of the cases - references to TestScripts or externally defined content.
   * - **FHIR Types:**
   *     'string',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('TestPlan.testCase.testRun.script.source[x]',[
    'string',
    'Reference',
  ])
  private source?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `language` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getLanguage(): CodeableConcept {
    return this.language ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Language object value to the `language` property.
   *
   * @param value - the `language` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLanguage(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.testRun.script.language; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.language = value;
    } else {
      this.language = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguage(): boolean {
    return isDefined<CodeableConcept>(this.language) && !this.language.isEmpty();
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
   * @decorator `@ChoiceDataTypes('TestPlan.testCase.testRun.script.source[x]')`
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('TestPlan.testCase.testRun.script.source[x]')
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
   * @returns the `source` property value as a StringType object if defined; else undefined
   */
  public getSourceStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.source)) {
      return undefined;
    }
    if (!(this.source instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for TestPlan.testCase.testRun.script.source[x]: Expected StringType but encountered ${this.source.fhirType()}`,
      );
    }
    return this.source;
  }

  /**
   * @returns `true` if the `source` property exists as a StringType and has a value; `false` otherwise
   */
  public hasSourceStringType(): boolean {
    return this.hasSource() && this.source instanceof StringType;
  }

  /**
   * @returns the `source` property value as a Reference object if defined; else undefined
   */
  public getSourceReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.source)) {
      return undefined;
    }
    if (!(this.source instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for TestPlan.testCase.testRun.script.source[x]: Expected Reference but encountered ${this.source.fhirType()}`,
      );
    }
    return this.source;
  }

  /**
   * @returns `true` if the `source` property exists as a Reference and has a value; `false` otherwise
   */
  public hasSourceReference(): boolean {
    return this.hasSource() && this.source instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestPlan.testCase.testRun.script';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.language,
      this.source,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestPlanTestCaseTestRunScriptComponent {
    const dest = new TestPlanTestCaseTestRunScriptComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestPlanTestCaseTestRunScriptComponent): void {
    super.copyValues(dest);
    dest.language = this.language?.copy();
    dest.source = this.source?.copy() as IDataType;
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

    if (this.hasLanguage()) {
      setFhirComplexJson(this.getLanguage(), 'language', jsonObj);
    }

    if (this.hasSource()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSource()!, 'source', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestPlanTestCaseTestDataComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The test data used in the test case
 * - **Definition:** The test data used in the test case.
 *
 * @category Data Models: Resource
 * @see [FHIR TestPlan](http://hl7.org/fhir/StructureDefinition/TestPlan)
 */
export class TestPlanTestCaseTestDataComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: Coding | null = null) {
    super();

    this.type_ = null;
    if (isDefined<Coding>(type_)) {
      this.setType(type_);
    }
  }

  /**
   * Parse the provided `TestPlanTestCaseTestDataComponent` JSON to instantiate the TestPlanTestCaseTestDataComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestPlanTestCaseTestDataComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestPlanTestCaseTestDataComponent
   * @returns TestPlanTestCaseTestDataComponent data model or undefined for `TestPlanTestCaseTestDataComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestPlanTestCaseTestDataComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestPlanTestCaseTestDataComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestPlanTestCaseTestDataComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = TestPlanTestCaseTestDataComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for TestPlanTestCaseTestDataComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setType(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'content';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContent(datatype);
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

    return instance;
  }

  /**
   * TestPlan.testCase.testData.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of test data description, e.g. \'synthea\'
   * - **Definition:** The type of test data description, e.g. \'synthea\'.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_: Coding | null;

  /**
   * TestPlan.testCase.testData.content Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual test resources when they exist
   * - **Definition:** The actual test resources when they exist.
   * - **FHIR Type:** `Reference`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private content?: Reference | undefined;

  /**
   * TestPlan.testCase.testData.source[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('TestPlan.testCase.testData.source[x]', ['string','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc
   * - **Definition:** Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc.
   * - **FHIR Types:**
   *     'string',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('TestPlan.testCase.testData.source[x]',[
    'string',
    'Reference',
  ])
  private source?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a Coding object if defined; else an empty Coding object
   */
  public getType(): Coding {
    return this.type_ ?? new Coding();
  }

  /**
   * Assigns the provided Coding object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: Coding | undefined | null): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.testData.type; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = null;
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
   * @returns the `content` property value as a Reference object; else an empty Reference object
   */
  public getContent(): Reference {
    return this.content ?? new Reference();
  }

  /**
   * Assigns the provided Content object value to the `content` property.
   *
   * @decorator `@ReferenceTargets('TestPlan.testCase.testData.content', [])`
   *
   * @param value - the `content` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('TestPlan.testCase.testData.content', [])
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
   * @returns the `source` property value as a DataType object if defined; else undefined
   */
  public getSource(): IDataType | undefined {
    return this.source;
  }

  /**
   * Assigns the provided DataType object value to the `source` property.
   *
   * @decorator `@ChoiceDataTypes('TestPlan.testCase.testData.source[x]')`
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('TestPlan.testCase.testData.source[x]')
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
   * @returns the `source` property value as a StringType object if defined; else undefined
   */
  public getSourceStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.source)) {
      return undefined;
    }
    if (!(this.source instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for TestPlan.testCase.testData.source[x]: Expected StringType but encountered ${this.source.fhirType()}`,
      );
    }
    return this.source;
  }

  /**
   * @returns `true` if the `source` property exists as a StringType and has a value; `false` otherwise
   */
  public hasSourceStringType(): boolean {
    return this.hasSource() && this.source instanceof StringType;
  }

  /**
   * @returns the `source` property value as a Reference object if defined; else undefined
   */
  public getSourceReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.source)) {
      return undefined;
    }
    if (!(this.source instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for TestPlan.testCase.testData.source[x]: Expected Reference but encountered ${this.source.fhirType()}`,
      );
    }
    return this.source;
  }

  /**
   * @returns `true` if the `source` property exists as a Reference and has a value; `false` otherwise
   */
  public hasSourceReference(): boolean {
    return this.hasSource() && this.source instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestPlan.testCase.testData';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.content,
      this.source,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestPlanTestCaseTestDataComponent {
    const dest = new TestPlanTestCaseTestDataComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestPlanTestCaseTestDataComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.content = this.content?.copy();
    dest.source = this.source?.copy() as IDataType;
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

    if (this.hasContent()) {
      setFhirComplexJson(this.getContent(), 'content', jsonObj);
    }

    if (this.hasSource()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSource()!, 'source', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TestPlanTestCaseAssertionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Test assertions or expectations
 * - **Definition:** The test assertions - the expectations of test results from the execution of the test case.
 *
 * @category Data Models: Resource
 * @see [FHIR TestPlan](http://hl7.org/fhir/StructureDefinition/TestPlan)
 */
export class TestPlanTestCaseAssertionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TestPlanTestCaseAssertionComponent` JSON to instantiate the TestPlanTestCaseAssertionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TestPlanTestCaseAssertionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TestPlanTestCaseAssertionComponent
   * @returns TestPlanTestCaseAssertionComponent data model or undefined for `TestPlanTestCaseAssertionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TestPlanTestCaseAssertionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TestPlanTestCaseAssertionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TestPlanTestCaseAssertionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addType(datatype);
          }
        });
      }
    }

    fieldName = 'object';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addObject(datatype);
          }
        });
      }
    }

    fieldName = 'result';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addResult(datatype);
          }
        });
      }
    }

    return instance;
  }

  /**
   * TestPlan.testCase.assertion.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Assertion type - for example \'informative\' or \'required\' 
   * - **Definition:** The test assertion type - this can be used to group assertions as \'required\' or \'optional\', or can be used for other classification of the assertion.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * TestPlan.testCase.assertion.object Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The focus or object of the assertion
   * - **Definition:** The focus or object of the assertion i.e. a resource.
   * - **FHIR Type:** `CodeableReference`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private object?: CodeableReference[] | undefined;

  /**
   * TestPlan.testCase.assertion.result Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual result assertion
   * - **Definition:** The test assertion - the expected outcome from the test case execution.
   * - **FHIR Type:** `CodeableReference`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private result?: CodeableReference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a CodeableConcept array
   */
  public getType(): CodeableConcept[] {
    return this.type_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `type_` property.
   *
   * @param value - the `type_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.assertion.type; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `type_` array property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.assertion.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initType();
      this.type_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefinedList<CodeableConcept>(this.type_) && this.type_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `type_` property
   */
  private initType(): void {
    if(!this.hasType()) {
      this.type_ = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `object` property value as a CodeableReference array
   */
  public getObject(): CodeableReference[] {
    return this.object ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `object` property.
   *
   * @param value - the `object` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setObject(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.assertion.object; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.object = value;
    } else {
      this.object = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `object` array property.
   *
   * @param value - the `object` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addObject(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.assertion.object; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initObject();
      this.object?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `object` property exists and has a value; `false` otherwise
   */
  public hasObject(): boolean {
    return isDefinedList<CodeableReference>(this.object) && this.object.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `object` property
   */
  private initObject(): void {
    if(!this.hasObject()) {
      this.object = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `result` property value as a CodeableReference array
   */
  public getResult(): CodeableReference[] {
    return this.result ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `result` property.
   *
   * @param value - the `result` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResult(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.assertion.result; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.result = value;
    } else {
      this.result = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `result` array property.
   *
   * @param value - the `result` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addResult(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid TestPlan.testCase.assertion.result; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initResult();
      this.result?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResult(): boolean {
    return isDefinedList<CodeableReference>(this.result) && this.result.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `result` property
   */
  private initResult(): void {
    if(!this.hasResult()) {
      this.result = [] as CodeableReference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TestPlan.testCase.assertion';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.object,
      this.result,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TestPlanTestCaseAssertionComponent {
    const dest = new TestPlanTestCaseAssertionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TestPlanTestCaseAssertionComponent): void {
    super.copyValues(dest);
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    const objectList = copyListValues<CodeableReference>(this.object);
    dest.object = objectList.length === 0 ? undefined : objectList;
    const resultList = copyListValues<CodeableReference>(this.result);
    dest.result = resultList.length === 0 ? undefined : resultList;
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
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasObject()) {
      setFhirComplexListJson(this.getObject(), 'object', jsonObj);
    }

    if (this.hasResult()) {
      setFhirComplexListJson(this.getResult(), 'result', jsonObj);
    }

    return jsonObj;
  }
}
