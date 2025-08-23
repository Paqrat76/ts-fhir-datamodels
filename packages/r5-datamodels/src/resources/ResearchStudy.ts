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
 * ResearchStudy Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ResearchStudy
 * StructureDefinition.name: ResearchStudy
 * StructureDefinition.description: A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future.
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
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  IdType,
  JSON,
  MarkdownType,
  PrimitiveType,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
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
  fhirUnsignedInt,
  fhirUnsignedIntSchema,
  fhirUri,
  fhirUriSchema,
  getPrimitiveTypeJson,
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
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference, RelatedArtifact } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PublicationStatusEnum } from '../code-systems/PublicationStatusEnum';

/**
 * ResearchStudy Class
 *
 * @remarks
 * A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future.
 *
 * **FHIR Specification**
 * - **Short:** Investigation to increase healthcare-related patient-independent knowledge
 * - **Definition:** A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future.
 * - **Comment:** Need to make sure we encompass public health studies.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchStudy](http://hl7.org/fhir/StructureDefinition/ResearchStudy)
 */
export class ResearchStudy extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.publicationStatusEnum = new PublicationStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<PublicationStatusEnum>(
      status,
      PublicationStatusEnum,
      this.publicationStatusEnum,
      'ResearchStudy.status',
    );
  }

  /**
   * Parse the provided `ResearchStudy` JSON to instantiate the ResearchStudy data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchStudy`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchStudy
   * @returns ResearchStudy data model or undefined for `ResearchStudy`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ResearchStudy | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchStudy';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchStudy();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ResearchStudy');
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

    fieldName = 'label';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ResearchStudyLabelComponent | undefined = ResearchStudyLabelComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addLabel(component);
        }
      });
    }

    fieldName = 'protocol';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addProtocol(datatype);
        }
      });
  }

    fieldName = 'partOf';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPartOf(datatype);
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

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
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

    fieldName = 'primaryPurposeType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPrimaryPurposeType(datatype);
    }

    fieldName = 'phase';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPhase(datatype);
    }

    fieldName = 'studyDesign';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addStudyDesign(datatype);
        }
      });
    }

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addFocus(datatype);
        }
      });
    }

    fieldName = 'condition';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCondition(datatype);
        }
      });
    }

    fieldName = 'keyword';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addKeyword(datatype);
        }
      });
    }

    fieldName = 'region';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRegion(datatype);
        }
      });
    }

    fieldName = 'descriptionSummary';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionSummaryElement(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    fieldName = 'site';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addSite(datatype);
        }
      });
  }

    fieldName = 'note';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Annotation | undefined = Annotation.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addNote(datatype);
        }
      });
    }

    fieldName = 'classifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addClassifier(datatype);
        }
      });
    }

    fieldName = 'associatedParty';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ResearchStudyAssociatedPartyComponent | undefined = ResearchStudyAssociatedPartyComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAssociatedParty(component);
        }
      });
    }

    fieldName = 'progressStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ResearchStudyProgressStatusComponent | undefined = ResearchStudyProgressStatusComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProgressStatus(component);
        }
      });
    }

    fieldName = 'whyStopped';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setWhyStopped(datatype);
    }

    fieldName = 'recruitment';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ResearchStudyRecruitmentComponent | undefined = ResearchStudyRecruitmentComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRecruitment(component);
    }

    fieldName = 'comparisonGroup';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ResearchStudyComparisonGroupComponent | undefined = ResearchStudyComparisonGroupComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addComparisonGroup(component);
        }
      });
    }

    fieldName = 'objective';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ResearchStudyObjectiveComponent | undefined = ResearchStudyObjectiveComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addObjective(component);
        }
      });
    }

    fieldName = 'outcomeMeasure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ResearchStudyOutcomeMeasureComponent | undefined = ResearchStudyOutcomeMeasureComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOutcomeMeasure(component);
        }
      });
    }

    fieldName = 'result';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addResult(datatype);
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
   * ResearchStudy.url Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Canonical identifier for this study resource
   * - **Definition:** Canonical identifier for this study resource, represented as a globally unique URI.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private url?: UriType | undefined;

  /**
   * ResearchStudy.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business Identifier for study
   * - **Definition:** Identifiers assigned to this research study by the sponsor or other systems.
   * - **Requirements:** Allows identification of the research study as it is known by various participating systems and in a way that remains consistent across servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * ResearchStudy.version Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The business version for the study record
   * - **Definition:** The business version for the study record.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private version?: StringType | undefined;

  /**
   * ResearchStudy.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for this study (computer friendly)
   * - **Definition:** Name for this study (computer friendly).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * ResearchStudy.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Human readable name of the study
   * - **Definition:** The human readable name of the research study.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * ResearchStudy.label Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional names for the study
   * - **Definition:** Additional names for the study.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private label?: ResearchStudyLabelComponent[] | undefined;

  /**
   * ResearchStudy.protocol Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Steps followed in executing study
   * - **Definition:** The set of steps expected to be performed as part of the execution of the study.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private protocol?: Reference[] | undefined;

  /**
   * ResearchStudy.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Part of larger study
   * - **Definition:** A larger research study of which this particular study is a component or step.
   * - **Requirements:** Allows breaking a study into components (e.g. by study site) each with their own PI, status, enrollment, etc.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ResearchStudy',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partOf?: Reference[] | undefined;

  /**
   * ResearchStudy.relatedArtifact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** References, URLs, and attachments
   * - **Definition:** Citations, references, URLs and other related documents.  When using relatedArtifact to share URLs, the relatedArtifact.type will often be set to one of "documentation" or "supported-with" and the URL value will often be in relatedArtifact.document.url but another possible location is relatedArtifact.resource when it is a canonical URL.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedArtifact?: RelatedArtifact[] | undefined;

  /**
   * ResearchStudy.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date the resource last changed
   * - **Definition:** The date (and optionally time) when the ResearchStudy Resource was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the ResearchStudy Resource changes.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateTimeType | undefined;

  /**
   * FHIR CodeSystem: PublicationStatus
   *
   * @see {@link PublicationStatusEnum }
   */
  private readonly publicationStatusEnum: PublicationStatusEnum;

  /**
   * ResearchStudy.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** draft | active | retired | unknown
   * - **Definition:** The publication state of the resource (not of the study).
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link PublicationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * ResearchStudy.primaryPurposeType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility
   * - **Definition:** The type of study based upon the intent of the study activities. A classification of the intent of the study.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private primaryPurposeType?: CodeableConcept | undefined;

  /**
   * ResearchStudy.phase Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4
   * - **Definition:** The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private phase?: CodeableConcept | undefined;

  /**
   * ResearchStudy.studyDesign Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classifications of the study design characteristics
   * - **Definition:** Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private studyDesign?: CodeableConcept[] | undefined;

  /**
   * ResearchStudy.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Drugs, devices, etc. under study
   * - **Definition:** The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Medication',
   *       'http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/SubstanceDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private focus?: CodeableReference[] | undefined;

  /**
   * ResearchStudy.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Condition being studied
   * - **Definition:** The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private condition?: CodeableConcept[] | undefined;

  /**
   * ResearchStudy.keyword Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Used to search for the study
   * - **Definition:** Key terms to aid in searching for or filtering the study.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private keyword?: CodeableConcept[] | undefined;

  /**
   * ResearchStudy.region Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Geographic area for the study
   * - **Definition:** A country, state or other area where the study is taking place rather than its precise geographic location or address.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private region?: CodeableConcept[] | undefined;

  /**
   * ResearchStudy.descriptionSummary Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Brief text explaining the study
   * - **Definition:** A brief text for explaining the study.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private descriptionSummary?: MarkdownType | undefined;

  /**
   * ResearchStudy.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Detailed narrative of the study
   * - **Definition:** A detailed and human-readable narrative of the study. E.g., study abstract.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ResearchStudy.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the study began and ended
   * - **Definition:** Identifies the start date and the expected (or actual, depending on status) end date for the study.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private period?: Period | undefined;

  /**
   * ResearchStudy.site Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Facility where study activities are conducted
   * - **Definition:** A facility in which study activities are conducted.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *       'http://hl7.org/fhir/StructureDefinition/ResearchStudy',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private site?: Reference[] | undefined;

  /**
   * ResearchStudy.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments made about the study
   * - **Definition:** Comments made about the study by the performer, subject or other participants.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * ResearchStudy.classifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Classification for the study
   * - **Definition:** Additional grouping mechanism or categorization of a research study. Example: FDA regulated device, FDA regulated drug, MPG Paragraph 23b (a German legal requirement), IRB-exempt, etc. Implementation Note: do not use the classifier element to support existing semantics that are already supported thru explicit elements in the resource.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classifier?: CodeableConcept[] | undefined;

  /**
   * ResearchStudy.associatedParty Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Sponsors, collaborators, and other parties
   * - **Definition:** Sponsors, collaborators, and other parties.
   * - **Comment:** For a Sponsor or a PrincipalInvestigator use the dedicated attributes provided.
   * - **Requirements:** While there are explicit attributes for a Sponsor and a PrincipalInvestigator many trial record a range of other organizations and individuals in key roles.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private associatedParty?: ResearchStudyAssociatedPartyComponent[] | undefined;

  /**
   * ResearchStudy.progressStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Status of study with time for that status
   * - **Definition:** Status of study with time for that status.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private progressStatus?: ResearchStudyProgressStatusComponent[] | undefined;

  /**
   * ResearchStudy.whyStopped Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design
   * - **Definition:** A description and/or code explaining the premature termination of the study.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private whyStopped?: CodeableConcept | undefined;

  /**
   * ResearchStudy.recruitment Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Target or actual group of participants enrolled in study
   * - **Definition:** Target or actual group of participants enrolled in study.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private recruitment?: ResearchStudyRecruitmentComponent | undefined;

  /**
   * ResearchStudy.comparisonGroup Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Defined path through the study for a subject
   * - **Definition:** Describes an expected event or sequence of events for one of the subjects of a study. E.g. for a living subject: exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up. E.g. for a stability study: {store sample from lot A at 25 degrees for 1 month}, {store sample from lot A at 40 degrees for 1 month}.
   * - **Comment:** In many clinical trials this is refered to as the ARM of the study, but such a term is not used in other sorts of trials even when there is a comparison between two or more groups.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private comparisonGroup?: ResearchStudyComparisonGroupComponent[] | undefined;

  /**
   * ResearchStudy.objective Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A goal for the study
   * - **Definition:** A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private objective?: ResearchStudyObjectiveComponent[] | undefined;

  /**
   * ResearchStudy.outcomeMeasure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A variable measured during the study
   * - **Definition:** An "outcome measure", "endpoint", "effect measure" or "measure of effect" is a specific measurement or observation used to quantify the effect of experimental variables on the participants in a study, or for observational studies, to describe patterns of diseases or traits or associations with exposures, risk factors or treatment.
   * - **Comment:** A study may have multiple distinct outcome measures that can be used to assess the overall goal for a study. The goal of a study is in the objective whereas the metric by which the goal is assessed is the outcomeMeasure. Examples: Time to Local Recurrence (TLR), Disease-free Survival (DFS), 30 Day Mortality, Systolic BP
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private outcomeMeasure?: ResearchStudyOutcomeMeasureComponent[] | undefined;

  /**
   * ResearchStudy.result Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Link to results generated during the study
   * - **Definition:** Link to one or more sets of results generated by the study.  Could also link to a research registry holding the results such as ClinicalTrials.gov.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceReport',
   *       'http://hl7.org/fhir/StructureDefinition/Citation',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private result?: Reference[] | undefined;

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
      const optErrMsg = `Invalid ResearchStudy.url; Provided element is not an instance of UriType.`;
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
      const optErrMsg = `Invalid ResearchStudy.url (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchStudy.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ResearchStudy.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ResearchStudy.version; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ResearchStudy.version (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchStudy.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ResearchStudy.name (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchStudy.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ResearchStudy.title (${String(value)})`;
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
   * @returns the `label` property value as a ResearchStudyLabelComponent array
   */
  public getLabel(): ResearchStudyLabelComponent[] {
    return this.label ?? ([] as ResearchStudyLabelComponent[]);
  }

  /**
   * Assigns the provided ResearchStudyLabelComponent array value to the `label` property.
   *
   * @param value - the `label` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setLabel(value: ResearchStudyLabelComponent[] | undefined): this {
    if (isDefinedList<ResearchStudyLabelComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.label; Provided value array has an element that is not an instance of ResearchStudyLabelComponent.`;
      assertFhirTypeList<ResearchStudyLabelComponent>(value, ResearchStudyLabelComponent, optErrMsg);
      this.label = value;
    } else {
      this.label = undefined;
    }
    return this;
  }

  /**
   * Add the provided ResearchStudyLabelComponent value to the `label` array property.
   *
   * @param value - the `label` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addLabel(value: ResearchStudyLabelComponent | undefined): this {
    if (isDefined<ResearchStudyLabelComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.label; Provided element is not an instance of ResearchStudyLabelComponent.`;
      assertFhirType<ResearchStudyLabelComponent>(value, ResearchStudyLabelComponent, optErrMsg);
      this.initLabel();
      this.label?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `label` property exists and has a value; `false` otherwise
   */
  public hasLabel(): boolean {
    return isDefinedList<ResearchStudyLabelComponent>(this.label) && this.label.some((item: ResearchStudyLabelComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `label` property
   */
  private initLabel(): void {
    if(!this.hasLabel()) {
      this.label = [] as ResearchStudyLabelComponent[];
    }
  }

  /**
   * @returns the `protocol` property value as a Reference array
   */
  public getProtocol(): Reference[] {
    return this.protocol ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `protocol` property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.protocol', ['PlanDefinition',])`
   *
   * @param value - the `protocol` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.protocol', [
    'PlanDefinition',
  ])
  public setProtocol(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.protocol = value;
    } else {
      this.protocol = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `protocol` array property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.protocol', ['PlanDefinition',])`
   *
   * @param value - the `protocol` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.protocol', [
    'PlanDefinition',
  ])
  public addProtocol(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initProtocol();
      this.protocol?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `protocol` property exists and has a value; `false` otherwise
   */
  public hasProtocol(): boolean {
    return isDefinedList<Reference>(this.protocol) && this.protocol.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `protocol` property
   */
  private initProtocol(): void {
    if (!this.hasProtocol()) {
      this.protocol = [] as Reference[];
    }
  }

  /**
   * @returns the `partOf` property value as a Reference array
   */
  public getPartOf(): Reference[] {
    return this.partOf ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `partOf` property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.partOf', ['ResearchStudy',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.partOf', [
    'ResearchStudy',
  ])
  public setPartOf(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.partOf = value;
    } else {
      this.partOf = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `partOf` array property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.partOf', ['ResearchStudy',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.partOf', [
    'ResearchStudy',
  ])
  public addPartOf(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initPartOf();
      this.partOf?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `partOf` property exists and has a value; `false` otherwise
   */
  public hasPartOf(): boolean {
    return isDefinedList<Reference>(this.partOf) && this.partOf.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `partOf` property
   */
  private initPartOf(): void {
    if (!this.hasPartOf()) {
      this.partOf = [] as Reference[];
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
      const optErrMsg = `Invalid ResearchStudy.relatedArtifact; Provided value array has an element that is not an instance of RelatedArtifact.`;
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
      const optErrMsg = `Invalid ResearchStudy.relatedArtifact; Provided element is not an instance of RelatedArtifact.`;
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
      const optErrMsg = `Invalid ResearchStudy.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ResearchStudy.date (${String(value)})`;
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
    assertIsDefined<EnumCodeType>(enumType, `ResearchStudy.status is required`);
    const errMsgPrefix = `Invalid ResearchStudy.status`;
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
    assertIsDefined<CodeType>(element, `ResearchStudy.status is required`);
    const optErrMsg = `Invalid ResearchStudy.status; Provided value is not an instance of CodeType.`;
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
    assertIsDefined<fhirCode>(value, `ResearchStudy.status is required`);
    const optErrMsg = `Invalid ResearchStudy.status (${String(value)})`;
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
   * @returns the `primaryPurposeType` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPrimaryPurposeType(): CodeableConcept {
    return this.primaryPurposeType ?? new CodeableConcept();
  }

  /**
   * Assigns the provided PrimaryPurposeType object value to the `primaryPurposeType` property.
   *
   * @param value - the `primaryPurposeType` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPrimaryPurposeType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.primaryPurposeType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.primaryPurposeType = value;
    } else {
      this.primaryPurposeType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `primaryPurposeType` property exists and has a value; `false` otherwise
   */
  public hasPrimaryPurposeType(): boolean {
    return isDefined<CodeableConcept>(this.primaryPurposeType) && !this.primaryPurposeType.isEmpty();
  }

  /**
   * @returns the `phase` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getPhase(): CodeableConcept {
    return this.phase ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Phase object value to the `phase` property.
   *
   * @param value - the `phase` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPhase(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.phase; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.phase = value;
    } else {
      this.phase = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `phase` property exists and has a value; `false` otherwise
   */
  public hasPhase(): boolean {
    return isDefined<CodeableConcept>(this.phase) && !this.phase.isEmpty();
  }

  /**
   * @returns the `studyDesign` property value as a CodeableConcept array
   */
  public getStudyDesign(): CodeableConcept[] {
    return this.studyDesign ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `studyDesign` property.
   *
   * @param value - the `studyDesign` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setStudyDesign(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.studyDesign; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.studyDesign = value;
    } else {
      this.studyDesign = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `studyDesign` array property.
   *
   * @param value - the `studyDesign` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addStudyDesign(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.studyDesign; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initStudyDesign();
      this.studyDesign?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `studyDesign` property exists and has a value; `false` otherwise
   */
  public hasStudyDesign(): boolean {
    return isDefinedList<CodeableConcept>(this.studyDesign) && this.studyDesign.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `studyDesign` property
   */
  private initStudyDesign(): void {
    if(!this.hasStudyDesign()) {
      this.studyDesign = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `focus` property value as a CodeableReference array
   */
  public getFocus(): CodeableReference[] {
    return this.focus ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `focus` property.
   *
   * @param value - the `focus` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFocus(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid ResearchStudy.focus; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.focus = value;
    } else {
      this.focus = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `focus` array property.
   *
   * @param value - the `focus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addFocus(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid ResearchStudy.focus; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initFocus();
      this.focus?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `focus` property exists and has a value; `false` otherwise
   */
  public hasFocus(): boolean {
    return isDefinedList<CodeableReference>(this.focus) && this.focus.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `focus` property
   */
  private initFocus(): void {
    if(!this.hasFocus()) {
      this.focus = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `condition` property value as a CodeableConcept array
   */
  public getCondition(): CodeableConcept[] {
    return this.condition ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `condition` property.
   *
   * @param value - the `condition` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCondition(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.condition; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.condition = value;
    } else {
      this.condition = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `condition` array property.
   *
   * @param value - the `condition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCondition(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.condition; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCondition();
      this.condition?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `condition` property exists and has a value; `false` otherwise
   */
  public hasCondition(): boolean {
    return isDefinedList<CodeableConcept>(this.condition) && this.condition.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `condition` property
   */
  private initCondition(): void {
    if(!this.hasCondition()) {
      this.condition = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `keyword` property value as a CodeableConcept array
   */
  public getKeyword(): CodeableConcept[] {
    return this.keyword ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `keyword` property.
   *
   * @param value - the `keyword` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setKeyword(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.keyword; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.keyword = value;
    } else {
      this.keyword = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `keyword` array property.
   *
   * @param value - the `keyword` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addKeyword(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.keyword; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initKeyword();
      this.keyword?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `keyword` property exists and has a value; `false` otherwise
   */
  public hasKeyword(): boolean {
    return isDefinedList<CodeableConcept>(this.keyword) && this.keyword.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `keyword` property
   */
  private initKeyword(): void {
    if(!this.hasKeyword()) {
      this.keyword = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `region` property value as a CodeableConcept array
   */
  public getRegion(): CodeableConcept[] {
    return this.region ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `region` property.
   *
   * @param value - the `region` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRegion(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.region; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.region = value;
    } else {
      this.region = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `region` array property.
   *
   * @param value - the `region` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addRegion(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.region; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initRegion();
      this.region?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `region` property exists and has a value; `false` otherwise
   */
  public hasRegion(): boolean {
    return isDefinedList<CodeableConcept>(this.region) && this.region.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `region` property
   */
  private initRegion(): void {
    if(!this.hasRegion()) {
      this.region = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `descriptionSummary` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getDescriptionSummaryElement(): MarkdownType {
    return this.descriptionSummary ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `descriptionSummary` property.
   *
   * @param element - the `descriptionSummary` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionSummaryElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid ResearchStudy.descriptionSummary; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.descriptionSummary = element;
    } else {
      this.descriptionSummary = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `descriptionSummary` property exists and has a value; `false` otherwise
   */
  public hasDescriptionSummaryElement(): boolean {
    return isDefined<MarkdownType>(this.descriptionSummary) && !this.descriptionSummary.isEmpty();
  }

  /**
   * @returns the `descriptionSummary` property value as a fhirMarkdown if defined; else undefined
   */
  public getDescriptionSummary(): fhirMarkdown | undefined {
    return this.descriptionSummary?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `descriptionSummary` property.
   *
   * @param value - the `descriptionSummary` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDescriptionSummary(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid ResearchStudy.descriptionSummary (${String(value)})`;
      this.descriptionSummary = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.descriptionSummary = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `descriptionSummary` property exists and has a value; `false` otherwise
   */
  public hasDescriptionSummary(): boolean {
    return this.hasDescriptionSummaryElement();
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
      const optErrMsg = `Invalid ResearchStudy.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ResearchStudy.description (${String(value)})`;
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
   * @returns the `period` property value as a Period object if defined; else an empty Period object
   */
  public getPeriod(): Period {
    return this.period ?? new Period();
  }

  /**
   * Assigns the provided Period object value to the `period` property.
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid ResearchStudy.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `period` property exists and has a value; `false` otherwise
   */
  public hasPeriod(): boolean {
    return isDefined<Period>(this.period) && !this.period.isEmpty();
  }

  /**
   * @returns the `site` property value as a Reference array
   */
  public getSite(): Reference[] {
    return this.site ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `site` property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.site', ['Location','ResearchStudy','Organization',])`
   *
   * @param value - the `site` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.site', [
    'Location',
  
    'ResearchStudy',
  
    'Organization',
  ])
  public setSite(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.site = value;
    } else {
      this.site = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `site` array property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.site', ['Location','ResearchStudy','Organization',])`
   *
   * @param value - the `site` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.site', [
    'Location',
  
    'ResearchStudy',
  
    'Organization',
  ])
  public addSite(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initSite();
      this.site?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `site` property exists and has a value; `false` otherwise
   */
  public hasSite(): boolean {
    return isDefinedList<Reference>(this.site) && this.site.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `site` property
   */
  private initSite(): void {
    if (!this.hasSite()) {
      this.site = [] as Reference[];
    }
  }

  /**
   * @returns the `note` property value as a Annotation array
   */
  public getNote(): Annotation[] {
    return this.note ?? ([] as Annotation[]);
  }

  /**
   * Assigns the provided Annotation array value to the `note` property.
   *
   * @param value - the `note` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setNote(value: Annotation[] | undefined): this {
    if (isDefinedList<Annotation>(value)) {
      const optErrMsg = `Invalid ResearchStudy.note; Provided value array has an element that is not an instance of Annotation.`;
      assertFhirTypeList<Annotation>(value, Annotation, optErrMsg);
      this.note = value;
    } else {
      this.note = undefined;
    }
    return this;
  }

  /**
   * Add the provided Annotation value to the `note` array property.
   *
   * @param value - the `note` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addNote(value: Annotation | undefined): this {
    if (isDefined<Annotation>(value)) {
      const optErrMsg = `Invalid ResearchStudy.note; Provided element is not an instance of Annotation.`;
      assertFhirType<Annotation>(value, Annotation, optErrMsg);
      this.initNote();
      this.note?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `note` property exists and has a value; `false` otherwise
   */
  public hasNote(): boolean {
    return isDefinedList<Annotation>(this.note) && this.note.some((item: Annotation) => !item.isEmpty());
  }

  /**
   * Initialize the `note` property
   */
  private initNote(): void {
    if(!this.hasNote()) {
      this.note = [] as Annotation[];
    }
  }

  /**
   * @returns the `classifier` property value as a CodeableConcept array
   */
  public getClassifier(): CodeableConcept[] {
    return this.classifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `classifier` property.
   *
   * @param value - the `classifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.classifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.classifier = value;
    } else {
      this.classifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `classifier` array property.
   *
   * @param value - the `classifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClassifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.classifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initClassifier();
      this.classifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `classifier` property exists and has a value; `false` otherwise
   */
  public hasClassifier(): boolean {
    return isDefinedList<CodeableConcept>(this.classifier) && this.classifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `classifier` property
   */
  private initClassifier(): void {
    if(!this.hasClassifier()) {
      this.classifier = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `associatedParty` property value as a ResearchStudyAssociatedPartyComponent array
   */
  public getAssociatedParty(): ResearchStudyAssociatedPartyComponent[] {
    return this.associatedParty ?? ([] as ResearchStudyAssociatedPartyComponent[]);
  }

  /**
   * Assigns the provided ResearchStudyAssociatedPartyComponent array value to the `associatedParty` property.
   *
   * @param value - the `associatedParty` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAssociatedParty(value: ResearchStudyAssociatedPartyComponent[] | undefined): this {
    if (isDefinedList<ResearchStudyAssociatedPartyComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.associatedParty; Provided value array has an element that is not an instance of ResearchStudyAssociatedPartyComponent.`;
      assertFhirTypeList<ResearchStudyAssociatedPartyComponent>(value, ResearchStudyAssociatedPartyComponent, optErrMsg);
      this.associatedParty = value;
    } else {
      this.associatedParty = undefined;
    }
    return this;
  }

  /**
   * Add the provided ResearchStudyAssociatedPartyComponent value to the `associatedParty` array property.
   *
   * @param value - the `associatedParty` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAssociatedParty(value: ResearchStudyAssociatedPartyComponent | undefined): this {
    if (isDefined<ResearchStudyAssociatedPartyComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.associatedParty; Provided element is not an instance of ResearchStudyAssociatedPartyComponent.`;
      assertFhirType<ResearchStudyAssociatedPartyComponent>(value, ResearchStudyAssociatedPartyComponent, optErrMsg);
      this.initAssociatedParty();
      this.associatedParty?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `associatedParty` property exists and has a value; `false` otherwise
   */
  public hasAssociatedParty(): boolean {
    return isDefinedList<ResearchStudyAssociatedPartyComponent>(this.associatedParty) && this.associatedParty.some((item: ResearchStudyAssociatedPartyComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `associatedParty` property
   */
  private initAssociatedParty(): void {
    if(!this.hasAssociatedParty()) {
      this.associatedParty = [] as ResearchStudyAssociatedPartyComponent[];
    }
  }

  /**
   * @returns the `progressStatus` property value as a ResearchStudyProgressStatusComponent array
   */
  public getProgressStatus(): ResearchStudyProgressStatusComponent[] {
    return this.progressStatus ?? ([] as ResearchStudyProgressStatusComponent[]);
  }

  /**
   * Assigns the provided ResearchStudyProgressStatusComponent array value to the `progressStatus` property.
   *
   * @param value - the `progressStatus` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProgressStatus(value: ResearchStudyProgressStatusComponent[] | undefined): this {
    if (isDefinedList<ResearchStudyProgressStatusComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.progressStatus; Provided value array has an element that is not an instance of ResearchStudyProgressStatusComponent.`;
      assertFhirTypeList<ResearchStudyProgressStatusComponent>(value, ResearchStudyProgressStatusComponent, optErrMsg);
      this.progressStatus = value;
    } else {
      this.progressStatus = undefined;
    }
    return this;
  }

  /**
   * Add the provided ResearchStudyProgressStatusComponent value to the `progressStatus` array property.
   *
   * @param value - the `progressStatus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProgressStatus(value: ResearchStudyProgressStatusComponent | undefined): this {
    if (isDefined<ResearchStudyProgressStatusComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.progressStatus; Provided element is not an instance of ResearchStudyProgressStatusComponent.`;
      assertFhirType<ResearchStudyProgressStatusComponent>(value, ResearchStudyProgressStatusComponent, optErrMsg);
      this.initProgressStatus();
      this.progressStatus?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `progressStatus` property exists and has a value; `false` otherwise
   */
  public hasProgressStatus(): boolean {
    return isDefinedList<ResearchStudyProgressStatusComponent>(this.progressStatus) && this.progressStatus.some((item: ResearchStudyProgressStatusComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `progressStatus` property
   */
  private initProgressStatus(): void {
    if(!this.hasProgressStatus()) {
      this.progressStatus = [] as ResearchStudyProgressStatusComponent[];
    }
  }

  /**
   * @returns the `whyStopped` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getWhyStopped(): CodeableConcept {
    return this.whyStopped ?? new CodeableConcept();
  }

  /**
   * Assigns the provided WhyStopped object value to the `whyStopped` property.
   *
   * @param value - the `whyStopped` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setWhyStopped(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.whyStopped; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.whyStopped = value;
    } else {
      this.whyStopped = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `whyStopped` property exists and has a value; `false` otherwise
   */
  public hasWhyStopped(): boolean {
    return isDefined<CodeableConcept>(this.whyStopped) && !this.whyStopped.isEmpty();
  }

  /**
   * @returns the `recruitment` property value as a ResearchStudyRecruitmentComponent object if defined; else an empty ResearchStudyRecruitmentComponent object
   */
  public getRecruitment(): ResearchStudyRecruitmentComponent {
    return this.recruitment ?? new ResearchStudyRecruitmentComponent();
  }

  /**
   * Assigns the provided Recruitment object value to the `recruitment` property.
   *
   * @param value - the `recruitment` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRecruitment(value: ResearchStudyRecruitmentComponent | undefined): this {
    if (isDefined<ResearchStudyRecruitmentComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.recruitment; Provided element is not an instance of ResearchStudyRecruitmentComponent.`;
      assertFhirType<ResearchStudyRecruitmentComponent>(value, ResearchStudyRecruitmentComponent, optErrMsg);
      this.recruitment = value;
    } else {
      this.recruitment = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `recruitment` property exists and has a value; `false` otherwise
   */
  public hasRecruitment(): boolean {
    return isDefined<ResearchStudyRecruitmentComponent>(this.recruitment) && !this.recruitment.isEmpty();
  }

  /**
   * @returns the `comparisonGroup` property value as a ResearchStudyComparisonGroupComponent array
   */
  public getComparisonGroup(): ResearchStudyComparisonGroupComponent[] {
    return this.comparisonGroup ?? ([] as ResearchStudyComparisonGroupComponent[]);
  }

  /**
   * Assigns the provided ResearchStudyComparisonGroupComponent array value to the `comparisonGroup` property.
   *
   * @param value - the `comparisonGroup` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComparisonGroup(value: ResearchStudyComparisonGroupComponent[] | undefined): this {
    if (isDefinedList<ResearchStudyComparisonGroupComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.comparisonGroup; Provided value array has an element that is not an instance of ResearchStudyComparisonGroupComponent.`;
      assertFhirTypeList<ResearchStudyComparisonGroupComponent>(value, ResearchStudyComparisonGroupComponent, optErrMsg);
      this.comparisonGroup = value;
    } else {
      this.comparisonGroup = undefined;
    }
    return this;
  }

  /**
   * Add the provided ResearchStudyComparisonGroupComponent value to the `comparisonGroup` array property.
   *
   * @param value - the `comparisonGroup` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComparisonGroup(value: ResearchStudyComparisonGroupComponent | undefined): this {
    if (isDefined<ResearchStudyComparisonGroupComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.comparisonGroup; Provided element is not an instance of ResearchStudyComparisonGroupComponent.`;
      assertFhirType<ResearchStudyComparisonGroupComponent>(value, ResearchStudyComparisonGroupComponent, optErrMsg);
      this.initComparisonGroup();
      this.comparisonGroup?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `comparisonGroup` property exists and has a value; `false` otherwise
   */
  public hasComparisonGroup(): boolean {
    return isDefinedList<ResearchStudyComparisonGroupComponent>(this.comparisonGroup) && this.comparisonGroup.some((item: ResearchStudyComparisonGroupComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `comparisonGroup` property
   */
  private initComparisonGroup(): void {
    if(!this.hasComparisonGroup()) {
      this.comparisonGroup = [] as ResearchStudyComparisonGroupComponent[];
    }
  }

  /**
   * @returns the `objective` property value as a ResearchStudyObjectiveComponent array
   */
  public getObjective(): ResearchStudyObjectiveComponent[] {
    return this.objective ?? ([] as ResearchStudyObjectiveComponent[]);
  }

  /**
   * Assigns the provided ResearchStudyObjectiveComponent array value to the `objective` property.
   *
   * @param value - the `objective` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setObjective(value: ResearchStudyObjectiveComponent[] | undefined): this {
    if (isDefinedList<ResearchStudyObjectiveComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.objective; Provided value array has an element that is not an instance of ResearchStudyObjectiveComponent.`;
      assertFhirTypeList<ResearchStudyObjectiveComponent>(value, ResearchStudyObjectiveComponent, optErrMsg);
      this.objective = value;
    } else {
      this.objective = undefined;
    }
    return this;
  }

  /**
   * Add the provided ResearchStudyObjectiveComponent value to the `objective` array property.
   *
   * @param value - the `objective` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addObjective(value: ResearchStudyObjectiveComponent | undefined): this {
    if (isDefined<ResearchStudyObjectiveComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.objective; Provided element is not an instance of ResearchStudyObjectiveComponent.`;
      assertFhirType<ResearchStudyObjectiveComponent>(value, ResearchStudyObjectiveComponent, optErrMsg);
      this.initObjective();
      this.objective?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `objective` property exists and has a value; `false` otherwise
   */
  public hasObjective(): boolean {
    return isDefinedList<ResearchStudyObjectiveComponent>(this.objective) && this.objective.some((item: ResearchStudyObjectiveComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `objective` property
   */
  private initObjective(): void {
    if(!this.hasObjective()) {
      this.objective = [] as ResearchStudyObjectiveComponent[];
    }
  }

  /**
   * @returns the `outcomeMeasure` property value as a ResearchStudyOutcomeMeasureComponent array
   */
  public getOutcomeMeasure(): ResearchStudyOutcomeMeasureComponent[] {
    return this.outcomeMeasure ?? ([] as ResearchStudyOutcomeMeasureComponent[]);
  }

  /**
   * Assigns the provided ResearchStudyOutcomeMeasureComponent array value to the `outcomeMeasure` property.
   *
   * @param value - the `outcomeMeasure` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutcomeMeasure(value: ResearchStudyOutcomeMeasureComponent[] | undefined): this {
    if (isDefinedList<ResearchStudyOutcomeMeasureComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.outcomeMeasure; Provided value array has an element that is not an instance of ResearchStudyOutcomeMeasureComponent.`;
      assertFhirTypeList<ResearchStudyOutcomeMeasureComponent>(value, ResearchStudyOutcomeMeasureComponent, optErrMsg);
      this.outcomeMeasure = value;
    } else {
      this.outcomeMeasure = undefined;
    }
    return this;
  }

  /**
   * Add the provided ResearchStudyOutcomeMeasureComponent value to the `outcomeMeasure` array property.
   *
   * @param value - the `outcomeMeasure` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOutcomeMeasure(value: ResearchStudyOutcomeMeasureComponent | undefined): this {
    if (isDefined<ResearchStudyOutcomeMeasureComponent>(value)) {
      const optErrMsg = `Invalid ResearchStudy.outcomeMeasure; Provided element is not an instance of ResearchStudyOutcomeMeasureComponent.`;
      assertFhirType<ResearchStudyOutcomeMeasureComponent>(value, ResearchStudyOutcomeMeasureComponent, optErrMsg);
      this.initOutcomeMeasure();
      this.outcomeMeasure?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `outcomeMeasure` property exists and has a value; `false` otherwise
   */
  public hasOutcomeMeasure(): boolean {
    return isDefinedList<ResearchStudyOutcomeMeasureComponent>(this.outcomeMeasure) && this.outcomeMeasure.some((item: ResearchStudyOutcomeMeasureComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `outcomeMeasure` property
   */
  private initOutcomeMeasure(): void {
    if(!this.hasOutcomeMeasure()) {
      this.outcomeMeasure = [] as ResearchStudyOutcomeMeasureComponent[];
    }
  }

  /**
   * @returns the `result` property value as a Reference array
   */
  public getResult(): Reference[] {
    return this.result ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `result` property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.result', ['EvidenceReport','Citation','DiagnosticReport',])`
   *
   * @param value - the `result` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.result', [
    'EvidenceReport',
  
    'Citation',
  
    'DiagnosticReport',
  ])
  public setResult(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.result = value;
    } else {
      this.result = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `result` array property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.result', ['EvidenceReport','Citation','DiagnosticReport',])`
   *
   * @param value - the `result` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.result', [
    'EvidenceReport',
  
    'Citation',
  
    'DiagnosticReport',
  ])
  public addResult(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initResult();
      this.result?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResult(): boolean {
    return isDefinedList<Reference>(this.result) && this.result.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `result` property
   */
  private initResult(): void {
    if (!this.hasResult()) {
      this.result = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ResearchStudy';
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
      this.label,
      this.protocol,
      this.partOf,
      this.relatedArtifact,
      this.date,
      this.status,
      this.primaryPurposeType,
      this.phase,
      this.studyDesign,
      this.focus,
      this.condition,
      this.keyword,
      this.region,
      this.descriptionSummary,
      this.description,
      this.period,
      this.site,
      this.note,
      this.classifier,
      this.associatedParty,
      this.progressStatus,
      this.whyStopped,
      this.recruitment,
      this.comparisonGroup,
      this.objective,
      this.outcomeMeasure,
      this.result,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchStudy {
    const dest = new ResearchStudy();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchStudy): void {
    super.copyValues(dest);
    dest.url = this.url?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.version = this.version?.copy();
    dest.name = this.name?.copy();
    dest.title = this.title?.copy();
    const labelList = copyListValues<ResearchStudyLabelComponent>(this.label);
    dest.label = labelList.length === 0 ? undefined : labelList;
    const protocolList = copyListValues<Reference>(this.protocol);
    dest.protocol = protocolList.length === 0 ? undefined : protocolList;
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    const relatedArtifactList = copyListValues<RelatedArtifact>(this.relatedArtifact);
    dest.relatedArtifact = relatedArtifactList.length === 0 ? undefined : relatedArtifactList;
    dest.date = this.date?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.primaryPurposeType = this.primaryPurposeType?.copy();
    dest.phase = this.phase?.copy();
    const studyDesignList = copyListValues<CodeableConcept>(this.studyDesign);
    dest.studyDesign = studyDesignList.length === 0 ? undefined : studyDesignList;
    const focusList = copyListValues<CodeableReference>(this.focus);
    dest.focus = focusList.length === 0 ? undefined : focusList;
    const conditionList = copyListValues<CodeableConcept>(this.condition);
    dest.condition = conditionList.length === 0 ? undefined : conditionList;
    const keywordList = copyListValues<CodeableConcept>(this.keyword);
    dest.keyword = keywordList.length === 0 ? undefined : keywordList;
    const regionList = copyListValues<CodeableConcept>(this.region);
    dest.region = regionList.length === 0 ? undefined : regionList;
    dest.descriptionSummary = this.descriptionSummary?.copy();
    dest.description = this.description?.copy();
    dest.period = this.period?.copy();
    const siteList = copyListValues<Reference>(this.site);
    dest.site = siteList.length === 0 ? undefined : siteList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const classifierList = copyListValues<CodeableConcept>(this.classifier);
    dest.classifier = classifierList.length === 0 ? undefined : classifierList;
    const associatedPartyList = copyListValues<ResearchStudyAssociatedPartyComponent>(this.associatedParty);
    dest.associatedParty = associatedPartyList.length === 0 ? undefined : associatedPartyList;
    const progressStatusList = copyListValues<ResearchStudyProgressStatusComponent>(this.progressStatus);
    dest.progressStatus = progressStatusList.length === 0 ? undefined : progressStatusList;
    dest.whyStopped = this.whyStopped?.copy();
    dest.recruitment = this.recruitment?.copy();
    const comparisonGroupList = copyListValues<ResearchStudyComparisonGroupComponent>(this.comparisonGroup);
    dest.comparisonGroup = comparisonGroupList.length === 0 ? undefined : comparisonGroupList;
    const objectiveList = copyListValues<ResearchStudyObjectiveComponent>(this.objective);
    dest.objective = objectiveList.length === 0 ? undefined : objectiveList;
    const outcomeMeasureList = copyListValues<ResearchStudyOutcomeMeasureComponent>(this.outcomeMeasure);
    dest.outcomeMeasure = outcomeMeasureList.length === 0 ? undefined : outcomeMeasureList;
    const resultList = copyListValues<Reference>(this.result);
    dest.result = resultList.length === 0 ? undefined : resultList;
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

    if (this.hasLabel()) {
      setFhirBackboneElementListJson(this.getLabel(), 'label', jsonObj);
    }

    if (this.hasProtocol()) {
      setFhirComplexListJson(this.getProtocol(), 'protocol', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirComplexListJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (this.hasRelatedArtifact()) {
      setFhirComplexListJson(this.getRelatedArtifact(), 'relatedArtifact', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`ResearchStudy.status`);
    }

    if (this.hasPrimaryPurposeType()) {
      setFhirComplexJson(this.getPrimaryPurposeType(), 'primaryPurposeType', jsonObj);
    }

    if (this.hasPhase()) {
      setFhirComplexJson(this.getPhase(), 'phase', jsonObj);
    }

    if (this.hasStudyDesign()) {
      setFhirComplexListJson(this.getStudyDesign(), 'studyDesign', jsonObj);
    }

    if (this.hasFocus()) {
      setFhirComplexListJson(this.getFocus(), 'focus', jsonObj);
    }

    if (this.hasCondition()) {
      setFhirComplexListJson(this.getCondition(), 'condition', jsonObj);
    }

    if (this.hasKeyword()) {
      setFhirComplexListJson(this.getKeyword(), 'keyword', jsonObj);
    }

    if (this.hasRegion()) {
      setFhirComplexListJson(this.getRegion(), 'region', jsonObj);
    }

    if (this.hasDescriptionSummaryElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionSummaryElement(), 'descriptionSummary', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasSite()) {
      setFhirComplexListJson(this.getSite(), 'site', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasClassifier()) {
      setFhirComplexListJson(this.getClassifier(), 'classifier', jsonObj);
    }

    if (this.hasAssociatedParty()) {
      setFhirBackboneElementListJson(this.getAssociatedParty(), 'associatedParty', jsonObj);
    }

    if (this.hasProgressStatus()) {
      setFhirBackboneElementListJson(this.getProgressStatus(), 'progressStatus', jsonObj);
    }

    if (this.hasWhyStopped()) {
      setFhirComplexJson(this.getWhyStopped(), 'whyStopped', jsonObj);
    }

    if (this.hasRecruitment()) {
      setFhirBackboneElementJson(this.getRecruitment(), 'recruitment', jsonObj);
    }

    if (this.hasComparisonGroup()) {
      setFhirBackboneElementListJson(this.getComparisonGroup(), 'comparisonGroup', jsonObj);
    }

    if (this.hasObjective()) {
      setFhirBackboneElementListJson(this.getObjective(), 'objective', jsonObj);
    }

    if (this.hasOutcomeMeasure()) {
      setFhirBackboneElementListJson(this.getOutcomeMeasure(), 'outcomeMeasure', jsonObj);
    }

    if (this.hasResult()) {
      setFhirComplexListJson(this.getResult(), 'result', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ResearchStudyLabelComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Additional names for the study
 * - **Definition:** Additional names for the study.
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchStudy](http://hl7.org/fhir/StructureDefinition/ResearchStudy)
 */
export class ResearchStudyLabelComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ResearchStudyLabelComponent` JSON to instantiate the ResearchStudyLabelComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchStudyLabelComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchStudyLabelComponent
   * @returns ResearchStudyLabelComponent data model or undefined for `ResearchStudyLabelComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ResearchStudyLabelComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchStudyLabelComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchStudyLabelComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'value';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setValueElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ResearchStudy.label.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** primary | official | scientific | plain-language | subtitle | short-title | acronym | earlier-title | language | auto-translated | human-use | machine-use | duplicate-uid
   * - **Definition:** Kind of name.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * ResearchStudy.label.value Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The name
   * - **Definition:** The name.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private value?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid ResearchStudy.label.type; Provided element is not an instance of CodeableConcept.`;
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
  public setValueElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid ResearchStudy.label.value; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.value = element;
    } else {
      this.value = undefined;
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
   * @returns the `value` property value as a fhirString if defined; else undefined
   */
  public getValue(): fhirString | undefined {
    return this.value?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setValue(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid ResearchStudy.label.value (${String(value)})`;
      this.value = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.value = undefined;
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
    return 'ResearchStudy.label';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.value,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchStudyLabelComponent {
    const dest = new ResearchStudyLabelComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchStudyLabelComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.value = this.value?.copy();
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasValueElement()) {
      setFhirPrimitiveJson<fhirString>(this.getValueElement(), 'value', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ResearchStudyAssociatedPartyComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Sponsors, collaborators, and other parties
 * - **Definition:** Sponsors, collaborators, and other parties.
 * - **Comment:** For a Sponsor or a PrincipalInvestigator use the dedicated attributes provided.
 * - **Requirements:** While there are explicit attributes for a Sponsor and a PrincipalInvestigator many trial record a range of other organizations and individuals in key roles.
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchStudy](http://hl7.org/fhir/StructureDefinition/ResearchStudy)
 */
export class ResearchStudyAssociatedPartyComponent extends BackboneElement implements IBackboneElement {
  constructor(role: CodeableConcept | null = null) {
    super();

    this.role = null;
    if (isDefined<CodeableConcept>(role)) {
      this.setRole(role);
    }
  }

  /**
   * Parse the provided `ResearchStudyAssociatedPartyComponent` JSON to instantiate the ResearchStudyAssociatedPartyComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchStudyAssociatedPartyComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchStudyAssociatedPartyComponent
   * @returns ResearchStudyAssociatedPartyComponent data model or undefined for `ResearchStudyAssociatedPartyComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ResearchStudyAssociatedPartyComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchStudyAssociatedPartyComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchStudyAssociatedPartyComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setRole(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Period | undefined = Period.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addPeriod(datatype);
        }
      });
    }

    fieldName = 'classifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addClassifier(datatype);
        }
      });
    }

    fieldName = 'party';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setParty(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ResearchStudy.associatedParty.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of associated party
   * - **Definition:** Name of associated party.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * ResearchStudy.associatedParty.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** sponsor | lead-sponsor | sponsor-investigator | primary-investigator | collaborator | funding-source | general-contact | recruitment-contact | sub-investigator | study-director | study-chair
   * - **Definition:** Type of association.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role: CodeableConcept | null;

  /**
   * ResearchStudy.associatedParty.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When active in the role
   * - **Definition:** Identifies the start date and the end date of the associated party in the role.
   * - **Comment:** The cardinality is 0..* due to the fact that an associated party may be intermittently active in a given role over multiple time periods.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period[] | undefined;

  /**
   * ResearchStudy.associatedParty.classifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** nih | fda | government | nonprofit | academic | industry
   * - **Definition:** A categorization other than role for the associated party.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classifier?: CodeableConcept[] | undefined;

  /**
   * ResearchStudy.associatedParty.party Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Individual or organization associated with study (use practitionerRole to specify their organisation)
   * - **Definition:** Individual or organization associated with study (use practitionerRole to specify their organisation).
   * - **Comment:** Suggestions of a better attribute name are appreciated
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private party?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid ResearchStudy.associatedParty.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ResearchStudy.associatedParty.name (${String(value)})`;
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
   * @returns the `role` property value as a CodeableConcept object if defined; else null
   */
  public getRole(): CodeableConcept | null {
    return this.role;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `role` property.
   *
   * @param value - the `role` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRole(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `ResearchStudy.associatedParty.role is required`);
    const optErrMsg = `Invalid ResearchStudy.associatedParty.role; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.role = value;
    return this;
  }

  /**
   * @returns `true` if the `role` property exists and has a value; `false` otherwise
   */
  public hasRole(): boolean {
    return isDefined<CodeableConcept>(this.role) && !this.role.isEmpty();
  }

  /**
   * @returns the `period` property value as a Period array
   */
  public getPeriod(): Period[] {
    return this.period ?? ([] as Period[]);
  }

  /**
   * Assigns the provided Period array value to the `period` property.
   *
   * @param value - the `period` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period[] | undefined): this {
    if (isDefinedList<Period>(value)) {
      const optErrMsg = `Invalid ResearchStudy.associatedParty.period; Provided value array has an element that is not an instance of Period.`;
      assertFhirTypeList<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = undefined;
    }
    return this;
  }

  /**
   * Add the provided Period value to the `period` array property.
   *
   * @param value - the `period` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid ResearchStudy.associatedParty.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.initPeriod();
      this.period?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `period` property exists and has a value; `false` otherwise
   */
  public hasPeriod(): boolean {
    return isDefinedList<Period>(this.period) && this.period.some((item: Period) => !item.isEmpty());
  }

  /**
   * Initialize the `period` property
   */
  private initPeriod(): void {
    if(!this.hasPeriod()) {
      this.period = [] as Period[];
    }
  }

  /**
   * @returns the `classifier` property value as a CodeableConcept array
   */
  public getClassifier(): CodeableConcept[] {
    return this.classifier ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `classifier` property.
   *
   * @param value - the `classifier` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setClassifier(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.associatedParty.classifier; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.classifier = value;
    } else {
      this.classifier = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `classifier` array property.
   *
   * @param value - the `classifier` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addClassifier(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.associatedParty.classifier; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initClassifier();
      this.classifier?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `classifier` property exists and has a value; `false` otherwise
   */
  public hasClassifier(): boolean {
    return isDefinedList<CodeableConcept>(this.classifier) && this.classifier.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `classifier` property
   */
  private initClassifier(): void {
    if(!this.hasClassifier()) {
      this.classifier = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `party` property value as a Reference object; else an empty Reference object
   */
  public getParty(): Reference {
    return this.party ?? new Reference();
  }

  /**
   * Assigns the provided Party object value to the `party` property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.associatedParty.party', ['Practitioner','PractitionerRole','Organization',])`
   *
   * @param value - the `party` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.associatedParty.party', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  ])
  public setParty(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.party = value;
    } else {
      this.party = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `party` property exists and has a value; `false` otherwise
   */
  public hasParty(): boolean {
    return isDefined<Reference>(this.party) && !this.party.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ResearchStudy.associatedParty';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.role,
      this.period,
      this.classifier,
      this.party,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchStudyAssociatedPartyComponent {
    const dest = new ResearchStudyAssociatedPartyComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchStudyAssociatedPartyComponent): void {
    super.copyValues(dest);
    dest.name = this.name?.copy();
    dest.role = this.role ? this.role.copy() : null;
    const periodList = copyListValues<Period>(this.period);
    dest.period = periodList.length === 0 ? undefined : periodList;
    const classifierList = copyListValues<CodeableConcept>(this.classifier);
    dest.classifier = classifierList.length === 0 ? undefined : classifierList;
    dest.party = this.party?.copy();
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
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasRole()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getRole()!, 'role', jsonObj);
    } else {
      missingReqdProperties.push(`ResearchStudy.associatedParty.role`);
    }

    if (this.hasPeriod()) {
      setFhirComplexListJson(this.getPeriod(), 'period', jsonObj);
    }

    if (this.hasClassifier()) {
      setFhirComplexListJson(this.getClassifier(), 'classifier', jsonObj);
    }

    if (this.hasParty()) {
      setFhirComplexJson(this.getParty(), 'party', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ResearchStudyProgressStatusComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Status of study with time for that status
 * - **Definition:** Status of study with time for that status.
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchStudy](http://hl7.org/fhir/StructureDefinition/ResearchStudy)
 */
export class ResearchStudyProgressStatusComponent extends BackboneElement implements IBackboneElement {
  constructor(state: CodeableConcept | null = null) {
    super();

    this.state = null;
    if (isDefined<CodeableConcept>(state)) {
      this.setState(state);
    }
  }

  /**
   * Parse the provided `ResearchStudyProgressStatusComponent` JSON to instantiate the ResearchStudyProgressStatusComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchStudyProgressStatusComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchStudyProgressStatusComponent
   * @returns ResearchStudyProgressStatusComponent data model or undefined for `ResearchStudyProgressStatusComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ResearchStudyProgressStatusComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchStudyProgressStatusComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchStudyProgressStatusComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const missingReqdProperties: string[] = [];

    fieldName = 'state';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        missingReqdProperties.push(sourceField);
      } else {
        instance.setState(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
    }

    fieldName = 'actual';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setActualElement(datatype);
    }

    fieldName = 'period';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Period | undefined = Period.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPeriod(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ResearchStudy.progressStatus.state Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for status or state (e.g. recruitment status)
   * - **Definition:** Label for status or state (e.g. recruitment status).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private state: CodeableConcept | null;

  /**
   * ResearchStudy.progressStatus.actual Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual if true else anticipated
   * - **Definition:** An indication of whether or not the date is a known date when the state changed or will change. A value of true indicates a known date. A value of false indicates an estimated date.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actual?: BooleanType | undefined;

  /**
   * ResearchStudy.progressStatus.period Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date range
   * - **Definition:** Date range.
   * - **FHIR Type:** `Period`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private period?: Period | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `state` property value as a CodeableConcept object if defined; else null
   */
  public getState(): CodeableConcept | null {
    return this.state;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `state` property.
   *
   * @param value - the `state` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setState(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `ResearchStudy.progressStatus.state is required`);
    const optErrMsg = `Invalid ResearchStudy.progressStatus.state; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.state = value;
    return this;
  }

  /**
   * @returns `true` if the `state` property exists and has a value; `false` otherwise
   */
  public hasState(): boolean {
    return isDefined<CodeableConcept>(this.state) && !this.state.isEmpty();
  }

  /**
   * @returns the `actual` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getActualElement(): BooleanType {
    return this.actual ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `actual` property.
   *
   * @param element - the `actual` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActualElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ResearchStudy.progressStatus.actual; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.actual = element;
    } else {
      this.actual = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actual` property exists and has a value; `false` otherwise
   */
  public hasActualElement(): boolean {
    return isDefined<BooleanType>(this.actual) && !this.actual.isEmpty();
  }

  /**
   * @returns the `actual` property value as a fhirBoolean if defined; else undefined
   */
  public getActual(): fhirBoolean | undefined {
    return this.actual?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `actual` property.
   *
   * @param value - the `actual` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActual(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ResearchStudy.progressStatus.actual (${String(value)})`;
      this.actual = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.actual = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actual` property exists and has a value; `false` otherwise
   */
  public hasActual(): boolean {
    return this.hasActualElement();
  }

  /**
   * @returns the `period` property value as a Period object if defined; else an empty Period object
   */
  public getPeriod(): Period {
    return this.period ?? new Period();
  }

  /**
   * Assigns the provided Period object value to the `period` property.
   *
   * @param value - the `period` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPeriod(value: Period | undefined): this {
    if (isDefined<Period>(value)) {
      const optErrMsg = `Invalid ResearchStudy.progressStatus.period; Provided element is not an instance of Period.`;
      assertFhirType<Period>(value, Period, optErrMsg);
      this.period = value;
    } else {
      this.period = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `period` property exists and has a value; `false` otherwise
   */
  public hasPeriod(): boolean {
    return isDefined<Period>(this.period) && !this.period.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ResearchStudy.progressStatus';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.state,
      this.actual,
      this.period,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchStudyProgressStatusComponent {
    const dest = new ResearchStudyProgressStatusComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchStudyProgressStatusComponent): void {
    super.copyValues(dest);
    dest.state = this.state ? this.state.copy() : null;
    dest.actual = this.actual?.copy();
    dest.period = this.period?.copy();
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

    if (this.hasState()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getState()!, 'state', jsonObj);
    } else {
      missingReqdProperties.push(`ResearchStudy.progressStatus.state`);
    }

    if (this.hasActualElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getActualElement(), 'actual', jsonObj);
    }

    if (this.hasPeriod()) {
      setFhirComplexJson(this.getPeriod(), 'period', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ResearchStudyRecruitmentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Target or actual group of participants enrolled in study
 * - **Definition:** Target or actual group of participants enrolled in study.
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchStudy](http://hl7.org/fhir/StructureDefinition/ResearchStudy)
 */
export class ResearchStudyRecruitmentComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ResearchStudyRecruitmentComponent` JSON to instantiate the ResearchStudyRecruitmentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchStudyRecruitmentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchStudyRecruitmentComponent
   * @returns ResearchStudyRecruitmentComponent data model or undefined for `ResearchStudyRecruitmentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ResearchStudyRecruitmentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchStudyRecruitmentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchStudyRecruitmentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'targetNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setTargetNumberElement(datatype);
    }

    fieldName = 'actualNumber';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UnsignedIntType | undefined = fhirParser.parseUnsignedIntType(dtJson, dtSiblingJson);
      instance.setActualNumberElement(datatype);
    }

    fieldName = 'eligibility';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEligibility(datatype);
    }

    fieldName = 'actualGroup';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setActualGroup(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ResearchStudy.recruitment.targetNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Estimated total number of participants to be enrolled
   * - **Definition:** Estimated total number of participants to be enrolled.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private targetNumber?: UnsignedIntType | undefined;

  /**
   * ResearchStudy.recruitment.actualNumber Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Actual total number of participants enrolled in study
   * - **Definition:** Actual total number of participants enrolled in study.
   * - **FHIR Type:** `unsignedInt`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actualNumber?: UnsignedIntType | undefined;

  /**
   * ResearchStudy.recruitment.eligibility Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Inclusion and exclusion criteria
   * - **Definition:** Inclusion and exclusion criteria.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private eligibility?: Reference | undefined;

  /**
   * ResearchStudy.recruitment.actualGroup Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Group of participants who were enrolled in study
   * - **Definition:** Group of participants who were enrolled in study.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private actualGroup?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `targetNumber` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getTargetNumberElement(): UnsignedIntType {
    return this.targetNumber ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `targetNumber` property.
   *
   * @param element - the `targetNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetNumberElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid ResearchStudy.recruitment.targetNumber; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.targetNumber = element;
    } else {
      this.targetNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `targetNumber` property exists and has a value; `false` otherwise
   */
  public hasTargetNumberElement(): boolean {
    return isDefined<UnsignedIntType>(this.targetNumber) && !this.targetNumber.isEmpty();
  }

  /**
   * @returns the `targetNumber` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getTargetNumber(): fhirUnsignedInt | undefined {
    return this.targetNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `targetNumber` property.
   *
   * @param value - the `targetNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTargetNumber(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid ResearchStudy.recruitment.targetNumber (${String(value)})`;
      this.targetNumber = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.targetNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `targetNumber` property exists and has a value; `false` otherwise
   */
  public hasTargetNumber(): boolean {
    return this.hasTargetNumberElement();
  }

  /**
   * @returns the `actualNumber` property value as a UnsignedIntType object if defined; else an empty UnsignedIntType object
   */
  public getActualNumberElement(): UnsignedIntType {
    return this.actualNumber ?? new UnsignedIntType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `actualNumber` property.
   *
   * @param element - the `actualNumber` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActualNumberElement(element: UnsignedIntType | undefined): this {
    if (isDefined<UnsignedIntType>(element)) {
      const optErrMsg = `Invalid ResearchStudy.recruitment.actualNumber; Provided element is not an instance of UnsignedIntType.`;
      assertFhirType<UnsignedIntType>(element, UnsignedIntType, optErrMsg);
      this.actualNumber = element;
    } else {
      this.actualNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actualNumber` property exists and has a value; `false` otherwise
   */
  public hasActualNumberElement(): boolean {
    return isDefined<UnsignedIntType>(this.actualNumber) && !this.actualNumber.isEmpty();
  }

  /**
   * @returns the `actualNumber` property value as a fhirUnsignedInt if defined; else undefined
   */
  public getActualNumber(): fhirUnsignedInt | undefined {
    return this.actualNumber?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `actualNumber` property.
   *
   * @param value - the `actualNumber` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setActualNumber(value: fhirUnsignedInt | undefined): this {
    if (isDefined<fhirUnsignedInt>(value)) {
      const optErrMsg = `Invalid ResearchStudy.recruitment.actualNumber (${String(value)})`;
      this.actualNumber = new UnsignedIntType(parseFhirPrimitiveData(value, fhirUnsignedIntSchema, optErrMsg));
    } else {
      this.actualNumber = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actualNumber` property exists and has a value; `false` otherwise
   */
  public hasActualNumber(): boolean {
    return this.hasActualNumberElement();
  }

  /**
   * @returns the `eligibility` property value as a Reference object; else an empty Reference object
   */
  public getEligibility(): Reference {
    return this.eligibility ?? new Reference();
  }

  /**
   * Assigns the provided Eligibility object value to the `eligibility` property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.recruitment.eligibility', ['Group','EvidenceVariable',])`
   *
   * @param value - the `eligibility` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.recruitment.eligibility', [
    'Group',
  
    'EvidenceVariable',
  ])
  public setEligibility(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.eligibility = value;
    } else {
      this.eligibility = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `eligibility` property exists and has a value; `false` otherwise
   */
  public hasEligibility(): boolean {
    return isDefined<Reference>(this.eligibility) && !this.eligibility.isEmpty();
  }

  /**
   * @returns the `actualGroup` property value as a Reference object; else an empty Reference object
   */
  public getActualGroup(): Reference {
    return this.actualGroup ?? new Reference();
  }

  /**
   * Assigns the provided ActualGroup object value to the `actualGroup` property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.recruitment.actualGroup', ['Group',])`
   *
   * @param value - the `actualGroup` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.recruitment.actualGroup', [
    'Group',
  ])
  public setActualGroup(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.actualGroup = value;
    } else {
      this.actualGroup = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actualGroup` property exists and has a value; `false` otherwise
   */
  public hasActualGroup(): boolean {
    return isDefined<Reference>(this.actualGroup) && !this.actualGroup.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ResearchStudy.recruitment';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.targetNumber,
      this.actualNumber,
      this.eligibility,
      this.actualGroup,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchStudyRecruitmentComponent {
    const dest = new ResearchStudyRecruitmentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchStudyRecruitmentComponent): void {
    super.copyValues(dest);
    dest.targetNumber = this.targetNumber?.copy();
    dest.actualNumber = this.actualNumber?.copy();
    dest.eligibility = this.eligibility?.copy();
    dest.actualGroup = this.actualGroup?.copy();
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

    if (this.hasTargetNumberElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getTargetNumberElement(), 'targetNumber', jsonObj);
    }

    if (this.hasActualNumberElement()) {
      setFhirPrimitiveJson<fhirUnsignedInt>(this.getActualNumberElement(), 'actualNumber', jsonObj);
    }

    if (this.hasEligibility()) {
      setFhirComplexJson(this.getEligibility(), 'eligibility', jsonObj);
    }

    if (this.hasActualGroup()) {
      setFhirComplexJson(this.getActualGroup(), 'actualGroup', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ResearchStudyComparisonGroupComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Defined path through the study for a subject
 * - **Definition:** Describes an expected event or sequence of events for one of the subjects of a study. E.g. for a living subject: exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up. E.g. for a stability study: {store sample from lot A at 25 degrees for 1 month}, {store sample from lot A at 40 degrees for 1 month}.
 * - **Comment:** In many clinical trials this is refered to as the ARM of the study, but such a term is not used in other sorts of trials even when there is a comparison between two or more groups.
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchStudy](http://hl7.org/fhir/StructureDefinition/ResearchStudy)
 */
export class ResearchStudyComparisonGroupComponent extends BackboneElement implements IBackboneElement {
  constructor(name: StringType | fhirString | null = null) {
    super();

    this.name = null;
    if (isDefined<StringType | fhirString>(name)) {
      if (name instanceof PrimitiveType) {
        this.setNameElement(name);
      } else {
        this.setName(name);
      }
    }
  }

  /**
   * Parse the provided `ResearchStudyComparisonGroupComponent` JSON to instantiate the ResearchStudyComparisonGroupComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchStudyComparisonGroupComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchStudyComparisonGroupComponent
   * @returns ResearchStudyComparisonGroupComponent data model or undefined for `ResearchStudyComparisonGroupComponent`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ResearchStudyComparisonGroupComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchStudyComparisonGroupComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchStudyComparisonGroupComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const missingReqdProperties: string[] = [];

    fieldName = 'linkId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IdType | undefined = fhirParser.parseIdType(dtJson, dtSiblingJson);
      instance.setLinkIdElement(datatype);
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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'intendedExposure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addIntendedExposure(datatype);
        }
      });
  }

    fieldName = 'observedGroup';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setObservedGroup(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ResearchStudy.comparisonGroup.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Allows the comparisonGroup for the study and the comparisonGroup for the subject to be linked easily
   * - **Definition:** Allows the comparisonGroup for the study and the comparisonGroup for the subject to be linked easily.
   * - **FHIR Type:** `id`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId?: IdType | undefined;

  /**
   * ResearchStudy.comparisonGroup.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for study comparisonGroup
   * - **Definition:** Unique, human-readable label for this comparisonGroup of the study.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name: StringType | null;

  /**
   * ResearchStudy.comparisonGroup.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Categorization of study comparisonGroup
   * - **Definition:** Categorization of study comparisonGroup, e.g. experimental, active comparator, placebo comparater.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * ResearchStudy.comparisonGroup.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Short explanation of study path
   * - **Definition:** A succinct description of the path through the study that would be followed by a subject adhering to this comparisonGroup.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ResearchStudy.comparisonGroup.intendedExposure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Interventions or exposures in this comparisonGroup or cohort
   * - **Definition:** Interventions or exposures in this comparisonGroup or cohort.
   * - **Requirements:** this is necessary for ClinicalTrials.gov use which relates  1 to many interventions to comparisonGroups (aka arms)
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private intendedExposure?: Reference[] | undefined;

  /**
   * ResearchStudy.comparisonGroup.observedGroup Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Group of participants who were enrolled in study comparisonGroup
   * - **Definition:** Group of participants who were enrolled in study comparisonGroup.
   * - **Requirements:** This is necessary to relate comparisonGroups to actual groups
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private observedGroup?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `linkId` property value as a IdType object if defined; else an empty IdType object
   */
  public getLinkIdElement(): IdType {
    return this.linkId ?? new IdType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `linkId` property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: IdType | undefined): this {
    if (isDefined<IdType>(element)) {
      const optErrMsg = `Invalid ResearchStudy.comparisonGroup.linkId; Provided element is not an instance of IdType.`;
      assertFhirType<IdType>(element, IdType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefined<IdType>(this.linkId) && !this.linkId.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a fhirId if defined; else undefined
   */
  public getLinkId(): fhirId | undefined {
    return this.linkId?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `linkId` property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirId | undefined): this {
    if (isDefined<fhirId>(value)) {
      const optErrMsg = `Invalid ResearchStudy.comparisonGroup.linkId (${String(value)})`;
      this.linkId = new IdType(parseFhirPrimitiveData(value, fhirIdSchema, optErrMsg));
    } else {
      this.linkId = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkId(): boolean {
    return this.hasLinkIdElement();
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
    assertIsDefined<StringType>(element, `ResearchStudy.comparisonGroup.name is required`);
    const optErrMsg = `Invalid ResearchStudy.comparisonGroup.name; Provided value is not an instance of StringType.`;
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
    assertIsDefined<fhirString>(value, `ResearchStudy.comparisonGroup.name is required`);
    const optErrMsg = `Invalid ResearchStudy.comparisonGroup.name (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchStudy.comparisonGroup.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ResearchStudy.comparisonGroup.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ResearchStudy.comparisonGroup.description (${String(value)})`;
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
   * @returns the `intendedExposure` property value as a Reference array
   */
  public getIntendedExposure(): Reference[] {
    return this.intendedExposure ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `intendedExposure` property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.comparisonGroup.intendedExposure', ['EvidenceVariable',])`
   *
   * @param value - the `intendedExposure` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.comparisonGroup.intendedExposure', [
    'EvidenceVariable',
  ])
  public setIntendedExposure(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.intendedExposure = value;
    } else {
      this.intendedExposure = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `intendedExposure` array property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.comparisonGroup.intendedExposure', ['EvidenceVariable',])`
   *
   * @param value - the `intendedExposure` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.comparisonGroup.intendedExposure', [
    'EvidenceVariable',
  ])
  public addIntendedExposure(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initIntendedExposure();
      this.intendedExposure?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `intendedExposure` property exists and has a value; `false` otherwise
   */
  public hasIntendedExposure(): boolean {
    return isDefinedList<Reference>(this.intendedExposure) && this.intendedExposure.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `intendedExposure` property
   */
  private initIntendedExposure(): void {
    if (!this.hasIntendedExposure()) {
      this.intendedExposure = [] as Reference[];
    }
  }

  /**
   * @returns the `observedGroup` property value as a Reference object; else an empty Reference object
   */
  public getObservedGroup(): Reference {
    return this.observedGroup ?? new Reference();
  }

  /**
   * Assigns the provided ObservedGroup object value to the `observedGroup` property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.comparisonGroup.observedGroup', ['Group',])`
   *
   * @param value - the `observedGroup` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.comparisonGroup.observedGroup', [
    'Group',
  ])
  public setObservedGroup(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.observedGroup = value;
    } else {
      this.observedGroup = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `observedGroup` property exists and has a value; `false` otherwise
   */
  public hasObservedGroup(): boolean {
    return isDefined<Reference>(this.observedGroup) && !this.observedGroup.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ResearchStudy.comparisonGroup';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.linkId,
      this.name,
      this.type_,
      this.description,
      this.intendedExposure,
      this.observedGroup,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchStudyComparisonGroupComponent {
    const dest = new ResearchStudyComparisonGroupComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchStudyComparisonGroupComponent): void {
    super.copyValues(dest);
    dest.linkId = this.linkId?.copy();
    dest.name = this.name ? this.name.copy() : null;
    dest.type_ = this.type_?.copy();
    dest.description = this.description?.copy();
    const intendedExposureList = copyListValues<Reference>(this.intendedExposure);
    dest.intendedExposure = intendedExposureList.length === 0 ? undefined : intendedExposureList;
    dest.observedGroup = this.observedGroup?.copy();
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

    if (this.hasLinkIdElement()) {
      setFhirPrimitiveJson<fhirId>(this.getLinkIdElement(), 'linkId', jsonObj);
    }

    if (this.hasNameElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirString>(this.getNameElement()!, 'name', jsonObj);
    } else {
      missingReqdProperties.push(`ResearchStudy.comparisonGroup.name`);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasIntendedExposure()) {
      setFhirComplexListJson(this.getIntendedExposure(), 'intendedExposure', jsonObj);
    }

    if (this.hasObservedGroup()) {
      setFhirComplexJson(this.getObservedGroup(), 'observedGroup', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}
/**
 * ResearchStudyObjectiveComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A goal for the study
 * - **Definition:** A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchStudy](http://hl7.org/fhir/StructureDefinition/ResearchStudy)
 */
export class ResearchStudyObjectiveComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ResearchStudyObjectiveComponent` JSON to instantiate the ResearchStudyObjectiveComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchStudyObjectiveComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchStudyObjectiveComponent
   * @returns ResearchStudyObjectiveComponent data model or undefined for `ResearchStudyObjectiveComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ResearchStudyObjectiveComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchStudyObjectiveComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchStudyObjectiveComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ResearchStudy.objective.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for the objective
   * - **Definition:** Unique, human-readable label for this objective of the study.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * ResearchStudy.objective.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** primary | secondary | exploratory
   * - **Definition:** The kind of study objective.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * ResearchStudy.objective.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the objective
   * - **Definition:** Free text description of the objective of the study.  This is what the study is trying to achieve rather than how it is going to achieve it (see ResearchStudy.description).
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid ResearchStudy.objective.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ResearchStudy.objective.name (${String(value)})`;
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
      const optErrMsg = `Invalid ResearchStudy.objective.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ResearchStudy.objective.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ResearchStudy.objective.description (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ResearchStudy.objective';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.type_,
      this.description,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchStudyObjectiveComponent {
    const dest = new ResearchStudyObjectiveComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchStudyObjectiveComponent): void {
    super.copyValues(dest);
    dest.name = this.name?.copy();
    dest.type_ = this.type_?.copy();
    dest.description = this.description?.copy();
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ResearchStudyOutcomeMeasureComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** A variable measured during the study
 * - **Definition:** An "outcome measure", "endpoint", "effect measure" or "measure of effect" is a specific measurement or observation used to quantify the effect of experimental variables on the participants in a study, or for observational studies, to describe patterns of diseases or traits or associations with exposures, risk factors or treatment.
 * - **Comment:** A study may have multiple distinct outcome measures that can be used to assess the overall goal for a study. The goal of a study is in the objective whereas the metric by which the goal is assessed is the outcomeMeasure. Examples: Time to Local Recurrence (TLR), Disease-free Survival (DFS), 30 Day Mortality, Systolic BP
 *
 * @category Data Models: Resource
 * @see [FHIR ResearchStudy](http://hl7.org/fhir/StructureDefinition/ResearchStudy)
 */
export class ResearchStudyOutcomeMeasureComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ResearchStudyOutcomeMeasureComponent` JSON to instantiate the ResearchStudyOutcomeMeasureComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ResearchStudyOutcomeMeasureComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ResearchStudyOutcomeMeasureComponent
   * @returns ResearchStudyOutcomeMeasureComponent data model or undefined for `ResearchStudyOutcomeMeasureComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ResearchStudyOutcomeMeasureComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ResearchStudyOutcomeMeasureComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ResearchStudyOutcomeMeasureComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setNameElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addType(datatype);
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

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReference(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ResearchStudy.outcomeMeasure.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Label for the outcome
   * - **Definition:** Label for the outcome.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private name?: StringType | undefined;

  /**
   * ResearchStudy.outcomeMeasure.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** primary | secondary | exploratory
   * - **Definition:** The parameter or characteristic being assessed as one of the values by which the study is assessed.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * ResearchStudy.outcomeMeasure.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the outcome
   * - **Definition:** Description of the outcome.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * ResearchStudy.outcomeMeasure.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Structured outcome definition
   * - **Definition:** Structured outcome definition.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/EvidenceVariable',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid ResearchStudy.outcomeMeasure.name; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ResearchStudy.outcomeMeasure.name (${String(value)})`;
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
   * @returns the `type_` property value as a CodeableConcept array
   */
  public getType(): CodeableConcept[] {
    return this.type_ ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `type_` property.
   *
   * @param value - the `type_` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.outcomeMeasure.type; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `type_` array property.
   *
   * @param value - the `type_` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ResearchStudy.outcomeMeasure.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initType();
      this.type_?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return isDefinedList<CodeableConcept>(this.type_) && this.type_.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `type_` property
   */
  private initType(): void {
    if(!this.hasType()) {
      this.type_ = [] as CodeableConcept[];
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
      const optErrMsg = `Invalid ResearchStudy.outcomeMeasure.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ResearchStudy.outcomeMeasure.description (${String(value)})`;
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
   * @returns the `reference` property value as a Reference object; else an empty Reference object
   */
  public getReference(): Reference {
    return this.reference ?? new Reference();
  }

  /**
   * Assigns the provided Reference object value to the `reference` property.
   *
   * @decorator `@ReferenceTargets('ResearchStudy.outcomeMeasure.reference', ['EvidenceVariable',])`
   *
   * @param value - the `reference` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ResearchStudy.outcomeMeasure.reference', [
    'EvidenceVariable',
  ])
  public setReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reference = value;
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return isDefined<Reference>(this.reference) && !this.reference.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ResearchStudy.outcomeMeasure';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.type_,
      this.description,
      this.reference,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ResearchStudyOutcomeMeasureComponent {
    const dest = new ResearchStudyOutcomeMeasureComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ResearchStudyOutcomeMeasureComponent): void {
    super.copyValues(dest);
    dest.name = this.name?.copy();
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    dest.description = this.description?.copy();
    dest.reference = this.reference?.copy();
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

    if (this.hasNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getNameElement(), 'name', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasReference()) {
      setFhirComplexJson(this.getReference(), 'reference', jsonObj);
    }

    return jsonObj;
  }
}
