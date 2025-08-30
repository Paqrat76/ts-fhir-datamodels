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
 * ConditionDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ConditionDefinition
 * StructureDefinition.name: ConditionDefinition
 * StructureDefinition.description: A definition of a condition and information relevant to managing it.
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
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveTypeJson,
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
import { CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { ConditionPreconditionTypeEnum } from '../code-systems/ConditionPreconditionTypeEnum';
import { ConditionQuestionnairePurposeEnum } from '../code-systems/ConditionQuestionnairePurposeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ConditionDefinition Class
 *
 * @remarks
 * A definition of a condition and information relevant to managing it.
 *
 * **FHIR Specification**
 * - **Short:** A definition of a condition
 * - **Definition:** A definition of a condition and information relevant to managing it.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR ConditionDefinition](http://hl7.org/fhir/StructureDefinition/ConditionDefinition)
 */
export class ConditionDefinition extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, code: CodeableConcept | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'ConditionDefinition.status',
    );

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `ConditionDefinition` JSON to instantiate the ConditionDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `ConditionDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConditionDefinition
   * @returns ConditionDefinition data model or undefined for `ConditionDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ConditionDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConditionDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConditionDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ConditionDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ConditionDefinition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ConditionDefinition`;
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

    fieldName = 'subtitle';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSubtitleElement(datatype);
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

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCode(datatype);
      }
    } else {
      instance.setCode(null);
    }

    fieldName = 'severity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSeverity(datatype);
    }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBodySite(datatype);
    }

    fieldName = 'stage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStage(datatype);
    }

    fieldName = 'hasSeverity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setHasSeverityElement(datatype);
    }

    fieldName = 'hasBodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setHasBodySiteElement(datatype);
    }

    fieldName = 'hasStage';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setHasStageElement(datatype);
    }

    fieldName = 'definition';
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
          instance.addDefinitionElement(datatype);
        }
      });
    }

    fieldName = 'observation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConditionDefinitionObservationComponent | undefined = ConditionDefinitionObservationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addObservation(component);
        }
      });
    }

    fieldName = 'medication';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConditionDefinitionMedicationComponent | undefined = ConditionDefinitionMedicationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addMedication(component);
        }
      });
    }

    fieldName = 'precondition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConditionDefinitionPreconditionComponent | undefined = ConditionDefinitionPreconditionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPrecondition(component);
        }
      });
    }

    fieldName = 'team';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTeam(datatype);
        }
      });
  }

    fieldName = 'questionnaire';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConditionDefinitionQuestionnaireComponent | undefined = ConditionDefinitionQuestionnaireComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addQuestionnaire(component);
        }
      });
    }

    fieldName = 'plan';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ConditionDefinitionPlanComponent | undefined = ConditionDefinitionPlanComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPlan(component);
        }
      });
    }

    return instance;
  }

  /**
   * ConditionDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this condition definition, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this condition definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this condition definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the condition definition is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the condition definition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * ConditionDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the condition definition
   * - **Definition:** A formal identifier that is used to identify this condition definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this condition definition outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * ConditionDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the condition definition
   * - **Definition:** The identifier that is used to identify this version of the condition definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the condition definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different condition definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the condition definition with the format [url]|[version]. The version SHOULD NOT contain a \'#\' - see [Business Version](https://hl7.org/fhir/resource.html#bv-format).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * ConditionDefinition.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ConditionDefinition.versionAlgorithm[x]', ['string','Coding',]`
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
  @ChoiceDataTypesMeta('ConditionDefinition.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * ConditionDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this condition definition (computer friendly)
   * - **Definition:** A natural language name identifying the condition definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * ConditionDefinition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this condition definition (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the condition definition.
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * ConditionDefinition.subtitle Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subordinate title of the event definition
   * - **Definition:** An explanatory or alternate title for the event definition giving additional information about its content.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subtitle?: StringType | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * ConditionDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this condition definition. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of condition definitions that are appropriate for use versus not. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
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
   * ConditionDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this condition definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of condition definitions that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level condition definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * ConditionDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the condition definition was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the condition definition changes.
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the condition definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * ConditionDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher/steward (organization or individual)
   * - **Definition:** The name of the organization or individual responsible for the release and ongoing maintenance of the condition definition.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the condition definition is the organization or individual primarily responsible for the maintenance and upkeep of the condition definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the condition definition. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the condition definition.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * ConditionDefinition.contact Element
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
   * ConditionDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the condition definition
   * - **Definition:** A free text natural language description of the condition definition from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the condition definition as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the condition definition is presumed to be the predominant language in the place the condition definition was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ConditionDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate condition definition instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * ConditionDefinition.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for condition definition (if applicable)
   * - **Definition:** A legal or geographic region in which the condition definition is intended to be used.
   * - **Comment:** It may be possible for the condition definition to be used in jurisdictions other than those for which it was originally designed or intended. DEPRECATION NOTE: For consistency, implementations are encouraged to migrate to using the new \'jurisdiction\' code in the useContext element.  (I.e. useContext.code indicating http://terminology.hl7.org/CodeSystem/usage-context-type#jurisdiction and useContext.valueCodeableConcept indicating the jurisdiction.)
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * ConditionDefinition.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identification of the condition, problem or diagnosis
   * - **Definition:** Identification of the condition, problem or diagnosis.
   * - **Requirements:** 0..1 to account for primarily narrative only resources.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * ConditionDefinition.severity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subjective severity of condition
   * - **Definition:** A subjective assessment of the severity of the condition as evaluated by the clinician.
   * - **Comment:** Coding of the severity with a terminology is preferred, where possible.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private severity?: CodeableConcept | undefined;

  /**
   * ConditionDefinition.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Anatomical location, if relevant
   * - **Definition:** The anatomical location where this condition manifests itself.
   * - **Comment:** Only used if not implicit in code found in ConditionDefinition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [http://hl7.org/fhir/StructureDefinition/bodySite](http://hl7.org/fhir/extensions/https://hl7.org/fhir/StructureDefinition-bodySite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private bodySite?: CodeableConcept | undefined;

  /**
   * ConditionDefinition.stage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Stage/grade, usually assessed formally
   * - **Definition:** Clinical stage or grade of a condition. May include formal severity assessments.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private stage?: CodeableConcept | undefined;

  /**
   * ConditionDefinition.hasSeverity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether Severity is appropriate
   * - **Definition:** Whether Severity is appropriate to collect for this condition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private hasSeverity_?: BooleanType | undefined;

  /**
   * ConditionDefinition.hasBodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether bodySite is appropriate
   * - **Definition:** Whether bodySite is appropriate to collect for this condition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private hasBodySite_?: BooleanType | undefined;

  /**
   * ConditionDefinition.hasStage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether stage is appropriate
   * - **Definition:** Whether stage is appropriate to collect for this condition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private hasStage_?: BooleanType | undefined;

  /**
   * ConditionDefinition.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Formal Definition for the condition
   * - **Definition:** Formal definitions of the condition. These may be references to ontologies, published clinical protocols or research papers.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definition?: UriType[] | undefined;

  /**
   * ConditionDefinition.observation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Observations particularly relevant to this condition
   * - **Definition:** Observations particularly relevant to this condition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private observation?: ConditionDefinitionObservationComponent[] | undefined;

  /**
   * ConditionDefinition.medication Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Medications particularly relevant for this condition
   * - **Definition:** Medications particularly relevant for this condition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private medication?: ConditionDefinitionMedicationComponent[] | undefined;

  /**
   * ConditionDefinition.precondition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Observation that suggets this condition
   * - **Definition:** An observation that suggests that this condition applies.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private precondition?: ConditionDefinitionPreconditionComponent[] | undefined;

  /**
   * ConditionDefinition.team Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Appropriate team for this condition
   * - **Definition:** Appropriate team for this condition.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CareTeam',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private team?: Reference[] | undefined;

  /**
   * ConditionDefinition.questionnaire Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Questionnaire for this condition
   * - **Definition:** Questionnaire for this condition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private questionnaire?: ConditionDefinitionQuestionnaireComponent[] | undefined;

  /**
   * ConditionDefinition.plan Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Plan that is appropriate
   * - **Definition:** Plan that is appropriate.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private plan?: ConditionDefinitionPlanComponent[] | undefined;

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
      const optErrMsg = `Invalid ConditionDefinition.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid ConditionDefinition.url (${String(value)})`;
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
      const optErrMsg = `Invalid ConditionDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ConditionDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ConditionDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConditionDefinition.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('ConditionDefinition.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ConditionDefinition.versionAlgorithm[x]')
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
        `DataType mismatch for ConditionDefinition.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for ConditionDefinition.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
      const optErrMsg = `Invalid ConditionDefinition.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConditionDefinition.name (${String(value)})`;
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
      const optErrMsg = `Invalid ConditionDefinition.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConditionDefinition.title (${String(value)})`;
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
      const optErrMsg = `Invalid ConditionDefinition.subtitle; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConditionDefinition.subtitle (${String(value)})`;
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
      const errMsgPrefix = `Invalid ConditionDefinition.status`;
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
      const optErrMsg = `Invalid ConditionDefinition.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid ConditionDefinition.status (${String(value)})`;
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
      const optErrMsg = `Invalid ConditionDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid ConditionDefinition.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid ConditionDefinition.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ConditionDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid ConditionDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ConditionDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid ConditionDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ConditionDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ConditionDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ConditionDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid ConditionDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ConditionDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ConditionDefinition.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ConditionDefinition.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `severity` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getSeverity(): CodeableConcept {
    return this.severity ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Severity object value to the `severity` property.
   *
   * @param value - the `severity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSeverity(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.severity; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.severity = value;
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverity(): boolean {
    return isDefined<CodeableConcept>(this.severity) && !this.severity.isEmpty();
  }

  /**
   * @returns the `bodySite` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getBodySite(): CodeableConcept {
    return this.bodySite ?? new CodeableConcept();
  }

  /**
   * Assigns the provided BodySite object value to the `bodySite` property.
   *
   * @param value - the `bodySite` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodySite(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.bodySite; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.bodySite = value;
    } else {
      this.bodySite = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `bodySite` property exists and has a value; `false` otherwise
   */
  public hasBodySite(): boolean {
    return isDefined<CodeableConcept>(this.bodySite) && !this.bodySite.isEmpty();
  }

  /**
   * @returns the `stage` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getStage(): CodeableConcept {
    return this.stage ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Stage object value to the `stage` property.
   *
   * @param value - the `stage` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStage(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.stage; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.stage = value;
    } else {
      this.stage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `stage` property exists and has a value; `false` otherwise
   */
  public hasStage(): boolean {
    return isDefined<CodeableConcept>(this.stage) && !this.stage.isEmpty();
  }

  /**
   * @returns the `hasSeverity_` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getHasSeverityElement(): BooleanType {
    return this.hasSeverity_ ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `hasSeverity_` property.
   *
   * @param element - the `hasSeverity_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHasSeverityElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ConditionDefinition.hasSeverity; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.hasSeverity_ = element;
    } else {
      this.hasSeverity_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hasSeverity_` property exists and has a value; `false` otherwise
   */
  public hasHasSeverityElement(): boolean {
    return isDefined<BooleanType>(this.hasSeverity_) && !this.hasSeverity_.isEmpty();
  }

  /**
   * @returns the `hasSeverity_` property value as a fhirBoolean if defined; else undefined
   */
  public getHasSeverity(): fhirBoolean | undefined {
    return this.hasSeverity_?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `hasSeverity_` property.
   *
   * @param value - the `hasSeverity_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHasSeverity(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.hasSeverity (${String(value)})`;
      this.hasSeverity_ = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.hasSeverity_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hasSeverity_` property exists and has a value; `false` otherwise
   */
  public hasHasSeverity(): boolean {
    return this.hasHasSeverityElement();
  }

  /**
   * @returns the `hasBodySite_` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getHasBodySiteElement(): BooleanType {
    return this.hasBodySite_ ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `hasBodySite_` property.
   *
   * @param element - the `hasBodySite_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHasBodySiteElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ConditionDefinition.hasBodySite; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.hasBodySite_ = element;
    } else {
      this.hasBodySite_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hasBodySite_` property exists and has a value; `false` otherwise
   */
  public hasHasBodySiteElement(): boolean {
    return isDefined<BooleanType>(this.hasBodySite_) && !this.hasBodySite_.isEmpty();
  }

  /**
   * @returns the `hasBodySite_` property value as a fhirBoolean if defined; else undefined
   */
  public getHasBodySite(): fhirBoolean | undefined {
    return this.hasBodySite_?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `hasBodySite_` property.
   *
   * @param value - the `hasBodySite_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHasBodySite(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.hasBodySite (${String(value)})`;
      this.hasBodySite_ = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.hasBodySite_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hasBodySite_` property exists and has a value; `false` otherwise
   */
  public hasHasBodySite(): boolean {
    return this.hasHasBodySiteElement();
  }

  /**
   * @returns the `hasStage_` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getHasStageElement(): BooleanType {
    return this.hasStage_ ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `hasStage_` property.
   *
   * @param element - the `hasStage_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHasStageElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ConditionDefinition.hasStage; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.hasStage_ = element;
    } else {
      this.hasStage_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hasStage_` property exists and has a value; `false` otherwise
   */
  public hasHasStageElement(): boolean {
    return isDefined<BooleanType>(this.hasStage_) && !this.hasStage_.isEmpty();
  }

  /**
   * @returns the `hasStage_` property value as a fhirBoolean if defined; else undefined
   */
  public getHasStage(): fhirBoolean | undefined {
    return this.hasStage_?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `hasStage_` property.
   *
   * @param value - the `hasStage_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHasStage(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.hasStage (${String(value)})`;
      this.hasStage_ = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.hasStage_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hasStage_` property exists and has a value; `false` otherwise
   */
  public hasHasStage(): boolean {
    return this.hasHasStageElement();
  }

  /**
   * @returns the `definition` property value as a UriType array
   */
  public getDefinitionElement(): UriType[] {
    return this.definition ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `definition` property.
   *
   * @param element - the `definition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid ConditionDefinition.definition; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.definition = element;
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `definition` array property.
   *
   * @param element - the `definition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDefinitionElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid ConditionDefinition.definition; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initDefinition();
      this.definition?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinitionElement(): boolean {
    return isDefinedList<UriType>(this.definition) && this.definition.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `definition` property value as a fhirUri array
   */
  public getDefinition(): fhirUri[] {
    this.initDefinition();
    const definitionValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.definition!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        definitionValues.push(value);
      }
    }
    return definitionValues;
  }

  /**
   * Assigns the provided primitive value array to the `definition` property.
   *
   * @param value - the `definition` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinition(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const definitionElements = [] as UriType[];
      for (const definitionValue of value) {
        const optErrMsg = `Invalid ConditionDefinition.definition array item (${String(definitionValue)})`;
        const element = new UriType(parseFhirPrimitiveData(definitionValue, fhirUriSchema, optErrMsg));
        definitionElements.push(element);
      }
      this.definition = definitionElements;
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `definition` array property.
   *
   * @param value - the `definition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDefinition(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.definition array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initDefinition();
      this.addDefinitionElement(element);
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
   * Initialize the `definition` property
   */
  private initDefinition(): void {
    if (!this.hasDefinition()) {
      this.definition = [] as UriType[];
    }
  }

  /**
   * @returns the `observation` property value as a ConditionDefinitionObservationComponent array
   */
  public getObservation(): ConditionDefinitionObservationComponent[] {
    return this.observation ?? ([] as ConditionDefinitionObservationComponent[]);
  }

  /**
   * Assigns the provided ConditionDefinitionObservationComponent array value to the `observation` property.
   *
   * @param value - the `observation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setObservation(value: ConditionDefinitionObservationComponent[] | undefined): this {
    if (isDefinedList<ConditionDefinitionObservationComponent>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.observation; Provided value array has an element that is not an instance of ConditionDefinitionObservationComponent.`;
      assertFhirTypeList<ConditionDefinitionObservationComponent>(value, ConditionDefinitionObservationComponent, optErrMsg);
      this.observation = value;
    } else {
      this.observation = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConditionDefinitionObservationComponent value to the `observation` array property.
   *
   * @param value - the `observation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addObservation(value: ConditionDefinitionObservationComponent | undefined): this {
    if (isDefined<ConditionDefinitionObservationComponent>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.observation; Provided element is not an instance of ConditionDefinitionObservationComponent.`;
      assertFhirType<ConditionDefinitionObservationComponent>(value, ConditionDefinitionObservationComponent, optErrMsg);
      this.initObservation();
      this.observation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `observation` property exists and has a value; `false` otherwise
   */
  public hasObservation(): boolean {
    return isDefinedList<ConditionDefinitionObservationComponent>(this.observation) && this.observation.some((item: ConditionDefinitionObservationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `observation` property
   */
  private initObservation(): void {
    if(!this.hasObservation()) {
      this.observation = [] as ConditionDefinitionObservationComponent[];
    }
  }

  /**
   * @returns the `medication` property value as a ConditionDefinitionMedicationComponent array
   */
  public getMedication(): ConditionDefinitionMedicationComponent[] {
    return this.medication ?? ([] as ConditionDefinitionMedicationComponent[]);
  }

  /**
   * Assigns the provided ConditionDefinitionMedicationComponent array value to the `medication` property.
   *
   * @param value - the `medication` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMedication(value: ConditionDefinitionMedicationComponent[] | undefined): this {
    if (isDefinedList<ConditionDefinitionMedicationComponent>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.medication; Provided value array has an element that is not an instance of ConditionDefinitionMedicationComponent.`;
      assertFhirTypeList<ConditionDefinitionMedicationComponent>(value, ConditionDefinitionMedicationComponent, optErrMsg);
      this.medication = value;
    } else {
      this.medication = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConditionDefinitionMedicationComponent value to the `medication` array property.
   *
   * @param value - the `medication` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMedication(value: ConditionDefinitionMedicationComponent | undefined): this {
    if (isDefined<ConditionDefinitionMedicationComponent>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.medication; Provided element is not an instance of ConditionDefinitionMedicationComponent.`;
      assertFhirType<ConditionDefinitionMedicationComponent>(value, ConditionDefinitionMedicationComponent, optErrMsg);
      this.initMedication();
      this.medication?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `medication` property exists and has a value; `false` otherwise
   */
  public hasMedication(): boolean {
    return isDefinedList<ConditionDefinitionMedicationComponent>(this.medication) && this.medication.some((item: ConditionDefinitionMedicationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `medication` property
   */
  private initMedication(): void {
    if(!this.hasMedication()) {
      this.medication = [] as ConditionDefinitionMedicationComponent[];
    }
  }

  /**
   * @returns the `precondition` property value as a ConditionDefinitionPreconditionComponent array
   */
  public getPrecondition(): ConditionDefinitionPreconditionComponent[] {
    return this.precondition ?? ([] as ConditionDefinitionPreconditionComponent[]);
  }

  /**
   * Assigns the provided ConditionDefinitionPreconditionComponent array value to the `precondition` property.
   *
   * @param value - the `precondition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPrecondition(value: ConditionDefinitionPreconditionComponent[] | undefined): this {
    if (isDefinedList<ConditionDefinitionPreconditionComponent>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.precondition; Provided value array has an element that is not an instance of ConditionDefinitionPreconditionComponent.`;
      assertFhirTypeList<ConditionDefinitionPreconditionComponent>(value, ConditionDefinitionPreconditionComponent, optErrMsg);
      this.precondition = value;
    } else {
      this.precondition = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConditionDefinitionPreconditionComponent value to the `precondition` array property.
   *
   * @param value - the `precondition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPrecondition(value: ConditionDefinitionPreconditionComponent | undefined): this {
    if (isDefined<ConditionDefinitionPreconditionComponent>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.precondition; Provided element is not an instance of ConditionDefinitionPreconditionComponent.`;
      assertFhirType<ConditionDefinitionPreconditionComponent>(value, ConditionDefinitionPreconditionComponent, optErrMsg);
      this.initPrecondition();
      this.precondition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `precondition` property exists and has a value; `false` otherwise
   */
  public hasPrecondition(): boolean {
    return isDefinedList<ConditionDefinitionPreconditionComponent>(this.precondition) && this.precondition.some((item: ConditionDefinitionPreconditionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `precondition` property
   */
  private initPrecondition(): void {
    if(!this.hasPrecondition()) {
      this.precondition = [] as ConditionDefinitionPreconditionComponent[];
    }
  }

  /**
   * @returns the `team` property value as a Reference array
   */
  public getTeam(): Reference[] {
    return this.team ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `team` property.
   *
   * @decorator `@ReferenceTargets('ConditionDefinition.team', ['CareTeam',])`
   *
   * @param value - the `team` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ConditionDefinition.team', [
    'CareTeam',
  ])
  public setTeam(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.team = value;
    } else {
      this.team = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `team` array property.
   *
   * @decorator `@ReferenceTargets('ConditionDefinition.team', ['CareTeam',])`
   *
   * @param value - the `team` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ConditionDefinition.team', [
    'CareTeam',
  ])
  public addTeam(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initTeam();
      this.team?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `team` property exists and has a value; `false` otherwise
   */
  public hasTeam(): boolean {
    return isDefinedList<Reference>(this.team) && this.team.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `team` property
   */
  private initTeam(): void {
    if (!this.hasTeam()) {
      this.team = [] as Reference[];
    }
  }

  /**
   * @returns the `questionnaire` property value as a ConditionDefinitionQuestionnaireComponent array
   */
  public getQuestionnaire(): ConditionDefinitionQuestionnaireComponent[] {
    return this.questionnaire ?? ([] as ConditionDefinitionQuestionnaireComponent[]);
  }

  /**
   * Assigns the provided ConditionDefinitionQuestionnaireComponent array value to the `questionnaire` property.
   *
   * @param value - the `questionnaire` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuestionnaire(value: ConditionDefinitionQuestionnaireComponent[] | undefined): this {
    if (isDefinedList<ConditionDefinitionQuestionnaireComponent>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.questionnaire; Provided value array has an element that is not an instance of ConditionDefinitionQuestionnaireComponent.`;
      assertFhirTypeList<ConditionDefinitionQuestionnaireComponent>(value, ConditionDefinitionQuestionnaireComponent, optErrMsg);
      this.questionnaire = value;
    } else {
      this.questionnaire = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConditionDefinitionQuestionnaireComponent value to the `questionnaire` array property.
   *
   * @param value - the `questionnaire` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addQuestionnaire(value: ConditionDefinitionQuestionnaireComponent | undefined): this {
    if (isDefined<ConditionDefinitionQuestionnaireComponent>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.questionnaire; Provided element is not an instance of ConditionDefinitionQuestionnaireComponent.`;
      assertFhirType<ConditionDefinitionQuestionnaireComponent>(value, ConditionDefinitionQuestionnaireComponent, optErrMsg);
      this.initQuestionnaire();
      this.questionnaire?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `questionnaire` property exists and has a value; `false` otherwise
   */
  public hasQuestionnaire(): boolean {
    return isDefinedList<ConditionDefinitionQuestionnaireComponent>(this.questionnaire) && this.questionnaire.some((item: ConditionDefinitionQuestionnaireComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `questionnaire` property
   */
  private initQuestionnaire(): void {
    if(!this.hasQuestionnaire()) {
      this.questionnaire = [] as ConditionDefinitionQuestionnaireComponent[];
    }
  }

  /**
   * @returns the `plan` property value as a ConditionDefinitionPlanComponent array
   */
  public getPlan(): ConditionDefinitionPlanComponent[] {
    return this.plan ?? ([] as ConditionDefinitionPlanComponent[]);
  }

  /**
   * Assigns the provided ConditionDefinitionPlanComponent array value to the `plan` property.
   *
   * @param value - the `plan` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPlan(value: ConditionDefinitionPlanComponent[] | undefined): this {
    if (isDefinedList<ConditionDefinitionPlanComponent>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.plan; Provided value array has an element that is not an instance of ConditionDefinitionPlanComponent.`;
      assertFhirTypeList<ConditionDefinitionPlanComponent>(value, ConditionDefinitionPlanComponent, optErrMsg);
      this.plan = value;
    } else {
      this.plan = undefined;
    }
    return this;
  }

  /**
   * Add the provided ConditionDefinitionPlanComponent value to the `plan` array property.
   *
   * @param value - the `plan` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPlan(value: ConditionDefinitionPlanComponent | undefined): this {
    if (isDefined<ConditionDefinitionPlanComponent>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.plan; Provided element is not an instance of ConditionDefinitionPlanComponent.`;
      assertFhirType<ConditionDefinitionPlanComponent>(value, ConditionDefinitionPlanComponent, optErrMsg);
      this.initPlan();
      this.plan?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `plan` property exists and has a value; `false` otherwise
   */
  public hasPlan(): boolean {
    return isDefinedList<ConditionDefinitionPlanComponent>(this.plan) && this.plan.some((item: ConditionDefinitionPlanComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `plan` property
   */
  private initPlan(): void {
    if(!this.hasPlan()) {
      this.plan = [] as ConditionDefinitionPlanComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ConditionDefinition';
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
      this.subtitle,
      this.status,
      this.experimental,
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.useContext,
      this.jurisdiction,
      this.code,
      this.severity,
      this.bodySite,
      this.stage,
      this.hasSeverity_,
      this.hasBodySite_,
      this.hasStage_,
      this.definition,
      this.observation,
      this.medication,
      this.precondition,
      this.team,
      this.questionnaire,
      this.plan,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConditionDefinition {
    const dest = new ConditionDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConditionDefinition): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.versionAlgorithm = this.versionAlgorithm?.copy() as IDataType;
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    dest.subtitle = this.subtitle?.copy();
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
    dest.code = this.code ? this.code.copy() : null;
    dest.severity = this.severity?.copy();
    dest.bodySite = this.bodySite?.copy();
    dest.stage = this.stage?.copy();
    dest.hasSeverity_ = this.hasSeverity_?.copy();
    dest.hasBodySite_ = this.hasBodySite_?.copy();
    dest.hasStage_ = this.hasStage_?.copy();
    const definitionList = copyListValues<UriType>(this.definition);
    dest.definition = definitionList.length === 0 ? undefined : definitionList;
    const observationList = copyListValues<ConditionDefinitionObservationComponent>(this.observation);
    dest.observation = observationList.length === 0 ? undefined : observationList;
    const medicationList = copyListValues<ConditionDefinitionMedicationComponent>(this.medication);
    dest.medication = medicationList.length === 0 ? undefined : medicationList;
    const preconditionList = copyListValues<ConditionDefinitionPreconditionComponent>(this.precondition);
    dest.precondition = preconditionList.length === 0 ? undefined : preconditionList;
    const teamList = copyListValues<Reference>(this.team);
    dest.team = teamList.length === 0 ? undefined : teamList;
    const questionnaireList = copyListValues<ConditionDefinitionQuestionnaireComponent>(this.questionnaire);
    dest.questionnaire = questionnaireList.length === 0 ? undefined : questionnaireList;
    const planList = copyListValues<ConditionDefinitionPlanComponent>(this.plan);
    dest.plan = planList.length === 0 ? undefined : planList;
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

    if (this.hasSubtitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSubtitleElement(), 'subtitle', jsonObj);
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasSeverity()) {
      setFhirComplexJson(this.getSeverity(), 'severity', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasStage()) {
      setFhirComplexJson(this.getStage(), 'stage', jsonObj);
    }

    if (this.hasHasSeverityElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getHasSeverityElement(), 'hasSeverity', jsonObj);
    }

    if (this.hasHasBodySiteElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getHasBodySiteElement(), 'hasBodySite', jsonObj);
    }

    if (this.hasHasStageElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getHasStageElement(), 'hasStage', jsonObj);
    }

    if (this.hasDefinition()) {
      setFhirPrimitiveListJson(this.getDefinitionElement(), 'definition', jsonObj);
    }

    if (this.hasObservation()) {
      setFhirBackboneElementListJson(this.getObservation(), 'observation', jsonObj);
    }

    if (this.hasMedication()) {
      setFhirBackboneElementListJson(this.getMedication(), 'medication', jsonObj);
    }

    if (this.hasPrecondition()) {
      setFhirBackboneElementListJson(this.getPrecondition(), 'precondition', jsonObj);
    }

    if (this.hasTeam()) {
      setFhirComplexListJson(this.getTeam(), 'team', jsonObj);
    }

    if (this.hasQuestionnaire()) {
      setFhirBackboneElementListJson(this.getQuestionnaire(), 'questionnaire', jsonObj);
    }

    if (this.hasPlan()) {
      setFhirBackboneElementListJson(this.getPlan(), 'plan', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ConditionDefinitionObservationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Observations particularly relevant to this condition
 * - **Definition:** Observations particularly relevant to this condition.
 *
 * @category Data Models: Resource
 * @see [FHIR ConditionDefinition](http://hl7.org/fhir/StructureDefinition/ConditionDefinition)
 */
export class ConditionDefinitionObservationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ConditionDefinitionObservationComponent` JSON to instantiate the ConditionDefinitionObservationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConditionDefinitionObservationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConditionDefinitionObservationComponent
   * @returns ConditionDefinitionObservationComponent data model or undefined for `ConditionDefinitionObservationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConditionDefinitionObservationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConditionDefinitionObservationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConditionDefinitionObservationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    return instance;
  }

  /**
   * ConditionDefinition.observation.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category that is relevant
   * - **Definition:** Category that is relevant.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept | undefined;

  /**
   * ConditionDefinition.observation.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code for relevant Observation
   * - **Definition:** Code for relevant Observation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

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
      const optErrMsg = `Invalid ConditionDefinition.observation.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Code object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.observation.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ConditionDefinition.observation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.code,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConditionDefinitionObservationComponent {
    const dest = new ConditionDefinitionObservationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConditionDefinitionObservationComponent): void {
    super.copyValues(dest);
    dest.category = this.category?.copy();
    dest.code = this.code?.copy();
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

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConditionDefinitionMedicationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Medications particularly relevant for this condition
 * - **Definition:** Medications particularly relevant for this condition.
 *
 * @category Data Models: Resource
 * @see [FHIR ConditionDefinition](http://hl7.org/fhir/StructureDefinition/ConditionDefinition)
 */
export class ConditionDefinitionMedicationComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ConditionDefinitionMedicationComponent` JSON to instantiate the ConditionDefinitionMedicationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConditionDefinitionMedicationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConditionDefinitionMedicationComponent
   * @returns ConditionDefinitionMedicationComponent data model or undefined for `ConditionDefinitionMedicationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConditionDefinitionMedicationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConditionDefinitionMedicationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConditionDefinitionMedicationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCategory(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    return instance;
  }

  /**
   * ConditionDefinition.medication.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category that is relevant
   * - **Definition:** Category that is relevant.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private category?: CodeableConcept | undefined;

  /**
   * ConditionDefinition.medication.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code for relevant Medication
   * - **Definition:** Code for relevant Medication.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

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
      const optErrMsg = `Invalid ConditionDefinition.medication.category; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Code object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.medication.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ConditionDefinition.medication';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.code,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConditionDefinitionMedicationComponent {
    const dest = new ConditionDefinitionMedicationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConditionDefinitionMedicationComponent): void {
    super.copyValues(dest);
    dest.category = this.category?.copy();
    dest.code = this.code?.copy();
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

    if (this.hasCategory()) {
      setFhirComplexJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConditionDefinitionPreconditionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Observation that suggets this condition
 * - **Definition:** An observation that suggests that this condition applies.
 *
 * @category Data Models: Resource
 * @see [FHIR ConditionDefinition](http://hl7.org/fhir/StructureDefinition/ConditionDefinition)
 */
export class ConditionDefinitionPreconditionComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null, code: CodeableConcept | null = null) {
    super();

    this.conditionPreconditionTypeEnum = new ConditionPreconditionTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<ConditionPreconditionTypeEnum>(
      type_,
      ConditionPreconditionTypeEnum,
      this.conditionPreconditionTypeEnum,
      'ConditionDefinition.precondition.type',
    );

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `ConditionDefinitionPreconditionComponent` JSON to instantiate the ConditionDefinitionPreconditionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConditionDefinitionPreconditionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConditionDefinitionPreconditionComponent
   * @returns ConditionDefinitionPreconditionComponent data model or undefined for `ConditionDefinitionPreconditionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConditionDefinitionPreconditionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConditionDefinitionPreconditionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConditionDefinitionPreconditionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = ConditionDefinitionPreconditionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ConditionDefinitionPreconditionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCode(datatype);
      }
    } else {
      instance.setCode(null);
    }

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setValue(value);

    return instance;
  }

  /**
   * FHIR CodeSystem: ConditionPreconditionType
   *
   * @see {@link ConditionPreconditionTypeEnum }
   */
  private readonly conditionPreconditionTypeEnum: ConditionPreconditionTypeEnum;

  /**
   * ConditionDefinition.precondition.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** sensitive | specific
   * - **Definition:** Kind of pre-condition.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ConditionPreconditionTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * ConditionDefinition.precondition.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code for relevant Observation
   * - **Definition:** Code for relevant Observation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * ConditionDefinition.precondition.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ConditionDefinition.precondition.value[x]', ['CodeableConcept','Quantity',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value of Observation
   * - **Definition:** Value of Observation.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Quantity',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ConditionDefinition.precondition.value[x]',[
    'CodeableConcept',
    'Quantity',
  ])
  private value?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConditionPreconditionTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ConditionPreconditionTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ConditionDefinition.precondition.type`;
      assertEnumCodeType<ConditionPreconditionTypeEnum>(enumType, ConditionPreconditionTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ConditionPreconditionTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ConditionPreconditionTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ConditionDefinition.precondition.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.conditionPreconditionTypeEnum);
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
   * @see CodeSystem Enumeration: {@link ConditionPreconditionTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ConditionPreconditionTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.precondition.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.conditionPreconditionTypeEnum);
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
   * @returns the `code` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCode(): CodeableConcept {
    return this.code ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.precondition.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('ConditionDefinition.precondition.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ConditionDefinition.precondition.value[x]')
  public setValue(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
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
    return isDefined<IDataType>(this.value) && !this.value.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else undefined
   */
  public getValueCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for ConditionDefinition.precondition.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else undefined
   */
  public getValueQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for ConditionDefinition.precondition.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ConditionDefinition.precondition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.code,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConditionDefinitionPreconditionComponent {
    const dest = new ConditionDefinitionPreconditionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConditionDefinitionPreconditionComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.code = this.code ? this.code.copy() : null;
    dest.value = this.value?.copy() as IDataType;
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ConditionDefinitionQuestionnaireComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Questionnaire for this condition
 * - **Definition:** Questionnaire for this condition.
 *
 * @category Data Models: Resource
 * @see [FHIR ConditionDefinition](http://hl7.org/fhir/StructureDefinition/ConditionDefinition)
 */
export class ConditionDefinitionQuestionnaireComponent extends BackboneElement implements IBackboneElement {
  constructor(purpose: EnumCodeType | CodeType | fhirCode | null = null, reference: Reference | null = null) {
    super();

    this.conditionQuestionnairePurposeEnum = new ConditionQuestionnairePurposeEnum();

    this.purpose = constructorCodeValueAsEnumCodeType<ConditionQuestionnairePurposeEnum>(
      purpose,
      ConditionQuestionnairePurposeEnum,
      this.conditionQuestionnairePurposeEnum,
      'ConditionDefinition.questionnaire.purpose',
    );

    this.reference = null;
    if (isDefined<Reference>(reference)) {
      this.setReference(reference);
    }
  }

  /**
   * Parse the provided `ConditionDefinitionQuestionnaireComponent` JSON to instantiate the ConditionDefinitionQuestionnaireComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConditionDefinitionQuestionnaireComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConditionDefinitionQuestionnaireComponent
   * @returns ConditionDefinitionQuestionnaireComponent data model or undefined for `ConditionDefinitionQuestionnaireComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConditionDefinitionQuestionnaireComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConditionDefinitionQuestionnaireComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConditionDefinitionQuestionnaireComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'purpose';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setPurpose(null);
      } else {
        instance.setPurposeElement(datatype);
      }
    } else {
      instance.setPurpose(null);
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setReference(null);
      } else {
        instance.setReference(datatype);
      }
    } else {
      instance.setReference(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ConditionQuestionnairePurpose
   *
   * @see {@link ConditionQuestionnairePurposeEnum }
   */
  private readonly conditionQuestionnairePurposeEnum: ConditionQuestionnairePurposeEnum;

  /**
   * ConditionDefinition.questionnaire.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** preadmit | diff-diagnosis | outcome
   * - **Definition:** Use of the questionnaire.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ConditionQuestionnairePurposeEnum }
   */
  private purpose: EnumCodeType | null;

  /**
   * ConditionDefinition.questionnaire.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific Questionnaire
   * - **Definition:** Specific Questionnaire.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Questionnaire',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `purpose` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConditionQuestionnairePurposeEnum }
   */
  public getPurposeEnumType(): EnumCodeType | null {
    return this.purpose;
  }

  /**
   * Assigns the provided EnumCodeType value to the `purpose` property.
   *
   * @param enumType - the `purpose` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConditionQuestionnairePurposeEnum }
   */
  public setPurposeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ConditionDefinition.questionnaire.purpose`;
      assertEnumCodeType<ConditionQuestionnairePurposeEnum>(enumType, ConditionQuestionnairePurposeEnum, errMsgPrefix);
      this.purpose = enumType;
    } else {
      this.purpose = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurposeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.purpose) && !this.purpose.isEmpty() && this.purpose.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `purpose` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConditionQuestionnairePurposeEnum }
   */
  public getPurposeElement(): CodeType | null {
    if (this.purpose === null) {
      return null;
    }
    return this.purpose as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `purpose` property.
   *
   * @param element - the `purpose` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConditionQuestionnairePurposeEnum }
   */
  public setPurposeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ConditionDefinition.questionnaire.purpose; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.purpose = new EnumCodeType(element, this.conditionQuestionnairePurposeEnum);
    } else {
      this.purpose = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurposeElement(): boolean {
    return this.hasPurposeEnumType();
  }

  /**
   * @returns the `purpose` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConditionQuestionnairePurposeEnum }
   */
  public getPurpose(): fhirCode | null {
    if (this.purpose === null) {
      return null;
    }
    return this.purpose.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `purpose` property.
   *
   * @param value - the `purpose` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ConditionQuestionnairePurposeEnum }
   */
  public setPurpose(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ConditionDefinition.questionnaire.purpose (${String(value)})`;
      this.purpose = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.conditionQuestionnairePurposeEnum);
    } else {
      this.purpose = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `purpose` property exists and has a value; `false` otherwise
   */
  public hasPurpose(): boolean {
    return this.hasPurposeEnumType();
  }

  /**
   * @returns the `reference` property value as a Reference object if defined; else an empty Reference object
   */
  public getReference(): Reference {
    return this.reference ?? new Reference();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('ConditionDefinition.questionnaire.reference', ['Questionnaire',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ConditionDefinition.questionnaire.reference', [
    'Questionnaire',
  ])
  public setReference(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ConditionDefinition.questionnaire';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.purpose,
      this.reference,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.purpose, this.reference, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConditionDefinitionQuestionnaireComponent {
    const dest = new ConditionDefinitionQuestionnaireComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConditionDefinitionQuestionnaireComponent): void {
    super.copyValues(dest);
    dest.purpose = this.purpose ? this.purpose.copy() : null;
    dest.reference = this.reference ? this.reference.copy() : null;
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

    if (this.hasPurposeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPurposeElement()!, 'purpose', jsonObj);
    } else {
      jsonObj['purpose'] = null;
    }

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    } else {
      jsonObj['reference'] = null;
    }

    return jsonObj;
  }
}
/**
 * ConditionDefinitionPlanComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Plan that is appropriate
 * - **Definition:** Plan that is appropriate.
 *
 * @category Data Models: Resource
 * @see [FHIR ConditionDefinition](http://hl7.org/fhir/StructureDefinition/ConditionDefinition)
 */
export class ConditionDefinitionPlanComponent extends BackboneElement implements IBackboneElement {
  constructor(reference: Reference | null = null) {
    super();

    this.reference = null;
    if (isDefined<Reference>(reference)) {
      this.setReference(reference);
    }
  }

  /**
   * Parse the provided `ConditionDefinitionPlanComponent` JSON to instantiate the ConditionDefinitionPlanComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ConditionDefinitionPlanComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ConditionDefinitionPlanComponent
   * @returns ConditionDefinitionPlanComponent data model or undefined for `ConditionDefinitionPlanComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ConditionDefinitionPlanComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ConditionDefinitionPlanComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ConditionDefinitionPlanComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setReference(null);
      } else {
        instance.setReference(datatype);
      }
    } else {
      instance.setReference(null);
    }

    return instance;
  }

  /**
   * ConditionDefinition.plan.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use for the plan
   * - **Definition:** Use for the plan.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept | undefined;

  /**
   * ConditionDefinition.plan.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The actual plan
   * - **Definition:** The actual plan.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference: Reference | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid ConditionDefinition.plan.role; Provided element is not an instance of CodeableConcept.`;
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

  /**
   * @returns the `reference` property value as a Reference object if defined; else an empty Reference object
   */
  public getReference(): Reference {
    return this.reference ?? new Reference();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('ConditionDefinition.plan.reference', ['PlanDefinition',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ConditionDefinition.plan.reference', [
    'PlanDefinition',
  ])
  public setReference(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ConditionDefinition.plan';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.role,
      this.reference,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.reference, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ConditionDefinitionPlanComponent {
    const dest = new ConditionDefinitionPlanComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ConditionDefinitionPlanComponent): void {
    super.copyValues(dest);
    dest.role = this.role?.copy();
    dest.reference = this.reference ? this.reference.copy() : null;
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

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    } else {
      jsonObj['reference'] = null;
    }

    return jsonObj;
  }
}
