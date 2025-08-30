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
 * QuestionnaireResponse Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse
 * StructureDefinition.name: QuestionnaireResponse
 * StructureDefinition.description: A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 * StructureDefinition.fhirVersion: 4.0.1
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
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  IntegerType,
  InvalidTypeError,
  JSON,
  PrimitiveType,
  ReferenceTargets,
  StringType,
  TimeType,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCanonical,
  fhirCanonicalSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirString,
  fhirStringSchema,
  fhirUri,
  fhirUriSchema,
  getPrimitiveTypeJson,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Attachment, Coding, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { QuestionnaireAnswersStatusEnum } from '../code-systems/QuestionnaireAnswersStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * QuestionnaireResponse Class
 *
 * @remarks
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 *
 * To support structured, hierarchical reporting of data gathered using digital forms and other questionnaires.
 *
 * **FHIR Specification**
 * - **Short:** A structured set of questions and their answers
 * - **Definition:** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 * - **Comment:** The QuestionnaireResponse contains enough information about the questions asked and their organization that it can be interpreted somewhat independently from the Questionnaire it is based on.  I.e. You don\'t need access to the Questionnaire in order to extract basic information from a QuestionnaireResponse.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR QuestionnaireResponse](http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse)
 */
export class QuestionnaireResponse extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.questionnaireAnswersStatusEnum = new QuestionnaireAnswersStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<QuestionnaireAnswersStatusEnum>(
      status,
      QuestionnaireAnswersStatusEnum,
      this.questionnaireAnswersStatusEnum,
      'QuestionnaireResponse.status',
    );
  }

  /**
   * Parse the provided `QuestionnaireResponse` JSON to instantiate the QuestionnaireResponse data model.
   *
   * @param sourceJson - JSON representing FHIR `QuestionnaireResponse`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to QuestionnaireResponse
   * @returns QuestionnaireResponse data model or undefined for `QuestionnaireResponse`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): QuestionnaireResponse | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'QuestionnaireResponse';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new QuestionnaireResponse();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'QuestionnaireResponse');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'identifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setIdentifier(datatype);
    }

    fieldName = 'basedOn';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addBasedOn(datatype);
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

    fieldName = 'questionnaire';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setQuestionnaireElement(datatype);
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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'authored';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setAuthoredElement(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    fieldName = 'source';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSource(datatype);
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: QuestionnaireResponseItemComponent | undefined = QuestionnaireResponseItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addItem(component);
        }
      });
    }

    return instance;
  }

  /**
   * QuestionnaireResponse.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique id for this set of answers
   * - **Definition:** A business identifier assigned to a particular completed (or partially completed) questionnaire.
   * - **Requirements:** Used for tracking, registration and other business purposes.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier | undefined;

  /**
   * QuestionnaireResponse.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Request fulfilled by this QuestionnaireResponse
   * - **Definition:** The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
   * - **Requirements:** Supports traceability of responsibility for the action and allows linkage of an action to the recommendations acted upon.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private basedOn?: Reference[] | undefined;

  /**
   * QuestionnaireResponse.partOf Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Part of this action
   * - **Definition:** A procedure or observation that this questionnaire was performed as part of the execution of.  For example, the surgery a checklist was executed as part of.
   * - **Comment:** Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the child questionnaire.  For relationships to referrals, and other types of requests, use basedOn.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private partOf?: Reference[] | undefined;

  /**
   * QuestionnaireResponse.questionnaire Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Form being answered
   * - **Definition:** The Questionnaire that defines and organizes the questions for which answers are being provided.
   * - **Comment:** If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).
   * - **Requirements:** Needed to allow editing of the questionnaire response in a manner that enforces the constraints of the original form.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Questionnaire',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private questionnaire?: CanonicalType | undefined;

  /**
   * FHIR CodeSystem: QuestionnaireAnswersStatus
   *
   * @see {@link QuestionnaireAnswersStatusEnum }
   */
  private readonly questionnaireAnswersStatusEnum: QuestionnaireAnswersStatusEnum;

  /**
   * QuestionnaireResponse.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** in-progress | completed | amended | entered-in-error | stopped
   * - **Definition:** The position of the questionnaire response within its overall lifecycle.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **Requirements:** The information on Questionnaire resources  may possibly be gathered during multiple sessions and altered after considered being finished.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireAnswersStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * QuestionnaireResponse.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The subject of the questions
   * - **Definition:** The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information.
   * - **Comment:** If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.
   * - **Requirements:** Allows linking the answers to the individual the answers describe.  May also affect access control.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * QuestionnaireResponse.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter created as part of
   * - **Definition:** The Encounter during which this questionnaire response was created or to which the creation of this record is tightly associated.
   * - **Comment:** This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.
   * - **Requirements:** Provides context for the information that was captured.  May also affect access control.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private encounter?: Reference | undefined;

  /**
   * QuestionnaireResponse.authored Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date the answers were gathered
   * - **Definition:** The date and/or time that this set of answers were last changed.
   * - **Comment:** May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured. This element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.
   * - **Requirements:** Clinicians need to be able to check the date that the information in the questionnaire was collected, to derive the context of the answers.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private authored?: DateTimeType | undefined;

  /**
   * QuestionnaireResponse.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Person who received and recorded the answers
   * - **Definition:** Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system.
   * - **Comment:** Mapping a subject\'s answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation.  Authoring by device would indicate that some portion of the questionnaire had been auto-populated.
   * - **Requirements:** Need to know who interpreted the subject\'s answers to the questions in the questionnaire, and selected the appropriate options for answers.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: Reference | undefined;

  /**
   * QuestionnaireResponse.source Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The person who answered the questions
   * - **Definition:** The person who answered the questions about the subject.
   * - **Comment:** If not specified, no inference can be made about who provided the data.
   * - **Requirements:** When answering questions about a subject that is minor, incapable of answering or an animal, another human source may answer the questions.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/RelatedPerson',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private source?: Reference | undefined;

  /**
   * QuestionnaireResponse.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Groups and questions
   * - **Definition:** A group or question item from the original questionnaire for which answers are provided.
   * - **Comment:** Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: QuestionnaireResponseItemComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
      const optErrMsg = `Invalid QuestionnaireResponse.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `basedOn` property value as a Reference array
   */
  public getBasedOn(): Reference[] {
    return this.basedOn ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `basedOn` property.
   *
   * @decorator `@ReferenceTargets('QuestionnaireResponse.basedOn', ['CarePlan','ServiceRequest',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('QuestionnaireResponse.basedOn', [
    'CarePlan',
  
    'ServiceRequest',
  ])
  public setBasedOn(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.basedOn = value;
    } else {
      this.basedOn = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `basedOn` array property.
   *
   * @decorator `@ReferenceTargets('QuestionnaireResponse.basedOn', ['CarePlan','ServiceRequest',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('QuestionnaireResponse.basedOn', [
    'CarePlan',
  
    'ServiceRequest',
  ])
  public addBasedOn(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initBasedOn();
      this.basedOn?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `basedOn` property exists and has a value; `false` otherwise
   */
  public hasBasedOn(): boolean {
    return isDefinedList<Reference>(this.basedOn) && this.basedOn.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `basedOn` property
   */
  private initBasedOn(): void {
    if (!this.hasBasedOn()) {
      this.basedOn = [] as Reference[];
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
   * @decorator `@ReferenceTargets('QuestionnaireResponse.partOf', ['Observation','Procedure',])`
   *
   * @param value - the `partOf` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('QuestionnaireResponse.partOf', [
    'Observation',
  
    'Procedure',
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
   * @decorator `@ReferenceTargets('QuestionnaireResponse.partOf', ['Observation','Procedure',])`
   *
   * @param value - the `partOf` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('QuestionnaireResponse.partOf', [
    'Observation',
  
    'Procedure',
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
   * @returns the `questionnaire` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getQuestionnaireElement(): CanonicalType {
    return this.questionnaire ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `questionnaire` property.
   *
   * @param element - the `questionnaire` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQuestionnaireElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid QuestionnaireResponse.questionnaire; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.questionnaire = element;
    } else {
      this.questionnaire = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `questionnaire` property exists and has a value; `false` otherwise
   */
  public hasQuestionnaireElement(): boolean {
    return isDefined<CanonicalType>(this.questionnaire) && !this.questionnaire.isEmpty();
  }

  /**
   * @returns the `questionnaire` property value as a fhirCanonical if defined; else undefined
   */
  public getQuestionnaire(): fhirCanonical | undefined {
    return this.questionnaire?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `questionnaire` property.
   *
   * @param value - the `questionnaire` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setQuestionnaire(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.questionnaire (${String(value)})`;
      this.questionnaire = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.questionnaire = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `questionnaire` property exists and has a value; `false` otherwise
   */
  public hasQuestionnaire(): boolean {
    return this.hasQuestionnaireElement();
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link QuestionnaireAnswersStatusEnum }
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
   * @see CodeSystem Enumeration: {@link QuestionnaireAnswersStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid QuestionnaireResponse.status`;
      assertEnumCodeType<QuestionnaireAnswersStatusEnum>(enumType, QuestionnaireAnswersStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link QuestionnaireAnswersStatusEnum }
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
   * @see CodeSystem Enumeration: {@link QuestionnaireAnswersStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid QuestionnaireResponse.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.questionnaireAnswersStatusEnum);
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
   * @see CodeSystem Enumeration: {@link QuestionnaireAnswersStatusEnum }
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
   * @see CodeSystem Enumeration: {@link QuestionnaireAnswersStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.questionnaireAnswersStatusEnum);
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('QuestionnaireResponse.subject', ['Resource',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('QuestionnaireResponse.subject', [
    'Resource',
  ])
  public setSubject(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
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
    return isDefined<Reference>(this.subject) && !this.subject.isEmpty();
  }

  /**
   * @returns the `encounter` property value as a Reference object; else an empty Reference object
   */
  public getEncounter(): Reference {
    return this.encounter ?? new Reference();
  }

  /**
   * Assigns the provided Encounter object value to the `encounter` property.
   *
   * @decorator `@ReferenceTargets('QuestionnaireResponse.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('QuestionnaireResponse.encounter', [
    'Encounter',
  ])
  public setEncounter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.encounter = value;
    } else {
      this.encounter = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `encounter` property exists and has a value; `false` otherwise
   */
  public hasEncounter(): boolean {
    return isDefined<Reference>(this.encounter) && !this.encounter.isEmpty();
  }

  /**
   * @returns the `authored` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getAuthoredElement(): DateTimeType {
    return this.authored ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `authored` property.
   *
   * @param element - the `authored` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthoredElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid QuestionnaireResponse.authored; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.authored = element;
    } else {
      this.authored = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authored` property exists and has a value; `false` otherwise
   */
  public hasAuthoredElement(): boolean {
    return isDefined<DateTimeType>(this.authored) && !this.authored.isEmpty();
  }

  /**
   * @returns the `authored` property value as a fhirDateTime if defined; else undefined
   */
  public getAuthored(): fhirDateTime | undefined {
    return this.authored?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `authored` property.
   *
   * @param value - the `authored` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setAuthored(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.authored (${String(value)})`;
      this.authored = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.authored = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `authored` property exists and has a value; `false` otherwise
   */
  public hasAuthored(): boolean {
    return this.hasAuthoredElement();
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
   * @decorator `@ReferenceTargets('QuestionnaireResponse.author', ['Device','Practitioner','PractitionerRole','Patient','RelatedPerson','Organization',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('QuestionnaireResponse.author', [
    'Device',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'Patient',
  
    'RelatedPerson',
  
    'Organization',
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
   * @returns the `source` property value as a Reference object; else an empty Reference object
   */
  public getSource(): Reference {
    return this.source ?? new Reference();
  }

  /**
   * Assigns the provided Source object value to the `source` property.
   *
   * @decorator `@ReferenceTargets('QuestionnaireResponse.source', ['Patient','Practitioner','PractitionerRole','RelatedPerson',])`
   *
   * @param value - the `source` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('QuestionnaireResponse.source', [
    'Patient',
  
    'Practitioner',
  
    'PractitionerRole',
  
    'RelatedPerson',
  ])
  public setSource(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.source = value;
    } else {
      this.source = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  public hasSource(): boolean {
    return isDefined<Reference>(this.source) && !this.source.isEmpty();
  }

  /**
   * @returns the `item` property value as a QuestionnaireResponseItemComponent array
   */
  public getItem(): QuestionnaireResponseItemComponent[] {
    return this.item ?? ([] as QuestionnaireResponseItemComponent[]);
  }

  /**
   * Assigns the provided QuestionnaireResponseItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: QuestionnaireResponseItemComponent[] | undefined): this {
    if (isDefinedList<QuestionnaireResponseItemComponent>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item; Provided value array has an element that is not an instance of QuestionnaireResponseItemComponent.`;
      assertFhirTypeList<QuestionnaireResponseItemComponent>(value, QuestionnaireResponseItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided QuestionnaireResponseItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: QuestionnaireResponseItemComponent | undefined): this {
    if (isDefined<QuestionnaireResponseItemComponent>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item; Provided element is not an instance of QuestionnaireResponseItemComponent.`;
      assertFhirType<QuestionnaireResponseItemComponent>(value, QuestionnaireResponseItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<QuestionnaireResponseItemComponent>(this.item) && this.item.some((item: QuestionnaireResponseItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as QuestionnaireResponseItemComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'QuestionnaireResponse';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.basedOn,
      this.partOf,
      this.questionnaire,
      this.status,
      this.subject,
      this.encounter,
      this.authored,
      this.author,
      this.source,
      this.item,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): QuestionnaireResponse {
    const dest = new QuestionnaireResponse();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: QuestionnaireResponse): void {
    super.copyValues(dest);
    dest.identifier = this.identifier?.copy();
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    const partOfList = copyListValues<Reference>(this.partOf);
    dest.partOf = partOfList.length === 0 ? undefined : partOfList;
    dest.questionnaire = this.questionnaire?.copy();
    dest.status = this.status ? this.status.copy() : null;
    dest.subject = this.subject?.copy();
    dest.encounter = this.encounter?.copy();
    dest.authored = this.authored?.copy();
    dest.author = this.author?.copy();
    dest.source = this.source?.copy();
    const itemList = copyListValues<QuestionnaireResponseItemComponent>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
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
      setFhirComplexJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasPartOf()) {
      setFhirComplexListJson(this.getPartOf(), 'partOf', jsonObj);
    }

    if (this.hasQuestionnaireElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getQuestionnaireElement(), 'questionnaire', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasAuthoredElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getAuthoredElement(), 'authored', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasSource()) {
      setFhirComplexJson(this.getSource(), 'source', jsonObj);
    }

    if (this.hasItem()) {
      setFhirBackboneElementListJson(this.getItem(), 'item', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * QuestionnaireResponseItemComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Groups and questions
 * - **Definition:** A group or question item from the original questionnaire for which answers are provided.
 * - **Comment:** Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
 *
 * @category Data Models: Resource
 * @see [FHIR QuestionnaireResponse](http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse)
 */
export class QuestionnaireResponseItemComponent extends BackboneElement implements IBackboneElement {
  constructor(linkId: StringType | fhirString | null = null) {
    super();

    this.linkId = null;
    if (isDefined<StringType | fhirString>(linkId)) {
      if (linkId instanceof PrimitiveType) {
        this.setLinkIdElement(linkId);
      } else {
        this.setLinkId(linkId);
      }
    }
  }

  /**
   * Parse the provided `QuestionnaireResponseItemComponent` JSON to instantiate the QuestionnaireResponseItemComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `QuestionnaireResponseItemComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to QuestionnaireResponseItemComponent
   * @returns QuestionnaireResponseItemComponent data model or undefined for `QuestionnaireResponseItemComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): QuestionnaireResponseItemComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'QuestionnaireResponseItemComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new QuestionnaireResponseItemComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'linkId';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setLinkId(null);
      } else {
        instance.setLinkIdElement(datatype);
      }
    } else {
      instance.setLinkId(null);
    }

    fieldName = 'definition';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setDefinitionElement(datatype);
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    fieldName = 'answer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: QuestionnaireResponseItemAnswerComponent | undefined = QuestionnaireResponseItemAnswerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAnswer(component);
        }
      });
    }

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: QuestionnaireResponseItemComponent | undefined = QuestionnaireResponseItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addItem(component);
        }
      });
    }

    return instance;
  }

  /**
   * QuestionnaireResponse.item.linkId Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Pointer to specific item from Questionnaire
   * - **Definition:** The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   * - **Requirements:** Items can repeat in the answers, so a direct 1..1 correspondence by position might not exist - requiring correspondence by identifier.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private linkId: StringType | null;

  /**
   * QuestionnaireResponse.item.definition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** ElementDefinition - details for the item
   * - **Definition:** A reference to an [ElementDefinition](https://hl7.org/fhir/elementdefinition.html) that provides the details for the item.
   * - **Comment:** The ElementDefinition must be in a [StructureDefinition](https://hl7.org/fhir/structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x]. There is no need for this element if the item pointed to by the linkId has a definition listed.
   * - **Requirements:** A common pattern is to define a set of data elements, and then build multiple different questionnaires for different circumstances to gather the data. This element provides traceability to the common definition.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private definition?: UriType | undefined;

  /**
   * QuestionnaireResponse.item.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name for group or question text
   * - **Definition:** Text that is displayed above the contents of the group or as the text of the question being answered.
   * - **Requirements:** Allows the questionnaire response to be read without access to the questionnaire.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private text?: StringType | undefined;

  /**
   * QuestionnaireResponse.item.answer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The response(s) to the question
   * - **Definition:** The respondent\'s answer(s) to the question.
   * - **Comment:** The value is nested because we cannot have a repeating structure that has variable type.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private answer?: QuestionnaireResponseItemAnswerComponent[] | undefined;

  /**
   * QuestionnaireResponse.item.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Nested questionnaire response items
   * - **Definition:** Questions or sub-groups nested beneath a question or group.
   * - **Requirements:** Reports can consist of complex nested groups.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: QuestionnaireResponseItemComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `linkId` property value as a StringType object if defined; else an empty StringType object
   */
  public getLinkIdElement(): StringType {
    return this.linkId ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `linkId` property.
   *
   * @param element - the `linkId` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkIdElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.linkId; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.linkId = element;
    } else {
      this.linkId = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `linkId` property exists and has a value; `false` otherwise
   */
  public hasLinkIdElement(): boolean {
    return isDefined<StringType>(this.linkId) && !this.linkId.isEmpty();
  }

  /**
   * @returns the `linkId` property value as a fhirString if defined; else null
   */
  public getLinkId(): fhirString | null {
    if (this.linkId?.getValue() === undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.linkId.getValue()!;
  }

  /**
   * Assigns the provided primitive value to the `linkId` property.
   *
   * @param value - the `linkId` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setLinkId(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.linkId (${String(value)})`;
      this.linkId = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.linkId = null;
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
   * @returns the `definition` property value as a UriType object if defined; else an empty UriType object
   */
  public getDefinitionElement(): UriType {
    return this.definition ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `definition` property.
   *
   * @param element - the `definition` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinitionElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.definition; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.definition = element;
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinitionElement(): boolean {
    return isDefined<UriType>(this.definition) && !this.definition.isEmpty();
  }

  /**
   * @returns the `definition` property value as a fhirUri if defined; else undefined
   */
  public getDefinition(): fhirUri | undefined {
    return this.definition?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `definition` property.
   *
   * @param value - the `definition` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDefinition(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.definition (${String(value)})`;
      this.definition = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.definition = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `definition` property exists and has a value; `false` otherwise
   */
  public hasDefinition(): boolean {
    return this.hasDefinitionElement();
  }

  /**
   * @returns the `text` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextElement(): StringType {
    return this.text ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTextElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.text; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.text = element;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else undefined
   */
  public getText(): fhirString | undefined {
    return this.text?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setText(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.text (${String(value)})`;
      this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /**
   * @returns the `answer` property value as a QuestionnaireResponseItemAnswerComponent array
   */
  public getAnswer(): QuestionnaireResponseItemAnswerComponent[] {
    return this.answer ?? ([] as QuestionnaireResponseItemAnswerComponent[]);
  }

  /**
   * Assigns the provided QuestionnaireResponseItemAnswerComponent array value to the `answer` property.
   *
   * @param value - the `answer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAnswer(value: QuestionnaireResponseItemAnswerComponent[] | undefined): this {
    if (isDefinedList<QuestionnaireResponseItemAnswerComponent>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.answer; Provided value array has an element that is not an instance of QuestionnaireResponseItemAnswerComponent.`;
      assertFhirTypeList<QuestionnaireResponseItemAnswerComponent>(value, QuestionnaireResponseItemAnswerComponent, optErrMsg);
      this.answer = value;
    } else {
      this.answer = undefined;
    }
    return this;
  }

  /**
   * Add the provided QuestionnaireResponseItemAnswerComponent value to the `answer` array property.
   *
   * @param value - the `answer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAnswer(value: QuestionnaireResponseItemAnswerComponent | undefined): this {
    if (isDefined<QuestionnaireResponseItemAnswerComponent>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.answer; Provided element is not an instance of QuestionnaireResponseItemAnswerComponent.`;
      assertFhirType<QuestionnaireResponseItemAnswerComponent>(value, QuestionnaireResponseItemAnswerComponent, optErrMsg);
      this.initAnswer();
      this.answer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `answer` property exists and has a value; `false` otherwise
   */
  public hasAnswer(): boolean {
    return isDefinedList<QuestionnaireResponseItemAnswerComponent>(this.answer) && this.answer.some((item: QuestionnaireResponseItemAnswerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `answer` property
   */
  private initAnswer(): void {
    if(!this.hasAnswer()) {
      this.answer = [] as QuestionnaireResponseItemAnswerComponent[];
    }
  }

  /**
   * @returns the `item` property value as a QuestionnaireResponseItemComponent array
   */
  public getItem(): QuestionnaireResponseItemComponent[] {
    return this.item ?? ([] as QuestionnaireResponseItemComponent[]);
  }

  /**
   * Assigns the provided QuestionnaireResponseItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: QuestionnaireResponseItemComponent[] | undefined): this {
    if (isDefinedList<QuestionnaireResponseItemComponent>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.item; Provided value array has an element that is not an instance of QuestionnaireResponseItemComponent.`;
      assertFhirTypeList<QuestionnaireResponseItemComponent>(value, QuestionnaireResponseItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided QuestionnaireResponseItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: QuestionnaireResponseItemComponent | undefined): this {
    if (isDefined<QuestionnaireResponseItemComponent>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.item; Provided element is not an instance of QuestionnaireResponseItemComponent.`;
      assertFhirType<QuestionnaireResponseItemComponent>(value, QuestionnaireResponseItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<QuestionnaireResponseItemComponent>(this.item) && this.item.some((item: QuestionnaireResponseItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as QuestionnaireResponseItemComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'QuestionnaireResponse.item';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.linkId,
      this.definition,
      this.text,
      this.answer,
      this.item,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.linkId, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): QuestionnaireResponseItemComponent {
    const dest = new QuestionnaireResponseItemComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: QuestionnaireResponseItemComponent): void {
    super.copyValues(dest);
    dest.linkId = this.linkId ? this.linkId.copy() : null;
    dest.definition = this.definition?.copy();
    dest.text = this.text?.copy();
    const answerList = copyListValues<QuestionnaireResponseItemAnswerComponent>(this.answer);
    dest.answer = answerList.length === 0 ? undefined : answerList;
    const itemList = copyListValues<QuestionnaireResponseItemComponent>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
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

    if (this.hasLinkIdElement()) {
      setFhirPrimitiveJson<fhirString>(this.getLinkIdElement(), 'linkId', jsonObj);
    } else {
      jsonObj['linkId'] = null;
    }

    if (this.hasDefinitionElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getDefinitionElement(), 'definition', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    if (this.hasAnswer()) {
      setFhirBackboneElementListJson(this.getAnswer(), 'answer', jsonObj);
    }

    if (this.hasItem()) {
      setFhirBackboneElementListJson(this.getItem(), 'item', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * QuestionnaireResponseItemAnswerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** The response(s) to the question
 * - **Definition:** The respondent\'s answer(s) to the question.
 * - **Comment:** The value is nested because we cannot have a repeating structure that has variable type.
 *
 * @category Data Models: Resource
 * @see [FHIR QuestionnaireResponse](http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse)
 */
export class QuestionnaireResponseItemAnswerComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `QuestionnaireResponseItemAnswerComponent` JSON to instantiate the QuestionnaireResponseItemAnswerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `QuestionnaireResponseItemAnswerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to QuestionnaireResponseItemAnswerComponent
   * @returns QuestionnaireResponseItemAnswerComponent data model or undefined for `QuestionnaireResponseItemAnswerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): QuestionnaireResponseItemAnswerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'QuestionnaireResponseItemAnswerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new QuestionnaireResponseItemAnswerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = QuestionnaireResponseItemAnswerComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for QuestionnaireResponseItemAnswerComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setValue(value);

    fieldName = 'item';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: QuestionnaireResponseItemComponent | undefined = QuestionnaireResponseItemComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addItem(component);
        }
      });
    }

    return instance;
  }

  /**
   * QuestionnaireResponse.item.answer.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('QuestionnaireResponse.item.answer.value[x]', ['boolean','decimal','integer','date','dateTime','time','string','uri','Attachment','Coding','Quantity','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Single-valued answer to the question
   * - **Definition:** The answer (or one of the answers) provided by the respondent to the question.
   * - **Comment:** More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   * - **Requirements:** Ability to retain a single-valued answer to a question.
   * - **FHIR Types:**
   *     'boolean',
   *     'decimal',
   *     'integer',
   *     'date',
   *     'dateTime',
   *     'time',
   *     'string',
   *     'uri',
   *     'Attachment',
   *     'Coding',
   *     'Quantity',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('QuestionnaireResponse.item.answer.value[x]',[
    'boolean',
    'decimal',
    'integer',
    'date',
    'dateTime',
    'time',
    'string',
    'uri',
    'Attachment',
    'Coding',
    'Quantity',
    'Reference',
  ])
  private value?: IDataType | undefined;

  /**
   * QuestionnaireResponse.item.answer.item Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Nested groups and questions
   * - **Definition:** Nested groups and/or questions found within this particular answer.
   * - **Requirements:** It is useful to have "sub-questions", questions which normally appear when certain answers are given and which collect additional details.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private item?: QuestionnaireResponseItemComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('QuestionnaireResponse.item.answer.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('QuestionnaireResponse.item.answer.value[x]')
  public setValue(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.value = value;
    } else {
      this.value = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  public hasValue(): boolean {
    return isDefined<IDataType>(this.value) && !this.value.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `value` property value as a BooleanType object if defined; else undefined
   */
  public getValueBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && this.value instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a DecimalType object if defined; else undefined
   */
  public getValueDecimalType(): DecimalType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasValueDecimalType(): boolean {
    return this.hasValue() && this.value instanceof DecimalType;
  }

  /**
   * @returns the `value` property value as a IntegerType object if defined; else undefined
   */
  public getValueIntegerType(): IntegerType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && this.value instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a DateType object if defined; else undefined
   */
  public getValueDateType(): DateType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && this.value instanceof DateType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else undefined
   */
  public getValueDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && this.value instanceof DateTimeType;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else undefined
   */
  public getValueTimeType(): TimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && this.value instanceof TimeType;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else undefined
   */
  public getValueStringType(): StringType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && this.value instanceof StringType;
  }

  /**
   * @returns the `value` property value as a UriType object if defined; else undefined
   */
  public getValueUriType(): UriType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected UriType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a UriType and has a value; `false` otherwise
   */
  public hasValueUriType(): boolean {
    return this.hasValue() && this.value instanceof UriType;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else undefined
   */
  public getValueAttachment(): Attachment | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && this.value instanceof Attachment;
  }

  /**
   * @returns the `value` property value as a Coding object if defined; else undefined
   */
  public getValueCoding(): Coding | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected Coding but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Coding and has a value; `false` otherwise
   */
  public hasValueCoding(): boolean {
    return this.hasValue() && this.value instanceof Coding;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else undefined
   */
  public getValueQuantity(): Quantity | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && this.value instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a Reference object if defined; else undefined
   */
  public getValueReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for QuestionnaireResponse.item.answer.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && this.value instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `item` property value as a QuestionnaireResponseItemComponent array
   */
  public getItem(): QuestionnaireResponseItemComponent[] {
    return this.item ?? ([] as QuestionnaireResponseItemComponent[]);
  }

  /**
   * Assigns the provided QuestionnaireResponseItemComponent array value to the `item` property.
   *
   * @param value - the `item` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setItem(value: QuestionnaireResponseItemComponent[] | undefined): this {
    if (isDefinedList<QuestionnaireResponseItemComponent>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.answer.item; Provided value array has an element that is not an instance of QuestionnaireResponseItemComponent.`;
      assertFhirTypeList<QuestionnaireResponseItemComponent>(value, QuestionnaireResponseItemComponent, optErrMsg);
      this.item = value;
    } else {
      this.item = undefined;
    }
    return this;
  }

  /**
   * Add the provided QuestionnaireResponseItemComponent value to the `item` array property.
   *
   * @param value - the `item` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addItem(value: QuestionnaireResponseItemComponent | undefined): this {
    if (isDefined<QuestionnaireResponseItemComponent>(value)) {
      const optErrMsg = `Invalid QuestionnaireResponse.item.answer.item; Provided element is not an instance of QuestionnaireResponseItemComponent.`;
      assertFhirType<QuestionnaireResponseItemComponent>(value, QuestionnaireResponseItemComponent, optErrMsg);
      this.initItem();
      this.item?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `item` property exists and has a value; `false` otherwise
   */
  public hasItem(): boolean {
    return isDefinedList<QuestionnaireResponseItemComponent>(this.item) && this.item.some((item: QuestionnaireResponseItemComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `item` property
   */
  private initItem(): void {
    if(!this.hasItem()) {
      this.item = [] as QuestionnaireResponseItemComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'QuestionnaireResponse.item.answer';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.value,
      this.item,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): QuestionnaireResponseItemAnswerComponent {
    const dest = new QuestionnaireResponseItemAnswerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: QuestionnaireResponseItemAnswerComponent): void {
    super.copyValues(dest);
    dest.value = this.value?.copy() as IDataType;
    const itemList = copyListValues<QuestionnaireResponseItemComponent>(this.item);
    dest.item = itemList.length === 0 ? undefined : itemList;
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

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (this.hasItem()) {
      setFhirBackboneElementListJson(this.getItem(), 'item', jsonObj);
    }

    return jsonObj;
  }
}
