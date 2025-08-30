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
 * ObservationDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ObservationDefinition
 * StructureDefinition.name: ObservationDefinition
 * StructureDefinition.description: Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
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
  DateType,
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { AdministrativeGenderEnum } from '../code-systems/AdministrativeGenderEnum';
import { CodeableConcept, Coding, ContactDetail, Identifier, PARSABLE_DATATYPE_MAP, Period, Range, Reference, UsageContext } from '../complex-types/complex-datatypes';
import { ObservationRangeCategoryEnum } from '../code-systems/ObservationRangeCategoryEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PermittedDataTypeEnum } from '../code-systems/PermittedDataTypeEnum';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ObservationDefinition Class
 *
 * @remarks
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 *
 * In a catalog of health-related services that use or produce observations and measurements, this resource describes the expected characteristics of these observation / measurements.
 *
 * **FHIR Specification**
 * - **Short:** Definition of an observation
 * - **Definition:** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 * - **Comment:** An instance of this resource informs the consumer of a health-related service (such as a lab diagnostic test or panel) about how the observations used or produced by this service will look like.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR ObservationDefinition](http://hl7.org/fhir/StructureDefinition/ObservationDefinition)
 */
export class ObservationDefinition extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, code: CodeableConcept | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.permittedDataTypeEnum = new PermittedDataTypeEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'ObservationDefinition.status',
    );

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `ObservationDefinition` JSON to instantiate the ObservationDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `ObservationDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ObservationDefinition
   * @returns ObservationDefinition data model or undefined for `ObservationDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ObservationDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ObservationDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ObservationDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ObservationDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ObservationDefinition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ObservationDefinition`;
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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSubject(datatype);
        }
      });
    }

    fieldName = 'performerType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerformerType(datatype);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCategory(datatype);
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

    fieldName = 'permittedDataType';
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
          instance.addPermittedDataTypeElement(datatype);
        }
      });
    }

    fieldName = 'multipleResultsAllowed';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setMultipleResultsAllowedElement(datatype);
    }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBodySite(datatype);
    }

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMethod(datatype);
    }

    fieldName = 'specimen';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSpecimen(datatype);
        }
      });
  }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDevice(datatype);
        }
      });
  }

    fieldName = 'preferredReportName';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPreferredReportNameElement(datatype);
    }

    fieldName = 'permittedUnit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPermittedUnit(datatype);
        }
      });
    }

    fieldName = 'qualifiedValue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ObservationDefinitionQualifiedValueComponent | undefined = ObservationDefinitionQualifiedValueComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addQualifiedValue(component);
        }
      });
    }

    fieldName = 'hasMember';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addHasMember(datatype);
        }
      });
  }

    fieldName = 'component';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ObservationDefinitionComponentComponent | undefined = ObservationDefinitionComponentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addComponent(component);
        }
      });
    }

    return instance;
  }

  /**
   * ObservationDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Logical canonical URL to reference this ObservationDefinition (globally unique)
   * - **Definition:** An absolute URL that is used to identify this ObservationDefinition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this ObservationDefinition is (or will be) published. The URL SHOULD include the major version of the ObservationDefinition. For more information see Technical and Business Versions.
   * - **Comment:** Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred. This is the URI that will be used when making canonical references to this resource.
   * - **Requirements:** Allows the ObservationDefinition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * ObservationDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier of the ObservationDefinition
   * - **Definition:** Business identifiers assigned to this ObservationDefinition. by the performer and/or other systems. These identifiers remain constant as the resource is updated and propagates from server to server.
   * - **Comment:** This is a business identifier, not a resource identifier. It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.
   * - **Requirements:** Allows identification of the ObservationDefinition as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * ObservationDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the ObservationDefinition
   * - **Definition:** The identifier that is used to identify this version of the ObservationDefinition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the ObservationDefinition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions are orderable.
   * - **Comment:** There may be multiple different instances of an observationDefinition that have the same identifier but different versions.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * ObservationDefinition.versionAlgorithm[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ObservationDefinition.versionAlgorithm[x]', ['string','Coding',]`
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
  @ChoiceDataTypesMeta('ObservationDefinition.versionAlgorithm[x]',[
    'string',
    'Coding',
  ])
  private versionAlgorithm?: IDataType | undefined;

  /**
   * ObservationDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this ObservationDefinition (computer friendly)
   * - **Definition:** A natural language name identifying the ObservationDefinition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * ObservationDefinition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this ObservationDefinition (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the ObservationDefinition.
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
   * ObservationDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The current state of the ObservationDefinition.
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
   * ObservationDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If for testing purposes, not real usage
   * - **Definition:** A flag to indicate that this ObservationDefinition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of ObservationDefinition that are appropriate for use vs. not.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * ObservationDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date (and optionally time) when the ObservationDefinition was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the ObservationDefinition changes.
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the ObservationDefinition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * ObservationDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name of the individual or organization that published the ObservationDefinition
   * - **Definition:** Helps establish the "authority/credibility" of the ObservationDefinition. May also allow for contact.
   * - **Requirements:** Usually an organization, but may be an individual. The publisher (or steward) of the ObservationDefinition is the organization or individual primarily responsible for the maintenance and upkeep of the ObservationDefinition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the ObservationDefinition. This item SHOULD be populated unless the information is available from context.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * ObservationDefinition.contact Element
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
   * ObservationDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the ObservationDefinition
   * - **Definition:** A free text natural language description of the ObservationDefinition from the consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the module as conveyed in the text field of the resource itself. This item SHOULD be populated unless the information is available from context.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ObservationDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Content intends to support these contexts
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate ObservationDefinition instances.
   * - **Comment:** When multiple usageContexts are specified, there is no expectation for whether all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * ObservationDefinition.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for this ObservationDefinition (if applicable)
   * - **Definition:** A jurisdiction in which the ObservationDefinition is intended to be used.
   * - **Comment:** It may be possible for the ObservationDefinition to be used in jurisdictions other than those for which it was originally designed or intended. DEPRECATION NOTE: For consistency, implementations are encouraged to migrate to using the new \'jurisdiction\' code in the useContext element.  (I.e. useContext.code indicating http://terminology.hl7.org/CodeSystem/usage-context-type#jurisdiction and useContext.valueCodeableConcept indicating the jurisdiction.)
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * ObservationDefinition.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this ObservationDefinition is defined
   * - **Definition:** Explains why this ObservationDefinition is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the ObservationDefinition. Rather it is for traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is. This may be used to point to source materials or specifications that drove the structure of this ObservationDefinition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * ObservationDefinition.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** Copyright statement relating to the ObservationDefinition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the ObservationDefinition.
   * - **Requirements:** Consumers of the ObservationDefinition must be able to determine any legal restrictions on the use of the artifact and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * ObservationDefinition.copyrightLabel Element
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
   * ObservationDefinition.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When ObservationDefinition was approved by publisher
   * - **Definition:** The date on which the asset content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The date may be more recent than the approval date because of minor changes / editorial corrections. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * ObservationDefinition.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date on which the asset content was last reviewed by the publisher
   * - **Definition:** The date on which the asset content was last reviewed. Review happens periodically after that, but doesn\'t change the original approval date.
   * - **Comment:** If specified, this is usually after the approval date. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private lastReviewDate?: DateType | undefined;

  /**
   * ObservationDefinition.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The effective date range for the ObservationDefinition
   * - **Definition:** The period during which the ObservationDefinition content was or is planned to be effective.
   * - **Comment:** The effective period for an ObservationDefinition determines when the content is applicable for usage and is independent of publication and review dates. For example, an observation definition intended to be used for the year 2021 might be published in 2020. See guidance around (not) making local changes to elements [here](https://hl7.org/fhir/canonicalresource.html#localization).
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectivePeriod?: Period | undefined;

  /**
   * ObservationDefinition.derivedFromCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Based on FHIR definition of another observation
   * - **Definition:** The canonical URL pointing to another FHIR-defined ObservationDefinition that is adhered to in whole or in part by this definition.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private derivedFromCanonical?: CanonicalType[] | undefined;

  /**
   * ObservationDefinition.derivedFromUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Based on external definition
   * - **Definition:** The URL pointing to an externally-defined observation definition, guideline or other definition that is adhered to in whole or in part by this definition.
   * - **Requirements:** Observation definitions may be refinements of other definitions.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private derivedFromUri?: UriType[] | undefined;

  /**
   * ObservationDefinition.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of subject for the defined observation
   * - **Definition:** A code that describes the intended kind of subject of Observation instances conforming to this ObservationDefinition.
   * - **Comment:** Examples: person, animal, device, air, surface ....
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: CodeableConcept[] | undefined;

  /**
   * ObservationDefinition.performerType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Desired kind of performer for such kind of observation
   * - **Definition:** The type of individual/organization/device that is expected to act upon instances of this definition.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private performerType?: CodeableConcept | undefined;

  /**
   * ObservationDefinition.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** General type of observation
   * - **Definition:** A code that classifies the general type of observation.
   * - **Comment:** This element allows various categorization schemes based on the owner\'s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
   * - **Requirements:** Used for filtering what kinds of observations are retrieved and displayed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private category?: CodeableConcept[] | undefined;

  /**
   * ObservationDefinition.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of observation
   * - **Definition:** Describes what will be observed. Sometimes this is called the observation "name".
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * FHIR CodeSystem: PermittedDataType
   *
   * @see {@link PermittedDataTypeEnum }
   */
  private readonly permittedDataTypeEnum: PermittedDataTypeEnum;

  /**
   * ObservationDefinition.permittedDataType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period
   * - **Definition:** The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  private permittedDataType?: EnumCodeType[] | undefined;

  /**
   * ObservationDefinition.multipleResultsAllowed Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Multiple results allowed for conforming observations
   * - **Definition:** Multiple results allowed for observations conforming to this ObservationDefinition.
   * - **Comment:** An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private multipleResultsAllowed?: BooleanType | undefined;

  /**
   * ObservationDefinition.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Body part to be observed
   * - **Definition:** The site on the subject\'s body where the  observation is to be made.
   * - **Comment:** Only used if the defined observation is to be made directly on a body part and if this body part is not implied by code found in ObservationDefinition.code. Not used for in vitro diagnostic observations.  Example: 14975008 |Forearm structure|.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private bodySite?: CodeableConcept | undefined;

  /**
   * ObservationDefinition.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Method used to produce the observation
   * - **Definition:** The method or technique used to perform the observation.
   * - **Comment:** Only used if not implicit in observation code Example: 702659008 |Automated count technique|.
   * - **Requirements:** In some cases, method can impact results.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private method?: CodeableConcept | undefined;

  /**
   * ObservationDefinition.specimen Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of specimen used by this type of observation
   * - **Definition:** The kind of specimen that this type of observation is produced on.
   * - **Comment:** Only used for in vitro observations. When multiple occurrences of specimen are present, they are to be combined with a logical AND: all specified specimens  are needed for the observation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SpecimenDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specimen?: Reference[] | undefined;

  /**
   * ObservationDefinition.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Measurement device or model of device
   * - **Definition:** The measurement model of device or actual device used to produce observations of this type.
   * - **Comment:** When multiple occurrences of device are present, they are to be combined with a logical OR: at least one of the specified devices is used to produce the observation.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DeviceDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private device?: Reference[] | undefined;

  /**
   * ObservationDefinition.preferredReportName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The preferred name to be used when reporting the observation results
   * - **Definition:** The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preferredReportName?: StringType | undefined;

  /**
   * ObservationDefinition.permittedUnit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unit for quantitative results
   * - **Definition:** Units allowed for the valueQuantity element in the instance observations conforming to this ObservationDefinition.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private permittedUnit?: Coding[] | undefined;

  /**
   * ObservationDefinition.qualifiedValue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Set of qualified values for observation results
   * - **Definition:** A set of qualified values associated with a context and a set of conditions -  provides a range for quantitative and ordinal observations and a collection of value sets for qualitative observations.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private qualifiedValue?: ObservationDefinitionQualifiedValueComponent[] | undefined;

  /**
   * ObservationDefinition.hasMember Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Definitions of related resources belonging to this kind of observation group
   * - **Definition:** This ObservationDefinition defines a group  observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/Questionnaire',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private hasMember?: Reference[] | undefined;

  /**
   * ObservationDefinition.component Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Component results
   * - **Definition:** Some observations have multiple component observations, expressed as separate code value pairs.
   * - **Requirements:** Component observations share the same attributes as the primary observation and are always treated as a part of it (they are not separable).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private component?: ObservationDefinitionComponentComponent[] | undefined;

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
      const optErrMsg = `Invalid ObservationDefinition.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.url (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ObservationDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.version (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('ObservationDefinition.versionAlgorithm[x]')`
   *
   * @param value - the `versionAlgorithm` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ObservationDefinition.versionAlgorithm[x]')
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
        `DataType mismatch for ObservationDefinition.versionAlgorithm[x]: Expected StringType but encountered ${this.versionAlgorithm.fhirType()}`,
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
        `DataType mismatch for ObservationDefinition.versionAlgorithm[x]: Expected Coding but encountered ${this.versionAlgorithm.fhirType()}`,
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
      const optErrMsg = `Invalid ObservationDefinition.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.name (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.title (${String(value)})`;
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
      const errMsgPrefix = `Invalid ObservationDefinition.status`;
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
      const optErrMsg = `Invalid ObservationDefinition.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.status (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.experimental (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ObservationDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ObservationDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ObservationDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ObservationDefinition.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ObservationDefinition.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ObservationDefinition.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.copyrightLabel; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.copyrightLabel (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.approvalDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.approvalDate (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.lastReviewDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.lastReviewDate (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.effectivePeriod; Provided element is not an instance of Period.`;
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
      const optErrMsg = `Invalid ObservationDefinition.derivedFromCanonical; Provided value array has an element that is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.derivedFromCanonical; Provided element is not an instance of CanonicalType.`;
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
        const optErrMsg = `Invalid ObservationDefinition.derivedFromCanonical array item (${String(derivedFromCanonicalValue)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.derivedFromCanonical array item (${String(value)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.derivedFromUri; Provided value array has an element that is not an instance of UriType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.derivedFromUri; Provided element is not an instance of UriType.`;
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
        const optErrMsg = `Invalid ObservationDefinition.derivedFromUri array item (${String(derivedFromUriValue)})`;
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
      const optErrMsg = `Invalid ObservationDefinition.derivedFromUri array item (${String(value)})`;
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
   * @returns the `subject` property value as a CodeableConcept array
   */
  public getSubject(): CodeableConcept[] {
    return this.subject ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `subject` property.
   *
   * @param value - the `subject` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSubject(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.subject; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.subject = value;
    } else {
      this.subject = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `subject` array property.
   *
   * @param value - the `subject` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addSubject(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.subject; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initSubject();
      this.subject?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `subject` property exists and has a value; `false` otherwise
   */
  public hasSubject(): boolean {
    return isDefinedList<CodeableConcept>(this.subject) && this.subject.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `subject` property
   */
  private initSubject(): void {
    if(!this.hasSubject()) {
      this.subject = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `performerType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPerformerType(): CodeableConcept {
    return this.performerType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PerformerType object value to the `performerType` property.
   *
   * @param value - the `performerType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformerType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.performerType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.performerType = value;
    } else {
      this.performerType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performerType` property exists and has a value; `false` otherwise
   */
  public hasPerformerType(): boolean {
    return isDefined<CodeableConcept>(this.performerType) && !this.performerType.isEmpty();
  }

  /**
   * @returns the `category` property value as a CodeableConcept array
   */
  public getCategory(): CodeableConcept[] {
    return this.category ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `category` property.
   *
   * @param value - the `category` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCategory(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.category; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.category = value;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `category` array property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCategory(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.category; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCategory();
      this.category?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return isDefinedList<CodeableConcept>(this.category) && this.category.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `category` property
   */
  private initCategory(): void {
    if(!this.hasCategory()) {
      this.category = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid ObservationDefinition.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `permittedDataType` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public getPermittedDataTypeEnumType(): EnumCodeType[] {
    return this.permittedDataType ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `permittedDataType` property.
   *
   * @param enumType - the `permittedDataType` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public setPermittedDataTypeEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ObservationDefinition.permittedDataType`;
      assertEnumCodeTypeList<PermittedDataTypeEnum>(enumType, PermittedDataTypeEnum, errMsgPrefix);
      this.permittedDataType = enumType;
    } else {
      this.permittedDataType = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `permittedDataType` array property.
   *
   * @param enumType - the `permittedDataType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public addPermittedDataTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ObservationDefinition.permittedDataType`;
      assertEnumCodeType<PermittedDataTypeEnum>(enumType, PermittedDataTypeEnum, errMsgPrefix);
      this.initPermittedDataType();
      this.permittedDataType?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `permittedDataType` property exists and has a value; `false` otherwise
   */
  public hasPermittedDataTypeEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.permittedDataType) && this.permittedDataType.some((item: EnumCodeType) => !item.isEmpty()) && this.permittedDataType.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `permittedDataType` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public getPermittedDataTypeElement(): CodeType[] {
    if (this.permittedDataType === undefined) {
      return [] as CodeType[];
    }
    return this.permittedDataType as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `permittedDataType` property.
   *
   * @param element - the `permittedDataType` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public setPermittedDataTypeElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.permittedDataType; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.permittedDataTypeEnum));
      });
      this.permittedDataType = enumCodeTypes;
    } else {
      this.permittedDataType = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `permittedDataType` array property.
   *
   * @param element - the `permittedDataType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public addPermittedDataTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.permittedDataType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initPermittedDataType();
      this.permittedDataType?.push(new EnumCodeType(element, this.permittedDataTypeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `permittedDataType` property exists and has a value; `false` otherwise
   */
  public hasPermittedDataTypeElement(): boolean {
    return this.hasPermittedDataTypeEnumType();
  }

  /**
   * @returns the `permittedDataType` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public getPermittedDataType(): fhirCode[] {
    if (this.permittedDataType === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.permittedDataType) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `permittedDataType` property.
   *
   * @param value - the `permittedDataType` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public setPermittedDataType(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid ObservationDefinition.permittedDataType; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.permittedDataTypeEnum));
      });
      this.permittedDataType = enumCodeTypes;
    } else {
      this.permittedDataType = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `permittedDataType` array property.
   *
   * @param value - the `permittedDataType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public addPermittedDataType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initPermittedDataType();
      const optErrMsg = `Invalid ObservationDefinition.permittedDataType; Provided value is not an instance of fhirCode.`;
      this.permittedDataType?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.permittedDataTypeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `permittedDataType` property exists and has a value; `false` otherwise
   */
  public hasPermittedDataType(): boolean {
    return this.hasPermittedDataTypeEnumType();
  }

  /**
   * Initialize the permittedDataType property
   */
  private initPermittedDataType(): void {
    if(!this.hasPermittedDataTypeEnumType()) {
      this.permittedDataType = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `multipleResultsAllowed` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getMultipleResultsAllowedElement(): BooleanType {
    return this.multipleResultsAllowed ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `multipleResultsAllowed` property.
   *
   * @param element - the `multipleResultsAllowed` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMultipleResultsAllowedElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.multipleResultsAllowed; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.multipleResultsAllowed = element;
    } else {
      this.multipleResultsAllowed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `multipleResultsAllowed` property exists and has a value; `false` otherwise
   */
  public hasMultipleResultsAllowedElement(): boolean {
    return isDefined<BooleanType>(this.multipleResultsAllowed) && !this.multipleResultsAllowed.isEmpty();
  }

  /**
   * @returns the `multipleResultsAllowed` property value as a fhirBoolean if defined; else undefined
   */
  public getMultipleResultsAllowed(): fhirBoolean | undefined {
    return this.multipleResultsAllowed?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `multipleResultsAllowed` property.
   *
   * @param value - the `multipleResultsAllowed` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setMultipleResultsAllowed(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.multipleResultsAllowed (${String(value)})`;
      this.multipleResultsAllowed = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.multipleResultsAllowed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `multipleResultsAllowed` property exists and has a value; `false` otherwise
   */
  public hasMultipleResultsAllowed(): boolean {
    return this.hasMultipleResultsAllowedElement();
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
      const optErrMsg = `Invalid ObservationDefinition.bodySite; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `method` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getMethod(): CodeableConcept {
    return this.method ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Method object value to the `method` property.
   *
   * @param value - the `method` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMethod(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.method; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.method = value;
    } else {
      this.method = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `method` property exists and has a value; `false` otherwise
   */
  public hasMethod(): boolean {
    return isDefined<CodeableConcept>(this.method) && !this.method.isEmpty();
  }

  /**
   * @returns the `specimen` property value as a Reference array
   */
  public getSpecimen(): Reference[] {
    return this.specimen ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `specimen` property.
   *
   * @decorator `@ReferenceTargets('ObservationDefinition.specimen', ['SpecimenDefinition',])`
   *
   * @param value - the `specimen` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ObservationDefinition.specimen', [
    'SpecimenDefinition',
  ])
  public setSpecimen(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.specimen = value;
    } else {
      this.specimen = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `specimen` array property.
   *
   * @decorator `@ReferenceTargets('ObservationDefinition.specimen', ['SpecimenDefinition',])`
   *
   * @param value - the `specimen` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ObservationDefinition.specimen', [
    'SpecimenDefinition',
  ])
  public addSpecimen(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSpecimen();
      this.specimen?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specimen` property exists and has a value; `false` otherwise
   */
  public hasSpecimen(): boolean {
    return isDefinedList<Reference>(this.specimen) && this.specimen.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `specimen` property
   */
  private initSpecimen(): void {
    if (!this.hasSpecimen()) {
      this.specimen = [] as Reference[];
    }
  }

  /**
   * @returns the `device` property value as a Reference array
   */
  public getDevice(): Reference[] {
    return this.device ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `device` property.
   *
   * @decorator `@ReferenceTargets('ObservationDefinition.device', ['DeviceDefinition','Device',])`
   *
   * @param value - the `device` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ObservationDefinition.device', [
    'DeviceDefinition',
  
    'Device',
  ])
  public setDevice(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.device = value;
    } else {
      this.device = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `device` array property.
   *
   * @decorator `@ReferenceTargets('ObservationDefinition.device', ['DeviceDefinition','Device',])`
   *
   * @param value - the `device` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ObservationDefinition.device', [
    'DeviceDefinition',
  
    'Device',
  ])
  public addDevice(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDevice();
      this.device?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefinedList<Reference>(this.device) && this.device.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `device` property
   */
  private initDevice(): void {
    if (!this.hasDevice()) {
      this.device = [] as Reference[];
    }
  }

  /**
   * @returns the `preferredReportName` property value as a StringType object if defined; else an empty StringType object
   */
  public getPreferredReportNameElement(): StringType {
    return this.preferredReportName ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `preferredReportName` property.
   *
   * @param element - the `preferredReportName` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreferredReportNameElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.preferredReportName; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.preferredReportName = element;
    } else {
      this.preferredReportName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preferredReportName` property exists and has a value; `false` otherwise
   */
  public hasPreferredReportNameElement(): boolean {
    return isDefined<StringType>(this.preferredReportName) && !this.preferredReportName.isEmpty();
  }

  /**
   * @returns the `preferredReportName` property value as a fhirString if defined; else undefined
   */
  public getPreferredReportName(): fhirString | undefined {
    return this.preferredReportName?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `preferredReportName` property.
   *
   * @param value - the `preferredReportName` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPreferredReportName(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.preferredReportName (${String(value)})`;
      this.preferredReportName = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.preferredReportName = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `preferredReportName` property exists and has a value; `false` otherwise
   */
  public hasPreferredReportName(): boolean {
    return this.hasPreferredReportNameElement();
  }

  /**
   * @returns the `permittedUnit` property value as a Coding array
   */
  public getPermittedUnit(): Coding[] {
    return this.permittedUnit ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `permittedUnit` property.
   *
   * @param value - the `permittedUnit` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPermittedUnit(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.permittedUnit; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.permittedUnit = value;
    } else {
      this.permittedUnit = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `permittedUnit` array property.
   *
   * @param value - the `permittedUnit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPermittedUnit(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.permittedUnit; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initPermittedUnit();
      this.permittedUnit?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `permittedUnit` property exists and has a value; `false` otherwise
   */
  public hasPermittedUnit(): boolean {
    return isDefinedList<Coding>(this.permittedUnit) && this.permittedUnit.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `permittedUnit` property
   */
  private initPermittedUnit(): void {
    if(!this.hasPermittedUnit()) {
      this.permittedUnit = [] as Coding[];
    }
  }

  /**
   * @returns the `qualifiedValue` property value as a ObservationDefinitionQualifiedValueComponent array
   */
  public getQualifiedValue(): ObservationDefinitionQualifiedValueComponent[] {
    return this.qualifiedValue ?? ([] as ObservationDefinitionQualifiedValueComponent[]);
  }

  /**
   * Assigns the provided ObservationDefinitionQualifiedValueComponent array value to the `qualifiedValue` property.
   *
   * @param value - the `qualifiedValue` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQualifiedValue(value: ObservationDefinitionQualifiedValueComponent[] | undefined): this {
    if (isDefinedList<ObservationDefinitionQualifiedValueComponent>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue; Provided value array has an element that is not an instance of ObservationDefinitionQualifiedValueComponent.`;
      assertFhirTypeList<ObservationDefinitionQualifiedValueComponent>(value, ObservationDefinitionQualifiedValueComponent, optErrMsg);
      this.qualifiedValue = value;
    } else {
      this.qualifiedValue = undefined;
    }
    return this;
  }

  /**
   * Add the provided ObservationDefinitionQualifiedValueComponent value to the `qualifiedValue` array property.
   *
   * @param value - the `qualifiedValue` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addQualifiedValue(value: ObservationDefinitionQualifiedValueComponent | undefined): this {
    if (isDefined<ObservationDefinitionQualifiedValueComponent>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue; Provided element is not an instance of ObservationDefinitionQualifiedValueComponent.`;
      assertFhirType<ObservationDefinitionQualifiedValueComponent>(value, ObservationDefinitionQualifiedValueComponent, optErrMsg);
      this.initQualifiedValue();
      this.qualifiedValue?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `qualifiedValue` property exists and has a value; `false` otherwise
   */
  public hasQualifiedValue(): boolean {
    return isDefinedList<ObservationDefinitionQualifiedValueComponent>(this.qualifiedValue) && this.qualifiedValue.some((item: ObservationDefinitionQualifiedValueComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `qualifiedValue` property
   */
  private initQualifiedValue(): void {
    if(!this.hasQualifiedValue()) {
      this.qualifiedValue = [] as ObservationDefinitionQualifiedValueComponent[];
    }
  }

  /**
   * @returns the `hasMember` property value as a Reference array
   */
  public getHasMember(): Reference[] {
    return this.hasMember ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `hasMember` property.
   *
   * @decorator `@ReferenceTargets('ObservationDefinition.hasMember', ['ObservationDefinition','Questionnaire',])`
   *
   * @param value - the `hasMember` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ObservationDefinition.hasMember', [
    'ObservationDefinition',
  
    'Questionnaire',
  ])
  public setHasMember(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.hasMember = value;
    } else {
      this.hasMember = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `hasMember` array property.
   *
   * @decorator `@ReferenceTargets('ObservationDefinition.hasMember', ['ObservationDefinition','Questionnaire',])`
   *
   * @param value - the `hasMember` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ObservationDefinition.hasMember', [
    'ObservationDefinition',
  
    'Questionnaire',
  ])
  public addHasMember(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initHasMember();
      this.hasMember?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `hasMember` property exists and has a value; `false` otherwise
   */
  public hasHasMember(): boolean {
    return isDefinedList<Reference>(this.hasMember) && this.hasMember.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `hasMember` property
   */
  private initHasMember(): void {
    if (!this.hasHasMember()) {
      this.hasMember = [] as Reference[];
    }
  }

  /**
   * @returns the `component` property value as a ObservationDefinitionComponentComponent array
   */
  public getComponent(): ObservationDefinitionComponentComponent[] {
    return this.component ?? ([] as ObservationDefinitionComponentComponent[]);
  }

  /**
   * Assigns the provided ObservationDefinitionComponentComponent array value to the `component` property.
   *
   * @param value - the `component` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComponent(value: ObservationDefinitionComponentComponent[] | undefined): this {
    if (isDefinedList<ObservationDefinitionComponentComponent>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.component; Provided value array has an element that is not an instance of ObservationDefinitionComponentComponent.`;
      assertFhirTypeList<ObservationDefinitionComponentComponent>(value, ObservationDefinitionComponentComponent, optErrMsg);
      this.component = value;
    } else {
      this.component = undefined;
    }
    return this;
  }

  /**
   * Add the provided ObservationDefinitionComponentComponent value to the `component` array property.
   *
   * @param value - the `component` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComponent(value: ObservationDefinitionComponentComponent | undefined): this {
    if (isDefined<ObservationDefinitionComponentComponent>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.component; Provided element is not an instance of ObservationDefinitionComponentComponent.`;
      assertFhirType<ObservationDefinitionComponentComponent>(value, ObservationDefinitionComponentComponent, optErrMsg);
      this.initComponent();
      this.component?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `component` property exists and has a value; `false` otherwise
   */
  public hasComponent(): boolean {
    return isDefinedList<ObservationDefinitionComponentComponent>(this.component) && this.component.some((item: ObservationDefinitionComponentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `component` property
   */
  private initComponent(): void {
    if(!this.hasComponent()) {
      this.component = [] as ObservationDefinitionComponentComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ObservationDefinition';
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
      this.approvalDate,
      this.lastReviewDate,
      this.effectivePeriod,
      this.derivedFromCanonical,
      this.derivedFromUri,
      this.subject,
      this.performerType,
      this.category,
      this.code,
      this.permittedDataType,
      this.multipleResultsAllowed,
      this.bodySite,
      this.method,
      this.specimen,
      this.device,
      this.preferredReportName,
      this.permittedUnit,
      this.qualifiedValue,
      this.hasMember,
      this.component,
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
  public override copy(): ObservationDefinition {
    const dest = new ObservationDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ObservationDefinition): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    dest.identifier = this.identifier?.copy();
    dest.version = this.version?.copy();
    dest.versionAlgorithm = this.versionAlgorithm?.copy() as IDataType;
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
    dest.copyrightLabel = this.copyrightLabel?.copy();
    dest.approvalDate = this.approvalDate?.copy();
    dest.lastReviewDate = this.lastReviewDate?.copy();
    dest.effectivePeriod = this.effectivePeriod?.copy();
    const derivedFromCanonicalList = copyListValues<CanonicalType>(this.derivedFromCanonical);
    dest.derivedFromCanonical = derivedFromCanonicalList.length === 0 ? undefined : derivedFromCanonicalList;
    const derivedFromUriList = copyListValues<UriType>(this.derivedFromUri);
    dest.derivedFromUri = derivedFromUriList.length === 0 ? undefined : derivedFromUriList;
    const subjectList = copyListValues<CodeableConcept>(this.subject);
    dest.subject = subjectList.length === 0 ? undefined : subjectList;
    dest.performerType = this.performerType?.copy();
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.code = this.code ? this.code.copy() : null;
    const permittedDataTypeList = copyListValues<EnumCodeType>(this.permittedDataType);
    dest.permittedDataType = permittedDataTypeList.length === 0 ? undefined : permittedDataTypeList;
    dest.multipleResultsAllowed = this.multipleResultsAllowed?.copy();
    dest.bodySite = this.bodySite?.copy();
    dest.method = this.method?.copy();
    const specimenList = copyListValues<Reference>(this.specimen);
    dest.specimen = specimenList.length === 0 ? undefined : specimenList;
    const deviceList = copyListValues<Reference>(this.device);
    dest.device = deviceList.length === 0 ? undefined : deviceList;
    dest.preferredReportName = this.preferredReportName?.copy();
    const permittedUnitList = copyListValues<Coding>(this.permittedUnit);
    dest.permittedUnit = permittedUnitList.length === 0 ? undefined : permittedUnitList;
    const qualifiedValueList = copyListValues<ObservationDefinitionQualifiedValueComponent>(this.qualifiedValue);
    dest.qualifiedValue = qualifiedValueList.length === 0 ? undefined : qualifiedValueList;
    const hasMemberList = copyListValues<Reference>(this.hasMember);
    dest.hasMember = hasMemberList.length === 0 ? undefined : hasMemberList;
    const componentList = copyListValues<ObservationDefinitionComponentComponent>(this.component);
    dest.component = componentList.length === 0 ? undefined : componentList;
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

    if (this.hasDerivedFromCanonical()) {
      setFhirPrimitiveListJson(this.getDerivedFromCanonicalElement(), 'derivedFromCanonical', jsonObj);
    }

    if (this.hasDerivedFromUri()) {
      setFhirPrimitiveListJson(this.getDerivedFromUriElement(), 'derivedFromUri', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexListJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasPerformerType()) {
      setFhirComplexJson(this.getPerformerType(), 'performerType', jsonObj);
    }

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasPermittedDataTypeElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getPermittedDataTypeElement(), 'permittedDataType', jsonObj);
    }

    if (this.hasMultipleResultsAllowedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getMultipleResultsAllowedElement(), 'multipleResultsAllowed', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasMethod()) {
      setFhirComplexJson(this.getMethod(), 'method', jsonObj);
    }

    if (this.hasSpecimen()) {
      setFhirComplexListJson(this.getSpecimen(), 'specimen', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexListJson(this.getDevice(), 'device', jsonObj);
    }

    if (this.hasPreferredReportNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPreferredReportNameElement(), 'preferredReportName', jsonObj);
    }

    if (this.hasPermittedUnit()) {
      setFhirComplexListJson(this.getPermittedUnit(), 'permittedUnit', jsonObj);
    }

    if (this.hasQualifiedValue()) {
      setFhirBackboneElementListJson(this.getQualifiedValue(), 'qualifiedValue', jsonObj);
    }

    if (this.hasHasMember()) {
      setFhirComplexListJson(this.getHasMember(), 'hasMember', jsonObj);
    }

    if (this.hasComponent()) {
      setFhirBackboneElementListJson(this.getComponent(), 'component', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ObservationDefinitionQualifiedValueComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Set of qualified values for observation results
 * - **Definition:** A set of qualified values associated with a context and a set of conditions -  provides a range for quantitative and ordinal observations and a collection of value sets for qualitative observations.
 *
 * @category Data Models: Resource
 * @see [FHIR ObservationDefinition](http://hl7.org/fhir/StructureDefinition/ObservationDefinition)
 */
export class ObservationDefinitionQualifiedValueComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.administrativeGenderEnum = new AdministrativeGenderEnum();
    this.observationRangeCategoryEnum = new ObservationRangeCategoryEnum();
  }

  /**
   * Parse the provided `ObservationDefinitionQualifiedValueComponent` JSON to instantiate the ObservationDefinitionQualifiedValueComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ObservationDefinitionQualifiedValueComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ObservationDefinitionQualifiedValueComponent
   * @returns ObservationDefinitionQualifiedValueComponent data model or undefined for `ObservationDefinitionQualifiedValueComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ObservationDefinitionQualifiedValueComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ObservationDefinitionQualifiedValueComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ObservationDefinitionQualifiedValueComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'context';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setContext(datatype);
    }

    fieldName = 'appliesTo';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAppliesTo(datatype);
        }
      });
    }

    fieldName = 'gender';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setGenderElement(datatype);
    }

    fieldName = 'age';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Range | undefined = Range.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAge(datatype);
    }

    fieldName = 'gestationalAge';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Range | undefined = Range.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGestationalAge(datatype);
    }

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setConditionElement(datatype);
    }

    fieldName = 'rangeCategory';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setRangeCategoryElement(datatype);
    }

    fieldName = 'range';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Range | undefined = Range.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRange(datatype);
    }

    fieldName = 'validCodedValueSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setValidCodedValueSetElement(datatype);
    }

    fieldName = 'normalCodedValueSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setNormalCodedValueSetElement(datatype);
    }

    fieldName = 'abnormalCodedValueSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setAbnormalCodedValueSetElement(datatype);
    }

    fieldName = 'criticalCodedValueSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setCriticalCodedValueSetElement(datatype);
    }

    return instance;
  }

  /**
   * ObservationDefinition.qualifiedValue.context Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Context qualifier for the set of qualified values
   * - **Definition:** A concept defining the context for this set of qualified values.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private context?: CodeableConcept | undefined;

  /**
   * ObservationDefinition.qualifiedValue.appliesTo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Targetted population for the set of qualified values
   * - **Definition:** The target population this  set of qualified values applies to.
   * - **Comment:** If this element is not present then the global population is assumed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private appliesTo?: CodeableConcept[] | undefined;

  /**
   * FHIR CodeSystem: AdministrativeGender
   *
   * @see {@link AdministrativeGenderEnum }
   */
  private readonly administrativeGenderEnum: AdministrativeGenderEnum;

  /**
   * ObservationDefinition.qualifiedValue.gender Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** male | female | other | unknown
   * - **Definition:** The gender this  set of qualified values applies to.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  private gender?: EnumCodeType | undefined;

  /**
   * ObservationDefinition.qualifiedValue.age Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable age range for the set of qualified values
   * - **Definition:** The age range this  set of qualified values applies to.
   * - **Comment:** Some analytes vary greatly over age.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private age?: Range | undefined;

  /**
   * ObservationDefinition.qualifiedValue.gestationalAge Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable gestational age range for the set of qualified values
   * - **Definition:** The gestational age this  set of qualified values applies to.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private gestationalAge?: Range | undefined;

  /**
   * ObservationDefinition.qualifiedValue.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Condition associated with the set of qualified values
   * - **Definition:** Text based condition for which the the set of qualified values is valid.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private condition?: StringType | undefined;

  /**
   * FHIR CodeSystem: ObservationRangeCategory
   *
   * @see {@link ObservationRangeCategoryEnum }
   */
  private readonly observationRangeCategoryEnum: ObservationRangeCategoryEnum;

  /**
   * ObservationDefinition.qualifiedValue.rangeCategory Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** reference | critical | absolute
   * - **Definition:** The category of range of values for continuous or ordinal observations that match the criteria of this set of qualified values.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  private rangeCategory?: EnumCodeType | undefined;

  /**
   * ObservationDefinition.qualifiedValue.range Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The range for continuous or ordinal observations
   * - **Definition:** The range of values defined for continuous or ordinal observations that match the criteria of this set of qualified values.
   * - **Requirements:** The unit may be not relevant for ordinal values. In case it is there, it is the same as ObservationDefinition.unit.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private range?: Range | undefined;

  /**
   * ObservationDefinition.qualifiedValue.validCodedValueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value set of valid coded values as part of this set of qualified values
   * - **Definition:** The set of valid coded results for qualitative observations  that match the criteria of this set of qualified values.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private validCodedValueSet?: CanonicalType | undefined;

  /**
   * ObservationDefinition.qualifiedValue.normalCodedValueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value set of normal coded values as part of this set of qualified values
   * - **Definition:** The set of normal coded results for qualitative observations  that match the criteria of this set of qualified values.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private normalCodedValueSet?: CanonicalType | undefined;

  /**
   * ObservationDefinition.qualifiedValue.abnormalCodedValueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value set of abnormal coded values as part of this set of qualified values
   * - **Definition:** The set of abnormal coded results for qualitative observations  that match the criteria of this set of qualified values.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private abnormalCodedValueSet?: CanonicalType | undefined;

  /**
   * ObservationDefinition.qualifiedValue.criticalCodedValueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value set of critical coded values as part of this set of qualified values
   * - **Definition:** The set of critical coded results for qualitative observations  that match the criteria of this set of qualified values.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private criticalCodedValueSet?: CanonicalType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `context` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getContext(): CodeableConcept {
    return this.context ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Context object value to the `context` property.
   *
   * @param value - the `context` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContext(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.context; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.context = value;
    } else {
      this.context = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `context` property exists and has a value; `false` otherwise
   */
  public hasContext(): boolean {
    return isDefined<CodeableConcept>(this.context) && !this.context.isEmpty();
  }

  /**
   * @returns the `appliesTo` property value as a CodeableConcept array
   */
  public getAppliesTo(): CodeableConcept[] {
    return this.appliesTo ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `appliesTo` property.
   *
   * @param value - the `appliesTo` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAppliesTo(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.appliesTo; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.appliesTo = value;
    } else {
      this.appliesTo = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `appliesTo` array property.
   *
   * @param value - the `appliesTo` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAppliesTo(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.appliesTo; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initAppliesTo();
      this.appliesTo?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `appliesTo` property exists and has a value; `false` otherwise
   */
  public hasAppliesTo(): boolean {
    return isDefinedList<CodeableConcept>(this.appliesTo) && this.appliesTo.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `appliesTo` property
   */
  private initAppliesTo(): void {
    if(!this.hasAppliesTo()) {
      this.appliesTo = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `gender` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public getGenderEnumType(): EnumCodeType | undefined {
    return this.gender;
  }

  /**
   * Assigns the provided EnumCodeType value to the `gender` property.
   *
   * @param enumType - the `gender` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public setGenderEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ObservationDefinition.qualifiedValue.gender';
      assertEnumCodeType<AdministrativeGenderEnum>(enumType, AdministrativeGenderEnum, errMsgPrefix);
      this.gender = enumType;
    } else {
      this.gender = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `gender` property exists and has a value; `false` otherwise
   */
  public hasGenderEnumType(): boolean {
    return isDefined<EnumCodeType>(this.gender) && !this.gender.isEmpty() && this.gender.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `gender` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public getGenderElement(): CodeType | undefined {
    if (this.gender === undefined) {
      return undefined;
    }
    return this.gender as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `gender` property.
   *
   * @param element - the `gender` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public setGenderElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.gender; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.gender = new EnumCodeType(element, this.administrativeGenderEnum);
    } else {
      this.gender = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `gender` property exists and has a value; `false` otherwise
   */
  public hasGenderElement(): boolean {
    return this.hasGenderEnumType();
  }

  /**
   * @returns the `gender` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public getGender(): fhirCode | undefined {
    if (this.gender === undefined) {
      return undefined;
    }
    return this.gender.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `gender` property.
   *
   * @param value - the `gender` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  public setGender(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.gender; Provided value is not an instance of fhirCode.`;
      this.gender = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.administrativeGenderEnum);
    } else {
      this.gender = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `gender` property exists and has a value; `false` otherwise
   */
  public hasGender(): boolean {
    return this.hasGenderEnumType();
  }

  /**
   * @returns the `age` property value as a Range object if defined; else an empty Range object
   */
  public getAge(): Range {
    return this.age ?? new Range();
  }

  /**
   * Assigns the provided Age object value to the `age` property.
   *
   * @param value - the `age` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAge(value: Range | undefined): this {
    if (isDefined<Range>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.age; Provided element is not an instance of Range.`;
      assertFhirType<Range>(value, Range, optErrMsg);
      this.age = value;
    } else {
      this.age = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `age` property exists and has a value; `false` otherwise
   */
  public hasAge(): boolean {
    return isDefined<Range>(this.age) && !this.age.isEmpty();
  }

  /**
   * @returns the `gestationalAge` property value as a Range object if defined; else an empty Range object
   */
  public getGestationalAge(): Range {
    return this.gestationalAge ?? new Range();
  }

  /**
   * Assigns the provided GestationalAge object value to the `gestationalAge` property.
   *
   * @param value - the `gestationalAge` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGestationalAge(value: Range | undefined): this {
    if (isDefined<Range>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.gestationalAge; Provided element is not an instance of Range.`;
      assertFhirType<Range>(value, Range, optErrMsg);
      this.gestationalAge = value;
    } else {
      this.gestationalAge = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `gestationalAge` property exists and has a value; `false` otherwise
   */
  public hasGestationalAge(): boolean {
    return isDefined<Range>(this.gestationalAge) && !this.gestationalAge.isEmpty();
  }

  /**
   * @returns the `condition` property value as a StringType object if defined; else an empty StringType object
   */
  public getConditionElement(): StringType {
    return this.condition ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `condition` property.
   *
   * @param element - the `condition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConditionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.condition; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.condition = element;
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasConditionElement(): boolean {
    return isDefined<StringType>(this.condition) && !this.condition.isEmpty();
  }

  /**
   * @returns the `condition` property value as a fhirString if defined; else undefined
   */
  public getCondition(): fhirString | undefined {
    return this.condition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `condition` property.
   *
   * @param value - the `condition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCondition(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.condition (${String(value)})`;
      this.condition = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return this.hasConditionElement();
  }

  /**
   * @returns the `rangeCategory` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public getRangeCategoryEnumType(): EnumCodeType | undefined {
    return this.rangeCategory;
  }

  /**
   * Assigns the provided EnumCodeType value to the `rangeCategory` property.
   *
   * @param enumType - the `rangeCategory` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public setRangeCategoryEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ObservationDefinition.qualifiedValue.rangeCategory';
      assertEnumCodeType<ObservationRangeCategoryEnum>(enumType, ObservationRangeCategoryEnum, errMsgPrefix);
      this.rangeCategory = enumType;
    } else {
      this.rangeCategory = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rangeCategory` property exists and has a value; `false` otherwise
   */
  public hasRangeCategoryEnumType(): boolean {
    return isDefined<EnumCodeType>(this.rangeCategory) && !this.rangeCategory.isEmpty() && this.rangeCategory.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `rangeCategory` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public getRangeCategoryElement(): CodeType | undefined {
    if (this.rangeCategory === undefined) {
      return undefined;
    }
    return this.rangeCategory as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `rangeCategory` property.
   *
   * @param element - the `rangeCategory` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public setRangeCategoryElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.rangeCategory; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.rangeCategory = new EnumCodeType(element, this.observationRangeCategoryEnum);
    } else {
      this.rangeCategory = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rangeCategory` property exists and has a value; `false` otherwise
   */
  public hasRangeCategoryElement(): boolean {
    return this.hasRangeCategoryEnumType();
  }

  /**
   * @returns the `rangeCategory` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public getRangeCategory(): fhirCode | undefined {
    if (this.rangeCategory === undefined) {
      return undefined;
    }
    return this.rangeCategory.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `rangeCategory` property.
   *
   * @param value - the `rangeCategory` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public setRangeCategory(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.rangeCategory; Provided value is not an instance of fhirCode.`;
      this.rangeCategory = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.observationRangeCategoryEnum);
    } else {
      this.rangeCategory = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `rangeCategory` property exists and has a value; `false` otherwise
   */
  public hasRangeCategory(): boolean {
    return this.hasRangeCategoryEnumType();
  }

  /**
   * @returns the `range` property value as a Range object if defined; else an empty Range object
   */
  public getRange(): Range {
    return this.range ?? new Range();
  }

  /**
   * Assigns the provided Range object value to the `range` property.
   *
   * @param value - the `range` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRange(value: Range | undefined): this {
    if (isDefined<Range>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.range; Provided element is not an instance of Range.`;
      assertFhirType<Range>(value, Range, optErrMsg);
      this.range = value;
    } else {
      this.range = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `range` property exists and has a value; `false` otherwise
   */
  public hasRange(): boolean {
    return isDefined<Range>(this.range) && !this.range.isEmpty();
  }

  /**
   * @returns the `validCodedValueSet` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getValidCodedValueSetElement(): CanonicalType {
    return this.validCodedValueSet ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `validCodedValueSet` property.
   *
   * @param element - the `validCodedValueSet` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValidCodedValueSetElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.validCodedValueSet; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.validCodedValueSet = element;
    } else {
      this.validCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasValidCodedValueSetElement(): boolean {
    return isDefined<CanonicalType>(this.validCodedValueSet) && !this.validCodedValueSet.isEmpty();
  }

  /**
   * @returns the `validCodedValueSet` property value as a fhirCanonical if defined; else undefined
   */
  public getValidCodedValueSet(): fhirCanonical | undefined {
    return this.validCodedValueSet?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `validCodedValueSet` property.
   *
   * @param value - the `validCodedValueSet` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValidCodedValueSet(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.validCodedValueSet (${String(value)})`;
      this.validCodedValueSet = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.validCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasValidCodedValueSet(): boolean {
    return this.hasValidCodedValueSetElement();
  }

  /**
   * @returns the `normalCodedValueSet` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getNormalCodedValueSetElement(): CanonicalType {
    return this.normalCodedValueSet ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `normalCodedValueSet` property.
   *
   * @param element - the `normalCodedValueSet` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNormalCodedValueSetElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.normalCodedValueSet; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.normalCodedValueSet = element;
    } else {
      this.normalCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `normalCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasNormalCodedValueSetElement(): boolean {
    return isDefined<CanonicalType>(this.normalCodedValueSet) && !this.normalCodedValueSet.isEmpty();
  }

  /**
   * @returns the `normalCodedValueSet` property value as a fhirCanonical if defined; else undefined
   */
  public getNormalCodedValueSet(): fhirCanonical | undefined {
    return this.normalCodedValueSet?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `normalCodedValueSet` property.
   *
   * @param value - the `normalCodedValueSet` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setNormalCodedValueSet(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.normalCodedValueSet (${String(value)})`;
      this.normalCodedValueSet = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.normalCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `normalCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasNormalCodedValueSet(): boolean {
    return this.hasNormalCodedValueSetElement();
  }

  /**
   * @returns the `abnormalCodedValueSet` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getAbnormalCodedValueSetElement(): CanonicalType {
    return this.abnormalCodedValueSet ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `abnormalCodedValueSet` property.
   *
   * @param element - the `abnormalCodedValueSet` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAbnormalCodedValueSetElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.abnormalCodedValueSet; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.abnormalCodedValueSet = element;
    } else {
      this.abnormalCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `abnormalCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasAbnormalCodedValueSetElement(): boolean {
    return isDefined<CanonicalType>(this.abnormalCodedValueSet) && !this.abnormalCodedValueSet.isEmpty();
  }

  /**
   * @returns the `abnormalCodedValueSet` property value as a fhirCanonical if defined; else undefined
   */
  public getAbnormalCodedValueSet(): fhirCanonical | undefined {
    return this.abnormalCodedValueSet?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `abnormalCodedValueSet` property.
   *
   * @param value - the `abnormalCodedValueSet` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAbnormalCodedValueSet(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.abnormalCodedValueSet (${String(value)})`;
      this.abnormalCodedValueSet = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.abnormalCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `abnormalCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasAbnormalCodedValueSet(): boolean {
    return this.hasAbnormalCodedValueSetElement();
  }

  /**
   * @returns the `criticalCodedValueSet` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getCriticalCodedValueSetElement(): CanonicalType {
    return this.criticalCodedValueSet ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `criticalCodedValueSet` property.
   *
   * @param element - the `criticalCodedValueSet` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCriticalCodedValueSetElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.criticalCodedValueSet; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.criticalCodedValueSet = element;
    } else {
      this.criticalCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `criticalCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasCriticalCodedValueSetElement(): boolean {
    return isDefined<CanonicalType>(this.criticalCodedValueSet) && !this.criticalCodedValueSet.isEmpty();
  }

  /**
   * @returns the `criticalCodedValueSet` property value as a fhirCanonical if defined; else undefined
   */
  public getCriticalCodedValueSet(): fhirCanonical | undefined {
    return this.criticalCodedValueSet?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `criticalCodedValueSet` property.
   *
   * @param value - the `criticalCodedValueSet` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCriticalCodedValueSet(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedValue.criticalCodedValueSet (${String(value)})`;
      this.criticalCodedValueSet = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.criticalCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `criticalCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasCriticalCodedValueSet(): boolean {
    return this.hasCriticalCodedValueSetElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ObservationDefinition.qualifiedValue';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.context,
      this.appliesTo,
      this.gender,
      this.age,
      this.gestationalAge,
      this.condition,
      this.rangeCategory,
      this.range,
      this.validCodedValueSet,
      this.normalCodedValueSet,
      this.abnormalCodedValueSet,
      this.criticalCodedValueSet,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ObservationDefinitionQualifiedValueComponent {
    const dest = new ObservationDefinitionQualifiedValueComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ObservationDefinitionQualifiedValueComponent): void {
    super.copyValues(dest);
    dest.context = this.context?.copy();
    const appliesToList = copyListValues<CodeableConcept>(this.appliesTo);
    dest.appliesTo = appliesToList.length === 0 ? undefined : appliesToList;
    dest.gender = this.gender?.copy();
    dest.age = this.age?.copy();
    dest.gestationalAge = this.gestationalAge?.copy();
    dest.condition = this.condition?.copy();
    dest.rangeCategory = this.rangeCategory?.copy();
    dest.range = this.range?.copy();
    dest.validCodedValueSet = this.validCodedValueSet?.copy();
    dest.normalCodedValueSet = this.normalCodedValueSet?.copy();
    dest.abnormalCodedValueSet = this.abnormalCodedValueSet?.copy();
    dest.criticalCodedValueSet = this.criticalCodedValueSet?.copy();
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

    if (this.hasContext()) {
      setFhirComplexJson(this.getContext(), 'context', jsonObj);
    }

    if (this.hasAppliesTo()) {
      setFhirComplexListJson(this.getAppliesTo(), 'appliesTo', jsonObj);
    }

    if (this.hasGenderElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getGenderElement()!, 'gender', jsonObj);
    }

    if (this.hasAge()) {
      setFhirComplexJson(this.getAge(), 'age', jsonObj);
    }

    if (this.hasGestationalAge()) {
      setFhirComplexJson(this.getGestationalAge(), 'gestationalAge', jsonObj);
    }

    if (this.hasConditionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getConditionElement(), 'condition', jsonObj);
    }

    if (this.hasRangeCategoryElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getRangeCategoryElement()!, 'rangeCategory', jsonObj);
    }

    if (this.hasRange()) {
      setFhirComplexJson(this.getRange(), 'range', jsonObj);
    }

    if (this.hasValidCodedValueSetElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getValidCodedValueSetElement(), 'validCodedValueSet', jsonObj);
    }

    if (this.hasNormalCodedValueSetElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getNormalCodedValueSetElement(), 'normalCodedValueSet', jsonObj);
    }

    if (this.hasAbnormalCodedValueSetElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getAbnormalCodedValueSetElement(), 'abnormalCodedValueSet', jsonObj);
    }

    if (this.hasCriticalCodedValueSetElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getCriticalCodedValueSetElement(), 'criticalCodedValueSet', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ObservationDefinitionComponentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Component results
 * - **Definition:** Some observations have multiple component observations, expressed as separate code value pairs.
 * - **Requirements:** Component observations share the same attributes as the primary observation and are always treated as a part of it (they are not separable).
 *
 * @category Data Models: Resource
 * @see [FHIR ObservationDefinition](http://hl7.org/fhir/StructureDefinition/ObservationDefinition)
 */
export class ObservationDefinitionComponentComponent extends BackboneElement implements IBackboneElement {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.permittedDataTypeEnum = new PermittedDataTypeEnum();

    this.code = null;
    if (isDefined<CodeableConcept>(code)) {
      this.setCode(code);
    }
  }

  /**
   * Parse the provided `ObservationDefinitionComponentComponent` JSON to instantiate the ObservationDefinitionComponentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ObservationDefinitionComponentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ObservationDefinitionComponentComponent
   * @returns ObservationDefinitionComponentComponent data model or undefined for `ObservationDefinitionComponentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ObservationDefinitionComponentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ObservationDefinitionComponentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ObservationDefinitionComponentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

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

    fieldName = 'permittedDataType';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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
          instance.addPermittedDataTypeElement(datatype);
        }
      });
    }

    fieldName = 'permittedUnit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPermittedUnit(datatype);
        }
      });
    }

    fieldName = 'qualifiedValue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ObservationDefinitionQualifiedValueComponent | undefined = ObservationDefinitionQualifiedValueComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addQualifiedValue(component);
        }
      });
    }

    return instance;
  }

  /**
   * ObservationDefinition.component.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of observation
   * - **Definition:** Describes what will be observed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code: CodeableConcept | null;

  /**
   * FHIR CodeSystem: PermittedDataType
   *
   * @see {@link PermittedDataTypeEnum }
   */
  private readonly permittedDataTypeEnum: PermittedDataTypeEnum;

  /**
   * ObservationDefinition.component.permittedDataType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period
   * - **Definition:** The data types allowed for the value element of the instance of this component observations.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  private permittedDataType?: EnumCodeType[] | undefined;

  /**
   * ObservationDefinition.component.permittedUnit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unit for quantitative results
   * - **Definition:** Units allowed for the valueQuantity element in the instance observations conforming to this ObservationDefinition.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private permittedUnit?: Coding[] | undefined;

  /**
   * ObservationDefinition.component.qualifiedValue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Set of qualified values for observation results
   * - **Definition:** A set of qualified values associated with a context and a set of conditions -  provides a range for quantitative and ordinal observations and a collection of value sets for qualitative observations.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private qualifiedValue?: ObservationDefinitionQualifiedValueComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid ObservationDefinition.component.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `permittedDataType` property value as a EnumCodeType array
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public getPermittedDataTypeEnumType(): EnumCodeType[] {
    return this.permittedDataType ?? ([] as EnumCodeType[]);
  }

  /**
   * Assigns the provided EnumCodeType array value to the `permittedDataType` property.
   *
   * @param enumType - the `permittedDataType` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public setPermittedDataTypeEnumType(enumType: EnumCodeType[] | undefined): this {
    if (isDefinedList<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ObservationDefinition.component.permittedDataType`;
      assertEnumCodeTypeList<PermittedDataTypeEnum>(enumType, PermittedDataTypeEnum, errMsgPrefix);
      this.permittedDataType = enumType;
    } else {
      this.permittedDataType = undefined;
    }
    return this;
  }

  /**
   * Add the provided EnumCodeType value to the `permittedDataType` array property.
   *
   * @param enumType - the `permittedDataType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public addPermittedDataTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ObservationDefinition.component.permittedDataType`;
      assertEnumCodeType<PermittedDataTypeEnum>(enumType, PermittedDataTypeEnum, errMsgPrefix);
      this.initPermittedDataType();
      this.permittedDataType?.push(enumType);
    }
    return this;
  }

  /**
   * @returns `true` if the `permittedDataType` property exists and has a value; `false` otherwise
   */
  public hasPermittedDataTypeEnumType(): boolean {
    return isDefinedList<EnumCodeType>(this.permittedDataType) && this.permittedDataType.some((item: EnumCodeType) => !item.isEmpty()) && this.permittedDataType.every((item: EnumCodeType) => item.fhirCodeEnumeration.length > 0);
  }

  /**
   * @returns the `permittedDataType` property value as a CodeType array
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public getPermittedDataTypeElement(): CodeType[] {
    if (this.permittedDataType === undefined) {
      return [] as CodeType[];
    }
    return this.permittedDataType as CodeType[];
  }

  /**
   * Assigns the provided PrimitiveType array value to the `permittedDataType` property.
   *
   * @param element - the `permittedDataType` array value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public setPermittedDataTypeElement(element: CodeType[] | undefined): this {
    if (isDefinedList<CodeType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.component.permittedDataType; Provided element array has an element that is not an instance of CodeType.`;
      assertFhirTypeList<CodeType>(element, CodeType, optErrMsg);
      const enumCodeTypes = [] as EnumCodeType[];
      element.forEach((type: CodeType) => {
        enumCodeTypes.push(new EnumCodeType(type, this.permittedDataTypeEnum));
      });
      this.permittedDataType = enumCodeTypes;
    } else {
      this.permittedDataType = undefined;
    }
    return this;
  }

  /**
   * Add the provided PrimitiveType value to the `permittedDataType` array property.
   *
   * @param element - the `permittedDataType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public addPermittedDataTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.component.permittedDataType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.initPermittedDataType();
      this.permittedDataType?.push(new EnumCodeType(element, this.permittedDataTypeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `permittedDataType` property exists and has a value; `false` otherwise
   */
  public hasPermittedDataTypeElement(): boolean {
    return this.hasPermittedDataTypeEnumType();
  }

  /**
   * @returns the `permittedDataType` property value as a fhirCode array
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public getPermittedDataType(): fhirCode[] {
    if (this.permittedDataType === undefined) {
      return [] as fhirCode[];
    }
    const values = [] as fhirCode[];
    for (const item of this.permittedDataType) {
      values.push(item.fhirCode.code);
    }
    return values;
  }

  /**
   * Assigns the provided primitive value array to the `permittedDataType` property.
   *
   * @param value - the `permittedDataType` value array
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public setPermittedDataType(value: fhirCode[] | undefined): this {
    if (isDefinedList<fhirCode>(value)) {
      const enumCodeTypes = [] as EnumCodeType[];
      const optErrMsg = `Invalid ObservationDefinition.component.permittedDataType; Provided value is not an instance of fhirCode.`;
      value.forEach((val: fhirCode) => {
        enumCodeTypes.push(new EnumCodeType(parseFhirPrimitiveData(val, fhirCodeSchema, optErrMsg), this.permittedDataTypeEnum));
      });
      this.permittedDataType = enumCodeTypes;
    } else {
      this.permittedDataType = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `permittedDataType` array property.
   *
   * @param value - the `permittedDataType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link PermittedDataTypeEnum }
   */
  public addPermittedDataType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      this.initPermittedDataType();
      const optErrMsg = `Invalid ObservationDefinition.component.permittedDataType; Provided value is not an instance of fhirCode.`;
      this.permittedDataType?.push(new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.permittedDataTypeEnum));
    }
    return this;
  }

  /**
   * @returns `true` if the `permittedDataType` property exists and has a value; `false` otherwise
   */
  public hasPermittedDataType(): boolean {
    return this.hasPermittedDataTypeEnumType();
  }

  /**
   * Initialize the permittedDataType property
   */
  private initPermittedDataType(): void {
    if(!this.hasPermittedDataTypeEnumType()) {
      this.permittedDataType = [] as EnumCodeType[];
    }
  }

  /**
   * @returns the `permittedUnit` property value as a Coding array
   */
  public getPermittedUnit(): Coding[] {
    return this.permittedUnit ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `permittedUnit` property.
   *
   * @param value - the `permittedUnit` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPermittedUnit(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.component.permittedUnit; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.permittedUnit = value;
    } else {
      this.permittedUnit = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `permittedUnit` array property.
   *
   * @param value - the `permittedUnit` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPermittedUnit(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.component.permittedUnit; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initPermittedUnit();
      this.permittedUnit?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `permittedUnit` property exists and has a value; `false` otherwise
   */
  public hasPermittedUnit(): boolean {
    return isDefinedList<Coding>(this.permittedUnit) && this.permittedUnit.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `permittedUnit` property
   */
  private initPermittedUnit(): void {
    if(!this.hasPermittedUnit()) {
      this.permittedUnit = [] as Coding[];
    }
  }

  /**
   * @returns the `qualifiedValue` property value as a ObservationDefinitionQualifiedValueComponent array
   */
  public getQualifiedValue(): ObservationDefinitionQualifiedValueComponent[] {
    return this.qualifiedValue ?? ([] as ObservationDefinitionQualifiedValueComponent[]);
  }

  /**
   * Assigns the provided ObservationDefinitionQualifiedValueComponent array value to the `qualifiedValue` property.
   *
   * @param value - the `qualifiedValue` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQualifiedValue(value: ObservationDefinitionQualifiedValueComponent[] | undefined): this {
    if (isDefinedList<ObservationDefinitionQualifiedValueComponent>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.component.qualifiedValue; Provided value array has an element that is not an instance of ObservationDefinitionQualifiedValueComponent.`;
      assertFhirTypeList<ObservationDefinitionQualifiedValueComponent>(value, ObservationDefinitionQualifiedValueComponent, optErrMsg);
      this.qualifiedValue = value;
    } else {
      this.qualifiedValue = undefined;
    }
    return this;
  }

  /**
   * Add the provided ObservationDefinitionQualifiedValueComponent value to the `qualifiedValue` array property.
   *
   * @param value - the `qualifiedValue` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addQualifiedValue(value: ObservationDefinitionQualifiedValueComponent | undefined): this {
    if (isDefined<ObservationDefinitionQualifiedValueComponent>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.component.qualifiedValue; Provided element is not an instance of ObservationDefinitionQualifiedValueComponent.`;
      assertFhirType<ObservationDefinitionQualifiedValueComponent>(value, ObservationDefinitionQualifiedValueComponent, optErrMsg);
      this.initQualifiedValue();
      this.qualifiedValue?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `qualifiedValue` property exists and has a value; `false` otherwise
   */
  public hasQualifiedValue(): boolean {
    return isDefinedList<ObservationDefinitionQualifiedValueComponent>(this.qualifiedValue) && this.qualifiedValue.some((item: ObservationDefinitionQualifiedValueComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `qualifiedValue` property
   */
  private initQualifiedValue(): void {
    if(!this.hasQualifiedValue()) {
      this.qualifiedValue = [] as ObservationDefinitionQualifiedValueComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ObservationDefinition.component';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.permittedDataType,
      this.permittedUnit,
      this.qualifiedValue,
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
  public override copy(): ObservationDefinitionComponentComponent {
    const dest = new ObservationDefinitionComponentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ObservationDefinitionComponentComponent): void {
    super.copyValues(dest);
    dest.code = this.code ? this.code.copy() : null;
    const permittedDataTypeList = copyListValues<EnumCodeType>(this.permittedDataType);
    dest.permittedDataType = permittedDataTypeList.length === 0 ? undefined : permittedDataTypeList;
    const permittedUnitList = copyListValues<Coding>(this.permittedUnit);
    dest.permittedUnit = permittedUnitList.length === 0 ? undefined : permittedUnitList;
    const qualifiedValueList = copyListValues<ObservationDefinitionQualifiedValueComponent>(this.qualifiedValue);
    dest.qualifiedValue = qualifiedValueList.length === 0 ? undefined : qualifiedValueList;
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

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    } else {
      jsonObj['code'] = null;
    }

    if (this.hasPermittedDataTypeElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getPermittedDataTypeElement(), 'permittedDataType', jsonObj);
    }

    if (this.hasPermittedUnit()) {
      setFhirComplexListJson(this.getPermittedUnit(), 'permittedUnit', jsonObj);
    }

    if (this.hasQualifiedValue()) {
      setFhirBackboneElementListJson(this.getQualifiedValue(), 'qualifiedValue', jsonObj);
    }

    return jsonObj;
  }
}
