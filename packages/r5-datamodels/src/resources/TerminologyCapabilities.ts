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
 * TerminologyCapabilities Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
 * StructureDefinition.name: TerminologyCapabilities
 * StructureDefinition.description: A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
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
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  StringType,
  UriType,
  UrlType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  assertIsDefinedList,
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
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CapabilityStatementKindEnum } from '../code-systems/CapabilityStatementKindEnum';
import { CodeSearchSupportEnum } from '../code-systems/CodeSearchSupportEnum';
import { CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, UsageContext } from '../complex-types/complex-datatypes';
import { CodesystemContentModeEnum } from '../code-systems/CodesystemContentModeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * TerminologyCapabilities Class
 *
 * @remarks
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 *
 * **FHIR Specification**
 * - **Short:** A statement of system capabilities
 * - **Definition:** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR TerminologyCapabilities](http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities)
 */
export class TerminologyCapabilities extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, date: DateTimeType | fhirDateTime | null = null, kind: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.capabilityStatementKindEnum = new CapabilityStatementKindEnum();
    this.codeSearchSupportEnum = new CodeSearchSupportEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'TerminologyCapabilities.status',
    );

    this.date = null;
    if (isDefined<DateTimeType | fhirDateTime>(date)) {
      if (date instanceof PrimitiveType) {
        this.setDateElement(date);
      } else {
        this.setDate(date);
      }
    }

    this.kind = constructorCodeValueAsEnumCodeType<CapabilityStatementKindEnum>(
      kind,
      CapabilityStatementKindEnum,
      this.capabilityStatementKindEnum,
      'TerminologyCapabilities.kind',
    );
  }

  /**
   * Parse the provided `TerminologyCapabilities` JSON to instantiate the TerminologyCapabilities data model.
   *
   * @param sourceJson - JSON representing FHIR `TerminologyCapabilities`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TerminologyCapabilities
   * @returns TerminologyCapabilities data model or undefined for `TerminologyCapabilities`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): TerminologyCapabilities | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TerminologyCapabilities';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TerminologyCapabilities();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'TerminologyCapabilities');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = TerminologyCapabilities[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for TerminologyCapabilities`;
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
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setDateElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'kind';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
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

    fieldName = 'software';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TerminologyCapabilitiesSoftwareComponent | undefined = TerminologyCapabilitiesSoftwareComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSoftware(component);
    }

    fieldName = 'implementation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TerminologyCapabilitiesImplementationComponent | undefined = TerminologyCapabilitiesImplementationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setImplementation(component);
    }

    fieldName = 'lockedDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setLockedDateElement(datatype);
    }

    fieldName = 'codeSystem';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TerminologyCapabilitiesCodeSystemComponent | undefined = TerminologyCapabilitiesCodeSystemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCodeSystem(component);
        }
      });
    }

    fieldName = 'expansion';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TerminologyCapabilitiesExpansionComponent | undefined = TerminologyCapabilitiesExpansionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setExpansion(component);
    }

    fieldName = 'codeSearch';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setCodeSearchElement(datatype);
    }

    fieldName = 'validateCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TerminologyCapabilitiesValidateCodeComponent | undefined = TerminologyCapabilitiesValidateCodeComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValidateCode(component);
    }

    fieldName = 'translation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TerminologyCapabilitiesTranslationComponent | undefined = TerminologyCapabilitiesTranslationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTranslation(component);
    }

    fieldName = 'closure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: TerminologyCapabilitiesClosureComponent | undefined = TerminologyCapabilitiesClosureComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setClosure(component);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * TerminologyCapabilities.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this terminology capabilities, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this terminology capabilities when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this terminology capabilities is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the terminology capabilities is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the terminology capabilities to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * TerminologyCapabilities.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the terminology capabilities
   * - **Definition:** A formal identifier that is used to identify this terminology capabilities when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this terminology capabilities outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * TerminologyCapabilities.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the terminology capabilities
   * - **Definition:** The identifier that is used to identify this version of the terminology capabilities when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the terminology capabilities author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different terminology capabilities instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the terminology capabilities with the format [url]|[version]. The version SHOULD NOT contain a \'#\' - see [Business Version](https://hl7.org/fhir/resource.html#bv-format).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * TerminologyCapabilities.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('TerminologyCapabilities.versionAlgorithm[x]', ['string','Coding',]`
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
  @ChoiceDataTypesMeta('TerminologyCapabilities.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * TerminologyCapabilities.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this terminology capabilities (computer friendly)
   * - **Definition:** A natural language name identifying the terminology capabilities. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * TerminologyCapabilities.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this terminology capabilities (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the terminology capabilities.
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
   * TerminologyCapabilities.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this terminology capabilities. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of terminology capabilitiess that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
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
   * TerminologyCapabilities.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this terminology capabilities is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of terminology capabilitiess that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level terminology capabilities.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * TerminologyCapabilities.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the terminology capabilities was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the terminology capabilities changes.
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the terminology capabilities. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date: DateTimeType | null;

  /**
   * TerminologyCapabilities.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher/steward (organization or individual)
   * - **Definition:** The name of the organization or individual responsible for the release and ongoing maintenance of the terminology capabilities.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the terminology capabilities is the organization or individual primarily responsible for the maintenance and upkeep of the terminology capabilities. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the terminology capabilities. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the terminology capabilities.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * TerminologyCapabilities.contact Element
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
   * TerminologyCapabilities.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the terminology capabilities
   * - **Definition:** A free text natural language description of the terminology capabilities from a consumer\'s perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the terminology capabilities as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the terminology capabilities is presumed to be the predominant language in the place the terminology capabilities was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * TerminologyCapabilities.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate terminology capabilities instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * TerminologyCapabilities.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for terminology capabilities (if applicable)
   * - **Definition:** A legal or geographic region in which the terminology capabilities is intended to be used.
   * - **Comment:** It may be possible for the terminology capabilities to be used in jurisdictions other than those for which it was originally designed or intended. DEPRECATION NOTE: For consistency, implementations are encouraged to migrate to using the new \'jurisdiction\' code in the useContext element.  (I.e. useContext.code indicating http://terminology.hl7.org/CodeSystem/usage-context-type#jurisdiction and useContext.valueCodeableConcept indicating the jurisdiction.)
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * TerminologyCapabilities.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this terminology capabilities is defined
   * - **Definition:** Explanation of why this terminology capabilities is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the terminology capabilities. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this terminology capabilities.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * TerminologyCapabilities.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the terminology capabilities and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private copyright?: MarkdownType | undefined;

  /**
   * TerminologyCapabilities.copyrightLabel Element
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
   * FHIR CodeSystem: CapabilityStatementKind
   *
   * @see {@link CapabilityStatementKindEnum }
   */
  private readonly capabilityStatementKindEnum: CapabilityStatementKindEnum;

  /**
   * TerminologyCapabilities.kind Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** instance | capability | requirements
   * - **Definition:** The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
   * - **Requirements:** Allow searching the 3 modes.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link CapabilityStatementKindEnum }
   */
  private kind: EnumCodeType | null;

  /**
   * TerminologyCapabilities.software Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Software that is covered by this terminology capability statement
   * - **Definition:** Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private software?: TerminologyCapabilitiesSoftwareComponent | undefined;

  /**
   * TerminologyCapabilities.implementation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If this describes a specific instance
   * - **Definition:** Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private implementation?: TerminologyCapabilitiesImplementationComponent | undefined;

  /**
   * TerminologyCapabilities.lockedDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether lockedDate is supported
   * - **Definition:** Whether the server supports lockedDate.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private lockedDate?: BooleanType | undefined;

  /**
   * TerminologyCapabilities.codeSystem Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A code system supported by the server
   * - **Definition:** Identifies a code system that is supported by the server. If there is a no code system URL, then this declares the general assumptions a client can make about support for any CodeSystem resource.
   * - **Comment:** The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private codeSystem?: TerminologyCapabilitiesCodeSystemComponent[] | undefined;

  /**
   * TerminologyCapabilities.expansion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the [ValueSet/$expand](https://hl7.org/fhir/valueset-operation-expand.html) operation
   * - **Definition:** Information about the [ValueSet/$expand](https://hl7.org/fhir/valueset-operation-expand.html) operation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expansion?: TerminologyCapabilitiesExpansionComponent | undefined;

  /**
   * FHIR CodeSystem: CodeSearchSupport
   *
   * @see {@link CodeSearchSupportEnum }
   */
  private readonly codeSearchSupportEnum: CodeSearchSupportEnum;

  /**
   * TerminologyCapabilities.codeSearch Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** in-compose | in-expansion | in-compose-or-expansion
   * - **Definition:** The degree to which the server supports the code search parameter on ValueSet, if it is supported.
   * - **Comment:** See notes on the [ValueSet](https://hl7.org/fhir/valueset.html#) resource.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link CodeSearchSupportEnum }
   */
  private codeSearch?: EnumCodeType | undefined;

  /**
   * TerminologyCapabilities.validateCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the [ValueSet/$validate-code](https://hl7.org/fhir/valueset-operation-validate-code.html) operation
   * - **Definition:** Information about the [ValueSet/$validate-code](https://hl7.org/fhir/valueset-operation-validate-code.html) operation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private validateCode?: TerminologyCapabilitiesValidateCodeComponent | undefined;

  /**
   * TerminologyCapabilities.translation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the [ConceptMap/$translate](https://hl7.org/fhir/conceptmap-operation-translate.html) operation
   * - **Definition:** Information about the [ConceptMap/$translate](https://hl7.org/fhir/conceptmap-operation-translate.html) operation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private translation?: TerminologyCapabilitiesTranslationComponent | undefined;

  /**
   * TerminologyCapabilities.closure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about the [ConceptMap/$closure](https://hl7.org/fhir/conceptmap-operation-closure.html) operation
   * - **Definition:** Whether the $closure operation is supported.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private closure?: TerminologyCapabilitiesClosureComponent | undefined;

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
      const optErrMsg = `Invalid TerminologyCapabilities.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.url (${String(value)})`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('TerminologyCapabilities.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('TerminologyCapabilities.versionAlgorithm[x]')
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
        `DataType mismatch for TerminologyCapabilities.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for TerminologyCapabilities.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
      const optErrMsg = `Invalid TerminologyCapabilities.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.name (${String(value)})`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.title (${String(value)})`;
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
    assertIsDefined<EnumCodeType>(enumType, `TerminologyCapabilities.status is required`);
    const errMsgPrefix = `Invalid TerminologyCapabilities.status`;
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
    assertIsDefined<CodeType>(element, `TerminologyCapabilities.status is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `TerminologyCapabilities.status is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.status (${String(value)})`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.experimental (${String(value)})`;
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
   * @returns the `date` property value as a DateTimeType object if defined; else null
   */
  public getDateElement(): DateTimeType | null {
    return this.date;
  }

  /**
   * Assigns the provided PrimitiveType value to the `date` property.
   *
   * @param element - the `date` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDateElement(element: DateTimeType): this {
    assertIsDefined<DateTimeType>(element, `TerminologyCapabilities.date is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.date; Provided value is not an instance of DateTimeType.`;
    assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
    this.date = element;
    return this;
  }

  /**
   * @returns `true` if the `date` property exists and has a value; `false` otherwise
   */
  public hasDateElement(): boolean {
    return isDefined<DateTimeType>(this.date) && !this.date.isEmpty();
  }

  /**
   * @returns the `date` property value as a fhirDateTime if defined; else null
   */
  public getDate(): fhirDateTime | null {
    if (this.date?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.date.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `date` property.
   *
   * @param value - the `date` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDate(value: fhirDateTime): this {
    assertIsDefined<fhirDateTime>(value, `TerminologyCapabilities.date is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.date (${String(value)})`;
    this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
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
      const optErrMsg = `Invalid TerminologyCapabilities.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.description (${String(value)})`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.copyrightLabel; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.copyrightLabel (${String(value)})`;
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
   * @returns the `kind` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link CapabilityStatementKindEnum }
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
   * @see CodeSystem Enumeration: {@link CapabilityStatementKindEnum }
   */
  public setKindEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `TerminologyCapabilities.kind is required`);
    const errMsgPrefix = `Invalid TerminologyCapabilities.kind`;
    assertEnumCodeType<CapabilityStatementKindEnum>(enumType, CapabilityStatementKindEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link CapabilityStatementKindEnum }
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
   * @see CodeSystem Enumeration: {@link CapabilityStatementKindEnum }
   */
  public setKindElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `TerminologyCapabilities.kind is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.kind; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.kind = new EnumCodeType(element, this.capabilityStatementKindEnum);
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
   * @see CodeSystem Enumeration: {@link CapabilityStatementKindEnum }
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
   * @see CodeSystem Enumeration: {@link CapabilityStatementKindEnum }
   */
  public setKind(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `TerminologyCapabilities.kind is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.kind (${String(value)})`;
    this.kind = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.capabilityStatementKindEnum);
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKind(): boolean {
    return this.hasKindEnumType();
  }

  /**
   * @returns the `software` property value as a TerminologyCapabilitiesSoftwareComponent object if defined; else an empty TerminologyCapabilitiesSoftwareComponent object
   */
  public getSoftware(): TerminologyCapabilitiesSoftwareComponent {
    return this.software ?? new TerminologyCapabilitiesSoftwareComponent();
  }

  /**
   * Assigns the provided Software object value to the `software` property.
   *
   * @param value - the `software` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSoftware(value: TerminologyCapabilitiesSoftwareComponent | undefined): this {
    if (isDefined<TerminologyCapabilitiesSoftwareComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.software; Provided element is not an instance of TerminologyCapabilitiesSoftwareComponent.`;
      assertFhirType<TerminologyCapabilitiesSoftwareComponent>(value, TerminologyCapabilitiesSoftwareComponent, optErrMsg);
      this.software = value;
    } else {
      this.software = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `software` property exists and has a value; `false` otherwise
   */
  public hasSoftware(): boolean {
    return isDefined<TerminologyCapabilitiesSoftwareComponent>(this.software) && !this.software.isEmpty();
  }

  /**
   * @returns the `implementation` property value as a TerminologyCapabilitiesImplementationComponent object if defined; else an empty TerminologyCapabilitiesImplementationComponent object
   */
  public getImplementation(): TerminologyCapabilitiesImplementationComponent {
    return this.implementation ?? new TerminologyCapabilitiesImplementationComponent();
  }

  /**
   * Assigns the provided Implementation object value to the `implementation` property.
   *
   * @param value - the `implementation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setImplementation(value: TerminologyCapabilitiesImplementationComponent | undefined): this {
    if (isDefined<TerminologyCapabilitiesImplementationComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.implementation; Provided element is not an instance of TerminologyCapabilitiesImplementationComponent.`;
      assertFhirType<TerminologyCapabilitiesImplementationComponent>(value, TerminologyCapabilitiesImplementationComponent, optErrMsg);
      this.implementation = value;
    } else {
      this.implementation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `implementation` property exists and has a value; `false` otherwise
   */
  public hasImplementation(): boolean {
    return isDefined<TerminologyCapabilitiesImplementationComponent>(this.implementation) && !this.implementation.isEmpty();
  }

  /**
   * @returns the `lockedDate` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getLockedDateElement(): BooleanType {
    return this.lockedDate ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `lockedDate` property.
   *
   * @param element - the `lockedDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLockedDateElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.lockedDate; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.lockedDate = element;
    } else {
      this.lockedDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lockedDate` property exists and has a value; `false` otherwise
   */
  public hasLockedDateElement(): boolean {
    return isDefined<BooleanType>(this.lockedDate) && !this.lockedDate.isEmpty();
  }

  /**
   * @returns the `lockedDate` property value as a fhirBoolean if defined; else undefined
   */
  public getLockedDate(): fhirBoolean | undefined {
    return this.lockedDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `lockedDate` property.
   *
   * @param value - the `lockedDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLockedDate(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.lockedDate (${String(value)})`;
      this.lockedDate = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.lockedDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `lockedDate` property exists and has a value; `false` otherwise
   */
  public hasLockedDate(): boolean {
    return this.hasLockedDateElement();
  }

  /**
   * @returns the `codeSystem` property value as a TerminologyCapabilitiesCodeSystemComponent array
   */
  public getCodeSystem(): TerminologyCapabilitiesCodeSystemComponent[] {
    return this.codeSystem ?? ([] as TerminologyCapabilitiesCodeSystemComponent[]);
  }

  /**
   * Assigns the provided TerminologyCapabilitiesCodeSystemComponent array value to the `codeSystem` property.
   *
   * @param value - the `codeSystem` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCodeSystem(value: TerminologyCapabilitiesCodeSystemComponent[] | undefined): this {
    if (isDefinedList<TerminologyCapabilitiesCodeSystemComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem; Provided value array has an element that is not an instance of TerminologyCapabilitiesCodeSystemComponent.`;
      assertFhirTypeList<TerminologyCapabilitiesCodeSystemComponent>(value, TerminologyCapabilitiesCodeSystemComponent, optErrMsg);
      this.codeSystem = value;
    } else {
      this.codeSystem = undefined;
    }
    return this;
  }

  /**
   * Add the provided TerminologyCapabilitiesCodeSystemComponent value to the `codeSystem` array property.
   *
   * @param value - the `codeSystem` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCodeSystem(value: TerminologyCapabilitiesCodeSystemComponent | undefined): this {
    if (isDefined<TerminologyCapabilitiesCodeSystemComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem; Provided element is not an instance of TerminologyCapabilitiesCodeSystemComponent.`;
      assertFhirType<TerminologyCapabilitiesCodeSystemComponent>(value, TerminologyCapabilitiesCodeSystemComponent, optErrMsg);
      this.initCodeSystem();
      this.codeSystem?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `codeSystem` property exists and has a value; `false` otherwise
   */
  public hasCodeSystem(): boolean {
    return isDefinedList<TerminologyCapabilitiesCodeSystemComponent>(this.codeSystem) && this.codeSystem.some((item: TerminologyCapabilitiesCodeSystemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `codeSystem` property
   */
  private initCodeSystem(): void {
    if(!this.hasCodeSystem()) {
      this.codeSystem = [] as TerminologyCapabilitiesCodeSystemComponent[];
    }
  }

  /**
   * @returns the `expansion` property value as a TerminologyCapabilitiesExpansionComponent object if defined; else an empty TerminologyCapabilitiesExpansionComponent object
   */
  public getExpansion(): TerminologyCapabilitiesExpansionComponent {
    return this.expansion ?? new TerminologyCapabilitiesExpansionComponent();
  }

  /**
   * Assigns the provided Expansion object value to the `expansion` property.
   *
   * @param value - the `expansion` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExpansion(value: TerminologyCapabilitiesExpansionComponent | undefined): this {
    if (isDefined<TerminologyCapabilitiesExpansionComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion; Provided element is not an instance of TerminologyCapabilitiesExpansionComponent.`;
      assertFhirType<TerminologyCapabilitiesExpansionComponent>(value, TerminologyCapabilitiesExpansionComponent, optErrMsg);
      this.expansion = value;
    } else {
      this.expansion = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expansion` property exists and has a value; `false` otherwise
   */
  public hasExpansion(): boolean {
    return isDefined<TerminologyCapabilitiesExpansionComponent>(this.expansion) && !this.expansion.isEmpty();
  }

  /**
   * @returns the `codeSearch` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link CodeSearchSupportEnum }
   */
  public getCodeSearchEnumType(): EnumCodeType | undefined {
    return this.codeSearch;
  }

  /**
   * Assigns the provided EnumCodeType value to the `codeSearch` property.
   *
   * @param enumType - the `codeSearch` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link CodeSearchSupportEnum }
   */
  public setCodeSearchEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid TerminologyCapabilities.codeSearch';
      assertEnumCodeType<CodeSearchSupportEnum>(enumType, CodeSearchSupportEnum, errMsgPrefix);
      this.codeSearch = enumType;
    } else {
      this.codeSearch = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `codeSearch` property exists and has a value; `false` otherwise
   */
  public hasCodeSearchEnumType(): boolean {
    return isDefined<EnumCodeType>(this.codeSearch) && !this.codeSearch.isEmpty() && this.codeSearch.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `codeSearch` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link CodeSearchSupportEnum }
   */
  public getCodeSearchElement(): CodeType | undefined {
    if (this.codeSearch === undefined) {
      return undefined;
    }
    return this.codeSearch as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `codeSearch` property.
   *
   * @param element - the `codeSearch` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link CodeSearchSupportEnum }
   */
  public setCodeSearchElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSearch; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.codeSearch = new EnumCodeType(element, this.codeSearchSupportEnum);
    } else {
      this.codeSearch = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `codeSearch` property exists and has a value; `false` otherwise
   */
  public hasCodeSearchElement(): boolean {
    return this.hasCodeSearchEnumType();
  }

  /**
   * @returns the `codeSearch` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link CodeSearchSupportEnum }
   */
  public getCodeSearch(): fhirCode | undefined {
    if (this.codeSearch === undefined) {
      return undefined;
    }
    return this.codeSearch.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `codeSearch` property.
   *
   * @param value - the `codeSearch` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link CodeSearchSupportEnum }
   */
  public setCodeSearch(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSearch; Provided value is not an instance of fhirCode.`;
      this.codeSearch = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.codeSearchSupportEnum);
    } else {
      this.codeSearch = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `codeSearch` property exists and has a value; `false` otherwise
   */
  public hasCodeSearch(): boolean {
    return this.hasCodeSearchEnumType();
  }

  /**
   * @returns the `validateCode` property value as a TerminologyCapabilitiesValidateCodeComponent object if defined; else an empty TerminologyCapabilitiesValidateCodeComponent object
   */
  public getValidateCode(): TerminologyCapabilitiesValidateCodeComponent {
    return this.validateCode ?? new TerminologyCapabilitiesValidateCodeComponent();
  }

  /**
   * Assigns the provided ValidateCode object value to the `validateCode` property.
   *
   * @param value - the `validateCode` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setValidateCode(value: TerminologyCapabilitiesValidateCodeComponent | undefined): this {
    if (isDefined<TerminologyCapabilitiesValidateCodeComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.validateCode; Provided element is not an instance of TerminologyCapabilitiesValidateCodeComponent.`;
      assertFhirType<TerminologyCapabilitiesValidateCodeComponent>(value, TerminologyCapabilitiesValidateCodeComponent, optErrMsg);
      this.validateCode = value;
    } else {
      this.validateCode = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validateCode` property exists and has a value; `false` otherwise
   */
  public hasValidateCode(): boolean {
    return isDefined<TerminologyCapabilitiesValidateCodeComponent>(this.validateCode) && !this.validateCode.isEmpty();
  }

  /**
   * @returns the `translation` property value as a TerminologyCapabilitiesTranslationComponent object if defined; else an empty TerminologyCapabilitiesTranslationComponent object
   */
  public getTranslation(): TerminologyCapabilitiesTranslationComponent {
    return this.translation ?? new TerminologyCapabilitiesTranslationComponent();
  }

  /**
   * Assigns the provided Translation object value to the `translation` property.
   *
   * @param value - the `translation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTranslation(value: TerminologyCapabilitiesTranslationComponent | undefined): this {
    if (isDefined<TerminologyCapabilitiesTranslationComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.translation; Provided element is not an instance of TerminologyCapabilitiesTranslationComponent.`;
      assertFhirType<TerminologyCapabilitiesTranslationComponent>(value, TerminologyCapabilitiesTranslationComponent, optErrMsg);
      this.translation = value;
    } else {
      this.translation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `translation` property exists and has a value; `false` otherwise
   */
  public hasTranslation(): boolean {
    return isDefined<TerminologyCapabilitiesTranslationComponent>(this.translation) && !this.translation.isEmpty();
  }

  /**
   * @returns the `closure` property value as a TerminologyCapabilitiesClosureComponent object if defined; else an empty TerminologyCapabilitiesClosureComponent object
   */
  public getClosure(): TerminologyCapabilitiesClosureComponent {
    return this.closure ?? new TerminologyCapabilitiesClosureComponent();
  }

  /**
   * Assigns the provided Closure object value to the `closure` property.
   *
   * @param value - the `closure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClosure(value: TerminologyCapabilitiesClosureComponent | undefined): this {
    if (isDefined<TerminologyCapabilitiesClosureComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.closure; Provided element is not an instance of TerminologyCapabilitiesClosureComponent.`;
      assertFhirType<TerminologyCapabilitiesClosureComponent>(value, TerminologyCapabilitiesClosureComponent, optErrMsg);
      this.closure = value;
    } else {
      this.closure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `closure` property exists and has a value; `false` otherwise
   */
  public hasClosure(): boolean {
    return isDefined<TerminologyCapabilitiesClosureComponent>(this.closure) && !this.closure.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TerminologyCapabilities';
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
      this.kind,
      this.software,
      this.implementation,
      this.lockedDate,
      this.codeSystem,
      this.expansion,
      this.codeSearch,
      this.validateCode,
      this.translation,
      this.closure,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TerminologyCapabilities {
    const dest = new TerminologyCapabilities();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TerminologyCapabilities): void {
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
    dest.date = this.date ? this.date.copy() : null;
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
    dest.kind = this.kind ? this.kind.copy() : null;
    dest.software = this.software?.copy();
    dest.implementation = this.implementation?.copy();
    dest.lockedDate = this.lockedDate?.copy();
    const codeSystemList = copyListValues<TerminologyCapabilitiesCodeSystemComponent>(this.codeSystem);
    dest.codeSystem = codeSystemList.length === 0 ? undefined : codeSystemList;
    dest.expansion = this.expansion?.copy();
    dest.codeSearch = this.codeSearch?.copy();
    dest.validateCode = this.validateCode?.copy();
    dest.translation = this.translation?.copy();
    dest.closure = this.closure?.copy();
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
      missingReqdProperties.push(`TerminologyCapabilities.status`);
    }

    if (this.hasExperimentalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExperimentalElement(), 'experimental', jsonObj);
    }

    if (this.hasDateElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement()!, 'date', jsonObj);
    } else {
      missingReqdProperties.push(`TerminologyCapabilities.date`);
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

    if (this.hasKindElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getKindElement()!, 'kind', jsonObj);
    } else {
      missingReqdProperties.push(`TerminologyCapabilities.kind`);
    }

    if (this.hasSoftware()) {
      setFhirBackboneElementJson(this.getSoftware(), 'software', jsonObj);
    }

    if (this.hasImplementation()) {
      setFhirBackboneElementJson(this.getImplementation(), 'implementation', jsonObj);
    }

    if (this.hasLockedDateElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getLockedDateElement(), 'lockedDate', jsonObj);
    }

    if (this.hasCodeSystem()) {
      setFhirBackboneElementListJson(this.getCodeSystem(), 'codeSystem', jsonObj);
    }

    if (this.hasExpansion()) {
      setFhirBackboneElementJson(this.getExpansion(), 'expansion', jsonObj);
    }

    if (this.hasCodeSearchElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeSearchElement()!, 'codeSearch', jsonObj);
    }

    if (this.hasValidateCode()) {
      setFhirBackboneElementJson(this.getValidateCode(), 'validateCode', jsonObj);
    }

    if (this.hasTranslation()) {
      setFhirBackboneElementJson(this.getTranslation(), 'translation', jsonObj);
    }

    if (this.hasClosure()) {
      setFhirBackboneElementJson(this.getClosure(), 'closure', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * TerminologyCapabilitiesSoftwareComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Software that is covered by this terminology capability statement
 * - **Definition:** Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
 *
 * @category Data Models: Resource
 * @see [FHIR TerminologyCapabilities](http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities)
 */
export class TerminologyCapabilitiesSoftwareComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `TerminologyCapabilitiesSoftwareComponent` JSON to instantiate the TerminologyCapabilitiesSoftwareComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TerminologyCapabilitiesSoftwareComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TerminologyCapabilitiesSoftwareComponent
   * @returns TerminologyCapabilitiesSoftwareComponent data model or undefined for `TerminologyCapabilitiesSoftwareComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TerminologyCapabilitiesSoftwareComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TerminologyCapabilitiesSoftwareComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TerminologyCapabilitiesSoftwareComponent();

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
   * TerminologyCapabilities.software.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A name the software is known by
   * - **Definition:** Name the software is known by.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * TerminologyCapabilities.software.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Version covered by this statement
   * - **Definition:** The version identifier for the software covered by this statement.
   * - **Comment:** If possible, a version should be specified, as statements are likely to be different for different versions of software.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

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
    assertIsDefined<StringType>(element, `TerminologyCapabilities.software.name is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.software.name; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `TerminologyCapabilities.software.name is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.software.name (${String(value)})`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.software.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid TerminologyCapabilities.software.version (${String(value)})`;
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
    return 'TerminologyCapabilities.software';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.version,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TerminologyCapabilitiesSoftwareComponent {
    const dest = new TerminologyCapabilitiesSoftwareComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TerminologyCapabilitiesSoftwareComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
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

    if (this.hasNameElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`TerminologyCapabilities.software.name`);
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
 * TerminologyCapabilitiesImplementationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** If this describes a specific instance
 * - **Definition:** Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 *
 * @category Data Models: Resource
 * @see [FHIR TerminologyCapabilities](http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities)
 */
export class TerminologyCapabilitiesImplementationComponent extends BackboneElement implements IBackboneElement {
  constructor(description: StringType | fhirString | null = null) {
    super();

    this.description = null;
    if (isDefined<StringType | fhirString>(description)) {
      if (description instanceof PrimitiveType) {
        this.setDescriptionElement(description);
      } else {
        this.setDescription(description);
      }
    }
  }

  /**
   * Parse the provided `TerminologyCapabilitiesImplementationComponent` JSON to instantiate the TerminologyCapabilitiesImplementationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TerminologyCapabilitiesImplementationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TerminologyCapabilitiesImplementationComponent
   * @returns TerminologyCapabilitiesImplementationComponent data model or undefined for `TerminologyCapabilitiesImplementationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TerminologyCapabilitiesImplementationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TerminologyCapabilitiesImplementationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TerminologyCapabilitiesImplementationComponent();

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
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setDescriptionElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UrlType | undefined = fhirParser.parseUrlType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * TerminologyCapabilities.implementation.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes this specific instance
   * - **Definition:** Information about the specific installation that this terminology capability statement relates to.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description: StringType | null;

  /**
   * TerminologyCapabilities.implementation.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Base URL for the implementation
   * - **Definition:** An absolute base URL for the implementation.
   * - **FHIR Type:** `url`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UrlType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `description` property value as a StringType object if defined; else null
   */
  public getDescriptionElement(): StringType | null {
    return this.description;
  }

  /**
   * Assigns the provided PrimitiveType value to the `description` property.
   *
   * @param element - the `description` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionElement(element: StringType): this {
    assertIsDefined<StringType>(element, `TerminologyCapabilities.implementation.description is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.implementation.description; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.description = element;
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescriptionElement(): boolean {
    return isDefined<StringType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirString if defined; else null
   */
  public getDescription(): fhirString | null {
    if (this.description?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.description.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `description` property.
   *
   * @param value - the `description` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescription(value: fhirString): this {
    assertIsDefined<fhirString>(value, `TerminologyCapabilities.implementation.description is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.implementation.description (${String(value)})`;
    this.description = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescription(): boolean {
    return this.hasDescriptionElement();
  }

  /**
   * @returns the `url` property value as a UrlType object if defined; else an empty UrlType object
   */
  public getUrlElement(): UrlType {
    return this.url ?? new UrlType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: UrlType | undefined): this {
    if (isDefined<UrlType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.implementation.url; Provided element is not an instance of UrlType.`;
      assertFhirType<UrlType>(element, UrlType, optErrMsg);
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
    return isDefined<UrlType>(this.url) && !this.url.isEmpty();
  }

  /**
   * @returns the `url` property value as a fhirUrl if defined; else undefined
   */
  public getUrl(): fhirUrl | undefined {
    return this.url?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `url` property.
   *
   * @param value - the `url` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrl(value: fhirUrl | undefined): this {
    if (isDefined<fhirUrl>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.implementation.url (${String(value)})`;
      this.url = new UrlType(parseFhirPrimitiveData(value, fhirUrlSchema, optErrMsg));
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
    return 'TerminologyCapabilities.implementation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.url,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TerminologyCapabilitiesImplementationComponent {
    const dest = new TerminologyCapabilitiesImplementationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TerminologyCapabilitiesImplementationComponent): void {
    super.copyValues(dest);
    dest.description = this.description ? this.description.copy() : null;
    dest.url = this.url?.copy();
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement()!, 'description', jsonObj);
    } else {
      missingReqdProperties.push(`TerminologyCapabilities.implementation.description`);
    }

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUrl>(this.getUrlElement(), 'url', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * TerminologyCapabilitiesCodeSystemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A code system supported by the server
 * - **Definition:** Identifies a code system that is supported by the server. If there is a no code system URL, then this declares the general assumptions a client can make about support for any CodeSystem resource.
 * - **Comment:** The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
 *
 * @category Data Models: Resource
 * @see [FHIR TerminologyCapabilities](http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities)
 */
export class TerminologyCapabilitiesCodeSystemComponent extends BackboneElement implements IBackboneElement {
  constructor(content: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.codesystemContentModeEnum = new CodesystemContentModeEnum();

    this.content = constructorCodeValueAsEnumCodeType<CodesystemContentModeEnum>(
      content,
      CodesystemContentModeEnum,
      this.codesystemContentModeEnum,
      'TerminologyCapabilities.codeSystem.content',
    );
  }

  /**
   * Parse the provided `TerminologyCapabilitiesCodeSystemComponent` JSON to instantiate the TerminologyCapabilitiesCodeSystemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TerminologyCapabilitiesCodeSystemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TerminologyCapabilitiesCodeSystemComponent
   * @returns TerminologyCapabilitiesCodeSystemComponent data model or undefined for `TerminologyCapabilitiesCodeSystemComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TerminologyCapabilitiesCodeSystemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TerminologyCapabilitiesCodeSystemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TerminologyCapabilitiesCodeSystemComponent();

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
      instance.setUriElement(datatype);
    }

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TerminologyCapabilitiesCodeSystemVersionComponent | undefined = TerminologyCapabilitiesCodeSystemVersionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addVersion(component);
        }
      });
    }

    fieldName = 'content';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setContentElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'subsumption';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setSubsumptionElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * TerminologyCapabilities.codeSystem.uri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for the code system, represented as a URI
   * - **Definition:** Canonical identifier for the code system, represented as a URI.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CodeSystem',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private uri?: CanonicalType | undefined;

  /**
   * TerminologyCapabilities.codeSystem.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Version of Code System supported
   * - **Definition:** For the code system, a list of versions that are supported by the server.
   * - **Comment:** Language translations might not be available for all codes.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private version?: TerminologyCapabilitiesCodeSystemVersionComponent[] | undefined;

  /**
   * FHIR CodeSystem: CodesystemContentMode
   *
   * @see {@link CodesystemContentModeEnum }
   */
  private readonly codesystemContentModeEnum: CodesystemContentModeEnum;

  /**
   * TerminologyCapabilities.codeSystem.content Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** not-present | example | fragment | complete | supplement
   * - **Definition:** The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link CodesystemContentModeEnum }
   */
  private content: EnumCodeType | null;

  /**
   * TerminologyCapabilities.codeSystem.subsumption Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether subsumption is supported
   * - **Definition:** True if subsumption is supported for this version of the code system.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subsumption?: BooleanType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `uri` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getUriElement(): CanonicalType {
    return this.uri ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `uri` property.
   *
   * @param element - the `uri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUriElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.uri; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.uri = element;
    } else {
      this.uri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `uri` property exists and has a value; `false` otherwise
   */
  public hasUriElement(): boolean {
    return isDefined<CanonicalType>(this.uri) && !this.uri.isEmpty();
  }

  /**
   * @returns the `uri` property value as a fhirCanonical if defined; else undefined
   */
  public getUri(): fhirCanonical | undefined {
    return this.uri?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `uri` property.
   *
   * @param value - the `uri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUri(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.uri (${String(value)})`;
      this.uri = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.uri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `uri` property exists and has a value; `false` otherwise
   */
  public hasUri(): boolean {
    return this.hasUriElement();
  }

  /**
   * @returns the `version` property value as a TerminologyCapabilitiesCodeSystemVersionComponent array
   */
  public getVersion(): TerminologyCapabilitiesCodeSystemVersionComponent[] {
    return this.version ?? ([] as TerminologyCapabilitiesCodeSystemVersionComponent[]);
  }

  /**
   * Assigns the provided TerminologyCapabilitiesCodeSystemVersionComponent array value to the `version` property.
   *
   * @param value - the `version` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setVersion(value: TerminologyCapabilitiesCodeSystemVersionComponent[] | undefined): this {
    if (isDefinedList<TerminologyCapabilitiesCodeSystemVersionComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version; Provided value array has an element that is not an instance of TerminologyCapabilitiesCodeSystemVersionComponent.`;
      assertFhirTypeList<TerminologyCapabilitiesCodeSystemVersionComponent>(value, TerminologyCapabilitiesCodeSystemVersionComponent, optErrMsg);
      this.version = value;
    } else {
      this.version = undefined;
    }
    return this;
  }

  /**
   * Add the provided TerminologyCapabilitiesCodeSystemVersionComponent value to the `version` array property.
   *
   * @param value - the `version` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addVersion(value: TerminologyCapabilitiesCodeSystemVersionComponent | undefined): this {
    if (isDefined<TerminologyCapabilitiesCodeSystemVersionComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version; Provided element is not an instance of TerminologyCapabilitiesCodeSystemVersionComponent.`;
      assertFhirType<TerminologyCapabilitiesCodeSystemVersionComponent>(value, TerminologyCapabilitiesCodeSystemVersionComponent, optErrMsg);
      this.initVersion();
      this.version?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  public hasVersion(): boolean {
    return isDefinedList<TerminologyCapabilitiesCodeSystemVersionComponent>(this.version) && this.version.some((item: TerminologyCapabilitiesCodeSystemVersionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `version` property
   */
  private initVersion(): void {
    if(!this.hasVersion()) {
      this.version = [] as TerminologyCapabilitiesCodeSystemVersionComponent[];
    }
  }

  /**
   * @returns the `content` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link CodesystemContentModeEnum }
   */
  public getContentEnumType(): EnumCodeType | null {
    return this.content;
  }

  /**
   * Assigns the provided EnumCodeType value to the `content` property.
   *
   * @param enumType - the `content` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link CodesystemContentModeEnum }
   */
  public setContentEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `TerminologyCapabilities.codeSystem.content is required`);
    const errMsgPrefix = `Invalid TerminologyCapabilities.codeSystem.content`;
    assertEnumCodeType<CodesystemContentModeEnum>(enumType, CodesystemContentModeEnum, errMsgPrefix);
    this.content = enumType;
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContentEnumType(): boolean {
    return isDefined<EnumCodeType>(this.content) && !this.content.isEmpty() && this.content.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `content` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link CodesystemContentModeEnum }
   */
  public getContentElement(): CodeType | null {
    if (this.content === null) {
      return null;
    }
    return this.content as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `content` property.
   *
   * @param element - the `content` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link CodesystemContentModeEnum }
   */
  public setContentElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `TerminologyCapabilities.codeSystem.content is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.content; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.content = new EnumCodeType(element, this.codesystemContentModeEnum);
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContentElement(): boolean {
    return this.hasContentEnumType();
  }

  /**
   * @returns the `content` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link CodesystemContentModeEnum }
   */
  public getContent(): fhirCode | null {
    if (this.content === null) {
      return null;
    }
    return this.content.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `content` property.
   *
   * @param value - the `content` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link CodesystemContentModeEnum }
   */
  public setContent(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `TerminologyCapabilities.codeSystem.content is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.content (${String(value)})`;
    this.content = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.codesystemContentModeEnum);
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return this.hasContentEnumType();
  }

  /**
   * @returns the `subsumption` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getSubsumptionElement(): BooleanType {
    return this.subsumption ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `subsumption` property.
   *
   * @param element - the `subsumption` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubsumptionElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.subsumption; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.subsumption = element;
    } else {
      this.subsumption = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subsumption` property exists and has a value; `false` otherwise
   */
  public hasSubsumptionElement(): boolean {
    return isDefined<BooleanType>(this.subsumption) && !this.subsumption.isEmpty();
  }

  /**
   * @returns the `subsumption` property value as a fhirBoolean if defined; else undefined
   */
  public getSubsumption(): fhirBoolean | undefined {
    return this.subsumption?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `subsumption` property.
   *
   * @param value - the `subsumption` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubsumption(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.subsumption (${String(value)})`;
      this.subsumption = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.subsumption = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subsumption` property exists and has a value; `false` otherwise
   */
  public hasSubsumption(): boolean {
    return this.hasSubsumptionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TerminologyCapabilities.codeSystem';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.uri,
      this.version,
      this.content,
      this.subsumption,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TerminologyCapabilitiesCodeSystemComponent {
    const dest = new TerminologyCapabilitiesCodeSystemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TerminologyCapabilitiesCodeSystemComponent): void {
    super.copyValues(dest);
    dest.uri = this.uri?.copy();
    const versionList = copyListValues<TerminologyCapabilitiesCodeSystemVersionComponent>(this.version);
    dest.version = versionList.length === 0 ? undefined : versionList;
    dest.content = this.content ? this.content.copy() : null;
    dest.subsumption = this.subsumption?.copy();
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
      setFhirPrimitiveJson<fhirCanonical>(this.getUriElement(), 'uri', jsonObj);
    }

    if (this.hasVersion()) {
      setFhirBackboneElementListJson(this.getVersion(), 'version', jsonObj);
    }

    if (this.hasContentElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getContentElement()!, 'content', jsonObj);
    } else {
      missingReqdProperties.push(`TerminologyCapabilities.codeSystem.content`);
    }

    if (this.hasSubsumptionElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getSubsumptionElement(), 'subsumption', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * TerminologyCapabilitiesCodeSystemVersionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Version of Code System supported
 * - **Definition:** For the code system, a list of versions that are supported by the server.
 * - **Comment:** Language translations might not be available for all codes.
 *
 * @category Data Models: Resource
 * @see [FHIR TerminologyCapabilities](http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities)
 */
export class TerminologyCapabilitiesCodeSystemVersionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TerminologyCapabilitiesCodeSystemVersionComponent` JSON to instantiate the TerminologyCapabilitiesCodeSystemVersionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TerminologyCapabilitiesCodeSystemVersionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TerminologyCapabilitiesCodeSystemVersionComponent
   * @returns TerminologyCapabilitiesCodeSystemVersionComponent data model or undefined for `TerminologyCapabilitiesCodeSystemVersionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TerminologyCapabilitiesCodeSystemVersionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TerminologyCapabilitiesCodeSystemVersionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TerminologyCapabilitiesCodeSystemVersionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCodeElement(datatype);
    }

    fieldName = 'isDefault';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setIsDefaultElement(datatype);
    }

    fieldName = 'compositional';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setCompositionalElement(datatype);
    }

    fieldName = 'language';
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
          instance.addLanguageElement(datatype);
        }
      });
    }

    fieldName = 'filter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TerminologyCapabilitiesCodeSystemVersionFilterComponent | undefined = TerminologyCapabilitiesCodeSystemVersionFilterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addFilter(component);
        }
      });
    }

    fieldName = 'property';
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
          instance.addPropertyElement(datatype);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * TerminologyCapabilities.codeSystem.version.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Version identifier for this version
   * - **Definition:** For version-less code systems, there should be a single version with no identifier.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: StringType | undefined;

  /**
   * TerminologyCapabilities.codeSystem.version.isDefault Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If this is the default version for this code system
   * - **Definition:** If this is the default version for this code system.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private isDefault?: BooleanType | undefined;

  /**
   * TerminologyCapabilities.codeSystem.version.compositional Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If compositional grammar is supported
   * - **Definition:** If the compositional grammar defined by the code system is supported.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private compositional?: BooleanType | undefined;

  /**
   * TerminologyCapabilities.codeSystem.version.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Language Displays supported
   * - **Definition:** Language Displays supported.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language?: CodeType[] | undefined;

  /**
   * TerminologyCapabilities.codeSystem.version.filter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Filter Properties supported
   * - **Definition:** Filter Properties supported.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private filter?: TerminologyCapabilitiesCodeSystemVersionFilterComponent[] | undefined;

  /**
   * TerminologyCapabilities.codeSystem.version.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Properties supported for $lookup
   * - **Definition:** Properties supported for $lookup.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private property?: CodeType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a StringType object if defined; else an empty StringType object
   */
  public getCodeElement(): StringType {
    return this.code ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCodeElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.code; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.code = element;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeElement(): boolean {
    return isDefined<StringType>(this.code) && !this.code.isEmpty();
  }

  /**
   * @returns the `code` property value as a fhirString if defined; else undefined
   */
  public getCode(): fhirString | undefined {
    return this.code?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `code` property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCode(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.code (${String(value)})`;
      this.code = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return this.hasCodeElement();
  }

  /**
   * @returns the `isDefault` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getIsDefaultElement(): BooleanType {
    return this.isDefault ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `isDefault` property.
   *
   * @param element - the `isDefault` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsDefaultElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.isDefault; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.isDefault = element;
    } else {
      this.isDefault = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isDefault` property exists and has a value; `false` otherwise
   */
  public hasIsDefaultElement(): boolean {
    return isDefined<BooleanType>(this.isDefault) && !this.isDefault.isEmpty();
  }

  /**
   * @returns the `isDefault` property value as a fhirBoolean if defined; else undefined
   */
  public getIsDefault(): fhirBoolean | undefined {
    return this.isDefault?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `isDefault` property.
   *
   * @param value - the `isDefault` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsDefault(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.isDefault (${String(value)})`;
      this.isDefault = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.isDefault = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isDefault` property exists and has a value; `false` otherwise
   */
  public hasIsDefault(): boolean {
    return this.hasIsDefaultElement();
  }

  /**
   * @returns the `compositional` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getCompositionalElement(): BooleanType {
    return this.compositional ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `compositional` property.
   *
   * @param element - the `compositional` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompositionalElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.compositional; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.compositional = element;
    } else {
      this.compositional = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `compositional` property exists and has a value; `false` otherwise
   */
  public hasCompositionalElement(): boolean {
    return isDefined<BooleanType>(this.compositional) && !this.compositional.isEmpty();
  }

  /**
   * @returns the `compositional` property value as a fhirBoolean if defined; else undefined
   */
  public getCompositional(): fhirBoolean | undefined {
    return this.compositional?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `compositional` property.
   *
   * @param value - the `compositional` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompositional(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.compositional (${String(value)})`;
      this.compositional = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.compositional = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `compositional` property exists and has a value; `false` otherwise
   */
  public hasCompositional(): boolean {
    return this.hasCompositionalElement();
  }

  /**
   * @returns the `language` property value as a CodeType array
   */
  public getLanguageElement(): CodeType[] {
    return this.language ?? ([] as CodeType[]);
  }

  /**
   * Assigns the provided CodeType array value to the `language` property.
   *
   * @param element - the `language` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguageElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.language; Provided value array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      this.language = element;
    } else {
      this.language = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeType value to the `language` array property.
   *
   * @param element - the `language` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLanguageElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.language; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initLanguage();
      this.language?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguageElement(): boolean {
    return isDefinedList<CodeType>(this.language) && this.language.some((item: CodeType) => !item.isEmpty());
  }

  /**
   * @returns the `language` property value as a fhirCode array
   */
  public getLanguage(): fhirCode[] {
    this.initLanguage();
    const languageValues = [] as fhirCode[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.language!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        languageValues.push(value);
      }
    }
    return languageValues;
  }

  /**
   * Assigns the provided primitive value array to the `language` property.
   *
   * @param value - the `language` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguage(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const languageElements = [] as CodeType[];
      for (const languageValue of value) {
        const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.language array item (${String(languageValue)})`;
        const element = new CodeType(parseFhirPrimitiveData(languageValue, fhirCodeSchema, optErrMsg));
        languageElements.push(element);
      }
      this.language = languageElements;
    } else {
      this.language = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `language` array property.
   *
   * @param value - the `language` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLanguage(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.language array item (${String(value)})`;
      const element = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
      this.initLanguage();
      this.addLanguageElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguage(): boolean {
    return this.hasLanguageElement();
  }

  /**
   * Initialize the `language` property
   */
  private initLanguage(): void {
    if (!this.hasLanguage()) {
      this.language = [] as CodeType[];
    }
  }

  /**
   * @returns the `filter` property value as a TerminologyCapabilitiesCodeSystemVersionFilterComponent array
   */
  public getFilter(): TerminologyCapabilitiesCodeSystemVersionFilterComponent[] {
    return this.filter ?? ([] as TerminologyCapabilitiesCodeSystemVersionFilterComponent[]);
  }

  /**
   * Assigns the provided TerminologyCapabilitiesCodeSystemVersionFilterComponent array value to the `filter` property.
   *
   * @param value - the `filter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFilter(value: TerminologyCapabilitiesCodeSystemVersionFilterComponent[] | undefined): this {
    if (isDefinedList<TerminologyCapabilitiesCodeSystemVersionFilterComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.filter; Provided value array has an element that is not an instance of TerminologyCapabilitiesCodeSystemVersionFilterComponent.`;
      assertFhirTypeList<TerminologyCapabilitiesCodeSystemVersionFilterComponent>(value, TerminologyCapabilitiesCodeSystemVersionFilterComponent, optErrMsg);
      this.filter = value;
    } else {
      this.filter = undefined;
    }
    return this;
  }

  /**
   * Add the provided TerminologyCapabilitiesCodeSystemVersionFilterComponent value to the `filter` array property.
   *
   * @param value - the `filter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFilter(value: TerminologyCapabilitiesCodeSystemVersionFilterComponent | undefined): this {
    if (isDefined<TerminologyCapabilitiesCodeSystemVersionFilterComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.filter; Provided element is not an instance of TerminologyCapabilitiesCodeSystemVersionFilterComponent.`;
      assertFhirType<TerminologyCapabilitiesCodeSystemVersionFilterComponent>(value, TerminologyCapabilitiesCodeSystemVersionFilterComponent, optErrMsg);
      this.initFilter();
      this.filter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `filter` property exists and has a value; `false` otherwise
   */
  public hasFilter(): boolean {
    return isDefinedList<TerminologyCapabilitiesCodeSystemVersionFilterComponent>(this.filter) && this.filter.some((item: TerminologyCapabilitiesCodeSystemVersionFilterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `filter` property
   */
  private initFilter(): void {
    if(!this.hasFilter()) {
      this.filter = [] as TerminologyCapabilitiesCodeSystemVersionFilterComponent[];
    }
  }

  /**
   * @returns the `property` property value as a CodeType array
   */
  public getPropertyElement(): CodeType[] {
    return this.property ?? ([] as CodeType[]);
  }

  /**
   * Assigns the provided CodeType array value to the `property` property.
   *
   * @param element - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPropertyElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.property; Provided value array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      this.property = element;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeType value to the `property` array property.
   *
   * @param element - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPropertyElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.property; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initProperty();
      this.property?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasPropertyElement(): boolean {
    return isDefinedList<CodeType>(this.property) && this.property.some((item: CodeType) => !item.isEmpty());
  }

  /**
   * @returns the `property` property value as a fhirCode array
   */
  public getProperty(): fhirCode[] {
    this.initProperty();
    const propertyValues = [] as fhirCode[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.property!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        propertyValues.push(value);
      }
    }
    return propertyValues;
  }

  /**
   * Assigns the provided primitive value array to the `property` property.
   *
   * @param value - the `property` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProperty(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const propertyElements = [] as CodeType[];
      for (const propertyValue of value) {
        const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.property array item (${String(propertyValue)})`;
        const element = new CodeType(parseFhirPrimitiveData(propertyValue, fhirCodeSchema, optErrMsg));
        propertyElements.push(element);
      }
      this.property = propertyElements;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addProperty(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.property array item (${String(value)})`;
      const element = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
      this.initProperty();
      this.addPropertyElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return this.hasPropertyElement();
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if (!this.hasProperty()) {
      this.property = [] as CodeType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TerminologyCapabilities.codeSystem.version';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.isDefault,
      this.compositional,
      this.language,
      this.filter,
      this.property,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TerminologyCapabilitiesCodeSystemVersionComponent {
    const dest = new TerminologyCapabilitiesCodeSystemVersionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TerminologyCapabilitiesCodeSystemVersionComponent): void {
    super.copyValues(dest);
    dest.code = this.code?.copy();
    dest.isDefault = this.isDefault?.copy();
    dest.compositional = this.compositional?.copy();
    const languageList = copyListValues<CodeType>(this.language);
    dest.language = languageList.length === 0 ? undefined : languageList;
    const filterList = copyListValues<TerminologyCapabilitiesCodeSystemVersionFilterComponent>(this.filter);
    dest.filter = filterList.length === 0 ? undefined : filterList;
    const propertyList = copyListValues<CodeType>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
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

    if (this.hasCodeElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCodeElement(), 'code', jsonObj);
    }

    if (this.hasIsDefaultElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIsDefaultElement(), 'isDefault', jsonObj);
    }

    if (this.hasCompositionalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getCompositionalElement(), 'compositional', jsonObj);
    }

    if (this.hasLanguage()) {
      setFhirPrimitiveListJson(this.getLanguageElement(), 'language', jsonObj);
    }

    if (this.hasFilter()) {
      setFhirBackboneElementListJson(this.getFilter(), 'filter', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirPrimitiveListJson(this.getPropertyElement(), 'property', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TerminologyCapabilitiesCodeSystemVersionFilterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Filter Properties supported
 * - **Definition:** Filter Properties supported.
 *
 * @category Data Models: Resource
 * @see [FHIR TerminologyCapabilities](http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities)
 */
export class TerminologyCapabilitiesCodeSystemVersionFilterComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeType | fhirCode | null = null, op: CodeType[] | fhirCode[] | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeType | fhirCode>(code)) {
      if (code instanceof PrimitiveType) {
        this.setCodeElement(code);
      } else {
        this.setCode(code);
      }
    }

    this.op = null;
    if (isDefinedList<CodeType | fhirCode>(op)) {
      if (op[0] instanceof PrimitiveType) {
        this.setOpElement(op as CodeType[]);
      } else {
        this.setOp(op as fhirCode[]);
      }
    }
  }

  /**
   * Parse the provided `TerminologyCapabilitiesCodeSystemVersionFilterComponent` JSON to instantiate the TerminologyCapabilitiesCodeSystemVersionFilterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TerminologyCapabilitiesCodeSystemVersionFilterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TerminologyCapabilitiesCodeSystemVersionFilterComponent
   * @returns TerminologyCapabilitiesCodeSystemVersionFilterComponent data model or undefined for `TerminologyCapabilitiesCodeSystemVersionFilterComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TerminologyCapabilitiesCodeSystemVersionFilterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TerminologyCapabilitiesCodeSystemVersionFilterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TerminologyCapabilitiesCodeSystemVersionFilterComponent();

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

    fieldName = 'op';
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
          instance.addOpElement(datatype);
        }
      });
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
   * TerminologyCapabilities.codeSystem.version.filter.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code of the property supported
   * - **Definition:** Code of the property supported.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeType | null;

  /**
   * TerminologyCapabilities.codeSystem.version.filter.op Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Operations supported for the property
   * - **Definition:** Operations supported for the property.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private op: CodeType[] | null;

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
    assertIsDefined<CodeType>(element, `TerminologyCapabilities.codeSystem.version.filter.code is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.filter.code; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `TerminologyCapabilities.codeSystem.version.filter.code is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.filter.code (${String(value)})`;
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
   * @returns the `op` property value as a CodeType array
   */
  public getOpElement(): CodeType[] {
    return this.op ?? ([] as CodeType[]);
  }

  /**
   * Assigns the provided CodeType array value to the `op` property.
   *
   * @param element - the `op` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOpElement(element: CodeType[]): this {
    assertIsDefinedList<CodeType>(element, `TerminologyCapabilities.codeSystem.version.filter.op is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.filter.op; Provided value array has an element that is not an instance of CodeType.`;
    assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
    this.op = element;
    return this;
  }

  /**
   * Add the provided CodeType value to the `op` array property.
   *
   * @param element - the `op` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addOpElement(element: CodeType): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.filter.op; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initOp();
      this.op?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `op` property exists and has a value; `false` otherwise
   */
  public hasOpElement(): boolean {
    return isDefinedList<CodeType>(this.op) && this.op.some((item: CodeType) => !item.isEmpty());
  }

  /**
   * @returns the `op` property value as a fhirCode array
   */
  public getOp(): fhirCode[] {
    this.initOp();
    const opValues = [] as fhirCode[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.op!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        opValues.push(value);
      }
    }
    return opValues;
  }

  /**
   * Assigns the provided primitive value array to the `op` property.
   *
   * @param value - the `op` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOp(value: fhirCode[]): this {
    assertIsDefinedList<fhirCode>(value, `TerminologyCapabilities.codeSystem.version.filter.op is required`);
    const opElements = [] as CodeType[];
    for (const opValue of value) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.filter.op array item (${String(opValue)})`;
      const element = new CodeType(parseFhirPrimitiveData(opValue, fhirCodeSchema, optErrMsg));
      opElements.push(element);
    }
    this.op = opElements;
    return this;
  }

  /**
   * Add the provided primitive value to the `op` array property.
   *
   * @param value - the `op` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addOp(value: fhirCode): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.codeSystem.version.filter.op array item (${String(value)})`;
      const element = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
      this.initOp();
      this.addOpElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `op` property exists and has a value; `false` otherwise
   */
  public hasOp(): boolean {
    return this.hasOpElement();
  }

  /**
   * Initialize the `op` property
   */
  private initOp(): void {
    if (!this.hasOp()) {
      this.op = [] as CodeType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TerminologyCapabilities.codeSystem.version.filter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.op,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TerminologyCapabilitiesCodeSystemVersionFilterComponent {
    const dest = new TerminologyCapabilitiesCodeSystemVersionFilterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TerminologyCapabilitiesCodeSystemVersionFilterComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    const opList = copyListValues<CodeType>(this.op);
    dest.op = opList.length === 0 ? null : opList;
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
      missingReqdProperties.push(`TerminologyCapabilities.codeSystem.version.filter.code`);
    }

    if (this.hasOpElement()) {
      setFhirPrimitiveListJson(this.getOpElement(), 'op', jsonObj);
    } else {
      missingReqdProperties.push(`TerminologyCapabilities.codeSystem.version.filter.op`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * TerminologyCapabilitiesExpansionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about the [ValueSet/$expand](https://hl7.org/fhir/valueset-operation-expand.html) operation
 * - **Definition:** Information about the [ValueSet/$expand](https://hl7.org/fhir/valueset-operation-expand.html) operation.
 *
 * @category Data Models: Resource
 * @see [FHIR TerminologyCapabilities](http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities)
 */
export class TerminologyCapabilitiesExpansionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TerminologyCapabilitiesExpansionComponent` JSON to instantiate the TerminologyCapabilitiesExpansionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TerminologyCapabilitiesExpansionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TerminologyCapabilitiesExpansionComponent
   * @returns TerminologyCapabilitiesExpansionComponent data model or undefined for `TerminologyCapabilitiesExpansionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TerminologyCapabilitiesExpansionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TerminologyCapabilitiesExpansionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TerminologyCapabilitiesExpansionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'hierarchical';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setHierarchicalElement(datatype);
    }

    fieldName = 'paging';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setPagingElement(datatype);
    }

    fieldName = 'incomplete';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setIncompleteElement(datatype);
    }

    fieldName = 'parameter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: TerminologyCapabilitiesExpansionParameterComponent | undefined = TerminologyCapabilitiesExpansionParameterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParameter(component);
        }
      });
    }

    fieldName = 'textFilter';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setTextFilterElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * TerminologyCapabilities.expansion.hierarchical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the server can return nested value sets
   * - **Definition:** Whether the server can return nested value sets.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private hierarchical?: BooleanType | undefined;

  /**
   * TerminologyCapabilities.expansion.paging Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the server supports paging on expansion
   * - **Definition:** Whether the server supports paging on expansion.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private paging?: BooleanType | undefined;

  /**
   * TerminologyCapabilities.expansion.incomplete Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allow request for incomplete expansions?
   * - **Definition:** True if requests for incomplete expansions are allowed.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private incomplete?: BooleanType | undefined;

  /**
   * TerminologyCapabilities.expansion.parameter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supported expansion parameter
   * - **Definition:** Supported expansion parameter.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parameter?: TerminologyCapabilitiesExpansionParameterComponent[] | undefined;

  /**
   * TerminologyCapabilities.expansion.textFilter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Documentation about text searching works
   * - **Definition:** Documentation about text searching works.
   * - **Comment:** This documentation should cover things like case sensitivity,  use of punctuation if not ignored, what wild cards are supported (if any), whether text is starts with or contains, and whether word order matters.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private textFilter?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `hierarchical` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getHierarchicalElement(): BooleanType {
    return this.hierarchical ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `hierarchical` property.
   *
   * @param element - the `hierarchical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHierarchicalElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.hierarchical; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.hierarchical = element;
    } else {
      this.hierarchical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hierarchical` property exists and has a value; `false` otherwise
   */
  public hasHierarchicalElement(): boolean {
    return isDefined<BooleanType>(this.hierarchical) && !this.hierarchical.isEmpty();
  }

  /**
   * @returns the `hierarchical` property value as a fhirBoolean if defined; else undefined
   */
  public getHierarchical(): fhirBoolean | undefined {
    return this.hierarchical?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `hierarchical` property.
   *
   * @param value - the `hierarchical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setHierarchical(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.hierarchical (${String(value)})`;
      this.hierarchical = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.hierarchical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hierarchical` property exists and has a value; `false` otherwise
   */
  public hasHierarchical(): boolean {
    return this.hasHierarchicalElement();
  }

  /**
   * @returns the `paging` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getPagingElement(): BooleanType {
    return this.paging ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `paging` property.
   *
   * @param element - the `paging` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPagingElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.paging; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.paging = element;
    } else {
      this.paging = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paging` property exists and has a value; `false` otherwise
   */
  public hasPagingElement(): boolean {
    return isDefined<BooleanType>(this.paging) && !this.paging.isEmpty();
  }

  /**
   * @returns the `paging` property value as a fhirBoolean if defined; else undefined
   */
  public getPaging(): fhirBoolean | undefined {
    return this.paging?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `paging` property.
   *
   * @param value - the `paging` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPaging(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.paging (${String(value)})`;
      this.paging = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.paging = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `paging` property exists and has a value; `false` otherwise
   */
  public hasPaging(): boolean {
    return this.hasPagingElement();
  }

  /**
   * @returns the `incomplete` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getIncompleteElement(): BooleanType {
    return this.incomplete ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `incomplete` property.
   *
   * @param element - the `incomplete` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIncompleteElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.incomplete; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.incomplete = element;
    } else {
      this.incomplete = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `incomplete` property exists and has a value; `false` otherwise
   */
  public hasIncompleteElement(): boolean {
    return isDefined<BooleanType>(this.incomplete) && !this.incomplete.isEmpty();
  }

  /**
   * @returns the `incomplete` property value as a fhirBoolean if defined; else undefined
   */
  public getIncomplete(): fhirBoolean | undefined {
    return this.incomplete?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `incomplete` property.
   *
   * @param value - the `incomplete` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIncomplete(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.incomplete (${String(value)})`;
      this.incomplete = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.incomplete = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `incomplete` property exists and has a value; `false` otherwise
   */
  public hasIncomplete(): boolean {
    return this.hasIncompleteElement();
  }

  /**
   * @returns the `parameter` property value as a TerminologyCapabilitiesExpansionParameterComponent array
   */
  public getParameter(): TerminologyCapabilitiesExpansionParameterComponent[] {
    return this.parameter ?? ([] as TerminologyCapabilitiesExpansionParameterComponent[]);
  }

  /**
   * Assigns the provided TerminologyCapabilitiesExpansionParameterComponent array value to the `parameter` property.
   *
   * @param value - the `parameter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParameter(value: TerminologyCapabilitiesExpansionParameterComponent[] | undefined): this {
    if (isDefinedList<TerminologyCapabilitiesExpansionParameterComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.parameter; Provided value array has an element that is not an instance of TerminologyCapabilitiesExpansionParameterComponent.`;
      assertFhirTypeList<TerminologyCapabilitiesExpansionParameterComponent>(value, TerminologyCapabilitiesExpansionParameterComponent, optErrMsg);
      this.parameter = value;
    } else {
      this.parameter = undefined;
    }
    return this;
  }

  /**
   * Add the provided TerminologyCapabilitiesExpansionParameterComponent value to the `parameter` array property.
   *
   * @param value - the `parameter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParameter(value: TerminologyCapabilitiesExpansionParameterComponent | undefined): this {
    if (isDefined<TerminologyCapabilitiesExpansionParameterComponent>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.parameter; Provided element is not an instance of TerminologyCapabilitiesExpansionParameterComponent.`;
      assertFhirType<TerminologyCapabilitiesExpansionParameterComponent>(value, TerminologyCapabilitiesExpansionParameterComponent, optErrMsg);
      this.initParameter();
      this.parameter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parameter` property exists and has a value; `false` otherwise
   */
  public hasParameter(): boolean {
    return isDefinedList<TerminologyCapabilitiesExpansionParameterComponent>(this.parameter) && this.parameter.some((item: TerminologyCapabilitiesExpansionParameterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `parameter` property
   */
  private initParameter(): void {
    if(!this.hasParameter()) {
      this.parameter = [] as TerminologyCapabilitiesExpansionParameterComponent[];
    }
  }

  /**
   * @returns the `textFilter` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getTextFilterElement(): MarkdownType {
    return this.textFilter ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `textFilter` property.
   *
   * @param element - the `textFilter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextFilterElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.textFilter; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.textFilter = element;
    } else {
      this.textFilter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `textFilter` property exists and has a value; `false` otherwise
   */
  public hasTextFilterElement(): boolean {
    return isDefined<MarkdownType>(this.textFilter) && !this.textFilter.isEmpty();
  }

  /**
   * @returns the `textFilter` property value as a fhirMarkdown if defined; else undefined
   */
  public getTextFilter(): fhirMarkdown | undefined {
    return this.textFilter?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `textFilter` property.
   *
   * @param value - the `textFilter` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextFilter(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.textFilter (${String(value)})`;
      this.textFilter = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.textFilter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `textFilter` property exists and has a value; `false` otherwise
   */
  public hasTextFilter(): boolean {
    return this.hasTextFilterElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TerminologyCapabilities.expansion';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.hierarchical,
      this.paging,
      this.incomplete,
      this.parameter,
      this.textFilter,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TerminologyCapabilitiesExpansionComponent {
    const dest = new TerminologyCapabilitiesExpansionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TerminologyCapabilitiesExpansionComponent): void {
    super.copyValues(dest);
    dest.hierarchical = this.hierarchical?.copy();
    dest.paging = this.paging?.copy();
    dest.incomplete = this.incomplete?.copy();
    const parameterList = copyListValues<TerminologyCapabilitiesExpansionParameterComponent>(this.parameter);
    dest.parameter = parameterList.length === 0 ? undefined : parameterList;
    dest.textFilter = this.textFilter?.copy();
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

    if (this.hasHierarchicalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getHierarchicalElement(), 'hierarchical', jsonObj);
    }

    if (this.hasPagingElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getPagingElement(), 'paging', jsonObj);
    }

    if (this.hasIncompleteElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIncompleteElement(), 'incomplete', jsonObj);
    }

    if (this.hasParameter()) {
      setFhirBackboneElementListJson(this.getParameter(), 'parameter', jsonObj);
    }

    if (this.hasTextFilterElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getTextFilterElement(), 'textFilter', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * TerminologyCapabilitiesExpansionParameterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Supported expansion parameter
 * - **Definition:** Supported expansion parameter.
 *
 * @category Data Models: Resource
 * @see [FHIR TerminologyCapabilities](http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities)
 */
export class TerminologyCapabilitiesExpansionParameterComponent extends BackboneElement implements IBackboneElement {
  constructor(name: CodeType | fhirCode | null = null) {
    super();

    this.name = null;
    if (isDefined<CodeType | fhirCode>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }
  }

  /**
   * Parse the provided `TerminologyCapabilitiesExpansionParameterComponent` JSON to instantiate the TerminologyCapabilitiesExpansionParameterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TerminologyCapabilitiesExpansionParameterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TerminologyCapabilitiesExpansionParameterComponent
   * @returns TerminologyCapabilitiesExpansionParameterComponent data model or undefined for `TerminologyCapabilitiesExpansionParameterComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TerminologyCapabilitiesExpansionParameterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TerminologyCapabilitiesExpansionParameterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TerminologyCapabilitiesExpansionParameterComponent();

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
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * TerminologyCapabilities.expansion.parameter.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the supported expansion parameter
   * - **Definition:** Name of the supported expansion parameter.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name: CodeType | null;

  /**
   * TerminologyCapabilities.expansion.parameter.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of support for parameter
   * - **Definition:** Description of support for parameter.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `name` property value as a CodeType object if defined; else null
   */
  public getNameElement(): CodeType | null {
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
  public setNameElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `TerminologyCapabilities.expansion.parameter.name is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.expansion.parameter.name; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.name = element;
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasNameElement(): boolean {
    return isDefined<CodeType>(this.name) && !this.name.isEmpty();
  }

  /**
   * @returns the `name` property value as a fhirCode if defined; else null
   */
  public getName(): fhirCode | null {
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
  public setName(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `TerminologyCapabilities.expansion.parameter.name is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.expansion.parameter.name (${String(value)})`;
    this.name = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `name` property exists and has a value; `false` otherwise
   */
  public hasName(): boolean {
    return this.hasNameElement();
  }

  /**
   * @returns the `documentation` property value as a StringType object if defined; else an empty StringType object
   */
  public getDocumentationElement(): StringType {
    return this.documentation ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `documentation` property.
   *
   * @param element - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentationElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.parameter.documentation; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.documentation = element;
    } else {
      this.documentation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `documentation` property exists and has a value; `false` otherwise
   */
  public hasDocumentationElement(): boolean {
    return isDefined<StringType>(this.documentation) && !this.documentation.isEmpty();
  }

  /**
   * @returns the `documentation` property value as a fhirString if defined; else undefined
   */
  public getDocumentation(): fhirString | undefined {
    return this.documentation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `documentation` property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentation(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.expansion.parameter.documentation (${String(value)})`;
      this.documentation = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.documentation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `documentation` property exists and has a value; `false` otherwise
   */
  public hasDocumentation(): boolean {
    return this.hasDocumentationElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TerminologyCapabilities.expansion.parameter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.documentation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TerminologyCapabilitiesExpansionParameterComponent {
    const dest = new TerminologyCapabilitiesExpansionParameterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TerminologyCapabilitiesExpansionParameterComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.documentation = this.documentation?.copy();
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
      setFhirPrimitiveJson<fhirCode>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`TerminologyCapabilities.expansion.parameter.name`);
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * TerminologyCapabilitiesValidateCodeComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about the [ValueSet/$validate-code](https://hl7.org/fhir/valueset-operation-validate-code.html) operation
 * - **Definition:** Information about the [ValueSet/$validate-code](https://hl7.org/fhir/valueset-operation-validate-code.html) operation.
 *
 * @category Data Models: Resource
 * @see [FHIR TerminologyCapabilities](http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities)
 */
export class TerminologyCapabilitiesValidateCodeComponent extends BackboneElement implements IBackboneElement {
  constructor(translations: BooleanType | fhirBoolean | null = null) {
    super();

    this.translations = null;
    if (isDefined<BooleanType | fhirBoolean>(translations)) {
      if (translations instanceof PrimitiveType) {
        this.setTranslationsElement(translations);
      } else {
        this.setTranslations(translations);
      }
    }
  }

  /**
   * Parse the provided `TerminologyCapabilitiesValidateCodeComponent` JSON to instantiate the TerminologyCapabilitiesValidateCodeComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TerminologyCapabilitiesValidateCodeComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TerminologyCapabilitiesValidateCodeComponent
   * @returns TerminologyCapabilitiesValidateCodeComponent data model or undefined for `TerminologyCapabilitiesValidateCodeComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TerminologyCapabilitiesValidateCodeComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TerminologyCapabilitiesValidateCodeComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TerminologyCapabilitiesValidateCodeComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'translations';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTranslationsElement(datatype);
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
   * TerminologyCapabilities.validateCode.translations Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether translations are validated
   * - **Definition:** Whether translations are validated.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private translations: BooleanType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `translations` property value as a BooleanType object if defined; else null
   */
  public getTranslationsElement(): BooleanType | null {
    return this.translations;
  }

  /**
   * Assigns the provided PrimitiveType value to the `translations` property.
   *
   * @param element - the `translations` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTranslationsElement(element: BooleanType): this {
    assertIsDefined<BooleanType>(element, `TerminologyCapabilities.validateCode.translations is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.validateCode.translations; Provided value is not an instance of BooleanType.`;
    assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
    this.translations = element;
    return this;
  }

  /**
   * @returns `true` if the `translations` property exists and has a value; `false` otherwise
   */
  public hasTranslationsElement(): boolean {
    return isDefined<BooleanType>(this.translations) && !this.translations.isEmpty();
  }

  /**
   * @returns the `translations` property value as a fhirBoolean if defined; else null
   */
  public getTranslations(): fhirBoolean | null {
    if (this.translations?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.translations.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `translations` property.
   *
   * @param value - the `translations` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTranslations(value: fhirBoolean): this {
    assertIsDefined<fhirBoolean>(value, `TerminologyCapabilities.validateCode.translations is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.validateCode.translations (${String(value)})`;
    this.translations = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `translations` property exists and has a value; `false` otherwise
   */
  public hasTranslations(): boolean {
    return this.hasTranslationsElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TerminologyCapabilities.validateCode';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.translations,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TerminologyCapabilitiesValidateCodeComponent {
    const dest = new TerminologyCapabilitiesValidateCodeComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TerminologyCapabilitiesValidateCodeComponent): void {
    super.copyValues(dest);
    dest.translations = this.translations ? this.translations.copy() : null;
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

    if (this.hasTranslationsElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirBoolean>(this.getTranslationsElement()!, 'translations', jsonObj);
    } else {
      missingReqdProperties.push(`TerminologyCapabilities.validateCode.translations`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * TerminologyCapabilitiesTranslationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about the [ConceptMap/$translate](https://hl7.org/fhir/conceptmap-operation-translate.html) operation
 * - **Definition:** Information about the [ConceptMap/$translate](https://hl7.org/fhir/conceptmap-operation-translate.html) operation.
 *
 * @category Data Models: Resource
 * @see [FHIR TerminologyCapabilities](http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities)
 */
export class TerminologyCapabilitiesTranslationComponent extends BackboneElement implements IBackboneElement {
  constructor(needsMap: BooleanType | fhirBoolean | null = null) {
    super();

    this.needsMap = null;
    if (isDefined<BooleanType | fhirBoolean>(needsMap)) {
      if (needsMap instanceof PrimitiveType) {
        this.setNeedsMapElement(needsMap);
      } else {
        this.setNeedsMap(needsMap);
      }
    }
  }

  /**
   * Parse the provided `TerminologyCapabilitiesTranslationComponent` JSON to instantiate the TerminologyCapabilitiesTranslationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TerminologyCapabilitiesTranslationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TerminologyCapabilitiesTranslationComponent
   * @returns TerminologyCapabilitiesTranslationComponent data model or undefined for `TerminologyCapabilitiesTranslationComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TerminologyCapabilitiesTranslationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TerminologyCapabilitiesTranslationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TerminologyCapabilitiesTranslationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'needsMap';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNeedsMapElement(datatype);
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
   * TerminologyCapabilities.translation.needsMap Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the client must identify the map
   * - **Definition:** Whether the client must identify the map.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private needsMap: BooleanType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `needsMap` property value as a BooleanType object if defined; else null
   */
  public getNeedsMapElement(): BooleanType | null {
    return this.needsMap;
  }

  /**
   * Assigns the provided PrimitiveType value to the `needsMap` property.
   *
   * @param element - the `needsMap` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNeedsMapElement(element: BooleanType): this {
    assertIsDefined<BooleanType>(element, `TerminologyCapabilities.translation.needsMap is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.translation.needsMap; Provided value is not an instance of BooleanType.`;
    assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
    this.needsMap = element;
    return this;
  }

  /**
   * @returns `true` if the `needsMap` property exists and has a value; `false` otherwise
   */
  public hasNeedsMapElement(): boolean {
    return isDefined<BooleanType>(this.needsMap) && !this.needsMap.isEmpty();
  }

  /**
   * @returns the `needsMap` property value as a fhirBoolean if defined; else null
   */
  public getNeedsMap(): fhirBoolean | null {
    if (this.needsMap?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.needsMap.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `needsMap` property.
   *
   * @param value - the `needsMap` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNeedsMap(value: fhirBoolean): this {
    assertIsDefined<fhirBoolean>(value, `TerminologyCapabilities.translation.needsMap is required`);
    const optErrMsg = `Invalid TerminologyCapabilities.translation.needsMap (${String(value)})`;
    this.needsMap = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `needsMap` property exists and has a value; `false` otherwise
   */
  public hasNeedsMap(): boolean {
    return this.hasNeedsMapElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TerminologyCapabilities.translation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.needsMap,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TerminologyCapabilitiesTranslationComponent {
    const dest = new TerminologyCapabilitiesTranslationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TerminologyCapabilitiesTranslationComponent): void {
    super.copyValues(dest);
    dest.needsMap = this.needsMap ? this.needsMap.copy() : null;
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

    if (this.hasNeedsMapElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirBoolean>(this.getNeedsMapElement()!, 'needsMap', jsonObj);
    } else {
      missingReqdProperties.push(`TerminologyCapabilities.translation.needsMap`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * TerminologyCapabilitiesClosureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about the [ConceptMap/$closure](https://hl7.org/fhir/conceptmap-operation-closure.html) operation
 * - **Definition:** Whether the $closure operation is supported.
 *
 * @category Data Models: Resource
 * @see [FHIR TerminologyCapabilities](http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities)
 */
export class TerminologyCapabilitiesClosureComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `TerminologyCapabilitiesClosureComponent` JSON to instantiate the TerminologyCapabilitiesClosureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `TerminologyCapabilitiesClosureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to TerminologyCapabilitiesClosureComponent
   * @returns TerminologyCapabilitiesClosureComponent data model or undefined for `TerminologyCapabilitiesClosureComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): TerminologyCapabilitiesClosureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'TerminologyCapabilitiesClosureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new TerminologyCapabilitiesClosureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'translation';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setTranslationElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * TerminologyCapabilities.closure.translation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If cross-system closure is supported
   * - **Definition:** If cross-system closure is supported.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private translation?: BooleanType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `translation` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getTranslationElement(): BooleanType {
    return this.translation ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `translation` property.
   *
   * @param element - the `translation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTranslationElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid TerminologyCapabilities.closure.translation; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.translation = element;
    } else {
      this.translation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `translation` property exists and has a value; `false` otherwise
   */
  public hasTranslationElement(): boolean {
    return isDefined<BooleanType>(this.translation) && !this.translation.isEmpty();
  }

  /**
   * @returns the `translation` property value as a fhirBoolean if defined; else undefined
   */
  public getTranslation(): fhirBoolean | undefined {
    return this.translation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `translation` property.
   *
   * @param value - the `translation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTranslation(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid TerminologyCapabilities.closure.translation (${String(value)})`;
      this.translation = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.translation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `translation` property exists and has a value; `false` otherwise
   */
  public hasTranslation(): boolean {
    return this.hasTranslationElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'TerminologyCapabilities.closure';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.translation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): TerminologyCapabilitiesClosureComponent {
    const dest = new TerminologyCapabilitiesClosureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: TerminologyCapabilitiesClosureComponent): void {
    super.copyValues(dest);
    dest.translation = this.translation?.copy();
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

    if (this.hasTranslationElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getTranslationElement(), 'translation', jsonObj);
    }

    return jsonObj;
  }
}
