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
 * SubscriptionTopic Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SubscriptionTopic
 * StructureDefinition.name: SubscriptionTopic
 * StructureDefinition.description: Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic.
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
  DateType,
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
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  StringType,
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
import { CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, Period, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { RestfulInteractionEnum } from '../code-systems/RestfulInteractionEnum';
import { SearchComparatorEnum } from '../code-systems/SearchComparatorEnum';
import { SearchModifierCodeEnum } from '../code-systems/SearchModifierCodeEnum';
import { SubscriptiontopicCrBehaviorEnum } from '../code-systems/SubscriptiontopicCrBehaviorEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * SubscriptionTopic Class
 *
 * @remarks
 * Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic.
 *
 * **FHIR Specification**
 * - **Short:** The definition of a specific topic for triggering events within the Subscriptions framework
 * - **Definition:** Describes a stream of resource state changes or events and annotated with labels useful to filter projections from this topic.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR SubscriptionTopic](http://hl7.org/fhir/StructureDefinition/SubscriptionTopic)
 */
export class SubscriptionTopic extends DomainResource implements IDomainResource {
  constructor(url: UriType | fhirUri | null = null, status: EnumCodeType | CodeType | fhirCode | null = null) {
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

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'SubscriptionTopic.status',
    );
  }

  /**
   * Parse the provided `SubscriptionTopic` JSON to instantiate the SubscriptionTopic data model.
   *
   * @param sourceJson - JSON representing FHIR `SubscriptionTopic`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubscriptionTopic
   * @returns SubscriptionTopic data model or undefined for `SubscriptionTopic`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SubscriptionTopic | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubscriptionTopic';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubscriptionTopic();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SubscriptionTopic');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = SubscriptionTopic[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SubscriptionTopic`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'derivedFrom';
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
          instance.addDerivedFromElement(datatype);
        }
      });
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

    fieldName = 'resourceTrigger';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubscriptionTopicResourceTriggerComponent | undefined = SubscriptionTopicResourceTriggerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addResourceTrigger(component);
        }
      });
    }

    fieldName = 'eventTrigger';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubscriptionTopicEventTriggerComponent | undefined = SubscriptionTopicEventTriggerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addEventTrigger(component);
        }
      });
    }

    fieldName = 'canFilterBy';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubscriptionTopicCanFilterByComponent | undefined = SubscriptionTopicCanFilterByComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCanFilterBy(component);
        }
      });
    }

    fieldName = 'notificationShape';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SubscriptionTopicNotificationShapeComponent | undefined = SubscriptionTopicNotificationShapeComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addNotificationShape(component);
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
   * SubscriptionTopic.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this subscription topic, represented as an absolute URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this subscription topic when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this subscription topic is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the subscription topic is stored on different servers.
   * - **Comment:** Can be a `urn:uuid:` or a `urn:oid:` but real `http/s:` addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions). In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found. When this is a locally defined topic or derived from a topic defined in the FHIR spec or an IG, this uniquely identifies the topic and functionality. Ideally this URL resolves to documentation about the use cases. When this is a topic derived from another topic (e.g., it adds additional filters or functionality to a topic defined in an IG), then this URL should be different than the base and the `derivedFromCanonical` should be filled out with the unique uri as defined in the IG. When this is a direct implementation from another IG or registered topic (with no additional filters, etc., so not derived), then this url is the unique url for this topic as defined by the IG.
   * - **Requirements:** Allows the subscription topic to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url: UriType | null;

  /**
   * SubscriptionTopic.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for subscription topic
   * - **Definition:** Business identifiers assigned to this subscription topic by the performer and/or other systems.  These identifiers remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** Note: This is a business identifier, not a resource identifier (see [discussion](https://hl7.org/fhir/resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   * - **Requirements:** Allows identification of the subscription topic as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * SubscriptionTopic.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the subscription topic
   * - **Definition:** The identifier that is used to identify this version of the subscription topic when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Topic author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions are orderable.
   * - **Comment:** There may be multiple different instances of a subscription topic that have the same identifier but different versions.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * SubscriptionTopic.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SubscriptionTopic.versionAlgorithm[x]', ['string','Coding',]`
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
  @ChoiceDataTypesMeta('SubscriptionTopic.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * SubscriptionTopic.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this subscription topic (computer friendly)
   * - **Definition:** A natural language name identifying the subscription topic This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * SubscriptionTopic.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this subscription topic (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the subscription topic.  For example, "admission".
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * SubscriptionTopic.derivedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Based on FHIR protocol or definition
   * - **Definition:** The canonical URL pointing to another FHIR-defined SubscriptionTopic that is adhered to in whole or in part by this SubscriptionTopic.
   * - **Requirements:** SubscriptionTopics may be refinements of more generic topics.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SubscriptionTopic',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private derivedFrom?: CanonicalType[] | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * SubscriptionTopic.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The current state of the SubscriptionTopic.
   * - **Comment:** A nominal state-transition diagram can be found in the [Definition pattern](https://hl7.org/fhir/definition.html#statemachine) documentation Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This is labeled as &quot;Is Modifier&quot; because applications should not use a retired SubscriptionTopic without due consideration
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * SubscriptionTopic.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If for testing purposes, not real usage
   * - **Definition:** A flag to indicate that this TopSubscriptionTopicic is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of SubscriptionTopic that are appropriate for use vs. not.
   * - **Requirements:** Enables experimental content to be developed following the same life-cycle as a production-level SubscriptionTopic would.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * SubscriptionTopic.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date status first applied
   * - **Definition:** The date (and optionally time) when the subscription topic was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the subscription topic changes.
   * - **Comment:** See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * SubscriptionTopic.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name of the individual or organization that published the SubscriptionTopic
   * - **Definition:** Helps establish the "authority/credibility" of the SubscriptionTopic.  May also allow for contact.
   * - **Requirements:** Usually an organization, but may be an individual. The publisher (or steward) of the SubscriptionTopic is the organization or individual primarily responsible for the maintenance and upkeep of the Topic. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the Topic. This item SHOULD be populated unless the information is available from context.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * SubscriptionTopic.contact Element
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
   * SubscriptionTopic.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the SubscriptionTopic
   * - **Definition:** A free text natural language description of the Topic from the consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the module as conveyed in the text field of the resource itself. This item SHOULD be populated unless the information is available from context.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * SubscriptionTopic.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Content intends to support these contexts
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of code system definitions.
   * - **Comment:** When multiple usageContexts are specified, there is no expectation for whether all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * SubscriptionTopic.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction of the SubscriptionTopic (if applicable)
   * - **Definition:** A jurisdiction in which the Topic is intended to be used.
   * - **Comment:** DEPRECATION NOTE: For consistency, implementations are encouraged to migrate to using the new \'jurisdiction\' code in the useContext element.  (I.e. useContext.code indicating http://terminology.hl7.org/CodeSystem/usage-context-type#jurisdiction and useContext.valueCodeableConcept indicating the jurisdiction.)
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * SubscriptionTopic.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this SubscriptionTopic is defined
   * - **Definition:** Explains why this Topic is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the Topic.  Rather it is for traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this Topic.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * SubscriptionTopic.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the SubscriptionTopic and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the SubscriptionTopic.
   * - **Comment:** ...
   * - **Requirements:** Consumers of the TSubscriptionTopicopic must be able to determine any legal restrictions on the use of the artifact and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * SubscriptionTopic.copyrightLabel Element
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
   * SubscriptionTopic.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When SubscriptionTopic is/was approved by publisher
   * - **Definition:** The date on which the asset content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The date may be more recent than the approval date because of minor changes / editorial corrections.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * SubscriptionTopic.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date the Subscription Topic was last reviewed by the publisher
   * - **Definition:** The date on which the asset content was last reviewed. Review happens periodically after that, but doesn\'t change the original approval date.
   * - **Comment:** If specified, this is usually after the approval date.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastReviewDate?: DateType | undefined;

  /**
   * SubscriptionTopic.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The effective date range for the SubscriptionTopic
   * - **Definition:** The period during which the SubscriptionTopic content was or is planned to be effective.
   * - **Comment:** The effective period for a SubscriptionTopic  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 would be published in 2015.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectivePeriod?: Period | undefined;

  /**
   * SubscriptionTopic.resourceTrigger Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definition of a resource-based trigger for the subscription topic
   * - **Definition:** A definition of a resource-based event that triggers a notification based on the SubscriptionTopic. The criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression. Multiple triggers are considered OR joined (e.g., a resource update matching ANY of the definitions will trigger a notification).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resourceTrigger?: SubscriptionTopicResourceTriggerComponent[] | undefined;

  /**
   * SubscriptionTopic.eventTrigger Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Event definitions the SubscriptionTopic
   * - **Definition:** Event definition which can be used to trigger the SubscriptionTopic.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private eventTrigger?: SubscriptionTopicEventTriggerComponent[] | undefined;

  /**
   * SubscriptionTopic.canFilterBy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Properties by which a Subscription can filter notifications from the SubscriptionTopic
   * - **Definition:** List of properties by which Subscriptions on the SubscriptionTopic can be filtered. May be defined Search Parameters (e.g., Encounter.patient) or parameters defined within this SubscriptionTopic context (e.g., hub.event).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private canFilterBy?: SubscriptionTopicCanFilterByComponent[] | undefined;

  /**
   * SubscriptionTopic.notificationShape Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Properties for describing the shape of notifications generated by this topic
   * - **Definition:** List of properties to describe the shape (e.g., resources) included in notifications from this Subscription Topic.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private notificationShape?: SubscriptionTopicNotificationShapeComponent[] | undefined;

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
    assertIsDefined<UriType>(element, `SubscriptionTopic.url is required`);
    const optErrMsg = `Invalid SubscriptionTopic.url; Provided value is not an instance of UriType.`;
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
    assertIsDefined<fhirUri>(value, `SubscriptionTopic.url is required`);
    const optErrMsg = `Invalid SubscriptionTopic.url (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('SubscriptionTopic.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SubscriptionTopic.versionAlgorithm[x]')
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
        `DataType mismatch for SubscriptionTopic.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for SubscriptionTopic.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
      const optErrMsg = `Invalid SubscriptionTopic.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.name (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.title (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.derivedFrom; Provided value array has an element that is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.derivedFrom; Provided element is not an instance of CanonicalType.`;
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
        const optErrMsg = `Invalid SubscriptionTopic.derivedFrom array item (${String(derivedFromValue)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.derivedFrom array item (${String(value)})`;
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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `SubscriptionTopic.status is required`);
    const errMsgPrefix = `Invalid SubscriptionTopic.status`;
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
    assertIsDefined<CodeType>(element, `SubscriptionTopic.status is required`);
    const optErrMsg = `Invalid SubscriptionTopic.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `SubscriptionTopic.status is required`);
    const optErrMsg = `Invalid SubscriptionTopic.status (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.date (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.description (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.copyrightLabel; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.copyrightLabel (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.approvalDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.approvalDate (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.lastReviewDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.lastReviewDate (${String(value)})`;
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
      const optErrMsg = `Invalid SubscriptionTopic.effectivePeriod; Provided element is not an instance of Period.`;
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
   * @returns the `resourceTrigger` property value as a SubscriptionTopicResourceTriggerComponent array
   */
  public getResourceTrigger(): SubscriptionTopicResourceTriggerComponent[] {
    return this.resourceTrigger ?? ([] as SubscriptionTopicResourceTriggerComponent[]);
  }

  /**
   * Assigns the provided SubscriptionTopicResourceTriggerComponent array value to the `resourceTrigger` property.
   *
   * @param value - the `resourceTrigger` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResourceTrigger(value: SubscriptionTopicResourceTriggerComponent[] | undefined): this {
    if (isDefinedList<SubscriptionTopicResourceTriggerComponent>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger; Provided value array has an element that is not an instance of SubscriptionTopicResourceTriggerComponent.`;
      assertFhirTypeList<SubscriptionTopicResourceTriggerComponent>(value, SubscriptionTopicResourceTriggerComponent, optErrMsg);
      this.resourceTrigger = value;
    } else {
      this.resourceTrigger = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubscriptionTopicResourceTriggerComponent value to the `resourceTrigger` array property.
   *
   * @param value - the `resourceTrigger` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addResourceTrigger(value: SubscriptionTopicResourceTriggerComponent | undefined): this {
    if (isDefined<SubscriptionTopicResourceTriggerComponent>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger; Provided element is not an instance of SubscriptionTopicResourceTriggerComponent.`;
      assertFhirType<SubscriptionTopicResourceTriggerComponent>(value, SubscriptionTopicResourceTriggerComponent, optErrMsg);
      this.initResourceTrigger();
      this.resourceTrigger?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `resourceTrigger` property exists and has a value; `false` otherwise
   */
  public hasResourceTrigger(): boolean {
    return isDefinedList<SubscriptionTopicResourceTriggerComponent>(this.resourceTrigger) && this.resourceTrigger.some((item: SubscriptionTopicResourceTriggerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `resourceTrigger` property
   */
  private initResourceTrigger(): void {
    if(!this.hasResourceTrigger()) {
      this.resourceTrigger = [] as SubscriptionTopicResourceTriggerComponent[];
    }
  }

  /**
   * @returns the `eventTrigger` property value as a SubscriptionTopicEventTriggerComponent array
   */
  public getEventTrigger(): SubscriptionTopicEventTriggerComponent[] {
    return this.eventTrigger ?? ([] as SubscriptionTopicEventTriggerComponent[]);
  }

  /**
   * Assigns the provided SubscriptionTopicEventTriggerComponent array value to the `eventTrigger` property.
   *
   * @param value - the `eventTrigger` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEventTrigger(value: SubscriptionTopicEventTriggerComponent[] | undefined): this {
    if (isDefinedList<SubscriptionTopicEventTriggerComponent>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.eventTrigger; Provided value array has an element that is not an instance of SubscriptionTopicEventTriggerComponent.`;
      assertFhirTypeList<SubscriptionTopicEventTriggerComponent>(value, SubscriptionTopicEventTriggerComponent, optErrMsg);
      this.eventTrigger = value;
    } else {
      this.eventTrigger = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubscriptionTopicEventTriggerComponent value to the `eventTrigger` array property.
   *
   * @param value - the `eventTrigger` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEventTrigger(value: SubscriptionTopicEventTriggerComponent | undefined): this {
    if (isDefined<SubscriptionTopicEventTriggerComponent>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.eventTrigger; Provided element is not an instance of SubscriptionTopicEventTriggerComponent.`;
      assertFhirType<SubscriptionTopicEventTriggerComponent>(value, SubscriptionTopicEventTriggerComponent, optErrMsg);
      this.initEventTrigger();
      this.eventTrigger?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `eventTrigger` property exists and has a value; `false` otherwise
   */
  public hasEventTrigger(): boolean {
    return isDefinedList<SubscriptionTopicEventTriggerComponent>(this.eventTrigger) && this.eventTrigger.some((item: SubscriptionTopicEventTriggerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `eventTrigger` property
   */
  private initEventTrigger(): void {
    if(!this.hasEventTrigger()) {
      this.eventTrigger = [] as SubscriptionTopicEventTriggerComponent[];
    }
  }

  /**
   * @returns the `canFilterBy` property value as a SubscriptionTopicCanFilterByComponent array
   */
  public getCanFilterBy(): SubscriptionTopicCanFilterByComponent[] {
    return this.canFilterBy ?? ([] as SubscriptionTopicCanFilterByComponent[]);
  }

  /**
   * Assigns the provided SubscriptionTopicCanFilterByComponent array value to the `canFilterBy` property.
   *
   * @param value - the `canFilterBy` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCanFilterBy(value: SubscriptionTopicCanFilterByComponent[] | undefined): this {
    if (isDefinedList<SubscriptionTopicCanFilterByComponent>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy; Provided value array has an element that is not an instance of SubscriptionTopicCanFilterByComponent.`;
      assertFhirTypeList<SubscriptionTopicCanFilterByComponent>(value, SubscriptionTopicCanFilterByComponent, optErrMsg);
      this.canFilterBy = value;
    } else {
      this.canFilterBy = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubscriptionTopicCanFilterByComponent value to the `canFilterBy` array property.
   *
   * @param value - the `canFilterBy` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCanFilterBy(value: SubscriptionTopicCanFilterByComponent | undefined): this {
    if (isDefined<SubscriptionTopicCanFilterByComponent>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy; Provided element is not an instance of SubscriptionTopicCanFilterByComponent.`;
      assertFhirType<SubscriptionTopicCanFilterByComponent>(value, SubscriptionTopicCanFilterByComponent, optErrMsg);
      this.initCanFilterBy();
      this.canFilterBy?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `canFilterBy` property exists and has a value; `false` otherwise
   */
  public hasCanFilterBy(): boolean {
    return isDefinedList<SubscriptionTopicCanFilterByComponent>(this.canFilterBy) && this.canFilterBy.some((item: SubscriptionTopicCanFilterByComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `canFilterBy` property
   */
  private initCanFilterBy(): void {
    if(!this.hasCanFilterBy()) {
      this.canFilterBy = [] as SubscriptionTopicCanFilterByComponent[];
    }
  }

  /**
   * @returns the `notificationShape` property value as a SubscriptionTopicNotificationShapeComponent array
   */
  public getNotificationShape(): SubscriptionTopicNotificationShapeComponent[] {
    return this.notificationShape ?? ([] as SubscriptionTopicNotificationShapeComponent[]);
  }

  /**
   * Assigns the provided SubscriptionTopicNotificationShapeComponent array value to the `notificationShape` property.
   *
   * @param value - the `notificationShape` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNotificationShape(value: SubscriptionTopicNotificationShapeComponent[] | undefined): this {
    if (isDefinedList<SubscriptionTopicNotificationShapeComponent>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.notificationShape; Provided value array has an element that is not an instance of SubscriptionTopicNotificationShapeComponent.`;
      assertFhirTypeList<SubscriptionTopicNotificationShapeComponent>(value, SubscriptionTopicNotificationShapeComponent, optErrMsg);
      this.notificationShape = value;
    } else {
      this.notificationShape = undefined;
    }
    return this;
  }

  /**
   * Add the provided SubscriptionTopicNotificationShapeComponent value to the `notificationShape` array property.
   *
   * @param value - the `notificationShape` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNotificationShape(value: SubscriptionTopicNotificationShapeComponent | undefined): this {
    if (isDefined<SubscriptionTopicNotificationShapeComponent>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.notificationShape; Provided element is not an instance of SubscriptionTopicNotificationShapeComponent.`;
      assertFhirType<SubscriptionTopicNotificationShapeComponent>(value, SubscriptionTopicNotificationShapeComponent, optErrMsg);
      this.initNotificationShape();
      this.notificationShape?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `notificationShape` property exists and has a value; `false` otherwise
   */
  public hasNotificationShape(): boolean {
    return isDefinedList<SubscriptionTopicNotificationShapeComponent>(this.notificationShape) && this.notificationShape.some((item: SubscriptionTopicNotificationShapeComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `notificationShape` property
   */
  private initNotificationShape(): void {
    if(!this.hasNotificationShape()) {
      this.notificationShape = [] as SubscriptionTopicNotificationShapeComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubscriptionTopic';
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
      this.derivedFrom,
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
      this.approvalDate,
      this.lastReviewDate,
      this.effectivePeriod,
      this.resourceTrigger,
      this.eventTrigger,
      this.canFilterBy,
      this.notificationShape,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubscriptionTopic {
    const dest = new SubscriptionTopic();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubscriptionTopic): void {
    super.copyValues(dest);
    dest.url = this.url ? this.url.copy() : null;
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.versionAlgorithm = this.versionAlgorithm?.copy() as IDataType;
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    const derivedFromList = copyListValues<CanonicalType>(this.derivedFrom);
    dest.derivedFrom = derivedFromList.length === 0 ? undefined : derivedFromList;
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
    dest.approvalDate = this.approvalDate?.copy();
    dest.lastReviewDate = this.lastReviewDate?.copy();
    dest.effectivePeriod = this.effectivePeriod?.copy();
    const resourceTriggerList = copyListValues<SubscriptionTopicResourceTriggerComponent>(this.resourceTrigger);
    dest.resourceTrigger = resourceTriggerList.length === 0 ? undefined : resourceTriggerList;
    const eventTriggerList = copyListValues<SubscriptionTopicEventTriggerComponent>(this.eventTrigger);
    dest.eventTrigger = eventTriggerList.length === 0 ? undefined : eventTriggerList;
    const canFilterByList = copyListValues<SubscriptionTopicCanFilterByComponent>(this.canFilterBy);
    dest.canFilterBy = canFilterByList.length === 0 ? undefined : canFilterByList;
    const notificationShapeList = copyListValues<SubscriptionTopicNotificationShapeComponent>(this.notificationShape);
    dest.notificationShape = notificationShapeList.length === 0 ? undefined : notificationShapeList;
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
      missingReqdProperties.push(`SubscriptionTopic.url`);
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

    if (this.hasDerivedFrom()) {
      setFhirPrimitiveListJson(this.getDerivedFromElement(), 'derivedFrom', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`SubscriptionTopic.status`);
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

    if (this.hasApprovalDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getApprovalDateElement(), 'approvalDate', jsonObj);
    }

    if (this.hasLastReviewDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getLastReviewDateElement(), 'lastReviewDate', jsonObj);
    }

    if (this.hasEffectivePeriod()) {
      setFhirComplexJson(this.getEffectivePeriod(), 'effectivePeriod', jsonObj);
    }

    if (this.hasResourceTrigger()) {
      setFhirBackboneElementListJson(this.getResourceTrigger(), 'resourceTrigger', jsonObj);
    }

    if (this.hasEventTrigger()) {
      setFhirBackboneElementListJson(this.getEventTrigger(), 'eventTrigger', jsonObj);
    }

    if (this.hasCanFilterBy()) {
      setFhirBackboneElementListJson(this.getCanFilterBy(), 'canFilterBy', jsonObj);
    }

    if (this.hasNotificationShape()) {
      setFhirBackboneElementListJson(this.getNotificationShape(), 'notificationShape', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * SubscriptionTopicResourceTriggerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Definition of a resource-based trigger for the subscription topic
 * - **Definition:** A definition of a resource-based event that triggers a notification based on the SubscriptionTopic. The criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression. Multiple triggers are considered OR joined (e.g., a resource update matching ANY of the definitions will trigger a notification).
 *
 * @category Data Models: Resource
 * @see [FHIR SubscriptionTopic](http://hl7.org/fhir/StructureDefinition/SubscriptionTopic)
 */
export class SubscriptionTopicResourceTriggerComponent extends BackboneElement implements IBackboneElement {
  constructor(resource: UriType | fhirUri | null = null) {
    super();

    this.restfulInteractionEnum = new RestfulInteractionEnum();

    this.resource = null;
    if (isDefined<UriType | fhirUri>(resource)) {
      if (resource instanceof PrimitiveType) {
        this.setResourceElement(resource);
      } else {
        this.setResource(resource);
      }
    }
  }

  /**
   * Parse the provided `SubscriptionTopicResourceTriggerComponent` JSON to instantiate the SubscriptionTopicResourceTriggerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubscriptionTopicResourceTriggerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubscriptionTopicResourceTriggerComponent
   * @returns SubscriptionTopicResourceTriggerComponent data model or undefined for `SubscriptionTopicResourceTriggerComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubscriptionTopicResourceTriggerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubscriptionTopicResourceTriggerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubscriptionTopicResourceTriggerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setResourceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'supportedInteraction';
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
          instance.addSupportedInteractionElement(datatype);
        }
      });
    }

    fieldName = 'queryCriteria';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SubscriptionTopicResourceTriggerQueryCriteriaComponent | undefined = SubscriptionTopicResourceTriggerQueryCriteriaComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQueryCriteria(component);
    }

    fieldName = 'fhirPathCriteria';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setFhirPathCriteriaElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubscriptionTopic.resourceTrigger.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text representation of the resource trigger
   * - **Definition:** The human readable description of this resource trigger for the SubscriptionTopic -  for example, "An Encounter enters the \'in-progress\' state".
   * - **Comment:** Implementation of particular subscription topics might not use a computable definition and instead base their design on the definition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * SubscriptionTopic.resourceTrigger.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data Type or Resource (reference to definition) for this trigger definition
   * - **Definition:** URL of the Resource that is the type used in this resource trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see [ElementDefinition.type.code](https://hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.type.code).
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource: UriType | null;

  /**
   * FHIR CodeSystem: RestfulInteraction
   *
   * @see {@link RestfulInteractionEnum }
   */
  private readonly restfulInteractionEnum: RestfulInteractionEnum;

  /**
   * SubscriptionTopic.resourceTrigger.supportedInteraction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** create | update | delete
   * - **Definition:** The FHIR RESTful interaction which can be used to trigger a notification for the SubscriptionTopic. Multiple values are considered OR joined (e.g., CREATE or UPDATE). If not present, all supported interactions are assumed.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  private supportedInteraction?: EnumCodeType[] | undefined;

  /**
   * SubscriptionTopic.resourceTrigger.queryCriteria Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Query based trigger rule
   * - **Definition:** The FHIR query based rules that the server should use to determine when to trigger a notification for this subscription topic.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private queryCriteria?: SubscriptionTopicResourceTriggerQueryCriteriaComponent | undefined;

  /**
   * SubscriptionTopic.resourceTrigger.fhirPathCriteria Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIRPath based trigger rule
   * - **Definition:** The FHIRPath based rules that the server should use to determine when to trigger a notification for this topic.
   * - **Comment:** FHIRPath expression with %previous and %current vars.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private fhirPathCriteria?: StringType | undefined;

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
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.description (${String(value)})`;
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
   * @returns the `resource` property value as a UriType object if defined; else null
   */
  public getResourceElement(): UriType | null {
    return this.resource;
  }

  /**
   * Assigns the provided PrimitiveType value to the `resource` property.
   *
   * @param element - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResourceElement(element: UriType): this {
    assertIsDefined<UriType>(element, `SubscriptionTopic.resourceTrigger.resource is required`);
    const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.resource; Provided value is not an instance of UriType.`;
    assertFhirType<UriType>(element, UriType, optErrMsg);
    this.resource = element;
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResourceElement(): boolean {
    return isDefined<UriType>(this.resource) && !this.resource.isEmpty();
  }

  /**
   * @returns the `resource` property value as a fhirUri if defined; else null
   */
  public getResource(): fhirUri | null {
    if (this.resource?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.resource.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `resource` property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResource(value: fhirUri): this {
    assertIsDefined<fhirUri>(value, `SubscriptionTopic.resourceTrigger.resource is required`);
    const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.resource (${String(value)})`;
    this.resource = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return this.hasResourceElement();
  }

  /**
   * @returns the `supportedInteraction` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public getSupportedInteractionEnumType(): EnumCodeType[] {
    return this.supportedInteraction ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `supportedInteraction` property.
   *
   * @param enumType - the `supportedInteraction` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public setSupportedInteractionEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SubscriptionTopic.resourceTrigger.supportedInteraction`;
      assertEnumCodeTypeList<RestfulInteractionEnum>(enumType, RestfulInteractionEnum, errMsgPrefix);
      this.supportedInteraction = enumType;
    } else {
      this.supportedInteraction = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `supportedInteraction` array property.
   *
   * @param enumType - the `supportedInteraction` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public addSupportedInteractionEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SubscriptionTopic.resourceTrigger.supportedInteraction`;
      assertEnumCodeType<RestfulInteractionEnum>(enumType, RestfulInteractionEnum, errMsgPrefix);
      this.initSupportedInteraction();
      this.supportedInteraction?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportedInteraction` property exists and has a value; `false` otherwise
   */
  public hasSupportedInteractionEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.supportedInteraction) && this.supportedInteraction.some((item: EnumCodeType) => !item.isEmpty()) && this.supportedInteraction.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `supportedInteraction` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public getSupportedInteractionElement(): CodeType[] {
    if (this.supportedInteraction === undefined) {
      return [] as CodeType[];
    }
    return this.supportedInteraction as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `supportedInteraction` property.
   *
   * @param element - the `supportedInteraction` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public setSupportedInteractionElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.supportedInteraction; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.restfulInteractionEnum));
      });
      this.supportedInteraction = enumCodeTypes;
    } else {
      this.supportedInteraction = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `supportedInteraction` array property.
   *
   * @param element - the `supportedInteraction` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public addSupportedInteractionElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.supportedInteraction; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initSupportedInteraction();
      this.supportedInteraction?.push(new EnumCodeType(element, this.restfulInteractionEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `supportedInteraction` property exists and has a value; `false` otherwise
   */
  public hasSupportedInteractionElement(): boolean {
    return this.hasSupportedInteractionEnumType();
  }

  /**
   * @returns the `supportedInteraction` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public getSupportedInteraction(): fhirCode[] {
    if (this.supportedInteraction === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.supportedInteraction) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `supportedInteraction` property.
   *
   * @param value - the `supportedInteraction` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public setSupportedInteraction(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.supportedInteraction; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.restfulInteractionEnum));
      });
      this.supportedInteraction = enumCodeTypes;
    } else {
      this.supportedInteraction = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `supportedInteraction` array property.
   *
   * @param value - the `supportedInteraction` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public addSupportedInteraction(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initSupportedInteraction();
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.supportedInteraction; Provided value is not an instance of fhirCode.`;
      this.supportedInteraction?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.restfulInteractionEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `supportedInteraction` property exists and has a value; `false` otherwise
   */
  public hasSupportedInteraction(): boolean {
    return this.hasSupportedInteractionEnumType();
  }

  /**
   * Initialize the supportedInteraction property
   */
  private initSupportedInteraction(): void {
    if(!this.hasSupportedInteractionEnumType()) {
      this.supportedInteraction = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `queryCriteria` property value as a SubscriptionTopicResourceTriggerQueryCriteriaComponent object if defined; else an empty SubscriptionTopicResourceTriggerQueryCriteriaComponent object
   */
  public getQueryCriteria(): SubscriptionTopicResourceTriggerQueryCriteriaComponent {
    return this.queryCriteria ?? new SubscriptionTopicResourceTriggerQueryCriteriaComponent();
  }

  /**
   * Assigns the provided QueryCriteria object value to the `queryCriteria` property.
   *
   * @param value - the `queryCriteria` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQueryCriteria(value: SubscriptionTopicResourceTriggerQueryCriteriaComponent | undefined): this {
    if (isDefined<SubscriptionTopicResourceTriggerQueryCriteriaComponent>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.queryCriteria; Provided element is not an instance of SubscriptionTopicResourceTriggerQueryCriteriaComponent.`;
      assertFhirType<SubscriptionTopicResourceTriggerQueryCriteriaComponent>(value, SubscriptionTopicResourceTriggerQueryCriteriaComponent, optErrMsg);
      this.queryCriteria = value;
    } else {
      this.queryCriteria = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `queryCriteria` property exists and has a value; `false` otherwise
   */
  public hasQueryCriteria(): boolean {
    return isDefined<SubscriptionTopicResourceTriggerQueryCriteriaComponent>(this.queryCriteria) && !this.queryCriteria.isEmpty();
  }

  /**
   * @returns the `fhirPathCriteria` property value as a StringType object if defined; else an empty StringType object
   */
  public getFhirPathCriteriaElement(): StringType {
    return this.fhirPathCriteria ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `fhirPathCriteria` property.
   *
   * @param element - the `fhirPathCriteria` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFhirPathCriteriaElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.fhirPathCriteria; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.fhirPathCriteria = element;
    } else {
      this.fhirPathCriteria = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fhirPathCriteria` property exists and has a value; `false` otherwise
   */
  public hasFhirPathCriteriaElement(): boolean {
    return isDefined<StringType>(this.fhirPathCriteria) && !this.fhirPathCriteria.isEmpty();
  }

  /**
   * @returns the `fhirPathCriteria` property value as a fhirString if defined; else undefined
   */
  public getFhirPathCriteria(): fhirString | undefined {
    return this.fhirPathCriteria?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `fhirPathCriteria` property.
   *
   * @param value - the `fhirPathCriteria` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFhirPathCriteria(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.fhirPathCriteria (${String(value)})`;
      this.fhirPathCriteria = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.fhirPathCriteria = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fhirPathCriteria` property exists and has a value; `false` otherwise
   */
  public hasFhirPathCriteria(): boolean {
    return this.hasFhirPathCriteriaElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubscriptionTopic.resourceTrigger';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.resource,
      this.supportedInteraction,
      this.queryCriteria,
      this.fhirPathCriteria,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubscriptionTopicResourceTriggerComponent {
    const dest = new SubscriptionTopicResourceTriggerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubscriptionTopicResourceTriggerComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.resource = this.resource ? this.resource.copy() : null;
    const supportedInteractionList = copyListValues<EnumCodeType>(this.supportedInteraction);
    dest.supportedInteraction = supportedInteractionList.length === 0 ? undefined : supportedInteractionList;
    dest.queryCriteria = this.queryCriteria?.copy();
    dest.fhirPathCriteria = this.fhirPathCriteria?.copy();
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasResourceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirUri>(this.getResourceElement()!, 'resource', jsonObj);
    } else {
      missingReqdProperties.push(`SubscriptionTopic.resourceTrigger.resource`);
    }

    if (this.hasSupportedInteractionElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getSupportedInteractionElement(), 'supportedInteraction', jsonObj);
    }

    if (this.hasQueryCriteria()) {
      setFhirBackboneElementJson(this.getQueryCriteria(), 'queryCriteria', jsonObj);
    }

    if (this.hasFhirPathCriteriaElement()) {
      setFhirPrimitiveJson<fhirString>(this.getFhirPathCriteriaElement(), 'fhirPathCriteria', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * SubscriptionTopicResourceTriggerQueryCriteriaComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Query based trigger rule
 * - **Definition:** The FHIR query based rules that the server should use to determine when to trigger a notification for this subscription topic.
 *
 * @category Data Models: Resource
 * @see [FHIR SubscriptionTopic](http://hl7.org/fhir/StructureDefinition/SubscriptionTopic)
 */
export class SubscriptionTopicResourceTriggerQueryCriteriaComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.subscriptiontopicCrBehaviorEnum = new SubscriptiontopicCrBehaviorEnum();
  }

  /**
   * Parse the provided `SubscriptionTopicResourceTriggerQueryCriteriaComponent` JSON to instantiate the SubscriptionTopicResourceTriggerQueryCriteriaComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubscriptionTopicResourceTriggerQueryCriteriaComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubscriptionTopicResourceTriggerQueryCriteriaComponent
   * @returns SubscriptionTopicResourceTriggerQueryCriteriaComponent data model or undefined for `SubscriptionTopicResourceTriggerQueryCriteriaComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubscriptionTopicResourceTriggerQueryCriteriaComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubscriptionTopicResourceTriggerQueryCriteriaComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubscriptionTopicResourceTriggerQueryCriteriaComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'previous';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPreviousElement(datatype);
    }

    fieldName = 'resultForCreate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setResultForCreateElement(datatype);
    }

    fieldName = 'current';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCurrentElement(datatype);
    }

    fieldName = 'resultForDelete';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setResultForDeleteElement(datatype);
    }

    fieldName = 'requireBoth';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setRequireBothElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SubscriptionTopic.resourceTrigger.queryCriteria.previous Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Rule applied to previous resource state
   * - **Definition:** The FHIR query based rules are applied to the previous resource state (e.g., state before an update).
   * - **Comment:** The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading slash character (`/`).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private previous?: StringType | undefined;

  /**
   * FHIR CodeSystem: SubscriptiontopicCrBehavior
   *
   * @see {@link SubscriptiontopicCrBehaviorEnum }
   */
  private readonly subscriptiontopicCrBehaviorEnum: SubscriptiontopicCrBehaviorEnum;

  /**
   * SubscriptionTopic.resourceTrigger.queryCriteria.resultForCreate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** test-passes | test-fails
   * - **Definition:** For `create` interactions, should the `previous` criteria count as an automatic pass or an automatic fail. If not present, the testing behavior during `create` interactions is unspecified (server discretion).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  private resultForCreate?: EnumCodeType | undefined;

  /**
   * SubscriptionTopic.resourceTrigger.queryCriteria.current Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Rule applied to current resource state
   * - **Definition:** The FHIR query based rules are applied to the current resource state (e.g., state after an update).
   * - **Comment:** The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading slash character (`/`).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private current?: StringType | undefined;

  /**
   * SubscriptionTopic.resourceTrigger.queryCriteria.resultForDelete Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** test-passes | test-fails
   * - **Definition:** For \'delete\' interactions, should the \'current\' query criteria count as an automatic pass or an automatic fail. If not present, the testing behavior during `delete` interactions is unspecified (server discretion).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  private resultForDelete?: EnumCodeType | undefined;

  /**
   * SubscriptionTopic.resourceTrigger.queryCriteria.requireBoth Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Both must be true flag
   * - **Definition:** If set to `true`, both the `current` and `previous` query criteria must evaluate `true` to trigger a notification for this topic.  If set to `false` or not present, a notification for this topic will be triggered if either the `current` or `previous` tests evaluate to `true`.
   * - **Comment:** Please note the interaction between this element and the `resultForCreate`/`resultForDelete` elements during `create` and `delete` interactions.  For example, if `resultForCreate` is set to `test-passes`, setting `requireBoth` to `false` means that every `create` will trigger a notification while setting `requireBoth` to `true` will result in notifications if the `current` test passes.  Similarly, if `resultForCreate` is set to `test-fails`, setting `requireBoth` to `true` means that no `create` will be able to generate a notification while setting `requireBoth` to `false` will result in notifications if the `current` test passes.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private requireBoth?: BooleanType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `previous` property value as a StringType object if defined; else an empty StringType object
   */
  public getPreviousElement(): StringType {
    return this.previous ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `previous` property.
   *
   * @param element - the `previous` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreviousElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.queryCriteria.previous; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.previous = element;
    } else {
      this.previous = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `previous` property exists and has a value; `false` otherwise
   */
  public hasPreviousElement(): boolean {
    return isDefined<StringType>(this.previous) && !this.previous.isEmpty();
  }

  /**
   * @returns the `previous` property value as a fhirString if defined; else undefined
   */
  public getPrevious(): fhirString | undefined {
    return this.previous?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `previous` property.
   *
   * @param value - the `previous` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPrevious(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.queryCriteria.previous (${String(value)})`;
      this.previous = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.previous = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `previous` property exists and has a value; `false` otherwise
   */
  public hasPrevious(): boolean {
    return this.hasPreviousElement();
  }

  /**
   * @returns the `resultForCreate` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public getResultForCreateEnumType(): EnumCodeType | undefined {
    return this.resultForCreate;
  }

  /**
   * Assigns the provided EnumCodeType value to the `resultForCreate` property.
   *
   * @param enumType - the `resultForCreate` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public setResultForCreateEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid SubscriptionTopic.resourceTrigger.queryCriteria.resultForCreate';
      assertEnumCodeType<SubscriptiontopicCrBehaviorEnum>(enumType, SubscriptiontopicCrBehaviorEnum, errMsgPrefix);
      this.resultForCreate = enumType;
    } else {
      this.resultForCreate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resultForCreate` property exists and has a value; `false` otherwise
   */
  public hasResultForCreateEnumType(): boolean {
    return isDefined<EnumCodeType>(this.resultForCreate) && !this.resultForCreate.isEmpty() && this.resultForCreate.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `resultForCreate` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public getResultForCreateElement(): CodeType | undefined {
    if (this.resultForCreate === undefined) {
      return undefined;
    }
    return this.resultForCreate as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `resultForCreate` property.
   *
   * @param element - the `resultForCreate` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public setResultForCreateElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.queryCriteria.resultForCreate; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.resultForCreate = new EnumCodeType(element, this.subscriptiontopicCrBehaviorEnum);
    } else {
      this.resultForCreate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resultForCreate` property exists and has a value; `false` otherwise
   */
  public hasResultForCreateElement(): boolean {
    return this.hasResultForCreateEnumType();
  }

  /**
   * @returns the `resultForCreate` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public getResultForCreate(): fhirCode | undefined {
    if (this.resultForCreate === undefined) {
      return undefined;
    }
    return this.resultForCreate.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `resultForCreate` property.
   *
   * @param value - the `resultForCreate` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public setResultForCreate(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.queryCriteria.resultForCreate; Provided value is not an instance of fhirCode.`;
      this.resultForCreate = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.subscriptiontopicCrBehaviorEnum);
    } else {
      this.resultForCreate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resultForCreate` property exists and has a value; `false` otherwise
   */
  public hasResultForCreate(): boolean {
    return this.hasResultForCreateEnumType();
  }

  /**
   * @returns the `current` property value as a StringType object if defined; else an empty StringType object
   */
  public getCurrentElement(): StringType {
    return this.current ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `current` property.
   *
   * @param element - the `current` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCurrentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.queryCriteria.current; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.current = element;
    } else {
      this.current = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `current` property exists and has a value; `false` otherwise
   */
  public hasCurrentElement(): boolean {
    return isDefined<StringType>(this.current) && !this.current.isEmpty();
  }

  /**
   * @returns the `current` property value as a fhirString if defined; else undefined
   */
  public getCurrent(): fhirString | undefined {
    return this.current?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `current` property.
   *
   * @param value - the `current` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCurrent(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.queryCriteria.current (${String(value)})`;
      this.current = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.current = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `current` property exists and has a value; `false` otherwise
   */
  public hasCurrent(): boolean {
    return this.hasCurrentElement();
  }

  /**
   * @returns the `resultForDelete` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public getResultForDeleteEnumType(): EnumCodeType | undefined {
    return this.resultForDelete;
  }

  /**
   * Assigns the provided EnumCodeType value to the `resultForDelete` property.
   *
   * @param enumType - the `resultForDelete` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public setResultForDeleteEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid SubscriptionTopic.resourceTrigger.queryCriteria.resultForDelete';
      assertEnumCodeType<SubscriptiontopicCrBehaviorEnum>(enumType, SubscriptiontopicCrBehaviorEnum, errMsgPrefix);
      this.resultForDelete = enumType;
    } else {
      this.resultForDelete = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resultForDelete` property exists and has a value; `false` otherwise
   */
  public hasResultForDeleteEnumType(): boolean {
    return isDefined<EnumCodeType>(this.resultForDelete) && !this.resultForDelete.isEmpty() && this.resultForDelete.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `resultForDelete` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public getResultForDeleteElement(): CodeType | undefined {
    if (this.resultForDelete === undefined) {
      return undefined;
    }
    return this.resultForDelete as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `resultForDelete` property.
   *
   * @param element - the `resultForDelete` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public setResultForDeleteElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.queryCriteria.resultForDelete; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.resultForDelete = new EnumCodeType(element, this.subscriptiontopicCrBehaviorEnum);
    } else {
      this.resultForDelete = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resultForDelete` property exists and has a value; `false` otherwise
   */
  public hasResultForDeleteElement(): boolean {
    return this.hasResultForDeleteEnumType();
  }

  /**
   * @returns the `resultForDelete` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public getResultForDelete(): fhirCode | undefined {
    if (this.resultForDelete === undefined) {
      return undefined;
    }
    return this.resultForDelete.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `resultForDelete` property.
   *
   * @param value - the `resultForDelete` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SubscriptiontopicCrBehaviorEnum }
   */
  public setResultForDelete(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.queryCriteria.resultForDelete; Provided value is not an instance of fhirCode.`;
      this.resultForDelete = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.subscriptiontopicCrBehaviorEnum);
    } else {
      this.resultForDelete = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resultForDelete` property exists and has a value; `false` otherwise
   */
  public hasResultForDelete(): boolean {
    return this.hasResultForDeleteEnumType();
  }

  /**
   * @returns the `requireBoth` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getRequireBothElement(): BooleanType {
    return this.requireBoth ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `requireBoth` property.
   *
   * @param element - the `requireBoth` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequireBothElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.queryCriteria.requireBoth; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.requireBoth = element;
    } else {
      this.requireBoth = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requireBoth` property exists and has a value; `false` otherwise
   */
  public hasRequireBothElement(): boolean {
    return isDefined<BooleanType>(this.requireBoth) && !this.requireBoth.isEmpty();
  }

  /**
   * @returns the `requireBoth` property value as a fhirBoolean if defined; else undefined
   */
  public getRequireBoth(): fhirBoolean | undefined {
    return this.requireBoth?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `requireBoth` property.
   *
   * @param value - the `requireBoth` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequireBoth(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.resourceTrigger.queryCriteria.requireBoth (${String(value)})`;
      this.requireBoth = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.requireBoth = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requireBoth` property exists and has a value; `false` otherwise
   */
  public hasRequireBoth(): boolean {
    return this.hasRequireBothElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubscriptionTopic.resourceTrigger.queryCriteria';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.previous,
      this.resultForCreate,
      this.current,
      this.resultForDelete,
      this.requireBoth,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubscriptionTopicResourceTriggerQueryCriteriaComponent {
    const dest = new SubscriptionTopicResourceTriggerQueryCriteriaComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubscriptionTopicResourceTriggerQueryCriteriaComponent): void {
    super.copyValues(dest);
    dest.previous = this.previous?.copy();
    dest.resultForCreate = this.resultForCreate?.copy();
    dest.current = this.current?.copy();
    dest.resultForDelete = this.resultForDelete?.copy();
    dest.requireBoth = this.requireBoth?.copy();
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

    if (this.hasPreviousElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPreviousElement(), 'previous', jsonObj);
    }

    if (this.hasResultForCreateElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getResultForCreateElement()!, 'resultForCreate', jsonObj);
    }

    if (this.hasCurrentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCurrentElement(), 'current', jsonObj);
    }

    if (this.hasResultForDeleteElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getResultForDeleteElement()!, 'resultForDelete', jsonObj);
    }

    if (this.hasRequireBothElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getRequireBothElement(), 'requireBoth', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SubscriptionTopicEventTriggerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Event definitions the SubscriptionTopic
 * - **Definition:** Event definition which can be used to trigger the SubscriptionTopic.
 *
 * @category Data Models: Resource
 * @see [FHIR SubscriptionTopic](http://hl7.org/fhir/StructureDefinition/SubscriptionTopic)
 */
export class SubscriptionTopicEventTriggerComponent extends BackboneElement implements IBackboneElement {
  constructor(event: CodeableConcept | null = null, resource: UriType | fhirUri | null = null) {
    super();

    this.event = null;
    if (isDefined<CodeableConcept>(event)) {
      this.setEvent(event);
    }

    this.resource = null;
    if (isDefined<UriType | fhirUri>(resource)) {
      if (resource instanceof PrimitiveType) {
        this.setResourceElement(resource);
      } else {
        this.setResource(resource);
      }
    }
  }

  /**
   * Parse the provided `SubscriptionTopicEventTriggerComponent` JSON to instantiate the SubscriptionTopicEventTriggerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubscriptionTopicEventTriggerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubscriptionTopicEventTriggerComponent
   * @returns SubscriptionTopicEventTriggerComponent data model or undefined for `SubscriptionTopicEventTriggerComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubscriptionTopicEventTriggerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubscriptionTopicEventTriggerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubscriptionTopicEventTriggerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'event';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setEvent(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setResourceElement(datatype);
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
   * SubscriptionTopic.eventTrigger.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text representation of the event trigger
   * - **Definition:** The human readable description of an event to trigger a notification for the SubscriptionTopic - for example, "Patient Admission, as defined in HL7v2 via message ADT^A01". Multiple values are considered OR joined (e.g., matching any single event listed).
   * - **Comment:** Implementation of particular subscription topics might not use a computable definition and instead base their design on the definition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * SubscriptionTopic.eventTrigger.event Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Event which can trigger a notification from the SubscriptionTopic
   * - **Definition:** A well-defined event which can be used to trigger notifications from the SubscriptionTopic.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private event: CodeableConcept | null;

  /**
   * SubscriptionTopic.eventTrigger.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Data Type or Resource (reference to definition) for this trigger definition
   * - **Definition:** URL of the Resource that is the focus type used in this event trigger.  Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient.  For more information, see [ElementDefinition.type.code](https://hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.type.code).
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource: UriType | null;

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
      const optErrMsg = `Invalid SubscriptionTopic.eventTrigger.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.eventTrigger.description (${String(value)})`;
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
   * @returns the `event` property value as a CodeableConcept object if defined; else null
   */
  public getEvent(): CodeableConcept | null {
    return this.event;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `event` property.
   *
   * @param value - the `event` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEvent(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `SubscriptionTopic.eventTrigger.event is required`);
    const optErrMsg = `Invalid SubscriptionTopic.eventTrigger.event; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.event = value;
    return this;
  }

  /**
   * @returns `true` if the `event` property exists and has a value; `false` otherwise
   */
  public hasEvent(): boolean {
    return isDefined<CodeableConcept>(this.event) && !this.event.isEmpty();
  }

  /**
   * @returns the `resource` property value as a UriType object if defined; else null
   */
  public getResourceElement(): UriType | null {
    return this.resource;
  }

  /**
   * Assigns the provided PrimitiveType value to the `resource` property.
   *
   * @param element - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResourceElement(element: UriType): this {
    assertIsDefined<UriType>(element, `SubscriptionTopic.eventTrigger.resource is required`);
    const optErrMsg = `Invalid SubscriptionTopic.eventTrigger.resource; Provided value is not an instance of UriType.`;
    assertFhirType<UriType>(element, UriType, optErrMsg);
    this.resource = element;
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResourceElement(): boolean {
    return isDefined<UriType>(this.resource) && !this.resource.isEmpty();
  }

  /**
   * @returns the `resource` property value as a fhirUri if defined; else null
   */
  public getResource(): fhirUri | null {
    if (this.resource?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.resource.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `resource` property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResource(value: fhirUri): this {
    assertIsDefined<fhirUri>(value, `SubscriptionTopic.eventTrigger.resource is required`);
    const optErrMsg = `Invalid SubscriptionTopic.eventTrigger.resource (${String(value)})`;
    this.resource = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return this.hasResourceElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubscriptionTopic.eventTrigger';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.event,
      this.resource,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubscriptionTopicEventTriggerComponent {
    const dest = new SubscriptionTopicEventTriggerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubscriptionTopicEventTriggerComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.event = this.event ? this.event.copy() : null;
    dest.resource = this.resource ? this.resource.copy() : null;
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasEvent()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getEvent()!, 'event', jsonObj);
    } else {
      missingReqdProperties.push(`SubscriptionTopic.eventTrigger.event`);
    }

    if (this.hasResourceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirUri>(this.getResourceElement()!, 'resource', jsonObj);
    } else {
      missingReqdProperties.push(`SubscriptionTopic.eventTrigger.resource`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * SubscriptionTopicCanFilterByComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Properties by which a Subscription can filter notifications from the SubscriptionTopic
 * - **Definition:** List of properties by which Subscriptions on the SubscriptionTopic can be filtered. May be defined Search Parameters (e.g., Encounter.patient) or parameters defined within this SubscriptionTopic context (e.g., hub.event).
 *
 * @category Data Models: Resource
 * @see [FHIR SubscriptionTopic](http://hl7.org/fhir/StructureDefinition/SubscriptionTopic)
 */
export class SubscriptionTopicCanFilterByComponent extends BackboneElement implements IBackboneElement {
  constructor(filterParameter: StringType | fhirString | null = null) {
    super();

    this.searchComparatorEnum = new SearchComparatorEnum();
    this.searchModifierCodeEnum = new SearchModifierCodeEnum();

    this.filterParameter = null;
    if (isDefined<StringType | fhirString>(filterParameter)) {
      if (filterParameter instanceof PrimitiveType) {
        this.setFilterParameterElement(filterParameter);
      } else {
        this.setFilterParameter(filterParameter);
      }
    }
  }

  /**
   * Parse the provided `SubscriptionTopicCanFilterByComponent` JSON to instantiate the SubscriptionTopicCanFilterByComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubscriptionTopicCanFilterByComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubscriptionTopicCanFilterByComponent
   * @returns SubscriptionTopicCanFilterByComponent data model or undefined for `SubscriptionTopicCanFilterByComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubscriptionTopicCanFilterByComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubscriptionTopicCanFilterByComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubscriptionTopicCanFilterByComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setResourceElement(datatype);
    }

    fieldName = 'filterParameter';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setFilterParameterElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'filterDefinition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setFilterDefinitionElement(datatype);
    }

    fieldName = 'comparator';
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
          instance.addComparatorElement(datatype);
        }
      });
    }

    fieldName = 'modifier';
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
          instance.addModifierElement(datatype);
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
   * SubscriptionTopic.canFilterBy.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of this filter parameter
   * - **Definition:** Description of how this filtering parameter is intended to be used.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * SubscriptionTopic.canFilterBy.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** URL of the triggering Resource that this filter applies to
   * - **Definition:** URL of the Resource that is the type used in this filter. This is the "focus" of the topic (or one of them if there are more than one). It will be the same, a generality, or a specificity of SubscriptionTopic.resourceTrigger.resource or SubscriptionTopic.eventTrigger.resource when they are present.
   * - **Comment:** URL of the Resource that is the type used in this filter. Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, "Patient" maps to http://hl7.org/fhir/StructureDefinition/Patient. For more information, see [ElementDefinition.type.code](https://hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.type.code).
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource?: UriType | undefined;

  /**
   * SubscriptionTopic.canFilterBy.filterParameter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human-readable and computation-friendly name for a filter parameter usable by subscriptions on this topic, via Subscription.filterBy.filterParameter
   * - **Definition:** Either the canonical URL to a search parameter (like "http://hl7.org/fhir/SearchParameter/encounter-patient") or topic-defined parameter (like "hub.event") which is a label for the filter.
   * - **Comment:** Chained parameters are allowed (like "patient.gender") - but can not use colons or modifiers.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private filterParameter: StringType | null;

  /**
   * SubscriptionTopic.canFilterBy.filterDefinition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical URL for a filterParameter definition
   * - **Definition:** Either the canonical URL to a search parameter (like "http://hl7.org/fhir/SearchParameter/encounter-patient") or the officially-defined URI for a shared filter concept (like "http://example.org/concepts/shared-common-event").
   * - **Comment:** Chained parameters are allowed (like "patient.gender") - but can not use colons or modifiers.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private filterDefinition?: UriType | undefined;

  /**
   * FHIR CodeSystem: SearchComparator
   *
   * @see {@link SearchComparatorEnum }
   */
  private readonly searchComparatorEnum: SearchComparatorEnum;

  /**
   * SubscriptionTopic.canFilterBy.comparator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** eq | ne | gt | lt | ge | le | sa | eb | ap
   * - **Definition:** Comparators allowed for the filter parameter.
   * - **Comment:** If no comparators are listed, clients should not expect servers to support any comparators.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  private comparator?: EnumCodeType[] | undefined;

  /**
   * FHIR CodeSystem: SearchModifierCode
   *
   * @see {@link SearchModifierCodeEnum }
   */
  private readonly searchModifierCodeEnum: SearchModifierCodeEnum;

  /**
   * SubscriptionTopic.canFilterBy.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | of-type | code-text | text-advanced | iterate
   * - **Definition:** Modifiers allowed for the filter parameter.
   * - **Comment:** If no modifiers are listed, clients should not expect servers to support any modifiers.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  private modifier?: EnumCodeType[] | undefined;

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
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.description (${String(value)})`;
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
   * @returns the `resource` property value as a UriType object if defined; else an empty UriType object
   */
  public getResourceElement(): UriType {
    return this.resource ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `resource` property.
   *
   * @param element - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResourceElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.resource; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
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
    return isDefined<UriType>(this.resource) && !this.resource.isEmpty();
  }

  /**
   * @returns the `resource` property value as a fhirUri if defined; else undefined
   */
  public getResource(): fhirUri | undefined {
    return this.resource?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `resource` property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResource(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.resource (${String(value)})`;
      this.resource = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
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
   * @returns the `filterParameter` property value as a StringType object if defined; else null
   */
  public getFilterParameterElement(): StringType | null {
    return this.filterParameter;
  }

  /**
   * Assigns the provided PrimitiveType value to the `filterParameter` property.
   *
   * @param element - the `filterParameter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFilterParameterElement(element: StringType): this {
    assertIsDefined<StringType>(element, `SubscriptionTopic.canFilterBy.filterParameter is required`);
    const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.filterParameter; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.filterParameter = element;
    return this;
  }

  /**
   * @returns `true` if the `filterParameter` property exists and has a value; `false` otherwise
   */
  public hasFilterParameterElement(): boolean {
    return isDefined<StringType>(this.filterParameter) && !this.filterParameter.isEmpty();
  }

  /**
   * @returns the `filterParameter` property value as a fhirString if defined; else null
   */
  public getFilterParameter(): fhirString | null {
    if (this.filterParameter?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.filterParameter.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `filterParameter` property.
   *
   * @param value - the `filterParameter` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFilterParameter(value: fhirString): this {
    assertIsDefined<fhirString>(value, `SubscriptionTopic.canFilterBy.filterParameter is required`);
    const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.filterParameter (${String(value)})`;
    this.filterParameter = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `filterParameter` property exists and has a value; `false` otherwise
   */
  public hasFilterParameter(): boolean {
    return this.hasFilterParameterElement();
  }

  /**
   * @returns the `filterDefinition` property value as a UriType object if defined; else an empty UriType object
   */
  public getFilterDefinitionElement(): UriType {
    return this.filterDefinition ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `filterDefinition` property.
   *
   * @param element - the `filterDefinition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFilterDefinitionElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.filterDefinition; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.filterDefinition = element;
    } else {
      this.filterDefinition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `filterDefinition` property exists and has a value; `false` otherwise
   */
  public hasFilterDefinitionElement(): boolean {
    return isDefined<UriType>(this.filterDefinition) && !this.filterDefinition.isEmpty();
  }

  /**
   * @returns the `filterDefinition` property value as a fhirUri if defined; else undefined
   */
  public getFilterDefinition(): fhirUri | undefined {
    return this.filterDefinition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `filterDefinition` property.
   *
   * @param value - the `filterDefinition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFilterDefinition(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.filterDefinition (${String(value)})`;
      this.filterDefinition = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.filterDefinition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `filterDefinition` property exists and has a value; `false` otherwise
   */
  public hasFilterDefinition(): boolean {
    return this.hasFilterDefinitionElement();
  }

  /**
   * @returns the `comparator` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public getComparatorEnumType(): EnumCodeType[] {
    return this.comparator ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `comparator` property.
   *
   * @param enumType - the `comparator` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public setComparatorEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SubscriptionTopic.canFilterBy.comparator`;
      assertEnumCodeTypeList<SearchComparatorEnum>(enumType, SearchComparatorEnum, errMsgPrefix);
      this.comparator = enumType;
    } else {
      this.comparator = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `comparator` array property.
   *
   * @param enumType - the `comparator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public addComparatorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SubscriptionTopic.canFilterBy.comparator`;
      assertEnumCodeType<SearchComparatorEnum>(enumType, SearchComparatorEnum, errMsgPrefix);
      this.initComparator();
      this.comparator?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `comparator` property exists and has a value; `false` otherwise
   */
  public hasComparatorEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.comparator) && this.comparator.some((item: EnumCodeType) => !item.isEmpty()) && this.comparator.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `comparator` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public getComparatorElement(): CodeType[] {
    if (this.comparator === undefined) {
      return [] as CodeType[];
    }
    return this.comparator as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `comparator` property.
   *
   * @param element - the `comparator` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public setComparatorElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.comparator; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.searchComparatorEnum));
      });
      this.comparator = enumCodeTypes;
    } else {
      this.comparator = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `comparator` array property.
   *
   * @param element - the `comparator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public addComparatorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.comparator; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initComparator();
      this.comparator?.push(new EnumCodeType(element, this.searchComparatorEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `comparator` property exists and has a value; `false` otherwise
   */
  public hasComparatorElement(): boolean {
    return this.hasComparatorEnumType();
  }

  /**
   * @returns the `comparator` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public getComparator(): fhirCode[] {
    if (this.comparator === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.comparator) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `comparator` property.
   *
   * @param value - the `comparator` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public setComparator(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.comparator; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.searchComparatorEnum));
      });
      this.comparator = enumCodeTypes;
    } else {
      this.comparator = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `comparator` array property.
   *
   * @param value - the `comparator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public addComparator(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initComparator();
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.comparator; Provided value is not an instance of fhirCode.`;
      this.comparator?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.searchComparatorEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `comparator` property exists and has a value; `false` otherwise
   */
  public hasComparator(): boolean {
    return this.hasComparatorEnumType();
  }

  /**
   * Initialize the comparator property
   */
  private initComparator(): void {
    if(!this.hasComparatorEnumType()) {
      this.comparator = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `modifier` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public getModifierEnumType(): EnumCodeType[] {
    return this.modifier ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `modifier` property.
   *
   * @param enumType - the `modifier` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public setModifierEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SubscriptionTopic.canFilterBy.modifier`;
      assertEnumCodeTypeList<SearchModifierCodeEnum>(enumType, SearchModifierCodeEnum, errMsgPrefix);
      this.modifier = enumType;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `modifier` array property.
   *
   * @param enumType - the `modifier` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public addModifierEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SubscriptionTopic.canFilterBy.modifier`;
      assertEnumCodeType<SearchModifierCodeEnum>(enumType, SearchModifierCodeEnum, errMsgPrefix);
      this.initModifier();
      this.modifier?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifierEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.modifier) && this.modifier.some((item: EnumCodeType) => !item.isEmpty()) && this.modifier.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `modifier` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public getModifierElement(): CodeType[] {
    if (this.modifier === undefined) {
      return [] as CodeType[];
    }
    return this.modifier as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `modifier` property.
   *
   * @param element - the `modifier` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public setModifierElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.modifier; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.searchModifierCodeEnum));
      });
      this.modifier = enumCodeTypes;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `modifier` array property.
   *
   * @param element - the `modifier` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public addModifierElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.modifier; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initModifier();
      this.modifier?.push(new EnumCodeType(element, this.searchModifierCodeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifierElement(): boolean {
    return this.hasModifierEnumType();
  }

  /**
   * @returns the `modifier` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public getModifier(): fhirCode[] {
    if (this.modifier === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.modifier) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `modifier` property.
   *
   * @param value - the `modifier` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public setModifier(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.modifier; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.searchModifierCodeEnum));
      });
      this.modifier = enumCodeTypes;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `modifier` array property.
   *
   * @param value - the `modifier` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public addModifier(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initModifier();
      const optErrMsg = `Invalid SubscriptionTopic.canFilterBy.modifier; Provided value is not an instance of fhirCode.`;
      this.modifier?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.searchModifierCodeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifier(): boolean {
    return this.hasModifierEnumType();
  }

  /**
   * Initialize the modifier property
   */
  private initModifier(): void {
    if(!this.hasModifierEnumType()) {
      this.modifier = [] as EnumCodeType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubscriptionTopic.canFilterBy';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.resource,
      this.filterParameter,
      this.filterDefinition,
      this.comparator,
      this.modifier,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubscriptionTopicCanFilterByComponent {
    const dest = new SubscriptionTopicCanFilterByComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubscriptionTopicCanFilterByComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.resource = this.resource?.copy();
    dest.filterParameter = this.filterParameter ? this.filterParameter.copy() : null;
    dest.filterDefinition = this.filterDefinition?.copy();
    const comparatorList = copyListValues<EnumCodeType>(this.comparator);
    dest.comparator = comparatorList.length === 0 ? undefined : comparatorList;
    const modifierList = copyListValues<EnumCodeType>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasResourceElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getResourceElement(), 'resource', jsonObj);
    }

    if (this.hasFilterParameterElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getFilterParameterElement()!, 'filterParameter', jsonObj);
    } else {
      missingReqdProperties.push(`SubscriptionTopic.canFilterBy.filterParameter`);
    }

    if (this.hasFilterDefinitionElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getFilterDefinitionElement(), 'filterDefinition', jsonObj);
    }

    if (this.hasComparatorElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getComparatorElement(), 'comparator', jsonObj);
    }

    if (this.hasModifierElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getModifierElement(), 'modifier', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * SubscriptionTopicNotificationShapeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Properties for describing the shape of notifications generated by this topic
 * - **Definition:** List of properties to describe the shape (e.g., resources) included in notifications from this Subscription Topic.
 *
 * @category Data Models: Resource
 * @see [FHIR SubscriptionTopic](http://hl7.org/fhir/StructureDefinition/SubscriptionTopic)
 */
export class SubscriptionTopicNotificationShapeComponent extends BackboneElement implements IBackboneElement {
  constructor(resource: UriType | fhirUri | null = null) {
    super();

    this.resource = null;
    if (isDefined<UriType | fhirUri>(resource)) {
      if (resource instanceof PrimitiveType) {
        this.setResourceElement(resource);
      } else {
        this.setResource(resource);
      }
    }
  }

  /**
   * Parse the provided `SubscriptionTopicNotificationShapeComponent` JSON to instantiate the SubscriptionTopicNotificationShapeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SubscriptionTopicNotificationShapeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SubscriptionTopicNotificationShapeComponent
   * @returns SubscriptionTopicNotificationShapeComponent data model or undefined for `SubscriptionTopicNotificationShapeComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SubscriptionTopicNotificationShapeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SubscriptionTopicNotificationShapeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SubscriptionTopicNotificationShapeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setResourceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'include';
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
          instance.addIncludeElement(datatype);
        }
      });
    }

    fieldName = 'revInclude';
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
          instance.addRevIncludeElement(datatype);
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
   * SubscriptionTopic.notificationShape.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** URL of the Resource that is the focus (main) resource in a notification shape
   * - **Definition:** URL of the Resource that is the type used in this shape. This is the \'focus\' resource of the topic (or one of them if there are more than one) and the root resource for this shape definition. It will be the same, a generality, or a specificity of SubscriptionTopic.resourceTrigger.resource or SubscriptionTopic.eventTrigger.resource when they are present.
   * - **Comment:** URL of the Resource that is the type used in this shape. Relative URLs are relative to the StructureDefinition root of the implemented FHIR version (e.g., http://hl7.org/fhir/StructureDefinition). For example, \'Patient\' maps to http://hl7.org/fhir/StructureDefinition/Patient. For more information, see [ElementDefinition.type.code](https://hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.type.code).
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource: UriType | null;

  /**
   * SubscriptionTopic.notificationShape.include Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Include directives, rooted in the resource for this shape
   * - **Definition:** Search-style _include directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private include?: StringType[] | undefined;

  /**
   * SubscriptionTopic.notificationShape.revInclude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reverse include directives, rooted in the resource for this shape
   * - **Definition:** Search-style _revinclude directives, rooted in the resource for this shape. Servers SHOULD include resources listed here, if they exist and the user is authorized to receive them.  Clients SHOULD be prepared to receive these additional resources, but SHALL function properly without them.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private revInclude?: StringType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `resource` property value as a UriType object if defined; else null
   */
  public getResourceElement(): UriType | null {
    return this.resource;
  }

  /**
   * Assigns the provided PrimitiveType value to the `resource` property.
   *
   * @param element - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResourceElement(element: UriType): this {
    assertIsDefined<UriType>(element, `SubscriptionTopic.notificationShape.resource is required`);
    const optErrMsg = `Invalid SubscriptionTopic.notificationShape.resource; Provided value is not an instance of UriType.`;
    assertFhirType<UriType>(element, UriType, optErrMsg);
    this.resource = element;
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResourceElement(): boolean {
    return isDefined<UriType>(this.resource) && !this.resource.isEmpty();
  }

  /**
   * @returns the `resource` property value as a fhirUri if defined; else null
   */
  public getResource(): fhirUri | null {
    if (this.resource?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.resource.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `resource` property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResource(value: fhirUri): this {
    assertIsDefined<fhirUri>(value, `SubscriptionTopic.notificationShape.resource is required`);
    const optErrMsg = `Invalid SubscriptionTopic.notificationShape.resource (${String(value)})`;
    this.resource = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return this.hasResourceElement();
  }

  /**
   * @returns the `include` property value as a StringType array
   */
  public getIncludeElement(): StringType[] {
    return this.include ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `include` property.
   *
   * @param element - the `include` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIncludeElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.notificationShape.include; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.include = element;
    } else {
      this.include = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `include` array property.
   *
   * @param element - the `include` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addIncludeElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.notificationShape.include; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initInclude();
      this.include?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `include` property exists and has a value; `false` otherwise
   */
  public hasIncludeElement(): boolean {
    return isDefinedList<StringType>(this.include) && this.include.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `include` property value as a fhirString array
   */
  public getInclude(): fhirString[] {
    this.initInclude();
    const includeValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.include!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        includeValues.push(value);
      }
    }
    return includeValues;
  }

  /**
   * Assigns the provided primitive value array to the `include` property.
   *
   * @param value - the `include` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInclude(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const includeElements = [] as StringType[];
      for (const includeValue of value) {
        const optErrMsg = `Invalid SubscriptionTopic.notificationShape.include array item (${String(includeValue)})`;
        const element = new StringType(parseFhirPrimitiveData(includeValue, fhirStringSchema, optErrMsg));
        includeElements.push(element);
      }
      this.include = includeElements;
    } else {
      this.include = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `include` array property.
   *
   * @param value - the `include` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInclude(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.notificationShape.include array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initInclude();
      this.addIncludeElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `include` property exists and has a value; `false` otherwise
   */
  public hasInclude(): boolean {
    return this.hasIncludeElement();
  }

  /**
   * Initialize the `include` property
   */
  private initInclude(): void {
    if (!this.hasInclude()) {
      this.include = [] as StringType[];
    }
  }

  /**
   * @returns the `revInclude` property value as a StringType array
   */
  public getRevIncludeElement(): StringType[] {
    return this.revInclude ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `revInclude` property.
   *
   * @param element - the `revInclude` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRevIncludeElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.notificationShape.revInclude; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.revInclude = element;
    } else {
      this.revInclude = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `revInclude` array property.
   *
   * @param element - the `revInclude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addRevIncludeElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SubscriptionTopic.notificationShape.revInclude; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initRevInclude();
      this.revInclude?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `revInclude` property exists and has a value; `false` otherwise
   */
  public hasRevIncludeElement(): boolean {
    return isDefinedList<StringType>(this.revInclude) && this.revInclude.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `revInclude` property value as a fhirString array
   */
  public getRevInclude(): fhirString[] {
    this.initRevInclude();
    const revIncludeValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.revInclude!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        revIncludeValues.push(value);
      }
    }
    return revIncludeValues;
  }

  /**
   * Assigns the provided primitive value array to the `revInclude` property.
   *
   * @param value - the `revInclude` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRevInclude(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const revIncludeElements = [] as StringType[];
      for (const revIncludeValue of value) {
        const optErrMsg = `Invalid SubscriptionTopic.notificationShape.revInclude array item (${String(revIncludeValue)})`;
        const element = new StringType(parseFhirPrimitiveData(revIncludeValue, fhirStringSchema, optErrMsg));
        revIncludeElements.push(element);
      }
      this.revInclude = revIncludeElements;
    } else {
      this.revInclude = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `revInclude` array property.
   *
   * @param value - the `revInclude` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addRevInclude(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SubscriptionTopic.notificationShape.revInclude array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initRevInclude();
      this.addRevIncludeElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `revInclude` property exists and has a value; `false` otherwise
   */
  public hasRevInclude(): boolean {
    return this.hasRevIncludeElement();
  }

  /**
   * Initialize the `revInclude` property
   */
  private initRevInclude(): void {
    if (!this.hasRevInclude()) {
      this.revInclude = [] as StringType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SubscriptionTopic.notificationShape';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.resource,
      this.include,
      this.revInclude,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SubscriptionTopicNotificationShapeComponent {
    const dest = new SubscriptionTopicNotificationShapeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SubscriptionTopicNotificationShapeComponent): void {
    super.copyValues(dest);
    dest.resource = this.resource ? this.resource.copy() : null;
    const includeList = copyListValues<StringType>(this.include);
    dest.include = includeList.length === 0 ? undefined : includeList;
    const revIncludeList = copyListValues<StringType>(this.revInclude);
    dest.revInclude = revIncludeList.length === 0 ? undefined : revIncludeList;
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

    if (this.hasResourceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirUri>(this.getResourceElement()!, 'resource', jsonObj);
    } else {
      missingReqdProperties.push(`SubscriptionTopic.notificationShape.resource`);
    }

    if (this.hasInclude()) {
      setFhirPrimitiveListJson(this.getIncludeElement(), 'include', jsonObj);
    }

    if (this.hasRevInclude()) {
      setFhirPrimitiveListJson(this.getRevIncludeElement(), 'revInclude', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
