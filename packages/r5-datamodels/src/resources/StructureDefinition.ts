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
 * StructureDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/StructureDefinition
 * StructureDefinition.name: StructureDefinition
 * StructureDefinition.description: A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
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
  IdType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  PrimitiveType,
  PrimitiveTypeJson,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementJson,
  setFhirBackboneElementListJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Coding, ContactDetail, ElementDefinition, Identifier, PARSABLE_DATATYPE_MAP, UsageContext } from '../complex-types/complex-datatypes';
import { ExtensionContextTypeEnum } from '../code-systems/ExtensionContextTypeEnum';
import { FhirVersionEnum } from '../code-systems/FhirVersionEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { StructureDefinitionKindEnum } from '../code-systems/StructureDefinitionKindEnum';
import { TypeDerivationRuleEnum } from '../code-systems/TypeDerivationRuleEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * StructureDefinition Class
 *
 * @remarks
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 *
 * **FHIR Specification**
 * - **Short:** Structural Definition
 * - **Definition:** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR StructureDefinition](http://hl7.org/fhir/StructureDefinition/StructureDefinition)
 */
export class StructureDefinition extends DomainResource implements IDomainResource {
  constructor(url: UriType | fhirUri | null = null, name: StringType | fhirString | null = null, status: EnumCodeType | CodeType | fhirCode | null = null, kind: EnumCodeType | CodeType | fhirCode | null = null, abstract_: BooleanType | fhirBoolean | null = null, type_: UriType | fhirUri | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.fhirVersionEnum = new FhirVersionEnum();
    this.structureDefinitionKindEnum = new StructureDefinitionKindEnum();
    this.typeDerivationRuleEnum = new TypeDerivationRuleEnum();

    this.url = null;
    if (isDefined<UriType | fhirUri>(url)) {
      if (url instanceof PrimitiveType) {
        this.setUrlElement(url);
      } else {
        this.setUrl(url);
      }
    }

    this.name = null;
    if (isDefined<StringType | fhirString>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'StructureDefinition.status',
    );

    this.kind = constructorCodeValueAsEnumCodeType<StructureDefinitionKindEnum>(
      kind,
      StructureDefinitionKindEnum,
      this.structureDefinitionKindEnum,
      'StructureDefinition.kind',
    );

    this.abstract_ = null;
    if (isDefined<BooleanType | fhirBoolean>(abstract_)) {
      if (abstract_ instanceof PrimitiveType) {
        this.setAbstractElement(abstract_);
      } else {
        this.setAbstract(abstract_);
      }
    }

    this.type_ = null;
    if (isDefined<UriType | fhirUri>(type_)) {
      if (type_ instanceof PrimitiveType) {
        this.setTypeElement(type_);
      } else {
        this.setType(type_);
      }
    }
  }

  /**
   * Parse the provided `StructureDefinition` JSON to instantiate the StructureDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureDefinition
   * @returns StructureDefinition data model or undefined for `StructureDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): StructureDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'StructureDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = StructureDefinition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for StructureDefinition`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'url';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setUrl(null);
      } else {
        instance.setUrlElement(datatype);
      }
    } else {
      instance.setUrl(null);
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
      if (datatype === undefined) {
        instance.setName(null);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      instance.setName(null);
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

    fieldName = 'keyword';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addKeyword(datatype);
          }
        });
      }
    }

    fieldName = 'fhirVersion';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setFhirVersionElement(datatype);
    }

    fieldName = 'mapping';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: StructureDefinitionMappingComponent | undefined = StructureDefinitionMappingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addMapping(component);
          }
        });
      }
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

    fieldName = 'abstract';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setAbstract(null);
      } else {
        instance.setAbstractElement(datatype);
      }
    } else {
      instance.setAbstract(null);
    }

    fieldName = 'context';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: StructureDefinitionContextComponent | undefined = StructureDefinitionContextComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addContext(component);
          }
        });
      }
    }

    fieldName = 'contextInvariant';
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
          const datatype: StringType | undefined = fhirParser.parseStringType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addContextInvariantElement(datatype);
          }
        });
      }
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'baseDefinition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setBaseDefinitionElement(datatype);
    }

    fieldName = 'derivation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setDerivationElement(datatype);
    }

    fieldName = 'snapshot';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: StructureDefinitionSnapshotComponent | undefined = StructureDefinitionSnapshotComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSnapshot(component);
    }

    fieldName = 'differential';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: StructureDefinitionDifferentialComponent | undefined = StructureDefinitionDifferentialComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDifferential(component);
    }

    return instance;
  }

  /**
   * StructureDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this structure definition, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this structure definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the structure definition is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the structure definition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url: UriType | null;

  /**
   * StructureDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the structure definition
   * - **Definition:** A formal identifier that is used to identify this structure definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure definition outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * StructureDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the structure definition
   * - **Definition:** The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. There is no expectation that versions can be placed in a lexicographical sequence, so authors are encouraged to populate the StructureDefinition.versionAlgorithm[x] element to enable comparisons. If there is no managed version available, authors can consider using ISO date/time syntax (e.g., \'2023-01-01\').
   * - **Comment:** There may be different structure definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure definition with the format [url]|[version]. The version SHOULD NOT contain a \'#\' - see [Business Version](https://hl7.org/fhir/resource.html#bv-format).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * StructureDefinition.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('StructureDefinition.versionAlgorithm[x]', ['string','Coding',]`
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
  @ChoiceDataTypesMeta('StructureDefinition.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * StructureDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this structure definition (computer friendly)
   * - **Definition:** A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.Some Examples:  * O2SatObservation * PresentationReport * Immunization2 * AcmeAdmissionRecordOld.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * StructureDefinition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this structure definition (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the structure definition.
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.Applications don\'t have to use this name but can always fall back to it. The title also corresponds to the label for the root element.
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
   * StructureDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this structure definition. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of structure definitions that are appropriate for use versus not. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
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
   * StructureDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of structure definitions that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level structure definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * StructureDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the structure definition was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * StructureDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher/steward (organization or individual)
   * - **Definition:** The name of the organization or individual responsible for the release and ongoing maintenance of the structure definition.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the structure definition is the organization or individual primarily responsible for the maintenance and upkeep of the structure definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure definition. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the structure definition.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * StructureDefinition.contact Element
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
   * StructureDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the structure definition
   * - **Definition:** A free text natural language description of the structure definition from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure definition as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure definition is presumed to be the predominant language in the place the structure definition was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * StructureDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate structure definition instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * StructureDefinition.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for structure definition (if applicable)
   * - **Definition:** A legal or geographic region in which the structure definition is intended to be used.
   * - **Comment:** It may be possible for the structure definition to be used in jurisdictions other than those for which it was originally designed or intended. DEPRECATION NOTE: For consistency, implementations are encouraged to migrate to using the new \'jurisdiction\' code in the useContext element.  (I.e. useContext.code indicating http://terminology.hl7.org/CodeSystem/usage-context-type#jurisdiction and useContext.valueCodeableConcept indicating the jurisdiction.)
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * StructureDefinition.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this structure definition is defined
   * - **Definition:** Explanation of why this structure definition is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the structure definition. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure definition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * StructureDefinition.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.  The short copyright declaration (e.g. (c) \'2015+ xyz organization\' should be sent in the copyrightLabel element.
   * - **Comment:** ...
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the structure definition and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * StructureDefinition.copyrightLabel Element
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
   * StructureDefinition.keyword Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Assist with indexing and finding
   * - **Definition:** (DEPRECATED) A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates nby describing the use of this structure definition, or the content it describes.
   * - **Comment:** Note that this element is deprecated. Use the [http://hl7.org/fhir/StructureDefinition/artifact-topic](http://hl7.org/fhir/extensions/https://hl7.org/fhir/StructureDefinition-artifact-topic.html) extension instead.
   * - **Requirements:** Assist in searching for appropriate StructureDefinitions.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private keyword?: Coding[] | undefined;

  /**
   * FHIR CodeSystem: FhirVersion
   *
   * @see {@link FhirVersionEnum }
   */
  private readonly fhirVersionEnum: FhirVersionEnum;

  /**
   * StructureDefinition.fhirVersion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIR Version this StructureDefinition targets
   * - **Definition:** The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.6.0. for this version.
   * - **Comment:** A StructureDefinition does not need to specify the target it applies to as StructureDefinitions will often be valid across multiple versions of FHIR. FHIR tooling can determine whether a StructureDefinition is consistent with a particular StructureDefinition if desired.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  private fhirVersion?: EnumCodeType | undefined;

  /**
   * StructureDefinition.mapping Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External specification that the content is mapped to
   * - **Definition:** An external specification that the content is mapped to.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private mapping?: StructureDefinitionMappingComponent[] | undefined;

  /**
   * FHIR CodeSystem: StructureDefinitionKind
   *
   * @see {@link StructureDefinitionKindEnum }
   */
  private readonly structureDefinitionKindEnum: StructureDefinitionKindEnum;

  /**
   * StructureDefinition.kind Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** primitive-type | complex-type | resource | logical
   * - **Definition:** Defines the kind of structure that this definition is describing.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link StructureDefinitionKindEnum }
   */
  private kind: EnumCodeType | null;

  /**
   * StructureDefinition.abstract Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the structure is abstract
   * - **Definition:** Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems.
   * - **Comment:** Abstract Resources cannot be instantiated - a concrete sub-type must be used. Abstract datatypes and extensions cannot be used in an instance. For logical models, the exact implication of "abstract" will rest with the author, depending how the logical model is used. Flagging a constraint structure as abstract conveys design intent but makes no difference to how the structure definition is handled. Note that inline declared elements that are given the type "Element" in the StructureDefinition, but have children described, are anonymous concrete types that specialize Element.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private abstract_: BooleanType | null;

  /**
   * StructureDefinition.context Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If an extension, where it can be used in instances
   * - **Definition:** Identifies the types of resource or data type elements to which the extension can be applied. For more guidance on using the \'context\' element, see the [defining extensions page](https://hl7.org/fhir/defining-extensions.html#context).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private context?: StructureDefinitionContextComponent[] | undefined;

  /**
   * StructureDefinition.contextInvariant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIRPath invariants - when the extension can be used
   * - **Definition:** A set of rules as FHIRPath Invariants about when the extension can be used (e.g. co-occurrence variants for the extension). All the rules must be true.
   * - **Comment:** The rules are only evaluated when the extension is present. When evaluating the invariant, the FHIRPath focus is the element that holds the extension, and %extension refers to the extension itself.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private contextInvariant?: StringType[] | undefined;

  /**
   * StructureDefinition.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type defined or constrained by this structure
   * - **Definition:** The type this structure describes. If the derivation kind is \'specialization\' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).  References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models, where they are required.
   * - **Comment:** Note that in the case of constraints, the type could be determined by chasing through the baseDefinition references until a type defining structure (derivation = specialization) is reached, or by looking at the path of the first element in the snapshot - if present - but providing the type directly makes for simpler tooling and indexing.  The type must match the elements defined in the differential and the snapshot. For all FHIR defined types, the path name of the element will start with the type name. For logical models, where the type SHALL be a fully specified URL, the type name SHOULD start with the final path segment of the type URL where required. E.g. If the type was "http://example.org/fhir/MyLogicalModelType", the type name should start with \'MyLogicalModelType\'.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: UriType | null;

  /**
   * StructureDefinition.baseDefinition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definition that this type is constrained/specialized from
   * - **Definition:** An absolute URI that is the base structure from which this type is derived, either by specialization or constraint.
   * - **Comment:** If differential constraints are specified in this structure, they are applied to the base in a "differential" fashion. If there is no base, then the differential constraints cannot be provided (snapshot only). Differential structures are useful for the editing perspective, and snapshot structures are suitable for operational use. The FHIR Project provides a number of tools/services to populate snapshots from differential constraints. Logical Models have a base of "Base", "Element" or another logical model.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private baseDefinition?: CanonicalType | undefined;

  /**
   * FHIR CodeSystem: TypeDerivationRule
   *
   * @see {@link TypeDerivationRuleEnum }
   */
  private readonly typeDerivationRuleEnum: TypeDerivationRuleEnum;

  /**
   * StructureDefinition.derivation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** specialization | constraint - How relates to base definition
   * - **Definition:** How the type relates to the baseDefinition.
   * - **Comment:** If the definition is a specialization, then it adds to the differential new elements and optionally additional rules to an existing concrete type, and the snapshot includes the inherited elements and rules.  If the definition is a constraint, then it cannot define new elements, it can only make new rules about existing content (see [Profiling Resources](https://hl7.org/fhir/profiling.html#resources)).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link TypeDerivationRuleEnum }
   */
  private derivation?: EnumCodeType | undefined;

  /**
   * StructureDefinition.snapshot Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Snapshot view of the structure
   * - **Definition:** A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private snapshot?: StructureDefinitionSnapshotComponent | undefined;

  /**
   * StructureDefinition.differential Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Differential view of the structure
   * - **Definition:** A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private differential?: StructureDefinitionDifferentialComponent | undefined;

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
  public setUrlElement(element: UriType | undefined | null): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.url; Provided value is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.url = element;
    } else {
      this.url = null;
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
  public setUrl(value: fhirUri | undefined | null): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid StructureDefinition.url (${String(value)})`;
      this.url = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.url = null;
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
      const optErrMsg = `Invalid StructureDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid StructureDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid StructureDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureDefinition.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('StructureDefinition.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('StructureDefinition.versionAlgorithm[x]')
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
        `DataType mismatch for StructureDefinition.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for StructureDefinition.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
  public setNameElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.name; Provided value is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureDefinition.name (${String(value)})`;
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
      const optErrMsg = `Invalid StructureDefinition.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureDefinition.title (${String(value)})`;
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
      const errMsgPrefix = `Invalid StructureDefinition.status`;
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
      const optErrMsg = `Invalid StructureDefinition.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid StructureDefinition.status (${String(value)})`;
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
      const optErrMsg = `Invalid StructureDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid StructureDefinition.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid StructureDefinition.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid StructureDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid StructureDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid StructureDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid StructureDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid StructureDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid StructureDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid StructureDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid StructureDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid StructureDefinition.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid StructureDefinition.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid StructureDefinition.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid StructureDefinition.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid StructureDefinition.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid StructureDefinition.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid StructureDefinition.copyrightLabel; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureDefinition.copyrightLabel (${String(value)})`;
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
   * @returns the `keyword` property value as a Coding array
   */
  public getKeyword(): Coding[] {
    return this.keyword ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `keyword` property.
   *
   * @param value - the `keyword` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setKeyword(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid StructureDefinition.keyword; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.keyword = value;
    } else {
      this.keyword = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `keyword` array property.
   *
   * @param value - the `keyword` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addKeyword(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid StructureDefinition.keyword; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initKeyword();
      this.keyword?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `keyword` property exists and has a value; `false` otherwise
   */
  public hasKeyword(): boolean {
    return isDefinedList<Coding>(this.keyword) && this.keyword.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `keyword` property
   */
  private initKeyword(): void {
    if(!this.hasKeyword()) {
      this.keyword = [] as Coding[];
    }
  }

  /**
   * @returns the `fhirVersion` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersionEnumType(): EnumCodeType | undefined {
    return this.fhirVersion;
  }

  /**
   * Assigns the provided EnumCodeType value to the `fhirVersion` property.
   *
   * @param enumType - the `fhirVersion` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public setFhirVersionEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid StructureDefinition.fhirVersion';
      assertEnumCodeType<FhirVersionEnum>(enumType, FhirVersionEnum, errMsgPrefix);
      this.fhirVersion = enumType;
    } else {
      this.fhirVersion = undefined;
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
   * @returns the `fhirVersion` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersionElement(): CodeType | undefined {
    if (this.fhirVersion === undefined) {
      return undefined;
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
  public setFhirVersionElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.fhirVersion; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.fhirVersion = new EnumCodeType(element, this.fhirVersionEnum);
    } else {
      this.fhirVersion = undefined;
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
   * @returns the `fhirVersion` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link FhirVersionEnum }
   */
  public getFhirVersion(): fhirCode | undefined {
    if (this.fhirVersion === undefined) {
      return undefined;
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
  public setFhirVersion(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid StructureDefinition.fhirVersion; Provided value is not an instance of fhirCode.`;
      this.fhirVersion = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fhirVersionEnum);
    } else {
      this.fhirVersion = undefined;
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
   * @returns the `mapping` property value as a StructureDefinitionMappingComponent array
   */
  public getMapping(): StructureDefinitionMappingComponent[] {
    return this.mapping ?? ([] as StructureDefinitionMappingComponent[]);
  }

  /**
   * Assigns the provided StructureDefinitionMappingComponent array value to the `mapping` property.
   *
   * @param value - the `mapping` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMapping(value: StructureDefinitionMappingComponent[] | undefined): this {
    if (isDefinedList<StructureDefinitionMappingComponent>(value)) {
      const optErrMsg = `Invalid StructureDefinition.mapping; Provided value array has an element that is not an instance of StructureDefinitionMappingComponent.`;
      assertFhirTypeList<StructureDefinitionMappingComponent>(value, StructureDefinitionMappingComponent, optErrMsg);
      this.mapping = value;
    } else {
      this.mapping = undefined;
    }
    return this;
  }

  /**
   * Add the provided StructureDefinitionMappingComponent value to the `mapping` array property.
   *
   * @param value - the `mapping` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMapping(value: StructureDefinitionMappingComponent | undefined): this {
    if (isDefined<StructureDefinitionMappingComponent>(value)) {
      const optErrMsg = `Invalid StructureDefinition.mapping; Provided element is not an instance of StructureDefinitionMappingComponent.`;
      assertFhirType<StructureDefinitionMappingComponent>(value, StructureDefinitionMappingComponent, optErrMsg);
      this.initMapping();
      this.mapping?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `mapping` property exists and has a value; `false` otherwise
   */
  public hasMapping(): boolean {
    return isDefinedList<StructureDefinitionMappingComponent>(this.mapping) && this.mapping.some((item: StructureDefinitionMappingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `mapping` property
   */
  private initMapping(): void {
    if(!this.hasMapping()) {
      this.mapping = [] as StructureDefinitionMappingComponent[];
    }
  }

  /**
   * @returns the `kind` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link StructureDefinitionKindEnum }
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
   * @see CodeSystem Enumeration: {@link StructureDefinitionKindEnum }
   */
  public setKindEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid StructureDefinition.kind`;
      assertEnumCodeType<StructureDefinitionKindEnum>(enumType, StructureDefinitionKindEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link StructureDefinitionKindEnum }
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
   * @see CodeSystem Enumeration: {@link StructureDefinitionKindEnum }
   */
  public setKindElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.kind; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.kind = new EnumCodeType(element, this.structureDefinitionKindEnum);
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
   * @see CodeSystem Enumeration: {@link StructureDefinitionKindEnum }
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
   * @see CodeSystem Enumeration: {@link StructureDefinitionKindEnum }
   */
  public setKind(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid StructureDefinition.kind (${String(value)})`;
      this.kind = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.structureDefinitionKindEnum);
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
   * @returns the `abstract_` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAbstractElement(): BooleanType {
    return this.abstract_ ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `abstract_` property.
   *
   * @param element - the `abstract_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAbstractElement(element: BooleanType | undefined | null): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.abstract; Provided value is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.abstract_ = element;
    } else {
      this.abstract_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `abstract_` property exists and has a value; `false` otherwise
   */
  public hasAbstractElement(): boolean {
    return isDefined<BooleanType>(this.abstract_) && !this.abstract_.isEmpty();
  }

  /**
   * @returns the `abstract_` property value as a fhirBoolean if defined; else null
   */
  public getAbstract(): fhirBoolean | null {
    if (this.abstract_?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.abstract_.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `abstract_` property.
   *
   * @param value - the `abstract_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAbstract(value: fhirBoolean | undefined | null): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid StructureDefinition.abstract (${String(value)})`;
      this.abstract_ = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.abstract_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `abstract_` property exists and has a value; `false` otherwise
   */
  public hasAbstract(): boolean {
    return this.hasAbstractElement();
  }

  /**
   * @returns the `context` property value as a StructureDefinitionContextComponent array
   */
  public getContext(): StructureDefinitionContextComponent[] {
    return this.context ?? ([] as StructureDefinitionContextComponent[]);
  }

  /**
   * Assigns the provided StructureDefinitionContextComponent array value to the `context` property.
   *
   * @param value - the `context` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContext(value: StructureDefinitionContextComponent[] | undefined): this {
    if (isDefinedList<StructureDefinitionContextComponent>(value)) {
      const optErrMsg = `Invalid StructureDefinition.context; Provided value array has an element that is not an instance of StructureDefinitionContextComponent.`;
      assertFhirTypeList<StructureDefinitionContextComponent>(value, StructureDefinitionContextComponent, optErrMsg);
      this.context = value;
    } else {
      this.context = undefined;
    }
    return this;
  }

  /**
   * Add the provided StructureDefinitionContextComponent value to the `context` array property.
   *
   * @param value - the `context` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContext(value: StructureDefinitionContextComponent | undefined): this {
    if (isDefined<StructureDefinitionContextComponent>(value)) {
      const optErrMsg = `Invalid StructureDefinition.context; Provided element is not an instance of StructureDefinitionContextComponent.`;
      assertFhirType<StructureDefinitionContextComponent>(value, StructureDefinitionContextComponent, optErrMsg);
      this.initContext();
      this.context?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContext(): boolean {
    return isDefinedList<StructureDefinitionContextComponent>(this.context) && this.context.some((item: StructureDefinitionContextComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `context` property
   */
  private initContext(): void {
    if(!this.hasContext()) {
      this.context = [] as StructureDefinitionContextComponent[];
    }
  }

  /**
   * @returns the `contextInvariant` property value as a StringType array
   */
  public getContextInvariantElement(): StringType[] {
    return this.contextInvariant ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `contextInvariant` property.
   *
   * @param element - the `contextInvariant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContextInvariantElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.contextInvariant; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.contextInvariant = element;
    } else {
      this.contextInvariant = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `contextInvariant` array property.
   *
   * @param element - the `contextInvariant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addContextInvariantElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.contextInvariant; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initContextInvariant();
      this.contextInvariant?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `contextInvariant` property exists and has a value; `false` otherwise
   */
  public hasContextInvariantElement(): boolean {
    return isDefinedList<StringType>(this.contextInvariant) && this.contextInvariant.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `contextInvariant` property value as a fhirString array
   */
  public getContextInvariant(): fhirString[] {
    this.initContextInvariant();
    const contextInvariantValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.contextInvariant!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        contextInvariantValues.push(value);
      }
    }
    return contextInvariantValues;
  }

  /**
   * Assigns the provided primitive value array to the `contextInvariant` property.
   *
   * @param value - the `contextInvariant` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setContextInvariant(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const contextInvariantElements = [] as StringType[];
      for (const contextInvariantValue of value) {
        const optErrMsg = `Invalid StructureDefinition.contextInvariant array item (${String(contextInvariantValue)})`;
        const element = new StringType(parseFhirPrimitiveData(contextInvariantValue, fhirStringSchema, optErrMsg));
        contextInvariantElements.push(element);
      }
      this.contextInvariant = contextInvariantElements;
    } else {
      this.contextInvariant = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `contextInvariant` array property.
   *
   * @param value - the `contextInvariant` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addContextInvariant(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureDefinition.contextInvariant array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initContextInvariant();
      this.addContextInvariantElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `contextInvariant` property exists and has a value; `false` otherwise
   */
  public hasContextInvariant(): boolean {
    return this.hasContextInvariantElement();
  }

  /**
   * Initialize the `contextInvariant` property
   */
  private initContextInvariant(): void {
    if (!this.hasContextInvariant()) {
      this.contextInvariant = [] as StringType[];
    }
  }

  /**
   * @returns the `type_` property value as a UriType object if defined; else an empty UriType object
   */
  public getTypeElement(): UriType {
    return this.type_ ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTypeElement(element: UriType | undefined | null): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.type; Provided value is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.type_ = element;
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return isDefined<UriType>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `type_` property value as a fhirUri if defined; else null
   */
  public getType(): fhirUri | null {
    if (this.type_?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.type_.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `type_` property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setType(value: fhirUri | undefined | null): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid StructureDefinition.type (${String(value)})`;
      this.type_ = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.type_ = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeElement();
  }

  /**
   * @returns the `baseDefinition` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getBaseDefinitionElement(): CanonicalType {
    return this.baseDefinition ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `baseDefinition` property.
   *
   * @param element - the `baseDefinition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBaseDefinitionElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.baseDefinition; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.baseDefinition = element;
    } else {
      this.baseDefinition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `baseDefinition` property exists and has a value; `false` otherwise
   */
  public hasBaseDefinitionElement(): boolean {
    return isDefined<CanonicalType>(this.baseDefinition) && !this.baseDefinition.isEmpty();
  }

  /**
   * @returns the `baseDefinition` property value as a fhirCanonical if defined; else undefined
   */
  public getBaseDefinition(): fhirCanonical | undefined {
    return this.baseDefinition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `baseDefinition` property.
   *
   * @param value - the `baseDefinition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setBaseDefinition(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid StructureDefinition.baseDefinition (${String(value)})`;
      this.baseDefinition = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.baseDefinition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `baseDefinition` property exists and has a value; `false` otherwise
   */
  public hasBaseDefinition(): boolean {
    return this.hasBaseDefinitionElement();
  }

  /**
   * @returns the `derivation` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link TypeDerivationRuleEnum }
   */
  public getDerivationEnumType(): EnumCodeType | undefined {
    return this.derivation;
  }

  /**
   * Assigns the provided EnumCodeType value to the `derivation` property.
   *
   * @param enumType - the `derivation` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link TypeDerivationRuleEnum }
   */
  public setDerivationEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid StructureDefinition.derivation';
      assertEnumCodeType<TypeDerivationRuleEnum>(enumType, TypeDerivationRuleEnum, errMsgPrefix);
      this.derivation = enumType;
    } else {
      this.derivation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `derivation` property exists and has a value; `false` otherwise
   */
  public hasDerivationEnumType(): boolean {
    return isDefined<EnumCodeType>(this.derivation) && !this.derivation.isEmpty() && this.derivation.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `derivation` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link TypeDerivationRuleEnum }
   */
  public getDerivationElement(): CodeType | undefined {
    if (this.derivation === undefined) {
      return undefined;
    }
    return this.derivation as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `derivation` property.
   *
   * @param element - the `derivation` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link TypeDerivationRuleEnum }
   */
  public setDerivationElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.derivation; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.derivation = new EnumCodeType(element, this.typeDerivationRuleEnum);
    } else {
      this.derivation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `derivation` property exists and has a value; `false` otherwise
   */
  public hasDerivationElement(): boolean {
    return this.hasDerivationEnumType();
  }

  /**
   * @returns the `derivation` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link TypeDerivationRuleEnum }
   */
  public getDerivation(): fhirCode | undefined {
    if (this.derivation === undefined) {
      return undefined;
    }
    return this.derivation.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `derivation` property.
   *
   * @param value - the `derivation` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link TypeDerivationRuleEnum }
   */
  public setDerivation(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid StructureDefinition.derivation; Provided value is not an instance of fhirCode.`;
      this.derivation = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.typeDerivationRuleEnum);
    } else {
      this.derivation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `derivation` property exists and has a value; `false` otherwise
   */
  public hasDerivation(): boolean {
    return this.hasDerivationEnumType();
  }

  /**
   * @returns the `snapshot` property value as a StructureDefinitionSnapshotComponent object if defined; else an empty StructureDefinitionSnapshotComponent object
   */
  public getSnapshot(): StructureDefinitionSnapshotComponent {
    return this.snapshot ?? new StructureDefinitionSnapshotComponent();
  }

  /**
   * Assigns the provided Snapshot object value to the `snapshot` property.
   *
   * @param value - the `snapshot` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSnapshot(value: StructureDefinitionSnapshotComponent | undefined): this {
    if (isDefined<StructureDefinitionSnapshotComponent>(value)) {
      const optErrMsg = `Invalid StructureDefinition.snapshot; Provided element is not an instance of StructureDefinitionSnapshotComponent.`;
      assertFhirType<StructureDefinitionSnapshotComponent>(value, StructureDefinitionSnapshotComponent, optErrMsg);
      this.snapshot = value;
    } else {
      this.snapshot = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `snapshot` property exists and has a value; `false` otherwise
   */
  public hasSnapshot(): boolean {
    return isDefined<StructureDefinitionSnapshotComponent>(this.snapshot) && !this.snapshot.isEmpty();
  }

  /**
   * @returns the `differential` property value as a StructureDefinitionDifferentialComponent object if defined; else an empty StructureDefinitionDifferentialComponent object
   */
  public getDifferential(): StructureDefinitionDifferentialComponent {
    return this.differential ?? new StructureDefinitionDifferentialComponent();
  }

  /**
   * Assigns the provided Differential object value to the `differential` property.
   *
   * @param value - the `differential` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDifferential(value: StructureDefinitionDifferentialComponent | undefined): this {
    if (isDefined<StructureDefinitionDifferentialComponent>(value)) {
      const optErrMsg = `Invalid StructureDefinition.differential; Provided element is not an instance of StructureDefinitionDifferentialComponent.`;
      assertFhirType<StructureDefinitionDifferentialComponent>(value, StructureDefinitionDifferentialComponent, optErrMsg);
      this.differential = value;
    } else {
      this.differential = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `differential` property exists and has a value; `false` otherwise
   */
  public hasDifferential(): boolean {
    return isDefined<StructureDefinitionDifferentialComponent>(this.differential) && !this.differential.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureDefinition';
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
      this.keyword,
      this.fhirVersion,
      this.mapping,
      this.kind,
      this.abstract_,
      this.context,
      this.contextInvariant,
      this.type_,
      this.baseDefinition,
      this.derivation,
      this.snapshot,
      this.differential,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.url, this.name, this.status, this.kind, this.abstract_, this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureDefinition {
    const dest = new StructureDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureDefinition): void {
    super.copyValues(dest);
    dest.url = this.url ? this.url.copy() : null;
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.versionAlgorithm = this.versionAlgorithm?.copy() as IDataType;
    dest.name = this.name ? this.name.copy() : null;
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
    dest.copyrightLabel = this.copyrightLabel?.copy();
    const keywordList = copyListValues<Coding>(this.keyword);
    dest.keyword = keywordList.length === 0 ? undefined : keywordList;
    dest.fhirVersion = this.fhirVersion?.copy();
    const mappingList = copyListValues<StructureDefinitionMappingComponent>(this.mapping);
    dest.mapping = mappingList.length === 0 ? undefined : mappingList;
    dest.kind = this.kind ? this.kind.copy() : null;
    dest.abstract_ = this.abstract_ ? this.abstract_.copy() : null;
    const contextList = copyListValues<StructureDefinitionContextComponent>(this.context);
    dest.context = contextList.length === 0 ? undefined : contextList;
    const contextInvariantList = copyListValues<StringType>(this.contextInvariant);
    dest.contextInvariant = contextInvariantList.length === 0 ? undefined : contextInvariantList;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.baseDefinition = this.baseDefinition?.copy();
    dest.derivation = this.derivation?.copy();
    dest.snapshot = this.snapshot?.copy();
    dest.differential = this.differential?.copy();
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

    if (this.hasKeyword()) {
      setFhirComplexListJson(this.getKeyword(), 'keyword', jsonObj);
    }

    if (this.hasFhirVersionElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getFhirVersionElement()!, 'fhirVersion', jsonObj);
    }

    if (this.hasMapping()) {
      setFhirBackboneElementListJson(this.getMapping(), 'mapping', jsonObj);
    }

    if (this.hasKindElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getKindElement()!, 'kind', jsonObj);
    }

    if (this.hasAbstractElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAbstractElement(), 'abstract', jsonObj);
    }

    if (this.hasContext()) {
      setFhirBackboneElementListJson(this.getContext(), 'context', jsonObj);
    }

    if (this.hasContextInvariant()) {
      setFhirPrimitiveListJson(this.getContextInvariantElement(), 'contextInvariant', jsonObj);
    }

    if (this.hasTypeElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getTypeElement(), 'type', jsonObj);
    }

    if (this.hasBaseDefinitionElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getBaseDefinitionElement(), 'baseDefinition', jsonObj);
    }

    if (this.hasDerivationElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getDerivationElement()!, 'derivation', jsonObj);
    }

    if (this.hasSnapshot()) {
      setFhirBackboneElementJson(this.getSnapshot(), 'snapshot', jsonObj);
    }

    if (this.hasDifferential()) {
      setFhirBackboneElementJson(this.getDifferential(), 'differential', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * StructureDefinitionMappingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** External specification that the content is mapped to
 * - **Definition:** An external specification that the content is mapped to.
 *
 * @category Data Models: Resource
 * @see [FHIR StructureDefinition](http://hl7.org/fhir/StructureDefinition/StructureDefinition)
 */
export class StructureDefinitionMappingComponent extends BackboneElement implements IBackboneElement {
  constructor(identity: IdType | fhirId | null = null) {
    super();

    this.identity = null;
    if (isDefined<IdType | fhirId>(identity)) {
      if (identity instanceof PrimitiveType) {
        this.setIdentityElement(identity);
      } else {
        this.setIdentity(identity);
      }
    }
  }

  /**
   * Parse the provided `StructureDefinitionMappingComponent` JSON to instantiate the StructureDefinitionMappingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureDefinitionMappingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureDefinitionMappingComponent
   * @returns StructureDefinitionMappingComponent data model or undefined for `StructureDefinitionMappingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureDefinitionMappingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureDefinitionMappingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureDefinitionMappingComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'identity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setIdentity(null);
      } else {
        instance.setIdentityElement(datatype);
      }
    } else {
      instance.setIdentity(null);
    }

    fieldName = 'uri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setUriElement(datatype);
    }

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    return instance;
  }

  /**
   * StructureDefinition.mapping.identity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Internal id when this mapping is used
   * - **Definition:** An Internal id that is used to identify this mapping set when specific mappings are made.
   * - **Comment:** The specification is described once, with general comments, and then specific mappings are made that reference this declaration.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private identity: IdType | null;

  /**
   * StructureDefinition.mapping.uri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifies what this mapping refers to
   * - **Definition:** An absolute URI that identifies the specification that this mapping is expressed to.
   * - **Comment:** A formal identity for the specification being mapped to helps with identifying maps consistently.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private uri?: UriType | undefined;

  /**
   * StructureDefinition.mapping.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Names what this mapping refers to
   * - **Definition:** A name for the specification that is being mapped to.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * StructureDefinition.mapping.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Versions, Issues, Scope limitations etc
   * - **Definition:** Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private comment?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `identity` property value as a IdType object if defined; else an empty IdType object
   */
  public getIdentityElement(): IdType {
    return this.identity ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `identity` property.
   *
   * @param element - the `identity` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIdentityElement(element: IdType | undefined | null): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.mapping.identity; Provided value is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.identity = element;
    } else {
      this.identity = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `identity` property exists and has a value; `false` otherwise
   */
  public hasIdentityElement(): boolean {
    return isDefined<IdType>(this.identity) && !this.identity.isEmpty();
  }

  /**
   * @returns the `identity` property value as a fhirId if defined; else null
   */
  public getIdentity(): fhirId | null {
    if (this.identity?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.identity.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `identity` property.
   *
   * @param value - the `identity` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIdentity(value: fhirId | undefined | null): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid StructureDefinition.mapping.identity (${String(value)})`;
      this.identity = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.identity = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `identity` property exists and has a value; `false` otherwise
   */
  public hasIdentity(): boolean {
    return this.hasIdentityElement();
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
      const optErrMsg = `Invalid StructureDefinition.mapping.uri; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid StructureDefinition.mapping.uri (${String(value)})`;
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
      const optErrMsg = `Invalid StructureDefinition.mapping.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid StructureDefinition.mapping.name (${String(value)})`;
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
   * @returns the `comment` property value as a StringType object if defined; else an empty StringType object
   */
  public getCommentElement(): StringType {
    return this.comment ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `comment` property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.mapping.comment; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.comment = element;
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasCommentElement(): boolean {
    return isDefined<StringType>(this.comment) && !this.comment.isEmpty();
  }

  /**
   * @returns the `comment` property value as a fhirString if defined; else undefined
   */
  public getComment(): fhirString | undefined {
    return this.comment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `comment` property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureDefinition.mapping.comment (${String(value)})`;
      this.comment = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasComment(): boolean {
    return this.hasCommentElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureDefinition.mapping';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identity,
      this.uri,
      this.name,
      this.comment,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.identity, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureDefinitionMappingComponent {
    const dest = new StructureDefinitionMappingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureDefinitionMappingComponent): void {
    super.copyValues(dest);
    dest.identity = this.identity ? this.identity.copy() : null;
    dest.uri = this.uri?.copy();
    dest.name = this.name?.copy();
    dest.comment = this.comment?.copy();
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

    if (this.hasIdentityElement()) {
      setFhirPrimitiveJson<fhirId>(this.getIdentityElement(), 'identity', jsonObj);
    }

    if (this.hasUriElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getUriElement(), 'uri', jsonObj);
    }

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCommentElement(), 'comment', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * StructureDefinitionContextComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** If an extension, where it can be used in instances
 * - **Definition:** Identifies the types of resource or data type elements to which the extension can be applied. For more guidance on using the \'context\' element, see the [defining extensions page](https://hl7.org/fhir/defining-extensions.html#context).
 *
 * @category Data Models: Resource
 * @see [FHIR StructureDefinition](http://hl7.org/fhir/StructureDefinition/StructureDefinition)
 */
export class StructureDefinitionContextComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null, expression: StringType | fhirString | null = null) {
    super();

    this.extensionContextTypeEnum = new ExtensionContextTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<ExtensionContextTypeEnum>(
      type_,
      ExtensionContextTypeEnum,
      this.extensionContextTypeEnum,
      'StructureDefinition.context.type',
    );

    this.expression = null;
    if (isDefined<StringType | fhirString>(expression)) {
      if (expression instanceof PrimitiveType) {
        this.setExpressionElement(expression);
      } else {
        this.setExpression(expression);
      }
    }
  }

  /**
   * Parse the provided `StructureDefinitionContextComponent` JSON to instantiate the StructureDefinitionContextComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureDefinitionContextComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureDefinitionContextComponent
   * @returns StructureDefinitionContextComponent data model or undefined for `StructureDefinitionContextComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureDefinitionContextComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureDefinitionContextComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureDefinitionContextComponent();

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

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setExpression(null);
      } else {
        instance.setExpressionElement(datatype);
      }
    } else {
      instance.setExpression(null);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ExtensionContextType
   *
   * @see {@link ExtensionContextTypeEnum }
   */
  private readonly extensionContextTypeEnum: ExtensionContextTypeEnum;

  /**
   * StructureDefinition.context.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** fhirpath | element | extension
   * - **Definition:** Defines how to interpret the expression that defines what the context of the extension is.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ExtensionContextTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * StructureDefinition.context.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the extension can be used in instances
   * - **Definition:** An expression that defines where an extension can be used in resources.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private expression: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ExtensionContextTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ExtensionContextTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid StructureDefinition.context.type`;
      assertEnumCodeType<ExtensionContextTypeEnum>(enumType, ExtensionContextTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ExtensionContextTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ExtensionContextTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.context.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.extensionContextTypeEnum);
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
   * @see CodeSystem Enumeration: {@link ExtensionContextTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ExtensionContextTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid StructureDefinition.context.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.extensionContextTypeEnum);
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
   * @returns the `expression` property value as a StringType object if defined; else an empty StringType object
   */
  public getExpressionElement(): StringType {
    return this.expression ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `expression` property.
   *
   * @param element - the `expression` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpressionElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid StructureDefinition.context.expression; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.expression = element;
    } else {
      this.expression = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpressionElement(): boolean {
    return isDefined<StringType>(this.expression) && !this.expression.isEmpty();
  }

  /**
   * @returns the `expression` property value as a fhirString if defined; else null
   */
  public getExpression(): fhirString | null {
    if (this.expression?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.expression.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `expression` property.
   *
   * @param value - the `expression` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpression(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid StructureDefinition.context.expression (${String(value)})`;
      this.expression = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.expression = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpression(): boolean {
    return this.hasExpressionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureDefinition.context';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.expression,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.expression, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureDefinitionContextComponent {
    const dest = new StructureDefinitionContextComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureDefinitionContextComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.expression = this.expression ? this.expression.copy() : null;
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
    }

    if (this.hasExpressionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getExpressionElement(), 'expression', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * StructureDefinitionSnapshotComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Snapshot view of the structure
 * - **Definition:** A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition.
 *
 * @category Data Models: Resource
 * @see [FHIR StructureDefinition](http://hl7.org/fhir/StructureDefinition/StructureDefinition)
 */
export class StructureDefinitionSnapshotComponent extends BackboneElement implements IBackboneElement {
  constructor(element: ElementDefinition[] | null = null) {
    super();

    this.element = null;
    if (isDefinedList<ElementDefinition>(element)) {
      this.setElement(element);
    }
  }

  /**
   * Parse the provided `StructureDefinitionSnapshotComponent` JSON to instantiate the StructureDefinitionSnapshotComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureDefinitionSnapshotComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureDefinitionSnapshotComponent
   * @returns StructureDefinitionSnapshotComponent data model or undefined for `StructureDefinitionSnapshotComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureDefinitionSnapshotComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureDefinitionSnapshotComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureDefinitionSnapshotComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'element';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setElement(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ElementDefinition | undefined = ElementDefinition.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype === undefined) {
            instance.setElement(null);
          } else {
            instance.addElement(datatype);
          }
        });
      }
    } else {
      instance.setElement(null);
    }

    return instance;
  }

  /**
   * StructureDefinition.snapshot.element Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definition of elements in the resource (if no StructureDefinition)
   * - **Definition:** Captures constraints on each element within the resource.
   * - **FHIR Type:** `ElementDefinition`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private element: ElementDefinition[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `element` property value as a ElementDefinition array
   */
  public getElement(): ElementDefinition[] {
    return this.element ?? ([] as ElementDefinition[]);
  }

  /**
   * Assigns the provided ElementDefinition array value to the `element` property.
   *
   * @param value - the `element` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setElement(value: ElementDefinition[] | undefined | null): this {
    if (isDefinedList<ElementDefinition>(value)) {
      const optErrMsg = `Invalid StructureDefinition.snapshot.element; Provided value array has an element that is not an instance of ElementDefinition.`;
      assertFhirTypeList<ElementDefinition>(value, ElementDefinition, optErrMsg);
      this.element = value;
    } else {
      this.element = null;
    }
    return this;
  }

  /**
   * Add the provided ElementDefinition value to the `element` array property.
   *
   * @param value - the `element` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addElement(value: ElementDefinition | undefined): this {
    if (isDefined<ElementDefinition>(value)) {
      const optErrMsg = `Invalid StructureDefinition.snapshot.element; Provided element is not an instance of ElementDefinition.`;
      assertFhirType<ElementDefinition>(value, ElementDefinition, optErrMsg);
      this.initElement();
      this.element?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `element` property exists and has a value; `false` otherwise
   */
  public hasElement(): boolean {
    return isDefinedList<ElementDefinition>(this.element) && this.element.some((item: ElementDefinition) => !item.isEmpty());
  }

  /**
   * Initialize the `element` property
   */
  private initElement(): void {
    if(!this.hasElement()) {
      this.element = [] as ElementDefinition[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureDefinition.snapshot';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.element,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureDefinitionSnapshotComponent {
    const dest = new StructureDefinitionSnapshotComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureDefinitionSnapshotComponent): void {
    super.copyValues(dest);
    const elementList = copyListValues<ElementDefinition>(this.element);
    dest.element = elementList.length === 0 ? null : elementList;
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

    if (this.hasElement()) {
      setFhirComplexListJson(this.getElement(), 'element', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * StructureDefinitionDifferentialComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Differential view of the structure
 * - **Definition:** A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
 *
 * @category Data Models: Resource
 * @see [FHIR StructureDefinition](http://hl7.org/fhir/StructureDefinition/StructureDefinition)
 */
export class StructureDefinitionDifferentialComponent extends BackboneElement implements IBackboneElement {
  constructor(element: ElementDefinition[] | null = null) {
    super();

    this.element = null;
    if (isDefinedList<ElementDefinition>(element)) {
      this.setElement(element);
    }
  }

  /**
   * Parse the provided `StructureDefinitionDifferentialComponent` JSON to instantiate the StructureDefinitionDifferentialComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `StructureDefinitionDifferentialComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to StructureDefinitionDifferentialComponent
   * @returns StructureDefinitionDifferentialComponent data model or undefined for `StructureDefinitionDifferentialComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): StructureDefinitionDifferentialComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'StructureDefinitionDifferentialComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new StructureDefinitionDifferentialComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'element';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setElement(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ElementDefinition | undefined = ElementDefinition.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype === undefined) {
            instance.setElement(null);
          } else {
            instance.addElement(datatype);
          }
        });
      }
    } else {
      instance.setElement(null);
    }

    return instance;
  }

  /**
   * StructureDefinition.differential.element Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definition of elements in the resource (if no StructureDefinition)
   * - **Definition:** Captures constraints on each element within the resource.
   * - **FHIR Type:** `ElementDefinition`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private element: ElementDefinition[] | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `element` property value as a ElementDefinition array
   */
  public getElement(): ElementDefinition[] {
    return this.element ?? ([] as ElementDefinition[]);
  }

  /**
   * Assigns the provided ElementDefinition array value to the `element` property.
   *
   * @param value - the `element` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setElement(value: ElementDefinition[] | undefined | null): this {
    if (isDefinedList<ElementDefinition>(value)) {
      const optErrMsg = `Invalid StructureDefinition.differential.element; Provided value array has an element that is not an instance of ElementDefinition.`;
      assertFhirTypeList<ElementDefinition>(value, ElementDefinition, optErrMsg);
      this.element = value;
    } else {
      this.element = null;
    }
    return this;
  }

  /**
   * Add the provided ElementDefinition value to the `element` array property.
   *
   * @param value - the `element` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addElement(value: ElementDefinition | undefined): this {
    if (isDefined<ElementDefinition>(value)) {
      const optErrMsg = `Invalid StructureDefinition.differential.element; Provided element is not an instance of ElementDefinition.`;
      assertFhirType<ElementDefinition>(value, ElementDefinition, optErrMsg);
      this.initElement();
      this.element?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `element` property exists and has a value; `false` otherwise
   */
  public hasElement(): boolean {
    return isDefinedList<ElementDefinition>(this.element) && this.element.some((item: ElementDefinition) => !item.isEmpty());
  }

  /**
   * Initialize the `element` property
   */
  private initElement(): void {
    if(!this.hasElement()) {
      this.element = [] as ElementDefinition[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'StructureDefinition.differential';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.element,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): StructureDefinitionDifferentialComponent {
    const dest = new StructureDefinitionDifferentialComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: StructureDefinitionDifferentialComponent): void {
    super.copyValues(dest);
    const elementList = copyListValues<ElementDefinition>(this.element);
    dest.element = elementList.length === 0 ? null : elementList;
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

    if (this.hasElement()) {
      setFhirComplexListJson(this.getElement(), 'element', jsonObj);
    }

    return jsonObj;
  }
}
