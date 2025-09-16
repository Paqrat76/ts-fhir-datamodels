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
 * Questionnaire Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Questionnaire
 * StructureDefinition.name: Questionnaire
 * StructureDefinition.description: A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
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
  DateType,
  DecimalType,
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
  PrimitiveType,
  PrimitiveTypeJson,
  StringType,
  TimeType,
  UriType,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { ItemTypeEnum } from '../code-systems/ItemTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { QuestionnaireEnableBehaviorEnum } from '../code-systems/QuestionnaireEnableBehaviorEnum';
import { QuestionnaireEnableOperatorEnum } from '../code-systems/QuestionnaireEnableOperatorEnum';
import { ResourceTypesEnum } from '../code-systems/ResourceTypesEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Questionnaire Class
 *
 * @remarks
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 *
 * To support structured, hierarchical registration of data gathered using digital forms and other questionnaires.  Questionnaires provide greater control over presentation and allow capture of data in a domain-independent way (i.e. capturing information that would otherwise require multiple distinct types of resources).
 *
 * **FHIR Specification**
 * - **Short:** A structured set of questions
 * - **Definition:** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR Questionnaire](http://hl7.org/fhir/StructureDefinition/Questionnaire)
 */
export class Questionnaire extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.resourceTypesEnum = new ResourceTypesEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'Questionnaire.status',
    );
  }

  /**
   * Parse the provided `Questionnaire` JSON to instantiate the Questionnaire data model.
   *
   * @param sourceJson - JSON representing FHIR `Questionnaire`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Questionnaire
   * @returns Questionnaire data model or undefined for `Questionnaire`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Questionnaire | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Questionnaire';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Questionnaire();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Questionnaire');
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

    fieldName = 'subjectType';
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
            instance.addSubjectTypeElement(datatype);
          }
        });
      }
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

    fieldName = 'approvalDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setApprovalDateElement(datatype);
    }

    fieldName = 'lastReviewDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateType | undefined = fhirParser.parseDateType(dtJson, dtSiblingJson);
      instance.setLastReviewDateElement(datatype);
    }

    fieldName = 'effectivePeriod';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEffectivePeriod(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCode(datatype);
          }
        });
      }
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: QuestionnaireItemComponent | undefined = QuestionnaireItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addItem(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Questionnaire.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this questionnaire, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this questionnaire when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this questionnaire is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the questionnaire is stored on different servers.
   * - **Comment:** The name of the referenced questionnaire can be conveyed using the http://hl7.org/fhir/StructureDefinition/display extension.
   * - **Requirements:** ...  This is the id that will be used to link a QuestionnaireResponse to the Questionnaire the response is for.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * Questionnaire.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the questionnaire
   * - **Definition:** A formal identifier that is used to identify this questionnaire when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this questionnaire outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Questionnaire.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the questionnaire
   * - **Definition:** The identifier that is used to identify this version of the questionnaire when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the questionnaire author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different questionnaire instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the questionnaire with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * Questionnaire.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this questionnaire (computer friendly)
   * - **Definition:** A natural language name identifying the questionnaire. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * Questionnaire.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this questionnaire (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the questionnaire.
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * Questionnaire.derivedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instantiates protocol or definition
   * - **Definition:** The URL of a Questionnaire that this Questionnaire is based on.
   * - **Requirements:** Allows a Questionnaire to be created based on another Questionnaire.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Questionnaire',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private derivedFrom?: CanonicalType[] | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * Questionnaire.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this questionnaire. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of questionnaires that are appropriate for use versus not.
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
   * Questionnaire.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this questionnaire is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of questionnaires that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level questionnaire.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * FHIR CodeSystem: ResourceTypes
   *
   * @see {@link ResourceTypesEnum }
   */
  private readonly resourceTypesEnum: ResourceTypesEnum;

  /**
   * Questionnaire.subjectType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource that can be subject of QuestionnaireResponse
   * - **Definition:** The types of subjects that can be the subject of responses created for the questionnaire.
   * - **Comment:** If none are specified, then the subject is unlimited.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  private subjectType?: EnumCodeType[] | undefined;

  /**
   * Questionnaire.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the questionnaire was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the questionnaire changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the questionnaire. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * Questionnaire.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the questionnaire.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the questionnaire is the organization or individual primarily responsible for the maintenance and upkeep of the questionnaire. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the questionnaire. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the questionnaire.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * Questionnaire.contact Element
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
   * Questionnaire.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the questionnaire
   * - **Definition:** A free text natural language description of the questionnaire from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the questionnaire was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the questionnaire as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the questionnaire is presumed to be the predominant language in the place the questionnaire was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * Questionnaire.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate questionnaire instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * Questionnaire.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for questionnaire (if applicable)
   * - **Definition:** A legal or geographic region in which the questionnaire is intended to be used.
   * - **Comment:** It may be possible for the questionnaire to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * Questionnaire.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this questionnaire is defined
   * - **Definition:** Explanation of why this questionnaire is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the questionnaire. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this questionnaire.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * Questionnaire.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the questionnaire and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * Questionnaire.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the questionnaire was approved by publisher
   * - **Definition:** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The \'date\' element may be more recent than the approval date because of minor changes or editorial corrections.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * Questionnaire.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the questionnaire was last reviewed
   * - **Definition:** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
   * - **Comment:** If specified, this date follows the original approval date.
   * - **Requirements:** Gives a sense of how "current" the content is.  Resources that have not been reviewed in a long time may have a risk of being less appropriate/relevant.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastReviewDate?: DateType | undefined;

  /**
   * Questionnaire.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the questionnaire is expected to be used
   * - **Definition:** The period during which the questionnaire content was or is planned to be in active use.
   * - **Comment:** The effective period for a questionnaire  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   * - **Requirements:** Allows establishing a transition before a resource comes into effect and also allows for a sunsetting  process when new versions of the questionnaire are or are expected to be used instead.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectivePeriod?: Period | undefined;

  /**
   * Questionnaire.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Concept that represents the overall questionnaire
   * - **Definition:** An identifier for this question or group of questions in a particular terminology such as LOINC.
   * - **Requirements:** Allows linking of the complete Questionnaire resources to formal terminologies.  It\'s common for "panels" of questions to be identified by a code.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: Coding[] | undefined;

  /**
   * Questionnaire.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Questions and sections within the Questionnaire
   * - **Definition:** A particular question, question grouping or display text that is part of the questionnaire.
   * - **Comment:** The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: QuestionnaireItemComponent[] | undefined;

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
      const optErrMsg = `Invalid Questionnaire.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid Questionnaire.url (${String(value)})`;
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
      const optErrMsg = `Invalid Questionnaire.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Questionnaire.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Questionnaire.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Questionnaire.version (${String(value)})`;
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
      const optErrMsg = `Invalid Questionnaire.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Questionnaire.name (${String(value)})`;
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
      const optErrMsg = `Invalid Questionnaire.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Questionnaire.title (${String(value)})`;
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
      const optErrMsg = `Invalid Questionnaire.derivedFrom; Provided value array has an element that is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid Questionnaire.derivedFrom; Provided element is not an instance of CanonicalType.`;
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
        const optErrMsg = `Invalid Questionnaire.derivedFrom array item (${String(derivedFromValue)})`;
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
      const optErrMsg = `Invalid Questionnaire.derivedFrom array item (${String(value)})`;
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
      const errMsgPrefix = `Invalid Questionnaire.status`;
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
      const optErrMsg = `Invalid Questionnaire.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid Questionnaire.status (${String(value)})`;
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
      const optErrMsg = `Invalid Questionnaire.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid Questionnaire.experimental (${String(value)})`;
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
   * @returns the `subjectType` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getSubjectTypeEnumType(): EnumCodeType[] {
    return this.subjectType ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `subjectType` property.
   *
   * @param enumType - the `subjectType` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setSubjectTypeEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Questionnaire.subjectType`;
      assertEnumCodeTypeList<ResourceTypesEnum>(enumType, ResourceTypesEnum, errMsgPrefix);
      this.subjectType = enumType;
    } else {
      this.subjectType = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `subjectType` array property.
   *
   * @param enumType - the `subjectType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public addSubjectTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Questionnaire.subjectType`;
      assertEnumCodeType<ResourceTypesEnum>(enumType, ResourceTypesEnum, errMsgPrefix);
      this.initSubjectType();
      this.subjectType?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `subjectType` property exists and has a value; `false` otherwise
   */
  public hasSubjectTypeEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.subjectType) && this.subjectType.some((item: EnumCodeType) => !item.isEmpty()) && this.subjectType.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `subjectType` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getSubjectTypeElement(): CodeType[] {
    if (this.subjectType === undefined) {
      return [] as CodeType[];
    }
    return this.subjectType as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `subjectType` property.
   *
   * @param element - the `subjectType` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setSubjectTypeElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid Questionnaire.subjectType; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.resourceTypesEnum));
      });
      this.subjectType = enumCodeTypes;
    } else {
      this.subjectType = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `subjectType` array property.
   *
   * @param element - the `subjectType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public addSubjectTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Questionnaire.subjectType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initSubjectType();
      this.subjectType?.push(new EnumCodeType(element, this.resourceTypesEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `subjectType` property exists and has a value; `false` otherwise
   */
  public hasSubjectTypeElement(): boolean {
    return this.hasSubjectTypeEnumType();
  }

  /**
   * @returns the `subjectType` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getSubjectType(): fhirCode[] {
    if (this.subjectType === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.subjectType) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `subjectType` property.
   *
   * @param value - the `subjectType` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setSubjectType(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid Questionnaire.subjectType; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.resourceTypesEnum));
      });
      this.subjectType = enumCodeTypes;
    } else {
      this.subjectType = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `subjectType` array property.
   *
   * @param value - the `subjectType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public addSubjectType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initSubjectType();
      const optErrMsg = `Invalid Questionnaire.subjectType; Provided value is not an instance of fhirCode.`;
      this.subjectType?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.resourceTypesEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `subjectType` property exists and has a value; `false` otherwise
   */
  public hasSubjectType(): boolean {
    return this.hasSubjectTypeEnumType();
  }

  /**
   * Initialize the subjectType property
   */
  private initSubjectType(): void {
    if(!this.hasSubjectTypeEnumType()) {
      this.subjectType = [] as EnumCodeType[];
    }
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
      const optErrMsg = `Invalid Questionnaire.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid Questionnaire.date (${String(value)})`;
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
      const optErrMsg = `Invalid Questionnaire.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Questionnaire.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid Questionnaire.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Questionnaire.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Questionnaire.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Questionnaire.description (${String(value)})`;
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
      const optErrMsg = `Invalid Questionnaire.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid Questionnaire.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid Questionnaire.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Questionnaire.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Questionnaire.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Questionnaire.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid Questionnaire.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Questionnaire.copyright (${String(value)})`;
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
   * @returns the `approvalDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getApprovalDateElement(): DateType {
    return this.approvalDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `approvalDate` property.
   *
   * @param element - the `approvalDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setApprovalDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid Questionnaire.approvalDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.approvalDate = element;
    } else {
      this.approvalDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `approvalDate` property exists and has a value; `false` otherwise
   */
  public hasApprovalDateElement(): boolean {
    return isDefined<DateType>(this.approvalDate) && !this.approvalDate.isEmpty();
  }

  /**
   * @returns the `approvalDate` property value as a fhirDate if defined; else undefined
   */
  public getApprovalDate(): fhirDate | undefined {
    return this.approvalDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `approvalDate` property.
   *
   * @param value - the `approvalDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setApprovalDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid Questionnaire.approvalDate (${String(value)})`;
      this.approvalDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.approvalDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `approvalDate` property exists and has a value; `false` otherwise
   */
  public hasApprovalDate(): boolean {
    return this.hasApprovalDateElement();
  }

  /**
   * @returns the `lastReviewDate` property value as a DateType object if defined; else an empty DateType object
   */
  public getLastReviewDateElement(): DateType {
    return this.lastReviewDate ?? new DateType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lastReviewDate` property.
   *
   * @param element - the `lastReviewDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastReviewDateElement(element: DateType | undefined): this {
    if (isDefined<DateType>(element)) {
      const optErrMsg = `Invalid Questionnaire.lastReviewDate; Provided element is not an instance of DateType.`;
      assertFhirType<DateType>(element, DateType, optErrMsg);
      this.lastReviewDate = element;
    } else {
      this.lastReviewDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastReviewDate` property exists and has a value; `false` otherwise
   */
  public hasLastReviewDateElement(): boolean {
    return isDefined<DateType>(this.lastReviewDate) && !this.lastReviewDate.isEmpty();
  }

  /**
   * @returns the `lastReviewDate` property value as a fhirDate if defined; else undefined
   */
  public getLastReviewDate(): fhirDate | undefined {
    return this.lastReviewDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lastReviewDate` property.
   *
   * @param value - the `lastReviewDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLastReviewDate(value: fhirDate | undefined): this {
    if (isDefined<fhirDate>(value)) {
      const optErrMsg = `Invalid Questionnaire.lastReviewDate (${String(value)})`;
      this.lastReviewDate = new DateType(parseFhirPrimitiveData(value, fhirDateSchema, optErrMsg));
    } else {
      this.lastReviewDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lastReviewDate` property exists and has a value; `false` otherwise
   */
  public hasLastReviewDate(): boolean {
    return this.hasLastReviewDateElement();
  }

  /**
   * @returns the `effectivePeriod` property value as a Period object if defined; else an empty Period object
   */
  public getEffectivePeriod(): Period {
    return this.effectivePeriod ?? new Period();
  }

  /**
   * Assigns the provided EffectivePeriod object value to the `effectivePeriod` property.
   *
   * @param value - the `effectivePeriod` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEffectivePeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid Questionnaire.effectivePeriod; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.effectivePeriod = value;
    } else {
      this.effectivePeriod = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `effectivePeriod` property exists and has a value; `false` otherwise
   */
  public hasEffectivePeriod(): boolean {
    return isDefined<Period>(this.effectivePeriod) && !this.effectivePeriod.isEmpty();
  }

  /**
   * @returns the `code` property value as a Coding array
   */
  public getCode(): Coding[] {
    return this.code ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Questionnaire.code; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Questionnaire.code; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<Coding>(this.code) && this.code.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as Coding[];
    }
  }

  /**
   * @returns the `item` property value as a QuestionnaireItemComponent array
   */
  public getItem(): QuestionnaireItemComponent[] {
    return this.item ?? ([] as QuestionnaireItemComponent[]);
  }

  /**
   * Assigns the provided QuestionnaireItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: QuestionnaireItemComponent[] | undefined): this {
    if (isDefinedList<QuestionnaireItemComponent>(value)) {
      const optErrMsg = `Invalid Questionnaire.item; Provided value array has an element that is not an instance of QuestionnaireItemComponent.`;
      assertFhirTypeList<QuestionnaireItemComponent>(value, QuestionnaireItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided QuestionnaireItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: QuestionnaireItemComponent | undefined): this {
    if (isDefined<QuestionnaireItemComponent>(value)) {
      const optErrMsg = `Invalid Questionnaire.item; Provided element is not an instance of QuestionnaireItemComponent.`;
      assertFhirType<QuestionnaireItemComponent>(value, QuestionnaireItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<QuestionnaireItemComponent>(this.item) && this.item.some((item: QuestionnaireItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as QuestionnaireItemComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Questionnaire';
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
      this.derivedFrom,
      this.status,
      this.experimental,
      this.subjectType,
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.useContext,
      this.jurisdiction,
      this.purpose,
      this.copyright,
      this.approvalDate,
      this.lastReviewDate,
      this.effectivePeriod,
      this.code,
      this.item,
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
  public override copy(): Questionnaire {
    const dest = new Questionnaire();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Questionnaire): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    const derivedFromList = copyListValues<CanonicalType>(this.derivedFrom);
    dest.derivedFrom = derivedFromList.length === 0 ? undefined : derivedFromList;
    dest.status = this.status ? this.status.copy() : null;
    dest.experimental = this.experimental?.copy();
    const subjectTypeList = copyListValues<EnumCodeType>(this.subjectType);
    dest.subjectType = subjectTypeList.length === 0 ? undefined : subjectTypeList;
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
    dest.approvalDate = this.approvalDate?.copy();
    dest.lastReviewDate = this.lastReviewDate?.copy();
    dest.effectivePeriod = this.effectivePeriod?.copy();
    const codeList = copyListValues<Coding>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    const itemList = copyListValues<QuestionnaireItemComponent>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasDerivedFrom()) {
      setFhirPrimitiveListJson(this.getDerivedFromElement(), 'derivedFrom', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasExperimentalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExperimentalElement(), 'experimental', jsonObj);
    }

    if (this.hasSubjectTypeElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getSubjectTypeElement(), 'subjectType', jsonObj);
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

    if (this.hasApprovalDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getApprovalDateElement(), 'approvalDate', jsonObj);
    }

    if (this.hasLastReviewDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getLastReviewDateElement(), 'lastReviewDate', jsonObj);
    }

    if (this.hasEffectivePeriod()) {
      setFhirComplexJson(this.getEffectivePeriod(), 'effectivePeriod', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasItem()) {
      setFhirBackboneElementListJson(this.getItem(), 'item', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * QuestionnaireItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Questions and sections within the Questionnaire
 * - **Definition:** A particular question, question grouping or display text that is part of the questionnaire.
 * - **Comment:** The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
 *
 * @category Data Models: Resource
 * @see [FHIR Questionnaire](http://hl7.org/fhir/StructureDefinition/Questionnaire)
 */
export class QuestionnaireItemComponent extends BackboneElement implements IBackboneElement {
  constructor(linkId: StringType | fhirString | null = null, type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.itemTypeEnum = new ItemTypeEnum();
    this.questionnaireEnableBehaviorEnum = new QuestionnaireEnableBehaviorEnum();

    this.linkId = null;
    if (isDefined<StringType | fhirString>(linkId)) {
      if (linkId instanceof PrimitiveType) {
        this.setLinkIdElement(linkId);
      } else {
        this.setLinkId(linkId);
      }
    }

    this.type_ = constructorCodeValueAsEnumCodeType<ItemTypeEnum>(
      type_,
      ItemTypeEnum,
      this.itemTypeEnum,
      'Questionnaire.item.type',
    );
  }

  /**
   * Parse the provided `QuestionnaireItemComponent` JSON to instantiate the QuestionnaireItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `QuestionnaireItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to QuestionnaireItemComponent
   * @returns QuestionnaireItemComponent data model or undefined for `QuestionnaireItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): QuestionnaireItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'QuestionnaireItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new QuestionnaireItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'linkId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setLinkId(null);
      } else {
        instance.setLinkIdElement(datatype);
      }
    } else {
      instance.setLinkId(null);
    }

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setDefinitionElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addCode(datatype);
          }
        });
      }
    }

    fieldName = 'prefix';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPrefixElement(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'enableWhen';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: QuestionnaireItemEnableWhenComponent | undefined = QuestionnaireItemEnableWhenComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addEnableWhen(component);
          }
        });
      }
    }

    fieldName = 'enableBehavior';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setEnableBehaviorElement(datatype);
    }

    fieldName = 'required';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setRequiredElement(datatype);
    }

    fieldName = 'repeats';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setRepeatsElement(datatype);
    }

    fieldName = 'readOnly';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setReadOnlyElement(datatype);
    }

    fieldName = 'maxLength';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setMaxLengthElement(datatype);
    }

    fieldName = 'answerValueSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setAnswerValueSetElement(datatype);
    }

    fieldName = 'answerOption';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: QuestionnaireItemAnswerOptionComponent | undefined = QuestionnaireItemAnswerOptionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAnswerOption(component);
          }
        });
      }
    }

    fieldName = 'initial';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: QuestionnaireItemInitialComponent | undefined = QuestionnaireItemInitialComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addInitial(component);
          }
        });
      }
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: QuestionnaireItemComponent | undefined = QuestionnaireItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addItem(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Questionnaire.item.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique id for item in questionnaire
   * - **Definition:** An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource.
   * - **Comment:** This \'\'can\'\' be a meaningful identifier (e.g. a LOINC code) but is not intended to have any meaning.  GUIDs or sequential numbers are appropriate here.
   * - **Requirements:** [QuestionnaireResponse](https://hl7.org/fhir/questionnaireresponse.html#) does not require omitted items to be included and may have some items that repeat, so linkage based on position alone is not sufficient.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId: StringType | null;

  /**
   * Questionnaire.item.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** ElementDefinition - details for the item
   * - **Definition:** This element is a URI that refers to an [ElementDefinition](https://hl7.org/fhir/elementdefinition.html) that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in Comments, below. If this element is present then the following element values MAY be derived from the Element Definition if the corresponding elements of this Questionnaire resource instance have no value: * code (ElementDefinition.code)  * type (ElementDefinition.type)  * required (ElementDefinition.min)  * repeats (ElementDefinition.max)  * maxLength (ElementDefinition.maxLength)  * answerValueSet (ElementDefinition.binding) * options (ElementDefinition.binding).
   * - **Comment:** The uri refers to an ElementDefinition in a [StructureDefinition](https://hl7.org/fhir/structuredefinition.html#) and always starts with the [canonical URL](https://hl7.org/fhir/references.html#canonical) for the target resource. When referring to a StructureDefinition, a fragment identifier is used to specify the element definition by its id [Element.id](https://hl7.org/fhir/element-definitions.html#Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x]. In the absence of a fragment identifier, the first/root element definition in the target is the matching element definition.
   * - **Requirements:** A common pattern is to define a set of data elements and then build multiple questionnaires for different circumstances to gather the data. This element provides traceability to the common definition and allows the content for the question to come from the underlying definition.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definition?: UriType | undefined;

  /**
   * Questionnaire.item.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Corresponding concept for this item in a terminology
   * - **Definition:** A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers).
   * - **Comment:** The value may come from the ElementDefinition referred to by .definition.
   * - **Requirements:** Allows linking of groups of questions to formal terminologies.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: Coding[] | undefined;

  /**
   * Questionnaire.item.prefix Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. "1(a)", "2.5.3"
   * - **Definition:** A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire.
   * - **Comment:** These are generally unique within a questionnaire, though this is not guaranteed. Some questionnaires may have multiple questions with the same label with logic to control which gets exposed.  Typically, these won\'t be used for "display" items, though such use is not prohibited.  Systems SHOULD NOT generate their own prefixes if prefixes are defined for any items within a Questionnaire.
   * - **Requirements:** Separating the label from the question text allows improved rendering.  Also, instructions will often refer to specific prefixes, so there\'s a need for the questionnaire design to have control over what labels are used.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private prefix?: StringType | undefined;

  /**
   * Questionnaire.item.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Primary text for the item
   * - **Definition:** The name of a section, the text of a question or text content for a display item.
   * - **Comment:** When using this element to represent the name of a section, use group type item and also make sure to limit the text element to a short string suitable for display as a section heading.  Group item instructions should be included as a display type item within the group.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: StringType | undefined;

  /**
   * FHIR CodeSystem: ItemType
   *
   * @see {@link ItemTypeEnum }
   */
  private readonly itemTypeEnum: ItemTypeEnum;

  /**
   * Questionnaire.item.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** group | display | boolean | decimal | integer | date | dateTime +
   * - **Definition:** The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.).
   * - **Comment:** Additional constraints on the type of answer can be conveyed by extensions. The value may come from the ElementDefinition referred to by .definition.
   * - **Requirements:** Defines the format in which the user is to be prompted for the answer.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ItemTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * Questionnaire.item.enableWhen Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Only allow data when
   * - **Definition:** A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.
   * - **Comment:** If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
   * - **Requirements:** Allows questionnaires to adapt based on answers to other questions. E.g. If physical gender is specified as a male, no need to capture pregnancy history.  Also allows conditional display of instructions or groups of questions.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** true
   * - **isModifierReason:** If enableWhen is present and the condition evaluates to false, then the Questionnaire behaves as though the elements weren\&#x27;t actually present
   * - **isSummary:** false
   */
  private enableWhen?: QuestionnaireItemEnableWhenComponent[] | undefined;

  /**
   * FHIR CodeSystem: QuestionnaireEnableBehavior
   *
   * @see {@link QuestionnaireEnableBehaviorEnum }
   */
  private readonly questionnaireEnableBehaviorEnum: QuestionnaireEnableBehaviorEnum;

  /**
   * Questionnaire.item.enableBehavior Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** all | any
   * - **Definition:** Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
   * - **Comment:** This element must be specified if more than one enableWhen value is provided.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableBehaviorEnum }
   */
  private enableBehavior?: EnumCodeType | undefined;

  /**
   * Questionnaire.item.required Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the item must be included in data results
   * - **Definition:** An indication, if true, that the item must be present in a "completed" QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire.
   * - **Comment:** Questionnaire.item.required only has meaning for elements that are conditionally enabled with enableWhen if the condition evaluates to true.  If an item that contains other items is marked as required, that does not automatically make the contained elements required (though required groups must contain at least one child element). The value may come from the ElementDefinition referred to by .definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private required?: BooleanType | undefined;

  /**
   * Questionnaire.item.repeats Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the item may repeat
   * - **Definition:** An indication, if true, that the item may occur multiple times in the response, collecting multiple answers for questions or multiple sets of answers for groups.
   * - **Comment:** If a question is marked as repeats=true, then multiple answers can be provided for the question in the corresponding QuestionnaireResponse.  When rendering the questionnaire, it is up to the rendering software whether to render the question text for each answer repetition (i.e. "repeat the question") or to simply allow entry/selection of multiple answers for the question (repeat the answers).  Which is most appropriate visually may depend on the type of answer as well as whether there are nested items. The resulting QuestionnaireResponse will be populated the same way regardless of rendering - one \'question\' item with multiple answer values.  The value may come from the ElementDefinition referred to by .definition.
   * - **Requirements:** Items may be used to create set of (related) questions that can be repeated to give multiple answers to such a set.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private repeats?: BooleanType | undefined;

  /**
   * Questionnaire.item.readOnly Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Don\'t allow human editing
   * - **Definition:** An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire.
   * - **Comment:** The value of readOnly elements can be established by asserting  extensions for defaultValues, linkages that support pre-population and/or extensions that support calculation based on other answers.
   * - **Requirements:** Allows certain information to be phrased (and rendered) as a question and an answer, while keeping users from changing it.  May also be useful for preventing changes to pre-populated portions of a questionnaire, for calculated values, etc.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private readOnly?: BooleanType | undefined;

  /**
   * Questionnaire.item.maxLength Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** No more than this many characters
   * - **Definition:** The maximum number of characters that are permitted in the answer to be considered a "valid" QuestionnaireResponse.
   * - **Comment:** For base64binary, reflects the number of characters representing the encoded data, not the number of bytes of the binary data. The value may come from the ElementDefinition referred to by .definition.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private maxLength?: IntegerType | undefined;

  /**
   * Questionnaire.item.answerValueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Valueset containing permitted answers
   * - **Definition:** A reference to a value set containing a list of codes representing permitted answers for a "choice" or "open-choice" question.
   * - **Comment:** LOINC defines many useful value sets for questionnaire responses. See [LOINC Answer Lists](https://hl7.org/fhir/loinc.html#alist). The value may come from the ElementDefinition referred to by .definition.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private answerValueSet?: CanonicalType | undefined;

  /**
   * Questionnaire.item.answerOption Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Permitted answer
   * - **Definition:** One of the permitted answers for a "choice" or "open-choice" question.
   * - **Comment:** This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there\'s a need to capture possible answers that are not codes.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private answerOption?: QuestionnaireItemAnswerOptionComponent[] | undefined;

  /**
   * Questionnaire.item.initial Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Initial value(s) when item is first rendered
   * - **Definition:** One or more values that should be pre-populated in the answer when initially rendering the questionnaire for user input.
   * - **Comment:** The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn\'t change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
   * - **Requirements:** In some workflows, having defaults saves time.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private initial?: QuestionnaireItemInitialComponent[] | undefined;

  /**
   * Questionnaire.item.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Nested questionnaire items
   * - **Definition:** Text, questions and other groups to be nested beneath a question or group.
   * - **Comment:** There is no specified limit to the depth of nesting.  However, Questionnaire authors are encouraged to consider the impact on the user and user interface of overly deep nesting.
   * - **Requirements:** Reports can consist of complex nested groups.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: QuestionnaireItemComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `linkId` property value as a StringType object if defined; else an empty StringType object
   */
  public getLinkIdElement(): StringType {
    return this.linkId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `linkId` property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.linkId; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefined<StringType>(this.linkId) && !this.linkId.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a fhirString if defined; else null
   */
  public getLinkId(): fhirString | null {
    if (this.linkId?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.linkId.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `linkId` property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.linkId (${String(value)})`;
      this.linkId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.linkId = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
  }

  /**
   * @returns the `definition` property value as a UriType object if defined; else an empty UriType object
   */
  public getDefinitionElement(): UriType {
    return this.definition ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `definition` property.
   *
   * @param element - the `definition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.definition; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.definition = element;
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinitionElement(): boolean {
    return isDefined<UriType>(this.definition) && !this.definition.isEmpty();
  }

  /**
   * @returns the `definition` property value as a fhirUri if defined; else undefined
   */
  public getDefinition(): fhirUri | undefined {
    return this.definition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `definition` property.
   *
   * @param value - the `definition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinition(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.definition (${String(value)})`;
      this.definition = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinition(): boolean {
    return this.hasDefinitionElement();
  }

  /**
   * @returns the `code` property value as a Coding array
   */
  public getCode(): Coding[] {
    return this.code ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.code; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.code; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<Coding>(this.code) && this.code.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as Coding[];
    }
  }

  /**
   * @returns the `prefix` property value as a StringType object if defined; else an empty StringType object
   */
  public getPrefixElement(): StringType {
    return this.prefix ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `prefix` property.
   *
   * @param element - the `prefix` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrefixElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.prefix; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.prefix = element;
    } else {
      this.prefix = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `prefix` property exists and has a value; `false` otherwise
   */
  public hasPrefixElement(): boolean {
    return isDefined<StringType>(this.prefix) && !this.prefix.isEmpty();
  }

  /**
   * @returns the `prefix` property value as a fhirString if defined; else undefined
   */
  public getPrefix(): fhirString | undefined {
    return this.prefix?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `prefix` property.
   *
   * @param value - the `prefix` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrefix(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.prefix (${String(value)})`;
      this.prefix = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.prefix = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `prefix` property exists and has a value; `false` otherwise
   */
  public hasPrefix(): boolean {
    return this.hasPrefixElement();
  }

  /**
   * @returns the `text` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextElement(): StringType {
    return this.text ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.text; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.text = element;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else undefined
   */
  public getText(): fhirString | undefined {
    return this.text?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.text (${String(value)})`;
      this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ItemTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ItemTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Questionnaire.item.type`;
      assertEnumCodeType<ItemTypeEnum>(enumType, ItemTypeEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = null;
    }
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
   * @see CodeSystem Enumeration: {@link ItemTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ItemTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.itemTypeEnum);
    } else {
      this.type_ = null;
    }
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
   * @see CodeSystem Enumeration: {@link ItemTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ItemTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.itemTypeEnum);
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `enableWhen` property value as a QuestionnaireItemEnableWhenComponent array
   */
  public getEnableWhen(): QuestionnaireItemEnableWhenComponent[] {
    return this.enableWhen ?? ([] as QuestionnaireItemEnableWhenComponent[]);
  }

  /**
   * Assigns the provided QuestionnaireItemEnableWhenComponent array value to the `enableWhen` property.
   *
   * @param value - the `enableWhen` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEnableWhen(value: QuestionnaireItemEnableWhenComponent[] | undefined): this {
    if (isDefinedList<QuestionnaireItemEnableWhenComponent>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.enableWhen; Provided value array has an element that is not an instance of QuestionnaireItemEnableWhenComponent.`;
      assertFhirTypeList<QuestionnaireItemEnableWhenComponent>(value, QuestionnaireItemEnableWhenComponent, optErrMsg);
      this.enableWhen = value;
    } else {
      this.enableWhen = undefined;
    }
    return this;
  }

  /**
   * Add the provided QuestionnaireItemEnableWhenComponent value to the `enableWhen` array property.
   *
   * @param value - the `enableWhen` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEnableWhen(value: QuestionnaireItemEnableWhenComponent | undefined): this {
    if (isDefined<QuestionnaireItemEnableWhenComponent>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.enableWhen; Provided element is not an instance of QuestionnaireItemEnableWhenComponent.`;
      assertFhirType<QuestionnaireItemEnableWhenComponent>(value, QuestionnaireItemEnableWhenComponent, optErrMsg);
      this.initEnableWhen();
      this.enableWhen?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `enableWhen` property exists and has a value; `false` otherwise
   */
  public hasEnableWhen(): boolean {
    return isDefinedList<QuestionnaireItemEnableWhenComponent>(this.enableWhen) && this.enableWhen.some((item: QuestionnaireItemEnableWhenComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `enableWhen` property
   */
  private initEnableWhen(): void {
    if(!this.hasEnableWhen()) {
      this.enableWhen = [] as QuestionnaireItemEnableWhenComponent[];
    }
  }

  /**
   * @returns the `enableBehavior` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableBehaviorEnum }
   */
  public getEnableBehaviorEnumType(): EnumCodeType | undefined {
    return this.enableBehavior;
  }

  /**
   * Assigns the provided EnumCodeType value to the `enableBehavior` property.
   *
   * @param enumType - the `enableBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableBehaviorEnum }
   */
  public setEnableBehaviorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Questionnaire.item.enableBehavior';
      assertEnumCodeType<QuestionnaireEnableBehaviorEnum>(enumType, QuestionnaireEnableBehaviorEnum, errMsgPrefix);
      this.enableBehavior = enumType;
    } else {
      this.enableBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `enableBehavior` property exists and has a value; `false` otherwise
   */
  public hasEnableBehaviorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.enableBehavior) && !this.enableBehavior.isEmpty() && this.enableBehavior.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `enableBehavior` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableBehaviorEnum }
   */
  public getEnableBehaviorElement(): CodeType | undefined {
    if (this.enableBehavior === undefined) {
      return undefined;
    }
    return this.enableBehavior as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `enableBehavior` property.
   *
   * @param element - the `enableBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableBehaviorEnum }
   */
  public setEnableBehaviorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.enableBehavior; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.enableBehavior = new EnumCodeType(element, this.questionnaireEnableBehaviorEnum);
    } else {
      this.enableBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `enableBehavior` property exists and has a value; `false` otherwise
   */
  public hasEnableBehaviorElement(): boolean {
    return this.hasEnableBehaviorEnumType();
  }

  /**
   * @returns the `enableBehavior` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableBehaviorEnum }
   */
  public getEnableBehavior(): fhirCode | undefined {
    if (this.enableBehavior === undefined) {
      return undefined;
    }
    return this.enableBehavior.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `enableBehavior` property.
   *
   * @param value - the `enableBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableBehaviorEnum }
   */
  public setEnableBehavior(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.enableBehavior; Provided value is not an instance of fhirCode.`;
      this.enableBehavior = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.questionnaireEnableBehaviorEnum);
    } else {
      this.enableBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `enableBehavior` property exists and has a value; `false` otherwise
   */
  public hasEnableBehavior(): boolean {
    return this.hasEnableBehaviorEnumType();
  }

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
  public setRequiredElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.required; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.required = element;
    } else {
      this.required = undefined;
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
   * @returns the `required` property value as a fhirBoolean if defined; else undefined
   */
  public getRequired(): fhirBoolean | undefined {
    return this.required?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `required` property.
   *
   * @param value - the `required` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequired(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.required (${String(value)})`;
      this.required = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.required = undefined;
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
   * @returns the `repeats` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getRepeatsElement(): BooleanType {
    return this.repeats ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `repeats` property.
   *
   * @param element - the `repeats` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepeatsElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.repeats; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.repeats = element;
    } else {
      this.repeats = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `repeats` property exists and has a value; `false` otherwise
   */
  public hasRepeatsElement(): boolean {
    return isDefined<BooleanType>(this.repeats) && !this.repeats.isEmpty();
  }

  /**
   * @returns the `repeats` property value as a fhirBoolean if defined; else undefined
   */
  public getRepeats(): fhirBoolean | undefined {
    return this.repeats?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `repeats` property.
   *
   * @param value - the `repeats` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRepeats(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.repeats (${String(value)})`;
      this.repeats = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.repeats = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `repeats` property exists and has a value; `false` otherwise
   */
  public hasRepeats(): boolean {
    return this.hasRepeatsElement();
  }

  /**
   * @returns the `readOnly` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getReadOnlyElement(): BooleanType {
    return this.readOnly ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `readOnly` property.
   *
   * @param element - the `readOnly` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReadOnlyElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.readOnly; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.readOnly = element;
    } else {
      this.readOnly = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `readOnly` property exists and has a value; `false` otherwise
   */
  public hasReadOnlyElement(): boolean {
    return isDefined<BooleanType>(this.readOnly) && !this.readOnly.isEmpty();
  }

  /**
   * @returns the `readOnly` property value as a fhirBoolean if defined; else undefined
   */
  public getReadOnly(): fhirBoolean | undefined {
    return this.readOnly?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `readOnly` property.
   *
   * @param value - the `readOnly` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReadOnly(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.readOnly (${String(value)})`;
      this.readOnly = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.readOnly = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `readOnly` property exists and has a value; `false` otherwise
   */
  public hasReadOnly(): boolean {
    return this.hasReadOnlyElement();
  }

  /**
   * @returns the `maxLength` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getMaxLengthElement(): IntegerType {
    return this.maxLength ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `maxLength` property.
   *
   * @param element - the `maxLength` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMaxLengthElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.maxLength; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.maxLength = element;
    } else {
      this.maxLength = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxLength` property exists and has a value; `false` otherwise
   */
  public hasMaxLengthElement(): boolean {
    return isDefined<IntegerType>(this.maxLength) && !this.maxLength.isEmpty();
  }

  /**
   * @returns the `maxLength` property value as a fhirInteger if defined; else undefined
   */
  public getMaxLength(): fhirInteger | undefined {
    return this.maxLength?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `maxLength` property.
   *
   * @param value - the `maxLength` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMaxLength(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.maxLength (${String(value)})`;
      this.maxLength = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.maxLength = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxLength` property exists and has a value; `false` otherwise
   */
  public hasMaxLength(): boolean {
    return this.hasMaxLengthElement();
  }

  /**
   * @returns the `answerValueSet` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getAnswerValueSetElement(): CanonicalType {
    return this.answerValueSet ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `answerValueSet` property.
   *
   * @param element - the `answerValueSet` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAnswerValueSetElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.answerValueSet; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.answerValueSet = element;
    } else {
      this.answerValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `answerValueSet` property exists and has a value; `false` otherwise
   */
  public hasAnswerValueSetElement(): boolean {
    return isDefined<CanonicalType>(this.answerValueSet) && !this.answerValueSet.isEmpty();
  }

  /**
   * @returns the `answerValueSet` property value as a fhirCanonical if defined; else undefined
   */
  public getAnswerValueSet(): fhirCanonical | undefined {
    return this.answerValueSet?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `answerValueSet` property.
   *
   * @param value - the `answerValueSet` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAnswerValueSet(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.answerValueSet (${String(value)})`;
      this.answerValueSet = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.answerValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `answerValueSet` property exists and has a value; `false` otherwise
   */
  public hasAnswerValueSet(): boolean {
    return this.hasAnswerValueSetElement();
  }

  /**
   * @returns the `answerOption` property value as a QuestionnaireItemAnswerOptionComponent array
   */
  public getAnswerOption(): QuestionnaireItemAnswerOptionComponent[] {
    return this.answerOption ?? ([] as QuestionnaireItemAnswerOptionComponent[]);
  }

  /**
   * Assigns the provided QuestionnaireItemAnswerOptionComponent array value to the `answerOption` property.
   *
   * @param value - the `answerOption` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAnswerOption(value: QuestionnaireItemAnswerOptionComponent[] | undefined): this {
    if (isDefinedList<QuestionnaireItemAnswerOptionComponent>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.answerOption; Provided value array has an element that is not an instance of QuestionnaireItemAnswerOptionComponent.`;
      assertFhirTypeList<QuestionnaireItemAnswerOptionComponent>(value, QuestionnaireItemAnswerOptionComponent, optErrMsg);
      this.answerOption = value;
    } else {
      this.answerOption = undefined;
    }
    return this;
  }

  /**
   * Add the provided QuestionnaireItemAnswerOptionComponent value to the `answerOption` array property.
   *
   * @param value - the `answerOption` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAnswerOption(value: QuestionnaireItemAnswerOptionComponent | undefined): this {
    if (isDefined<QuestionnaireItemAnswerOptionComponent>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.answerOption; Provided element is not an instance of QuestionnaireItemAnswerOptionComponent.`;
      assertFhirType<QuestionnaireItemAnswerOptionComponent>(value, QuestionnaireItemAnswerOptionComponent, optErrMsg);
      this.initAnswerOption();
      this.answerOption?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `answerOption` property exists and has a value; `false` otherwise
   */
  public hasAnswerOption(): boolean {
    return isDefinedList<QuestionnaireItemAnswerOptionComponent>(this.answerOption) && this.answerOption.some((item: QuestionnaireItemAnswerOptionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `answerOption` property
   */
  private initAnswerOption(): void {
    if(!this.hasAnswerOption()) {
      this.answerOption = [] as QuestionnaireItemAnswerOptionComponent[];
    }
  }

  /**
   * @returns the `initial` property value as a QuestionnaireItemInitialComponent array
   */
  public getInitial(): QuestionnaireItemInitialComponent[] {
    return this.initial ?? ([] as QuestionnaireItemInitialComponent[]);
  }

  /**
   * Assigns the provided QuestionnaireItemInitialComponent array value to the `initial` property.
   *
   * @param value - the `initial` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInitial(value: QuestionnaireItemInitialComponent[] | undefined): this {
    if (isDefinedList<QuestionnaireItemInitialComponent>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.initial; Provided value array has an element that is not an instance of QuestionnaireItemInitialComponent.`;
      assertFhirTypeList<QuestionnaireItemInitialComponent>(value, QuestionnaireItemInitialComponent, optErrMsg);
      this.initial = value;
    } else {
      this.initial = undefined;
    }
    return this;
  }

  /**
   * Add the provided QuestionnaireItemInitialComponent value to the `initial` array property.
   *
   * @param value - the `initial` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInitial(value: QuestionnaireItemInitialComponent | undefined): this {
    if (isDefined<QuestionnaireItemInitialComponent>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.initial; Provided element is not an instance of QuestionnaireItemInitialComponent.`;
      assertFhirType<QuestionnaireItemInitialComponent>(value, QuestionnaireItemInitialComponent, optErrMsg);
      this.initInitial();
      this.initial?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `initial` property exists and has a value; `false` otherwise
   */
  public hasInitial(): boolean {
    return isDefinedList<QuestionnaireItemInitialComponent>(this.initial) && this.initial.some((item: QuestionnaireItemInitialComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `initial` property
   */
  private initInitial(): void {
    if(!this.hasInitial()) {
      this.initial = [] as QuestionnaireItemInitialComponent[];
    }
  }

  /**
   * @returns the `item` property value as a QuestionnaireItemComponent array
   */
  public getItem(): QuestionnaireItemComponent[] {
    return this.item ?? ([] as QuestionnaireItemComponent[]);
  }

  /**
   * Assigns the provided QuestionnaireItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: QuestionnaireItemComponent[] | undefined): this {
    if (isDefinedList<QuestionnaireItemComponent>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.item; Provided value array has an element that is not an instance of QuestionnaireItemComponent.`;
      assertFhirTypeList<QuestionnaireItemComponent>(value, QuestionnaireItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided QuestionnaireItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: QuestionnaireItemComponent | undefined): this {
    if (isDefined<QuestionnaireItemComponent>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.item; Provided element is not an instance of QuestionnaireItemComponent.`;
      assertFhirType<QuestionnaireItemComponent>(value, QuestionnaireItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<QuestionnaireItemComponent>(this.item) && this.item.some((item: QuestionnaireItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as QuestionnaireItemComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Questionnaire.item';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.linkId,
      this.definition,
      this.code,
      this.prefix,
      this.text,
      this.type_,
      this.enableWhen,
      this.enableBehavior,
      this.required,
      this.repeats,
      this.readOnly,
      this.maxLength,
      this.answerValueSet,
      this.answerOption,
      this.initial,
      this.item,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.linkId, this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): QuestionnaireItemComponent {
    const dest = new QuestionnaireItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: QuestionnaireItemComponent): void {
    super.copyValues(dest);
    dest.linkId = this.linkId ? this.linkId.copy() : null;
    dest.definition = this.definition?.copy();
    const codeList = copyListValues<Coding>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    dest.prefix = this.prefix?.copy();
    dest.text = this.text?.copy();
    dest.type_ = this.type_ ? this.type_.copy() : null;
    const enableWhenList = copyListValues<QuestionnaireItemEnableWhenComponent>(this.enableWhen);
    dest.enableWhen = enableWhenList.length === 0 ? undefined : enableWhenList;
    dest.enableBehavior = this.enableBehavior?.copy();
    dest.required = this.required?.copy();
    dest.repeats = this.repeats?.copy();
    dest.readOnly = this.readOnly?.copy();
    dest.maxLength = this.maxLength?.copy();
    dest.answerValueSet = this.answerValueSet?.copy();
    const answerOptionList = copyListValues<QuestionnaireItemAnswerOptionComponent>(this.answerOption);
    dest.answerOption = answerOptionList.length === 0 ? undefined : answerOptionList;
    const initialList = copyListValues<QuestionnaireItemInitialComponent>(this.initial);
    dest.initial = initialList.length === 0 ? undefined : initialList;
    const itemList = copyListValues<QuestionnaireItemComponent>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
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

    if (this.hasLinkIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasDefinitionElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getDefinitionElement(), 'definition', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasPrefixElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPrefixElement(), 'prefix', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    if (this.hasEnableWhen()) {
      setFhirBackboneElementListJson(this.getEnableWhen(), 'enableWhen', jsonObj);
    }

    if (this.hasEnableBehaviorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getEnableBehaviorElement()!, 'enableBehavior', jsonObj);
    }

    if (this.hasRequiredElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getRequiredElement(), 'required', jsonObj);
    }

    if (this.hasRepeatsElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getRepeatsElement(), 'repeats', jsonObj);
    }

    if (this.hasReadOnlyElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getReadOnlyElement(), 'readOnly', jsonObj);
    }

    if (this.hasMaxLengthElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getMaxLengthElement(), 'maxLength', jsonObj);
    }

    if (this.hasAnswerValueSetElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getAnswerValueSetElement(), 'answerValueSet', jsonObj);
    }

    if (this.hasAnswerOption()) {
      setFhirBackboneElementListJson(this.getAnswerOption(), 'answerOption', jsonObj);
    }

    if (this.hasInitial()) {
      setFhirBackboneElementListJson(this.getInitial(), 'initial', jsonObj);
    }

    if (this.hasItem()) {
      setFhirBackboneElementListJson(this.getItem(), 'item', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * QuestionnaireItemEnableWhenComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Only allow data when
 * - **Definition:** A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true.
 * - **Comment:** If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
 * - **Requirements:** Allows questionnaires to adapt based on answers to other questions. E.g. If physical gender is specified as a male, no need to capture pregnancy history.  Also allows conditional display of instructions or groups of questions.
 *
 * @category Data Models: Resource
 * @see [FHIR Questionnaire](http://hl7.org/fhir/StructureDefinition/Questionnaire)
 */
export class QuestionnaireItemEnableWhenComponent extends BackboneElement implements IBackboneElement {
  constructor(question: StringType | fhirString | null = null, operator: EnumCodeType | CodeType | fhirCode | null = null, answer: IDataType | null = null) {
    super();

    this.questionnaireEnableOperatorEnum = new QuestionnaireEnableOperatorEnum();

    this.question = null;
    if (isDefined<StringType | fhirString>(question)) {
      if (question instanceof PrimitiveType) {
        this.setQuestionElement(question);
      } else {
        this.setQuestion(question);
      }
    }

    this.operator = constructorCodeValueAsEnumCodeType<QuestionnaireEnableOperatorEnum>(
      operator,
      QuestionnaireEnableOperatorEnum,
      this.questionnaireEnableOperatorEnum,
      'Questionnaire.item.enableWhen.operator',
    );

    this.answer = null;
    if (isDefined<IDataType>(answer)) {
      this.setAnswer(answer);
    }

  }

  /**
   * Parse the provided `QuestionnaireItemEnableWhenComponent` JSON to instantiate the QuestionnaireItemEnableWhenComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `QuestionnaireItemEnableWhenComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to QuestionnaireItemEnableWhenComponent
   * @returns QuestionnaireItemEnableWhenComponent data model or undefined for `QuestionnaireItemEnableWhenComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): QuestionnaireItemEnableWhenComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'QuestionnaireItemEnableWhenComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new QuestionnaireItemEnableWhenComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = QuestionnaireItemEnableWhenComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for QuestionnaireItemEnableWhenComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'question';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setQuestion(null);
      } else {
        instance.setQuestionElement(datatype);
      }
    } else {
      instance.setQuestion(null);
    }

    fieldName = 'operator';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setOperator(null);
      } else {
        instance.setOperatorElement(datatype);
      }
    } else {
      instance.setOperator(null);
    }

    fieldName = 'answer[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const answer: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (answer === undefined) {
      instance.setAnswer(null);
    } else {
      instance.setAnswer(answer);
    }

    return instance;
  }

  /**
   * Questionnaire.item.enableWhen.question Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Question that determines whether item is enabled
   * - **Definition:** The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.
   * - **Comment:** If multiple question occurrences are present for the same question (same linkId), then this refers to the nearest question occurrence reachable by tracing first the "ancestor" axis and then the "preceding" axis and then the "following" axis.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private question: StringType | null;

  /**
   * FHIR CodeSystem: QuestionnaireEnableOperator
   *
   * @see {@link QuestionnaireEnableOperatorEnum }
   */
  private readonly questionnaireEnableOperatorEnum: QuestionnaireEnableOperatorEnum;

  /**
   * Questionnaire.item.enableWhen.operator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** exists | = | != | > | < | >= | <=
   * - **Definition:** Specifies the criteria by which the question is enabled.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableOperatorEnum }
   */
  private operator: EnumCodeType | null;

  /**
   * Questionnaire.item.enableWhen.answer[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Questionnaire.item.enableWhen.answer[x]', ['boolean','decimal','integer','date','dateTime','time','string','Coding','Quantity','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value for question comparison based on operator
   * - **Definition:** A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   * - **FHIR Types:**
   *     'boolean',
   *     'decimal',
   *     'integer',
   *     'date',
   *     'dateTime',
   *     'time',
   *     'string',
   *     'Coding',
   *     'Quantity',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Questionnaire.item.enableWhen.answer[x]',[
    'boolean',
    'decimal',
    'integer',
    'date',
    'dateTime',
    'time',
    'string',
    'Coding',
    'Quantity',
    'Reference',
  ])
  private answer: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `question` property value as a StringType object if defined; else an empty StringType object
   */
  public getQuestionElement(): StringType {
    return this.question ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `question` property.
   *
   * @param element - the `question` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQuestionElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.enableWhen.question; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.question = element;
    } else {
      this.question = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `question` property exists and has a value; `false` otherwise
   */
  public hasQuestionElement(): boolean {
    return isDefined<StringType>(this.question) && !this.question.isEmpty();
  }

  /**
   * @returns the `question` property value as a fhirString if defined; else null
   */
  public getQuestion(): fhirString | null {
    if (this.question?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.question.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `question` property.
   *
   * @param value - the `question` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQuestion(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.enableWhen.question (${String(value)})`;
      this.question = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.question = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `question` property exists and has a value; `false` otherwise
   */
  public hasQuestion(): boolean {
    return this.hasQuestionElement();
  }

  /**
   * @returns the `operator` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableOperatorEnum }
   */
  public getOperatorEnumType(): EnumCodeType | null {
    return this.operator;
  }

  /**
   * Assigns the provided EnumCodeType value to the `operator` property.
   *
   * @param enumType - the `operator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableOperatorEnum }
   */
  public setOperatorEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid Questionnaire.item.enableWhen.operator`;
      assertEnumCodeType<QuestionnaireEnableOperatorEnum>(enumType, QuestionnaireEnableOperatorEnum, errMsgPrefix);
      this.operator = enumType;
    } else {
      this.operator = null;
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
   * @returns the `operator` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableOperatorEnum }
   */
  public getOperatorElement(): CodeType | null {
    if (this.operator === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableOperatorEnum }
   */
  public setOperatorElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.enableWhen.operator; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.operator = new EnumCodeType(element, this.questionnaireEnableOperatorEnum);
    } else {
      this.operator = null;
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
   * @returns the `operator` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableOperatorEnum }
   */
  public getOperator(): fhirCode | null {
    if (this.operator === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link QuestionnaireEnableOperatorEnum }
   */
  public setOperator(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.enableWhen.operator (${String(value)})`;
      this.operator = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.questionnaireEnableOperatorEnum);
    } else {
      this.operator = null;
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
   * @returns the `answer` property value as a DataType object; else null
   */
  public getAnswer(): IDataType | null {
    return this.answer;
  }

  /**
   * Assigns the provided DataType object value to the `answer` property.
   *
   * @decorator `@ChoiceDataTypes('Questionnaire.item.enableWhen.answer[x]')`
   *
   * @param value - the `answer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Questionnaire.item.enableWhen.answer[x]')
  public setAnswer(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.answer = value;
    } else {
      this.answer = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `answer` property exists and has a value; `false` otherwise
   */
  public hasAnswer(): boolean {
    return isDefined<IDataType>(this.answer) && !this.answer.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `answer` property value as a BooleanType object if defined; else null
   */
  public getAnswerBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.answer)) {
      return null;
    }
    if (!(this.answer instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.enableWhen.answer[x]: Expected BooleanType but encountered ${this.answer.fhirType()}`,
      );
    }
    return this.answer;
  }

  /**
   * @returns `true` if the `` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasAnswerBooleanType(): boolean {
    return this.hasAnswer() && this.answer instanceof BooleanType;
  }

  /**
   * @returns the `answer` property value as a DecimalType object if defined; else null
   */
  public getAnswerDecimalType(): DecimalType | null {
    if (!isDefined<IDataType>(this.answer)) {
      return null;
    }
    if (!(this.answer instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.enableWhen.answer[x]: Expected DecimalType but encountered ${this.answer.fhirType()}`,
      );
    }
    return this.answer;
  }

  /**
   * @returns `true` if the `` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasAnswerDecimalType(): boolean {
    return this.hasAnswer() && this.answer instanceof DecimalType;
  }

  /**
   * @returns the `answer` property value as a IntegerType object if defined; else null
   */
  public getAnswerIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.answer)) {
      return null;
    }
    if (!(this.answer instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.enableWhen.answer[x]: Expected IntegerType but encountered ${this.answer.fhirType()}`,
      );
    }
    return this.answer;
  }

  /**
   * @returns `true` if the `` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasAnswerIntegerType(): boolean {
    return this.hasAnswer() && this.answer instanceof IntegerType;
  }

  /**
   * @returns the `answer` property value as a DateType object if defined; else null
   */
  public getAnswerDateType(): DateType | null {
    if (!isDefined<IDataType>(this.answer)) {
      return null;
    }
    if (!(this.answer instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.enableWhen.answer[x]: Expected DateType but encountered ${this.answer.fhirType()}`,
      );
    }
    return this.answer;
  }

  /**
   * @returns `true` if the `` property exists as a DateType and has a value; `false` otherwise
   */
  public hasAnswerDateType(): boolean {
    return this.hasAnswer() && this.answer instanceof DateType;
  }

  /**
   * @returns the `answer` property value as a DateTimeType object if defined; else null
   */
  public getAnswerDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.answer)) {
      return null;
    }
    if (!(this.answer instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.enableWhen.answer[x]: Expected DateTimeType but encountered ${this.answer.fhirType()}`,
      );
    }
    return this.answer;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasAnswerDateTimeType(): boolean {
    return this.hasAnswer() && this.answer instanceof DateTimeType;
  }

  /**
   * @returns the `answer` property value as a TimeType object if defined; else null
   */
  public getAnswerTimeType(): TimeType | null {
    if (!isDefined<IDataType>(this.answer)) {
      return null;
    }
    if (!(this.answer instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.enableWhen.answer[x]: Expected TimeType but encountered ${this.answer.fhirType()}`,
      );
    }
    return this.answer;
  }

  /**
   * @returns `true` if the `` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasAnswerTimeType(): boolean {
    return this.hasAnswer() && this.answer instanceof TimeType;
  }

  /**
   * @returns the `answer` property value as a StringType object if defined; else null
   */
  public getAnswerStringType(): StringType | null {
    if (!isDefined<IDataType>(this.answer)) {
      return null;
    }
    if (!(this.answer instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.enableWhen.answer[x]: Expected StringType but encountered ${this.answer.fhirType()}`,
      );
    }
    return this.answer;
  }

  /**
   * @returns `true` if the `` property exists as a StringType and has a value; `false` otherwise
   */
  public hasAnswerStringType(): boolean {
    return this.hasAnswer() && this.answer instanceof StringType;
  }

  /**
   * @returns the `answer` property value as a Coding object if defined; else null
   */
  public getAnswerCoding(): Coding | null {
    if (!isDefined<IDataType>(this.answer)) {
      return null;
    }
    if (!(this.answer instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.enableWhen.answer[x]: Expected Coding but encountered ${this.answer.fhirType()}`,
      );
    }
    return this.answer;
  }

  /**
   * @returns `true` if the `` property exists as a Coding and has a value; `false` otherwise
   */
  public hasAnswerCoding(): boolean {
    return this.hasAnswer() && this.answer instanceof Coding;
  }

  /**
   * @returns the `answer` property value as a Quantity object if defined; else null
   */
  public getAnswerQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.answer)) {
      return null;
    }
    if (!(this.answer instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.enableWhen.answer[x]: Expected Quantity but encountered ${this.answer.fhirType()}`,
      );
    }
    return this.answer;
  }

  /**
   * @returns `true` if the `` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasAnswerQuantity(): boolean {
    return this.hasAnswer() && this.answer instanceof Quantity;
  }

  /**
   * @returns the `answer` property value as a Reference object if defined; else null
   */
  public getAnswerReference(): Reference | null {
    if (!isDefined<IDataType>(this.answer)) {
      return null;
    }
    if (!(this.answer instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.enableWhen.answer[x]: Expected Reference but encountered ${this.answer.fhirType()}`,
      );
    }
    return this.answer;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasAnswerReference(): boolean {
    return this.hasAnswer() && this.answer instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Questionnaire.item.enableWhen';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.question,
      this.operator,
      this.answer,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.question, this.operator, this.answer, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): QuestionnaireItemEnableWhenComponent {
    const dest = new QuestionnaireItemEnableWhenComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: QuestionnaireItemEnableWhenComponent): void {
    super.copyValues(dest);
    dest.question = this.question ? this.question.copy() : null;
    dest.operator = this.operator ? this.operator.copy() : null;
    dest.answer = this.answer ? this.answer.copy() as IDataType : null;
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

    if (this.hasQuestionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getQuestionElement(), 'question', jsonObj);
    }

    if (this.hasOperatorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getOperatorElement()!, 'operator', jsonObj);
    }

    if (this.hasAnswer()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAnswer()!, 'answer', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * QuestionnaireItemAnswerOptionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Permitted answer
 * - **Definition:** One of the permitted answers for a "choice" or "open-choice" question.
 * - **Comment:** This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there\'s a need to capture possible answers that are not codes.
 *
 * @category Data Models: Resource
 * @see [FHIR Questionnaire](http://hl7.org/fhir/StructureDefinition/Questionnaire)
 */
export class QuestionnaireItemAnswerOptionComponent extends BackboneElement implements IBackboneElement {
  constructor(value: IDataType | null = null) {
    super();

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `QuestionnaireItemAnswerOptionComponent` JSON to instantiate the QuestionnaireItemAnswerOptionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `QuestionnaireItemAnswerOptionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to QuestionnaireItemAnswerOptionComponent
   * @returns QuestionnaireItemAnswerOptionComponent data model or undefined for `QuestionnaireItemAnswerOptionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): QuestionnaireItemAnswerOptionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'QuestionnaireItemAnswerOptionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new QuestionnaireItemAnswerOptionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = QuestionnaireItemAnswerOptionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for QuestionnaireItemAnswerOptionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (value === undefined) {
      instance.setValue(null);
    } else {
      instance.setValue(value);
    }

    fieldName = 'initialSelected';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setInitialSelectedElement(datatype);
    }

    return instance;
  }

  /**
   * Questionnaire.item.answerOption.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Questionnaire.item.answerOption.value[x]', ['integer','date','time','string','Coding','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Answer value
   * - **Definition:** A potential answer that\'s allowed as the answer to this question.
   * - **Comment:** The data type of the value must agree with the item.type.
   * - **FHIR Types:**
   *     'integer',
   *     'date',
   *     'time',
   *     'string',
   *     'Coding',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Questionnaire.item.answerOption.value[x]',[
    'integer',
    'date',
    'time',
    'string',
    'Coding',
    'Reference',
  ])
  private value: IDataType | null;

  /**
   * Questionnaire.item.answerOption.initialSelected Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether option is selected by default
   * - **Definition:** Indicates whether the answer value is selected when the list of possible answers is initially shown.
   * - **Comment:** Use this instead of initial[v] if answerValueSet is present.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private initialSelected?: BooleanType | undefined;

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
   * @decorator `@ChoiceDataTypes('Questionnaire.item.answerOption.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Questionnaire.item.answerOption.value[x]')
  public setValue(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = null;
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
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.answerOption.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a DateType object if defined; else null
   */
  public getValueDateType(): DateType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.answerOption.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else null
   */
  public getValueTimeType(): TimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.answerOption.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && this.value instanceof TimeType;
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
        `DataType mismatch for Questionnaire.item.answerOption.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Coding object if defined; else null
   */
  public getValueCoding(): Coding | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.answerOption.value[x]: Expected Coding but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Coding and has a value; `false` otherwise
   */
  public hasValueCoding(): boolean {
    return this.hasValue() && this.value instanceof Coding;
  }

  /**
   * @returns the `value` property value as a Reference object if defined; else null
   */
  public getValueReference(): Reference | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.answerOption.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && this.value instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `initialSelected` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getInitialSelectedElement(): BooleanType {
    return this.initialSelected ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `initialSelected` property.
   *
   * @param element - the `initialSelected` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInitialSelectedElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid Questionnaire.item.answerOption.initialSelected; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.initialSelected = element;
    } else {
      this.initialSelected = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `initialSelected` property exists and has a value; `false` otherwise
   */
  public hasInitialSelectedElement(): boolean {
    return isDefined<BooleanType>(this.initialSelected) && !this.initialSelected.isEmpty();
  }

  /**
   * @returns the `initialSelected` property value as a fhirBoolean if defined; else undefined
   */
  public getInitialSelected(): fhirBoolean | undefined {
    return this.initialSelected?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `initialSelected` property.
   *
   * @param value - the `initialSelected` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInitialSelected(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid Questionnaire.item.answerOption.initialSelected (${String(value)})`;
      this.initialSelected = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.initialSelected = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `initialSelected` property exists and has a value; `false` otherwise
   */
  public hasInitialSelected(): boolean {
    return this.hasInitialSelectedElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Questionnaire.item.answerOption';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.value,
      this.initialSelected,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): QuestionnaireItemAnswerOptionComponent {
    const dest = new QuestionnaireItemAnswerOptionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: QuestionnaireItemAnswerOptionComponent): void {
    super.copyValues(dest);
    dest.value = this.value ? this.value.copy() as IDataType : null;
    dest.initialSelected = this.initialSelected?.copy();
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

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (this.hasInitialSelectedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getInitialSelectedElement(), 'initialSelected', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * QuestionnaireItemInitialComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Initial value(s) when item is first rendered
 * - **Definition:** One or more values that should be pre-populated in the answer when initially rendering the questionnaire for user input.
 * - **Comment:** The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn\'t change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
 * - **Requirements:** In some workflows, having defaults saves time.
 *
 * @category Data Models: Resource
 * @see [FHIR Questionnaire](http://hl7.org/fhir/StructureDefinition/Questionnaire)
 */
export class QuestionnaireItemInitialComponent extends BackboneElement implements IBackboneElement {
  constructor(value: IDataType | null = null) {
    super();

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `QuestionnaireItemInitialComponent` JSON to instantiate the QuestionnaireItemInitialComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `QuestionnaireItemInitialComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to QuestionnaireItemInitialComponent
   * @returns QuestionnaireItemInitialComponent data model or undefined for `QuestionnaireItemInitialComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): QuestionnaireItemInitialComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'QuestionnaireItemInitialComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new QuestionnaireItemInitialComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = QuestionnaireItemInitialComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for QuestionnaireItemInitialComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (value === undefined) {
      instance.setValue(null);
    } else {
      instance.setValue(value);
    }

    return instance;
  }

  /**
   * Questionnaire.item.initial.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Questionnaire.item.initial.value[x]', ['boolean','decimal','integer','date','dateTime','time','string','uri','Attachment','Coding','Quantity','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual value for initializing the question
   * - **Definition:** The actual value to for an initial answer.
   * - **Comment:** The type of the initial value must be consistent with the type of the item.
   * - **FHIR Types:**
   *     'boolean',
   *     'decimal',
   *     'integer',
   *     'date',
   *     'dateTime',
   *     'time',
   *     'string',
   *     'uri',
   *     'Attachment',
   *     'Coding',
   *     'Quantity',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Questionnaire.item.initial.value[x]',[
    'boolean',
    'decimal',
    'integer',
    'date',
    'dateTime',
    'time',
    'string',
    'uri',
    'Attachment',
    'Coding',
    'Quantity',
    'Reference',
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
   * @decorator `@ChoiceDataTypes('Questionnaire.item.initial.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Questionnaire.item.initial.value[x]')
  public setValue(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = null;
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
   * @returns the `value` property value as a BooleanType object if defined; else null
   */
  public getValueBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a DecimalType object if defined; else null
   */
  public getValueDecimalType(): DecimalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
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

  /**
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a DateType object if defined; else null
   */
  public getValueDateType(): DateType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else null
   */
  public getValueDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else null
   */
  public getValueTimeType(): TimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && this.value instanceof TimeType;
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
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a UriType object if defined; else null
   */
  public getValueUriType(): UriType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected UriType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasValueUriType(): boolean {
    return this.hasValue() && this.value instanceof UriType;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else null
   */
  public getValueAttachment(): Attachment | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  /**
   * @returns the `value` property value as a Coding object if defined; else null
   */
  public getValueCoding(): Coding | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected Coding but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Coding and has a value; `false` otherwise
   */
  public hasValueCoding(): boolean {
    return this.hasValue() && this.value instanceof Coding;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else null
   */
  public getValueQuantity(): Quantity | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a Reference object if defined; else null
   */
  public getValueReference(): Reference | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Questionnaire.item.initial.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && this.value instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Questionnaire.item.initial';
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
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): QuestionnaireItemInitialComponent {
    const dest = new QuestionnaireItemInitialComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: QuestionnaireItemInitialComponent): void {
    super.copyValues(dest);
    dest.value = this.value ? this.value.copy() as IDataType : null;
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

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
