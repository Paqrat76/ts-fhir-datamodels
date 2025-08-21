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
 * ActivityDefinition Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ActivityDefinition
 * StructureDefinition.name: ActivityDefinition
 * StructureDefinition.description: This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { ActionParticipantTypeEnum } from '../code-systems/ActionParticipantTypeEnum';
import { Age, CodeableConcept, ContactDetail, Dosage, Duration, Expression, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Range, Reference, RelatedArtifact, Timing, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';
import { RequestIntentEnum } from '../code-systems/RequestIntentEnum';
import { RequestPriorityEnum } from '../code-systems/RequestPriorityEnum';
import { RequestResourceTypesEnum } from '../code-systems/RequestResourceTypesEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ActivityDefinition Class
 *
 * @remarks
 * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 *
 * **FHIR Specification**
 * - **Short:** The definition of a specific activity to be taken, independent of any particular patient or context
 * - **Definition:** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR ActivityDefinition](http://hl7.org/fhir/StructureDefinition/ActivityDefinition)
 */
export class ActivityDefinition extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();
    this.requestResourceTypesEnum = new RequestResourceTypesEnum();
    this.requestIntentEnum = new RequestIntentEnum();
    this.requestPriorityEnum = new RequestPriorityEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'ActivityDefinition.status',
    );
  }

  /**
   * Parse the provided `ActivityDefinition` JSON to instantiate the ActivityDefinition data model.
   *
   * @param sourceJson - JSON representing FHIR `ActivityDefinition`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ActivityDefinition
   * @returns ActivityDefinition data model or undefined for `ActivityDefinition`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ActivityDefinition | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ActivityDefinition';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ActivityDefinition();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ActivityDefinition');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ActivityDefinition[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ActivityDefinition`;
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addTopic(datatype);
        }
      });
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAuthor(datatype);
        }
      });
    }

    fieldName = 'editor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEditor(datatype);
        }
      });
    }

    fieldName = 'reviewer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReviewer(datatype);
        }
      });
    }

    fieldName = 'endorser';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: ContactDetail | undefined = ContactDetail.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEndorser(datatype);
        }
      });
    }

    fieldName = 'relatedArtifact';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: RelatedArtifact | undefined = RelatedArtifact.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRelatedArtifact(datatype);
        }
      });
    }

    fieldName = 'library';
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
          instance.addLibraryElement(datatype);
        }
      });
    }

    fieldName = 'kind';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setKindElement(datatype);
    }

    fieldName = 'profile';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setProfileElement(datatype);
    }

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'intent';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setIntentElement(datatype);
    }

    fieldName = 'priority';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setPriorityElement(datatype);
    }

    fieldName = 'doNotPerform';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setDoNotPerformElement(datatype);
    }

    fieldName = 'timing[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const timing: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTiming(timing);

    fieldName = 'location';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setLocation(datatype);
    }

    fieldName = 'participant';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ActivityDefinitionParticipantComponent | undefined = ActivityDefinitionParticipantComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addParticipant(component);
        }
      });
    }

    fieldName = 'product[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const product: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setProduct(product);

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'dosage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Dosage | undefined = Dosage.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDosage(datatype);
        }
      });
    }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addBodySite(datatype);
        }
      });
    }

    fieldName = 'specimenRequirement';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSpecimenRequirement(datatype);
        }
      });
  }

    fieldName = 'observationRequirement';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addObservationRequirement(datatype);
        }
      });
  }

    fieldName = 'observationResultRequirement';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addObservationResultRequirement(datatype);
        }
      });
  }

    fieldName = 'transform';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setTransformElement(datatype);
    }

    fieldName = 'dynamicValue';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ActivityDefinitionDynamicValueComponent | undefined = ActivityDefinitionDynamicValueComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDynamicValue(component);
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
   * ActivityDefinition.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this activity definition, represented as a URI (globally unique)
   * - **Definition:** An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this activity definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the activity definition is stored on different servers.
   * - **Comment:** Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version. The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](https://hl7.org/fhir/resource.html#versions).  In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](https://hl7.org/fhir/resource.html#meta) element to indicate where the current master source of the resource can be found.
   * - **Requirements:** Allows the activity definition to be referenced by a single globally unique identifier.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private url?: UriType | undefined;

  /**
   * ActivityDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the activity definition
   * - **Definition:** A formal identifier that is used to identify this activity definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the module.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * ActivityDefinition.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business version of the activity definition
   * - **Definition:** The identifier that is used to identify this version of the activity definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the activity definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.
   * - **Comment:** There may be different activity definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the activity definition with the format [url]|[version].
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private version?: StringType | undefined;

  /**
   * ActivityDefinition.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this activity definition (computer friendly)
   * - **Definition:** A natural language name identifying the activity definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
   * - **Comment:** The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   * - **Requirements:** Support human navigation and code generation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name?: StringType | undefined;

  /**
   * ActivityDefinition.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this activity definition (human friendly)
   * - **Definition:** A short, descriptive, user-friendly title for the activity definition.
   * - **Comment:** This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * ActivityDefinition.subtitle Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Subordinate title of the activity definition
   * - **Definition:** An explanatory or alternate title for the activity definition giving additional information about its content.
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
   * ActivityDefinition.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The status of this activity definition. Enables tracking the life-cycle of the content.
   * - **Comment:** Allows filtering of activity definitions that are appropriate for use versus not.
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
   * ActivityDefinition.experimental Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** For testing purposes, not real usage
   * - **Definition:** A Boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
   * - **Comment:** Allows filtering of activity definitions that are appropriate for use versus not.
   * - **Requirements:** Enables experimental content to be developed following the same lifecycle that would be used for a production-level activity definition.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private experimental?: BooleanType | undefined;

  /**
   * ActivityDefinition.subject[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ActivityDefinition.subject[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of individual the activity definition is intended for
   * - **Definition:** A code or group definition that describes the intended subject of the activity being defined.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ActivityDefinition.subject[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private subject?: IDataType | undefined;

  /**
   * ActivityDefinition.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the activity definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.
   * - **Comment:** Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the activity definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * ActivityDefinition.publisher Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the publisher (organization or individual)
   * - **Definition:** The name of the organization or individual that published the activity definition.
   * - **Comment:** Usually an organization but may be an individual. The publisher (or steward) of the activity definition is the organization or individual primarily responsible for the maintenance and upkeep of the activity definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the activity definition. This item SHOULD be populated unless the information is available from context.
   * - **Requirements:** Helps establish the "authority/credibility" of the activity definition.  May also allow for contact.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private publisher?: StringType | undefined;

  /**
   * ActivityDefinition.contact Element
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
   * ActivityDefinition.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Natural language description of the activity definition
   * - **Definition:** A free text natural language description of the activity definition from a consumer\'s perspective.
   * - **Comment:** This description can be used to capture details such as why the activity definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the activity definition as conveyed in the \'text\' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the activity definition is presumed to be the predominant language in the place the activity definition was created).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private description?: MarkdownType | undefined;

  /**
   * ActivityDefinition.useContext Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The context that the content is intended to support
   * - **Definition:** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate activity definition instances.
   * - **Comment:** When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   * - **Requirements:** Assist in searching for appropriate content.
   * - **FHIR Type:** `UsageContext`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private useContext?: UsageContext[] | undefined;

  /**
   * ActivityDefinition.jurisdiction Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Intended jurisdiction for activity definition (if applicable)
   * - **Definition:** A legal or geographic region in which the activity definition is intended to be used.
   * - **Comment:** It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally designed or intended.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private jurisdiction?: CodeableConcept[] | undefined;

  /**
   * ActivityDefinition.purpose Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why this activity definition is defined
   * - **Definition:** Explanation of why this activity definition is needed and why it has been designed as it has.
   * - **Comment:** This element does not describe the usage of the activity definition. Instead, it provides traceability of \'\'why\'\' the resource is either needed or \'\'why\'\' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this activity definition.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private purpose?: MarkdownType | undefined;

  /**
   * ActivityDefinition.usage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes the clinical usage of the activity definition
   * - **Definition:** A detailed description of how the activity definition is used from a clinical perspective.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private usage?: StringType | undefined;

  /**
   * ActivityDefinition.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the activity definition and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * ActivityDefinition.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the activity definition was approved by publisher
   * - **Definition:** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The \'date\' element may be more recent than the approval date because of minor changes or editorial corrections.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * ActivityDefinition.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the activity definition was last reviewed
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
   * ActivityDefinition.effectivePeriod Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the activity definition is expected to be used
   * - **Definition:** The period during which the activity definition content was or is planned to be in active use.
   * - **Comment:** The effective period for a activity definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   * - **Requirements:** Allows establishing a transition before a resource comes into effect and also allows for a sunsetting  process when new versions of the activity definition are or are expected to be used instead.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private effectivePeriod?: Period | undefined;

  /**
   * ActivityDefinition.topic Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. Education, Treatment, Assessment, etc.
   * - **Definition:** Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
   * - **Requirements:** Repositories must be able to determine how to categorize the activity definition so that it can be found by topical searches.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private topic?: CodeableConcept[] | undefined;

  /**
   * ActivityDefinition.author Element
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
   * ActivityDefinition.editor Element
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
   * ActivityDefinition.reviewer Element
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
   * ActivityDefinition.endorser Element
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
   * ActivityDefinition.relatedArtifact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional documentation, citations, etc.
   * - **Definition:** Related artifacts such as additional documentation, justification, or bibliographic references.
   * - **Comment:** Each related artifact is either an attachment, or a reference to another resource, but not both.
   * - **Requirements:** Activity definitions must be able to provide enough information for consumers of the content (and/or interventions or results produced by the content) to be able to determine and understand the justification for and evidence in support of the content.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedArtifact?: RelatedArtifact[] | undefined;

  /**
   * ActivityDefinition.library Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Logic used by the activity definition
   * - **Definition:** A reference to a Library resource containing any formal logic used by the activity definition.
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
   * FHIR CodeSystem: RequestResourceTypes
   *
   * @see {@link RequestResourceTypesEnum }
   */
  private readonly requestResourceTypesEnum: RequestResourceTypesEnum;

  /**
   * ActivityDefinition.kind Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of resource
   * - **Definition:** A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.
   * - **Comment:** May determine what types of extensions are permitted.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link RequestResourceTypesEnum }
   */
  private kind?: EnumCodeType | undefined;

  /**
   * ActivityDefinition.profile Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What profile the resource needs to conform to
   * - **Definition:** A profile to which the target of the activity definition is expected to conform.
   * - **Requirements:** Allows profiles to be used to describe the types of activities that can be performed within a workflow, protocol, or order set.
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
   * ActivityDefinition.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detail type of activity
   * - **Definition:** Detailed description of the type of activity; e.g. What lab test, what procedure, what kind of encounter.
   * - **Comment:** Tends to be less relevant for activities involving particular products.
   * - **Requirements:** Allows matching performed to planned as well as validation against protocols.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: RequestIntent
   *
   * @see {@link RequestIntentEnum }
   */
  private readonly requestIntentEnum: RequestIntentEnum;

  /**
   * ActivityDefinition.intent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option
   * - **Definition:** Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  private intent?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: RequestPriority
   *
   * @see {@link RequestPriorityEnum }
   */
  private readonly requestPriorityEnum: RequestPriorityEnum;

  /**
   * ActivityDefinition.priority Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** routine | urgent | asap | stat
   * - **Definition:** Indicates how quickly the activity  should be addressed with respect to other requests.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  private priority?: EnumCodeType | undefined;

  /**
   * ActivityDefinition.doNotPerform Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** True if the activity should not be performed
   * - **Definition:** Set this to true if the definition is to indicate that a particular activity should NOT be performed. If true, this element should be interpreted to reinforce a negative coding. For example NPO as a code with a doNotPerform of true would still indicate to NOT perform the action.
   * - **Comment:** This element is not intended to be used to communicate a decision support response to cancel an order in progress. That should be done with the "remove" type of a PlanDefinition or RequestGroup.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** If true this element negates the specified action. For Example,  instead of a request for a procedure, it is a request for the procedure to not occur.
   * - **isSummary:** true
   */
  private doNotPerform?: BooleanType | undefined;

  /**
   * ActivityDefinition.timing[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ActivityDefinition.timing[x]', ['Timing','dateTime','Age','Period','Range','Duration',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When activity is to occur
   * - **Definition:** The period, timing or frequency upon which the described activity is to occur.
   * - **Requirements:** Allows prompting for activities and detection of missed planned activities.
   * - **FHIR Types:**
   *     'Timing',
   *     'dateTime',
   *     'Age',
   *     'Period',
   *     'Range',
   *     'Duration',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ActivityDefinition.timing[x]',[
    'Timing',
    'dateTime',
    'Age',
    'Period',
    'Range',
    'Duration',
  ])
  private timing?: IDataType | undefined;

  /**
   * ActivityDefinition.location Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where it should happen
   * - **Definition:** Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
   * - **Comment:** May reference a specific clinical location or may just identify a type of location.
   * - **Requirements:** Helps in planning of activity.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private location?: Reference | undefined;

  /**
   * ActivityDefinition.participant Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who should participate in the action
   * - **Definition:** Indicates who should participate in performing the action described.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private participant?: ActivityDefinitionParticipantComponent[] | undefined;

  /**
   * ActivityDefinition.product[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ActivityDefinition.product[x]', ['Reference','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What\'s administered/supplied
   * - **Definition:** Identifies the food, drug or other product being consumed or supplied in the activity.
   * - **FHIR Types:**
   *     'Reference',
   *     'CodeableConcept',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ActivityDefinition.product[x]',[
    'Reference',
    'CodeableConcept',
  ])
  private product?: IDataType | undefined;

  /**
   * ActivityDefinition.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How much is administered/consumed/supplied
   * - **Definition:** Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * ActivityDefinition.dosage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detailed dosage instructions
   * - **Definition:** Provides detailed dosage instructions in the same way that they are described for MedicationRequest resources.
   * - **Comment:** If a dosage instruction is used, the definition should not specify timing or quantity.
   * - **FHIR Type:** `Dosage`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dosage?: Dosage[] | undefined;

  /**
   * ActivityDefinition.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What part of body to perform on
   * - **Definition:** Indicates the sites on the subject\'s body where the procedure should be performed (I.e. the target sites).
   * - **Comment:** Only used if not implicit in the code found in ServiceRequest.type.
   * - **Requirements:** Knowing where the procedure is made is important for tracking if multiple sites are possible.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private bodySite?: CodeableConcept[] | undefined;

  /**
   * ActivityDefinition.specimenRequirement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What specimens are required to perform this action
   * - **Definition:** Defines specimen requirements for the action to be performed, such as required specimens for a lab test.
   * - **Requirements:** Needed to represent lab order definitions.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/SpecimenDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specimenRequirement?: Reference[] | undefined;

  /**
   * ActivityDefinition.observationRequirement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What observations are required to perform this action
   * - **Definition:** Defines observation requirements for the action to be performed, such as body weight or surface area.
   * - **Requirements:** Needed to represent observation definitions.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private observationRequirement?: Reference[] | undefined;

  /**
   * ActivityDefinition.observationResultRequirement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What observations must be produced by this action
   * - **Definition:** Defines the observations that are expected to be produced by the action.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ObservationDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private observationResultRequirement?: Reference[] | undefined;

  /**
   * ActivityDefinition.transform Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Transform to apply the template
   * - **Definition:** A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
   * - **Comment:** Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/StructureMap',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private transform?: CanonicalType | undefined;

  /**
   * ActivityDefinition.dynamicValue Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Dynamic aspects of the definition
   * - **Definition:** Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient\'s weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the request resource that would contain the result.
   * - **Comment:** Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dynamicValue?: ActivityDefinitionDynamicValueComponent[] | undefined;

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
      const optErrMsg = `Invalid ActivityDefinition.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.url (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ActivityDefinition.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ActivityDefinition.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.version (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.name (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.title (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.subtitle; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.subtitle (${String(value)})`;
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
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ActivityDefinition.status is required`);
    const errMsgPrefix = `Invalid ActivityDefinition.status`;
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
    assertIsDefined<CodeType>(element, `ActivityDefinition.status is required`);
    const optErrMsg = `Invalid ActivityDefinition.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `ActivityDefinition.status is required`);
    const optErrMsg = `Invalid ActivityDefinition.status (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.experimental; Provided element is not an instance of BooleanType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.experimental (${String(value)})`;
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
   * @decorator `@ChoiceDataTypes('ActivityDefinition.subject[x]')`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ActivityDefinition.subject[x]')
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
        `DataType mismatch for ActivityDefinition.subject[x]: Expected CodeableConcept but encountered ${this.subject.fhirType()}`,
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
        `DataType mismatch for ActivityDefinition.subject[x]: Expected Reference but encountered ${this.subject.fhirType()}`,
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
      const optErrMsg = `Invalid ActivityDefinition.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.date (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.publisher; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.publisher (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.contact; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ActivityDefinition.contact; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ActivityDefinition.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.description (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.useContext; Provided value array has an element that is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ActivityDefinition.useContext; Provided element is not an instance of UsageContext.`;
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
      const optErrMsg = `Invalid ActivityDefinition.jurisdiction; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ActivityDefinition.jurisdiction; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ActivityDefinition.purpose; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.purpose (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.usage; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.usage (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.approvalDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.approvalDate (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.lastReviewDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.lastReviewDate (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.effectivePeriod; Provided element is not an instance of Period.`;
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
      const optErrMsg = `Invalid ActivityDefinition.topic; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ActivityDefinition.topic; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ActivityDefinition.author; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ActivityDefinition.author; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ActivityDefinition.editor; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ActivityDefinition.editor; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ActivityDefinition.reviewer; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ActivityDefinition.reviewer; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ActivityDefinition.endorser; Provided value array has an element that is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ActivityDefinition.endorser; Provided element is not an instance of ContactDetail.`;
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
      const optErrMsg = `Invalid ActivityDefinition.relatedArtifact; Provided value array has an element that is not an instance of RelatedArtifact.`;
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
      const optErrMsg = `Invalid ActivityDefinition.relatedArtifact; Provided element is not an instance of RelatedArtifact.`;
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
      const optErrMsg = `Invalid ActivityDefinition.library; Provided value array has an element that is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.library; Provided element is not an instance of CanonicalType.`;
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
        const optErrMsg = `Invalid ActivityDefinition.library array item (${String(libraryValue)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.library array item (${String(value)})`;
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
   * @returns the `kind` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestResourceTypesEnum }
   */
  public getKindEnumType(): EnumCodeType | undefined {
    return this.kind;
  }

  /**
   * Assigns the provided EnumCodeType value to the `kind` property.
   *
   * @param enumType - the `kind` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestResourceTypesEnum }
   */
  public setKindEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ActivityDefinition.kind';
      assertEnumCodeType<RequestResourceTypesEnum>(enumType, RequestResourceTypesEnum, errMsgPrefix);
      this.kind = enumType;
    } else {
      this.kind = undefined;
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
   * @returns the `kind` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestResourceTypesEnum }
   */
  public getKindElement(): CodeType | undefined {
    if (this.kind === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link RequestResourceTypesEnum }
   */
  public setKindElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ActivityDefinition.kind; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.kind = new EnumCodeType(element, this.requestResourceTypesEnum);
    } else {
      this.kind = undefined;
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
   * @returns the `kind` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestResourceTypesEnum }
   */
  public getKind(): fhirCode | undefined {
    if (this.kind === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link RequestResourceTypesEnum }
   */
  public setKind(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.kind; Provided value is not an instance of fhirCode.`;
      this.kind = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestResourceTypesEnum);
    } else {
      this.kind = undefined;
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
      const optErrMsg = `Invalid ActivityDefinition.profile; Provided element is not an instance of CanonicalType.`;
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
      const optErrMsg = `Invalid ActivityDefinition.profile (${String(value)})`;
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
      const optErrMsg = `Invalid ActivityDefinition.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `intent` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public getIntentEnumType(): EnumCodeType | undefined {
    return this.intent;
  }

  /**
   * Assigns the provided EnumCodeType value to the `intent` property.
   *
   * @param enumType - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public setIntentEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ActivityDefinition.intent';
      assertEnumCodeType<RequestIntentEnum>(enumType, RequestIntentEnum, errMsgPrefix);
      this.intent = enumType;
    } else {
      this.intent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntentEnumType(): boolean {
    return isDefined<EnumCodeType>(this.intent) && !this.intent.isEmpty() && this.intent.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `intent` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public getIntentElement(): CodeType | undefined {
    if (this.intent === undefined) {
      return undefined;
    }
    return this.intent as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `intent` property.
   *
   * @param element - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public setIntentElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ActivityDefinition.intent; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.intent = new EnumCodeType(element, this.requestIntentEnum);
    } else {
      this.intent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntentElement(): boolean {
    return this.hasIntentEnumType();
  }

  /**
   * @returns the `intent` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public getIntent(): fhirCode | undefined {
    if (this.intent === undefined) {
      return undefined;
    }
    return this.intent.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `intent` property.
   *
   * @param value - the `intent` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RequestIntentEnum }
   */
  public setIntent(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.intent; Provided value is not an instance of fhirCode.`;
      this.intent = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestIntentEnum);
    } else {
      this.intent = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `intent` property exists and has a value; `false` otherwise
   */
  public hasIntent(): boolean {
    return this.hasIntentEnumType();
  }

  /**
   * @returns the `priority` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityEnumType(): EnumCodeType | undefined {
    return this.priority;
  }

  /**
   * Assigns the provided EnumCodeType value to the `priority` property.
   *
   * @param enumType - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ActivityDefinition.priority';
      assertEnumCodeType<RequestPriorityEnum>(enumType, RequestPriorityEnum, errMsgPrefix);
      this.priority = enumType;
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.priority) && !this.priority.isEmpty() && this.priority.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `priority` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriorityElement(): CodeType | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `priority` property.
   *
   * @param element - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriorityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ActivityDefinition.priority; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.priority = new EnumCodeType(element, this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriorityElement(): boolean {
    return this.hasPriorityEnumType();
  }

  /**
   * @returns the `priority` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public getPriority(): fhirCode | undefined {
    if (this.priority === undefined) {
      return undefined;
    }
    return this.priority.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `priority` property.
   *
   * @param value - the `priority` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link RequestPriorityEnum }
   */
  public setPriority(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.priority; Provided value is not an instance of fhirCode.`;
      this.priority = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.requestPriorityEnum);
    } else {
      this.priority = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `priority` property exists and has a value; `false` otherwise
   */
  public hasPriority(): boolean {
    return this.hasPriorityEnumType();
  }

  /**
   * @returns the `doNotPerform` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getDoNotPerformElement(): BooleanType {
    return this.doNotPerform ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `doNotPerform` property.
   *
   * @param element - the `doNotPerform` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoNotPerformElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ActivityDefinition.doNotPerform; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.doNotPerform = element;
    } else {
      this.doNotPerform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doNotPerform` property exists and has a value; `false` otherwise
   */
  public hasDoNotPerformElement(): boolean {
    return isDefined<BooleanType>(this.doNotPerform) && !this.doNotPerform.isEmpty();
  }

  /**
   * @returns the `doNotPerform` property value as a fhirBoolean if defined; else undefined
   */
  public getDoNotPerform(): fhirBoolean | undefined {
    return this.doNotPerform?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `doNotPerform` property.
   *
   * @param value - the `doNotPerform` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDoNotPerform(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.doNotPerform (${String(value)})`;
      this.doNotPerform = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.doNotPerform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `doNotPerform` property exists and has a value; `false` otherwise
   */
  public hasDoNotPerform(): boolean {
    return this.hasDoNotPerformElement();
  }

  /**
   * @returns the `timing` property value as a DataType object if defined; else undefined
   */
  public getTiming(): IDataType | undefined {
    return this.timing;
  }

  /**
   * Assigns the provided DataType object value to the `timing` property.
   *
   * @decorator `@ChoiceDataTypes('ActivityDefinition.timing[x]')`
   *
   * @param value - the `timing` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ActivityDefinition.timing[x]')
  public setTiming(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.timing = value;
    } else {
      this.timing = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `timing` property exists and has a value; `false` otherwise
   */
  public hasTiming(): boolean {
    return isDefined<IDataType>(this.timing) && !this.timing.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `timing` property value as a Timing object if defined; else undefined
   */
  public getTimingTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for ActivityDefinition.timing[x]: Expected Timing but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Timing and has a value; `false` otherwise
   */
  public hasTimingTiming(): boolean {
    return this.hasTiming() && this.timing instanceof Timing;
  }

  /**
   * @returns the `timing` property value as a DateTimeType object if defined; else undefined
   */
  public getTimingDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ActivityDefinition.timing[x]: Expected DateTimeType but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasTimingDateTimeType(): boolean {
    return this.hasTiming() && this.timing instanceof DateTimeType;
  }

  /**
   * @returns the `timing` property value as a Age object if defined; else undefined
   */
  public getTimingAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for ActivityDefinition.timing[x]: Expected Age but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Age and has a value; `false` otherwise
   */
  public hasTimingAge(): boolean {
    return this.hasTiming() && this.timing instanceof Age;
  }

  /**
   * @returns the `timing` property value as a Period object if defined; else undefined
   */
  public getTimingPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for ActivityDefinition.timing[x]: Expected Period but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Period and has a value; `false` otherwise
   */
  public hasTimingPeriod(): boolean {
    return this.hasTiming() && this.timing instanceof Period;
  }

  /**
   * @returns the `timing` property value as a Range object if defined; else undefined
   */
  public getTimingRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for ActivityDefinition.timing[x]: Expected Range but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Range and has a value; `false` otherwise
   */
  public hasTimingRange(): boolean {
    return this.hasTiming() && this.timing instanceof Range;
  }

  /**
   * @returns the `timing` property value as a Duration object if defined; else undefined
   */
  public getTimingDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.timing)) {
      return undefined;
    }
    if (!(this.timing instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for ActivityDefinition.timing[x]: Expected Duration but encountered ${this.timing.fhirType()}`,
      );
    }
    return this.timing;
  }

  /**
   * @returns `true` if the `timing` property exists as a Duration and has a value; `false` otherwise
   */
  public hasTimingDuration(): boolean {
    return this.hasTiming() && this.timing instanceof Duration;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `location` property value as a Reference object; else an empty Reference object
   */
  public getLocation(): Reference {
    return this.location ?? new Reference();
  }

  /**
   * Assigns the provided Location object value to the `location` property.
   *
   * @decorator `@ReferenceTargets('ActivityDefinition.location', ['Location',])`
   *
   * @param value - the `location` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ActivityDefinition.location', [
    'Location',
  ])
  public setLocation(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.location = value;
    } else {
      this.location = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `location` property exists and has a value; `false` otherwise
   */
  public hasLocation(): boolean {
    return isDefined<Reference>(this.location) && !this.location.isEmpty();
  }

  /**
   * @returns the `participant` property value as a ActivityDefinitionParticipantComponent array
   */
  public getParticipant(): ActivityDefinitionParticipantComponent[] {
    return this.participant ?? ([] as ActivityDefinitionParticipantComponent[]);
  }

  /**
   * Assigns the provided ActivityDefinitionParticipantComponent array value to the `participant` property.
   *
   * @param value - the `participant` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParticipant(value: ActivityDefinitionParticipantComponent[] | undefined): this {
    if (isDefinedList<ActivityDefinitionParticipantComponent>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.participant; Provided value array has an element that is not an instance of ActivityDefinitionParticipantComponent.`;
      assertFhirTypeList<ActivityDefinitionParticipantComponent>(value, ActivityDefinitionParticipantComponent, optErrMsg);
      this.participant = value;
    } else {
      this.participant = undefined;
    }
    return this;
  }

  /**
   * Add the provided ActivityDefinitionParticipantComponent value to the `participant` array property.
   *
   * @param value - the `participant` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParticipant(value: ActivityDefinitionParticipantComponent | undefined): this {
    if (isDefined<ActivityDefinitionParticipantComponent>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.participant; Provided element is not an instance of ActivityDefinitionParticipantComponent.`;
      assertFhirType<ActivityDefinitionParticipantComponent>(value, ActivityDefinitionParticipantComponent, optErrMsg);
      this.initParticipant();
      this.participant?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `participant` property exists and has a value; `false` otherwise
   */
  public hasParticipant(): boolean {
    return isDefinedList<ActivityDefinitionParticipantComponent>(this.participant) && this.participant.some((item: ActivityDefinitionParticipantComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `participant` property
   */
  private initParticipant(): void {
    if(!this.hasParticipant()) {
      this.participant = [] as ActivityDefinitionParticipantComponent[];
    }
  }

  /**
   * @returns the `product` property value as a DataType object if defined; else undefined
   */
  public getProduct(): IDataType | undefined {
    return this.product;
  }

  /**
   * Assigns the provided DataType object value to the `product` property.
   *
   * @decorator `@ChoiceDataTypes('ActivityDefinition.product[x]')`
   *
   * @param value - the `product` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ActivityDefinition.product[x]')
  public setProduct(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.product = value;
    } else {
      this.product = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `product` property exists and has a value; `false` otherwise
   */
  public hasProduct(): boolean {
    return isDefined<IDataType>(this.product) && !this.product.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `product` property value as a Reference object if defined; else undefined
   */
  public getProductReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.product)) {
      return undefined;
    }
    if (!(this.product instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for ActivityDefinition.product[x]: Expected Reference but encountered ${this.product.fhirType()}`,
      );
    }
    return this.product;
  }

  /**
   * @returns `true` if the `product` property exists as a Reference and has a value; `false` otherwise
   */
  public hasProductReference(): boolean {
    return this.hasProduct() && this.product instanceof Reference;
  }

  /**
   * @returns the `product` property value as a CodeableConcept object if defined; else undefined
   */
  public getProductCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.product)) {
      return undefined;
    }
    if (!(this.product instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for ActivityDefinition.product[x]: Expected CodeableConcept but encountered ${this.product.fhirType()}`,
      );
    }
    return this.product;
  }

  /**
   * @returns `true` if the `product` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasProductCodeableConcept(): boolean {
    return this.hasProduct() && this.product instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `quantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getQuantity(): Quantity {
    return this.quantity ?? new Quantity();
  }

  /**
   * Assigns the provided Quantity object value to the `quantity` property.
   *
   * @param value - the `quantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.quantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.quantity = value;
    } else {
      this.quantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantity` property exists and has a value; `false` otherwise
   */
  public hasQuantity(): boolean {
    return isDefined<Quantity>(this.quantity) && !this.quantity.isEmpty();
  }

  /**
   * @returns the `dosage` property value as a Dosage array
   */
  public getDosage(): Dosage[] {
    return this.dosage ?? ([] as Dosage[]);
  }

  /**
   * Assigns the provided Dosage array value to the `dosage` property.
   *
   * @param value - the `dosage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDosage(value: Dosage[] | undefined): this {
    if (isDefinedList<Dosage>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.dosage; Provided value array has an element that is not an instance of Dosage.`;
      assertFhirTypeList<Dosage>(value, Dosage, optErrMsg);
      this.dosage = value;
    } else {
      this.dosage = undefined;
    }
    return this;
  }

  /**
   * Add the provided Dosage value to the `dosage` array property.
   *
   * @param value - the `dosage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDosage(value: Dosage | undefined): this {
    if (isDefined<Dosage>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.dosage; Provided element is not an instance of Dosage.`;
      assertFhirType<Dosage>(value, Dosage, optErrMsg);
      this.initDosage();
      this.dosage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dosage` property exists and has a value; `false` otherwise
   */
  public hasDosage(): boolean {
    return isDefinedList<Dosage>(this.dosage) && this.dosage.some((item: Dosage) => !item.isEmpty());
  }

  /**
   * Initialize the `dosage` property
   */
  private initDosage(): void {
    if(!this.hasDosage()) {
      this.dosage = [] as Dosage[];
    }
  }

  /**
   * @returns the `bodySite` property value as a CodeableConcept array
   */
  public getBodySite(): CodeableConcept[] {
    return this.bodySite ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `bodySite` property.
   *
   * @param value - the `bodySite` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setBodySite(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.bodySite; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.bodySite = value;
    } else {
      this.bodySite = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `bodySite` array property.
   *
   * @param value - the `bodySite` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addBodySite(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.bodySite; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initBodySite();
      this.bodySite?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `bodySite` property exists and has a value; `false` otherwise
   */
  public hasBodySite(): boolean {
    return isDefinedList<CodeableConcept>(this.bodySite) && this.bodySite.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `bodySite` property
   */
  private initBodySite(): void {
    if(!this.hasBodySite()) {
      this.bodySite = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `specimenRequirement` property value as a Reference array
   */
  public getSpecimenRequirement(): Reference[] {
    return this.specimenRequirement ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `specimenRequirement` property.
   *
   * @decorator `@ReferenceTargets('ActivityDefinition.specimenRequirement', ['SpecimenDefinition',])`
   *
   * @param value - the `specimenRequirement` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ActivityDefinition.specimenRequirement', [
    'SpecimenDefinition',
  ])
  public setSpecimenRequirement(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.specimenRequirement = value;
    } else {
      this.specimenRequirement = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `specimenRequirement` array property.
   *
   * @decorator `@ReferenceTargets('ActivityDefinition.specimenRequirement', ['SpecimenDefinition',])`
   *
   * @param value - the `specimenRequirement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ActivityDefinition.specimenRequirement', [
    'SpecimenDefinition',
  ])
  public addSpecimenRequirement(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSpecimenRequirement();
      this.specimenRequirement?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `specimenRequirement` property exists and has a value; `false` otherwise
   */
  public hasSpecimenRequirement(): boolean {
    return isDefinedList<Reference>(this.specimenRequirement) && this.specimenRequirement.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `specimenRequirement` property
   */
  private initSpecimenRequirement(): void {
    if (!this.hasSpecimenRequirement()) {
      this.specimenRequirement = [] as Reference[];
    }
  }

  /**
   * @returns the `observationRequirement` property value as a Reference array
   */
  public getObservationRequirement(): Reference[] {
    return this.observationRequirement ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `observationRequirement` property.
   *
   * @decorator `@ReferenceTargets('ActivityDefinition.observationRequirement', ['ObservationDefinition',])`
   *
   * @param value - the `observationRequirement` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ActivityDefinition.observationRequirement', [
    'ObservationDefinition',
  ])
  public setObservationRequirement(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.observationRequirement = value;
    } else {
      this.observationRequirement = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `observationRequirement` array property.
   *
   * @decorator `@ReferenceTargets('ActivityDefinition.observationRequirement', ['ObservationDefinition',])`
   *
   * @param value - the `observationRequirement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ActivityDefinition.observationRequirement', [
    'ObservationDefinition',
  ])
  public addObservationRequirement(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initObservationRequirement();
      this.observationRequirement?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `observationRequirement` property exists and has a value; `false` otherwise
   */
  public hasObservationRequirement(): boolean {
    return isDefinedList<Reference>(this.observationRequirement) && this.observationRequirement.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `observationRequirement` property
   */
  private initObservationRequirement(): void {
    if (!this.hasObservationRequirement()) {
      this.observationRequirement = [] as Reference[];
    }
  }

  /**
   * @returns the `observationResultRequirement` property value as a Reference array
   */
  public getObservationResultRequirement(): Reference[] {
    return this.observationResultRequirement ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `observationResultRequirement` property.
   *
   * @decorator `@ReferenceTargets('ActivityDefinition.observationResultRequirement', ['ObservationDefinition',])`
   *
   * @param value - the `observationResultRequirement` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ActivityDefinition.observationResultRequirement', [
    'ObservationDefinition',
  ])
  public setObservationResultRequirement(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.observationResultRequirement = value;
    } else {
      this.observationResultRequirement = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `observationResultRequirement` array property.
   *
   * @decorator `@ReferenceTargets('ActivityDefinition.observationResultRequirement', ['ObservationDefinition',])`
   *
   * @param value - the `observationResultRequirement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ActivityDefinition.observationResultRequirement', [
    'ObservationDefinition',
  ])
  public addObservationResultRequirement(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initObservationResultRequirement();
      this.observationResultRequirement?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `observationResultRequirement` property exists and has a value; `false` otherwise
   */
  public hasObservationResultRequirement(): boolean {
    return isDefinedList<Reference>(this.observationResultRequirement) && this.observationResultRequirement.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `observationResultRequirement` property
   */
  private initObservationResultRequirement(): void {
    if (!this.hasObservationResultRequirement()) {
      this.observationResultRequirement = [] as Reference[];
    }
  }

  /**
   * @returns the `transform` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getTransformElement(): CanonicalType {
    return this.transform ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `transform` property.
   *
   * @param element - the `transform` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTransformElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid ActivityDefinition.transform; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.transform = element;
    } else {
      this.transform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `transform` property exists and has a value; `false` otherwise
   */
  public hasTransformElement(): boolean {
    return isDefined<CanonicalType>(this.transform) && !this.transform.isEmpty();
  }

  /**
   * @returns the `transform` property value as a fhirCanonical if defined; else undefined
   */
  public getTransform(): fhirCanonical | undefined {
    return this.transform?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `transform` property.
   *
   * @param value - the `transform` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTransform(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.transform (${String(value)})`;
      this.transform = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.transform = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `transform` property exists and has a value; `false` otherwise
   */
  public hasTransform(): boolean {
    return this.hasTransformElement();
  }

  /**
   * @returns the `dynamicValue` property value as a ActivityDefinitionDynamicValueComponent array
   */
  public getDynamicValue(): ActivityDefinitionDynamicValueComponent[] {
    return this.dynamicValue ?? ([] as ActivityDefinitionDynamicValueComponent[]);
  }

  /**
   * Assigns the provided ActivityDefinitionDynamicValueComponent array value to the `dynamicValue` property.
   *
   * @param value - the `dynamicValue` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDynamicValue(value: ActivityDefinitionDynamicValueComponent[] | undefined): this {
    if (isDefinedList<ActivityDefinitionDynamicValueComponent>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.dynamicValue; Provided value array has an element that is not an instance of ActivityDefinitionDynamicValueComponent.`;
      assertFhirTypeList<ActivityDefinitionDynamicValueComponent>(value, ActivityDefinitionDynamicValueComponent, optErrMsg);
      this.dynamicValue = value;
    } else {
      this.dynamicValue = undefined;
    }
    return this;
  }

  /**
   * Add the provided ActivityDefinitionDynamicValueComponent value to the `dynamicValue` array property.
   *
   * @param value - the `dynamicValue` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDynamicValue(value: ActivityDefinitionDynamicValueComponent | undefined): this {
    if (isDefined<ActivityDefinitionDynamicValueComponent>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.dynamicValue; Provided element is not an instance of ActivityDefinitionDynamicValueComponent.`;
      assertFhirType<ActivityDefinitionDynamicValueComponent>(value, ActivityDefinitionDynamicValueComponent, optErrMsg);
      this.initDynamicValue();
      this.dynamicValue?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dynamicValue` property exists and has a value; `false` otherwise
   */
  public hasDynamicValue(): boolean {
    return isDefinedList<ActivityDefinitionDynamicValueComponent>(this.dynamicValue) && this.dynamicValue.some((item: ActivityDefinitionDynamicValueComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `dynamicValue` property
   */
  private initDynamicValue(): void {
    if(!this.hasDynamicValue()) {
      this.dynamicValue = [] as ActivityDefinitionDynamicValueComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ActivityDefinition';
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
      this.subtitle,
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
      this.kind,
      this.profile,
      this.code,
      this.intent,
      this.priority,
      this.doNotPerform,
      this.timing,
      this.location,
      this.participant,
      this.product,
      this.quantity,
      this.dosage,
      this.bodySite,
      this.specimenRequirement,
      this.observationRequirement,
      this.observationResultRequirement,
      this.transform,
      this.dynamicValue,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ActivityDefinition {
    const dest = new ActivityDefinition();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ActivityDefinition): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    dest.subtitle = this.subtitle?.copy();
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
    dest.kind = this.kind?.copy();
    dest.profile = this.profile?.copy();
    dest.code = this.code?.copy();
    dest.intent = this.intent?.copy();
    dest.priority = this.priority?.copy();
    dest.doNotPerform = this.doNotPerform?.copy();
    dest.timing = this.timing?.copy() as IDataType;
    dest.location = this.location?.copy();
    const participantList = copyListValues<ActivityDefinitionParticipantComponent>(this.participant);
    dest.participant = participantList.length === 0 ? undefined : participantList;
    dest.product = this.product?.copy() as IDataType;
    dest.quantity = this.quantity?.copy();
    const dosageList = copyListValues<Dosage>(this.dosage);
    dest.dosage = dosageList.length === 0 ? undefined : dosageList;
    const bodySiteList = copyListValues<CodeableConcept>(this.bodySite);
    dest.bodySite = bodySiteList.length === 0 ? undefined : bodySiteList;
    const specimenRequirementList = copyListValues<Reference>(this.specimenRequirement);
    dest.specimenRequirement = specimenRequirementList.length === 0 ? undefined : specimenRequirementList;
    const observationRequirementList = copyListValues<Reference>(this.observationRequirement);
    dest.observationRequirement = observationRequirementList.length === 0 ? undefined : observationRequirementList;
    const observationResultRequirementList = copyListValues<Reference>(this.observationResultRequirement);
    dest.observationResultRequirement = observationResultRequirementList.length === 0 ? undefined : observationResultRequirementList;
    dest.transform = this.transform?.copy();
    const dynamicValueList = copyListValues<ActivityDefinitionDynamicValueComponent>(this.dynamicValue);
    dest.dynamicValue = dynamicValueList.length === 0 ? undefined : dynamicValueList;
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasSubtitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getSubtitleElement(), 'subtitle', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`ActivityDefinition.status`);
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

    if (this.hasKindElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getKindElement()!, 'kind', jsonObj);
    }

    if (this.hasProfileElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getProfileElement(), 'profile', jsonObj);
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasIntentElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getIntentElement()!, 'intent', jsonObj);
    }

    if (this.hasPriorityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getPriorityElement()!, 'priority', jsonObj);
    }

    if (this.hasDoNotPerformElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getDoNotPerformElement(), 'doNotPerform', jsonObj);
    }

    if (this.hasTiming()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTiming()!, 'timing', jsonObj);
    }

    if (this.hasLocation()) {
      setFhirComplexJson(this.getLocation(), 'location', jsonObj);
    }

    if (this.hasParticipant()) {
      setFhirBackboneElementListJson(this.getParticipant(), 'participant', jsonObj);
    }

    if (this.hasProduct()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getProduct()!, 'product', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasDosage()) {
      setFhirComplexListJson(this.getDosage(), 'dosage', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexListJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasSpecimenRequirement()) {
      setFhirComplexListJson(this.getSpecimenRequirement(), 'specimenRequirement', jsonObj);
    }

    if (this.hasObservationRequirement()) {
      setFhirComplexListJson(this.getObservationRequirement(), 'observationRequirement', jsonObj);
    }

    if (this.hasObservationResultRequirement()) {
      setFhirComplexListJson(this.getObservationResultRequirement(), 'observationResultRequirement', jsonObj);
    }

    if (this.hasTransformElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getTransformElement(), 'transform', jsonObj);
    }

    if (this.hasDynamicValue()) {
      setFhirBackboneElementListJson(this.getDynamicValue(), 'dynamicValue', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ActivityDefinitionParticipantComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Who should participate in the action
 * - **Definition:** Indicates who should participate in performing the action described.
 *
 * @category Data Models: Resource
 * @see [FHIR ActivityDefinition](http://hl7.org/fhir/StructureDefinition/ActivityDefinition)
 */
export class ActivityDefinitionParticipantComponent extends BackboneElement implements IBackboneElement {
  constructor(type_: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.actionParticipantTypeEnum = new ActionParticipantTypeEnum();

    this.type_ = constructorCodeValueAsEnumCodeType<ActionParticipantTypeEnum>(
      type_,
      ActionParticipantTypeEnum,
      this.actionParticipantTypeEnum,
      'ActivityDefinition.participant.type',
    );
  }

  /**
   * Parse the provided `ActivityDefinitionParticipantComponent` JSON to instantiate the ActivityDefinitionParticipantComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ActivityDefinitionParticipantComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ActivityDefinitionParticipantComponent
   * @returns ActivityDefinitionParticipantComponent data model or undefined for `ActivityDefinitionParticipantComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ActivityDefinitionParticipantComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ActivityDefinitionParticipantComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ActivityDefinitionParticipantComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
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

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * FHIR CodeSystem: ActionParticipantType
   *
   * @see {@link ActionParticipantTypeEnum }
   */
  private readonly actionParticipantTypeEnum: ActionParticipantTypeEnum;

  /**
   * ActivityDefinition.participant.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** patient | practitioner | related-person | device
   * - **Definition:** The type of participant in the action.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  private type_: EnumCodeType | null;

  /**
   * ActivityDefinition.participant.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** E.g. Nurse, Surgeon, Parent, etc.
   * - **Definition:** The role the participant should play in performing the described action.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `ActivityDefinition.participant.type is required`);
    const errMsgPrefix = `Invalid ActivityDefinition.participant.type`;
    assertEnumCodeType<ActionParticipantTypeEnum>(enumType, ActionParticipantTypeEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public setTypeElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `ActivityDefinition.participant.type is required`);
    const optErrMsg = `Invalid ActivityDefinition.participant.type; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.type_ = new EnumCodeType(element, this.actionParticipantTypeEnum);
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
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
   * @see CodeSystem Enumeration: {@link ActionParticipantTypeEnum }
   */
  public setType(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `ActivityDefinition.participant.type is required`);
    const optErrMsg = `Invalid ActivityDefinition.participant.type (${String(value)})`;
    this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.actionParticipantTypeEnum);
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `role` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getRole(): CodeableConcept {
    return this.role ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Role object value to the `role` property.
   *
   * @param value - the `role` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ActivityDefinition.participant.role; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.role = value;
    } else {
      this.role = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefined<CodeableConcept>(this.role) && !this.role.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ActivityDefinition.participant';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.role,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ActivityDefinitionParticipantComponent {
    const dest = new ActivityDefinitionParticipantComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ActivityDefinitionParticipantComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.role = this.role?.copy();
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
      missingReqdProperties.push(`ActivityDefinition.participant.type`);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ActivityDefinitionDynamicValueComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Dynamic aspects of the definition
 * - **Definition:** Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient\'s weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the request resource that would contain the result.
 * - **Comment:** Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transform and dynamic values are specified, the dynamic values will be applied to the result of the transform.
 *
 * @category Data Models: Resource
 * @see [FHIR ActivityDefinition](http://hl7.org/fhir/StructureDefinition/ActivityDefinition)
 */
export class ActivityDefinitionDynamicValueComponent extends BackboneElement implements IBackboneElement {
  constructor(path: StringType | fhirString | null = null, expression: Expression | null = null) {
    super();

    this.path = null;
    if (isDefined<StringType | fhirString>(path)) {
      if (path instanceof PrimitiveType) {
        this.setPathElement(path);
      } else {
        this.setPath(path);
      }
    }

    this.expression = null;
    if (isDefined<Expression>(expression)) {
      this.setExpression(expression);
    }
  }

  /**
   * Parse the provided `ActivityDefinitionDynamicValueComponent` JSON to instantiate the ActivityDefinitionDynamicValueComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ActivityDefinitionDynamicValueComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ActivityDefinitionDynamicValueComponent
   * @returns ActivityDefinitionDynamicValueComponent data model or undefined for `ActivityDefinitionDynamicValueComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ActivityDefinitionDynamicValueComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ActivityDefinitionDynamicValueComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ActivityDefinitionDynamicValueComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'path';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setPathElement(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'expression';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Expression | undefined = Expression.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setExpression(datatype);
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
   * ActivityDefinition.dynamicValue.path Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The path to the element to be set dynamically
   * - **Definition:** The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression. The specified path SHALL be a FHIRPath resolveable on the specified target type of the ActivityDefinition, and SHALL consist only of identifiers, constant indexers, and a restricted subset of functions. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](https://hl7.org/fhir/fhirpath.html#simple) for full details).
   * - **Comment:** The path attribute contains a [Simple FHIRPath Subset](https://hl7.org/fhir/fhirpath.html#simple) that allows path traversal, but not calculation.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private path: StringType | null;

  /**
   * ActivityDefinition.dynamicValue.expression Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** An expression that provides the dynamic value for the customization
   * - **Definition:** An expression specifying the value of the customized element.
   * - **Comment:** The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
   * - **FHIR Type:** `Expression`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private expression: Expression | null;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `path` property value as a StringType object if defined; else null
   */
  public getPathElement(): StringType | null {
    return this.path;
  }

  /**
   * Assigns the provided PrimitiveType value to the `path` property.
   *
   * @param element - the `path` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPathElement(element: StringType): this {
    assertIsDefined<StringType>(element, `ActivityDefinition.dynamicValue.path is required`);
    const optErrMsg = `Invalid ActivityDefinition.dynamicValue.path; Provided value is not an instance of StringType.`;
    assertFhirType<StringType>(element, StringType, optErrMsg);
    this.path = element;
    return this;
  }

  /**
   * @returns `true` if the `path` property exists and has a value; `false` otherwise
   */
  public hasPathElement(): boolean {
    return isDefined<StringType>(this.path) && !this.path.isEmpty();
  }

  /**
   * @returns the `path` property value as a fhirString if defined; else null
   */
  public getPath(): fhirString | null {
    if (this.path?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.path.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `path` property.
   *
   * @param value - the `path` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPath(value: fhirString): this {
    assertIsDefined<fhirString>(value, `ActivityDefinition.dynamicValue.path is required`);
    const optErrMsg = `Invalid ActivityDefinition.dynamicValue.path (${String(value)})`;
    this.path = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    return this;
  }

  /**
   * @returns `true` if the `path` property exists and has a value; `false` otherwise
   */
  public hasPath(): boolean {
    return this.hasPathElement();
  }

  /**
   * @returns the `expression` property value as a Expression object if defined; else null
   */
  public getExpression(): Expression | null {
    return this.expression;
  }

  /**
   * Assigns the provided Expression object value to the `expression` property.
   *
   * @param value - the `expression` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setExpression(value: Expression): this {
    assertIsDefined<Expression>(value, `ActivityDefinition.dynamicValue.expression is required`);
    const optErrMsg = `Invalid ActivityDefinition.dynamicValue.expression; Provided element is not an instance of Expression.`;
    assertFhirType<Expression>(value, Expression, optErrMsg);
    this.expression = value;
    return this;
  }

  /**
   * @returns `true` if the `expression` property exists and has a value; `false` otherwise
   */
  public hasExpression(): boolean {
    return isDefined<Expression>(this.expression) && !this.expression.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ActivityDefinition.dynamicValue';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.path,
      this.expression,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ActivityDefinitionDynamicValueComponent {
    const dest = new ActivityDefinitionDynamicValueComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ActivityDefinitionDynamicValueComponent): void {
    super.copyValues(dest);
    dest.path = this.path ? this.path.copy() : null;
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

    if (this.hasPathElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getPathElement()!, 'path', jsonObj);
    } else {
      missingReqdProperties.push(`ActivityDefinition.dynamicValue.path`);
    }

    if (this.hasExpression()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getExpression()!, 'expression', jsonObj);
    } else {
      missingReqdProperties.push(`ActivityDefinition.dynamicValue.expression`);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
