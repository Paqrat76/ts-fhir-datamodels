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
 * MessageDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/MessageDefinition
 * StructureDefinition.name: MessageDefinition
 * StructureDefinition.description: Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 * StructureDefinition.fhirVersion: 5.0.0
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
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
  StringType,
  UnsignedIntType,
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
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, UsageContext } from '../complex-types/complex-datatypes';
import { FhirTypesEnum } from '../code-systems/FhirTypesEnum';
import { MessageSignificanceCategoryEnum } from '../code-systems/MessageSignificanceCategoryEnum';
import { MessageheaderResponseRequestEnum } from '../code-systems/MessageheaderResponseRequestEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * MessageDefinition Class
 *
 * @remarks
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 *
 * Allows messages to be defined once and re-used across systems.
 *
 * **FHIR Specification**
 * - **Short:** A resource that defines a type of message that can be exchanged between systems
 * - **Definition:** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 * - **Comment:** This would be a MIF-level artifact.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR MessageDefinition](http://hl7.org/fhir/StructureDefinition/MessageDefinition)
 */
export class MessageDefinition extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, date: DateTimeType | fhirDateTime | null = null, event: IDataType | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.messageSignificanceCategoryEnum = new MessageSignificanceCategoryEnum();
    this.messageheaderResponseRequestEnum = new MessageheaderResponseRequestEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'MessageDefinition.status',
    );

    this.date = null;
    if (isDefined<DateTimeType | fhirDateTime>(date)) {
      if (date instanceof PrimitiveType) {
        this.setDateElement(date);
      } else {
        this.setDate(date);
      }
    }

    this.event = null;
    if (isDefined<IDataType>(event)) {
      this.setEvent(event);
    }

  }

  /**
   * Parse the provided `MessageDefinition` JSON to instantiate the MessageDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `MessageDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MessageDefinition
   * @returns MessageDefinition data model or undefined for `MessageDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MessageDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MessageDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MessageDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'MessageDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = MessageDefinition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for MessageDefinition`;
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

    fieldName = 'replaces';
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
            instance.addReplacesElement(datatype);
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

    fieldName = 'base';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setBaseElement(datatype);
    }

    fieldName = 'parent';
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
            instance.addParentElement(datatype);
          }
        });
      }
    }

    fieldName = 'event[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const event: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (event === undefined) {
      instance.setEvent(null);
    } else {
      instance.setEvent(event);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setCategoryElement(datatype);
    }

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MessageDefinitionFocusComponent | undefined = MessageDefinitionFocusComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addFocus(component);
          }
        });
      }
    }

    fieldName = 'responseRequired';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setResponseRequiredElement(datatype);
    }

    fieldName = 'allowedResponse';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: MessageDefinitionAllowedResponseComponent | undefined = MessageDefinitionAllowedResponseComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addAllowedResponse(component);
          }
        });
      }
    }

    fieldName = 'graph';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setGraphElement(datatype);
    }

    return instance;
  }

  /**
   * MessageDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The cannonical URL for a given MessageDefinition
   * - **Definition:** The business identifier that is used to reference the MessageDefinition and *is* expected to be consistent from server to server.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the message definition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * MessageDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for a given MessageDefinition
   * - **Definition:** A formal identifier that is used to identify this message definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this message definition outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * MessageDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the message definition
   * - **Definition:** The identifier that is used to identify this version of the message definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the message definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the message definition with the format [url]|[version]. The version SHOULD NOT contain a \'#\' - see [Business Version](https://hl7.org/fhir/resource.html#bv-format).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * MessageDefinition.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MessageDefinition.versionAlgorithm[x]', ['string','Coding',]`
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
  @ChoiceDataTypesMeta('MessageDefinition.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * MessageDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this message definition (computer friendly)
   * - **Definition:** A natural language name identifying the message definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * MessageDefinition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this message definition (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the message definition.
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * MessageDefinition.replaces Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Takes the place of
   * - **Definition:** A MessageDefinition that is superseded by this definition.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MessageDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private replaces?: CanonicalType[] | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * MessageDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this message definition. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of message definitions that are appropriate for use versus not. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
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
   * MessageDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this message definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of message definitions that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level message definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * MessageDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the message definition was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the message definition changes.
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date: DateTimeType | null;

  /**
   * MessageDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher/steward (organization or individual)
   * - **Definition:** The name of the organization or individual responsible for the release and ongoing maintenance of the message definition.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the message definition.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * MessageDefinition.contact Element
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
   * MessageDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the message definition
   * - **Definition:** A free text natural language description of the message definition from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the message definition is presumed to be the predominant language in the place the message definition was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * MessageDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate message definition instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * MessageDefinition.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for message definition (if applicable)
   * - **Definition:** A legal or geographic region in which the message definition is intended to be used.
   * - **Comment:** It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended. DEPRECATION NOTE: For consistency, implementations are encouraged to migrate to using the new \'jurisdiction\' code in the useContext element.  (I.e. useContext.code indicating http://terminology.hl7.org/CodeSystem/usage-context-type#jurisdiction and useContext.valueCodeableConcept indicating the jurisdiction.)
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * MessageDefinition.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this message definition is defined
   * - **Definition:** Explanation of why this message definition is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the message definition. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private purpose?: MarkdownType | undefined;

  /**
   * MessageDefinition.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the message definition and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * MessageDefinition.copyrightLabel Element
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
   * MessageDefinition.base Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definition this one is based on
   * - **Definition:** The MessageDefinition that is the basis for the contents of this resource.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MessageDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private base?: CanonicalType | undefined;

  /**
   * MessageDefinition.parent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Protocol/workflow this is part of
   * - **Definition:** Identifies a protocol or workflow that this MessageDefinition represents a step in.
   * - **Comment:** It should be possible to use MessageDefinition to describe a message to be used by certain steps in a particular protocol as part of a PlanDefinition or ActivityDefinition.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private parent?: CanonicalType[] | undefined;

  /**
   * MessageDefinition.event[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('MessageDefinition.event[x]', ['Coding','uri',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Event code  or link to the EventDefinition
   * - **Definition:** Event code or link to the EventDefinition.
   * - **FHIR Types:**
   *     'Coding',
   *     'uri',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('MessageDefinition.event[x]',[
    'Coding',
    'uri',
  ])
  private event: IDataType | null;

  /**
   * FHIR CodeSystem: MessageSignificanceCategory
   *
   * @see {@link MessageSignificanceCategoryEnum }
   */
  private readonly messageSignificanceCategoryEnum: MessageSignificanceCategoryEnum;

  /**
   * MessageDefinition.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** consequence | currency | notification
   * - **Definition:** The impact of the content of the message.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MessageSignificanceCategoryEnum }
   */
  private category?: EnumCodeType | undefined;

  /**
   * MessageDefinition.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Resource(s) that are the subject of the event
   * - **Definition:** Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private focus?: MessageDefinitionFocusComponent[] | undefined;

  /**
   * FHIR CodeSystem: MessageheaderResponseRequest
   *
   * @see {@link MessageheaderResponseRequestEnum }
   */
  private readonly messageheaderResponseRequestEnum: MessageheaderResponseRequestEnum;

  /**
   * MessageDefinition.responseRequired Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** always | on-error | never | on-success
   * - **Definition:** Declare at a message definition level whether a response is required or only upon error or success, or never.
   * - **Comment:** This enables the capability currently available through MSH-16 (Application Level acknowledgement) in HL7 Version 2 to declare at a message instance level whether a response is required or only upon error or success, or never.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link MessageheaderResponseRequestEnum }
   */
  private responseRequired?: EnumCodeType | undefined;

  /**
   * MessageDefinition.allowedResponse Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Responses to this message
   * - **Definition:** Indicates what types of messages may be sent as an application-level response to this message.
   * - **Comment:** This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private allowedResponse?: MessageDefinitionAllowedResponseComponent[] | undefined;

  /**
   * MessageDefinition.graph Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical reference to a GraphDefinition
   * - **Definition:** Graph is Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a GraphDefinition that it controls what additional resources are to be added to the Bundle when building the message. The GraphDefinition can also specify profiles that apply to the various resources.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/GraphDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private graph?: CanonicalType | undefined;

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
      const optErrMsg = `Invalid MessageDefinition.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid MessageDefinition.url (${String(value)})`;
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
      const optErrMsg = `Invalid MessageDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MessageDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid MessageDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MessageDefinition.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('MessageDefinition.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MessageDefinition.versionAlgorithm[x]')
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
        `DataType mismatch for MessageDefinition.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for MessageDefinition.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
      const optErrMsg = `Invalid MessageDefinition.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MessageDefinition.name (${String(value)})`;
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
      const optErrMsg = `Invalid MessageDefinition.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MessageDefinition.title (${String(value)})`;
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
   * @returns the `replaces` property value as a CanonicalType array
   */
  public getReplacesElement(): CanonicalType[] {
    return this.replaces ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `replaces` property.
   *
   * @param element - the `replaces` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReplacesElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.replaces; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.replaces = element;
    } else {
      this.replaces = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `replaces` array property.
   *
   * @param element - the `replaces` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addReplacesElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.replaces; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initReplaces();
      this.replaces?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `replaces` property exists and has a value; `false` otherwise
   */
  public hasReplacesElement(): boolean {
    return isDefinedList<CanonicalType>(this.replaces) && this.replaces.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `replaces` property value as a fhirCanonical array
   */
  public getReplaces(): fhirCanonical[] {
    this.initReplaces();
    const replacesValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.replaces!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        replacesValues.push(value);
      }
    }
    return replacesValues;
  }

  /**
   * Assigns the provided primitive value array to the `replaces` property.
   *
   * @param value - the `replaces` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReplaces(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const replacesElements = [] as CanonicalType[];
      for (const replacesValue of value) {
        const optErrMsg = `Invalid MessageDefinition.replaces array item (${String(replacesValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(replacesValue, fhirCanonicalSchema, optErrMsg));
        replacesElements.push(element);
      }
      this.replaces = replacesElements;
    } else {
      this.replaces = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `replaces` array property.
   *
   * @param value - the `replaces` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addReplaces(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid MessageDefinition.replaces array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initReplaces();
      this.addReplacesElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `replaces` property exists and has a value; `false` otherwise
   */
  public hasReplaces(): boolean {
    return this.hasReplacesElement();
  }

  /**
   * Initialize the `replaces` property
   */
  private initReplaces(): void {
    if (!this.hasReplaces()) {
      this.replaces = [] as CanonicalType[];
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
      const errMsgPrefix = `Invalid MessageDefinition.status`;
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
      const optErrMsg = `Invalid MessageDefinition.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid MessageDefinition.status (${String(value)})`;
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
      const optErrMsg = `Invalid MessageDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid MessageDefinition.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid MessageDefinition.date; Provided value is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid MessageDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid MessageDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MessageDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid MessageDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid MessageDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid MessageDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid MessageDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid MessageDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid MessageDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid MessageDefinition.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MessageDefinition.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid MessageDefinition.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid MessageDefinition.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid MessageDefinition.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid MessageDefinition.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid MessageDefinition.copyrightLabel; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid MessageDefinition.copyrightLabel (${String(value)})`;
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
   * @returns the `base` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getBaseElement(): CanonicalType {
    return this.base ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `base` property.
   *
   * @param element - the `base` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBaseElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.base; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.base = element;
    } else {
      this.base = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `base` property exists and has a value; `false` otherwise
   */
  public hasBaseElement(): boolean {
    return isDefined<CanonicalType>(this.base) && !this.base.isEmpty();
  }

  /**
   * @returns the `base` property value as a fhirCanonical if defined; else undefined
   */
  public getBase(): fhirCanonical | undefined {
    return this.base?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `base` property.
   *
   * @param value - the `base` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBase(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid MessageDefinition.base (${String(value)})`;
      this.base = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.base = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `base` property exists and has a value; `false` otherwise
   */
  public hasBase(): boolean {
    return this.hasBaseElement();
  }

  /**
   * @returns the `parent` property value as a CanonicalType array
   */
  public getParentElement(): CanonicalType[] {
    return this.parent ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `parent` property.
   *
   * @param element - the `parent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParentElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.parent; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.parent = element;
    } else {
      this.parent = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `parent` array property.
   *
   * @param element - the `parent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addParentElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.parent; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initParent();
      this.parent?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `parent` property exists and has a value; `false` otherwise
   */
  public hasParentElement(): boolean {
    return isDefinedList<CanonicalType>(this.parent) && this.parent.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `parent` property value as a fhirCanonical array
   */
  public getParent(): fhirCanonical[] {
    this.initParent();
    const parentValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.parent!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        parentValues.push(value);
      }
    }
    return parentValues;
  }

  /**
   * Assigns the provided primitive value array to the `parent` property.
   *
   * @param value - the `parent` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParent(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const parentElements = [] as CanonicalType[];
      for (const parentValue of value) {
        const optErrMsg = `Invalid MessageDefinition.parent array item (${String(parentValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(parentValue, fhirCanonicalSchema, optErrMsg));
        parentElements.push(element);
      }
      this.parent = parentElements;
    } else {
      this.parent = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `parent` array property.
   *
   * @param value - the `parent` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addParent(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid MessageDefinition.parent array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initParent();
      this.addParentElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `parent` property exists and has a value; `false` otherwise
   */
  public hasParent(): boolean {
    return this.hasParentElement();
  }

  /**
   * Initialize the `parent` property
   */
  private initParent(): void {
    if (!this.hasParent()) {
      this.parent = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `event` property value as a DataType object; else null
   */
  public getEvent(): IDataType | null {
    return this.event;
  }

  /**
   * Assigns the provided DataType object value to the `event` property.
   *
   * @decorator `@ChoiceDataTypes('MessageDefinition.event[x]')`
   *
   * @param value - the `event` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('MessageDefinition.event[x]')
  public setEvent(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.event = value;
    } else {
      this.event = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `event` property exists and has a value; `false` otherwise
   */
  public hasEvent(): boolean {
    return isDefined<IDataType>(this.event) && !this.event.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `event` property value as a Coding object if defined; else null
   */
  public getEventCoding(): Coding | null {
    if (!isDefined<IDataType>(this.event)) {
      return null;
    }
    if (!(this.event instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for MessageDefinition.event[x]: Expected Coding but encountered ${this.event.fhirType()}`,
      );
    }
    return this.event;
  }

  /**
   * @returns `true` if the `` property exists as a Coding and has a value; `false` otherwise
   */
  public hasEventCoding(): boolean {
    return this.hasEvent() && this.event instanceof Coding;
  }

  /**
   * @returns the `event` property value as a UriType object if defined; else null
   */
  public getEventUriType(): UriType | null {
    if (!isDefined<IDataType>(this.event)) {
      return null;
    }
    if (!(this.event instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for MessageDefinition.event[x]: Expected UriType but encountered ${this.event.fhirType()}`,
      );
    }
    return this.event;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasEventUriType(): boolean {
    return this.hasEvent() && this.event instanceof UriType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `category` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MessageSignificanceCategoryEnum }
   */
  public getCategoryEnumType(): EnumCodeType | undefined {
    return this.category;
  }

  /**
   * Assigns the provided EnumCodeType value to the `category` property.
   *
   * @param enumType - the `category` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MessageSignificanceCategoryEnum }
   */
  public setCategoryEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid MessageDefinition.category';
      assertEnumCodeType<MessageSignificanceCategoryEnum>(enumType, MessageSignificanceCategoryEnum, errMsgPrefix);
      this.category = enumType;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategoryEnumType(): boolean {
    return isDefined<EnumCodeType>(this.category) && !this.category.isEmpty() && this.category.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `category` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MessageSignificanceCategoryEnum }
   */
  public getCategoryElement(): CodeType | undefined {
    if (this.category === undefined) {
      return undefined;
    }
    return this.category as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `category` property.
   *
   * @param element - the `category` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MessageSignificanceCategoryEnum }
   */
  public setCategoryElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.category; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.category = new EnumCodeType(element, this.messageSignificanceCategoryEnum);
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategoryElement(): boolean {
    return this.hasCategoryEnumType();
  }

  /**
   * @returns the `category` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MessageSignificanceCategoryEnum }
   */
  public getCategory(): fhirCode | undefined {
    if (this.category === undefined) {
      return undefined;
    }
    return this.category.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `category` property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link MessageSignificanceCategoryEnum }
   */
  public setCategory(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MessageDefinition.category; Provided value is not an instance of fhirCode.`;
      this.category = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.messageSignificanceCategoryEnum);
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return this.hasCategoryEnumType();
  }

  /**
   * @returns the `focus` property value as a MessageDefinitionFocusComponent array
   */
  public getFocus(): MessageDefinitionFocusComponent[] {
    return this.focus ?? ([] as MessageDefinitionFocusComponent[]);
  }

  /**
   * Assigns the provided MessageDefinitionFocusComponent array value to the `focus` property.
   *
   * @param value - the `focus` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFocus(value: MessageDefinitionFocusComponent[] | undefined): this {
    if (isDefinedList<MessageDefinitionFocusComponent>(value)) {
      const optErrMsg = `Invalid MessageDefinition.focus; Provided value array has an element that is not an instance of MessageDefinitionFocusComponent.`;
      assertFhirTypeList<MessageDefinitionFocusComponent>(value, MessageDefinitionFocusComponent, optErrMsg);
      this.focus = value;
    } else {
      this.focus = undefined;
    }
    return this;
  }

  /**
   * Add the provided MessageDefinitionFocusComponent value to the `focus` array property.
   *
   * @param value - the `focus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFocus(value: MessageDefinitionFocusComponent | undefined): this {
    if (isDefined<MessageDefinitionFocusComponent>(value)) {
      const optErrMsg = `Invalid MessageDefinition.focus; Provided element is not an instance of MessageDefinitionFocusComponent.`;
      assertFhirType<MessageDefinitionFocusComponent>(value, MessageDefinitionFocusComponent, optErrMsg);
      this.initFocus();
      this.focus?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `focus` property exists and has a value; `false` otherwise
   */
  public hasFocus(): boolean {
    return isDefinedList<MessageDefinitionFocusComponent>(this.focus) && this.focus.some((item: MessageDefinitionFocusComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `focus` property
   */
  private initFocus(): void {
    if(!this.hasFocus()) {
      this.focus = [] as MessageDefinitionFocusComponent[];
    }
  }

  /**
   * @returns the `responseRequired` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MessageheaderResponseRequestEnum }
   */
  public getResponseRequiredEnumType(): EnumCodeType | undefined {
    return this.responseRequired;
  }

  /**
   * Assigns the provided EnumCodeType value to the `responseRequired` property.
   *
   * @param enumType - the `responseRequired` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MessageheaderResponseRequestEnum }
   */
  public setResponseRequiredEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid MessageDefinition.responseRequired';
      assertEnumCodeType<MessageheaderResponseRequestEnum>(enumType, MessageheaderResponseRequestEnum, errMsgPrefix);
      this.responseRequired = enumType;
    } else {
      this.responseRequired = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `responseRequired` property exists and has a value; `false` otherwise
   */
  public hasResponseRequiredEnumType(): boolean {
    return isDefined<EnumCodeType>(this.responseRequired) && !this.responseRequired.isEmpty() && this.responseRequired.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `responseRequired` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MessageheaderResponseRequestEnum }
   */
  public getResponseRequiredElement(): CodeType | undefined {
    if (this.responseRequired === undefined) {
      return undefined;
    }
    return this.responseRequired as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `responseRequired` property.
   *
   * @param element - the `responseRequired` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MessageheaderResponseRequestEnum }
   */
  public setResponseRequiredElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.responseRequired; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.responseRequired = new EnumCodeType(element, this.messageheaderResponseRequestEnum);
    } else {
      this.responseRequired = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `responseRequired` property exists and has a value; `false` otherwise
   */
  public hasResponseRequiredElement(): boolean {
    return this.hasResponseRequiredEnumType();
  }

  /**
   * @returns the `responseRequired` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MessageheaderResponseRequestEnum }
   */
  public getResponseRequired(): fhirCode | undefined {
    if (this.responseRequired === undefined) {
      return undefined;
    }
    return this.responseRequired.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `responseRequired` property.
   *
   * @param value - the `responseRequired` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link MessageheaderResponseRequestEnum }
   */
  public setResponseRequired(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MessageDefinition.responseRequired; Provided value is not an instance of fhirCode.`;
      this.responseRequired = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.messageheaderResponseRequestEnum);
    } else {
      this.responseRequired = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `responseRequired` property exists and has a value; `false` otherwise
   */
  public hasResponseRequired(): boolean {
    return this.hasResponseRequiredEnumType();
  }

  /**
   * @returns the `allowedResponse` property value as a MessageDefinitionAllowedResponseComponent array
   */
  public getAllowedResponse(): MessageDefinitionAllowedResponseComponent[] {
    return this.allowedResponse ?? ([] as MessageDefinitionAllowedResponseComponent[]);
  }

  /**
   * Assigns the provided MessageDefinitionAllowedResponseComponent array value to the `allowedResponse` property.
   *
   * @param value - the `allowedResponse` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAllowedResponse(value: MessageDefinitionAllowedResponseComponent[] | undefined): this {
    if (isDefinedList<MessageDefinitionAllowedResponseComponent>(value)) {
      const optErrMsg = `Invalid MessageDefinition.allowedResponse; Provided value array has an element that is not an instance of MessageDefinitionAllowedResponseComponent.`;
      assertFhirTypeList<MessageDefinitionAllowedResponseComponent>(value, MessageDefinitionAllowedResponseComponent, optErrMsg);
      this.allowedResponse = value;
    } else {
      this.allowedResponse = undefined;
    }
    return this;
  }

  /**
   * Add the provided MessageDefinitionAllowedResponseComponent value to the `allowedResponse` array property.
   *
   * @param value - the `allowedResponse` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAllowedResponse(value: MessageDefinitionAllowedResponseComponent | undefined): this {
    if (isDefined<MessageDefinitionAllowedResponseComponent>(value)) {
      const optErrMsg = `Invalid MessageDefinition.allowedResponse; Provided element is not an instance of MessageDefinitionAllowedResponseComponent.`;
      assertFhirType<MessageDefinitionAllowedResponseComponent>(value, MessageDefinitionAllowedResponseComponent, optErrMsg);
      this.initAllowedResponse();
      this.allowedResponse?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `allowedResponse` property exists and has a value; `false` otherwise
   */
  public hasAllowedResponse(): boolean {
    return isDefinedList<MessageDefinitionAllowedResponseComponent>(this.allowedResponse) && this.allowedResponse.some((item: MessageDefinitionAllowedResponseComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `allowedResponse` property
   */
  private initAllowedResponse(): void {
    if(!this.hasAllowedResponse()) {
      this.allowedResponse = [] as MessageDefinitionAllowedResponseComponent[];
    }
  }

  /**
   * @returns the `graph` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getGraphElement(): CanonicalType {
    return this.graph ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `graph` property.
   *
   * @param element - the `graph` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGraphElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.graph; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.graph = element;
    } else {
      this.graph = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `graph` property exists and has a value; `false` otherwise
   */
  public hasGraphElement(): boolean {
    return isDefined<CanonicalType>(this.graph) && !this.graph.isEmpty();
  }

  /**
   * @returns the `graph` property value as a fhirCanonical if defined; else undefined
   */
  public getGraph(): fhirCanonical | undefined {
    return this.graph?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `graph` property.
   *
   * @param value - the `graph` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setGraph(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid MessageDefinition.graph (${String(value)})`;
      this.graph = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.graph = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `graph` property exists and has a value; `false` otherwise
   */
  public hasGraph(): boolean {
    return this.hasGraphElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MessageDefinition';
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
      this.replaces,
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
      this.base,
      this.parent,
      this.event,
      this.category,
      this.focus,
      this.responseRequired,
      this.allowedResponse,
      this.graph,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.date, this.event, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MessageDefinition {
    const dest = new MessageDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MessageDefinition): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.versionAlgorithm = this.versionAlgorithm?.copy() as IDataType;
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    const replacesList = copyListValues<CanonicalType>(this.replaces);
    dest.replaces = replacesList.length === 0 ? undefined : replacesList;
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
    dest.base = this.base?.copy();
    const parentList = copyListValues<CanonicalType>(this.parent);
    dest.parent = parentList.length === 0 ? undefined : parentList;
    dest.event = this.event ? this.event.copy() as IDataType : null;
    dest.category = this.category?.copy();
    const focusList = copyListValues<MessageDefinitionFocusComponent>(this.focus);
    dest.focus = focusList.length === 0 ? undefined : focusList;
    dest.responseRequired = this.responseRequired?.copy();
    const allowedResponseList = copyListValues<MessageDefinitionAllowedResponseComponent>(this.allowedResponse);
    dest.allowedResponse = allowedResponseList.length === 0 ? undefined : allowedResponseList;
    dest.graph = this.graph?.copy();
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

    if (this.hasReplaces()) {
      setFhirPrimitiveListJson(this.getReplacesElement(), 'replaces', jsonObj);
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

    if (this.hasBaseElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getBaseElement(), 'base', jsonObj);
    }

    if (this.hasParent()) {
      setFhirPrimitiveListJson(this.getParentElement(), 'parent', jsonObj);
    }

    if (this.hasEvent()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getEvent()!, 'event', jsonObj);
    }

    if (this.hasCategoryElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCategoryElement()!, 'category', jsonObj);
    }

    if (this.hasFocus()) {
      setFhirBackboneElementListJson(this.getFocus(), 'focus', jsonObj);
    }

    if (this.hasResponseRequiredElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getResponseRequiredElement()!, 'responseRequired', jsonObj);
    }

    if (this.hasAllowedResponse()) {
      setFhirBackboneElementListJson(this.getAllowedResponse(), 'allowedResponse', jsonObj);
    }

    if (this.hasGraphElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getGraphElement(), 'graph', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * MessageDefinitionFocusComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Resource(s) that are the subject of the event
 * - **Definition:** Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
 *
 * @category Data Models: Resource
 * @see [FHIR MessageDefinition](http://hl7.org/fhir/StructureDefinition/MessageDefinition)
 */
export class MessageDefinitionFocusComponent extends BackboneElement implements IBackboneElement {
  constructor(code: EnumCodeType | CodeType | fhirCode | null = null, min: UnsignedIntType | fhirUnsignedInt | null = null) {
    super();

    this.fhirTypesEnum = new FhirTypesEnum();

    this.code = constructorCodeValueAsEnumCodeType<FhirTypesEnum>(
      code,
      FhirTypesEnum,
      this.fhirTypesEnum,
      'MessageDefinition.focus.code',
    );

    this.min = null;
    if (isDefined<UnsignedIntType | fhirUnsignedInt>(min)) {
      if (min instanceof PrimitiveType) {
        this.setMinElement(min);
      } else {
        this.setMin(min);
      }
    }
  }

  /**
   * Parse the provided `MessageDefinitionFocusComponent` JSON to instantiate the MessageDefinitionFocusComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MessageDefinitionFocusComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MessageDefinitionFocusComponent
   * @returns MessageDefinitionFocusComponent data model or undefined for `MessageDefinitionFocusComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MessageDefinitionFocusComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MessageDefinitionFocusComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MessageDefinitionFocusComponent();

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

    fieldName = 'profile';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setProfileElement(datatype);
    }

    fieldName = 'min';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setMin(null);
      } else {
        instance.setMinElement(datatype);
      }
    } else {
      instance.setMin(null);
    }

    fieldName = 'max';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setMaxElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: FhirTypes
   *
   * @see {@link FhirTypesEnum }
   */
  private readonly fhirTypesEnum: FhirTypesEnum;

  /**
   * MessageDefinition.focus.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of resource
   * - **Definition:** The kind of resource that must be the focus for this message.
   * - **Comment:** Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a particular account or encounter, etc.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  private code: EnumCodeType | null;

  /**
   * MessageDefinition.focus.profile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Profile that must be adhered to by focus
   * - **Definition:** A profile that reflects constraints for the focal resource (and potentially for related resources).
   * - **Comment:** This should be present for most message definitions.  However, if the message focus is only a single resource and there is no need to include referenced resources or otherwise enforce the presence of particular elements, it can be omitted.
   * - **Requirements:** This profile allows setting boundaries for what content must appear within the message bundle vs. outside based on the declared aggregation constraints on referenced resources on this and related profiles.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private profile?: CanonicalType | undefined;

  /**
   * MessageDefinition.focus.min Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Minimum number of focuses of this type
   * - **Definition:** Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private min: UnsignedIntType | null;

  /**
   * MessageDefinition.focus.max Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Maximum number of focuses of this type
   * - **Definition:** Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private max?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setCodeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid MessageDefinition.focus.code`;
      assertEnumCodeType<FhirTypesEnum>(enumType, FhirTypesEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.focus.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = new EnumCodeType(element, this.fhirTypesEnum);
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid MessageDefinition.focus.code (${String(value)})`;
      this.code = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fhirTypesEnum);
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
      const optErrMsg = `Invalid MessageDefinition.focus.profile; Provided element is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid MessageDefinition.focus.profile (${String(value)})`;
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
   * @returns the `min` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getMinElement(): UnsignedIntType {
    return this.min ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `min` property.
   *
   * @param element - the `min` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMinElement(element: UnsignedIntType | undefined | null): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.focus.min; Provided value is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.min = element;
    } else {
      this.min = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `min` property exists and has a value; `false` otherwise
   */
  public hasMinElement(): boolean {
    return isDefined<UnsignedIntType>(this.min) && !this.min.isEmpty();
  }

  /**
   * @returns the `min` property value as a fhirUnsignedInt if defined; else null
   */
  public getMin(): fhirUnsignedInt | null {
    if (this.min?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.min.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `min` property.
   *
   * @param value - the `min` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMin(value: fhirUnsignedInt | undefined | null): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid MessageDefinition.focus.min (${String(value)})`;
      this.min = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.min = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `min` property exists and has a value; `false` otherwise
   */
  public hasMin(): boolean {
    return this.hasMinElement();
  }

  /**
   * @returns the `max` property value as a StringType object if defined; else an empty StringType object
   */
  public getMaxElement(): StringType {
    return this.max ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `max` property.
   *
   * @param element - the `max` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMaxElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.focus.max; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.max = element;
    } else {
      this.max = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `max` property exists and has a value; `false` otherwise
   */
  public hasMaxElement(): boolean {
    return isDefined<StringType>(this.max) && !this.max.isEmpty();
  }

  /**
   * @returns the `max` property value as a fhirString if defined; else undefined
   */
  public getMax(): fhirString | undefined {
    return this.max?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `max` property.
   *
   * @param value - the `max` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMax(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid MessageDefinition.focus.max (${String(value)})`;
      this.max = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.max = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `max` property exists and has a value; `false` otherwise
   */
  public hasMax(): boolean {
    return this.hasMaxElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MessageDefinition.focus';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.profile,
      this.min,
      this.max,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, this.min, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MessageDefinitionFocusComponent {
    const dest = new MessageDefinitionFocusComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MessageDefinitionFocusComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.profile = this.profile?.copy();
    dest.min = this.min ? this.min.copy() : null;
    dest.max = this.max?.copy();
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
    }

    if (this.hasProfileElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getProfileElement(), 'profile', jsonObj);
    }

    if (this.hasMinElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getMinElement(), 'min', jsonObj);
    }

    if (this.hasMaxElement()) {
      setFhirPrimitiveJson<fhirString>(this.getMaxElement(), 'max', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * MessageDefinitionAllowedResponseComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Responses to this message
 * - **Definition:** Indicates what types of messages may be sent as an application-level response to this message.
 * - **Comment:** This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
 *
 * @category Data Models: Resource
 * @see [FHIR MessageDefinition](http://hl7.org/fhir/StructureDefinition/MessageDefinition)
 */
export class MessageDefinitionAllowedResponseComponent extends BackboneElement implements IBackboneElement {
  constructor(message: CanonicalType | fhirCanonical | null = null) {
    super();

    this.message = null;
    if (isDefined<CanonicalType | fhirCanonical>(message)) {
      if (message instanceof PrimitiveType) {
        this.setMessageElement(message);
      } else {
        this.setMessage(message);
      }
    }
  }

  /**
   * Parse the provided `MessageDefinitionAllowedResponseComponent` JSON to instantiate the MessageDefinitionAllowedResponseComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `MessageDefinitionAllowedResponseComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to MessageDefinitionAllowedResponseComponent
   * @returns MessageDefinitionAllowedResponseComponent data model or undefined for `MessageDefinitionAllowedResponseComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): MessageDefinitionAllowedResponseComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'MessageDefinitionAllowedResponseComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new MessageDefinitionAllowedResponseComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'message';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setMessage(null);
      } else {
        instance.setMessageElement(datatype);
      }
    } else {
      instance.setMessage(null);
    }

    fieldName = 'situation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setSituationElement(datatype);
    }

    return instance;
  }

  /**
   * MessageDefinition.allowedResponse.message Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to allowed message definition response
   * - **Definition:** A reference to the message definition that must be adhered to by this supported response.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/MessageDefinition',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private message: CanonicalType | null;

  /**
   * MessageDefinition.allowedResponse.situation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When should this response be used
   * - **Definition:** Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private situation?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `message` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getMessageElement(): CanonicalType {
    return this.message ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `message` property.
   *
   * @param element - the `message` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMessageElement(element: CanonicalType | undefined | null): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.allowedResponse.message; Provided value is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.message = element;
    } else {
      this.message = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `message` property exists and has a value; `false` otherwise
   */
  public hasMessageElement(): boolean {
    return isDefined<CanonicalType>(this.message) && !this.message.isEmpty();
  }

  /**
   * @returns the `message` property value as a fhirCanonical if defined; else null
   */
  public getMessage(): fhirCanonical | null {
    if (this.message?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.message.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `message` property.
   *
   * @param value - the `message` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMessage(value: fhirCanonical | undefined | null): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid MessageDefinition.allowedResponse.message (${String(value)})`;
      this.message = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.message = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `message` property exists and has a value; `false` otherwise
   */
  public hasMessage(): boolean {
    return this.hasMessageElement();
  }

  /**
   * @returns the `situation` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getSituationElement(): MarkdownType {
    return this.situation ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `situation` property.
   *
   * @param element - the `situation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSituationElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid MessageDefinition.allowedResponse.situation; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.situation = element;
    } else {
      this.situation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `situation` property exists and has a value; `false` otherwise
   */
  public hasSituationElement(): boolean {
    return isDefined<MarkdownType>(this.situation) && !this.situation.isEmpty();
  }

  /**
   * @returns the `situation` property value as a fhirMarkdown if defined; else undefined
   */
  public getSituation(): fhirMarkdown | undefined {
    return this.situation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `situation` property.
   *
   * @param value - the `situation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSituation(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid MessageDefinition.allowedResponse.situation (${String(value)})`;
      this.situation = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.situation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `situation` property exists and has a value; `false` otherwise
   */
  public hasSituation(): boolean {
    return this.hasSituationElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'MessageDefinition.allowedResponse';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.message,
      this.situation,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.message, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): MessageDefinitionAllowedResponseComponent {
    const dest = new MessageDefinitionAllowedResponseComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: MessageDefinitionAllowedResponseComponent): void {
    super.copyValues(dest);
    dest.message = this.message ? this.message.copy() : null;
    dest.situation = this.situation?.copy();
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

    if (this.hasMessageElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getMessageElement(), 'message', jsonObj);
    }

    if (this.hasSituationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getSituationElement(), 'situation', jsonObj);
    }

    return jsonObj;
  }
}
