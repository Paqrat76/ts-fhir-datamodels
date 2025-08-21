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
 * GuidanceResponse Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/GuidanceResponse
 * StructureDefinition.name: GuidanceResponse
 * StructureDefinition.description: A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
import {
  CanonicalType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IDataType,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  InvalidTypeError,
  JSON,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  UriType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  parseFhirPrimitiveData,
  setFhirComplexJson,
  setFhirComplexListJson,
  setFhirPrimitiveJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, DataRequirement, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { GuidanceResponseStatusEnum } from '../code-systems/GuidanceResponseStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * GuidanceResponse Class
 *
 * @remarks
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 *
 * The GuidanceResponse resource supports recording the results of decision support interactions, reportability determination for public health, as well as the communication of additional data requirements for subsequent interactions.
 *
 * **FHIR Specification**
 * - **Short:** The formal response to a guidance request
 * - **Definition:** A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR GuidanceResponse](http://hl7.org/fhir/StructureDefinition/GuidanceResponse)
 */
export class GuidanceResponse extends DomainResource implements IDomainResource {
  constructor(module_: IDataType | null = null, status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.guidanceResponseStatusEnum = new GuidanceResponseStatusEnum();

    this.module_ = null;
    if (isDefined<IDataType>(module_)) {
      this.setModule(module_);
    }


    this.status = constructorCodeValueAsEnumCodeType<GuidanceResponseStatusEnum>(
      status,
      GuidanceResponseStatusEnum,
      this.guidanceResponseStatusEnum,
      'GuidanceResponse.status',
    );
  }

  /**
   * Parse the provided `GuidanceResponse` JSON to instantiate the GuidanceResponse data model.
   *
   * @param sourceJson - JSON representing FHIR `GuidanceResponse`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GuidanceResponse
   * @returns GuidanceResponse data model or undefined for `GuidanceResponse`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): GuidanceResponse | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GuidanceResponse';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GuidanceResponse();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'GuidanceResponse');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = GuidanceResponse[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for GuidanceResponse`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    const missingReqdProperties: string[] = [];

    fieldName = 'requestIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRequestIdentifier(datatype);
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

    fieldName = 'module[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const module: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    if (module === undefined) {
      missingReqdProperties.push(sourceField);
    } else {
      instance.setModule(module);
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

    fieldName = 'occurrenceDateTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setOccurrenceDateTimeElement(datatype);
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPerformer(datatype);
    }

    fieldName = 'reasonCode';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReasonCode(datatype);
        }
      });
    }

    fieldName = 'reasonReference';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReasonReference(datatype);
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

    fieldName = 'evaluationMessage';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addEvaluationMessage(datatype);
        }
      });
  }

    fieldName = 'outputParameters';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setOutputParameters(datatype);
    }

    fieldName = 'result';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setResult(datatype);
    }

    fieldName = 'dataRequirement';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: DataRequirement | undefined = DataRequirement.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDataRequirement(datatype);
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
   * GuidanceResponse.requestIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The identifier of the request associated with this response, if any
   * - **Definition:** The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private requestIdentifier?: Identifier | undefined;

  /**
   * GuidanceResponse.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier
   * - **Definition:** Allows a service to provide  unique, business identifiers for the response.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * GuidanceResponse.module[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('GuidanceResponse.module[x]', ['uri','canonical','CodeableConcept',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What guidance was requested
   * - **Definition:** An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   * - **FHIR Types:**
   *     'uri',
   *     'canonical',
   *     'CodeableConcept',
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('GuidanceResponse.module[x]',[
    'uri',
    'canonical',
    'CodeableConcept',
  ])
  private module_: IDataType | null;

  /**
   * FHIR CodeSystem: GuidanceResponseStatus
   *
   * @see {@link GuidanceResponseStatusEnum }
   */
  private readonly guidanceResponseStatusEnum: GuidanceResponseStatusEnum;

  /**
   * GuidanceResponse.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** success | data-requested | data-required | in-progress | failure | entered-in-error
   * - **Definition:** The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link GuidanceResponseStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * GuidanceResponse.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Patient the request was performed for
   * - **Definition:** The patient for which the request was processed.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private subject?: Reference | undefined;

  /**
   * GuidanceResponse.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Encounter during which the response was returned
   * - **Definition:** The encounter during which this response was created or to which the creation of this record is tightly associated.
   * - **Comment:** This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official copmletion of an encounter but still be tied to the context of the encounter.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Encounter',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private encounter?: Reference | undefined;

  /**
   * GuidanceResponse.occurrenceDateTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the guidance response was processed
   * - **Definition:** Indicates when the guidance response was processed.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private occurrenceDateTime?: DateTimeType | undefined;

  /**
   * GuidanceResponse.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Device returning the guidance
   * - **Definition:** Provides a reference to the device that performed the guidance.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performer?: Reference | undefined;

  /**
   * GuidanceResponse.reasonCode Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why guidance is needed
   * - **Definition:** Describes the reason for the guidance response in coded or textual form.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonCode?: CodeableConcept[] | undefined;

  /**
   * GuidanceResponse.reasonReference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why guidance is needed
   * - **Definition:** Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *       'http://hl7.org/fhir/StructureDefinition/DiagnosticReport',
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reasonReference?: Reference[] | undefined;

  /**
   * GuidanceResponse.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional notes about the response
   * - **Definition:** Provides a mechanism to communicate additional information about the response.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * GuidanceResponse.evaluationMessage Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Messages resulting from the evaluation of the artifact or artifacts
   * - **Definition:** Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/OperationOutcome',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private evaluationMessage?: Reference[] | undefined;

  /**
   * GuidanceResponse.outputParameters Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The output parameters of the evaluation, if any
   * - **Definition:** The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Parameters',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private outputParameters?: Reference | undefined;

  /**
   * GuidanceResponse.result Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Proposed actions, if any
   * - **Definition:** The actions, if any, produced by the evaluation of the artifact.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/CarePlan',
   *       'http://hl7.org/fhir/StructureDefinition/RequestGroup',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private result?: Reference | undefined;

  /**
   * GuidanceResponse.dataRequirement Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additional required data
   * - **Definition:** If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
   * - **FHIR Type:** `DataRequirement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private dataRequirement?: DataRequirement[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `requestIdentifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getRequestIdentifier(): Identifier {
    return this.requestIdentifier ?? new Identifier();
  }

  /**
   * Assigns the provided RequestIdentifier object value to the `requestIdentifier` property.
   *
   * @param value - the `requestIdentifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setRequestIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid GuidanceResponse.requestIdentifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.requestIdentifier = value;
    } else {
      this.requestIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `requestIdentifier` property exists and has a value; `false` otherwise
   */
  public hasRequestIdentifier(): boolean {
    return isDefined<Identifier>(this.requestIdentifier) && !this.requestIdentifier.isEmpty();
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
      const optErrMsg = `Invalid GuidanceResponse.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid GuidanceResponse.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `module_` property value as a DataType object; else null
   */
  public getModule(): IDataType | null {
    return this.module_;
  }

  /**
   * Assigns the provided DataType object value to the `module_` property.
   *
   * @decorator `@ChoiceDataTypes('GuidanceResponse.module[x]')`
   *
   * @param value - the `module_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('GuidanceResponse.module[x]')
  public setModule(value: IDataType): this {
    assertIsDefined<IDataType>(value, `GuidanceResponse.module[x] is required`);
    // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
    this.module_ = value;
    return this;
  }

  /**
   * @returns `true` if the `module_` property exists and has a value; `false` otherwise
   */
  public hasModule(): boolean {
    return isDefined<IDataType>(this.module_) && !this.module_.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `module_` property value as a UriType object if defined; else null
   */
  public getModuleUriType(): UriType | null {
    if (!isDefined<IDataType>(this.module_)) {
      return null;
    }
    if (!(this.module_ instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for GuidanceResponse.module[x]: Expected UriType but encountered ${this.module_.fhirType()}`,
      );
    }
    return this.module_;
  }

  /**
   * @returns `true` if the `` property exists as a UriType and has a value; `false` otherwise
   */
  public hasModuleUriType(): boolean {
    return this.hasModule() && this.module_ instanceof UriType;
  }

  /**
   * @returns the `module_` property value as a CanonicalType object if defined; else null
   */
  public getModuleCanonicalType(): CanonicalType | null {
    if (!isDefined<IDataType>(this.module_)) {
      return null;
    }
    if (!(this.module_ instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for GuidanceResponse.module[x]: Expected CanonicalType but encountered ${this.module_.fhirType()}`,
      );
    }
    return this.module_;
  }

  /**
   * @returns `true` if the `` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasModuleCanonicalType(): boolean {
    return this.hasModule() && this.module_ instanceof CanonicalType;
  }

  /**
   * @returns the `module_` property value as a CodeableConcept object if defined; else null
   */
  public getModuleCodeableConcept(): CodeableConcept | null {
    if (!isDefined<IDataType>(this.module_)) {
      return null;
    }
    if (!(this.module_ instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for GuidanceResponse.module[x]: Expected CodeableConcept but encountered ${this.module_.fhirType()}`,
      );
    }
    return this.module_;
  }

  /**
   * @returns `true` if the `` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasModuleCodeableConcept(): boolean {
    return this.hasModule() && this.module_ instanceof CodeableConcept;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link GuidanceResponseStatusEnum }
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
   * @see CodeSystem Enumeration: {@link GuidanceResponseStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType): this {
    assertIsDefined<EnumCodeType>(enumType, `GuidanceResponse.status is required`);
    const errMsgPrefix = `Invalid GuidanceResponse.status`;
    assertEnumCodeType<GuidanceResponseStatusEnum>(enumType, GuidanceResponseStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link GuidanceResponseStatusEnum }
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
   * @see CodeSystem Enumeration: {@link GuidanceResponseStatusEnum }
   */
  public setStatusElement(element: CodeType): this {
    assertIsDefined<CodeType>(element, `GuidanceResponse.status is required`);
    const optErrMsg = `Invalid GuidanceResponse.status; Provided value is not an instance of CodeType.`;
    assertFhirType<CodeType>(element, CodeType, optErrMsg);
    this.status = new EnumCodeType(element, this.guidanceResponseStatusEnum);
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
   * @see CodeSystem Enumeration: {@link GuidanceResponseStatusEnum }
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
   * @see CodeSystem Enumeration: {@link GuidanceResponseStatusEnum }
   */
  public setStatus(value: fhirCode): this {
    assertIsDefined<fhirCode>(value, `GuidanceResponse.status is required`);
    const optErrMsg = `Invalid GuidanceResponse.status (${String(value)})`;
    this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.guidanceResponseStatusEnum);
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
   * @decorator `@ReferenceTargets('GuidanceResponse.subject', ['Patient','Group',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GuidanceResponse.subject', [
    'Patient',
  
    'Group',
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
   * @decorator `@ReferenceTargets('GuidanceResponse.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GuidanceResponse.encounter', [
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
   * @returns the `occurrenceDateTime` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getOccurrenceDateTimeElement(): DateTimeType {
    return this.occurrenceDateTime ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `occurrenceDateTime` property.
   *
   * @param element - the `occurrenceDateTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOccurrenceDateTimeElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid GuidanceResponse.occurrenceDateTime; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.occurrenceDateTime = element;
    } else {
      this.occurrenceDateTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrenceDateTime` property exists and has a value; `false` otherwise
   */
  public hasOccurrenceDateTimeElement(): boolean {
    return isDefined<DateTimeType>(this.occurrenceDateTime) && !this.occurrenceDateTime.isEmpty();
  }

  /**
   * @returns the `occurrenceDateTime` property value as a fhirDateTime if defined; else undefined
   */
  public getOccurrenceDateTime(): fhirDateTime | undefined {
    return this.occurrenceDateTime?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `occurrenceDateTime` property.
   *
   * @param value - the `occurrenceDateTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setOccurrenceDateTime(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid GuidanceResponse.occurrenceDateTime (${String(value)})`;
      this.occurrenceDateTime = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.occurrenceDateTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `occurrenceDateTime` property exists and has a value; `false` otherwise
   */
  public hasOccurrenceDateTime(): boolean {
    return this.hasOccurrenceDateTimeElement();
  }

  /**
   * @returns the `performer` property value as a Reference object; else an empty Reference object
   */
  public getPerformer(): Reference {
    return this.performer ?? new Reference();
  }

  /**
   * Assigns the provided Performer object value to the `performer` property.
   *
   * @decorator `@ReferenceTargets('GuidanceResponse.performer', ['Device',])`
   *
   * @param value - the `performer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GuidanceResponse.performer', [
    'Device',
  ])
  public setPerformer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefined<Reference>(this.performer) && !this.performer.isEmpty();
  }

  /**
   * @returns the `reasonCode` property value as a CodeableConcept array
   */
  public getReasonCode(): CodeableConcept[] {
    return this.reasonCode ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `reasonCode` property.
   *
   * @param value - the `reasonCode` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReasonCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid GuidanceResponse.reasonCode; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.reasonCode = value;
    } else {
      this.reasonCode = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `reasonCode` array property.
   *
   * @param value - the `reasonCode` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReasonCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid GuidanceResponse.reasonCode; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initReasonCode();
      this.reasonCode?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonCode` property exists and has a value; `false` otherwise
   */
  public hasReasonCode(): boolean {
    return isDefinedList<CodeableConcept>(this.reasonCode) && this.reasonCode.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `reasonCode` property
   */
  private initReasonCode(): void {
    if(!this.hasReasonCode()) {
      this.reasonCode = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `reasonReference` property value as a Reference array
   */
  public getReasonReference(): Reference[] {
    return this.reasonReference ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `reasonReference` property.
   *
   * @decorator `@ReferenceTargets('GuidanceResponse.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GuidanceResponse.reasonReference', [
    'Condition',
  
    'Observation',
  
    'DiagnosticReport',
  
    'DocumentReference',
  ])
  public setReasonReference(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.reasonReference = value;
    } else {
      this.reasonReference = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `reasonReference` array property.
   *
   * @decorator `@ReferenceTargets('GuidanceResponse.reasonReference', ['Condition','Observation','DiagnosticReport','DocumentReference',])`
   *
   * @param value - the `reasonReference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GuidanceResponse.reasonReference', [
    'Condition',
  
    'Observation',
  
    'DiagnosticReport',
  
    'DocumentReference',
  ])
  public addReasonReference(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initReasonReference();
      this.reasonReference?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reasonReference` property exists and has a value; `false` otherwise
   */
  public hasReasonReference(): boolean {
    return isDefinedList<Reference>(this.reasonReference) && this.reasonReference.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `reasonReference` property
   */
  private initReasonReference(): void {
    if (!this.hasReasonReference()) {
      this.reasonReference = [] as Reference[];
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
      const optErrMsg = `Invalid GuidanceResponse.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid GuidanceResponse.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `evaluationMessage` property value as a Reference array
   */
  public getEvaluationMessage(): Reference[] {
    return this.evaluationMessage ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `evaluationMessage` property.
   *
   * @decorator `@ReferenceTargets('GuidanceResponse.evaluationMessage', ['OperationOutcome',])`
   *
   * @param value - the `evaluationMessage` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GuidanceResponse.evaluationMessage', [
    'OperationOutcome',
  ])
  public setEvaluationMessage(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.evaluationMessage = value;
    } else {
      this.evaluationMessage = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `evaluationMessage` array property.
   *
   * @decorator `@ReferenceTargets('GuidanceResponse.evaluationMessage', ['OperationOutcome',])`
   *
   * @param value - the `evaluationMessage` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GuidanceResponse.evaluationMessage', [
    'OperationOutcome',
  ])
  public addEvaluationMessage(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initEvaluationMessage();
      this.evaluationMessage?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `evaluationMessage` property exists and has a value; `false` otherwise
   */
  public hasEvaluationMessage(): boolean {
    return isDefinedList<Reference>(this.evaluationMessage) && this.evaluationMessage.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `evaluationMessage` property
   */
  private initEvaluationMessage(): void {
    if (!this.hasEvaluationMessage()) {
      this.evaluationMessage = [] as Reference[];
    }
  }

  /**
   * @returns the `outputParameters` property value as a Reference object; else an empty Reference object
   */
  public getOutputParameters(): Reference {
    return this.outputParameters ?? new Reference();
  }

  /**
   * Assigns the provided OutputParameters object value to the `outputParameters` property.
   *
   * @decorator `@ReferenceTargets('GuidanceResponse.outputParameters', ['Parameters',])`
   *
   * @param value - the `outputParameters` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GuidanceResponse.outputParameters', [
    'Parameters',
  ])
  public setOutputParameters(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.outputParameters = value;
    } else {
      this.outputParameters = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `outputParameters` property exists and has a value; `false` otherwise
   */
  public hasOutputParameters(): boolean {
    return isDefined<Reference>(this.outputParameters) && !this.outputParameters.isEmpty();
  }

  /**
   * @returns the `result` property value as a Reference object; else an empty Reference object
   */
  public getResult(): Reference {
    return this.result ?? new Reference();
  }

  /**
   * Assigns the provided Result object value to the `result` property.
   *
   * @decorator `@ReferenceTargets('GuidanceResponse.result', ['CarePlan','RequestGroup',])`
   *
   * @param value - the `result` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GuidanceResponse.result', [
    'CarePlan',
  
    'RequestGroup',
  ])
  public setResult(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.result = value;
    } else {
      this.result = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `result` property exists and has a value; `false` otherwise
   */
  public hasResult(): boolean {
    return isDefined<Reference>(this.result) && !this.result.isEmpty();
  }

  /**
   * @returns the `dataRequirement` property value as a DataRequirement array
   */
  public getDataRequirement(): DataRequirement[] {
    return this.dataRequirement ?? ([] as DataRequirement[]);
  }

  /**
   * Assigns the provided DataRequirement array value to the `dataRequirement` property.
   *
   * @param value - the `dataRequirement` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDataRequirement(value: DataRequirement[] | undefined): this {
    if (isDefinedList<DataRequirement>(value)) {
      const optErrMsg = `Invalid GuidanceResponse.dataRequirement; Provided value array has an element that is not an instance of DataRequirement.`;
      assertFhirTypeList<DataRequirement>(value, DataRequirement, optErrMsg);
      this.dataRequirement = value;
    } else {
      this.dataRequirement = undefined;
    }
    return this;
  }

  /**
   * Add the provided DataRequirement value to the `dataRequirement` array property.
   *
   * @param value - the `dataRequirement` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDataRequirement(value: DataRequirement | undefined): this {
    if (isDefined<DataRequirement>(value)) {
      const optErrMsg = `Invalid GuidanceResponse.dataRequirement; Provided element is not an instance of DataRequirement.`;
      assertFhirType<DataRequirement>(value, DataRequirement, optErrMsg);
      this.initDataRequirement();
      this.dataRequirement?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `dataRequirement` property exists and has a value; `false` otherwise
   */
  public hasDataRequirement(): boolean {
    return isDefinedList<DataRequirement>(this.dataRequirement) && this.dataRequirement.some((item: DataRequirement) => !item.isEmpty());
  }

  /**
   * Initialize the `dataRequirement` property
   */
  private initDataRequirement(): void {
    if(!this.hasDataRequirement()) {
      this.dataRequirement = [] as DataRequirement[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'GuidanceResponse';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.requestIdentifier,
      this.identifier,
      this.module_,
      this.status,
      this.subject,
      this.encounter,
      this.occurrenceDateTime,
      this.performer,
      this.reasonCode,
      this.reasonReference,
      this.note,
      this.evaluationMessage,
      this.outputParameters,
      this.result,
      this.dataRequirement,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GuidanceResponse {
    const dest = new GuidanceResponse();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GuidanceResponse): void {
    super.copyValues(dest);
    dest.requestIdentifier = this.requestIdentifier?.copy();
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.module_ = this.module_ ? this.module_.copy() as IDataType : null;
    dest.status = this.status ? this.status.copy() : null;
    dest.subject = this.subject?.copy();
    dest.encounter = this.encounter?.copy();
    dest.occurrenceDateTime = this.occurrenceDateTime?.copy();
    dest.performer = this.performer?.copy();
    const reasonCodeList = copyListValues<CodeableConcept>(this.reasonCode);
    dest.reasonCode = reasonCodeList.length === 0 ? undefined : reasonCodeList;
    const reasonReferenceList = copyListValues<Reference>(this.reasonReference);
    dest.reasonReference = reasonReferenceList.length === 0 ? undefined : reasonReferenceList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    const evaluationMessageList = copyListValues<Reference>(this.evaluationMessage);
    dest.evaluationMessage = evaluationMessageList.length === 0 ? undefined : evaluationMessageList;
    dest.outputParameters = this.outputParameters?.copy();
    dest.result = this.result?.copy();
    const dataRequirementList = copyListValues<DataRequirement>(this.dataRequirement);
    dest.dataRequirement = dataRequirementList.length === 0 ? undefined : dataRequirementList;
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

    if (this.hasRequestIdentifier()) {
      setFhirComplexJson(this.getRequestIdentifier(), 'requestIdentifier', jsonObj);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasModule()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getModule()!, 'module', jsonObj);
    } else {
      missingReqdProperties.push(`GuidanceResponse.module[x]`);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      missingReqdProperties.push(`GuidanceResponse.status`);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasOccurrenceDateTimeElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getOccurrenceDateTimeElement(), 'occurrenceDateTime', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirComplexJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasReasonCode()) {
      setFhirComplexListJson(this.getReasonCode(), 'reasonCode', jsonObj);
    }

    if (this.hasReasonReference()) {
      setFhirComplexListJson(this.getReasonReference(), 'reasonReference', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasEvaluationMessage()) {
      setFhirComplexListJson(this.getEvaluationMessage(), 'evaluationMessage', jsonObj);
    }

    if (this.hasOutputParameters()) {
      setFhirComplexJson(this.getOutputParameters(), 'outputParameters', jsonObj);
    }

    if (this.hasResult()) {
      setFhirComplexJson(this.getResult(), 'result', jsonObj);
    }

    if (this.hasDataRequirement()) {
      setFhirComplexListJson(this.getDataRequirement(), 'dataRequirement', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

