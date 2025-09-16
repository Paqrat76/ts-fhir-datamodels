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
 * ResearchElementDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ResearchElementDefinition
 * StructureDefinition.name: ResearchElementDefinition
 * StructureDefinition.description: The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
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
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setFhirPrimitiveListJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, ContactDetail, DataRequirement, Duration, Expression, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference, RelatedArtifact, Timing, UsageContext } from '../complex-types/complex-datatypes';
import { GroupMeasureEnum } from '../code-systems/GroupMeasureEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { ResearchElementTypeEnum } from '../code-systems/ResearchElementTypeEnum';
import { VariableTypeEnum } from '../code-systems/VariableTypeEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ResearchElementDefinition Class
 *
 * @remarks
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 *
 * Need to be able to define and reuse the definition of individual elements of a research question.
 *
 * **FHIR Specification**
 * - **Short:** A population, intervention, or exposure definition
 * - **Definition:** The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 * - **Comment:** PICO stands for Population (the population within which exposures are being compared), Intervention (the conditional state or exposure state being described for its effect on outcomes), Comparison (the alternative conditional state or alternative exposure state being compared against), and Outcome (the result or effect of the intervention in the population).
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchElementDefinition](http://hl7.org/fhir/StructureDefinition/ResearchElementDefinition)
 */
export class ResearchElementDefinition extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, type_: EnumCodeType | CodeType | fhirCode | null = null, characteristic: ResearchElementDefinitionCharacteristicComponent[] | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.researchElementTypeEnum = new ResearchElementTypeEnum();
    this.variableTypeEnum = new VariableTypeEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'ResearchElementDefinition.status',
    );

    this.type_ = constructorCodeValueAsEnumCodeType<ResearchElementTypeEnum>(
      type_,
      ResearchElementTypeEnum,
      this.researchElementTypeEnum,
      'ResearchElementDefinition.type',
    );

    this.characteristic = null;
    if (isDefinedList<ResearchElementDefinitionCharacteristicComponent>(characteristic)) {
      this.setCharacteristic(characteristic);
    }
  }

  /**
   * Parse the provided `ResearchElementDefinition` JSON to instantiate the ResearchElementDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchElementDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchElementDefinition
   * @returns ResearchElementDefinition data model or undefined for `ResearchElementDefinition`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ResearchElementDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchElementDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchElementDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ResearchElementDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ResearchElementDefinition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ResearchElementDefinition`;
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

    fieldName = 'shortTitle';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setShortTitleElement(datatype);
    }

    fieldName = 'subtitle';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setSubtitleElement(datatype);
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

    fieldName = 'comment';
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
            instance.addCommentElement(datatype);
          }
        });
      }
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

    fieldName = 'usage';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setUsageElement(datatype);
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

    fieldName = 'topic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addTopic(datatype);
          }
        });
      }
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addAuthor(datatype);
          }
        });
      }
    }

    fieldName = 'editor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEditor(datatype);
          }
        });
      }
    }

    fieldName = 'reviewer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addReviewer(datatype);
          }
        });
      }
    }

    fieldName = 'endorser';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addEndorser(datatype);
          }
        });
      }
    }

    fieldName = 'relatedArtifact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addRelatedArtifact(datatype);
          }
        });
      }
    }

    fieldName = 'library';
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
            instance.addLibraryElement(datatype);
          }
        });
      }
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

    fieldName = 'variableType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setVariableTypeElement(datatype);
    }

    fieldName = 'characteristic';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] === null) {
        instance.setCharacteristic(null);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ResearchElementDefinitionCharacteristicComponent | undefined = ResearchElementDefinitionCharacteristicComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component === undefined) {
            instance.setCharacteristic(null);
          } else {
            instance.addCharacteristic(component);
          }
        });
      }
    } else {
      instance.setCharacteristic(null);
    }

    return instance;
  }

  /**
   * ResearchElementDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this research element definition, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this research element definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this research element definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the research element definition is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the research element definition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * ResearchElementDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the research element definition
   * - **Definition:** A formal identifier that is used to identify this research element definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this research element definition outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * ResearchElementDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the research element definition
   * - **Definition:** The identifier that is used to identify this version of the research element definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the research element definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.
   * - **Comment:** There may be different research element definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the research element definition with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * ResearchElementDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this research element definition (computer friendly)
   * - **Definition:** A natural language name identifying the research element definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * ResearchElementDefinition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this research element definition (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the research element definition.
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * ResearchElementDefinition.shortTitle Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Title for use in informal contexts
   * - **Definition:** The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary.
   * - **Requirements:** Need to be able to reference the content by a short description, but still provide a longer, more formal title for the content.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private shortTitle?: StringType | undefined;

  /**
   * ResearchElementDefinition.subtitle Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subordinate title of the ResearchElementDefinition
   * - **Definition:** An explanatory or alternate title for the ResearchElementDefinition giving additional information about its content.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subtitle?: StringType | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * ResearchElementDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this research element definition. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of research element definitions that are appropriate for use versus not.
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
   * ResearchElementDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this research element definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of research element definitions that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level research element definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * ResearchElementDefinition.subject[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ResearchElementDefinition.subject[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device
   * - **Definition:** The intended subjects for the ResearchElementDefinition. If this element is not provided, a Patient subject is assumed, but the subject of the ResearchElementDefinition can be anything.
   * - **Comment:** The subject of the ResearchElementDefinition is critical in interpreting the criteria definitions, as the logic in the ResearchElementDefinitions is evaluated with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what content is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ResearchElementDefinition.subject[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private subject?: IDataType | undefined;

  /**
   * ResearchElementDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the research element definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the research element definition changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the research element definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * ResearchElementDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the research element definition.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the research element definition is the organization or individual primarily responsible for the maintenance and upkeep of the research element definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the research element definition. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the research element definition.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * ResearchElementDefinition.contact Element
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
   * ResearchElementDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the research element definition
   * - **Definition:** A free text natural language description of the research element definition from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the research element definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the research element definition as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the research element definition is presumed to be the predominant language in the place the research element definition was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * ResearchElementDefinition.comment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used for footnotes or explanatory notes
   * - **Definition:** A human-readable string to clarify or explain concepts about the resource.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private comment?: StringType[] | undefined;

  /**
   * ResearchElementDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate research element definition instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * ResearchElementDefinition.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for research element definition (if applicable)
   * - **Definition:** A legal or geographic region in which the research element definition is intended to be used.
   * - **Comment:** It may be possible for the research element definition to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * ResearchElementDefinition.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this research element definition is defined
   * - **Definition:** Explanation of why this research element definition is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the research element definition. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this research element definition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * ResearchElementDefinition.usage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes the clinical usage of the ResearchElementDefinition
   * - **Definition:** A detailed description, from a clinical perspective, of how the ResearchElementDefinition is used.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private usage?: StringType | undefined;

  /**
   * ResearchElementDefinition.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the research element definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research element definition.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the research element definition and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * ResearchElementDefinition.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the research element definition was approved by publisher
   * - **Definition:** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The \'date\' element may be more recent than the approval date because of minor changes or editorial corrections.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * ResearchElementDefinition.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the research element definition was last reviewed
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
   * ResearchElementDefinition.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the research element definition is expected to be used
   * - **Definition:** The period during which the research element definition content was or is planned to be in active use.
   * - **Comment:** The effective period for a research element definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   * - **Requirements:** Allows establishing a transition before a resource comes into effect and also allows for a sunsetting  process when new versions of the research element definition are or are expected to be used instead.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectivePeriod?: Period | undefined;

  /**
   * ResearchElementDefinition.topic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The category of the ResearchElementDefinition, such as Education, Treatment, Assessment, etc.
   * - **Definition:** Descriptive topics related to the content of the ResearchElementDefinition. Topics provide a high-level categorization grouping types of ResearchElementDefinitions that can be useful for filtering and searching.
   * - **Requirements:** Repositories must be able to determine how to categorize the ResearchElementDefinition so that it can be found by topical searches.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private topic?: CodeableConcept[] | undefined;

  /**
   * ResearchElementDefinition.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who authored the content
   * - **Definition:** An individiual or organization primarily involved in the creation and maintenance of the content.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: ContactDetail[] | undefined;

  /**
   * ResearchElementDefinition.editor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who edited the content
   * - **Definition:** An individual or organization primarily responsible for internal coherence of the content.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private editor?: ContactDetail[] | undefined;

  /**
   * ResearchElementDefinition.reviewer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who reviewed the content
   * - **Definition:** An individual or organization primarily responsible for review of some aspect of the content.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reviewer?: ContactDetail[] | undefined;

  /**
   * ResearchElementDefinition.endorser Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who endorsed the content
   * - **Definition:** An individual or organization responsible for officially endorsing the content for use in some setting.
   * - **FHIR Type:** `ContactDetail`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private endorser?: ContactDetail[] | undefined;

  /**
   * ResearchElementDefinition.relatedArtifact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional documentation, citations, etc.
   * - **Definition:** Related artifacts such as additional documentation, justification, or bibliographic references.
   * - **Comment:** Each related artifact is either an attachment, or a reference to another resource, but not both.
   * - **Requirements:** ResearchElementDefinitions must be able to provide enough information for consumers of the content (and/or interventions or results produced by the content) to be able to determine and understand the justification for and evidence in support of the content.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedArtifact?: RelatedArtifact[] | undefined;

  /**
   * ResearchElementDefinition.library Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Logic used by the ResearchElementDefinition
   * - **Definition:** A reference to a Library resource containing the formal logic used by the ResearchElementDefinition.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Library',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private library?: CanonicalType[] | undefined;

  /**
   * FHIR CodeSystem: ResearchElementType
   *
   * @see {@link ResearchElementTypeEnum }
   */
  private readonly researchElementTypeEnum: ResearchElementTypeEnum;

  /**
   * ResearchElementDefinition.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** population | exposure | outcome
   * - **Definition:** The type of research element, a population, an exposure, or an outcome.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ResearchElementTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * FHIR CodeSystem: VariableType
   *
   * @see {@link VariableTypeEnum }
   */
  private readonly variableTypeEnum: VariableTypeEnum;

  /**
   * ResearchElementDefinition.variableType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** dichotomous | continuous | descriptive
   * - **Definition:** The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link VariableTypeEnum }
   */
  private variableType?: EnumCodeType | undefined;

  /**
   * ResearchElementDefinition.characteristic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What defines the members of the research element
   * - **Definition:** A characteristic that defines the members of the research element. Multiple characteristics are applied with "and" semantics.
   * - **Comment:** Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 1..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private characteristic: ResearchElementDefinitionCharacteristicComponent[] | null;

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
      const optErrMsg = `Invalid ResearchElementDefinition.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.url (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.version (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.name (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.title (${String(value)})`;
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
   * @returns the `shortTitle` property value as a StringType object if defined; else an empty StringType object
   */
  public getShortTitleElement(): StringType {
    return this.shortTitle ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `shortTitle` property.
   *
   * @param element - the `shortTitle` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setShortTitleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.shortTitle; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.shortTitle = element;
    } else {
      this.shortTitle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `shortTitle` property exists and has a value; `false` otherwise
   */
  public hasShortTitleElement(): boolean {
    return isDefined<StringType>(this.shortTitle) && !this.shortTitle.isEmpty();
  }

  /**
   * @returns the `shortTitle` property value as a fhirString if defined; else undefined
   */
  public getShortTitle(): fhirString | undefined {
    return this.shortTitle?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `shortTitle` property.
   *
   * @param value - the `shortTitle` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setShortTitle(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.shortTitle (${String(value)})`;
      this.shortTitle = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.shortTitle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `shortTitle` property exists and has a value; `false` otherwise
   */
  public hasShortTitle(): boolean {
    return this.hasShortTitleElement();
  }

  /**
   * @returns the `subtitle` property value as a StringType object if defined; else an empty StringType object
   */
  public getSubtitleElement(): StringType {
    return this.subtitle ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `subtitle` property.
   *
   * @param element - the `subtitle` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubtitleElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.subtitle; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.subtitle = element;
    } else {
      this.subtitle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subtitle` property exists and has a value; `false` otherwise
   */
  public hasSubtitleElement(): boolean {
    return isDefined<StringType>(this.subtitle) && !this.subtitle.isEmpty();
  }

  /**
   * @returns the `subtitle` property value as a fhirString if defined; else undefined
   */
  public getSubtitle(): fhirString | undefined {
    return this.subtitle?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `subtitle` property.
   *
   * @param value - the `subtitle` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSubtitle(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.subtitle (${String(value)})`;
      this.subtitle = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.subtitle = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `subtitle` property exists and has a value; `false` otherwise
   */
  public hasSubtitle(): boolean {
    return this.hasSubtitleElement();
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
      const errMsgPrefix = `Invalid ResearchElementDefinition.status`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.status; Provided value is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.status (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.experimental (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('ResearchElementDefinition.subject[x]')`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ResearchElementDefinition.subject[x]')
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
        `DataType mismatch for ResearchElementDefinition.subject[x]: Expected CodeableConcept but encountered ${this.subject.fhirType()}`,
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
        `DataType mismatch for ResearchElementDefinition.subject[x]: Expected Reference but encountered ${this.subject.fhirType()}`,
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
      const optErrMsg = `Invalid ResearchElementDefinition.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.description (${String(value)})`;
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
   * @returns the `comment` property value as a StringType array
   */
  public getCommentElement(): StringType[] {
    return this.comment ?? ([] as StringType[]);
  }

  /**
   * Assigns the provided StringType array value to the `comment` property.
   *
   * @param element - the `comment` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setCommentElement(element: StringType[] | undefined): this {
    if (isDefinedList<StringType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.comment; Provided value array has an element that is not an instance of StringType.`;
      assertFhirTypeList<StringType>(element, StringType, optErrMsg);
      this.comment = element;
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * Add the provided StringType value to the `comment` array property.
   *
   * @param element - the `comment` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addCommentElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.comment; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.initComment();
      this.comment?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `comment` property exists and has a value; `false` otherwise
   */
  public hasCommentElement(): boolean {
    return isDefinedList<StringType>(this.comment) && this.comment.some((item: StringType) => !item.isEmpty());
  }

  /**
   * @returns the `comment` property value as a fhirString array
   */
  public getComment(): fhirString[] {
    this.initComment();
    const commentValues = [] as fhirString[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.comment!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        commentValues.push(value);
      }
    }
    return commentValues;
  }

  /**
   * Assigns the provided primitive value array to the `comment` property.
   *
   * @param value - the `comment` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setComment(value: fhirString[] | undefined): this {
    if (isDefinedList<fhirString>(value)) {
      const commentElements = [] as StringType[];
      for (const commentValue of value) {
        const optErrMsg = `Invalid ResearchElementDefinition.comment array item (${String(commentValue)})`;
        const element = new StringType(parseFhirPrimitiveData(commentValue, fhirStringSchema, optErrMsg));
        commentElements.push(element);
      }
      this.comment = commentElements;
    } else {
      this.comment = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `comment` array property.
   *
   * @param value - the `comment` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addComment(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.comment array item (${String(value)})`;
      const element = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
      this.initComment();
      this.addCommentElement(element);
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
   * Initialize the `comment` property
   */
  private initComment(): void {
    if (!this.hasComment()) {
      this.comment = [] as StringType[];
    }
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
      const optErrMsg = `Invalid ResearchElementDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.purpose (${String(value)})`;
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
   * @returns the `usage` property value as a StringType object if defined; else an empty StringType object
   */
  public getUsageElement(): StringType {
    return this.usage ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `usage` property.
   *
   * @param element - the `usage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUsageElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.usage; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.usage = element;
    } else {
      this.usage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `usage` property exists and has a value; `false` otherwise
   */
  public hasUsageElement(): boolean {
    return isDefined<StringType>(this.usage) && !this.usage.isEmpty();
  }

  /**
   * @returns the `usage` property value as a fhirString if defined; else undefined
   */
  public getUsage(): fhirString | undefined {
    return this.usage?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `usage` property.
   *
   * @param value - the `usage` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setUsage(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.usage (${String(value)})`;
      this.usage = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.usage = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `usage` property exists and has a value; `false` otherwise
   */
  public hasUsage(): boolean {
    return this.hasUsageElement();
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
      const optErrMsg = `Invalid ResearchElementDefinition.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.approvalDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.approvalDate (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.lastReviewDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.lastReviewDate (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchElementDefinition.effectivePeriod; Provided element is not an instance of Period.`;
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
   * @returns the `topic` property value as a CodeableConcept array
   */
  public getTopic(): CodeableConcept[] {
    return this.topic ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `topic` property.
   *
   * @param value - the `topic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setTopic(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.topic; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.topic = value;
    } else {
      this.topic = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `topic` array property.
   *
   * @param value - the `topic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addTopic(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.topic; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initTopic();
      this.topic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `topic` property exists and has a value; `false` otherwise
   */
  public hasTopic(): boolean {
    return isDefinedList<CodeableConcept>(this.topic) && this.topic.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `topic` property
   */
  private initTopic(): void {
    if(!this.hasTopic()) {
      this.topic = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `author` property value as a ContactDetail array
   */
  public getAuthor(): ContactDetail[] {
    return this.author ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `author` property.
   *
   * @param value - the `author` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAuthor(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.author; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.author = value;
    } else {
      this.author = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `author` array property.
   *
   * @param value - the `author` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAuthor(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.author; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initAuthor();
      this.author?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `author` property exists and has a value; `false` otherwise
   */
  public hasAuthor(): boolean {
    return isDefinedList<ContactDetail>(this.author) && this.author.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `author` property
   */
  private initAuthor(): void {
    if(!this.hasAuthor()) {
      this.author = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `editor` property value as a ContactDetail array
   */
  public getEditor(): ContactDetail[] {
    return this.editor ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `editor` property.
   *
   * @param value - the `editor` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEditor(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.editor; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.editor = value;
    } else {
      this.editor = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `editor` array property.
   *
   * @param value - the `editor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEditor(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.editor; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initEditor();
      this.editor?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `editor` property exists and has a value; `false` otherwise
   */
  public hasEditor(): boolean {
    return isDefinedList<ContactDetail>(this.editor) && this.editor.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `editor` property
   */
  private initEditor(): void {
    if(!this.hasEditor()) {
      this.editor = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `reviewer` property value as a ContactDetail array
   */
  public getReviewer(): ContactDetail[] {
    return this.reviewer ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `reviewer` property.
   *
   * @param value - the `reviewer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReviewer(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.reviewer; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.reviewer = value;
    } else {
      this.reviewer = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `reviewer` array property.
   *
   * @param value - the `reviewer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReviewer(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.reviewer; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initReviewer();
      this.reviewer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reviewer` property exists and has a value; `false` otherwise
   */
  public hasReviewer(): boolean {
    return isDefinedList<ContactDetail>(this.reviewer) && this.reviewer.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `reviewer` property
   */
  private initReviewer(): void {
    if(!this.hasReviewer()) {
      this.reviewer = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `endorser` property value as a ContactDetail array
   */
  public getEndorser(): ContactDetail[] {
    return this.endorser ?? ([] as ContactDetail[]);
  }

  /**
   * Assigns the provided ContactDetail array value to the `endorser` property.
   *
   * @param value - the `endorser` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEndorser(value: ContactDetail[] | undefined): this {
    if (isDefinedList<ContactDetail>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.endorser; Provided value array has an element that is not an instance of ContactDetail.`;
      assertFhirTypeList<ContactDetail>(value, ContactDetail, optErrMsg);
      this.endorser = value;
    } else {
      this.endorser = undefined;
    }
    return this;
  }

  /**
   * Add the provided ContactDetail value to the `endorser` array property.
   *
   * @param value - the `endorser` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEndorser(value: ContactDetail | undefined): this {
    if (isDefined<ContactDetail>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.endorser; Provided element is not an instance of ContactDetail.`;
      assertFhirType<ContactDetail>(value, ContactDetail, optErrMsg);
      this.initEndorser();
      this.endorser?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `endorser` property exists and has a value; `false` otherwise
   */
  public hasEndorser(): boolean {
    return isDefinedList<ContactDetail>(this.endorser) && this.endorser.some((item: ContactDetail) => !item.isEmpty());
  }

  /**
   * Initialize the `endorser` property
   */
  private initEndorser(): void {
    if(!this.hasEndorser()) {
      this.endorser = [] as ContactDetail[];
    }
  }

  /**
   * @returns the `relatedArtifact` property value as a RelatedArtifact array
   */
  public getRelatedArtifact(): RelatedArtifact[] {
    return this.relatedArtifact ?? ([] as RelatedArtifact[]);
  }

  /**
   * Assigns the provided RelatedArtifact array value to the `relatedArtifact` property.
   *
   * @param value - the `relatedArtifact` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRelatedArtifact(value: RelatedArtifact[] | undefined): this {
    if (isDefinedList<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.relatedArtifact; Provided value array has an element that is not an instance of RelatedArtifact.`;
      assertFhirTypeList<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.relatedArtifact = value;
    } else {
      this.relatedArtifact = undefined;
    }
    return this;
  }

  /**
   * Add the provided RelatedArtifact value to the `relatedArtifact` array property.
   *
   * @param value - the `relatedArtifact` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRelatedArtifact(value: RelatedArtifact | undefined): this {
    if (isDefined<RelatedArtifact>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.relatedArtifact; Provided element is not an instance of RelatedArtifact.`;
      assertFhirType<RelatedArtifact>(value, RelatedArtifact, optErrMsg);
      this.initRelatedArtifact();
      this.relatedArtifact?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `relatedArtifact` property exists and has a value; `false` otherwise
   */
  public hasRelatedArtifact(): boolean {
    return isDefinedList<RelatedArtifact>(this.relatedArtifact) && this.relatedArtifact.some((item: RelatedArtifact) => !item.isEmpty());
  }

  /**
   * Initialize the `relatedArtifact` property
   */
  private initRelatedArtifact(): void {
    if(!this.hasRelatedArtifact()) {
      this.relatedArtifact = [] as RelatedArtifact[];
    }
  }

  /**
   * @returns the `library` property value as a CanonicalType array
   */
  public getLibraryElement(): CanonicalType[] {
    return this.library ?? ([] as CanonicalType[]);
  }

  /**
   * Assigns the provided CanonicalType array value to the `library` property.
   *
   * @param element - the `library` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLibraryElement(element: CanonicalType[] | undefined): this {
    if (isDefinedList<CanonicalType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.library; Provided value array has an element that is not an instance of CanonicalType.`;
      assertFhirTypeList<CanonicalType>(element, CanonicalType, optErrMsg);
      this.library = element;
    } else {
      this.library = undefined;
    }
    return this;
  }

  /**
   * Add the provided CanonicalType value to the `library` array property.
   *
   * @param element - the `library` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLibraryElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.library; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.initLibrary();
      this.library?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `library` property exists and has a value; `false` otherwise
   */
  public hasLibraryElement(): boolean {
    return isDefinedList<CanonicalType>(this.library) && this.library.some((item: CanonicalType) => !item.isEmpty());
  }

  /**
   * @returns the `library` property value as a fhirCanonical array
   */
  public getLibrary(): fhirCanonical[] {
    this.initLibrary();
    const libraryValues = [] as fhirCanonical[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.library!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        libraryValues.push(value);
      }
    }
    return libraryValues;
  }

  /**
   * Assigns the provided primitive value array to the `library` property.
   *
   * @param value - the `library` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLibrary(value: fhirCanonical[] | undefined): this {
    if (isDefinedList<fhirCanonical>(value)) {
      const libraryElements = [] as CanonicalType[];
      for (const libraryValue of value) {
        const optErrMsg = `Invalid ResearchElementDefinition.library array item (${String(libraryValue)})`;
        const element = new CanonicalType(parseFhirPrimitiveData(libraryValue, fhirCanonicalSchema, optErrMsg));
        libraryElements.push(element);
      }
      this.library = libraryElements;
    } else {
      this.library = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `library` array property.
   *
   * @param value - the `library` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addLibrary(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.library array item (${String(value)})`;
      const element = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
      this.initLibrary();
      this.addLibraryElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `library` property exists and has a value; `false` otherwise
   */
  public hasLibrary(): boolean {
    return this.hasLibraryElement();
  }

  /**
   * Initialize the `library` property
   */
  private initLibrary(): void {
    if (!this.hasLibrary()) {
      this.library = [] as CanonicalType[];
    }
  }

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ResearchElementTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ResearchElementTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid ResearchElementDefinition.type`;
      assertEnumCodeType<ResearchElementTypeEnum>(enumType, ResearchElementTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ResearchElementTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ResearchElementTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.type; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.researchElementTypeEnum);
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
   * @see CodeSystem Enumeration: {@link ResearchElementTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ResearchElementTypeEnum }
   */
  public setType(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.type (${String(value)})`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.researchElementTypeEnum);
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
   * @returns the `variableType` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VariableTypeEnum }
   */
  public getVariableTypeEnumType(): EnumCodeType | undefined {
    return this.variableType;
  }

  /**
   * Assigns the provided EnumCodeType value to the `variableType` property.
   *
   * @param enumType - the `variableType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VariableTypeEnum }
   */
  public setVariableTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ResearchElementDefinition.variableType';
      assertEnumCodeType<VariableTypeEnum>(enumType, VariableTypeEnum, errMsgPrefix);
      this.variableType = enumType;
    } else {
      this.variableType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `variableType` property exists and has a value; `false` otherwise
   */
  public hasVariableTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.variableType) && !this.variableType.isEmpty() && this.variableType.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `variableType` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VariableTypeEnum }
   */
  public getVariableTypeElement(): CodeType | undefined {
    if (this.variableType === undefined) {
      return undefined;
    }
    return this.variableType as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `variableType` property.
   *
   * @param element - the `variableType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link VariableTypeEnum }
   */
  public setVariableTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.variableType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.variableType = new EnumCodeType(element, this.variableTypeEnum);
    } else {
      this.variableType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `variableType` property exists and has a value; `false` otherwise
   */
  public hasVariableTypeElement(): boolean {
    return this.hasVariableTypeEnumType();
  }

  /**
   * @returns the `variableType` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link VariableTypeEnum }
   */
  public getVariableType(): fhirCode | undefined {
    if (this.variableType === undefined) {
      return undefined;
    }
    return this.variableType.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `variableType` property.
   *
   * @param value - the `variableType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link VariableTypeEnum }
   */
  public setVariableType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.variableType; Provided value is not an instance of fhirCode.`;
      this.variableType = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.variableTypeEnum);
    } else {
      this.variableType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `variableType` property exists and has a value; `false` otherwise
   */
  public hasVariableType(): boolean {
    return this.hasVariableTypeEnumType();
  }

  /**
   * @returns the `characteristic` property value as a ResearchElementDefinitionCharacteristicComponent array
   */
  public getCharacteristic(): ResearchElementDefinitionCharacteristicComponent[] {
    return this.characteristic ?? ([] as ResearchElementDefinitionCharacteristicComponent[]);
  }

  /**
   * Assigns the provided ResearchElementDefinitionCharacteristicComponent array value to the `characteristic` property.
   *
   * @param value - the `characteristic` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCharacteristic(value: ResearchElementDefinitionCharacteristicComponent[] | undefined | null): this {
    if (isDefinedList<ResearchElementDefinitionCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic; Provided value array has an element that is not an instance of ResearchElementDefinitionCharacteristicComponent.`;
      assertFhirTypeList<ResearchElementDefinitionCharacteristicComponent>(value, ResearchElementDefinitionCharacteristicComponent, optErrMsg);
      this.characteristic = value;
    } else {
      this.characteristic = null;
    }
    return this;
  }

  /**
   * Add the provided ResearchElementDefinitionCharacteristicComponent value to the `characteristic` array property.
   *
   * @param value - the `characteristic` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCharacteristic(value: ResearchElementDefinitionCharacteristicComponent | undefined): this {
    if (isDefined<ResearchElementDefinitionCharacteristicComponent>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic; Provided element is not an instance of ResearchElementDefinitionCharacteristicComponent.`;
      assertFhirType<ResearchElementDefinitionCharacteristicComponent>(value, ResearchElementDefinitionCharacteristicComponent, optErrMsg);
      this.initCharacteristic();
      this.characteristic?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `characteristic` property exists and has a value; `false` otherwise
   */
  public hasCharacteristic(): boolean {
    return isDefinedList<ResearchElementDefinitionCharacteristicComponent>(this.characteristic) && this.characteristic.some((item: ResearchElementDefinitionCharacteristicComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `characteristic` property
   */
  private initCharacteristic(): void {
    if(!this.hasCharacteristic()) {
      this.characteristic = [] as ResearchElementDefinitionCharacteristicComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ResearchElementDefinition';
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
      this.shortTitle,
      this.subtitle,
      this.status,
      this.experimental,
      this.subject,
      this.date,
      this.publisher,
      this.contact,
      this.description,
      this.comment,
      this.useContext,
      this.jurisdiction,
      this.purpose,
      this.usage,
      this.copyright,
      this.approvalDate,
      this.lastReviewDate,
      this.effectivePeriod,
      this.topic,
      this.author,
      this.editor,
      this.reviewer,
      this.endorser,
      this.relatedArtifact,
      this.library,
      this.type_,
      this.variableType,
      this.characteristic,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.type_, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchElementDefinition {
    const dest = new ResearchElementDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchElementDefinition): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    dest.shortTitle = this.shortTitle?.copy();
    dest.subtitle = this.subtitle?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.experimental = this.experimental?.copy();
    dest.subject = this.subject?.copy() as IDataType;
    dest.date = this.date?.copy();
    dest.publisher = this.publisher?.copy();
    const contactList = copyListValues<ContactDetail>(this.contact);
    dest.contact = contactList.length === 0 ? undefined : contactList;
    dest.description = this.description?.copy();
    const commentList = copyListValues<StringType>(this.comment);
    dest.comment = commentList.length === 0 ? undefined : commentList;
    const useContextList = copyListValues<UsageContext>(this.useContext);
    dest.useContext = useContextList.length === 0 ? undefined : useContextList;
    const jurisdictionList = copyListValues<CodeableConcept>(this.jurisdiction);
    dest.jurisdiction = jurisdictionList.length === 0 ? undefined : jurisdictionList;
    dest.purpose = this.purpose?.copy();
    dest.usage = this.usage?.copy();
    dest.copyright = this.copyright?.copy();
    dest.approvalDate = this.approvalDate?.copy();
    dest.lastReviewDate = this.lastReviewDate?.copy();
    dest.effectivePeriod = this.effectivePeriod?.copy();
    const topicList = copyListValues<CodeableConcept>(this.topic);
    dest.topic = topicList.length === 0 ? undefined : topicList;
    const authorList = copyListValues<ContactDetail>(this.author);
    dest.author = authorList.length === 0 ? undefined : authorList;
    const editorList = copyListValues<ContactDetail>(this.editor);
    dest.editor = editorList.length === 0 ? undefined : editorList;
    const reviewerList = copyListValues<ContactDetail>(this.reviewer);
    dest.reviewer = reviewerList.length === 0 ? undefined : reviewerList;
    const endorserList = copyListValues<ContactDetail>(this.endorser);
    dest.endorser = endorserList.length === 0 ? undefined : endorserList;
    const relatedArtifactList = copyListValues<RelatedArtifact>(this.relatedArtifact);
    dest.relatedArtifact = relatedArtifactList.length === 0 ? undefined : relatedArtifactList;
    const libraryList = copyListValues<CanonicalType>(this.library);
    dest.library = libraryList.length === 0 ? undefined : libraryList;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.variableType = this.variableType?.copy();
    const characteristicList = copyListValues<ResearchElementDefinitionCharacteristicComponent>(this.characteristic);
    dest.characteristic = characteristicList.length === 0 ? null : characteristicList;
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

    if (this.hasShortTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getShortTitleElement(), 'shortTitle', jsonObj);
    }

    if (this.hasSubtitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSubtitleElement(), 'subtitle', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
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

    if (this.hasComment()) {
      setFhirPrimitiveListJson(this.getCommentElement(), 'comment', jsonObj);
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

    if (this.hasUsageElement()) {
      setFhirPrimitiveJson<fhirString>(this.getUsageElement(), 'usage', jsonObj);
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

    if (this.hasTopic()) {
      setFhirComplexListJson(this.getTopic(), 'topic', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexListJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasEditor()) {
      setFhirComplexListJson(this.getEditor(), 'editor', jsonObj);
    }

    if (this.hasReviewer()) {
      setFhirComplexListJson(this.getReviewer(), 'reviewer', jsonObj);
    }

    if (this.hasEndorser()) {
      setFhirComplexListJson(this.getEndorser(), 'endorser', jsonObj);
    }

    if (this.hasRelatedArtifact()) {
      setFhirComplexListJson(this.getRelatedArtifact(), 'relatedArtifact', jsonObj);
    }

    if (this.hasLibrary()) {
      setFhirPrimitiveListJson(this.getLibraryElement(), 'library', jsonObj);
    }

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    if (this.hasVariableTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getVariableTypeElement()!, 'variableType', jsonObj);
    }

    if (this.hasCharacteristic()) {
      setFhirBackboneElementListJson(this.getCharacteristic(), 'characteristic', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ResearchElementDefinitionCharacteristicComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** What defines the members of the research element
 * - **Definition:** A characteristic that defines the members of the research element. Multiple characteristics are applied with "and" semantics.
 * - **Comment:** Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchElementDefinition](http://hl7.org/fhir/StructureDefinition/ResearchElementDefinition)
 */
export class ResearchElementDefinitionCharacteristicComponent extends BackboneElement implements IBackboneElement {
  constructor(definition: IDataType | null = null) {
    super();

    this.groupMeasureEnum = new GroupMeasureEnum();

    this.definition = null;
    if (isDefined<IDataType>(definition)) {
      this.setDefinition(definition);
    }

  }

  /**
   * Parse the provided `ResearchElementDefinitionCharacteristicComponent` JSON to instantiate the ResearchElementDefinitionCharacteristicComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchElementDefinitionCharacteristicComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchElementDefinitionCharacteristicComponent
   * @returns ResearchElementDefinitionCharacteristicComponent data model or undefined for `ResearchElementDefinitionCharacteristicComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ResearchElementDefinitionCharacteristicComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchElementDefinitionCharacteristicComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchElementDefinitionCharacteristicComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ResearchElementDefinitionCharacteristicComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ResearchElementDefinitionCharacteristicComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'definition[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const definition: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (definition === undefined) {
      instance.setDefinition(null);
    } else {
      instance.setDefinition(definition);
    }

    fieldName = 'usageContext';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: UsageContext | undefined = UsageContext.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addUsageContext(datatype);
          }
        });
      }
    }

    fieldName = 'exclude';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setExcludeElement(datatype);
    }

    fieldName = 'unitOfMeasure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnitOfMeasure(datatype);
    }

    fieldName = 'studyEffectiveDescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setStudyEffectiveDescriptionElement(datatype);
    }

    fieldName = 'studyEffective[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const studyEffective: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setStudyEffective(studyEffective);

    fieldName = 'studyEffectiveTimeFromStart';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setStudyEffectiveTimeFromStart(datatype);
    }

    fieldName = 'studyEffectiveGroupMeasure';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStudyEffectiveGroupMeasureElement(datatype);
    }

    fieldName = 'participantEffectiveDescription';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setParticipantEffectiveDescriptionElement(datatype);
    }

    fieldName = 'participantEffective[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const participantEffective: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setParticipantEffective(participantEffective);

    fieldName = 'participantEffectiveTimeFromStart';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setParticipantEffectiveTimeFromStart(datatype);
    }

    fieldName = 'participantEffectiveGroupMeasure';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setParticipantEffectiveGroupMeasureElement(datatype);
    }

    return instance;
  }

  /**
   * ResearchElementDefinition.characteristic.definition[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ResearchElementDefinition.characteristic.definition[x]', ['CodeableConcept','canonical','Expression','DataRequirement',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What code or expression defines members?
   * - **Definition:** Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   * - **Requirements:** Need to be able to define members in simple codes when the membership aligns well with terminology, with common criteria such as observations in a value set or lab tests within a year, or with expression language to support criteria that do not fit in the above.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'canonical',
   *     'Expression',
   *     'DataRequirement',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('ResearchElementDefinition.characteristic.definition[x]',[
    'CodeableConcept',
    'canonical',
    'Expression',
    'DataRequirement',
  ])
  private definition: IDataType | null;

  /**
   * ResearchElementDefinition.characteristic.usageContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What code/value pairs define members?
   * - **Definition:** Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
   * - **Requirements:** Need to be able to define members more structurally when more information can be communicated such as age range.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private usageContext?: UsageContext[] | undefined;

  /**
   * ResearchElementDefinition.characteristic.exclude Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether the characteristic includes or excludes members
   * - **Definition:** When true, members with this characteristic are excluded from the element.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private exclude?: BooleanType | undefined;

  /**
   * ResearchElementDefinition.characteristic.unitOfMeasure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What unit is the outcome described in?
   * - **Definition:** Specifies the UCUM unit for the outcome.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private unitOfMeasure?: CodeableConcept | undefined;

  /**
   * ResearchElementDefinition.characteristic.studyEffectiveDescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What time period does the study cover
   * - **Definition:** A narrative description of the time period the study covers.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private studyEffectiveDescription?: StringType | undefined;

  /**
   * ResearchElementDefinition.characteristic.studyEffective[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ResearchElementDefinition.characteristic.studyEffective[x]', ['dateTime','Period','Duration','Timing',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What time period does the study cover
   * - **Definition:** Indicates what effective period the study covers.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   *     'Duration',
   *     'Timing',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ResearchElementDefinition.characteristic.studyEffective[x]',[
    'dateTime',
    'Period',
    'Duration',
    'Timing',
  ])
  private studyEffective?: IDataType | undefined;

  /**
   * ResearchElementDefinition.characteristic.studyEffectiveTimeFromStart Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Observation time from study start
   * - **Definition:** Indicates duration from the study initiation.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private studyEffectiveTimeFromStart?: Duration | undefined;

  /**
   * FHIR CodeSystem: GroupMeasure
   *
   * @see {@link GroupMeasureEnum }
   */
  private readonly groupMeasureEnum: GroupMeasureEnum;

  /**
   * ResearchElementDefinition.characteristic.studyEffectiveGroupMeasure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
   * - **Definition:** Indicates how elements are aggregated within the study effective period.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  private studyEffectiveGroupMeasure?: EnumCodeType | undefined;

  /**
   * ResearchElementDefinition.characteristic.participantEffectiveDescription Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What time period do participants cover
   * - **Definition:** A narrative description of the time period the study covers.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private participantEffectiveDescription?: StringType | undefined;

  /**
   * ResearchElementDefinition.characteristic.participantEffective[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ResearchElementDefinition.characteristic.participantEffective[x]', ['dateTime','Period','Duration','Timing',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What time period do participants cover
   * - **Definition:** Indicates what effective period the study covers.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   *     'Duration',
   *     'Timing',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ResearchElementDefinition.characteristic.participantEffective[x]',[
    'dateTime',
    'Period',
    'Duration',
    'Timing',
  ])
  private participantEffective?: IDataType | undefined;

  /**
   * ResearchElementDefinition.characteristic.participantEffectiveTimeFromStart Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Observation time from study start
   * - **Definition:** Indicates duration from the participant\'s study entry.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private participantEffectiveTimeFromStart?: Duration | undefined;

  /**
   * ResearchElementDefinition.characteristic.participantEffectiveGroupMeasure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
   * - **Definition:** Indicates how elements are aggregated within the study effective period.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  private participantEffectiveGroupMeasure?: EnumCodeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `definition` property value as a DataType object; else null
   */
  public getDefinition(): IDataType | null {
    return this.definition;
  }

  /**
   * Assigns the provided DataType object value to the `definition` property.
   *
   * @decorator `@ChoiceDataTypes('ResearchElementDefinition.characteristic.definition[x]')`
   *
   * @param value - the `definition` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ResearchElementDefinition.characteristic.definition[x]')
  public setDefinition(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.definition = value;
    } else {
      this.definition = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinition(): boolean {
    return isDefined<IDataType>(this.definition) && !this.definition.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `definition` property value as a CodeableConcept object if defined; else null
   */
  public getDefinitionCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.definition)) {
      return null;
    }
    if (!(this.definition instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.definition[x]: Expected CodeableConcept but encountered ${this.definition.fhirType()}`,
      );
    }
    return this.definition;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasDefinitionCodeableConcept(): boolean {
    return this.hasDefinition() && this.definition instanceof CodeableConcept;
  }

  /**
   * @returns the `definition` property value as a CanonicalType object if defined; else null
   */
  public getDefinitionCanonicalType(): CanonicalType | null {
    if (!isDefined<IDataType>(this.definition)) {
      return null;
    }
    if (!(this.definition instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.definition[x]: Expected CanonicalType but encountered ${this.definition.fhirType()}`,
      );
    }
    return this.definition;
  }

  /**
   * @returns `true` if the `` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasDefinitionCanonicalType(): boolean {
    return this.hasDefinition() && this.definition instanceof CanonicalType;
  }

  /**
   * @returns the `definition` property value as a Expression object if defined; else null
   */
  public getDefinitionExpression(): Expression | null {
    if (!isDefined<IDataType>(this.definition)) {
      return null;
    }
    if (!(this.definition instanceof Expression)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.definition[x]: Expected Expression but encountered ${this.definition.fhirType()}`,
      );
    }
    return this.definition;
  }

  /**
   * @returns `true` if the `` property exists as a Expression and has a value; `false` otherwise
   */
  public hasDefinitionExpression(): boolean {
    return this.hasDefinition() && this.definition instanceof Expression;
  }

  /**
   * @returns the `definition` property value as a DataRequirement object if defined; else null
   */
  public getDefinitionDataRequirement(): DataRequirement | null {
    if (!isDefined<IDataType>(this.definition)) {
      return null;
    }
    if (!(this.definition instanceof DataRequirement)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.definition[x]: Expected DataRequirement but encountered ${this.definition.fhirType()}`,
      );
    }
    return this.definition;
  }

  /**
   * @returns `true` if the `` property exists as a DataRequirement and has a value; `false` otherwise
   */
  public hasDefinitionDataRequirement(): boolean {
    return this.hasDefinition() && this.definition instanceof DataRequirement;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `usageContext` property value as a UsageContext array
   */
  public getUsageContext(): UsageContext[] {
    return this.usageContext ?? ([] as UsageContext[]);
  }

  /**
   * Assigns the provided UsageContext array value to the `usageContext` property.
   *
   * @param value - the `usageContext` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUsageContext(value: UsageContext[] | undefined): this {
    if (isDefinedList<UsageContext>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.usageContext; Provided value array has an element that is not an instance of UsageContext.`;
      assertFhirTypeList<UsageContext>(value, UsageContext, optErrMsg);
      this.usageContext = value;
    } else {
      this.usageContext = undefined;
    }
    return this;
  }

  /**
   * Add the provided UsageContext value to the `usageContext` array property.
   *
   * @param value - the `usageContext` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addUsageContext(value: UsageContext | undefined): this {
    if (isDefined<UsageContext>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.usageContext; Provided element is not an instance of UsageContext.`;
      assertFhirType<UsageContext>(value, UsageContext, optErrMsg);
      this.initUsageContext();
      this.usageContext?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `usageContext` property exists and has a value; `false` otherwise
   */
  public hasUsageContext(): boolean {
    return isDefinedList<UsageContext>(this.usageContext) && this.usageContext.some((item: UsageContext) => !item.isEmpty());
  }

  /**
   * Initialize the `usageContext` property
   */
  private initUsageContext(): void {
    if(!this.hasUsageContext()) {
      this.usageContext = [] as UsageContext[];
    }
  }

  /**
   * @returns the `exclude` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getExcludeElement(): BooleanType {
    return this.exclude ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `exclude` property.
   *
   * @param element - the `exclude` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExcludeElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.exclude; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.exclude = element;
    } else {
      this.exclude = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `exclude` property exists and has a value; `false` otherwise
   */
  public hasExcludeElement(): boolean {
    return isDefined<BooleanType>(this.exclude) && !this.exclude.isEmpty();
  }

  /**
   * @returns the `exclude` property value as a fhirBoolean if defined; else undefined
   */
  public getExclude(): fhirBoolean | undefined {
    return this.exclude?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `exclude` property.
   *
   * @param value - the `exclude` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setExclude(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.exclude (${String(value)})`;
      this.exclude = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.exclude = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `exclude` property exists and has a value; `false` otherwise
   */
  public hasExclude(): boolean {
    return this.hasExcludeElement();
  }

  /**
   * @returns the `unitOfMeasure` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getUnitOfMeasure(): CodeableConcept {
    return this.unitOfMeasure ?? new CodeableConcept();
  }

  /**
   * Assigns the provided UnitOfMeasure object value to the `unitOfMeasure` property.
   *
   * @param value - the `unitOfMeasure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnitOfMeasure(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.unitOfMeasure; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.unitOfMeasure = value;
    } else {
      this.unitOfMeasure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unitOfMeasure` property exists and has a value; `false` otherwise
   */
  public hasUnitOfMeasure(): boolean {
    return isDefined<CodeableConcept>(this.unitOfMeasure) && !this.unitOfMeasure.isEmpty();
  }

  /**
   * @returns the `studyEffectiveDescription` property value as a StringType object if defined; else an empty StringType object
   */
  public getStudyEffectiveDescriptionElement(): StringType {
    return this.studyEffectiveDescription ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `studyEffectiveDescription` property.
   *
   * @param element - the `studyEffectiveDescription` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStudyEffectiveDescriptionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.studyEffectiveDescription; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.studyEffectiveDescription = element;
    } else {
      this.studyEffectiveDescription = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `studyEffectiveDescription` property exists and has a value; `false` otherwise
   */
  public hasStudyEffectiveDescriptionElement(): boolean {
    return isDefined<StringType>(this.studyEffectiveDescription) && !this.studyEffectiveDescription.isEmpty();
  }

  /**
   * @returns the `studyEffectiveDescription` property value as a fhirString if defined; else undefined
   */
  public getStudyEffectiveDescription(): fhirString | undefined {
    return this.studyEffectiveDescription?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `studyEffectiveDescription` property.
   *
   * @param value - the `studyEffectiveDescription` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStudyEffectiveDescription(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.studyEffectiveDescription (${String(value)})`;
      this.studyEffectiveDescription = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.studyEffectiveDescription = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `studyEffectiveDescription` property exists and has a value; `false` otherwise
   */
  public hasStudyEffectiveDescription(): boolean {
    return this.hasStudyEffectiveDescriptionElement();
  }

  /**
   * @returns the `studyEffective` property value as a DataType object if defined; else undefined
   */
  public getStudyEffective(): IDataType | undefined {
    return this.studyEffective;
  }

  /**
   * Assigns the provided DataType object value to the `studyEffective` property.
   *
   * @decorator `@ChoiceDataTypes('ResearchElementDefinition.characteristic.studyEffective[x]')`
   *
   * @param value - the `studyEffective` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ResearchElementDefinition.characteristic.studyEffective[x]')
  public setStudyEffective(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.studyEffective = value;
    } else {
      this.studyEffective = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `studyEffective` property exists and has a value; `false` otherwise
   */
  public hasStudyEffective(): boolean {
    return isDefined<IDataType>(this.studyEffective) && !this.studyEffective.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `studyEffective` property value as a DateTimeType object if defined; else undefined
   */
  public getStudyEffectiveDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.studyEffective)) {
      return undefined;
    }
    if (!(this.studyEffective instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.studyEffective[x]: Expected DateTimeType but encountered ${this.studyEffective.fhirType()}`,
      );
    }
    return this.studyEffective;
  }

  /**
   * @returns `true` if the `studyEffective` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasStudyEffectiveDateTimeType(): boolean {
    return this.hasStudyEffective() && this.studyEffective instanceof DateTimeType;
  }

  /**
   * @returns the `studyEffective` property value as a Period object if defined; else undefined
   */
  public getStudyEffectivePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.studyEffective)) {
      return undefined;
    }
    if (!(this.studyEffective instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.studyEffective[x]: Expected Period but encountered ${this.studyEffective.fhirType()}`,
      );
    }
    return this.studyEffective;
  }

  /**
   * @returns `true` if the `studyEffective` property exists as a Period and has a value; `false` otherwise
   */
  public hasStudyEffectivePeriod(): boolean {
    return this.hasStudyEffective() && this.studyEffective instanceof Period;
  }

  /**
   * @returns the `studyEffective` property value as a Duration object if defined; else undefined
   */
  public getStudyEffectiveDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.studyEffective)) {
      return undefined;
    }
    if (!(this.studyEffective instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.studyEffective[x]: Expected Duration but encountered ${this.studyEffective.fhirType()}`,
      );
    }
    return this.studyEffective;
  }

  /**
   * @returns `true` if the `studyEffective` property exists as a Duration and has a value; `false` otherwise
   */
  public hasStudyEffectiveDuration(): boolean {
    return this.hasStudyEffective() && this.studyEffective instanceof Duration;
  }

  /**
   * @returns the `studyEffective` property value as a Timing object if defined; else undefined
   */
  public getStudyEffectiveTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.studyEffective)) {
      return undefined;
    }
    if (!(this.studyEffective instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.studyEffective[x]: Expected Timing but encountered ${this.studyEffective.fhirType()}`,
      );
    }
    return this.studyEffective;
  }

  /**
   * @returns `true` if the `studyEffective` property exists as a Timing and has a value; `false` otherwise
   */
  public hasStudyEffectiveTiming(): boolean {
    return this.hasStudyEffective() && this.studyEffective instanceof Timing;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `studyEffectiveTimeFromStart` property value as a Duration object if defined; else an empty Duration object
   */
  public getStudyEffectiveTimeFromStart(): Duration {
    return this.studyEffectiveTimeFromStart ?? new Duration();
  }

  /**
   * Assigns the provided StudyEffectiveTimeFromStart object value to the `studyEffectiveTimeFromStart` property.
   *
   * @param value - the `studyEffectiveTimeFromStart` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStudyEffectiveTimeFromStart(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.studyEffectiveTimeFromStart; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.studyEffectiveTimeFromStart = value;
    } else {
      this.studyEffectiveTimeFromStart = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `studyEffectiveTimeFromStart` property exists and has a value; `false` otherwise
   */
  public hasStudyEffectiveTimeFromStart(): boolean {
    return isDefined<Duration>(this.studyEffectiveTimeFromStart) && !this.studyEffectiveTimeFromStart.isEmpty();
  }

  /**
   * @returns the `studyEffectiveGroupMeasure` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public getStudyEffectiveGroupMeasureEnumType(): EnumCodeType | undefined {
    return this.studyEffectiveGroupMeasure;
  }

  /**
   * Assigns the provided EnumCodeType value to the `studyEffectiveGroupMeasure` property.
   *
   * @param enumType - the `studyEffectiveGroupMeasure` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public setStudyEffectiveGroupMeasureEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ResearchElementDefinition.characteristic.studyEffectiveGroupMeasure';
      assertEnumCodeType<GroupMeasureEnum>(enumType, GroupMeasureEnum, errMsgPrefix);
      this.studyEffectiveGroupMeasure = enumType;
    } else {
      this.studyEffectiveGroupMeasure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `studyEffectiveGroupMeasure` property exists and has a value; `false` otherwise
   */
  public hasStudyEffectiveGroupMeasureEnumType(): boolean {
    return isDefined<EnumCodeType>(this.studyEffectiveGroupMeasure) && !this.studyEffectiveGroupMeasure.isEmpty() && this.studyEffectiveGroupMeasure.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `studyEffectiveGroupMeasure` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public getStudyEffectiveGroupMeasureElement(): CodeType | undefined {
    if (this.studyEffectiveGroupMeasure === undefined) {
      return undefined;
    }
    return this.studyEffectiveGroupMeasure as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `studyEffectiveGroupMeasure` property.
   *
   * @param element - the `studyEffectiveGroupMeasure` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public setStudyEffectiveGroupMeasureElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.studyEffectiveGroupMeasure; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.studyEffectiveGroupMeasure = new EnumCodeType(element, this.groupMeasureEnum);
    } else {
      this.studyEffectiveGroupMeasure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `studyEffectiveGroupMeasure` property exists and has a value; `false` otherwise
   */
  public hasStudyEffectiveGroupMeasureElement(): boolean {
    return this.hasStudyEffectiveGroupMeasureEnumType();
  }

  /**
   * @returns the `studyEffectiveGroupMeasure` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public getStudyEffectiveGroupMeasure(): fhirCode | undefined {
    if (this.studyEffectiveGroupMeasure === undefined) {
      return undefined;
    }
    return this.studyEffectiveGroupMeasure.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `studyEffectiveGroupMeasure` property.
   *
   * @param value - the `studyEffectiveGroupMeasure` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public setStudyEffectiveGroupMeasure(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.studyEffectiveGroupMeasure; Provided value is not an instance of fhirCode.`;
      this.studyEffectiveGroupMeasure = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.groupMeasureEnum);
    } else {
      this.studyEffectiveGroupMeasure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `studyEffectiveGroupMeasure` property exists and has a value; `false` otherwise
   */
  public hasStudyEffectiveGroupMeasure(): boolean {
    return this.hasStudyEffectiveGroupMeasureEnumType();
  }

  /**
   * @returns the `participantEffectiveDescription` property value as a StringType object if defined; else an empty StringType object
   */
  public getParticipantEffectiveDescriptionElement(): StringType {
    return this.participantEffectiveDescription ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `participantEffectiveDescription` property.
   *
   * @param element - the `participantEffectiveDescription` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParticipantEffectiveDescriptionElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.participantEffectiveDescription; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.participantEffectiveDescription = element;
    } else {
      this.participantEffectiveDescription = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `participantEffectiveDescription` property exists and has a value; `false` otherwise
   */
  public hasParticipantEffectiveDescriptionElement(): boolean {
    return isDefined<StringType>(this.participantEffectiveDescription) && !this.participantEffectiveDescription.isEmpty();
  }

  /**
   * @returns the `participantEffectiveDescription` property value as a fhirString if defined; else undefined
   */
  public getParticipantEffectiveDescription(): fhirString | undefined {
    return this.participantEffectiveDescription?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `participantEffectiveDescription` property.
   *
   * @param value - the `participantEffectiveDescription` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setParticipantEffectiveDescription(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.participantEffectiveDescription (${String(value)})`;
      this.participantEffectiveDescription = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.participantEffectiveDescription = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `participantEffectiveDescription` property exists and has a value; `false` otherwise
   */
  public hasParticipantEffectiveDescription(): boolean {
    return this.hasParticipantEffectiveDescriptionElement();
  }

  /**
   * @returns the `participantEffective` property value as a DataType object if defined; else undefined
   */
  public getParticipantEffective(): IDataType | undefined {
    return this.participantEffective;
  }

  /**
   * Assigns the provided DataType object value to the `participantEffective` property.
   *
   * @decorator `@ChoiceDataTypes('ResearchElementDefinition.characteristic.participantEffective[x]')`
   *
   * @param value - the `participantEffective` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ResearchElementDefinition.characteristic.participantEffective[x]')
  public setParticipantEffective(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.participantEffective = value;
    } else {
      this.participantEffective = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `participantEffective` property exists and has a value; `false` otherwise
   */
  public hasParticipantEffective(): boolean {
    return isDefined<IDataType>(this.participantEffective) && !this.participantEffective.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `participantEffective` property value as a DateTimeType object if defined; else undefined
   */
  public getParticipantEffectiveDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.participantEffective)) {
      return undefined;
    }
    if (!(this.participantEffective instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.participantEffective[x]: Expected DateTimeType but encountered ${this.participantEffective.fhirType()}`,
      );
    }
    return this.participantEffective;
  }

  /**
   * @returns `true` if the `participantEffective` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasParticipantEffectiveDateTimeType(): boolean {
    return this.hasParticipantEffective() && this.participantEffective instanceof DateTimeType;
  }

  /**
   * @returns the `participantEffective` property value as a Period object if defined; else undefined
   */
  public getParticipantEffectivePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.participantEffective)) {
      return undefined;
    }
    if (!(this.participantEffective instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.participantEffective[x]: Expected Period but encountered ${this.participantEffective.fhirType()}`,
      );
    }
    return this.participantEffective;
  }

  /**
   * @returns `true` if the `participantEffective` property exists as a Period and has a value; `false` otherwise
   */
  public hasParticipantEffectivePeriod(): boolean {
    return this.hasParticipantEffective() && this.participantEffective instanceof Period;
  }

  /**
   * @returns the `participantEffective` property value as a Duration object if defined; else undefined
   */
  public getParticipantEffectiveDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.participantEffective)) {
      return undefined;
    }
    if (!(this.participantEffective instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.participantEffective[x]: Expected Duration but encountered ${this.participantEffective.fhirType()}`,
      );
    }
    return this.participantEffective;
  }

  /**
   * @returns `true` if the `participantEffective` property exists as a Duration and has a value; `false` otherwise
   */
  public hasParticipantEffectiveDuration(): boolean {
    return this.hasParticipantEffective() && this.participantEffective instanceof Duration;
  }

  /**
   * @returns the `participantEffective` property value as a Timing object if defined; else undefined
   */
  public getParticipantEffectiveTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.participantEffective)) {
      return undefined;
    }
    if (!(this.participantEffective instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for ResearchElementDefinition.characteristic.participantEffective[x]: Expected Timing but encountered ${this.participantEffective.fhirType()}`,
      );
    }
    return this.participantEffective;
  }

  /**
   * @returns `true` if the `participantEffective` property exists as a Timing and has a value; `false` otherwise
   */
  public hasParticipantEffectiveTiming(): boolean {
    return this.hasParticipantEffective() && this.participantEffective instanceof Timing;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `participantEffectiveTimeFromStart` property value as a Duration object if defined; else an empty Duration object
   */
  public getParticipantEffectiveTimeFromStart(): Duration {
    return this.participantEffectiveTimeFromStart ?? new Duration();
  }

  /**
   * Assigns the provided ParticipantEffectiveTimeFromStart object value to the `participantEffectiveTimeFromStart` property.
   *
   * @param value - the `participantEffectiveTimeFromStart` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipantEffectiveTimeFromStart(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.participantEffectiveTimeFromStart; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.participantEffectiveTimeFromStart = value;
    } else {
      this.participantEffectiveTimeFromStart = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `participantEffectiveTimeFromStart` property exists and has a value; `false` otherwise
   */
  public hasParticipantEffectiveTimeFromStart(): boolean {
    return isDefined<Duration>(this.participantEffectiveTimeFromStart) && !this.participantEffectiveTimeFromStart.isEmpty();
  }

  /**
   * @returns the `participantEffectiveGroupMeasure` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public getParticipantEffectiveGroupMeasureEnumType(): EnumCodeType | undefined {
    return this.participantEffectiveGroupMeasure;
  }

  /**
   * Assigns the provided EnumCodeType value to the `participantEffectiveGroupMeasure` property.
   *
   * @param enumType - the `participantEffectiveGroupMeasure` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public setParticipantEffectiveGroupMeasureEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ResearchElementDefinition.characteristic.participantEffectiveGroupMeasure';
      assertEnumCodeType<GroupMeasureEnum>(enumType, GroupMeasureEnum, errMsgPrefix);
      this.participantEffectiveGroupMeasure = enumType;
    } else {
      this.participantEffectiveGroupMeasure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `participantEffectiveGroupMeasure` property exists and has a value; `false` otherwise
   */
  public hasParticipantEffectiveGroupMeasureEnumType(): boolean {
    return isDefined<EnumCodeType>(this.participantEffectiveGroupMeasure) && !this.participantEffectiveGroupMeasure.isEmpty() && this.participantEffectiveGroupMeasure.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `participantEffectiveGroupMeasure` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public getParticipantEffectiveGroupMeasureElement(): CodeType | undefined {
    if (this.participantEffectiveGroupMeasure === undefined) {
      return undefined;
    }
    return this.participantEffectiveGroupMeasure as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `participantEffectiveGroupMeasure` property.
   *
   * @param element - the `participantEffectiveGroupMeasure` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public setParticipantEffectiveGroupMeasureElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.participantEffectiveGroupMeasure; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.participantEffectiveGroupMeasure = new EnumCodeType(element, this.groupMeasureEnum);
    } else {
      this.participantEffectiveGroupMeasure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `participantEffectiveGroupMeasure` property exists and has a value; `false` otherwise
   */
  public hasParticipantEffectiveGroupMeasureElement(): boolean {
    return this.hasParticipantEffectiveGroupMeasureEnumType();
  }

  /**
   * @returns the `participantEffectiveGroupMeasure` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public getParticipantEffectiveGroupMeasure(): fhirCode | undefined {
    if (this.participantEffectiveGroupMeasure === undefined) {
      return undefined;
    }
    return this.participantEffectiveGroupMeasure.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `participantEffectiveGroupMeasure` property.
   *
   * @param value - the `participantEffectiveGroupMeasure` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link GroupMeasureEnum }
   */
  public setParticipantEffectiveGroupMeasure(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ResearchElementDefinition.characteristic.participantEffectiveGroupMeasure; Provided value is not an instance of fhirCode.`;
      this.participantEffectiveGroupMeasure = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.groupMeasureEnum);
    } else {
      this.participantEffectiveGroupMeasure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `participantEffectiveGroupMeasure` property exists and has a value; `false` otherwise
   */
  public hasParticipantEffectiveGroupMeasure(): boolean {
    return this.hasParticipantEffectiveGroupMeasureEnumType();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ResearchElementDefinition.characteristic';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.definition,
      this.usageContext,
      this.exclude,
      this.unitOfMeasure,
      this.studyEffectiveDescription,
      this.studyEffective,
      this.studyEffectiveTimeFromStart,
      this.studyEffectiveGroupMeasure,
      this.participantEffectiveDescription,
      this.participantEffective,
      this.participantEffectiveTimeFromStart,
      this.participantEffectiveGroupMeasure,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.definition, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchElementDefinitionCharacteristicComponent {
    const dest = new ResearchElementDefinitionCharacteristicComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchElementDefinitionCharacteristicComponent): void {
    super.copyValues(dest);
    dest.definition = this.definition ? this.definition.copy() as IDataType : null;
    const usageContextList = copyListValues<UsageContext>(this.usageContext);
    dest.usageContext = usageContextList.length === 0 ? undefined : usageContextList;
    dest.exclude = this.exclude?.copy();
    dest.unitOfMeasure = this.unitOfMeasure?.copy();
    dest.studyEffectiveDescription = this.studyEffectiveDescription?.copy();
    dest.studyEffective = this.studyEffective?.copy() as IDataType;
    dest.studyEffectiveTimeFromStart = this.studyEffectiveTimeFromStart?.copy();
    dest.studyEffectiveGroupMeasure = this.studyEffectiveGroupMeasure?.copy();
    dest.participantEffectiveDescription = this.participantEffectiveDescription?.copy();
    dest.participantEffective = this.participantEffective?.copy() as IDataType;
    dest.participantEffectiveTimeFromStart = this.participantEffectiveTimeFromStart?.copy();
    dest.participantEffectiveGroupMeasure = this.participantEffectiveGroupMeasure?.copy();
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

    if (this.hasDefinition()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getDefinition()!, 'definition', jsonObj);
    }

    if (this.hasUsageContext()) {
      setFhirComplexListJson(this.getUsageContext(), 'usageContext', jsonObj);
    }

    if (this.hasExcludeElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getExcludeElement(), 'exclude', jsonObj);
    }

    if (this.hasUnitOfMeasure()) {
      setFhirComplexJson(this.getUnitOfMeasure(), 'unitOfMeasure', jsonObj);
    }

    if (this.hasStudyEffectiveDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getStudyEffectiveDescriptionElement(), 'studyEffectiveDescription', jsonObj);
    }

    if (this.hasStudyEffective()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getStudyEffective()!, 'studyEffective', jsonObj);
    }

    if (this.hasStudyEffectiveTimeFromStart()) {
      setFhirComplexJson(this.getStudyEffectiveTimeFromStart(), 'studyEffectiveTimeFromStart', jsonObj);
    }

    if (this.hasStudyEffectiveGroupMeasureElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStudyEffectiveGroupMeasureElement()!, 'studyEffectiveGroupMeasure', jsonObj);
    }

    if (this.hasParticipantEffectiveDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getParticipantEffectiveDescriptionElement(), 'participantEffectiveDescription', jsonObj);
    }

    if (this.hasParticipantEffective()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getParticipantEffective()!, 'participantEffective', jsonObj);
    }

    if (this.hasParticipantEffectiveTimeFromStart()) {
      setFhirComplexJson(this.getParticipantEffectiveTimeFromStart(), 'participantEffectiveTimeFromStart', jsonObj);
    }

    if (this.hasParticipantEffectiveGroupMeasureElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getParticipantEffectiveGroupMeasureElement()!, 'participantEffectiveGroupMeasure', jsonObj);
    }

    return jsonObj;
  }
}
