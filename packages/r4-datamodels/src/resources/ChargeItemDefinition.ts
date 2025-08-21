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
 * ChargeItemDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition
 * StructureDefinition.name: ChargeItemDefinition
 * StructureDefinition.description: The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
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
  DateType,
  DecimalType,
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
  fhirCanonical,
  fhirCanonicalSchema,
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
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, ContactDetail, Identifier, Money, PARSABLE_DATATYPE_MAP, Period, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { InvoicePriceComponentTypeEnum } from '../code-systems/InvoicePriceComponentTypeEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

/**
 * ChargeItemDefinition Class
 *
 * @remarks
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 *
 * **FHIR Specification**
 * - **Short:** Definition of properties and rules about how the price and the applicability of a ChargeItem can be determined
 * - **Definition:** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR ChargeItemDefinition](http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition)
 */
export class ChargeItemDefinition extends DomainResource implements IDomainResource {
  constructor(url: UriType | fhirUri | null = null, status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.url = null;
    if (isDefined<UriType | fhirUri>(url)) {
      if (url instanceof PrimitiveType) {
        this.setUrlElement(url);
      } else {
        this.setUrl(url);
      }
    }

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'ChargeItemDefinition.status',
    );
  }

  /**
   * Parse the provided `ChargeItemDefinition` JSON to instantiate the ChargeItemDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `ChargeItemDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ChargeItemDefinition
   * @returns ChargeItemDefinition data model or undefined for `ChargeItemDefinition`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ChargeItemDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ChargeItemDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ChargeItemDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ChargeItemDefinition');
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

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    fieldName = 'derivedFromUri';
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
          instance.addDerivedFromUriElement(datatype);
        }
      });
    }

    fieldName = 'partOf';
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
          instance.addPartOfElement(datatype);
        }
      });
    }

    fieldName = 'replaces';
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
          instance.addReplacesElement(datatype);
        }
      });
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

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'instance';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addInstance(datatype);
        }
      });
  }

    fieldName = 'applicability';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ChargeItemDefinitionApplicabilityComponent | undefined = ChargeItemDefinitionApplicabilityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addApplicability(component);
        }
      });
    }

    fieldName = 'propertyGroup';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ChargeItemDefinitionPropertyGroupComponent | undefined = ChargeItemDefinitionPropertyGroupComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPropertyGroup(component);
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
   * ChargeItemDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this charge item definition, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this charge item definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this charge item definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the charge item definition is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the charge item definition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url: UriType | null;

  /**
   * ChargeItemDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the charge item definition
   * - **Definition:** A formal identifier that is used to identify this charge item definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this charge item definition outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * ChargeItemDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the charge item definition
   * - **Definition:** The identifier that is used to identify this version of the charge item definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the charge item definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.
   * - **Comment:** There may be different charge item definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the charge item definition with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * ChargeItemDefinition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this charge item definition (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the charge item definition.
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * ChargeItemDefinition.derivedFromUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Underlying externally-defined charge item definition
   * - **Definition:** The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private derivedFromUri?: UriType[] | undefined;

  /**
   * ChargeItemDefinition.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A larger definition of which this particular definition is a component or step
   * - **Definition:** A larger definition of which this particular definition is a component or step.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partOf?: CanonicalType[] | undefined;

  /**
   * ChargeItemDefinition.replaces Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Completed or terminated request(s) whose function is taken by this new request
   * - **Definition:** As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition',
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
   * ChargeItemDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The current state of the ChargeItemDefinition.
   * - **Comment:** Allows filtering of charge item definitions that are appropriate for use versus not.
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
   * ChargeItemDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this charge item definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of charge item definitions that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level charge item definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * ChargeItemDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the charge item definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the charge item definition changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the charge item definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * ChargeItemDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the charge item definition.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the charge item definition is the organization or individual primarily responsible for the maintenance and upkeep of the charge item definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the charge item definition. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the charge item definition.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * ChargeItemDefinition.contact Element
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
   * ChargeItemDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the charge item definition
   * - **Definition:** A free text natural language description of the charge item definition from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the charge item definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the charge item definition as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the charge item definition is presumed to be the predominant language in the place the charge item definition was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * ChargeItemDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate charge item definition instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * ChargeItemDefinition.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for charge item definition (if applicable)
   * - **Definition:** A legal or geographic region in which the charge item definition is intended to be used.
   * - **Comment:** It may be possible for the charge item definition to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * ChargeItemDefinition.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the charge item definition and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * ChargeItemDefinition.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the charge item definition was approved by publisher
   * - **Definition:** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The \'date\' element may be more recent than the approval date because of minor changes or editorial corrections.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * ChargeItemDefinition.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the charge item definition was last reviewed
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
   * ChargeItemDefinition.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the charge item definition is expected to be used
   * - **Definition:** The period during which the charge item definition content was or is planned to be in active use.
   * - **Comment:** The effective period for a charge item definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   * - **Requirements:** Allows establishing a transition before a resource comes into effect and also allows for a sunsetting  process when new versions of the charge item definition are or are expected to be used instead.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectivePeriod?: Period | undefined;

  /**
   * ChargeItemDefinition.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Billing codes or product types this definition applies to
   * - **Definition:** The defined billing details in this resource pertain to the given billing code.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * ChargeItemDefinition.instance Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instances this definition applies to
   * - **Definition:** The defined billing details in this resource pertain to the given product instance(s).
   * - **Comment:** In case of highly customized, individually produced or fitted devices/substances, the pricing information may be different for each instance of the product. This reference links pricing details to specific product instances.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instance?: Reference[] | undefined;

  /**
   * ChargeItemDefinition.applicability Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether or not the billing code is applicable
   * - **Definition:** Expressions that describe applicability criteria for the billing code.
   * - **Comment:** The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private applicability?: ChargeItemDefinitionApplicabilityComponent[] | undefined;

  /**
   * ChargeItemDefinition.propertyGroup Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Group of properties which are applicable under the same conditions
   * - **Definition:** Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private propertyGroup?: ChargeItemDefinitionPropertyGroupComponent[] | undefined;

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
    assertIsDefined<UriType>(element, `ChargeItemDefinition.url is required`);
    const optErrMsg = `Invalid ChargeItemDefinition.url; Provided value is not an instance of UriType.`;
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
    assertIsDefined<fhirUri>(value, `ChargeItemDefinition.url is required`);
    const optErrMsg = `Invalid ChargeItemDefinition.url (${String(value)})`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.version (${String(value)})`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.title (${String(value)})`;
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
   * @returns the `derivedFromUri` property value as a UriType array
   */
  public getDerivedFromUriElement(): UriType[] {
    return this.derivedFromUri ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `derivedFromUri` property.
   *
   * @param element - the `derivedFromUri` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDerivedFromUriElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid ChargeItemDefinition.derivedFromUri; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.derivedFromUri = element;
    } else {
      this.derivedFromUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `derivedFromUri` array property.
   *
   * @param element - the `derivedFromUri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDerivedFromUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid ChargeItemDefinition.derivedFromUri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initDerivedFromUri();
      this.derivedFromUri?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFromUri` property exists and has a value; `false` otherwise
   */
  public hasDerivedFromUriElement(): boolean {
    return isDefinedList<UriType>(this.derivedFromUri) && this.derivedFromUri.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `derivedFromUri` property value as a fhirUri array
   */
  public getDerivedFromUri(): fhirUri[] {
    this.initDerivedFromUri();
    const derivedFromUriValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.derivedFromUri!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        derivedFromUriValues.push(value);
      }
    }
    return derivedFromUriValues;
  }

  /**
   * Assigns the provided primitive value array to the `derivedFromUri` property.
   *
   * @param value - the `derivedFromUri` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDerivedFromUri(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const derivedFromUriElements = [] as UriType[];
      for (const derivedFromUriValue of value) {
        const optErrMsg = `Invalid ChargeItemDefinition.derivedFromUri array item (${String(derivedFromUriValue)})`;
        const element = new UriType(parseFhirPrimitiveData(derivedFromUriValue, fhirUriSchema, optErrMsg));
        derivedFromUriElements.push(element);
      }
      this.derivedFromUri = derivedFromUriElements;
    } else {
      this.derivedFromUri = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `derivedFromUri` array property.
   *
   * @param value - the `derivedFromUri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDerivedFromUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.derivedFromUri array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initDerivedFromUri();
      this.addDerivedFromUriElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFromUri` property exists and has a value; `false` otherwise
   */
  public hasDerivedFromUri(): boolean {
    return this.hasDerivedFromUriElement();
  }

  /**
   * Initialize the `derivedFromUri` property
   */
  private initDerivedFromUri(): void {
    if (!this.hasDerivedFromUri()) {
      this.derivedFromUri = [] as UriType[];
    }
  }

  /**
   * @returns the `partOf` property value as a CanonicalType array
   */
  public getPartOfElement(): CanonicalType[] {
    return this.partOf ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `partOf` property.
   *
   * @param element - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPartOfElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid ChargeItemDefinition.partOf; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.partOf = element;
    } else {
      this.partOf = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `partOf` array property.
   *
   * @param element - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPartOfElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ChargeItemDefinition.partOf; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initPartOf();
      this.partOf?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `partOf` property exists and has a value; `false` otherwise
   */
  public hasPartOfElement(): boolean {
    return isDefinedList<CanonicalType>(this.partOf) && this.partOf.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `partOf` property value as a fhirCanonical array
   */
  public getPartOf(): fhirCanonical[] {
    this.initPartOf();
    const partOfValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.partOf!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        partOfValues.push(value);
      }
    }
    return partOfValues;
  }

  /**
   * Assigns the provided primitive value array to the `partOf` property.
   *
   * @param value - the `partOf` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPartOf(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const partOfElements = [] as CanonicalType[];
      for (const partOfValue of value) {
        const optErrMsg = `Invalid ChargeItemDefinition.partOf array item (${String(partOfValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(partOfValue, fhirCanonicalSchema, optErrMsg));
        partOfElements.push(element);
      }
      this.partOf = partOfElements;
    } else {
      this.partOf = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `partOf` array property.
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPartOf(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.partOf array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initPartOf();
      this.addPartOfElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `partOf` property exists and has a value; `false` otherwise
   */
  public hasPartOf(): boolean {
    return this.hasPartOfElement();
  }

  /**
   * Initialize the `partOf` property
   */
  private initPartOf(): void {
    if (!this.hasPartOf()) {
      this.partOf = [] as CanonicalType[];
    }
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
      const optErrMsg = `Invalid ChargeItemDefinition.replaces; Provided value array has an element that is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.replaces; Provided element is not an instance of CanonicalType.`;
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
        const optErrMsg = `Invalid ChargeItemDefinition.replaces array item (${String(replacesValue)})`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.replaces array item (${String(value)})`;
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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ChargeItemDefinition.status is required`);
    const errMsgPrefix = `Invalid ChargeItemDefinition.status`;
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
    assertIsDefined<CodeType>(element, `ChargeItemDefinition.status is required`);
    const optErrMsg = `Invalid ChargeItemDefinition.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `ChargeItemDefinition.status is required`);
    const optErrMsg = `Invalid ChargeItemDefinition.status (${String(value)})`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.approvalDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.approvalDate (${String(value)})`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.lastReviewDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.lastReviewDate (${String(value)})`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.effectivePeriod; Provided element is not an instance of Period.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.code; Provided element is not an instance of CodeableConcept.`;
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

  /**
   * @returns the `instance` property value as a Reference array
   */
  public getInstance(): Reference[] {
    return this.instance ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `instance` property.
   *
   * @decorator `@ReferenceTargets('ChargeItemDefinition.instance', ['Medication','Substance','Device',])`
   *
   * @param value - the `instance` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItemDefinition.instance', [
    'Medication',
  
    'Substance',
  
    'Device',
  ])
  public setInstance(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.instance = value;
    } else {
      this.instance = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `instance` array property.
   *
   * @decorator `@ReferenceTargets('ChargeItemDefinition.instance', ['Medication','Substance','Device',])`
   *
   * @param value - the `instance` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ChargeItemDefinition.instance', [
    'Medication',
  
    'Substance',
  
    'Device',
  ])
  public addInstance(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initInstance();
      this.instance?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `instance` property exists and has a value; `false` otherwise
   */
  public hasInstance(): boolean {
    return isDefinedList<Reference>(this.instance) && this.instance.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `instance` property
   */
  private initInstance(): void {
    if (!this.hasInstance()) {
      this.instance = [] as Reference[];
    }
  }

  /**
   * @returns the `applicability` property value as a ChargeItemDefinitionApplicabilityComponent array
   */
  public getApplicability(): ChargeItemDefinitionApplicabilityComponent[] {
    return this.applicability ?? ([] as ChargeItemDefinitionApplicabilityComponent[]);
  }

  /**
   * Assigns the provided ChargeItemDefinitionApplicabilityComponent array value to the `applicability` property.
   *
   * @param value - the `applicability` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setApplicability(value: ChargeItemDefinitionApplicabilityComponent[] | undefined): this {
    if (isDefinedList<ChargeItemDefinitionApplicabilityComponent>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.applicability; Provided value array has an element that is not an instance of ChargeItemDefinitionApplicabilityComponent.`;
      assertFhirTypeList<ChargeItemDefinitionApplicabilityComponent>(value, ChargeItemDefinitionApplicabilityComponent, optErrMsg);
      this.applicability = value;
    } else {
      this.applicability = undefined;
    }
    return this;
  }

  /**
   * Add the provided ChargeItemDefinitionApplicabilityComponent value to the `applicability` array property.
   *
   * @param value - the `applicability` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addApplicability(value: ChargeItemDefinitionApplicabilityComponent | undefined): this {
    if (isDefined<ChargeItemDefinitionApplicabilityComponent>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.applicability; Provided element is not an instance of ChargeItemDefinitionApplicabilityComponent.`;
      assertFhirType<ChargeItemDefinitionApplicabilityComponent>(value, ChargeItemDefinitionApplicabilityComponent, optErrMsg);
      this.initApplicability();
      this.applicability?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `applicability` property exists and has a value; `false` otherwise
   */
  public hasApplicability(): boolean {
    return isDefinedList<ChargeItemDefinitionApplicabilityComponent>(this.applicability) && this.applicability.some((item: ChargeItemDefinitionApplicabilityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `applicability` property
   */
  private initApplicability(): void {
    if(!this.hasApplicability()) {
      this.applicability = [] as ChargeItemDefinitionApplicabilityComponent[];
    }
  }

  /**
   * @returns the `propertyGroup` property value as a ChargeItemDefinitionPropertyGroupComponent array
   */
  public getPropertyGroup(): ChargeItemDefinitionPropertyGroupComponent[] {
    return this.propertyGroup ?? ([] as ChargeItemDefinitionPropertyGroupComponent[]);
  }

  /**
   * Assigns the provided ChargeItemDefinitionPropertyGroupComponent array value to the `propertyGroup` property.
   *
   * @param value - the `propertyGroup` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPropertyGroup(value: ChargeItemDefinitionPropertyGroupComponent[] | undefined): this {
    if (isDefinedList<ChargeItemDefinitionPropertyGroupComponent>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup; Provided value array has an element that is not an instance of ChargeItemDefinitionPropertyGroupComponent.`;
      assertFhirTypeList<ChargeItemDefinitionPropertyGroupComponent>(value, ChargeItemDefinitionPropertyGroupComponent, optErrMsg);
      this.propertyGroup = value;
    } else {
      this.propertyGroup = undefined;
    }
    return this;
  }

  /**
   * Add the provided ChargeItemDefinitionPropertyGroupComponent value to the `propertyGroup` array property.
   *
   * @param value - the `propertyGroup` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPropertyGroup(value: ChargeItemDefinitionPropertyGroupComponent | undefined): this {
    if (isDefined<ChargeItemDefinitionPropertyGroupComponent>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup; Provided element is not an instance of ChargeItemDefinitionPropertyGroupComponent.`;
      assertFhirType<ChargeItemDefinitionPropertyGroupComponent>(value, ChargeItemDefinitionPropertyGroupComponent, optErrMsg);
      this.initPropertyGroup();
      this.propertyGroup?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `propertyGroup` property exists and has a value; `false` otherwise
   */
  public hasPropertyGroup(): boolean {
    return isDefinedList<ChargeItemDefinitionPropertyGroupComponent>(this.propertyGroup) && this.propertyGroup.some((item: ChargeItemDefinitionPropertyGroupComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `propertyGroup` property
   */
  private initPropertyGroup(): void {
    if(!this.hasPropertyGroup()) {
      this.propertyGroup = [] as ChargeItemDefinitionPropertyGroupComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ChargeItemDefinition';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.url,
      this.identifier,
      this.version,
      this.title,
      this.derivedFromUri,
      this.partOf,
      this.replaces,
      this.status,
      this.experimental,
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.useContext,
      this.jurisdiction,
      this.copyright,
      this.approvalDate,
      this.lastReviewDate,
      this.effectivePeriod,
      this.code,
      this.instance,
      this.applicability,
      this.propertyGroup,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ChargeItemDefinition {
    const dest = new ChargeItemDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ChargeItemDefinition): void {
    super.copyValues(dest);
    dest.url = this.url ? this.url.copy() : null;
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.title = this.title?.copy();
    const derivedFromUriList = copyListValues<UriType>(this.derivedFromUri);
    dest.derivedFromUri = derivedFromUriList.length === 0 ? undefined : derivedFromUriList;
    const partOfList = copyListValues<CanonicalType>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    const replacesList = copyListValues<CanonicalType>(this.replaces);
    dest.replaces = replacesList.length === 0 ? undefined : replacesList;
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
    dest.copyright = this.copyright?.copy();
    dest.approvalDate = this.approvalDate?.copy();
    dest.lastReviewDate = this.lastReviewDate?.copy();
    dest.effectivePeriod = this.effectivePeriod?.copy();
    dest.code = this.code?.copy();
    const instanceList = copyListValues<Reference>(this.instance);
    dest.instance = instanceList.length === 0 ? undefined : instanceList;
    const applicabilityList = copyListValues<ChargeItemDefinitionApplicabilityComponent>(this.applicability);
    dest.applicability = applicabilityList.length === 0 ? undefined : applicabilityList;
    const propertyGroupList = copyListValues<ChargeItemDefinitionPropertyGroupComponent>(this.propertyGroup);
    dest.propertyGroup = propertyGroupList.length === 0 ? undefined : propertyGroupList;
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
      missingReqdProperties.push(`ChargeItemDefinition.url`);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasVersionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getVersionElement(), 'version', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasDerivedFromUri()) {
      setFhirPrimitiveListJson(this.getDerivedFromUriElement(), 'derivedFromUri', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirPrimitiveListJson(this.getPartOfElement(), 'partOf', jsonObj);
    }

    if (this.hasReplaces()) {
      setFhirPrimitiveListJson(this.getReplacesElement(), 'replaces', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`ChargeItemDefinition.status`);
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasInstance()) {
      setFhirComplexListJson(this.getInstance(), 'instance', jsonObj);
    }

    if (this.hasApplicability()) {
      setFhirBackboneElementListJson(this.getApplicability(), 'applicability', jsonObj);
    }

    if (this.hasPropertyGroup()) {
      setFhirBackboneElementListJson(this.getPropertyGroup(), 'propertyGroup', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ChargeItemDefinitionApplicabilityComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Whether or not the billing code is applicable
 * - **Definition:** Expressions that describe applicability criteria for the billing code.
 * - **Comment:** The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
 *
 * @category Data Models: Resource
 * @see [FHIR ChargeItemDefinition](http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition)
 */
export class ChargeItemDefinitionApplicabilityComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ChargeItemDefinitionApplicabilityComponent` JSON to instantiate the ChargeItemDefinitionApplicabilityComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ChargeItemDefinitionApplicabilityComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ChargeItemDefinitionApplicabilityComponent
   * @returns ChargeItemDefinitionApplicabilityComponent data model or undefined for `ChargeItemDefinitionApplicabilityComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ChargeItemDefinitionApplicabilityComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ChargeItemDefinitionApplicabilityComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ChargeItemDefinitionApplicabilityComponent();

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

    fieldName = 'language';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setLanguageElement(datatype);
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setExpressionElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ChargeItemDefinition.applicability.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the condition
   * - **Definition:** A brief, natural language description of the condition that effectively communicates the intended semantics.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * ChargeItemDefinition.applicability.language Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Language of the expression
   * - **Definition:** The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private language?: StringType | undefined;

  /**
   * ChargeItemDefinition.applicability.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Boolean-valued expression
   * - **Definition:** An expression that returns true or false, indicating whether the condition is satisfied. When using FHIRPath expressions, the %context environment variable must be replaced at runtime with the ChargeItem resource to which this definition is applied.
   * - **Comment:** Please note that FHIRPath Expressions can only be evaluated in the scope of the current ChargeItem resource to which this definition is being applied. FHIRPath expressions can traverse into other resources linked from the ChargeItem resource, however, testing rules such as that a billing code may be billed only once per encounter need a wider scope. In such scenarios, CQL may be the appropriate choice.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression?: StringType | undefined;

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
      const optErrMsg = `Invalid ChargeItemDefinition.applicability.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.applicability.description (${String(value)})`;
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
   * @returns the `language` property value as a StringType object if defined; else an empty StringType object
   */
  public getLanguageElement(): StringType {
    return this.language ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `language` property.
   *
   * @param element - the `language` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguageElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ChargeItemDefinition.applicability.language; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
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
    return isDefined<StringType>(this.language) && !this.language.isEmpty();
  }

  /**
   * @returns the `language` property value as a fhirString if defined; else undefined
   */
  public getLanguage(): fhirString | undefined {
    return this.language?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `language` property.
   *
   * @param value - the `language` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLanguage(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.applicability.language (${String(value)})`;
      this.language = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
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
      const optErrMsg = `Invalid ChargeItemDefinition.applicability.expression; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ChargeItemDefinition.applicability.expression (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ChargeItemDefinition.applicability';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.language,
      this.expression,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ChargeItemDefinitionApplicabilityComponent {
    const dest = new ChargeItemDefinitionApplicabilityComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ChargeItemDefinitionApplicabilityComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.language = this.language?.copy();
    dest.expression = this.expression?.copy();
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

    if (this.hasLanguageElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLanguageElement(), 'language', jsonObj);
    }

    if (this.hasExpressionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getExpressionElement(), 'expression', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ChargeItemDefinitionPropertyGroupComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Group of properties which are applicable under the same conditions
 * - **Definition:** Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
 *
 * @category Data Models: Resource
 * @see [FHIR ChargeItemDefinition](http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition)
 */
export class ChargeItemDefinitionPropertyGroupComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ChargeItemDefinitionPropertyGroupComponent` JSON to instantiate the ChargeItemDefinitionPropertyGroupComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ChargeItemDefinitionPropertyGroupComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ChargeItemDefinitionPropertyGroupComponent
   * @returns ChargeItemDefinitionPropertyGroupComponent data model or undefined for `ChargeItemDefinitionPropertyGroupComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ChargeItemDefinitionPropertyGroupComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ChargeItemDefinitionPropertyGroupComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ChargeItemDefinitionPropertyGroupComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'applicability';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ChargeItemDefinitionApplicabilityComponent | undefined = ChargeItemDefinitionApplicabilityComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addApplicability(component);
        }
      });
    }

    fieldName = 'priceComponent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ChargeItemDefinitionPropertyGroupPriceComponentComponent | undefined = ChargeItemDefinitionPropertyGroupPriceComponentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPriceComponent(component);
        }
      });
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ChargeItemDefinition.propertyGroup.applicability Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Conditions under which the priceComponent is applicable
   * - **Definition:** Expressions that describe applicability criteria for the priceComponent.
   * - **Comment:** The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private applicability?: ChargeItemDefinitionApplicabilityComponent[] | undefined;

  /**
   * ChargeItemDefinition.propertyGroup.priceComponent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Components of total line item price
   * - **Definition:** The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private priceComponent?: ChargeItemDefinitionPropertyGroupPriceComponentComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `applicability` property value as a ChargeItemDefinitionApplicabilityComponent array
   */
  public getApplicability(): ChargeItemDefinitionApplicabilityComponent[] {
    return this.applicability ?? ([] as ChargeItemDefinitionApplicabilityComponent[]);
  }

  /**
   * Assigns the provided ChargeItemDefinitionApplicabilityComponent array value to the `applicability` property.
   *
   * @param value - the `applicability` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setApplicability(value: ChargeItemDefinitionApplicabilityComponent[] | undefined): this {
    if (isDefinedList<ChargeItemDefinitionApplicabilityComponent>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup.applicability; Provided value array has an element that is not an instance of ChargeItemDefinitionApplicabilityComponent.`;
      assertFhirTypeList<ChargeItemDefinitionApplicabilityComponent>(value, ChargeItemDefinitionApplicabilityComponent, optErrMsg);
      this.applicability = value;
    } else {
      this.applicability = undefined;
    }
    return this;
  }

  /**
   * Add the provided ChargeItemDefinitionApplicabilityComponent value to the `applicability` array property.
   *
   * @param value - the `applicability` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addApplicability(value: ChargeItemDefinitionApplicabilityComponent | undefined): this {
    if (isDefined<ChargeItemDefinitionApplicabilityComponent>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup.applicability; Provided element is not an instance of ChargeItemDefinitionApplicabilityComponent.`;
      assertFhirType<ChargeItemDefinitionApplicabilityComponent>(value, ChargeItemDefinitionApplicabilityComponent, optErrMsg);
      this.initApplicability();
      this.applicability?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `applicability` property exists and has a value; `false` otherwise
   */
  public hasApplicability(): boolean {
    return isDefinedList<ChargeItemDefinitionApplicabilityComponent>(this.applicability) && this.applicability.some((item: ChargeItemDefinitionApplicabilityComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `applicability` property
   */
  private initApplicability(): void {
    if(!this.hasApplicability()) {
      this.applicability = [] as ChargeItemDefinitionApplicabilityComponent[];
    }
  }

  /**
   * @returns the `priceComponent` property value as a ChargeItemDefinitionPropertyGroupPriceComponentComponent array
   */
  public getPriceComponent(): ChargeItemDefinitionPropertyGroupPriceComponentComponent[] {
    return this.priceComponent ?? ([] as ChargeItemDefinitionPropertyGroupPriceComponentComponent[]);
  }

  /**
   * Assigns the provided ChargeItemDefinitionPropertyGroupPriceComponentComponent array value to the `priceComponent` property.
   *
   * @param value - the `priceComponent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPriceComponent(value: ChargeItemDefinitionPropertyGroupPriceComponentComponent[] | undefined): this {
    if (isDefinedList<ChargeItemDefinitionPropertyGroupPriceComponentComponent>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup.priceComponent; Provided value array has an element that is not an instance of ChargeItemDefinitionPropertyGroupPriceComponentComponent.`;
      assertFhirTypeList<ChargeItemDefinitionPropertyGroupPriceComponentComponent>(value, ChargeItemDefinitionPropertyGroupPriceComponentComponent, optErrMsg);
      this.priceComponent = value;
    } else {
      this.priceComponent = undefined;
    }
    return this;
  }

  /**
   * Add the provided ChargeItemDefinitionPropertyGroupPriceComponentComponent value to the `priceComponent` array property.
   *
   * @param value - the `priceComponent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPriceComponent(value: ChargeItemDefinitionPropertyGroupPriceComponentComponent | undefined): this {
    if (isDefined<ChargeItemDefinitionPropertyGroupPriceComponentComponent>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup.priceComponent; Provided element is not an instance of ChargeItemDefinitionPropertyGroupPriceComponentComponent.`;
      assertFhirType<ChargeItemDefinitionPropertyGroupPriceComponentComponent>(value, ChargeItemDefinitionPropertyGroupPriceComponentComponent, optErrMsg);
      this.initPriceComponent();
      this.priceComponent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `priceComponent` property exists and has a value; `false` otherwise
   */
  public hasPriceComponent(): boolean {
    return isDefinedList<ChargeItemDefinitionPropertyGroupPriceComponentComponent>(this.priceComponent) && this.priceComponent.some((item: ChargeItemDefinitionPropertyGroupPriceComponentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `priceComponent` property
   */
  private initPriceComponent(): void {
    if(!this.hasPriceComponent()) {
      this.priceComponent = [] as ChargeItemDefinitionPropertyGroupPriceComponentComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ChargeItemDefinition.propertyGroup';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.applicability,
      this.priceComponent,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ChargeItemDefinitionPropertyGroupComponent {
    const dest = new ChargeItemDefinitionPropertyGroupComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ChargeItemDefinitionPropertyGroupComponent): void {
    super.copyValues(dest);
    const applicabilityList = copyListValues<ChargeItemDefinitionApplicabilityComponent>(this.applicability);
    dest.applicability = applicabilityList.length === 0 ? undefined : applicabilityList;
    const priceComponentList = copyListValues<ChargeItemDefinitionPropertyGroupPriceComponentComponent>(this.priceComponent);
    dest.priceComponent = priceComponentList.length === 0 ? undefined : priceComponentList;
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

    if (this.hasApplicability()) {
      setFhirBackboneElementListJson(this.getApplicability(), 'applicability', jsonObj);
    }

    if (this.hasPriceComponent()) {
      setFhirBackboneElementListJson(this.getPriceComponent(), 'priceComponent', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ChargeItemDefinitionPropertyGroupPriceComponentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Components of total line item price
 * - **Definition:** The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
 *
 * @category Data Models: Resource
 * @see [FHIR ChargeItemDefinition](http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition)
 */
export class ChargeItemDefinitionPropertyGroupPriceComponentComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.invoicePriceComponentTypeEnum = new InvoicePriceComponentTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<InvoicePriceComponentTypeEnum>(
      type_,
      InvoicePriceComponentTypeEnum,
      this.invoicePriceComponentTypeEnum,
      'ChargeItemDefinition.propertyGroup.priceComponent.type',
    );
  }

  /**
   * Parse the provided `ChargeItemDefinitionPropertyGroupPriceComponentComponent` JSON to instantiate the ChargeItemDefinitionPropertyGroupPriceComponentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ChargeItemDefinitionPropertyGroupPriceComponentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ChargeItemDefinitionPropertyGroupPriceComponentComponent
   * @returns ChargeItemDefinitionPropertyGroupPriceComponentComponent data model or undefined for `ChargeItemDefinitionPropertyGroupPriceComponentComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ChargeItemDefinitionPropertyGroupPriceComponentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ChargeItemDefinitionPropertyGroupPriceComponentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ChargeItemDefinitionPropertyGroupPriceComponentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

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

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'factor';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setFactorElement(datatype);
    }

    fieldName = 'amount';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Money | undefined = Money.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAmount(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * FHIR CodeSystem: InvoicePriceComponentType
   *
   * @see {@link InvoicePriceComponentTypeEnum }
   */
  private readonly invoicePriceComponentTypeEnum: InvoicePriceComponentTypeEnum;

  /**
   * ChargeItemDefinition.propertyGroup.priceComponent.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** base | surcharge | deduction | discount | tax | informational
   * - **Definition:** This code identifies the type of the component.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link InvoicePriceComponentTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * ChargeItemDefinition.propertyGroup.priceComponent.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code identifying the specific component
   * - **Definition:** A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept | undefined;

  /**
   * ChargeItemDefinition.propertyGroup.priceComponent.factor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Factor used for calculating this component
   * - **Definition:** The factor that has been applied on the base price for calculating this component.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private factor?: DecimalType | undefined;

  /**
   * ChargeItemDefinition.propertyGroup.priceComponent.amount Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Monetary amount associated with this component
   * - **Definition:** The amount calculated for this component.
   * - **FHIR Type:** `Money`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private amount?: Money | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link InvoicePriceComponentTypeEnum }
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
   * @see CodeSystem Enumeration: {@link InvoicePriceComponentTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ChargeItemDefinition.propertyGroup.priceComponent.type is required`);
    const errMsgPrefix = `Invalid ChargeItemDefinition.propertyGroup.priceComponent.type`;
    assertEnumCodeType<InvoicePriceComponentTypeEnum>(enumType, InvoicePriceComponentTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link InvoicePriceComponentTypeEnum }
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
   * @see CodeSystem Enumeration: {@link InvoicePriceComponentTypeEnum }
   */
  public setTypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ChargeItemDefinition.propertyGroup.priceComponent.type is required`);
    const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup.priceComponent.type; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.type_ = new EnumCodeType(element, this.invoicePriceComponentTypeEnum);
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
   * @see CodeSystem Enumeration: {@link InvoicePriceComponentTypeEnum }
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
   * @see CodeSystem Enumeration: {@link InvoicePriceComponentTypeEnum }
   */
  public setType(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ChargeItemDefinition.propertyGroup.priceComponent.type is required`);
    const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup.priceComponent.type (${String(value)})`;
    this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.invoicePriceComponentTypeEnum);
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
   * Assigns the provided Code object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup.priceComponent.code; Provided element is not an instance of CodeableConcept.`;
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

  /**
   * @returns the `factor` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getFactorElement(): DecimalType {
    return this.factor ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `factor` property.
   *
   * @param element - the `factor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFactorElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup.priceComponent.factor; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.factor = element;
    } else {
      this.factor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `factor` property exists and has a value; `false` otherwise
   */
  public hasFactorElement(): boolean {
    return isDefined<DecimalType>(this.factor) && !this.factor.isEmpty();
  }

  /**
   * @returns the `factor` property value as a fhirDecimal if defined; else undefined
   */
  public getFactor(): fhirDecimal | undefined {
    return this.factor?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `factor` property.
   *
   * @param value - the `factor` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFactor(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup.priceComponent.factor (${String(value)})`;
      this.factor = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.factor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `factor` property exists and has a value; `false` otherwise
   */
  public hasFactor(): boolean {
    return this.hasFactorElement();
  }

  /**
   * @returns the `amount` property value as a Money object if defined; else an empty Money object
   */
  public getAmount(): Money {
    return this.amount ?? new Money();
  }

  /**
   * Assigns the provided Amount object value to the `amount` property.
   *
   * @param value - the `amount` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAmount(value: Money | undefined): this {
    if (isDefined<Money>(value)) {
      const optErrMsg = `Invalid ChargeItemDefinition.propertyGroup.priceComponent.amount; Provided element is not an instance of Money.`;
      assertFhirType<Money>(value, Money, optErrMsg);
      this.amount = value;
    } else {
      this.amount = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `amount` property exists and has a value; `false` otherwise
   */
  public hasAmount(): boolean {
    return isDefined<Money>(this.amount) && !this.amount.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ChargeItemDefinition.propertyGroup.priceComponent';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.code,
      this.factor,
      this.amount,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ChargeItemDefinitionPropertyGroupPriceComponentComponent {
    const dest = new ChargeItemDefinitionPropertyGroupPriceComponentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ChargeItemDefinitionPropertyGroupPriceComponentComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.code = this.code?.copy();
    dest.factor = this.factor?.copy();
    dest.amount = this.amount?.copy();
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    } else {
      missingReqdProperties.push(`ChargeItemDefinition.propertyGroup.priceComponent.type`);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasFactorElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getFactorElement(), 'factor', jsonObj);
    }

    if (this.hasAmount()) {
      setFhirComplexJson(this.getAmount(), 'amount', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
