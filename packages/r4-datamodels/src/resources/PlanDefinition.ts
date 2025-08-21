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
 * PlanDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/PlanDefinition
 * StructureDefinition.name: PlanDefinition
 * StructureDefinition.description: This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
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
  IdType,
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
  fhirId,
  fhirIdSchema,
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
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { ActionCardinalityBehaviorEnum } from '../code-systems/ActionCardinalityBehaviorEnum';
import { ActionConditionKindEnum } from '../code-systems/ActionConditionKindEnum';
import { ActionGroupingBehaviorEnum } from '../code-systems/ActionGroupingBehaviorEnum';
import { ActionParticipantTypeEnum } from '../code-systems/ActionParticipantTypeEnum';
import { ActionPrecheckBehaviorEnum } from '../code-systems/ActionPrecheckBehaviorEnum';
import { ActionRelationshipTypeEnum } from '../code-systems/ActionRelationshipTypeEnum';
import { ActionRequiredBehaviorEnum } from '../code-systems/ActionRequiredBehaviorEnum';
import { ActionSelectionBehaviorEnum } from '../code-systems/ActionSelectionBehaviorEnum';
import { Age, CodeableConcept, ContactDetail, DataRequirement, Duration, Expression, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Reference, RelatedArtifact, Timing, TriggerDefinition, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { RequestPriorityEnum } from '../code-systems/RequestPriorityEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * PlanDefinition Class
 *
 * @remarks
 * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 *
 * **FHIR Specification**
 * - **Short:** The definition of a plan for a series of actions, independent of any specific patient or context
 * - **Definition:** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR PlanDefinition](http://hl7.org/fhir/StructureDefinition/PlanDefinition)
 */
export class PlanDefinition extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'PlanDefinition.status',
    );
  }

  /**
   * Parse the provided `PlanDefinition` JSON to instantiate the PlanDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `PlanDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PlanDefinition
   * @returns PlanDefinition data model or undefined for `PlanDefinition`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): PlanDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PlanDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PlanDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'PlanDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = PlanDefinition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for PlanDefinition`;
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

    fieldName = 'subtitle';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSubtitleElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
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

    fieldName = 'subject[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const subject: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setSubject(subject);

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

    fieldName = 'usage';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setUsageElement(datatype);
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

    fieldName = 'topic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTopic(datatype);
        }
      });
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAuthor(datatype);
        }
      });
    }

    fieldName = 'editor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEditor(datatype);
        }
      });
    }

    fieldName = 'reviewer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReviewer(datatype);
        }
      });
    }

    fieldName = 'endorser';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEndorser(datatype);
        }
      });
    }

    fieldName = 'relatedArtifact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRelatedArtifact(datatype);
        }
      });
    }

    fieldName = 'library';
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
          instance.addLibraryElement(datatype);
        }
      });
    }

    fieldName = 'goal';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PlanDefinitionGoalComponent | undefined = PlanDefinitionGoalComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addGoal(component);
        }
      });
    }

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PlanDefinitionActionComponent | undefined = PlanDefinitionActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAction(component);
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
   * PlanDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this plan definition, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this plan definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this plan definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the plan definition is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the plan definition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * PlanDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the plan definition
   * - **Definition:** A formal identifier that is used to identify this plan definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this plan definition outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * PlanDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the plan definition
   * - **Definition:** The identifier that is used to identify this version of the plan definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the plan definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.
   * - **Comment:** There may be different plan definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the plan definition with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * PlanDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this plan definition (computer friendly)
   * - **Definition:** A natural language name identifying the plan definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * PlanDefinition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this plan definition (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the plan definition.
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * PlanDefinition.subtitle Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subordinate title of the plan definition
   * - **Definition:** An explanatory or alternate title for the plan definition giving additional information about its content.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subtitle?: StringType | undefined;

  /**
   * PlanDefinition.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** order-set | clinical-protocol | eca-rule | workflow-definition
   * - **Definition:** A high-level category for the plan definition that distinguishes the kinds of systems that would be interested in the plan definition.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * PlanDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this plan definition. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of plan definitions that are appropriate for use versus not.
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
   * PlanDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this plan definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of plan definitions that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level plan definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * PlanDefinition.subject[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('PlanDefinition.subject[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of individual the plan definition is focused on
   * - **Definition:** A code or group definition that describes the intended subject of the plan definition.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('PlanDefinition.subject[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private subject?: IDataType | undefined;

  /**
   * PlanDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the plan definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the plan definition changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the plan definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * PlanDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the plan definition.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the plan definition is the organization or individual primarily responsible for the maintenance and upkeep of the plan definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the plan definition. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the plan definition.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * PlanDefinition.contact Element
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
   * PlanDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the plan definition
   * - **Definition:** A free text natural language description of the plan definition from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the plan definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the plan definition as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the plan definition is presumed to be the predominant language in the place the plan definition was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * PlanDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate plan definition instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * PlanDefinition.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for plan definition (if applicable)
   * - **Definition:** A legal or geographic region in which the plan definition is intended to be used.
   * - **Comment:** It may be possible for the plan definition to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * PlanDefinition.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this plan definition is defined
   * - **Definition:** Explanation of why this plan definition is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the plan definition. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this plan definition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * PlanDefinition.usage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes the clinical usage of the plan
   * - **Definition:** A detailed description of how the plan definition is used from a clinical perspective.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private usage?: StringType | undefined;

  /**
   * PlanDefinition.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the plan definition and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * PlanDefinition.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the plan definition was approved by publisher
   * - **Definition:** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The \'date\' element may be more recent than the approval date because of minor changes or editorial corrections.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * PlanDefinition.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the plan definition was last reviewed
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
   * PlanDefinition.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the plan definition is expected to be used
   * - **Definition:** The period during which the plan definition content was or is planned to be in active use.
   * - **Comment:** The effective period for a plan definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   * - **Requirements:** Allows establishing a transition before a resource comes into effect and also allows for a sunsetting  process when new versions of the plan definition are or are expected to be used instead.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectivePeriod?: Period | undefined;

  /**
   * PlanDefinition.topic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. Education, Treatment, Assessment
   * - **Definition:** Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
   * - **Requirements:** Repositories must be able to determine how to categorize the plan definition so that it can be found by topical searches.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private topic?: CodeableConcept[] | undefined;

  /**
   * PlanDefinition.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who authored the content
   * - **Definition:** An individiual or organization primarily involved in the creation and maintenance of the content.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: ContactDetail[] | undefined;

  /**
   * PlanDefinition.editor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who edited the content
   * - **Definition:** An individual or organization primarily responsible for internal coherence of the content.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private editor?: ContactDetail[] | undefined;

  /**
   * PlanDefinition.reviewer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who reviewed the content
   * - **Definition:** An individual or organization primarily responsible for review of some aspect of the content.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewer?: ContactDetail[] | undefined;

  /**
   * PlanDefinition.endorser Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who endorsed the content
   * - **Definition:** An individual or organization responsible for officially endorsing the content for use in some setting.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endorser?: ContactDetail[] | undefined;

  /**
   * PlanDefinition.relatedArtifact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional documentation, citations
   * - **Definition:** Related artifacts such as additional documentation, justification, or bibliographic references.
   * - **Comment:** Each related artifact is either an attachment, or a reference to another resource, but not both.
   * - **Requirements:** Plan definitions must be able to provide enough information for consumers of the content (and/or interventions or results produced by the content) to be able to determine and understand the justification for and evidence in support of the content.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedArtifact?: RelatedArtifact[] | undefined;

  /**
   * PlanDefinition.library Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Logic used by the plan definition
   * - **Definition:** A reference to a Library resource containing any formal logic used by the plan definition.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Library',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private library?: CanonicalType[] | undefined;

  /**
   * PlanDefinition.goal Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What the plan is trying to accomplish
   * - **Definition:** Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
   * - **Requirements:** Goal information needs to be captured for order sets, protocols, and care plan definitions to better describe the objectives of the protocol activities and to guide the creation of specific goals within the derived care plans and orders.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private goal?: PlanDefinitionGoalComponent[] | undefined;

  /**
   * PlanDefinition.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Action defined by the plan
   * - **Definition:** An action or group of actions to be taken as part of the plan.
   * - **Comment:** Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action?: PlanDefinitionActionComponent[] | undefined;

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
      const optErrMsg = `Invalid PlanDefinition.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid PlanDefinition.url (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PlanDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid PlanDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid PlanDefinition.version (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid PlanDefinition.name (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid PlanDefinition.title (${String(value)})`;
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
   * @returns the `subtitle` property value as a StringType object if defined; else an empty StringType object
   */
  public getSubtitleElement(): StringType {
    return this.subtitle ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `subtitle` property.
   *
   * @param element - the `subtitle` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubtitleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.subtitle; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.subtitle = element;
    } else {
      this.subtitle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subtitle` property exists and has a value; `false` otherwise
   */
  public hasSubtitleElement(): boolean {
    return isDefined<StringType>(this.subtitle) && !this.subtitle.isEmpty();
  }

  /**
   * @returns the `subtitle` property value as a fhirString if defined; else undefined
   */
  public getSubtitle(): fhirString | undefined {
    return this.subtitle?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `subtitle` property.
   *
   * @param value - the `subtitle` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubtitle(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid PlanDefinition.subtitle (${String(value)})`;
      this.subtitle = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.subtitle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subtitle` property exists and has a value; `false` otherwise
   */
  public hasSubtitle(): boolean {
    return this.hasSubtitleElement();
  }

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
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
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
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
    assertIsDefined<EnumCodeType>(enumType, `PlanDefinition.status is required`);
    const errMsgPrefix = `Invalid PlanDefinition.status`;
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
    assertIsDefined<CodeType>(element, `PlanDefinition.status is required`);
    const optErrMsg = `Invalid PlanDefinition.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `PlanDefinition.status is required`);
    const optErrMsg = `Invalid PlanDefinition.status (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid PlanDefinition.experimental (${String(value)})`;
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
   * @returns the `subject` property value as a DataType object if defined; else undefined
   */
  public getSubject(): IDataType | undefined {
    return this.subject;
  }

  /**
   * Assigns the provided DataType object value to the `subject` property.
   *
   * @decorator `@ChoiceDataTypes('PlanDefinition.subject[x]')`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('PlanDefinition.subject[x]')
  public setSubject(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefined<IDataType>(this.subject) && !this.subject.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `subject` property value as a CodeableConcept object if defined; else undefined
   */
  public getSubjectCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.subject)) {
      return undefined;
    }
    if (!(this.subject instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.subject[x]: Expected CodeableConcept but encountered ${this.subject.fhirType()}`,
      );
    }
    return this.subject;
  }

  /**
   * @returns `true` if the `subject` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasSubjectCodeableConcept(): boolean {
    return this.hasSubject() && this.subject instanceof CodeableConcept;
  }

  /**
   * @returns the `subject` property value as a Reference object if defined; else undefined
   */
  public getSubjectReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.subject)) {
      return undefined;
    }
    if (!(this.subject instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.subject[x]: Expected Reference but encountered ${this.subject.fhirType()}`,
      );
    }
    return this.subject;
  }

  /**
   * @returns `true` if the `subject` property exists as a Reference and has a value; `false` otherwise
   */
  public hasSubjectReference(): boolean {
    return this.hasSubject() && this.subject instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid PlanDefinition.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid PlanDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid PlanDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid PlanDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid PlanDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid PlanDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid PlanDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid PlanDefinition.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid PlanDefinition.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid PlanDefinition.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid PlanDefinition.purpose (${String(value)})`;
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
   * @returns the `usage` property value as a StringType object if defined; else an empty StringType object
   */
  public getUsageElement(): StringType {
    return this.usage ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `usage` property.
   *
   * @param element - the `usage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUsageElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.usage; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.usage = element;
    } else {
      this.usage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `usage` property exists and has a value; `false` otherwise
   */
  public hasUsageElement(): boolean {
    return isDefined<StringType>(this.usage) && !this.usage.isEmpty();
  }

  /**
   * @returns the `usage` property value as a fhirString if defined; else undefined
   */
  public getUsage(): fhirString | undefined {
    return this.usage?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `usage` property.
   *
   * @param value - the `usage` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUsage(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid PlanDefinition.usage (${String(value)})`;
      this.usage = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.usage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `usage` property exists and has a value; `false` otherwise
   */
  public hasUsage(): boolean {
    return this.hasUsageElement();
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
      const optErrMsg = `Invalid PlanDefinition.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid PlanDefinition.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.approvalDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid PlanDefinition.approvalDate (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.lastReviewDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid PlanDefinition.lastReviewDate (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.effectivePeriod; Provided element is not an instance of Period.`;
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
   * @returns the `topic` property value as a CodeableConcept array
   */
  public getTopic(): CodeableConcept[] {
    return this.topic ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `topic` property.
   *
   * @param value - the `topic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTopic(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.topic; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.topic = value;
    } else {
      this.topic = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `topic` array property.
   *
   * @param value - the `topic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTopic(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.topic; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initTopic();
      this.topic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `topic` property exists and has a value; `false` otherwise
   */
  public hasTopic(): boolean {
    return isDefinedList<CodeableConcept>(this.topic) && this.topic.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `topic` property
   */
  private initTopic(): void {
    if(!this.hasTopic()) {
      this.topic = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `author` property value as a ContactDetail array
   */
  public getAuthor(): ContactDetail[] {
    return this.author ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `author` property.
   *
   * @param value - the `author` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAuthor(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid PlanDefinition.author; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.author = value;
    } else {
      this.author = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `author` array property.
   *
   * @param value - the `author` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAuthor(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid PlanDefinition.author; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initAuthor();
      this.author?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `author` property exists and has a value; `false` otherwise
   */
  public hasAuthor(): boolean {
    return isDefinedList<ContactDetail>(this.author) && this.author.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `author` property
   */
  private initAuthor(): void {
    if(!this.hasAuthor()) {
      this.author = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `editor` property value as a ContactDetail array
   */
  public getEditor(): ContactDetail[] {
    return this.editor ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `editor` property.
   *
   * @param value - the `editor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEditor(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid PlanDefinition.editor; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.editor = value;
    } else {
      this.editor = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `editor` array property.
   *
   * @param value - the `editor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEditor(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid PlanDefinition.editor; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initEditor();
      this.editor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `editor` property exists and has a value; `false` otherwise
   */
  public hasEditor(): boolean {
    return isDefinedList<ContactDetail>(this.editor) && this.editor.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `editor` property
   */
  private initEditor(): void {
    if(!this.hasEditor()) {
      this.editor = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `reviewer` property value as a ContactDetail array
   */
  public getReviewer(): ContactDetail[] {
    return this.reviewer ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `reviewer` property.
   *
   * @param value - the `reviewer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReviewer(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid PlanDefinition.reviewer; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.reviewer = value;
    } else {
      this.reviewer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `reviewer` array property.
   *
   * @param value - the `reviewer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReviewer(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid PlanDefinition.reviewer; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initReviewer();
      this.reviewer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reviewer` property exists and has a value; `false` otherwise
   */
  public hasReviewer(): boolean {
    return isDefinedList<ContactDetail>(this.reviewer) && this.reviewer.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `reviewer` property
   */
  private initReviewer(): void {
    if(!this.hasReviewer()) {
      this.reviewer = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `endorser` property value as a ContactDetail array
   */
  public getEndorser(): ContactDetail[] {
    return this.endorser ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `endorser` property.
   *
   * @param value - the `endorser` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEndorser(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid PlanDefinition.endorser; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.endorser = value;
    } else {
      this.endorser = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `endorser` array property.
   *
   * @param value - the `endorser` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEndorser(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid PlanDefinition.endorser; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initEndorser();
      this.endorser?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `endorser` property exists and has a value; `false` otherwise
   */
  public hasEndorser(): boolean {
    return isDefinedList<ContactDetail>(this.endorser) && this.endorser.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `endorser` property
   */
  private initEndorser(): void {
    if(!this.hasEndorser()) {
      this.endorser = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `relatedArtifact` property value as a RelatedArtifact array
   */
  public getRelatedArtifact(): RelatedArtifact[] {
    return this.relatedArtifact ?? ([] as RelatedArtifact[]);
  }

  /**
   * Assigns the provided RelatedArtifact array value to the `relatedArtifact` property.
   *
   * @param value - the `relatedArtifact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedArtifact(value: RelatedArtifact[] | undefined): this {
    if (isDefinedList<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid PlanDefinition.relatedArtifact; Provided value array has an element that is not an instance of RelatedArtifact.`;
      assertFhirTypeList<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.relatedArtifact = value;
    } else {
      this.relatedArtifact = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedArtifact value to the `relatedArtifact` array property.
   *
   * @param value - the `relatedArtifact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedArtifact(value: RelatedArtifact | undefined): this {
    if (isDefined<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid PlanDefinition.relatedArtifact; Provided element is not an instance of RelatedArtifact.`;
      assertFhirType<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.initRelatedArtifact();
      this.relatedArtifact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedArtifact` property exists and has a value; `false` otherwise
   */
  public hasRelatedArtifact(): boolean {
    return isDefinedList<RelatedArtifact>(this.relatedArtifact) && this.relatedArtifact.some((item: RelatedArtifact) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedArtifact` property
   */
  private initRelatedArtifact(): void {
    if(!this.hasRelatedArtifact()) {
      this.relatedArtifact = [] as RelatedArtifact[];
    }
  }

  /**
   * @returns the `library` property value as a CanonicalType array
   */
  public getLibraryElement(): CanonicalType[] {
    return this.library ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `library` property.
   *
   * @param element - the `library` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLibraryElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.library; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.library = element;
    } else {
      this.library = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `library` array property.
   *
   * @param element - the `library` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLibraryElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.library; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initLibrary();
      this.library?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `library` property exists and has a value; `false` otherwise
   */
  public hasLibraryElement(): boolean {
    return isDefinedList<CanonicalType>(this.library) && this.library.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `library` property value as a fhirCanonical array
   */
  public getLibrary(): fhirCanonical[] {
    this.initLibrary();
    const libraryValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.library!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        libraryValues.push(value);
      }
    }
    return libraryValues;
  }

  /**
   * Assigns the provided primitive value array to the `library` property.
   *
   * @param value - the `library` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLibrary(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const libraryElements = [] as CanonicalType[];
      for (const libraryValue of value) {
        const optErrMsg = `Invalid PlanDefinition.library array item (${String(libraryValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(libraryValue, fhirCanonicalSchema, optErrMsg));
        libraryElements.push(element);
      }
      this.library = libraryElements;
    } else {
      this.library = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `library` array property.
   *
   * @param value - the `library` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLibrary(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid PlanDefinition.library array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initLibrary();
      this.addLibraryElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `library` property exists and has a value; `false` otherwise
   */
  public hasLibrary(): boolean {
    return this.hasLibraryElement();
  }

  /**
   * Initialize the `library` property
   */
  private initLibrary(): void {
    if (!this.hasLibrary()) {
      this.library = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `goal` property value as a PlanDefinitionGoalComponent array
   */
  public getGoal(): PlanDefinitionGoalComponent[] {
    return this.goal ?? ([] as PlanDefinitionGoalComponent[]);
  }

  /**
   * Assigns the provided PlanDefinitionGoalComponent array value to the `goal` property.
   *
   * @param value - the `goal` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGoal(value: PlanDefinitionGoalComponent[] | undefined): this {
    if (isDefinedList<PlanDefinitionGoalComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal; Provided value array has an element that is not an instance of PlanDefinitionGoalComponent.`;
      assertFhirTypeList<PlanDefinitionGoalComponent>(value, PlanDefinitionGoalComponent, optErrMsg);
      this.goal = value;
    } else {
      this.goal = undefined;
    }
    return this;
  }

  /**
   * Add the provided PlanDefinitionGoalComponent value to the `goal` array property.
   *
   * @param value - the `goal` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addGoal(value: PlanDefinitionGoalComponent | undefined): this {
    if (isDefined<PlanDefinitionGoalComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal; Provided element is not an instance of PlanDefinitionGoalComponent.`;
      assertFhirType<PlanDefinitionGoalComponent>(value, PlanDefinitionGoalComponent, optErrMsg);
      this.initGoal();
      this.goal?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `goal` property exists and has a value; `false` otherwise
   */
  public hasGoal(): boolean {
    return isDefinedList<PlanDefinitionGoalComponent>(this.goal) && this.goal.some((item: PlanDefinitionGoalComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `goal` property
   */
  private initGoal(): void {
    if(!this.hasGoal()) {
      this.goal = [] as PlanDefinitionGoalComponent[];
    }
  }

  /**
   * @returns the `action` property value as a PlanDefinitionActionComponent array
   */
  public getAction(): PlanDefinitionActionComponent[] {
    return this.action ?? ([] as PlanDefinitionActionComponent[]);
  }

  /**
   * Assigns the provided PlanDefinitionActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: PlanDefinitionActionComponent[] | undefined): this {
    if (isDefinedList<PlanDefinitionActionComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action; Provided value array has an element that is not an instance of PlanDefinitionActionComponent.`;
      assertFhirTypeList<PlanDefinitionActionComponent>(value, PlanDefinitionActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * Add the provided PlanDefinitionActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: PlanDefinitionActionComponent | undefined): this {
    if (isDefined<PlanDefinitionActionComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action; Provided element is not an instance of PlanDefinitionActionComponent.`;
      assertFhirType<PlanDefinitionActionComponent>(value, PlanDefinitionActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<PlanDefinitionActionComponent>(this.action) && this.action.some((item: PlanDefinitionActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as PlanDefinitionActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PlanDefinition';
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
      this.subtitle,
      this.type_,
      this.status,
      this.experimental,
      this.subject,
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.useContext,
      this.jurisdiction,
      this.purpose,
      this.usage,
      this.copyright,
      this.approvalDate,
      this.lastReviewDate,
      this.effectivePeriod,
      this.topic,
      this.author,
      this.editor,
      this.reviewer,
      this.endorser,
      this.relatedArtifact,
      this.library,
      this.goal,
      this.action,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PlanDefinition {
    const dest = new PlanDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PlanDefinition): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    dest.subtitle = this.subtitle?.copy();
    dest.type_ = this.type_?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.experimental = this.experimental?.copy();
    dest.subject = this.subject?.copy() as IDataType;
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
    dest.usage = this.usage?.copy();
    dest.copyright = this.copyright?.copy();
    dest.approvalDate = this.approvalDate?.copy();
    dest.lastReviewDate = this.lastReviewDate?.copy();
    dest.effectivePeriod = this.effectivePeriod?.copy();
    const topicList = copyListValues<CodeableConcept>(this.topic);
    dest.topic = topicList.length === 0 ? undefined : topicList;
    const authorList = copyListValues<ContactDetail>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    const editorList = copyListValues<ContactDetail>(this.editor);
    dest.editor = editorList.length === 0 ? undefined : editorList;
    const reviewerList = copyListValues<ContactDetail>(this.reviewer);
    dest.reviewer = reviewerList.length === 0 ? undefined : reviewerList;
    const endorserList = copyListValues<ContactDetail>(this.endorser);
    dest.endorser = endorserList.length === 0 ? undefined : endorserList;
    const relatedArtifactList = copyListValues<RelatedArtifact>(this.relatedArtifact);
    dest.relatedArtifact = relatedArtifactList.length === 0 ? undefined : relatedArtifactList;
    const libraryList = copyListValues<CanonicalType>(this.library);
    dest.library = libraryList.length === 0 ? undefined : libraryList;
    const goalList = copyListValues<PlanDefinitionGoalComponent>(this.goal);
    dest.goal = goalList.length === 0 ? undefined : goalList;
    const actionList = copyListValues<PlanDefinitionActionComponent>(this.action);
    dest.action = actionList.length === 0 ? undefined : actionList;
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

    if (this.hasSubtitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSubtitleElement(), 'subtitle', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`PlanDefinition.status`);
    }

    if (this.hasExperimentalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExperimentalElement(), 'experimental', jsonObj);
    }

    if (this.hasSubject()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSubject()!, 'subject', jsonObj);
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

    if (this.hasUsageElement()) {
      setFhirPrimitiveJson<fhirString>(this.getUsageElement(), 'usage', jsonObj);
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

    if (this.hasTopic()) {
      setFhirComplexListJson(this.getTopic(), 'topic', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexListJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasEditor()) {
      setFhirComplexListJson(this.getEditor(), 'editor', jsonObj);
    }

    if (this.hasReviewer()) {
      setFhirComplexListJson(this.getReviewer(), 'reviewer', jsonObj);
    }

    if (this.hasEndorser()) {
      setFhirComplexListJson(this.getEndorser(), 'endorser', jsonObj);
    }

    if (this.hasRelatedArtifact()) {
      setFhirComplexListJson(this.getRelatedArtifact(), 'relatedArtifact', jsonObj);
    }

    if (this.hasLibrary()) {
      setFhirPrimitiveListJson(this.getLibraryElement(), 'library', jsonObj);
    }

    if (this.hasGoal()) {
      setFhirBackboneElementListJson(this.getGoal(), 'goal', jsonObj);
    }

    if (this.hasAction()) {
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * PlanDefinitionGoalComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** What the plan is trying to accomplish
 * - **Definition:** Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 * - **Requirements:** Goal information needs to be captured for order sets, protocols, and care plan definitions to better describe the objectives of the protocol activities and to guide the creation of specific goals within the derived care plans and orders.
 *
 * @category Data Models: Resource
 * @see [FHIR PlanDefinition](http://hl7.org/fhir/StructureDefinition/PlanDefinition)
 */
export class PlanDefinitionGoalComponent extends BackboneElement implements IBackboneElement {
  constructor(description: CodeableConcept | null = null) {
    super();

    this.description = null;
    if (isDefined<CodeableConcept>(description)) {
      this.setDescription(description);
    }
  }

  /**
   * Parse the provided `PlanDefinitionGoalComponent` JSON to instantiate the PlanDefinitionGoalComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PlanDefinitionGoalComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PlanDefinitionGoalComponent
   * @returns PlanDefinitionGoalComponent data model or undefined for `PlanDefinitionGoalComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PlanDefinitionGoalComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PlanDefinitionGoalComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PlanDefinitionGoalComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setDescription(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPriority(datatype);
    }

    fieldName = 'start';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStart(datatype);
    }

    fieldName = 'addresses';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAddresses(datatype);
        }
      });
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDocumentation(datatype);
        }
      });
    }

    fieldName = 'target';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PlanDefinitionGoalTargetComponent | undefined = PlanDefinitionGoalTargetComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTarget(component);
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
   * PlanDefinition.goal.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. Treatment, dietary, behavioral
   * - **Definition:** Indicates a category the goal falls within.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept | undefined;

  /**
   * PlanDefinition.goal.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code or text describing the goal
   * - **Definition:** Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding".
   * - **Comment:** If no code is available, use CodeableConcept.text.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description: CodeableConcept | null;

  /**
   * PlanDefinition.goal.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** high-priority | medium-priority | low-priority
   * - **Definition:** Identifies the expected level of importance associated with reaching/sustaining the defined goal.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private priority?: CodeableConcept | undefined;

  /**
   * PlanDefinition.goal.start Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When goal pursuit begins
   * - **Definition:** The event after which the goal should begin being pursued.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private start?: CodeableConcept | undefined;

  /**
   * PlanDefinition.goal.addresses Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What does the goal address
   * - **Definition:** Identifies problems, conditions, issues, or concerns the goal is intended to address.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private addresses?: CodeableConcept[] | undefined;

  /**
   * PlanDefinition.goal.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting documentation for the goal
   * - **Definition:** Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: RelatedArtifact[] | undefined;

  /**
   * PlanDefinition.goal.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Target outcome for the goal
   * - **Definition:** Indicates what should be done and within what timeframe.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private target?: PlanDefinitionGoalTargetComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `category` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCategory(): CodeableConcept {
    return this.category ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Category object value to the `category` property.
   *
   * @param value - the `category` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefined<CodeableConcept>(this.category) && !this.category.isEmpty();
  }

  /**
   * @returns the `description` property value as a CodeableConcept object if defined; else null
   */
  public getDescription(): CodeableConcept | null {
    return this.description;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `description` property.
   *
   * @param value - the `description` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDescription(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `PlanDefinition.goal.description is required`);
    const optErrMsg = `Invalid PlanDefinition.goal.description; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.description = value;
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescription(): boolean {
    return isDefined<CodeableConcept>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `priority` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPriority(): CodeableConcept {
    return this.priority ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Priority object value to the `priority` property.
   *
   * @param value - the `priority` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPriority(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal.priority; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.priority = value;
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriority(): boolean {
    return isDefined<CodeableConcept>(this.priority) && !this.priority.isEmpty();
  }

  /**
   * @returns the `start` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStart(): CodeableConcept {
    return this.start ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Start object value to the `start` property.
   *
   * @param value - the `start` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStart(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal.start; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.start = value;
    } else {
      this.start = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `start` property exists and has a value; `false` otherwise
   */
  public hasStart(): boolean {
    return isDefined<CodeableConcept>(this.start) && !this.start.isEmpty();
  }

  /**
   * @returns the `addresses` property value as a CodeableConcept array
   */
  public getAddresses(): CodeableConcept[] {
    return this.addresses ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `addresses` property.
   *
   * @param value - the `addresses` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAddresses(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal.addresses; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.addresses = value;
    } else {
      this.addresses = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `addresses` array property.
   *
   * @param value - the `addresses` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAddresses(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal.addresses; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAddresses();
      this.addresses?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `addresses` property exists and has a value; `false` otherwise
   */
  public hasAddresses(): boolean {
    return isDefinedList<CodeableConcept>(this.addresses) && this.addresses.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `addresses` property
   */
  private initAddresses(): void {
    if(!this.hasAddresses()) {
      this.addresses = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `documentation` property value as a RelatedArtifact array
   */
  public getDocumentation(): RelatedArtifact[] {
    return this.documentation ?? ([] as RelatedArtifact[]);
  }

  /**
   * Assigns the provided RelatedArtifact array value to the `documentation` property.
   *
   * @param value - the `documentation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDocumentation(value: RelatedArtifact[] | undefined): this {
    if (isDefinedList<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal.documentation; Provided value array has an element that is not an instance of RelatedArtifact.`;
      assertFhirTypeList<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.documentation = value;
    } else {
      this.documentation = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedArtifact value to the `documentation` array property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDocumentation(value: RelatedArtifact | undefined): this {
    if (isDefined<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal.documentation; Provided element is not an instance of RelatedArtifact.`;
      assertFhirType<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.initDocumentation();
      this.documentation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `documentation` property exists and has a value; `false` otherwise
   */
  public hasDocumentation(): boolean {
    return isDefinedList<RelatedArtifact>(this.documentation) && this.documentation.some((item: RelatedArtifact) => !item.isEmpty());
  }

  /**
   * Initialize the `documentation` property
   */
  private initDocumentation(): void {
    if(!this.hasDocumentation()) {
      this.documentation = [] as RelatedArtifact[];
    }
  }

  /**
   * @returns the `target` property value as a PlanDefinitionGoalTargetComponent array
   */
  public getTarget(): PlanDefinitionGoalTargetComponent[] {
    return this.target ?? ([] as PlanDefinitionGoalTargetComponent[]);
  }

  /**
   * Assigns the provided PlanDefinitionGoalTargetComponent array value to the `target` property.
   *
   * @param value - the `target` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTarget(value: PlanDefinitionGoalTargetComponent[] | undefined): this {
    if (isDefinedList<PlanDefinitionGoalTargetComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal.target; Provided value array has an element that is not an instance of PlanDefinitionGoalTargetComponent.`;
      assertFhirTypeList<PlanDefinitionGoalTargetComponent>(value, PlanDefinitionGoalTargetComponent, optErrMsg);
      this.target = value;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * Add the provided PlanDefinitionGoalTargetComponent value to the `target` array property.
   *
   * @param value - the `target` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTarget(value: PlanDefinitionGoalTargetComponent | undefined): this {
    if (isDefined<PlanDefinitionGoalTargetComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal.target; Provided element is not an instance of PlanDefinitionGoalTargetComponent.`;
      assertFhirType<PlanDefinitionGoalTargetComponent>(value, PlanDefinitionGoalTargetComponent, optErrMsg);
      this.initTarget();
      this.target?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return isDefinedList<PlanDefinitionGoalTargetComponent>(this.target) && this.target.some((item: PlanDefinitionGoalTargetComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `target` property
   */
  private initTarget(): void {
    if(!this.hasTarget()) {
      this.target = [] as PlanDefinitionGoalTargetComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PlanDefinition.goal';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.description,
      this.priority,
      this.start,
      this.addresses,
      this.documentation,
      this.target,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PlanDefinitionGoalComponent {
    const dest = new PlanDefinitionGoalComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PlanDefinitionGoalComponent): void {
    super.copyValues(dest);
    dest.category = this.category?.copy();
    dest.description = this.description ? this.description.copy() : null;
    dest.priority = this.priority?.copy();
    dest.start = this.start?.copy();
    const addressesList = copyListValues<CodeableConcept>(this.addresses);
    dest.addresses = addressesList.length === 0 ? undefined : addressesList;
    const documentationList = copyListValues<RelatedArtifact>(this.documentation);
    dest.documentation = documentationList.length === 0 ? undefined : documentationList;
    const targetList = copyListValues<PlanDefinitionGoalTargetComponent>(this.target);
    dest.target = targetList.length === 0 ? undefined : targetList;
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

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasDescription()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getDescription()!, 'description', jsonObj);
    } else {
      missingReqdProperties.push(`PlanDefinition.goal.description`);
    }

    if (this.hasPriority()) {
      setFhirComplexJson(this.getPriority(), 'priority', jsonObj);
    }

    if (this.hasStart()) {
      setFhirComplexJson(this.getStart(), 'start', jsonObj);
    }

    if (this.hasAddresses()) {
      setFhirComplexListJson(this.getAddresses(), 'addresses', jsonObj);
    }

    if (this.hasDocumentation()) {
      setFhirComplexListJson(this.getDocumentation(), 'documentation', jsonObj);
    }

    if (this.hasTarget()) {
      setFhirBackboneElementListJson(this.getTarget(), 'target', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * PlanDefinitionGoalTargetComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Target outcome for the goal
 * - **Definition:** Indicates what should be done and within what timeframe.
 *
 * @category Data Models: Resource
 * @see [FHIR PlanDefinition](http://hl7.org/fhir/StructureDefinition/PlanDefinition)
 */
export class PlanDefinitionGoalTargetComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `PlanDefinitionGoalTargetComponent` JSON to instantiate the PlanDefinitionGoalTargetComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PlanDefinitionGoalTargetComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PlanDefinitionGoalTargetComponent
   * @returns PlanDefinitionGoalTargetComponent data model or undefined for `PlanDefinitionGoalTargetComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PlanDefinitionGoalTargetComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PlanDefinitionGoalTargetComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PlanDefinitionGoalTargetComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = PlanDefinitionGoalTargetComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for PlanDefinitionGoalTargetComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'measure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMeasure(datatype);
    }

    fieldName = 'detail[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const detail: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDetail(detail);

    fieldName = 'due';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDue(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * PlanDefinition.goal.target.measure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The parameter whose value is to be tracked
   * - **Definition:** The parameter whose value is to be tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private measure?: CodeableConcept | undefined;

  /**
   * PlanDefinition.goal.target.detail[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('PlanDefinition.goal.target.detail[x]', ['Quantity','Range','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The target value to be achieved
   * - **Definition:** The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value.
   * - **FHIR Types:**
   *     'Quantity',
   *     'Range',
   *     'CodeableConcept',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('PlanDefinition.goal.target.detail[x]',[
    'Quantity',
    'Range',
    'CodeableConcept',
  ])
  private detail?: IDataType | undefined;

  /**
   * PlanDefinition.goal.target.due Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reach goal within
   * - **Definition:** Indicates the timeframe after the start of the goal in which the goal should be met.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private due?: Duration | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `measure` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMeasure(): CodeableConcept {
    return this.measure ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Measure object value to the `measure` property.
   *
   * @param value - the `measure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMeasure(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal.target.measure; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.measure = value;
    } else {
      this.measure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measure` property exists and has a value; `false` otherwise
   */
  public hasMeasure(): boolean {
    return isDefined<CodeableConcept>(this.measure) && !this.measure.isEmpty();
  }

  /**
   * @returns the `detail` property value as a DataType object if defined; else undefined
   */
  public getDetail(): IDataType | undefined {
    return this.detail;
  }

  /**
   * Assigns the provided DataType object value to the `detail` property.
   *
   * @decorator `@ChoiceDataTypes('PlanDefinition.goal.target.detail[x]')`
   *
   * @param value - the `detail` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('PlanDefinition.goal.target.detail[x]')
  public setDetail(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefined<IDataType>(this.detail) && !this.detail.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `detail` property value as a Quantity object if defined; else undefined
   */
  public getDetailQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.detail)) {
      return undefined;
    }
    if (!(this.detail instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.goal.target.detail[x]: Expected Quantity but encountered ${this.detail.fhirType()}`,
      );
    }
    return this.detail;
  }

  /**
   * @returns `true` if the `detail` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasDetailQuantity(): boolean {
    return this.hasDetail() && this.detail instanceof Quantity;
  }

  /**
   * @returns the `detail` property value as a Range object if defined; else undefined
   */
  public getDetailRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.detail)) {
      return undefined;
    }
    if (!(this.detail instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.goal.target.detail[x]: Expected Range but encountered ${this.detail.fhirType()}`,
      );
    }
    return this.detail;
  }

  /**
   * @returns `true` if the `detail` property exists as a Range and has a value; `false` otherwise
   */
  public hasDetailRange(): boolean {
    return this.hasDetail() && this.detail instanceof Range;
  }

  /**
   * @returns the `detail` property value as a CodeableConcept object if defined; else undefined
   */
  public getDetailCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.detail)) {
      return undefined;
    }
    if (!(this.detail instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.goal.target.detail[x]: Expected CodeableConcept but encountered ${this.detail.fhirType()}`,
      );
    }
    return this.detail;
  }

  /**
   * @returns `true` if the `detail` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasDetailCodeableConcept(): boolean {
    return this.hasDetail() && this.detail instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `due` property value as a Duration object if defined; else an empty Duration object
   */
  public getDue(): Duration {
    return this.due ?? new Duration();
  }

  /**
   * Assigns the provided Due object value to the `due` property.
   *
   * @param value - the `due` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDue(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid PlanDefinition.goal.target.due; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.due = value;
    } else {
      this.due = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `due` property exists and has a value; `false` otherwise
   */
  public hasDue(): boolean {
    return isDefined<Duration>(this.due) && !this.due.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PlanDefinition.goal.target';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.measure,
      this.detail,
      this.due,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PlanDefinitionGoalTargetComponent {
    const dest = new PlanDefinitionGoalTargetComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PlanDefinitionGoalTargetComponent): void {
    super.copyValues(dest);
    dest.measure = this.measure?.copy();
    dest.detail = this.detail?.copy() as IDataType;
    dest.due = this.due?.copy();
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

    if (this.hasMeasure()) {
      setFhirComplexJson(this.getMeasure(), 'measure', jsonObj);
    }

    if (this.hasDetail()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDetail()!, 'detail', jsonObj);
    }

    if (this.hasDue()) {
      setFhirComplexJson(this.getDue(), 'due', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PlanDefinitionActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Action defined by the plan
 * - **Definition:** An action or group of actions to be taken as part of the plan.
 * - **Comment:** Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
 *
 * @category Data Models: Resource
 * @see [FHIR PlanDefinition](http://hl7.org/fhir/StructureDefinition/PlanDefinition)
 */
export class PlanDefinitionActionComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.requestPriorityEnum = new RequestPriorityEnum();
    this.actionGroupingBehaviorEnum = new ActionGroupingBehaviorEnum();
    this.actionSelectionBehaviorEnum = new ActionSelectionBehaviorEnum();
    this.actionRequiredBehaviorEnum = new ActionRequiredBehaviorEnum();
    this.actionPrecheckBehaviorEnum = new ActionPrecheckBehaviorEnum();
    this.actionCardinalityBehaviorEnum = new ActionCardinalityBehaviorEnum();
  }

  /**
   * Parse the provided `PlanDefinitionActionComponent` JSON to instantiate the PlanDefinitionActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PlanDefinitionActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PlanDefinitionActionComponent
   * @returns PlanDefinitionActionComponent data model or undefined for `PlanDefinitionActionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PlanDefinitionActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PlanDefinitionActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PlanDefinitionActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = PlanDefinitionActionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for PlanDefinitionActionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'prefix';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPrefixElement(datatype);
    }

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'textEquivalent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextEquivalentElement(datatype);
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPriorityElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCode(datatype);
        }
      });
    }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReason(datatype);
        }
      });
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDocumentation(datatype);
        }
      });
    }

    fieldName = 'goalId';
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
        const datatype: IdType | undefined = fhirParser.parseIdType(dataJson.dtJson, dataJson.dtSiblingJson);
        if (datatype !== undefined) {
          instance.addGoalIdElement(datatype);
        }
      });
    }

    fieldName = 'subject[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const subject: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setSubject(subject);

    fieldName = 'trigger';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: TriggerDefinition | undefined = TriggerDefinition.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTrigger(datatype);
        }
      });
    }

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PlanDefinitionActionConditionComponent | undefined = PlanDefinitionActionConditionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCondition(component);
        }
      });
    }

    fieldName = 'input';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: DataRequirement | undefined = DataRequirement.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addInput(datatype);
        }
      });
    }

    fieldName = 'output';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: DataRequirement | undefined = DataRequirement.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addOutput(datatype);
        }
      });
    }

    fieldName = 'relatedAction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PlanDefinitionActionRelatedActionComponent | undefined = PlanDefinitionActionRelatedActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRelatedAction(component);
        }
      });
    }

    fieldName = 'timing[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const timing: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTiming(timing);

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PlanDefinitionActionParticipantComponent | undefined = PlanDefinitionActionParticipantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParticipant(component);
        }
      });
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'groupingBehavior';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setGroupingBehaviorElement(datatype);
    }

    fieldName = 'selectionBehavior';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setSelectionBehaviorElement(datatype);
    }

    fieldName = 'requiredBehavior';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setRequiredBehaviorElement(datatype);
    }

    fieldName = 'precheckBehavior';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPrecheckBehaviorElement(datatype);
    }

    fieldName = 'cardinalityBehavior';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setCardinalityBehaviorElement(datatype);
    }

    fieldName = 'definition[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const definition: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setDefinition(definition);

    fieldName = 'transform';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setTransformElement(datatype);
    }

    fieldName = 'dynamicValue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PlanDefinitionActionDynamicValueComponent | undefined = PlanDefinitionActionDynamicValueComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDynamicValue(component);
        }
      });
    }

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: PlanDefinitionActionComponent | undefined = PlanDefinitionActionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAction(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * PlanDefinition.action.prefix Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** User-visible prefix for the action (e.g. 1. or A.)
   * - **Definition:** A user-visible prefix for the action.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private prefix?: StringType | undefined;

  /**
   * PlanDefinition.action.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** User-visible title
   * - **Definition:** The title of the action displayed to a user.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private title?: StringType | undefined;

  /**
   * PlanDefinition.action.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Brief description of the action
   * - **Definition:** A brief description of the action used to provide a summary to display to the user.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * PlanDefinition.action.textEquivalent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system
   * - **Definition:** A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private textEquivalent?: StringType | undefined;

  /**
   * FHIR CodeSystem: RequestPriority
   *
   * @see {@link RequestPriorityEnum }
   */
  private readonly requestPriorityEnum: RequestPriorityEnum;

  /**
   * PlanDefinition.action.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** routine | urgent | asap | stat
   * - **Definition:** Indicates how quickly the action should be addressed with respect to other actions.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  private priority?: EnumCodeType | undefined;

  /**
   * PlanDefinition.action.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code representing the meaning of the action or sub-actions
   * - **Definition:** A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept[] | undefined;

  /**
   * PlanDefinition.action.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the action should be performed
   * - **Definition:** A description of why this action is necessary or appropriate.
   * - **Comment:** This is different than the clinical evidence documentation, it\'s an actual business description of the reason for performing the action.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableConcept[] | undefined;

  /**
   * PlanDefinition.action.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting documentation for the intended performer of the action
   * - **Definition:** Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: RelatedArtifact[] | undefined;

  /**
   * PlanDefinition.action.goalId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What goals this action supports
   * - **Definition:** Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private goalId?: IdType[] | undefined;

  /**
   * PlanDefinition.action.subject[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('PlanDefinition.action.subject[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of individual the action is focused on
   * - **Definition:** A code or group definition that describes the intended subject of the action and its children, if any.
   * - **Comment:** The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified. In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
   * - **Requirements:** Multiple steps in a protocol often have different groups of steps that are focused on testing different things. The subject of an action specifies the focus of the action and any child actions.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('PlanDefinition.action.subject[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private subject?: IDataType | undefined;

  /**
   * PlanDefinition.action.trigger Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the action should be triggered
   * - **Definition:** A description of when the action should be triggered.
   * - **FHIR Type:** `TriggerDefinition`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private trigger?: TriggerDefinition[] | undefined;

  /**
   * PlanDefinition.action.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether or not the action is applicable
   * - **Definition:** An expression that describes applicability criteria or start/stop conditions for the action.
   * - **Comment:** When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private condition?: PlanDefinitionActionConditionComponent[] | undefined;

  /**
   * PlanDefinition.action.input Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Input data requirements
   * - **Definition:** Defines input data requirements for the action.
   * - **FHIR Type:** `DataRequirement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private input?: DataRequirement[] | undefined;

  /**
   * PlanDefinition.action.output Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Output data definition
   * - **Definition:** Defines the outputs of the action, if any.
   * - **FHIR Type:** `DataRequirement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private output?: DataRequirement[] | undefined;

  /**
   * PlanDefinition.action.relatedAction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Relationship to another action
   * - **Definition:** A relationship to another action such as "before" or "30-60 minutes after start of".
   * - **Comment:** When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedAction?: PlanDefinitionActionRelatedActionComponent[] | undefined;

  /**
   * PlanDefinition.action.timing[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('PlanDefinition.action.timing[x]', ['dateTime','Age','Period','Duration','Range','Timing',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the action should take place
   * - **Definition:** An optional value describing when the action should be performed.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Age',
   *     'Period',
   *     'Duration',
   *     'Range',
   *     'Timing',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('PlanDefinition.action.timing[x]',[
    'dateTime',
    'Age',
    'Period',
    'Duration',
    'Range',
    'Timing',
  ])
  private timing?: IDataType | undefined;

  /**
   * PlanDefinition.action.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who should participate in the action
   * - **Definition:** Indicates who should participate in performing the action described.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private participant?: PlanDefinitionActionParticipantComponent[] | undefined;

  /**
   * PlanDefinition.action.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** create | update | remove | fire-event
   * - **Definition:** The type of action to perform (create, update, remove).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: ActionGroupingBehavior
   *
   * @see {@link ActionGroupingBehaviorEnum }
   */
  private readonly actionGroupingBehaviorEnum: ActionGroupingBehaviorEnum;

  /**
   * PlanDefinition.action.groupingBehavior Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** visual-group | logical-group | sentence-group
   * - **Definition:** Defines the grouping behavior for the action and its children.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  private groupingBehavior?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: ActionSelectionBehavior
   *
   * @see {@link ActionSelectionBehaviorEnum }
   */
  private readonly actionSelectionBehaviorEnum: ActionSelectionBehaviorEnum;

  /**
   * PlanDefinition.action.selectionBehavior Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** any | all | all-or-none | exactly-one | at-most-one | one-or-more
   * - **Definition:** Defines the selection behavior for the action and its children.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  private selectionBehavior?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: ActionRequiredBehavior
   *
   * @see {@link ActionRequiredBehaviorEnum }
   */
  private readonly actionRequiredBehaviorEnum: ActionRequiredBehaviorEnum;

  /**
   * PlanDefinition.action.requiredBehavior Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** must | could | must-unless-documented
   * - **Definition:** Defines the required behavior for the action.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  private requiredBehavior?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: ActionPrecheckBehavior
   *
   * @see {@link ActionPrecheckBehaviorEnum }
   */
  private readonly actionPrecheckBehaviorEnum: ActionPrecheckBehaviorEnum;

  /**
   * PlanDefinition.action.precheckBehavior Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** yes | no
   * - **Definition:** Defines whether the action should usually be preselected.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  private precheckBehavior?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: ActionCardinalityBehavior
   *
   * @see {@link ActionCardinalityBehaviorEnum }
   */
  private readonly actionCardinalityBehaviorEnum: ActionCardinalityBehaviorEnum;

  /**
   * PlanDefinition.action.cardinalityBehavior Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** single | multiple
   * - **Definition:** Defines whether the action can be selected multiple times.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  private cardinalityBehavior?: EnumCodeType | undefined;

  /**
   * PlanDefinition.action.definition[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('PlanDefinition.action.definition[x]', ['canonical','uri',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the activity to be performed
   * - **Definition:** A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.
   * - **Comment:** Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
   * - **FHIR Types:**
   *     'canonical',
   *     'uri',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('PlanDefinition.action.definition[x]',[
    'canonical',
    'uri',
  ])
  private definition?: IDataType | undefined;

  /**
   * PlanDefinition.action.transform Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Transform to apply the template
   * - **Definition:** A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
   * - **Comment:** Note that when a referenced ActivityDefinition also defines a transform, the transform specified here generally takes precedence. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureMap',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private transform?: CanonicalType | undefined;

  /**
   * PlanDefinition.action.dynamicValue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dynamic aspects of the definition
   * - **Definition:** Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient\'s weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
   * - **Comment:** Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dynamicValue?: PlanDefinitionActionDynamicValueComponent[] | undefined;

  /**
   * PlanDefinition.action.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A sub-action
   * - **Definition:** Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action?: PlanDefinitionActionComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid PlanDefinition.action.prefix; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid PlanDefinition.action.prefix (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.action.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid PlanDefinition.action.title (${String(value)})`;
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
      const optErrMsg = `Invalid PlanDefinition.action.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid PlanDefinition.action.description (${String(value)})`;
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
   * @returns the `textEquivalent` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextEquivalentElement(): StringType {
    return this.textEquivalent ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `textEquivalent` property.
   *
   * @param element - the `textEquivalent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextEquivalentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.action.textEquivalent; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.textEquivalent = element;
    } else {
      this.textEquivalent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `textEquivalent` property exists and has a value; `false` otherwise
   */
  public hasTextEquivalentElement(): boolean {
    return isDefined<StringType>(this.textEquivalent) && !this.textEquivalent.isEmpty();
  }

  /**
   * @returns the `textEquivalent` property value as a fhirString if defined; else undefined
   */
  public getTextEquivalent(): fhirString | undefined {
    return this.textEquivalent?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `textEquivalent` property.
   *
   * @param value - the `textEquivalent` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextEquivalent(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.textEquivalent (${String(value)})`;
      this.textEquivalent = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.textEquivalent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `textEquivalent` property exists and has a value; `false` otherwise
   */
  public hasTextEquivalent(): boolean {
    return this.hasTextEquivalentElement();
  }

  /**
   * @returns the `priority` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityEnumType(): EnumCodeType | undefined {
    return this.priority;
  }

  /**
   * Assigns the provided EnumCodeType value to the `priority` property.
   *
   * @param enumType - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid PlanDefinition.action.priority';
      assertEnumCodeType<RequestPriorityEnum>(enumType, RequestPriorityEnum, errMsgPrefix);
      this.priority = enumType;
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.priority) && !this.priority.isEmpty() && this.priority.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `priority` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityElement(): CodeType | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `priority` property.
   *
   * @param element - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.action.priority; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.priority = new EnumCodeType(element, this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityElement(): boolean {
    return this.hasPriorityEnumType();
  }

  /**
   * @returns the `priority` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriority(): fhirCode | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `priority` property.
   *
   * @param value - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriority(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.priority; Provided value is not an instance of fhirCode.`;
      this.priority = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriority(): boolean {
    return this.hasPriorityEnumType();
  }

  /**
   * @returns the `code` property value as a CodeableConcept array
   */
  public getCode(): CodeableConcept[] {
    return this.code ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.code; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<CodeableConcept>(this.code) && this.code.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `reason` property value as a CodeableConcept array
   */
  public getReason(): CodeableConcept[] {
    return this.reason ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `reason` property.
   *
   * @param value - the `reason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.reason; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `reason` array property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReason(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.reason; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initReason();
      this.reason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefinedList<CodeableConcept>(this.reason) && this.reason.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `reason` property
   */
  private initReason(): void {
    if(!this.hasReason()) {
      this.reason = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `documentation` property value as a RelatedArtifact array
   */
  public getDocumentation(): RelatedArtifact[] {
    return this.documentation ?? ([] as RelatedArtifact[]);
  }

  /**
   * Assigns the provided RelatedArtifact array value to the `documentation` property.
   *
   * @param value - the `documentation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDocumentation(value: RelatedArtifact[] | undefined): this {
    if (isDefinedList<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.documentation; Provided value array has an element that is not an instance of RelatedArtifact.`;
      assertFhirTypeList<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.documentation = value;
    } else {
      this.documentation = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedArtifact value to the `documentation` array property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDocumentation(value: RelatedArtifact | undefined): this {
    if (isDefined<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.documentation; Provided element is not an instance of RelatedArtifact.`;
      assertFhirType<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.initDocumentation();
      this.documentation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `documentation` property exists and has a value; `false` otherwise
   */
  public hasDocumentation(): boolean {
    return isDefinedList<RelatedArtifact>(this.documentation) && this.documentation.some((item: RelatedArtifact) => !item.isEmpty());
  }

  /**
   * Initialize the `documentation` property
   */
  private initDocumentation(): void {
    if(!this.hasDocumentation()) {
      this.documentation = [] as RelatedArtifact[];
    }
  }

  /**
   * @returns the `goalId` property value as a IdType array
   */
  public getGoalIdElement(): IdType[] {
    return this.goalId ?? ([] as IdType[]);
  }

  /**
   * Assigns the provided IdType array value to the `goalId` property.
   *
   * @param element - the `goalId` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGoalIdElement(element: IdType[] | undefined): this {
    if (isDefinedList<IdType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.action.goalId; Provided value array has an element that is not an instance of IdType.`;
      assertFhirTypeList<IdType>(element, IdType, optErrMsg);
      this.goalId = element;
    } else {
      this.goalId = undefined;
    }
    return this;
  }

  /**
   * Add the provided IdType value to the `goalId` array property.
   *
   * @param element - the `goalId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addGoalIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.action.goalId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.initGoalId();
      this.goalId?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `goalId` property exists and has a value; `false` otherwise
   */
  public hasGoalIdElement(): boolean {
    return isDefinedList<IdType>(this.goalId) && this.goalId.some((item: IdType) => !item.isEmpty());
  }

  /**
   * @returns the `goalId` property value as a fhirId array
   */
  public getGoalId(): fhirId[] {
    this.initGoalId();
    const goalIdValues = [] as fhirId[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.goalId!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        goalIdValues.push(value);
      }
    }
    return goalIdValues;
  }

  /**
   * Assigns the provided primitive value array to the `goalId` property.
   *
   * @param value - the `goalId` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGoalId(value: fhirId[] | undefined): this {
    if (isDefinedList<fhirId>(value)) {
      const goalIdElements = [] as IdType[];
      for (const goalIdValue of value) {
        const optErrMsg = `Invalid PlanDefinition.action.goalId array item (${String(goalIdValue)})`;
        const element = new IdType(parseFhirPrimitiveData(goalIdValue, fhirIdSchema, optErrMsg));
        goalIdElements.push(element);
      }
      this.goalId = goalIdElements;
    } else {
      this.goalId = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `goalId` array property.
   *
   * @param value - the `goalId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addGoalId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.goalId array item (${String(value)})`;
      const element = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
      this.initGoalId();
      this.addGoalIdElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `goalId` property exists and has a value; `false` otherwise
   */
  public hasGoalId(): boolean {
    return this.hasGoalIdElement();
  }

  /**
   * Initialize the `goalId` property
   */
  private initGoalId(): void {
    if (!this.hasGoalId()) {
      this.goalId = [] as IdType[];
    }
  }

  /**
   * @returns the `subject` property value as a DataType object if defined; else undefined
   */
  public getSubject(): IDataType | undefined {
    return this.subject;
  }

  /**
   * Assigns the provided DataType object value to the `subject` property.
   *
   * @decorator `@ChoiceDataTypes('PlanDefinition.action.subject[x]')`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('PlanDefinition.action.subject[x]')
  public setSubject(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefined<IDataType>(this.subject) && !this.subject.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `subject` property value as a CodeableConcept object if defined; else undefined
   */
  public getSubjectCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.subject)) {
      return undefined;
    }
    if (!(this.subject instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.subject[x]: Expected CodeableConcept but encountered ${this.subject.fhirType()}`,
      );
    }
    return this.subject;
  }

  /**
   * @returns `true` if the `subject` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasSubjectCodeableConcept(): boolean {
    return this.hasSubject() && this.subject instanceof CodeableConcept;
  }

  /**
   * @returns the `subject` property value as a Reference object if defined; else undefined
   */
  public getSubjectReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.subject)) {
      return undefined;
    }
    if (!(this.subject instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.subject[x]: Expected Reference but encountered ${this.subject.fhirType()}`,
      );
    }
    return this.subject;
  }

  /**
   * @returns `true` if the `subject` property exists as a Reference and has a value; `false` otherwise
   */
  public hasSubjectReference(): boolean {
    return this.hasSubject() && this.subject instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `trigger` property value as a TriggerDefinition array
   */
  public getTrigger(): TriggerDefinition[] {
    return this.trigger ?? ([] as TriggerDefinition[]);
  }

  /**
   * Assigns the provided TriggerDefinition array value to the `trigger` property.
   *
   * @param value - the `trigger` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTrigger(value: TriggerDefinition[] | undefined): this {
    if (isDefinedList<TriggerDefinition>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.trigger; Provided value array has an element that is not an instance of TriggerDefinition.`;
      assertFhirTypeList<TriggerDefinition>(value, TriggerDefinition, optErrMsg);
      this.trigger = value;
    } else {
      this.trigger = undefined;
    }
    return this;
  }

  /**
   * Add the provided TriggerDefinition value to the `trigger` array property.
   *
   * @param value - the `trigger` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTrigger(value: TriggerDefinition | undefined): this {
    if (isDefined<TriggerDefinition>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.trigger; Provided element is not an instance of TriggerDefinition.`;
      assertFhirType<TriggerDefinition>(value, TriggerDefinition, optErrMsg);
      this.initTrigger();
      this.trigger?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `trigger` property exists and has a value; `false` otherwise
   */
  public hasTrigger(): boolean {
    return isDefinedList<TriggerDefinition>(this.trigger) && this.trigger.some((item: TriggerDefinition) => !item.isEmpty());
  }

  /**
   * Initialize the `trigger` property
   */
  private initTrigger(): void {
    if(!this.hasTrigger()) {
      this.trigger = [] as TriggerDefinition[];
    }
  }

  /**
   * @returns the `condition` property value as a PlanDefinitionActionConditionComponent array
   */
  public getCondition(): PlanDefinitionActionConditionComponent[] {
    return this.condition ?? ([] as PlanDefinitionActionConditionComponent[]);
  }

  /**
   * Assigns the provided PlanDefinitionActionConditionComponent array value to the `condition` property.
   *
   * @param value - the `condition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCondition(value: PlanDefinitionActionConditionComponent[] | undefined): this {
    if (isDefinedList<PlanDefinitionActionConditionComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.condition; Provided value array has an element that is not an instance of PlanDefinitionActionConditionComponent.`;
      assertFhirTypeList<PlanDefinitionActionConditionComponent>(value, PlanDefinitionActionConditionComponent, optErrMsg);
      this.condition = value;
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * Add the provided PlanDefinitionActionConditionComponent value to the `condition` array property.
   *
   * @param value - the `condition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCondition(value: PlanDefinitionActionConditionComponent | undefined): this {
    if (isDefined<PlanDefinitionActionConditionComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.condition; Provided element is not an instance of PlanDefinitionActionConditionComponent.`;
      assertFhirType<PlanDefinitionActionConditionComponent>(value, PlanDefinitionActionConditionComponent, optErrMsg);
      this.initCondition();
      this.condition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return isDefinedList<PlanDefinitionActionConditionComponent>(this.condition) && this.condition.some((item: PlanDefinitionActionConditionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `condition` property
   */
  private initCondition(): void {
    if(!this.hasCondition()) {
      this.condition = [] as PlanDefinitionActionConditionComponent[];
    }
  }

  /**
   * @returns the `input` property value as a DataRequirement array
   */
  public getInput(): DataRequirement[] {
    return this.input ?? ([] as DataRequirement[]);
  }

  /**
   * Assigns the provided DataRequirement array value to the `input` property.
   *
   * @param value - the `input` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInput(value: DataRequirement[] | undefined): this {
    if (isDefinedList<DataRequirement>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.input; Provided value array has an element that is not an instance of DataRequirement.`;
      assertFhirTypeList<DataRequirement>(value, DataRequirement, optErrMsg);
      this.input = value;
    } else {
      this.input = undefined;
    }
    return this;
  }

  /**
   * Add the provided DataRequirement value to the `input` array property.
   *
   * @param value - the `input` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInput(value: DataRequirement | undefined): this {
    if (isDefined<DataRequirement>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.input; Provided element is not an instance of DataRequirement.`;
      assertFhirType<DataRequirement>(value, DataRequirement, optErrMsg);
      this.initInput();
      this.input?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `input` property exists and has a value; `false` otherwise
   */
  public hasInput(): boolean {
    return isDefinedList<DataRequirement>(this.input) && this.input.some((item: DataRequirement) => !item.isEmpty());
  }

  /**
   * Initialize the `input` property
   */
  private initInput(): void {
    if(!this.hasInput()) {
      this.input = [] as DataRequirement[];
    }
  }

  /**
   * @returns the `output` property value as a DataRequirement array
   */
  public getOutput(): DataRequirement[] {
    return this.output ?? ([] as DataRequirement[]);
  }

  /**
   * Assigns the provided DataRequirement array value to the `output` property.
   *
   * @param value - the `output` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutput(value: DataRequirement[] | undefined): this {
    if (isDefinedList<DataRequirement>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.output; Provided value array has an element that is not an instance of DataRequirement.`;
      assertFhirTypeList<DataRequirement>(value, DataRequirement, optErrMsg);
      this.output = value;
    } else {
      this.output = undefined;
    }
    return this;
  }

  /**
   * Add the provided DataRequirement value to the `output` array property.
   *
   * @param value - the `output` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOutput(value: DataRequirement | undefined): this {
    if (isDefined<DataRequirement>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.output; Provided element is not an instance of DataRequirement.`;
      assertFhirType<DataRequirement>(value, DataRequirement, optErrMsg);
      this.initOutput();
      this.output?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `output` property exists and has a value; `false` otherwise
   */
  public hasOutput(): boolean {
    return isDefinedList<DataRequirement>(this.output) && this.output.some((item: DataRequirement) => !item.isEmpty());
  }

  /**
   * Initialize the `output` property
   */
  private initOutput(): void {
    if(!this.hasOutput()) {
      this.output = [] as DataRequirement[];
    }
  }

  /**
   * @returns the `relatedAction` property value as a PlanDefinitionActionRelatedActionComponent array
   */
  public getRelatedAction(): PlanDefinitionActionRelatedActionComponent[] {
    return this.relatedAction ?? ([] as PlanDefinitionActionRelatedActionComponent[]);
  }

  /**
   * Assigns the provided PlanDefinitionActionRelatedActionComponent array value to the `relatedAction` property.
   *
   * @param value - the `relatedAction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedAction(value: PlanDefinitionActionRelatedActionComponent[] | undefined): this {
    if (isDefinedList<PlanDefinitionActionRelatedActionComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.relatedAction; Provided value array has an element that is not an instance of PlanDefinitionActionRelatedActionComponent.`;
      assertFhirTypeList<PlanDefinitionActionRelatedActionComponent>(value, PlanDefinitionActionRelatedActionComponent, optErrMsg);
      this.relatedAction = value;
    } else {
      this.relatedAction = undefined;
    }
    return this;
  }

  /**
   * Add the provided PlanDefinitionActionRelatedActionComponent value to the `relatedAction` array property.
   *
   * @param value - the `relatedAction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedAction(value: PlanDefinitionActionRelatedActionComponent | undefined): this {
    if (isDefined<PlanDefinitionActionRelatedActionComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.relatedAction; Provided element is not an instance of PlanDefinitionActionRelatedActionComponent.`;
      assertFhirType<PlanDefinitionActionRelatedActionComponent>(value, PlanDefinitionActionRelatedActionComponent, optErrMsg);
      this.initRelatedAction();
      this.relatedAction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedAction` property exists and has a value; `false` otherwise
   */
  public hasRelatedAction(): boolean {
    return isDefinedList<PlanDefinitionActionRelatedActionComponent>(this.relatedAction) && this.relatedAction.some((item: PlanDefinitionActionRelatedActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedAction` property
   */
  private initRelatedAction(): void {
    if(!this.hasRelatedAction()) {
      this.relatedAction = [] as PlanDefinitionActionRelatedActionComponent[];
    }
  }

  /**
   * @returns the `timing` property value as a DataType object if defined; else undefined
   */
  public getTiming(): IDataType | undefined {
    return this.timing;
  }

  /**
   * Assigns the provided DataType object value to the `timing` property.
   *
   * @decorator `@ChoiceDataTypes('PlanDefinition.action.timing[x]')`
   *
   * @param value - the `timing` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('PlanDefinition.action.timing[x]')
  public setTiming(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.timing = value;
    } else {
      this.timing = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timing` property exists and has a value; `false` otherwise
   */
  public hasTiming(): boolean {
    return isDefined<IDataType>(this.timing) && !this.timing.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `timing` property value as a DateTimeType object if defined; else undefined
   */
  public getTimingDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.timing[x]: Expected DateTimeType but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasTimingDateTimeType(): boolean {
    return this.hasTiming() && this.timing instanceof DateTimeType;
  }

  /**
   * @returns the `timing` property value as a Age object if defined; else undefined
   */
  public getTimingAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.timing[x]: Expected Age but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Age and has a value; `false` otherwise
   */
  public hasTimingAge(): boolean {
    return this.hasTiming() && this.timing instanceof Age;
  }

  /**
   * @returns the `timing` property value as a Period object if defined; else undefined
   */
  public getTimingPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.timing[x]: Expected Period but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Period and has a value; `false` otherwise
   */
  public hasTimingPeriod(): boolean {
    return this.hasTiming() && this.timing instanceof Period;
  }

  /**
   * @returns the `timing` property value as a Duration object if defined; else undefined
   */
  public getTimingDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.timing[x]: Expected Duration but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Duration and has a value; `false` otherwise
   */
  public hasTimingDuration(): boolean {
    return this.hasTiming() && this.timing instanceof Duration;
  }

  /**
   * @returns the `timing` property value as a Range object if defined; else undefined
   */
  public getTimingRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.timing[x]: Expected Range but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Range and has a value; `false` otherwise
   */
  public hasTimingRange(): boolean {
    return this.hasTiming() && this.timing instanceof Range;
  }

  /**
   * @returns the `timing` property value as a Timing object if defined; else undefined
   */
  public getTimingTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.timing[x]: Expected Timing but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Timing and has a value; `false` otherwise
   */
  public hasTimingTiming(): boolean {
    return this.hasTiming() && this.timing instanceof Timing;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `participant` property value as a PlanDefinitionActionParticipantComponent array
   */
  public getParticipant(): PlanDefinitionActionParticipantComponent[] {
    return this.participant ?? ([] as PlanDefinitionActionParticipantComponent[]);
  }

  /**
   * Assigns the provided PlanDefinitionActionParticipantComponent array value to the `participant` property.
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipant(value: PlanDefinitionActionParticipantComponent[] | undefined): this {
    if (isDefinedList<PlanDefinitionActionParticipantComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.participant; Provided value array has an element that is not an instance of PlanDefinitionActionParticipantComponent.`;
      assertFhirTypeList<PlanDefinitionActionParticipantComponent>(value, PlanDefinitionActionParticipantComponent, optErrMsg);
      this.participant = value;
    } else {
      this.participant = undefined;
    }
    return this;
  }

  /**
   * Add the provided PlanDefinitionActionParticipantComponent value to the `participant` array property.
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipant(value: PlanDefinitionActionParticipantComponent | undefined): this {
    if (isDefined<PlanDefinitionActionParticipantComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.participant; Provided element is not an instance of PlanDefinitionActionParticipantComponent.`;
      assertFhirType<PlanDefinitionActionParticipantComponent>(value, PlanDefinitionActionParticipantComponent, optErrMsg);
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<PlanDefinitionActionParticipantComponent>(this.participant) && this.participant.some((item: PlanDefinitionActionParticipantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if(!this.hasParticipant()) {
      this.participant = [] as PlanDefinitionActionParticipantComponent[];
    }
  }

  /**
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Type object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
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
    return isDefined<CodeableConcept>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `groupingBehavior` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public getGroupingBehaviorEnumType(): EnumCodeType | undefined {
    return this.groupingBehavior;
  }

  /**
   * Assigns the provided EnumCodeType value to the `groupingBehavior` property.
   *
   * @param enumType - the `groupingBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public setGroupingBehaviorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid PlanDefinition.action.groupingBehavior';
      assertEnumCodeType<ActionGroupingBehaviorEnum>(enumType, ActionGroupingBehaviorEnum, errMsgPrefix);
      this.groupingBehavior = enumType;
    } else {
      this.groupingBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupingBehavior` property exists and has a value; `false` otherwise
   */
  public hasGroupingBehaviorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.groupingBehavior) && !this.groupingBehavior.isEmpty() && this.groupingBehavior.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `groupingBehavior` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public getGroupingBehaviorElement(): CodeType | undefined {
    if (this.groupingBehavior === undefined) {
      return undefined;
    }
    return this.groupingBehavior as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `groupingBehavior` property.
   *
   * @param element - the `groupingBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public setGroupingBehaviorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.action.groupingBehavior; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.groupingBehavior = new EnumCodeType(element, this.actionGroupingBehaviorEnum);
    } else {
      this.groupingBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupingBehavior` property exists and has a value; `false` otherwise
   */
  public hasGroupingBehaviorElement(): boolean {
    return this.hasGroupingBehaviorEnumType();
  }

  /**
   * @returns the `groupingBehavior` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public getGroupingBehavior(): fhirCode | undefined {
    if (this.groupingBehavior === undefined) {
      return undefined;
    }
    return this.groupingBehavior.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `groupingBehavior` property.
   *
   * @param value - the `groupingBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionGroupingBehaviorEnum }
   */
  public setGroupingBehavior(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.groupingBehavior; Provided value is not an instance of fhirCode.`;
      this.groupingBehavior = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionGroupingBehaviorEnum);
    } else {
      this.groupingBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `groupingBehavior` property exists and has a value; `false` otherwise
   */
  public hasGroupingBehavior(): boolean {
    return this.hasGroupingBehaviorEnumType();
  }

  /**
   * @returns the `selectionBehavior` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public getSelectionBehaviorEnumType(): EnumCodeType | undefined {
    return this.selectionBehavior;
  }

  /**
   * Assigns the provided EnumCodeType value to the `selectionBehavior` property.
   *
   * @param enumType - the `selectionBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public setSelectionBehaviorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid PlanDefinition.action.selectionBehavior';
      assertEnumCodeType<ActionSelectionBehaviorEnum>(enumType, ActionSelectionBehaviorEnum, errMsgPrefix);
      this.selectionBehavior = enumType;
    } else {
      this.selectionBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `selectionBehavior` property exists and has a value; `false` otherwise
   */
  public hasSelectionBehaviorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.selectionBehavior) && !this.selectionBehavior.isEmpty() && this.selectionBehavior.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `selectionBehavior` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public getSelectionBehaviorElement(): CodeType | undefined {
    if (this.selectionBehavior === undefined) {
      return undefined;
    }
    return this.selectionBehavior as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `selectionBehavior` property.
   *
   * @param element - the `selectionBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public setSelectionBehaviorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.action.selectionBehavior; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.selectionBehavior = new EnumCodeType(element, this.actionSelectionBehaviorEnum);
    } else {
      this.selectionBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `selectionBehavior` property exists and has a value; `false` otherwise
   */
  public hasSelectionBehaviorElement(): boolean {
    return this.hasSelectionBehaviorEnumType();
  }

  /**
   * @returns the `selectionBehavior` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public getSelectionBehavior(): fhirCode | undefined {
    if (this.selectionBehavior === undefined) {
      return undefined;
    }
    return this.selectionBehavior.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `selectionBehavior` property.
   *
   * @param value - the `selectionBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionSelectionBehaviorEnum }
   */
  public setSelectionBehavior(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.selectionBehavior; Provided value is not an instance of fhirCode.`;
      this.selectionBehavior = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionSelectionBehaviorEnum);
    } else {
      this.selectionBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `selectionBehavior` property exists and has a value; `false` otherwise
   */
  public hasSelectionBehavior(): boolean {
    return this.hasSelectionBehaviorEnumType();
  }

  /**
   * @returns the `requiredBehavior` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public getRequiredBehaviorEnumType(): EnumCodeType | undefined {
    return this.requiredBehavior;
  }

  /**
   * Assigns the provided EnumCodeType value to the `requiredBehavior` property.
   *
   * @param enumType - the `requiredBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public setRequiredBehaviorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid PlanDefinition.action.requiredBehavior';
      assertEnumCodeType<ActionRequiredBehaviorEnum>(enumType, ActionRequiredBehaviorEnum, errMsgPrefix);
      this.requiredBehavior = enumType;
    } else {
      this.requiredBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requiredBehavior` property exists and has a value; `false` otherwise
   */
  public hasRequiredBehaviorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.requiredBehavior) && !this.requiredBehavior.isEmpty() && this.requiredBehavior.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `requiredBehavior` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public getRequiredBehaviorElement(): CodeType | undefined {
    if (this.requiredBehavior === undefined) {
      return undefined;
    }
    return this.requiredBehavior as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `requiredBehavior` property.
   *
   * @param element - the `requiredBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public setRequiredBehaviorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.action.requiredBehavior; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.requiredBehavior = new EnumCodeType(element, this.actionRequiredBehaviorEnum);
    } else {
      this.requiredBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requiredBehavior` property exists and has a value; `false` otherwise
   */
  public hasRequiredBehaviorElement(): boolean {
    return this.hasRequiredBehaviorEnumType();
  }

  /**
   * @returns the `requiredBehavior` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public getRequiredBehavior(): fhirCode | undefined {
    if (this.requiredBehavior === undefined) {
      return undefined;
    }
    return this.requiredBehavior.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `requiredBehavior` property.
   *
   * @param value - the `requiredBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionRequiredBehaviorEnum }
   */
  public setRequiredBehavior(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.requiredBehavior; Provided value is not an instance of fhirCode.`;
      this.requiredBehavior = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionRequiredBehaviorEnum);
    } else {
      this.requiredBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requiredBehavior` property exists and has a value; `false` otherwise
   */
  public hasRequiredBehavior(): boolean {
    return this.hasRequiredBehaviorEnumType();
  }

  /**
   * @returns the `precheckBehavior` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public getPrecheckBehaviorEnumType(): EnumCodeType | undefined {
    return this.precheckBehavior;
  }

  /**
   * Assigns the provided EnumCodeType value to the `precheckBehavior` property.
   *
   * @param enumType - the `precheckBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public setPrecheckBehaviorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid PlanDefinition.action.precheckBehavior';
      assertEnumCodeType<ActionPrecheckBehaviorEnum>(enumType, ActionPrecheckBehaviorEnum, errMsgPrefix);
      this.precheckBehavior = enumType;
    } else {
      this.precheckBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `precheckBehavior` property exists and has a value; `false` otherwise
   */
  public hasPrecheckBehaviorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.precheckBehavior) && !this.precheckBehavior.isEmpty() && this.precheckBehavior.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `precheckBehavior` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public getPrecheckBehaviorElement(): CodeType | undefined {
    if (this.precheckBehavior === undefined) {
      return undefined;
    }
    return this.precheckBehavior as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `precheckBehavior` property.
   *
   * @param element - the `precheckBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public setPrecheckBehaviorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.action.precheckBehavior; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.precheckBehavior = new EnumCodeType(element, this.actionPrecheckBehaviorEnum);
    } else {
      this.precheckBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `precheckBehavior` property exists and has a value; `false` otherwise
   */
  public hasPrecheckBehaviorElement(): boolean {
    return this.hasPrecheckBehaviorEnumType();
  }

  /**
   * @returns the `precheckBehavior` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public getPrecheckBehavior(): fhirCode | undefined {
    if (this.precheckBehavior === undefined) {
      return undefined;
    }
    return this.precheckBehavior.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `precheckBehavior` property.
   *
   * @param value - the `precheckBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionPrecheckBehaviorEnum }
   */
  public setPrecheckBehavior(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.precheckBehavior; Provided value is not an instance of fhirCode.`;
      this.precheckBehavior = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionPrecheckBehaviorEnum);
    } else {
      this.precheckBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `precheckBehavior` property exists and has a value; `false` otherwise
   */
  public hasPrecheckBehavior(): boolean {
    return this.hasPrecheckBehaviorEnumType();
  }

  /**
   * @returns the `cardinalityBehavior` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public getCardinalityBehaviorEnumType(): EnumCodeType | undefined {
    return this.cardinalityBehavior;
  }

  /**
   * Assigns the provided EnumCodeType value to the `cardinalityBehavior` property.
   *
   * @param enumType - the `cardinalityBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public setCardinalityBehaviorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid PlanDefinition.action.cardinalityBehavior';
      assertEnumCodeType<ActionCardinalityBehaviorEnum>(enumType, ActionCardinalityBehaviorEnum, errMsgPrefix);
      this.cardinalityBehavior = enumType;
    } else {
      this.cardinalityBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cardinalityBehavior` property exists and has a value; `false` otherwise
   */
  public hasCardinalityBehaviorEnumType(): boolean {
    return isDefined<EnumCodeType>(this.cardinalityBehavior) && !this.cardinalityBehavior.isEmpty() && this.cardinalityBehavior.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `cardinalityBehavior` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public getCardinalityBehaviorElement(): CodeType | undefined {
    if (this.cardinalityBehavior === undefined) {
      return undefined;
    }
    return this.cardinalityBehavior as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `cardinalityBehavior` property.
   *
   * @param element - the `cardinalityBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public setCardinalityBehaviorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.action.cardinalityBehavior; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.cardinalityBehavior = new EnumCodeType(element, this.actionCardinalityBehaviorEnum);
    } else {
      this.cardinalityBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cardinalityBehavior` property exists and has a value; `false` otherwise
   */
  public hasCardinalityBehaviorElement(): boolean {
    return this.hasCardinalityBehaviorEnumType();
  }

  /**
   * @returns the `cardinalityBehavior` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public getCardinalityBehavior(): fhirCode | undefined {
    if (this.cardinalityBehavior === undefined) {
      return undefined;
    }
    return this.cardinalityBehavior.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `cardinalityBehavior` property.
   *
   * @param value - the `cardinalityBehavior` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionCardinalityBehaviorEnum }
   */
  public setCardinalityBehavior(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.cardinalityBehavior; Provided value is not an instance of fhirCode.`;
      this.cardinalityBehavior = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionCardinalityBehaviorEnum);
    } else {
      this.cardinalityBehavior = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cardinalityBehavior` property exists and has a value; `false` otherwise
   */
  public hasCardinalityBehavior(): boolean {
    return this.hasCardinalityBehaviorEnumType();
  }

  /**
   * @returns the `definition` property value as a DataType object if defined; else undefined
   */
  public getDefinition(): IDataType | undefined {
    return this.definition;
  }

  /**
   * Assigns the provided DataType object value to the `definition` property.
   *
   * @decorator `@ChoiceDataTypes('PlanDefinition.action.definition[x]')`
   *
   * @param value - the `definition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('PlanDefinition.action.definition[x]')
  public setDefinition(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.definition) && !this.definition.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `definition` property value as a CanonicalType object if defined; else undefined
   */
  public getDefinitionCanonicalType(): CanonicalType | undefined {
    if (!isDefined<IDataType | undefined>(this.definition)) {
      return undefined;
    }
    if (!(this.definition instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.definition[x]: Expected CanonicalType but encountered ${this.definition.fhirType()}`,
      );
    }
    return this.definition;
  }

  /**
   * @returns `true` if the `definition` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasDefinitionCanonicalType(): boolean {
    return this.hasDefinition() && this.definition instanceof CanonicalType;
  }

  /**
   * @returns the `definition` property value as a UriType object if defined; else undefined
   */
  public getDefinitionUriType(): UriType | undefined {
    if (!isDefined<IDataType | undefined>(this.definition)) {
      return undefined;
    }
    if (!(this.definition instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.definition[x]: Expected UriType but encountered ${this.definition.fhirType()}`,
      );
    }
    return this.definition;
  }

  /**
   * @returns `true` if the `definition` property exists as a UriType and has a value; `false` otherwise
   */
  public hasDefinitionUriType(): boolean {
    return this.hasDefinition() && this.definition instanceof UriType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `transform` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getTransformElement(): CanonicalType {
    return this.transform ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `transform` property.
   *
   * @param element - the `transform` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTransformElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid PlanDefinition.action.transform; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.transform = element;
    } else {
      this.transform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `transform` property exists and has a value; `false` otherwise
   */
  public hasTransformElement(): boolean {
    return isDefined<CanonicalType>(this.transform) && !this.transform.isEmpty();
  }

  /**
   * @returns the `transform` property value as a fhirCanonical if defined; else undefined
   */
  public getTransform(): fhirCanonical | undefined {
    return this.transform?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `transform` property.
   *
   * @param value - the `transform` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTransform(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.transform (${String(value)})`;
      this.transform = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.transform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `transform` property exists and has a value; `false` otherwise
   */
  public hasTransform(): boolean {
    return this.hasTransformElement();
  }

  /**
   * @returns the `dynamicValue` property value as a PlanDefinitionActionDynamicValueComponent array
   */
  public getDynamicValue(): PlanDefinitionActionDynamicValueComponent[] {
    return this.dynamicValue ?? ([] as PlanDefinitionActionDynamicValueComponent[]);
  }

  /**
   * Assigns the provided PlanDefinitionActionDynamicValueComponent array value to the `dynamicValue` property.
   *
   * @param value - the `dynamicValue` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDynamicValue(value: PlanDefinitionActionDynamicValueComponent[] | undefined): this {
    if (isDefinedList<PlanDefinitionActionDynamicValueComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.dynamicValue; Provided value array has an element that is not an instance of PlanDefinitionActionDynamicValueComponent.`;
      assertFhirTypeList<PlanDefinitionActionDynamicValueComponent>(value, PlanDefinitionActionDynamicValueComponent, optErrMsg);
      this.dynamicValue = value;
    } else {
      this.dynamicValue = undefined;
    }
    return this;
  }

  /**
   * Add the provided PlanDefinitionActionDynamicValueComponent value to the `dynamicValue` array property.
   *
   * @param value - the `dynamicValue` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDynamicValue(value: PlanDefinitionActionDynamicValueComponent | undefined): this {
    if (isDefined<PlanDefinitionActionDynamicValueComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.dynamicValue; Provided element is not an instance of PlanDefinitionActionDynamicValueComponent.`;
      assertFhirType<PlanDefinitionActionDynamicValueComponent>(value, PlanDefinitionActionDynamicValueComponent, optErrMsg);
      this.initDynamicValue();
      this.dynamicValue?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dynamicValue` property exists and has a value; `false` otherwise
   */
  public hasDynamicValue(): boolean {
    return isDefinedList<PlanDefinitionActionDynamicValueComponent>(this.dynamicValue) && this.dynamicValue.some((item: PlanDefinitionActionDynamicValueComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dynamicValue` property
   */
  private initDynamicValue(): void {
    if(!this.hasDynamicValue()) {
      this.dynamicValue = [] as PlanDefinitionActionDynamicValueComponent[];
    }
  }

  /**
   * @returns the `action` property value as a PlanDefinitionActionComponent array
   */
  public getAction(): PlanDefinitionActionComponent[] {
    return this.action ?? ([] as PlanDefinitionActionComponent[]);
  }

  /**
   * Assigns the provided PlanDefinitionActionComponent array value to the `action` property.
   *
   * @param value - the `action` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: PlanDefinitionActionComponent[] | undefined): this {
    if (isDefinedList<PlanDefinitionActionComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.action; Provided value array has an element that is not an instance of PlanDefinitionActionComponent.`;
      assertFhirTypeList<PlanDefinitionActionComponent>(value, PlanDefinitionActionComponent, optErrMsg);
      this.action = value;
    } else {
      this.action = undefined;
    }
    return this;
  }

  /**
   * Add the provided PlanDefinitionActionComponent value to the `action` array property.
   *
   * @param value - the `action` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAction(value: PlanDefinitionActionComponent | undefined): this {
    if (isDefined<PlanDefinitionActionComponent>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.action; Provided element is not an instance of PlanDefinitionActionComponent.`;
      assertFhirType<PlanDefinitionActionComponent>(value, PlanDefinitionActionComponent, optErrMsg);
      this.initAction();
      this.action?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefinedList<PlanDefinitionActionComponent>(this.action) && this.action.some((item: PlanDefinitionActionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `action` property
   */
  private initAction(): void {
    if(!this.hasAction()) {
      this.action = [] as PlanDefinitionActionComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PlanDefinition.action';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.prefix,
      this.title,
      this.description,
      this.textEquivalent,
      this.priority,
      this.code,
      this.reason,
      this.documentation,
      this.goalId,
      this.subject,
      this.trigger,
      this.condition,
      this.input,
      this.output,
      this.relatedAction,
      this.timing,
      this.participant,
      this.type_,
      this.groupingBehavior,
      this.selectionBehavior,
      this.requiredBehavior,
      this.precheckBehavior,
      this.cardinalityBehavior,
      this.definition,
      this.transform,
      this.dynamicValue,
      this.action,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PlanDefinitionActionComponent {
    const dest = new PlanDefinitionActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PlanDefinitionActionComponent): void {
    super.copyValues(dest);
    dest.prefix = this.prefix?.copy();
    dest.title = this.title?.copy();
    dest.description = this.description?.copy();
    dest.textEquivalent = this.textEquivalent?.copy();
    dest.priority = this.priority?.copy();
    const codeList = copyListValues<CodeableConcept>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    const reasonList = copyListValues<CodeableConcept>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    const documentationList = copyListValues<RelatedArtifact>(this.documentation);
    dest.documentation = documentationList.length === 0 ? undefined : documentationList;
    const goalIdList = copyListValues<IdType>(this.goalId);
    dest.goalId = goalIdList.length === 0 ? undefined : goalIdList;
    dest.subject = this.subject?.copy() as IDataType;
    const triggerList = copyListValues<TriggerDefinition>(this.trigger);
    dest.trigger = triggerList.length === 0 ? undefined : triggerList;
    const conditionList = copyListValues<PlanDefinitionActionConditionComponent>(this.condition);
    dest.condition = conditionList.length === 0 ? undefined : conditionList;
    const inputList = copyListValues<DataRequirement>(this.input);
    dest.input = inputList.length === 0 ? undefined : inputList;
    const outputList = copyListValues<DataRequirement>(this.output);
    dest.output = outputList.length === 0 ? undefined : outputList;
    const relatedActionList = copyListValues<PlanDefinitionActionRelatedActionComponent>(this.relatedAction);
    dest.relatedAction = relatedActionList.length === 0 ? undefined : relatedActionList;
    dest.timing = this.timing?.copy() as IDataType;
    const participantList = copyListValues<PlanDefinitionActionParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    dest.type_ = this.type_?.copy();
    dest.groupingBehavior = this.groupingBehavior?.copy();
    dest.selectionBehavior = this.selectionBehavior?.copy();
    dest.requiredBehavior = this.requiredBehavior?.copy();
    dest.precheckBehavior = this.precheckBehavior?.copy();
    dest.cardinalityBehavior = this.cardinalityBehavior?.copy();
    dest.definition = this.definition?.copy() as IDataType;
    dest.transform = this.transform?.copy();
    const dynamicValueList = copyListValues<PlanDefinitionActionDynamicValueComponent>(this.dynamicValue);
    dest.dynamicValue = dynamicValueList.length === 0 ? undefined : dynamicValueList;
    const actionList = copyListValues<PlanDefinitionActionComponent>(this.action);
    dest.action = actionList.length === 0 ? undefined : actionList;
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

    if (this.hasPrefixElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPrefixElement(), 'prefix', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasTextEquivalentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextEquivalentElement(), 'textEquivalent', jsonObj);
    }

    if (this.hasPriorityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPriorityElement()!, 'priority', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasDocumentation()) {
      setFhirComplexListJson(this.getDocumentation(), 'documentation', jsonObj);
    }

    if (this.hasGoalId()) {
      setFhirPrimitiveListJson(this.getGoalIdElement(), 'goalId', jsonObj);
    }

    if (this.hasSubject()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSubject()!, 'subject', jsonObj);
    }

    if (this.hasTrigger()) {
      setFhirComplexListJson(this.getTrigger(), 'trigger', jsonObj);
    }

    if (this.hasCondition()) {
      setFhirBackboneElementListJson(this.getCondition(), 'condition', jsonObj);
    }

    if (this.hasInput()) {
      setFhirComplexListJson(this.getInput(), 'input', jsonObj);
    }

    if (this.hasOutput()) {
      setFhirComplexListJson(this.getOutput(), 'output', jsonObj);
    }

    if (this.hasRelatedAction()) {
      setFhirBackboneElementListJson(this.getRelatedAction(), 'relatedAction', jsonObj);
    }

    if (this.hasTiming()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTiming()!, 'timing', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasGroupingBehaviorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getGroupingBehaviorElement()!, 'groupingBehavior', jsonObj);
    }

    if (this.hasSelectionBehaviorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getSelectionBehaviorElement()!, 'selectionBehavior', jsonObj);
    }

    if (this.hasRequiredBehaviorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRequiredBehaviorElement()!, 'requiredBehavior', jsonObj);
    }

    if (this.hasPrecheckBehaviorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPrecheckBehaviorElement()!, 'precheckBehavior', jsonObj);
    }

    if (this.hasCardinalityBehaviorElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCardinalityBehaviorElement()!, 'cardinalityBehavior', jsonObj);
    }

    if (this.hasDefinition()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDefinition()!, 'definition', jsonObj);
    }

    if (this.hasTransformElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getTransformElement(), 'transform', jsonObj);
    }

    if (this.hasDynamicValue()) {
      setFhirBackboneElementListJson(this.getDynamicValue(), 'dynamicValue', jsonObj);
    }

    if (this.hasAction()) {
      setFhirBackboneElementListJson(this.getAction(), 'action', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * PlanDefinitionActionConditionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Whether or not the action is applicable
 * - **Definition:** An expression that describes applicability criteria or start/stop conditions for the action.
 * - **Comment:** When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
 *
 * @category Data Models: Resource
 * @see [FHIR PlanDefinition](http://hl7.org/fhir/StructureDefinition/PlanDefinition)
 */
export class PlanDefinitionActionConditionComponent extends BackboneElement implements IBackboneElement {
  constructor(kind: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.actionConditionKindEnum = new ActionConditionKindEnum();

    this.kind = constructorCodeValueAsEnumCodeType<ActionConditionKindEnum>(
      kind,
      ActionConditionKindEnum,
      this.actionConditionKindEnum,
      'PlanDefinition.action.condition.kind',
    );
  }

  /**
   * Parse the provided `PlanDefinitionActionConditionComponent` JSON to instantiate the PlanDefinitionActionConditionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PlanDefinitionActionConditionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PlanDefinitionActionConditionComponent
   * @returns PlanDefinitionActionConditionComponent data model or undefined for `PlanDefinitionActionConditionComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PlanDefinitionActionConditionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PlanDefinitionActionConditionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PlanDefinitionActionConditionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'kind';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setKindElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Expression | undefined = Expression.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExpression(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * FHIR CodeSystem: ActionConditionKind
   *
   * @see {@link ActionConditionKindEnum }
   */
  private readonly actionConditionKindEnum: ActionConditionKindEnum;

  /**
   * PlanDefinition.action.condition.kind Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** applicability | start | stop
   * - **Definition:** The kind of condition.
   * - **Comment:** Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  private kind: EnumCodeType | null;

  /**
   * PlanDefinition.action.condition.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Boolean-valued expression
   * - **Definition:** An expression that returns true or false, indicating whether the condition is satisfied.
   * - **Comment:** The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
   * - **FHIR Type:** `Expression`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression?: Expression | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `kind` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public getKindEnumType(): EnumCodeType | null {
    return this.kind;
  }

  /**
   * Assigns the provided EnumCodeType value to the `kind` property.
   *
   * @param enumType - the `kind` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public setKindEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `PlanDefinition.action.condition.kind is required`);
    const errMsgPrefix = `Invalid PlanDefinition.action.condition.kind`;
    assertEnumCodeType<ActionConditionKindEnum>(enumType, ActionConditionKindEnum, errMsgPrefix);
    this.kind = enumType;
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKindEnumType(): boolean {
    return isDefined<EnumCodeType>(this.kind) && !this.kind.isEmpty() && this.kind.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `kind` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public getKindElement(): CodeType | null {
    if (this.kind === null) {
      return null;
    }
    return this.kind as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `kind` property.
   *
   * @param element - the `kind` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public setKindElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `PlanDefinition.action.condition.kind is required`);
    const optErrMsg = `Invalid PlanDefinition.action.condition.kind; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.kind = new EnumCodeType(element, this.actionConditionKindEnum);
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKindElement(): boolean {
    return this.hasKindEnumType();
  }

  /**
   * @returns the `kind` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public getKind(): fhirCode | null {
    if (this.kind === null) {
      return null;
    }
    return this.kind.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `kind` property.
   *
   * @param value - the `kind` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionConditionKindEnum }
   */
  public setKind(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `PlanDefinition.action.condition.kind is required`);
    const optErrMsg = `Invalid PlanDefinition.action.condition.kind (${String(value)})`;
    this.kind = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionConditionKindEnum);
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKind(): boolean {
    return this.hasKindEnumType();
  }

  /**
   * @returns the `expression` property value as a Expression object if defined; else an empty Expression object
   */
  public getExpression(): Expression {
    return this.expression ?? new Expression();
  }

  /**
   * Assigns the provided Expression object value to the `expression` property.
   *
   * @param value - the `expression` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExpression(value: Expression | undefined): this {
    if (isDefined<Expression>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.condition.expression; Provided element is not an instance of Expression.`;
      assertFhirType<Expression>(value, Expression, optErrMsg);
      this.expression = value;
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpression(): boolean {
    return isDefined<Expression>(this.expression) && !this.expression.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PlanDefinition.action.condition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.kind,
      this.expression,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PlanDefinitionActionConditionComponent {
    const dest = new PlanDefinitionActionConditionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PlanDefinitionActionConditionComponent): void {
    super.copyValues(dest);
    dest.kind = this.kind ? this.kind.copy() : null;
    dest.expression = this.expression?.copy();
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

    if (this.hasKindElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getKindElement()!, 'kind', jsonObj);
    } else {
      missingReqdProperties.push(`PlanDefinition.action.condition.kind`);
    }

    if (this.hasExpression()) {
      setFhirComplexJson(this.getExpression(), 'expression', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * PlanDefinitionActionRelatedActionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Relationship to another action
 * - **Definition:** A relationship to another action such as "before" or "30-60 minutes after start of".
 * - **Comment:** When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
 *
 * @category Data Models: Resource
 * @see [FHIR PlanDefinition](http://hl7.org/fhir/StructureDefinition/PlanDefinition)
 */
export class PlanDefinitionActionRelatedActionComponent extends BackboneElement implements IBackboneElement {
  constructor(actionId: IdType | fhirId | null = null, relationship: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.actionRelationshipTypeEnum = new ActionRelationshipTypeEnum();

    this.actionId = null;
    if (isDefined<IdType | fhirId>(actionId)) {
      if (actionId instanceof PrimitiveType) {
        this.setActionIdElement(actionId);
      } else {
        this.setActionId(actionId);
      }
    }

    this.relationship = constructorCodeValueAsEnumCodeType<ActionRelationshipTypeEnum>(
      relationship,
      ActionRelationshipTypeEnum,
      this.actionRelationshipTypeEnum,
      'PlanDefinition.action.relatedAction.relationship',
    );
  }

  /**
   * Parse the provided `PlanDefinitionActionRelatedActionComponent` JSON to instantiate the PlanDefinitionActionRelatedActionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PlanDefinitionActionRelatedActionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PlanDefinitionActionRelatedActionComponent
   * @returns PlanDefinitionActionRelatedActionComponent data model or undefined for `PlanDefinitionActionRelatedActionComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PlanDefinitionActionRelatedActionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PlanDefinitionActionRelatedActionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PlanDefinitionActionRelatedActionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = PlanDefinitionActionRelatedActionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for PlanDefinitionActionRelatedActionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'actionId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setActionIdElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'relationship';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setRelationshipElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'offset[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const offset: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setOffset(offset);

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * PlanDefinition.action.relatedAction.actionId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What action is this related to
   * - **Definition:** The element id of the related action.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actionId: IdType | null;

  /**
   * FHIR CodeSystem: ActionRelationshipType
   *
   * @see {@link ActionRelationshipTypeEnum }
   */
  private readonly actionRelationshipTypeEnum: ActionRelationshipTypeEnum;

  /**
   * PlanDefinition.action.relatedAction.relationship Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end
   * - **Definition:** The relationship of this action to the related action.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  private relationship: EnumCodeType | null;

  /**
   * PlanDefinition.action.relatedAction.offset[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('PlanDefinition.action.relatedAction.offset[x]', ['Duration','Range',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time offset for the relationship
   * - **Definition:** A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   * - **FHIR Types:**
   *     'Duration',
   *     'Range',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('PlanDefinition.action.relatedAction.offset[x]',[
    'Duration',
    'Range',
  ])
  private offset?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `actionId` property value as a IdType object if defined; else null
   */
  public getActionIdElement(): IdType | null {
    return this.actionId;
  }

  /**
   * Assigns the provided PrimitiveType value to the `actionId` property.
   *
   * @param element - the `actionId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActionIdElement(element: IdType): this {
    assertIsDefined<IdType>(element, `PlanDefinition.action.relatedAction.actionId is required`);
    const optErrMsg = `Invalid PlanDefinition.action.relatedAction.actionId; Provided value is not an instance of IdType.`;
    assertFhirType<IdType>(element, IdType, optErrMsg);
    this.actionId = element;
    return this;
  }

  /**
   * @returns `true` if the `actionId` property exists and has a value; `false` otherwise
   */
  public hasActionIdElement(): boolean {
    return isDefined<IdType>(this.actionId) && !this.actionId.isEmpty();
  }

  /**
   * @returns the `actionId` property value as a fhirId if defined; else null
   */
  public getActionId(): fhirId | null {
    if (this.actionId?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.actionId.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `actionId` property.
   *
   * @param value - the `actionId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActionId(value: fhirId): this {
    assertIsDefined<fhirId>(value, `PlanDefinition.action.relatedAction.actionId is required`);
    const optErrMsg = `Invalid PlanDefinition.action.relatedAction.actionId (${String(value)})`;
    this.actionId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `actionId` property exists and has a value; `false` otherwise
   */
  public hasActionId(): boolean {
    return this.hasActionIdElement();
  }

  /**
   * @returns the `relationship` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public getRelationshipEnumType(): EnumCodeType | null {
    return this.relationship;
  }

  /**
   * Assigns the provided EnumCodeType value to the `relationship` property.
   *
   * @param enumType - the `relationship` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public setRelationshipEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `PlanDefinition.action.relatedAction.relationship is required`);
    const errMsgPrefix = `Invalid PlanDefinition.action.relatedAction.relationship`;
    assertEnumCodeType<ActionRelationshipTypeEnum>(enumType, ActionRelationshipTypeEnum, errMsgPrefix);
    this.relationship = enumType;
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationshipEnumType(): boolean {
    return isDefined<EnumCodeType>(this.relationship) && !this.relationship.isEmpty() && this.relationship.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `relationship` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public getRelationshipElement(): CodeType | null {
    if (this.relationship === null) {
      return null;
    }
    return this.relationship as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `relationship` property.
   *
   * @param element - the `relationship` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public setRelationshipElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `PlanDefinition.action.relatedAction.relationship is required`);
    const optErrMsg = `Invalid PlanDefinition.action.relatedAction.relationship; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.relationship = new EnumCodeType(element, this.actionRelationshipTypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationshipElement(): boolean {
    return this.hasRelationshipEnumType();
  }

  /**
   * @returns the `relationship` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public getRelationship(): fhirCode | null {
    if (this.relationship === null) {
      return null;
    }
    return this.relationship.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `relationship` property.
   *
   * @param value - the `relationship` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ActionRelationshipTypeEnum }
   */
  public setRelationship(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `PlanDefinition.action.relatedAction.relationship is required`);
    const optErrMsg = `Invalid PlanDefinition.action.relatedAction.relationship (${String(value)})`;
    this.relationship = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionRelationshipTypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `relationship` property exists and has a value; `false` otherwise
   */
  public hasRelationship(): boolean {
    return this.hasRelationshipEnumType();
  }

  /**
   * @returns the `offset` property value as a DataType object if defined; else undefined
   */
  public getOffset(): IDataType | undefined {
    return this.offset;
  }

  /**
   * Assigns the provided DataType object value to the `offset` property.
   *
   * @decorator `@ChoiceDataTypes('PlanDefinition.action.relatedAction.offset[x]')`
   *
   * @param value - the `offset` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('PlanDefinition.action.relatedAction.offset[x]')
  public setOffset(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.offset = value;
    } else {
      this.offset = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `offset` property exists and has a value; `false` otherwise
   */
  public hasOffset(): boolean {
    return isDefined<IDataType>(this.offset) && !this.offset.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `offset` property value as a Duration object if defined; else undefined
   */
  public getOffsetDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.offset)) {
      return undefined;
    }
    if (!(this.offset instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.relatedAction.offset[x]: Expected Duration but encountered ${this.offset.fhirType()}`,
      );
    }
    return this.offset;
  }

  /**
   * @returns `true` if the `offset` property exists as a Duration and has a value; `false` otherwise
   */
  public hasOffsetDuration(): boolean {
    return this.hasOffset() && this.offset instanceof Duration;
  }

  /**
   * @returns the `offset` property value as a Range object if defined; else undefined
   */
  public getOffsetRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.offset)) {
      return undefined;
    }
    if (!(this.offset instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for PlanDefinition.action.relatedAction.offset[x]: Expected Range but encountered ${this.offset.fhirType()}`,
      );
    }
    return this.offset;
  }

  /**
   * @returns `true` if the `offset` property exists as a Range and has a value; `false` otherwise
   */
  public hasOffsetRange(): boolean {
    return this.hasOffset() && this.offset instanceof Range;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PlanDefinition.action.relatedAction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.actionId,
      this.relationship,
      this.offset,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PlanDefinitionActionRelatedActionComponent {
    const dest = new PlanDefinitionActionRelatedActionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PlanDefinitionActionRelatedActionComponent): void {
    super.copyValues(dest);
    dest.actionId = this.actionId ? this.actionId.copy() : null;
    dest.relationship = this.relationship ? this.relationship.copy() : null;
    dest.offset = this.offset?.copy() as IDataType;
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

    if (this.hasActionIdElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirId>(this.getActionIdElement()!, 'actionId', jsonObj);
    } else {
      missingReqdProperties.push(`PlanDefinition.action.relatedAction.actionId`);
    }

    if (this.hasRelationshipElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRelationshipElement()!, 'relationship', jsonObj);
    } else {
      missingReqdProperties.push(`PlanDefinition.action.relatedAction.relationship`);
    }

    if (this.hasOffset()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getOffset()!, 'offset', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * PlanDefinitionActionParticipantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who should participate in the action
 * - **Definition:** Indicates who should participate in performing the action described.
 *
 * @category Data Models: Resource
 * @see [FHIR PlanDefinition](http://hl7.org/fhir/StructureDefinition/PlanDefinition)
 */
export class PlanDefinitionActionParticipantComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.actionParticipantTypeEnum = new ActionParticipantTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<ActionParticipantTypeEnum>(
      type_,
      ActionParticipantTypeEnum,
      this.actionParticipantTypeEnum,
      'PlanDefinition.action.participant.type',
    );
  }

  /**
   * Parse the provided `PlanDefinitionActionParticipantComponent` JSON to instantiate the PlanDefinitionActionParticipantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PlanDefinitionActionParticipantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PlanDefinitionActionParticipantComponent
   * @returns PlanDefinitionActionParticipantComponent data model or undefined for `PlanDefinitionActionParticipantComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PlanDefinitionActionParticipantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PlanDefinitionActionParticipantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PlanDefinitionActionParticipantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * FHIR CodeSystem: ActionParticipantType
   *
   * @see {@link ActionParticipantTypeEnum }
   */
  private readonly actionParticipantTypeEnum: ActionParticipantTypeEnum;

  /**
   * PlanDefinition.action.participant.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** patient | practitioner | related-person | device
   * - **Definition:** The type of participant in the action.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * PlanDefinition.action.participant.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. Nurse, Surgeon, Parent
   * - **Definition:** The role the participant should play in performing the described action.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `PlanDefinition.action.participant.type is required`);
    const errMsgPrefix = `Invalid PlanDefinition.action.participant.type`;
    assertEnumCodeType<ActionParticipantTypeEnum>(enumType, ActionParticipantTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public setTypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `PlanDefinition.action.participant.type is required`);
    const optErrMsg = `Invalid PlanDefinition.action.participant.type; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.type_ = new EnumCodeType(element, this.actionParticipantTypeEnum);
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public setType(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `PlanDefinition.action.participant.type is required`);
    const optErrMsg = `Invalid PlanDefinition.action.participant.type (${String(value)})`;
    this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionParticipantTypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `role` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRole(): CodeableConcept {
    return this.role ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Role object value to the `role` property.
   *
   * @param value - the `role` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.participant.role; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.role = value;
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefined<CodeableConcept>(this.role) && !this.role.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PlanDefinition.action.participant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.role,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PlanDefinitionActionParticipantComponent {
    const dest = new PlanDefinitionActionParticipantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PlanDefinitionActionParticipantComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.role = this.role?.copy();
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
      missingReqdProperties.push(`PlanDefinition.action.participant.type`);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * PlanDefinitionActionDynamicValueComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Dynamic aspects of the definition
 * - **Definition:** Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient\'s weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
 * - **Comment:** Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
 *
 * @category Data Models: Resource
 * @see [FHIR PlanDefinition](http://hl7.org/fhir/StructureDefinition/PlanDefinition)
 */
export class PlanDefinitionActionDynamicValueComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `PlanDefinitionActionDynamicValueComponent` JSON to instantiate the PlanDefinitionActionDynamicValueComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `PlanDefinitionActionDynamicValueComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to PlanDefinitionActionDynamicValueComponent
   * @returns PlanDefinitionActionDynamicValueComponent data model or undefined for `PlanDefinitionActionDynamicValueComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): PlanDefinitionActionDynamicValueComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'PlanDefinitionActionDynamicValueComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new PlanDefinitionActionDynamicValueComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'path';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPathElement(datatype);
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Expression | undefined = Expression.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExpression(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * PlanDefinition.action.dynamicValue.path Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The path to the element to be set dynamically
   * - **Definition:** The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression. The specified path SHALL be a FHIRPath resolveable on the specified target type of the ActivityDefinition, and SHALL consist only of identifiers, constant indexers, and a restricted subset of functions. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](https://hl7.org/fhir/fhirpath.html#simple) for full details).
   * - **Comment:** To specify the path to the current action being realized, the %action environment variable is available in this path. For example, to specify the description element of the target action, the path would be %action.description. The path attribute contains a [Simple FHIRPath Subset](https://hl7.org/fhir/fhirpath.html#simple) that allows path traversal, but not calculation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private path?: StringType | undefined;

  /**
   * PlanDefinition.action.dynamicValue.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An expression that provides the dynamic value for the customization
   * - **Definition:** An expression specifying the value of the customized element.
   * - **Comment:** The expression may be inlined or may be a reference to a named expression within a logic library referenced by the library element.
   * - **FHIR Type:** `Expression`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression?: Expression | undefined;

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
      const optErrMsg = `Invalid PlanDefinition.action.dynamicValue.path; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid PlanDefinition.action.dynamicValue.path (${String(value)})`;
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
   * @returns the `expression` property value as a Expression object if defined; else an empty Expression object
   */
  public getExpression(): Expression {
    return this.expression ?? new Expression();
  }

  /**
   * Assigns the provided Expression object value to the `expression` property.
   *
   * @param value - the `expression` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExpression(value: Expression | undefined): this {
    if (isDefined<Expression>(value)) {
      const optErrMsg = `Invalid PlanDefinition.action.dynamicValue.expression; Provided element is not an instance of Expression.`;
      assertFhirType<Expression>(value, Expression, optErrMsg);
      this.expression = value;
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpression(): boolean {
    return isDefined<Expression>(this.expression) && !this.expression.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'PlanDefinition.action.dynamicValue';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.path,
      this.expression,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): PlanDefinitionActionDynamicValueComponent {
    const dest = new PlanDefinitionActionDynamicValueComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: PlanDefinitionActionDynamicValueComponent): void {
    super.copyValues(dest);
    dest.path = this.path?.copy();
    dest.expression = this.expression?.copy();
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

    if (this.hasExpression()) {
      setFhirComplexJson(this.getExpression(), 'expression', jsonObj);
    }

    return jsonObj;
  }
}
