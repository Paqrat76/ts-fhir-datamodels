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
 * DetectedIssue Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/DetectedIssue
 * StructureDefinition.name: DetectedIssue
 * StructureDefinition.description: Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 * StructureDefinition.fhirVersion: 4.0.1
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IDomainResource,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  StringType,
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
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Period, Reference } from '../complex-types/complex-datatypes';
import { DetectedissueSeverityEnum } from '../code-systems/DetectedissueSeverityEnum';
import { ObservationStatusEnum } from '../code-systems/ObservationStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * DetectedIssue Class
 *
 * @remarks
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 *
 * **FHIR Specification**
 * - **Short:** Clinical issue with action
 * - **Definition:** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR DetectedIssue](http://hl7.org/fhir/StructureDefinition/DetectedIssue)
 */
export class DetectedIssue extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.observationStatusEnum = new ObservationStatusEnum();
    this.detectedissueSeverityEnum = new DetectedissueSeverityEnum();

    this.status = constructorCodeValueAsEnumCodeType<ObservationStatusEnum>(
      status,
      ObservationStatusEnum,
      this.observationStatusEnum,
      'DetectedIssue.status',
    );
  }

  /**
   * Parse the provided `DetectedIssue` JSON to instantiate the DetectedIssue data model.
   *
   * @param sourceJson - JSON representing FHIR `DetectedIssue`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DetectedIssue
   * @returns DetectedIssue data model or undefined for `DetectedIssue`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): DetectedIssue | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DetectedIssue';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DetectedIssue();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'DetectedIssue');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    const classMetadata: DecoratorMetadataObject | null = DetectedIssue[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for DetectedIssue`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

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

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCode(datatype);
    }

    fieldName = 'severity';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setSeverityElement(datatype);
    }

    fieldName = 'patient';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setPatient(datatype);
    }

    fieldName = 'identified[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const identified: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setIdentified(identified);

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    fieldName = 'implicated';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addImplicated(datatype);
        }
      });
  }

    fieldName = 'evidence';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DetectedIssueEvidenceComponent | undefined = DetectedIssueEvidenceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addEvidence(component);
        }
      });
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDetailElement(datatype);
    }

    fieldName = 'reference';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setReferenceElement(datatype);
    }

    fieldName = 'mitigation';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DetectedIssueMitigationComponent | undefined = DetectedIssueMitigationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addMitigation(component);
        }
      });
    }

    return instance;
  }

  /**
   * DetectedIssue.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unique id for the detected issue
   * - **Definition:** Business identifier associated with the detected issue record.
   * - **Requirements:** Allows linking instances of the same detected issue found on different servers.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: ObservationStatus
   *
   * @see {@link ObservationStatusEnum }
   */
  private readonly observationStatusEnum: ObservationStatusEnum;

  /**
   * DetectedIssue.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** registered | preliminary | final | amended +
   * - **Definition:** Indicates the status of the detected issue.
   * - **Comment:** This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * DetectedIssue.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Issue Category, e.g. drug-drug, duplicate therapy, etc.
   * - **Definition:** Identifies the general type of issue identified.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code?: CodeableConcept | undefined;

  /**
   * FHIR CodeSystem: DetectedissueSeverity
   *
   * @see {@link DetectedissueSeverityEnum }
   */
  private readonly detectedissueSeverityEnum: DetectedissueSeverityEnum;

  /**
   * DetectedIssue.severity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** high | moderate | low
   * - **Definition:** Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  private severity?: EnumCodeType | undefined;

  /**
   * DetectedIssue.patient Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Associated patient
   * - **Definition:** Indicates the patient whose record the detected issue is associated with.
   * - **Requirements:** While the subject could be inferred by tracing the subject of the implicated resources, it\'s useful to have a direct link for query purposes.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private patient?: Reference | undefined;

  /**
   * DetectedIssue.identified[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('DetectedIssue.identified[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When identified
   * - **Definition:** The date or period when the detected issue was initially identified.
   * - **Requirements:** No-one can be responsible for mitigation prior to the issue being identified.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('DetectedIssue.identified[x]',[
    'dateTime',
    'Period',
  ])
  private identified?: IDataType | undefined;

  /**
   * DetectedIssue.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The provider or device that identified the issue
   * - **Definition:** Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private author?: Reference | undefined;

  /**
   * DetectedIssue.implicated Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Problem resource
   * - **Definition:** Indicates the resource representing the current activity or proposed activity that is potentially problematic.
   * - **Comment:** There\'s an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private implicated?: Reference[] | undefined;

  /**
   * DetectedIssue.evidence Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting evidence
   * - **Definition:** Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private evidence?: DetectedIssueEvidenceComponent[] | undefined;

  /**
   * DetectedIssue.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description and context
   * - **Definition:** A textual explanation of the detected issue.
   * - **Comment:** Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: StringType | undefined;

  /**
   * DetectedIssue.reference Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Authority for issue
   * - **Definition:** The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reference?: UriType | undefined;

  /**
   * DetectedIssue.mitigation Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Step taken to address
   * - **Definition:** Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private mitigation?: DetectedIssueMitigationComponent[] | undefined;

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
      const optErrMsg = `Invalid DetectedIssue.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid DetectedIssue.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `status` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid DetectedIssue.status`;
      assertEnumCodeType<ObservationStatusEnum>(enumType, ObservationStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DetectedIssue.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.observationStatusEnum);
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
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
   * @see CodeSystem Enumeration: {@link ObservationStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DetectedIssue.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.observationStatusEnum);
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
      const optErrMsg = `Invalid DetectedIssue.code; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `severity` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public getSeverityEnumType(): EnumCodeType | undefined {
    return this.severity;
  }

  /**
   * Assigns the provided EnumCodeType value to the `severity` property.
   *
   * @param enumType - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public setSeverityEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid DetectedIssue.severity';
      assertEnumCodeType<DetectedissueSeverityEnum>(enumType, DetectedissueSeverityEnum, errMsgPrefix);
      this.severity = enumType;
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverityEnumType(): boolean {
    return isDefined<EnumCodeType>(this.severity) && !this.severity.isEmpty() && this.severity.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `severity` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public getSeverityElement(): CodeType | undefined {
    if (this.severity === undefined) {
      return undefined;
    }
    return this.severity as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `severity` property.
   *
   * @param element - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public setSeverityElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DetectedIssue.severity; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.severity = new EnumCodeType(element, this.detectedissueSeverityEnum);
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverityElement(): boolean {
    return this.hasSeverityEnumType();
  }

  /**
   * @returns the `severity` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public getSeverity(): fhirCode | undefined {
    if (this.severity === undefined) {
      return undefined;
    }
    return this.severity.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `severity` property.
   *
   * @param value - the `severity` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link DetectedissueSeverityEnum }
   */
  public setSeverity(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DetectedIssue.severity; Provided value is not an instance of fhirCode.`;
      this.severity = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.detectedissueSeverityEnum);
    } else {
      this.severity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `severity` property exists and has a value; `false` otherwise
   */
  public hasSeverity(): boolean {
    return this.hasSeverityEnumType();
  }

  /**
   * @returns the `patient` property value as a Reference object; else an empty Reference object
   */
  public getPatient(): Reference {
    return this.patient ?? new Reference();
  }

  /**
   * Assigns the provided Patient object value to the `patient` property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.patient', ['Patient',])`
   *
   * @param value - the `patient` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.patient', [
    'Patient',
  ])
  public setPatient(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.patient = value;
    } else {
      this.patient = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `patient` property exists and has a value; `false` otherwise
   */
  public hasPatient(): boolean {
    return isDefined<Reference>(this.patient) && !this.patient.isEmpty();
  }

  /**
   * @returns the `identified` property value as a DataType object if defined; else undefined
   */
  public getIdentified(): IDataType | undefined {
    return this.identified;
  }

  /**
   * Assigns the provided DataType object value to the `identified` property.
   *
   * @decorator `@ChoiceDataTypes('DetectedIssue.identified[x]')`
   *
   * @param value - the `identified` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('DetectedIssue.identified[x]')
  public setIdentified(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.identified = value;
    } else {
      this.identified = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `identified` property exists and has a value; `false` otherwise
   */
  public hasIdentified(): boolean {
    return isDefined<IDataType>(this.identified) && !this.identified.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `identified` property value as a DateTimeType object if defined; else undefined
   */
  public getIdentifiedDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.identified)) {
      return undefined;
    }
    if (!(this.identified instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for DetectedIssue.identified[x]: Expected DateTimeType but encountered ${this.identified.fhirType()}`,
      );
    }
    return this.identified;
  }

  /**
   * @returns `true` if the `identified` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasIdentifiedDateTimeType(): boolean {
    return this.hasIdentified() && this.identified instanceof DateTimeType;
  }

  /**
   * @returns the `identified` property value as a Period object if defined; else undefined
   */
  public getIdentifiedPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.identified)) {
      return undefined;
    }
    if (!(this.identified instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for DetectedIssue.identified[x]: Expected Period but encountered ${this.identified.fhirType()}`,
      );
    }
    return this.identified;
  }

  /**
   * @returns `true` if the `identified` property exists as a Period and has a value; `false` otherwise
   */
  public hasIdentifiedPeriod(): boolean {
    return this.hasIdentified() && this.identified instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `author` property value as a Reference object; else an empty Reference object
   */
  public getAuthor(): Reference {
    return this.author ?? new Reference();
  }

  /**
   * Assigns the provided Author object value to the `author` property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.author', ['Practitioner','PractitionerRole','Device',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.author', [
    'Practitioner',
  
    'PractitionerRole',
  
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
   * @returns the `implicated` property value as a Reference array
   */
  public getImplicated(): Reference[] {
    return this.implicated ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `implicated` property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.implicated', ['Resource',])`
   *
   * @param value - the `implicated` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.implicated', [
    'Resource',
  ])
  public setImplicated(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.implicated = value;
    } else {
      this.implicated = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `implicated` array property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.implicated', ['Resource',])`
   *
   * @param value - the `implicated` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.implicated', [
    'Resource',
  ])
  public addImplicated(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initImplicated();
      this.implicated?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `implicated` property exists and has a value; `false` otherwise
   */
  public hasImplicated(): boolean {
    return isDefinedList<Reference>(this.implicated) && this.implicated.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `implicated` property
   */
  private initImplicated(): void {
    if (!this.hasImplicated()) {
      this.implicated = [] as Reference[];
    }
  }

  /**
   * @returns the `evidence` property value as a DetectedIssueEvidenceComponent array
   */
  public getEvidence(): DetectedIssueEvidenceComponent[] {
    return this.evidence ?? ([] as DetectedIssueEvidenceComponent[]);
  }

  /**
   * Assigns the provided DetectedIssueEvidenceComponent array value to the `evidence` property.
   *
   * @param value - the `evidence` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setEvidence(value: DetectedIssueEvidenceComponent[] | undefined): this {
    if (isDefinedList<DetectedIssueEvidenceComponent>(value)) {
      const optErrMsg = `Invalid DetectedIssue.evidence; Provided value array has an element that is not an instance of DetectedIssueEvidenceComponent.`;
      assertFhirTypeList<DetectedIssueEvidenceComponent>(value, DetectedIssueEvidenceComponent, optErrMsg);
      this.evidence = value;
    } else {
      this.evidence = undefined;
    }
    return this;
  }

  /**
   * Add the provided DetectedIssueEvidenceComponent value to the `evidence` array property.
   *
   * @param value - the `evidence` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addEvidence(value: DetectedIssueEvidenceComponent | undefined): this {
    if (isDefined<DetectedIssueEvidenceComponent>(value)) {
      const optErrMsg = `Invalid DetectedIssue.evidence; Provided element is not an instance of DetectedIssueEvidenceComponent.`;
      assertFhirType<DetectedIssueEvidenceComponent>(value, DetectedIssueEvidenceComponent, optErrMsg);
      this.initEvidence();
      this.evidence?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `evidence` property exists and has a value; `false` otherwise
   */
  public hasEvidence(): boolean {
    return isDefinedList<DetectedIssueEvidenceComponent>(this.evidence) && this.evidence.some((item: DetectedIssueEvidenceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `evidence` property
   */
  private initEvidence(): void {
    if(!this.hasEvidence()) {
      this.evidence = [] as DetectedIssueEvidenceComponent[];
    }
  }

  /**
   * @returns the `detail` property value as a StringType object if defined; else an empty StringType object
   */
  public getDetailElement(): StringType {
    return this.detail ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `detail` property.
   *
   * @param element - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetailElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid DetectedIssue.detail; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.detail = element;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetailElement(): boolean {
    return isDefined<StringType>(this.detail) && !this.detail.isEmpty();
  }

  /**
   * @returns the `detail` property value as a fhirString if defined; else undefined
   */
  public getDetail(): fhirString | undefined {
    return this.detail?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `detail` property.
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDetail(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid DetectedIssue.detail (${String(value)})`;
      this.detail = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return this.hasDetailElement();
  }

  /**
   * @returns the `reference` property value as a UriType object if defined; else an empty UriType object
   */
  public getReferenceElement(): UriType {
    return this.reference ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `reference` property.
   *
   * @param element - the `reference` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReferenceElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid DetectedIssue.reference; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.reference = element;
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReferenceElement(): boolean {
    return isDefined<UriType>(this.reference) && !this.reference.isEmpty();
  }

  /**
   * @returns the `reference` property value as a fhirUri if defined; else undefined
   */
  public getReference(): fhirUri | undefined {
    return this.reference?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `reference` property.
   *
   * @param value - the `reference` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReference(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid DetectedIssue.reference (${String(value)})`;
      this.reference = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.reference = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `reference` property exists and has a value; `false` otherwise
   */
  public hasReference(): boolean {
    return this.hasReferenceElement();
  }

  /**
   * @returns the `mitigation` property value as a DetectedIssueMitigationComponent array
   */
  public getMitigation(): DetectedIssueMitigationComponent[] {
    return this.mitigation ?? ([] as DetectedIssueMitigationComponent[]);
  }

  /**
   * Assigns the provided DetectedIssueMitigationComponent array value to the `mitigation` property.
   *
   * @param value - the `mitigation` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMitigation(value: DetectedIssueMitigationComponent[] | undefined): this {
    if (isDefinedList<DetectedIssueMitigationComponent>(value)) {
      const optErrMsg = `Invalid DetectedIssue.mitigation; Provided value array has an element that is not an instance of DetectedIssueMitigationComponent.`;
      assertFhirTypeList<DetectedIssueMitigationComponent>(value, DetectedIssueMitigationComponent, optErrMsg);
      this.mitigation = value;
    } else {
      this.mitigation = undefined;
    }
    return this;
  }

  /**
   * Add the provided DetectedIssueMitigationComponent value to the `mitigation` array property.
   *
   * @param value - the `mitigation` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMitigation(value: DetectedIssueMitigationComponent | undefined): this {
    if (isDefined<DetectedIssueMitigationComponent>(value)) {
      const optErrMsg = `Invalid DetectedIssue.mitigation; Provided element is not an instance of DetectedIssueMitigationComponent.`;
      assertFhirType<DetectedIssueMitigationComponent>(value, DetectedIssueMitigationComponent, optErrMsg);
      this.initMitigation();
      this.mitigation?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `mitigation` property exists and has a value; `false` otherwise
   */
  public hasMitigation(): boolean {
    return isDefinedList<DetectedIssueMitigationComponent>(this.mitigation) && this.mitigation.some((item: DetectedIssueMitigationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `mitigation` property
   */
  private initMitigation(): void {
    if(!this.hasMitigation()) {
      this.mitigation = [] as DetectedIssueMitigationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DetectedIssue';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.code,
      this.severity,
      this.patient,
      this.identified,
      this.author,
      this.implicated,
      this.evidence,
      this.detail,
      this.reference,
      this.mitigation,
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
  public override copy(): DetectedIssue {
    const dest = new DetectedIssue();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DetectedIssue): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    dest.code = this.code?.copy();
    dest.severity = this.severity?.copy();
    dest.patient = this.patient?.copy();
    dest.identified = this.identified?.copy() as IDataType;
    dest.author = this.author?.copy();
    const implicatedList = copyListValues<Reference>(this.implicated);
    dest.implicated = implicatedList.length === 0 ? undefined : implicatedList;
    const evidenceList = copyListValues<DetectedIssueEvidenceComponent>(this.evidence);
    dest.evidence = evidenceList.length === 0 ? undefined : evidenceList;
    dest.detail = this.detail?.copy();
    dest.reference = this.reference?.copy();
    const mitigationList = copyListValues<DetectedIssueMitigationComponent>(this.mitigation);
    dest.mitigation = mitigationList.length === 0 ? undefined : mitigationList;
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

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    } else {
      jsonObj['status'] = null;
    }

    if (this.hasCode()) {
      setFhirComplexJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasSeverityElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getSeverityElement()!, 'severity', jsonObj);
    }

    if (this.hasPatient()) {
      setFhirComplexJson(this.getPatient(), 'patient', jsonObj);
    }

    if (this.hasIdentified()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getIdentified()!, 'identified', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    if (this.hasImplicated()) {
      setFhirComplexListJson(this.getImplicated(), 'implicated', jsonObj);
    }

    if (this.hasEvidence()) {
      setFhirBackboneElementListJson(this.getEvidence(), 'evidence', jsonObj);
    }

    if (this.hasDetailElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDetailElement(), 'detail', jsonObj);
    }

    if (this.hasReferenceElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getReferenceElement(), 'reference', jsonObj);
    }

    if (this.hasMitigation()) {
      setFhirBackboneElementListJson(this.getMitigation(), 'mitigation', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * DetectedIssueEvidenceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Supporting evidence
 * - **Definition:** Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 *
 * @category Data Models: Resource
 * @see [FHIR DetectedIssue](http://hl7.org/fhir/StructureDefinition/DetectedIssue)
 */
export class DetectedIssueEvidenceComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `DetectedIssueEvidenceComponent` JSON to instantiate the DetectedIssueEvidenceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DetectedIssueEvidenceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DetectedIssueEvidenceComponent
   * @returns DetectedIssueEvidenceComponent data model or undefined for `DetectedIssueEvidenceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DetectedIssueEvidenceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DetectedIssueEvidenceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DetectedIssueEvidenceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'code';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCode(datatype);
        }
      });
    }

    fieldName = 'detail';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addDetail(datatype);
        }
      });
  }

    return instance;
  }

  /**
   * DetectedIssue.evidence.code Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Manifestation
   * - **Definition:** A manifestation that led to the recording of this detected issue.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private code?: CodeableConcept[] | undefined;

  /**
   * DetectedIssue.evidence.detail Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Supporting information
   * - **Definition:** Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private detail?: Reference[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `code` property value as a CodeableConcept array
   */
  public getCode(): CodeableConcept[] {
    return this.code ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `code` property.
   *
   * @param value - the `code` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DetectedIssue.evidence.code; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.code = value;
    } else {
      this.code = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `code` array property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCode(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DetectedIssue.evidence.code; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initCode();
      this.code?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefinedList<CodeableConcept>(this.code) && this.code.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `code` property
   */
  private initCode(): void {
    if(!this.hasCode()) {
      this.code = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `detail` property value as a Reference array
   */
  public getDetail(): Reference[] {
    return this.detail ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `detail` property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.evidence.detail', ['Resource',])`
   *
   * @param value - the `detail` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.evidence.detail', [
    'Resource',
  ])
  public setDetail(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.detail = value;
    } else {
      this.detail = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `detail` array property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.evidence.detail', ['Resource',])`
   *
   * @param value - the `detail` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.evidence.detail', [
    'Resource',
  ])
  public addDetail(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initDetail();
      this.detail?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `detail` property exists and has a value; `false` otherwise
   */
  public hasDetail(): boolean {
    return isDefinedList<Reference>(this.detail) && this.detail.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `detail` property
   */
  private initDetail(): void {
    if (!this.hasDetail()) {
      this.detail = [] as Reference[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DetectedIssue.evidence';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.code,
      this.detail,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DetectedIssueEvidenceComponent {
    const dest = new DetectedIssueEvidenceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DetectedIssueEvidenceComponent): void {
    super.copyValues(dest);
    const codeList = copyListValues<CodeableConcept>(this.code);
    dest.code = codeList.length === 0 ? undefined : codeList;
    const detailList = copyListValues<Reference>(this.detail);
    dest.detail = detailList.length === 0 ? undefined : detailList;
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
      setFhirComplexListJson(this.getCode(), 'code', jsonObj);
    }

    if (this.hasDetail()) {
      setFhirComplexListJson(this.getDetail(), 'detail', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * DetectedIssueMitigationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Step taken to address
 * - **Definition:** Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 *
 * @category Data Models: Resource
 * @see [FHIR DetectedIssue](http://hl7.org/fhir/StructureDefinition/DetectedIssue)
 */
export class DetectedIssueMitigationComponent extends BackboneElement implements IBackboneElement {
  constructor(action: CodeableConcept | null = null) {
    super();

    this.action = null;
    if (isDefined<CodeableConcept>(action)) {
      this.setAction(action);
    }
  }

  /**
   * Parse the provided `DetectedIssueMitigationComponent` JSON to instantiate the DetectedIssueMitigationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DetectedIssueMitigationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DetectedIssueMitigationComponent
   * @returns DetectedIssueMitigationComponent data model or undefined for `DetectedIssueMitigationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DetectedIssueMitigationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DetectedIssueMitigationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DetectedIssueMitigationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    fieldName = 'action';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setAction(null);
      } else {
        instance.setAction(datatype);
      }
    } else {
      instance.setAction(null);
    }

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
    }

    fieldName = 'author';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAuthor(datatype);
    }

    return instance;
  }

  /**
   * DetectedIssue.mitigation.action Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What mitigation?
   * - **Definition:** Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.
   * - **Comment:** The "text" component can be used for detail or when no appropriate code exists.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private action: CodeableConcept | null;

  /**
   * DetectedIssue.mitigation.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date committed
   * - **Definition:** Indicates when the mitigating action was documented.
   * - **Comment:** This might not be the same as when the mitigating step was actually taken.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateTimeType | undefined;

  /**
   * DetectedIssue.mitigation.author Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who is committing?
   * - **Definition:** Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private author?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `action` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getAction(): CodeableConcept {
    return this.action ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `action` property.
   *
   * @param value - the `action` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAction(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DetectedIssue.mitigation.action; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.action = value;
    } else {
      this.action = null;
    }
    return this;
  }

  /**
   * @returns `true` if the `action` property exists and has a value; `false` otherwise
   */
  public hasAction(): boolean {
    return isDefined<CodeableConcept>(this.action) && !this.action.isEmpty();
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
      const optErrMsg = `Invalid DetectedIssue.mitigation.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid DetectedIssue.mitigation.date (${String(value)})`;
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
   * @returns the `author` property value as a Reference object; else an empty Reference object
   */
  public getAuthor(): Reference {
    return this.author ?? new Reference();
  }

  /**
   * Assigns the provided Author object value to the `author` property.
   *
   * @decorator `@ReferenceTargets('DetectedIssue.mitigation.author', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `author` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DetectedIssue.mitigation.author', [
    'Practitioner',
  
    'PractitionerRole',
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DetectedIssue.mitigation';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.action,
      this.date,
      this.author,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.action, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DetectedIssueMitigationComponent {
    const dest = new DetectedIssueMitigationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DetectedIssueMitigationComponent): void {
    super.copyValues(dest);
    dest.action = this.action ? this.action.copy() : null;
    dest.date = this.date?.copy();
    dest.author = this.author?.copy();
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

    if (this.hasAction()) {
      setFhirComplexJson(this.getAction(), 'action', jsonObj);
    } else {
      jsonObj['action'] = null;
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasAuthor()) {
      setFhirComplexJson(this.getAuthor(), 'author', jsonObj);
    }

    return jsonObj;
  }
}
