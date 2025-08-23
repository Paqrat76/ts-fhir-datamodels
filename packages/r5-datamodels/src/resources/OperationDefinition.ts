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
 * OperationDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/OperationDefinition
 * StructureDefinition.name: OperationDefinition
 * StructureDefinition.description: A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
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
  IntegerType,
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
  fhirDateTime,
  fhirDateTimeSchema,
  fhirInteger,
  fhirIntegerSchema,
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
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { BindingStrengthEnum } from '../code-systems/BindingStrengthEnum';
import { CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, UsageContext } from '../complex-types/complex-datatypes';
import { FhirTypesEnum } from '../code-systems/FhirTypesEnum';
import { OperationKindEnum } from '../code-systems/OperationKindEnum';
import { OperationParameterScopeEnum } from '../code-systems/OperationParameterScopeEnum';
import { OperationParameterUseEnum } from '../code-systems/OperationParameterUseEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { SearchParamTypeEnum } from '../code-systems/SearchParamTypeEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * OperationDefinition Class
 *
 * @remarks
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 *
 * **FHIR Specification**
 * - **Short:** Definition of an operation or a named query
 * - **Definition:** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR OperationDefinition](http://hl7.org/fhir/StructureDefinition/OperationDefinition)
 */
export class OperationDefinition extends DomainResource implements IDomainResource {
  constructor(name: StringType | fhirString | null = null, status: EnumCodeType | CodeType | fhirCode | null = null, kind: EnumCodeType | CodeType | fhirCode | null = null, code: CodeType | fhirCode | null = null, system: BooleanType | fhirBoolean | null = null, type_: BooleanType | fhirBoolean | null = null, instance_: BooleanType | fhirBoolean | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.operationKindEnum = new OperationKindEnum();

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
      'OperationDefinition.status',
    );

    this.kind = constructorCodeValueAsEnumCodeType<OperationKindEnum>(
      kind,
      OperationKindEnum,
      this.operationKindEnum,
      'OperationDefinition.kind',
    );

    this.code = null;
    if (isDefined<CodeType | fhirCode>(code)) {
      if (code instanceof PrimitiveType) {
        this.setCodeElement(code);
      } else {
        this.setCode(code);
      }
    }

    this.system = null;
    if (isDefined<BooleanType | fhirBoolean>(system)) {
      if (system instanceof PrimitiveType) {
        this.setSystemElement(system);
      } else {
        this.setSystem(system);
      }
    }

    this.type_ = null;
    if (isDefined<BooleanType | fhirBoolean>(type_)) {
      if (type_ instanceof PrimitiveType) {
        this.setTypeElement(type_);
      } else {
        this.setType(type_);
      }
    }

    this.instance_ = null;
    if (isDefined<BooleanType | fhirBoolean>(instance_)) {
      if (instance_ instanceof PrimitiveType) {
        this.setInstanceElement(instance_);
      } else {
        this.setInstance(instance_);
      }
    }
  }

  /**
   * Parse the provided `OperationDefinition` JSON to instantiate the OperationDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `OperationDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to OperationDefinition
   * @returns OperationDefinition data model or undefined for `OperationDefinition`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): OperationDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'OperationDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new OperationDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'OperationDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = OperationDefinition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for OperationDefinition`;
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
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'affectsState';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setAffectsStateElement(datatype);
    }

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

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    fieldName = 'base';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setBaseElement(datatype);
    }

    fieldName = 'resource';
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
          instance.addResourceElement(datatype);
        }
      });
    }

    fieldName = 'system';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSystemElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setTypeElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'instance';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setInstanceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'inputProfile';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setInputProfileElement(datatype);
    }

    fieldName = 'outputProfile';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setOutputProfileElement(datatype);
    }

    fieldName = 'parameter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: OperationDefinitionParameterComponent | undefined = OperationDefinitionParameterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParameter(component);
        }
      });
    }

    fieldName = 'overload';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: OperationDefinitionOverloadComponent | undefined = OperationDefinitionOverloadComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOverload(component);
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
   * OperationDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this operation definition, represented as an absolute URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this operation definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the operation definition is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions). In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the operation definition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * OperationDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the implementation guide (business identifier)
   * - **Definition:** A formal identifier that is used to identify this implementation guide when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * OperationDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the operation definition
   * - **Definition:** The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different operation definitions that have the same url but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the operation definition with the format. The version SHOULD NOT contain a \'#\' - see [Business Version](https://hl7.org/fhir/resource.html#bv-format).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * OperationDefinition.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('OperationDefinition.versionAlgorithm[x]', ['string','Coding',]`
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
  @ChoiceDataTypesMeta('OperationDefinition.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * OperationDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this operation definition (computer friendly)
   * - **Definition:** A natural language name identifying the operation definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type no-whitespace name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * OperationDefinition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this operation definition (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the operation definition.
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
   * OperationDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The current state of this operation definition.
   * - **Comment:** A nominal state-transition diagram can be found in the] documentation Unknown does not represent \'other\' - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   * - **Requirements:** Enables tracking the lifecycle of the content and filtering of operation definitions that are appropriate for use versus not. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
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
   * FHIR CodeSystem: OperationKind
   *
   * @see {@link OperationKindEnum }
   */
  private readonly operationKindEnum: OperationKindEnum;

  /**
   * OperationDefinition.kind Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** operation | query
   * - **Definition:** Whether this is an operation or a named query.
   * - **Comment:** Named queries are invoked differently, and have different capabilities.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link OperationKindEnum }
   */
  private kind: EnumCodeType | null;

  /**
   * OperationDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing) and is not intended for genuine usage.
   * - **Comment:** Allows filtering of operation definitions that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level operation definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * OperationDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the operation definition was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes.
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * OperationDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher/steward (organization or individual)
   * - **Definition:** The name of the organization or individual responsible for the release and ongoing maintenance of the operation definition.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the operation definition.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * OperationDefinition.contact Element
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
   * OperationDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the operation definition
   * - **Definition:** A free text natural language description of the operation definition from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the operation definition is presumed to be the predominant language in the place the operation definition was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * OperationDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate operation definition.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or even any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * OperationDefinition.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for operation definition (if applicable)
   * - **Definition:** A legal or geographic region in which the operation definition is intended to be used.
   * - **Comment:** It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended. DEPRECATION NOTE: For consistency, implementations are encouraged to migrate to using the new \'jurisdiction\' code in the useContext element.  (I.e. useContext.code indicating http://terminology.hl7.org/CodeSystem/usage-context-type#jurisdiction and useContext.valueCodeableConcept indicating the jurisdiction.)
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * OperationDefinition.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this operation definition is defined
   * - **Definition:** Explanation of why this operation definition is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the operation definition. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * OperationDefinition.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the operation definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the operation definition.
   * - **Requirements:** Consumers of the operation definition must be able to determine any legal restrictions on the use of the artifact and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * OperationDefinition.copyrightLabel Element
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
   * OperationDefinition.affectsState Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether content is changed by the operation
   * - **Definition:** Whether the operation affects state. Side effects such as producing audit trail entries do not count as \'affecting  state\'.
   * - **Comment:** What http methods can be used for the operation depends on the .affectsState value and whether the input parameters are primitive or complex: 1. Servers SHALL support POST method for all operations. 2. Servers SHALL support the GET method when the operation has affectsState = false and all required parameters for the operation are primitive.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private affectsState?: BooleanType | undefined;

  /**
   * OperationDefinition.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Recommended name for operation in search url
   * - **Definition:** The label that is recommended to be used in the URL for this operation. In some cases, servers may need to use a different CapabilityStatement operation.name to differentiate between multiple SearchParameters that happen to have the same code.
   * - **Comment:** For maximum compatibility, use only lowercase ASCII characters. Note that HL7 will never define multiple operations with the same code. See [Naming Rules & Guidelines](https://confluence.hl7.org/display/FHIR/Guide+to+Designing+Resources#GuidetoDesigningResources-NamingRules&Guidelines) for the internal HL7 rules around codes, which are useful additional advice for all implementers
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeType | null;

  /**
   * OperationDefinition.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information about use
   * - **Definition:** Additional information about how to use this operation or named query.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private comment?: MarkdownType | undefined;

  /**
   * OperationDefinition.base Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Marks this as a profile of the base
   * - **Definition:** Indicates that this operation definition is a constraining profile on the base.
   * - **Comment:** A constrained profile can make optional parameters required or not used, introduce new parameters (required or optional), and clarify documentation.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/OperationDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private base?: CanonicalType | undefined;

  /**
   * OperationDefinition.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Types this operation applies to
   * - **Definition:** The types on which this operation can be executed.
   * - **Comment:** If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource?: CodeType[] | undefined;

  /**
   * OperationDefinition.system Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Invoke at the system level?
   * - **Definition:** Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private system: BooleanType | null;

  /**
   * OperationDefinition.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Invoke at the type level?
   * - **Definition:** Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: BooleanType | null;

  /**
   * OperationDefinition.instance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Invoke on an instance?
   * - **Definition:** Indicates whether this operation can be invoked on a particular instance of one of the given types.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private instance_: BooleanType | null;

  /**
   * OperationDefinition.inputProfile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Validation information for in parameters
   * - **Definition:** Additional validation information for the in parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource as a whole.
   * - **Comment:** If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private inputProfile?: CanonicalType | undefined;

  /**
   * OperationDefinition.outputProfile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Validation information for out parameters
   * - **Definition:** Additional validation information for the out parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource.
   * - **Comment:** If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private outputProfile?: CanonicalType | undefined;

  /**
   * OperationDefinition.parameter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Parameters for the operation/query
   * - **Definition:** The parameters for the operation/query.
   * - **Comment:** Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parameter?: OperationDefinitionParameterComponent[] | undefined;

  /**
   * OperationDefinition.overload Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Define overloaded variants for when  generating code
   * - **Definition:** Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation.
   * - **Comment:** The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private overload?: OperationDefinitionOverloadComponent[] | undefined;

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
      const optErrMsg = `Invalid OperationDefinition.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid OperationDefinition.url (${String(value)})`;
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
      const optErrMsg = `Invalid OperationDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid OperationDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid OperationDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid OperationDefinition.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('OperationDefinition.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('OperationDefinition.versionAlgorithm[x]')
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
        `DataType mismatch for OperationDefinition.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for OperationDefinition.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
    assertIsDefined<StringType>(element, `OperationDefinition.name is required`);
    const optErrMsg = `Invalid OperationDefinition.name; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `OperationDefinition.name is required`);
    const optErrMsg = `Invalid OperationDefinition.name (${String(value)})`;
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
      const optErrMsg = `Invalid OperationDefinition.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid OperationDefinition.title (${String(value)})`;
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
    assertIsDefined<EnumCodeType>(enumType, `OperationDefinition.status is required`);
    const errMsgPrefix = `Invalid OperationDefinition.status`;
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
    assertIsDefined<CodeType>(element, `OperationDefinition.status is required`);
    const optErrMsg = `Invalid OperationDefinition.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `OperationDefinition.status is required`);
    const optErrMsg = `Invalid OperationDefinition.status (${String(value)})`;
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
   * @returns the `kind` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link OperationKindEnum }
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
   * @see CodeSystem Enumeration: {@link OperationKindEnum }
   */
  public setKindEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `OperationDefinition.kind is required`);
    const errMsgPrefix = `Invalid OperationDefinition.kind`;
    assertEnumCodeType<OperationKindEnum>(enumType, OperationKindEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link OperationKindEnum }
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
   * @see CodeSystem Enumeration: {@link OperationKindEnum }
   */
  public setKindElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `OperationDefinition.kind is required`);
    const optErrMsg = `Invalid OperationDefinition.kind; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.kind = new EnumCodeType(element, this.operationKindEnum);
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
   * @see CodeSystem Enumeration: {@link OperationKindEnum }
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
   * @see CodeSystem Enumeration: {@link OperationKindEnum }
   */
  public setKind(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `OperationDefinition.kind is required`);
    const optErrMsg = `Invalid OperationDefinition.kind (${String(value)})`;
    this.kind = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.operationKindEnum);
    return this;
  }

  /**
   * @returns `true` if the `kind` property exists and has a value; `false` otherwise
   */
  public hasKind(): boolean {
    return this.hasKindEnumType();
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
      const optErrMsg = `Invalid OperationDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid OperationDefinition.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid OperationDefinition.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid OperationDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid OperationDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid OperationDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid OperationDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid OperationDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid OperationDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid OperationDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid OperationDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid OperationDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid OperationDefinition.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid OperationDefinition.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid OperationDefinition.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid OperationDefinition.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid OperationDefinition.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid OperationDefinition.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid OperationDefinition.copyrightLabel; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid OperationDefinition.copyrightLabel (${String(value)})`;
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
   * @returns the `affectsState` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getAffectsStateElement(): BooleanType {
    return this.affectsState ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `affectsState` property.
   *
   * @param element - the `affectsState` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAffectsStateElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.affectsState; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.affectsState = element;
    } else {
      this.affectsState = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `affectsState` property exists and has a value; `false` otherwise
   */
  public hasAffectsStateElement(): boolean {
    return isDefined<BooleanType>(this.affectsState) && !this.affectsState.isEmpty();
  }

  /**
   * @returns the `affectsState` property value as a fhirBoolean if defined; else undefined
   */
  public getAffectsState(): fhirBoolean | undefined {
    return this.affectsState?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `affectsState` property.
   *
   * @param value - the `affectsState` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAffectsState(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid OperationDefinition.affectsState (${String(value)})`;
      this.affectsState = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.affectsState = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `affectsState` property exists and has a value; `false` otherwise
   */
  public hasAffectsState(): boolean {
    return this.hasAffectsStateElement();
  }

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
    assertIsDefined<CodeType>(element, `OperationDefinition.code is required`);
    const optErrMsg = `Invalid OperationDefinition.code; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `OperationDefinition.code is required`);
    const optErrMsg = `Invalid OperationDefinition.code (${String(value)})`;
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
   * @returns the `comment` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getCommentElement(): MarkdownType {
    return this.comment ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `comment` property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.comment; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
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
    return isDefined<MarkdownType>(this.comment) && !this.comment.isEmpty();
  }

  /**
   * @returns the `comment` property value as a fhirMarkdown if defined; else undefined
   */
  public getComment(): fhirMarkdown | undefined {
    return this.comment?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `comment` property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid OperationDefinition.comment (${String(value)})`;
      this.comment = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
      const optErrMsg = `Invalid OperationDefinition.base; Provided element is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid OperationDefinition.base (${String(value)})`;
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
   * @returns the `resource` property value as a CodeType array
   */
  public getResourceElement(): CodeType[] {
    return this.resource ?? ([] as CodeType[]);
  }

  /**
   * Assigns the provided CodeType array value to the `resource` property.
   *
   * @param element - the `resource` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResourceElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.resource; Provided value array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      this.resource = element;
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeType value to the `resource` array property.
   *
   * @param element - the `resource` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addResourceElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.resource; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initResource();
      this.resource?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResourceElement(): boolean {
    return isDefinedList<CodeType>(this.resource) && this.resource.some((item: CodeType) => !item.isEmpty());
  }

  /**
   * @returns the `resource` property value as a fhirCode array
   */
  public getResource(): fhirCode[] {
    this.initResource();
    const resourceValues = [] as fhirCode[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.resource!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        resourceValues.push(value);
      }
    }
    return resourceValues;
  }

  /**
   * Assigns the provided primitive value array to the `resource` property.
   *
   * @param value - the `resource` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setResource(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const resourceElements = [] as CodeType[];
      for (const resourceValue of value) {
        const optErrMsg = `Invalid OperationDefinition.resource array item (${String(resourceValue)})`;
        const element = new CodeType(parseFhirPrimitiveData(resourceValue, fhirCodeSchema, optErrMsg));
        resourceElements.push(element);
      }
      this.resource = resourceElements;
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `resource` array property.
   *
   * @param value - the `resource` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addResource(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid OperationDefinition.resource array item (${String(value)})`;
      const element = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
      this.initResource();
      this.addResourceElement(element);
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
   * Initialize the `resource` property
   */
  private initResource(): void {
    if (!this.hasResource()) {
      this.resource = [] as CodeType[];
    }
  }

  /**
   * @returns the `system` property value as a BooleanType object if defined; else null
   */
  public getSystemElement(): BooleanType | null {
    return this.system;
  }

  /**
   * Assigns the provided PrimitiveType value to the `system` property.
   *
   * @param element - the `system` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSystemElement(element: BooleanType): this {
    assertIsDefined<BooleanType>(element, `OperationDefinition.system is required`);
    const optErrMsg = `Invalid OperationDefinition.system; Provided value is not an instance of BooleanType.`;
    assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
    this.system = element;
    return this;
  }

  /**
   * @returns `true` if the `system` property exists and has a value; `false` otherwise
   */
  public hasSystemElement(): boolean {
    return isDefined<BooleanType>(this.system) && !this.system.isEmpty();
  }

  /**
   * @returns the `system` property value as a fhirBoolean if defined; else null
   */
  public getSystem(): fhirBoolean | null {
    if (this.system?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.system.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `system` property.
   *
   * @param value - the `system` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSystem(value: fhirBoolean): this {
    assertIsDefined<fhirBoolean>(value, `OperationDefinition.system is required`);
    const optErrMsg = `Invalid OperationDefinition.system (${String(value)})`;
    this.system = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `system` property exists and has a value; `false` otherwise
   */
  public hasSystem(): boolean {
    return this.hasSystemElement();
  }

  /**
   * @returns the `type_` property value as a BooleanType object if defined; else null
   */
  public getTypeElement(): BooleanType | null {
    return this.type_;
  }

  /**
   * Assigns the provided PrimitiveType value to the `type_` property.
   *
   * @param element - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTypeElement(element: BooleanType): this {
    assertIsDefined<BooleanType>(element, `OperationDefinition.type is required`);
    const optErrMsg = `Invalid OperationDefinition.type; Provided value is not an instance of BooleanType.`;
    assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
    this.type_ = element;
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return isDefined<BooleanType>(this.type_) && !this.type_.isEmpty();
  }

  /**
   * @returns the `type_` property value as a fhirBoolean if defined; else null
   */
  public getType(): fhirBoolean | null {
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
  public setType(value: fhirBoolean): this {
    assertIsDefined<fhirBoolean>(value, `OperationDefinition.type is required`);
    const optErrMsg = `Invalid OperationDefinition.type (${String(value)})`;
    this.type_ = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeElement();
  }

  /**
   * @returns the `instance_` property value as a BooleanType object if defined; else null
   */
  public getInstanceElement(): BooleanType | null {
    return this.instance_;
  }

  /**
   * Assigns the provided PrimitiveType value to the `instance_` property.
   *
   * @param element - the `instance_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstanceElement(element: BooleanType): this {
    assertIsDefined<BooleanType>(element, `OperationDefinition.instance is required`);
    const optErrMsg = `Invalid OperationDefinition.instance; Provided value is not an instance of BooleanType.`;
    assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
    this.instance_ = element;
    return this;
  }

  /**
   * @returns `true` if the `instance_` property exists and has a value; `false` otherwise
   */
  public hasInstanceElement(): boolean {
    return isDefined<BooleanType>(this.instance_) && !this.instance_.isEmpty();
  }

  /**
   * @returns the `instance_` property value as a fhirBoolean if defined; else null
   */
  public getInstance(): fhirBoolean | null {
    if (this.instance_?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.instance_.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `instance_` property.
   *
   * @param value - the `instance_` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstance(value: fhirBoolean): this {
    assertIsDefined<fhirBoolean>(value, `OperationDefinition.instance is required`);
    const optErrMsg = `Invalid OperationDefinition.instance (${String(value)})`;
    this.instance_ = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `instance_` property exists and has a value; `false` otherwise
   */
  public hasInstance(): boolean {
    return this.hasInstanceElement();
  }

  /**
   * @returns the `inputProfile` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getInputProfileElement(): CanonicalType {
    return this.inputProfile ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `inputProfile` property.
   *
   * @param element - the `inputProfile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInputProfileElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.inputProfile; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.inputProfile = element;
    } else {
      this.inputProfile = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inputProfile` property exists and has a value; `false` otherwise
   */
  public hasInputProfileElement(): boolean {
    return isDefined<CanonicalType>(this.inputProfile) && !this.inputProfile.isEmpty();
  }

  /**
   * @returns the `inputProfile` property value as a fhirCanonical if defined; else undefined
   */
  public getInputProfile(): fhirCanonical | undefined {
    return this.inputProfile?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `inputProfile` property.
   *
   * @param value - the `inputProfile` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInputProfile(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid OperationDefinition.inputProfile (${String(value)})`;
      this.inputProfile = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.inputProfile = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `inputProfile` property exists and has a value; `false` otherwise
   */
  public hasInputProfile(): boolean {
    return this.hasInputProfileElement();
  }

  /**
   * @returns the `outputProfile` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getOutputProfileElement(): CanonicalType {
    return this.outputProfile ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `outputProfile` property.
   *
   * @param element - the `outputProfile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOutputProfileElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.outputProfile; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.outputProfile = element;
    } else {
      this.outputProfile = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outputProfile` property exists and has a value; `false` otherwise
   */
  public hasOutputProfileElement(): boolean {
    return isDefined<CanonicalType>(this.outputProfile) && !this.outputProfile.isEmpty();
  }

  /**
   * @returns the `outputProfile` property value as a fhirCanonical if defined; else undefined
   */
  public getOutputProfile(): fhirCanonical | undefined {
    return this.outputProfile?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `outputProfile` property.
   *
   * @param value - the `outputProfile` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOutputProfile(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid OperationDefinition.outputProfile (${String(value)})`;
      this.outputProfile = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.outputProfile = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outputProfile` property exists and has a value; `false` otherwise
   */
  public hasOutputProfile(): boolean {
    return this.hasOutputProfileElement();
  }

  /**
   * @returns the `parameter` property value as a OperationDefinitionParameterComponent array
   */
  public getParameter(): OperationDefinitionParameterComponent[] {
    return this.parameter ?? ([] as OperationDefinitionParameterComponent[]);
  }

  /**
   * Assigns the provided OperationDefinitionParameterComponent array value to the `parameter` property.
   *
   * @param value - the `parameter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParameter(value: OperationDefinitionParameterComponent[] | undefined): this {
    if (isDefinedList<OperationDefinitionParameterComponent>(value)) {
      const optErrMsg = `Invalid OperationDefinition.parameter; Provided value array has an element that is not an instance of OperationDefinitionParameterComponent.`;
      assertFhirTypeList<OperationDefinitionParameterComponent>(value, OperationDefinitionParameterComponent, optErrMsg);
      this.parameter = value;
    } else {
      this.parameter = undefined;
    }
    return this;
  }

  /**
   * Add the provided OperationDefinitionParameterComponent value to the `parameter` array property.
   *
   * @param value - the `parameter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParameter(value: OperationDefinitionParameterComponent | undefined): this {
    if (isDefined<OperationDefinitionParameterComponent>(value)) {
      const optErrMsg = `Invalid OperationDefinition.parameter; Provided element is not an instance of OperationDefinitionParameterComponent.`;
      assertFhirType<OperationDefinitionParameterComponent>(value, OperationDefinitionParameterComponent, optErrMsg);
      this.initParameter();
      this.parameter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parameter` property exists and has a value; `false` otherwise
   */
  public hasParameter(): boolean {
    return isDefinedList<OperationDefinitionParameterComponent>(this.parameter) && this.parameter.some((item: OperationDefinitionParameterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `parameter` property
   */
  private initParameter(): void {
    if(!this.hasParameter()) {
      this.parameter = [] as OperationDefinitionParameterComponent[];
    }
  }

  /**
   * @returns the `overload` property value as a OperationDefinitionOverloadComponent array
   */
  public getOverload(): OperationDefinitionOverloadComponent[] {
    return this.overload ?? ([] as OperationDefinitionOverloadComponent[]);
  }

  /**
   * Assigns the provided OperationDefinitionOverloadComponent array value to the `overload` property.
   *
   * @param value - the `overload` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOverload(value: OperationDefinitionOverloadComponent[] | undefined): this {
    if (isDefinedList<OperationDefinitionOverloadComponent>(value)) {
      const optErrMsg = `Invalid OperationDefinition.overload; Provided value array has an element that is not an instance of OperationDefinitionOverloadComponent.`;
      assertFhirTypeList<OperationDefinitionOverloadComponent>(value, OperationDefinitionOverloadComponent, optErrMsg);
      this.overload = value;
    } else {
      this.overload = undefined;
    }
    return this;
  }

  /**
   * Add the provided OperationDefinitionOverloadComponent value to the `overload` array property.
   *
   * @param value - the `overload` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOverload(value: OperationDefinitionOverloadComponent | undefined): this {
    if (isDefined<OperationDefinitionOverloadComponent>(value)) {
      const optErrMsg = `Invalid OperationDefinition.overload; Provided element is not an instance of OperationDefinitionOverloadComponent.`;
      assertFhirType<OperationDefinitionOverloadComponent>(value, OperationDefinitionOverloadComponent, optErrMsg);
      this.initOverload();
      this.overload?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `overload` property exists and has a value; `false` otherwise
   */
  public hasOverload(): boolean {
    return isDefinedList<OperationDefinitionOverloadComponent>(this.overload) && this.overload.some((item: OperationDefinitionOverloadComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `overload` property
   */
  private initOverload(): void {
    if(!this.hasOverload()) {
      this.overload = [] as OperationDefinitionOverloadComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'OperationDefinition';
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
      this.kind,
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
      this.affectsState,
      this.code,
      this.comment,
      this.base,
      this.resource,
      this.system,
      this.type_,
      this.instance_,
      this.inputProfile,
      this.outputProfile,
      this.parameter,
      this.overload,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): OperationDefinition {
    const dest = new OperationDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: OperationDefinition): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.versionAlgorithm = this.versionAlgorithm?.copy() as IDataType;
    dest.name = this.name ? this.name.copy() : null;
    dest.title = this.title?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.kind = this.kind ? this.kind.copy() : null;
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
    dest.affectsState = this.affectsState?.copy();
    dest.code = this.code ? this.code.copy() : null;
    dest.comment = this.comment?.copy();
    dest.base = this.base?.copy();
    const resourceList = copyListValues<CodeType>(this.resource);
    dest.resource = resourceList.length === 0 ? undefined : resourceList;
    dest.system = this.system ? this.system.copy() : null;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.instance_ = this.instance_ ? this.instance_.copy() : null;
    dest.inputProfile = this.inputProfile?.copy();
    dest.outputProfile = this.outputProfile?.copy();
    const parameterList = copyListValues<OperationDefinitionParameterComponent>(this.parameter);
    dest.parameter = parameterList.length === 0 ? undefined : parameterList;
    const overloadList = copyListValues<OperationDefinitionOverloadComponent>(this.overload);
    dest.overload = overloadList.length === 0 ? undefined : overloadList;
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.name`);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.status`);
    }

    if (this.hasKindElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getKindElement()!, 'kind', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.kind`);
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

    if (this.hasAffectsStateElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getAffectsStateElement(), 'affectsState', jsonObj);
    }

    if (this.hasCodeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.code`);
    }

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getCommentElement(), 'comment', jsonObj);
    }

    if (this.hasBaseElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getBaseElement(), 'base', jsonObj);
    }

    if (this.hasResource()) {
      setFhirPrimitiveListJson(this.getResourceElement(), 'resource', jsonObj);
    }

    if (this.hasSystemElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirBoolean>(this.getSystemElement()!, 'system', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.system`);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirBoolean>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.type`);
    }

    if (this.hasInstanceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirBoolean>(this.getInstanceElement()!, 'instance', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.instance`);
    }

    if (this.hasInputProfileElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getInputProfileElement(), 'inputProfile', jsonObj);
    }

    if (this.hasOutputProfileElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getOutputProfileElement(), 'outputProfile', jsonObj);
    }

    if (this.hasParameter()) {
      setFhirBackboneElementListJson(this.getParameter(), 'parameter', jsonObj);
    }

    if (this.hasOverload()) {
      setFhirBackboneElementListJson(this.getOverload(), 'overload', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * OperationDefinitionParameterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Parameters for the operation/query
 * - **Definition:** The parameters for the operation/query.
 * - **Comment:** Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
 *
 * @category Data Models: Resource
 * @see [FHIR OperationDefinition](http://hl7.org/fhir/StructureDefinition/OperationDefinition)
 */
export class OperationDefinitionParameterComponent extends BackboneElement implements IBackboneElement {
  constructor(name: CodeType | fhirCode | null = null, use: EnumCodeType | CodeType | fhirCode | null = null, min: IntegerType | fhirInteger | null = null, max: StringType | fhirString | null = null) {
    super();

    this.operationParameterUseEnum = new OperationParameterUseEnum();
    this.operationParameterScopeEnum = new OperationParameterScopeEnum();
    this.fhirTypesEnum = new FhirTypesEnum();
    this.searchParamTypeEnum = new SearchParamTypeEnum();

    this.name = null;
    if (isDefined<CodeType | fhirCode>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }

    this.use = constructorCodeValueAsEnumCodeType<OperationParameterUseEnum>(
      use,
      OperationParameterUseEnum,
      this.operationParameterUseEnum,
      'OperationDefinition.parameter.use',
    );

    this.min = null;
    if (isDefined<IntegerType | fhirInteger>(min)) {
      if (min instanceof PrimitiveType) {
        this.setMinElement(min);
      } else {
        this.setMin(min);
      }
    }

    this.max = null;
    if (isDefined<StringType | fhirString>(max)) {
      if (max instanceof PrimitiveType) {
        this.setMaxElement(max);
      } else {
        this.setMax(max);
      }
    }
  }

  /**
   * Parse the provided `OperationDefinitionParameterComponent` JSON to instantiate the OperationDefinitionParameterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `OperationDefinitionParameterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to OperationDefinitionParameterComponent
   * @returns OperationDefinitionParameterComponent data model or undefined for `OperationDefinitionParameterComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): OperationDefinitionParameterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'OperationDefinitionParameterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new OperationDefinitionParameterComponent();

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

    fieldName = 'use';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setUseElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'scope';
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
          instance.addScopeElement(datatype);
        }
      });
    }

    fieldName = 'min';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setMinElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'max';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setMaxElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'documentation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDocumentationElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'allowedType';
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
          instance.addAllowedTypeElement(datatype);
        }
      });
    }

    fieldName = 'targetProfile';
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
          instance.addTargetProfileElement(datatype);
        }
      });
    }

    fieldName = 'searchType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setSearchTypeElement(datatype);
    }

    fieldName = 'binding';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: OperationDefinitionParameterBindingComponent | undefined = OperationDefinitionParameterBindingComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBinding(component);
    }

    fieldName = 'referencedFrom';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: OperationDefinitionParameterReferencedFromComponent | undefined = OperationDefinitionParameterReferencedFromComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addReferencedFrom(component);
        }
      });
    }

    fieldName = 'part';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: OperationDefinitionParameterComponent | undefined = OperationDefinitionParameterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPart(component);
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
   * OperationDefinition.parameter.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name in Parameters.parameter.name or in URL
   * - **Definition:** The name of used to identify the parameter.
   * - **Comment:** This name must be a token (start with a letter in a..z, and only contain letters, numerals, and underscore. Note that for search parameters (type = string, with a search type), the name may be altered by the search modifiers.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name: CodeType | null;

  /**
   * FHIR CodeSystem: OperationParameterUse
   *
   * @see {@link OperationParameterUseEnum }
   */
  private readonly operationParameterUseEnum: OperationParameterUseEnum;

  /**
   * OperationDefinition.parameter.use Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** in | out
   * - **Definition:** Whether this is an input or an output parameter.
   * - **Comment:** If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link OperationParameterUseEnum }
   */
  private use: EnumCodeType | null;

  /**
   * FHIR CodeSystem: OperationParameterScope
   *
   * @see {@link OperationParameterScopeEnum }
   */
  private readonly operationParameterScopeEnum: OperationParameterScopeEnum;

  /**
   * OperationDefinition.parameter.scope Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** instance | type | system
   * - **Definition:** If present, indicates that the parameter applies when the operation is being invoked at the specified level.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link OperationParameterScopeEnum }
   */
  private scope?: EnumCodeType[] | undefined;

  /**
   * OperationDefinition.parameter.min Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Minimum Cardinality
   * - **Definition:** The minimum number of times this parameter SHALL appear in the request or response.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private min: IntegerType | null;

  /**
   * OperationDefinition.parameter.max Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Maximum Cardinality (a number or *)
   * - **Definition:** The maximum number of times this element is permitted to appear in the request or response.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private max: StringType | null;

  /**
   * OperationDefinition.parameter.documentation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of meaning/use
   * - **Definition:** Describes the meaning or use of this parameter.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private documentation?: MarkdownType | undefined;

  /**
   * FHIR CodeSystem: FhirTypes
   *
   * @see {@link FhirTypesEnum }
   */
  private readonly fhirTypesEnum: FhirTypesEnum;

  /**
   * OperationDefinition.parameter.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What type this parameter has
   * - **Definition:** The type for this parameter.
   * - **Comment:** if there is no stated parameter, then the parameter is a multi-part parameter type and must have at least one part defined.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  private type_?: EnumCodeType | undefined;

  /**
   * OperationDefinition.parameter.allowedType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allowed sub-type this parameter can have (if type is abstract)
   * - **Definition:** Support for polymorphic types. If the parameter type is abstract, this element lists allowed sub-types for the parameter.
   * - **Comment:** In previous versions of FHIR, there was an extension for this: http://hl7.org/fhir/StructureDefinition/operationdefinition-allowed-type
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  private allowedType?: EnumCodeType[] | undefined;

  /**
   * OperationDefinition.parameter.targetProfile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If type is Reference | canonical, allowed targets. If type is \'Resource\', then this constrains the allowed resource types
   * - **Definition:** Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this parameter refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.
   * - **Comment:** Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private targetProfile?: CanonicalType[] | undefined;

  /**
   * FHIR CodeSystem: SearchParamType
   *
   * @see {@link SearchParamTypeEnum }
   */
  private readonly searchParamTypeEnum: SearchParamTypeEnum;

  /**
   * OperationDefinition.parameter.searchType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** number | date | string | token | reference | composite | quantity | uri | special
   * - **Definition:** How the parameter is understood if/when it used as search parameter. This is only used if the parameter is a string.
   * - **Comment:** Parameters that are search parameter usually - but not always - are also defined for use with general searches, and function in the operation to filter the set of resources in scope for the operation just like the do when searching. The searchType describes how the server processes the value. For an example, see the [Evaluate Measure Operation](https://hl7.org/fhir/measure-operation-evaluate-measure.html)
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  private searchType?: EnumCodeType | undefined;

  /**
   * OperationDefinition.parameter.binding Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** ValueSet details if this is coded
   * - **Definition:** Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private binding?: OperationDefinitionParameterBindingComponent | undefined;

  /**
   * OperationDefinition.parameter.referencedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** References to this parameter
   * - **Definition:** Identifies other resource parameters within the operation invocation that are expected to resolve to this resource.
   * - **Comment:** Resolution applies if the referenced parameter exists.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private referencedFrom?: OperationDefinitionParameterReferencedFromComponent[] | undefined;

  /**
   * OperationDefinition.parameter.part Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Parts of a nested Parameter
   * - **Definition:** The parts of a nested Parameter.
   * - **Comment:** Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private part?: OperationDefinitionParameterComponent[] | undefined;

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
    assertIsDefined<CodeType>(element, `OperationDefinition.parameter.name is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.name; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `OperationDefinition.parameter.name is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.name (${String(value)})`;
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
   * @returns the `use` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link OperationParameterUseEnum }
   */
  public getUseEnumType(): EnumCodeType | null {
    return this.use;
  }

  /**
   * Assigns the provided EnumCodeType value to the `use` property.
   *
   * @param enumType - the `use` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link OperationParameterUseEnum }
   */
  public setUseEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `OperationDefinition.parameter.use is required`);
    const errMsgPrefix = `Invalid OperationDefinition.parameter.use`;
    assertEnumCodeType<OperationParameterUseEnum>(enumType, OperationParameterUseEnum, errMsgPrefix);
    this.use = enumType;
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUseEnumType(): boolean {
    return isDefined<EnumCodeType>(this.use) && !this.use.isEmpty() && this.use.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `use` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link OperationParameterUseEnum }
   */
  public getUseElement(): CodeType | null {
    if (this.use === null) {
      return null;
    }
    return this.use as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `use` property.
   *
   * @param element - the `use` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link OperationParameterUseEnum }
   */
  public setUseElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `OperationDefinition.parameter.use is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.use; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.use = new EnumCodeType(element, this.operationParameterUseEnum);
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUseElement(): boolean {
    return this.hasUseEnumType();
  }

  /**
   * @returns the `use` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link OperationParameterUseEnum }
   */
  public getUse(): fhirCode | null {
    if (this.use === null) {
      return null;
    }
    return this.use.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `use` property.
   *
   * @param value - the `use` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link OperationParameterUseEnum }
   */
  public setUse(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `OperationDefinition.parameter.use is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.use (${String(value)})`;
    this.use = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.operationParameterUseEnum);
    return this;
  }

  /**
   * @returns `true` if the `use` property exists and has a value; `false` otherwise
   */
  public hasUse(): boolean {
    return this.hasUseEnumType();
  }

  /**
   * @returns the `scope` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link OperationParameterScopeEnum }
   */
  public getScopeEnumType(): EnumCodeType[] {
    return this.scope ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `scope` property.
   *
   * @param enumType - the `scope` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link OperationParameterScopeEnum }
   */
  public setScopeEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid OperationDefinition.parameter.scope`;
      assertEnumCodeTypeList<OperationParameterScopeEnum>(enumType, OperationParameterScopeEnum, errMsgPrefix);
      this.scope = enumType;
    } else {
      this.scope = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `scope` array property.
   *
   * @param enumType - the `scope` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link OperationParameterScopeEnum }
   */
  public addScopeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid OperationDefinition.parameter.scope`;
      assertEnumCodeType<OperationParameterScopeEnum>(enumType, OperationParameterScopeEnum, errMsgPrefix);
      this.initScope();
      this.scope?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `scope` property exists and has a value; `false` otherwise
   */
  public hasScopeEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.scope) && this.scope.some((item: EnumCodeType) => !item.isEmpty()) && this.scope.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `scope` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link OperationParameterScopeEnum }
   */
  public getScopeElement(): CodeType[] {
    if (this.scope === undefined) {
      return [] as CodeType[];
    }
    return this.scope as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `scope` property.
   *
   * @param element - the `scope` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link OperationParameterScopeEnum }
   */
  public setScopeElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.scope; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.operationParameterScopeEnum));
      });
      this.scope = enumCodeTypes;
    } else {
      this.scope = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `scope` array property.
   *
   * @param element - the `scope` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link OperationParameterScopeEnum }
   */
  public addScopeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.scope; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initScope();
      this.scope?.push(new EnumCodeType(element, this.operationParameterScopeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `scope` property exists and has a value; `false` otherwise
   */
  public hasScopeElement(): boolean {
    return this.hasScopeEnumType();
  }

  /**
   * @returns the `scope` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link OperationParameterScopeEnum }
   */
  public getScope(): fhirCode[] {
    if (this.scope === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.scope) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `scope` property.
   *
   * @param value - the `scope` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link OperationParameterScopeEnum }
   */
  public setScope(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid OperationDefinition.parameter.scope; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.operationParameterScopeEnum));
      });
      this.scope = enumCodeTypes;
    } else {
      this.scope = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `scope` array property.
   *
   * @param value - the `scope` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link OperationParameterScopeEnum }
   */
  public addScope(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initScope();
      const optErrMsg = `Invalid OperationDefinition.parameter.scope; Provided value is not an instance of fhirCode.`;
      this.scope?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.operationParameterScopeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `scope` property exists and has a value; `false` otherwise
   */
  public hasScope(): boolean {
    return this.hasScopeEnumType();
  }

  /**
   * Initialize the scope property
   */
  private initScope(): void {
    if(!this.hasScopeEnumType()) {
      this.scope = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `min` property value as a IntegerType object if defined; else null
   */
  public getMinElement(): IntegerType | null {
    return this.min;
  }

  /**
   * Assigns the provided PrimitiveType value to the `min` property.
   *
   * @param element - the `min` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMinElement(element: IntegerType): this {
    assertIsDefined<IntegerType>(element, `OperationDefinition.parameter.min is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.min; Provided value is not an instance of IntegerType.`;
    assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
    this.min = element;
    return this;
  }

  /**
   * @returns `true` if the `min` property exists and has a value; `false` otherwise
   */
  public hasMinElement(): boolean {
    return isDefined<IntegerType>(this.min) && !this.min.isEmpty();
  }

  /**
   * @returns the `min` property value as a fhirInteger if defined; else null
   */
  public getMin(): fhirInteger | null {
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
  public setMin(value: fhirInteger): this {
    assertIsDefined<fhirInteger>(value, `OperationDefinition.parameter.min is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.min (${String(value)})`;
    this.min = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `min` property exists and has a value; `false` otherwise
   */
  public hasMin(): boolean {
    return this.hasMinElement();
  }

  /**
   * @returns the `max` property value as a StringType object if defined; else null
   */
  public getMaxElement(): StringType | null {
    return this.max;
  }

  /**
   * Assigns the provided PrimitiveType value to the `max` property.
   *
   * @param element - the `max` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMaxElement(element: StringType): this {
    assertIsDefined<StringType>(element, `OperationDefinition.parameter.max is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.max; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.max = element;
    return this;
  }

  /**
   * @returns `true` if the `max` property exists and has a value; `false` otherwise
   */
  public hasMaxElement(): boolean {
    return isDefined<StringType>(this.max) && !this.max.isEmpty();
  }

  /**
   * @returns the `max` property value as a fhirString if defined; else null
   */
  public getMax(): fhirString | null {
    if (this.max?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.max.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `max` property.
   *
   * @param value - the `max` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMax(value: fhirString): this {
    assertIsDefined<fhirString>(value, `OperationDefinition.parameter.max is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.max (${String(value)})`;
    this.max = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `max` property exists and has a value; `false` otherwise
   */
  public hasMax(): boolean {
    return this.hasMaxElement();
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
      const optErrMsg = `Invalid OperationDefinition.parameter.documentation; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid OperationDefinition.parameter.documentation (${String(value)})`;
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
   * @returns the `type_` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public getTypeEnumType(): EnumCodeType | undefined {
    return this.type_;
  }

  /**
   * Assigns the provided EnumCodeType value to the `type_` property.
   *
   * @param enumType - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid OperationDefinition.parameter.type';
      assertEnumCodeType<FhirTypesEnum>(enumType, FhirTypesEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = undefined;
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
   * @returns the `type_` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public getTypeElement(): CodeType | undefined {
    if (this.type_ === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.type; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.fhirTypesEnum);
    } else {
      this.type_ = undefined;
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
   * @returns the `type_` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public getType(): fhirCode | undefined {
    if (this.type_ === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.type; Provided value is not an instance of fhirCode.`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fhirTypesEnum);
    } else {
      this.type_ = undefined;
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
   * @returns the `allowedType` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public getAllowedTypeEnumType(): EnumCodeType[] {
    return this.allowedType ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `allowedType` property.
   *
   * @param enumType - the `allowedType` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setAllowedTypeEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid OperationDefinition.parameter.allowedType`;
      assertEnumCodeTypeList<FhirTypesEnum>(enumType, FhirTypesEnum, errMsgPrefix);
      this.allowedType = enumType;
    } else {
      this.allowedType = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `allowedType` array property.
   *
   * @param enumType - the `allowedType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public addAllowedTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid OperationDefinition.parameter.allowedType`;
      assertEnumCodeType<FhirTypesEnum>(enumType, FhirTypesEnum, errMsgPrefix);
      this.initAllowedType();
      this.allowedType?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `allowedType` property exists and has a value; `false` otherwise
   */
  public hasAllowedTypeEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.allowedType) && this.allowedType.some((item: EnumCodeType) => !item.isEmpty()) && this.allowedType.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `allowedType` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public getAllowedTypeElement(): CodeType[] {
    if (this.allowedType === undefined) {
      return [] as CodeType[];
    }
    return this.allowedType as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `allowedType` property.
   *
   * @param element - the `allowedType` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setAllowedTypeElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.allowedType; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.fhirTypesEnum));
      });
      this.allowedType = enumCodeTypes;
    } else {
      this.allowedType = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `allowedType` array property.
   *
   * @param element - the `allowedType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public addAllowedTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.allowedType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initAllowedType();
      this.allowedType?.push(new EnumCodeType(element, this.fhirTypesEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `allowedType` property exists and has a value; `false` otherwise
   */
  public hasAllowedTypeElement(): boolean {
    return this.hasAllowedTypeEnumType();
  }

  /**
   * @returns the `allowedType` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public getAllowedType(): fhirCode[] {
    if (this.allowedType === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.allowedType) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `allowedType` property.
   *
   * @param value - the `allowedType` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public setAllowedType(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid OperationDefinition.parameter.allowedType; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.fhirTypesEnum));
      });
      this.allowedType = enumCodeTypes;
    } else {
      this.allowedType = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `allowedType` array property.
   *
   * @param value - the `allowedType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link FhirTypesEnum }
   */
  public addAllowedType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initAllowedType();
      const optErrMsg = `Invalid OperationDefinition.parameter.allowedType; Provided value is not an instance of fhirCode.`;
      this.allowedType?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.fhirTypesEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `allowedType` property exists and has a value; `false` otherwise
   */
  public hasAllowedType(): boolean {
    return this.hasAllowedTypeEnumType();
  }

  /**
   * Initialize the allowedType property
   */
  private initAllowedType(): void {
    if(!this.hasAllowedTypeEnumType()) {
      this.allowedType = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `targetProfile` property value as a CanonicalType array
   */
  public getTargetProfileElement(): CanonicalType[] {
    return this.targetProfile ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `targetProfile` property.
   *
   * @param element - the `targetProfile` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetProfileElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.targetProfile; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.targetProfile = element;
    } else {
      this.targetProfile = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `targetProfile` array property.
   *
   * @param element - the `targetProfile` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addTargetProfileElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.targetProfile; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initTargetProfile();
      this.targetProfile?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `targetProfile` property exists and has a value; `false` otherwise
   */
  public hasTargetProfileElement(): boolean {
    return isDefinedList<CanonicalType>(this.targetProfile) && this.targetProfile.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `targetProfile` property value as a fhirCanonical array
   */
  public getTargetProfile(): fhirCanonical[] {
    this.initTargetProfile();
    const targetProfileValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.targetProfile!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        targetProfileValues.push(value);
      }
    }
    return targetProfileValues;
  }

  /**
   * Assigns the provided primitive value array to the `targetProfile` property.
   *
   * @param value - the `targetProfile` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetProfile(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const targetProfileElements = [] as CanonicalType[];
      for (const targetProfileValue of value) {
        const optErrMsg = `Invalid OperationDefinition.parameter.targetProfile array item (${String(targetProfileValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(targetProfileValue, fhirCanonicalSchema, optErrMsg));
        targetProfileElements.push(element);
      }
      this.targetProfile = targetProfileElements;
    } else {
      this.targetProfile = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `targetProfile` array property.
   *
   * @param value - the `targetProfile` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addTargetProfile(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.targetProfile array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initTargetProfile();
      this.addTargetProfileElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `targetProfile` property exists and has a value; `false` otherwise
   */
  public hasTargetProfile(): boolean {
    return this.hasTargetProfileElement();
  }

  /**
   * Initialize the `targetProfile` property
   */
  private initTargetProfile(): void {
    if (!this.hasTargetProfile()) {
      this.targetProfile = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `searchType` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  public getSearchTypeEnumType(): EnumCodeType | undefined {
    return this.searchType;
  }

  /**
   * Assigns the provided EnumCodeType value to the `searchType` property.
   *
   * @param enumType - the `searchType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  public setSearchTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid OperationDefinition.parameter.searchType';
      assertEnumCodeType<SearchParamTypeEnum>(enumType, SearchParamTypeEnum, errMsgPrefix);
      this.searchType = enumType;
    } else {
      this.searchType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `searchType` property exists and has a value; `false` otherwise
   */
  public hasSearchTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.searchType) && !this.searchType.isEmpty() && this.searchType.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `searchType` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  public getSearchTypeElement(): CodeType | undefined {
    if (this.searchType === undefined) {
      return undefined;
    }
    return this.searchType as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `searchType` property.
   *
   * @param element - the `searchType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  public setSearchTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.searchType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.searchType = new EnumCodeType(element, this.searchParamTypeEnum);
    } else {
      this.searchType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `searchType` property exists and has a value; `false` otherwise
   */
  public hasSearchTypeElement(): boolean {
    return this.hasSearchTypeEnumType();
  }

  /**
   * @returns the `searchType` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  public getSearchType(): fhirCode | undefined {
    if (this.searchType === undefined) {
      return undefined;
    }
    return this.searchType.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `searchType` property.
   *
   * @param value - the `searchType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  public setSearchType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.searchType; Provided value is not an instance of fhirCode.`;
      this.searchType = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.searchParamTypeEnum);
    } else {
      this.searchType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `searchType` property exists and has a value; `false` otherwise
   */
  public hasSearchType(): boolean {
    return this.hasSearchTypeEnumType();
  }

  /**
   * @returns the `binding` property value as a OperationDefinitionParameterBindingComponent object if defined; else an empty OperationDefinitionParameterBindingComponent object
   */
  public getBinding(): OperationDefinitionParameterBindingComponent {
    return this.binding ?? new OperationDefinitionParameterBindingComponent();
  }

  /**
   * Assigns the provided Binding object value to the `binding` property.
   *
   * @param value - the `binding` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBinding(value: OperationDefinitionParameterBindingComponent | undefined): this {
    if (isDefined<OperationDefinitionParameterBindingComponent>(value)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.binding; Provided element is not an instance of OperationDefinitionParameterBindingComponent.`;
      assertFhirType<OperationDefinitionParameterBindingComponent>(value, OperationDefinitionParameterBindingComponent, optErrMsg);
      this.binding = value;
    } else {
      this.binding = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `binding` property exists and has a value; `false` otherwise
   */
  public hasBinding(): boolean {
    return isDefined<OperationDefinitionParameterBindingComponent>(this.binding) && !this.binding.isEmpty();
  }

  /**
   * @returns the `referencedFrom` property value as a OperationDefinitionParameterReferencedFromComponent array
   */
  public getReferencedFrom(): OperationDefinitionParameterReferencedFromComponent[] {
    return this.referencedFrom ?? ([] as OperationDefinitionParameterReferencedFromComponent[]);
  }

  /**
   * Assigns the provided OperationDefinitionParameterReferencedFromComponent array value to the `referencedFrom` property.
   *
   * @param value - the `referencedFrom` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReferencedFrom(value: OperationDefinitionParameterReferencedFromComponent[] | undefined): this {
    if (isDefinedList<OperationDefinitionParameterReferencedFromComponent>(value)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.referencedFrom; Provided value array has an element that is not an instance of OperationDefinitionParameterReferencedFromComponent.`;
      assertFhirTypeList<OperationDefinitionParameterReferencedFromComponent>(value, OperationDefinitionParameterReferencedFromComponent, optErrMsg);
      this.referencedFrom = value;
    } else {
      this.referencedFrom = undefined;
    }
    return this;
  }

  /**
   * Add the provided OperationDefinitionParameterReferencedFromComponent value to the `referencedFrom` array property.
   *
   * @param value - the `referencedFrom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReferencedFrom(value: OperationDefinitionParameterReferencedFromComponent | undefined): this {
    if (isDefined<OperationDefinitionParameterReferencedFromComponent>(value)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.referencedFrom; Provided element is not an instance of OperationDefinitionParameterReferencedFromComponent.`;
      assertFhirType<OperationDefinitionParameterReferencedFromComponent>(value, OperationDefinitionParameterReferencedFromComponent, optErrMsg);
      this.initReferencedFrom();
      this.referencedFrom?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `referencedFrom` property exists and has a value; `false` otherwise
   */
  public hasReferencedFrom(): boolean {
    return isDefinedList<OperationDefinitionParameterReferencedFromComponent>(this.referencedFrom) && this.referencedFrom.some((item: OperationDefinitionParameterReferencedFromComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `referencedFrom` property
   */
  private initReferencedFrom(): void {
    if(!this.hasReferencedFrom()) {
      this.referencedFrom = [] as OperationDefinitionParameterReferencedFromComponent[];
    }
  }

  /**
   * @returns the `part` property value as a OperationDefinitionParameterComponent array
   */
  public getPart(): OperationDefinitionParameterComponent[] {
    return this.part ?? ([] as OperationDefinitionParameterComponent[]);
  }

  /**
   * Assigns the provided OperationDefinitionParameterComponent array value to the `part` property.
   *
   * @param value - the `part` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPart(value: OperationDefinitionParameterComponent[] | undefined): this {
    if (isDefinedList<OperationDefinitionParameterComponent>(value)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.part; Provided value array has an element that is not an instance of OperationDefinitionParameterComponent.`;
      assertFhirTypeList<OperationDefinitionParameterComponent>(value, OperationDefinitionParameterComponent, optErrMsg);
      this.part = value;
    } else {
      this.part = undefined;
    }
    return this;
  }

  /**
   * Add the provided OperationDefinitionParameterComponent value to the `part` array property.
   *
   * @param value - the `part` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPart(value: OperationDefinitionParameterComponent | undefined): this {
    if (isDefined<OperationDefinitionParameterComponent>(value)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.part; Provided element is not an instance of OperationDefinitionParameterComponent.`;
      assertFhirType<OperationDefinitionParameterComponent>(value, OperationDefinitionParameterComponent, optErrMsg);
      this.initPart();
      this.part?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `part` property exists and has a value; `false` otherwise
   */
  public hasPart(): boolean {
    return isDefinedList<OperationDefinitionParameterComponent>(this.part) && this.part.some((item: OperationDefinitionParameterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `part` property
   */
  private initPart(): void {
    if(!this.hasPart()) {
      this.part = [] as OperationDefinitionParameterComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'OperationDefinition.parameter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.use,
      this.scope,
      this.min,
      this.max,
      this.documentation,
      this.type_,
      this.allowedType,
      this.targetProfile,
      this.searchType,
      this.binding,
      this.referencedFrom,
      this.part,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): OperationDefinitionParameterComponent {
    const dest = new OperationDefinitionParameterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: OperationDefinitionParameterComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.use = this.use ? this.use.copy() : null;
    const scopeList = copyListValues<EnumCodeType>(this.scope);
    dest.scope = scopeList.length === 0 ? undefined : scopeList;
    dest.min = this.min ? this.min.copy() : null;
    dest.max = this.max ? this.max.copy() : null;
    dest.documentation = this.documentation?.copy();
    dest.type_ = this.type_?.copy();
    const allowedTypeList = copyListValues<EnumCodeType>(this.allowedType);
    dest.allowedType = allowedTypeList.length === 0 ? undefined : allowedTypeList;
    const targetProfileList = copyListValues<CanonicalType>(this.targetProfile);
    dest.targetProfile = targetProfileList.length === 0 ? undefined : targetProfileList;
    dest.searchType = this.searchType?.copy();
    dest.binding = this.binding?.copy();
    const referencedFromList = copyListValues<OperationDefinitionParameterReferencedFromComponent>(this.referencedFrom);
    dest.referencedFrom = referencedFromList.length === 0 ? undefined : referencedFromList;
    const partList = copyListValues<OperationDefinitionParameterComponent>(this.part);
    dest.part = partList.length === 0 ? undefined : partList;
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
      missingReqdProperties.push(`OperationDefinition.parameter.name`);
    }

    if (this.hasUseElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getUseElement()!, 'use', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.parameter.use`);
    }

    if (this.hasScopeElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getScopeElement(), 'scope', jsonObj);
    }

    if (this.hasMinElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirInteger>(this.getMinElement()!, 'min', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.parameter.min`);
    }

    if (this.hasMaxElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getMaxElement()!, 'max', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.parameter.max`);
    }

    if (this.hasDocumentationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDocumentationElement(), 'documentation', jsonObj);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    if (this.hasAllowedTypeElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getAllowedTypeElement(), 'allowedType', jsonObj);
    }

    if (this.hasTargetProfile()) {
      setFhirPrimitiveListJson(this.getTargetProfileElement(), 'targetProfile', jsonObj);
    }

    if (this.hasSearchTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getSearchTypeElement()!, 'searchType', jsonObj);
    }

    if (this.hasBinding()) {
      setFhirBackboneElementJson(this.getBinding(), 'binding', jsonObj);
    }

    if (this.hasReferencedFrom()) {
      setFhirBackboneElementListJson(this.getReferencedFrom(), 'referencedFrom', jsonObj);
    }

    if (this.hasPart()) {
      setFhirBackboneElementListJson(this.getPart(), 'part', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * OperationDefinitionParameterBindingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** ValueSet details if this is coded
 * - **Definition:** Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 *
 * @category Data Models: Resource
 * @see [FHIR OperationDefinition](http://hl7.org/fhir/StructureDefinition/OperationDefinition)
 */
export class OperationDefinitionParameterBindingComponent extends BackboneElement implements IBackboneElement {
  constructor(strength: EnumCodeType | CodeType | fhirCode | null = null, valueSet: CanonicalType | fhirCanonical | null = null) {
    super();

    this.bindingStrengthEnum = new BindingStrengthEnum();

    this.strength = constructorCodeValueAsEnumCodeType<BindingStrengthEnum>(
      strength,
      BindingStrengthEnum,
      this.bindingStrengthEnum,
      'OperationDefinition.parameter.binding.strength',
    );

    this.valueSet = null;
    if (isDefined<CanonicalType | fhirCanonical>(valueSet)) {
      if (valueSet instanceof PrimitiveType) {
        this.setValueSetElement(valueSet);
      } else {
        this.setValueSet(valueSet);
      }
    }
  }

  /**
   * Parse the provided `OperationDefinitionParameterBindingComponent` JSON to instantiate the OperationDefinitionParameterBindingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `OperationDefinitionParameterBindingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to OperationDefinitionParameterBindingComponent
   * @returns OperationDefinitionParameterBindingComponent data model or undefined for `OperationDefinitionParameterBindingComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): OperationDefinitionParameterBindingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'OperationDefinitionParameterBindingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new OperationDefinitionParameterBindingComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'strength';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setStrengthElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'valueSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setValueSetElement(datatype);
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
   * FHIR CodeSystem: BindingStrength
   *
   * @see {@link BindingStrengthEnum }
   */
  private readonly bindingStrengthEnum: BindingStrengthEnum;

  /**
   * OperationDefinition.parameter.binding.strength Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** required | extensible | preferred | example
   * - **Definition:** Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
   * - **Comment:** For further discussion, see [Using Terminologies](https://hl7.org/fhir/terminologies.html).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link BindingStrengthEnum }
   */
  private strength: EnumCodeType | null;

  /**
   * OperationDefinition.parameter.binding.valueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Source of value set
   * - **Definition:** Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
   * - **Comment:** For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private valueSet: CanonicalType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `strength` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link BindingStrengthEnum }
   */
  public getStrengthEnumType(): EnumCodeType | null {
    return this.strength;
  }

  /**
   * Assigns the provided EnumCodeType value to the `strength` property.
   *
   * @param enumType - the `strength` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link BindingStrengthEnum }
   */
  public setStrengthEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `OperationDefinition.parameter.binding.strength is required`);
    const errMsgPrefix = `Invalid OperationDefinition.parameter.binding.strength`;
    assertEnumCodeType<BindingStrengthEnum>(enumType, BindingStrengthEnum, errMsgPrefix);
    this.strength = enumType;
    return this;
  }

  /**
   * @returns `true` if the `strength` property exists and has a value; `false` otherwise
   */
  public hasStrengthEnumType(): boolean {
    return isDefined<EnumCodeType>(this.strength) && !this.strength.isEmpty() && this.strength.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `strength` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link BindingStrengthEnum }
   */
  public getStrengthElement(): CodeType | null {
    if (this.strength === null) {
      return null;
    }
    return this.strength as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `strength` property.
   *
   * @param element - the `strength` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link BindingStrengthEnum }
   */
  public setStrengthElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `OperationDefinition.parameter.binding.strength is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.binding.strength; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.strength = new EnumCodeType(element, this.bindingStrengthEnum);
    return this;
  }

  /**
   * @returns `true` if the `strength` property exists and has a value; `false` otherwise
   */
  public hasStrengthElement(): boolean {
    return this.hasStrengthEnumType();
  }

  /**
   * @returns the `strength` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link BindingStrengthEnum }
   */
  public getStrength(): fhirCode | null {
    if (this.strength === null) {
      return null;
    }
    return this.strength.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `strength` property.
   *
   * @param value - the `strength` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link BindingStrengthEnum }
   */
  public setStrength(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `OperationDefinition.parameter.binding.strength is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.binding.strength (${String(value)})`;
    this.strength = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.bindingStrengthEnum);
    return this;
  }

  /**
   * @returns `true` if the `strength` property exists and has a value; `false` otherwise
   */
  public hasStrength(): boolean {
    return this.hasStrengthEnumType();
  }

  /**
   * @returns the `valueSet` property value as a CanonicalType object if defined; else null
   */
  public getValueSetElement(): CanonicalType | null {
    return this.valueSet;
  }

  /**
   * Assigns the provided PrimitiveType value to the `valueSet` property.
   *
   * @param element - the `valueSet` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueSetElement(element: CanonicalType): this {
    assertIsDefined<CanonicalType>(element, `OperationDefinition.parameter.binding.valueSet is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.binding.valueSet; Provided value is not an instance of CanonicalType.`;
    assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
    this.valueSet = element;
    return this;
  }

  /**
   * @returns `true` if the `valueSet` property exists and has a value; `false` otherwise
   */
  public hasValueSetElement(): boolean {
    return isDefined<CanonicalType>(this.valueSet) && !this.valueSet.isEmpty();
  }

  /**
   * @returns the `valueSet` property value as a fhirCanonical if defined; else null
   */
  public getValueSet(): fhirCanonical | null {
    if (this.valueSet?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.valueSet.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `valueSet` property.
   *
   * @param value - the `valueSet` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValueSet(value: fhirCanonical): this {
    assertIsDefined<fhirCanonical>(value, `OperationDefinition.parameter.binding.valueSet is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.binding.valueSet (${String(value)})`;
    this.valueSet = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `valueSet` property exists and has a value; `false` otherwise
   */
  public hasValueSet(): boolean {
    return this.hasValueSetElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'OperationDefinition.parameter.binding';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.strength,
      this.valueSet,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): OperationDefinitionParameterBindingComponent {
    const dest = new OperationDefinitionParameterBindingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: OperationDefinitionParameterBindingComponent): void {
    super.copyValues(dest);
    dest.strength = this.strength ? this.strength.copy() : null;
    dest.valueSet = this.valueSet ? this.valueSet.copy() : null;
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

    if (this.hasStrengthElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStrengthElement()!, 'strength', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.parameter.binding.strength`);
    }

    if (this.hasValueSetElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCanonical>(this.getValueSetElement()!, 'valueSet', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.parameter.binding.valueSet`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * OperationDefinitionParameterReferencedFromComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** References to this parameter
 * - **Definition:** Identifies other resource parameters within the operation invocation that are expected to resolve to this resource.
 * - **Comment:** Resolution applies if the referenced parameter exists.
 *
 * @category Data Models: Resource
 * @see [FHIR OperationDefinition](http://hl7.org/fhir/StructureDefinition/OperationDefinition)
 */
export class OperationDefinitionParameterReferencedFromComponent extends BackboneElement implements IBackboneElement {
  constructor(source: StringType | fhirString | null = null) {
    super();

    this.source = null;
    if (isDefined<StringType | fhirString>(source)) {
      if (source instanceof PrimitiveType) {
        this.setSourceElement(source);
      } else {
        this.setSource(source);
      }
    }
  }

  /**
   * Parse the provided `OperationDefinitionParameterReferencedFromComponent` JSON to instantiate the OperationDefinitionParameterReferencedFromComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `OperationDefinitionParameterReferencedFromComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to OperationDefinitionParameterReferencedFromComponent
   * @returns OperationDefinitionParameterReferencedFromComponent data model or undefined for `OperationDefinitionParameterReferencedFromComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): OperationDefinitionParameterReferencedFromComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'OperationDefinitionParameterReferencedFromComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new OperationDefinitionParameterReferencedFromComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setSourceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'sourceId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSourceIdElement(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * OperationDefinition.parameter.referencedFrom.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Referencing parameter
   * - **Definition:** The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected to contain a reference to this resource.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private source: StringType | null;

  /**
   * OperationDefinition.parameter.referencedFrom.sourceId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Element id of reference
   * - **Definition:** The id of the element in the referencing resource that is expected to resolve to this resource.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private sourceId?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `source` property value as a StringType object if defined; else null
   */
  public getSourceElement(): StringType | null {
    return this.source;
  }

  /**
   * Assigns the provided PrimitiveType value to the `source` property.
   *
   * @param element - the `source` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceElement(element: StringType): this {
    assertIsDefined<StringType>(element, `OperationDefinition.parameter.referencedFrom.source is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.referencedFrom.source; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.source = element;
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSourceElement(): boolean {
    return isDefined<StringType>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `source` property value as a fhirString if defined; else null
   */
  public getSource(): fhirString | null {
    if (this.source?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.source.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `source` property.
   *
   * @param value - the `source` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSource(value: fhirString): this {
    assertIsDefined<fhirString>(value, `OperationDefinition.parameter.referencedFrom.source is required`);
    const optErrMsg = `Invalid OperationDefinition.parameter.referencedFrom.source (${String(value)})`;
    this.source = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return this.hasSourceElement();
  }

  /**
   * @returns the `sourceId` property value as a StringType object if defined; else an empty StringType object
   */
  public getSourceIdElement(): StringType {
    return this.sourceId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `sourceId` property.
   *
   * @param element - the `sourceId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceIdElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.referencedFrom.sourceId; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.sourceId = element;
    } else {
      this.sourceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceId` property exists and has a value; `false` otherwise
   */
  public hasSourceIdElement(): boolean {
    return isDefined<StringType>(this.sourceId) && !this.sourceId.isEmpty();
  }

  /**
   * @returns the `sourceId` property value as a fhirString if defined; else undefined
   */
  public getSourceId(): fhirString | undefined {
    return this.sourceId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `sourceId` property.
   *
   * @param value - the `sourceId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSourceId(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid OperationDefinition.parameter.referencedFrom.sourceId (${String(value)})`;
      this.sourceId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.sourceId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `sourceId` property exists and has a value; `false` otherwise
   */
  public hasSourceId(): boolean {
    return this.hasSourceIdElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'OperationDefinition.parameter.referencedFrom';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.source,
      this.sourceId,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): OperationDefinitionParameterReferencedFromComponent {
    const dest = new OperationDefinitionParameterReferencedFromComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: OperationDefinitionParameterReferencedFromComponent): void {
    super.copyValues(dest);
    dest.source = this.source ? this.source.copy() : null;
    dest.sourceId = this.sourceId?.copy();
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

    if (this.hasSourceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getSourceElement()!, 'source', jsonObj);
    } else {
      missingReqdProperties.push(`OperationDefinition.parameter.referencedFrom.source`);
    }

    if (this.hasSourceIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSourceIdElement(), 'sourceId', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * OperationDefinitionOverloadComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Define overloaded variants for when  generating code
 * - **Definition:** Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation.
 * - **Comment:** The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
 *
 * @category Data Models: Resource
 * @see [FHIR OperationDefinition](http://hl7.org/fhir/StructureDefinition/OperationDefinition)
 */
export class OperationDefinitionOverloadComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `OperationDefinitionOverloadComponent` JSON to instantiate the OperationDefinitionOverloadComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `OperationDefinitionOverloadComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to OperationDefinitionOverloadComponent
   * @returns OperationDefinitionOverloadComponent data model or undefined for `OperationDefinitionOverloadComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): OperationDefinitionOverloadComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'OperationDefinitionOverloadComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new OperationDefinitionOverloadComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'parameterName';
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
          instance.addParameterNameElement(datatype);
        }
      });
    }

    fieldName = 'comment';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setCommentElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * OperationDefinition.overload.parameterName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of parameter to include in overload
   * - **Definition:** Name of parameter to include in overload.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parameterName?: StringType[] | undefined;

  /**
   * OperationDefinition.overload.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments to go on overload
   * - **Definition:** Comments to go on overload.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private comment?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `parameterName` property value as a StringType array
   */
  public getParameterNameElement(): StringType[] {
    return this.parameterName ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `parameterName` property.
   *
   * @param element - the `parameterName` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParameterNameElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.overload.parameterName; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.parameterName = element;
    } else {
      this.parameterName = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `parameterName` array property.
   *
   * @param element - the `parameterName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addParameterNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid OperationDefinition.overload.parameterName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initParameterName();
      this.parameterName?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `parameterName` property exists and has a value; `false` otherwise
   */
  public hasParameterNameElement(): boolean {
    return isDefinedList<StringType>(this.parameterName) && this.parameterName.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `parameterName` property value as a fhirString array
   */
  public getParameterName(): fhirString[] {
    this.initParameterName();
    const parameterNameValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.parameterName!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        parameterNameValues.push(value);
      }
    }
    return parameterNameValues;
  }

  /**
   * Assigns the provided primitive value array to the `parameterName` property.
   *
   * @param value - the `parameterName` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParameterName(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const parameterNameElements = [] as StringType[];
      for (const parameterNameValue of value) {
        const optErrMsg = `Invalid OperationDefinition.overload.parameterName array item (${String(parameterNameValue)})`;
        const element = new StringType(parseFhirPrimitiveData(parameterNameValue, fhirStringSchema, optErrMsg));
        parameterNameElements.push(element);
      }
      this.parameterName = parameterNameElements;
    } else {
      this.parameterName = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `parameterName` array property.
   *
   * @param value - the `parameterName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addParameterName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid OperationDefinition.overload.parameterName array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initParameterName();
      this.addParameterNameElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `parameterName` property exists and has a value; `false` otherwise
   */
  public hasParameterName(): boolean {
    return this.hasParameterNameElement();
  }

  /**
   * Initialize the `parameterName` property
   */
  private initParameterName(): void {
    if (!this.hasParameterName()) {
      this.parameterName = [] as StringType[];
    }
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
      const optErrMsg = `Invalid OperationDefinition.overload.comment; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid OperationDefinition.overload.comment (${String(value)})`;
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
    return 'OperationDefinition.overload';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.parameterName,
      this.comment,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): OperationDefinitionOverloadComponent {
    const dest = new OperationDefinitionOverloadComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: OperationDefinitionOverloadComponent): void {
    super.copyValues(dest);
    const parameterNameList = copyListValues<StringType>(this.parameterName);
    dest.parameterName = parameterNameList.length === 0 ? undefined : parameterNameList;
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

    if (this.hasParameterName()) {
      setFhirPrimitiveListJson(this.getParameterNameElement(), 'parameterName', jsonObj);
    }

    if (this.hasCommentElement()) {
      setFhirPrimitiveJson<fhirString>(this.getCommentElement(), 'comment', jsonObj);
    }

    return jsonObj;
  }
}
