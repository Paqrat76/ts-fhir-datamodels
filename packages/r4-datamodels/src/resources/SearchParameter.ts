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
 * SearchParameter Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SearchParameter
 * StructureDefinition.name: SearchParameter
 * StructureDefinition.description: A search parameter that defines a named search item that can be used to search/filter on a resource.
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
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
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
  assertIsDefinedList,
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
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, ContactDetail, PARSABLE_DATATYPE_MAP, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { ResourceTypesEnum } from '../code-systems/ResourceTypesEnum';
import { SearchComparatorEnum } from '../code-systems/SearchComparatorEnum';
import { SearchModifierCodeEnum } from '../code-systems/SearchModifierCodeEnum';
import { SearchParamTypeEnum } from '../code-systems/SearchParamTypeEnum';
import { SearchXpathUsageEnum } from '../code-systems/SearchXpathUsageEnum';

/**
 * SearchParameter Class
 *
 * @remarks
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 *
 * **FHIR Specification**
 * - **Short:** Search parameter for a resource
 * - **Definition:** A search parameter that defines a named search item that can be used to search/filter on a resource.
 * - **Comment:** In FHIR, search is not performed directly on a resource (by XML or JSON path), but on a named parameter that maps into the resource content.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR SearchParameter](http://hl7.org/fhir/StructureDefinition/SearchParameter)
 */
export class SearchParameter extends DomainResource implements IDomainResource {
  constructor(url: UriType | fhirUri | null = null, name: StringType | fhirString | null = null, status: EnumCodeType | CodeType | fhirCode | null = null, description: MarkdownType | fhirMarkdown | null = null, code: CodeType | fhirCode | null = null, base: EnumCodeType[] | CodeType[] | fhirCode[] | null = null, type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.resourceTypesEnum = new ResourceTypesEnum();
    this.searchParamTypeEnum = new SearchParamTypeEnum();
    this.searchXpathUsageEnum = new SearchXpathUsageEnum();
    this.searchComparatorEnum = new SearchComparatorEnum();
    this.searchModifierCodeEnum = new SearchModifierCodeEnum();

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
      'SearchParameter.status',
    );

    this.description = null;
    if (isDefined<MarkdownType | fhirMarkdown>(description)) {
      if (description instanceof PrimitiveType) {
        this.setDescriptionElement(description);
      } else {
        this.setDescription(description);
      }
    }

    this.code = null;
    if (isDefined<CodeType | fhirCode>(code)) {
      if (code instanceof PrimitiveType) {
        this.setCodeElement(code);
      } else {
        this.setCode(code);
      }
    }

    this.base = constructorCodeValueAsEnumCodeTypeList<ResourceTypesEnum>(
      base,
      ResourceTypesEnum,
      this.resourceTypesEnum,
      'SearchParameter.base',
    );

