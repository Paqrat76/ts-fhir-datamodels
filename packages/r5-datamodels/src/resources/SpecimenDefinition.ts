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
 * SpecimenDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/SpecimenDefinition
 * StructureDefinition.name: SpecimenDefinition
 * StructureDefinition.description: A kind of specimen with associated set of requirements.
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
  DateType,
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
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
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
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Coding, ContactDetail, Duration, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { SpecimenContainedPreferenceEnum } from '../code-systems/SpecimenContainedPreferenceEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * SpecimenDefinition Class
 *
 * @remarks
 * A kind of specimen with associated set of requirements.
 *
 * **FHIR Specification**
 * - **Short:** Kind of specimen
 * - **Definition:** A kind of specimen with associated set of requirements.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR SpecimenDefinition](http://hl7.org/fhir/StructureDefinition/SpecimenDefinition)
 */
export class SpecimenDefinition extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'SpecimenDefinition.status',
    );
  }

  /**
   * Parse the provided `SpecimenDefinition` JSON to instantiate the SpecimenDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenDefinition
   * @returns SpecimenDefinition data model or undefined for `SpecimenDefinition`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'SpecimenDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = SpecimenDefinition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SpecimenDefinition`;
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
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
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

    fieldName = 'derivedFromCanonical';
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
          instance.addDerivedFromCanonicalElement(datatype);
        }
      });
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

    fieldName = 'subject[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const subject: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setSubject(subject);

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

    fieldName = 'typeCollected';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTypeCollected(datatype);
    }

    fieldName = 'patientPreparation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPatientPreparation(datatype);
        }
      });
    }

    fieldName = 'timeAspect';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTimeAspectElement(datatype);
    }

    fieldName = 'collection';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCollection(datatype);
        }
      });
    }

    fieldName = 'typeTested';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SpecimenDefinitionTypeTestedComponent | undefined = SpecimenDefinitionTypeTestedComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addTypeTested(component);
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
   * SpecimenDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Logical canonical URL to reference this SpecimenDefinition (globally unique)
   * - **Definition:** An absolute URL that is used to identify this SpecimenDefinition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this SpecimenDefinition is (or will be) published. The URL SHOULD include the major version of the SpecimenDefinition. For more information see Technical and Business Versions.
   * - **Comment:** Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred. This is the URI that will be used when making canonical references to this resource.
   * - **Requirements:** Allows the SpecimenDefinition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * SpecimenDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier
   * - **Definition:** A business identifier assigned to this SpecimenDefinition.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * SpecimenDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the SpecimenDefinition
   * - **Definition:** The identifier that is used to identify this version of the SpecimenDefinition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the SpecimenDefinition author and is not expected to be globally unique.
   * - **Comment:** There may be multiple different instances of a SpecimenDefinition that have the same identifier but different versions.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * SpecimenDefinition.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SpecimenDefinition.versionAlgorithm[x]', ['string','Coding',]`
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
  @ChoiceDataTypesMeta('SpecimenDefinition.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * SpecimenDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this {{title}} (computer friendly)
   * - **Definition:** A natural language name identifying the {{title}}. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * SpecimenDefinition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this SpecimenDefinition (Human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the SpecimenDefinition.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * SpecimenDefinition.derivedFromCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Based on FHIR definition of another SpecimenDefinition
   * - **Definition:** The canonical URL pointing to another FHIR-defined SpecimenDefinition that is adhered to in whole or in part by this definition.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SpecimenDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private derivedFromCanonical?: CanonicalType[] | undefined;

  /**
   * SpecimenDefinition.derivedFromUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Based on external definition
   * - **Definition:** The URL pointing to an externally-defined type of specimen, guideline or other definition that is adhered to in whole or in part by this definition.
   * - **Requirements:** Specimen definitions may be refinements of other definitions.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private derivedFromUri?: UriType[] | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * SpecimenDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The current state of theSpecimenDefinition.
   * - **Comment:** A nominal state-transition diagram can be found in the [Definition pattern](https://hl7.org/fhir/definition.html#statemachine) documentation Unknown does not represent "other" - one of the defined statuses must apply. Unknown is used when the authoring system is not sure what the current status is. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** Not known why this is labelled a modifier
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * SpecimenDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If this SpecimenDefinition is not for real usage
   * - **Definition:** A flag to indicate that this SpecimenDefinition is not authored for  genuine usage.
   * - **Comment:** Allows filtering of SpecimenDefinition that are appropriate for use vs. not.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * SpecimenDefinition.subject[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SpecimenDefinition.subject[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of subject for specimen collection
   * - **Definition:** A code or group definition that describes the intended subject  from which this kind of specimen is to be collected.
   * - **Comment:** Examples: person, animal, device, water ....
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('SpecimenDefinition.subject[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private subject?: IDataType | undefined;

  /**
   * SpecimenDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date status first applied
   * - **Definition:** For draft definitions, indicates the date of initial creation. For active definitions, represents the date of activation. For withdrawn definitions, indicates the date of withdrawal.
   * - **Comment:** See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * SpecimenDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name of the individual or organization that published the SpecimenDefinition
   * - **Definition:** Helps establish the "authority/credibility" of the SpecimenDefinition. May also allow for contact.
   * - **Requirements:** Usually an organization, but may be an individual. The publisher (or steward) of the SpecimenDefinition is the organization or individual primarily responsible for the maintenance and upkeep of the SpecimenDefinition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the SpecimenDefinition. This item SHOULD be populated unless the information is available from context.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * SpecimenDefinition.contact Element
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
   * SpecimenDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the SpecimenDefinition
   * - **Definition:** A free text natural language description of the SpecimenDefinition from the consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the module as conveyed in the text field of the resource itself. This item SHOULD be populated unless the information is available from context.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * SpecimenDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Content intends to support these contexts
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of specimen definitions.
   * - **Comment:** When multiple usageContexts are specified, there is no expectation for whether all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * SpecimenDefinition.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for this SpecimenDefinition (if applicable)
   * - **Definition:** A jurisdiction in which the SpecimenDefinition is intended to be used.
   * - **Comment:** DEPRECATION NOTE: For consistency, implementations are encouraged to migrate to using the new \'jurisdiction\' code in the useContext element.  (I.e. useContext.code indicating http://terminology.hl7.org/CodeSystem/usage-context-type#jurisdiction and useContext.valueCodeableConcept indicating the jurisdiction.)
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * SpecimenDefinition.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this SpecimenDefinition is defined
   * - **Definition:** Explains why this SpecimeDefinition is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the SpecimenDefinition. Rather it is for traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is. This may be used to point to source materials or specifications that drove the structure of this SpecimenDefinition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * SpecimenDefinition.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** Copyright statement relating to the SpecimenDefinition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the SpecimenDefinition.
   * - **Requirements:** Consumers of the SpecimenDefinition must be able to determine any legal restrictions on the use of the artifact and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * SpecimenDefinition.copyrightLabel Element
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
   * SpecimenDefinition.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When SpecimenDefinition was approved by publisher
   * - **Definition:** The date on which the asset content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The date may be more recent than the approval date because of minor changes / editorial corrections. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * SpecimenDefinition.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date on which the asset content was last reviewed by the publisher
   * - **Definition:** The date on which the asset content was last reviewed. Review happens periodically after that, but doesn\'t change the original approval date.
   * - **Comment:** If specified, this is usually after the approval date. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastReviewDate?: DateType | undefined;

  /**
   * SpecimenDefinition.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The effective date range for the SpecimenDefinition
   * - **Definition:** The period during which the SpecimenDefinition content was or is planned to be effective.
   * - **Comment:** The effective period for a SpecimenDefinition determines when the content is applicable for usage and is independent of publication and review dates. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectivePeriod?: Period | undefined;

  /**
   * SpecimenDefinition.typeCollected Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of material to collect
   * - **Definition:** The kind of material to be collected.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private typeCollected?: CodeableConcept | undefined;

  /**
   * SpecimenDefinition.patientPreparation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient preparation for collection
   * - **Definition:** Preparation of the patient for specimen collection.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patientPreparation?: CodeableConcept[] | undefined;

  /**
   * SpecimenDefinition.timeAspect Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Time aspect for collection
   * - **Definition:** Time aspect of specimen collection (duration or offset).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private timeAspect?: StringType | undefined;

  /**
   * SpecimenDefinition.collection Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen collection procedure
   * - **Definition:** The action to be performed for collecting the specimen.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private collection?: CodeableConcept[] | undefined;

  /**
   * SpecimenDefinition.typeTested Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen in container intended for testing by lab
   * - **Definition:** Specimen conditioned in a container as expected by the testing laboratory.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private typeTested?: SpecimenDefinitionTypeTestedComponent[] | undefined;

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
      const optErrMsg = `Invalid SpecimenDefinition.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.url (${String(value)})`;
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
   * @returns the `identifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getIdentifier(): Identifier {
    return this.identifier ?? new Identifier();
  }

  /**
   * Assigns the provided Identifier object value to the `identifier` property.
   *
   * @param value - the `identifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.identifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.identifier = value;
    } else {
      this.identifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identifier` property exists and has a value; `false` otherwise
   */
  public hasIdentifier(): boolean {
    return isDefined<Identifier>(this.identifier) && !this.identifier.isEmpty();
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
      const optErrMsg = `Invalid SpecimenDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('SpecimenDefinition.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SpecimenDefinition.versionAlgorithm[x]')
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
        `DataType mismatch for SpecimenDefinition.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for SpecimenDefinition.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
      const optErrMsg = `Invalid SpecimenDefinition.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.name (${String(value)})`;
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
      const optErrMsg = `Invalid SpecimenDefinition.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.title (${String(value)})`;
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
   * @returns the `derivedFromCanonical` property value as a CanonicalType array
   */
  public getDerivedFromCanonicalElement(): CanonicalType[] {
    return this.derivedFromCanonical ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `derivedFromCanonical` property.
   *
   * @param element - the `derivedFromCanonical` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDerivedFromCanonicalElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.derivedFromCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.derivedFromCanonical = element;
    } else {
      this.derivedFromCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `derivedFromCanonical` array property.
   *
   * @param element - the `derivedFromCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDerivedFromCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.derivedFromCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initDerivedFromCanonical();
      this.derivedFromCanonical?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFromCanonical` property exists and has a value; `false` otherwise
   */
  public hasDerivedFromCanonicalElement(): boolean {
    return isDefinedList<CanonicalType>(this.derivedFromCanonical) && this.derivedFromCanonical.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `derivedFromCanonical` property value as a fhirCanonical array
   */
  public getDerivedFromCanonical(): fhirCanonical[] {
    this.initDerivedFromCanonical();
    const derivedFromCanonicalValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.derivedFromCanonical!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        derivedFromCanonicalValues.push(value);
      }
    }
    return derivedFromCanonicalValues;
  }

  /**
   * Assigns the provided primitive value array to the `derivedFromCanonical` property.
   *
   * @param value - the `derivedFromCanonical` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDerivedFromCanonical(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const derivedFromCanonicalElements = [] as CanonicalType[];
      for (const derivedFromCanonicalValue of value) {
        const optErrMsg = `Invalid SpecimenDefinition.derivedFromCanonical array item (${String(derivedFromCanonicalValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(derivedFromCanonicalValue, fhirCanonicalSchema, optErrMsg));
        derivedFromCanonicalElements.push(element);
      }
      this.derivedFromCanonical = derivedFromCanonicalElements;
    } else {
      this.derivedFromCanonical = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `derivedFromCanonical` array property.
   *
   * @param value - the `derivedFromCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addDerivedFromCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.derivedFromCanonical array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initDerivedFromCanonical();
      this.addDerivedFromCanonicalElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `derivedFromCanonical` property exists and has a value; `false` otherwise
   */
  public hasDerivedFromCanonical(): boolean {
    return this.hasDerivedFromCanonicalElement();
  }

  /**
   * Initialize the `derivedFromCanonical` property
   */
  private initDerivedFromCanonical(): void {
    if (!this.hasDerivedFromCanonical()) {
      this.derivedFromCanonical = [] as CanonicalType[];
    }
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
      const optErrMsg = `Invalid SpecimenDefinition.derivedFromUri; Provided value array has an element that is not an instance of UriType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.derivedFromUri; Provided element is not an instance of UriType.`;
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
        const optErrMsg = `Invalid SpecimenDefinition.derivedFromUri array item (${String(derivedFromUriValue)})`;
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
      const optErrMsg = `Invalid SpecimenDefinition.derivedFromUri array item (${String(value)})`;
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
    assertIsDefined<EnumCodeType>(enumType, `SpecimenDefinition.status is required`);
    const errMsgPrefix = `Invalid SpecimenDefinition.status`;
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
    assertIsDefined<CodeType>(element, `SpecimenDefinition.status is required`);
    const optErrMsg = `Invalid SpecimenDefinition.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `SpecimenDefinition.status is required`);
    const optErrMsg = `Invalid SpecimenDefinition.status (${String(value)})`;
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
      const optErrMsg = `Invalid SpecimenDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.experimental (${String(value)})`;
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
   * @returns the `subject` property value as a DataType object if defined; else undefined
   */
  public getSubject(): IDataType | undefined {
    return this.subject;
  }

  /**
   * Assigns the provided DataType object value to the `subject` property.
   *
   * @decorator `@ChoiceDataTypes('SpecimenDefinition.subject[x]')`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SpecimenDefinition.subject[x]')
  public setSubject(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefined<IDataType>(this.subject) && !this.subject.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `subject` property value as a CodeableConcept object if defined; else undefined
   */
  public getSubjectCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.subject)) {
      return undefined;
    }
    if (!(this.subject instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for SpecimenDefinition.subject[x]: Expected CodeableConcept but encountered ${this.subject.fhirType()}`,
      );
    }
    return this.subject;
  }

  /**
   * @returns `true` if the `subject` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasSubjectCodeableConcept(): boolean {
    return this.hasSubject() && this.subject instanceof CodeableConcept;
  }

  /**
   * @returns the `subject` property value as a Reference object if defined; else undefined
   */
  public getSubjectReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.subject)) {
      return undefined;
    }
    if (!(this.subject instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for SpecimenDefinition.subject[x]: Expected Reference but encountered ${this.subject.fhirType()}`,
      );
    }
    return this.subject;
  }

  /**
   * @returns `true` if the `subject` property exists as a Reference and has a value; `false` otherwise
   */
  public hasSubjectReference(): boolean {
    return this.hasSubject() && this.subject instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

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
      const optErrMsg = `Invalid SpecimenDefinition.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid SpecimenDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid SpecimenDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid SpecimenDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid SpecimenDefinition.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid SpecimenDefinition.copyrightLabel; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.copyrightLabel (${String(value)})`;
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
      const optErrMsg = `Invalid SpecimenDefinition.approvalDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.approvalDate (${String(value)})`;
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
      const optErrMsg = `Invalid SpecimenDefinition.lastReviewDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.lastReviewDate (${String(value)})`;
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
      const optErrMsg = `Invalid SpecimenDefinition.effectivePeriod; Provided element is not an instance of Period.`;
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
   * @returns the `typeCollected` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTypeCollected(): CodeableConcept {
    return this.typeCollected ?? new CodeableConcept();
  }

  /**
   * Assigns the provided TypeCollected object value to the `typeCollected` property.
   *
   * @param value - the `typeCollected` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTypeCollected(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeCollected; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.typeCollected = value;
    } else {
      this.typeCollected = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `typeCollected` property exists and has a value; `false` otherwise
   */
  public hasTypeCollected(): boolean {
    return isDefined<CodeableConcept>(this.typeCollected) && !this.typeCollected.isEmpty();
  }

  /**
   * @returns the `patientPreparation` property value as a CodeableConcept array
   */
  public getPatientPreparation(): CodeableConcept[] {
    return this.patientPreparation ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `patientPreparation` property.
   *
   * @param value - the `patientPreparation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPatientPreparation(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.patientPreparation; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.patientPreparation = value;
    } else {
      this.patientPreparation = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `patientPreparation` array property.
   *
   * @param value - the `patientPreparation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPatientPreparation(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.patientPreparation; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initPatientPreparation();
      this.patientPreparation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `patientPreparation` property exists and has a value; `false` otherwise
   */
  public hasPatientPreparation(): boolean {
    return isDefinedList<CodeableConcept>(this.patientPreparation) && this.patientPreparation.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `patientPreparation` property
   */
  private initPatientPreparation(): void {
    if(!this.hasPatientPreparation()) {
      this.patientPreparation = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `timeAspect` property value as a StringType object if defined; else an empty StringType object
   */
  public getTimeAspectElement(): StringType {
    return this.timeAspect ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `timeAspect` property.
   *
   * @param element - the `timeAspect` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimeAspectElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.timeAspect; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.timeAspect = element;
    } else {
      this.timeAspect = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timeAspect` property exists and has a value; `false` otherwise
   */
  public hasTimeAspectElement(): boolean {
    return isDefined<StringType>(this.timeAspect) && !this.timeAspect.isEmpty();
  }

  /**
   * @returns the `timeAspect` property value as a fhirString if defined; else undefined
   */
  public getTimeAspect(): fhirString | undefined {
    return this.timeAspect?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `timeAspect` property.
   *
   * @param value - the `timeAspect` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimeAspect(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.timeAspect (${String(value)})`;
      this.timeAspect = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.timeAspect = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timeAspect` property exists and has a value; `false` otherwise
   */
  public hasTimeAspect(): boolean {
    return this.hasTimeAspectElement();
  }

  /**
   * @returns the `collection` property value as a CodeableConcept array
   */
  public getCollection(): CodeableConcept[] {
    return this.collection ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `collection` property.
   *
   * @param value - the `collection` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCollection(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.collection; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.collection = value;
    } else {
      this.collection = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `collection` array property.
   *
   * @param value - the `collection` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCollection(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.collection; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCollection();
      this.collection?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `collection` property exists and has a value; `false` otherwise
   */
  public hasCollection(): boolean {
    return isDefinedList<CodeableConcept>(this.collection) && this.collection.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `collection` property
   */
  private initCollection(): void {
    if(!this.hasCollection()) {
      this.collection = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `typeTested` property value as a SpecimenDefinitionTypeTestedComponent array
   */
  public getTypeTested(): SpecimenDefinitionTypeTestedComponent[] {
    return this.typeTested ?? ([] as SpecimenDefinitionTypeTestedComponent[]);
  }

  /**
   * Assigns the provided SpecimenDefinitionTypeTestedComponent array value to the `typeTested` property.
   *
   * @param value - the `typeTested` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTypeTested(value: SpecimenDefinitionTypeTestedComponent[] | undefined): this {
    if (isDefinedList<SpecimenDefinitionTypeTestedComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested; Provided value array has an element that is not an instance of SpecimenDefinitionTypeTestedComponent.`;
      assertFhirTypeList<SpecimenDefinitionTypeTestedComponent>(value, SpecimenDefinitionTypeTestedComponent, optErrMsg);
      this.typeTested = value;
    } else {
      this.typeTested = undefined;
    }
    return this;
  }

  /**
   * Add the provided SpecimenDefinitionTypeTestedComponent value to the `typeTested` array property.
   *
   * @param value - the `typeTested` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTypeTested(value: SpecimenDefinitionTypeTestedComponent | undefined): this {
    if (isDefined<SpecimenDefinitionTypeTestedComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested; Provided element is not an instance of SpecimenDefinitionTypeTestedComponent.`;
      assertFhirType<SpecimenDefinitionTypeTestedComponent>(value, SpecimenDefinitionTypeTestedComponent, optErrMsg);
      this.initTypeTested();
      this.typeTested?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `typeTested` property exists and has a value; `false` otherwise
   */
  public hasTypeTested(): boolean {
    return isDefinedList<SpecimenDefinitionTypeTestedComponent>(this.typeTested) && this.typeTested.some((item: SpecimenDefinitionTypeTestedComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `typeTested` property
   */
  private initTypeTested(): void {
    if(!this.hasTypeTested()) {
      this.typeTested = [] as SpecimenDefinitionTypeTestedComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SpecimenDefinition';
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
      this.derivedFromCanonical,
      this.derivedFromUri,
      this.status,
      this.experimental,
      this.subject,
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.useContext,
      this.jurisdiction,
      this.purpose,
      this.copyright,
      this.copyrightLabel,
      this.approvalDate,
      this.lastReviewDate,
      this.effectivePeriod,
      this.typeCollected,
      this.patientPreparation,
      this.timeAspect,
      this.collection,
      this.typeTested,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenDefinition {
    const dest = new SpecimenDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenDefinition): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    dest.identifier = this.identifier?.copy();
    dest.version = this.version?.copy();
    dest.versionAlgorithm = this.versionAlgorithm?.copy() as IDataType;
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    const derivedFromCanonicalList = copyListValues<CanonicalType>(this.derivedFromCanonical);
    dest.derivedFromCanonical = derivedFromCanonicalList.length === 0 ? undefined : derivedFromCanonicalList;
    const derivedFromUriList = copyListValues<UriType>(this.derivedFromUri);
    dest.derivedFromUri = derivedFromUriList.length === 0 ? undefined : derivedFromUriList;
    dest.status = this.status ? this.status.copy() : null;
    dest.experimental = this.experimental?.copy();
    dest.subject = this.subject?.copy() as IDataType;
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
    dest.approvalDate = this.approvalDate?.copy();
    dest.lastReviewDate = this.lastReviewDate?.copy();
    dest.effectivePeriod = this.effectivePeriod?.copy();
    dest.typeCollected = this.typeCollected?.copy();
    const patientPreparationList = copyListValues<CodeableConcept>(this.patientPreparation);
    dest.patientPreparation = patientPreparationList.length === 0 ? undefined : patientPreparationList;
    dest.timeAspect = this.timeAspect?.copy();
    const collectionList = copyListValues<CodeableConcept>(this.collection);
    dest.collection = collectionList.length === 0 ? undefined : collectionList;
    const typeTestedList = copyListValues<SpecimenDefinitionTypeTestedComponent>(this.typeTested);
    dest.typeTested = typeTestedList.length === 0 ? undefined : typeTestedList;
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
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
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

    if (this.hasDerivedFromCanonical()) {
      setFhirPrimitiveListJson(this.getDerivedFromCanonicalElement(), 'derivedFromCanonical', jsonObj);
    }

    if (this.hasDerivedFromUri()) {
      setFhirPrimitiveListJson(this.getDerivedFromUriElement(), 'derivedFromUri', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`SpecimenDefinition.status`);
    }

    if (this.hasExperimentalElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExperimentalElement(), 'experimental', jsonObj);
    }

    if (this.hasSubject()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getSubject()!, 'subject', jsonObj);
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

    if (this.hasApprovalDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getApprovalDateElement(), 'approvalDate', jsonObj);
    }

    if (this.hasLastReviewDateElement()) {
      setFhirPrimitiveJson<fhirDate>(this.getLastReviewDateElement(), 'lastReviewDate', jsonObj);
    }

    if (this.hasEffectivePeriod()) {
      setFhirComplexJson(this.getEffectivePeriod(), 'effectivePeriod', jsonObj);
    }

    if (this.hasTypeCollected()) {
      setFhirComplexJson(this.getTypeCollected(), 'typeCollected', jsonObj);
    }

    if (this.hasPatientPreparation()) {
      setFhirComplexListJson(this.getPatientPreparation(), 'patientPreparation', jsonObj);
    }

    if (this.hasTimeAspectElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTimeAspectElement(), 'timeAspect', jsonObj);
    }

    if (this.hasCollection()) {
      setFhirComplexListJson(this.getCollection(), 'collection', jsonObj);
    }

    if (this.hasTypeTested()) {
      setFhirBackboneElementListJson(this.getTypeTested(), 'typeTested', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * SpecimenDefinitionTypeTestedComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specimen in container intended for testing by lab
 * - **Definition:** Specimen conditioned in a container as expected by the testing laboratory.
 *
 * @category Data Models: Resource
 * @see [FHIR SpecimenDefinition](http://hl7.org/fhir/StructureDefinition/SpecimenDefinition)
 */
export class SpecimenDefinitionTypeTestedComponent extends BackboneElement implements IBackboneElement {
  constructor(preference: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.specimenContainedPreferenceEnum = new SpecimenContainedPreferenceEnum();

    this.preference = constructorCodeValueAsEnumCodeType<SpecimenContainedPreferenceEnum>(
      preference,
      SpecimenContainedPreferenceEnum,
      this.specimenContainedPreferenceEnum,
      'SpecimenDefinition.typeTested.preference',
    );
  }

  /**
   * Parse the provided `SpecimenDefinitionTypeTestedComponent` JSON to instantiate the SpecimenDefinitionTypeTestedComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenDefinitionTypeTestedComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenDefinitionTypeTestedComponent
   * @returns SpecimenDefinitionTypeTestedComponent data model or undefined for `SpecimenDefinitionTypeTestedComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenDefinitionTypeTestedComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenDefinitionTypeTestedComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenDefinitionTypeTestedComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'isDerived';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setIsDerivedElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'preference';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPreferenceElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'container';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SpecimenDefinitionTypeTestedContainerComponent | undefined = SpecimenDefinitionTypeTestedContainerComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContainer(component);
    }

    fieldName = 'requirement';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setRequirementElement(datatype);
    }

    fieldName = 'retentionTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRetentionTime(datatype);
    }

    fieldName = 'singleUse';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setSingleUseElement(datatype);
    }

    fieldName = 'rejectionCriterion';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRejectionCriterion(datatype);
        }
      });
    }

    fieldName = 'handling';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SpecimenDefinitionTypeTestedHandlingComponent | undefined = SpecimenDefinitionTypeTestedHandlingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addHandling(component);
        }
      });
    }

    fieldName = 'testingDestination';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTestingDestination(datatype);
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
   * SpecimenDefinition.typeTested.isDerived Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Primary or secondary specimen
   * - **Definition:** Primary of secondary specimen.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private isDerived?: BooleanType | undefined;

  /**
   * SpecimenDefinition.typeTested.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of intended specimen
   * - **Definition:** The kind of specimen conditioned for testing expected by lab.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: SpecimenContainedPreference
   *
   * @see {@link SpecimenContainedPreferenceEnum }
   */
  private readonly specimenContainedPreferenceEnum: SpecimenContainedPreferenceEnum;

  /**
   * SpecimenDefinition.typeTested.preference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** preferred | alternate
   * - **Definition:** The preference for this type of conditioned specimen.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  private preference: EnumCodeType | null;

  /**
   * SpecimenDefinition.typeTested.container Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specimen\'s container
   * - **Definition:** The specimen\'s container.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private container?: SpecimenDefinitionTypeTestedContainerComponent | undefined;

  /**
   * SpecimenDefinition.typeTested.requirement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Requirements for specimen delivery and special handling
   * - **Definition:** Requirements for delivery and special handling of this kind of conditioned specimen.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private requirement?: MarkdownType | undefined;

  /**
   * SpecimenDefinition.typeTested.retentionTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The usual time for retaining this kind of specimen
   * - **Definition:** The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private retentionTime?: Duration | undefined;

  /**
   * SpecimenDefinition.typeTested.singleUse Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen for single use only
   * - **Definition:** Specimen can be used by only one test or panel if the value is "true".
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private singleUse?: BooleanType | undefined;

  /**
   * SpecimenDefinition.typeTested.rejectionCriterion Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Criterion specified for specimen rejection
   * - **Definition:** Criterion for rejection of the specimen in its container by the laboratory.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private rejectionCriterion?: CodeableConcept[] | undefined;

  /**
   * SpecimenDefinition.typeTested.handling Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen handling before testing
   * - **Definition:** Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private handling?: SpecimenDefinitionTypeTestedHandlingComponent[] | undefined;

  /**
   * SpecimenDefinition.typeTested.testingDestination Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the specimen will be tested
   * - **Definition:** Where the specimen will be tested: e.g., lab, sector, device or any combination of these.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private testingDestination?: CodeableConcept[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `isDerived` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getIsDerivedElement(): BooleanType {
    return this.isDerived ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `isDerived` property.
   *
   * @param element - the `isDerived` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsDerivedElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.isDerived; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.isDerived = element;
    } else {
      this.isDerived = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isDerived` property exists and has a value; `false` otherwise
   */
  public hasIsDerivedElement(): boolean {
    return isDefined<BooleanType>(this.isDerived) && !this.isDerived.isEmpty();
  }

  /**
   * @returns the `isDerived` property value as a fhirBoolean if defined; else undefined
   */
  public getIsDerived(): fhirBoolean | undefined {
    return this.isDerived?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `isDerived` property.
   *
   * @param value - the `isDerived` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setIsDerived(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.isDerived (${String(value)})`;
      this.isDerived = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.isDerived = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `isDerived` property exists and has a value; `false` otherwise
   */
  public hasIsDerived(): boolean {
    return this.hasIsDerivedElement();
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
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `preference` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public getPreferenceEnumType(): EnumCodeType | null {
    return this.preference;
  }

  /**
   * Assigns the provided EnumCodeType value to the `preference` property.
   *
   * @param enumType - the `preference` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public setPreferenceEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `SpecimenDefinition.typeTested.preference is required`);
    const errMsgPrefix = `Invalid SpecimenDefinition.typeTested.preference`;
    assertEnumCodeType<SpecimenContainedPreferenceEnum>(enumType, SpecimenContainedPreferenceEnum, errMsgPrefix);
    this.preference = enumType;
    return this;
  }

  /**
   * @returns `true` if the `preference` property exists and has a value; `false` otherwise
   */
  public hasPreferenceEnumType(): boolean {
    return isDefined<EnumCodeType>(this.preference) && !this.preference.isEmpty() && this.preference.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `preference` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public getPreferenceElement(): CodeType | null {
    if (this.preference === null) {
      return null;
    }
    return this.preference as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `preference` property.
   *
   * @param element - the `preference` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public setPreferenceElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `SpecimenDefinition.typeTested.preference is required`);
    const optErrMsg = `Invalid SpecimenDefinition.typeTested.preference; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.preference = new EnumCodeType(element, this.specimenContainedPreferenceEnum);
    return this;
  }

  /**
   * @returns `true` if the `preference` property exists and has a value; `false` otherwise
   */
  public hasPreferenceElement(): boolean {
    return this.hasPreferenceEnumType();
  }

  /**
   * @returns the `preference` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public getPreference(): fhirCode | null {
    if (this.preference === null) {
      return null;
    }
    return this.preference.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `preference` property.
   *
   * @param value - the `preference` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link SpecimenContainedPreferenceEnum }
   */
  public setPreference(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `SpecimenDefinition.typeTested.preference is required`);
    const optErrMsg = `Invalid SpecimenDefinition.typeTested.preference (${String(value)})`;
    this.preference = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.specimenContainedPreferenceEnum);
    return this;
  }

  /**
   * @returns `true` if the `preference` property exists and has a value; `false` otherwise
   */
  public hasPreference(): boolean {
    return this.hasPreferenceEnumType();
  }

  /**
   * @returns the `container` property value as a SpecimenDefinitionTypeTestedContainerComponent object if defined; else an empty SpecimenDefinitionTypeTestedContainerComponent object
   */
  public getContainer(): SpecimenDefinitionTypeTestedContainerComponent {
    return this.container ?? new SpecimenDefinitionTypeTestedContainerComponent();
  }

  /**
   * Assigns the provided Container object value to the `container` property.
   *
   * @param value - the `container` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContainer(value: SpecimenDefinitionTypeTestedContainerComponent | undefined): this {
    if (isDefined<SpecimenDefinitionTypeTestedContainerComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container; Provided element is not an instance of SpecimenDefinitionTypeTestedContainerComponent.`;
      assertFhirType<SpecimenDefinitionTypeTestedContainerComponent>(value, SpecimenDefinitionTypeTestedContainerComponent, optErrMsg);
      this.container = value;
    } else {
      this.container = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `container` property exists and has a value; `false` otherwise
   */
  public hasContainer(): boolean {
    return isDefined<SpecimenDefinitionTypeTestedContainerComponent>(this.container) && !this.container.isEmpty();
  }

  /**
   * @returns the `requirement` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getRequirementElement(): MarkdownType {
    return this.requirement ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `requirement` property.
   *
   * @param element - the `requirement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequirementElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.requirement; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.requirement = element;
    } else {
      this.requirement = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requirement` property exists and has a value; `false` otherwise
   */
  public hasRequirementElement(): boolean {
    return isDefined<MarkdownType>(this.requirement) && !this.requirement.isEmpty();
  }

  /**
   * @returns the `requirement` property value as a fhirMarkdown if defined; else undefined
   */
  public getRequirement(): fhirMarkdown | undefined {
    return this.requirement?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `requirement` property.
   *
   * @param value - the `requirement` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setRequirement(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.requirement (${String(value)})`;
      this.requirement = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.requirement = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requirement` property exists and has a value; `false` otherwise
   */
  public hasRequirement(): boolean {
    return this.hasRequirementElement();
  }

  /**
   * @returns the `retentionTime` property value as a Duration object if defined; else an empty Duration object
   */
  public getRetentionTime(): Duration {
    return this.retentionTime ?? new Duration();
  }

  /**
   * Assigns the provided RetentionTime object value to the `retentionTime` property.
   *
   * @param value - the `retentionTime` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRetentionTime(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.retentionTime; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.retentionTime = value;
    } else {
      this.retentionTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `retentionTime` property exists and has a value; `false` otherwise
   */
  public hasRetentionTime(): boolean {
    return isDefined<Duration>(this.retentionTime) && !this.retentionTime.isEmpty();
  }

  /**
   * @returns the `singleUse` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getSingleUseElement(): BooleanType {
    return this.singleUse ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `singleUse` property.
   *
   * @param element - the `singleUse` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSingleUseElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.singleUse; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.singleUse = element;
    } else {
      this.singleUse = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `singleUse` property exists and has a value; `false` otherwise
   */
  public hasSingleUseElement(): boolean {
    return isDefined<BooleanType>(this.singleUse) && !this.singleUse.isEmpty();
  }

  /**
   * @returns the `singleUse` property value as a fhirBoolean if defined; else undefined
   */
  public getSingleUse(): fhirBoolean | undefined {
    return this.singleUse?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `singleUse` property.
   *
   * @param value - the `singleUse` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSingleUse(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.singleUse (${String(value)})`;
      this.singleUse = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.singleUse = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `singleUse` property exists and has a value; `false` otherwise
   */
  public hasSingleUse(): boolean {
    return this.hasSingleUseElement();
  }

  /**
   * @returns the `rejectionCriterion` property value as a CodeableConcept array
   */
  public getRejectionCriterion(): CodeableConcept[] {
    return this.rejectionCriterion ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `rejectionCriterion` property.
   *
   * @param value - the `rejectionCriterion` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRejectionCriterion(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.rejectionCriterion; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.rejectionCriterion = value;
    } else {
      this.rejectionCriterion = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `rejectionCriterion` array property.
   *
   * @param value - the `rejectionCriterion` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRejectionCriterion(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.rejectionCriterion; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initRejectionCriterion();
      this.rejectionCriterion?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `rejectionCriterion` property exists and has a value; `false` otherwise
   */
  public hasRejectionCriterion(): boolean {
    return isDefinedList<CodeableConcept>(this.rejectionCriterion) && this.rejectionCriterion.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `rejectionCriterion` property
   */
  private initRejectionCriterion(): void {
    if(!this.hasRejectionCriterion()) {
      this.rejectionCriterion = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `handling` property value as a SpecimenDefinitionTypeTestedHandlingComponent array
   */
  public getHandling(): SpecimenDefinitionTypeTestedHandlingComponent[] {
    return this.handling ?? ([] as SpecimenDefinitionTypeTestedHandlingComponent[]);
  }

  /**
   * Assigns the provided SpecimenDefinitionTypeTestedHandlingComponent array value to the `handling` property.
   *
   * @param value - the `handling` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setHandling(value: SpecimenDefinitionTypeTestedHandlingComponent[] | undefined): this {
    if (isDefinedList<SpecimenDefinitionTypeTestedHandlingComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling; Provided value array has an element that is not an instance of SpecimenDefinitionTypeTestedHandlingComponent.`;
      assertFhirTypeList<SpecimenDefinitionTypeTestedHandlingComponent>(value, SpecimenDefinitionTypeTestedHandlingComponent, optErrMsg);
      this.handling = value;
    } else {
      this.handling = undefined;
    }
    return this;
  }

  /**
   * Add the provided SpecimenDefinitionTypeTestedHandlingComponent value to the `handling` array property.
   *
   * @param value - the `handling` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addHandling(value: SpecimenDefinitionTypeTestedHandlingComponent | undefined): this {
    if (isDefined<SpecimenDefinitionTypeTestedHandlingComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling; Provided element is not an instance of SpecimenDefinitionTypeTestedHandlingComponent.`;
      assertFhirType<SpecimenDefinitionTypeTestedHandlingComponent>(value, SpecimenDefinitionTypeTestedHandlingComponent, optErrMsg);
      this.initHandling();
      this.handling?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `handling` property exists and has a value; `false` otherwise
   */
  public hasHandling(): boolean {
    return isDefinedList<SpecimenDefinitionTypeTestedHandlingComponent>(this.handling) && this.handling.some((item: SpecimenDefinitionTypeTestedHandlingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `handling` property
   */
  private initHandling(): void {
    if(!this.hasHandling()) {
      this.handling = [] as SpecimenDefinitionTypeTestedHandlingComponent[];
    }
  }

  /**
   * @returns the `testingDestination` property value as a CodeableConcept array
   */
  public getTestingDestination(): CodeableConcept[] {
    return this.testingDestination ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `testingDestination` property.
   *
   * @param value - the `testingDestination` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTestingDestination(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.testingDestination; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.testingDestination = value;
    } else {
      this.testingDestination = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `testingDestination` array property.
   *
   * @param value - the `testingDestination` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTestingDestination(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.testingDestination; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initTestingDestination();
      this.testingDestination?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `testingDestination` property exists and has a value; `false` otherwise
   */
  public hasTestingDestination(): boolean {
    return isDefinedList<CodeableConcept>(this.testingDestination) && this.testingDestination.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `testingDestination` property
   */
  private initTestingDestination(): void {
    if(!this.hasTestingDestination()) {
      this.testingDestination = [] as CodeableConcept[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SpecimenDefinition.typeTested';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.isDerived,
      this.type_,
      this.preference,
      this.container,
      this.requirement,
      this.retentionTime,
      this.singleUse,
      this.rejectionCriterion,
      this.handling,
      this.testingDestination,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenDefinitionTypeTestedComponent {
    const dest = new SpecimenDefinitionTypeTestedComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenDefinitionTypeTestedComponent): void {
    super.copyValues(dest);
    dest.isDerived = this.isDerived?.copy();
    dest.type_ = this.type_?.copy();
    dest.preference = this.preference ? this.preference.copy() : null;
    dest.container = this.container?.copy();
    dest.requirement = this.requirement?.copy();
    dest.retentionTime = this.retentionTime?.copy();
    dest.singleUse = this.singleUse?.copy();
    const rejectionCriterionList = copyListValues<CodeableConcept>(this.rejectionCriterion);
    dest.rejectionCriterion = rejectionCriterionList.length === 0 ? undefined : rejectionCriterionList;
    const handlingList = copyListValues<SpecimenDefinitionTypeTestedHandlingComponent>(this.handling);
    dest.handling = handlingList.length === 0 ? undefined : handlingList;
    const testingDestinationList = copyListValues<CodeableConcept>(this.testingDestination);
    dest.testingDestination = testingDestinationList.length === 0 ? undefined : testingDestinationList;
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

    if (this.hasIsDerivedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getIsDerivedElement(), 'isDerived', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasPreferenceElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPreferenceElement()!, 'preference', jsonObj);
    } else {
      missingReqdProperties.push(`SpecimenDefinition.typeTested.preference`);
    }

    if (this.hasContainer()) {
      setFhirBackboneElementJson(this.getContainer(), 'container', jsonObj);
    }

    if (this.hasRequirementElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getRequirementElement(), 'requirement', jsonObj);
    }

    if (this.hasRetentionTime()) {
      setFhirComplexJson(this.getRetentionTime(), 'retentionTime', jsonObj);
    }

    if (this.hasSingleUseElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getSingleUseElement(), 'singleUse', jsonObj);
    }

    if (this.hasRejectionCriterion()) {
      setFhirComplexListJson(this.getRejectionCriterion(), 'rejectionCriterion', jsonObj);
    }

    if (this.hasHandling()) {
      setFhirBackboneElementListJson(this.getHandling(), 'handling', jsonObj);
    }

    if (this.hasTestingDestination()) {
      setFhirComplexListJson(this.getTestingDestination(), 'testingDestination', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * SpecimenDefinitionTypeTestedContainerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The specimen\'s container
 * - **Definition:** The specimen\'s container.
 *
 * @category Data Models: Resource
 * @see [FHIR SpecimenDefinition](http://hl7.org/fhir/StructureDefinition/SpecimenDefinition)
 */
export class SpecimenDefinitionTypeTestedContainerComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SpecimenDefinitionTypeTestedContainerComponent` JSON to instantiate the SpecimenDefinitionTypeTestedContainerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenDefinitionTypeTestedContainerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenDefinitionTypeTestedContainerComponent
   * @returns SpecimenDefinitionTypeTestedContainerComponent data model or undefined for `SpecimenDefinitionTypeTestedContainerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenDefinitionTypeTestedContainerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenDefinitionTypeTestedContainerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenDefinitionTypeTestedContainerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = SpecimenDefinitionTypeTestedContainerComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SpecimenDefinitionTypeTestedContainerComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'material';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaterial(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'cap';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCap(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'capacity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCapacity(datatype);
    }

    fieldName = 'minimumVolume[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const minimumVolume: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setMinimumVolume(minimumVolume);

    fieldName = 'additive';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SpecimenDefinitionTypeTestedContainerAdditiveComponent | undefined = SpecimenDefinitionTypeTestedContainerAdditiveComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAdditive(component);
        }
      });
    }

    fieldName = 'preparation';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setPreparationElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SpecimenDefinition.typeTested.container.material Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The material type used for the container
   * - **Definition:** The type of material of the container.
   * - **Comment:** Examples: glass, plastic, metal.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private material?: CodeableConcept | undefined;

  /**
   * SpecimenDefinition.typeTested.container.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of container associated with the kind of specimen
   * - **Definition:** The type of container used to contain this kind of specimen.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * SpecimenDefinition.typeTested.container.cap Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Color of container cap
   * - **Definition:** Color of container cap.
   * - **Requirements:** From ISO 6710-2017 Table F.1 Recommended colour codes.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private cap?: CodeableConcept | undefined;

  /**
   * SpecimenDefinition.typeTested.container.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The description of the kind of container
   * - **Definition:** The textual description of the kind of container.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * SpecimenDefinition.typeTested.container.capacity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The capacity of this kind of container
   * - **Definition:** The capacity (volume or other measure) of this kind of container.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private capacity?: Quantity | undefined;

  /**
   * SpecimenDefinition.typeTested.container.minimumVolume[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SpecimenDefinition.typeTested.container.minimumVolume[x]', ['Quantity','string',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Minimum volume
   * - **Definition:** The minimum volume to be conditioned in the container.
   * - **FHIR Types:**
   *     'Quantity',
   *     'string',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('SpecimenDefinition.typeTested.container.minimumVolume[x]',[
    'Quantity',
    'string',
  ])
  private minimumVolume?: IDataType | undefined;

  /**
   * SpecimenDefinition.typeTested.container.additive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additive associated with container
   * - **Definition:** Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private additive?: SpecimenDefinitionTypeTestedContainerAdditiveComponent[] | undefined;

  /**
   * SpecimenDefinition.typeTested.container.preparation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Special processing applied to the container for this specimen type
   * - **Definition:** Special processing that should be applied to the container for this kind of specimen.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preparation?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `material` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMaterial(): CodeableConcept {
    return this.material ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Material object value to the `material` property.
   *
   * @param value - the `material` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaterial(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.material; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.material = value;
    } else {
      this.material = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `material` property exists and has a value; `false` otherwise
   */
  public hasMaterial(): boolean {
    return isDefined<CodeableConcept>(this.material) && !this.material.isEmpty();
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
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `cap` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCap(): CodeableConcept {
    return this.cap ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Cap object value to the `cap` property.
   *
   * @param value - the `cap` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCap(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.cap; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.cap = value;
    } else {
      this.cap = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `cap` property exists and has a value; `false` otherwise
   */
  public hasCap(): boolean {
    return isDefined<CodeableConcept>(this.cap) && !this.cap.isEmpty();
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
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.description (${String(value)})`;
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
   * @returns the `capacity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getCapacity(): Quantity {
    return this.capacity ?? new Quantity();
  }

  /**
   * Assigns the provided Capacity object value to the `capacity` property.
   *
   * @param value - the `capacity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCapacity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.capacity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.capacity = value;
    } else {
      this.capacity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `capacity` property exists and has a value; `false` otherwise
   */
  public hasCapacity(): boolean {
    return isDefined<Quantity>(this.capacity) && !this.capacity.isEmpty();
  }

  /**
   * @returns the `minimumVolume` property value as a DataType object if defined; else undefined
   */
  public getMinimumVolume(): IDataType | undefined {
    return this.minimumVolume;
  }

  /**
   * Assigns the provided DataType object value to the `minimumVolume` property.
   *
   * @decorator `@ChoiceDataTypes('SpecimenDefinition.typeTested.container.minimumVolume[x]')`
   *
   * @param value - the `minimumVolume` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SpecimenDefinition.typeTested.container.minimumVolume[x]')
  public setMinimumVolume(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.minimumVolume = value;
    } else {
      this.minimumVolume = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `minimumVolume` property exists and has a value; `false` otherwise
   */
  public hasMinimumVolume(): boolean {
    return isDefined<IDataType>(this.minimumVolume) && !this.minimumVolume.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `minimumVolume` property value as a Quantity object if defined; else undefined
   */
  public getMinimumVolumeQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.minimumVolume)) {
      return undefined;
    }
    if (!(this.minimumVolume instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for SpecimenDefinition.typeTested.container.minimumVolume[x]: Expected Quantity but encountered ${this.minimumVolume.fhirType()}`,
      );
    }
    return this.minimumVolume;
  }

  /**
   * @returns `true` if the `minimumVolume` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasMinimumVolumeQuantity(): boolean {
    return this.hasMinimumVolume() && this.minimumVolume instanceof Quantity;
  }

  /**
   * @returns the `minimumVolume` property value as a StringType object if defined; else undefined
   */
  public getMinimumVolumeStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.minimumVolume)) {
      return undefined;
    }
    if (!(this.minimumVolume instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for SpecimenDefinition.typeTested.container.minimumVolume[x]: Expected StringType but encountered ${this.minimumVolume.fhirType()}`,
      );
    }
    return this.minimumVolume;
  }

  /**
   * @returns `true` if the `minimumVolume` property exists as a StringType and has a value; `false` otherwise
   */
  public hasMinimumVolumeStringType(): boolean {
    return this.hasMinimumVolume() && this.minimumVolume instanceof StringType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `additive` property value as a SpecimenDefinitionTypeTestedContainerAdditiveComponent array
   */
  public getAdditive(): SpecimenDefinitionTypeTestedContainerAdditiveComponent[] {
    return this.additive ?? ([] as SpecimenDefinitionTypeTestedContainerAdditiveComponent[]);
  }

  /**
   * Assigns the provided SpecimenDefinitionTypeTestedContainerAdditiveComponent array value to the `additive` property.
   *
   * @param value - the `additive` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAdditive(value: SpecimenDefinitionTypeTestedContainerAdditiveComponent[] | undefined): this {
    if (isDefinedList<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.additive; Provided value array has an element that is not an instance of SpecimenDefinitionTypeTestedContainerAdditiveComponent.`;
      assertFhirTypeList<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(value, SpecimenDefinitionTypeTestedContainerAdditiveComponent, optErrMsg);
      this.additive = value;
    } else {
      this.additive = undefined;
    }
    return this;
  }

  /**
   * Add the provided SpecimenDefinitionTypeTestedContainerAdditiveComponent value to the `additive` array property.
   *
   * @param value - the `additive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAdditive(value: SpecimenDefinitionTypeTestedContainerAdditiveComponent | undefined): this {
    if (isDefined<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.additive; Provided element is not an instance of SpecimenDefinitionTypeTestedContainerAdditiveComponent.`;
      assertFhirType<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(value, SpecimenDefinitionTypeTestedContainerAdditiveComponent, optErrMsg);
      this.initAdditive();
      this.additive?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `additive` property exists and has a value; `false` otherwise
   */
  public hasAdditive(): boolean {
    return isDefinedList<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(this.additive) && this.additive.some((item: SpecimenDefinitionTypeTestedContainerAdditiveComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `additive` property
   */
  private initAdditive(): void {
    if(!this.hasAdditive()) {
      this.additive = [] as SpecimenDefinitionTypeTestedContainerAdditiveComponent[];
    }
  }

  /**
   * @returns the `preparation` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getPreparationElement(): MarkdownType {
    return this.preparation ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `preparation` property.
   *
   * @param element - the `preparation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreparationElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.preparation; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.preparation = element;
    } else {
      this.preparation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preparation` property exists and has a value; `false` otherwise
   */
  public hasPreparationElement(): boolean {
    return isDefined<MarkdownType>(this.preparation) && !this.preparation.isEmpty();
  }

  /**
   * @returns the `preparation` property value as a fhirMarkdown if defined; else undefined
   */
  public getPreparation(): fhirMarkdown | undefined {
    return this.preparation?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `preparation` property.
   *
   * @param value - the `preparation` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreparation(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.container.preparation (${String(value)})`;
      this.preparation = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.preparation = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preparation` property exists and has a value; `false` otherwise
   */
  public hasPreparation(): boolean {
    return this.hasPreparationElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SpecimenDefinition.typeTested.container';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.material,
      this.type_,
      this.cap,
      this.description,
      this.capacity,
      this.minimumVolume,
      this.additive,
      this.preparation,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenDefinitionTypeTestedContainerComponent {
    const dest = new SpecimenDefinitionTypeTestedContainerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenDefinitionTypeTestedContainerComponent): void {
    super.copyValues(dest);
    dest.material = this.material?.copy();
    dest.type_ = this.type_?.copy();
    dest.cap = this.cap?.copy();
    dest.description = this.description?.copy();
    dest.capacity = this.capacity?.copy();
    dest.minimumVolume = this.minimumVolume?.copy() as IDataType;
    const additiveList = copyListValues<SpecimenDefinitionTypeTestedContainerAdditiveComponent>(this.additive);
    dest.additive = additiveList.length === 0 ? undefined : additiveList;
    dest.preparation = this.preparation?.copy();
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

    if (this.hasMaterial()) {
      setFhirComplexJson(this.getMaterial(), 'material', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasCap()) {
      setFhirComplexJson(this.getCap(), 'cap', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasCapacity()) {
      setFhirComplexJson(this.getCapacity(), 'capacity', jsonObj);
    }

    if (this.hasMinimumVolume()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getMinimumVolume()!, 'minimumVolume', jsonObj);
    }

    if (this.hasAdditive()) {
      setFhirBackboneElementListJson(this.getAdditive(), 'additive', jsonObj);
    }

    if (this.hasPreparationElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getPreparationElement(), 'preparation', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SpecimenDefinitionTypeTestedContainerAdditiveComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Additive associated with container
 * - **Definition:** Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 *
 * @category Data Models: Resource
 * @see [FHIR SpecimenDefinition](http://hl7.org/fhir/StructureDefinition/SpecimenDefinition)
 */
export class SpecimenDefinitionTypeTestedContainerAdditiveComponent extends BackboneElement implements IBackboneElement {
  constructor(additive: IDataType | null = null) {
    super();

    this.additive = null;
    if (isDefined<IDataType>(additive)) {
      this.setAdditive(additive);
    }

  }

  /**
   * Parse the provided `SpecimenDefinitionTypeTestedContainerAdditiveComponent` JSON to instantiate the SpecimenDefinitionTypeTestedContainerAdditiveComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenDefinitionTypeTestedContainerAdditiveComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenDefinitionTypeTestedContainerAdditiveComponent
   * @returns SpecimenDefinitionTypeTestedContainerAdditiveComponent data model or undefined for `SpecimenDefinitionTypeTestedContainerAdditiveComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenDefinitionTypeTestedContainerAdditiveComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenDefinitionTypeTestedContainerAdditiveComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenDefinitionTypeTestedContainerAdditiveComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = SpecimenDefinitionTypeTestedContainerAdditiveComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SpecimenDefinitionTypeTestedContainerAdditiveComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'additive[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const additive: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (additive === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setAdditive(additive);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SpecimenDefinition.typeTested.container.additive.additive[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('SpecimenDefinition.typeTested.container.additive.additive[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additive associated with container
   * - **Definition:** Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('SpecimenDefinition.typeTested.container.additive.additive[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private additive: IDataType | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `additive` property value as a DataType object; else null
   */
  public getAdditive(): IDataType | null {
    return this.additive;
  }

  /**
   * Assigns the provided DataType object value to the `additive` property.
   *
   * @decorator `@ChoiceDataTypes('SpecimenDefinition.typeTested.container.additive.additive[x]')`
   *
   * @param value - the `additive` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('SpecimenDefinition.typeTested.container.additive.additive[x]')
  public setAdditive(value: IDataType): this {
    assertIsDefined<IDataType>(value, `SpecimenDefinition.typeTested.container.additive.additive[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.additive = value;
    return this;
  }

  /**
   * @returns `true` if the `additive` property exists and has a value; `false` otherwise
   */
  public hasAdditive(): boolean {
    return isDefined<IDataType>(this.additive) && !this.additive.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `additive` property value as a CodeableConcept object if defined; else null
   */
  public getAdditiveCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.additive)) {
      return null;
    }
    if (!(this.additive instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for SpecimenDefinition.typeTested.container.additive.additive[x]: Expected CodeableConcept but encountered ${this.additive.fhirType()}`,
      );
    }
    return this.additive;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasAdditiveCodeableConcept(): boolean {
    return this.hasAdditive() && this.additive instanceof CodeableConcept;
  }

  /**
   * @returns the `additive` property value as a Reference object if defined; else null
   */
  public getAdditiveReference(): Reference | null {
    if (!isDefined<IDataType>(this.additive)) {
      return null;
    }
    if (!(this.additive instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for SpecimenDefinition.typeTested.container.additive.additive[x]: Expected Reference but encountered ${this.additive.fhirType()}`,
      );
    }
    return this.additive;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasAdditiveReference(): boolean {
    return this.hasAdditive() && this.additive instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SpecimenDefinition.typeTested.container.additive';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.additive,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenDefinitionTypeTestedContainerAdditiveComponent {
    const dest = new SpecimenDefinitionTypeTestedContainerAdditiveComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenDefinitionTypeTestedContainerAdditiveComponent): void {
    super.copyValues(dest);
    dest.additive = this.additive ? this.additive.copy() as IDataType : null;
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

    if (this.hasAdditive()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAdditive()!, 'additive', jsonObj);
    } else {
      missingReqdProperties.push(`SpecimenDefinition.typeTested.container.additive.additive[x]`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * SpecimenDefinitionTypeTestedHandlingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Specimen handling before testing
 * - **Definition:** Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 *
 * @category Data Models: Resource
 * @see [FHIR SpecimenDefinition](http://hl7.org/fhir/StructureDefinition/SpecimenDefinition)
 */
export class SpecimenDefinitionTypeTestedHandlingComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SpecimenDefinitionTypeTestedHandlingComponent` JSON to instantiate the SpecimenDefinitionTypeTestedHandlingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenDefinitionTypeTestedHandlingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenDefinitionTypeTestedHandlingComponent
   * @returns SpecimenDefinitionTypeTestedHandlingComponent data model or undefined for `SpecimenDefinitionTypeTestedHandlingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenDefinitionTypeTestedHandlingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenDefinitionTypeTestedHandlingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenDefinitionTypeTestedHandlingComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'temperatureQualifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTemperatureQualifier(datatype);
    }

    fieldName = 'temperatureRange';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Range | undefined = Range.parse(classJsonObj[fieldName]!, sourceField);
      instance.setTemperatureRange(datatype);
    }

    fieldName = 'maxDuration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMaxDuration(datatype);
    }

    fieldName = 'instruction';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setInstructionElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * SpecimenDefinition.typeTested.handling.temperatureQualifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Qualifies the interval of temperature
   * - **Definition:** It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private temperatureQualifier?: CodeableConcept | undefined;

  /**
   * SpecimenDefinition.typeTested.handling.temperatureRange Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Temperature range for these handling instructions
   * - **Definition:** The temperature interval for this set of handling instructions.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private temperatureRange?: Range | undefined;

  /**
   * SpecimenDefinition.typeTested.handling.maxDuration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Maximum preservation time
   * - **Definition:** The maximum time interval of preservation of the specimen with these conditions.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private maxDuration?: Duration | undefined;

  /**
   * SpecimenDefinition.typeTested.handling.instruction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preservation instruction
   * - **Definition:** Additional textual instructions for the preservation or transport of the specimen. For instance, \'Protect from light exposure\'.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instruction?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `temperatureQualifier` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getTemperatureQualifier(): CodeableConcept {
    return this.temperatureQualifier ?? new CodeableConcept();
  }

  /**
   * Assigns the provided TemperatureQualifier object value to the `temperatureQualifier` property.
   *
   * @param value - the `temperatureQualifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTemperatureQualifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling.temperatureQualifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.temperatureQualifier = value;
    } else {
      this.temperatureQualifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `temperatureQualifier` property exists and has a value; `false` otherwise
   */
  public hasTemperatureQualifier(): boolean {
    return isDefined<CodeableConcept>(this.temperatureQualifier) && !this.temperatureQualifier.isEmpty();
  }

  /**
   * @returns the `temperatureRange` property value as a Range object if defined; else an empty Range object
   */
  public getTemperatureRange(): Range {
    return this.temperatureRange ?? new Range();
  }

  /**
   * Assigns the provided TemperatureRange object value to the `temperatureRange` property.
   *
   * @param value - the `temperatureRange` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTemperatureRange(value: Range | undefined): this {
    if (isDefined<Range>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling.temperatureRange; Provided element is not an instance of Range.`;
      assertFhirType<Range>(value, Range, optErrMsg);
      this.temperatureRange = value;
    } else {
      this.temperatureRange = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `temperatureRange` property exists and has a value; `false` otherwise
   */
  public hasTemperatureRange(): boolean {
    return isDefined<Range>(this.temperatureRange) && !this.temperatureRange.isEmpty();
  }

  /**
   * @returns the `maxDuration` property value as a Duration object if defined; else an empty Duration object
   */
  public getMaxDuration(): Duration {
    return this.maxDuration ?? new Duration();
  }

  /**
   * Assigns the provided MaxDuration object value to the `maxDuration` property.
   *
   * @param value - the `maxDuration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMaxDuration(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling.maxDuration; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.maxDuration = value;
    } else {
      this.maxDuration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `maxDuration` property exists and has a value; `false` otherwise
   */
  public hasMaxDuration(): boolean {
    return isDefined<Duration>(this.maxDuration) && !this.maxDuration.isEmpty();
  }

  /**
   * @returns the `instruction` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getInstructionElement(): MarkdownType {
    return this.instruction ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instruction` property.
   *
   * @param element - the `instruction` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstructionElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling.instruction; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.instruction = element;
    } else {
      this.instruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instruction` property exists and has a value; `false` otherwise
   */
  public hasInstructionElement(): boolean {
    return isDefined<MarkdownType>(this.instruction) && !this.instruction.isEmpty();
  }

  /**
   * @returns the `instruction` property value as a fhirMarkdown if defined; else undefined
   */
  public getInstruction(): fhirMarkdown | undefined {
    return this.instruction?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instruction` property.
   *
   * @param value - the `instruction` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstruction(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid SpecimenDefinition.typeTested.handling.instruction (${String(value)})`;
      this.instruction = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.instruction = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instruction` property exists and has a value; `false` otherwise
   */
  public hasInstruction(): boolean {
    return this.hasInstructionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'SpecimenDefinition.typeTested.handling';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.temperatureQualifier,
      this.temperatureRange,
      this.maxDuration,
      this.instruction,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenDefinitionTypeTestedHandlingComponent {
    const dest = new SpecimenDefinitionTypeTestedHandlingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenDefinitionTypeTestedHandlingComponent): void {
    super.copyValues(dest);
    dest.temperatureQualifier = this.temperatureQualifier?.copy();
    dest.temperatureRange = this.temperatureRange?.copy();
    dest.maxDuration = this.maxDuration?.copy();
    dest.instruction = this.instruction?.copy();
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

    if (this.hasTemperatureQualifier()) {
      setFhirComplexJson(this.getTemperatureQualifier(), 'temperatureQualifier', jsonObj);
    }

    if (this.hasTemperatureRange()) {
      setFhirComplexJson(this.getTemperatureRange(), 'temperatureRange', jsonObj);
    }

    if (this.hasMaxDuration()) {
      setFhirComplexJson(this.getMaxDuration(), 'maxDuration', jsonObj);
    }

    if (this.hasInstructionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getInstructionElement(), 'instruction', jsonObj);
    }

    return jsonObj;
  }
}
