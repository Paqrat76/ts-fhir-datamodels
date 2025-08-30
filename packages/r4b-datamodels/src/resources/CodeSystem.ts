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
 * CodeSystem Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/CodeSystem
 * StructureDefinition.name: CodeSystem
 * StructureDefinition.description: The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
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
  UnsignedIntType,
  UriType,
  assertEnumCodeType,
  assertEnumCodeTypeList,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  constructorCodeValueAsEnumCodeTypeList,
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
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, UsageContext } from '../complex-types/complex-datatypes';
import { CodesystemContentModeEnum } from '../code-systems/CodesystemContentModeEnum';
import { CodesystemHierarchyMeaningEnum } from '../code-systems/CodesystemHierarchyMeaningEnum';
import { ConceptPropertyTypeEnum } from '../code-systems/ConceptPropertyTypeEnum';
import { FilterOperatorEnum } from '../code-systems/FilterOperatorEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * CodeSystem Class
 *
 * @remarks
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 *
 * **FHIR Specification**
 * - **Short:** Declares the existence of and describes a code system or code system supplement
 * - **Definition:** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR CodeSystem](http://hl7.org/fhir/StructureDefinition/CodeSystem)
 */
export class CodeSystem extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, content: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.codesystemHierarchyMeaningEnum = new CodesystemHierarchyMeaningEnum();
    this.codesystemContentModeEnum = new CodesystemContentModeEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'CodeSystem.status',
    );

    this.content = constructorCodeValueAsEnumCodeType<CodesystemContentModeEnum>(
      content,
      CodesystemContentModeEnum,
      this.codesystemContentModeEnum,
      'CodeSystem.content',
    );
  }

  /**
   * Parse the provided `CodeSystem` JSON to instantiate the CodeSystem data model.
   *
   * @param sourceJson - JSON representing FHIR `CodeSystem`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CodeSystem
   * @returns CodeSystem data model or undefined for `CodeSystem`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): CodeSystem | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CodeSystem';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CodeSystem();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'CodeSystem');
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

    fieldName = 'caseSensitive';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setCaseSensitiveElement(datatype);
    }

    fieldName = 'valueSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setValueSetElement(datatype);
    }

    fieldName = 'hierarchyMeaning';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setHierarchyMeaningElement(datatype);
    }

    fieldName = 'compositional';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setCompositionalElement(datatype);
    }

    fieldName = 'versionNeeded';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setVersionNeededElement(datatype);
    }

    fieldName = 'content';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setContent(null);
      } else {
        instance.setContentElement(datatype);
      }
    } else {
      instance.setContent(null);
    }

    fieldName = 'supplements';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setSupplementsElement(datatype);
    }

    fieldName = 'count';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setCountElement(datatype);
    }

    fieldName = 'filter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CodeSystemFilterComponent | undefined = CodeSystemFilterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addFilter(component);
        }
      });
    }

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CodeSystemPropertyComponent | undefined = CodeSystemPropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProperty(component);
        }
      });
    }

    fieldName = 'concept';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CodeSystemConceptComponent | undefined = CodeSystemConceptComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addConcept(component);
        }
      });
    }

    return instance;
  }

  /**
   * CodeSystem.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system)
   * - **Definition:** An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this code system is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the code system is stored on different servers. This is used in [Coding](https://hl7.org/fhir/datatypes.html#Coding).system.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the code system to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * CodeSystem.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the code system (business identifier)
   * - **Definition:** A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this code system outside of FHIR, where it is not possible to use the logical URI.  Note that HL7 defines at least three identifiers for many of its code systems - the FHIR canonical URL, the OID and the V2 Table 0396 mnemonic code.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * CodeSystem.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the code system (Coding.version)
   * - **Definition:** The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding](https://hl7.org/fhir/datatypes.html#Coding).version.
   * - **Comment:** There may be different code system instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the code system with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * CodeSystem.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this code system (computer friendly)
   * - **Definition:** A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * CodeSystem.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this code system (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the code system.
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
   * CodeSystem.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The date (and optionally time) when the code system resource was created or revised.
   * - **Comment:** Allows filtering of code systems that are appropriate for use versus not.
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
   * CodeSystem.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of code systems that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level code system.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * CodeSystem.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the code system was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the code system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * CodeSystem.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the code system.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the code system is the organization or individual primarily responsible for the maintenance and upkeep of the code system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the code system. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the code system.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * CodeSystem.contact Element
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
   * CodeSystem.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the code system
   * - **Definition:** A free text natural language description of the code system from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the code system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the code system as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the code system is presumed to be the predominant language in the place the code system was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * CodeSystem.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate code system instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * CodeSystem.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for code system (if applicable)
   * - **Definition:** A legal or geographic region in which the code system is intended to be used.
   * - **Comment:** It may be possible for the code system to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * CodeSystem.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this code system is defined
   * - **Definition:** Explanation of why this code system is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the code system. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this code system.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * CodeSystem.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system.
   * - **Comment:** ... Sometimes, the copyright differs between the code system and the codes that are included. The copyright statement should clearly differentiate between these when required.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the code system and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * CodeSystem.caseSensitive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If code comparison is case sensitive
   * - **Definition:** If code comparison is case sensitive when codes within this system are compared to each other.
   * - **Comment:** If this value is missing, then it is not specified whether a code system is case sensitive or not. When the rule is not known, Postel\'s law should be followed: produce codes with the correct case, and accept codes in any case. This element is primarily provided to support validation software.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private caseSensitive?: BooleanType | undefined;

  /**
   * CodeSystem.valueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical reference to the value set with entire code system
   * - **Definition:** Canonical reference to the value set that contains the entire code system.
   * - **Comment:** The definition of the value set SHALL include all codes from this code system and only codes from this code system, and it SHALL be immutable.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private valueSet?: CanonicalType | undefined;

  /**
   * FHIR CodeSystem: CodesystemHierarchyMeaning
   *
   * @see {@link CodesystemHierarchyMeaningEnum }
   */
  private readonly codesystemHierarchyMeaningEnum: CodesystemHierarchyMeaningEnum;

  /**
   * CodeSystem.hierarchyMeaning Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** grouped-by | is-a | part-of | classified-with
   * - **Definition:** The meaning of the hierarchy of concepts as represented in this resource.
   * - **Comment:** Note that other representations might have a different hierarchy or none at all, and represent the information using properties.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link CodesystemHierarchyMeaningEnum }
   */
  private hierarchyMeaning?: EnumCodeType | undefined;

  /**
   * CodeSystem.compositional Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If code system defines a compositional grammar
   * - **Definition:** The code system defines a compositional (post-coordination) grammar.
   * - **Comment:** Note that the code system resource does not define what the compositional grammar is, only whether or not there is one.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private compositional?: BooleanType | undefined;

  /**
   * CodeSystem.versionNeeded Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If definitions are not stable
   * - **Definition:** This flag is used to signify that the code system does not commit to concept permanence across versions. If true, a version must be specified when referencing this code system.
   * - **Comment:** Best practice is that code systems do not redefine concepts, or that if concepts are redefined, a new code system definition is created. But this is not always possible, so some code systems may be defined as \'versionNeeded\'. Most code systems occasionally refine the displays defined for concepts between versions. Contexts in which the concept display values are validated may require that the version be specified for some code systems irrespective of the value of this property.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private versionNeeded?: BooleanType | undefined;

  /**
   * FHIR CodeSystem: CodesystemContentMode
   *
   * @see {@link CodesystemContentModeEnum }
   */
  private readonly codesystemContentModeEnum: CodesystemContentModeEnum;

  /**
   * CodeSystem.content Element
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
   * CodeSystem.supplements Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical URL of Code System this adds designations and properties to
   * - **Definition:** The canonical URL of the code system that this code system supplement is adding designations and properties to.
   * - **Comment:** The most common use of a code system supplement is to add additional language support.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CodeSystem',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private supplements?: CanonicalType | undefined;

  /**
   * CodeSystem.count Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Total concepts in the code system
   * - **Definition:** The total number of concepts defined by the code system. Where the code system has a compositional grammar, the basis of this count is defined by the system steward.
   * - **Comment:** The count of concepts defined in this resource cannot be more than this value but may be less for several reasons - see the content element.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private count?: UnsignedIntType | undefined;

  /**
   * CodeSystem.filter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Filter that can be used in a value set
   * - **Definition:** A filter that can be used in a value set compose statement when selecting concepts using a filter.
   * - **Comment:** Note that filters defined in code systems usually require custom code on the part of any terminology engine that will make them available for use in value set filters. For this reason, they are generally only seen in high value published terminologies.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private filter?: CodeSystemFilterComponent[] | undefined;

  /**
   * CodeSystem.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information supplied about each concept
   * - **Definition:** A property defines an additional slot through which additional information can be provided about a concept.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private property?: CodeSystemPropertyComponent[] | undefined;

  /**
   * CodeSystem.concept Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Concepts in the code system
   * - **Definition:** Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meanings of the hierarchical relationships are.
   * - **Comment:** If this is empty, it means that the code system resource does not represent the content of the code system.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private concept?: CodeSystemConceptComponent[] | undefined;

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
      const optErrMsg = `Invalid CodeSystem.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid CodeSystem.url (${String(value)})`;
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
      const optErrMsg = `Invalid CodeSystem.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid CodeSystem.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid CodeSystem.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CodeSystem.version (${String(value)})`;
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
      const optErrMsg = `Invalid CodeSystem.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CodeSystem.name (${String(value)})`;
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
      const optErrMsg = `Invalid CodeSystem.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CodeSystem.title (${String(value)})`;
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
      const errMsgPrefix = `Invalid CodeSystem.status`;
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
      const optErrMsg = `Invalid CodeSystem.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid CodeSystem.status (${String(value)})`;
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
      const optErrMsg = `Invalid CodeSystem.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid CodeSystem.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid CodeSystem.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid CodeSystem.date (${String(value)})`;
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
      const optErrMsg = `Invalid CodeSystem.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CodeSystem.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid CodeSystem.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid CodeSystem.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid CodeSystem.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid CodeSystem.description (${String(value)})`;
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
      const optErrMsg = `Invalid CodeSystem.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid CodeSystem.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid CodeSystem.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CodeSystem.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid CodeSystem.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid CodeSystem.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid CodeSystem.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid CodeSystem.copyright (${String(value)})`;
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
   * @returns the `caseSensitive` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getCaseSensitiveElement(): BooleanType {
    return this.caseSensitive ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `caseSensitive` property.
   *
   * @param element - the `caseSensitive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCaseSensitiveElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CodeSystem.caseSensitive; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.caseSensitive = element;
    } else {
      this.caseSensitive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `caseSensitive` property exists and has a value; `false` otherwise
   */
  public hasCaseSensitiveElement(): boolean {
    return isDefined<BooleanType>(this.caseSensitive) && !this.caseSensitive.isEmpty();
  }

  /**
   * @returns the `caseSensitive` property value as a fhirBoolean if defined; else undefined
   */
  public getCaseSensitive(): fhirBoolean | undefined {
    return this.caseSensitive?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `caseSensitive` property.
   *
   * @param value - the `caseSensitive` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCaseSensitive(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CodeSystem.caseSensitive (${String(value)})`;
      this.caseSensitive = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.caseSensitive = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `caseSensitive` property exists and has a value; `false` otherwise
   */
  public hasCaseSensitive(): boolean {
    return this.hasCaseSensitiveElement();
  }

  /**
   * @returns the `valueSet` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getValueSetElement(): CanonicalType {
    return this.valueSet ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `valueSet` property.
   *
   * @param element - the `valueSet` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueSetElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CodeSystem.valueSet; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.valueSet = element;
    } else {
      this.valueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `valueSet` property exists and has a value; `false` otherwise
   */
  public hasValueSetElement(): boolean {
    return isDefined<CanonicalType>(this.valueSet) && !this.valueSet.isEmpty();
  }

  /**
   * @returns the `valueSet` property value as a fhirCanonical if defined; else undefined
   */
  public getValueSet(): fhirCanonical | undefined {
    return this.valueSet?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `valueSet` property.
   *
   * @param value - the `valueSet` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueSet(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CodeSystem.valueSet (${String(value)})`;
      this.valueSet = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.valueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `valueSet` property exists and has a value; `false` otherwise
   */
  public hasValueSet(): boolean {
    return this.hasValueSetElement();
  }

  /**
   * @returns the `hierarchyMeaning` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link CodesystemHierarchyMeaningEnum }
   */
  public getHierarchyMeaningEnumType(): EnumCodeType | undefined {
    return this.hierarchyMeaning;
  }

  /**
   * Assigns the provided EnumCodeType value to the `hierarchyMeaning` property.
   *
   * @param enumType - the `hierarchyMeaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link CodesystemHierarchyMeaningEnum }
   */
  public setHierarchyMeaningEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid CodeSystem.hierarchyMeaning';
      assertEnumCodeType<CodesystemHierarchyMeaningEnum>(enumType, CodesystemHierarchyMeaningEnum, errMsgPrefix);
      this.hierarchyMeaning = enumType;
    } else {
      this.hierarchyMeaning = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hierarchyMeaning` property exists and has a value; `false` otherwise
   */
  public hasHierarchyMeaningEnumType(): boolean {
    return isDefined<EnumCodeType>(this.hierarchyMeaning) && !this.hierarchyMeaning.isEmpty() && this.hierarchyMeaning.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `hierarchyMeaning` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link CodesystemHierarchyMeaningEnum }
   */
  public getHierarchyMeaningElement(): CodeType | undefined {
    if (this.hierarchyMeaning === undefined) {
      return undefined;
    }
    return this.hierarchyMeaning as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `hierarchyMeaning` property.
   *
   * @param element - the `hierarchyMeaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link CodesystemHierarchyMeaningEnum }
   */
  public setHierarchyMeaningElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CodeSystem.hierarchyMeaning; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.hierarchyMeaning = new EnumCodeType(element, this.codesystemHierarchyMeaningEnum);
    } else {
      this.hierarchyMeaning = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hierarchyMeaning` property exists and has a value; `false` otherwise
   */
  public hasHierarchyMeaningElement(): boolean {
    return this.hasHierarchyMeaningEnumType();
  }

  /**
   * @returns the `hierarchyMeaning` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link CodesystemHierarchyMeaningEnum }
   */
  public getHierarchyMeaning(): fhirCode | undefined {
    if (this.hierarchyMeaning === undefined) {
      return undefined;
    }
    return this.hierarchyMeaning.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `hierarchyMeaning` property.
   *
   * @param value - the `hierarchyMeaning` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link CodesystemHierarchyMeaningEnum }
   */
  public setHierarchyMeaning(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CodeSystem.hierarchyMeaning; Provided value is not an instance of fhirCode.`;
      this.hierarchyMeaning = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.codesystemHierarchyMeaningEnum);
    } else {
      this.hierarchyMeaning = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `hierarchyMeaning` property exists and has a value; `false` otherwise
   */
  public hasHierarchyMeaning(): boolean {
    return this.hasHierarchyMeaningEnumType();
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
      const optErrMsg = `Invalid CodeSystem.compositional; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid CodeSystem.compositional (${String(value)})`;
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
   * @returns the `versionNeeded` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getVersionNeededElement(): BooleanType {
    return this.versionNeeded ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `versionNeeded` property.
   *
   * @param element - the `versionNeeded` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersionNeededElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid CodeSystem.versionNeeded; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.versionNeeded = element;
    } else {
      this.versionNeeded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `versionNeeded` property exists and has a value; `false` otherwise
   */
  public hasVersionNeededElement(): boolean {
    return isDefined<BooleanType>(this.versionNeeded) && !this.versionNeeded.isEmpty();
  }

  /**
   * @returns the `versionNeeded` property value as a fhirBoolean if defined; else undefined
   */
  public getVersionNeeded(): fhirBoolean | undefined {
    return this.versionNeeded?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `versionNeeded` property.
   *
   * @param value - the `versionNeeded` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setVersionNeeded(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid CodeSystem.versionNeeded (${String(value)})`;
      this.versionNeeded = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.versionNeeded = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `versionNeeded` property exists and has a value; `false` otherwise
   */
  public hasVersionNeeded(): boolean {
    return this.hasVersionNeededElement();
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
  public setContentEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CodeSystem.content`;
      assertEnumCodeType<CodesystemContentModeEnum>(enumType, CodesystemContentModeEnum, errMsgPrefix);
      this.content = enumType;
    } else {
      this.content = null;
    }
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
  public setContentElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CodeSystem.content; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.content = new EnumCodeType(element, this.codesystemContentModeEnum);
    } else {
      this.content = null;
    }
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
  public setContent(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CodeSystem.content (${String(value)})`;
      this.content = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.codesystemContentModeEnum);
    } else {
      this.content = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return this.hasContentEnumType();
  }

  /**
   * @returns the `supplements` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getSupplementsElement(): CanonicalType {
    return this.supplements ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `supplements` property.
   *
   * @param element - the `supplements` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSupplementsElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid CodeSystem.supplements; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.supplements = element;
    } else {
      this.supplements = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `supplements` property exists and has a value; `false` otherwise
   */
  public hasSupplementsElement(): boolean {
    return isDefined<CanonicalType>(this.supplements) && !this.supplements.isEmpty();
  }

  /**
   * @returns the `supplements` property value as a fhirCanonical if defined; else undefined
   */
  public getSupplements(): fhirCanonical | undefined {
    return this.supplements?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `supplements` property.
   *
   * @param value - the `supplements` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSupplements(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid CodeSystem.supplements (${String(value)})`;
      this.supplements = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.supplements = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `supplements` property exists and has a value; `false` otherwise
   */
  public hasSupplements(): boolean {
    return this.hasSupplementsElement();
  }

  /**
   * @returns the `count` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getCountElement(): UnsignedIntType {
    return this.count ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `count` property.
   *
   * @param element - the `count` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCountElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid CodeSystem.count; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.count = element;
    } else {
      this.count = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `count` property exists and has a value; `false` otherwise
   */
  public hasCountElement(): boolean {
    return isDefined<UnsignedIntType>(this.count) && !this.count.isEmpty();
  }

  /**
   * @returns the `count` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getCount(): fhirUnsignedInt | undefined {
    return this.count?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `count` property.
   *
   * @param value - the `count` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCount(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid CodeSystem.count (${String(value)})`;
      this.count = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.count = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `count` property exists and has a value; `false` otherwise
   */
  public hasCount(): boolean {
    return this.hasCountElement();
  }

  /**
   * @returns the `filter` property value as a CodeSystemFilterComponent array
   */
  public getFilter(): CodeSystemFilterComponent[] {
    return this.filter ?? ([] as CodeSystemFilterComponent[]);
  }

  /**
   * Assigns the provided CodeSystemFilterComponent array value to the `filter` property.
   *
   * @param value - the `filter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFilter(value: CodeSystemFilterComponent[] | undefined): this {
    if (isDefinedList<CodeSystemFilterComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.filter; Provided value array has an element that is not an instance of CodeSystemFilterComponent.`;
      assertFhirTypeList<CodeSystemFilterComponent>(value, CodeSystemFilterComponent, optErrMsg);
      this.filter = value;
    } else {
      this.filter = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeSystemFilterComponent value to the `filter` array property.
   *
   * @param value - the `filter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFilter(value: CodeSystemFilterComponent | undefined): this {
    if (isDefined<CodeSystemFilterComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.filter; Provided element is not an instance of CodeSystemFilterComponent.`;
      assertFhirType<CodeSystemFilterComponent>(value, CodeSystemFilterComponent, optErrMsg);
      this.initFilter();
      this.filter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `filter` property exists and has a value; `false` otherwise
   */
  public hasFilter(): boolean {
    return isDefinedList<CodeSystemFilterComponent>(this.filter) && this.filter.some((item: CodeSystemFilterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `filter` property
   */
  private initFilter(): void {
    if(!this.hasFilter()) {
      this.filter = [] as CodeSystemFilterComponent[];
    }
  }

  /**
   * @returns the `property` property value as a CodeSystemPropertyComponent array
   */
  public getProperty(): CodeSystemPropertyComponent[] {
    return this.property ?? ([] as CodeSystemPropertyComponent[]);
  }

  /**
   * Assigns the provided CodeSystemPropertyComponent array value to the `property` property.
   *
   * @param value - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProperty(value: CodeSystemPropertyComponent[] | undefined): this {
    if (isDefinedList<CodeSystemPropertyComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.property; Provided value array has an element that is not an instance of CodeSystemPropertyComponent.`;
      assertFhirTypeList<CodeSystemPropertyComponent>(value, CodeSystemPropertyComponent, optErrMsg);
      this.property = value;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeSystemPropertyComponent value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProperty(value: CodeSystemPropertyComponent | undefined): this {
    if (isDefined<CodeSystemPropertyComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.property; Provided element is not an instance of CodeSystemPropertyComponent.`;
      assertFhirType<CodeSystemPropertyComponent>(value, CodeSystemPropertyComponent, optErrMsg);
      this.initProperty();
      this.property?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return isDefinedList<CodeSystemPropertyComponent>(this.property) && this.property.some((item: CodeSystemPropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if(!this.hasProperty()) {
      this.property = [] as CodeSystemPropertyComponent[];
    }
  }

  /**
   * @returns the `concept` property value as a CodeSystemConceptComponent array
   */
  public getConcept(): CodeSystemConceptComponent[] {
    return this.concept ?? ([] as CodeSystemConceptComponent[]);
  }

  /**
   * Assigns the provided CodeSystemConceptComponent array value to the `concept` property.
   *
   * @param value - the `concept` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConcept(value: CodeSystemConceptComponent[] | undefined): this {
    if (isDefinedList<CodeSystemConceptComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept; Provided value array has an element that is not an instance of CodeSystemConceptComponent.`;
      assertFhirTypeList<CodeSystemConceptComponent>(value, CodeSystemConceptComponent, optErrMsg);
      this.concept = value;
    } else {
      this.concept = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeSystemConceptComponent value to the `concept` array property.
   *
   * @param value - the `concept` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addConcept(value: CodeSystemConceptComponent | undefined): this {
    if (isDefined<CodeSystemConceptComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept; Provided element is not an instance of CodeSystemConceptComponent.`;
      assertFhirType<CodeSystemConceptComponent>(value, CodeSystemConceptComponent, optErrMsg);
      this.initConcept();
      this.concept?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `concept` property exists and has a value; `false` otherwise
   */
  public hasConcept(): boolean {
    return isDefinedList<CodeSystemConceptComponent>(this.concept) && this.concept.some((item: CodeSystemConceptComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `concept` property
   */
  private initConcept(): void {
    if(!this.hasConcept()) {
      this.concept = [] as CodeSystemConceptComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CodeSystem';
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
      this.experimental,
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.useContext,
      this.jurisdiction,
      this.purpose,
      this.copyright,
      this.caseSensitive,
      this.valueSet,
      this.hierarchyMeaning,
      this.compositional,
      this.versionNeeded,
      this.content,
      this.supplements,
      this.count,
      this.filter,
      this.property,
      this.concept,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.content, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CodeSystem {
    const dest = new CodeSystem();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CodeSystem): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
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
    dest.caseSensitive = this.caseSensitive?.copy();
    dest.valueSet = this.valueSet?.copy();
    dest.hierarchyMeaning = this.hierarchyMeaning?.copy();
    dest.compositional = this.compositional?.copy();
    dest.versionNeeded = this.versionNeeded?.copy();
    dest.content = this.content ? this.content.copy() : null;
    dest.supplements = this.supplements?.copy();
    dest.count = this.count?.copy();
    const filterList = copyListValues<CodeSystemFilterComponent>(this.filter);
    dest.filter = filterList.length === 0 ? undefined : filterList;
    const propertyList = copyListValues<CodeSystemPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    const conceptList = copyListValues<CodeSystemConceptComponent>(this.concept);
    dest.concept = conceptList.length === 0 ? undefined : conceptList;
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

    if (this.hasPurposeElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPurposeElement(), 'purpose', jsonObj);
    }

    if (this.hasCopyrightElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCopyrightElement(), 'copyright', jsonObj);
    }

    if (this.hasCaseSensitiveElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getCaseSensitiveElement(), 'caseSensitive', jsonObj);
    }

    if (this.hasValueSetElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getValueSetElement(), 'valueSet', jsonObj);
    }

    if (this.hasHierarchyMeaningElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getHierarchyMeaningElement()!, 'hierarchyMeaning', jsonObj);
    }

    if (this.hasCompositionalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getCompositionalElement(), 'compositional', jsonObj);
    }

    if (this.hasVersionNeededElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getVersionNeededElement(), 'versionNeeded', jsonObj);
    }

    if (this.hasContentElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getContentElement()!, 'content', jsonObj);
    } else {
      jsonObj['content'] = null;
    }

    if (this.hasSupplementsElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getSupplementsElement(), 'supplements', jsonObj);
    }

    if (this.hasCountElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getCountElement(), 'count', jsonObj);
    }

    if (this.hasFilter()) {
      setFhirBackboneElementListJson(this.getFilter(), 'filter', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    if (this.hasConcept()) {
      setFhirBackboneElementListJson(this.getConcept(), 'concept', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * CodeSystemFilterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Filter that can be used in a value set
 * - **Definition:** A filter that can be used in a value set compose statement when selecting concepts using a filter.
 * - **Comment:** Note that filters defined in code systems usually require custom code on the part of any terminology engine that will make them available for use in value set filters. For this reason, they are generally only seen in high value published terminologies.
 *
 * @category Data Models: Resource
 * @see [FHIR CodeSystem](http://hl7.org/fhir/StructureDefinition/CodeSystem)
 */
export class CodeSystemFilterComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeType | fhirCode | null = null, operator: EnumCodeType[] | CodeType[] | fhirCode[] | null = null, value: StringType | fhirString | null = null) {
    super();

    this.filterOperatorEnum = new FilterOperatorEnum();

    this.code = null;
    if (isDefined<CodeType | fhirCode>(code)) {
      if (code instanceof PrimitiveType) {
        this.setCodeElement(code);
      } else {
        this.setCode(code);
      }
    }

    this.operator = constructorCodeValueAsEnumCodeTypeList<FilterOperatorEnum>(
      operator,
      FilterOperatorEnum,
      this.filterOperatorEnum,
      'CodeSystem.filter.operator',
    );

    this.value = null;
    if (isDefined<StringType | fhirString>(value)) {
      if (value instanceof PrimitiveType) {
        this.setValueElement(value);
      } else {
        this.setValue(value);
      }
    }
  }

  /**
   * Parse the provided `CodeSystemFilterComponent` JSON to instantiate the CodeSystemFilterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CodeSystemFilterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CodeSystemFilterComponent
   * @returns CodeSystemFilterComponent data model or undefined for `CodeSystemFilterComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CodeSystemFilterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CodeSystemFilterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CodeSystemFilterComponent();

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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'operator';
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
          instance.setOperator(null);
        } else {
          instance.addOperatorElement(datatype);
        }
      });
    } else {
      instance.setOperator(null);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setValue(null);
      } else {
        instance.setValueElement(datatype);
      }
    } else {
      instance.setValue(null);
    }

    return instance;
  }

  /**
   * CodeSystem.filter.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that identifies the filter
   * - **Definition:** The code that identifies this filter when it is used as a filter in [ValueSet](https://hl7.org/fhir/valueset.html#).compose.include.filter.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeType | null;

  /**
   * CodeSystem.filter.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How or why the filter is used
   * - **Definition:** A description of how or why the filter is used.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * FHIR CodeSystem: FilterOperator
   *
   * @see {@link FilterOperatorEnum }
   */
  private readonly filterOperatorEnum: FilterOperatorEnum;

  /**
   * CodeSystem.filter.operator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists
   * - **Definition:** A list of operators that can be used with the filter.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  private operator: EnumCodeType[] | null;

  /**
   * CodeSystem.filter.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What to use for the value
   * - **Definition:** A description of what the value for the filter should be.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private value: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getCodeElement(): CodeType {
    return this.code ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CodeSystem.filter.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = element;
    } else {
      this.code = null;
    }
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
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CodeSystem.filter.code (${String(value)})`;
      this.code = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.code = null;
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
      const optErrMsg = `Invalid CodeSystem.filter.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CodeSystem.filter.description (${String(value)})`;
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
   * @returns the `operator` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public getOperatorEnumType(): EnumCodeType[] {
    return this.operator ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `operator` property.
   *
   * @param enumType - the `operator` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public setOperatorEnumType(enumType: EnumCodeType[] | undefined | null): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CodeSystem.filter.operator`;
      assertEnumCodeTypeList<FilterOperatorEnum>(enumType, FilterOperatorEnum, errMsgPrefix);
      this.operator = enumType;
    } else {
      this.operator = null;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `operator` array property.
   *
   * @param enumType - the `operator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public addOperatorEnumType(enumType: EnumCodeType): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CodeSystem.filter.operator`;
      assertEnumCodeType<FilterOperatorEnum>(enumType, FilterOperatorEnum, errMsgPrefix);
      this.initOperator();
      this.operator?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `operator` property exists and has a value; `false` otherwise
   */
  public hasOperatorEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.operator) && this.operator.some((item: EnumCodeType) => !item.isEmpty()) && this.operator.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `operator` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public getOperatorElement(): CodeType[] {
    if (this.operator === null) {
      return [] as CodeType[];
    }
    return this.operator as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `operator` property.
   *
   * @param element - the `operator` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public setOperatorElement(element: CodeType[] | undefined | null): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid CodeSystem.filter.operator; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.filterOperatorEnum));
      });
      this.operator = enumCodeTypes;
    } else {
      this.operator = null;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `operator` array property.
   *
   * @param element - the `operator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public addOperatorElement(element: CodeType): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CodeSystem.filter.operator; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initOperator();
      this.operator?.push(new EnumCodeType(element, this.filterOperatorEnum));
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
   * @returns the `operator` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public getOperator(): fhirCode[] {
    if (this.operator === null) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.operator) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `operator` property.
   *
   * @param value - the `operator` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public setOperator(value: fhirCode[] | undefined | null): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid CodeSystem.filter.operator; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.filterOperatorEnum));
      });
      this.operator = enumCodeTypes;
    } else {
      this.operator = null;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `operator` array property.
   *
   * @param value - the `operator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link FilterOperatorEnum }
   */
  public addOperator(value: fhirCode): this {
    if (isDefined<fhirCode>(value)) {
      this.initOperator();
      const optErrMsg = `Invalid CodeSystem.filter.operator; Provided value is not an instance of fhirCode.`;
      this.operator?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.filterOperatorEnum));
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
   * Initialize the operator property
   */
  private initOperator(): void {
    if(!this.hasOperatorEnumType()) {
      this.operator = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else an empty StringType object
   */
  public getValueElement(): StringType {
    return this.value ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CodeSystem.filter.value; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.value = element;
    } else {
      this.value = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValueElement(): boolean {
    return isDefined<StringType>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `value` property value as a fhirString if defined; else null
   */
  public getValue(): fhirString | null {
    if (this.value?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.value.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CodeSystem.filter.value (${String(value)})`;
      this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.value = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return this.hasValueElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CodeSystem.filter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.description,
      this.operator,
      this.value,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CodeSystemFilterComponent {
    const dest = new CodeSystemFilterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CodeSystemFilterComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.description = this.description?.copy();
    const operatorList = copyListValues<EnumCodeType>(this.operator);
    dest.operator = operatorList.length === 0 ? null : operatorList;
    dest.value = this.value ? this.value.copy() : null;
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
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasOperatorElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getOperatorElement(), 'operator', jsonObj);
    } else {
      jsonObj['operator'] = null;
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    return jsonObj;
  }
}
/**
 * CodeSystemPropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Additional information supplied about each concept
 * - **Definition:** A property defines an additional slot through which additional information can be provided about a concept.
 *
 * @category Data Models: Resource
 * @see [FHIR CodeSystem](http://hl7.org/fhir/StructureDefinition/CodeSystem)
 */
export class CodeSystemPropertyComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeType | fhirCode | null = null, type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.conceptPropertyTypeEnum = new ConceptPropertyTypeEnum();

    this.code = null;
    if (isDefined<CodeType | fhirCode>(code)) {
      if (code instanceof PrimitiveType) {
        this.setCodeElement(code);
      } else {
        this.setCode(code);
      }
    }

    this.type_ = constructorCodeValueAsEnumCodeType<ConceptPropertyTypeEnum>(
      type_,
      ConceptPropertyTypeEnum,
      this.conceptPropertyTypeEnum,
      'CodeSystem.property.type',
    );
  }

  /**
   * Parse the provided `CodeSystemPropertyComponent` JSON to instantiate the CodeSystemPropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CodeSystemPropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CodeSystemPropertyComponent
   * @returns CodeSystemPropertyComponent data model or undefined for `CodeSystemPropertyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CodeSystemPropertyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CodeSystemPropertyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CodeSystemPropertyComponent();

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

    fieldName = 'uri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setUriElement(datatype);
    }

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

    return instance;
  }

  /**
   * CodeSystem.property.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies the property on the concepts, and when referred to in operations
   * - **Definition:** A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeType | null;

  /**
   * CodeSystem.property.uri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Formal identifier for the property
   * - **Definition:** Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](https://hl7.org/fhir/codesystem-concept-properties.html) code system.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private uri?: UriType | undefined;

  /**
   * CodeSystem.property.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the property is defined, and/or what it conveys
   * - **Definition:** A description of the property- why it is defined, and how its value might be used.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: StringType | undefined;

  /**
   * FHIR CodeSystem: ConceptPropertyType
   *
   * @see {@link ConceptPropertyTypeEnum }
   */
  private readonly conceptPropertyTypeEnum: ConceptPropertyTypeEnum;

  /**
   * CodeSystem.property.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** code | Coding | string | integer | boolean | dateTime | decimal
   * - **Definition:** The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to another defined concept).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ConceptPropertyTypeEnum }
   */
  private type_: EnumCodeType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getCodeElement(): CodeType {
    return this.code ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CodeSystem.property.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = element;
    } else {
      this.code = null;
    }
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
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CodeSystem.property.code (${String(value)})`;
      this.code = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.code = null;
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
   * @returns the `uri` property value as a UriType object if defined; else an empty UriType object
   */
  public getUriElement(): UriType {
    return this.uri ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `uri` property.
   *
   * @param element - the `uri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid CodeSystem.property.uri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
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
    return isDefined<UriType>(this.uri) && !this.uri.isEmpty();
  }

  /**
   * @returns the `uri` property value as a fhirUri if defined; else undefined
   */
  public getUri(): fhirUri | undefined {
    return this.uri?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `uri` property.
   *
   * @param value - the `uri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid CodeSystem.property.uri (${String(value)})`;
      this.uri = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
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
      const optErrMsg = `Invalid CodeSystem.property.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid CodeSystem.property.description (${String(value)})`;
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
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ConceptPropertyTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ConceptPropertyTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid CodeSystem.property.type`;
      assertEnumCodeType<ConceptPropertyTypeEnum>(enumType, ConceptPropertyTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ConceptPropertyTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ConceptPropertyTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CodeSystem.property.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.conceptPropertyTypeEnum);
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
   * @see CodeSystem Enumeration: {@link ConceptPropertyTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ConceptPropertyTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CodeSystem.property.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.conceptPropertyTypeEnum);
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CodeSystem.property';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.uri,
      this.description,
      this.type_,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.code, this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CodeSystemPropertyComponent {
    const dest = new CodeSystemPropertyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CodeSystemPropertyComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.uri = this.uri?.copy();
    dest.description = this.description?.copy();
    dest.type_ = this.type_ ? this.type_.copy() : null;
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
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasUriElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUriElement(), 'uri', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    return jsonObj;
  }
}
/**
 * CodeSystemConceptComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Concepts in the code system
 * - **Definition:** Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meanings of the hierarchical relationships are.
 * - **Comment:** If this is empty, it means that the code system resource does not represent the content of the code system.
 *
 * @category Data Models: Resource
 * @see [FHIR CodeSystem](http://hl7.org/fhir/StructureDefinition/CodeSystem)
 */
export class CodeSystemConceptComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeType | fhirCode | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeType | fhirCode>(code)) {
      if (code instanceof PrimitiveType) {
        this.setCodeElement(code);
      } else {
        this.setCode(code);
      }
    }
  }

  /**
   * Parse the provided `CodeSystemConceptComponent` JSON to instantiate the CodeSystemConceptComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CodeSystemConceptComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CodeSystemConceptComponent
   * @returns CodeSystemConceptComponent data model or undefined for `CodeSystemConceptComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CodeSystemConceptComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CodeSystemConceptComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CodeSystemConceptComponent();

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

    fieldName = 'display';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDisplayElement(datatype);
    }

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDefinitionElement(datatype);
    }

    fieldName = 'designation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CodeSystemConceptDesignationComponent | undefined = CodeSystemConceptDesignationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDesignation(component);
        }
      });
    }

    fieldName = 'property';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CodeSystemConceptPropertyComponent | undefined = CodeSystemConceptPropertyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProperty(component);
        }
      });
    }

    fieldName = 'concept';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: CodeSystemConceptComponent | undefined = CodeSystemConceptComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addConcept(component);
        }
      });
    }

    return instance;
  }

  /**
   * CodeSystem.concept.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code that identifies concept
   * - **Definition:** A code - a text symbol - that uniquely identifies the concept within the code system.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeType | null;

  /**
   * CodeSystem.concept.display Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Text to display to the user
   * - **Definition:** A human readable string that is the recommended default way to present this concept to a user.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private display?: StringType | undefined;

  /**
   * CodeSystem.concept.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Formal definition
   * - **Definition:** The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definition?: StringType | undefined;

  /**
   * CodeSystem.concept.designation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional representations for the concept
   * - **Definition:** Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.
   * - **Comment:** Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](https://hl7.org/fhir/resource.html#language).
   * - **Requirements:** Many concept definition systems support multiple representations, in multiple languages, and for multiple purposes.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private designation?: CodeSystemConceptDesignationComponent[] | undefined;

  /**
   * CodeSystem.concept.property Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Property value for the concept
   * - **Definition:** A property value for this concept.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private property?: CodeSystemConceptPropertyComponent[] | undefined;

  /**
   * CodeSystem.concept.concept Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Child Concepts (is-a/contains/categorizes)
   * - **Definition:** Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private concept?: CodeSystemConceptComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getCodeElement(): CodeType {
    return this.code ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CodeSystem.concept.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = element;
    } else {
      this.code = null;
    }
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
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.code (${String(value)})`;
      this.code = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.code = null;
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
   * @returns the `display` property value as a StringType object if defined; else an empty StringType object
   */
  public getDisplayElement(): StringType {
    return this.display ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `display` property.
   *
   * @param element - the `display` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplayElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CodeSystem.concept.display; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.display = element;
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplayElement(): boolean {
    return isDefined<StringType>(this.display) && !this.display.isEmpty();
  }

  /**
   * @returns the `display` property value as a fhirString if defined; else undefined
   */
  public getDisplay(): fhirString | undefined {
    return this.display?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `display` property.
   *
   * @param value - the `display` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDisplay(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.display (${String(value)})`;
      this.display = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.display = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  public hasDisplay(): boolean {
    return this.hasDisplayElement();
  }

  /**
   * @returns the `definition` property value as a StringType object if defined; else an empty StringType object
   */
  public getDefinitionElement(): StringType {
    return this.definition ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `definition` property.
   *
   * @param element - the `definition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CodeSystem.concept.definition; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
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
    return isDefined<StringType>(this.definition) && !this.definition.isEmpty();
  }

  /**
   * @returns the `definition` property value as a fhirString if defined; else undefined
   */
  public getDefinition(): fhirString | undefined {
    return this.definition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `definition` property.
   *
   * @param value - the `definition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinition(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.definition (${String(value)})`;
      this.definition = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
   * @returns the `designation` property value as a CodeSystemConceptDesignationComponent array
   */
  public getDesignation(): CodeSystemConceptDesignationComponent[] {
    return this.designation ?? ([] as CodeSystemConceptDesignationComponent[]);
  }

  /**
   * Assigns the provided CodeSystemConceptDesignationComponent array value to the `designation` property.
   *
   * @param value - the `designation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDesignation(value: CodeSystemConceptDesignationComponent[] | undefined): this {
    if (isDefinedList<CodeSystemConceptDesignationComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.designation; Provided value array has an element that is not an instance of CodeSystemConceptDesignationComponent.`;
      assertFhirTypeList<CodeSystemConceptDesignationComponent>(value, CodeSystemConceptDesignationComponent, optErrMsg);
      this.designation = value;
    } else {
      this.designation = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeSystemConceptDesignationComponent value to the `designation` array property.
   *
   * @param value - the `designation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDesignation(value: CodeSystemConceptDesignationComponent | undefined): this {
    if (isDefined<CodeSystemConceptDesignationComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.designation; Provided element is not an instance of CodeSystemConceptDesignationComponent.`;
      assertFhirType<CodeSystemConceptDesignationComponent>(value, CodeSystemConceptDesignationComponent, optErrMsg);
      this.initDesignation();
      this.designation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `designation` property exists and has a value; `false` otherwise
   */
  public hasDesignation(): boolean {
    return isDefinedList<CodeSystemConceptDesignationComponent>(this.designation) && this.designation.some((item: CodeSystemConceptDesignationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `designation` property
   */
  private initDesignation(): void {
    if(!this.hasDesignation()) {
      this.designation = [] as CodeSystemConceptDesignationComponent[];
    }
  }

  /**
   * @returns the `property` property value as a CodeSystemConceptPropertyComponent array
   */
  public getProperty(): CodeSystemConceptPropertyComponent[] {
    return this.property ?? ([] as CodeSystemConceptPropertyComponent[]);
  }

  /**
   * Assigns the provided CodeSystemConceptPropertyComponent array value to the `property` property.
   *
   * @param value - the `property` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProperty(value: CodeSystemConceptPropertyComponent[] | undefined): this {
    if (isDefinedList<CodeSystemConceptPropertyComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.property; Provided value array has an element that is not an instance of CodeSystemConceptPropertyComponent.`;
      assertFhirTypeList<CodeSystemConceptPropertyComponent>(value, CodeSystemConceptPropertyComponent, optErrMsg);
      this.property = value;
    } else {
      this.property = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeSystemConceptPropertyComponent value to the `property` array property.
   *
   * @param value - the `property` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProperty(value: CodeSystemConceptPropertyComponent | undefined): this {
    if (isDefined<CodeSystemConceptPropertyComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.property; Provided element is not an instance of CodeSystemConceptPropertyComponent.`;
      assertFhirType<CodeSystemConceptPropertyComponent>(value, CodeSystemConceptPropertyComponent, optErrMsg);
      this.initProperty();
      this.property?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `property` property exists and has a value; `false` otherwise
   */
  public hasProperty(): boolean {
    return isDefinedList<CodeSystemConceptPropertyComponent>(this.property) && this.property.some((item: CodeSystemConceptPropertyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `property` property
   */
  private initProperty(): void {
    if(!this.hasProperty()) {
      this.property = [] as CodeSystemConceptPropertyComponent[];
    }
  }

  /**
   * @returns the `concept` property value as a CodeSystemConceptComponent array
   */
  public getConcept(): CodeSystemConceptComponent[] {
    return this.concept ?? ([] as CodeSystemConceptComponent[]);
  }

  /**
   * Assigns the provided CodeSystemConceptComponent array value to the `concept` property.
   *
   * @param value - the `concept` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setConcept(value: CodeSystemConceptComponent[] | undefined): this {
    if (isDefinedList<CodeSystemConceptComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.concept; Provided value array has an element that is not an instance of CodeSystemConceptComponent.`;
      assertFhirTypeList<CodeSystemConceptComponent>(value, CodeSystemConceptComponent, optErrMsg);
      this.concept = value;
    } else {
      this.concept = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeSystemConceptComponent value to the `concept` array property.
   *
   * @param value - the `concept` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addConcept(value: CodeSystemConceptComponent | undefined): this {
    if (isDefined<CodeSystemConceptComponent>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.concept; Provided element is not an instance of CodeSystemConceptComponent.`;
      assertFhirType<CodeSystemConceptComponent>(value, CodeSystemConceptComponent, optErrMsg);
      this.initConcept();
      this.concept?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `concept` property exists and has a value; `false` otherwise
   */
  public hasConcept(): boolean {
    return isDefinedList<CodeSystemConceptComponent>(this.concept) && this.concept.some((item: CodeSystemConceptComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `concept` property
   */
  private initConcept(): void {
    if(!this.hasConcept()) {
      this.concept = [] as CodeSystemConceptComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CodeSystem.concept';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.display,
      this.definition,
      this.designation,
      this.property,
      this.concept,
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
  public override copy(): CodeSystemConceptComponent {
    const dest = new CodeSystemConceptComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CodeSystemConceptComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    dest.display = this.display?.copy();
    dest.definition = this.definition?.copy();
    const designationList = copyListValues<CodeSystemConceptDesignationComponent>(this.designation);
    dest.designation = designationList.length === 0 ? undefined : designationList;
    const propertyList = copyListValues<CodeSystemConceptPropertyComponent>(this.property);
    dest.property = propertyList.length === 0 ? undefined : propertyList;
    const conceptList = copyListValues<CodeSystemConceptComponent>(this.concept);
    dest.concept = conceptList.length === 0 ? undefined : conceptList;
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
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasDisplayElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDisplayElement(), 'display', jsonObj);
    }

    if (this.hasDefinitionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDefinitionElement(), 'definition', jsonObj);
    }

    if (this.hasDesignation()) {
      setFhirBackboneElementListJson(this.getDesignation(), 'designation', jsonObj);
    }

    if (this.hasProperty()) {
      setFhirBackboneElementListJson(this.getProperty(), 'property', jsonObj);
    }

    if (this.hasConcept()) {
      setFhirBackboneElementListJson(this.getConcept(), 'concept', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * CodeSystemConceptDesignationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Additional representations for the concept
 * - **Definition:** Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc.
 * - **Comment:** Concepts have both a ```display``` and an array of ```designation```. The display is equivalent to a special designation with an implied ```designation.use``` of "primary code" and a language equal to the [Resource Language](https://hl7.org/fhir/resource.html#language).
 * - **Requirements:** Many concept definition systems support multiple representations, in multiple languages, and for multiple purposes.
 *
 * @category Data Models: Resource
 * @see [FHIR CodeSystem](http://hl7.org/fhir/StructureDefinition/CodeSystem)
 */
export class CodeSystemConceptDesignationComponent extends BackboneElement implements IBackboneElement {
  constructor(value: StringType | fhirString | null = null) {
    super();

    this.value = null;
    if (isDefined<StringType | fhirString>(value)) {
      if (value instanceof PrimitiveType) {
        this.setValueElement(value);
      } else {
        this.setValue(value);
      }
    }
  }

  /**
   * Parse the provided `CodeSystemConceptDesignationComponent` JSON to instantiate the CodeSystemConceptDesignationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CodeSystemConceptDesignationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CodeSystemConceptDesignationComponent
   * @returns CodeSystemConceptDesignationComponent data model or undefined for `CodeSystemConceptDesignationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CodeSystemConceptDesignationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CodeSystemConceptDesignationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CodeSystemConceptDesignationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setLanguageElement(datatype);
    }

    fieldName = 'use';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Coding | undefined = Coding.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUse(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setValue(null);
      } else {
        instance.setValueElement(datatype);
      }
    } else {
      instance.setValue(null);
    }

    return instance;
  }

  /**
   * CodeSystem.concept.designation.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human language of the designation
   * - **Definition:** The language this designation is defined for.
   * - **Comment:** In the absence of a language, the resource language applies.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language?: CodeType | undefined;

  /**
   * CodeSystem.concept.designation.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Details how this designation would be used
   * - **Definition:** A code that details how this designation would be used.
   * - **Comment:** If no use is provided, the designation can be assumed to be suitable for general display to a human user.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private use?: Coding | undefined;

  /**
   * CodeSystem.concept.designation.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The text value for this designation
   * - **Definition:** The text value for this designation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `language` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getLanguageElement(): CodeType {
    return this.language ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `language` property.
   *
   * @param element - the `language` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguageElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CodeSystem.concept.designation.language; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.language = element;
    } else {
      this.language = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  public hasLanguageElement(): boolean {
    return isDefined<CodeType>(this.language) && !this.language.isEmpty();
  }

  /**
   * @returns the `language` property value as a fhirCode if defined; else undefined
   */
  public getLanguage(): fhirCode | undefined {
    return this.language?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `language` property.
   *
   * @param value - the `language` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguage(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.designation.language (${String(value)})`;
      this.language = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.language = undefined;
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
   * @returns the `use` property value as a Coding object if defined; else an empty Coding object
   */
  public getUse(): Coding {
    return this.use ?? new Coding();
  }

  /**
   * Assigns the provided Use object value to the `use` property.
   *
   * @param value - the `use` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUse(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.designation.use; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.use = value;
    } else {
      this.use = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return isDefined<Coding>(this.use) && !this.use.isEmpty();
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else an empty StringType object
   */
  public getValueElement(): StringType {
    return this.value ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `value` property.
   *
   * @param element - the `value` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CodeSystem.concept.designation.value; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.value = element;
    } else {
      this.value = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValueElement(): boolean {
    return isDefined<StringType>(this.value) && !this.value.isEmpty();
  }

  /**
   * @returns the `value` property value as a fhirString if defined; else null
   */
  public getValue(): fhirString | null {
    if (this.value?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.value.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.designation.value (${String(value)})`;
      this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.value = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return this.hasValueElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CodeSystem.concept.designation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.language,
      this.use,
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
  public override copy(): CodeSystemConceptDesignationComponent {
    const dest = new CodeSystemConceptDesignationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CodeSystemConceptDesignationComponent): void {
    super.copyValues(dest);
    dest.language = this.language?.copy();
    dest.use = this.use?.copy();
    dest.value = this.value ? this.value.copy() : null;
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

    if (this.hasLanguageElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getLanguageElement(), 'language', jsonObj);
    }

    if (this.hasUse()) {
      setFhirComplexJson(this.getUse(), 'use', jsonObj);
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    return jsonObj;
  }
}
/**
 * CodeSystemConceptPropertyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Property value for the concept
 * - **Definition:** A property value for this concept.
 *
 * @category Data Models: Resource
 * @see [FHIR CodeSystem](http://hl7.org/fhir/StructureDefinition/CodeSystem)
 */
export class CodeSystemConceptPropertyComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeType | fhirCode | null = null, value: IDataType | null = null) {
    super();

    this.code = null;
    if (isDefined<CodeType | fhirCode>(code)) {
      if (code instanceof PrimitiveType) {
        this.setCodeElement(code);
      } else {
        this.setCode(code);
      }
    }

    this.value = null;
    if (isDefined<IDataType>(value)) {
      this.setValue(value);
    }

  }

  /**
   * Parse the provided `CodeSystemConceptPropertyComponent` JSON to instantiate the CodeSystemConceptPropertyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `CodeSystemConceptPropertyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CodeSystemConceptPropertyComponent
   * @returns CodeSystemConceptPropertyComponent data model or undefined for `CodeSystemConceptPropertyComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CodeSystemConceptPropertyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CodeSystemConceptPropertyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CodeSystemConceptPropertyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = CodeSystemConceptPropertyComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for CodeSystemConceptPropertyComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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
   * CodeSystem.concept.property.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Reference to CodeSystem.property.code
   * - **Definition:** A code that is a reference to CodeSystem.property.code.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeType | null;

  /**
   * CodeSystem.concept.property.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('CodeSystem.concept.property.value[x]', ['code','Coding','string','integer','boolean','dateTime','decimal',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value of the property for this concept
   * - **Definition:** The value of this property.
   * - **FHIR Types:**
   *     'code',
   *     'Coding',
   *     'string',
   *     'integer',
   *     'boolean',
   *     'dateTime',
   *     'decimal',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('CodeSystem.concept.property.value[x]',[
    'code',
    'Coding',
    'string',
    'integer',
    'boolean',
    'dateTime',
    'decimal',
  ])
  private value: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getCodeElement(): CodeType {
    return this.code ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCodeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid CodeSystem.concept.property.code; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.code = element;
    } else {
      this.code = null;
    }
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
  public setCode(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid CodeSystem.concept.property.code (${String(value)})`;
      this.code = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.code = null;
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
   * @returns the `value` property value as a DataType object; else null
   */
  public getValue(): IDataType | null {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('CodeSystem.concept.property.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('CodeSystem.concept.property.value[x]')
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
   * @returns the `value` property value as a CodeType object if defined; else null
   */
  public getValueCodeType(): CodeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof CodeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CodeSystem.concept.property.value[x]: Expected CodeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `` property exists as a CodeType and has a value; `false` otherwise
   */
  public hasValueCodeType(): boolean {
    return this.hasValue() && this.value instanceof CodeType;
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
        `DataType mismatch for CodeSystem.concept.property.value[x]: Expected Coding but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a StringType object if defined; else null
   */
  public getValueStringType(): StringType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CodeSystem.concept.property.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a IntegerType object if defined; else null
   */
  public getValueIntegerType(): IntegerType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CodeSystem.concept.property.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a BooleanType object if defined; else null
   */
  public getValueBooleanType(): BooleanType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CodeSystem.concept.property.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a DateTimeType object if defined; else null
   */
  public getValueDateTimeType(): DateTimeType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CodeSystem.concept.property.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a DecimalType object if defined; else null
   */
  public getValueDecimalType(): DecimalType | null {
    if (!isDefined<IDataType>(this.value)) {
      return null;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for CodeSystem.concept.property.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
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

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CodeSystem.concept.property';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
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
      this.code, this.value, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CodeSystemConceptPropertyComponent {
    const dest = new CodeSystemConceptPropertyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CodeSystemConceptPropertyComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
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

    if (this.hasCodeElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    } else {
      jsonObj['value'] = null;
    }

    return jsonObj;
  }
}
