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
 * RiskEvidenceSynthesis Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis
 * StructureDefinition.name: RiskEvidenceSynthesis
 * StructureDefinition.description: The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  BackboneElement,
  CodeType,
  DateTimeType,
  DateType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  IntegerType,
  JSON,
  MarkdownType,
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
  fhirCode,
  fhirCodeSchema,
  fhirDate,
  fhirDateSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirDecimal,
  fhirDecimalSchema,
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
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference, RelatedArtifact, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

/**
 * RiskEvidenceSynthesis Class
 *
 * @remarks
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 *
 * **FHIR Specification**
 * - **Short:** A quantified estimate of risk based on a body of evidence
 * - **Definition:** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR RiskEvidenceSynthesis](http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis)
 */
export class RiskEvidenceSynthesis extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, population: Reference | null = null, outcome: Reference | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'RiskEvidenceSynthesis.status',
    );

    this.population = null;
    if (isDefined<Reference>(population)) {
      this.setPopulation(population);
    }

    this.outcome = null;
    if (isDefined<Reference>(outcome)) {
      this.setOutcome(outcome);
    }
  }

  /**
   * Parse the provided `RiskEvidenceSynthesis` JSON to instantiate the RiskEvidenceSynthesis data model.
   *
   * @param sourceJson - JSON representing FHIR `RiskEvidenceSynthesis`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RiskEvidenceSynthesis
   * @returns RiskEvidenceSynthesis data model or undefined for `RiskEvidenceSynthesis`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): RiskEvidenceSynthesis | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RiskEvidenceSynthesis';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RiskEvidenceSynthesis();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'RiskEvidenceSynthesis');
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

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNote(datatype);
        }
      });
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

    fieldName = 'synthesisType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSynthesisType(datatype);
    }

    fieldName = 'studyType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStudyType(datatype);
    }

    fieldName = 'population';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPopulation(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'exposure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExposure(datatype);
    }

    fieldName = 'outcome';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setOutcome(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'sampleSize';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: RiskEvidenceSynthesisSampleSizeComponent | undefined = RiskEvidenceSynthesisSampleSizeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSampleSize(component);
    }

    fieldName = 'riskEstimate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: RiskEvidenceSynthesisRiskEstimateComponent | undefined = RiskEvidenceSynthesisRiskEstimateComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRiskEstimate(component);
    }

    fieldName = 'certainty';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RiskEvidenceSynthesisCertaintyComponent | undefined = RiskEvidenceSynthesisCertaintyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCertainty(component);
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
   * RiskEvidenceSynthesis.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this risk evidence synthesis when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this risk evidence synthesis is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the risk evidence synthesis is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the risk evidence synthesis to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * RiskEvidenceSynthesis.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the risk evidence synthesis
   * - **Definition:** A formal identifier that is used to identify this risk evidence synthesis when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this risk evidence synthesis outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * RiskEvidenceSynthesis.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the risk evidence synthesis
   * - **Definition:** The identifier that is used to identify this version of the risk evidence synthesis when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the risk evidence synthesis author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different risk evidence synthesis instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the risk evidence synthesis with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * RiskEvidenceSynthesis.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this risk evidence synthesis (computer friendly)
   * - **Definition:** A natural language name identifying the risk evidence synthesis. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * RiskEvidenceSynthesis.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this risk evidence synthesis (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the risk evidence synthesis.
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
   * RiskEvidenceSynthesis.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this risk evidence synthesis. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of risk evidence synthesiss that are appropriate for use versus not.
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
   * RiskEvidenceSynthesis.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the risk evidence synthesis was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the risk evidence synthesis changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the risk evidence synthesis. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * RiskEvidenceSynthesis.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the risk evidence synthesis.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the risk evidence synthesis is the organization or individual primarily responsible for the maintenance and upkeep of the risk evidence synthesis. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the risk evidence synthesis. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the risk evidence synthesis.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * RiskEvidenceSynthesis.contact Element
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
   * RiskEvidenceSynthesis.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the risk evidence synthesis
   * - **Definition:** A free text natural language description of the risk evidence synthesis from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the risk evidence synthesis was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the risk evidence synthesis as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the risk evidence synthesis is presumed to be the predominant language in the place the risk evidence synthesis was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * RiskEvidenceSynthesis.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for footnotes or explanatory notes
   * - **Definition:** A human-readable string to clarify or explain concepts about the resource.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * RiskEvidenceSynthesis.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate risk evidence synthesis instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * RiskEvidenceSynthesis.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for risk evidence synthesis (if applicable)
   * - **Definition:** A legal or geographic region in which the risk evidence synthesis is intended to be used.
   * - **Comment:** It may be possible for the risk evidence synthesis to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * RiskEvidenceSynthesis.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the risk evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the risk evidence synthesis.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the risk evidence synthesis and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * RiskEvidenceSynthesis.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the risk evidence synthesis was approved by publisher
   * - **Definition:** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The \'date\' element may be more recent than the approval date because of minor changes or editorial corrections.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * RiskEvidenceSynthesis.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the risk evidence synthesis was last reviewed
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
   * RiskEvidenceSynthesis.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the risk evidence synthesis is expected to be used
   * - **Definition:** The period during which the risk evidence synthesis content was or is planned to be in active use.
   * - **Comment:** The effective period for a risk evidence synthesis  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   * - **Requirements:** Allows establishing a transition before a resource comes into effect and also allows for a sunsetting  process when new versions of the risk evidence synthesis are or are expected to be used instead.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectivePeriod?: Period | undefined;

  /**
   * RiskEvidenceSynthesis.topic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc.
   * - **Definition:** Descriptive topics related to the content of the RiskEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.
   * - **Requirements:** Repositories must be able to determine how to categorize the RiskEvidenceSynthesis so that it can be found by topical searches.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private topic?: CodeableConcept[] | undefined;

  /**
   * RiskEvidenceSynthesis.author Element
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
   * RiskEvidenceSynthesis.editor Element
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
   * RiskEvidenceSynthesis.reviewer Element
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
   * RiskEvidenceSynthesis.endorser Element
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
   * RiskEvidenceSynthesis.relatedArtifact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional documentation, citations, etc.
   * - **Definition:** Related artifacts such as additional documentation, justification, or bibliographic references.
   * - **Comment:** Each related artifact is either an attachment, or a reference to another resource, but not both.
   * - **Requirements:** RiskEvidenceSynthesiss must be able to provide enough information for consumers of the content (and/or interventions or results produced by the content) to be able to determine and understand the justification for and evidence in support of the content.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedArtifact?: RelatedArtifact[] | undefined;

  /**
   * RiskEvidenceSynthesis.synthesisType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of synthesis
   * - **Definition:** Type of synthesis eg meta-analysis.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private synthesisType?: CodeableConcept | undefined;

  /**
   * RiskEvidenceSynthesis.studyType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of study
   * - **Definition:** Type of study eg randomized trial.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private studyType?: CodeableConcept | undefined;

  /**
   * RiskEvidenceSynthesis.population Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What population?
   * - **Definition:** A reference to a EvidenceVariable resource that defines the population for the research.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private population: Reference | null;

  /**
   * RiskEvidenceSynthesis.exposure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What exposure?
   * - **Definition:** A reference to a EvidenceVariable resource that defines the exposure for the research.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private exposure?: Reference | undefined;

  /**
   * RiskEvidenceSynthesis.outcome Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What outcome?
   * - **Definition:** A reference to a EvidenceVariable resomece that defines the outcome for the research.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private outcome: Reference | null;

  /**
   * RiskEvidenceSynthesis.sampleSize Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What sample size was involved?
   * - **Definition:** A description of the size of the sample involved in the synthesis.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sampleSize?: RiskEvidenceSynthesisSampleSizeComponent | undefined;

  /**
   * RiskEvidenceSynthesis.riskEstimate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What was the estimated risk
   * - **Definition:** The estimated risk of the outcome.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private riskEstimate?: RiskEvidenceSynthesisRiskEstimateComponent | undefined;

  /**
   * RiskEvidenceSynthesis.certainty Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How certain is the risk
   * - **Definition:** A description of the certainty of the risk estimate.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private certainty?: RiskEvidenceSynthesisCertaintyComponent[] | undefined;

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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.url (${String(value)})`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.version (${String(value)})`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.name (${String(value)})`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.title (${String(value)})`;
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
    assertIsDefined<EnumCodeType>(enumType, `RiskEvidenceSynthesis.status is required`);
    const errMsgPrefix = `Invalid RiskEvidenceSynthesis.status`;
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
    assertIsDefined<CodeType>(element, `RiskEvidenceSynthesis.status is required`);
    const optErrMsg = `Invalid RiskEvidenceSynthesis.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `RiskEvidenceSynthesis.status is required`);
    const optErrMsg = `Invalid RiskEvidenceSynthesis.status (${String(value)})`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.date (${String(value)})`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.description (${String(value)})`;
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
   * @returns the `note` property value as a Annotation array
   */
  public getNote(): Annotation[] {
    return this.note ?? ([] as Annotation[]);
  }

  /**
   * Assigns the provided Annotation array value to the `note` property.
   *
   * @param value - the `note` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNote(value: Annotation[] | undefined): this {
    if (isDefinedList<Annotation>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.note; Provided value array has an element that is not an instance of Annotation.`;
      assertFhirTypeList<Annotation>(value, Annotation, optErrMsg);
      this.note = value;
    } else {
      this.note = undefined;
    }
    return this;
  }

  /**
   * Add the provided Annotation value to the `note` array property.
   *
   * @param value - the `note` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNote(value: Annotation | undefined): this {
    if (isDefined<Annotation>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.note; Provided element is not an instance of Annotation.`;
      assertFhirType<Annotation>(value, Annotation, optErrMsg);
      this.initNote();
      this.note?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `note` property exists and has a value; `false` otherwise
   */
  public hasNote(): boolean {
    return isDefinedList<Annotation>(this.note) && this.note.some((item: Annotation) => !item.isEmpty());
  }

  /**
   * Initialize the `note` property
   */
  private initNote(): void {
    if(!this.hasNote()) {
      this.note = [] as Annotation[];
    }
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.approvalDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.approvalDate (${String(value)})`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.lastReviewDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.lastReviewDate (${String(value)})`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.effectivePeriod; Provided element is not an instance of Period.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.topic; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.topic; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.author; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.author; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.editor; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.editor; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.reviewer; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.reviewer; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.endorser; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.endorser; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.relatedArtifact; Provided value array has an element that is not an instance of RelatedArtifact.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.relatedArtifact; Provided element is not an instance of RelatedArtifact.`;
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
   * @returns the `synthesisType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSynthesisType(): CodeableConcept {
    return this.synthesisType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided SynthesisType object value to the `synthesisType` property.
   *
   * @param value - the `synthesisType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSynthesisType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.synthesisType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.synthesisType = value;
    } else {
      this.synthesisType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `synthesisType` property exists and has a value; `false` otherwise
   */
  public hasSynthesisType(): boolean {
    return isDefined<CodeableConcept>(this.synthesisType) && !this.synthesisType.isEmpty();
  }

  /**
   * @returns the `studyType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStudyType(): CodeableConcept {
    return this.studyType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided StudyType object value to the `studyType` property.
   *
   * @param value - the `studyType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStudyType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.studyType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.studyType = value;
    } else {
      this.studyType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `studyType` property exists and has a value; `false` otherwise
   */
  public hasStudyType(): boolean {
    return isDefined<CodeableConcept>(this.studyType) && !this.studyType.isEmpty();
  }

  /**
   * @returns the `population` property value as a Reference object if defined; else null
   */
  public getPopulation(): Reference | null {
    return this.population;
  }

  /**
   * Assigns the provided Population object value to the `population` property.
   *
   * @decorator `@ReferenceTargets('RiskEvidenceSynthesis.population', ['EvidenceVariable',])`
   *
   * @param value - the `population` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskEvidenceSynthesis.population', [
    'EvidenceVariable',
  ])
  public setPopulation(value: Reference): this {
    assertIsDefined<Reference>(value, `RiskEvidenceSynthesis.population is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.population = value;
    return this;
  }

  /**
   * @returns `true` if the `population` property exists and has a value; `false` otherwise
   */
  public hasPopulation(): boolean {
    return isDefined<Reference>(this.population) && !this.population.isEmpty();
  }

  /**
   * @returns the `exposure` property value as a Reference object; else an empty Reference object
   */
  public getExposure(): Reference {
    return this.exposure ?? new Reference();
  }

  /**
   * Assigns the provided Exposure object value to the `exposure` property.
   *
   * @decorator `@ReferenceTargets('RiskEvidenceSynthesis.exposure', ['EvidenceVariable',])`
   *
   * @param value - the `exposure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskEvidenceSynthesis.exposure', [
    'EvidenceVariable',
  ])
  public setExposure(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.exposure = value;
    } else {
      this.exposure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `exposure` property exists and has a value; `false` otherwise
   */
  public hasExposure(): boolean {
    return isDefined<Reference>(this.exposure) && !this.exposure.isEmpty();
  }

  /**
   * @returns the `outcome` property value as a Reference object if defined; else null
   */
  public getOutcome(): Reference | null {
    return this.outcome;
  }

  /**
   * Assigns the provided Outcome object value to the `outcome` property.
   *
   * @decorator `@ReferenceTargets('RiskEvidenceSynthesis.outcome', ['EvidenceVariable',])`
   *
   * @param value - the `outcome` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('RiskEvidenceSynthesis.outcome', [
    'EvidenceVariable',
  ])
  public setOutcome(value: Reference): this {
    assertIsDefined<Reference>(value, `RiskEvidenceSynthesis.outcome is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.outcome = value;
    return this;
  }

  /**
   * @returns `true` if the `outcome` property exists and has a value; `false` otherwise
   */
  public hasOutcome(): boolean {
    return isDefined<Reference>(this.outcome) && !this.outcome.isEmpty();
  }

  /**
   * @returns the `sampleSize` property value as a RiskEvidenceSynthesisSampleSizeComponent object if defined; else an empty RiskEvidenceSynthesisSampleSizeComponent object
   */
  public getSampleSize(): RiskEvidenceSynthesisSampleSizeComponent {
    return this.sampleSize ?? new RiskEvidenceSynthesisSampleSizeComponent();
  }

  /**
   * Assigns the provided SampleSize object value to the `sampleSize` property.
   *
   * @param value - the `sampleSize` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSampleSize(value: RiskEvidenceSynthesisSampleSizeComponent | undefined): this {
    if (isDefined<RiskEvidenceSynthesisSampleSizeComponent>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.sampleSize; Provided element is not an instance of RiskEvidenceSynthesisSampleSizeComponent.`;
      assertFhirType<RiskEvidenceSynthesisSampleSizeComponent>(value, RiskEvidenceSynthesisSampleSizeComponent, optErrMsg);
      this.sampleSize = value;
    } else {
      this.sampleSize = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sampleSize` property exists and has a value; `false` otherwise
   */
  public hasSampleSize(): boolean {
    return isDefined<RiskEvidenceSynthesisSampleSizeComponent>(this.sampleSize) && !this.sampleSize.isEmpty();
  }

  /**
   * @returns the `riskEstimate` property value as a RiskEvidenceSynthesisRiskEstimateComponent object if defined; else an empty RiskEvidenceSynthesisRiskEstimateComponent object
   */
  public getRiskEstimate(): RiskEvidenceSynthesisRiskEstimateComponent {
    return this.riskEstimate ?? new RiskEvidenceSynthesisRiskEstimateComponent();
  }

  /**
   * Assigns the provided RiskEstimate object value to the `riskEstimate` property.
   *
   * @param value - the `riskEstimate` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRiskEstimate(value: RiskEvidenceSynthesisRiskEstimateComponent | undefined): this {
    if (isDefined<RiskEvidenceSynthesisRiskEstimateComponent>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate; Provided element is not an instance of RiskEvidenceSynthesisRiskEstimateComponent.`;
      assertFhirType<RiskEvidenceSynthesisRiskEstimateComponent>(value, RiskEvidenceSynthesisRiskEstimateComponent, optErrMsg);
      this.riskEstimate = value;
    } else {
      this.riskEstimate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `riskEstimate` property exists and has a value; `false` otherwise
   */
  public hasRiskEstimate(): boolean {
    return isDefined<RiskEvidenceSynthesisRiskEstimateComponent>(this.riskEstimate) && !this.riskEstimate.isEmpty();
  }

  /**
   * @returns the `certainty` property value as a RiskEvidenceSynthesisCertaintyComponent array
   */
  public getCertainty(): RiskEvidenceSynthesisCertaintyComponent[] {
    return this.certainty ?? ([] as RiskEvidenceSynthesisCertaintyComponent[]);
  }

  /**
   * Assigns the provided RiskEvidenceSynthesisCertaintyComponent array value to the `certainty` property.
   *
   * @param value - the `certainty` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCertainty(value: RiskEvidenceSynthesisCertaintyComponent[] | undefined): this {
    if (isDefinedList<RiskEvidenceSynthesisCertaintyComponent>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty; Provided value array has an element that is not an instance of RiskEvidenceSynthesisCertaintyComponent.`;
      assertFhirTypeList<RiskEvidenceSynthesisCertaintyComponent>(value, RiskEvidenceSynthesisCertaintyComponent, optErrMsg);
      this.certainty = value;
    } else {
      this.certainty = undefined;
    }
    return this;
  }

  /**
   * Add the provided RiskEvidenceSynthesisCertaintyComponent value to the `certainty` array property.
   *
   * @param value - the `certainty` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCertainty(value: RiskEvidenceSynthesisCertaintyComponent | undefined): this {
    if (isDefined<RiskEvidenceSynthesisCertaintyComponent>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty; Provided element is not an instance of RiskEvidenceSynthesisCertaintyComponent.`;
      assertFhirType<RiskEvidenceSynthesisCertaintyComponent>(value, RiskEvidenceSynthesisCertaintyComponent, optErrMsg);
      this.initCertainty();
      this.certainty?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `certainty` property exists and has a value; `false` otherwise
   */
  public hasCertainty(): boolean {
    return isDefinedList<RiskEvidenceSynthesisCertaintyComponent>(this.certainty) && this.certainty.some((item: RiskEvidenceSynthesisCertaintyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `certainty` property
   */
  private initCertainty(): void {
    if(!this.hasCertainty()) {
      this.certainty = [] as RiskEvidenceSynthesisCertaintyComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RiskEvidenceSynthesis';
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
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.note,
      this.useContext,
      this.jurisdiction,
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
      this.synthesisType,
      this.studyType,
      this.population,
      this.exposure,
      this.outcome,
      this.sampleSize,
      this.riskEstimate,
      this.certainty,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RiskEvidenceSynthesis {
    const dest = new RiskEvidenceSynthesis();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RiskEvidenceSynthesis): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.date = this.date?.copy();
    dest.publisher = this.publisher?.copy();
    const contactList = copyListValues<ContactDetail>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.description = this.description?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const useContextList = copyListValues<UsageContext>(this.useContext);
    dest.useContext = useContextList.length === 0 ? undefined : useContextList;
    const jurisdictionList = copyListValues<CodeableConcept>(this.jurisdiction);
    dest.jurisdiction = jurisdictionList.length === 0 ? undefined : jurisdictionList;
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
    dest.synthesisType = this.synthesisType?.copy();
    dest.studyType = this.studyType?.copy();
    dest.population = this.population ? this.population.copy() : null;
    dest.exposure = this.exposure?.copy();
    dest.outcome = this.outcome ? this.outcome.copy() : null;
    dest.sampleSize = this.sampleSize?.copy();
    dest.riskEstimate = this.riskEstimate?.copy();
    const certaintyList = copyListValues<RiskEvidenceSynthesisCertaintyComponent>(this.certainty);
    dest.certainty = certaintyList.length === 0 ? undefined : certaintyList;
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
      missingReqdProperties.push(`RiskEvidenceSynthesis.status`);
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

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
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

    if (this.hasSynthesisType()) {
      setFhirComplexJson(this.getSynthesisType(), 'synthesisType', jsonObj);
    }

    if (this.hasStudyType()) {
      setFhirComplexJson(this.getStudyType(), 'studyType', jsonObj);
    }

    if (this.hasPopulation()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getPopulation()!, 'population', jsonObj);
    } else {
      missingReqdProperties.push(`RiskEvidenceSynthesis.population`);
    }

    if (this.hasExposure()) {
      setFhirComplexJson(this.getExposure(), 'exposure', jsonObj);
    }

    if (this.hasOutcome()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getOutcome()!, 'outcome', jsonObj);
    } else {
      missingReqdProperties.push(`RiskEvidenceSynthesis.outcome`);
    }

    if (this.hasSampleSize()) {
      setFhirBackboneElementJson(this.getSampleSize(), 'sampleSize', jsonObj);
    }

    if (this.hasRiskEstimate()) {
      setFhirBackboneElementJson(this.getRiskEstimate(), 'riskEstimate', jsonObj);
    }

    if (this.hasCertainty()) {
      setFhirBackboneElementListJson(this.getCertainty(), 'certainty', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * RiskEvidenceSynthesisSampleSizeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** What sample size was involved?
 * - **Definition:** A description of the size of the sample involved in the synthesis.
 *
 * @category Data Models: Resource
 * @see [FHIR RiskEvidenceSynthesis](http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis)
 */
export class RiskEvidenceSynthesisSampleSizeComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `RiskEvidenceSynthesisSampleSizeComponent` JSON to instantiate the RiskEvidenceSynthesisSampleSizeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RiskEvidenceSynthesisSampleSizeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RiskEvidenceSynthesisSampleSizeComponent
   * @returns RiskEvidenceSynthesisSampleSizeComponent data model or undefined for `RiskEvidenceSynthesisSampleSizeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RiskEvidenceSynthesisSampleSizeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RiskEvidenceSynthesisSampleSizeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RiskEvidenceSynthesisSampleSizeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'numberOfStudies';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setNumberOfStudiesElement(datatype);
    }

    fieldName = 'numberOfParticipants';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setNumberOfParticipantsElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * RiskEvidenceSynthesis.sampleSize.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of sample size
   * - **Definition:** Human-readable summary of sample size.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * RiskEvidenceSynthesis.sampleSize.numberOfStudies Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How many studies?
   * - **Definition:** Number of studies included in this evidence synthesis.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private numberOfStudies?: IntegerType | undefined;

  /**
   * RiskEvidenceSynthesis.sampleSize.numberOfParticipants Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How many participants?
   * - **Definition:** Number of participants included in this evidence synthesis.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private numberOfParticipants?: IntegerType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.sampleSize.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.sampleSize.description (${String(value)})`;
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
   * @returns the `numberOfStudies` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getNumberOfStudiesElement(): IntegerType {
    return this.numberOfStudies ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberOfStudies` property.
   *
   * @param element - the `numberOfStudies` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfStudiesElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.sampleSize.numberOfStudies; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.numberOfStudies = element;
    } else {
      this.numberOfStudies = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfStudies` property exists and has a value; `false` otherwise
   */
  public hasNumberOfStudiesElement(): boolean {
    return isDefined<IntegerType>(this.numberOfStudies) && !this.numberOfStudies.isEmpty();
  }

  /**
   * @returns the `numberOfStudies` property value as a fhirInteger if defined; else undefined
   */
  public getNumberOfStudies(): fhirInteger | undefined {
    return this.numberOfStudies?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberOfStudies` property.
   *
   * @param value - the `numberOfStudies` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfStudies(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.sampleSize.numberOfStudies (${String(value)})`;
      this.numberOfStudies = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.numberOfStudies = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfStudies` property exists and has a value; `false` otherwise
   */
  public hasNumberOfStudies(): boolean {
    return this.hasNumberOfStudiesElement();
  }

  /**
   * @returns the `numberOfParticipants` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getNumberOfParticipantsElement(): IntegerType {
    return this.numberOfParticipants ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberOfParticipants` property.
   *
   * @param element - the `numberOfParticipants` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfParticipantsElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.sampleSize.numberOfParticipants; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.numberOfParticipants = element;
    } else {
      this.numberOfParticipants = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfParticipants` property exists and has a value; `false` otherwise
   */
  public hasNumberOfParticipantsElement(): boolean {
    return isDefined<IntegerType>(this.numberOfParticipants) && !this.numberOfParticipants.isEmpty();
  }

  /**
   * @returns the `numberOfParticipants` property value as a fhirInteger if defined; else undefined
   */
  public getNumberOfParticipants(): fhirInteger | undefined {
    return this.numberOfParticipants?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberOfParticipants` property.
   *
   * @param value - the `numberOfParticipants` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfParticipants(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.sampleSize.numberOfParticipants (${String(value)})`;
      this.numberOfParticipants = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.numberOfParticipants = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfParticipants` property exists and has a value; `false` otherwise
   */
  public hasNumberOfParticipants(): boolean {
    return this.hasNumberOfParticipantsElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RiskEvidenceSynthesis.sampleSize';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.numberOfStudies,
      this.numberOfParticipants,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RiskEvidenceSynthesisSampleSizeComponent {
    const dest = new RiskEvidenceSynthesisSampleSizeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RiskEvidenceSynthesisSampleSizeComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.numberOfStudies = this.numberOfStudies?.copy();
    dest.numberOfParticipants = this.numberOfParticipants?.copy();
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
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasNumberOfStudiesElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getNumberOfStudiesElement(), 'numberOfStudies', jsonObj);
    }

    if (this.hasNumberOfParticipantsElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getNumberOfParticipantsElement(), 'numberOfParticipants', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * RiskEvidenceSynthesisRiskEstimateComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** What was the estimated risk
 * - **Definition:** The estimated risk of the outcome.
 *
 * @category Data Models: Resource
 * @see [FHIR RiskEvidenceSynthesis](http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis)
 */
export class RiskEvidenceSynthesisRiskEstimateComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `RiskEvidenceSynthesisRiskEstimateComponent` JSON to instantiate the RiskEvidenceSynthesisRiskEstimateComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RiskEvidenceSynthesisRiskEstimateComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RiskEvidenceSynthesisRiskEstimateComponent
   * @returns RiskEvidenceSynthesisRiskEstimateComponent data model or undefined for `RiskEvidenceSynthesisRiskEstimateComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RiskEvidenceSynthesisRiskEstimateComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RiskEvidenceSynthesisRiskEstimateComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RiskEvidenceSynthesisRiskEstimateComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setValueElement(datatype);
    }

    fieldName = 'unitOfMeasure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnitOfMeasure(datatype);
    }

    fieldName = 'denominatorCount';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setDenominatorCountElement(datatype);
    }

    fieldName = 'numeratorCount';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setNumeratorCountElement(datatype);
    }

    fieldName = 'precisionEstimate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent | undefined = RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPrecisionEstimate(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * RiskEvidenceSynthesis.riskEstimate.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of risk estimate
   * - **Definition:** Human-readable summary of risk estimate.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * RiskEvidenceSynthesis.riskEstimate.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of risk estimate
   * - **Definition:** Examples include proportion and mean.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * RiskEvidenceSynthesis.riskEstimate.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Point estimate
   * - **Definition:** The point estimate of the risk estimate.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value?: DecimalType | undefined;

  /**
   * RiskEvidenceSynthesis.riskEstimate.unitOfMeasure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What unit is the outcome described in?
   * - **Definition:** Specifies the UCUM unit for the outcome.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private unitOfMeasure?: CodeableConcept | undefined;

  /**
   * RiskEvidenceSynthesis.riskEstimate.denominatorCount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sample size for group measured
   * - **Definition:** The sample size for the group that was measured for this risk estimate.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private denominatorCount?: IntegerType | undefined;

  /**
   * RiskEvidenceSynthesis.riskEstimate.numeratorCount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number with the outcome
   * - **Definition:** The number of group members with the outcome of interest.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private numeratorCount?: IntegerType | undefined;

  /**
   * RiskEvidenceSynthesis.riskEstimate.precisionEstimate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How precise the estimate is
   * - **Definition:** A description of the precision of the estimate for the effect.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private precisionEstimate?: RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.description (${String(value)})`;
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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `value` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getValueElement(): DecimalType {
    return this.value ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.value; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
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
    return isDefined<DecimalType>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `value` property value as a fhirDecimal if defined; else undefined
   */
  public getValue(): fhirDecimal | undefined {
    return this.value?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.value (${String(value)})`;
      this.value = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
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
   * @returns the `unitOfMeasure` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getUnitOfMeasure(): CodeableConcept {
    return this.unitOfMeasure ?? new CodeableConcept();
  }

  /**
   * Assigns the provided UnitOfMeasure object value to the `unitOfMeasure` property.
   *
   * @param value - the `unitOfMeasure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnitOfMeasure(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.unitOfMeasure; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.unitOfMeasure = value;
    } else {
      this.unitOfMeasure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unitOfMeasure` property exists and has a value; `false` otherwise
   */
  public hasUnitOfMeasure(): boolean {
    return isDefined<CodeableConcept>(this.unitOfMeasure) && !this.unitOfMeasure.isEmpty();
  }

  /**
   * @returns the `denominatorCount` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getDenominatorCountElement(): IntegerType {
    return this.denominatorCount ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `denominatorCount` property.
   *
   * @param element - the `denominatorCount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDenominatorCountElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.denominatorCount; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.denominatorCount = element;
    } else {
      this.denominatorCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `denominatorCount` property exists and has a value; `false` otherwise
   */
  public hasDenominatorCountElement(): boolean {
    return isDefined<IntegerType>(this.denominatorCount) && !this.denominatorCount.isEmpty();
  }

  /**
   * @returns the `denominatorCount` property value as a fhirInteger if defined; else undefined
   */
  public getDenominatorCount(): fhirInteger | undefined {
    return this.denominatorCount?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `denominatorCount` property.
   *
   * @param value - the `denominatorCount` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDenominatorCount(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.denominatorCount (${String(value)})`;
      this.denominatorCount = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.denominatorCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `denominatorCount` property exists and has a value; `false` otherwise
   */
  public hasDenominatorCount(): boolean {
    return this.hasDenominatorCountElement();
  }

  /**
   * @returns the `numeratorCount` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getNumeratorCountElement(): IntegerType {
    return this.numeratorCount ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numeratorCount` property.
   *
   * @param element - the `numeratorCount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumeratorCountElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.numeratorCount; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.numeratorCount = element;
    } else {
      this.numeratorCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numeratorCount` property exists and has a value; `false` otherwise
   */
  public hasNumeratorCountElement(): boolean {
    return isDefined<IntegerType>(this.numeratorCount) && !this.numeratorCount.isEmpty();
  }

  /**
   * @returns the `numeratorCount` property value as a fhirInteger if defined; else undefined
   */
  public getNumeratorCount(): fhirInteger | undefined {
    return this.numeratorCount?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numeratorCount` property.
   *
   * @param value - the `numeratorCount` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumeratorCount(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.numeratorCount (${String(value)})`;
      this.numeratorCount = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.numeratorCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numeratorCount` property exists and has a value; `false` otherwise
   */
  public hasNumeratorCount(): boolean {
    return this.hasNumeratorCountElement();
  }

  /**
   * @returns the `precisionEstimate` property value as a RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent array
   */
  public getPrecisionEstimate(): RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent[] {
    return this.precisionEstimate ?? ([] as RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent[]);
  }

  /**
   * Assigns the provided RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent array value to the `precisionEstimate` property.
   *
   * @param value - the `precisionEstimate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPrecisionEstimate(value: RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent[] | undefined): this {
    if (isDefinedList<RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.precisionEstimate; Provided value array has an element that is not an instance of RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent.`;
      assertFhirTypeList<RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent>(value, RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent, optErrMsg);
      this.precisionEstimate = value;
    } else {
      this.precisionEstimate = undefined;
    }
    return this;
  }

  /**
   * Add the provided RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent value to the `precisionEstimate` array property.
   *
   * @param value - the `precisionEstimate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPrecisionEstimate(value: RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent | undefined): this {
    if (isDefined<RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.precisionEstimate; Provided element is not an instance of RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent.`;
      assertFhirType<RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent>(value, RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent, optErrMsg);
      this.initPrecisionEstimate();
      this.precisionEstimate?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `precisionEstimate` property exists and has a value; `false` otherwise
   */
  public hasPrecisionEstimate(): boolean {
    return isDefinedList<RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent>(this.precisionEstimate) && this.precisionEstimate.some((item: RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `precisionEstimate` property
   */
  private initPrecisionEstimate(): void {
    if(!this.hasPrecisionEstimate()) {
      this.precisionEstimate = [] as RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RiskEvidenceSynthesis.riskEstimate';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.type_,
      this.value,
      this.unitOfMeasure,
      this.denominatorCount,
      this.numeratorCount,
      this.precisionEstimate,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RiskEvidenceSynthesisRiskEstimateComponent {
    const dest = new RiskEvidenceSynthesisRiskEstimateComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RiskEvidenceSynthesisRiskEstimateComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.type_ = this.type_?.copy();
    dest.value = this.value?.copy();
    dest.unitOfMeasure = this.unitOfMeasure?.copy();
    dest.denominatorCount = this.denominatorCount?.copy();
    dest.numeratorCount = this.numeratorCount?.copy();
    const precisionEstimateList = copyListValues<RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent>(this.precisionEstimate);
    dest.precisionEstimate = precisionEstimateList.length === 0 ? undefined : precisionEstimateList;
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
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getValueElement(), 'value', jsonObj);
    }

    if (this.hasUnitOfMeasure()) {
      setFhirComplexJson(this.getUnitOfMeasure(), 'unitOfMeasure', jsonObj);
    }

    if (this.hasDenominatorCountElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getDenominatorCountElement(), 'denominatorCount', jsonObj);
    }

    if (this.hasNumeratorCountElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getNumeratorCountElement(), 'numeratorCount', jsonObj);
    }

    if (this.hasPrecisionEstimate()) {
      setFhirBackboneElementListJson(this.getPrecisionEstimate(), 'precisionEstimate', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** How precise the estimate is
 * - **Definition:** A description of the precision of the estimate for the effect.
 *
 * @category Data Models: Resource
 * @see [FHIR RiskEvidenceSynthesis](http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis)
 */
export class RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent` JSON to instantiate the RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent
   * @returns RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent data model or undefined for `RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'level';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setLevelElement(datatype);
    }

    fieldName = 'from';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setFromElement(datatype);
    }

    fieldName = 'to';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setToElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * RiskEvidenceSynthesis.riskEstimate.precisionEstimate.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of precision estimate
   * - **Definition:** Examples include confidence interval and interquartile range.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * RiskEvidenceSynthesis.riskEstimate.precisionEstimate.level Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Level of confidence interval
   * - **Definition:** Use 95 for a 95% confidence interval.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private level?: DecimalType | undefined;

  /**
   * RiskEvidenceSynthesis.riskEstimate.precisionEstimate.from Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Lower bound
   * - **Definition:** Lower bound of confidence interval.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private from_?: DecimalType | undefined;

  /**
   * RiskEvidenceSynthesis.riskEstimate.precisionEstimate.to Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Upper bound
   * - **Definition:** Upper bound of confidence interval.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private to?: DecimalType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.precisionEstimate.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `level` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getLevelElement(): DecimalType {
    return this.level ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `level` property.
   *
   * @param element - the `level` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLevelElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.precisionEstimate.level; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.level = element;
    } else {
      this.level = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `level` property exists and has a value; `false` otherwise
   */
  public hasLevelElement(): boolean {
    return isDefined<DecimalType>(this.level) && !this.level.isEmpty();
  }

  /**
   * @returns the `level` property value as a fhirDecimal if defined; else undefined
   */
  public getLevel(): fhirDecimal | undefined {
    return this.level?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `level` property.
   *
   * @param value - the `level` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLevel(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.precisionEstimate.level (${String(value)})`;
      this.level = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.level = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `level` property exists and has a value; `false` otherwise
   */
  public hasLevel(): boolean {
    return this.hasLevelElement();
  }

  /**
   * @returns the `from_` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getFromElement(): DecimalType {
    return this.from_ ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `from_` property.
   *
   * @param element - the `from_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFromElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.precisionEstimate.from; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.from_ = element;
    } else {
      this.from_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `from_` property exists and has a value; `false` otherwise
   */
  public hasFromElement(): boolean {
    return isDefined<DecimalType>(this.from_) && !this.from_.isEmpty();
  }

  /**
   * @returns the `from_` property value as a fhirDecimal if defined; else undefined
   */
  public getFrom(): fhirDecimal | undefined {
    return this.from_?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `from_` property.
   *
   * @param value - the `from_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFrom(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.precisionEstimate.from (${String(value)})`;
      this.from_ = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.from_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `from_` property exists and has a value; `false` otherwise
   */
  public hasFrom(): boolean {
    return this.hasFromElement();
  }

  /**
   * @returns the `to` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getToElement(): DecimalType {
    return this.to ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `to` property.
   *
   * @param element - the `to` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setToElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.precisionEstimate.to; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.to = element;
    } else {
      this.to = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `to` property exists and has a value; `false` otherwise
   */
  public hasToElement(): boolean {
    return isDefined<DecimalType>(this.to) && !this.to.isEmpty();
  }

  /**
   * @returns the `to` property value as a fhirDecimal if defined; else undefined
   */
  public getTo(): fhirDecimal | undefined {
    return this.to?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `to` property.
   *
   * @param value - the `to` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTo(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.riskEstimate.precisionEstimate.to (${String(value)})`;
      this.to = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.to = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `to` property exists and has a value; `false` otherwise
   */
  public hasTo(): boolean {
    return this.hasToElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RiskEvidenceSynthesis.riskEstimate.precisionEstimate';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.level,
      this.from_,
      this.to,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent {
    const dest = new RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RiskEvidenceSynthesisRiskEstimatePrecisionEstimateComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.level = this.level?.copy();
    dest.from_ = this.from_?.copy();
    dest.to = this.to?.copy();
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

    if (this.hasLevelElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getLevelElement(), 'level', jsonObj);
    }

    if (this.hasFromElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getFromElement(), 'from', jsonObj);
    }

    if (this.hasToElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getToElement(), 'to', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * RiskEvidenceSynthesisCertaintyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** How certain is the risk
 * - **Definition:** A description of the certainty of the risk estimate.
 *
 * @category Data Models: Resource
 * @see [FHIR RiskEvidenceSynthesis](http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis)
 */
export class RiskEvidenceSynthesisCertaintyComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `RiskEvidenceSynthesisCertaintyComponent` JSON to instantiate the RiskEvidenceSynthesisCertaintyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RiskEvidenceSynthesisCertaintyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RiskEvidenceSynthesisCertaintyComponent
   * @returns RiskEvidenceSynthesisCertaintyComponent data model or undefined for `RiskEvidenceSynthesisCertaintyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RiskEvidenceSynthesisCertaintyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RiskEvidenceSynthesisCertaintyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RiskEvidenceSynthesisCertaintyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'rating';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRating(datatype);
        }
      });
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNote(datatype);
        }
      });
    }

    fieldName = 'certaintySubcomponent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent | undefined = RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCertaintySubcomponent(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * RiskEvidenceSynthesis.certainty.rating Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Certainty rating
   * - **Definition:** A rating of the certainty of the effect estimate.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private rating?: CodeableConcept[] | undefined;

  /**
   * RiskEvidenceSynthesis.certainty.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for footnotes or explanatory notes
   * - **Definition:** A human-readable string to clarify or explain concepts about the resource.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * RiskEvidenceSynthesis.certainty.certaintySubcomponent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A component that contributes to the overall certainty
   * - **Definition:** A description of a component of the overall certainty.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private certaintySubcomponent?: RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `rating` property value as a CodeableConcept array
   */
  public getRating(): CodeableConcept[] {
    return this.rating ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `rating` property.
   *
   * @param value - the `rating` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRating(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty.rating; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.rating = value;
    } else {
      this.rating = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `rating` array property.
   *
   * @param value - the `rating` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRating(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty.rating; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initRating();
      this.rating?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `rating` property exists and has a value; `false` otherwise
   */
  public hasRating(): boolean {
    return isDefinedList<CodeableConcept>(this.rating) && this.rating.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `rating` property
   */
  private initRating(): void {
    if(!this.hasRating()) {
      this.rating = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `note` property value as a Annotation array
   */
  public getNote(): Annotation[] {
    return this.note ?? ([] as Annotation[]);
  }

  /**
   * Assigns the provided Annotation array value to the `note` property.
   *
   * @param value - the `note` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNote(value: Annotation[] | undefined): this {
    if (isDefinedList<Annotation>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty.note; Provided value array has an element that is not an instance of Annotation.`;
      assertFhirTypeList<Annotation>(value, Annotation, optErrMsg);
      this.note = value;
    } else {
      this.note = undefined;
    }
    return this;
  }

  /**
   * Add the provided Annotation value to the `note` array property.
   *
   * @param value - the `note` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNote(value: Annotation | undefined): this {
    if (isDefined<Annotation>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty.note; Provided element is not an instance of Annotation.`;
      assertFhirType<Annotation>(value, Annotation, optErrMsg);
      this.initNote();
      this.note?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `note` property exists and has a value; `false` otherwise
   */
  public hasNote(): boolean {
    return isDefinedList<Annotation>(this.note) && this.note.some((item: Annotation) => !item.isEmpty());
  }

  /**
   * Initialize the `note` property
   */
  private initNote(): void {
    if(!this.hasNote()) {
      this.note = [] as Annotation[];
    }
  }

  /**
   * @returns the `certaintySubcomponent` property value as a RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent array
   */
  public getCertaintySubcomponent(): RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent[] {
    return this.certaintySubcomponent ?? ([] as RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent[]);
  }

  /**
   * Assigns the provided RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent array value to the `certaintySubcomponent` property.
   *
   * @param value - the `certaintySubcomponent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCertaintySubcomponent(value: RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent[] | undefined): this {
    if (isDefinedList<RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty.certaintySubcomponent; Provided value array has an element that is not an instance of RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent.`;
      assertFhirTypeList<RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent>(value, RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent, optErrMsg);
      this.certaintySubcomponent = value;
    } else {
      this.certaintySubcomponent = undefined;
    }
    return this;
  }

  /**
   * Add the provided RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent value to the `certaintySubcomponent` array property.
   *
   * @param value - the `certaintySubcomponent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCertaintySubcomponent(value: RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent | undefined): this {
    if (isDefined<RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty.certaintySubcomponent; Provided element is not an instance of RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent.`;
      assertFhirType<RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent>(value, RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent, optErrMsg);
      this.initCertaintySubcomponent();
      this.certaintySubcomponent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `certaintySubcomponent` property exists and has a value; `false` otherwise
   */
  public hasCertaintySubcomponent(): boolean {
    return isDefinedList<RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent>(this.certaintySubcomponent) && this.certaintySubcomponent.some((item: RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `certaintySubcomponent` property
   */
  private initCertaintySubcomponent(): void {
    if(!this.hasCertaintySubcomponent()) {
      this.certaintySubcomponent = [] as RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RiskEvidenceSynthesis.certainty';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.rating,
      this.note,
      this.certaintySubcomponent,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RiskEvidenceSynthesisCertaintyComponent {
    const dest = new RiskEvidenceSynthesisCertaintyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RiskEvidenceSynthesisCertaintyComponent): void {
    super.copyValues(dest);
    const ratingList = copyListValues<CodeableConcept>(this.rating);
    dest.rating = ratingList.length === 0 ? undefined : ratingList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const certaintySubcomponentList = copyListValues<RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent>(this.certaintySubcomponent);
    dest.certaintySubcomponent = certaintySubcomponentList.length === 0 ? undefined : certaintySubcomponentList;
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

    if (this.hasRating()) {
      setFhirComplexListJson(this.getRating(), 'rating', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasCertaintySubcomponent()) {
      setFhirBackboneElementListJson(this.getCertaintySubcomponent(), 'certaintySubcomponent', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A component that contributes to the overall certainty
 * - **Definition:** A description of a component of the overall certainty.
 *
 * @category Data Models: Resource
 * @see [FHIR RiskEvidenceSynthesis](http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis)
 */
export class RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent` JSON to instantiate the RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent
   * @returns RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent data model or undefined for `RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'rating';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRating(datatype);
        }
      });
    }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNote(datatype);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * RiskEvidenceSynthesis.certainty.certaintySubcomponent.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of subcomponent of certainty rating
   * - **Definition:** Type of subcomponent of certainty rating.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * RiskEvidenceSynthesis.certainty.certaintySubcomponent.rating Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subcomponent certainty rating
   * - **Definition:** A rating of a subcomponent of rating certainty.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private rating?: CodeableConcept[] | undefined;

  /**
   * RiskEvidenceSynthesis.certainty.certaintySubcomponent.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for footnotes or explanatory notes
   * - **Definition:** A human-readable string to clarify or explain concepts about the resource.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty.certaintySubcomponent.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `rating` property value as a CodeableConcept array
   */
  public getRating(): CodeableConcept[] {
    return this.rating ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `rating` property.
   *
   * @param value - the `rating` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRating(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty.certaintySubcomponent.rating; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.rating = value;
    } else {
      this.rating = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `rating` array property.
   *
   * @param value - the `rating` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRating(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty.certaintySubcomponent.rating; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initRating();
      this.rating?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `rating` property exists and has a value; `false` otherwise
   */
  public hasRating(): boolean {
    return isDefinedList<CodeableConcept>(this.rating) && this.rating.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `rating` property
   */
  private initRating(): void {
    if(!this.hasRating()) {
      this.rating = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `note` property value as a Annotation array
   */
  public getNote(): Annotation[] {
    return this.note ?? ([] as Annotation[]);
  }

  /**
   * Assigns the provided Annotation array value to the `note` property.
   *
   * @param value - the `note` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNote(value: Annotation[] | undefined): this {
    if (isDefinedList<Annotation>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty.certaintySubcomponent.note; Provided value array has an element that is not an instance of Annotation.`;
      assertFhirTypeList<Annotation>(value, Annotation, optErrMsg);
      this.note = value;
    } else {
      this.note = undefined;
    }
    return this;
  }

  /**
   * Add the provided Annotation value to the `note` array property.
   *
   * @param value - the `note` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNote(value: Annotation | undefined): this {
    if (isDefined<Annotation>(value)) {
      const optErrMsg = `Invalid RiskEvidenceSynthesis.certainty.certaintySubcomponent.note; Provided element is not an instance of Annotation.`;
      assertFhirType<Annotation>(value, Annotation, optErrMsg);
      this.initNote();
      this.note?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `note` property exists and has a value; `false` otherwise
   */
  public hasNote(): boolean {
    return isDefinedList<Annotation>(this.note) && this.note.some((item: Annotation) => !item.isEmpty());
  }

  /**
   * Initialize the `note` property
   */
  private initNote(): void {
    if(!this.hasNote()) {
      this.note = [] as Annotation[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'RiskEvidenceSynthesis.certainty.certaintySubcomponent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.rating,
      this.note,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent {
    const dest = new RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: RiskEvidenceSynthesisCertaintyCertaintySubcomponentComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    const ratingList = copyListValues<CodeableConcept>(this.rating);
    dest.rating = ratingList.length === 0 ? undefined : ratingList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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

    if (this.hasRating()) {
      setFhirComplexListJson(this.getRating(), 'rating', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}
