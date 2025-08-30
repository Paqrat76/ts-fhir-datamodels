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
 * CapabilityStatement Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
 * StructureDefinition.name: CapabilityStatement
 * StructureDefinition.description: A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
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
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
  ReferenceTargets,
  StringType,
  UnsignedIntType,
  UriType,
  UrlType,
  assertEnumCodeType,
  assertEnumCodeTypeList,
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
  fhirMarkdown,
  fhirMarkdownSchema,
  fhirString,
  fhirStringSchema,
  fhirUnsignedInt,
  fhirUnsignedIntSchema,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { CapabilityStatementKindEnum } from '../code-systems/CapabilityStatementKindEnum';
import { CodeableConcept, Coding, ContactDetail, PARSABLE_DATATYPE_MAP, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { ConditionalDeleteStatusEnum } from '../code-systems/ConditionalDeleteStatusEnum';
import { ConditionalReadStatusEnum } from '../code-systems/ConditionalReadStatusEnum';
import { DocumentModeEnum } from '../code-systems/DocumentModeEnum';
import { EventCapabilityModeEnum } from '../code-systems/EventCapabilityModeEnum';
import { FhirVersionEnum } from '../code-systems/FhirVersionEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { ReferenceHandlingPolicyEnum } from '../code-systems/ReferenceHandlingPolicyEnum';
import { ResourceTypesEnum } from '../code-systems/ResourceTypesEnum';
import { RestfulCapabilityModeEnum } from '../code-systems/RestfulCapabilityModeEnum';
import { RestfulInteractionEnum } from '../code-systems/RestfulInteractionEnum';
import { SearchParamTypeEnum } from '../code-systems/SearchParamTypeEnum';
import { VersioningPolicyEnum } from '../code-systems/VersioningPolicyEnum';

/**
 * CapabilityStatement Class
 *
 * @remarks
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 *
 * **FHIR Specification**
 * - **Short:** A statement of system capabilities
 * - **Definition:** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 * - **Comment:** Applications may implement multiple versions (see [Managing Multiple Versions](https://hl7.org/fhir/versioning.html), and the [$versions](https://hl7.org/fhir/capabilitystatement-operation-versions.html) operation). If they do, then a CapabilityStatement describes the system\'s support for a particular version of FHIR, and the server will have multiple statements, one for each version.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatement extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, date: DateTimeType | fhirDateTime | null = null, kind: EnumCodeType | CodeType | fhirCode | null = null, fhirVersion: EnumCodeType | CodeType | fhirCode | null = null, format: CodeType[] | fhirCode[] | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.capabilityStatementKindEnum = new CapabilityStatementKindEnum();
    this.fhirVersionEnum = new FhirVersionEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'CapabilityStatement.status',
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
      'CapabilityStatement.kind',
    );

    this.fhirVersion = constructorCodeValueAsEnumCodeType<FhirVersionEnum>(
      fhirVersion,
      FhirVersionEnum,
      this.fhirVersionEnum,
      'CapabilityStatement.fhirVersion',
    );

    this.format = null;
    if (isDefinedList<CodeType | fhirCode>(format)) {
      if (format[0] instanceof PrimitiveType) {
        this.setFormatElement(format as CodeType[]);
      } else {
        this.setFormat(format as fhirCode[]);
      }
    }
  }

  /**
   * Parse the provided `CapabilityStatement` JSON to instantiate the CapabilityStatement data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatement`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatement
   * @returns CapabilityStatement data model or undefined for `CapabilityStatement`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatement | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatement';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatement();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'CapabilityStatement');
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
      if (datatype === undefined) {
        instance.setDate(null);
      } else {
        instance.setDateElement(datatype);
      }
    } else {
      instance.setDate(null);
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

    fieldName = 'kind';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setKind(null);
      } else {
        instance.setKindElement(datatype);
      }
    } else {
      instance.setKind(null);
    }

    fieldName = 'instantiates';
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
          instance.addInstantiatesElement(datatype);
        }
      });
    }

    fieldName = 'imports';
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
          instance.addImportsElement(datatype);
        }
      });
    }

    fieldName = 'software';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CapabilityStatementSoftwareComponent | undefined = CapabilityStatementSoftwareComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSoftware(component);
    }

    fieldName = 'implementation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CapabilityStatementImplementationComponent | undefined = CapabilityStatementImplementationComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setImplementation(component);
    }

    fieldName = 'fhirVersion';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setFhirVersion(null);
      } else {
        instance.setFhirVersionElement(datatype);
      }
    } else {
      instance.setFhirVersion(null);
    }

    fieldName = 'format';
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
        if (datatype === undefined) {
          instance.setFormat(null);
        } else {
          instance.addFormatElement(datatype);
        }
      });
    } else {
      instance.setFormat(null);
    }

    fieldName = 'patchFormat';
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
          instance.addPatchFormatElement(datatype);
        }
      });
    }

    fieldName = 'implementationGuide';
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
          instance.addImplementationGuideElement(datatype);
        }
      });
    }

    fieldName = 'rest';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementRestComponent | undefined = CapabilityStatementRestComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addRest(component);
        }
      });
    }

    fieldName = 'messaging';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementMessagingComponent | undefined = CapabilityStatementMessagingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addMessaging(component);
        }
      });
    }

    fieldName = 'document';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementDocumentComponent | undefined = CapabilityStatementDocumentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDocument(component);
        }
      });
    }

    return instance;
  }

  /**
   * CapabilityStatement.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this capability statement, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this capability statement is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the capability statement is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the capability statement to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * CapabilityStatement.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the capability statement
   * - **Definition:** The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different capability statement instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the capability statement with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * CapabilityStatement.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this capability statement (computer friendly)
   * - **Definition:** A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * CapabilityStatement.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this capability statement (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the capability statement.
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
   * CapabilityStatement.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this capability statement. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of capability statements that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
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
   * CapabilityStatement.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of capability statements that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level capability statement.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * CapabilityStatement.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the capability statement was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the capability statement. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date: DateTimeType | null;

  /**
   * CapabilityStatement.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the capability statement.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the capability statement is the organization or individual primarily responsible for the maintenance and upkeep of the capability statement. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the capability statement. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the capability statement.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * CapabilityStatement.contact Element
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
   * CapabilityStatement.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the capability statement
   * - **Definition:** A free text natural language description of the capability statement from a consumer\'s perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
   * - **Comment:** This description can be used to capture details such as why the capability statement was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the capability statement as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the capability statement is presumed to be the predominant language in the place the capability statement was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * CapabilityStatement.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate capability statement instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * CapabilityStatement.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for capability statement (if applicable)
   * - **Definition:** A legal or geographic region in which the capability statement is intended to be used.
   * - **Comment:** It may be possible for the capability statement to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * CapabilityStatement.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this capability statement is defined
   * - **Definition:** Explanation of why this capability statement is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the capability statement. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this capability statement.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * CapabilityStatement.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the capability statement and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * FHIR CodeSystem: CapabilityStatementKind
   *
   * @see {@link CapabilityStatementKindEnum }
   */
  private readonly capabilityStatementKindEnum: CapabilityStatementKindEnum;

  /**
   * CapabilityStatement.kind Element
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
   * CapabilityStatement.instantiates Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical URL of another capability statement this implements
   * - **Definition:** Reference to a canonical URL of another CapabilityStatement that this software implements. This capability statement is a published API description that corresponds to a business service. The server may actually implement a subset of the capability statement it claims to implement, so the capability statement must specify the full capability details.
   * - **Comment:** HL7 defines the following Services: [Terminology Service](https://hl7.org/fhir/terminology-service.html).     Many [Implementation Guides](http://fhir.org/guides/registry) define additional services.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CapabilityStatement',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instantiates?: CanonicalType[] | undefined;

  /**
   * CapabilityStatement.imports Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical URL of another capability statement this adds to
   * - **Definition:** Reference to a canonical URL of another CapabilityStatement that this software adds to. The capability statement automatically includes everything in the other statement, and it is not duplicated, though the server may repeat the same resources, interactions and operations to add additional details to them.
   * - **Comment:** the contents of any directly or indirectly imported CapabilityStatements SHALL NOT overlap, i.e. they cannot refer to the same rest/resource, operations/name, searchparam/name, interaction/code, messaging/endpoint, document/mode pair. A capability statement that imports another CapabilityStatement automatically instantiates it too (though this is often not a very useful statement for the kinds of CapabilityStatements that are suitable for importing).
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CapabilityStatement',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private imports?: CanonicalType[] | undefined;

  /**
   * CapabilityStatement.software Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Software that is covered by this capability statement
   * - **Definition:** Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private software?: CapabilityStatementSoftwareComponent | undefined;

  /**
   * CapabilityStatement.implementation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If this describes a specific instance
   * - **Definition:** Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private implementation?: CapabilityStatementImplementationComponent | undefined;

  /**
   * FHIR CodeSystem: FhirVersion
   *
   * @see {@link FhirVersionEnum }
   */
  private readonly fhirVersionEnum: FhirVersionEnum;

  /**
   * CapabilityStatement.fhirVersion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIR Version the system supports
   * - **Definition:** The version of the FHIR specification that this CapabilityStatement describes (which SHALL be the same as the FHIR version of the CapabilityStatement itself). There is no default value.
   * - **Comment:** Servers may implement multiple versions (see [Managing Multiple Versions](https://hl7.org/fhir/versioning.html), and the [$versions](https://hl7.org/fhir/capabilitystatement-operation-versions.html) operation). If they do, and the CapabilityStatement is requested from the server, then this fhirVersion will be either the version requested, or the server\'s default version.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  private fhirVersion: EnumCodeType | null;

  /**
   * CapabilityStatement.format Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** formats supported (xml | json | ttl | mime type)
   * - **Definition:** A list of the formats supported by this implementation using their content types.
   * - **Comment:** "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private format: CodeType[] | null;

  /**
   * CapabilityStatement.patchFormat Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patch formats supported
   * - **Definition:** A list of the patch formats supported by this implementation using their content types.
   * - **Comment:** At present, the patch mime types application/json-patch+json and application/xml-patch+xml are legal. Generally, if a server supports PATCH, it would be expected to support the patch formats and match the formats it supports, but this is not always possible or necessary.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patchFormat?: CodeType[] | undefined;

  /**
   * CapabilityStatement.implementationGuide Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Implementation guides supported
   * - **Definition:** A list of implementation guides that the server does (or should) support in their entirety.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ImplementationGuide',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private implementationGuide?: CanonicalType[] | undefined;

  /**
   * CapabilityStatement.rest Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If the endpoint is a RESTful one
   * - **Definition:** A definition of the restful capabilities of the solution, if any.
   * - **Comment:** Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private rest?: CapabilityStatementRestComponent[] | undefined;

  /**
   * CapabilityStatement.messaging Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If messaging is supported
   * - **Definition:** A description of the messaging capabilities of the solution.
   * - **Comment:** Multiple repetitions allow the documentation of multiple endpoints per solution.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private messaging?: CapabilityStatementMessagingComponent[] | undefined;

  /**
   * CapabilityStatement.document Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Document definition
   * - **Definition:** A document definition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private document?: CapabilityStatementDocumentComponent[] | undefined;

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
      const optErrMsg = `Invalid CapabilityStatement.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.url (${String(value)})`;
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
      const optErrMsg = `Invalid CapabilityStatement.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.version (${String(value)})`;
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
      const optErrMsg = `Invalid CapabilityStatement.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.name (${String(value)})`;
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
      const optErrMsg = `Invalid CapabilityStatement.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.title (${String(value)})`;
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
      const errMsgPrefix = `Invalid CapabilityStatement.status`;
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
      const optErrMsg = `Invalid CapabilityStatement.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.status (${String(value)})`;
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
      const optErrMsg = `Invalid CapabilityStatement.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.experimental (${String(value)})`;
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
  public setDateElement(element: DateTimeType | undefined | null): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.date; Provided value is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.date = element;
    } else {
      this.date = null;
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
  public setDate(value: fhirDateTime | undefined | null): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.date (${String(value)})`;
      this.date = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.date = null;
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
      const optErrMsg = `Invalid CapabilityStatement.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid CapabilityStatement.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid CapabilityStatement.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid CapabilityStatement.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.description (${String(value)})`;
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
      const optErrMsg = `Invalid CapabilityStatement.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid CapabilityStatement.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid CapabilityStatement.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CapabilityStatement.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CapabilityStatement.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid CapabilityStatement.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.copyright (${String(value)})`;
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
  public setKindEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CapabilityStatement.kind`;
      assertEnumCodeType<CapabilityStatementKindEnum>(enumType, CapabilityStatementKindEnum, errMsgPrefix);
      this.kind = enumType;
    } else {
      this.kind = null;
    }
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
  public setKindElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.kind; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.kind = new EnumCodeType(element, this.capabilityStatementKindEnum);
    } else {
      this.kind = null;
    }
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
  public setKind(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.kind (${String(value)})`;
      this.kind = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.capabilityStatementKindEnum);
    } else {
      this.kind = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKind(): boolean {
    return this.hasKindEnumType();
  }

  /**
   * @returns the `instantiates` property value as a CanonicalType array
   */
  public getInstantiatesElement(): CanonicalType[] {
    return this.instantiates ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `instantiates` property.
   *
   * @param element - the `instantiates` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.instantiates; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.instantiates = element;
    } else {
      this.instantiates = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `instantiates` array property.
   *
   * @param element - the `instantiates` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiatesElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.instantiates; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initInstantiates();
      this.instantiates?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiates` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesElement(): boolean {
    return isDefinedList<CanonicalType>(this.instantiates) && this.instantiates.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `instantiates` property value as a fhirCanonical array
   */
  public getInstantiates(): fhirCanonical[] {
    this.initInstantiates();
    const instantiatesValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.instantiates!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        instantiatesValues.push(value);
      }
    }
    return instantiatesValues;
  }

  /**
   * Assigns the provided primitive value array to the `instantiates` property.
   *
   * @param value - the `instantiates` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiates(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const instantiatesElements = [] as CanonicalType[];
      for (const instantiatesValue of value) {
        const optErrMsg = `Invalid CapabilityStatement.instantiates array item (${String(instantiatesValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(instantiatesValue, fhirCanonicalSchema, optErrMsg));
        instantiatesElements.push(element);
      }
      this.instantiates = instantiatesElements;
    } else {
      this.instantiates = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `instantiates` array property.
   *
   * @param value - the `instantiates` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addInstantiates(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.instantiates array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initInstantiates();
      this.addInstantiatesElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiates` property exists and has a value; `false` otherwise
   */
  public hasInstantiates(): boolean {
    return this.hasInstantiatesElement();
  }

  /**
   * Initialize the `instantiates` property
   */
  private initInstantiates(): void {
    if (!this.hasInstantiates()) {
      this.instantiates = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `imports` property value as a CanonicalType array
   */
  public getImportsElement(): CanonicalType[] {
    return this.imports ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `imports` property.
   *
   * @param element - the `imports` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setImportsElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.imports; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.imports = element;
    } else {
      this.imports = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `imports` array property.
   *
   * @param element - the `imports` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addImportsElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.imports; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initImports();
      this.imports?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `imports` property exists and has a value; `false` otherwise
   */
  public hasImportsElement(): boolean {
    return isDefinedList<CanonicalType>(this.imports) && this.imports.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `imports` property value as a fhirCanonical array
   */
  public getImports(): fhirCanonical[] {
    this.initImports();
    const importsValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.imports!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        importsValues.push(value);
      }
    }
    return importsValues;
  }

  /**
   * Assigns the provided primitive value array to the `imports` property.
   *
   * @param value - the `imports` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setImports(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const importsElements = [] as CanonicalType[];
      for (const importsValue of value) {
        const optErrMsg = `Invalid CapabilityStatement.imports array item (${String(importsValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(importsValue, fhirCanonicalSchema, optErrMsg));
        importsElements.push(element);
      }
      this.imports = importsElements;
    } else {
      this.imports = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `imports` array property.
   *
   * @param value - the `imports` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addImports(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.imports array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initImports();
      this.addImportsElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `imports` property exists and has a value; `false` otherwise
   */
  public hasImports(): boolean {
    return this.hasImportsElement();
  }

  /**
   * Initialize the `imports` property
   */
  private initImports(): void {
    if (!this.hasImports()) {
      this.imports = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `software` property value as a CapabilityStatementSoftwareComponent object if defined; else an empty CapabilityStatementSoftwareComponent object
   */
  public getSoftware(): CapabilityStatementSoftwareComponent {
    return this.software ?? new CapabilityStatementSoftwareComponent();
  }

  /**
   * Assigns the provided Software object value to the `software` property.
   *
   * @param value - the `software` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSoftware(value: CapabilityStatementSoftwareComponent | undefined): this {
    if (isDefined<CapabilityStatementSoftwareComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.software; Provided element is not an instance of CapabilityStatementSoftwareComponent.`;
      assertFhirType<CapabilityStatementSoftwareComponent>(value, CapabilityStatementSoftwareComponent, optErrMsg);
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
    return isDefined<CapabilityStatementSoftwareComponent>(this.software) && !this.software.isEmpty();
  }

  /**
   * @returns the `implementation` property value as a CapabilityStatementImplementationComponent object if defined; else an empty CapabilityStatementImplementationComponent object
   */
  public getImplementation(): CapabilityStatementImplementationComponent {
    return this.implementation ?? new CapabilityStatementImplementationComponent();
  }

  /**
   * Assigns the provided Implementation object value to the `implementation` property.
   *
   * @param value - the `implementation` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setImplementation(value: CapabilityStatementImplementationComponent | undefined): this {
    if (isDefined<CapabilityStatementImplementationComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.implementation; Provided element is not an instance of CapabilityStatementImplementationComponent.`;
      assertFhirType<CapabilityStatementImplementationComponent>(value, CapabilityStatementImplementationComponent, optErrMsg);
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
    return isDefined<CapabilityStatementImplementationComponent>(this.implementation) && !this.implementation.isEmpty();
  }

  /**
   * @returns the `fhirVersion` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersionEnumType(): EnumCodeType | null {
    return this.fhirVersion;
  }

  /**
   * Assigns the provided EnumCodeType value to the `fhirVersion` property.
   *
   * @param enumType - the `fhirVersion` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public setFhirVersionEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CapabilityStatement.fhirVersion`;
      assertEnumCodeType<FhirVersionEnum>(enumType, FhirVersionEnum, errMsgPrefix);
      this.fhirVersion = enumType;
    } else {
      this.fhirVersion = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `fhirVersion` property exists and has a value; `false` otherwise
   */
  public hasFhirVersionEnumType(): boolean {
    return isDefined<EnumCodeType>(this.fhirVersion) && !this.fhirVersion.isEmpty() && this.fhirVersion.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `fhirVersion` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersionElement(): CodeType | null {
    if (this.fhirVersion === null) {
      return null;
    }
    return this.fhirVersion as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `fhirVersion` property.
   *
   * @param element - the `fhirVersion` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public setFhirVersionElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.fhirVersion; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.fhirVersion = new EnumCodeType(element, this.fhirVersionEnum);
    } else {
      this.fhirVersion = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `fhirVersion` property exists and has a value; `false` otherwise
   */
  public hasFhirVersionElement(): boolean {
    return this.hasFhirVersionEnumType();
  }

  /**
   * @returns the `fhirVersion` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersion(): fhirCode | null {
    if (this.fhirVersion === null) {
      return null;
    }
    return this.fhirVersion.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `fhirVersion` property.
   *
   * @param value - the `fhirVersion` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public setFhirVersion(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.fhirVersion (${String(value)})`;
      this.fhirVersion = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fhirVersionEnum);
    } else {
      this.fhirVersion = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `fhirVersion` property exists and has a value; `false` otherwise
   */
  public hasFhirVersion(): boolean {
    return this.hasFhirVersionEnumType();
  }

  /**
   * @returns the `format` property value as a CodeType array
   */
  public getFormatElement(): CodeType[] {
    return this.format ?? ([] as CodeType[]);
  }

  /**
   * Assigns the provided CodeType array value to the `format` property.
   *
   * @param element - the `format` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFormatElement(element: CodeType[] | undefined | null): this {
     if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.format; Provided value array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      this.format = element;
    } else {
      this.format = null;
    }
    return this;
  }

  /**
   * Add the provided CodeType value to the `format` array property.
   *
   * @param element - the `format` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addFormatElement(element: CodeType): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.format; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initFormat();
      this.format?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `format` property exists and has a value; `false` otherwise
   */
  public hasFormatElement(): boolean {
    return isDefinedList<CodeType>(this.format) && this.format.some((item: CodeType) => !item.isEmpty());
  }

  /**
   * @returns the `format` property value as a fhirCode array
   */
  public getFormat(): fhirCode[] {
    this.initFormat();
    const formatValues = [] as fhirCode[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.format!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        formatValues.push(value);
      }
    }
    return formatValues;
  }

  /**
   * Assigns the provided primitive value array to the `format` property.
   *
   * @param value - the `format` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFormat(value: fhirCode[] | undefined | null): this {
    if (isDefinedList<fhirCode>(value)) {
      const formatElements = [] as CodeType[];
      for (const formatValue of value) {
        const optErrMsg = `Invalid CapabilityStatement.format array item (${String(formatValue)})`;
        const element = new CodeType(parseFhirPrimitiveData(formatValue, fhirCodeSchema, optErrMsg));
        formatElements.push(element);
      }
      this.format = formatElements;
    } else {
      this.format = null;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `format` array property.
   *
   * @param value - the `format` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addFormat(value: fhirCode): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.format array item (${String(value)})`;
      const element = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
      this.initFormat();
      this.addFormatElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `format` property exists and has a value; `false` otherwise
   */
  public hasFormat(): boolean {
    return this.hasFormatElement();
  }

  /**
   * Initialize the `format` property
   */
  private initFormat(): void {
    if (!this.hasFormat()) {
      this.format = [] as CodeType[];
    }
  }

  /**
   * @returns the `patchFormat` property value as a CodeType array
   */
  public getPatchFormatElement(): CodeType[] {
    return this.patchFormat ?? ([] as CodeType[]);
  }

  /**
   * Assigns the provided CodeType array value to the `patchFormat` property.
   *
   * @param element - the `patchFormat` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPatchFormatElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.patchFormat; Provided value array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      this.patchFormat = element;
    } else {
      this.patchFormat = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeType value to the `patchFormat` array property.
   *
   * @param element - the `patchFormat` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPatchFormatElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.patchFormat; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initPatchFormat();
      this.patchFormat?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `patchFormat` property exists and has a value; `false` otherwise
   */
  public hasPatchFormatElement(): boolean {
    return isDefinedList<CodeType>(this.patchFormat) && this.patchFormat.some((item: CodeType) => !item.isEmpty());
  }

  /**
   * @returns the `patchFormat` property value as a fhirCode array
   */
  public getPatchFormat(): fhirCode[] {
    this.initPatchFormat();
    const patchFormatValues = [] as fhirCode[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.patchFormat!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        patchFormatValues.push(value);
      }
    }
    return patchFormatValues;
  }

  /**
   * Assigns the provided primitive value array to the `patchFormat` property.
   *
   * @param value - the `patchFormat` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPatchFormat(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const patchFormatElements = [] as CodeType[];
      for (const patchFormatValue of value) {
        const optErrMsg = `Invalid CapabilityStatement.patchFormat array item (${String(patchFormatValue)})`;
        const element = new CodeType(parseFhirPrimitiveData(patchFormatValue, fhirCodeSchema, optErrMsg));
        patchFormatElements.push(element);
      }
      this.patchFormat = patchFormatElements;
    } else {
      this.patchFormat = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `patchFormat` array property.
   *
   * @param value - the `patchFormat` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPatchFormat(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.patchFormat array item (${String(value)})`;
      const element = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
      this.initPatchFormat();
      this.addPatchFormatElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `patchFormat` property exists and has a value; `false` otherwise
   */
  public hasPatchFormat(): boolean {
    return this.hasPatchFormatElement();
  }

  /**
   * Initialize the `patchFormat` property
   */
  private initPatchFormat(): void {
    if (!this.hasPatchFormat()) {
      this.patchFormat = [] as CodeType[];
    }
  }

  /**
   * @returns the `implementationGuide` property value as a CanonicalType array
   */
  public getImplementationGuideElement(): CanonicalType[] {
    return this.implementationGuide ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `implementationGuide` property.
   *
   * @param element - the `implementationGuide` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setImplementationGuideElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.implementationGuide; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.implementationGuide = element;
    } else {
      this.implementationGuide = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `implementationGuide` array property.
   *
   * @param element - the `implementationGuide` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addImplementationGuideElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.implementationGuide; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initImplementationGuide();
      this.implementationGuide?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `implementationGuide` property exists and has a value; `false` otherwise
   */
  public hasImplementationGuideElement(): boolean {
    return isDefinedList<CanonicalType>(this.implementationGuide) && this.implementationGuide.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `implementationGuide` property value as a fhirCanonical array
   */
  public getImplementationGuide(): fhirCanonical[] {
    this.initImplementationGuide();
    const implementationGuideValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.implementationGuide!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        implementationGuideValues.push(value);
      }
    }
    return implementationGuideValues;
  }

  /**
   * Assigns the provided primitive value array to the `implementationGuide` property.
   *
   * @param value - the `implementationGuide` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setImplementationGuide(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const implementationGuideElements = [] as CanonicalType[];
      for (const implementationGuideValue of value) {
        const optErrMsg = `Invalid CapabilityStatement.implementationGuide array item (${String(implementationGuideValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(implementationGuideValue, fhirCanonicalSchema, optErrMsg));
        implementationGuideElements.push(element);
      }
      this.implementationGuide = implementationGuideElements;
    } else {
      this.implementationGuide = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `implementationGuide` array property.
   *
   * @param value - the `implementationGuide` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addImplementationGuide(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.implementationGuide array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initImplementationGuide();
      this.addImplementationGuideElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `implementationGuide` property exists and has a value; `false` otherwise
   */
  public hasImplementationGuide(): boolean {
    return this.hasImplementationGuideElement();
  }

  /**
   * Initialize the `implementationGuide` property
   */
  private initImplementationGuide(): void {
    if (!this.hasImplementationGuide()) {
      this.implementationGuide = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `rest` property value as a CapabilityStatementRestComponent array
   */
  public getRest(): CapabilityStatementRestComponent[] {
    return this.rest ?? ([] as CapabilityStatementRestComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementRestComponent array value to the `rest` property.
   *
   * @param value - the `rest` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRest(value: CapabilityStatementRestComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementRestComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest; Provided value array has an element that is not an instance of CapabilityStatementRestComponent.`;
      assertFhirTypeList<CapabilityStatementRestComponent>(value, CapabilityStatementRestComponent, optErrMsg);
      this.rest = value;
    } else {
      this.rest = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementRestComponent value to the `rest` array property.
   *
   * @param value - the `rest` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRest(value: CapabilityStatementRestComponent | undefined): this {
    if (isDefined<CapabilityStatementRestComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest; Provided element is not an instance of CapabilityStatementRestComponent.`;
      assertFhirType<CapabilityStatementRestComponent>(value, CapabilityStatementRestComponent, optErrMsg);
      this.initRest();
      this.rest?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `rest` property exists and has a value; `false` otherwise
   */
  public hasRest(): boolean {
    return isDefinedList<CapabilityStatementRestComponent>(this.rest) && this.rest.some((item: CapabilityStatementRestComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `rest` property
   */
  private initRest(): void {
    if(!this.hasRest()) {
      this.rest = [] as CapabilityStatementRestComponent[];
    }
  }

  /**
   * @returns the `messaging` property value as a CapabilityStatementMessagingComponent array
   */
  public getMessaging(): CapabilityStatementMessagingComponent[] {
    return this.messaging ?? ([] as CapabilityStatementMessagingComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementMessagingComponent array value to the `messaging` property.
   *
   * @param value - the `messaging` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMessaging(value: CapabilityStatementMessagingComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementMessagingComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging; Provided value array has an element that is not an instance of CapabilityStatementMessagingComponent.`;
      assertFhirTypeList<CapabilityStatementMessagingComponent>(value, CapabilityStatementMessagingComponent, optErrMsg);
      this.messaging = value;
    } else {
      this.messaging = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementMessagingComponent value to the `messaging` array property.
   *
   * @param value - the `messaging` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMessaging(value: CapabilityStatementMessagingComponent | undefined): this {
    if (isDefined<CapabilityStatementMessagingComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging; Provided element is not an instance of CapabilityStatementMessagingComponent.`;
      assertFhirType<CapabilityStatementMessagingComponent>(value, CapabilityStatementMessagingComponent, optErrMsg);
      this.initMessaging();
      this.messaging?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `messaging` property exists and has a value; `false` otherwise
   */
  public hasMessaging(): boolean {
    return isDefinedList<CapabilityStatementMessagingComponent>(this.messaging) && this.messaging.some((item: CapabilityStatementMessagingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `messaging` property
   */
  private initMessaging(): void {
    if(!this.hasMessaging()) {
      this.messaging = [] as CapabilityStatementMessagingComponent[];
    }
  }

  /**
   * @returns the `document` property value as a CapabilityStatementDocumentComponent array
   */
  public getDocument(): CapabilityStatementDocumentComponent[] {
    return this.document ?? ([] as CapabilityStatementDocumentComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementDocumentComponent array value to the `document` property.
   *
   * @param value - the `document` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDocument(value: CapabilityStatementDocumentComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementDocumentComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.document; Provided value array has an element that is not an instance of CapabilityStatementDocumentComponent.`;
      assertFhirTypeList<CapabilityStatementDocumentComponent>(value, CapabilityStatementDocumentComponent, optErrMsg);
      this.document = value;
    } else {
      this.document = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementDocumentComponent value to the `document` array property.
   *
   * @param value - the `document` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDocument(value: CapabilityStatementDocumentComponent | undefined): this {
    if (isDefined<CapabilityStatementDocumentComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.document; Provided element is not an instance of CapabilityStatementDocumentComponent.`;
      assertFhirType<CapabilityStatementDocumentComponent>(value, CapabilityStatementDocumentComponent, optErrMsg);
      this.initDocument();
      this.document?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `document` property exists and has a value; `false` otherwise
   */
  public hasDocument(): boolean {
    return isDefinedList<CapabilityStatementDocumentComponent>(this.document) && this.document.some((item: CapabilityStatementDocumentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `document` property
   */
  private initDocument(): void {
    if(!this.hasDocument()) {
      this.document = [] as CapabilityStatementDocumentComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CapabilityStatement';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
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
      this.kind,
      this.instantiates,
      this.imports,
      this.software,
      this.implementation,
      this.fhirVersion,
      this.format,
      this.patchFormat,
      this.implementationGuide,
      this.rest,
      this.messaging,
      this.document,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.date, this.kind, this.fhirVersion, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatement {
    const dest = new CapabilityStatement();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatement): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    dest.version = this.version?.copy();
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
    dest.kind = this.kind ? this.kind.copy() : null;
    const instantiatesList = copyListValues<CanonicalType>(this.instantiates);
    dest.instantiates = instantiatesList.length === 0 ? undefined : instantiatesList;
    const importsList = copyListValues<CanonicalType>(this.imports);
    dest.imports = importsList.length === 0 ? undefined : importsList;
    dest.software = this.software?.copy();
    dest.implementation = this.implementation?.copy();
    dest.fhirVersion = this.fhirVersion ? this.fhirVersion.copy() : null;
    const formatList = copyListValues<CodeType>(this.format);
    dest.format = formatList.length === 0 ? null : formatList;
    const patchFormatList = copyListValues<CodeType>(this.patchFormat);
    dest.patchFormat = patchFormatList.length === 0 ? undefined : patchFormatList;
    const implementationGuideList = copyListValues<CanonicalType>(this.implementationGuide);
    dest.implementationGuide = implementationGuideList.length === 0 ? undefined : implementationGuideList;
    const restList = copyListValues<CapabilityStatementRestComponent>(this.rest);
    dest.rest = restList.length === 0 ? undefined : restList;
    const messagingList = copyListValues<CapabilityStatementMessagingComponent>(this.messaging);
    dest.messaging = messagingList.length === 0 ? undefined : messagingList;
    const documentList = copyListValues<CapabilityStatementDocumentComponent>(this.document);
    dest.document = documentList.length === 0 ? undefined : documentList;
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
      jsonObj['status'] = null;
    }

    if (this.hasExperimentalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExperimentalElement(), 'experimental', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    } else {
      jsonObj['date'] = null;
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

    if (this.hasKindElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getKindElement()!, 'kind', jsonObj);
    } else {
      jsonObj['kind'] = null;
    }

    if (this.hasInstantiates()) {
      setFhirPrimitiveListJson(this.getInstantiatesElement(), 'instantiates', jsonObj);
    }

    if (this.hasImports()) {
      setFhirPrimitiveListJson(this.getImportsElement(), 'imports', jsonObj);
    }

    if (this.hasSoftware()) {
      setFhirBackboneElementJson(this.getSoftware(), 'software', jsonObj);
    }

    if (this.hasImplementation()) {
      setFhirBackboneElementJson(this.getImplementation(), 'implementation', jsonObj);
    }

    if (this.hasFhirVersionElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getFhirVersionElement()!, 'fhirVersion', jsonObj);
    } else {
      jsonObj['fhirVersion'] = null;
    }

    if (this.hasFormatElement()) {
      setFhirPrimitiveListJson(this.getFormatElement(), 'format', jsonObj);
    } else {
      jsonObj['format'] = null;
    }

    if (this.hasPatchFormat()) {
      setFhirPrimitiveListJson(this.getPatchFormatElement(), 'patchFormat', jsonObj);
    }

    if (this.hasImplementationGuide()) {
      setFhirPrimitiveListJson(this.getImplementationGuideElement(), 'implementationGuide', jsonObj);
    }

    if (this.hasRest()) {
      setFhirBackboneElementListJson(this.getRest(), 'rest', jsonObj);
    }

    if (this.hasMessaging()) {
      setFhirBackboneElementListJson(this.getMessaging(), 'messaging', jsonObj);
    }

    if (this.hasDocument()) {
      setFhirBackboneElementListJson(this.getDocument(), 'document', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * CapabilityStatementSoftwareComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Software that is covered by this capability statement
 * - **Definition:** Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementSoftwareComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `CapabilityStatementSoftwareComponent` JSON to instantiate the CapabilityStatementSoftwareComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementSoftwareComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementSoftwareComponent
   * @returns CapabilityStatementSoftwareComponent data model or undefined for `CapabilityStatementSoftwareComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementSoftwareComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementSoftwareComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementSoftwareComponent();

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

    fieldName = 'version';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setVersionElement(datatype);
    }

    fieldName = 'releaseDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setReleaseDateElement(datatype);
    }

    return instance;
  }

  /**
   * CapabilityStatement.software.name Element
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
   * CapabilityStatement.software.version Element
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

  /**
   * CapabilityStatement.software.releaseDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date this version was released
   * - **Definition:** Date this version of the software was released.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private releaseDate?: DateTimeType | undefined;

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
      const optErrMsg = `Invalid CapabilityStatement.software.name; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.software.name (${String(value)})`;
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
      const optErrMsg = `Invalid CapabilityStatement.software.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.software.version (${String(value)})`;
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
   * @returns the `releaseDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getReleaseDateElement(): DateTimeType {
    return this.releaseDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `releaseDate` property.
   *
   * @param element - the `releaseDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReleaseDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.software.releaseDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.releaseDate = element;
    } else {
      this.releaseDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `releaseDate` property exists and has a value; `false` otherwise
   */
  public hasReleaseDateElement(): boolean {
    return isDefined<DateTimeType>(this.releaseDate) && !this.releaseDate.isEmpty();
  }

  /**
   * @returns the `releaseDate` property value as a fhirDateTime if defined; else undefined
   */
  public getReleaseDate(): fhirDateTime | undefined {
    return this.releaseDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `releaseDate` property.
   *
   * @param value - the `releaseDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReleaseDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.software.releaseDate (${String(value)})`;
      this.releaseDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.releaseDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `releaseDate` property exists and has a value; `false` otherwise
   */
  public hasReleaseDate(): boolean {
    return this.hasReleaseDateElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CapabilityStatement.software';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.version,
      this.releaseDate,
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
  public override copy(): CapabilityStatementSoftwareComponent {
    const dest = new CapabilityStatementSoftwareComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementSoftwareComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.version = this.version?.copy();
    dest.releaseDate = this.releaseDate?.copy();
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

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasReleaseDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getReleaseDateElement(), 'releaseDate', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementImplementationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** If this describes a specific instance
 * - **Definition:** Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementImplementationComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `CapabilityStatementImplementationComponent` JSON to instantiate the CapabilityStatementImplementationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementImplementationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementImplementationComponent
   * @returns CapabilityStatementImplementationComponent data model or undefined for `CapabilityStatementImplementationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementImplementationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementImplementationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementImplementationComponent();

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
      if (datatype === undefined) {
        instance.setDescription(null);
      } else {
        instance.setDescriptionElement(datatype);
      }
    } else {
      instance.setDescription(null);
    }

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UrlType | undefined = fhirParser.parseUrlType(dtJson, dtSiblingJson);
      instance.setUrlElement(datatype);
    }

    fieldName = 'custodian';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCustodian(datatype);
    }

    return instance;
  }

  /**
   * CapabilityStatement.implementation.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes this specific instance
   * - **Definition:** Information about the specific installation that this capability statement relates to.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description: StringType | null;

  /**
   * CapabilityStatement.implementation.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Base URL for the installation
   * - **Definition:** An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
   * - **FHIR Type:** `url`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UrlType | undefined;

  /**
   * CapabilityStatement.implementation.custodian Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Organization that manages the data
   * - **Definition:** The organization responsible for the management of the instance and oversight of the data on the server at the specified URL.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private custodian?: Reference | undefined;

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
  public setDescriptionElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.implementation.description; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.description = element;
    } else {
      this.description = null;
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
  public setDescription(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.implementation.description (${String(value)})`;
      this.description = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.description = null;
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
      const optErrMsg = `Invalid CapabilityStatement.implementation.url; Provided element is not an instance of UrlType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.implementation.url (${String(value)})`;
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

  /**
   * @returns the `custodian` property value as a Reference object; else an empty Reference object
   */
  public getCustodian(): Reference {
    return this.custodian ?? new Reference();
  }

  /**
   * Assigns the provided Custodian object value to the `custodian` property.
   *
   * @decorator `@ReferenceTargets('CapabilityStatement.implementation.custodian', ['Organization',])`
   *
   * @param value - the `custodian` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('CapabilityStatement.implementation.custodian', [
    'Organization',
  ])
  public setCustodian(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.custodian = value;
    } else {
      this.custodian = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `custodian` property exists and has a value; `false` otherwise
   */
  public hasCustodian(): boolean {
    return isDefined<Reference>(this.custodian) && !this.custodian.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CapabilityStatement.implementation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.url,
      this.custodian,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.description, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatementImplementationComponent {
    const dest = new CapabilityStatementImplementationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementImplementationComponent): void {
    super.copyValues(dest);
    dest.description = this.description ? this.description.copy() : null;
    dest.url = this.url?.copy();
    dest.custodian = this.custodian?.copy();
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
    } else {
      jsonObj['description'] = null;
    }

    if (this.hasUrlElement()) {
      setFhirPrimitiveJson<fhirUrl>(this.getUrlElement(), 'url', jsonObj);
    }

    if (this.hasCustodian()) {
      setFhirComplexJson(this.getCustodian(), 'custodian', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementRestComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** If the endpoint is a RESTful one
 * - **Definition:** A definition of the restful capabilities of the solution, if any.
 * - **Comment:** Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementRestComponent extends BackboneElement implements IBackboneElement {
  constructor(mode: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.restfulCapabilityModeEnum = new RestfulCapabilityModeEnum();

    this.mode = constructorCodeValueAsEnumCodeType<RestfulCapabilityModeEnum>(
      mode,
      RestfulCapabilityModeEnum,
      this.restfulCapabilityModeEnum,
      'CapabilityStatement.rest.mode',
    );
  }

  /**
   * Parse the provided `CapabilityStatementRestComponent` JSON to instantiate the CapabilityStatementRestComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementRestComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementRestComponent
   * @returns CapabilityStatementRestComponent data model or undefined for `CapabilityStatementRestComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementRestComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementRestComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementRestComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'mode';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setMode(null);
      } else {
        instance.setModeElement(datatype);
      }
    } else {
      instance.setMode(null);
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    fieldName = 'security';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: CapabilityStatementRestSecurityComponent | undefined = CapabilityStatementRestSecurityComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSecurity(component);
    }

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementRestResourceComponent | undefined = CapabilityStatementRestResourceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addResource(component);
        }
      });
    }

    fieldName = 'interaction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementRestInteractionComponent | undefined = CapabilityStatementRestInteractionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInteraction(component);
        }
      });
    }

    fieldName = 'searchParam';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementRestResourceSearchParamComponent | undefined = CapabilityStatementRestResourceSearchParamComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSearchParam(component);
        }
      });
    }

    fieldName = 'operation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementRestResourceOperationComponent | undefined = CapabilityStatementRestResourceOperationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOperation(component);
        }
      });
    }

    fieldName = 'compartment';
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
          instance.addCompartmentElement(datatype);
        }
      });
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: RestfulCapabilityMode
   *
   * @see {@link RestfulCapabilityModeEnum }
   */
  private readonly restfulCapabilityModeEnum: RestfulCapabilityModeEnum;

  /**
   * CapabilityStatement.rest.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** client | server
   * - **Definition:** Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RestfulCapabilityModeEnum }
   */
  private mode: EnumCodeType | null;

  /**
   * CapabilityStatement.rest.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General description of implementation
   * - **Definition:** Information about the system\'s restful capabilities that apply across all applications, such as security.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: MarkdownType | undefined;

  /**
   * CapabilityStatement.rest.security Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Information about security of implementation
   * - **Definition:** Information about security implementation from an interface perspective - what a client needs to know.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private security?: CapabilityStatementRestSecurityComponent | undefined;

  /**
   * CapabilityStatement.rest.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource served on the REST interface
   * - **Definition:** A specification of the restful capabilities of the solution for a specific resource type.
   * - **Comment:** Max of one repetition per resource type.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource?: CapabilityStatementRestResourceComponent[] | undefined;

  /**
   * CapabilityStatement.rest.interaction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What operations are supported?
   * - **Definition:** A specification of restful operations supported by the system.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private interaction?: CapabilityStatementRestInteractionComponent[] | undefined;

  /**
   * CapabilityStatement.rest.searchParam Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Search parameters for searching all resources
   * - **Definition:** Search parameters that are supported for searching all resources for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
   * - **Comment:** Typically, the only search parameters supported for all searches are those that apply to all resources - tags, profiles, text search etc. These search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](https://hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](https://hl7.org/fhir/searchparameter.html#) definitions.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private searchParam?: CapabilityStatementRestResourceSearchParamComponent[] | undefined;

  /**
   * CapabilityStatement.rest.operation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definition of a system level operation
   * - **Definition:** Definition of an operation or a named query together with its parameters and their meaning and type.
   * - **Comment:** CapabilityStatement.rest.operation is for operations invoked at the system level, or for operations that are supported across multiple resource types. Operations linked from CapabilityStatement.rest.operation must have OperationDefinition.system = true, or more than one Operation.resource.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private operation?: CapabilityStatementRestResourceOperationComponent[] | undefined;

  /**
   * CapabilityStatement.rest.compartment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Compartments served/used by system
   * - **Definition:** An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL .
   * - **Comment:** At present, the only defined compartments are at [CompartmentDefinition](https://hl7.org/fhir/compartmentdefinition.html).
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CompartmentDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private compartment?: CanonicalType[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `mode` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RestfulCapabilityModeEnum }
   */
  public getModeEnumType(): EnumCodeType | null {
    return this.mode;
  }

  /**
   * Assigns the provided EnumCodeType value to the `mode` property.
   *
   * @param enumType - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RestfulCapabilityModeEnum }
   */
  public setModeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CapabilityStatement.rest.mode`;
      assertEnumCodeType<RestfulCapabilityModeEnum>(enumType, RestfulCapabilityModeEnum, errMsgPrefix);
      this.mode = enumType;
    } else {
      this.mode = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasModeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.mode) && !this.mode.isEmpty() && this.mode.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `mode` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RestfulCapabilityModeEnum }
   */
  public getModeElement(): CodeType | null {
    if (this.mode === null) {
      return null;
    }
    return this.mode as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `mode` property.
   *
   * @param element - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RestfulCapabilityModeEnum }
   */
  public setModeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.mode; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.mode = new EnumCodeType(element, this.restfulCapabilityModeEnum);
    } else {
      this.mode = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasModeElement(): boolean {
    return this.hasModeEnumType();
  }

  /**
   * @returns the `mode` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RestfulCapabilityModeEnum }
   */
  public getMode(): fhirCode | null {
    if (this.mode === null) {
      return null;
    }
    return this.mode.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `mode` property.
   *
   * @param value - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RestfulCapabilityModeEnum }
   */
  public setMode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.mode (${String(value)})`;
      this.mode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.restfulCapabilityModeEnum);
    } else {
      this.mode = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasMode(): boolean {
    return this.hasModeEnumType();
  }

  /**
   * @returns the `documentation` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDocumentationElement(): MarkdownType {
    return this.documentation ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `documentation` property.
   *
   * @param element - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentationElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.documentation; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.documentation) && !this.documentation.isEmpty();
  }

  /**
   * @returns the `documentation` property value as a fhirMarkdown if defined; else undefined
   */
  public getDocumentation(): fhirMarkdown | undefined {
    return this.documentation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `documentation` property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentation(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.documentation (${String(value)})`;
      this.documentation = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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

  /**
   * @returns the `security` property value as a CapabilityStatementRestSecurityComponent object if defined; else an empty CapabilityStatementRestSecurityComponent object
   */
  public getSecurity(): CapabilityStatementRestSecurityComponent {
    return this.security ?? new CapabilityStatementRestSecurityComponent();
  }

  /**
   * Assigns the provided Security object value to the `security` property.
   *
   * @param value - the `security` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSecurity(value: CapabilityStatementRestSecurityComponent | undefined): this {
    if (isDefined<CapabilityStatementRestSecurityComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.security; Provided element is not an instance of CapabilityStatementRestSecurityComponent.`;
      assertFhirType<CapabilityStatementRestSecurityComponent>(value, CapabilityStatementRestSecurityComponent, optErrMsg);
      this.security = value;
    } else {
      this.security = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `security` property exists and has a value; `false` otherwise
   */
  public hasSecurity(): boolean {
    return isDefined<CapabilityStatementRestSecurityComponent>(this.security) && !this.security.isEmpty();
  }

  /**
   * @returns the `resource` property value as a CapabilityStatementRestResourceComponent array
   */
  public getResource(): CapabilityStatementRestResourceComponent[] {
    return this.resource ?? ([] as CapabilityStatementRestResourceComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementRestResourceComponent array value to the `resource` property.
   *
   * @param value - the `resource` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setResource(value: CapabilityStatementRestResourceComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementRestResourceComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource; Provided value array has an element that is not an instance of CapabilityStatementRestResourceComponent.`;
      assertFhirTypeList<CapabilityStatementRestResourceComponent>(value, CapabilityStatementRestResourceComponent, optErrMsg);
      this.resource = value;
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementRestResourceComponent value to the `resource` array property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addResource(value: CapabilityStatementRestResourceComponent | undefined): this {
    if (isDefined<CapabilityStatementRestResourceComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource; Provided element is not an instance of CapabilityStatementRestResourceComponent.`;
      assertFhirType<CapabilityStatementRestResourceComponent>(value, CapabilityStatementRestResourceComponent, optErrMsg);
      this.initResource();
      this.resource?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return isDefinedList<CapabilityStatementRestResourceComponent>(this.resource) && this.resource.some((item: CapabilityStatementRestResourceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `resource` property
   */
  private initResource(): void {
    if(!this.hasResource()) {
      this.resource = [] as CapabilityStatementRestResourceComponent[];
    }
  }

  /**
   * @returns the `interaction` property value as a CapabilityStatementRestInteractionComponent array
   */
  public getInteraction(): CapabilityStatementRestInteractionComponent[] {
    return this.interaction ?? ([] as CapabilityStatementRestInteractionComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementRestInteractionComponent array value to the `interaction` property.
   *
   * @param value - the `interaction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInteraction(value: CapabilityStatementRestInteractionComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementRestInteractionComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.interaction; Provided value array has an element that is not an instance of CapabilityStatementRestInteractionComponent.`;
      assertFhirTypeList<CapabilityStatementRestInteractionComponent>(value, CapabilityStatementRestInteractionComponent, optErrMsg);
      this.interaction = value;
    } else {
      this.interaction = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementRestInteractionComponent value to the `interaction` array property.
   *
   * @param value - the `interaction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInteraction(value: CapabilityStatementRestInteractionComponent | undefined): this {
    if (isDefined<CapabilityStatementRestInteractionComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.interaction; Provided element is not an instance of CapabilityStatementRestInteractionComponent.`;
      assertFhirType<CapabilityStatementRestInteractionComponent>(value, CapabilityStatementRestInteractionComponent, optErrMsg);
      this.initInteraction();
      this.interaction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `interaction` property exists and has a value; `false` otherwise
   */
  public hasInteraction(): boolean {
    return isDefinedList<CapabilityStatementRestInteractionComponent>(this.interaction) && this.interaction.some((item: CapabilityStatementRestInteractionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `interaction` property
   */
  private initInteraction(): void {
    if(!this.hasInteraction()) {
      this.interaction = [] as CapabilityStatementRestInteractionComponent[];
    }
  }

  /**
   * @returns the `searchParam` property value as a CapabilityStatementRestResourceSearchParamComponent array
   */
  public getSearchParam(): CapabilityStatementRestResourceSearchParamComponent[] {
    return this.searchParam ?? ([] as CapabilityStatementRestResourceSearchParamComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementRestResourceSearchParamComponent array value to the `searchParam` property.
   *
   * @param value - the `searchParam` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSearchParam(value: CapabilityStatementRestResourceSearchParamComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementRestResourceSearchParamComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.searchParam; Provided value array has an element that is not an instance of CapabilityStatementRestResourceSearchParamComponent.`;
      assertFhirTypeList<CapabilityStatementRestResourceSearchParamComponent>(value, CapabilityStatementRestResourceSearchParamComponent, optErrMsg);
      this.searchParam = value;
    } else {
      this.searchParam = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementRestResourceSearchParamComponent value to the `searchParam` array property.
   *
   * @param value - the `searchParam` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSearchParam(value: CapabilityStatementRestResourceSearchParamComponent | undefined): this {
    if (isDefined<CapabilityStatementRestResourceSearchParamComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.searchParam; Provided element is not an instance of CapabilityStatementRestResourceSearchParamComponent.`;
      assertFhirType<CapabilityStatementRestResourceSearchParamComponent>(value, CapabilityStatementRestResourceSearchParamComponent, optErrMsg);
      this.initSearchParam();
      this.searchParam?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `searchParam` property exists and has a value; `false` otherwise
   */
  public hasSearchParam(): boolean {
    return isDefinedList<CapabilityStatementRestResourceSearchParamComponent>(this.searchParam) && this.searchParam.some((item: CapabilityStatementRestResourceSearchParamComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `searchParam` property
   */
  private initSearchParam(): void {
    if(!this.hasSearchParam()) {
      this.searchParam = [] as CapabilityStatementRestResourceSearchParamComponent[];
    }
  }

  /**
   * @returns the `operation` property value as a CapabilityStatementRestResourceOperationComponent array
   */
  public getOperation(): CapabilityStatementRestResourceOperationComponent[] {
    return this.operation ?? ([] as CapabilityStatementRestResourceOperationComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementRestResourceOperationComponent array value to the `operation` property.
   *
   * @param value - the `operation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperation(value: CapabilityStatementRestResourceOperationComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementRestResourceOperationComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.operation; Provided value array has an element that is not an instance of CapabilityStatementRestResourceOperationComponent.`;
      assertFhirTypeList<CapabilityStatementRestResourceOperationComponent>(value, CapabilityStatementRestResourceOperationComponent, optErrMsg);
      this.operation = value;
    } else {
      this.operation = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementRestResourceOperationComponent value to the `operation` array property.
   *
   * @param value - the `operation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOperation(value: CapabilityStatementRestResourceOperationComponent | undefined): this {
    if (isDefined<CapabilityStatementRestResourceOperationComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.operation; Provided element is not an instance of CapabilityStatementRestResourceOperationComponent.`;
      assertFhirType<CapabilityStatementRestResourceOperationComponent>(value, CapabilityStatementRestResourceOperationComponent, optErrMsg);
      this.initOperation();
      this.operation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `operation` property exists and has a value; `false` otherwise
   */
  public hasOperation(): boolean {
    return isDefinedList<CapabilityStatementRestResourceOperationComponent>(this.operation) && this.operation.some((item: CapabilityStatementRestResourceOperationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `operation` property
   */
  private initOperation(): void {
    if(!this.hasOperation()) {
      this.operation = [] as CapabilityStatementRestResourceOperationComponent[];
    }
  }

  /**
   * @returns the `compartment` property value as a CanonicalType array
   */
  public getCompartmentElement(): CanonicalType[] {
    return this.compartment ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `compartment` property.
   *
   * @param element - the `compartment` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompartmentElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.compartment; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.compartment = element;
    } else {
      this.compartment = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `compartment` array property.
   *
   * @param element - the `compartment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addCompartmentElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.compartment; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initCompartment();
      this.compartment?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `compartment` property exists and has a value; `false` otherwise
   */
  public hasCompartmentElement(): boolean {
    return isDefinedList<CanonicalType>(this.compartment) && this.compartment.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `compartment` property value as a fhirCanonical array
   */
  public getCompartment(): fhirCanonical[] {
    this.initCompartment();
    const compartmentValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.compartment!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        compartmentValues.push(value);
      }
    }
    return compartmentValues;
  }

  /**
   * Assigns the provided primitive value array to the `compartment` property.
   *
   * @param value - the `compartment` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCompartment(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const compartmentElements = [] as CanonicalType[];
      for (const compartmentValue of value) {
        const optErrMsg = `Invalid CapabilityStatement.rest.compartment array item (${String(compartmentValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(compartmentValue, fhirCanonicalSchema, optErrMsg));
        compartmentElements.push(element);
      }
      this.compartment = compartmentElements;
    } else {
      this.compartment = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `compartment` array property.
   *
   * @param value - the `compartment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addCompartment(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.compartment array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initCompartment();
      this.addCompartmentElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `compartment` property exists and has a value; `false` otherwise
   */
  public hasCompartment(): boolean {
    return this.hasCompartmentElement();
  }

  /**
   * Initialize the `compartment` property
   */
  private initCompartment(): void {
    if (!this.hasCompartment()) {
      this.compartment = [] as CanonicalType[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CapabilityStatement.rest';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.mode,
      this.documentation,
      this.security,
      this.resource,
      this.interaction,
      this.searchParam,
      this.operation,
      this.compartment,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.mode, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatementRestComponent {
    const dest = new CapabilityStatementRestComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementRestComponent): void {
    super.copyValues(dest);
    dest.mode = this.mode ? this.mode.copy() : null;
    dest.documentation = this.documentation?.copy();
    dest.security = this.security?.copy();
    const resourceList = copyListValues<CapabilityStatementRestResourceComponent>(this.resource);
    dest.resource = resourceList.length === 0 ? undefined : resourceList;
    const interactionList = copyListValues<CapabilityStatementRestInteractionComponent>(this.interaction);
    dest.interaction = interactionList.length === 0 ? undefined : interactionList;
    const searchParamList = copyListValues<CapabilityStatementRestResourceSearchParamComponent>(this.searchParam);
    dest.searchParam = searchParamList.length === 0 ? undefined : searchParamList;
    const operationList = copyListValues<CapabilityStatementRestResourceOperationComponent>(this.operation);
    dest.operation = operationList.length === 0 ? undefined : operationList;
    const compartmentList = copyListValues<CanonicalType>(this.compartment);
    dest.compartment = compartmentList.length === 0 ? undefined : compartmentList;
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

    if (this.hasModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getModeElement()!, 'mode', jsonObj);
    } else {
      jsonObj['mode'] = null;
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    if (this.hasSecurity()) {
      setFhirBackboneElementJson(this.getSecurity(), 'security', jsonObj);
    }

    if (this.hasResource()) {
      setFhirBackboneElementListJson(this.getResource(), 'resource', jsonObj);
    }

    if (this.hasInteraction()) {
      setFhirBackboneElementListJson(this.getInteraction(), 'interaction', jsonObj);
    }

    if (this.hasSearchParam()) {
      setFhirBackboneElementListJson(this.getSearchParam(), 'searchParam', jsonObj);
    }

    if (this.hasOperation()) {
      setFhirBackboneElementListJson(this.getOperation(), 'operation', jsonObj);
    }

    if (this.hasCompartment()) {
      setFhirPrimitiveListJson(this.getCompartmentElement(), 'compartment', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementRestSecurityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Information about security of implementation
 * - **Definition:** Information about security implementation from an interface perspective - what a client needs to know.
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementRestSecurityComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CapabilityStatementRestSecurityComponent` JSON to instantiate the CapabilityStatementRestSecurityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementRestSecurityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementRestSecurityComponent
   * @returns CapabilityStatementRestSecurityComponent data model or undefined for `CapabilityStatementRestSecurityComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementRestSecurityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementRestSecurityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementRestSecurityComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'cors';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setCorsElement(datatype);
    }

    fieldName = 'service';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addService(datatype);
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

    return instance;
  }

  /**
   * CapabilityStatement.rest.security.cors Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Adds CORS Headers (http://enable-cors.org/)
   * - **Definition:** Server adds CORS headers when responding to requests - this enables Javascript applications to use the server.
   * - **Comment:** The easiest CORS headers to add are Access-Control-Allow-Origin: * & Access-Control-Request-Method: GET, POST, PUT, DELETE. All servers SHOULD support CORS.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private cors?: BooleanType | undefined;

  /**
   * CapabilityStatement.rest.security.service Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates
   * - **Definition:** Types of security services that are supported/required by the system.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private service?: CodeableConcept[] | undefined;

  /**
   * CapabilityStatement.rest.security.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General description of how security works
   * - **Definition:** General description of how security works.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `cors` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getCorsElement(): BooleanType {
    return this.cors ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `cors` property.
   *
   * @param element - the `cors` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCorsElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.security.cors; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.cors = element;
    } else {
      this.cors = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cors` property exists and has a value; `false` otherwise
   */
  public hasCorsElement(): boolean {
    return isDefined<BooleanType>(this.cors) && !this.cors.isEmpty();
  }

  /**
   * @returns the `cors` property value as a fhirBoolean if defined; else undefined
   */
  public getCors(): fhirBoolean | undefined {
    return this.cors?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `cors` property.
   *
   * @param value - the `cors` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCors(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.security.cors (${String(value)})`;
      this.cors = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.cors = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cors` property exists and has a value; `false` otherwise
   */
  public hasCors(): boolean {
    return this.hasCorsElement();
  }

  /**
   * @returns the `service` property value as a CodeableConcept array
   */
  public getService(): CodeableConcept[] {
    return this.service ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `service` property.
   *
   * @param value - the `service` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setService(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.security.service; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.service = value;
    } else {
      this.service = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `service` array property.
   *
   * @param value - the `service` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addService(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.security.service; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initService();
      this.service?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `service` property exists and has a value; `false` otherwise
   */
  public hasService(): boolean {
    return isDefinedList<CodeableConcept>(this.service) && this.service.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `service` property
   */
  private initService(): void {
    if(!this.hasService()) {
      this.service = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid CapabilityStatement.rest.security.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.rest.security.description (${String(value)})`;
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
    return 'CapabilityStatement.rest.security';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.cors,
      this.service,
      this.description,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatementRestSecurityComponent {
    const dest = new CapabilityStatementRestSecurityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementRestSecurityComponent): void {
    super.copyValues(dest);
    dest.cors = this.cors?.copy();
    const serviceList = copyListValues<CodeableConcept>(this.service);
    dest.service = serviceList.length === 0 ? undefined : serviceList;
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

    if (this.hasCorsElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getCorsElement(), 'cors', jsonObj);
    }

    if (this.hasService()) {
      setFhirComplexListJson(this.getService(), 'service', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementRestResourceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Resource served on the REST interface
 * - **Definition:** A specification of the restful capabilities of the solution for a specific resource type.
 * - **Comment:** Max of one repetition per resource type.
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementRestResourceComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.resourceTypesEnum = new ResourceTypesEnum();
    this.versioningPolicyEnum = new VersioningPolicyEnum();
    this.conditionalReadStatusEnum = new ConditionalReadStatusEnum();
    this.conditionalDeleteStatusEnum = new ConditionalDeleteStatusEnum();
    this.referenceHandlingPolicyEnum = new ReferenceHandlingPolicyEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<ResourceTypesEnum>(
      type_,
      ResourceTypesEnum,
      this.resourceTypesEnum,
      'CapabilityStatement.rest.resource.type',
    );
  }

  /**
   * Parse the provided `CapabilityStatementRestResourceComponent` JSON to instantiate the CapabilityStatementRestResourceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementRestResourceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementRestResourceComponent
   * @returns CapabilityStatementRestResourceComponent data model or undefined for `CapabilityStatementRestResourceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementRestResourceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementRestResourceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementRestResourceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'profile';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setProfileElement(datatype);
    }

    fieldName = 'supportedProfile';
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
          instance.addSupportedProfileElement(datatype);
        }
      });
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    fieldName = 'interaction';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementRestResourceInteractionComponent | undefined = CapabilityStatementRestResourceInteractionComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInteraction(component);
        }
      });
    }

    fieldName = 'versioning';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setVersioningElement(datatype);
    }

    fieldName = 'readHistory';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setReadHistoryElement(datatype);
    }

    fieldName = 'updateCreate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setUpdateCreateElement(datatype);
    }

    fieldName = 'conditionalCreate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setConditionalCreateElement(datatype);
    }

    fieldName = 'conditionalRead';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setConditionalReadElement(datatype);
    }

    fieldName = 'conditionalUpdate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setConditionalUpdateElement(datatype);
    }

    fieldName = 'conditionalDelete';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setConditionalDeleteElement(datatype);
    }

    fieldName = 'referencePolicy';
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
          instance.addReferencePolicyElement(datatype);
        }
      });
    }

    fieldName = 'searchInclude';
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
          instance.addSearchIncludeElement(datatype);
        }
      });
    }

    fieldName = 'searchRevInclude';
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
          instance.addSearchRevIncludeElement(datatype);
        }
      });
    }

    fieldName = 'searchParam';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementRestResourceSearchParamComponent | undefined = CapabilityStatementRestResourceSearchParamComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSearchParam(component);
        }
      });
    }

    fieldName = 'operation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementRestResourceOperationComponent | undefined = CapabilityStatementRestResourceOperationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOperation(component);
        }
      });
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ResourceTypes
   *
   * @see {@link ResourceTypesEnum }
   */
  private readonly resourceTypesEnum: ResourceTypesEnum;

  /**
   * CapabilityStatement.rest.resource.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A resource type that is supported
   * - **Definition:** A type of resource exposed via the restful interface.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * CapabilityStatement.rest.resource.profile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Base System profile for all uses of resource
   * - **Definition:** A specification of the profile that describes the solution\'s overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles](https://hl7.org/fhir/profiling.html#profile-uses).
   * - **Comment:** The profile applies to all  resources of this type - i.e. it is the superset of what is supported by the system.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private profile?: CanonicalType | undefined;

  /**
   * CapabilityStatement.rest.resource.supportedProfile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Profiles for use cases supported
   * - **Definition:** A list of profiles that represent different use cases supported by the system. For a server, "supported by the system" means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles](https://hl7.org/fhir/profiling.html#profile-uses).
   * - **Comment:** Supported profiles are different than the profile that applies to a particular resource in .rest.resource.profile. The resource profile is a general statement of what features of the resource are supported overall by the system - the sum total of the facilities it supports. A supported profile is a deeper statement about the functionality of the data and services provided by the server (or used by the client). A typical case is a laboratory system that produces a set of different reports - this is the list of types of data that it publishes. A key aspect of declaring profiles here is the question of how the client converts knowledge that the server publishes this data into working with the data; the client can inspect individual resources to determine whether they conform to a particular profile, but how does it find the ones that do? It does so by searching using the _profile parameter, so any resources listed here must be valid values for the _profile resource (using the identifier in the target profile).
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private supportedProfile?: CanonicalType[] | undefined;

  /**
   * CapabilityStatement.rest.resource.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information about the use of the resource type
   * - **Definition:** Additional information about the resource type used by the system.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: MarkdownType | undefined;

  /**
   * CapabilityStatement.rest.resource.interaction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What operations are supported?
   * - **Definition:** Identifies a restful operation supported by the solution.
   * - **Comment:** In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private interaction?: CapabilityStatementRestResourceInteractionComponent[] | undefined;

  /**
   * FHIR CodeSystem: VersioningPolicy
   *
   * @see {@link VersioningPolicyEnum }
   */
  private readonly versioningPolicyEnum: VersioningPolicyEnum;

  /**
   * CapabilityStatement.rest.resource.versioning Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** no-version | versioned | versioned-update
   * - **Definition:** This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is \'versioned-update\', then the server supports all the versioning features, including using e-tags for version integrity in the API.
   * - **Comment:** If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link VersioningPolicyEnum }
   */
  private versioning?: EnumCodeType | undefined;

  /**
   * CapabilityStatement.rest.resource.readHistory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether vRead can return past versions
   * - **Definition:** A flag for whether the server is able to return past versions as part of the vRead operation.
   * - **Comment:** It is useful to support the vRead operation for current operations, even if past versions aren\'t available.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private readHistory?: BooleanType | undefined;

  /**
   * CapabilityStatement.rest.resource.updateCreate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If update can commit to a new identity
   * - **Definition:** A flag to indicate that the server allows or needs to allow the client to create new identities on the server (that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.
   * - **Comment:** Allowing the clients to create new identities on the server means that the system administrator needs to have confidence that the clients do not create clashing identities between them. Obviously, if there is only one client, this won\'t happen. While creating identities on the client means that the clients need to be managed, it\'s much more convenient for many scenarios if such management can be put in place.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private updateCreate?: BooleanType | undefined;

  /**
   * CapabilityStatement.rest.resource.conditionalCreate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If allows/uses conditional create
   * - **Definition:** A flag that indicates that the server supports conditional create.
   * - **Comment:** Conditional Create is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private conditionalCreate?: BooleanType | undefined;

  /**
   * FHIR CodeSystem: ConditionalReadStatus
   *
   * @see {@link ConditionalReadStatusEnum }
   */
  private readonly conditionalReadStatusEnum: ConditionalReadStatusEnum;

  /**
   * CapabilityStatement.rest.resource.conditionalRead Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** not-supported | modified-since | not-match | full-support
   * - **Definition:** A code that indicates how the server supports conditional read.
   * - **Comment:** Conditional Read is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ConditionalReadStatusEnum }
   */
  private conditionalRead?: EnumCodeType | undefined;

  /**
   * CapabilityStatement.rest.resource.conditionalUpdate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If allows/uses conditional update
   * - **Definition:** A flag that indicates that the server supports conditional update.
   * - **Comment:** Conditional Update is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private conditionalUpdate?: BooleanType | undefined;

  /**
   * FHIR CodeSystem: ConditionalDeleteStatus
   *
   * @see {@link ConditionalDeleteStatusEnum }
   */
  private readonly conditionalDeleteStatusEnum: ConditionalDeleteStatusEnum;

  /**
   * CapabilityStatement.rest.resource.conditionalDelete Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** not-supported | single | multiple - how conditional delete is supported
   * - **Definition:** A code that indicates how the server supports conditional delete.
   * - **Comment:** Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ConditionalDeleteStatusEnum }
   */
  private conditionalDelete?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: ReferenceHandlingPolicy
   *
   * @see {@link ReferenceHandlingPolicyEnum }
   */
  private readonly referenceHandlingPolicyEnum: ReferenceHandlingPolicyEnum;

  /**
   * CapabilityStatement.rest.resource.referencePolicy Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** literal | logical | resolves | enforced | local
   * - **Definition:** A set of flags that defines how references are supported.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ReferenceHandlingPolicyEnum }
   */
  private referencePolicy?: EnumCodeType[] | undefined;

  /**
   * CapabilityStatement.rest.resource.searchInclude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** _include values supported by the server
   * - **Definition:** A list of _include values supported by the server.
   * - **Comment:** If this list is empty, the server does not support includes.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private searchInclude?: StringType[] | undefined;

  /**
   * CapabilityStatement.rest.resource.searchRevInclude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** _revinclude values supported by the server
   * - **Definition:** A list of _revinclude (reverse include) values supported by the server.
   * - **Comment:** If this list is empty, the server does not support reverse includes.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private searchRevInclude?: StringType[] | undefined;

  /**
   * CapabilityStatement.rest.resource.searchParam Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Search parameters supported by implementation
   * - **Definition:** Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
   * - **Comment:** The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](https://hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](https://hl7.org/fhir/searchparameter.html#) definitions.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private searchParam?: CapabilityStatementRestResourceSearchParamComponent[] | undefined;

  /**
   * CapabilityStatement.rest.resource.operation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definition of a resource operation
   * - **Definition:** Definition of an operation or a named query together with its parameters and their meaning and type. Consult the definition of the operation for details about how to invoke the operation, and the parameters.
   * - **Comment:** Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.     If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private operation?: CapabilityStatementRestResourceOperationComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
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
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CapabilityStatement.rest.resource.type`;
      assertEnumCodeType<ResourceTypesEnum>(enumType, ResourceTypesEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
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
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.resourceTypesEnum);
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
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
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
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.resourceTypesEnum);
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
   * @returns the `profile` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getProfileElement(): CanonicalType {
    return this.profile ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `profile` property.
   *
   * @param element - the `profile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProfileElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.profile; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.profile = element;
    } else {
      this.profile = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfileElement(): boolean {
    return isDefined<CanonicalType>(this.profile) && !this.profile.isEmpty();
  }

  /**
   * @returns the `profile` property value as a fhirCanonical if defined; else undefined
   */
  public getProfile(): fhirCanonical | undefined {
    return this.profile?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `profile` property.
   *
   * @param value - the `profile` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProfile(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.profile (${String(value)})`;
      this.profile = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.profile = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfile(): boolean {
    return this.hasProfileElement();
  }

  /**
   * @returns the `supportedProfile` property value as a CanonicalType array
   */
  public getSupportedProfileElement(): CanonicalType[] {
    return this.supportedProfile ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `supportedProfile` property.
   *
   * @param element - the `supportedProfile` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSupportedProfileElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.supportedProfile; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.supportedProfile = element;
    } else {
      this.supportedProfile = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `supportedProfile` array property.
   *
   * @param element - the `supportedProfile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSupportedProfileElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.supportedProfile; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initSupportedProfile();
      this.supportedProfile?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportedProfile` property exists and has a value; `false` otherwise
   */
  public hasSupportedProfileElement(): boolean {
    return isDefinedList<CanonicalType>(this.supportedProfile) && this.supportedProfile.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `supportedProfile` property value as a fhirCanonical array
   */
  public getSupportedProfile(): fhirCanonical[] {
    this.initSupportedProfile();
    const supportedProfileValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.supportedProfile!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        supportedProfileValues.push(value);
      }
    }
    return supportedProfileValues;
  }

  /**
   * Assigns the provided primitive value array to the `supportedProfile` property.
   *
   * @param value - the `supportedProfile` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSupportedProfile(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const supportedProfileElements = [] as CanonicalType[];
      for (const supportedProfileValue of value) {
        const optErrMsg = `Invalid CapabilityStatement.rest.resource.supportedProfile array item (${String(supportedProfileValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(supportedProfileValue, fhirCanonicalSchema, optErrMsg));
        supportedProfileElements.push(element);
      }
      this.supportedProfile = supportedProfileElements;
    } else {
      this.supportedProfile = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `supportedProfile` array property.
   *
   * @param value - the `supportedProfile` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSupportedProfile(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.supportedProfile array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initSupportedProfile();
      this.addSupportedProfileElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportedProfile` property exists and has a value; `false` otherwise
   */
  public hasSupportedProfile(): boolean {
    return this.hasSupportedProfileElement();
  }

  /**
   * Initialize the `supportedProfile` property
   */
  private initSupportedProfile(): void {
    if (!this.hasSupportedProfile()) {
      this.supportedProfile = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `documentation` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDocumentationElement(): MarkdownType {
    return this.documentation ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `documentation` property.
   *
   * @param element - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentationElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.documentation; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.documentation) && !this.documentation.isEmpty();
  }

  /**
   * @returns the `documentation` property value as a fhirMarkdown if defined; else undefined
   */
  public getDocumentation(): fhirMarkdown | undefined {
    return this.documentation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `documentation` property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentation(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.documentation (${String(value)})`;
      this.documentation = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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

  /**
   * @returns the `interaction` property value as a CapabilityStatementRestResourceInteractionComponent array
   */
  public getInteraction(): CapabilityStatementRestResourceInteractionComponent[] {
    return this.interaction ?? ([] as CapabilityStatementRestResourceInteractionComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementRestResourceInteractionComponent array value to the `interaction` property.
   *
   * @param value - the `interaction` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInteraction(value: CapabilityStatementRestResourceInteractionComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementRestResourceInteractionComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.interaction; Provided value array has an element that is not an instance of CapabilityStatementRestResourceInteractionComponent.`;
      assertFhirTypeList<CapabilityStatementRestResourceInteractionComponent>(value, CapabilityStatementRestResourceInteractionComponent, optErrMsg);
      this.interaction = value;
    } else {
      this.interaction = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementRestResourceInteractionComponent value to the `interaction` array property.
   *
   * @param value - the `interaction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInteraction(value: CapabilityStatementRestResourceInteractionComponent | undefined): this {
    if (isDefined<CapabilityStatementRestResourceInteractionComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.interaction; Provided element is not an instance of CapabilityStatementRestResourceInteractionComponent.`;
      assertFhirType<CapabilityStatementRestResourceInteractionComponent>(value, CapabilityStatementRestResourceInteractionComponent, optErrMsg);
      this.initInteraction();
      this.interaction?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `interaction` property exists and has a value; `false` otherwise
   */
  public hasInteraction(): boolean {
    return isDefinedList<CapabilityStatementRestResourceInteractionComponent>(this.interaction) && this.interaction.some((item: CapabilityStatementRestResourceInteractionComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `interaction` property
   */
  private initInteraction(): void {
    if(!this.hasInteraction()) {
      this.interaction = [] as CapabilityStatementRestResourceInteractionComponent[];
    }
  }

  /**
   * @returns the `versioning` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VersioningPolicyEnum }
   */
  public getVersioningEnumType(): EnumCodeType | undefined {
    return this.versioning;
  }

  /**
   * Assigns the provided EnumCodeType value to the `versioning` property.
   *
   * @param enumType - the `versioning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VersioningPolicyEnum }
   */
  public setVersioningEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid CapabilityStatement.rest.resource.versioning';
      assertEnumCodeType<VersioningPolicyEnum>(enumType, VersioningPolicyEnum, errMsgPrefix);
      this.versioning = enumType;
    } else {
      this.versioning = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `versioning` property exists and has a value; `false` otherwise
   */
  public hasVersioningEnumType(): boolean {
    return isDefined<EnumCodeType>(this.versioning) && !this.versioning.isEmpty() && this.versioning.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `versioning` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VersioningPolicyEnum }
   */
  public getVersioningElement(): CodeType | undefined {
    if (this.versioning === undefined) {
      return undefined;
    }
    return this.versioning as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `versioning` property.
   *
   * @param element - the `versioning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VersioningPolicyEnum }
   */
  public setVersioningElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.versioning; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.versioning = new EnumCodeType(element, this.versioningPolicyEnum);
    } else {
      this.versioning = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `versioning` property exists and has a value; `false` otherwise
   */
  public hasVersioningElement(): boolean {
    return this.hasVersioningEnumType();
  }

  /**
   * @returns the `versioning` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VersioningPolicyEnum }
   */
  public getVersioning(): fhirCode | undefined {
    if (this.versioning === undefined) {
      return undefined;
    }
    return this.versioning.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `versioning` property.
   *
   * @param value - the `versioning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link VersioningPolicyEnum }
   */
  public setVersioning(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.versioning; Provided value is not an instance of fhirCode.`;
      this.versioning = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.versioningPolicyEnum);
    } else {
      this.versioning = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `versioning` property exists and has a value; `false` otherwise
   */
  public hasVersioning(): boolean {
    return this.hasVersioningEnumType();
  }

  /**
   * @returns the `readHistory` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getReadHistoryElement(): BooleanType {
    return this.readHistory ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `readHistory` property.
   *
   * @param element - the `readHistory` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReadHistoryElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.readHistory; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.readHistory = element;
    } else {
      this.readHistory = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `readHistory` property exists and has a value; `false` otherwise
   */
  public hasReadHistoryElement(): boolean {
    return isDefined<BooleanType>(this.readHistory) && !this.readHistory.isEmpty();
  }

  /**
   * @returns the `readHistory` property value as a fhirBoolean if defined; else undefined
   */
  public getReadHistory(): fhirBoolean | undefined {
    return this.readHistory?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `readHistory` property.
   *
   * @param value - the `readHistory` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReadHistory(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.readHistory (${String(value)})`;
      this.readHistory = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.readHistory = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `readHistory` property exists and has a value; `false` otherwise
   */
  public hasReadHistory(): boolean {
    return this.hasReadHistoryElement();
  }

  /**
   * @returns the `updateCreate` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getUpdateCreateElement(): BooleanType {
    return this.updateCreate ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `updateCreate` property.
   *
   * @param element - the `updateCreate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUpdateCreateElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.updateCreate; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.updateCreate = element;
    } else {
      this.updateCreate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `updateCreate` property exists and has a value; `false` otherwise
   */
  public hasUpdateCreateElement(): boolean {
    return isDefined<BooleanType>(this.updateCreate) && !this.updateCreate.isEmpty();
  }

  /**
   * @returns the `updateCreate` property value as a fhirBoolean if defined; else undefined
   */
  public getUpdateCreate(): fhirBoolean | undefined {
    return this.updateCreate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `updateCreate` property.
   *
   * @param value - the `updateCreate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUpdateCreate(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.updateCreate (${String(value)})`;
      this.updateCreate = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.updateCreate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `updateCreate` property exists and has a value; `false` otherwise
   */
  public hasUpdateCreate(): boolean {
    return this.hasUpdateCreateElement();
  }

  /**
   * @returns the `conditionalCreate` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getConditionalCreateElement(): BooleanType {
    return this.conditionalCreate ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `conditionalCreate` property.
   *
   * @param element - the `conditionalCreate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConditionalCreateElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.conditionalCreate; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.conditionalCreate = element;
    } else {
      this.conditionalCreate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionalCreate` property exists and has a value; `false` otherwise
   */
  public hasConditionalCreateElement(): boolean {
    return isDefined<BooleanType>(this.conditionalCreate) && !this.conditionalCreate.isEmpty();
  }

  /**
   * @returns the `conditionalCreate` property value as a fhirBoolean if defined; else undefined
   */
  public getConditionalCreate(): fhirBoolean | undefined {
    return this.conditionalCreate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `conditionalCreate` property.
   *
   * @param value - the `conditionalCreate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConditionalCreate(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.conditionalCreate (${String(value)})`;
      this.conditionalCreate = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.conditionalCreate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionalCreate` property exists and has a value; `false` otherwise
   */
  public hasConditionalCreate(): boolean {
    return this.hasConditionalCreateElement();
  }

  /**
   * @returns the `conditionalRead` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConditionalReadStatusEnum }
   */
  public getConditionalReadEnumType(): EnumCodeType | undefined {
    return this.conditionalRead;
  }

  /**
   * Assigns the provided EnumCodeType value to the `conditionalRead` property.
   *
   * @param enumType - the `conditionalRead` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConditionalReadStatusEnum }
   */
  public setConditionalReadEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid CapabilityStatement.rest.resource.conditionalRead';
      assertEnumCodeType<ConditionalReadStatusEnum>(enumType, ConditionalReadStatusEnum, errMsgPrefix);
      this.conditionalRead = enumType;
    } else {
      this.conditionalRead = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionalRead` property exists and has a value; `false` otherwise
   */
  public hasConditionalReadEnumType(): boolean {
    return isDefined<EnumCodeType>(this.conditionalRead) && !this.conditionalRead.isEmpty() && this.conditionalRead.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `conditionalRead` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConditionalReadStatusEnum }
   */
  public getConditionalReadElement(): CodeType | undefined {
    if (this.conditionalRead === undefined) {
      return undefined;
    }
    return this.conditionalRead as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `conditionalRead` property.
   *
   * @param element - the `conditionalRead` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConditionalReadStatusEnum }
   */
  public setConditionalReadElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.conditionalRead; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.conditionalRead = new EnumCodeType(element, this.conditionalReadStatusEnum);
    } else {
      this.conditionalRead = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionalRead` property exists and has a value; `false` otherwise
   */
  public hasConditionalReadElement(): boolean {
    return this.hasConditionalReadEnumType();
  }

  /**
   * @returns the `conditionalRead` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConditionalReadStatusEnum }
   */
  public getConditionalRead(): fhirCode | undefined {
    if (this.conditionalRead === undefined) {
      return undefined;
    }
    return this.conditionalRead.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `conditionalRead` property.
   *
   * @param value - the `conditionalRead` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ConditionalReadStatusEnum }
   */
  public setConditionalRead(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.conditionalRead; Provided value is not an instance of fhirCode.`;
      this.conditionalRead = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.conditionalReadStatusEnum);
    } else {
      this.conditionalRead = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionalRead` property exists and has a value; `false` otherwise
   */
  public hasConditionalRead(): boolean {
    return this.hasConditionalReadEnumType();
  }

  /**
   * @returns the `conditionalUpdate` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getConditionalUpdateElement(): BooleanType {
    return this.conditionalUpdate ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `conditionalUpdate` property.
   *
   * @param element - the `conditionalUpdate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConditionalUpdateElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.conditionalUpdate; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.conditionalUpdate = element;
    } else {
      this.conditionalUpdate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionalUpdate` property exists and has a value; `false` otherwise
   */
  public hasConditionalUpdateElement(): boolean {
    return isDefined<BooleanType>(this.conditionalUpdate) && !this.conditionalUpdate.isEmpty();
  }

  /**
   * @returns the `conditionalUpdate` property value as a fhirBoolean if defined; else undefined
   */
  public getConditionalUpdate(): fhirBoolean | undefined {
    return this.conditionalUpdate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `conditionalUpdate` property.
   *
   * @param value - the `conditionalUpdate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConditionalUpdate(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.conditionalUpdate (${String(value)})`;
      this.conditionalUpdate = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.conditionalUpdate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionalUpdate` property exists and has a value; `false` otherwise
   */
  public hasConditionalUpdate(): boolean {
    return this.hasConditionalUpdateElement();
  }

  /**
   * @returns the `conditionalDelete` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConditionalDeleteStatusEnum }
   */
  public getConditionalDeleteEnumType(): EnumCodeType | undefined {
    return this.conditionalDelete;
  }

  /**
   * Assigns the provided EnumCodeType value to the `conditionalDelete` property.
   *
   * @param enumType - the `conditionalDelete` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConditionalDeleteStatusEnum }
   */
  public setConditionalDeleteEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid CapabilityStatement.rest.resource.conditionalDelete';
      assertEnumCodeType<ConditionalDeleteStatusEnum>(enumType, ConditionalDeleteStatusEnum, errMsgPrefix);
      this.conditionalDelete = enumType;
    } else {
      this.conditionalDelete = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionalDelete` property exists and has a value; `false` otherwise
   */
  public hasConditionalDeleteEnumType(): boolean {
    return isDefined<EnumCodeType>(this.conditionalDelete) && !this.conditionalDelete.isEmpty() && this.conditionalDelete.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `conditionalDelete` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConditionalDeleteStatusEnum }
   */
  public getConditionalDeleteElement(): CodeType | undefined {
    if (this.conditionalDelete === undefined) {
      return undefined;
    }
    return this.conditionalDelete as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `conditionalDelete` property.
   *
   * @param element - the `conditionalDelete` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ConditionalDeleteStatusEnum }
   */
  public setConditionalDeleteElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.conditionalDelete; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.conditionalDelete = new EnumCodeType(element, this.conditionalDeleteStatusEnum);
    } else {
      this.conditionalDelete = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionalDelete` property exists and has a value; `false` otherwise
   */
  public hasConditionalDeleteElement(): boolean {
    return this.hasConditionalDeleteEnumType();
  }

  /**
   * @returns the `conditionalDelete` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ConditionalDeleteStatusEnum }
   */
  public getConditionalDelete(): fhirCode | undefined {
    if (this.conditionalDelete === undefined) {
      return undefined;
    }
    return this.conditionalDelete.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `conditionalDelete` property.
   *
   * @param value - the `conditionalDelete` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ConditionalDeleteStatusEnum }
   */
  public setConditionalDelete(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.conditionalDelete; Provided value is not an instance of fhirCode.`;
      this.conditionalDelete = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.conditionalDeleteStatusEnum);
    } else {
      this.conditionalDelete = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conditionalDelete` property exists and has a value; `false` otherwise
   */
  public hasConditionalDelete(): boolean {
    return this.hasConditionalDeleteEnumType();
  }

  /**
   * @returns the `referencePolicy` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link ReferenceHandlingPolicyEnum }
   */
  public getReferencePolicyEnumType(): EnumCodeType[] {
    return this.referencePolicy ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `referencePolicy` property.
   *
   * @param enumType - the `referencePolicy` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReferenceHandlingPolicyEnum }
   */
  public setReferencePolicyEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CapabilityStatement.rest.resource.referencePolicy`;
      assertEnumCodeTypeList<ReferenceHandlingPolicyEnum>(enumType, ReferenceHandlingPolicyEnum, errMsgPrefix);
      this.referencePolicy = enumType;
    } else {
      this.referencePolicy = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `referencePolicy` array property.
   *
   * @param enumType - the `referencePolicy` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link ReferenceHandlingPolicyEnum }
   */
  public addReferencePolicyEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CapabilityStatement.rest.resource.referencePolicy`;
      assertEnumCodeType<ReferenceHandlingPolicyEnum>(enumType, ReferenceHandlingPolicyEnum, errMsgPrefix);
      this.initReferencePolicy();
      this.referencePolicy?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `referencePolicy` property exists and has a value; `false` otherwise
   */
  public hasReferencePolicyEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.referencePolicy) && this.referencePolicy.some((item: EnumCodeType) => !item.isEmpty()) && this.referencePolicy.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `referencePolicy` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link ReferenceHandlingPolicyEnum }
   */
  public getReferencePolicyElement(): CodeType[] {
    if (this.referencePolicy === undefined) {
      return [] as CodeType[];
    }
    return this.referencePolicy as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `referencePolicy` property.
   *
   * @param element - the `referencePolicy` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReferenceHandlingPolicyEnum }
   */
  public setReferencePolicyElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.referencePolicy; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.referenceHandlingPolicyEnum));
      });
      this.referencePolicy = enumCodeTypes;
    } else {
      this.referencePolicy = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `referencePolicy` array property.
   *
   * @param element - the `referencePolicy` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ReferenceHandlingPolicyEnum }
   */
  public addReferencePolicyElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.referencePolicy; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initReferencePolicy();
      this.referencePolicy?.push(new EnumCodeType(element, this.referenceHandlingPolicyEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `referencePolicy` property exists and has a value; `false` otherwise
   */
  public hasReferencePolicyElement(): boolean {
    return this.hasReferencePolicyEnumType();
  }

  /**
   * @returns the `referencePolicy` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link ReferenceHandlingPolicyEnum }
   */
  public getReferencePolicy(): fhirCode[] {
    if (this.referencePolicy === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.referencePolicy) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `referencePolicy` property.
   *
   * @param value - the `referencePolicy` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ReferenceHandlingPolicyEnum }
   */
  public setReferencePolicy(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.referencePolicy; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.referenceHandlingPolicyEnum));
      });
      this.referencePolicy = enumCodeTypes;
    } else {
      this.referencePolicy = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `referencePolicy` array property.
   *
   * @param value - the `referencePolicy` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ReferenceHandlingPolicyEnum }
   */
  public addReferencePolicy(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initReferencePolicy();
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.referencePolicy; Provided value is not an instance of fhirCode.`;
      this.referencePolicy?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.referenceHandlingPolicyEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `referencePolicy` property exists and has a value; `false` otherwise
   */
  public hasReferencePolicy(): boolean {
    return this.hasReferencePolicyEnumType();
  }

  /**
   * Initialize the referencePolicy property
   */
  private initReferencePolicy(): void {
    if(!this.hasReferencePolicyEnumType()) {
      this.referencePolicy = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `searchInclude` property value as a StringType array
   */
  public getSearchIncludeElement(): StringType[] {
    return this.searchInclude ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `searchInclude` property.
   *
   * @param element - the `searchInclude` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSearchIncludeElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchInclude; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.searchInclude = element;
    } else {
      this.searchInclude = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `searchInclude` array property.
   *
   * @param element - the `searchInclude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSearchIncludeElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchInclude; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initSearchInclude();
      this.searchInclude?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `searchInclude` property exists and has a value; `false` otherwise
   */
  public hasSearchIncludeElement(): boolean {
    return isDefinedList<StringType>(this.searchInclude) && this.searchInclude.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `searchInclude` property value as a fhirString array
   */
  public getSearchInclude(): fhirString[] {
    this.initSearchInclude();
    const searchIncludeValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.searchInclude!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        searchIncludeValues.push(value);
      }
    }
    return searchIncludeValues;
  }

  /**
   * Assigns the provided primitive value array to the `searchInclude` property.
   *
   * @param value - the `searchInclude` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSearchInclude(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const searchIncludeElements = [] as StringType[];
      for (const searchIncludeValue of value) {
        const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchInclude array item (${String(searchIncludeValue)})`;
        const element = new StringType(parseFhirPrimitiveData(searchIncludeValue, fhirStringSchema, optErrMsg));
        searchIncludeElements.push(element);
      }
      this.searchInclude = searchIncludeElements;
    } else {
      this.searchInclude = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `searchInclude` array property.
   *
   * @param value - the `searchInclude` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSearchInclude(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchInclude array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initSearchInclude();
      this.addSearchIncludeElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `searchInclude` property exists and has a value; `false` otherwise
   */
  public hasSearchInclude(): boolean {
    return this.hasSearchIncludeElement();
  }

  /**
   * Initialize the `searchInclude` property
   */
  private initSearchInclude(): void {
    if (!this.hasSearchInclude()) {
      this.searchInclude = [] as StringType[];
    }
  }

  /**
   * @returns the `searchRevInclude` property value as a StringType array
   */
  public getSearchRevIncludeElement(): StringType[] {
    return this.searchRevInclude ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `searchRevInclude` property.
   *
   * @param element - the `searchRevInclude` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSearchRevIncludeElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchRevInclude; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.searchRevInclude = element;
    } else {
      this.searchRevInclude = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `searchRevInclude` array property.
   *
   * @param element - the `searchRevInclude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSearchRevIncludeElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchRevInclude; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initSearchRevInclude();
      this.searchRevInclude?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `searchRevInclude` property exists and has a value; `false` otherwise
   */
  public hasSearchRevIncludeElement(): boolean {
    return isDefinedList<StringType>(this.searchRevInclude) && this.searchRevInclude.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `searchRevInclude` property value as a fhirString array
   */
  public getSearchRevInclude(): fhirString[] {
    this.initSearchRevInclude();
    const searchRevIncludeValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.searchRevInclude!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        searchRevIncludeValues.push(value);
      }
    }
    return searchRevIncludeValues;
  }

  /**
   * Assigns the provided primitive value array to the `searchRevInclude` property.
   *
   * @param value - the `searchRevInclude` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSearchRevInclude(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const searchRevIncludeElements = [] as StringType[];
      for (const searchRevIncludeValue of value) {
        const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchRevInclude array item (${String(searchRevIncludeValue)})`;
        const element = new StringType(parseFhirPrimitiveData(searchRevIncludeValue, fhirStringSchema, optErrMsg));
        searchRevIncludeElements.push(element);
      }
      this.searchRevInclude = searchRevIncludeElements;
    } else {
      this.searchRevInclude = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `searchRevInclude` array property.
   *
   * @param value - the `searchRevInclude` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addSearchRevInclude(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchRevInclude array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initSearchRevInclude();
      this.addSearchRevIncludeElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `searchRevInclude` property exists and has a value; `false` otherwise
   */
  public hasSearchRevInclude(): boolean {
    return this.hasSearchRevIncludeElement();
  }

  /**
   * Initialize the `searchRevInclude` property
   */
  private initSearchRevInclude(): void {
    if (!this.hasSearchRevInclude()) {
      this.searchRevInclude = [] as StringType[];
    }
  }

  /**
   * @returns the `searchParam` property value as a CapabilityStatementRestResourceSearchParamComponent array
   */
  public getSearchParam(): CapabilityStatementRestResourceSearchParamComponent[] {
    return this.searchParam ?? ([] as CapabilityStatementRestResourceSearchParamComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementRestResourceSearchParamComponent array value to the `searchParam` property.
   *
   * @param value - the `searchParam` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSearchParam(value: CapabilityStatementRestResourceSearchParamComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementRestResourceSearchParamComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchParam; Provided value array has an element that is not an instance of CapabilityStatementRestResourceSearchParamComponent.`;
      assertFhirTypeList<CapabilityStatementRestResourceSearchParamComponent>(value, CapabilityStatementRestResourceSearchParamComponent, optErrMsg);
      this.searchParam = value;
    } else {
      this.searchParam = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementRestResourceSearchParamComponent value to the `searchParam` array property.
   *
   * @param value - the `searchParam` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSearchParam(value: CapabilityStatementRestResourceSearchParamComponent | undefined): this {
    if (isDefined<CapabilityStatementRestResourceSearchParamComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchParam; Provided element is not an instance of CapabilityStatementRestResourceSearchParamComponent.`;
      assertFhirType<CapabilityStatementRestResourceSearchParamComponent>(value, CapabilityStatementRestResourceSearchParamComponent, optErrMsg);
      this.initSearchParam();
      this.searchParam?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `searchParam` property exists and has a value; `false` otherwise
   */
  public hasSearchParam(): boolean {
    return isDefinedList<CapabilityStatementRestResourceSearchParamComponent>(this.searchParam) && this.searchParam.some((item: CapabilityStatementRestResourceSearchParamComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `searchParam` property
   */
  private initSearchParam(): void {
    if(!this.hasSearchParam()) {
      this.searchParam = [] as CapabilityStatementRestResourceSearchParamComponent[];
    }
  }

  /**
   * @returns the `operation` property value as a CapabilityStatementRestResourceOperationComponent array
   */
  public getOperation(): CapabilityStatementRestResourceOperationComponent[] {
    return this.operation ?? ([] as CapabilityStatementRestResourceOperationComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementRestResourceOperationComponent array value to the `operation` property.
   *
   * @param value - the `operation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOperation(value: CapabilityStatementRestResourceOperationComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementRestResourceOperationComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.operation; Provided value array has an element that is not an instance of CapabilityStatementRestResourceOperationComponent.`;
      assertFhirTypeList<CapabilityStatementRestResourceOperationComponent>(value, CapabilityStatementRestResourceOperationComponent, optErrMsg);
      this.operation = value;
    } else {
      this.operation = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementRestResourceOperationComponent value to the `operation` array property.
   *
   * @param value - the `operation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOperation(value: CapabilityStatementRestResourceOperationComponent | undefined): this {
    if (isDefined<CapabilityStatementRestResourceOperationComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.operation; Provided element is not an instance of CapabilityStatementRestResourceOperationComponent.`;
      assertFhirType<CapabilityStatementRestResourceOperationComponent>(value, CapabilityStatementRestResourceOperationComponent, optErrMsg);
      this.initOperation();
      this.operation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `operation` property exists and has a value; `false` otherwise
   */
  public hasOperation(): boolean {
    return isDefinedList<CapabilityStatementRestResourceOperationComponent>(this.operation) && this.operation.some((item: CapabilityStatementRestResourceOperationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `operation` property
   */
  private initOperation(): void {
    if(!this.hasOperation()) {
      this.operation = [] as CapabilityStatementRestResourceOperationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CapabilityStatement.rest.resource';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.profile,
      this.supportedProfile,
      this.documentation,
      this.interaction,
      this.versioning,
      this.readHistory,
      this.updateCreate,
      this.conditionalCreate,
      this.conditionalRead,
      this.conditionalUpdate,
      this.conditionalDelete,
      this.referencePolicy,
      this.searchInclude,
      this.searchRevInclude,
      this.searchParam,
      this.operation,
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
  public override copy(): CapabilityStatementRestResourceComponent {
    const dest = new CapabilityStatementRestResourceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementRestResourceComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.profile = this.profile?.copy();
    const supportedProfileList = copyListValues<CanonicalType>(this.supportedProfile);
    dest.supportedProfile = supportedProfileList.length === 0 ? undefined : supportedProfileList;
    dest.documentation = this.documentation?.copy();
    const interactionList = copyListValues<CapabilityStatementRestResourceInteractionComponent>(this.interaction);
    dest.interaction = interactionList.length === 0 ? undefined : interactionList;
    dest.versioning = this.versioning?.copy();
    dest.readHistory = this.readHistory?.copy();
    dest.updateCreate = this.updateCreate?.copy();
    dest.conditionalCreate = this.conditionalCreate?.copy();
    dest.conditionalRead = this.conditionalRead?.copy();
    dest.conditionalUpdate = this.conditionalUpdate?.copy();
    dest.conditionalDelete = this.conditionalDelete?.copy();
    const referencePolicyList = copyListValues<EnumCodeType>(this.referencePolicy);
    dest.referencePolicy = referencePolicyList.length === 0 ? undefined : referencePolicyList;
    const searchIncludeList = copyListValues<StringType>(this.searchInclude);
    dest.searchInclude = searchIncludeList.length === 0 ? undefined : searchIncludeList;
    const searchRevIncludeList = copyListValues<StringType>(this.searchRevInclude);
    dest.searchRevInclude = searchRevIncludeList.length === 0 ? undefined : searchRevIncludeList;
    const searchParamList = copyListValues<CapabilityStatementRestResourceSearchParamComponent>(this.searchParam);
    dest.searchParam = searchParamList.length === 0 ? undefined : searchParamList;
    const operationList = copyListValues<CapabilityStatementRestResourceOperationComponent>(this.operation);
    dest.operation = operationList.length === 0 ? undefined : operationList;
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

    if (this.hasProfileElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getProfileElement(), 'profile', jsonObj);
    }

    if (this.hasSupportedProfile()) {
      setFhirPrimitiveListJson(this.getSupportedProfileElement(), 'supportedProfile', jsonObj);
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    if (this.hasInteraction()) {
      setFhirBackboneElementListJson(this.getInteraction(), 'interaction', jsonObj);
    }

    if (this.hasVersioningElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getVersioningElement()!, 'versioning', jsonObj);
    }

    if (this.hasReadHistoryElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getReadHistoryElement(), 'readHistory', jsonObj);
    }

    if (this.hasUpdateCreateElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getUpdateCreateElement(), 'updateCreate', jsonObj);
    }

    if (this.hasConditionalCreateElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getConditionalCreateElement(), 'conditionalCreate', jsonObj);
    }

    if (this.hasConditionalReadElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getConditionalReadElement()!, 'conditionalRead', jsonObj);
    }

    if (this.hasConditionalUpdateElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getConditionalUpdateElement(), 'conditionalUpdate', jsonObj);
    }

    if (this.hasConditionalDeleteElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getConditionalDeleteElement()!, 'conditionalDelete', jsonObj);
    }

    if (this.hasReferencePolicyElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getReferencePolicyElement(), 'referencePolicy', jsonObj);
    }

    if (this.hasSearchInclude()) {
      setFhirPrimitiveListJson(this.getSearchIncludeElement(), 'searchInclude', jsonObj);
    }

    if (this.hasSearchRevInclude()) {
      setFhirPrimitiveListJson(this.getSearchRevIncludeElement(), 'searchRevInclude', jsonObj);
    }

    if (this.hasSearchParam()) {
      setFhirBackboneElementListJson(this.getSearchParam(), 'searchParam', jsonObj);
    }

    if (this.hasOperation()) {
      setFhirBackboneElementListJson(this.getOperation(), 'operation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementRestResourceInteractionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** What operations are supported?
 * - **Definition:** Identifies a restful operation supported by the solution.
 * - **Comment:** In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementRestResourceInteractionComponent extends BackboneElement implements IBackboneElement {
  constructor(code: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.restfulInteractionEnum = new RestfulInteractionEnum();

    this.code = constructorCodeValueAsEnumCodeType<RestfulInteractionEnum>(
      code,
      RestfulInteractionEnum,
      this.restfulInteractionEnum,
      'CapabilityStatement.rest.resource.interaction.code',
    );
  }

  /**
   * Parse the provided `CapabilityStatementRestResourceInteractionComponent` JSON to instantiate the CapabilityStatementRestResourceInteractionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementRestResourceInteractionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementRestResourceInteractionComponent
   * @returns CapabilityStatementRestResourceInteractionComponent data model or undefined for `CapabilityStatementRestResourceInteractionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementRestResourceInteractionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementRestResourceInteractionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementRestResourceInteractionComponent();

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
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCodeElement(datatype);
      }
    } else {
      instance.setCode(null);
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: RestfulInteraction
   *
   * @see {@link RestfulInteractionEnum }
   */
  private readonly restfulInteractionEnum: RestfulInteractionEnum;

  /**
   * CapabilityStatement.rest.resource.interaction.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** read | vread | update | patch | delete | history-instance | history-type | create | search-type
   * - **Definition:** Coded identifier of the operation, supported by the system resource.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  private code: EnumCodeType | null;

  /**
   * CapabilityStatement.rest.resource.interaction.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Anything special about operation behavior
   * - **Definition:** Guidance specific to the implementation of this operation, such as \'delete is a logical delete\' or \'updates are only allowed with version id\' or \'creates permitted from pre-authorized certificates only\'.
   * - **Requirements:** REST allows a degree of variability in the implementation of RESTful solutions that is useful for exchange partners to be aware of.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public getCodeEnumType(): EnumCodeType | null {
    return this.code;
  }

  /**
   * Assigns the provided EnumCodeType value to the `code` property.
   *
   * @param enumType - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public setCodeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CapabilityStatement.rest.resource.interaction.code`;
      assertEnumCodeType<RestfulInteractionEnum>(enumType, RestfulInteractionEnum, errMsgPrefix);
      this.code = enumType;
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.code) && !this.code.isEmpty() && this.code.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `code` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public getCodeElement(): CodeType | null {
    if (this.code === null) {
      return null;
    }
    return this.code as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.interaction.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = new EnumCodeType(element, this.restfulInteractionEnum);
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeElement(): boolean {
    return this.hasCodeEnumType();
  }

  /**
   * @returns the `code` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public getCode(): fhirCode | null {
    if (this.code === null) {
      return null;
    }
    return this.code.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `code` property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.interaction.code (${String(value)})`;
      this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.restfulInteractionEnum);
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return this.hasCodeEnumType();
  }

  /**
   * @returns the `documentation` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDocumentationElement(): MarkdownType {
    return this.documentation ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `documentation` property.
   *
   * @param element - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentationElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.interaction.documentation; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.documentation) && !this.documentation.isEmpty();
  }

  /**
   * @returns the `documentation` property value as a fhirMarkdown if defined; else undefined
   */
  public getDocumentation(): fhirMarkdown | undefined {
    return this.documentation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `documentation` property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentation(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.interaction.documentation (${String(value)})`;
      this.documentation = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
    return 'CapabilityStatement.rest.resource.interaction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.documentation,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatementRestResourceInteractionComponent {
    const dest = new CapabilityStatementRestResourceInteractionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementRestResourceInteractionComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.documentation = this.documentation?.copy();
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementRestResourceSearchParamComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Search parameters supported by implementation
 * - **Definition:** Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
 * - **Comment:** The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](https://hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](https://hl7.org/fhir/searchparameter.html#) definitions.
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementRestResourceSearchParamComponent extends BackboneElement implements IBackboneElement {
  constructor(name: StringType | fhirString | null = null, type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.searchParamTypeEnum = new SearchParamTypeEnum();

    this.name = null;
    if (isDefined<StringType | fhirString>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }

    this.type_ = constructorCodeValueAsEnumCodeType<SearchParamTypeEnum>(
      type_,
      SearchParamTypeEnum,
      this.searchParamTypeEnum,
      'CapabilityStatement.rest.resource.searchParam.type',
    );
  }

  /**
   * Parse the provided `CapabilityStatementRestResourceSearchParamComponent` JSON to instantiate the CapabilityStatementRestResourceSearchParamComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementRestResourceSearchParamComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementRestResourceSearchParamComponent
   * @returns CapabilityStatementRestResourceSearchParamComponent data model or undefined for `CapabilityStatementRestResourceSearchParamComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementRestResourceSearchParamComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementRestResourceSearchParamComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementRestResourceSearchParamComponent();

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

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setDefinitionElement(datatype);
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

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    return instance;
  }

  /**
   * CapabilityStatement.rest.resource.searchParam.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of search parameter
   * - **Definition:** The name of the search parameter used in the interface.
   * - **Comment:** Parameter names cannot overlap with standard parameter names, and standard parameters cannot be redefined.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name: StringType | null;

  /**
   * CapabilityStatement.rest.resource.searchParam.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Source of definition for parameter
   * - **Definition:** An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [SearchParameter.url](https://hl7.org/fhir/searchparameter-definitions.html#SearchParameter.url)). This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs.
   * - **Comment:** This SHOULD be present, and matches refers to a SearchParameter by its canonical URL, except for the control parameters that do not have a canonical URL (or a SearchParameter definition). If systems wish to document their support for modifiers, comparators, target resource types, and chained parameters, they should do using a search parameter resource. This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SearchParameter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definition?: CanonicalType | undefined;

  /**
   * FHIR CodeSystem: SearchParamType
   *
   * @see {@link SearchParamTypeEnum }
   */
  private readonly searchParamTypeEnum: SearchParamTypeEnum;

  /**
   * CapabilityStatement.rest.resource.searchParam.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** number | date | string | token | reference | composite | quantity | uri | special
   * - **Definition:** The type of value a search parameter refers to, and how the content is interpreted.
   * - **Comment:** While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a query interface based on the server capability statement.  It SHALL be the same as the type in the search parameter definition.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * CapabilityStatement.rest.resource.searchParam.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Server-specific usage
   * - **Definition:** This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: MarkdownType | undefined;

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
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchParam.name; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchParam.name (${String(value)})`;
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
   * @returns the `definition` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getDefinitionElement(): CanonicalType {
    return this.definition ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `definition` property.
   *
   * @param element - the `definition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchParam.definition; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
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
    return isDefined<CanonicalType>(this.definition) && !this.definition.isEmpty();
  }

  /**
   * @returns the `definition` property value as a fhirCanonical if defined; else undefined
   */
  public getDefinition(): fhirCanonical | undefined {
    return this.definition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `definition` property.
   *
   * @param value - the `definition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinition(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchParam.definition (${String(value)})`;
      this.definition = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
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
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
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
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CapabilityStatement.rest.resource.searchParam.type`;
      assertEnumCodeType<SearchParamTypeEnum>(enumType, SearchParamTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
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
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchParam.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.searchParamTypeEnum);
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
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
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
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchParam.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.searchParamTypeEnum);
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
   * @returns the `documentation` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDocumentationElement(): MarkdownType {
    return this.documentation ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `documentation` property.
   *
   * @param element - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentationElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchParam.documentation; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.documentation) && !this.documentation.isEmpty();
  }

  /**
   * @returns the `documentation` property value as a fhirMarkdown if defined; else undefined
   */
  public getDocumentation(): fhirMarkdown | undefined {
    return this.documentation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `documentation` property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentation(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.searchParam.documentation (${String(value)})`;
      this.documentation = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
    return 'CapabilityStatement.rest.resource.searchParam';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.definition,
      this.type_,
      this.documentation,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.name, this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatementRestResourceSearchParamComponent {
    const dest = new CapabilityStatementRestResourceSearchParamComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementRestResourceSearchParamComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.definition = this.definition?.copy();
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.documentation = this.documentation?.copy();
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

    if (this.hasDefinitionElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getDefinitionElement(), 'definition', jsonObj);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementRestResourceOperationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Definition of a resource operation
 * - **Definition:** Definition of an operation or a named query together with its parameters and their meaning and type. Consult the definition of the operation for details about how to invoke the operation, and the parameters.
 * - **Comment:** Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.     If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementRestResourceOperationComponent extends BackboneElement implements IBackboneElement {
  constructor(name: StringType | fhirString | null = null, definition: CanonicalType | fhirCanonical | null = null) {
    super();

    this.name = null;
    if (isDefined<StringType | fhirString>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }

    this.definition = null;
    if (isDefined<CanonicalType | fhirCanonical>(definition)) {
      if (definition instanceof PrimitiveType) {
        this.setDefinitionElement(definition);
      } else {
        this.setDefinition(definition);
      }
    }
  }

  /**
   * Parse the provided `CapabilityStatementRestResourceOperationComponent` JSON to instantiate the CapabilityStatementRestResourceOperationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementRestResourceOperationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementRestResourceOperationComponent
   * @returns CapabilityStatementRestResourceOperationComponent data model or undefined for `CapabilityStatementRestResourceOperationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementRestResourceOperationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementRestResourceOperationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementRestResourceOperationComponent();

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

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setDefinition(null);
      } else {
        instance.setDefinitionElement(datatype);
      }
    } else {
      instance.setDefinition(null);
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    return instance;
  }

  /**
   * CapabilityStatement.rest.resource.operation.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name by which the operation/query is invoked
   * - **Definition:** The name of the operation or query. For an operation, this is the name  prefixed with $ and used in the URL. For a query, this is the name used in the _query parameter when the query is called.
   * - **Comment:** The name here SHOULD be the same as the name in the definition, unless there is a name clash and the name cannot be used. The name does not include the "$" portion that is always included in the URL.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * CapabilityStatement.rest.resource.operation.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The defined operation/query
   * - **Definition:** Where the formal definition can be found. If a server references the base definition of an Operation (i.e. from the specification itself such as ```http://hl7.org/fhir/OperationDefinition/ValueSet-expand```), that means it supports the full capabilities of the operation - e.g. both GET and POST invocation.  If it only supports a subset, it must define its own custom [OperationDefinition](https://hl7.org/fhir/operationdefinition.html#) with a \'base\' of the original OperationDefinition.  The custom definition would describe the specific subset of functionality supported.
   * - **Comment:** This can be used to build an HTML form to invoke the operation, for instance.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/OperationDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private definition: CanonicalType | null;

  /**
   * CapabilityStatement.rest.resource.operation.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific details about operation behavior
   * - **Definition:** Documentation that describes anything special about the operation behavior, possibly detailing different behavior for system, type and instance-level invocation of the operation.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: MarkdownType | undefined;

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
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.operation.name; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.operation.name (${String(value)})`;
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
   * @returns the `definition` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getDefinitionElement(): CanonicalType {
    return this.definition ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `definition` property.
   *
   * @param element - the `definition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionElement(element: CanonicalType | undefined | null): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.operation.definition; Provided value is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.definition = element;
    } else {
      this.definition = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinitionElement(): boolean {
    return isDefined<CanonicalType>(this.definition) && !this.definition.isEmpty();
  }

  /**
   * @returns the `definition` property value as a fhirCanonical if defined; else null
   */
  public getDefinition(): fhirCanonical | null {
    if (this.definition?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.definition.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `definition` property.
   *
   * @param value - the `definition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinition(value: fhirCanonical | undefined | null): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.operation.definition (${String(value)})`;
      this.definition = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.definition = null;
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
   * @returns the `documentation` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDocumentationElement(): MarkdownType {
    return this.documentation ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `documentation` property.
   *
   * @param element - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentationElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.operation.documentation; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.documentation) && !this.documentation.isEmpty();
  }

  /**
   * @returns the `documentation` property value as a fhirMarkdown if defined; else undefined
   */
  public getDocumentation(): fhirMarkdown | undefined {
    return this.documentation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `documentation` property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentation(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.resource.operation.documentation (${String(value)})`;
      this.documentation = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
    return 'CapabilityStatement.rest.resource.operation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.definition,
      this.documentation,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.name, this.definition, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatementRestResourceOperationComponent {
    const dest = new CapabilityStatementRestResourceOperationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementRestResourceOperationComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.definition = this.definition ? this.definition.copy() : null;
    dest.documentation = this.documentation?.copy();
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

    if (this.hasDefinitionElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getDefinitionElement(), 'definition', jsonObj);
    } else {
      jsonObj['definition'] = null;
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementRestInteractionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** What operations are supported?
 * - **Definition:** A specification of restful operations supported by the system.
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementRestInteractionComponent extends BackboneElement implements IBackboneElement {
  constructor(code: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.restfulInteractionEnum = new RestfulInteractionEnum();

    this.code = constructorCodeValueAsEnumCodeType<RestfulInteractionEnum>(
      code,
      RestfulInteractionEnum,
      this.restfulInteractionEnum,
      'CapabilityStatement.rest.interaction.code',
    );
  }

  /**
   * Parse the provided `CapabilityStatementRestInteractionComponent` JSON to instantiate the CapabilityStatementRestInteractionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementRestInteractionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementRestInteractionComponent
   * @returns CapabilityStatementRestInteractionComponent data model or undefined for `CapabilityStatementRestInteractionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementRestInteractionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementRestInteractionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementRestInteractionComponent();

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
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setCode(null);
      } else {
        instance.setCodeElement(datatype);
      }
    } else {
      instance.setCode(null);
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: RestfulInteraction
   *
   * @see {@link RestfulInteractionEnum }
   */
  private readonly restfulInteractionEnum: RestfulInteractionEnum;

  /**
   * CapabilityStatement.rest.interaction.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** transaction | batch | search-system | history-system
   * - **Definition:** A coded identifier of the operation, supported by the system.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  private code: EnumCodeType | null;

  /**
   * CapabilityStatement.rest.interaction.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Anything special about operation behavior
   * - **Definition:** Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public getCodeEnumType(): EnumCodeType | null {
    return this.code;
  }

  /**
   * Assigns the provided EnumCodeType value to the `code` property.
   *
   * @param enumType - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public setCodeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CapabilityStatement.rest.interaction.code`;
      assertEnumCodeType<RestfulInteractionEnum>(enumType, RestfulInteractionEnum, errMsgPrefix);
      this.code = enumType;
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.code) && !this.code.isEmpty() && this.code.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `code` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public getCodeElement(): CodeType | null {
    if (this.code === null) {
      return null;
    }
    return this.code as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.interaction.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = new EnumCodeType(element, this.restfulInteractionEnum);
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCodeElement(): boolean {
    return this.hasCodeEnumType();
  }

  /**
   * @returns the `code` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public getCode(): fhirCode | null {
    if (this.code === null) {
      return null;
    }
    return this.code.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `code` property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RestfulInteractionEnum }
   */
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.interaction.code (${String(value)})`;
      this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.restfulInteractionEnum);
    } else {
      this.code = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return this.hasCodeEnumType();
  }

  /**
   * @returns the `documentation` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDocumentationElement(): MarkdownType {
    return this.documentation ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `documentation` property.
   *
   * @param element - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentationElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.interaction.documentation; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.documentation) && !this.documentation.isEmpty();
  }

  /**
   * @returns the `documentation` property value as a fhirMarkdown if defined; else undefined
   */
  public getDocumentation(): fhirMarkdown | undefined {
    return this.documentation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `documentation` property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentation(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.rest.interaction.documentation (${String(value)})`;
      this.documentation = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
    return 'CapabilityStatement.rest.interaction';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.documentation,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatementRestInteractionComponent {
    const dest = new CapabilityStatementRestInteractionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementRestInteractionComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.documentation = this.documentation?.copy();
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementMessagingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** If messaging is supported
 * - **Definition:** A description of the messaging capabilities of the solution.
 * - **Comment:** Multiple repetitions allow the documentation of multiple endpoints per solution.
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementMessagingComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CapabilityStatementMessagingComponent` JSON to instantiate the CapabilityStatementMessagingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementMessagingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementMessagingComponent
   * @returns CapabilityStatementMessagingComponent data model or undefined for `CapabilityStatementMessagingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementMessagingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementMessagingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementMessagingComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'endpoint';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementMessagingEndpointComponent | undefined = CapabilityStatementMessagingEndpointComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addEndpoint(component);
        }
      });
    }

    fieldName = 'reliableCache';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setReliableCacheElement(datatype);
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    fieldName = 'supportedMessage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CapabilityStatementMessagingSupportedMessageComponent | undefined = CapabilityStatementMessagingSupportedMessageComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addSupportedMessage(component);
        }
      });
    }

    return instance;
  }

  /**
   * CapabilityStatement.messaging.endpoint Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where messages should be sent
   * - **Definition:** An endpoint (network accessible address) to which messages and/or replies are to be sent.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endpoint?: CapabilityStatementMessagingEndpointComponent[] | undefined;

  /**
   * CapabilityStatement.messaging.reliableCache Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reliable Message Cache Length (min)
   * - **Definition:** Length if the receiver\'s reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).
   * - **Comment:** If this value is missing then the application does not implement (receiver) or depend on (sender) reliable messaging.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reliableCache?: UnsignedIntType | undefined;

  /**
   * CapabilityStatement.messaging.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Messaging interface behavior details
   * - **Definition:** Documentation about the system\'s messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: MarkdownType | undefined;

  /**
   * CapabilityStatement.messaging.supportedMessage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Messages supported by this system
   * - **Definition:** References to message definitions for messages this system can send or receive.
   * - **Comment:** This is a proposed alternative to the messaging.event structure.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private supportedMessage?: CapabilityStatementMessagingSupportedMessageComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `endpoint` property value as a CapabilityStatementMessagingEndpointComponent array
   */
  public getEndpoint(): CapabilityStatementMessagingEndpointComponent[] {
    return this.endpoint ?? ([] as CapabilityStatementMessagingEndpointComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementMessagingEndpointComponent array value to the `endpoint` property.
   *
   * @param value - the `endpoint` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEndpoint(value: CapabilityStatementMessagingEndpointComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementMessagingEndpointComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.endpoint; Provided value array has an element that is not an instance of CapabilityStatementMessagingEndpointComponent.`;
      assertFhirTypeList<CapabilityStatementMessagingEndpointComponent>(value, CapabilityStatementMessagingEndpointComponent, optErrMsg);
      this.endpoint = value;
    } else {
      this.endpoint = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementMessagingEndpointComponent value to the `endpoint` array property.
   *
   * @param value - the `endpoint` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEndpoint(value: CapabilityStatementMessagingEndpointComponent | undefined): this {
    if (isDefined<CapabilityStatementMessagingEndpointComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.endpoint; Provided element is not an instance of CapabilityStatementMessagingEndpointComponent.`;
      assertFhirType<CapabilityStatementMessagingEndpointComponent>(value, CapabilityStatementMessagingEndpointComponent, optErrMsg);
      this.initEndpoint();
      this.endpoint?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `endpoint` property exists and has a value; `false` otherwise
   */
  public hasEndpoint(): boolean {
    return isDefinedList<CapabilityStatementMessagingEndpointComponent>(this.endpoint) && this.endpoint.some((item: CapabilityStatementMessagingEndpointComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `endpoint` property
   */
  private initEndpoint(): void {
    if(!this.hasEndpoint()) {
      this.endpoint = [] as CapabilityStatementMessagingEndpointComponent[];
    }
  }

  /**
   * @returns the `reliableCache` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getReliableCacheElement(): UnsignedIntType {
    return this.reliableCache ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `reliableCache` property.
   *
   * @param element - the `reliableCache` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReliableCacheElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.reliableCache; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.reliableCache = element;
    } else {
      this.reliableCache = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reliableCache` property exists and has a value; `false` otherwise
   */
  public hasReliableCacheElement(): boolean {
    return isDefined<UnsignedIntType>(this.reliableCache) && !this.reliableCache.isEmpty();
  }

  /**
   * @returns the `reliableCache` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getReliableCache(): fhirUnsignedInt | undefined {
    return this.reliableCache?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `reliableCache` property.
   *
   * @param value - the `reliableCache` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReliableCache(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.reliableCache (${String(value)})`;
      this.reliableCache = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.reliableCache = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reliableCache` property exists and has a value; `false` otherwise
   */
  public hasReliableCache(): boolean {
    return this.hasReliableCacheElement();
  }

  /**
   * @returns the `documentation` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDocumentationElement(): MarkdownType {
    return this.documentation ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `documentation` property.
   *
   * @param element - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentationElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.documentation; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.documentation) && !this.documentation.isEmpty();
  }

  /**
   * @returns the `documentation` property value as a fhirMarkdown if defined; else undefined
   */
  public getDocumentation(): fhirMarkdown | undefined {
    return this.documentation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `documentation` property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentation(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.documentation (${String(value)})`;
      this.documentation = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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

  /**
   * @returns the `supportedMessage` property value as a CapabilityStatementMessagingSupportedMessageComponent array
   */
  public getSupportedMessage(): CapabilityStatementMessagingSupportedMessageComponent[] {
    return this.supportedMessage ?? ([] as CapabilityStatementMessagingSupportedMessageComponent[]);
  }

  /**
   * Assigns the provided CapabilityStatementMessagingSupportedMessageComponent array value to the `supportedMessage` property.
   *
   * @param value - the `supportedMessage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSupportedMessage(value: CapabilityStatementMessagingSupportedMessageComponent[] | undefined): this {
    if (isDefinedList<CapabilityStatementMessagingSupportedMessageComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.supportedMessage; Provided value array has an element that is not an instance of CapabilityStatementMessagingSupportedMessageComponent.`;
      assertFhirTypeList<CapabilityStatementMessagingSupportedMessageComponent>(value, CapabilityStatementMessagingSupportedMessageComponent, optErrMsg);
      this.supportedMessage = value;
    } else {
      this.supportedMessage = undefined;
    }
    return this;
  }

  /**
   * Add the provided CapabilityStatementMessagingSupportedMessageComponent value to the `supportedMessage` array property.
   *
   * @param value - the `supportedMessage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSupportedMessage(value: CapabilityStatementMessagingSupportedMessageComponent | undefined): this {
    if (isDefined<CapabilityStatementMessagingSupportedMessageComponent>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.supportedMessage; Provided element is not an instance of CapabilityStatementMessagingSupportedMessageComponent.`;
      assertFhirType<CapabilityStatementMessagingSupportedMessageComponent>(value, CapabilityStatementMessagingSupportedMessageComponent, optErrMsg);
      this.initSupportedMessage();
      this.supportedMessage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `supportedMessage` property exists and has a value; `false` otherwise
   */
  public hasSupportedMessage(): boolean {
    return isDefinedList<CapabilityStatementMessagingSupportedMessageComponent>(this.supportedMessage) && this.supportedMessage.some((item: CapabilityStatementMessagingSupportedMessageComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `supportedMessage` property
   */
  private initSupportedMessage(): void {
    if(!this.hasSupportedMessage()) {
      this.supportedMessage = [] as CapabilityStatementMessagingSupportedMessageComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CapabilityStatement.messaging';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.endpoint,
      this.reliableCache,
      this.documentation,
      this.supportedMessage,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatementMessagingComponent {
    const dest = new CapabilityStatementMessagingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementMessagingComponent): void {
    super.copyValues(dest);
    const endpointList = copyListValues<CapabilityStatementMessagingEndpointComponent>(this.endpoint);
    dest.endpoint = endpointList.length === 0 ? undefined : endpointList;
    dest.reliableCache = this.reliableCache?.copy();
    dest.documentation = this.documentation?.copy();
    const supportedMessageList = copyListValues<CapabilityStatementMessagingSupportedMessageComponent>(this.supportedMessage);
    dest.supportedMessage = supportedMessageList.length === 0 ? undefined : supportedMessageList;
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

    if (this.hasEndpoint()) {
      setFhirBackboneElementListJson(this.getEndpoint(), 'endpoint', jsonObj);
    }

    if (this.hasReliableCacheElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getReliableCacheElement(), 'reliableCache', jsonObj);
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    if (this.hasSupportedMessage()) {
      setFhirBackboneElementListJson(this.getSupportedMessage(), 'supportedMessage', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementMessagingEndpointComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Where messages should be sent
 * - **Definition:** An endpoint (network accessible address) to which messages and/or replies are to be sent.
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementMessagingEndpointComponent extends BackboneElement implements IBackboneElement {
  constructor(protocol: Coding | null = null, address: UrlType | fhirUrl | null = null) {
    super();

    this.protocol = null;
    if (isDefined<Coding>(protocol)) {
      this.setProtocol(protocol);
    }

    this.address = null;
    if (isDefined<UrlType | fhirUrl>(address)) {
      if (address instanceof PrimitiveType) {
        this.setAddressElement(address);
      } else {
        this.setAddress(address);
      }
    }
  }

  /**
   * Parse the provided `CapabilityStatementMessagingEndpointComponent` JSON to instantiate the CapabilityStatementMessagingEndpointComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementMessagingEndpointComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementMessagingEndpointComponent
   * @returns CapabilityStatementMessagingEndpointComponent data model or undefined for `CapabilityStatementMessagingEndpointComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementMessagingEndpointComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementMessagingEndpointComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementMessagingEndpointComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'protocol';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setProtocol(null);
      } else {
        instance.setProtocol(datatype);
      }
    } else {
      instance.setProtocol(null);
    }

    fieldName = 'address';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UrlType | undefined = fhirParser.parseUrlType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setAddress(null);
      } else {
        instance.setAddressElement(datatype);
      }
    } else {
      instance.setAddress(null);
    }

    return instance;
  }

  /**
   * CapabilityStatement.messaging.endpoint.protocol Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** http | ftp | mllp +
   * - **Definition:** A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private protocol: Coding | null;

  /**
   * CapabilityStatement.messaging.endpoint.address Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Network address or identifier of the end-point
   * - **Definition:** The network address of the endpoint. For solutions that do not use network addresses for routing, it can be just an identifier.
   * - **FHIR Type:** `url`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private address: UrlType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `protocol` property value as a Coding object if defined; else an empty Coding object
   */
  public getProtocol(): Coding {
    return this.protocol ?? new Coding();
  }

  /**
   * Assigns the provided Coding object value to the `protocol` property.
   *
   * @param value - the `protocol` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProtocol(value: Coding | undefined | null): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.endpoint.protocol; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.protocol = value;
    } else {
      this.protocol = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `protocol` property exists and has a value; `false` otherwise
   */
  public hasProtocol(): boolean {
    return isDefined<Coding>(this.protocol) && !this.protocol.isEmpty();
  }

  /**
   * @returns the `address` property value as a UrlType object if defined; else an empty UrlType object
   */
  public getAddressElement(): UrlType {
    return this.address ?? new UrlType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `address` property.
   *
   * @param element - the `address` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAddressElement(element: UrlType | undefined | null): this {
    if (isDefined<UrlType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.endpoint.address; Provided value is not an instance of UrlType.`;
      assertFhirType<UrlType>(element, UrlType, optErrMsg);
      this.address = element;
    } else {
      this.address = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `address` property exists and has a value; `false` otherwise
   */
  public hasAddressElement(): boolean {
    return isDefined<UrlType>(this.address) && !this.address.isEmpty();
  }

  /**
   * @returns the `address` property value as a fhirUrl if defined; else null
   */
  public getAddress(): fhirUrl | null {
    if (this.address?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.address.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `address` property.
   *
   * @param value - the `address` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAddress(value: fhirUrl | undefined | null): this {
    if (isDefined<fhirUrl>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.endpoint.address (${String(value)})`;
      this.address = new UrlType(parseFhirPrimitiveData(value, fhirUrlSchema, optErrMsg));
    } else {
      this.address = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `address` property exists and has a value; `false` otherwise
   */
  public hasAddress(): boolean {
    return this.hasAddressElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CapabilityStatement.messaging.endpoint';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.protocol,
      this.address,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.protocol, this.address, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatementMessagingEndpointComponent {
    const dest = new CapabilityStatementMessagingEndpointComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementMessagingEndpointComponent): void {
    super.copyValues(dest);
    dest.protocol = this.protocol ? this.protocol.copy() : null;
    dest.address = this.address ? this.address.copy() : null;
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

    if (this.hasProtocol()) {
      setFhirComplexJson(this.getProtocol(), 'protocol', jsonObj);
    } else {
      jsonObj['protocol'] = null;
    }

    if (this.hasAddressElement()) {
      setFhirPrimitiveJson<fhirUrl>(this.getAddressElement(), 'address', jsonObj);
    } else {
      jsonObj['address'] = null;
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementMessagingSupportedMessageComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Messages supported by this system
 * - **Definition:** References to message definitions for messages this system can send or receive.
 * - **Comment:** This is a proposed alternative to the messaging.event structure.
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementMessagingSupportedMessageComponent extends BackboneElement implements IBackboneElement {
  constructor(mode: EnumCodeType | CodeType | fhirCode | null = null, definition: CanonicalType | fhirCanonical | null = null) {
    super();

    this.eventCapabilityModeEnum = new EventCapabilityModeEnum();

    this.mode = constructorCodeValueAsEnumCodeType<EventCapabilityModeEnum>(
      mode,
      EventCapabilityModeEnum,
      this.eventCapabilityModeEnum,
      'CapabilityStatement.messaging.supportedMessage.mode',
    );

    this.definition = null;
    if (isDefined<CanonicalType | fhirCanonical>(definition)) {
      if (definition instanceof PrimitiveType) {
        this.setDefinitionElement(definition);
      } else {
        this.setDefinition(definition);
      }
    }
  }

  /**
   * Parse the provided `CapabilityStatementMessagingSupportedMessageComponent` JSON to instantiate the CapabilityStatementMessagingSupportedMessageComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementMessagingSupportedMessageComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementMessagingSupportedMessageComponent
   * @returns CapabilityStatementMessagingSupportedMessageComponent data model or undefined for `CapabilityStatementMessagingSupportedMessageComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementMessagingSupportedMessageComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementMessagingSupportedMessageComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementMessagingSupportedMessageComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'mode';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setMode(null);
      } else {
        instance.setModeElement(datatype);
      }
    } else {
      instance.setMode(null);
    }

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setDefinition(null);
      } else {
        instance.setDefinitionElement(datatype);
      }
    } else {
      instance.setDefinition(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: EventCapabilityMode
   *
   * @see {@link EventCapabilityModeEnum }
   */
  private readonly eventCapabilityModeEnum: EventCapabilityModeEnum;

  /**
   * CapabilityStatement.messaging.supportedMessage.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** sender | receiver
   * - **Definition:** The mode of this event declaration - whether application is sender or receiver.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link EventCapabilityModeEnum }
   */
  private mode: EnumCodeType | null;

  /**
   * CapabilityStatement.messaging.supportedMessage.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Message supported by this system
   * - **Definition:** Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MessageDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private definition: CanonicalType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `mode` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EventCapabilityModeEnum }
   */
  public getModeEnumType(): EnumCodeType | null {
    return this.mode;
  }

  /**
   * Assigns the provided EnumCodeType value to the `mode` property.
   *
   * @param enumType - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EventCapabilityModeEnum }
   */
  public setModeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CapabilityStatement.messaging.supportedMessage.mode`;
      assertEnumCodeType<EventCapabilityModeEnum>(enumType, EventCapabilityModeEnum, errMsgPrefix);
      this.mode = enumType;
    } else {
      this.mode = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasModeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.mode) && !this.mode.isEmpty() && this.mode.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `mode` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EventCapabilityModeEnum }
   */
  public getModeElement(): CodeType | null {
    if (this.mode === null) {
      return null;
    }
    return this.mode as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `mode` property.
   *
   * @param element - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link EventCapabilityModeEnum }
   */
  public setModeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.supportedMessage.mode; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.mode = new EnumCodeType(element, this.eventCapabilityModeEnum);
    } else {
      this.mode = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasModeElement(): boolean {
    return this.hasModeEnumType();
  }

  /**
   * @returns the `mode` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link EventCapabilityModeEnum }
   */
  public getMode(): fhirCode | null {
    if (this.mode === null) {
      return null;
    }
    return this.mode.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `mode` property.
   *
   * @param value - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link EventCapabilityModeEnum }
   */
  public setMode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.supportedMessage.mode (${String(value)})`;
      this.mode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.eventCapabilityModeEnum);
    } else {
      this.mode = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasMode(): boolean {
    return this.hasModeEnumType();
  }

  /**
   * @returns the `definition` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getDefinitionElement(): CanonicalType {
    return this.definition ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `definition` property.
   *
   * @param element - the `definition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionElement(element: CanonicalType | undefined | null): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.supportedMessage.definition; Provided value is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.definition = element;
    } else {
      this.definition = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinitionElement(): boolean {
    return isDefined<CanonicalType>(this.definition) && !this.definition.isEmpty();
  }

  /**
   * @returns the `definition` property value as a fhirCanonical if defined; else null
   */
  public getDefinition(): fhirCanonical | null {
    if (this.definition?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.definition.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `definition` property.
   *
   * @param value - the `definition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinition(value: fhirCanonical | undefined | null): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.messaging.supportedMessage.definition (${String(value)})`;
      this.definition = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.definition = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinition(): boolean {
    return this.hasDefinitionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CapabilityStatement.messaging.supportedMessage';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.mode,
      this.definition,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.mode, this.definition, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatementMessagingSupportedMessageComponent {
    const dest = new CapabilityStatementMessagingSupportedMessageComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementMessagingSupportedMessageComponent): void {
    super.copyValues(dest);
    dest.mode = this.mode ? this.mode.copy() : null;
    dest.definition = this.definition ? this.definition.copy() : null;
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

    if (this.hasModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getModeElement()!, 'mode', jsonObj);
    } else {
      jsonObj['mode'] = null;
    }

    if (this.hasDefinitionElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getDefinitionElement(), 'definition', jsonObj);
    } else {
      jsonObj['definition'] = null;
    }

    return jsonObj;
  }
}
/**
 * CapabilityStatementDocumentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Document definition
 * - **Definition:** A document definition.
 *
 * @category Data Models: Resource
 * @see [FHIR CapabilityStatement](http://hl7.org/fhir/StructureDefinition/CapabilityStatement)
 */
export class CapabilityStatementDocumentComponent extends BackboneElement implements IBackboneElement {
  constructor(mode: EnumCodeType | CodeType | fhirCode | null = null, profile: CanonicalType | fhirCanonical | null = null) {
    super();

    this.documentModeEnum = new DocumentModeEnum();

    this.mode = constructorCodeValueAsEnumCodeType<DocumentModeEnum>(
      mode,
      DocumentModeEnum,
      this.documentModeEnum,
      'CapabilityStatement.document.mode',
    );

    this.profile = null;
    if (isDefined<CanonicalType | fhirCanonical>(profile)) {
      if (profile instanceof PrimitiveType) {
        this.setProfileElement(profile);
      } else {
        this.setProfile(profile);
      }
    }
  }

  /**
   * Parse the provided `CapabilityStatementDocumentComponent` JSON to instantiate the CapabilityStatementDocumentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CapabilityStatementDocumentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CapabilityStatementDocumentComponent
   * @returns CapabilityStatementDocumentComponent data model or undefined for `CapabilityStatementDocumentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CapabilityStatementDocumentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CapabilityStatementDocumentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CapabilityStatementDocumentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'mode';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setMode(null);
      } else {
        instance.setModeElement(datatype);
      }
    } else {
      instance.setMode(null);
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    fieldName = 'profile';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setProfile(null);
      } else {
        instance.setProfileElement(datatype);
      }
    } else {
      instance.setProfile(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: DocumentMode
   *
   * @see {@link DocumentModeEnum }
   */
  private readonly documentModeEnum: DocumentModeEnum;

  /**
   * CapabilityStatement.document.mode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** producer | consumer
   * - **Definition:** Mode of this document declaration - whether an application is a producer or consumer.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link DocumentModeEnum }
   */
  private mode: EnumCodeType | null;

  /**
   * CapabilityStatement.document.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of document support
   * - **Definition:** A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: MarkdownType | undefined;

  /**
   * CapabilityStatement.document.profile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Constraint on the resources used in the document
   * - **Definition:** A profile on the document Bundle that constrains which resources are present, and their contents.
   * - **Comment:** The profile is actually on the Bundle.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private profile: CanonicalType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `mode` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link DocumentModeEnum }
   */
  public getModeEnumType(): EnumCodeType | null {
    return this.mode;
  }

  /**
   * Assigns the provided EnumCodeType value to the `mode` property.
   *
   * @param enumType - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DocumentModeEnum }
   */
  public setModeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CapabilityStatement.document.mode`;
      assertEnumCodeType<DocumentModeEnum>(enumType, DocumentModeEnum, errMsgPrefix);
      this.mode = enumType;
    } else {
      this.mode = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasModeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.mode) && !this.mode.isEmpty() && this.mode.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `mode` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link DocumentModeEnum }
   */
  public getModeElement(): CodeType | null {
    if (this.mode === null) {
      return null;
    }
    return this.mode as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `mode` property.
   *
   * @param element - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DocumentModeEnum }
   */
  public setModeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.document.mode; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.mode = new EnumCodeType(element, this.documentModeEnum);
    } else {
      this.mode = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasModeElement(): boolean {
    return this.hasModeEnumType();
  }

  /**
   * @returns the `mode` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link DocumentModeEnum }
   */
  public getMode(): fhirCode | null {
    if (this.mode === null) {
      return null;
    }
    return this.mode.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `mode` property.
   *
   * @param value - the `mode` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DocumentModeEnum }
   */
  public setMode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.document.mode (${String(value)})`;
      this.mode = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.documentModeEnum);
    } else {
      this.mode = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `mode` property exists and has a value; `false` otherwise
   */
  public hasMode(): boolean {
    return this.hasModeEnumType();
  }

  /**
   * @returns the `documentation` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDocumentationElement(): MarkdownType {
    return this.documentation ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `documentation` property.
   *
   * @param element - the `documentation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentationElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.document.documentation; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.documentation) && !this.documentation.isEmpty();
  }

  /**
   * @returns the `documentation` property value as a fhirMarkdown if defined; else undefined
   */
  public getDocumentation(): fhirMarkdown | undefined {
    return this.documentation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `documentation` property.
   *
   * @param value - the `documentation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDocumentation(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.document.documentation (${String(value)})`;
      this.documentation = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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

  /**
   * @returns the `profile` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getProfileElement(): CanonicalType {
    return this.profile ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `profile` property.
   *
   * @param element - the `profile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProfileElement(element: CanonicalType | undefined | null): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CapabilityStatement.document.profile; Provided value is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.profile = element;
    } else {
      this.profile = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfileElement(): boolean {
    return isDefined<CanonicalType>(this.profile) && !this.profile.isEmpty();
  }

  /**
   * @returns the `profile` property value as a fhirCanonical if defined; else null
   */
  public getProfile(): fhirCanonical | null {
    if (this.profile?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.profile.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `profile` property.
   *
   * @param value - the `profile` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setProfile(value: fhirCanonical | undefined | null): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CapabilityStatement.document.profile (${String(value)})`;
      this.profile = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.profile = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  public hasProfile(): boolean {
    return this.hasProfileElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CapabilityStatement.document';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.mode,
      this.documentation,
      this.profile,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.mode, this.profile, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CapabilityStatementDocumentComponent {
    const dest = new CapabilityStatementDocumentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CapabilityStatementDocumentComponent): void {
    super.copyValues(dest);
    dest.mode = this.mode ? this.mode.copy() : null;
    dest.documentation = this.documentation?.copy();
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

    if (this.hasModeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getModeElement()!, 'mode', jsonObj);
    } else {
      jsonObj['mode'] = null;
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    if (this.hasProfileElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getProfileElement(), 'profile', jsonObj);
    } else {
      jsonObj['profile'] = null;
    }

    return jsonObj;
  }
}