    this.type_ = constructorCodeValueAsEnumCodeType<SearchParamTypeEnum>(
      type_,
      SearchParamTypeEnum,
      this.searchParamTypeEnum,
      'SearchParameter.type',
    );
  }

  /**
   * Parse the provided `SearchParameter` JSON to instantiate the SearchParameter data model.
   *
   * @param sourceJson - JSON representing FHIR `SearchParameter`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SearchParameter
   * @returns SearchParameter data model or undefined for `SearchParameter`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SearchParameter | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SearchParameter';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SearchParameter();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SearchParameter');
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
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setUrlElement(datatype);
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

    fieldName = 'derivedFrom';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setDerivedFromElement(datatype);
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
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setDescriptionElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'base';
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
          instance.addBaseElement(datatype);
        }
      });
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
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

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setExpressionElement(datatype);
    }

    fieldName = 'xpath';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setXpathElement(datatype);
    }

    fieldName = 'xpathUsage';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setXpathUsageElement(datatype);
    }

    fieldName = 'target';
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
          instance.addTargetElement(datatype);
        }
      });
    }

    fieldName = 'multipleOr';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setMultipleOrElement(datatype);
    }

    fieldName = 'multipleAnd';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setMultipleAndElement(datatype);
    }

    fieldName = 'comparator';
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
          instance.addComparatorElement(datatype);
        }
      });
    }

    fieldName = 'modifier';
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
          instance.addModifierElement(datatype);
        }
      });
    }

    fieldName = 'chain';
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
          instance.addChainElement(datatype);
        }
      });
    }

    fieldName = 'component';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SearchParameterComponentComponent | undefined = SearchParameterComponentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addComponent(component);
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
   * SearchParameter.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this search parameter, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this search parameter is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the search parameter is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the search parameter to be referenced by a single globally unique identifier. To allow referencing and reusing search parameter definitions under other names on operational systems (in case of name clash).
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url: UriType | null;

  /**
   * SearchParameter.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the search parameter
   * - **Definition:** The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
   * - **Comment:** There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the search parameter with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * SearchParameter.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this search parameter (computer friendly)
   * - **Definition:** A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * SearchParameter.derivedFrom Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Original definition for the search parameter
   * - **Definition:** Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. i.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter.
   * - **Comment:** The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SearchParameter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private derivedFrom?: CanonicalType | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * SearchParameter.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this search parameter. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of search parameters that are appropriate for use versus not.
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
   * SearchParameter.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of search parameters that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level search parameter.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * SearchParameter.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the search parameter was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the search parameter. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * SearchParameter.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the search parameter.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the search parameter.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * SearchParameter.contact Element
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
   * SearchParameter.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the search parameter
   * - **Definition:** And how it used.
   * - **Comment:** This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the search parameter is presumed to be the predominant language in the place the search parameter was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description: MarkdownType | null;

  /**
   * SearchParameter.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate search parameter instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * SearchParameter.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for search parameter (if applicable)
   * - **Definition:** A legal or geographic region in which the search parameter is intended to be used.
   * - **Comment:** It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * SearchParameter.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this search parameter is defined
   * - **Definition:** Explanation of why this search parameter is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the search parameter. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * SearchParameter.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code used in URL
   * - **Definition:** The code used in the URL or the parameter name in a parameters resource for this search parameter.
   * - **Comment:** For maximum compatibility, use only lowercase ASCII characters.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeType | null;

  /**
   * FHIR CodeSystem: ResourceTypes
   *
   * @see {@link ResourceTypesEnum }
   */
  private readonly resourceTypesEnum: ResourceTypesEnum;

  /**
   * SearchParameter.base Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The resource type(s) this search parameter applies to
   * - **Definition:** The base resource type(s) that this search parameter can be used against.
   * - **Comment:** A search parameter must always apply to at least one resource type. When search parameters apply to more than one resource type, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](https://hl7.org/fhir/http.html#xres-search)).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  private base: EnumCodeType[] | null;

  /**
   * FHIR CodeSystem: SearchParamType
   *
   * @see {@link SearchParamTypeEnum }
   */
  private readonly searchParamTypeEnum: SearchParamTypeEnum;

  /**
   * SearchParameter.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** number | date | string | token | reference | composite | quantity | uri | special
   * - **Definition:** The type of value that a search parameter may contain, and how the content is interpreted.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SearchParamTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * SearchParameter.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** FHIRPath expression that extracts the values
   * - **Definition:** A FHIRPath expression that returns a set of elements for the search parameter.
   * - **Comment:** Note that the elements returned by the expression are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system. For composite search parameters, the outcome of the expression must a collection of base elements from which the composites are derived.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression?: StringType | undefined;

  /**
   * SearchParameter.xpath Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** XPath that extracts the values
   * - **Definition:** An XPath expression that returns a set of elements for the search parameter.
   * - **Comment:** Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private xpath?: StringType | undefined;

  /**
   * FHIR CodeSystem: SearchXpathUsage
   *
   * @see {@link SearchXpathUsageEnum }
   */
  private readonly searchXpathUsageEnum: SearchXpathUsageEnum;

  /**
   * SearchParameter.xpathUsage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** normal | phonetic | nearby | distance | other
   * - **Definition:** How the search parameter relates to the set of elements returned by evaluating the xpath query.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link SearchXpathUsageEnum }
   */
  private xpathUsage?: EnumCodeType | undefined;

  /**
   * SearchParameter.target Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Types of resource (if a resource reference)
   * - **Definition:** Types of resource (if a resource is referenced).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  private target?: EnumCodeType[] | undefined;

  /**
   * SearchParameter.multipleOr Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allow multiple values per parameter (or)
   * - **Definition:** Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private multipleOr?: BooleanType | undefined;

  /**
   * SearchParameter.multipleAnd Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allow multiple parameters (and)
   * - **Definition:** Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private multipleAnd?: BooleanType | undefined;

  /**
   * FHIR CodeSystem: SearchComparator
   *
   * @see {@link SearchComparatorEnum }
   */
  private readonly searchComparatorEnum: SearchComparatorEnum;

  /**
   * SearchParameter.comparator Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** eq | ne | gt | lt | ge | le | sa | eb | ap
   * - **Definition:** Comparators supported for the search parameter.
   * - **Comment:** If no comparators are listed, clients should not expect servers to support any comparators.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  private comparator?: EnumCodeType[] | undefined;

  /**
   * FHIR CodeSystem: SearchModifierCode
   *
   * @see {@link SearchModifierCodeEnum }
   */
  private readonly searchModifierCodeEnum: SearchModifierCodeEnum;

  /**
   * SearchParameter.modifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | ofType
   * - **Definition:** A modifier supported for the search parameter.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  private modifier?: EnumCodeType[] | undefined;

  /**
   * SearchParameter.chain Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Chained names supported
   * - **Definition:** Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type.
   * - **Comment:** Systems are not required to list all the chain names they support, but if they don\'t list them, clients might not know to use them.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private chain?: StringType[] | undefined;

  /**
   * SearchParameter.component Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For Composite resources to define the parts
   * - **Definition:** Used to define the parts of a composite search parameter.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private component?: SearchParameterComponentComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `url` property value as a UriType object if defined; else null
   */
  public getUrlElement(): UriType | null {
    return this.url;
  }

  /**
   * Assigns the provided PrimitiveType value to the `url` property.
   *
   * @param element - the `url` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUrlElement(element: UriType): this {
    assertIsDefined<UriType>(element, `SearchParameter.url is required`);
    const optErrMsg = `Invalid SearchParameter.url; Provided value is not an instance of UriType.`;
    assertFhirType<UriType>(element, UriType, optErrMsg);
    this.url = element;
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
  public setUrl(value: fhirUri): this {
    assertIsDefined<fhirUri>(value, `SearchParameter.url is required`);
    const optErrMsg = `Invalid SearchParameter.url (${String(value)})`;
    this.url = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
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
      const optErrMsg = `Invalid SearchParameter.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SearchParameter.version (${String(value)})`;
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
    assertIsDefined<StringType>(element, `SearchParameter.name is required`);
    const optErrMsg = `Invalid SearchParameter.name; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `SearchParameter.name is required`);
    const optErrMsg = `Invalid SearchParameter.name (${String(value)})`;
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
   * @returns the `derivedFrom` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getDerivedFromElement(): CanonicalType {
    return this.derivedFrom ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `derivedFrom` property.
   *
   * @param element - the `derivedFrom` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDerivedFromElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid SearchParameter.derivedFrom; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.derivedFrom = element;
    } else {
      this.derivedFrom = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFrom` property exists and has a value; `false` otherwise
   */
  public hasDerivedFromElement(): boolean {
    return isDefined<CanonicalType>(this.derivedFrom) && !this.derivedFrom.isEmpty();
  }

  /**
   * @returns the `derivedFrom` property value as a fhirCanonical if defined; else undefined
   */
  public getDerivedFrom(): fhirCanonical | undefined {
    return this.derivedFrom?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `derivedFrom` property.
   *
   * @param value - the `derivedFrom` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDerivedFrom(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid SearchParameter.derivedFrom (${String(value)})`;
      this.derivedFrom = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.derivedFrom = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFrom` property exists and has a value; `false` otherwise
   */
  public hasDerivedFrom(): boolean {
    return this.hasDerivedFromElement();
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
    assertIsDefined<EnumCodeType>(enumType, `SearchParameter.status is required`);
    const errMsgPrefix = `Invalid SearchParameter.status`;
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
    assertIsDefined<CodeType>(element, `SearchParameter.status is required`);
    const optErrMsg = `Invalid SearchParameter.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `SearchParameter.status is required`);
    const optErrMsg = `Invalid SearchParameter.status (${String(value)})`;
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
      const optErrMsg = `Invalid SearchParameter.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid SearchParameter.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid SearchParameter.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid SearchParameter.date (${String(value)})`;
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
      const optErrMsg = `Invalid SearchParameter.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SearchParameter.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid SearchParameter.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid SearchParameter.contact; Provided element is not an instance of ContactDetail.`;
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
   * @returns the `description` property value as a MarkdownType object if defined; else null
   */
  public getDescriptionElement(): MarkdownType | null {
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
  public setDescriptionElement(element: MarkdownType): this {
    assertIsDefined<MarkdownType>(element, `SearchParameter.description is required`);
    const optErrMsg = `Invalid SearchParameter.description; Provided value is not an instance of MarkdownType.`;
    assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
    this.description = element;
    return this;
  }

  /**
   * @returns `true` if the `description` property exists and has a value; `false` otherwise
   */
  public hasDescriptionElement(): boolean {
    return isDefined<MarkdownType>(this.description) && !this.description.isEmpty();
  }

  /**
   * @returns the `description` property value as a fhirMarkdown if defined; else null
   */
  public getDescription(): fhirMarkdown | null {
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
  public setDescription(value: fhirMarkdown): this {
    assertIsDefined<fhirMarkdown>(value, `SearchParameter.description is required`);
    const optErrMsg = `Invalid SearchParameter.description (${String(value)})`;
    this.description = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
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
      const optErrMsg = `Invalid SearchParameter.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid SearchParameter.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid SearchParameter.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SearchParameter.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SearchParameter.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SearchParameter.purpose (${String(value)})`;
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
    assertIsDefined<CodeType>(element, `SearchParameter.code is required`);
    const optErrMsg = `Invalid SearchParameter.code; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `SearchParameter.code is required`);
    const optErrMsg = `Invalid SearchParameter.code (${String(value)})`;
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
   * @returns the `base` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getBaseEnumType(): EnumCodeType[] {
    return this.base ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `base` property.
   *
   * @param enumType - the `base` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setBaseEnumType(enumType: EnumCodeType[]): this {
    assertIsDefinedList<EnumCodeType>(enumType, `SearchParameter.base is required`);
    const errMsgPrefix = `Invalid SearchParameter.base`;
    assertEnumCodeTypeList<ResourceTypesEnum>(enumType, ResourceTypesEnum, errMsgPrefix);
    this.base = enumType;
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `base` array property.
   *
   * @param enumType - the `base` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public addBaseEnumType(enumType: EnumCodeType): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SearchParameter.base`;
      assertEnumCodeType<ResourceTypesEnum>(enumType, ResourceTypesEnum, errMsgPrefix);
      this.initBase();
      this.base?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `base` property exists and has a value; `false` otherwise
   */
  public hasBaseEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.base) && this.base.some((item: EnumCodeType) => !item.isEmpty()) && this.base.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `base` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getBaseElement(): CodeType[] {
    if (this.base === null) {
      return [] as CodeType[];
    }
    return this.base as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `base` property.
   *
   * @param element - the `base` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setBaseElement(element: CodeType[]): this {
    assertIsDefinedList<CodeType>(element, `SearchParameter.base is required`);
    const optErrMsg = `Invalid SearchParameter.base; Provided element array has an element that is not an instance of CodeType.`;
    assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
    const enumCodeTypes = [] as EnumCodeType[];
    element.forEach((type: CodeType) => {
      enumCodeTypes.push(new EnumCodeType(type, this.resourceTypesEnum));
    });
    this.base = enumCodeTypes;
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `base` array property.
   *
   * @param element - the `base` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public addBaseElement(element: CodeType): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SearchParameter.base; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initBase();
      this.base?.push(new EnumCodeType(element, this.resourceTypesEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `base` property exists and has a value; `false` otherwise
   */
  public hasBaseElement(): boolean {
    return this.hasBaseEnumType();
  }

  /**
   * @returns the `base` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getBase(): fhirCode[] {
    if (this.base === null) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.base) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `base` property.
   *
   * @param value - the `base` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setBase(value: fhirCode[]): this {
    assertIsDefinedList<fhirCode>(value, `SearchParameter.base is required`);
    const enumCodeTypes = [] as EnumCodeType[];
    const optErrMsg = `Invalid SearchParameter.base; Provided value is not an instance of fhirCode.`;
    value.forEach((val: fhirCode) => {
      enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.resourceTypesEnum));
    });
    this.base = enumCodeTypes;
    return this;
  }

  /**
   * Add the provided primitive value to the `base` array property.
   *
   * @param value - the `base` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public addBase(value: fhirCode): this {
    if (isDefined<fhirCode>(value)) {
      this.initBase();
      const optErrMsg = `Invalid SearchParameter.base; Provided value is not an instance of fhirCode.`;
      this.base?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.resourceTypesEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `base` property exists and has a value; `false` otherwise
   */
  public hasBase(): boolean {
    return this.hasBaseEnumType();
  }

  /**
   * Initialize the base property
   */
  private initBase(): void {
    if(!this.hasBaseEnumType()) {
      this.base = [] as EnumCodeType[];
    }
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
  public setTypeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `SearchParameter.type is required`);
    const errMsgPrefix = `Invalid SearchParameter.type`;
    assertEnumCodeType<SearchParamTypeEnum>(enumType, SearchParamTypeEnum, errMsgPrefix);
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
  public setTypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `SearchParameter.type is required`);
    const optErrMsg = `Invalid SearchParameter.type; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.type_ = new EnumCodeType(element, this.searchParamTypeEnum);
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
  public setType(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `SearchParameter.type is required`);
    const optErrMsg = `Invalid SearchParameter.type (${String(value)})`;
    this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.searchParamTypeEnum);
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
  public setExpressionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SearchParameter.expression; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.expression = element;
    } else {
      this.expression = undefined;
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
   * @returns the `expression` property value as a fhirString if defined; else undefined
   */
  public getExpression(): fhirString | undefined {
    return this.expression?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `expression` property.
   *
   * @param value - the `expression` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpression(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SearchParameter.expression (${String(value)})`;
      this.expression = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.expression = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpression(): boolean {
    return this.hasExpressionElement();
  }

  /**
   * @returns the `xpath` property value as a StringType object if defined; else an empty StringType object
   */
  public getXpathElement(): StringType {
    return this.xpath ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `xpath` property.
   *
   * @param element - the `xpath` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setXpathElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SearchParameter.xpath; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.xpath = element;
    } else {
      this.xpath = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `xpath` property exists and has a value; `false` otherwise
   */
  public hasXpathElement(): boolean {
    return isDefined<StringType>(this.xpath) && !this.xpath.isEmpty();
  }

  /**
   * @returns the `xpath` property value as a fhirString if defined; else undefined
   */
  public getXpath(): fhirString | undefined {
    return this.xpath?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `xpath` property.
   *
   * @param value - the `xpath` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setXpath(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SearchParameter.xpath (${String(value)})`;
      this.xpath = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.xpath = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `xpath` property exists and has a value; `false` otherwise
   */
  public hasXpath(): boolean {
    return this.hasXpathElement();
  }

  /**
   * @returns the `xpathUsage` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchXpathUsageEnum }
   */
  public getXpathUsageEnumType(): EnumCodeType | undefined {
    return this.xpathUsage;
  }

  /**
   * Assigns the provided EnumCodeType value to the `xpathUsage` property.
   *
   * @param enumType - the `xpathUsage` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchXpathUsageEnum }
   */
  public setXpathUsageEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid SearchParameter.xpathUsage';
      assertEnumCodeType<SearchXpathUsageEnum>(enumType, SearchXpathUsageEnum, errMsgPrefix);
      this.xpathUsage = enumType;
    } else {
      this.xpathUsage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `xpathUsage` property exists and has a value; `false` otherwise
   */
  public hasXpathUsageEnumType(): boolean {
    return isDefined<EnumCodeType>(this.xpathUsage) && !this.xpathUsage.isEmpty() && this.xpathUsage.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `xpathUsage` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchXpathUsageEnum }
   */
  public getXpathUsageElement(): CodeType | undefined {
    if (this.xpathUsage === undefined) {
      return undefined;
    }
    return this.xpathUsage as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `xpathUsage` property.
   *
   * @param element - the `xpathUsage` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchXpathUsageEnum }
   */
  public setXpathUsageElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SearchParameter.xpathUsage; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.xpathUsage = new EnumCodeType(element, this.searchXpathUsageEnum);
    } else {
      this.xpathUsage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `xpathUsage` property exists and has a value; `false` otherwise
   */
  public hasXpathUsageElement(): boolean {
    return this.hasXpathUsageEnumType();
  }

  /**
   * @returns the `xpathUsage` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SearchXpathUsageEnum }
   */
  public getXpathUsage(): fhirCode | undefined {
    if (this.xpathUsage === undefined) {
      return undefined;
    }
    return this.xpathUsage.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `xpathUsage` property.
   *
   * @param value - the `xpathUsage` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchXpathUsageEnum }
   */
  public setXpathUsage(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid SearchParameter.xpathUsage; Provided value is not an instance of fhirCode.`;
      this.xpathUsage = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.searchXpathUsageEnum);
    } else {
      this.xpathUsage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `xpathUsage` property exists and has a value; `false` otherwise
   */
  public hasXpathUsage(): boolean {
    return this.hasXpathUsageEnumType();
  }

  /**
   * @returns the `target` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getTargetEnumType(): EnumCodeType[] {
    return this.target ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `target` property.
   *
   * @param enumType - the `target` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setTargetEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SearchParameter.target`;
      assertEnumCodeTypeList<ResourceTypesEnum>(enumType, ResourceTypesEnum, errMsgPrefix);
      this.target = enumType;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `target` array property.
   *
   * @param enumType - the `target` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public addTargetEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SearchParameter.target`;
      assertEnumCodeType<ResourceTypesEnum>(enumType, ResourceTypesEnum, errMsgPrefix);
      this.initTarget();
      this.target?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTargetEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.target) && this.target.some((item: EnumCodeType) => !item.isEmpty()) && this.target.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `target` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getTargetElement(): CodeType[] {
    if (this.target === undefined) {
      return [] as CodeType[];
    }
    return this.target as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `target` property.
   *
   * @param element - the `target` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setTargetElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid SearchParameter.target; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.resourceTypesEnum));
      });
      this.target = enumCodeTypes;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `target` array property.
   *
   * @param element - the `target` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public addTargetElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SearchParameter.target; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initTarget();
      this.target?.push(new EnumCodeType(element, this.resourceTypesEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTargetElement(): boolean {
    return this.hasTargetEnumType();
  }

  /**
   * @returns the `target` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public getTarget(): fhirCode[] {
    if (this.target === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.target) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `target` property.
   *
   * @param value - the `target` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public setTarget(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid SearchParameter.target; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.resourceTypesEnum));
      });
      this.target = enumCodeTypes;
    } else {
      this.target = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `target` array property.
   *
   * @param value - the `target` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ResourceTypesEnum }
   */
  public addTarget(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initTarget();
      const optErrMsg = `Invalid SearchParameter.target; Provided value is not an instance of fhirCode.`;
      this.target?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.resourceTypesEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `target` property exists and has a value; `false` otherwise
   */
  public hasTarget(): boolean {
    return this.hasTargetEnumType();
  }

  /**
   * Initialize the target property
   */
  private initTarget(): void {
    if(!this.hasTargetEnumType()) {
      this.target = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `multipleOr` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getMultipleOrElement(): BooleanType {
    return this.multipleOr ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `multipleOr` property.
   *
   * @param element - the `multipleOr` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMultipleOrElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid SearchParameter.multipleOr; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.multipleOr = element;
    } else {
      this.multipleOr = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `multipleOr` property exists and has a value; `false` otherwise
   */
  public hasMultipleOrElement(): boolean {
    return isDefined<BooleanType>(this.multipleOr) && !this.multipleOr.isEmpty();
  }

  /**
   * @returns the `multipleOr` property value as a fhirBoolean if defined; else undefined
   */
  public getMultipleOr(): fhirBoolean | undefined {
    return this.multipleOr?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `multipleOr` property.
   *
   * @param value - the `multipleOr` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMultipleOr(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid SearchParameter.multipleOr (${String(value)})`;
      this.multipleOr = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.multipleOr = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `multipleOr` property exists and has a value; `false` otherwise
   */
  public hasMultipleOr(): boolean {
    return this.hasMultipleOrElement();
  }

  /**
   * @returns the `multipleAnd` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getMultipleAndElement(): BooleanType {
    return this.multipleAnd ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `multipleAnd` property.
   *
   * @param element - the `multipleAnd` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMultipleAndElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid SearchParameter.multipleAnd; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.multipleAnd = element;
    } else {
      this.multipleAnd = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `multipleAnd` property exists and has a value; `false` otherwise
   */
  public hasMultipleAndElement(): boolean {
    return isDefined<BooleanType>(this.multipleAnd) && !this.multipleAnd.isEmpty();
  }

  /**
   * @returns the `multipleAnd` property value as a fhirBoolean if defined; else undefined
   */
  public getMultipleAnd(): fhirBoolean | undefined {
    return this.multipleAnd?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `multipleAnd` property.
   *
   * @param value - the `multipleAnd` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMultipleAnd(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid SearchParameter.multipleAnd (${String(value)})`;
      this.multipleAnd = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.multipleAnd = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `multipleAnd` property exists and has a value; `false` otherwise
   */
  public hasMultipleAnd(): boolean {
    return this.hasMultipleAndElement();
  }

  /**
   * @returns the `comparator` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public getComparatorEnumType(): EnumCodeType[] {
    return this.comparator ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `comparator` property.
   *
   * @param enumType - the `comparator` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public setComparatorEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SearchParameter.comparator`;
      assertEnumCodeTypeList<SearchComparatorEnum>(enumType, SearchComparatorEnum, errMsgPrefix);
      this.comparator = enumType;
    } else {
      this.comparator = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `comparator` array property.
   *
   * @param enumType - the `comparator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public addComparatorEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SearchParameter.comparator`;
      assertEnumCodeType<SearchComparatorEnum>(enumType, SearchComparatorEnum, errMsgPrefix);
      this.initComparator();
      this.comparator?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `comparator` property exists and has a value; `false` otherwise
   */
  public hasComparatorEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.comparator) && this.comparator.some((item: EnumCodeType) => !item.isEmpty()) && this.comparator.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `comparator` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public getComparatorElement(): CodeType[] {
    if (this.comparator === undefined) {
      return [] as CodeType[];
    }
    return this.comparator as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `comparator` property.
   *
   * @param element - the `comparator` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public setComparatorElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid SearchParameter.comparator; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.searchComparatorEnum));
      });
      this.comparator = enumCodeTypes;
    } else {
      this.comparator = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `comparator` array property.
   *
   * @param element - the `comparator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public addComparatorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SearchParameter.comparator; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initComparator();
      this.comparator?.push(new EnumCodeType(element, this.searchComparatorEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `comparator` property exists and has a value; `false` otherwise
   */
  public hasComparatorElement(): boolean {
    return this.hasComparatorEnumType();
  }

  /**
   * @returns the `comparator` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public getComparator(): fhirCode[] {
    if (this.comparator === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.comparator) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `comparator` property.
   *
   * @param value - the `comparator` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public setComparator(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid SearchParameter.comparator; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.searchComparatorEnum));
      });
      this.comparator = enumCodeTypes;
    } else {
      this.comparator = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `comparator` array property.
   *
   * @param value - the `comparator` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchComparatorEnum }
   */
  public addComparator(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initComparator();
      const optErrMsg = `Invalid SearchParameter.comparator; Provided value is not an instance of fhirCode.`;
      this.comparator?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.searchComparatorEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `comparator` property exists and has a value; `false` otherwise
   */
  public hasComparator(): boolean {
    return this.hasComparatorEnumType();
  }

  /**
   * Initialize the comparator property
   */
  private initComparator(): void {
    if(!this.hasComparatorEnumType()) {
      this.comparator = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `modifier` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public getModifierEnumType(): EnumCodeType[] {
    return this.modifier ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `modifier` property.
   *
   * @param enumType - the `modifier` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public setModifierEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SearchParameter.modifier`;
      assertEnumCodeTypeList<SearchModifierCodeEnum>(enumType, SearchModifierCodeEnum, errMsgPrefix);
      this.modifier = enumType;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `modifier` array property.
   *
   * @param enumType - the `modifier` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public addModifierEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid SearchParameter.modifier`;
      assertEnumCodeType<SearchModifierCodeEnum>(enumType, SearchModifierCodeEnum, errMsgPrefix);
      this.initModifier();
      this.modifier?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifierEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.modifier) && this.modifier.some((item: EnumCodeType) => !item.isEmpty()) && this.modifier.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `modifier` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public getModifierElement(): CodeType[] {
    if (this.modifier === undefined) {
      return [] as CodeType[];
    }
    return this.modifier as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `modifier` property.
   *
   * @param element - the `modifier` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public setModifierElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid SearchParameter.modifier; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.searchModifierCodeEnum));
      });
      this.modifier = enumCodeTypes;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `modifier` array property.
   *
   * @param element - the `modifier` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public addModifierElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid SearchParameter.modifier; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initModifier();
      this.modifier?.push(new EnumCodeType(element, this.searchModifierCodeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifierElement(): boolean {
    return this.hasModifierEnumType();
  }

  /**
   * @returns the `modifier` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public getModifier(): fhirCode[] {
    if (this.modifier === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.modifier) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `modifier` property.
   *
   * @param value - the `modifier` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public setModifier(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid SearchParameter.modifier; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.searchModifierCodeEnum));
      });
      this.modifier = enumCodeTypes;
    } else {
      this.modifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `modifier` array property.
   *
   * @param value - the `modifier` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SearchModifierCodeEnum }
   */
  public addModifier(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initModifier();
      const optErrMsg = `Invalid SearchParameter.modifier; Provided value is not an instance of fhirCode.`;
      this.modifier?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.searchModifierCodeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `modifier` property exists and has a value; `false` otherwise
   */
  public hasModifier(): boolean {
    return this.hasModifierEnumType();
  }

  /**
   * Initialize the modifier property
   */
  private initModifier(): void {
    if(!this.hasModifierEnumType()) {
      this.modifier = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `chain` property value as a StringType array
   */
  public getChainElement(): StringType[] {
    return this.chain ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `chain` property.
   *
   * @param element - the `chain` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setChainElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid SearchParameter.chain; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.chain = element;
    } else {
      this.chain = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `chain` array property.
   *
   * @param element - the `chain` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addChainElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SearchParameter.chain; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initChain();
      this.chain?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `chain` property exists and has a value; `false` otherwise
   */
  public hasChainElement(): boolean {
    return isDefinedList<StringType>(this.chain) && this.chain.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `chain` property value as a fhirString array
   */
  public getChain(): fhirString[] {
    this.initChain();
    const chainValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.chain!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        chainValues.push(value);
      }
    }
    return chainValues;
  }

  /**
   * Assigns the provided primitive value array to the `chain` property.
   *
   * @param value - the `chain` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setChain(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const chainElements = [] as StringType[];
      for (const chainValue of value) {
        const optErrMsg = `Invalid SearchParameter.chain array item (${String(chainValue)})`;
        const element = new StringType(parseFhirPrimitiveData(chainValue, fhirStringSchema, optErrMsg));
        chainElements.push(element);
      }
      this.chain = chainElements;
    } else {
      this.chain = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `chain` array property.
   *
   * @param value - the `chain` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addChain(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SearchParameter.chain array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initChain();
      this.addChainElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `chain` property exists and has a value; `false` otherwise
   */
  public hasChain(): boolean {
    return this.hasChainElement();
  }

  /**
   * Initialize the `chain` property
   */
  private initChain(): void {
    if (!this.hasChain()) {
      this.chain = [] as StringType[];
    }
  }

  /**
   * @returns the `component` property value as a SearchParameterComponentComponent array
   */
  public getComponent(): SearchParameterComponentComponent[] {
    return this.component ?? ([] as SearchParameterComponentComponent[]);
  }

  /**
   * Assigns the provided SearchParameterComponentComponent array value to the `component` property.
   *
   * @param value - the `component` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComponent(value: SearchParameterComponentComponent[] | undefined): this {
    if (isDefinedList<SearchParameterComponentComponent>(value)) {
      const optErrMsg = `Invalid SearchParameter.component; Provided value array has an element that is not an instance of SearchParameterComponentComponent.`;
      assertFhirTypeList<SearchParameterComponentComponent>(value, SearchParameterComponentComponent, optErrMsg);
      this.component = value;
    } else {
      this.component = undefined;
    }
    return this;
  }

  /**
   * Add the provided SearchParameterComponentComponent value to the `component` array property.
   *
   * @param value - the `component` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComponent(value: SearchParameterComponentComponent | undefined): this {
    if (isDefined<SearchParameterComponentComponent>(value)) {
      const optErrMsg = `Invalid SearchParameter.component; Provided element is not an instance of SearchParameterComponentComponent.`;
      assertFhirType<SearchParameterComponentComponent>(value, SearchParameterComponentComponent, optErrMsg);
      this.initComponent();
      this.component?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `component` property exists and has a value; `false` otherwise
   */
  public hasComponent(): boolean {
    return isDefinedList<SearchParameterComponentComponent>(this.component) && this.component.some((item: SearchParameterComponentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `component` property
   */
  private initComponent(): void {
    if(!this.hasComponent()) {
      this.component = [] as SearchParameterComponentComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SearchParameter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
      this.version,
      this.name,
      this.derivedFrom,
      this.status,
      this.experimental,
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.useContext,
      this.jurisdiction,
      this.purpose,
      this.code,
      this.base,
      this.type_,
      this.expression,
      this.xpath,
      this.xpathUsage,
      this.target,
      this.multipleOr,
      this.multipleAnd,
      this.comparator,
      this.modifier,
      this.chain,
      this.component,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SearchParameter {
    const dest = new SearchParameter();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SearchParameter): void {
    super.copyValues(dest);
    dest.url = this.url ? this.url.copy() : null;
    dest.version = this.version?.copy();
    dest.name = this.name ? this.name.copy() : null;
    dest.derivedFrom = this.derivedFrom?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.experimental = this.experimental?.copy();
    dest.date = this.date?.copy();
    dest.publisher = this.publisher?.copy();
    const contactList = copyListValues<ContactDetail>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.description = this.description ? this.description.copy() : null;
    const useContextList = copyListValues<UsageContext>(this.useContext);
    dest.useContext = useContextList.length === 0 ? undefined : useContextList;
    const jurisdictionList = copyListValues<CodeableConcept>(this.jurisdiction);
    dest.jurisdiction = jurisdictionList.length === 0 ? undefined : jurisdictionList;
    dest.purpose = this.purpose?.copy();
    dest.code = this.code ? this.code.copy() : null;
    const baseList = copyListValues<EnumCodeType>(this.base);
    dest.base = baseList.length === 0 ? null : baseList;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.expression = this.expression?.copy();
    dest.xpath = this.xpath?.copy();
    dest.xpathUsage = this.xpathUsage?.copy();
    const targetList = copyListValues<EnumCodeType>(this.target);
    dest.target = targetList.length === 0 ? undefined : targetList;
    dest.multipleOr = this.multipleOr?.copy();
    dest.multipleAnd = this.multipleAnd?.copy();
    const comparatorList = copyListValues<EnumCodeType>(this.comparator);
    dest.comparator = comparatorList.length === 0 ? undefined : comparatorList;
    const modifierList = copyListValues<EnumCodeType>(this.modifier);
    dest.modifier = modifierList.length === 0 ? undefined : modifierList;
    const chainList = copyListValues<StringType>(this.chain);
    dest.chain = chainList.length === 0 ? undefined : chainList;
    const componentList = copyListValues<SearchParameterComponentComponent>(this.component);
    dest.component = componentList.length === 0 ? undefined : componentList;
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirUri>(this.getUrlElement()!, 'url', jsonObj);
    } else {
      missingReqdProperties.push(`SearchParameter.url`);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasNameElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`SearchParameter.name`);
    }

    if (this.hasDerivedFromElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getDerivedFromElement(), 'derivedFrom', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`SearchParameter.status`);
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement()!, 'description', jsonObj);
    } else {
      missingReqdProperties.push(`SearchParameter.description`);
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

    if (this.hasCodeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCodeElement()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`SearchParameter.code`);
    }

    if (this.hasBaseElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getBaseElement(), 'base', jsonObj);
    } else {
      missingReqdProperties.push(`SearchParameter.base`);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`SearchParameter.type`);
    }

    if (this.hasExpressionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getExpressionElement(), 'expression', jsonObj);
    }

    if (this.hasXpathElement()) {
      setFhirPrimitiveJson<fhirString>(this.getXpathElement(), 'xpath', jsonObj);
    }

    if (this.hasXpathUsageElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getXpathUsageElement()!, 'xpathUsage', jsonObj);
    }

    if (this.hasTargetElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getTargetElement(), 'target', jsonObj);
    }

    if (this.hasMultipleOrElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getMultipleOrElement(), 'multipleOr', jsonObj);
    }

    if (this.hasMultipleAndElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getMultipleAndElement(), 'multipleAnd', jsonObj);
    }

    if (this.hasComparatorElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getComparatorElement(), 'comparator', jsonObj);
    }

    if (this.hasModifierElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getModifierElement(), 'modifier', jsonObj);
    }

    if (this.hasChain()) {
      setFhirPrimitiveListJson(this.getChainElement(), 'chain', jsonObj);
    }

    if (this.hasComponent()) {
      setFhirBackboneElementListJson(this.getComponent(), 'component', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * SearchParameterComponentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** For Composite resources to define the parts
 * - **Definition:** Used to define the parts of a composite search parameter.
 *
 * @category Data Models: Resource
 * @see [FHIR SearchParameter](http://hl7.org/fhir/StructureDefinition/SearchParameter)
 */
export class SearchParameterComponentComponent extends BackboneElement implements IBackboneElement {
  constructor(definition: CanonicalType | fhirCanonical | null = null, expression: StringType | fhirString | null = null) {
    super();

    this.definition = null;
    if (isDefined<CanonicalType | fhirCanonical>(definition)) {
      if (definition instanceof PrimitiveType) {
        this.setDefinitionElement(definition);
      } else {
        this.setDefinition(definition);
      }
    }

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
   * Parse the provided `SearchParameterComponentComponent` JSON to instantiate the SearchParameterComponentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SearchParameterComponentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SearchParameterComponentComponent
   * @returns SearchParameterComponentComponent data model or undefined for `SearchParameterComponentComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SearchParameterComponentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SearchParameterComponentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SearchParameterComponentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setDefinitionElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setExpressionElement(datatype);
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
   * SearchParameter.component.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defines how the part works
   * - **Definition:** The definition of the search parameter that describes this part.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SearchParameter',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definition: CanonicalType | null;

  /**
   * SearchParameter.component.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subexpression relative to main expression
   * - **Definition:** A sub-expression that defines how to extract values for this component from the output of the main SearchParameter.expression.
   * - **Comment:** This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression: StringType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `definition` property value as a CanonicalType object if defined; else null
   */
  public getDefinitionElement(): CanonicalType | null {
    return this.definition;
  }

  /**
   * Assigns the provided PrimitiveType value to the `definition` property.
   *
   * @param element - the `definition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionElement(element: CanonicalType): this {
    assertIsDefined<CanonicalType>(element, `SearchParameter.component.definition is required`);
    const optErrMsg = `Invalid SearchParameter.component.definition; Provided value is not an instance of CanonicalType.`;
    assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
    this.definition = element;
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
  public setDefinition(value: fhirCanonical): this {
    assertIsDefined<fhirCanonical>(value, `SearchParameter.component.definition is required`);
    const optErrMsg = `Invalid SearchParameter.component.definition (${String(value)})`;
    this.definition = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinition(): boolean {
    return this.hasDefinitionElement();
  }

  /**
   * @returns the `expression` property value as a StringType object if defined; else null
   */
  public getExpressionElement(): StringType | null {
    return this.expression;
  }

  /**
   * Assigns the provided PrimitiveType value to the `expression` property.
   *
   * @param element - the `expression` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExpressionElement(element: StringType): this {
    assertIsDefined<StringType>(element, `SearchParameter.component.expression is required`);
    const optErrMsg = `Invalid SearchParameter.component.expression; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.expression = element;
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
  public setExpression(value: fhirString): this {
    assertIsDefined<fhirString>(value, `SearchParameter.component.expression is required`);
    const optErrMsg = `Invalid SearchParameter.component.expression (${String(value)})`;
    this.expression = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
    return 'SearchParameter.component';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.definition,
      this.expression,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SearchParameterComponentComponent {
    const dest = new SearchParameterComponentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SearchParameterComponentComponent): void {
    super.copyValues(dest);
    dest.definition = this.definition ? this.definition.copy() : null;
    dest.expression = this.expression ? this.expression.copy() : null;
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

    if (this.hasDefinitionElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCanonical>(this.getDefinitionElement()!, 'definition', jsonObj);
    } else {
      missingReqdProperties.push(`SearchParameter.component.definition`);
    }

    if (this.hasExpressionElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getExpressionElement()!, 'expression', jsonObj);
    } else {
      missingReqdProperties.push(`SearchParameter.component.expression`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
