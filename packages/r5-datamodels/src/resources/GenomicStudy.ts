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
 * GenomicStudy Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/GenomicStudy
 * StructureDefinition.name: GenomicStudy
 * StructureDefinition.description: A set of analyses performed to analyze and generate genomic data.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CanonicalType,
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
  MarkdownType,
  ReferenceTargets,
  StringType,
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
  fhirMarkdown,
  fhirMarkdownSchema,
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
import { Annotation, CodeableConcept, CodeableReference, Identifier, PARSABLE_DATATYPE_MAP, Reference } from '../complex-types/complex-datatypes';
import { GenomicstudyStatusEnum } from '../code-systems/GenomicstudyStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * GenomicStudy Class
 *
 * @remarks
 * A set of analyses performed to analyze and generate genomic data.
 *
 * **FHIR Specification**
 * - **Short:** Genomic Study
 * - **Definition:** A GenomicStudy is a set of analyses performed to analyze and generate genomic data.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR GenomicStudy](http://hl7.org/fhir/StructureDefinition/GenomicStudy)
 */
export class GenomicStudy extends DomainResource implements IDomainResource {
  constructor(status: EnumCodeType | CodeType | fhirCode | null = null, subject: Reference | null = null) {
    super();

    this.genomicstudyStatusEnum = new GenomicstudyStatusEnum();

    this.status = constructorCodeValueAsEnumCodeType<GenomicstudyStatusEnum>(
      status,
      GenomicstudyStatusEnum,
      this.genomicstudyStatusEnum,
      'GenomicStudy.status',
    );

    this.subject = null;
    if (isDefined<Reference>(subject)) {
      this.setSubject(subject);
    }
  }

  /**
   * Parse the provided `GenomicStudy` JSON to instantiate the GenomicStudy data model.
   *
   * @param sourceJson - JSON representing FHIR `GenomicStudy`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GenomicStudy
   * @returns GenomicStudy data model or undefined for `GenomicStudy`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): GenomicStudy | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GenomicStudy';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GenomicStudy();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'GenomicStudy');
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

    fieldName = 'subject';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setSubject(null);
      } else {
        instance.setSubject(datatype);
      }
    } else {
      instance.setSubject(null);
    }

    fieldName = 'encounter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setEncounter(datatype);
    }

    fieldName = 'startDate';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setStartDateElement(datatype);
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

    fieldName = 'referrer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setReferrer(datatype);
    }

    fieldName = 'interpreter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addInterpreter(datatype);
        }
      });
  }

    fieldName = 'reason';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableReference | undefined = CodeableReference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addReason(datatype);
        }
      });
    }

    fieldName = 'instantiatesCanonical';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setInstantiatesCanonicalElement(datatype);
    }

    fieldName = 'instantiatesUri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setInstantiatesUriElement(datatype);
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

    fieldName = 'description';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: MarkdownType | undefined = fhirParser.parseMarkdownType(dtJson, dtSiblingJson);
      instance.setDescriptionElement(datatype);
    }

    fieldName = 'analysis';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: GenomicStudyAnalysisComponent | undefined = GenomicStudyAnalysisComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addAnalysis(component);
        }
      });
    }

    return instance;
  }

  /**
   * GenomicStudy.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifiers for this genomic study
   * - **Definition:** Identifiers for this genomic study.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * FHIR CodeSystem: GenomicstudyStatus
   *
   * @see {@link GenomicstudyStatusEnum }
   */
  private readonly genomicstudyStatusEnum: GenomicstudyStatusEnum;

  /**
   * GenomicStudy.status Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** registered | available | cancelled | entered-in-error | unknown
   * - **Definition:** The status of the genomic study.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** true
   * - **isModifierReason:** This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link GenomicstudyStatusEnum }
   */
  private status: EnumCodeType | null;

  /**
   * GenomicStudy.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The type of the study (e.g., Familial variant segregation, Functional variation detection, or Gene expression profiling)
   * - **Definition:** The type of the study, e.g., Familial variant segregation, Functional variation detection, or Gene expression profiling.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept[] | undefined;

  /**
   * GenomicStudy.subject Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The primary subject of the genomic study
   * - **Definition:** The primary subject of the genomic study.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Patient',
   *       'http://hl7.org/fhir/StructureDefinition/Group',
   *       'http://hl7.org/fhir/StructureDefinition/Substance',
   *       'http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct',
   *       'http://hl7.org/fhir/StructureDefinition/NutritionProduct',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private subject: Reference | null;

  /**
   * GenomicStudy.encounter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The healthcare event with which this genomics study is associated
   * - **Definition:** The healthcare event with which this genomics study is associated.
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
   * GenomicStudy.startDate Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** When the genomic study was started
   * - **Definition:** When the genomic study was started.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private startDate?: DateTimeType | undefined;

  /**
   * GenomicStudy.basedOn Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Event resources that the genomic study is based on
   * - **Definition:** Event resources that the genomic study is based on.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ServiceRequest',
   *       'http://hl7.org/fhir/StructureDefinition/Task',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private basedOn?: Reference[] | undefined;

  /**
   * GenomicStudy.referrer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Healthcare professional who requested or referred the genomic study
   * - **Definition:** Healthcare professional who requested or referred the genomic study.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private referrer?: Reference | undefined;

  /**
   * GenomicStudy.interpreter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Healthcare professionals who interpreted the genomic study
   * - **Definition:** Healthcare professionals who interpreted the genomic study.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private interpreter?: Reference[] | undefined;

  /**
   * GenomicStudy.reason Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Why the genomic study was performed
   * - **Definition:** Why the genomic study was performed.
   * - **FHIR Type:** `CodeableReference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Condition',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private reason?: CodeableReference[] | undefined;

  /**
   * GenomicStudy.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The defined protocol that describes the study
   * - **Definition:** The defined protocol that describes the study.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instantiatesCanonical?: CanonicalType | undefined;

  /**
   * GenomicStudy.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The URL pointing to an externally maintained protocol that describes the study
   * - **Definition:** The URL pointing to an externally maintained protocol that describes the study.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instantiatesUri?: UriType | undefined;

  /**
   * GenomicStudy.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Comments related to the genomic study
   * - **Definition:** Comments related to the genomic study.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * GenomicStudy.description Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Description of the genomic study
   * - **Definition:** Description of the genomic study.
   * - **FHIR Type:** `markdown`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private description?: MarkdownType | undefined;

  /**
   * GenomicStudy.analysis Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Genomic Analysis Event
   * - **Definition:** The details about a specific analysis that was performed in this GenomicStudy.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private analysis?: GenomicStudyAnalysisComponent[] | undefined;

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
      const optErrMsg = `Invalid GenomicStudy.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid GenomicStudy.identifier; Provided element is not an instance of Identifier.`;
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
   * @see CodeSystem Enumeration: {@link GenomicstudyStatusEnum }
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
   * @see CodeSystem Enumeration: {@link GenomicstudyStatusEnum }
   */
  public setStatusEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid GenomicStudy.status`;
      assertEnumCodeType<GenomicstudyStatusEnum>(enumType, GenomicstudyStatusEnum, errMsgPrefix);
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
   * @see CodeSystem Enumeration: {@link GenomicstudyStatusEnum }
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
   * @see CodeSystem Enumeration: {@link GenomicstudyStatusEnum }
   */
  public setStatusElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid GenomicStudy.status; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.status = new EnumCodeType(element, this.genomicstudyStatusEnum);
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
   * @see CodeSystem Enumeration: {@link GenomicstudyStatusEnum }
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
   * @see CodeSystem Enumeration: {@link GenomicstudyStatusEnum }
   */
  public setStatus(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid GenomicStudy.status (${String(value)})`;
      this.status = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.genomicstudyStatusEnum);
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
      const optErrMsg = `Invalid GenomicStudy.type; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid GenomicStudy.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `subject` property value as a Reference object if defined; else an empty Reference object
   */
  public getSubject(): Reference {
    return this.subject ?? new Reference();
  }

  /**
   * Assigns the provided Subject object value to the `subject` property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.subject', ['Patient','Group','Substance','BiologicallyDerivedProduct','NutritionProduct',])`
   *
   * @param value - the `subject` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.subject', [
    'Patient',
  
    'Group',
  
    'Substance',
  
    'BiologicallyDerivedProduct',
  
    'NutritionProduct',
  ])
  public setSubject(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.subject = value;
    } else {
      this.subject = null;
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
   * @decorator `@ReferenceTargets('GenomicStudy.encounter', ['Encounter',])`
   *
   * @param value - the `encounter` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.encounter', [
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
   * @returns the `startDate` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getStartDateElement(): DateTimeType {
    return this.startDate ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `startDate` property.
   *
   * @param element - the `startDate` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStartDateElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid GenomicStudy.startDate; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.startDate = element;
    } else {
      this.startDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `startDate` property exists and has a value; `false` otherwise
   */
  public hasStartDateElement(): boolean {
    return isDefined<DateTimeType>(this.startDate) && !this.startDate.isEmpty();
  }

  /**
   * @returns the `startDate` property value as a fhirDateTime if defined; else undefined
   */
  public getStartDate(): fhirDateTime | undefined {
    return this.startDate?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `startDate` property.
   *
   * @param value - the `startDate` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setStartDate(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid GenomicStudy.startDate (${String(value)})`;
      this.startDate = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.startDate = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `startDate` property exists and has a value; `false` otherwise
   */
  public hasStartDate(): boolean {
    return this.hasStartDateElement();
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
   * @decorator `@ReferenceTargets('GenomicStudy.basedOn', ['ServiceRequest','Task',])`
   *
   * @param value - the `basedOn` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.basedOn', [
    'ServiceRequest',
  
    'Task',
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
   * @decorator `@ReferenceTargets('GenomicStudy.basedOn', ['ServiceRequest','Task',])`
   *
   * @param value - the `basedOn` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.basedOn', [
    'ServiceRequest',
  
    'Task',
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
   * @returns the `referrer` property value as a Reference object; else an empty Reference object
   */
  public getReferrer(): Reference {
    return this.referrer ?? new Reference();
  }

  /**
   * Assigns the provided Referrer object value to the `referrer` property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.referrer', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `referrer` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.referrer', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setReferrer(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.referrer = value;
    } else {
      this.referrer = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `referrer` property exists and has a value; `false` otherwise
   */
  public hasReferrer(): boolean {
    return isDefined<Reference>(this.referrer) && !this.referrer.isEmpty();
  }

  /**
   * @returns the `interpreter` property value as a Reference array
   */
  public getInterpreter(): Reference[] {
    return this.interpreter ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `interpreter` property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.interpreter', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `interpreter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.interpreter', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public setInterpreter(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.interpreter = value;
    } else {
      this.interpreter = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `interpreter` array property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.interpreter', ['Practitioner','PractitionerRole',])`
   *
   * @param value - the `interpreter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.interpreter', [
    'Practitioner',
  
    'PractitionerRole',
  ])
  public addInterpreter(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initInterpreter();
      this.interpreter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `interpreter` property exists and has a value; `false` otherwise
   */
  public hasInterpreter(): boolean {
    return isDefinedList<Reference>(this.interpreter) && this.interpreter.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `interpreter` property
   */
  private initInterpreter(): void {
    if (!this.hasInterpreter()) {
      this.interpreter = [] as Reference[];
    }
  }

  /**
   * @returns the `reason` property value as a CodeableReference array
   */
  public getReason(): CodeableReference[] {
    return this.reason ?? ([] as CodeableReference[]);
  }

  /**
   * Assigns the provided CodeableReference array value to the `reason` property.
   *
   * @param value - the `reason` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setReason(value: CodeableReference[] | undefined): this {
    if (isDefinedList<CodeableReference>(value)) {
      const optErrMsg = `Invalid GenomicStudy.reason; Provided value array has an element that is not an instance of CodeableReference.`;
      assertFhirTypeList<CodeableReference>(value, CodeableReference, optErrMsg);
      this.reason = value;
    } else {
      this.reason = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableReference value to the `reason` array property.
   *
   * @param value - the `reason` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addReason(value: CodeableReference | undefined): this {
    if (isDefined<CodeableReference>(value)) {
      const optErrMsg = `Invalid GenomicStudy.reason; Provided element is not an instance of CodeableReference.`;
      assertFhirType<CodeableReference>(value, CodeableReference, optErrMsg);
      this.initReason();
      this.reason?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `reason` property exists and has a value; `false` otherwise
   */
  public hasReason(): boolean {
    return isDefinedList<CodeableReference>(this.reason) && this.reason.some((item: CodeableReference) => !item.isEmpty());
  }

  /**
   * Initialize the `reason` property
   */
  private initReason(): void {
    if(!this.hasReason()) {
      this.reason = [] as CodeableReference[];
    }
  }

  /**
   * @returns the `instantiatesCanonical` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getInstantiatesCanonicalElement(): CanonicalType {
    return this.instantiatesCanonical ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instantiatesCanonical` property.
   *
   * @param element - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid GenomicStudy.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.instantiatesCanonical = element;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonicalElement(): boolean {
    return isDefined<CanonicalType>(this.instantiatesCanonical) && !this.instantiatesCanonical.isEmpty();
  }

  /**
   * @returns the `instantiatesCanonical` property value as a fhirCanonical if defined; else undefined
   */
  public getInstantiatesCanonical(): fhirCanonical | undefined {
    return this.instantiatesCanonical?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instantiatesCanonical` property.
   *
   * @param value - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid GenomicStudy.instantiatesCanonical (${String(value)})`;
      this.instantiatesCanonical = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonical(): boolean {
    return this.hasInstantiatesCanonicalElement();
  }

  /**
   * @returns the `instantiatesUri` property value as a UriType object if defined; else an empty UriType object
   */
  public getInstantiatesUriElement(): UriType {
    return this.instantiatesUri ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instantiatesUri` property.
   *
   * @param element - the `instantiatesUri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid GenomicStudy.instantiatesUri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.instantiatesUri = element;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUriElement(): boolean {
    return isDefined<UriType>(this.instantiatesUri) && !this.instantiatesUri.isEmpty();
  }

  /**
   * @returns the `instantiatesUri` property value as a fhirUri if defined; else undefined
   */
  public getInstantiatesUri(): fhirUri | undefined {
    return this.instantiatesUri?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instantiatesUri` property.
   *
   * @param value - the `instantiatesUri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid GenomicStudy.instantiatesUri (${String(value)})`;
      this.instantiatesUri = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUri(): boolean {
    return this.hasInstantiatesUriElement();
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
      const optErrMsg = `Invalid GenomicStudy.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid GenomicStudy.note; Provided element is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid GenomicStudy.description; Provided element is not an instance of MarkdownType.`;
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
      const optErrMsg = `Invalid GenomicStudy.description (${String(value)})`;
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
   * @returns the `analysis` property value as a GenomicStudyAnalysisComponent array
   */
  public getAnalysis(): GenomicStudyAnalysisComponent[] {
    return this.analysis ?? ([] as GenomicStudyAnalysisComponent[]);
  }

  /**
   * Assigns the provided GenomicStudyAnalysisComponent array value to the `analysis` property.
   *
   * @param value - the `analysis` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setAnalysis(value: GenomicStudyAnalysisComponent[] | undefined): this {
    if (isDefinedList<GenomicStudyAnalysisComponent>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis; Provided value array has an element that is not an instance of GenomicStudyAnalysisComponent.`;
      assertFhirTypeList<GenomicStudyAnalysisComponent>(value, GenomicStudyAnalysisComponent, optErrMsg);
      this.analysis = value;
    } else {
      this.analysis = undefined;
    }
    return this;
  }

  /**
   * Add the provided GenomicStudyAnalysisComponent value to the `analysis` array property.
   *
   * @param value - the `analysis` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addAnalysis(value: GenomicStudyAnalysisComponent | undefined): this {
    if (isDefined<GenomicStudyAnalysisComponent>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis; Provided element is not an instance of GenomicStudyAnalysisComponent.`;
      assertFhirType<GenomicStudyAnalysisComponent>(value, GenomicStudyAnalysisComponent, optErrMsg);
      this.initAnalysis();
      this.analysis?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `analysis` property exists and has a value; `false` otherwise
   */
  public hasAnalysis(): boolean {
    return isDefinedList<GenomicStudyAnalysisComponent>(this.analysis) && this.analysis.some((item: GenomicStudyAnalysisComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `analysis` property
   */
  private initAnalysis(): void {
    if(!this.hasAnalysis()) {
      this.analysis = [] as GenomicStudyAnalysisComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'GenomicStudy';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.status,
      this.type_,
      this.subject,
      this.encounter,
      this.startDate,
      this.basedOn,
      this.referrer,
      this.interpreter,
      this.reason,
      this.instantiatesCanonical,
      this.instantiatesUri,
      this.note,
      this.description,
      this.analysis,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.status, this.subject, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GenomicStudy {
    const dest = new GenomicStudy();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GenomicStudy): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.status = this.status ? this.status.copy() : null;
    const typeList = copyListValues<CodeableConcept>(this.type_);
    dest.type_ = typeList.length === 0 ? undefined : typeList;
    dest.subject = this.subject ? this.subject.copy() : null;
    dest.encounter = this.encounter?.copy();
    dest.startDate = this.startDate?.copy();
    const basedOnList = copyListValues<Reference>(this.basedOn);
    dest.basedOn = basedOnList.length === 0 ? undefined : basedOnList;
    dest.referrer = this.referrer?.copy();
    const interpreterList = copyListValues<Reference>(this.interpreter);
    dest.interpreter = interpreterList.length === 0 ? undefined : interpreterList;
    const reasonList = copyListValues<CodeableReference>(this.reason);
    dest.reason = reasonList.length === 0 ? undefined : reasonList;
    dest.instantiatesCanonical = this.instantiatesCanonical?.copy();
    dest.instantiatesUri = this.instantiatesUri?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.description = this.description?.copy();
    const analysisList = copyListValues<GenomicStudyAnalysisComponent>(this.analysis);
    dest.analysis = analysisList.length === 0 ? undefined : analysisList;
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

    if (this.hasType()) {
      setFhirComplexListJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasSubject()) {
      setFhirComplexJson(this.getSubject(), 'subject', jsonObj);
    } else {
      jsonObj['subject'] = null;
    }

    if (this.hasEncounter()) {
      setFhirComplexJson(this.getEncounter(), 'encounter', jsonObj);
    }

    if (this.hasStartDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStartDateElement(), 'startDate', jsonObj);
    }

    if (this.hasBasedOn()) {
      setFhirComplexListJson(this.getBasedOn(), 'basedOn', jsonObj);
    }

    if (this.hasReferrer()) {
      setFhirComplexJson(this.getReferrer(), 'referrer', jsonObj);
    }

    if (this.hasInterpreter()) {
      setFhirComplexListJson(this.getInterpreter(), 'interpreter', jsonObj);
    }

    if (this.hasReason()) {
      setFhirComplexListJson(this.getReason(), 'reason', jsonObj);
    }

    if (this.hasInstantiatesCanonicalElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getInstantiatesCanonicalElement(), 'instantiatesCanonical', jsonObj);
    }

    if (this.hasInstantiatesUriElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getInstantiatesUriElement(), 'instantiatesUri', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasDescriptionElement()) {
      setFhirPrimitiveJson<fhirMarkdown>(this.getDescriptionElement(), 'description', jsonObj);
    }

    if (this.hasAnalysis()) {
      setFhirBackboneElementListJson(this.getAnalysis(), 'analysis', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * GenomicStudyAnalysisComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Genomic Analysis Event
 * - **Definition:** The details about a specific analysis that was performed in this GenomicStudy.
 *
 * @category Data Models: Resource
 * @see [FHIR GenomicStudy](http://hl7.org/fhir/StructureDefinition/GenomicStudy)
 */
export class GenomicStudyAnalysisComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `GenomicStudyAnalysisComponent` JSON to instantiate the GenomicStudyAnalysisComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `GenomicStudyAnalysisComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GenomicStudyAnalysisComponent
   * @returns GenomicStudyAnalysisComponent data model or undefined for `GenomicStudyAnalysisComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): GenomicStudyAnalysisComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GenomicStudyAnalysisComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GenomicStudyAnalysisComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

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

    fieldName = 'methodType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addMethodType(datatype);
        }
      });
    }

    fieldName = 'changeType';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: CodeableConcept | undefined = CodeableConcept.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addChangeType(datatype);
        }
      });
    }

    fieldName = 'genomeBuild';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setGenomeBuild(datatype);
    }

    fieldName = 'instantiatesCanonical';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CanonicalType | undefined = fhirParser.parseCanonicalType(dtJson, dtSiblingJson);
      instance.setInstantiatesCanonicalElement(datatype);
    }

    fieldName = 'instantiatesUri';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: UriType | undefined = fhirParser.parseUriType(dtJson, dtSiblingJson);
      instance.setInstantiatesUriElement(datatype);
    }

    fieldName = 'title';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTitleElement(datatype);
    }

    fieldName = 'focus';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addFocus(datatype);
        }
      });
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

    fieldName = 'date';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setDateElement(datatype);
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

    fieldName = 'protocolPerformed';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setProtocolPerformed(datatype);
    }

    fieldName = 'regionsStudied';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRegionsStudied(datatype);
        }
      });
  }

    fieldName = 'regionsCalled';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Reference | undefined = Reference.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addRegionsCalled(datatype);
        }
      });
  }

    fieldName = 'input';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: GenomicStudyAnalysisInputComponent | undefined = GenomicStudyAnalysisInputComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addInput(component);
        }
      });
    }

    fieldName = 'output';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: GenomicStudyAnalysisOutputComponent | undefined = GenomicStudyAnalysisOutputComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addOutput(component);
        }
      });
    }

    fieldName = 'performer';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: GenomicStudyAnalysisPerformerComponent | undefined = GenomicStudyAnalysisPerformerComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addPerformer(component);
        }
      });
    }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: GenomicStudyAnalysisDeviceComponent | undefined = GenomicStudyAnalysisDeviceComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addDevice(component);
        }
      });
    }

    return instance;
  }

  /**
   * GenomicStudy.analysis.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identifiers for the analysis event
   * - **Definition:** Identifiers for the analysis event.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * GenomicStudy.analysis.methodType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of the methods used in the analysis (e.g., FISH, Karyotyping, MSI)
   * - **Definition:** Type of the methods used in the analysis, e.g., Fluorescence in situ hybridization (FISH), Karyotyping, or Microsatellite instability testing (MSI).
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private methodType?: CodeableConcept[] | undefined;

  /**
   * GenomicStudy.analysis.changeType Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of the genomic changes studied in the analysis (e.g., DNA, RNA, or AA change)
   * - **Definition:** Type of the genomic changes studied in the analysis, e.g., DNA, RNA, or amino acid change.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private changeType?: CodeableConcept[] | undefined;

  /**
   * GenomicStudy.analysis.genomeBuild Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Genome build that is used in this analysis
   * - **Definition:** The reference genome build that is used in this analysis.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private genomeBuild?: CodeableConcept | undefined;

  /**
   * GenomicStudy.analysis.instantiatesCanonical Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The defined protocol that describes the analysis
   * - **Definition:** The defined protocol that describes the analysis.
   * - **FHIR Type:** `canonical`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/PlanDefinition',
   *       'http://hl7.org/fhir/StructureDefinition/ActivityDefinition',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instantiatesCanonical?: CanonicalType | undefined;

  /**
   * GenomicStudy.analysis.instantiatesUri Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The URL pointing to an externally maintained protocol that describes the analysis
   * - **Definition:** The URL pointing to an externally maintained protocol that describes the analysis.
   * - **FHIR Type:** `uri`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private instantiatesUri?: UriType | undefined;

  /**
   * GenomicStudy.analysis.title Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name of the analysis event (human friendly)
   * - **Definition:** Name of the analysis event (human friendly).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private title?: StringType | undefined;

  /**
   * GenomicStudy.analysis.focus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** What the genomic analysis is about, when it is not about the subject of record
   * - **Definition:** The focus of a genomic analysis when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, child, or sibling. For example, in trio testing, the GenomicStudy.subject would be the child (proband) and the GenomicStudy.analysis.focus of a specific analysis would be the parent.
   * - **Comment:** If the focus of the analysis is not known, the value of this field SHALL use the data absent extension.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Resource',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private focus?: Reference[] | undefined;

  /**
   * GenomicStudy.analysis.specimen Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The specimen used in the analysis event
   * - **Definition:** The specimen used in the analysis event.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Specimen',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private specimen?: Reference[] | undefined;

  /**
   * GenomicStudy.analysis.date Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The date of the analysis event
   * - **Definition:** The date of the analysis event.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private date?: DateTimeType | undefined;

  /**
   * GenomicStudy.analysis.note Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Any notes capture with the analysis event
   * - **Definition:** Any notes capture with the analysis event.
   * - **FHIR Type:** `Annotation`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private note?: Annotation[] | undefined;

  /**
   * GenomicStudy.analysis.protocolPerformed Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The protocol that was performed for the analysis event
   * - **Definition:** The protocol that was performed for the analysis event.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Procedure',
   *       'http://hl7.org/fhir/StructureDefinition/Task',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private protocolPerformed?: Reference | undefined;

  /**
   * GenomicStudy.analysis.regionsStudied Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The genomic regions to be studied in the analysis (BED file)
   * - **Definition:** The genomic regions to be studied in the analysis (BED file).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private regionsStudied?: Reference[] | undefined;

  /**
   * GenomicStudy.analysis.regionsCalled Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Genomic regions actually called in the analysis event (BED file)
   * - **Definition:** Genomic regions actually called in the analysis event (BED file).
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *       'http://hl7.org/fhir/StructureDefinition/Observation',
   *     ]
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private regionsCalled?: Reference[] | undefined;

  /**
   * GenomicStudy.analysis.input Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Inputs for the analysis event
   * - **Definition:** Inputs for the analysis event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private input?: GenomicStudyAnalysisInputComponent[] | undefined;

  /**
   * GenomicStudy.analysis.output Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Outputs for the analysis event
   * - **Definition:** Outputs for the analysis event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private output?: GenomicStudyAnalysisOutputComponent[] | undefined;

  /**
   * GenomicStudy.analysis.performer Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Performer for the analysis event
   * - **Definition:** Performer for the analysis event.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private performer?: GenomicStudyAnalysisPerformerComponent[] | undefined;

  /**
   * GenomicStudy.analysis.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Devices used for the analysis (e.g., instruments, software), with settings and parameters
   * - **Definition:** Devices used for the analysis (e.g., instruments, software), with settings and parameters.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private device?: GenomicStudyAnalysisDeviceComponent[] | undefined;

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
      const optErrMsg = `Invalid GenomicStudy.analysis.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid GenomicStudy.analysis.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `methodType` property value as a CodeableConcept array
   */
  public getMethodType(): CodeableConcept[] {
    return this.methodType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `methodType` property.
   *
   * @param value - the `methodType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMethodType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.methodType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.methodType = value;
    } else {
      this.methodType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `methodType` array property.
   *
   * @param value - the `methodType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addMethodType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.methodType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initMethodType();
      this.methodType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `methodType` property exists and has a value; `false` otherwise
   */
  public hasMethodType(): boolean {
    return isDefinedList<CodeableConcept>(this.methodType) && this.methodType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `methodType` property
   */
  private initMethodType(): void {
    if(!this.hasMethodType()) {
      this.methodType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `changeType` property value as a CodeableConcept array
   */
  public getChangeType(): CodeableConcept[] {
    return this.changeType ?? ([] as CodeableConcept[]);
  }

  /**
   * Assigns the provided CodeableConcept array value to the `changeType` property.
   *
   * @param value - the `changeType` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setChangeType(value: CodeableConcept[] | undefined): this {
    if (isDefinedList<CodeableConcept>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.changeType; Provided value array has an element that is not an instance of CodeableConcept.`;
      assertFhirTypeList<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.changeType = value;
    } else {
      this.changeType = undefined;
    }
    return this;
  }

  /**
   * Add the provided CodeableConcept value to the `changeType` array property.
   *
   * @param value - the `changeType` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addChangeType(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.changeType; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.initChangeType();
      this.changeType?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `changeType` property exists and has a value; `false` otherwise
   */
  public hasChangeType(): boolean {
    return isDefinedList<CodeableConcept>(this.changeType) && this.changeType.some((item: CodeableConcept) => !item.isEmpty());
  }

  /**
   * Initialize the `changeType` property
   */
  private initChangeType(): void {
    if(!this.hasChangeType()) {
      this.changeType = [] as CodeableConcept[];
    }
  }

  /**
   * @returns the `genomeBuild` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getGenomeBuild(): CodeableConcept {
    return this.genomeBuild ?? new CodeableConcept();
  }

  /**
   * Assigns the provided GenomeBuild object value to the `genomeBuild` property.
   *
   * @param value - the `genomeBuild` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setGenomeBuild(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.genomeBuild; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.genomeBuild = value;
    } else {
      this.genomeBuild = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `genomeBuild` property exists and has a value; `false` otherwise
   */
  public hasGenomeBuild(): boolean {
    return isDefined<CodeableConcept>(this.genomeBuild) && !this.genomeBuild.isEmpty();
  }

  /**
   * @returns the `instantiatesCanonical` property value as a CanonicalType object if defined; else an empty CanonicalType object
   */
  public getInstantiatesCanonicalElement(): CanonicalType {
    return this.instantiatesCanonical ?? new CanonicalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instantiatesCanonical` property.
   *
   * @param element - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonicalElement(element: CanonicalType | undefined): this {
    if (isDefined<CanonicalType>(element)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.instantiatesCanonical; Provided element is not an instance of CanonicalType.`;
      assertFhirType<CanonicalType>(element, CanonicalType, optErrMsg);
      this.instantiatesCanonical = element;
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonicalElement(): boolean {
    return isDefined<CanonicalType>(this.instantiatesCanonical) && !this.instantiatesCanonical.isEmpty();
  }

  /**
   * @returns the `instantiatesCanonical` property value as a fhirCanonical if defined; else undefined
   */
  public getInstantiatesCanonical(): fhirCanonical | undefined {
    return this.instantiatesCanonical?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instantiatesCanonical` property.
   *
   * @param value - the `instantiatesCanonical` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesCanonical(value: fhirCanonical | undefined): this {
    if (isDefined<fhirCanonical>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.instantiatesCanonical (${String(value)})`;
      this.instantiatesCanonical = new CanonicalType(parseFhirPrimitiveData(value, fhirCanonicalSchema, optErrMsg));
    } else {
      this.instantiatesCanonical = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesCanonical` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesCanonical(): boolean {
    return this.hasInstantiatesCanonicalElement();
  }

  /**
   * @returns the `instantiatesUri` property value as a UriType object if defined; else an empty UriType object
   */
  public getInstantiatesUriElement(): UriType {
    return this.instantiatesUri ?? new UriType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `instantiatesUri` property.
   *
   * @param element - the `instantiatesUri` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUriElement(element: UriType | undefined): this {
    if (isDefined<UriType>(element)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.instantiatesUri; Provided element is not an instance of UriType.`;
      assertFhirType<UriType>(element, UriType, optErrMsg);
      this.instantiatesUri = element;
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUriElement(): boolean {
    return isDefined<UriType>(this.instantiatesUri) && !this.instantiatesUri.isEmpty();
  }

  /**
   * @returns the `instantiatesUri` property value as a fhirUri if defined; else undefined
   */
  public getInstantiatesUri(): fhirUri | undefined {
    return this.instantiatesUri?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `instantiatesUri` property.
   *
   * @param value - the `instantiatesUri` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setInstantiatesUri(value: fhirUri | undefined): this {
    if (isDefined<fhirUri>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.instantiatesUri (${String(value)})`;
      this.instantiatesUri = new UriType(parseFhirPrimitiveData(value, fhirUriSchema, optErrMsg));
    } else {
      this.instantiatesUri = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `instantiatesUri` property exists and has a value; `false` otherwise
   */
  public hasInstantiatesUri(): boolean {
    return this.hasInstantiatesUriElement();
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
      const optErrMsg = `Invalid GenomicStudy.analysis.title; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid GenomicStudy.analysis.title (${String(value)})`;
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
   * @returns the `focus` property value as a Reference array
   */
  public getFocus(): Reference[] {
    return this.focus ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `focus` property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.focus', ['Resource',])`
   *
   * @param value - the `focus` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.focus', [
    'Resource',
  ])
  public setFocus(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.focus = value;
    } else {
      this.focus = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `focus` array property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.focus', ['Resource',])`
   *
   * @param value - the `focus` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.focus', [
    'Resource',
  ])
  public addFocus(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initFocus();
      this.focus?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `focus` property exists and has a value; `false` otherwise
   */
  public hasFocus(): boolean {
    return isDefinedList<Reference>(this.focus) && this.focus.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `focus` property
   */
  private initFocus(): void {
    if (!this.hasFocus()) {
      this.focus = [] as Reference[];
    }
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
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.specimen', ['Specimen',])`
   *
   * @param value - the `specimen` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.specimen', [
    'Specimen',
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
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.specimen', ['Specimen',])`
   *
   * @param value - the `specimen` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.specimen', [
    'Specimen',
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
      const optErrMsg = `Invalid GenomicStudy.analysis.date; Provided element is not an instance of DateTimeType.`;
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
      const optErrMsg = `Invalid GenomicStudy.analysis.date (${String(value)})`;
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
      const optErrMsg = `Invalid GenomicStudy.analysis.note; Provided value array has an element that is not an instance of Annotation.`;
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
      const optErrMsg = `Invalid GenomicStudy.analysis.note; Provided element is not an instance of Annotation.`;
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
   * @returns the `protocolPerformed` property value as a Reference object; else an empty Reference object
   */
  public getProtocolPerformed(): Reference {
    return this.protocolPerformed ?? new Reference();
  }

  /**
   * Assigns the provided ProtocolPerformed object value to the `protocolPerformed` property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.protocolPerformed', ['Procedure','Task',])`
   *
   * @param value - the `protocolPerformed` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.protocolPerformed', [
    'Procedure',
  
    'Task',
  ])
  public setProtocolPerformed(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.protocolPerformed = value;
    } else {
      this.protocolPerformed = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `protocolPerformed` property exists and has a value; `false` otherwise
   */
  public hasProtocolPerformed(): boolean {
    return isDefined<Reference>(this.protocolPerformed) && !this.protocolPerformed.isEmpty();
  }

  /**
   * @returns the `regionsStudied` property value as a Reference array
   */
  public getRegionsStudied(): Reference[] {
    return this.regionsStudied ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `regionsStudied` property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.regionsStudied', ['DocumentReference','Observation',])`
   *
   * @param value - the `regionsStudied` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.regionsStudied', [
    'DocumentReference',
  
    'Observation',
  ])
  public setRegionsStudied(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.regionsStudied = value;
    } else {
      this.regionsStudied = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `regionsStudied` array property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.regionsStudied', ['DocumentReference','Observation',])`
   *
   * @param value - the `regionsStudied` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.regionsStudied', [
    'DocumentReference',
  
    'Observation',
  ])
  public addRegionsStudied(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRegionsStudied();
      this.regionsStudied?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `regionsStudied` property exists and has a value; `false` otherwise
   */
  public hasRegionsStudied(): boolean {
    return isDefinedList<Reference>(this.regionsStudied) && this.regionsStudied.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `regionsStudied` property
   */
  private initRegionsStudied(): void {
    if (!this.hasRegionsStudied()) {
      this.regionsStudied = [] as Reference[];
    }
  }

  /**
   * @returns the `regionsCalled` property value as a Reference array
   */
  public getRegionsCalled(): Reference[] {
    return this.regionsCalled ?? ([] as Reference[]);
  }

  /**
   * Assigns the provided Reference array value to the `regionsCalled` property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.regionsCalled', ['DocumentReference','Observation',])`
   *
   * @param value - the `regionsCalled` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.regionsCalled', [
    'DocumentReference',
  
    'Observation',
  ])
  public setRegionsCalled(value: Reference[] | undefined): this {
    if (isDefinedList<Reference>(value)) {
      // assertFhirTypeList<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.regionsCalled = value;
    } else {
      this.regionsCalled = undefined;
    }
    return this;
  }

  /**
   * Add the provided Reference value to the `regionsCalled` array property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.regionsCalled', ['DocumentReference','Observation',])`
   *
   * @param value - the `regionsCalled` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.regionsCalled', [
    'DocumentReference',
  
    'Observation',
  ])
  public addRegionsCalled(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.initRegionsCalled();
      this.regionsCalled?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `regionsCalled` property exists and has a value; `false` otherwise
   */
  public hasRegionsCalled(): boolean {
    return isDefinedList<Reference>(this.regionsCalled) && this.regionsCalled.some((item: Reference) => !item.isEmpty());
  }

  /**
   * Initialize the `regionsCalled` property
   */
  private initRegionsCalled(): void {
    if (!this.hasRegionsCalled()) {
      this.regionsCalled = [] as Reference[];
    }
  }

  /**
   * @returns the `input` property value as a GenomicStudyAnalysisInputComponent array
   */
  public getInput(): GenomicStudyAnalysisInputComponent[] {
    return this.input ?? ([] as GenomicStudyAnalysisInputComponent[]);
  }

  /**
   * Assigns the provided GenomicStudyAnalysisInputComponent array value to the `input` property.
   *
   * @param value - the `input` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setInput(value: GenomicStudyAnalysisInputComponent[] | undefined): this {
    if (isDefinedList<GenomicStudyAnalysisInputComponent>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.input; Provided value array has an element that is not an instance of GenomicStudyAnalysisInputComponent.`;
      assertFhirTypeList<GenomicStudyAnalysisInputComponent>(value, GenomicStudyAnalysisInputComponent, optErrMsg);
      this.input = value;
    } else {
      this.input = undefined;
    }
    return this;
  }

  /**
   * Add the provided GenomicStudyAnalysisInputComponent value to the `input` array property.
   *
   * @param value - the `input` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addInput(value: GenomicStudyAnalysisInputComponent | undefined): this {
    if (isDefined<GenomicStudyAnalysisInputComponent>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.input; Provided element is not an instance of GenomicStudyAnalysisInputComponent.`;
      assertFhirType<GenomicStudyAnalysisInputComponent>(value, GenomicStudyAnalysisInputComponent, optErrMsg);
      this.initInput();
      this.input?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `input` property exists and has a value; `false` otherwise
   */
  public hasInput(): boolean {
    return isDefinedList<GenomicStudyAnalysisInputComponent>(this.input) && this.input.some((item: GenomicStudyAnalysisInputComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `input` property
   */
  private initInput(): void {
    if(!this.hasInput()) {
      this.input = [] as GenomicStudyAnalysisInputComponent[];
    }
  }

  /**
   * @returns the `output` property value as a GenomicStudyAnalysisOutputComponent array
   */
  public getOutput(): GenomicStudyAnalysisOutputComponent[] {
    return this.output ?? ([] as GenomicStudyAnalysisOutputComponent[]);
  }

  /**
   * Assigns the provided GenomicStudyAnalysisOutputComponent array value to the `output` property.
   *
   * @param value - the `output` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setOutput(value: GenomicStudyAnalysisOutputComponent[] | undefined): this {
    if (isDefinedList<GenomicStudyAnalysisOutputComponent>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.output; Provided value array has an element that is not an instance of GenomicStudyAnalysisOutputComponent.`;
      assertFhirTypeList<GenomicStudyAnalysisOutputComponent>(value, GenomicStudyAnalysisOutputComponent, optErrMsg);
      this.output = value;
    } else {
      this.output = undefined;
    }
    return this;
  }

  /**
   * Add the provided GenomicStudyAnalysisOutputComponent value to the `output` array property.
   *
   * @param value - the `output` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addOutput(value: GenomicStudyAnalysisOutputComponent | undefined): this {
    if (isDefined<GenomicStudyAnalysisOutputComponent>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.output; Provided element is not an instance of GenomicStudyAnalysisOutputComponent.`;
      assertFhirType<GenomicStudyAnalysisOutputComponent>(value, GenomicStudyAnalysisOutputComponent, optErrMsg);
      this.initOutput();
      this.output?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `output` property exists and has a value; `false` otherwise
   */
  public hasOutput(): boolean {
    return isDefinedList<GenomicStudyAnalysisOutputComponent>(this.output) && this.output.some((item: GenomicStudyAnalysisOutputComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `output` property
   */
  private initOutput(): void {
    if(!this.hasOutput()) {
      this.output = [] as GenomicStudyAnalysisOutputComponent[];
    }
  }

  /**
   * @returns the `performer` property value as a GenomicStudyAnalysisPerformerComponent array
   */
  public getPerformer(): GenomicStudyAnalysisPerformerComponent[] {
    return this.performer ?? ([] as GenomicStudyAnalysisPerformerComponent[]);
  }

  /**
   * Assigns the provided GenomicStudyAnalysisPerformerComponent array value to the `performer` property.
   *
   * @param value - the `performer` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPerformer(value: GenomicStudyAnalysisPerformerComponent[] | undefined): this {
    if (isDefinedList<GenomicStudyAnalysisPerformerComponent>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.performer; Provided value array has an element that is not an instance of GenomicStudyAnalysisPerformerComponent.`;
      assertFhirTypeList<GenomicStudyAnalysisPerformerComponent>(value, GenomicStudyAnalysisPerformerComponent, optErrMsg);
      this.performer = value;
    } else {
      this.performer = undefined;
    }
    return this;
  }

  /**
   * Add the provided GenomicStudyAnalysisPerformerComponent value to the `performer` array property.
   *
   * @param value - the `performer` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPerformer(value: GenomicStudyAnalysisPerformerComponent | undefined): this {
    if (isDefined<GenomicStudyAnalysisPerformerComponent>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.performer; Provided element is not an instance of GenomicStudyAnalysisPerformerComponent.`;
      assertFhirType<GenomicStudyAnalysisPerformerComponent>(value, GenomicStudyAnalysisPerformerComponent, optErrMsg);
      this.initPerformer();
      this.performer?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `performer` property exists and has a value; `false` otherwise
   */
  public hasPerformer(): boolean {
    return isDefinedList<GenomicStudyAnalysisPerformerComponent>(this.performer) && this.performer.some((item: GenomicStudyAnalysisPerformerComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `performer` property
   */
  private initPerformer(): void {
    if(!this.hasPerformer()) {
      this.performer = [] as GenomicStudyAnalysisPerformerComponent[];
    }
  }

  /**
   * @returns the `device` property value as a GenomicStudyAnalysisDeviceComponent array
   */
  public getDevice(): GenomicStudyAnalysisDeviceComponent[] {
    return this.device ?? ([] as GenomicStudyAnalysisDeviceComponent[]);
  }

  /**
   * Assigns the provided GenomicStudyAnalysisDeviceComponent array value to the `device` property.
   *
   * @param value - the `device` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setDevice(value: GenomicStudyAnalysisDeviceComponent[] | undefined): this {
    if (isDefinedList<GenomicStudyAnalysisDeviceComponent>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.device; Provided value array has an element that is not an instance of GenomicStudyAnalysisDeviceComponent.`;
      assertFhirTypeList<GenomicStudyAnalysisDeviceComponent>(value, GenomicStudyAnalysisDeviceComponent, optErrMsg);
      this.device = value;
    } else {
      this.device = undefined;
    }
    return this;
  }

  /**
   * Add the provided GenomicStudyAnalysisDeviceComponent value to the `device` array property.
   *
   * @param value - the `device` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addDevice(value: GenomicStudyAnalysisDeviceComponent | undefined): this {
    if (isDefined<GenomicStudyAnalysisDeviceComponent>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.device; Provided element is not an instance of GenomicStudyAnalysisDeviceComponent.`;
      assertFhirType<GenomicStudyAnalysisDeviceComponent>(value, GenomicStudyAnalysisDeviceComponent, optErrMsg);
      this.initDevice();
      this.device?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefinedList<GenomicStudyAnalysisDeviceComponent>(this.device) && this.device.some((item: GenomicStudyAnalysisDeviceComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `device` property
   */
  private initDevice(): void {
    if(!this.hasDevice()) {
      this.device = [] as GenomicStudyAnalysisDeviceComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'GenomicStudy.analysis';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.methodType,
      this.changeType,
      this.genomeBuild,
      this.instantiatesCanonical,
      this.instantiatesUri,
      this.title,
      this.focus,
      this.specimen,
      this.date,
      this.note,
      this.protocolPerformed,
      this.regionsStudied,
      this.regionsCalled,
      this.input,
      this.output,
      this.performer,
      this.device,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GenomicStudyAnalysisComponent {
    const dest = new GenomicStudyAnalysisComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GenomicStudyAnalysisComponent): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const methodTypeList = copyListValues<CodeableConcept>(this.methodType);
    dest.methodType = methodTypeList.length === 0 ? undefined : methodTypeList;
    const changeTypeList = copyListValues<CodeableConcept>(this.changeType);
    dest.changeType = changeTypeList.length === 0 ? undefined : changeTypeList;
    dest.genomeBuild = this.genomeBuild?.copy();
    dest.instantiatesCanonical = this.instantiatesCanonical?.copy();
    dest.instantiatesUri = this.instantiatesUri?.copy();
    dest.title = this.title?.copy();
    const focusList = copyListValues<Reference>(this.focus);
    dest.focus = focusList.length === 0 ? undefined : focusList;
    const specimenList = copyListValues<Reference>(this.specimen);
    dest.specimen = specimenList.length === 0 ? undefined : specimenList;
    dest.date = this.date?.copy();
    const noteList = copyListValues<Annotation>(this.note);
    dest.note = noteList.length === 0 ? undefined : noteList;
    dest.protocolPerformed = this.protocolPerformed?.copy();
    const regionsStudiedList = copyListValues<Reference>(this.regionsStudied);
    dest.regionsStudied = regionsStudiedList.length === 0 ? undefined : regionsStudiedList;
    const regionsCalledList = copyListValues<Reference>(this.regionsCalled);
    dest.regionsCalled = regionsCalledList.length === 0 ? undefined : regionsCalledList;
    const inputList = copyListValues<GenomicStudyAnalysisInputComponent>(this.input);
    dest.input = inputList.length === 0 ? undefined : inputList;
    const outputList = copyListValues<GenomicStudyAnalysisOutputComponent>(this.output);
    dest.output = outputList.length === 0 ? undefined : outputList;
    const performerList = copyListValues<GenomicStudyAnalysisPerformerComponent>(this.performer);
    dest.performer = performerList.length === 0 ? undefined : performerList;
    const deviceList = copyListValues<GenomicStudyAnalysisDeviceComponent>(this.device);
    dest.device = deviceList.length === 0 ? undefined : deviceList;
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

    if (this.hasMethodType()) {
      setFhirComplexListJson(this.getMethodType(), 'methodType', jsonObj);
    }

    if (this.hasChangeType()) {
      setFhirComplexListJson(this.getChangeType(), 'changeType', jsonObj);
    }

    if (this.hasGenomeBuild()) {
      setFhirComplexJson(this.getGenomeBuild(), 'genomeBuild', jsonObj);
    }

    if (this.hasInstantiatesCanonicalElement()) {
      setFhirPrimitiveJson<fhirCanonical>(this.getInstantiatesCanonicalElement(), 'instantiatesCanonical', jsonObj);
    }

    if (this.hasInstantiatesUriElement()) {
      setFhirPrimitiveJson<fhirUri>(this.getInstantiatesUriElement(), 'instantiatesUri', jsonObj);
    }

    if (this.hasTitleElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTitleElement(), 'title', jsonObj);
    }

    if (this.hasFocus()) {
      setFhirComplexListJson(this.getFocus(), 'focus', jsonObj);
    }

    if (this.hasSpecimen()) {
      setFhirComplexListJson(this.getSpecimen(), 'specimen', jsonObj);
    }

    if (this.hasDateElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getDateElement(), 'date', jsonObj);
    }

    if (this.hasNote()) {
      setFhirComplexListJson(this.getNote(), 'note', jsonObj);
    }

    if (this.hasProtocolPerformed()) {
      setFhirComplexJson(this.getProtocolPerformed(), 'protocolPerformed', jsonObj);
    }

    if (this.hasRegionsStudied()) {
      setFhirComplexListJson(this.getRegionsStudied(), 'regionsStudied', jsonObj);
    }

    if (this.hasRegionsCalled()) {
      setFhirComplexListJson(this.getRegionsCalled(), 'regionsCalled', jsonObj);
    }

    if (this.hasInput()) {
      setFhirBackboneElementListJson(this.getInput(), 'input', jsonObj);
    }

    if (this.hasOutput()) {
      setFhirBackboneElementListJson(this.getOutput(), 'output', jsonObj);
    }

    if (this.hasPerformer()) {
      setFhirBackboneElementListJson(this.getPerformer(), 'performer', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirBackboneElementListJson(this.getDevice(), 'device', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * GenomicStudyAnalysisInputComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Inputs for the analysis event
 * - **Definition:** Inputs for the analysis event.
 *
 * @category Data Models: Resource
 * @see [FHIR GenomicStudy](http://hl7.org/fhir/StructureDefinition/GenomicStudy)
 */
export class GenomicStudyAnalysisInputComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `GenomicStudyAnalysisInputComponent` JSON to instantiate the GenomicStudyAnalysisInputComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `GenomicStudyAnalysisInputComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GenomicStudyAnalysisInputComponent
   * @returns GenomicStudyAnalysisInputComponent data model or undefined for `GenomicStudyAnalysisInputComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): GenomicStudyAnalysisInputComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GenomicStudyAnalysisInputComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GenomicStudyAnalysisInputComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    const classMetadata: DecoratorMetadataObject | null = GenomicStudyAnalysisInputComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for GenomicStudyAnalysisInputComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'file';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFile(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    fieldName = 'generatedBy[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const generatedBy: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setGeneratedBy(generatedBy);

    return instance;
  }

  /**
   * GenomicStudy.analysis.input.file Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** File containing input data
   * - **Definition:** File containing input data.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private file?: Reference | undefined;

  /**
   * GenomicStudy.analysis.input.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of input data (e.g., BAM, CRAM, or FASTA)
   * - **Definition:** Type of input data, e.g., BAM, CRAM, or FASTA.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private type_?: CodeableConcept | undefined;

  /**
   * GenomicStudy.analysis.input.generatedBy[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('GenomicStudy.analysis.input.generatedBy[x]', ['Identifier','Reference',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The analysis event or other GenomicStudy that generated this input file
   * - **Definition:** The analysis event or other GenomicStudy that generated this input file.
   * - **FHIR Types:**
   *     'Identifier',
   *     'Reference',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  @ChoiceDataTypesMeta('GenomicStudy.analysis.input.generatedBy[x]',[
    'Identifier',
    'Reference',
  ])
  private generatedBy?: IDataType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `file` property value as a Reference object; else an empty Reference object
   */
  public getFile(): Reference {
    return this.file ?? new Reference();
  }

  /**
   * Assigns the provided File object value to the `file` property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.input.file', ['DocumentReference',])`
   *
   * @param value - the `file` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.input.file', [
    'DocumentReference',
  ])
  public setFile(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.file = value;
    } else {
      this.file = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `file` property exists and has a value; `false` otherwise
   */
  public hasFile(): boolean {
    return isDefined<Reference>(this.file) && !this.file.isEmpty();
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
      const optErrMsg = `Invalid GenomicStudy.analysis.input.type; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `generatedBy` property value as a DataType object if defined; else undefined
   */
  public getGeneratedBy(): IDataType | undefined {
    return this.generatedBy;
  }

  /**
   * Assigns the provided DataType object value to the `generatedBy` property.
   *
   * @decorator `@ChoiceDataTypes('GenomicStudy.analysis.input.generatedBy[x]')`
   *
   * @param value - the `generatedBy` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('GenomicStudy.analysis.input.generatedBy[x]')
  public setGeneratedBy(value: IDataType | undefined): this {
    if (isDefined<IDataType>(value)) {
      // assertFhirType<IDataType>(value, DataType) unnecessary because @ChoiceDataTypes decorator ensures proper type/value
      this.generatedBy = value;
    } else {
      this.generatedBy = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `generatedBy` property exists and has a value; `false` otherwise
   */
  public hasGeneratedBy(): boolean {
    return isDefined<IDataType>(this.generatedBy) && !this.generatedBy.isEmpty();
  }

  // *** NOTE ***
  // Following choice datatype-specific "get"/"has" methods are added for each choice data type - one pair of methods for each choice data type

  /**
   * @returns the `generatedBy` property value as a Identifier object if defined; else undefined
   */
  public getGeneratedByIdentifier(): Identifier | undefined {
    if (!isDefined<IDataType | undefined>(this.generatedBy)) {
      return undefined;
    }
    if (!(this.generatedBy instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for GenomicStudy.analysis.input.generatedBy[x]: Expected Identifier but encountered ${this.generatedBy.fhirType()}`,
      );
    }
    return this.generatedBy;
  }

  /**
   * @returns `true` if the `generatedBy` property exists as a Identifier and has a value; `false` otherwise
   */
  public hasGeneratedByIdentifier(): boolean {
    return this.hasGeneratedBy() && this.generatedBy instanceof Identifier;
  }

  /**
   * @returns the `generatedBy` property value as a Reference object if defined; else undefined
   */
  public getGeneratedByReference(): Reference | undefined {
    if (!isDefined<IDataType | undefined>(this.generatedBy)) {
      return undefined;
    }
    if (!(this.generatedBy instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for GenomicStudy.analysis.input.generatedBy[x]: Expected Reference but encountered ${this.generatedBy.fhirType()}`,
      );
    }
    return this.generatedBy;
  }

  /**
   * @returns `true` if the `generatedBy` property exists as a Reference and has a value; `false` otherwise
   */
  public hasGeneratedByReference(): boolean {
    return this.hasGeneratedBy() && this.generatedBy instanceof Reference;
  }

  // End of choice datatype-specific "get"/"has" methods

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'GenomicStudy.analysis.input';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.file,
      this.type_,
      this.generatedBy,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GenomicStudyAnalysisInputComponent {
    const dest = new GenomicStudyAnalysisInputComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GenomicStudyAnalysisInputComponent): void {
    super.copyValues(dest);
    dest.file = this.file?.copy();
    dest.type_ = this.type_?.copy();
    dest.generatedBy = this.generatedBy?.copy() as IDataType;
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

    if (this.hasFile()) {
      setFhirComplexJson(this.getFile(), 'file', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    if (this.hasGeneratedBy()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getGeneratedBy()!, 'generatedBy', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * GenomicStudyAnalysisOutputComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Outputs for the analysis event
 * - **Definition:** Outputs for the analysis event.
 *
 * @category Data Models: Resource
 * @see [FHIR GenomicStudy](http://hl7.org/fhir/StructureDefinition/GenomicStudy)
 */
export class GenomicStudyAnalysisOutputComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `GenomicStudyAnalysisOutputComponent` JSON to instantiate the GenomicStudyAnalysisOutputComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `GenomicStudyAnalysisOutputComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GenomicStudyAnalysisOutputComponent
   * @returns GenomicStudyAnalysisOutputComponent data model or undefined for `GenomicStudyAnalysisOutputComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): GenomicStudyAnalysisOutputComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GenomicStudyAnalysisOutputComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GenomicStudyAnalysisOutputComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'file';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFile(datatype);
    }

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setType(datatype);
    }

    return instance;
  }

  /**
   * GenomicStudy.analysis.output.file Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** File containing output data
   * - **Definition:** File containing output data.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/DocumentReference',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private file?: Reference | undefined;

  /**
   * GenomicStudy.analysis.output.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Type of output data (e.g., VCF, MAF, or BAM)
   * - **Definition:** Type of output data, e.g., VCF, MAF, or BAM.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `file` property value as a Reference object; else an empty Reference object
   */
  public getFile(): Reference {
    return this.file ?? new Reference();
  }

  /**
   * Assigns the provided File object value to the `file` property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.output.file', ['DocumentReference',])`
   *
   * @param value - the `file` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.output.file', [
    'DocumentReference',
  ])
  public setFile(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.file = value;
    } else {
      this.file = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `file` property exists and has a value; `false` otherwise
   */
  public hasFile(): boolean {
    return isDefined<Reference>(this.file) && !this.file.isEmpty();
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
      const optErrMsg = `Invalid GenomicStudy.analysis.output.type; Provided element is not an instance of CodeableConcept.`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'GenomicStudy.analysis.output';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.file,
      this.type_,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GenomicStudyAnalysisOutputComponent {
    const dest = new GenomicStudyAnalysisOutputComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GenomicStudyAnalysisOutputComponent): void {
    super.copyValues(dest);
    dest.file = this.file?.copy();
    dest.type_ = this.type_?.copy();
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

    if (this.hasFile()) {
      setFhirComplexJson(this.getFile(), 'file', jsonObj);
    }

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * GenomicStudyAnalysisPerformerComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Performer for the analysis event
 * - **Definition:** Performer for the analysis event.
 *
 * @category Data Models: Resource
 * @see [FHIR GenomicStudy](http://hl7.org/fhir/StructureDefinition/GenomicStudy)
 */
export class GenomicStudyAnalysisPerformerComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `GenomicStudyAnalysisPerformerComponent` JSON to instantiate the GenomicStudyAnalysisPerformerComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `GenomicStudyAnalysisPerformerComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GenomicStudyAnalysisPerformerComponent
   * @returns GenomicStudyAnalysisPerformerComponent data model or undefined for `GenomicStudyAnalysisPerformerComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): GenomicStudyAnalysisPerformerComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GenomicStudyAnalysisPerformerComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GenomicStudyAnalysisPerformerComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'actor';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setActor(datatype);
    }

    fieldName = 'role';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRole(datatype);
    }

    return instance;
  }

  /**
   * GenomicStudy.analysis.performer.actor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The organization, healthcare professional, or others who participated in performing this analysis
   * - **Definition:** The organization, healthcare professional, or others who participated in performing this analysis.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Practitioner',
   *       'http://hl7.org/fhir/StructureDefinition/PractitionerRole',
   *       'http://hl7.org/fhir/StructureDefinition/Organization',
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private actor?: Reference | undefined;

  /**
   * GenomicStudy.analysis.performer.role Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Role of the actor for this analysis
   * - **Definition:** Role of the actor for this analysis.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private role?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `actor` property value as a Reference object; else an empty Reference object
   */
  public getActor(): Reference {
    return this.actor ?? new Reference();
  }

  /**
   * Assigns the provided Actor object value to the `actor` property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.performer.actor', ['Practitioner','PractitionerRole','Organization','Device',])`
   *
   * @param value - the `actor` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.performer.actor', [
    'Practitioner',
  
    'PractitionerRole',
  
    'Organization',
  
    'Device',
  ])
  public setActor(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.actor = value;
    } else {
      this.actor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `actor` property exists and has a value; `false` otherwise
   */
  public hasActor(): boolean {
    return isDefined<Reference>(this.actor) && !this.actor.isEmpty();
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
      const optErrMsg = `Invalid GenomicStudy.analysis.performer.role; Provided element is not an instance of CodeableConcept.`;
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
    return 'GenomicStudy.analysis.performer';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.actor,
      this.role,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GenomicStudyAnalysisPerformerComponent {
    const dest = new GenomicStudyAnalysisPerformerComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GenomicStudyAnalysisPerformerComponent): void {
    super.copyValues(dest);
    dest.actor = this.actor?.copy();
    dest.role = this.role?.copy();
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

    if (this.hasActor()) {
      setFhirComplexJson(this.getActor(), 'actor', jsonObj);
    }

    if (this.hasRole()) {
      setFhirComplexJson(this.getRole(), 'role', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * GenomicStudyAnalysisDeviceComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Devices used for the analysis (e.g., instruments, software), with settings and parameters
 * - **Definition:** Devices used for the analysis (e.g., instruments, software), with settings and parameters.
 *
 * @category Data Models: Resource
 * @see [FHIR GenomicStudy](http://hl7.org/fhir/StructureDefinition/GenomicStudy)
 */
export class GenomicStudyAnalysisDeviceComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `GenomicStudyAnalysisDeviceComponent` JSON to instantiate the GenomicStudyAnalysisDeviceComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `GenomicStudyAnalysisDeviceComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to GenomicStudyAnalysisDeviceComponent
   * @returns GenomicStudyAnalysisDeviceComponent data model or undefined for `GenomicStudyAnalysisDeviceComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): GenomicStudyAnalysisDeviceComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'GenomicStudyAnalysisDeviceComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new GenomicStudyAnalysisDeviceComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setDevice(datatype);
    }

    fieldName = 'function';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setFunction(datatype);
    }

    return instance;
  }

  /**
   * GenomicStudy.analysis.device.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Device used for the analysis
   * - **Definition:** Device used for the analysis.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private device?: Reference | undefined;

  /**
   * GenomicStudy.analysis.device.function Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Specific function for the device used for the analysis
   * - **Definition:** Specific function for the device used for the analysis.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private function_?: CodeableConcept | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `device` property value as a Reference object; else an empty Reference object
   */
  public getDevice(): Reference {
    return this.device ?? new Reference();
  }

  /**
   * Assigns the provided Device object value to the `device` property.
   *
   * @decorator `@ReferenceTargets('GenomicStudy.analysis.device.device', ['Device',])`
   *
   * @param value - the `device` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('GenomicStudy.analysis.device.device', [
    'Device',
  ])
  public setDevice(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.device = value;
    } else {
      this.device = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `device` property exists and has a value; `false` otherwise
   */
  public hasDevice(): boolean {
    return isDefined<Reference>(this.device) && !this.device.isEmpty();
  }

  /**
   * @returns the `function_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getFunction(): CodeableConcept {
    return this.function_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Function object value to the `function_` property.
   *
   * @param value - the `function_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setFunction(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid GenomicStudy.analysis.device.function; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.function_ = value;
    } else {
      this.function_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `function_` property exists and has a value; `false` otherwise
   */
  public hasFunction(): boolean {
    return isDefined<CodeableConcept>(this.function_) && !this.function_.isEmpty();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'GenomicStudy.analysis.device';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.device,
      this.function_,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): GenomicStudyAnalysisDeviceComponent {
    const dest = new GenomicStudyAnalysisDeviceComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: GenomicStudyAnalysisDeviceComponent): void {
    super.copyValues(dest);
    dest.device = this.device?.copy();
    dest.function_ = this.function_?.copy();
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

    if (this.hasDevice()) {
      setFhirComplexJson(this.getDevice(), 'device', jsonObj);
    }

    if (this.hasFunction()) {
      setFhirComplexJson(this.getFunction(), 'function', jsonObj);
    }

    return jsonObj;
  }
}
