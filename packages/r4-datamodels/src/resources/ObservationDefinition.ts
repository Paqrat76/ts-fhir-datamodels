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
  CodeType,
  DecimalType,
  DomainResource,
  EnumCodeType,
  FhirError,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  INSTANCE_EMPTY_ERROR_MSG,
  IntegerType,
  JSON,
  PrimitiveTypeJson,
  REQUIRED_PROPERTIES_DO_NOT_EXIST,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
  ReferenceTargets,
  StringType,
  assertEnumCodeType,
  assertEnumCodeTypeList,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirBoolean,
  fhirBooleanSchema,
  fhirCode,
  fhirCodeSchema,
  fhirDecimal,
  fhirDecimalSchema,
  fhirInteger,
  fhirIntegerSchema,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
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
  setFhirPrimitiveListJson,
} from '@paq-ts-fhir/fhir-core';
import { AdministrativeGenderEnum } from '../code-systems/AdministrativeGenderEnum';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Range, Reference } from '../complex-types/complex-datatypes';
import { ObservationRangeCategoryEnum } from '../code-systems/ObservationRangeCategoryEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';
import { PermittedDataTypeEnum } from '../code-systems/PermittedDataTypeEnum';

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
 * - **FHIR Version:** 4.0.1
 *
 * @category Data Models: Resource
 * @see [FHIR ObservationDefinition](http://hl7.org/fhir/StructureDefinition/ObservationDefinition)
 */
export class ObservationDefinition extends DomainResource implements IDomainResource {
  constructor(code: CodeableConcept | null = null) {
    super();

    this.permittedDataTypeEnum = new PermittedDataTypeEnum();

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
   * @throws {@link FhirError} if the provided JSON is missing required properties
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

    const missingReqdProperties: string[] = [];

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
        missingReqdProperties.push(sourceField);
      } else {
        instance.setCode(datatype);
      }
    } else {
      missingReqdProperties.push(sourceField);
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

    fieldName = 'method';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMethod(datatype);
    }

    fieldName = 'preferredReportName';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setPreferredReportNameElement(datatype);
    }

    fieldName = 'quantitativeDetails';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const component: ObservationDefinitionQuantitativeDetailsComponent | undefined = ObservationDefinitionQuantitativeDetailsComponent.parse(classJsonObj[fieldName]!, sourceField);
      instance.setQuantitativeDetails(component);
    }

    fieldName = 'qualifiedInterval';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: ObservationDefinitionQualifiedIntervalComponent | undefined = ObservationDefinitionQualifiedIntervalComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addQualifiedInterval(component);
        }
      });
    }

    fieldName = 'validCodedValueSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setValidCodedValueSet(datatype);
    }

    fieldName = 'normalCodedValueSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setNormalCodedValueSet(datatype);
    }

    fieldName = 'abnormalCodedValueSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setAbnormalCodedValueSet(datatype);
    }

    fieldName = 'criticalCodedValueSet';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCriticalCodedValueSet(datatype);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_REQD_IN_JSON} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ObservationDefinition.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Category of observation
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
   * - **Short:** Type of observation (code / type)
   * - **Definition:** Describes what will be observed. Sometimes this is called the observation "name".
   * - **Requirements:** Knowing what kind of observation is being made is essential to understanding the observation.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private code: CodeableConcept | null;

  /**
   * ObservationDefinition.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Business identifier for this ObservationDefinition instance
   * - **Definition:** A unique identifier assigned to this ObservationDefinition artifact.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

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
   * - **Short:** Multiple results allowed
   * - **Definition:** Multiple results allowed for observations conforming to this ObservationDefinition.
   * - **Comment:** An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
   * - **FHIR Type:** `boolean`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private multipleResultsAllowed?: BooleanType | undefined;

  /**
   * ObservationDefinition.method Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Method used to produce the observation
   * - **Definition:** The method or technique used to perform the observation.
   * - **Comment:** Only used if not implicit in observation code.
   * - **Requirements:** In some cases, method can impact results.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private method?: CodeableConcept | undefined;

  /**
   * ObservationDefinition.preferredReportName Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Preferred report name
   * - **Definition:** The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private preferredReportName?: StringType | undefined;

  /**
   * ObservationDefinition.quantitativeDetails Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Characteristics of quantitative results
   * - **Definition:** Characteristics for quantitative results of this observation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private quantitativeDetails?: ObservationDefinitionQuantitativeDetailsComponent | undefined;

  /**
   * ObservationDefinition.qualifiedInterval Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Qualified range for continuous and ordinal observation results
   * - **Definition:** Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private qualifiedInterval?: ObservationDefinitionQualifiedIntervalComponent[] | undefined;

  /**
   * ObservationDefinition.validCodedValueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value set of valid coded values for the observations conforming to this ObservationDefinition
   * - **Definition:** The set of valid coded results for the observations  conforming to this ObservationDefinition.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private validCodedValueSet?: Reference | undefined;

  /**
   * ObservationDefinition.normalCodedValueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value set of normal coded values for the observations conforming to this ObservationDefinition
   * - **Definition:** The set of normal coded results for the observations conforming to this ObservationDefinition.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private normalCodedValueSet?: Reference | undefined;

  /**
   * ObservationDefinition.abnormalCodedValueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value set of abnormal coded values for the observations conforming to this ObservationDefinition
   * - **Definition:** The set of abnormal coded results for the observation conforming to this ObservationDefinition.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private abnormalCodedValueSet?: Reference | undefined;

  /**
   * ObservationDefinition.criticalCodedValueSet Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Value set of critical coded values for the observations conforming to this ObservationDefinition
   * - **Definition:** The set of critical coded results for the observation conforming to this ObservationDefinition.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/ValueSet',
   *     ]
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private criticalCodedValueSet?: Reference | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

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
   * @returns the `code` property value as a CodeableConcept object if defined; else null
   */
  public getCode(): CodeableConcept | null {
    return this.code;
  }

  /**
   * Assigns the provided CodeableConcept object value to the `code` property.
   *
   * @param value - the `code` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCode(value: CodeableConcept): this {
    assertIsDefined<CodeableConcept>(value, `ObservationDefinition.code is required`);
    const optErrMsg = `Invalid ObservationDefinition.code; Provided element is not an instance of CodeableConcept.`;
    assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
    this.code = value;
    return this;
  }

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  public hasCode(): boolean {
    return isDefined<CodeableConcept>(this.code) && !this.code.isEmpty();
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
      const optErrMsg = `Invalid ObservationDefinition.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid ObservationDefinition.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `quantitativeDetails` property value as a ObservationDefinitionQuantitativeDetailsComponent object if defined; else an empty ObservationDefinitionQuantitativeDetailsComponent object
   */
  public getQuantitativeDetails(): ObservationDefinitionQuantitativeDetailsComponent {
    return this.quantitativeDetails ?? new ObservationDefinitionQuantitativeDetailsComponent();
  }

  /**
   * Assigns the provided QuantitativeDetails object value to the `quantitativeDetails` property.
   *
   * @param value - the `quantitativeDetails` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQuantitativeDetails(value: ObservationDefinitionQuantitativeDetailsComponent | undefined): this {
    if (isDefined<ObservationDefinitionQuantitativeDetailsComponent>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.quantitativeDetails; Provided element is not an instance of ObservationDefinitionQuantitativeDetailsComponent.`;
      assertFhirType<ObservationDefinitionQuantitativeDetailsComponent>(value, ObservationDefinitionQuantitativeDetailsComponent, optErrMsg);
      this.quantitativeDetails = value;
    } else {
      this.quantitativeDetails = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `quantitativeDetails` property exists and has a value; `false` otherwise
   */
  public hasQuantitativeDetails(): boolean {
    return isDefined<ObservationDefinitionQuantitativeDetailsComponent>(this.quantitativeDetails) && !this.quantitativeDetails.isEmpty();
  }

  /**
   * @returns the `qualifiedInterval` property value as a ObservationDefinitionQualifiedIntervalComponent array
   */
  public getQualifiedInterval(): ObservationDefinitionQualifiedIntervalComponent[] {
    return this.qualifiedInterval ?? ([] as ObservationDefinitionQualifiedIntervalComponent[]);
  }

  /**
   * Assigns the provided ObservationDefinitionQualifiedIntervalComponent array value to the `qualifiedInterval` property.
   *
   * @param value - the `qualifiedInterval` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setQualifiedInterval(value: ObservationDefinitionQualifiedIntervalComponent[] | undefined): this {
    if (isDefinedList<ObservationDefinitionQualifiedIntervalComponent>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval; Provided value array has an element that is not an instance of ObservationDefinitionQualifiedIntervalComponent.`;
      assertFhirTypeList<ObservationDefinitionQualifiedIntervalComponent>(value, ObservationDefinitionQualifiedIntervalComponent, optErrMsg);
      this.qualifiedInterval = value;
    } else {
      this.qualifiedInterval = undefined;
    }
    return this;
  }

  /**
   * Add the provided ObservationDefinitionQualifiedIntervalComponent value to the `qualifiedInterval` array property.
   *
   * @param value - the `qualifiedInterval` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addQualifiedInterval(value: ObservationDefinitionQualifiedIntervalComponent | undefined): this {
    if (isDefined<ObservationDefinitionQualifiedIntervalComponent>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval; Provided element is not an instance of ObservationDefinitionQualifiedIntervalComponent.`;
      assertFhirType<ObservationDefinitionQualifiedIntervalComponent>(value, ObservationDefinitionQualifiedIntervalComponent, optErrMsg);
      this.initQualifiedInterval();
      this.qualifiedInterval?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `qualifiedInterval` property exists and has a value; `false` otherwise
   */
  public hasQualifiedInterval(): boolean {
    return isDefinedList<ObservationDefinitionQualifiedIntervalComponent>(this.qualifiedInterval) && this.qualifiedInterval.some((item: ObservationDefinitionQualifiedIntervalComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `qualifiedInterval` property
   */
  private initQualifiedInterval(): void {
    if(!this.hasQualifiedInterval()) {
      this.qualifiedInterval = [] as ObservationDefinitionQualifiedIntervalComponent[];
    }
  }

  /**
   * @returns the `validCodedValueSet` property value as a Reference object; else an empty Reference object
   */
  public getValidCodedValueSet(): Reference {
    return this.validCodedValueSet ?? new Reference();
  }

  /**
   * Assigns the provided ValidCodedValueSet object value to the `validCodedValueSet` property.
   *
   * @decorator `@ReferenceTargets('ObservationDefinition.validCodedValueSet', ['ValueSet',])`
   *
   * @param value - the `validCodedValueSet` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ObservationDefinition.validCodedValueSet', [
    'ValueSet',
  ])
  public setValidCodedValueSet(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.validCodedValueSet = value;
    } else {
      this.validCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `validCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasValidCodedValueSet(): boolean {
    return isDefined<Reference>(this.validCodedValueSet) && !this.validCodedValueSet.isEmpty();
  }

  /**
   * @returns the `normalCodedValueSet` property value as a Reference object; else an empty Reference object
   */
  public getNormalCodedValueSet(): Reference {
    return this.normalCodedValueSet ?? new Reference();
  }

  /**
   * Assigns the provided NormalCodedValueSet object value to the `normalCodedValueSet` property.
   *
   * @decorator `@ReferenceTargets('ObservationDefinition.normalCodedValueSet', ['ValueSet',])`
   *
   * @param value - the `normalCodedValueSet` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ObservationDefinition.normalCodedValueSet', [
    'ValueSet',
  ])
  public setNormalCodedValueSet(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.normalCodedValueSet = value;
    } else {
      this.normalCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `normalCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasNormalCodedValueSet(): boolean {
    return isDefined<Reference>(this.normalCodedValueSet) && !this.normalCodedValueSet.isEmpty();
  }

  /**
   * @returns the `abnormalCodedValueSet` property value as a Reference object; else an empty Reference object
   */
  public getAbnormalCodedValueSet(): Reference {
    return this.abnormalCodedValueSet ?? new Reference();
  }

  /**
   * Assigns the provided AbnormalCodedValueSet object value to the `abnormalCodedValueSet` property.
   *
   * @decorator `@ReferenceTargets('ObservationDefinition.abnormalCodedValueSet', ['ValueSet',])`
   *
   * @param value - the `abnormalCodedValueSet` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ObservationDefinition.abnormalCodedValueSet', [
    'ValueSet',
  ])
  public setAbnormalCodedValueSet(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.abnormalCodedValueSet = value;
    } else {
      this.abnormalCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `abnormalCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasAbnormalCodedValueSet(): boolean {
    return isDefined<Reference>(this.abnormalCodedValueSet) && !this.abnormalCodedValueSet.isEmpty();
  }

  /**
   * @returns the `criticalCodedValueSet` property value as a Reference object; else an empty Reference object
   */
  public getCriticalCodedValueSet(): Reference {
    return this.criticalCodedValueSet ?? new Reference();
  }

  /**
   * Assigns the provided CriticalCodedValueSet object value to the `criticalCodedValueSet` property.
   *
   * @decorator `@ReferenceTargets('ObservationDefinition.criticalCodedValueSet', ['ValueSet',])`
   *
   * @param value - the `criticalCodedValueSet` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('ObservationDefinition.criticalCodedValueSet', [
    'ValueSet',
  ])
  public setCriticalCodedValueSet(value: Reference | undefined): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.criticalCodedValueSet = value;
    } else {
      this.criticalCodedValueSet = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `criticalCodedValueSet` property exists and has a value; `false` otherwise
   */
  public hasCriticalCodedValueSet(): boolean {
    return isDefined<Reference>(this.criticalCodedValueSet) && !this.criticalCodedValueSet.isEmpty();
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
      this.category,
      this.code,
      this.identifier,
      this.permittedDataType,
      this.multipleResultsAllowed,
      this.method,
      this.preferredReportName,
      this.quantitativeDetails,
      this.qualifiedInterval,
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
    const categoryList = copyListValues<CodeableConcept>(this.category);
    dest.category = categoryList.length === 0 ? undefined : categoryList;
    dest.code = this.code ? this.code.copy() : null;
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    const permittedDataTypeList = copyListValues<EnumCodeType>(this.permittedDataType);
    dest.permittedDataType = permittedDataTypeList.length === 0 ? undefined : permittedDataTypeList;
    dest.multipleResultsAllowed = this.multipleResultsAllowed?.copy();
    dest.method = this.method?.copy();
    dest.preferredReportName = this.preferredReportName?.copy();
    dest.quantitativeDetails = this.quantitativeDetails?.copy();
    const qualifiedIntervalList = copyListValues<ObservationDefinitionQualifiedIntervalComponent>(this.qualifiedInterval);
    dest.qualifiedInterval = qualifiedIntervalList.length === 0 ? undefined : qualifiedIntervalList;
    dest.validCodedValueSet = this.validCodedValueSet?.copy();
    dest.normalCodedValueSet = this.normalCodedValueSet?.copy();
    dest.abnormalCodedValueSet = this.abnormalCodedValueSet?.copy();
    dest.criticalCodedValueSet = this.criticalCodedValueSet?.copy();
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

    if (this.hasCategory()) {
      setFhirComplexListJson(this.getCategory(), 'category', jsonObj);
    }

    if (this.hasCode()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirComplexJson(this.getCode()!, 'code', jsonObj);
    } else {
      missingReqdProperties.push(`ObservationDefinition.code`);
    }

    if (this.hasIdentifier()) {
      setFhirComplexListJson(this.getIdentifier(), 'identifier', jsonObj);
    }

    if (this.hasPermittedDataTypeElement()) {
      setFhirPrimitiveListJson<fhirCode>(this.getPermittedDataTypeElement(), 'permittedDataType', jsonObj);
    }

    if (this.hasMultipleResultsAllowedElement()) {
      setFhirPrimitiveJson<fhirBoolean>(this.getMultipleResultsAllowedElement(), 'multipleResultsAllowed', jsonObj);
    }

    if (this.hasMethod()) {
      setFhirComplexJson(this.getMethod(), 'method', jsonObj);
    }

    if (this.hasPreferredReportNameElement()) {
      setFhirPrimitiveJson<fhirString>(this.getPreferredReportNameElement(), 'preferredReportName', jsonObj);
    }

    if (this.hasQuantitativeDetails()) {
      setFhirBackboneElementJson(this.getQuantitativeDetails(), 'quantitativeDetails', jsonObj);
    }

    if (this.hasQualifiedInterval()) {
      setFhirBackboneElementListJson(this.getQualifiedInterval(), 'qualifiedInterval', jsonObj);
    }

    if (this.hasValidCodedValueSet()) {
      setFhirComplexJson(this.getValidCodedValueSet(), 'validCodedValueSet', jsonObj);
    }

    if (this.hasNormalCodedValueSet()) {
      setFhirComplexJson(this.getNormalCodedValueSet(), 'normalCodedValueSet', jsonObj);
    }

    if (this.hasAbnormalCodedValueSet()) {
      setFhirComplexJson(this.getAbnormalCodedValueSet(), 'abnormalCodedValueSet', jsonObj);
    }

    if (this.hasCriticalCodedValueSet()) {
      setFhirComplexJson(this.getCriticalCodedValueSet(), 'criticalCodedValueSet', jsonObj);
    }

    if (missingReqdProperties.length > 0) {
      const errMsg = `${REQUIRED_PROPERTIES_DO_NOT_EXIST} ${missingReqdProperties.join(', ')}`;
      throw new FhirError(errMsg);
    }

    return jsonObj;
  }
}

/**
 * ObservationDefinitionQuantitativeDetailsComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Characteristics of quantitative results
 * - **Definition:** Characteristics for quantitative results of this observation.
 *
 * @category Data Models: Resource
 * @see [FHIR ObservationDefinition](http://hl7.org/fhir/StructureDefinition/ObservationDefinition)
 */
export class ObservationDefinitionQuantitativeDetailsComponent extends BackboneElement implements IBackboneElement {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `ObservationDefinitionQuantitativeDetailsComponent` JSON to instantiate the ObservationDefinitionQuantitativeDetailsComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ObservationDefinitionQuantitativeDetailsComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ObservationDefinitionQuantitativeDetailsComponent
   * @returns ObservationDefinitionQuantitativeDetailsComponent data model or undefined for `ObservationDefinitionQuantitativeDetailsComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ObservationDefinitionQuantitativeDetailsComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ObservationDefinitionQuantitativeDetailsComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ObservationDefinitionQuantitativeDetailsComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'customaryUnit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setCustomaryUnit(datatype);
    }

    fieldName = 'unit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnit(datatype);
    }

    fieldName = 'conversionFactor';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DecimalType | undefined = fhirParser.parseDecimalType(dtJson, dtSiblingJson);
      instance.setConversionFactorElement(datatype);
    }

    fieldName = 'decimalPrecision';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'number';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: IntegerType | undefined = fhirParser.parseIntegerType(dtJson, dtSiblingJson);
      instance.setDecimalPrecisionElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * ObservationDefinition.quantitativeDetails.customaryUnit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Customary unit for quantitative results
   * - **Definition:** Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private customaryUnit?: CodeableConcept | undefined;

  /**
   * ObservationDefinition.quantitativeDetails.unit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** SI unit for quantitative results
   * - **Definition:** SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private unit?: CodeableConcept | undefined;

  /**
   * ObservationDefinition.quantitativeDetails.conversionFactor Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** SI to Customary unit conversion factor
   * - **Definition:** Factor for converting value expressed with SI unit to value expressed with customary unit.
   * - **FHIR Type:** `decimal`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private conversionFactor?: DecimalType | undefined;

  /**
   * ObservationDefinition.quantitativeDetails.decimalPrecision Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Decimal precision of observation quantitative results
   * - **Definition:** Number of digits after decimal separator when the results of such observations are of type Quantity.
   * - **FHIR Type:** `integer`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private decimalPrecision?: IntegerType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `customaryUnit` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getCustomaryUnit(): CodeableConcept {
    return this.customaryUnit ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CustomaryUnit object value to the `customaryUnit` property.
   *
   * @param value - the `customaryUnit` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCustomaryUnit(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.quantitativeDetails.customaryUnit; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.customaryUnit = value;
    } else {
      this.customaryUnit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `customaryUnit` property exists and has a value; `false` otherwise
   */
  public hasCustomaryUnit(): boolean {
    return isDefined<CodeableConcept>(this.customaryUnit) && !this.customaryUnit.isEmpty();
  }

  /**
   * @returns the `unit` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getUnit(): CodeableConcept {
    return this.unit ?? new CodeableConcept();
  }

  /**
   * Assigns the provided Unit object value to the `unit` property.
   *
   * @param value - the `unit` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setUnit(value: CodeableConcept | undefined): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.quantitativeDetails.unit; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.unit = value;
    } else {
      this.unit = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `unit` property exists and has a value; `false` otherwise
   */
  public hasUnit(): boolean {
    return isDefined<CodeableConcept>(this.unit) && !this.unit.isEmpty();
  }

  /**
   * @returns the `conversionFactor` property value as a DecimalType object if defined; else an empty DecimalType object
   */
  public getConversionFactorElement(): DecimalType {
    return this.conversionFactor ?? new DecimalType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `conversionFactor` property.
   *
   * @param element - the `conversionFactor` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConversionFactorElement(element: DecimalType | undefined): this {
    if (isDefined<DecimalType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.quantitativeDetails.conversionFactor; Provided element is not an instance of DecimalType.`;
      assertFhirType<DecimalType>(element, DecimalType, optErrMsg);
      this.conversionFactor = element;
    } else {
      this.conversionFactor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conversionFactor` property exists and has a value; `false` otherwise
   */
  public hasConversionFactorElement(): boolean {
    return isDefined<DecimalType>(this.conversionFactor) && !this.conversionFactor.isEmpty();
  }

  /**
   * @returns the `conversionFactor` property value as a fhirDecimal if defined; else undefined
   */
  public getConversionFactor(): fhirDecimal | undefined {
    return this.conversionFactor?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `conversionFactor` property.
   *
   * @param value - the `conversionFactor` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setConversionFactor(value: fhirDecimal | undefined): this {
    if (isDefined<fhirDecimal>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.quantitativeDetails.conversionFactor (${String(value)})`;
      this.conversionFactor = new DecimalType(parseFhirPrimitiveData(value, fhirDecimalSchema, optErrMsg));
    } else {
      this.conversionFactor = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `conversionFactor` property exists and has a value; `false` otherwise
   */
  public hasConversionFactor(): boolean {
    return this.hasConversionFactorElement();
  }

  /**
   * @returns the `decimalPrecision` property value as a IntegerType object if defined; else an empty IntegerType object
   */
  public getDecimalPrecisionElement(): IntegerType {
    return this.decimalPrecision ?? new IntegerType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `decimalPrecision` property.
   *
   * @param element - the `decimalPrecision` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDecimalPrecisionElement(element: IntegerType | undefined): this {
    if (isDefined<IntegerType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.quantitativeDetails.decimalPrecision; Provided element is not an instance of IntegerType.`;
      assertFhirType<IntegerType>(element, IntegerType, optErrMsg);
      this.decimalPrecision = element;
    } else {
      this.decimalPrecision = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `decimalPrecision` property exists and has a value; `false` otherwise
   */
  public hasDecimalPrecisionElement(): boolean {
    return isDefined<IntegerType>(this.decimalPrecision) && !this.decimalPrecision.isEmpty();
  }

  /**
   * @returns the `decimalPrecision` property value as a fhirInteger if defined; else undefined
   */
  public getDecimalPrecision(): fhirInteger | undefined {
    return this.decimalPrecision?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `decimalPrecision` property.
   *
   * @param value - the `decimalPrecision` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setDecimalPrecision(value: fhirInteger | undefined): this {
    if (isDefined<fhirInteger>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.quantitativeDetails.decimalPrecision (${String(value)})`;
      this.decimalPrecision = new IntegerType(parseFhirPrimitiveData(value, fhirIntegerSchema, optErrMsg));
    } else {
      this.decimalPrecision = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `decimalPrecision` property exists and has a value; `false` otherwise
   */
  public hasDecimalPrecision(): boolean {
    return this.hasDecimalPrecisionElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ObservationDefinition.quantitativeDetails';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.customaryUnit,
      this.unit,
      this.conversionFactor,
      this.decimalPrecision,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ObservationDefinitionQuantitativeDetailsComponent {
    const dest = new ObservationDefinitionQuantitativeDetailsComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ObservationDefinitionQuantitativeDetailsComponent): void {
    super.copyValues(dest);
    dest.customaryUnit = this.customaryUnit?.copy();
    dest.unit = this.unit?.copy();
    dest.conversionFactor = this.conversionFactor?.copy();
    dest.decimalPrecision = this.decimalPrecision?.copy();
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

    if (this.hasCustomaryUnit()) {
      setFhirComplexJson(this.getCustomaryUnit(), 'customaryUnit', jsonObj);
    }

    if (this.hasUnit()) {
      setFhirComplexJson(this.getUnit(), 'unit', jsonObj);
    }

    if (this.hasConversionFactorElement()) {
      setFhirPrimitiveJson<fhirDecimal>(this.getConversionFactorElement(), 'conversionFactor', jsonObj);
    }

    if (this.hasDecimalPrecisionElement()) {
      setFhirPrimitiveJson<fhirInteger>(this.getDecimalPrecisionElement(), 'decimalPrecision', jsonObj);
    }

    return jsonObj;
  }
}
/**
 * ObservationDefinitionQualifiedIntervalComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Qualified range for continuous and ordinal observation results
 * - **Definition:** Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 *
 * @category Data Models: Resource
 * @see [FHIR ObservationDefinition](http://hl7.org/fhir/StructureDefinition/ObservationDefinition)
 */
export class ObservationDefinitionQualifiedIntervalComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.observationRangeCategoryEnum = new ObservationRangeCategoryEnum();
    this.administrativeGenderEnum = new AdministrativeGenderEnum();
  }

  /**
   * Parse the provided `ObservationDefinitionQualifiedIntervalComponent` JSON to instantiate the ObservationDefinitionQualifiedIntervalComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ObservationDefinitionQualifiedIntervalComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ObservationDefinitionQualifiedIntervalComponent
   * @returns ObservationDefinitionQualifiedIntervalComponent data model or undefined for `ObservationDefinitionQualifiedIntervalComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ObservationDefinitionQualifiedIntervalComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ObservationDefinitionQualifiedIntervalComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ObservationDefinitionQualifiedIntervalComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setCategoryElement(datatype);
    }

    fieldName = 'range';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Range | undefined = Range.parse(classJsonObj[fieldName]!, sourceField);
      instance.setRange(datatype);
    }

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

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * FHIR CodeSystem: ObservationRangeCategory
   *
   * @see {@link ObservationRangeCategoryEnum }
   */
  private readonly observationRangeCategoryEnum: ObservationRangeCategoryEnum;

  /**
   * ObservationDefinition.qualifiedInterval.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** reference | critical | absolute
   * - **Definition:** The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  private category?: EnumCodeType | undefined;

  /**
   * ObservationDefinition.qualifiedInterval.range Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** The interval itself, for continuous or ordinal observations
   * - **Definition:** The low and high values determining the interval. There may be only one of the two.
   * - **Requirements:** The unit may be not relevant for ordinal values. In case it is there, it is the same as quantitativeDetails.unit.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private range?: Range | undefined;

  /**
   * ObservationDefinition.qualifiedInterval.context Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Range context qualifier
   * - **Definition:** Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private context?: CodeableConcept | undefined;

  /**
   * ObservationDefinition.qualifiedInterval.appliesTo Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Targetted population of the range
   * - **Definition:** Codes to indicate the target population this reference range applies to.
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
   * ObservationDefinition.qualifiedInterval.gender Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** male | female | other | unknown
   * - **Definition:** Sex of the population the range applies to.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link AdministrativeGenderEnum }
   */
  private gender?: EnumCodeType | undefined;

  /**
   * ObservationDefinition.qualifiedInterval.age Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable age range, if relevant
   * - **Definition:** The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
   * - **Comment:** Some analytes vary greatly over age.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private age?: Range | undefined;

  /**
   * ObservationDefinition.qualifiedInterval.gestationalAge Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Applicable gestational age range, if relevant
   * - **Definition:** The gestational age to which this reference range is applicable, in the context of pregnancy.
   * - **FHIR Type:** `Range`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private gestationalAge?: Range | undefined;

  /**
   * ObservationDefinition.qualifiedInterval.condition Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Condition associated with the reference range
   * - **Definition:** Text based condition for which the reference range is valid.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private condition?: StringType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `category` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public getCategoryEnumType(): EnumCodeType | undefined {
    return this.category;
  }

  /**
   * Assigns the provided EnumCodeType value to the `category` property.
   *
   * @param enumType - the `category` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public setCategoryEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid ObservationDefinition.qualifiedInterval.category';
      assertEnumCodeType<ObservationRangeCategoryEnum>(enumType, ObservationRangeCategoryEnum, errMsgPrefix);
      this.category = enumType;
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategoryEnumType(): boolean {
    return isDefined<EnumCodeType>(this.category) && !this.category.isEmpty() && this.category.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `category` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public getCategoryElement(): CodeType | undefined {
    if (this.category === undefined) {
      return undefined;
    }
    return this.category as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `category` property.
   *
   * @param element - the `category` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public setCategoryElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.category; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.category = new EnumCodeType(element, this.observationRangeCategoryEnum);
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategoryElement(): boolean {
    return this.hasCategoryEnumType();
  }

  /**
   * @returns the `category` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public getCategory(): fhirCode | undefined {
    if (this.category === undefined) {
      return undefined;
    }
    return this.category.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `category` property.
   *
   * @param value - the `category` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link ObservationRangeCategoryEnum }
   */
  public setCategory(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.category; Provided value is not an instance of fhirCode.`;
      this.category = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.observationRangeCategoryEnum);
    } else {
      this.category = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `category` property exists and has a value; `false` otherwise
   */
  public hasCategory(): boolean {
    return this.hasCategoryEnumType();
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
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.range; Provided element is not an instance of Range.`;
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
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.context; Provided element is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.appliesTo; Provided value array has an element that is not an instance of CodeableConcept.`;
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
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.appliesTo; Provided element is not an instance of CodeableConcept.`;
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
      const errMsgPrefix = 'Invalid ObservationDefinition.qualifiedInterval.gender';
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
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.gender; Provided element is not an instance of CodeType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.gender; Provided value is not an instance of fhirCode.`;
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
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.age; Provided element is not an instance of Range.`;
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
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.gestationalAge; Provided element is not an instance of Range.`;
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
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.condition; Provided element is not an instance of StringType.`;
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
      const optErrMsg = `Invalid ObservationDefinition.qualifiedInterval.condition (${String(value)})`;
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

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'ObservationDefinition.qualifiedInterval';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.category,
      this.range,
      this.context,
      this.appliesTo,
      this.gender,
      this.age,
      this.gestationalAge,
      this.condition,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ObservationDefinitionQualifiedIntervalComponent {
    const dest = new ObservationDefinitionQualifiedIntervalComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ObservationDefinitionQualifiedIntervalComponent): void {
    super.copyValues(dest);
    dest.category = this.category?.copy();
    dest.range = this.range?.copy();
    dest.context = this.context?.copy();
    const appliesToList = copyListValues<CodeableConcept>(this.appliesTo);
    dest.appliesTo = appliesToList.length === 0 ? undefined : appliesToList;
    dest.gender = this.gender?.copy();
    dest.age = this.age?.copy();
    dest.gestationalAge = this.gestationalAge?.copy();
    dest.condition = this.condition?.copy();
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

    if (this.hasCategoryElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCategoryElement()!, 'category', jsonObj);
    }

    if (this.hasRange()) {
      setFhirComplexJson(this.getRange(), 'range', jsonObj);
    }

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

    return jsonObj;
  }
}
