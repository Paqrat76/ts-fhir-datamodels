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
 * ArtifactAssessment Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/ArtifactAssessment
 * StructureDefinition.name: ArtifactAssessment
 * StructureDefinition.description: This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content.
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
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
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
import { ArtifactassessmentDispositionEnum } from '../code-systems/ArtifactassessmentDispositionEnum';
import { ArtifactassessmentInformationTypeEnum } from '../code-systems/ArtifactassessmentInformationTypeEnum';
import { ArtifactassessmentWorkflowStatusEnum } from '../code-systems/ArtifactassessmentWorkflowStatusEnum';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference, RelatedArtifact } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * ArtifactAssessment Class
 *
 * @remarks
 * This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content.
 *
 * **FHIR Specification**
 * - **Short:** Adds metadata-supported comments, classifiers or ratings related to a Resource
 * - **Definition:** This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR ArtifactAssessment](http://hl7.org/fhir/StructureDefinition/ArtifactAssessment)
 */
export class ArtifactAssessment extends DomainResource implements IDomainResource {
  constructor(artifact: IDataType | null = null) {
    super();

    this.artifactassessmentWorkflowStatusEnum = new ArtifactassessmentWorkflowStatusEnum();
    this.artifactassessmentDispositionEnum = new ArtifactassessmentDispositionEnum();

    this.artifact = null;
    if (isDefined<IDataType>(artifact)) {
      this.setArtifact(artifact);
    }

  }

  /**
   * Parse the provided `ArtifactAssessment` JSON to instantiate the ArtifactAssessment data model.
   *
   * @param sourceJson - JSON representing FHIR `ArtifactAssessment`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ArtifactAssessment
   * @returns ArtifactAssessment data model or undefined for `ArtifactAssessment`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): ArtifactAssessment | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ArtifactAssessment';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ArtifactAssessment();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'ArtifactAssessment');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = ArtifactAssessment[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ArtifactAssessment`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    fieldName = 'citeAs[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const citeAs: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setCiteAs(citeAs);

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
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

    fieldName = 'artifact[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const artifact: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (artifact === undefined) {
      instance.setArtifact(null);
    } else {
      instance.setArtifact(artifact);
    }

    fieldName = 'content';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ArtifactAssessmentContentComponent | undefined = ArtifactAssessmentContentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addContent(component);
          }
        });
      }
    }

    fieldName = 'workflowStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setWorkflowStatusElement(datatype);
    }

    fieldName = 'disposition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setDispositionElement(datatype);
    }

    return instance;
  }

  /**
   * ArtifactAssessment.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional identifier for the artifact assessment
   * - **Definition:** A formal identifier that is used to identify this artifact assessment when it is represented in other formats, or referenced in a specification, model, design or an instance.
   * - **Comment:** Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this activity definition outside of FHIR, where it is not possible to use the logical URI.
   * - **Requirements:** Allows externally provided and/or usable business identifiers to be easily associated with the artifact assessment.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * ArtifactAssessment.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** A short title for the assessment for use in displaying and selecting
   * - **Definition:** A short title for the assessment for use in displaying and selecting.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * ArtifactAssessment.citeAs[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ArtifactAssessment.citeAs[x]', ['Reference','markdown',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How to cite the comment or rating
   * - **Definition:** Display of or reference to the bibliographic citation of the comment, classifier, or rating.
   * - **FHIR Types:**
   *     'Reference',
   *     'markdown',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('ArtifactAssessment.citeAs[x]',[
    'Reference',
    'markdown',
  ])
  private citeAs?: IDataType | undefined;

  /**
   * ArtifactAssessment.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date last changed
   * - **Definition:** The date  (and optionally time) when the artifact assessment was published. The date must change when the disposition changes and it must change if the workflow status code changes. In addition, it should change when the substantive content of the artifact assessment changes.
   * - **Comment:** The date is often not tracked until the resource is published, but may be present on draft content. Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the artifact assessment. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private date?: DateTimeType | undefined;

  /**
   * ArtifactAssessment.copyright Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Use and/or publishing restrictions
   * - **Definition:** A copyright statement relating to the artifact assessment and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the artifact assessment.
   * - **Requirements:** Consumers must be able to determine any legal restrictions on the use of the artifact assessment and/or its content.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private copyright?: MarkdownType | undefined;

  /**
   * ArtifactAssessment.approvalDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the artifact assessment was approved by publisher
   * - **Definition:** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
   * - **Comment:** The \'date\' element may be more recent than the approval date because of minor changes or editorial corrections.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private approvalDate?: DateType | undefined;

  /**
   * ArtifactAssessment.lastReviewDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the artifact assessment was last reviewed by the publisher
   * - **Definition:** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.
   * - **Comment:** If specified, this date follows the original approval date.
   * - **Requirements:** Gives a sense of how "current" the content is.  Resources that have not been reviewed in a long time may have a risk of being less appropriate/relevant.
   * - **FHIR Type:** `date`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private lastReviewDate?: DateType | undefined;

  /**
   * ArtifactAssessment.artifact[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('ArtifactAssessment.artifact[x]', ['Reference','canonical','uri',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The artifact assessed, commented upon or rated
   * - **Definition:** A reference to a resource, canonical resource, or non-FHIR resource which the comment or assessment is about.
   * - **FHIR Types:**
   *     'Reference',
   *     'canonical',
   *     'uri',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('ArtifactAssessment.artifact[x]',[
    'Reference',
    'canonical',
    'uri',
  ])
  private artifact: IDataType | null;

  /**
   * ArtifactAssessment.content Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comment, classifier, or rating content
   * - **Definition:** A component comment, classifier, or rating of the artifact.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private content?: ArtifactAssessmentContentComponent[] | undefined;

  /**
   * FHIR CodeSystem: ArtifactassessmentWorkflowStatus
   *
   * @see {@link ArtifactassessmentWorkflowStatusEnum }
   */
  private readonly artifactassessmentWorkflowStatusEnum: ArtifactassessmentWorkflowStatusEnum;

  /**
   * ArtifactAssessment.workflowStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** submitted | triaged | waiting-for-input | resolved-no-change | resolved-change-required | deferred | duplicate | applied | published | entered-in-error
   * - **Definition:** Indicates the workflow status of the comment or change request.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentWorkflowStatusEnum }
   */
  private workflowStatus?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: ArtifactassessmentDisposition
   *
   * @see {@link ArtifactassessmentDispositionEnum }
   */
  private readonly artifactassessmentDispositionEnum: ArtifactassessmentDispositionEnum;

  /**
   * ArtifactAssessment.disposition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** unresolved | not-persuasive | persuasive | persuasive-with-modification | not-persuasive-with-modification
   * - **Definition:** Indicates the disposition of the responsible party to the comment or change request.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentDispositionEnum }
   */
  private disposition?: EnumCodeType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid ArtifactAssessment.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ArtifactAssessment.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ArtifactAssessment.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ArtifactAssessment.title (${String(value)})`;
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
   * @returns the `citeAs` property value as a DataType object if defined; else undefined
   */
  public getCiteAs(): IDataType | undefined {
    return this.citeAs;
  }

  /**
   * Assigns the provided DataType object value to the `citeAs` property.
   *
   * @decorator `@ChoiceDataTypes('ArtifactAssessment.citeAs[x]')`
   *
   * @param value - the `citeAs` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ArtifactAssessment.citeAs[x]')
  public setCiteAs(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.citeAs = value;
    } else {
      this.citeAs = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `citeAs` property exists and has a value; `false` otherwise
   */
  public hasCiteAs(): boolean {
    return isDefined<IDataType>(this.citeAs) && !this.citeAs.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `citeAs` property value as a Reference object if defined; else undefined
   */
  public getCiteAsReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.citeAs)) {
      return undefined;
    }
    if (!(this.citeAs instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for ArtifactAssessment.citeAs[x]: Expected Reference but encountered ${this.citeAs.fhirType()}`,
      );
    }
    return this.citeAs;
  }

  /**
   * @returns `true` if the `citeAs` property exists as a Reference and has a value; `false` otherwise
   */
  public hasCiteAsReference(): boolean {
    return this.hasCiteAs() && this.citeAs instanceof Reference;
  }

  /**
   * @returns the `citeAs` property value as a MarkdownType object if defined; else undefined
   */
  public getCiteAsMarkdownType(): MarkdownType | undefined {
    if (!isDefined<IDataType | undefined>(this.citeAs)) {
      return undefined;
    }
    if (!(this.citeAs instanceof MarkdownType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ArtifactAssessment.citeAs[x]: Expected MarkdownType but encountered ${this.citeAs.fhirType()}`,
      );
    }
    return this.citeAs;
  }

  /**
   * @returns `true` if the `citeAs` property exists as a MarkdownType and has a value; `false` otherwise
   */
  public hasCiteAsMarkdownType(): boolean {
    return this.hasCiteAs() && this.citeAs instanceof MarkdownType;
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
      const optErrMsg = `Invalid ArtifactAssessment.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid ArtifactAssessment.date (${String(value)})`;
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
      const optErrMsg = `Invalid ArtifactAssessment.copyright; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid ArtifactAssessment.copyright (${String(value)})`;
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
      const optErrMsg = `Invalid ArtifactAssessment.approvalDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ArtifactAssessment.approvalDate (${String(value)})`;
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
      const optErrMsg = `Invalid ArtifactAssessment.lastReviewDate; Provided element is not an instance of DateType.`;
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
      const optErrMsg = `Invalid ArtifactAssessment.lastReviewDate (${String(value)})`;
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
   * @returns the `artifact` property value as a DataType object; else null
   */
  public getArtifact(): IDataType | null {
    return this.artifact;
  }

  /**
   * Assigns the provided DataType object value to the `artifact` property.
   *
   * @decorator `@ChoiceDataTypes('ArtifactAssessment.artifact[x]')`
   *
   * @param value - the `artifact` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('ArtifactAssessment.artifact[x]')
  public setArtifact(value: IDataType | undefined | null): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.artifact = value;
    } else {
      this.artifact = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `artifact` property exists and has a value; `false` otherwise
   */
  public hasArtifact(): boolean {
    return isDefined<IDataType>(this.artifact) && !this.artifact.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `artifact` property value as a Reference object if defined; else null
   */
  public getArtifactReference(): Reference | null {
    if (!isDefined<IDataType>(this.artifact)) {
      return null;
    }
    if (!(this.artifact instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for ArtifactAssessment.artifact[x]: Expected Reference but encountered ${this.artifact.fhirType()}`,
      );
    }
    return this.artifact;
  }

  /**
   * @returns `true` if the `` property exists as a Reference and has a value; `false` otherwise
   */
  public hasArtifactReference(): boolean {
    return this.hasArtifact() && this.artifact instanceof Reference;
  }

  /**
   * @returns the `artifact` property value as a CanonicalType object if defined; else null
   */
  public getArtifactCanonicalType(): CanonicalType | null {
    if (!isDefined<IDataType>(this.artifact)) {
      return null;
    }
    if (!(this.artifact instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ArtifactAssessment.artifact[x]: Expected CanonicalType but encountered ${this.artifact.fhirType()}`,
      );
    }
    return this.artifact;
  }

  /**
   * @returns `true` if the `` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasArtifactCanonicalType(): boolean {
    return this.hasArtifact() && this.artifact instanceof CanonicalType;
  }

  /**
   * @returns the `artifact` property value as a UriType object if defined; else null
   */
  public getArtifactUriType(): UriType | null {
    if (!isDefined<IDataType>(this.artifact)) {
      return null;
    }
    if (!(this.artifact instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for ArtifactAssessment.artifact[x]: Expected UriType but encountered ${this.artifact.fhirType()}`,
      );
    }
    return this.artifact;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasArtifactUriType(): boolean {
    return this.hasArtifact() && this.artifact instanceof UriType;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `content` property value as a ArtifactAssessmentContentComponent array
   */
  public getContent(): ArtifactAssessmentContentComponent[] {
    return this.content ?? ([] as ArtifactAssessmentContentComponent[]);
  }

  /**
   * Assigns the provided ArtifactAssessmentContentComponent array value to the `content` property.
   *
   * @param value - the `content` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContent(value: ArtifactAssessmentContentComponent[] | undefined): this {
    if (isDefinedList<ArtifactAssessmentContentComponent>(value)) {
      const optErrMsg = `Invalid ArtifactAssessment.content; Provided value array has an element that is not an instance of ArtifactAssessmentContentComponent.`;
      assertFhirTypeList<ArtifactAssessmentContentComponent>(value, ArtifactAssessmentContentComponent, optErrMsg);
      this.content = value;
    } else {
      this.content = undefined;
    }
    return this;
  }

  /**
   * Add the provided ArtifactAssessmentContentComponent value to the `content` array property.
   *
   * @param value - the `content` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContent(value: ArtifactAssessmentContentComponent | undefined): this {
    if (isDefined<ArtifactAssessmentContentComponent>(value)) {
      const optErrMsg = `Invalid ArtifactAssessment.content; Provided element is not an instance of ArtifactAssessmentContentComponent.`;
      assertFhirType<ArtifactAssessmentContentComponent>(value, ArtifactAssessmentContentComponent, optErrMsg);
      this.initContent();
      this.content?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `content` property exists and has a value; `false` otherwise
   */
  public hasContent(): boolean {
    return isDefinedList<ArtifactAssessmentContentComponent>(this.content) && this.content.some((item: ArtifactAssessmentContentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `content` property
   */
  private initContent(): void {
    if(!this.hasContent()) {
      this.content = [] as ArtifactAssessmentContentComponent[];
    }
  }

  /**
   * @returns the `workflowStatus` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentWorkflowStatusEnum }
   */
  public getWorkflowStatusEnumType(): EnumCodeType | undefined {
    return this.workflowStatus;
  }

  /**
   * Assigns the provided EnumCodeType value to the `workflowStatus` property.
   *
   * @param enumType - the `workflowStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentWorkflowStatusEnum }
   */
  public setWorkflowStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ArtifactAssessment.workflowStatus';
      assertEnumCodeType<ArtifactassessmentWorkflowStatusEnum>(enumType, ArtifactassessmentWorkflowStatusEnum, errMsgPrefix);
      this.workflowStatus = enumType;
    } else {
      this.workflowStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `workflowStatus` property exists and has a value; `false` otherwise
   */
  public hasWorkflowStatusEnumType(): boolean {
    return isDefined<EnumCodeType>(this.workflowStatus) && !this.workflowStatus.isEmpty() && this.workflowStatus.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `workflowStatus` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentWorkflowStatusEnum }
   */
  public getWorkflowStatusElement(): CodeType | undefined {
    if (this.workflowStatus === undefined) {
      return undefined;
    }
    return this.workflowStatus as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `workflowStatus` property.
   *
   * @param element - the `workflowStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentWorkflowStatusEnum }
   */
  public setWorkflowStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ArtifactAssessment.workflowStatus; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.workflowStatus = new EnumCodeType(element, this.artifactassessmentWorkflowStatusEnum);
    } else {
      this.workflowStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `workflowStatus` property exists and has a value; `false` otherwise
   */
  public hasWorkflowStatusElement(): boolean {
    return this.hasWorkflowStatusEnumType();
  }

  /**
   * @returns the `workflowStatus` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentWorkflowStatusEnum }
   */
  public getWorkflowStatus(): fhirCode | undefined {
    if (this.workflowStatus === undefined) {
      return undefined;
    }
    return this.workflowStatus.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `workflowStatus` property.
   *
   * @param value - the `workflowStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentWorkflowStatusEnum }
   */
  public setWorkflowStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ArtifactAssessment.workflowStatus; Provided value is not an instance of fhirCode.`;
      this.workflowStatus = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.artifactassessmentWorkflowStatusEnum);
    } else {
      this.workflowStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `workflowStatus` property exists and has a value; `false` otherwise
   */
  public hasWorkflowStatus(): boolean {
    return this.hasWorkflowStatusEnumType();
  }

  /**
   * @returns the `disposition` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentDispositionEnum }
   */
  public getDispositionEnumType(): EnumCodeType | undefined {
    return this.disposition;
  }

  /**
   * Assigns the provided EnumCodeType value to the `disposition` property.
   *
   * @param enumType - the `disposition` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentDispositionEnum }
   */
  public setDispositionEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ArtifactAssessment.disposition';
      assertEnumCodeType<ArtifactassessmentDispositionEnum>(enumType, ArtifactassessmentDispositionEnum, errMsgPrefix);
      this.disposition = enumType;
    } else {
      this.disposition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `disposition` property exists and has a value; `false` otherwise
   */
  public hasDispositionEnumType(): boolean {
    return isDefined<EnumCodeType>(this.disposition) && !this.disposition.isEmpty() && this.disposition.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `disposition` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentDispositionEnum }
   */
  public getDispositionElement(): CodeType | undefined {
    if (this.disposition === undefined) {
      return undefined;
    }
    return this.disposition as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `disposition` property.
   *
   * @param element - the `disposition` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentDispositionEnum }
   */
  public setDispositionElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ArtifactAssessment.disposition; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.disposition = new EnumCodeType(element, this.artifactassessmentDispositionEnum);
    } else {
      this.disposition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `disposition` property exists and has a value; `false` otherwise
   */
  public hasDispositionElement(): boolean {
    return this.hasDispositionEnumType();
  }

  /**
   * @returns the `disposition` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentDispositionEnum }
   */
  public getDisposition(): fhirCode | undefined {
    if (this.disposition === undefined) {
      return undefined;
    }
    return this.disposition.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `disposition` property.
   *
   * @param value - the `disposition` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentDispositionEnum }
   */
  public setDisposition(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ArtifactAssessment.disposition; Provided value is not an instance of fhirCode.`;
      this.disposition = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.artifactassessmentDispositionEnum);
    } else {
      this.disposition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `disposition` property exists and has a value; `false` otherwise
   */
  public hasDisposition(): boolean {
    return this.hasDispositionEnumType();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ArtifactAssessment';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.title,
      this.citeAs,
      this.date,
      this.copyright,
      this.approvalDate,
      this.lastReviewDate,
      this.artifact,
      this.content,
      this.workflowStatus,
      this.disposition,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.artifact, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ArtifactAssessment {
    const dest = new ArtifactAssessment();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ArtifactAssessment): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.title = this.title?.copy();
    dest.citeAs = this.citeAs?.copy() as IDataType;
    dest.date = this.date?.copy();
    dest.copyright = this.copyright?.copy();
    dest.approvalDate = this.approvalDate?.copy();
    dest.lastReviewDate = this.lastReviewDate?.copy();
    dest.artifact = this.artifact ? this.artifact.copy() as IDataType : null;
    const contentList = copyListValues<ArtifactAssessmentContentComponent>(this.content);
    dest.content = contentList.length === 0 ? undefined : contentList;
    dest.workflowStatus = this.workflowStatus?.copy();
    dest.disposition = this.disposition?.copy();
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

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasCiteAs()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getCiteAs()!, 'citeAs', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
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

    if (this.hasArtifact()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getArtifact()!, 'artifact', jsonObj);
    }

    if (this.hasContent()) {
      setFhirBackboneElementListJson(this.getContent(), 'content', jsonObj);
    }

    if (this.hasWorkflowStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getWorkflowStatusElement()!, 'workflowStatus', jsonObj);
    }

    if (this.hasDispositionElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getDispositionElement()!, 'disposition', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ArtifactAssessmentContentComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Comment, classifier, or rating content
 * - **Definition:** A component comment, classifier, or rating of the artifact.
 *
 * @category Data Models: Resource
 * @see [FHIR ArtifactAssessment](http://hl7.org/fhir/StructureDefinition/ArtifactAssessment)
 */
export class ArtifactAssessmentContentComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.artifactassessmentInformationTypeEnum = new ArtifactassessmentInformationTypeEnum();
  }

  /**
   * Parse the provided `ArtifactAssessmentContentComponent` JSON to instantiate the ArtifactAssessmentContentComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ArtifactAssessmentContentComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ArtifactAssessmentContentComponent
   * @returns ArtifactAssessmentContentComponent data model or undefined for `ArtifactAssessmentContentComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ArtifactAssessmentContentComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ArtifactAssessmentContentComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ArtifactAssessmentContentComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'informationType';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setInformationTypeElement(datatype);
    }

    fieldName = 'summary';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setSummaryElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'classifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
          const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
          if (datatype !== undefined) {
            instance.addClassifier(datatype);
          }
        });
      }
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    fieldName = 'path';
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
          const datatype: UriType | undefined = fhirParser.parseUriType(dataJson.dtJson, dataJson.dtSiblingJson);
          if (datatype !== undefined) {
            instance.addPathElement(datatype);
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

    fieldName = 'freeToShare';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'boolean';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: BooleanType | undefined = fhirParser.parseBooleanType(dtJson, dtSiblingJson);
      instance.setFreeToShareElement(datatype);
    }

    fieldName = 'component';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ArtifactAssessmentContentComponent | undefined = ArtifactAssessmentContentComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addComponent(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: ArtifactassessmentInformationType
   *
   * @see {@link ArtifactassessmentInformationTypeEnum }
   */
  private readonly artifactassessmentInformationTypeEnum: ArtifactassessmentInformationTypeEnum;

  /**
   * ArtifactAssessment.content.informationType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** comment | classifier | rating | container | response | change-request
   * - **Definition:** The type of information this component of the content represents.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentInformationTypeEnum }
   */
  private informationType?: EnumCodeType | undefined;

  /**
   * ArtifactAssessment.content.summary Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Brief summary of the content
   * - **Definition:** A brief summary of the content of this component.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private summary?: MarkdownType | undefined;

  /**
   * ArtifactAssessment.content.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What type of content
   * - **Definition:** Indicates what type of content this component represents.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * ArtifactAssessment.content.classifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Rating, classifier, or assessment
   * - **Definition:** Represents a rating, classifier, or assessment of the artifact.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private classifier?: CodeableConcept[] | undefined;

  /**
   * ArtifactAssessment.content.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantitative rating
   * - **Definition:** A quantitative rating of the artifact.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * ArtifactAssessment.content.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who authored the content
   * - **Definition:** Indicates who or what authored the content.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: Reference | undefined;

  /**
   * ArtifactAssessment.content.path Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What the comment is directed to
   * - **Definition:** A URI that points to what the comment is about, such as a line of text in the CQL, or a specific element in a resource.
   * - **Comment:** The target element is used to point the comment to aspect of the artifact, such as a text range within a CQL library (e.g. #content?0:0-120:80).
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private path?: UriType[] | undefined;

  /**
   * ArtifactAssessment.content.relatedArtifact Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional information
   * - **Definition:** Additional related artifacts that provide supporting documentation, additional evidence, or further information related to the content.
   * - **FHIR Type:** `RelatedArtifact`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private relatedArtifact?: RelatedArtifact[] | undefined;

  /**
   * ArtifactAssessment.content.freeToShare Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Acceptable to publicly share the resource content
   * - **Definition:** Acceptable to publicly share the comment, classifier or rating.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private freeToShare?: BooleanType | undefined;

  /**
   * ArtifactAssessment.content.component Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Contained content
   * - **Definition:** If the informationType is container, the components of the content.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private component?: ArtifactAssessmentContentComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `informationType` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentInformationTypeEnum }
   */
  public getInformationTypeEnumType(): EnumCodeType | undefined {
    return this.informationType;
  }

  /**
   * Assigns the provided EnumCodeType value to the `informationType` property.
   *
   * @param enumType - the `informationType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentInformationTypeEnum }
   */
  public setInformationTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ArtifactAssessment.content.informationType';
      assertEnumCodeType<ArtifactassessmentInformationTypeEnum>(enumType, ArtifactassessmentInformationTypeEnum, errMsgPrefix);
      this.informationType = enumType;
    } else {
      this.informationType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `informationType` property exists and has a value; `false` otherwise
   */
  public hasInformationTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.informationType) && !this.informationType.isEmpty() && this.informationType.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `informationType` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentInformationTypeEnum }
   */
  public getInformationTypeElement(): CodeType | undefined {
    if (this.informationType === undefined) {
      return undefined;
    }
    return this.informationType as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `informationType` property.
   *
   * @param element - the `informationType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentInformationTypeEnum }
   */
  public setInformationTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ArtifactAssessment.content.informationType; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.informationType = new EnumCodeType(element, this.artifactassessmentInformationTypeEnum);
    } else {
      this.informationType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `informationType` property exists and has a value; `false` otherwise
   */
  public hasInformationTypeElement(): boolean {
    return this.hasInformationTypeEnumType();
  }

  /**
   * @returns the `informationType` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentInformationTypeEnum }
   */
  public getInformationType(): fhirCode | undefined {
    if (this.informationType === undefined) {
      return undefined;
    }
    return this.informationType.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `informationType` property.
   *
   * @param value - the `informationType` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ArtifactassessmentInformationTypeEnum }
   */
  public setInformationType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ArtifactAssessment.content.informationType; Provided value is not an instance of fhirCode.`;
      this.informationType = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.artifactassessmentInformationTypeEnum);
    } else {
      this.informationType = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `informationType` property exists and has a value; `false` otherwise
   */
  public hasInformationType(): boolean {
    return this.hasInformationTypeEnumType();
  }

  /**
   * @returns the `summary` property value as a MarkdownType object if defined; else an empty MarkdownType object
   */
  public getSummaryElement(): MarkdownType {
    return this.summary ?? new MarkdownType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `summary` property.
   *
   * @param element - the `summary` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSummaryElement(element: MarkdownType | undefined): this {
    if (isDefined<MarkdownType>(element)) {
      const optErrMsg = `Invalid ArtifactAssessment.content.summary; Provided element is not an instance of MarkdownType.`;
      assertFhirType<MarkdownType>(element, MarkdownType, optErrMsg);
      this.summary = element;
    } else {
      this.summary = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `summary` property exists and has a value; `false` otherwise
   */
  public hasSummaryElement(): boolean {
    return isDefined<MarkdownType>(this.summary) && !this.summary.isEmpty();
  }

  /**
   * @returns the `summary` property value as a fhirMarkdown if defined; else undefined
   */
  public getSummary(): fhirMarkdown | undefined {
    return this.summary?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `summary` property.
   *
   * @param value - the `summary` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setSummary(value: fhirMarkdown | undefined): this {
    if (isDefined<fhirMarkdown>(value)) {
      const optErrMsg = `Invalid ArtifactAssessment.content.summary (${String(value)})`;
      this.summary = new MarkdownType(parseFhirPrimitiveData(value, fhirMarkdownSchema, optErrMsg));
    } else {
      this.summary = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `summary` property exists and has a value; `false` otherwise
   */
  public hasSummary(): boolean {
    return this.hasSummaryElement();
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
      const optErrMsg = `Invalid ArtifactAssessment.content.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ArtifactAssessment.content.classifier; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ArtifactAssessment.content.classifier; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ArtifactAssessment.content.quantity; Provided element is not an instance of Quantity.`;
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
   * @returns the `author` property value as a Reference object; else an empty Reference object
   */
  public getAuthor(): Reference {
    return this.author ?? new Reference();
  }

  /**
   * Assigns the provided Author object value to the `author` property.
   *
   * @decorator `@ReferenceTargets('ArtifactAssessment.content.author', ['Patient','Practitioner','PractitionerRole','Organization','Device',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ArtifactAssessment.content.author', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Device',
  ])
  public setAuthor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.author = value;
    } else {
      this.author = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `author` property exists and has a value; `false` otherwise
   */
  public hasAuthor(): boolean {
    return isDefined<Reference>(this.author) && !this.author.isEmpty();
  }

  /**
   * @returns the `path` property value as a UriType array
   */
  public getPathElement(): UriType[] {
    return this.path ?? ([] as UriType[]);
  }

  /**
   * Assigns the provided UriType array value to the `path` property.
   *
   * @param element - the `path` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPathElement(element: UriType[] | undefined): this {
    if (isDefinedList<UriType>(element)) {
      const optErrMsg = `Invalid ArtifactAssessment.content.path; Provided value array has an element that is not an instance of UriType.`;
      assertFhirTypeList<UriType>(element, UriType, optErrMsg);
      this.path = element;
    } else {
      this.path = undefined;
    }
    return this;
  }

  /**
   * Add the provided UriType value to the `path` array property.
   *
   * @param element - the `path` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPathElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid ArtifactAssessment.content.path; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.initPath();
      this.path?.push(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `path` property exists and has a value; `false` otherwise
   */
  public hasPathElement(): boolean {
    return isDefinedList<UriType>(this.path) && this.path.some((item: UriType) => !item.isEmpty());
  }

  /**
   * @returns the `path` property value as a fhirUri array
   */
  public getPath(): fhirUri[] {
    this.initPath();
    const pathValues = [] as fhirUri[];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const arrayItem of this.path!) {
      const value = arrayItem.getValue();
      if (value !== undefined) {
        pathValues.push(value);
      }
    }
    return pathValues;
  }

  /**
   * Assigns the provided primitive value array to the `path` property.
   *
   * @param value - the `path` value array
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setPath(value: fhirUri[] | undefined): this {
    if (isDefinedList<fhirUri>(value)) {
      const pathElements = [] as UriType[];
      for (const pathValue of value) {
        const optErrMsg = `Invalid ArtifactAssessment.content.path array item (${String(pathValue)})`;
        const element = new UriType(parseFhirPrimitiveData(pathValue, fhirUriSchema, optErrMsg));
        pathElements.push(element);
      }
      this.path = pathElements;
    } else {
      this.path = undefined;
    }
    return this;
  }

  /**
   * Add the provided primitive value to the `path` array property.
   *
   * @param value - the `path` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public addPath(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid ArtifactAssessment.content.path array item (${String(value)})`;
      const element = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
      this.initPath();
      this.addPathElement(element);
    }
    return this;
  }

  /**
   * @returns `true` if the `path` property exists and has a value; `false` otherwise
   */
  public hasPath(): boolean {
    return this.hasPathElement();
  }

  /**
   * Initialize the `path` property
   */
  private initPath(): void {
    if (!this.hasPath()) {
      this.path = [] as UriType[];
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
      const optErrMsg = `Invalid ArtifactAssessment.content.relatedArtifact; Provided value array has an element that is not an instance of RelatedArtifact.`;
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
      const optErrMsg = `Invalid ArtifactAssessment.content.relatedArtifact; Provided element is not an instance of RelatedArtifact.`;
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
   * @returns the `freeToShare` property value as a BooleanType object if defined; else an empty BooleanType object
   */
  public getFreeToShareElement(): BooleanType {
    return this.freeToShare ?? new BooleanType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `freeToShare` property.
   *
   * @param element - the `freeToShare` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFreeToShareElement(element: BooleanType | undefined): this {
    if (isDefined<BooleanType>(element)) {
      const optErrMsg = `Invalid ArtifactAssessment.content.freeToShare; Provided element is not an instance of BooleanType.`;
      assertFhirType<BooleanType>(element, BooleanType, optErrMsg);
      this.freeToShare = element;
    } else {
      this.freeToShare = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `freeToShare` property exists and has a value; `false` otherwise
   */
  public hasFreeToShareElement(): boolean {
    return isDefined<BooleanType>(this.freeToShare) && !this.freeToShare.isEmpty();
  }

  /**
   * @returns the `freeToShare` property value as a fhirBoolean if defined; else undefined
   */
  public getFreeToShare(): fhirBoolean | undefined {
    return this.freeToShare?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `freeToShare` property.
   *
   * @param value - the `freeToShare` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setFreeToShare(value: fhirBoolean | undefined): this {
    if (isDefined<fhirBoolean>(value)) {
      const optErrMsg = `Invalid ArtifactAssessment.content.freeToShare (${String(value)})`;
      this.freeToShare = new BooleanType(parseFhirPrimitiveData(value, fhirBooleanSchema, optErrMsg));
    } else {
      this.freeToShare = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `freeToShare` property exists and has a value; `false` otherwise
   */
  public hasFreeToShare(): boolean {
    return this.hasFreeToShareElement();
  }

  /**
   * @returns the `component` property value as a ArtifactAssessmentContentComponent array
   */
  public getComponent(): ArtifactAssessmentContentComponent[] {
    return this.component ?? ([] as ArtifactAssessmentContentComponent[]);
  }

  /**
   * Assigns the provided ArtifactAssessmentContentComponent array value to the `component` property.
   *
   * @param value - the `component` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setComponent(value: ArtifactAssessmentContentComponent[] | undefined): this {
    if (isDefinedList<ArtifactAssessmentContentComponent>(value)) {
      const optErrMsg = `Invalid ArtifactAssessment.content.component; Provided value array has an element that is not an instance of ArtifactAssessmentContentComponent.`;
      assertFhirTypeList<ArtifactAssessmentContentComponent>(value, ArtifactAssessmentContentComponent, optErrMsg);
      this.component = value;
    } else {
      this.component = undefined;
    }
    return this;
  }

  /**
   * Add the provided ArtifactAssessmentContentComponent value to the `component` array property.
   *
   * @param value - the `component` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addComponent(value: ArtifactAssessmentContentComponent | undefined): this {
    if (isDefined<ArtifactAssessmentContentComponent>(value)) {
      const optErrMsg = `Invalid ArtifactAssessment.content.component; Provided element is not an instance of ArtifactAssessmentContentComponent.`;
      assertFhirType<ArtifactAssessmentContentComponent>(value, ArtifactAssessmentContentComponent, optErrMsg);
      this.initComponent();
      this.component?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `component` property exists and has a value; `false` otherwise
   */
  public hasComponent(): boolean {
    return isDefinedList<ArtifactAssessmentContentComponent>(this.component) && this.component.some((item: ArtifactAssessmentContentComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `component` property
   */
  private initComponent(): void {
    if(!this.hasComponent()) {
      this.component = [] as ArtifactAssessmentContentComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ArtifactAssessment.content';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.informationType,
      this.summary,
      this.type_,
      this.classifier,
      this.quantity,
      this.author,
      this.path,
      this.relatedArtifact,
      this.freeToShare,
      this.component,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ArtifactAssessmentContentComponent {
    const dest = new ArtifactAssessmentContentComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ArtifactAssessmentContentComponent): void {
    super.copyValues(dest);
    dest.informationType = this.informationType?.copy();
    dest.summary = this.summary?.copy();
    dest.type_ = this.type_?.copy();
    const classifierList = copyListValues<CodeableConcept>(this.classifier);
    dest.classifier = classifierList.length === 0 ? undefined : classifierList;
    dest.quantity = this.quantity?.copy();
    dest.author = this.author?.copy();
    const pathList = copyListValues<UriType>(this.path);
    dest.path = pathList.length === 0 ? undefined : pathList;
    const relatedArtifactList = copyListValues<RelatedArtifact>(this.relatedArtifact);
    dest.relatedArtifact = relatedArtifactList.length === 0 ? undefined : relatedArtifactList;
    dest.freeToShare = this.freeToShare?.copy();
    const componentList = copyListValues<ArtifactAssessmentContentComponent>(this.component);
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

    if (this.hasInformationTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getInformationTypeElement()!, 'informationType', jsonObj);
    }

    if (this.hasSummaryElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getSummaryElement(), 'summary', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasClassifier()) {
      setFhirComplexListJson(this.getClassifier(), 'classifier', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasPath()) {
      setFhirPrimitiveListJson(this.getPathElement(), 'path', jsonObj);
    }

    if (this.hasRelatedArtifact()) {
      setFhirComplexListJson(this.getRelatedArtifact(), 'relatedArtifact', jsonObj);
    }

    if (this.hasFreeToShareElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getFreeToShareElement(), 'freeToShare', jsonObj);
    }

    if (this.hasComponent()) {
      setFhirBackboneElementListJson(this.getComponent(), 'component', jsonObj);
    }

    return jsonObj;
  }
}
