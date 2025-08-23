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
 * Specimen Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Specimen
 * StructureDefinition.name: Specimen
 * StructureDefinition.description: A sample to be used for analysis.
 * StructureDefinition.fhirVersion: 4.3.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import { strict as assert } from 'node:assert';
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
  INSTANCE_EMPTY_ERROR_MSG,
  InvalidTypeError,
  JSON,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirDateTime,
  fhirDateTimeSchema,
  fhirString,
  fhirStringSchema,
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
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Annotation, CodeableConcept, Duration, Identifier, PARSABLE_DATATYPE_MAP, Period, Quantity, Reference } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { SpecimenStatusEnum } from '../code-systems/SpecimenStatusEnum';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Specimen Class
 *
 * @remarks
 * A sample to be used for analysis.
 *
 * **FHIR Specification**
 * - **Short:** Sample for analysis
 * - **Definition:** A sample to be used for analysis.
 * - **FHIR Version:** 4.3.0
 *
 * @category Data Models: Resource
 * @see [FHIR Specimen](http://hl7.org/fhir/StructureDefinition/Specimen)
 */
export class Specimen extends DomainResource implements IDomainResource {
  constructor() {
    super();

    this.specimenStatusEnum = new SpecimenStatusEnum();
  }

  /**
   * Parse the provided `Specimen` JSON to instantiate the Specimen data model.
   *
   * @param sourceJson - JSON representing FHIR `Specimen`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Specimen
   * @returns Specimen data model or undefined for `Specimen`
   * @throws {@link FhirError} if the provided JSON is missing required properties
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Specimen | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Specimen';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Specimen();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Specimen');
    fhirParser.processDomainResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

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

    fieldName = 'accessionIdentifier';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Identifier | undefined = Identifier.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAccessionIdentifier(datatype);
    }

    fieldName = 'status';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStatusElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSubject(datatype);
    }

    fieldName = 'receivedTime';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setReceivedTimeElement(datatype);
    }

    fieldName = 'parent';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addParent(datatype);
        }
      });
  }

    fieldName = 'request';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRequest(datatype);
        }
      });
  }

    fieldName = 'collection';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: SpecimenCollectionComponent | undefined = SpecimenCollectionComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCollection(component);
    }

    fieldName = 'processing';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SpecimenProcessingComponent | undefined = SpecimenProcessingComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addProcessing(component);
        }
      });
    }

    fieldName = 'container';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: SpecimenContainerComponent | undefined = SpecimenContainerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addContainer(component);
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

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Specimen.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** External Identifier
   * - **Definition:** Id for specimen.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Specimen.accessionIdentifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifier assigned by the lab
   * - **Definition:** The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private accessionIdentifier?: Identifier | undefined;

  /**
   * FHIR CodeSystem: SpecimenStatus
   *
   * @see {@link SpecimenStatusEnum }
   */
  private readonly specimenStatusEnum: SpecimenStatusEnum;

  /**
   * Specimen.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** available | unavailable | unsatisfactory | entered-in-error
   * - **Definition:** The availability of the specimen.
   * - **Comment:** This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labelled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link SpecimenStatusEnum }
   */
  private status?: EnumCodeType | undefined;

  /**
   * Specimen.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of material that forms the specimen
   * - **Definition:** The kind of material that forms the specimen.
   * - **Comment:** The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Specimen.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device
   * - **Definition:** Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
   * - **Requirements:** Must know the subject context.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/Location',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject?: Reference | undefined;

  /**
   * Specimen.receivedTime Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The time when specimen was received for processing
   * - **Definition:** Time when specimen was received for processing or testing.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private receivedTime?: DateTimeType | undefined;

  /**
   * Specimen.parent Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specimen from which this specimen originated
   * - **Definition:** Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.
   * - **Comment:** The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Specimen',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private parent?: Reference[] | undefined;

  /**
   * Specimen.request Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the specimen was collected
   * - **Definition:** Details concerning a service request that required a specimen to be collected.
   * - **Comment:** The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private request?: Reference[] | undefined;

  /**
   * Specimen.collection Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Collection details
   * - **Definition:** Details concerning the specimen collection.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private collection?: SpecimenCollectionComponent | undefined;

  /**
   * Specimen.processing Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Processing and processing step details
   * - **Definition:** Details concerning processing and processing steps for the specimen.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private processing?: SpecimenProcessingComponent[] | undefined;

  /**
   * Specimen.container Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Direct container of specimen (tube/slide, etc.)
   * - **Definition:** The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private container?: SpecimenContainerComponent[] | undefined;

  /**
   * Specimen.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** State of the specimen
   * - **Definition:** A mode or state of being that describes the nature of the specimen.
   * - **Comment:** Specimen condition is an observation made about the specimen.  It\'s a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
   * - **Requirements:** The specimen condition can be used to assess its quality or appropriateness for a specific test.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private condition?: CodeableConcept[] | undefined;

  /**
   * Specimen.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments
   * - **Definition:** To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

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
      const optErrMsg = `Invalid Specimen.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Specimen.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `accessionIdentifier` property value as a Identifier object if defined; else an empty Identifier object
   */
  public getAccessionIdentifier(): Identifier {
    return this.accessionIdentifier ?? new Identifier();
  }

  /**
   * Assigns the provided AccessionIdentifier object value to the `accessionIdentifier` property.
   *
   * @param value - the `accessionIdentifier` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAccessionIdentifier(value: Identifier | undefined): this {
    if (isDefined<Identifier>(value)) {
      const optErrMsg = `Invalid Specimen.accessionIdentifier; Provided element is not an instance of Identifier.`;
      assertFhirType<Identifier>(value, Identifier, optErrMsg);
      this.accessionIdentifier = value;
    } else {
      this.accessionIdentifier = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `accessionIdentifier` property exists and has a value; `false` otherwise
   */
  public hasAccessionIdentifier(): boolean {
    return isDefined<Identifier>(this.accessionIdentifier) && !this.accessionIdentifier.isEmpty();
  }

  /**
   * @returns the `status` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SpecimenStatusEnum }
   */
  public getStatusEnumType(): EnumCodeType | undefined {
    return this.status;
  }

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link SpecimenStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid Specimen.status';
      assertEnumCodeType<SpecimenStatusEnum>(enumType, SpecimenStatusEnum, errMsgPrefix);
      this.status = enumType;
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SpecimenStatusEnum }
   */
  public getStatusElement(): CodeType | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link SpecimenStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid Specimen.status; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.specimenStatusEnum);
    } else {
      this.status = undefined;
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
   * @returns the `status` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link SpecimenStatusEnum }
   */
  public getStatus(): fhirCode | undefined {
    if (this.status === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link SpecimenStatusEnum }
   */
  public setStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid Specimen.status; Provided value is not an instance of fhirCode.`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.specimenStatusEnum);
    } else {
      this.status = undefined;
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
      const optErrMsg = `Invalid Specimen.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference object; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('Specimen.subject', ['Patient','Group','Device','Substance','Location',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Specimen.subject', [
    'Patient',
  
    'Group',
  
    'Device',
  
    'Substance',
  
    'Location',
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
   * @returns the `receivedTime` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getReceivedTimeElement(): DateTimeType {
    return this.receivedTime ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `receivedTime` property.
   *
   * @param element - the `receivedTime` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReceivedTimeElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Specimen.receivedTime; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.receivedTime = element;
    } else {
      this.receivedTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `receivedTime` property exists and has a value; `false` otherwise
   */
  public hasReceivedTimeElement(): boolean {
    return isDefined<DateTimeType>(this.receivedTime) && !this.receivedTime.isEmpty();
  }

  /**
   * @returns the `receivedTime` property value as a fhirDateTime if defined; else undefined
   */
  public getReceivedTime(): fhirDateTime | undefined {
    return this.receivedTime?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `receivedTime` property.
   *
   * @param value - the `receivedTime` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setReceivedTime(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Specimen.receivedTime (${String(value)})`;
      this.receivedTime = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.receivedTime = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `receivedTime` property exists and has a value; `false` otherwise
   */
  public hasReceivedTime(): boolean {
    return this.hasReceivedTimeElement();
  }

  /**
   * @returns the `parent` property value as a Reference array
   */
  public getParent(): Reference[] {
    return this.parent ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `parent` property.
   *
   * @decorator `@ReferenceTargets('Specimen.parent', ['Specimen',])`
   *
   * @param value - the `parent` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Specimen.parent', [
    'Specimen',
  ])
  public setParent(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.parent = value;
    } else {
      this.parent = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `parent` array property.
   *
   * @decorator `@ReferenceTargets('Specimen.parent', ['Specimen',])`
   *
   * @param value - the `parent` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Specimen.parent', [
    'Specimen',
  ])
  public addParent(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initParent();
      this.parent?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parent` property exists and has a value; `false` otherwise
   */
  public hasParent(): boolean {
    return isDefinedList<Reference>(this.parent) && this.parent.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `parent` property
   */
  private initParent(): void {
    if (!this.hasParent()) {
      this.parent = [] as Reference[];
    }
  }

  /**
   * @returns the `request` property value as a Reference array
   */
  public getRequest(): Reference[] {
    return this.request ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `request` property.
   *
   * @decorator `@ReferenceTargets('Specimen.request', ['ServiceRequest',])`
   *
   * @param value - the `request` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Specimen.request', [
    'ServiceRequest',
  ])
  public setRequest(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.request = value;
    } else {
      this.request = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `request` array property.
   *
   * @decorator `@ReferenceTargets('Specimen.request', ['ServiceRequest',])`
   *
   * @param value - the `request` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Specimen.request', [
    'ServiceRequest',
  ])
  public addRequest(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRequest();
      this.request?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `request` property exists and has a value; `false` otherwise
   */
  public hasRequest(): boolean {
    return isDefinedList<Reference>(this.request) && this.request.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `request` property
   */
  private initRequest(): void {
    if (!this.hasRequest()) {
      this.request = [] as Reference[];
    }
  }

  /**
   * @returns the `collection` property value as a SpecimenCollectionComponent object if defined; else an empty SpecimenCollectionComponent object
   */
  public getCollection(): SpecimenCollectionComponent {
    return this.collection ?? new SpecimenCollectionComponent();
  }

  /**
   * Assigns the provided Collection object value to the `collection` property.
   *
   * @param value - the `collection` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCollection(value: SpecimenCollectionComponent | undefined): this {
    if (isDefined<SpecimenCollectionComponent>(value)) {
      const optErrMsg = `Invalid Specimen.collection; Provided element is not an instance of SpecimenCollectionComponent.`;
      assertFhirType<SpecimenCollectionComponent>(value, SpecimenCollectionComponent, optErrMsg);
      this.collection = value;
    } else {
      this.collection = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `collection` property exists and has a value; `false` otherwise
   */
  public hasCollection(): boolean {
    return isDefined<SpecimenCollectionComponent>(this.collection) && !this.collection.isEmpty();
  }

  /**
   * @returns the `processing` property value as a SpecimenProcessingComponent array
   */
  public getProcessing(): SpecimenProcessingComponent[] {
    return this.processing ?? ([] as SpecimenProcessingComponent[]);
  }

  /**
   * Assigns the provided SpecimenProcessingComponent array value to the `processing` property.
   *
   * @param value - the `processing` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcessing(value: SpecimenProcessingComponent[] | undefined): this {
    if (isDefinedList<SpecimenProcessingComponent>(value)) {
      const optErrMsg = `Invalid Specimen.processing; Provided value array has an element that is not an instance of SpecimenProcessingComponent.`;
      assertFhirTypeList<SpecimenProcessingComponent>(value, SpecimenProcessingComponent, optErrMsg);
      this.processing = value;
    } else {
      this.processing = undefined;
    }
    return this;
  }

  /**
   * Add the provided SpecimenProcessingComponent value to the `processing` array property.
   *
   * @param value - the `processing` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addProcessing(value: SpecimenProcessingComponent | undefined): this {
    if (isDefined<SpecimenProcessingComponent>(value)) {
      const optErrMsg = `Invalid Specimen.processing; Provided element is not an instance of SpecimenProcessingComponent.`;
      assertFhirType<SpecimenProcessingComponent>(value, SpecimenProcessingComponent, optErrMsg);
      this.initProcessing();
      this.processing?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `processing` property exists and has a value; `false` otherwise
   */
  public hasProcessing(): boolean {
    return isDefinedList<SpecimenProcessingComponent>(this.processing) && this.processing.some((item: SpecimenProcessingComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `processing` property
   */
  private initProcessing(): void {
    if(!this.hasProcessing()) {
      this.processing = [] as SpecimenProcessingComponent[];
    }
  }

  /**
   * @returns the `container` property value as a SpecimenContainerComponent array
   */
  public getContainer(): SpecimenContainerComponent[] {
    return this.container ?? ([] as SpecimenContainerComponent[]);
  }

  /**
   * Assigns the provided SpecimenContainerComponent array value to the `container` property.
   *
   * @param value - the `container` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setContainer(value: SpecimenContainerComponent[] | undefined): this {
    if (isDefinedList<SpecimenContainerComponent>(value)) {
      const optErrMsg = `Invalid Specimen.container; Provided value array has an element that is not an instance of SpecimenContainerComponent.`;
      assertFhirTypeList<SpecimenContainerComponent>(value, SpecimenContainerComponent, optErrMsg);
      this.container = value;
    } else {
      this.container = undefined;
    }
    return this;
  }

  /**
   * Add the provided SpecimenContainerComponent value to the `container` array property.
   *
   * @param value - the `container` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addContainer(value: SpecimenContainerComponent | undefined): this {
    if (isDefined<SpecimenContainerComponent>(value)) {
      const optErrMsg = `Invalid Specimen.container; Provided element is not an instance of SpecimenContainerComponent.`;
      assertFhirType<SpecimenContainerComponent>(value, SpecimenContainerComponent, optErrMsg);
      this.initContainer();
      this.container?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `container` property exists and has a value; `false` otherwise
   */
  public hasContainer(): boolean {
    return isDefinedList<SpecimenContainerComponent>(this.container) && this.container.some((item: SpecimenContainerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `container` property
   */
  private initContainer(): void {
    if(!this.hasContainer()) {
      this.container = [] as SpecimenContainerComponent[];
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
      const optErrMsg = `Invalid Specimen.condition; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Specimen.condition; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Specimen.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid Specimen.note; Provided element is not an instance of Annotation.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Specimen';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.accessionIdentifier,
      this.status,
      this.type_,
      this.subject,
      this.receivedTime,
      this.parent,
      this.request,
      this.collection,
      this.processing,
      this.container,
      this.condition,
      this.note,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Specimen {
    const dest = new Specimen();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Specimen): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.accessionIdentifier = this.accessionIdentifier?.copy();
    dest.status = this.status?.copy();
    dest.type_ = this.type_?.copy();
    dest.subject = this.subject?.copy();
    dest.receivedTime = this.receivedTime?.copy();
    const parentList = copyListValues<Reference>(this.parent);
    dest.parent = parentList.length === 0 ? undefined : parentList;
    const requestList = copyListValues<Reference>(this.request);
    dest.request = requestList.length === 0 ? undefined : requestList;
    dest.collection = this.collection?.copy();
    const processingList = copyListValues<SpecimenProcessingComponent>(this.processing);
    dest.processing = processingList.length === 0 ? undefined : processingList;
    const containerList = copyListValues<SpecimenContainerComponent>(this.container);
    dest.container = containerList.length === 0 ? undefined : containerList;
    const conditionList = copyListValues<CodeableConcept>(this.condition);
    dest.condition = conditionList.length === 0 ? undefined : conditionList;
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
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

    if (this.hasAccessionIdentifier()) {
      setFhirComplexJson(this.getAccessionIdentifier(), 'accessionIdentifier', jsonObj);
    }

    if (this.hasStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStatusElement()!, 'status', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    }

    if (this.hasReceivedTimeElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getReceivedTimeElement(), 'receivedTime', jsonObj);
    }

    if (this.hasParent()) {
      setFhirComplexListJson(this.getParent(), 'parent', jsonObj);
    }

    if (this.hasRequest()) {
      setFhirComplexListJson(this.getRequest(), 'request', jsonObj);
    }

    if (this.hasCollection()) {
      setFhirBackboneElementJson(this.getCollection(), 'collection', jsonObj);
    }

    if (this.hasProcessing()) {
      setFhirBackboneElementListJson(this.getProcessing(), 'processing', jsonObj);
    }

    if (this.hasContainer()) {
      setFhirBackboneElementListJson(this.getContainer(), 'container', jsonObj);
    }

    if (this.hasCondition()) {
      setFhirComplexListJson(this.getCondition(), 'condition', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * SpecimenCollectionComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Collection details
 * - **Definition:** Details concerning the specimen collection.
 *
 * @category Data Models: Resource
 * @see [FHIR Specimen](http://hl7.org/fhir/StructureDefinition/Specimen)
 */
export class SpecimenCollectionComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SpecimenCollectionComponent` JSON to instantiate the SpecimenCollectionComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenCollectionComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenCollectionComponent
   * @returns SpecimenCollectionComponent data model or undefined for `SpecimenCollectionComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenCollectionComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenCollectionComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenCollectionComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = SpecimenCollectionComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SpecimenCollectionComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'collector';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCollector(datatype);
    }

    fieldName = 'collected[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const collected: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setCollected(collected);

    fieldName = 'duration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Duration | undefined = Duration.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDuration(datatype);
    }

    fieldName = 'quantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantity(datatype);
    }

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMethod(datatype);
    }

    fieldName = 'bodySite';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setBodySite(datatype);
    }

    fieldName = 'fastingStatus[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const fastingStatus: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setFastingStatus(fastingStatus);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Specimen.collection.collector Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Who collected the specimen
   * - **Definition:** Person who collected the specimen.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private collector?: Reference | undefined;

  /**
   * Specimen.collection.collected[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Specimen.collection.collected[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Collection time
   * - **Definition:** Time when specimen was collected from subject - the physiologically relevant time.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Specimen.collection.collected[x]',[
    'dateTime',
    'Period',
  ])
  private collected?: IDataType | undefined;

  /**
   * Specimen.collection.duration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** How long it took to collect specimen
   * - **Definition:** The span of time over which the collection of a specimen occurred.
   * - **FHIR Type:** `Duration`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private duration?: Duration | undefined;

  /**
   * Specimen.collection.quantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The quantity of specimen collected
   * - **Definition:** The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantity?: Quantity | undefined;

  /**
   * Specimen.collection.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Technique used to perform collection
   * - **Definition:** A coded value specifying the technique that is used to perform the procedure.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private method?: CodeableConcept | undefined;

  /**
   * Specimen.collection.bodySite Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Anatomical collection site
   * - **Definition:** Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.
   * - **Comment:** If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](https://hl7.org/fhir/extension-bodysite.html).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private bodySite?: CodeableConcept | undefined;

  /**
   * Specimen.collection.fastingStatus[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Specimen.collection.fastingStatus[x]', ['CodeableConcept','Duration',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Whether or how long patient abstained from food and/or drink
   * - **Definition:** Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection.
   * - **Comment:** Representing fasting status using this element is preferred to representing it with an observation using a \'pre-coordinated code\'  such as  LOINC 2005-7 (Calcium [Moles/ time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
   * - **Requirements:** Many diagnostic tests require fasting  to facilitate accurate interpretation.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Duration',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Specimen.collection.fastingStatus[x]',[
    'CodeableConcept',
    'Duration',
  ])
  private fastingStatus?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `collector` property value as a Reference object; else an empty Reference object
   */
  public getCollector(): Reference {
    return this.collector ?? new Reference();
  }

  /**
   * Assigns the provided Collector object value to the `collector` property.
   *
   * @decorator `@ReferenceTargets('Specimen.collection.collector', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `collector` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Specimen.collection.collector', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setCollector(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.collector = value;
    } else {
      this.collector = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `collector` property exists and has a value; `false` otherwise
   */
  public hasCollector(): boolean {
    return isDefined<Reference>(this.collector) && !this.collector.isEmpty();
  }

  /**
   * @returns the `collected` property value as a DataType object if defined; else undefined
   */
  public getCollected(): IDataType | undefined {
    return this.collected;
  }

  /**
   * Assigns the provided DataType object value to the `collected` property.
   *
   * @decorator `@ChoiceDataTypes('Specimen.collection.collected[x]')`
   *
   * @param value - the `collected` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Specimen.collection.collected[x]')
  public setCollected(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.collected = value;
    } else {
      this.collected = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `collected` property exists and has a value; `false` otherwise
   */
  public hasCollected(): boolean {
    return isDefined<IDataType>(this.collected) && !this.collected.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `collected` property value as a DateTimeType object if defined; else undefined
   */
  public getCollectedDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.collected)) {
      return undefined;
    }
    if (!(this.collected instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Specimen.collection.collected[x]: Expected DateTimeType but encountered ${this.collected.fhirType()}`,
      );
    }
    return this.collected;
  }

  /**
   * @returns `true` if the `collected` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasCollectedDateTimeType(): boolean {
    return this.hasCollected() && this.collected instanceof DateTimeType;
  }

  /**
   * @returns the `collected` property value as a Period object if defined; else undefined
   */
  public getCollectedPeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.collected)) {
      return undefined;
    }
    if (!(this.collected instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Specimen.collection.collected[x]: Expected Period but encountered ${this.collected.fhirType()}`,
      );
    }
    return this.collected;
  }

  /**
   * @returns `true` if the `collected` property exists as a Period and has a value; `false` otherwise
   */
  public hasCollectedPeriod(): boolean {
    return this.hasCollected() && this.collected instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `duration` property value as a Duration object if defined; else an empty Duration object
   */
  public getDuration(): Duration {
    return this.duration ?? new Duration();
  }

  /**
   * Assigns the provided Duration object value to the `duration` property.
   *
   * @param value - the `duration` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDuration(value: Duration | undefined): this {
    if (isDefined<Duration>(value)) {
      const optErrMsg = `Invalid Specimen.collection.duration; Provided element is not an instance of Duration.`;
      assertFhirType<Duration>(value, Duration, optErrMsg);
      this.duration = value;
    } else {
      this.duration = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `duration` property exists and has a value; `false` otherwise
   */
  public hasDuration(): boolean {
    return isDefined<Duration>(this.duration) && !this.duration.isEmpty();
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
      const optErrMsg = `Invalid Specimen.collection.quantity; Provided element is not an instance of Quantity.`;
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
      const optErrMsg = `Invalid Specimen.collection.method; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Specimen.collection.bodySite; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `fastingStatus` property value as a DataType object if defined; else undefined
   */
  public getFastingStatus(): IDataType | undefined {
    return this.fastingStatus;
  }

  /**
   * Assigns the provided DataType object value to the `fastingStatus` property.
   *
   * @decorator `@ChoiceDataTypes('Specimen.collection.fastingStatus[x]')`
   *
   * @param value - the `fastingStatus` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Specimen.collection.fastingStatus[x]')
  public setFastingStatus(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.fastingStatus = value;
    } else {
      this.fastingStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `fastingStatus` property exists and has a value; `false` otherwise
   */
  public hasFastingStatus(): boolean {
    return isDefined<IDataType>(this.fastingStatus) && !this.fastingStatus.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `fastingStatus` property value as a CodeableConcept object if defined; else undefined
   */
  public getFastingStatusCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.fastingStatus)) {
      return undefined;
    }
    if (!(this.fastingStatus instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Specimen.collection.fastingStatus[x]: Expected CodeableConcept but encountered ${this.fastingStatus.fhirType()}`,
      );
    }
    return this.fastingStatus;
  }

  /**
   * @returns `true` if the `fastingStatus` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasFastingStatusCodeableConcept(): boolean {
    return this.hasFastingStatus() && this.fastingStatus instanceof CodeableConcept;
  }

  /**
   * @returns the `fastingStatus` property value as a Duration object if defined; else undefined
   */
  public getFastingStatusDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.fastingStatus)) {
      return undefined;
    }
    if (!(this.fastingStatus instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for Specimen.collection.fastingStatus[x]: Expected Duration but encountered ${this.fastingStatus.fhirType()}`,
      );
    }
    return this.fastingStatus;
  }

  /**
   * @returns `true` if the `fastingStatus` property exists as a Duration and has a value; `false` otherwise
   */
  public hasFastingStatusDuration(): boolean {
    return this.hasFastingStatus() && this.fastingStatus instanceof Duration;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Specimen.collection';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.collector,
      this.collected,
      this.duration,
      this.quantity,
      this.method,
      this.bodySite,
      this.fastingStatus,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenCollectionComponent {
    const dest = new SpecimenCollectionComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenCollectionComponent): void {
    super.copyValues(dest);
    dest.collector = this.collector?.copy();
    dest.collected = this.collected?.copy() as IDataType;
    dest.duration = this.duration?.copy();
    dest.quantity = this.quantity?.copy();
    dest.method = this.method?.copy();
    dest.bodySite = this.bodySite?.copy();
    dest.fastingStatus = this.fastingStatus?.copy() as IDataType;
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

    if (this.hasCollector()) {
      setFhirComplexJson(this.getCollector(), 'collector', jsonObj);
    }

    if (this.hasCollected()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getCollected()!, 'collected', jsonObj);
    }

    if (this.hasDuration()) {
      setFhirComplexJson(this.getDuration(), 'duration', jsonObj);
    }

    if (this.hasQuantity()) {
      setFhirComplexJson(this.getQuantity(), 'quantity', jsonObj);
    }

    if (this.hasMethod()) {
      setFhirComplexJson(this.getMethod(), 'method', jsonObj);
    }

    if (this.hasBodySite()) {
      setFhirComplexJson(this.getBodySite(), 'bodySite', jsonObj);
    }

    if (this.hasFastingStatus()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getFastingStatus()!, 'fastingStatus', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SpecimenProcessingComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Processing and processing step details
 * - **Definition:** Details concerning processing and processing steps for the specimen.
 *
 * @category Data Models: Resource
 * @see [FHIR Specimen](http://hl7.org/fhir/StructureDefinition/Specimen)
 */
export class SpecimenProcessingComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SpecimenProcessingComponent` JSON to instantiate the SpecimenProcessingComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenProcessingComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenProcessingComponent
   * @returns SpecimenProcessingComponent data model or undefined for `SpecimenProcessingComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenProcessingComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenProcessingComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenProcessingComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = SpecimenProcessingComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SpecimenProcessingComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'procedure';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProcedure(datatype);
    }

    fieldName = 'additive';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addAdditive(datatype);
        }
      });
  }

    fieldName = 'time[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const time: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setTime(time);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Specimen.processing.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual description of procedure
   * - **Definition:** Textual description of procedure.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * Specimen.processing.procedure Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates the treatment step  applied to the specimen
   * - **Definition:** A coded value specifying the procedure used to process the specimen.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private procedure?: CodeableConcept | undefined;

  /**
   * Specimen.processing.additive Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Material used in the processing step
   * - **Definition:** Material used in the processing step.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private additive?: Reference[] | undefined;

  /**
   * Specimen.processing.time[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Specimen.processing.time[x]', ['dateTime','Period',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Date and time of specimen processing
   * - **Definition:** A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   * - **FHIR Types:**
   *     'dateTime',
   *     'Period',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Specimen.processing.time[x]',[
    'dateTime',
    'Period',
  ])
  private time?: IDataType | undefined;

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
      const optErrMsg = `Invalid Specimen.processing.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Specimen.processing.description (${String(value)})`;
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
   * @returns the `procedure` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getProcedure(): CodeableConcept {
    return this.procedure ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Procedure object value to the `procedure` property.
   *
   * @param value - the `procedure` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setProcedure(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid Specimen.processing.procedure; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.procedure = value;
    } else {
      this.procedure = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `procedure` property exists and has a value; `false` otherwise
   */
  public hasProcedure(): boolean {
    return isDefined<CodeableConcept>(this.procedure) && !this.procedure.isEmpty();
  }

  /**
   * @returns the `additive` property value as a Reference array
   */
  public getAdditive(): Reference[] {
    return this.additive ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `additive` property.
   *
   * @decorator `@ReferenceTargets('Specimen.processing.additive', ['Substance',])`
   *
   * @param value - the `additive` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Specimen.processing.additive', [
    'Substance',
  ])
  public setAdditive(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.additive = value;
    } else {
      this.additive = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `additive` array property.
   *
   * @decorator `@ReferenceTargets('Specimen.processing.additive', ['Substance',])`
   *
   * @param value - the `additive` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('Specimen.processing.additive', [
    'Substance',
  ])
  public addAdditive(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initAdditive();
      this.additive?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `additive` property exists and has a value; `false` otherwise
   */
  public hasAdditive(): boolean {
    return isDefinedList<Reference>(this.additive) && this.additive.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `additive` property
   */
  private initAdditive(): void {
    if (!this.hasAdditive()) {
      this.additive = [] as Reference[];
    }
  }

  /**
   * @returns the `time` property value as a DataType object if defined; else undefined
   */
  public getTime(): IDataType | undefined {
    return this.time;
  }

  /**
   * Assigns the provided DataType object value to the `time` property.
   *
   * @decorator `@ChoiceDataTypes('Specimen.processing.time[x]')`
   *
   * @param value - the `time` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Specimen.processing.time[x]')
  public setTime(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.time = value;
    } else {
      this.time = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `time` property exists and has a value; `false` otherwise
   */
  public hasTime(): boolean {
    return isDefined<IDataType>(this.time) && !this.time.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `time` property value as a DateTimeType object if defined; else undefined
   */
  public getTimeDateTimeType(): DateTimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.time)) {
      return undefined;
    }
    if (!(this.time instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Specimen.processing.time[x]: Expected DateTimeType but encountered ${this.time.fhirType()}`,
      );
    }
    return this.time;
  }

  /**
   * @returns `true` if the `time` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasTimeDateTimeType(): boolean {
    return this.hasTime() && this.time instanceof DateTimeType;
  }

  /**
   * @returns the `time` property value as a Period object if defined; else undefined
   */
  public getTimePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.time)) {
      return undefined;
    }
    if (!(this.time instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Specimen.processing.time[x]: Expected Period but encountered ${this.time.fhirType()}`,
      );
    }
    return this.time;
  }

  /**
   * @returns `true` if the `time` property exists as a Period and has a value; `false` otherwise
   */
  public hasTimePeriod(): boolean {
    return this.hasTime() && this.time instanceof Period;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Specimen.processing';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.description,
      this.procedure,
      this.additive,
      this.time,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenProcessingComponent {
    const dest = new SpecimenProcessingComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenProcessingComponent): void {
    super.copyValues(dest);
    dest.description = this.description?.copy();
    dest.procedure = this.procedure?.copy();
    const additiveList = copyListValues<Reference>(this.additive);
    dest.additive = additiveList.length === 0 ? undefined : additiveList;
    dest.time = this.time?.copy() as IDataType;
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

    if (this.hasProcedure()) {
      setFhirComplexJson(this.getProcedure(), 'procedure', jsonObj);
    }

    if (this.hasAdditive()) {
      setFhirComplexListJson(this.getAdditive(), 'additive', jsonObj);
    }

    if (this.hasTime()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getTime()!, 'time', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * SpecimenContainerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Direct container of specimen (tube/slide, etc.)
 * - **Definition:** The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 *
 * @category Data Models: Resource
 * @see [FHIR Specimen](http://hl7.org/fhir/StructureDefinition/Specimen)
 */
export class SpecimenContainerComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `SpecimenContainerComponent` JSON to instantiate the SpecimenContainerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `SpecimenContainerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to SpecimenContainerComponent
   * @returns SpecimenContainerComponent data model or undefined for `SpecimenContainerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): SpecimenContainerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'SpecimenContainerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new SpecimenContainerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = SpecimenContainerComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for SpecimenContainerComponent`;
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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'capacity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCapacity(datatype);
    }

    fieldName = 'specimenQuantity';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setSpecimenQuantity(datatype);
    }

    fieldName = 'additive[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const additive: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setAdditive(additive);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Specimen.container.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Id for the container
   * - **Definition:** Id for container. There may be multiple; a manufacturer\'s bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * Specimen.container.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Textual description of the container
   * - **Definition:** Textual description of the container.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: StringType | undefined;

  /**
   * Specimen.container.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Kind of container directly associated with specimen
   * - **Definition:** The type of container associated with the specimen (e.g. slide, aliquot, etc.).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * Specimen.container.capacity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Container volume or size
   * - **Definition:** The capacity (volume or other measure) the container may contain.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private capacity?: Quantity | undefined;

  /**
   * Specimen.container.specimenQuantity Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Quantity of specimen within container
   * - **Definition:** The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private specimenQuantity?: Quantity | undefined;

  /**
   * Specimen.container.additive[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Specimen.container.additive[x]', ['CodeableConcept','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Additive associated with container
   * - **Definition:** Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   * - **FHIR Types:**
   *     'CodeableConcept',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('Specimen.container.additive[x]',[
    'CodeableConcept',
    'Reference',
  ])
  private additive?: IDataType | undefined;

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
      const optErrMsg = `Invalid Specimen.container.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Specimen.container.identifier; Provided element is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid Specimen.container.description; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid Specimen.container.description (${String(value)})`;
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
      const optErrMsg = `Invalid Specimen.container.type; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid Specimen.container.capacity; Provided element is not an instance of Quantity.`;
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
   * @returns the `specimenQuantity` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getSpecimenQuantity(): Quantity {
    return this.specimenQuantity ?? new Quantity();
  }

  /**
   * Assigns the provided SpecimenQuantity object value to the `specimenQuantity` property.
   *
   * @param value - the `specimenQuantity` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setSpecimenQuantity(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid Specimen.container.specimenQuantity; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.specimenQuantity = value;
    } else {
      this.specimenQuantity = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `specimenQuantity` property exists and has a value; `false` otherwise
   */
  public hasSpecimenQuantity(): boolean {
    return isDefined<Quantity>(this.specimenQuantity) && !this.specimenQuantity.isEmpty();
  }

  /**
   * @returns the `additive` property value as a DataType object if defined; else undefined
   */
  public getAdditive(): IDataType | undefined {
    return this.additive;
  }

  /**
   * Assigns the provided DataType object value to the `additive` property.
   *
   * @decorator `@ChoiceDataTypes('Specimen.container.additive[x]')`
   *
   * @param value - the `additive` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Specimen.container.additive[x]')
  public setAdditive(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.additive = value;
    } else {
      this.additive = undefined;
    }
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
   * @returns the `additive` property value as a CodeableConcept object if defined; else undefined
   */
  public getAdditiveCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.additive)) {
      return undefined;
    }
    if (!(this.additive instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Specimen.container.additive[x]: Expected CodeableConcept but encountered ${this.additive.fhirType()}`,
      );
    }
    return this.additive;
  }

  /**
   * @returns `true` if the `additive` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasAdditiveCodeableConcept(): boolean {
    return this.hasAdditive() && this.additive instanceof CodeableConcept;
  }

  /**
   * @returns the `additive` property value as a Reference object if defined; else undefined
   */
  public getAdditiveReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.additive)) {
      return undefined;
    }
    if (!(this.additive instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Specimen.container.additive[x]: Expected Reference but encountered ${this.additive.fhirType()}`,
      );
    }
    return this.additive;
  }

  /**
   * @returns `true` if the `additive` property exists as a Reference and has a value; `false` otherwise
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
    return 'Specimen.container';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.description,
      this.type_,
      this.capacity,
      this.specimenQuantity,
      this.additive,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): SpecimenContainerComponent {
    const dest = new SpecimenContainerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: SpecimenContainerComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.description = this.description?.copy();
    dest.type_ = this.type_?.copy();
    dest.capacity = this.capacity?.copy();
    dest.specimenQuantity = this.specimenQuantity?.copy();
    dest.additive = this.additive?.copy() as IDataType;
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

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirString>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasCapacity()) {
      setFhirComplexJson(this.getCapacity(), 'capacity', jsonObj);
    }

    if (this.hasSpecimenQuantity()) {
      setFhirComplexJson(this.getSpecimenQuantity(), 'specimenQuantity', jsonObj);
    }

    if (this.hasAdditive()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getAdditive()!, 'additive', jsonObj);
    }

    return jsonObj;
  }
}
