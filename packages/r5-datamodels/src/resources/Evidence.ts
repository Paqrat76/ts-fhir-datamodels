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
 * Evidence Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Evidence
 * StructureDefinition.name: Evidence
 * StructureDefinition.description: The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.
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
  InvalidTypeError,
  JSON,
  MarkdownType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  UnsignedIntType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  assertIsDefinedList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDate,
  fhirDateSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirDecimal,
  fhirDecimalSchema,
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirString,
  fhirStringSchema,
  fhirUnsignedInt,
  fhirUnsignedIntSchema,
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
import { Annotation, CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Range, Reference, RelatedArtifact, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { VariableHandlingEnum } from '../code-systems/VariableHandlingEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Evidence Class
 *
 * @remarks
 * The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.
 *
 * **FHIR Specification**
 * - **Short:** Single evidence bit
 * - **Definition:** The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Evidence](http://hl7.org/fhir/StructureDefinition/Evidence)
 */
export class Evidence extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, variableDefinition: EvidenceVariableDefinitionComponent[] | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'Evidence.status',
    );

    this.variableDefinition = null;
    if (isDefinedList<EvidenceVariableDefinitionComponent>(variableDefinition)) {
      this.setVariableDefinition(variableDefinition);
    }
  }

  /**
   * Parse the provided `Evidence` JSON to instantiate the Evidence data model.
   *
   * @param sourceJson - JSON representing FHIR `Evidence`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Evidence
   * @returns Evidence data model or undefined for `Evidence`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Evidence | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Evidence';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Evidence();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Evidence');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = Evidence[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for Evidence`;
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

    fieldName = 'citeAs[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const citeAs: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setCiteAs(citeAs);

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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'assertion';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setAssertionElement(datatype);
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

    fieldName = 'variableDefinition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EvidenceVariableDefinitionComponent | undefined = EvidenceVariableDefinitionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component === undefined) {
          missingReqdProperties.push(`${sourceField}[${String(idx)}]`);
        } else {
          instance.addVariableDefinition(component);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'synthesisType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSynthesisType(datatype);
    }

    fieldName = 'studyDesign';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addStudyDesign(datatype);
        }
      });
    }

    fieldName = 'statistic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EvidenceStatisticComponent | undefined = EvidenceStatisticComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addStatistic(component);
        }
      });
    }

    fieldName = 'certainty';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EvidenceCertaintyComponent | undefined = EvidenceCertaintyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
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
   * Evidence.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this evidence, represented as a globally unique URI
   * - **Definition:** An absolute URI that is used to identify this evidence when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this summary is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the summary is stored on different servers.
   * - **Comment:** In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the meta.source element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the evidence to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * Evidence.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the summary
   * - **Definition:** A formal identifier that is used to identify this summary when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this summary outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Evidence.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of this summary
   * - **Definition:** The identifier that is used to identify this version of the summary when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the summary author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author. Considerations for making this decision are found in Technical and Business Versions.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * Evidence.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Evidence.versionAlgorithm[x]', ['string','Coding',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How to compare versions
   * - **Definition:** Indicates the mechanism used to compare versions to determine which is more current.
   * - **Comment:** If set as a string, this is a FHIRPath expression that has two additional context variables passed in - %version1 and %version2 and will return a negative number if version1 is newer, a positive number if version2 is newer, and a 0 if the version ordering can\'t successfully be determined.
   * - **FHIR Types:**
   *     'string',
   *     'Coding',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Evidence.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * Evidence.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this summary (machine friendly)
   * - **Definition:** A natural language name identifying the evidence. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * Evidence.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this summary (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the summary.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * Evidence.citeAs[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Evidence.citeAs[x]', ['Reference','markdown',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Citation for this evidence
   * - **Definition:** Citation Resource or display of suggested citation for this evidence.
   * - **FHIR Types:**
   *     'Reference',
   *     'markdown',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Evidence.citeAs[x]',[
    'Reference',
    'markdown',
  ])
  private citeAs?: IDataType | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * Evidence.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this summary. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of summarys s that are appropriate for use versus not. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
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
   * Evidence.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this resource is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private experimental?: BooleanType | undefined;

  /**
   * Evidence.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the summary was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the summary changes.
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the summary. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * Evidence.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the summary was approved by publisher
   * - **Definition:** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The \'date\' element may be more recent than the approval date because of minor changes or editorial corrections. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * Evidence.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the summary was last reviewed by the publisher
   * - **Definition:** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
   * - **Comment:** If specified, this date follows the original approval date. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **Requirements:** Gives a sense of how "current" the content is.  Resources that have not been reviewed in a long time may have a risk of being less appropriate/relevant.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastReviewDate?: DateType | undefined;

  /**
   * Evidence.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher/steward (organization or individual)
   * - **Definition:** The name of the organization or individual responsible for the release and ongoing maintenance of the evidence.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the evidence is the organization or individual primarily responsible for the maintenance and upkeep of the evidence. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the evidence. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the evidence.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * Evidence.contact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contact details for the publisher
   * - **Definition:** Contact details to assist a user in finding and communicating with the publisher.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (see [Clinical Reasoning Module](https://hl7.org/fhir/clinicalreasoning-module.html)). See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contact?: ContactDetail[] | undefined;

  /**
   * Evidence.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who authored the content
   * - **Definition:** An individiual, organization, or device primarily involved in the creation and maintenance of the content.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (see [Clinical Reasoning Module](https://hl7.org/fhir/clinicalreasoning-module.html)).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: ContactDetail[] | undefined;

  /**
   * Evidence.editor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who edited the content
   * - **Definition:** An individiual, organization, or device primarily responsible for internal coherence of the content.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (see [Clinical Reasoning Module](https://hl7.org/fhir/clinicalreasoning-module.html)).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private editor?: ContactDetail[] | undefined;

  /**
   * Evidence.reviewer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who reviewed the content
   * - **Definition:** An individiual, organization, or device primarily responsible for review of some aspect of the content.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (see [Clinical Reasoning Module](https://hl7.org/fhir/clinicalreasoning-module.html)). See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewer?: ContactDetail[] | undefined;

  /**
   * Evidence.endorser Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who endorsed the content
   * - **Definition:** An individiual, organization, or device responsible for officially endorsing the content for use in some setting.
   * - **Comment:** Extensions to ContactDetail include: contactReference, contactAddress, and contributionTime (see [Clinical Reasoning Module](https://hl7.org/fhir/clinicalreasoning-module.html)). See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private endorser?: ContactDetail[] | undefined;

  /**
   * Evidence.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate evidence instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * Evidence.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this Evidence is defined
   * - **Definition:** Explanation of why this Evidence is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the Evidence. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is. This may be used to point to source materials or specifications that drove the structure of this Evidence.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * Evidence.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the Evidence and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the Evidence.
   * - **Comment:** The short copyright declaration (e.g. (c) \'2015+ xyz organization\' should be sent in the copyrightLabel element.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the Evidence and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * Evidence.copyrightLabel Element
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
   * Evidence.relatedArtifact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link or citation to artifact associated with the summary
   * - **Definition:** Link or citation to artifact associated with the summary.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedArtifact?: RelatedArtifact[] | undefined;

  /**
   * Evidence.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the particular summary
   * - **Definition:** A free text natural language description of the evidence from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the evidence as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the evidence is presumed to be the predominant language in the place the evidence was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * Evidence.assertion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Declarative description of the Evidence
   * - **Definition:** Declarative description of the Evidence.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private assertion?: MarkdownType | undefined;

  /**
   * Evidence.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Footnotes and/or explanatory notes
   * - **Definition:** Footnotes and/or explanatory notes.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Evidence.variableDefinition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Evidence variable such as population, exposure, or outcome
   * - **Definition:** Evidence variable such as population, exposure, or outcome.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private variableDefinition: EvidenceVariableDefinitionComponent[] | null;

  /**
   * Evidence.synthesisType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The method to combine studies
   * - **Definition:** The method to combine studies.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private synthesisType?: CodeableConcept | undefined;

  /**
   * Evidence.studyDesign Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The design of the study that produced this evidence
   * - **Definition:** The design of the study that produced this evidence. The design is described with any number of study design characteristics.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private studyDesign?: CodeableConcept[] | undefined;

  /**
   * Evidence.statistic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Values and parameters for a single statistic
   * - **Definition:** Values and parameters for a single statistic.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statistic?: EvidenceStatisticComponent[] | undefined;

  /**
   * Evidence.certainty Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Certainty or quality of the evidence
   * - **Definition:** Assessment of certainty, confidence in the estimates, or quality of the evidence.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private certainty?: EvidenceCertaintyComponent[] | undefined;

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
      const optErrMsg = `Invalid Evidence.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid Evidence.url (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Evidence.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Evidence.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Evidence.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('Evidence.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Evidence.versionAlgorithm[x]')
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
        `DataType mismatch for Evidence.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for Evidence.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
      const optErrMsg = `Invalid Evidence.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Evidence.name (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Evidence.title (${String(value)})`;
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
   * @returns the `citeAs` property value as a DataType object if defined; else undefined
   */
  public getCiteAs(): IDataType | undefined {
    return this.citeAs;
  }

  /**
   * Assigns the provided DataType object value to the `citeAs` property.
   *
   * @decorator `@ChoiceDataTypes('Evidence.citeAs[x]')`
   *
   * @param value - the `citeAs` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Evidence.citeAs[x]')
  public setCiteAs(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.citeAs = value;
    } else {
      this.citeAs = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `citeAs` property exists and has a value; `false` otherwise
   */
  public hasCiteAs(): boolean {
    return isDefined<IDataType>(this.citeAs) && !this.citeAs.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `citeAs` property value as a Reference object if defined; else undefined
   */
  public getCiteAsReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.citeAs)) {
      return undefined;
    }
    if (!(this.citeAs instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Evidence.citeAs[x]: Expected Reference but encountered ${this.citeAs.fhirType()}`,
      );
    }
    return this.citeAs;
  }

  /**
   * @returns `true` if the `citeAs` property exists as a Reference and has a value; `false` otherwise
   */
  public hasCiteAsReference(): boolean {
    return this.hasCiteAs() && this.citeAs instanceof Reference;
  }

  /**
   * @returns the `citeAs` property value as a MarkdownType object if defined; else undefined
   */
  public getCiteAsMarkdownType(): MarkdownType | undefined {
    if (!isDefined<IDataType | undefined>(this.citeAs)) {
      return undefined;
    }
    if (!(this.citeAs instanceof MarkdownType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Evidence.citeAs[x]: Expected MarkdownType but encountered ${this.citeAs.fhirType()}`,
      );
    }
    return this.citeAs;
  }

  /**
   * @returns `true` if the `citeAs` property exists as a MarkdownType and has a value; `false` otherwise
   */
  public hasCiteAsMarkdownType(): boolean {
    return this.hasCiteAs() && this.citeAs instanceof MarkdownType;
  }

  // End of choice datatype-specific "get"/"has" methods

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
    assertIsDefined<EnumCodeType>(enumType, `Evidence.status is required`);
    const errMsgPrefix = `Invalid Evidence.status`;
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
    assertIsDefined<CodeType>(element, `Evidence.status is required`);
    const optErrMsg = `Invalid Evidence.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `Evidence.status is required`);
    const optErrMsg = `Invalid Evidence.status (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid Evidence.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid Evidence.date (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.approvalDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid Evidence.approvalDate (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.lastReviewDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid Evidence.lastReviewDate (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Evidence.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Evidence.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Evidence.author; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Evidence.author; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Evidence.editor; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Evidence.editor; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Evidence.reviewer; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Evidence.reviewer; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Evidence.endorser; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Evidence.endorser; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid Evidence.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid Evidence.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid Evidence.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Evidence.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Evidence.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.copyrightLabel; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Evidence.copyrightLabel (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.relatedArtifact; Provided value array has an element that is not an instance of RelatedArtifact.`;
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
      const optErrMsg = `Invalid Evidence.relatedArtifact; Provided element is not an instance of RelatedArtifact.`;
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
      const optErrMsg = `Invalid Evidence.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Evidence.description (${String(value)})`;
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
   * @returns the `assertion` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getAssertionElement(): MarkdownType {
    return this.assertion ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `assertion` property.
   *
   * @param element - the `assertion` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAssertionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid Evidence.assertion; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.assertion = element;
    } else {
      this.assertion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assertion` property exists and has a value; `false` otherwise
   */
  public hasAssertionElement(): boolean {
    return isDefined<MarkdownType>(this.assertion) && !this.assertion.isEmpty();
  }

  /**
   * @returns the `assertion` property value as a fhirMarkdown if defined; else undefined
   */
  public getAssertion(): fhirMarkdown | undefined {
    return this.assertion?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `assertion` property.
   *
   * @param value - the `assertion` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAssertion(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid Evidence.assertion (${String(value)})`;
      this.assertion = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.assertion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `assertion` property exists and has a value; `false` otherwise
   */
  public hasAssertion(): boolean {
    return this.hasAssertionElement();
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
      const optErrMsg = `Invalid Evidence.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Evidence.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `variableDefinition` property value as a EvidenceVariableDefinitionComponent array
   */
  public getVariableDefinition(): EvidenceVariableDefinitionComponent[] {
    return this.variableDefinition ?? ([] as EvidenceVariableDefinitionComponent[]);
  }

  /**
   * Assigns the provided EvidenceVariableDefinitionComponent array value to the `variableDefinition` property.
   *
   * @param value - the `variableDefinition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVariableDefinition(value: EvidenceVariableDefinitionComponent[]): this {
    assertIsDefinedList<EvidenceVariableDefinitionComponent>(value, `Evidence.variableDefinition is required`);
    const optErrMsg = `Invalid Evidence.variableDefinition; Provided value array has an element that is not an instance of EvidenceVariableDefinitionComponent.`;
    assertFhirTypeList<EvidenceVariableDefinitionComponent>(value, EvidenceVariableDefinitionComponent, optErrMsg);
    this.variableDefinition = value;
    return this;
  }

  /**
   * Add the provided EvidenceVariableDefinitionComponent value to the `variableDefinition` array property.
   *
   * @param value - the `variableDefinition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVariableDefinition(value: EvidenceVariableDefinitionComponent | undefined): this {
    if (isDefined<EvidenceVariableDefinitionComponent>(value)) {
      const optErrMsg = `Invalid Evidence.variableDefinition; Provided element is not an instance of EvidenceVariableDefinitionComponent.`;
      assertFhirType<EvidenceVariableDefinitionComponent>(value, EvidenceVariableDefinitionComponent, optErrMsg);
      this.initVariableDefinition();
      this.variableDefinition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `variableDefinition` property exists and has a value; `false` otherwise
   */
  public hasVariableDefinition(): boolean {
    return isDefinedList<EvidenceVariableDefinitionComponent>(this.variableDefinition) && this.variableDefinition.some((item: EvidenceVariableDefinitionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `variableDefinition` property
   */
  private initVariableDefinition(): void {
    if(!this.hasVariableDefinition()) {
      this.variableDefinition = [] as EvidenceVariableDefinitionComponent[];
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
      const optErrMsg = `Invalid Evidence.synthesisType; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `studyDesign` property value as a CodeableConcept array
   */
  public getStudyDesign(): CodeableConcept[] {
    return this.studyDesign ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `studyDesign` property.
   *
   * @param value - the `studyDesign` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStudyDesign(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Evidence.studyDesign; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.studyDesign = value;
    } else {
      this.studyDesign = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `studyDesign` array property.
   *
   * @param value - the `studyDesign` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStudyDesign(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Evidence.studyDesign; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initStudyDesign();
      this.studyDesign?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `studyDesign` property exists and has a value; `false` otherwise
   */
  public hasStudyDesign(): boolean {
    return isDefinedList<CodeableConcept>(this.studyDesign) && this.studyDesign.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `studyDesign` property
   */
  private initStudyDesign(): void {
    if(!this.hasStudyDesign()) {
      this.studyDesign = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `statistic` property value as a EvidenceStatisticComponent array
   */
  public getStatistic(): EvidenceStatisticComponent[] {
    return this.statistic ?? ([] as EvidenceStatisticComponent[]);
  }

  /**
   * Assigns the provided EvidenceStatisticComponent array value to the `statistic` property.
   *
   * @param value - the `statistic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatistic(value: EvidenceStatisticComponent[] | undefined): this {
    if (isDefinedList<EvidenceStatisticComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic; Provided value array has an element that is not an instance of EvidenceStatisticComponent.`;
      assertFhirTypeList<EvidenceStatisticComponent>(value, EvidenceStatisticComponent, optErrMsg);
      this.statistic = value;
    } else {
      this.statistic = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceStatisticComponent value to the `statistic` array property.
   *
   * @param value - the `statistic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStatistic(value: EvidenceStatisticComponent | undefined): this {
    if (isDefined<EvidenceStatisticComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic; Provided element is not an instance of EvidenceStatisticComponent.`;
      assertFhirType<EvidenceStatisticComponent>(value, EvidenceStatisticComponent, optErrMsg);
      this.initStatistic();
      this.statistic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `statistic` property exists and has a value; `false` otherwise
   */
  public hasStatistic(): boolean {
    return isDefinedList<EvidenceStatisticComponent>(this.statistic) && this.statistic.some((item: EvidenceStatisticComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `statistic` property
   */
  private initStatistic(): void {
    if(!this.hasStatistic()) {
      this.statistic = [] as EvidenceStatisticComponent[];
    }
  }

  /**
   * @returns the `certainty` property value as a EvidenceCertaintyComponent array
   */
  public getCertainty(): EvidenceCertaintyComponent[] {
    return this.certainty ?? ([] as EvidenceCertaintyComponent[]);
  }

  /**
   * Assigns the provided EvidenceCertaintyComponent array value to the `certainty` property.
   *
   * @param value - the `certainty` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCertainty(value: EvidenceCertaintyComponent[] | undefined): this {
    if (isDefinedList<EvidenceCertaintyComponent>(value)) {
      const optErrMsg = `Invalid Evidence.certainty; Provided value array has an element that is not an instance of EvidenceCertaintyComponent.`;
      assertFhirTypeList<EvidenceCertaintyComponent>(value, EvidenceCertaintyComponent, optErrMsg);
      this.certainty = value;
    } else {
      this.certainty = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceCertaintyComponent value to the `certainty` array property.
   *
   * @param value - the `certainty` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCertainty(value: EvidenceCertaintyComponent | undefined): this {
    if (isDefined<EvidenceCertaintyComponent>(value)) {
      const optErrMsg = `Invalid Evidence.certainty; Provided element is not an instance of EvidenceCertaintyComponent.`;
      assertFhirType<EvidenceCertaintyComponent>(value, EvidenceCertaintyComponent, optErrMsg);
      this.initCertainty();
      this.certainty?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `certainty` property exists and has a value; `false` otherwise
   */
  public hasCertainty(): boolean {
    return isDefinedList<EvidenceCertaintyComponent>(this.certainty) && this.certainty.some((item: EvidenceCertaintyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `certainty` property
   */
  private initCertainty(): void {
    if(!this.hasCertainty()) {
      this.certainty = [] as EvidenceCertaintyComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Evidence';
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
      this.citeAs,
      this.status,
      this.experimental,
      this.date,
      this.approvalDate,
      this.lastReviewDate,
      this.publisher,
      this.contact,
      this.author,
      this.editor,
      this.reviewer,
      this.endorser,
      this.useContext,
      this.purpose,
      this.copyright,
      this.copyrightLabel,
      this.relatedArtifact,
      this.description,
      this.assertion,
      this.note,
      this.variableDefinition,
      this.synthesisType,
      this.studyDesign,
      this.statistic,
      this.certainty,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Evidence {
    const dest = new Evidence();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Evidence): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.versionAlgorithm = this.versionAlgorithm?.copy() as IDataType;
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    dest.citeAs = this.citeAs?.copy() as IDataType;
    dest.status = this.status ? this.status.copy() : null;
    dest.experimental = this.experimental?.copy();
    dest.date = this.date?.copy();
    dest.approvalDate = this.approvalDate?.copy();
    dest.lastReviewDate = this.lastReviewDate?.copy();
    dest.publisher = this.publisher?.copy();
    const contactList = copyListValues<ContactDetail>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    const authorList = copyListValues<ContactDetail>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    const editorList = copyListValues<ContactDetail>(this.editor);
    dest.editor = editorList.length === 0 ? undefined : editorList;
    const reviewerList = copyListValues<ContactDetail>(this.reviewer);
    dest.reviewer = reviewerList.length === 0 ? undefined : reviewerList;
    const endorserList = copyListValues<ContactDetail>(this.endorser);
    dest.endorser = endorserList.length === 0 ? undefined : endorserList;
    const useContextList = copyListValues<UsageContext>(this.useContext);
    dest.useContext = useContextList.length === 0 ? undefined : useContextList;
    dest.purpose = this.purpose?.copy();
    dest.copyright = this.copyright?.copy();
    dest.copyrightLabel = this.copyrightLabel?.copy();
    const relatedArtifactList = copyListValues<RelatedArtifact>(this.relatedArtifact);
    dest.relatedArtifact = relatedArtifactList.length === 0 ? undefined : relatedArtifactList;
    dest.description = this.description?.copy();
    dest.assertion = this.assertion?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const variableDefinitionList = copyListValues<EvidenceVariableDefinitionComponent>(this.variableDefinition);
    dest.variableDefinition = variableDefinitionList.length === 0 ? null : variableDefinitionList;
    dest.synthesisType = this.synthesisType?.copy();
    const studyDesignList = copyListValues<CodeableConcept>(this.studyDesign);
    dest.studyDesign = studyDesignList.length === 0 ? undefined : studyDesignList;
    const statisticList = copyListValues<EvidenceStatisticComponent>(this.statistic);
    dest.statistic = statisticList.length === 0 ? undefined : statisticList;
    const certaintyList = copyListValues<EvidenceCertaintyComponent>(this.certainty);
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

    if (this.hasCiteAs()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getCiteAs()!, 'citeAs', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`Evidence.status`);
    }

    if (this.hasExperimentalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExperimentalElement(), 'experimental', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasApprovalDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getApprovalDateElement(), 'approvalDate', jsonObj);
    }

    if (this.hasLastReviewDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getLastReviewDateElement(), 'lastReviewDate', jsonObj);
    }

    if (this.hasPublisherElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPublisherElement(), 'publisher', jsonObj);
    }

    if (this.hasContact()) {
      setFhirComplexListJson(this.getContact(), 'contact', jsonObj);
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

    if (this.hasUseContext()) {
      setFhirComplexListJson(this.getUseContext(), 'useContext', jsonObj);
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

    if (this.hasRelatedArtifact()) {
      setFhirComplexListJson(this.getRelatedArtifact(), 'relatedArtifact', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasAssertionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getAssertionElement(), 'assertion', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasVariableDefinition()) {
      setFhirBackboneElementListJson(this.getVariableDefinition(), 'variableDefinition', jsonObj);
    } else {
      missingReqdProperties.push(`Evidence.variableDefinition`);
    }

    if (this.hasSynthesisType()) {
      setFhirComplexJson(this.getSynthesisType(), 'synthesisType', jsonObj);
    }

    if (this.hasStudyDesign()) {
      setFhirComplexListJson(this.getStudyDesign(), 'studyDesign', jsonObj);
    }

    if (this.hasStatistic()) {
      setFhirBackboneElementListJson(this.getStatistic(), 'statistic', jsonObj);
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
 * EvidenceVariableDefinitionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Evidence variable such as population, exposure, or outcome
 * - **Definition:** Evidence variable such as population, exposure, or outcome.
 *
 * @category Data Models: Resource
 * @see [FHIR Evidence](http://hl7.org/fhir/StructureDefinition/Evidence)
 */
export class EvidenceVariableDefinitionComponent extends BackboneElement implements IBackboneElement {
  constructor(variableRole: CodeableConcept | null = null) {
    super();

    this.variableRole = null;
    if (isDefined<CodeableConcept>(variableRole)) {
      this.setVariableRole(variableRole);
    }
  }

  /**
   * Parse the provided `EvidenceVariableDefinitionComponent` JSON to instantiate the EvidenceVariableDefinitionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceVariableDefinitionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceVariableDefinitionComponent
   * @returns EvidenceVariableDefinitionComponent data model or undefined for `EvidenceVariableDefinitionComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceVariableDefinitionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceVariableDefinitionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceVariableDefinitionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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

    fieldName = 'variableRole';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setVariableRole(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'observed';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setObserved(datatype);
    }

    fieldName = 'intended';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIntended(datatype);
    }

    fieldName = 'directnessMatch';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDirectnessMatch(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Evidence.variableDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A text description or summary of the variable
   * - **Definition:** A text description or summary of the variable.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * Evidence.variableDefinition.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Footnotes and/or explanatory notes
   * - **Definition:** Footnotes and/or explanatory notes.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Evidence.variableDefinition.variableRole Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** population | subpopulation | exposure | referenceExposure | measuredVariable | confounder
   * - **Definition:** population | subpopulation | exposure | referenceExposure | measuredVariable | confounder.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private variableRole: CodeableConcept | null;

  /**
   * Evidence.variableDefinition.observed Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definition of the actual variable related to the statistic(s)
   * - **Definition:** Definition of the actual variable related to the statistic(s).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private observed?: Reference | undefined;

  /**
   * Evidence.variableDefinition.intended Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definition of the intended variable related to the Evidence
   * - **Definition:** Definition of the intended variable related to the Evidence.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private intended?: Reference | undefined;

  /**
   * Evidence.variableDefinition.directnessMatch Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** low | moderate | high | exact
   * - **Definition:** Indication of quality of match between intended variable to actual variable.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private directnessMatch?: CodeableConcept | undefined;

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
      const optErrMsg = `Invalid Evidence.variableDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Evidence.variableDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.variableDefinition.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Evidence.variableDefinition.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `variableRole` property value as a CodeableConcept object if defined; else null
   */
  public getVariableRole(): CodeableConcept | null {
    return this.variableRole;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `variableRole` property.
   *
   * @param value - the `variableRole` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVariableRole(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Evidence.variableDefinition.variableRole is required`);
    const optErrMsg = `Invalid Evidence.variableDefinition.variableRole; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.variableRole = value;
    return this;
  }

  /**
   * @returns `true` if the `variableRole` property exists and has a value; `false` otherwise
   */
  public hasVariableRole(): boolean {
    return isDefined<CodeableConcept>(this.variableRole) && !this.variableRole.isEmpty();
  }

  /**
   * @returns the `observed` property value as a Reference object; else an empty Reference object
   */
  public getObserved(): Reference {
    return this.observed ?? new Reference();
  }

  /**
   * Assigns the provided Observed object value to the `observed` property.
   *
   * @decorator `@ReferenceTargets('Evidence.variableDefinition.observed', ['Group','EvidenceVariable',])`
   *
   * @param value - the `observed` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Evidence.variableDefinition.observed', [
    'Group',
  
    'EvidenceVariable',
  ])
  public setObserved(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.observed = value;
    } else {
      this.observed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `observed` property exists and has a value; `false` otherwise
   */
  public hasObserved(): boolean {
    return isDefined<Reference>(this.observed) && !this.observed.isEmpty();
  }

  /**
   * @returns the `intended` property value as a Reference object; else an empty Reference object
   */
  public getIntended(): Reference {
    return this.intended ?? new Reference();
  }

  /**
   * Assigns the provided Intended object value to the `intended` property.
   *
   * @decorator `@ReferenceTargets('Evidence.variableDefinition.intended', ['Group','EvidenceVariable',])`
   *
   * @param value - the `intended` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Evidence.variableDefinition.intended', [
    'Group',
  
    'EvidenceVariable',
  ])
  public setIntended(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.intended = value;
    } else {
      this.intended = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intended` property exists and has a value; `false` otherwise
   */
  public hasIntended(): boolean {
    return isDefined<Reference>(this.intended) && !this.intended.isEmpty();
  }

  /**
   * @returns the `directnessMatch` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getDirectnessMatch(): CodeableConcept {
    return this.directnessMatch ?? new CodeableConcept();
  }

  /**
   * Assigns the provided DirectnessMatch object value to the `directnessMatch` property.
   *
   * @param value - the `directnessMatch` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDirectnessMatch(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Evidence.variableDefinition.directnessMatch; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.directnessMatch = value;
    } else {
      this.directnessMatch = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `directnessMatch` property exists and has a value; `false` otherwise
   */
  public hasDirectnessMatch(): boolean {
    return isDefined<CodeableConcept>(this.directnessMatch) && !this.directnessMatch.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Evidence.variableDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.note,
      this.variableRole,
      this.observed,
      this.intended,
      this.directnessMatch,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceVariableDefinitionComponent {
    const dest = new EvidenceVariableDefinitionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceVariableDefinitionComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.variableRole = this.variableRole ? this.variableRole.copy() : null;
    dest.observed = this.observed?.copy();
    dest.intended = this.intended?.copy();
    dest.directnessMatch = this.directnessMatch?.copy();
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

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasVariableRole()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getVariableRole()!, 'variableRole', jsonObj);
    } else {
      missingReqdProperties.push(`Evidence.variableDefinition.variableRole`);
    }

    if (this.hasObserved()) {
      setFhirComplexJson(this.getObserved(), 'observed', jsonObj);
    }

    if (this.hasIntended()) {
      setFhirComplexJson(this.getIntended(), 'intended', jsonObj);
    }

    if (this.hasDirectnessMatch()) {
      setFhirComplexJson(this.getDirectnessMatch(), 'directnessMatch', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * EvidenceStatisticComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Values and parameters for a single statistic
 * - **Definition:** Values and parameters for a single statistic.
 *
 * @category Data Models: Resource
 * @see [FHIR Evidence](http://hl7.org/fhir/StructureDefinition/Evidence)
 */
export class EvidenceStatisticComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EvidenceStatisticComponent` JSON to instantiate the EvidenceStatisticComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceStatisticComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceStatisticComponent
   * @returns EvidenceStatisticComponent data model or undefined for `EvidenceStatisticComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceStatisticComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceStatisticComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceStatisticComponent();

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

    fieldName = 'statisticType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStatisticType(datatype);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'numberOfEvents';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setNumberOfEventsElement(datatype);
    }

    fieldName = 'numberAffected';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setNumberAffectedElement(datatype);
    }

    fieldName = 'sampleSize';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: EvidenceStatisticSampleSizeComponent | undefined = EvidenceStatisticSampleSizeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSampleSize(component);
    }

    fieldName = 'attributeEstimate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EvidenceStatisticAttributeEstimateComponent | undefined = EvidenceStatisticAttributeEstimateComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAttributeEstimate(component);
        }
      });
    }

    fieldName = 'modelCharacteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EvidenceStatisticModelCharacteristicComponent | undefined = EvidenceStatisticModelCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addModelCharacteristic(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Evidence.statistic.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of content
   * - **Definition:** A description of the content value of the statistic.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * Evidence.statistic.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Footnotes and/or explanatory notes
   * - **Definition:** Footnotes and/or explanatory notes.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Evidence.statistic.statisticType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of statistic, e.g., relative risk
   * - **Definition:** Type of statistic, e.g., relative risk.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private statisticType?: CodeableConcept | undefined;

  /**
   * Evidence.statistic.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated category for categorical variable
   * - **Definition:** When the measured variable is handled categorically, the category element is used to define which category the statistic is reporting.
   * - **Comment:** Simple strings can be used for descriptive purposes. Exact matching to EvidenceVariable.category.name for the Evidence.variableDefinition[variableRole=measuredVariable].observed=Reference(EvidenceVariable) could facilitate validation within datasets.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept | undefined;

  /**
   * Evidence.statistic.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Statistic value
   * - **Definition:** Statistic value.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * Evidence.statistic.numberOfEvents Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The number of events associated with the statistic
   * - **Definition:** The number of events associated with the statistic, where the unit of analysis is different from numberAffected, sampleSize.knownDataCount and sampleSize.numberOfParticipants.
   * - **Comment:** When the number of events is the statistic, use Evidence.statistic.quantity and set Evidence.statistic.type.coding.code=C25463 and Evidence.statistic.type.coding.display=Count. When the statistic is an Event Rate (where individual participants may have 2 or more events), use Evidence.statistic.numberOfEvents to record the total number of events rather than the number of participants with events.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private numberOfEvents?: UnsignedIntType | undefined;

  /**
   * Evidence.statistic.numberAffected Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The number of participants affected
   * - **Definition:** The number of participants affected where the unit of analysis is the same as sampleSize.knownDataCount and sampleSize.numberOfParticipants.
   * - **Comment:** When the number affected is the statistic, use Evidence.statistic.quantity and set Evidence.statistic.type.coding.code=C25463 and Evidence.statistic.type.coding.display=Count. When the statistic is a Proportion, use Evidence.statistic.numberAffected and enter an integer as the value. When the statistic is an Event Rate (where individual participants may have 2 or more events), use Evidence.statistic.numberAffected to record the number of participants with events rather than the total number of events.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private numberAffected?: UnsignedIntType | undefined;

  /**
   * Evidence.statistic.sampleSize Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of samples in the statistic
   * - **Definition:** Number of samples in the statistic.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sampleSize?: EvidenceStatisticSampleSizeComponent | undefined;

  /**
   * Evidence.statistic.attributeEstimate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An attribute of the Statistic
   * - **Definition:** A statistical attribute of the statistic such as a measure of heterogeneity.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private attributeEstimate?: EvidenceStatisticAttributeEstimateComponent[] | undefined;

  /**
   * Evidence.statistic.modelCharacteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An aspect of the statistical model
   * - **Definition:** A component of the method to generate the statistic.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private modelCharacteristic?: EvidenceStatisticModelCharacteristicComponent[] | undefined;

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
      const optErrMsg = `Invalid Evidence.statistic.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Evidence.statistic.description (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.statistic.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Evidence.statistic.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `statisticType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStatisticType(): CodeableConcept {
    return this.statisticType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided StatisticType object value to the `statisticType` property.
   *
   * @param value - the `statisticType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStatisticType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.statisticType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.statisticType = value;
    } else {
      this.statisticType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `statisticType` property exists and has a value; `false` otherwise
   */
  public hasStatisticType(): boolean {
    return isDefined<CodeableConcept>(this.statisticType) && !this.statisticType.isEmpty();
  }

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
      const optErrMsg = `Invalid Evidence.statistic.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `quantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getQuantity(): Quantity {
    return this.quantity ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `numberOfEvents` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getNumberOfEventsElement(): UnsignedIntType {
    return this.numberOfEvents ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberOfEvents` property.
   *
   * @param element - the `numberOfEvents` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfEventsElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Evidence.statistic.numberOfEvents; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.numberOfEvents = element;
    } else {
      this.numberOfEvents = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfEvents` property exists and has a value; `false` otherwise
   */
  public hasNumberOfEventsElement(): boolean {
    return isDefined<UnsignedIntType>(this.numberOfEvents) && !this.numberOfEvents.isEmpty();
  }

  /**
   * @returns the `numberOfEvents` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getNumberOfEvents(): fhirUnsignedInt | undefined {
    return this.numberOfEvents?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberOfEvents` property.
   *
   * @param value - the `numberOfEvents` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfEvents(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.numberOfEvents (${String(value)})`;
      this.numberOfEvents = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.numberOfEvents = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberOfEvents` property exists and has a value; `false` otherwise
   */
  public hasNumberOfEvents(): boolean {
    return this.hasNumberOfEventsElement();
  }

  /**
   * @returns the `numberAffected` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getNumberAffectedElement(): UnsignedIntType {
    return this.numberAffected ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberAffected` property.
   *
   * @param element - the `numberAffected` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberAffectedElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Evidence.statistic.numberAffected; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.numberAffected = element;
    } else {
      this.numberAffected = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberAffected` property exists and has a value; `false` otherwise
   */
  public hasNumberAffectedElement(): boolean {
    return isDefined<UnsignedIntType>(this.numberAffected) && !this.numberAffected.isEmpty();
  }

  /**
   * @returns the `numberAffected` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getNumberAffected(): fhirUnsignedInt | undefined {
    return this.numberAffected?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberAffected` property.
   *
   * @param value - the `numberAffected` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberAffected(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.numberAffected (${String(value)})`;
      this.numberAffected = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.numberAffected = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `numberAffected` property exists and has a value; `false` otherwise
   */
  public hasNumberAffected(): boolean {
    return this.hasNumberAffectedElement();
  }

  /**
   * @returns the `sampleSize` property value as a EvidenceStatisticSampleSizeComponent object if defined; else an empty EvidenceStatisticSampleSizeComponent object
   */
  public getSampleSize(): EvidenceStatisticSampleSizeComponent {
    return this.sampleSize ?? new EvidenceStatisticSampleSizeComponent();
  }

  /**
   * Assigns the provided SampleSize object value to the `sampleSize` property.
   *
   * @param value - the `sampleSize` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSampleSize(value: EvidenceStatisticSampleSizeComponent | undefined): this {
    if (isDefined<EvidenceStatisticSampleSizeComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.sampleSize; Provided element is not an instance of EvidenceStatisticSampleSizeComponent.`;
      assertFhirType<EvidenceStatisticSampleSizeComponent>(value, EvidenceStatisticSampleSizeComponent, optErrMsg);
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
    return isDefined<EvidenceStatisticSampleSizeComponent>(this.sampleSize) && !this.sampleSize.isEmpty();
  }

  /**
   * @returns the `attributeEstimate` property value as a EvidenceStatisticAttributeEstimateComponent array
   */
  public getAttributeEstimate(): EvidenceStatisticAttributeEstimateComponent[] {
    return this.attributeEstimate ?? ([] as EvidenceStatisticAttributeEstimateComponent[]);
  }

  /**
   * Assigns the provided EvidenceStatisticAttributeEstimateComponent array value to the `attributeEstimate` property.
   *
   * @param value - the `attributeEstimate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAttributeEstimate(value: EvidenceStatisticAttributeEstimateComponent[] | undefined): this {
    if (isDefinedList<EvidenceStatisticAttributeEstimateComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate; Provided value array has an element that is not an instance of EvidenceStatisticAttributeEstimateComponent.`;
      assertFhirTypeList<EvidenceStatisticAttributeEstimateComponent>(value, EvidenceStatisticAttributeEstimateComponent, optErrMsg);
      this.attributeEstimate = value;
    } else {
      this.attributeEstimate = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceStatisticAttributeEstimateComponent value to the `attributeEstimate` array property.
   *
   * @param value - the `attributeEstimate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAttributeEstimate(value: EvidenceStatisticAttributeEstimateComponent | undefined): this {
    if (isDefined<EvidenceStatisticAttributeEstimateComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate; Provided element is not an instance of EvidenceStatisticAttributeEstimateComponent.`;
      assertFhirType<EvidenceStatisticAttributeEstimateComponent>(value, EvidenceStatisticAttributeEstimateComponent, optErrMsg);
      this.initAttributeEstimate();
      this.attributeEstimate?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `attributeEstimate` property exists and has a value; `false` otherwise
   */
  public hasAttributeEstimate(): boolean {
    return isDefinedList<EvidenceStatisticAttributeEstimateComponent>(this.attributeEstimate) && this.attributeEstimate.some((item: EvidenceStatisticAttributeEstimateComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `attributeEstimate` property
   */
  private initAttributeEstimate(): void {
    if(!this.hasAttributeEstimate()) {
      this.attributeEstimate = [] as EvidenceStatisticAttributeEstimateComponent[];
    }
  }

  /**
   * @returns the `modelCharacteristic` property value as a EvidenceStatisticModelCharacteristicComponent array
   */
  public getModelCharacteristic(): EvidenceStatisticModelCharacteristicComponent[] {
    return this.modelCharacteristic ?? ([] as EvidenceStatisticModelCharacteristicComponent[]);
  }

  /**
   * Assigns the provided EvidenceStatisticModelCharacteristicComponent array value to the `modelCharacteristic` property.
   *
   * @param value - the `modelCharacteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setModelCharacteristic(value: EvidenceStatisticModelCharacteristicComponent[] | undefined): this {
    if (isDefinedList<EvidenceStatisticModelCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic; Provided value array has an element that is not an instance of EvidenceStatisticModelCharacteristicComponent.`;
      assertFhirTypeList<EvidenceStatisticModelCharacteristicComponent>(value, EvidenceStatisticModelCharacteristicComponent, optErrMsg);
      this.modelCharacteristic = value;
    } else {
      this.modelCharacteristic = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceStatisticModelCharacteristicComponent value to the `modelCharacteristic` array property.
   *
   * @param value - the `modelCharacteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addModelCharacteristic(value: EvidenceStatisticModelCharacteristicComponent | undefined): this {
    if (isDefined<EvidenceStatisticModelCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic; Provided element is not an instance of EvidenceStatisticModelCharacteristicComponent.`;
      assertFhirType<EvidenceStatisticModelCharacteristicComponent>(value, EvidenceStatisticModelCharacteristicComponent, optErrMsg);
      this.initModelCharacteristic();
      this.modelCharacteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `modelCharacteristic` property exists and has a value; `false` otherwise
   */
  public hasModelCharacteristic(): boolean {
    return isDefinedList<EvidenceStatisticModelCharacteristicComponent>(this.modelCharacteristic) && this.modelCharacteristic.some((item: EvidenceStatisticModelCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `modelCharacteristic` property
   */
  private initModelCharacteristic(): void {
    if(!this.hasModelCharacteristic()) {
      this.modelCharacteristic = [] as EvidenceStatisticModelCharacteristicComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Evidence.statistic';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.note,
      this.statisticType,
      this.category,
      this.quantity,
      this.numberOfEvents,
      this.numberAffected,
      this.sampleSize,
      this.attributeEstimate,
      this.modelCharacteristic,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceStatisticComponent {
    const dest = new EvidenceStatisticComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceStatisticComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.statisticType = this.statisticType?.copy();
    dest.category = this.category?.copy();
    dest.quantity = this.quantity?.copy();
    dest.numberOfEvents = this.numberOfEvents?.copy();
    dest.numberAffected = this.numberAffected?.copy();
    dest.sampleSize = this.sampleSize?.copy();
    const attributeEstimateList = copyListValues<EvidenceStatisticAttributeEstimateComponent>(this.attributeEstimate);
    dest.attributeEstimate = attributeEstimateList.length === 0 ? undefined : attributeEstimateList;
    const modelCharacteristicList = copyListValues<EvidenceStatisticModelCharacteristicComponent>(this.modelCharacteristic);
    dest.modelCharacteristic = modelCharacteristicList.length === 0 ? undefined : modelCharacteristicList;
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

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasStatisticType()) {
      setFhirComplexJson(this.getStatisticType(), 'statisticType', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasNumberOfEventsElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getNumberOfEventsElement(), 'numberOfEvents', jsonObj);
    }

    if (this.hasNumberAffectedElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getNumberAffectedElement(), 'numberAffected', jsonObj);
    }

    if (this.hasSampleSize()) {
      setFhirBackboneElementJson(this.getSampleSize(), 'sampleSize', jsonObj);
    }

    if (this.hasAttributeEstimate()) {
      setFhirBackboneElementListJson(this.getAttributeEstimate(), 'attributeEstimate', jsonObj);
    }

    if (this.hasModelCharacteristic()) {
      setFhirBackboneElementListJson(this.getModelCharacteristic(), 'modelCharacteristic', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EvidenceStatisticSampleSizeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Number of samples in the statistic
 * - **Definition:** Number of samples in the statistic.
 *
 * @category Data Models: Resource
 * @see [FHIR Evidence](http://hl7.org/fhir/StructureDefinition/Evidence)
 */
export class EvidenceStatisticSampleSizeComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EvidenceStatisticSampleSizeComponent` JSON to instantiate the EvidenceStatisticSampleSizeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceStatisticSampleSizeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceStatisticSampleSizeComponent
   * @returns EvidenceStatisticSampleSizeComponent data model or undefined for `EvidenceStatisticSampleSizeComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceStatisticSampleSizeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceStatisticSampleSizeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceStatisticSampleSizeComponent();

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

    fieldName = 'numberOfStudies';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setNumberOfStudiesElement(datatype);
    }

    fieldName = 'numberOfParticipants';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setNumberOfParticipantsElement(datatype);
    }

    fieldName = 'knownDataCount';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setKnownDataCountElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Evidence.statistic.sampleSize.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual description of sample size for statistic
   * - **Definition:** Human-readable summary of population sample size.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * Evidence.statistic.sampleSize.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Footnote or explanatory note about the sample size
   * - **Definition:** Footnote or explanatory note about the sample size.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Evidence.statistic.sampleSize.numberOfStudies Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of contributing studies
   * - **Definition:** Number of participants in the population.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private numberOfStudies?: UnsignedIntType | undefined;

  /**
   * Evidence.statistic.sampleSize.numberOfParticipants Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Cumulative number of participants
   * - **Definition:** A human-readable string to clarify or explain concepts about the sample size.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private numberOfParticipants?: UnsignedIntType | undefined;

  /**
   * Evidence.statistic.sampleSize.knownDataCount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Number of participants with known results for measured variables
   * - **Definition:** Number of participants with known results for measured variables.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private knownDataCount?: UnsignedIntType | undefined;

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
      const optErrMsg = `Invalid Evidence.statistic.sampleSize.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Evidence.statistic.sampleSize.description (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.statistic.sampleSize.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Evidence.statistic.sampleSize.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `numberOfStudies` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getNumberOfStudiesElement(): UnsignedIntType {
    return this.numberOfStudies ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberOfStudies` property.
   *
   * @param element - the `numberOfStudies` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfStudiesElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Evidence.statistic.sampleSize.numberOfStudies; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
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
    return isDefined<UnsignedIntType>(this.numberOfStudies) && !this.numberOfStudies.isEmpty();
  }

  /**
   * @returns the `numberOfStudies` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getNumberOfStudies(): fhirUnsignedInt | undefined {
    return this.numberOfStudies?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberOfStudies` property.
   *
   * @param value - the `numberOfStudies` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfStudies(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.sampleSize.numberOfStudies (${String(value)})`;
      this.numberOfStudies = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
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
   * @returns the `numberOfParticipants` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getNumberOfParticipantsElement(): UnsignedIntType {
    return this.numberOfParticipants ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `numberOfParticipants` property.
   *
   * @param element - the `numberOfParticipants` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfParticipantsElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Evidence.statistic.sampleSize.numberOfParticipants; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
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
    return isDefined<UnsignedIntType>(this.numberOfParticipants) && !this.numberOfParticipants.isEmpty();
  }

  /**
   * @returns the `numberOfParticipants` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getNumberOfParticipants(): fhirUnsignedInt | undefined {
    return this.numberOfParticipants?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `numberOfParticipants` property.
   *
   * @param value - the `numberOfParticipants` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNumberOfParticipants(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.sampleSize.numberOfParticipants (${String(value)})`;
      this.numberOfParticipants = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
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

  /**
   * @returns the `knownDataCount` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getKnownDataCountElement(): UnsignedIntType {
    return this.knownDataCount ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `knownDataCount` property.
   *
   * @param element - the `knownDataCount` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setKnownDataCountElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid Evidence.statistic.sampleSize.knownDataCount; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.knownDataCount = element;
    } else {
      this.knownDataCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `knownDataCount` property exists and has a value; `false` otherwise
   */
  public hasKnownDataCountElement(): boolean {
    return isDefined<UnsignedIntType>(this.knownDataCount) && !this.knownDataCount.isEmpty();
  }

  /**
   * @returns the `knownDataCount` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getKnownDataCount(): fhirUnsignedInt | undefined {
    return this.knownDataCount?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `knownDataCount` property.
   *
   * @param value - the `knownDataCount` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setKnownDataCount(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.sampleSize.knownDataCount (${String(value)})`;
      this.knownDataCount = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.knownDataCount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `knownDataCount` property exists and has a value; `false` otherwise
   */
  public hasKnownDataCount(): boolean {
    return this.hasKnownDataCountElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Evidence.statistic.sampleSize';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.note,
      this.numberOfStudies,
      this.numberOfParticipants,
      this.knownDataCount,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceStatisticSampleSizeComponent {
    const dest = new EvidenceStatisticSampleSizeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceStatisticSampleSizeComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.numberOfStudies = this.numberOfStudies?.copy();
    dest.numberOfParticipants = this.numberOfParticipants?.copy();
    dest.knownDataCount = this.knownDataCount?.copy();
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

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasNumberOfStudiesElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getNumberOfStudiesElement(), 'numberOfStudies', jsonObj);
    }

    if (this.hasNumberOfParticipantsElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getNumberOfParticipantsElement(), 'numberOfParticipants', jsonObj);
    }

    if (this.hasKnownDataCountElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getKnownDataCountElement(), 'knownDataCount', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EvidenceStatisticAttributeEstimateComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An attribute of the Statistic
 * - **Definition:** A statistical attribute of the statistic such as a measure of heterogeneity.
 *
 * @category Data Models: Resource
 * @see [FHIR Evidence](http://hl7.org/fhir/StructureDefinition/Evidence)
 */
export class EvidenceStatisticAttributeEstimateComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EvidenceStatisticAttributeEstimateComponent` JSON to instantiate the EvidenceStatisticAttributeEstimateComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceStatisticAttributeEstimateComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceStatisticAttributeEstimateComponent
   * @returns EvidenceStatisticAttributeEstimateComponent data model or undefined for `EvidenceStatisticAttributeEstimateComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceStatisticAttributeEstimateComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceStatisticAttributeEstimateComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceStatisticAttributeEstimateComponent();

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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'level';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setLevelElement(datatype);
    }

    fieldName = 'range';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Range | undefined = Range.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRange(datatype);
    }

    fieldName = 'attributeEstimate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EvidenceStatisticAttributeEstimateComponent | undefined = EvidenceStatisticAttributeEstimateComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAttributeEstimate(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Evidence.statistic.attributeEstimate.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual description of the attribute estimate
   * - **Definition:** Human-readable summary of the estimate.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * Evidence.statistic.attributeEstimate.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Footnote or explanatory note about the estimate
   * - **Definition:** Footnote or explanatory note about the estimate.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Evidence.statistic.attributeEstimate.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of attribute estimate, e.g., confidence interval or p value
   * - **Definition:** The type of attribute estimate, e.g., confidence interval or p value.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Evidence.statistic.attributeEstimate.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The singular quantity of the attribute estimate, for attribute estimates represented as single values; also used to report unit of measure
   * - **Definition:** The singular quantity of the attribute estimate, for attribute estimates represented as single values; also used to report unit of measure.
   * - **Comment:** Often the p value
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * Evidence.statistic.attributeEstimate.level Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Level of confidence interval, e.g., 0.95 for 95% confidence interval
   * - **Definition:** Use 95 for a 95% confidence interval.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private level?: DecimalType | undefined;

  /**
   * Evidence.statistic.attributeEstimate.range Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Lower and upper bound values of the attribute estimate
   * - **Definition:** Lower bound of confidence interval.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private range?: Range | undefined;

  /**
   * Evidence.statistic.attributeEstimate.attributeEstimate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A nested attribute estimate; which is the attribute estimate of an attribute estimate
   * - **Definition:** A nested attribute estimate; which is the attribute estimate of an attribute estimate.
   * - **Comment:** A nested attribute estimate; which is the attribute estimate of an attribute estimate
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private attributeEstimate?: EvidenceStatisticAttributeEstimateComponent[] | undefined;

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
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate.description (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate.note; Provided element is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `quantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getQuantity(): Quantity {
    return this.quantity ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
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
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate.level; Provided element is not an instance of DecimalType.`;
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
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate.level (${String(value)})`;
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
   * @returns the `range` property value as a Range object if defined; else an empty Range object
   */
  public getRange(): Range {
    return this.range ?? new Range();
  }

  /**
   * Assigns the provided Range object value to the `range` property.
   *
   * @param value - the `range` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRange(value: Range | undefined): this {
    if (isDefined<Range>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate.range; Provided element is not an instance of Range.`;
      assertFhirType<Range>(value, Range, optErrMsg);
      this.range = value;
    } else {
      this.range = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `range` property exists and has a value; `false` otherwise
   */
  public hasRange(): boolean {
    return isDefined<Range>(this.range) && !this.range.isEmpty();
  }

  /**
   * @returns the `attributeEstimate` property value as a EvidenceStatisticAttributeEstimateComponent array
   */
  public getAttributeEstimate(): EvidenceStatisticAttributeEstimateComponent[] {
    return this.attributeEstimate ?? ([] as EvidenceStatisticAttributeEstimateComponent[]);
  }

  /**
   * Assigns the provided EvidenceStatisticAttributeEstimateComponent array value to the `attributeEstimate` property.
   *
   * @param value - the `attributeEstimate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAttributeEstimate(value: EvidenceStatisticAttributeEstimateComponent[] | undefined): this {
    if (isDefinedList<EvidenceStatisticAttributeEstimateComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate.attributeEstimate; Provided value array has an element that is not an instance of EvidenceStatisticAttributeEstimateComponent.`;
      assertFhirTypeList<EvidenceStatisticAttributeEstimateComponent>(value, EvidenceStatisticAttributeEstimateComponent, optErrMsg);
      this.attributeEstimate = value;
    } else {
      this.attributeEstimate = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceStatisticAttributeEstimateComponent value to the `attributeEstimate` array property.
   *
   * @param value - the `attributeEstimate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAttributeEstimate(value: EvidenceStatisticAttributeEstimateComponent | undefined): this {
    if (isDefined<EvidenceStatisticAttributeEstimateComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.attributeEstimate.attributeEstimate; Provided element is not an instance of EvidenceStatisticAttributeEstimateComponent.`;
      assertFhirType<EvidenceStatisticAttributeEstimateComponent>(value, EvidenceStatisticAttributeEstimateComponent, optErrMsg);
      this.initAttributeEstimate();
      this.attributeEstimate?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `attributeEstimate` property exists and has a value; `false` otherwise
   */
  public hasAttributeEstimate(): boolean {
    return isDefinedList<EvidenceStatisticAttributeEstimateComponent>(this.attributeEstimate) && this.attributeEstimate.some((item: EvidenceStatisticAttributeEstimateComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `attributeEstimate` property
   */
  private initAttributeEstimate(): void {
    if(!this.hasAttributeEstimate()) {
      this.attributeEstimate = [] as EvidenceStatisticAttributeEstimateComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Evidence.statistic.attributeEstimate';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.note,
      this.type_,
      this.quantity,
      this.level,
      this.range,
      this.attributeEstimate,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceStatisticAttributeEstimateComponent {
    const dest = new EvidenceStatisticAttributeEstimateComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceStatisticAttributeEstimateComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.type_ = this.type_?.copy();
    dest.quantity = this.quantity?.copy();
    dest.level = this.level?.copy();
    dest.range = this.range?.copy();
    const attributeEstimateList = copyListValues<EvidenceStatisticAttributeEstimateComponent>(this.attributeEstimate);
    dest.attributeEstimate = attributeEstimateList.length === 0 ? undefined : attributeEstimateList;
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

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasLevelElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getLevelElement(), 'level', jsonObj);
    }

    if (this.hasRange()) {
      setFhirComplexJson(this.getRange(), 'range', jsonObj);
    }

    if (this.hasAttributeEstimate()) {
      setFhirBackboneElementListJson(this.getAttributeEstimate(), 'attributeEstimate', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * EvidenceStatisticModelCharacteristicComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** An aspect of the statistical model
 * - **Definition:** A component of the method to generate the statistic.
 *
 * @category Data Models: Resource
 * @see [FHIR Evidence](http://hl7.org/fhir/StructureDefinition/Evidence)
 */
export class EvidenceStatisticModelCharacteristicComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `EvidenceStatisticModelCharacteristicComponent` JSON to instantiate the EvidenceStatisticModelCharacteristicComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceStatisticModelCharacteristicComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceStatisticModelCharacteristicComponent
   * @returns EvidenceStatisticModelCharacteristicComponent data model or undefined for `EvidenceStatisticModelCharacteristicComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceStatisticModelCharacteristicComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceStatisticModelCharacteristicComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceStatisticModelCharacteristicComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const missingReqdProperties: string[] = [];

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValue(datatype);
    }

    fieldName = 'variable';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EvidenceStatisticModelCharacteristicVariableComponent | undefined = EvidenceStatisticModelCharacteristicVariableComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addVariable(component);
        }
      });
    }

    fieldName = 'attributeEstimate';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EvidenceStatisticAttributeEstimateComponent | undefined = EvidenceStatisticAttributeEstimateComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAttributeEstimate(component);
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
   * Evidence.statistic.modelCharacteristic.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Model specification
   * - **Definition:** Description of a component of the method to generate the statistic.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * Evidence.statistic.modelCharacteristic.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Numerical value to complete model specification
   * - **Definition:** Further specification of the quantified value of the component of the method to generate the statistic.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value?: Quantity | undefined;

  /**
   * Evidence.statistic.modelCharacteristic.variable Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A variable adjusted for in the adjusted analysis
   * - **Definition:** A variable adjusted for in the adjusted analysis.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private variable?: EvidenceStatisticModelCharacteristicVariableComponent[] | undefined;

  /**
   * Evidence.statistic.modelCharacteristic.attributeEstimate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An attribute of the statistic used as a model characteristic
   * - **Definition:** An attribute of the statistic used as a model characteristic.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private attributeEstimate?: EvidenceStatisticAttributeEstimateComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept object if defined; else null
   */
  public getCode(): CodeableConcept | null {
    return this.code;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `Evidence.statistic.modelCharacteristic.code is required`);
    const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.code; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getValue(): Quantity {
    return this.value ?? new Quantity();
  }

  /**
   * Assigns the provided Value object value to the `value` property.
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValue(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.value; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.value = value;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefined<Quantity>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `variable` property value as a EvidenceStatisticModelCharacteristicVariableComponent array
   */
  public getVariable(): EvidenceStatisticModelCharacteristicVariableComponent[] {
    return this.variable ?? ([] as EvidenceStatisticModelCharacteristicVariableComponent[]);
  }

  /**
   * Assigns the provided EvidenceStatisticModelCharacteristicVariableComponent array value to the `variable` property.
   *
   * @param value - the `variable` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVariable(value: EvidenceStatisticModelCharacteristicVariableComponent[] | undefined): this {
    if (isDefinedList<EvidenceStatisticModelCharacteristicVariableComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.variable; Provided value array has an element that is not an instance of EvidenceStatisticModelCharacteristicVariableComponent.`;
      assertFhirTypeList<EvidenceStatisticModelCharacteristicVariableComponent>(value, EvidenceStatisticModelCharacteristicVariableComponent, optErrMsg);
      this.variable = value;
    } else {
      this.variable = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceStatisticModelCharacteristicVariableComponent value to the `variable` array property.
   *
   * @param value - the `variable` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVariable(value: EvidenceStatisticModelCharacteristicVariableComponent | undefined): this {
    if (isDefined<EvidenceStatisticModelCharacteristicVariableComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.variable; Provided element is not an instance of EvidenceStatisticModelCharacteristicVariableComponent.`;
      assertFhirType<EvidenceStatisticModelCharacteristicVariableComponent>(value, EvidenceStatisticModelCharacteristicVariableComponent, optErrMsg);
      this.initVariable();
      this.variable?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `variable` property exists and has a value; `false` otherwise
   */
  public hasVariable(): boolean {
    return isDefinedList<EvidenceStatisticModelCharacteristicVariableComponent>(this.variable) && this.variable.some((item: EvidenceStatisticModelCharacteristicVariableComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `variable` property
   */
  private initVariable(): void {
    if(!this.hasVariable()) {
      this.variable = [] as EvidenceStatisticModelCharacteristicVariableComponent[];
    }
  }

  /**
   * @returns the `attributeEstimate` property value as a EvidenceStatisticAttributeEstimateComponent array
   */
  public getAttributeEstimate(): EvidenceStatisticAttributeEstimateComponent[] {
    return this.attributeEstimate ?? ([] as EvidenceStatisticAttributeEstimateComponent[]);
  }

  /**
   * Assigns the provided EvidenceStatisticAttributeEstimateComponent array value to the `attributeEstimate` property.
   *
   * @param value - the `attributeEstimate` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAttributeEstimate(value: EvidenceStatisticAttributeEstimateComponent[] | undefined): this {
    if (isDefinedList<EvidenceStatisticAttributeEstimateComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.attributeEstimate; Provided value array has an element that is not an instance of EvidenceStatisticAttributeEstimateComponent.`;
      assertFhirTypeList<EvidenceStatisticAttributeEstimateComponent>(value, EvidenceStatisticAttributeEstimateComponent, optErrMsg);
      this.attributeEstimate = value;
    } else {
      this.attributeEstimate = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceStatisticAttributeEstimateComponent value to the `attributeEstimate` array property.
   *
   * @param value - the `attributeEstimate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAttributeEstimate(value: EvidenceStatisticAttributeEstimateComponent | undefined): this {
    if (isDefined<EvidenceStatisticAttributeEstimateComponent>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.attributeEstimate; Provided element is not an instance of EvidenceStatisticAttributeEstimateComponent.`;
      assertFhirType<EvidenceStatisticAttributeEstimateComponent>(value, EvidenceStatisticAttributeEstimateComponent, optErrMsg);
      this.initAttributeEstimate();
      this.attributeEstimate?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `attributeEstimate` property exists and has a value; `false` otherwise
   */
  public hasAttributeEstimate(): boolean {
    return isDefinedList<EvidenceStatisticAttributeEstimateComponent>(this.attributeEstimate) && this.attributeEstimate.some((item: EvidenceStatisticAttributeEstimateComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `attributeEstimate` property
   */
  private initAttributeEstimate(): void {
    if(!this.hasAttributeEstimate()) {
      this.attributeEstimate = [] as EvidenceStatisticAttributeEstimateComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Evidence.statistic.modelCharacteristic';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.value,
      this.variable,
      this.attributeEstimate,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceStatisticModelCharacteristicComponent {
    const dest = new EvidenceStatisticModelCharacteristicComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceStatisticModelCharacteristicComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.value = this.value?.copy();
    const variableList = copyListValues<EvidenceStatisticModelCharacteristicVariableComponent>(this.variable);
    dest.variable = variableList.length === 0 ? undefined : variableList;
    const attributeEstimateList = copyListValues<EvidenceStatisticAttributeEstimateComponent>(this.attributeEstimate);
    dest.attributeEstimate = attributeEstimateList.length === 0 ? undefined : attributeEstimateList;
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

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`Evidence.statistic.modelCharacteristic.code`);
    }

    if (this.hasValue()) {
      setFhirComplexJson(this.getValue(), 'value', jsonObj);
    }

    if (this.hasVariable()) {
      setFhirBackboneElementListJson(this.getVariable(), 'variable', jsonObj);
    }

    if (this.hasAttributeEstimate()) {
      setFhirBackboneElementListJson(this.getAttributeEstimate(), 'attributeEstimate', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * EvidenceStatisticModelCharacteristicVariableComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A variable adjusted for in the adjusted analysis
 * - **Definition:** A variable adjusted for in the adjusted analysis.
 *
 * @category Data Models: Resource
 * @see [FHIR Evidence](http://hl7.org/fhir/StructureDefinition/Evidence)
 */
export class EvidenceStatisticModelCharacteristicVariableComponent extends BackboneElement implements IBackboneElement {
  constructor(variableDefinition: Reference | null = null) {
    super();

    this.variableHandlingEnum = new VariableHandlingEnum();

    this.variableDefinition = null;
    if (isDefined<Reference>(variableDefinition)) {
      this.setVariableDefinition(variableDefinition);
    }
  }

  /**
   * Parse the provided `EvidenceStatisticModelCharacteristicVariableComponent` JSON to instantiate the EvidenceStatisticModelCharacteristicVariableComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceStatisticModelCharacteristicVariableComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceStatisticModelCharacteristicVariableComponent
   * @returns EvidenceStatisticModelCharacteristicVariableComponent data model or undefined for `EvidenceStatisticModelCharacteristicVariableComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceStatisticModelCharacteristicVariableComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceStatisticModelCharacteristicVariableComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceStatisticModelCharacteristicVariableComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'variableDefinition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setVariableDefinition(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'handling';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setHandlingElement(datatype);
    }

    fieldName = 'valueCategory';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addValueCategory(datatype);
        }
      });
    }

    fieldName = 'valueQuantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Quantity | undefined = Quantity.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addValueQuantity(datatype);
        }
      });
    }

    fieldName = 'valueRange';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Range | undefined = Range.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addValueRange(datatype);
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
   * Evidence.statistic.modelCharacteristic.variable.variableDefinition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the variable
   * - **Definition:** Description of the variable.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private variableDefinition: Reference | null;

  /**
   * FHIR CodeSystem: VariableHandling
   *
   * @see {@link VariableHandlingEnum }
   */
  private readonly variableHandlingEnum: VariableHandlingEnum;

  /**
   * Evidence.statistic.modelCharacteristic.variable.handling Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** continuous | dichotomous | ordinal | polychotomous
   * - **Definition:** How the variable is classified for use in adjusted analysis.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  private handling?: EnumCodeType | undefined;

  /**
   * Evidence.statistic.modelCharacteristic.variable.valueCategory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description for grouping of ordinal or polychotomous variables
   * - **Definition:** Description for grouping of ordinal or polychotomous variables.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private valueCategory?: CodeableConcept[] | undefined;

  /**
   * Evidence.statistic.modelCharacteristic.variable.valueQuantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Discrete value for grouping of ordinal or polychotomous variables
   * - **Definition:** Discrete value for grouping of ordinal or polychotomous variables.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private valueQuantity?: Quantity[] | undefined;

  /**
   * Evidence.statistic.modelCharacteristic.variable.valueRange Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Range of values for grouping of ordinal or polychotomous variables
   * - **Definition:** Range of values for grouping of ordinal or polychotomous variables.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private valueRange?: Range[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `variableDefinition` property value as a Reference object if defined; else null
   */
  public getVariableDefinition(): Reference | null {
    return this.variableDefinition;
  }

  /**
   * Assigns the provided VariableDefinition object value to the `variableDefinition` property.
   *
   * @decorator `@ReferenceTargets('Evidence.statistic.modelCharacteristic.variable.variableDefinition', ['Group','EvidenceVariable',])`
   *
   * @param value - the `variableDefinition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Evidence.statistic.modelCharacteristic.variable.variableDefinition', [
    'Group',
  
    'EvidenceVariable',
  ])
  public setVariableDefinition(value: Reference): this {
    assertIsDefined<Reference>(value, `Evidence.statistic.modelCharacteristic.variable.variableDefinition is required`);
    // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
    this.variableDefinition = value;
    return this;
  }

  /**
   * @returns `true` if the `variableDefinition` property exists and has a value; `false` otherwise
   */
  public hasVariableDefinition(): boolean {
    return isDefined<Reference>(this.variableDefinition) && !this.variableDefinition.isEmpty();
  }

  /**
   * @returns the `handling` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public getHandlingEnumType(): EnumCodeType | undefined {
    return this.handling;
  }

  /**
   * Assigns the provided EnumCodeType value to the `handling` property.
   *
   * @param enumType - the `handling` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public setHandlingEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Evidence.statistic.modelCharacteristic.variable.handling';
      assertEnumCodeType<VariableHandlingEnum>(enumType, VariableHandlingEnum, errMsgPrefix);
      this.handling = enumType;
    } else {
      this.handling = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `handling` property exists and has a value; `false` otherwise
   */
  public hasHandlingEnumType(): boolean {
    return isDefined<EnumCodeType>(this.handling) && !this.handling.isEmpty() && this.handling.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `handling` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public getHandlingElement(): CodeType | undefined {
    if (this.handling === undefined) {
      return undefined;
    }
    return this.handling as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `handling` property.
   *
   * @param element - the `handling` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public setHandlingElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.variable.handling; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.handling = new EnumCodeType(element, this.variableHandlingEnum);
    } else {
      this.handling = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `handling` property exists and has a value; `false` otherwise
   */
  public hasHandlingElement(): boolean {
    return this.hasHandlingEnumType();
  }

  /**
   * @returns the `handling` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public getHandling(): fhirCode | undefined {
    if (this.handling === undefined) {
      return undefined;
    }
    return this.handling.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `handling` property.
   *
   * @param value - the `handling` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link VariableHandlingEnum }
   */
  public setHandling(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.variable.handling; Provided value is not an instance of fhirCode.`;
      this.handling = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.variableHandlingEnum);
    } else {
      this.handling = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `handling` property exists and has a value; `false` otherwise
   */
  public hasHandling(): boolean {
    return this.hasHandlingEnumType();
  }

  /**
   * @returns the `valueCategory` property value as a CodeableConcept array
   */
  public getValueCategory(): CodeableConcept[] {
    return this.valueCategory ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `valueCategory` property.
   *
   * @param value - the `valueCategory` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValueCategory(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.variable.valueCategory; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.valueCategory = value;
    } else {
      this.valueCategory = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `valueCategory` array property.
   *
   * @param value - the `valueCategory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addValueCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.variable.valueCategory; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initValueCategory();
      this.valueCategory?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `valueCategory` property exists and has a value; `false` otherwise
   */
  public hasValueCategory(): boolean {
    return isDefinedList<CodeableConcept>(this.valueCategory) && this.valueCategory.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `valueCategory` property
   */
  private initValueCategory(): void {
    if(!this.hasValueCategory()) {
      this.valueCategory = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `valueQuantity` property value as a Quantity array
   */
  public getValueQuantity(): Quantity[] {
    return this.valueQuantity ?? ([] as Quantity[]);
  }

  /**
   * Assigns the provided Quantity array value to the `valueQuantity` property.
   *
   * @param value - the `valueQuantity` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValueQuantity(value: Quantity[] | undefined): this {
    if (isDefinedList<Quantity>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.variable.valueQuantity; Provided value array has an element that is not an instance of Quantity.`;
      assertFhirTypeList<Quantity>(value, Quantity, optErrMsg);
      this.valueQuantity = value;
    } else {
      this.valueQuantity = undefined;
    }
    return this;
  }

  /**
   * Add the provided Quantity value to the `valueQuantity` array property.
   *
   * @param value - the `valueQuantity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addValueQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.variable.valueQuantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.initValueQuantity();
      this.valueQuantity?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `valueQuantity` property exists and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return isDefinedList<Quantity>(this.valueQuantity) && this.valueQuantity.some((item: Quantity) => !item.isEmpty());
  }

  /**
   * Initialize the `valueQuantity` property
   */
  private initValueQuantity(): void {
    if(!this.hasValueQuantity()) {
      this.valueQuantity = [] as Quantity[];
    }
  }

  /**
   * @returns the `valueRange` property value as a Range array
   */
  public getValueRange(): Range[] {
    return this.valueRange ?? ([] as Range[]);
  }

  /**
   * Assigns the provided Range array value to the `valueRange` property.
   *
   * @param value - the `valueRange` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValueRange(value: Range[] | undefined): this {
    if (isDefinedList<Range>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.variable.valueRange; Provided value array has an element that is not an instance of Range.`;
      assertFhirTypeList<Range>(value, Range, optErrMsg);
      this.valueRange = value;
    } else {
      this.valueRange = undefined;
    }
    return this;
  }

  /**
   * Add the provided Range value to the `valueRange` array property.
   *
   * @param value - the `valueRange` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addValueRange(value: Range | undefined): this {
    if (isDefined<Range>(value)) {
      const optErrMsg = `Invalid Evidence.statistic.modelCharacteristic.variable.valueRange; Provided element is not an instance of Range.`;
      assertFhirType<Range>(value, Range, optErrMsg);
      this.initValueRange();
      this.valueRange?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `valueRange` property exists and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return isDefinedList<Range>(this.valueRange) && this.valueRange.some((item: Range) => !item.isEmpty());
  }

  /**
   * Initialize the `valueRange` property
   */
  private initValueRange(): void {
    if(!this.hasValueRange()) {
      this.valueRange = [] as Range[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Evidence.statistic.modelCharacteristic.variable';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.variableDefinition,
      this.handling,
      this.valueCategory,
      this.valueQuantity,
      this.valueRange,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceStatisticModelCharacteristicVariableComponent {
    const dest = new EvidenceStatisticModelCharacteristicVariableComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceStatisticModelCharacteristicVariableComponent): void {
    super.copyValues(dest);
    dest.variableDefinition = this.variableDefinition ? this.variableDefinition.copy() : null;
    dest.handling = this.handling?.copy();
    const valueCategoryList = copyListValues<CodeableConcept>(this.valueCategory);
    dest.valueCategory = valueCategoryList.length === 0 ? undefined : valueCategoryList;
    const valueQuantityList = copyListValues<Quantity>(this.valueQuantity);
    dest.valueQuantity = valueQuantityList.length === 0 ? undefined : valueQuantityList;
    const valueRangeList = copyListValues<Range>(this.valueRange);
    dest.valueRange = valueRangeList.length === 0 ? undefined : valueRangeList;
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

    if (this.hasVariableDefinition()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getVariableDefinition()!, 'variableDefinition', jsonObj);
    } else {
      missingReqdProperties.push(`Evidence.statistic.modelCharacteristic.variable.variableDefinition`);
    }

    if (this.hasHandlingElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getHandlingElement()!, 'handling', jsonObj);
    }

    if (this.hasValueCategory()) {
      setFhirComplexListJson(this.getValueCategory(), 'valueCategory', jsonObj);
    }

    if (this.hasValueQuantity()) {
      setFhirComplexListJson(this.getValueQuantity(), 'valueQuantity', jsonObj);
    }

    if (this.hasValueRange()) {
      setFhirComplexListJson(this.getValueRange(), 'valueRange', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * EvidenceCertaintyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Certainty or quality of the evidence
 * - **Definition:** Assessment of certainty, confidence in the estimates, or quality of the evidence.
 *
 * @category Data Models: Resource
 * @see [FHIR Evidence](http://hl7.org/fhir/StructureDefinition/Evidence)
 */
export class EvidenceCertaintyComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `EvidenceCertaintyComponent` JSON to instantiate the EvidenceCertaintyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `EvidenceCertaintyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to EvidenceCertaintyComponent
   * @returns EvidenceCertaintyComponent data model or undefined for `EvidenceCertaintyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): EvidenceCertaintyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'EvidenceCertaintyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new EvidenceCertaintyComponent();

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
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRating(datatype);
    }

    fieldName = 'rater';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setRaterElement(datatype);
    }

    fieldName = 'subcomponent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: EvidenceCertaintyComponent | undefined = EvidenceCertaintyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSubcomponent(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Evidence.certainty.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual description of certainty
   * - **Definition:** Textual description of certainty.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * Evidence.certainty.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Footnotes and/or explanatory notes
   * - **Definition:** Footnotes and/or explanatory notes.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * Evidence.certainty.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Aspect of certainty being rated
   * - **Definition:** Aspect of certainty being rated.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Evidence.certainty.rating Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Assessment or judgement of the aspect
   * - **Definition:** Assessment or judgement of the aspect.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private rating?: CodeableConcept | undefined;

  /**
   * Evidence.certainty.rater Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual or group who did the rating
   * - **Definition:** Individual or group who did the rating.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private rater?: StringType | undefined;

  /**
   * Evidence.certainty.subcomponent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A domain or subdomain of certainty
   * - **Definition:** A domain or subdomain of certainty.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subcomponent?: EvidenceCertaintyComponent[] | undefined;

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
      const optErrMsg = `Invalid Evidence.certainty.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid Evidence.certainty.description (${String(value)})`;
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
      const optErrMsg = `Invalid Evidence.certainty.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Evidence.certainty.note; Provided element is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Evidence.certainty.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `rating` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRating(): CodeableConcept {
    return this.rating ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Rating object value to the `rating` property.
   *
   * @param value - the `rating` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRating(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Evidence.certainty.rating; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.rating = value;
    } else {
      this.rating = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rating` property exists and has a value; `false` otherwise
   */
  public hasRating(): boolean {
    return isDefined<CodeableConcept>(this.rating) && !this.rating.isEmpty();
  }

  /**
   * @returns the `rater` property value as a StringType object if defined; else an empty StringType object
   */
  public getRaterElement(): StringType {
    return this.rater ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `rater` property.
   *
   * @param element - the `rater` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRaterElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Evidence.certainty.rater; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.rater = element;
    } else {
      this.rater = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rater` property exists and has a value; `false` otherwise
   */
  public hasRaterElement(): boolean {
    return isDefined<StringType>(this.rater) && !this.rater.isEmpty();
  }

  /**
   * @returns the `rater` property value as a fhirString if defined; else undefined
   */
  public getRater(): fhirString | undefined {
    return this.rater?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `rater` property.
   *
   * @param value - the `rater` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRater(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Evidence.certainty.rater (${String(value)})`;
      this.rater = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.rater = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rater` property exists and has a value; `false` otherwise
   */
  public hasRater(): boolean {
    return this.hasRaterElement();
  }

  /**
   * @returns the `subcomponent` property value as a EvidenceCertaintyComponent array
   */
  public getSubcomponent(): EvidenceCertaintyComponent[] {
    return this.subcomponent ?? ([] as EvidenceCertaintyComponent[]);
  }

  /**
   * Assigns the provided EvidenceCertaintyComponent array value to the `subcomponent` property.
   *
   * @param value - the `subcomponent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubcomponent(value: EvidenceCertaintyComponent[] | undefined): this {
    if (isDefinedList<EvidenceCertaintyComponent>(value)) {
      const optErrMsg = `Invalid Evidence.certainty.subcomponent; Provided value array has an element that is not an instance of EvidenceCertaintyComponent.`;
      assertFhirTypeList<EvidenceCertaintyComponent>(value, EvidenceCertaintyComponent, optErrMsg);
      this.subcomponent = value;
    } else {
      this.subcomponent = undefined;
    }
    return this;
  }

  /**
   * Add the provided EvidenceCertaintyComponent value to the `subcomponent` array property.
   *
   * @param value - the `subcomponent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubcomponent(value: EvidenceCertaintyComponent | undefined): this {
    if (isDefined<EvidenceCertaintyComponent>(value)) {
      const optErrMsg = `Invalid Evidence.certainty.subcomponent; Provided element is not an instance of EvidenceCertaintyComponent.`;
      assertFhirType<EvidenceCertaintyComponent>(value, EvidenceCertaintyComponent, optErrMsg);
      this.initSubcomponent();
      this.subcomponent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subcomponent` property exists and has a value; `false` otherwise
   */
  public hasSubcomponent(): boolean {
    return isDefinedList<EvidenceCertaintyComponent>(this.subcomponent) && this.subcomponent.some((item: EvidenceCertaintyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `subcomponent` property
   */
  private initSubcomponent(): void {
    if(!this.hasSubcomponent()) {
      this.subcomponent = [] as EvidenceCertaintyComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Evidence.certainty';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.note,
      this.type_,
      this.rating,
      this.rater,
      this.subcomponent,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): EvidenceCertaintyComponent {
    const dest = new EvidenceCertaintyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: EvidenceCertaintyComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.type_ = this.type_?.copy();
    dest.rating = this.rating?.copy();
    dest.rater = this.rater?.copy();
    const subcomponentList = copyListValues<EvidenceCertaintyComponent>(this.subcomponent);
    dest.subcomponent = subcomponentList.length === 0 ? undefined : subcomponentList;
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

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasRating()) {
      setFhirComplexJson(this.getRating(), 'rating', jsonObj);
    }

    if (this.hasRaterElement()) {
      setFhirPrimitiveJson<fhirString>(this.getRaterElement(), 'rater', jsonObj);
    }

    if (this.hasSubcomponent()) {
      setFhirBackboneElementListJson(this.getSubcomponent(), 'subcomponent', jsonObj);
    }

    return jsonObj;
  }
}
