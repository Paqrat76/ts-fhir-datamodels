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
 * Parameters Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/Parameters
 * StructureDefinition.name: Parameters
 * StructureDefinition.description: This resource is used to pass information into and back from an operation (whether invoked directly from REST or within a messaging environment).  It is not persisted or allowed to be referenced by other resources except as described in the definition of the Parameters resource.
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  Base64BinaryType,
  BooleanType,
  CanonicalType,
  ChoiceDataTypes,
  ChoiceDataTypesMeta,
  CodeType,
  DateTimeType,
  DateType,
  DecimalType,
  FhirParser,
  IBackboneElement,
  IDataType,
  IResource,
  IdType,
  InstantType,
  Integer64Type,
  IntegerType,
  InvalidTypeError,
  JSON,
  MarkdownType,
  OidType,
  PositiveIntType,
  PrimitiveType,
  Resource,
  StringType,
  TimeType,
  UnsignedIntType,
  UriType,
  UrlType,
  UuidType,
  assertFhirResourceType,
  assertFhirType,
  assertFhirTypeList,
  assertIsDefined,
  copyListValues,
  fhirString,
  fhirStringSchema,
  getPrimitiveTypeJson,
  isDefined,
  isDefinedList,
  isElementEmpty,
  isEmpty,
  isRequiredElementEmpty,
  parseFhirPrimitiveData,
  setFhirBackboneElementListJson,
  setFhirPrimitiveJson,
  setFhirResourceJson,
  setPolymorphicValueJson,
} from '@paq-ts-fhir/fhir-core';
import { Address, Age, Annotation, Attachment, Availability, CodeableConcept, CodeableReference, Coding, ContactDetail, ContactPoint, Count, DataRequirement, Distance, Dosage, Duration, Expression, ExtendedContactDetail, HumanName, Identifier, Meta, Money, PARSABLE_DATATYPE_MAP, ParameterDefinition, Period, Quantity, Range, Ratio, RatioRange, Reference, RelatedArtifact, SampledData, Signature, Timing, TriggerDefinition, UsageContext } from '../complex-types/complex-datatypes';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Symbol.metadata polyfill secret sauce for decorator metadata
(Symbol.metadata as any) ??= Symbol('Symbol.metadata');

/**
 * Parameters Class
 *
 * @remarks
 * This resource is used to pass information into and back from an operation (whether invoked directly from REST or within a messaging environment).  It is not persisted or allowed to be referenced by other resources except as described in the definition of the Parameters resource.
 *
 * **FHIR Specification**
 * - **Short:** Operation Request or Response
 * - **Definition:** This resource is used to pass information into and back from an operation (whether invoked directly from REST or within a messaging environment).  It is not persisted or allowed to be referenced by other resources.
 * - **Comment:** The parameters that may be used are defined by the OperationDefinition resource.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR Parameters](http://hl7.org/fhir/StructureDefinition/Parameters)
 */
export class Parameters extends Resource implements IResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `Parameters` JSON to instantiate the Parameters data model.
   *
   * @param sourceJson - JSON representing FHIR `Parameters`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Parameters
   * @returns Parameters data model or undefined for `Parameters`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): Parameters | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Parameters';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Parameters();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'Parameters');
    fhirParser.processResourceJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'parameter';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ParametersParameterComponent | undefined = ParametersParameterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addParameter(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Parameters.parameter Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Operation Parameter
   * - **Definition:** A parameter passed to or received from the operation.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private parameter?: ParametersParameterComponent[] | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `parameter` property value as a ParametersParameterComponent array
   */
  public getParameter(): ParametersParameterComponent[] {
    return this.parameter ?? ([] as ParametersParameterComponent[]);
  }

  /**
   * Assigns the provided ParametersParameterComponent array value to the `parameter` property.
   *
   * @param value - the `parameter` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setParameter(value: ParametersParameterComponent[] | undefined): this {
    if (isDefinedList<ParametersParameterComponent>(value)) {
      const optErrMsg = `Invalid Parameters.parameter; Provided value array has an element that is not an instance of ParametersParameterComponent.`;
      assertFhirTypeList<ParametersParameterComponent>(value, ParametersParameterComponent, optErrMsg);
      this.parameter = value;
    } else {
      this.parameter = undefined;
    }
    return this;
  }

  /**
   * Add the provided ParametersParameterComponent value to the `parameter` array property.
   *
   * @param value - the `parameter` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addParameter(value: ParametersParameterComponent | undefined): this {
    if (isDefined<ParametersParameterComponent>(value)) {
      const optErrMsg = `Invalid Parameters.parameter; Provided element is not an instance of ParametersParameterComponent.`;
      assertFhirType<ParametersParameterComponent>(value, ParametersParameterComponent, optErrMsg);
      this.initParameter();
      this.parameter?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `parameter` property exists and has a value; `false` otherwise
   */
  public hasParameter(): boolean {
    return isDefinedList<ParametersParameterComponent>(this.parameter) && this.parameter.some((item: ParametersParameterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `parameter` property
   */
  private initParameter(): void {
    if(!this.hasParameter()) {
      this.parameter = [] as ParametersParameterComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Parameters';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.parameter,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Parameters {
    const dest = new Parameters();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Parameters): void {
    super.copyValues(dest);
    const parameterList = copyListValues<ParametersParameterComponent>(this.parameter);
    dest.parameter = parameterList.length === 0 ? undefined : parameterList;
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

    if (this.hasParameter()) {
      setFhirBackboneElementListJson(this.getParameter(), 'parameter', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * ParametersParameterComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Operation Parameter
 * - **Definition:** A parameter passed to or received from the operation.
 *
 * @category Data Models: Resource
 * @see [FHIR Parameters](http://hl7.org/fhir/StructureDefinition/Parameters)
 */
export class ParametersParameterComponent extends BackboneElement implements IBackboneElement {
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
   * Parse the provided `ParametersParameterComponent` JSON to instantiate the ParametersParameterComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `ParametersParameterComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to ParametersParameterComponent
   * @returns ParametersParameterComponent data model or undefined for `ParametersParameterComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): ParametersParameterComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'ParametersParameterComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new ParametersParameterComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    

    const classMetadata: DecoratorMetadataObject | null = ParametersParameterComponent[Symbol.metadata];
    const errorMessage = `DecoratorMetadataObject does not exist for ParametersParameterComponent`;
    assertIsDefined<DecoratorMetadataObject>(classMetadata, errorMessage);

    fieldName = 'name';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setName(null);
      } else {
        instance.setNameElement(datatype);
      }
    } else {
      instance.setName(null);
    }

    fieldName = 'value[x]';
    sourceField = `${optSourceValue}.${fieldName}`;
    const value: IDataType | undefined = fhirParser.parsePolymorphicDataType(
      classJsonObj,
      sourceField,
      fieldName,
      classMetadata,
    );
    instance.setValue(value);

    fieldName = 'resource';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      const resource: IResource | undefined = fhirParser.parseInlineResource(classJsonObj[fieldName], sourceField);
      instance.setResource(resource);
    }

    fieldName = 'part';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      if (classJsonObj[fieldName] !== null) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
        componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
          const component: ParametersParameterComponent | undefined = ParametersParameterComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
          if (component !== undefined) {
            instance.addPart(component);
          }
        });
      }
    }

    return instance;
  }

  /**
   * Parameters.parameter.name Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Name from the definition
   * - **Definition:** The name of the parameter (reference to the operation definition).
   * - **FHIR Type:** `string`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private name: StringType | null;

  /**
   * Parameters.parameter.value[x] Element
   *
   * @decorator `@ChoiceDataTypesMeta('Parameters.parameter.value[x]', ['base64Binary','boolean','canonical','code','date','dateTime','decimal','id','instant','integer','integer64','markdown','oid','positiveInt','string','time','unsignedInt','uri','url','uuid','Address','Age','Annotation','Attachment','CodeableConcept','CodeableReference','Coding','ContactPoint','Count','Distance','Duration','HumanName','Identifier','Money','Period','Quantity','Range','Ratio','RatioRange','Reference','SampledData','Signature','Timing','ContactDetail','DataRequirement','Expression','ParameterDefinition','RelatedArtifact','TriggerDefinition','UsageContext','Availability','ExtendedContactDetail','Dosage','Meta',]`
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If parameter is a data type
   * - **Definition:** Conveys the content if the parameter is a data type.
   * - **FHIR Types:**
   *     'base64Binary',
   *     'boolean',
   *     'canonical',
   *     'code',
   *     'date',
   *     'dateTime',
   *     'decimal',
   *     'id',
   *     'instant',
   *     'integer',
   *     'integer64',
   *     'markdown',
   *     'oid',
   *     'positiveInt',
   *     'string',
   *     'time',
   *     'unsignedInt',
   *     'uri',
   *     'url',
   *     'uuid',
   *     'Address',
   *     'Age',
   *     'Annotation',
   *     'Attachment',
   *     'CodeableConcept',
   *     'CodeableReference',
   *     'Coding',
   *     'ContactPoint',
   *     'Count',
   *     'Distance',
   *     'Duration',
   *     'HumanName',
   *     'Identifier',
   *     'Money',
   *     'Period',
   *     'Quantity',
   *     'Range',
   *     'Ratio',
   *     'RatioRange',
   *     'Reference',
   *     'SampledData',
   *     'Signature',
   *     'Timing',
   *     'ContactDetail',
   *     'DataRequirement',
   *     'Expression',
   *     'ParameterDefinition',
   *     'RelatedArtifact',
   *     'TriggerDefinition',
   *     'UsageContext',
   *     'Availability',
   *     'ExtendedContactDetail',
   *     'Dosage',
   *     'Meta',
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  @ChoiceDataTypesMeta('Parameters.parameter.value[x]',[
    'base64Binary',
    'boolean',
    'canonical',
    'code',
    'date',
    'dateTime',
    'decimal',
    'id',
    'instant',
    'integer',
    'integer64',
    'markdown',
    'oid',
    'positiveInt',
    'string',
    'time',
    'unsignedInt',
    'uri',
    'url',
    'uuid',
    'Address',
    'Age',
    'Annotation',
    'Attachment',
    'CodeableConcept',
    'CodeableReference',
    'Coding',
    'ContactPoint',
    'Count',
    'Distance',
    'Duration',
    'HumanName',
    'Identifier',
    'Money',
    'Period',
    'Quantity',
    'Range',
    'Ratio',
    'RatioRange',
    'Reference',
    'SampledData',
    'Signature',
    'Timing',
    'ContactDetail',
    'DataRequirement',
    'Expression',
    'ParameterDefinition',
    'RelatedArtifact',
    'TriggerDefinition',
    'UsageContext',
    'Availability',
    'ExtendedContactDetail',
    'Dosage',
    'Meta',
  ])
  private value?: IDataType | undefined;

  /**
   * Parameters.parameter.resource Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** If parameter is a whole resource
   * - **Definition:** Conveys the content if the parameter is a whole resource.
   * - **Comment:** When resolving references in resources, the operation definition may specify how references may be resolved between parameters. If a reference cannot be resolved between the parameters, the application should fall back to its general resource resolution methods.
   * - **FHIR Type:** `Resource`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private resource?: IResource | undefined;

  /**
   * Parameters.parameter.part Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Named part of a multi-part parameter
   * - **Definition:** A named part of a multi-part parameter.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private part?: ParametersParameterComponent[] | undefined;

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
  public setNameElement(element: StringType | undefined | null): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid Parameters.parameter.name; Provided value is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.name = element;
    } else {
      this.name = null;
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
  public setName(value: fhirString | undefined | null): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid Parameters.parameter.name (${String(value)})`;
      this.name = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.name = null;
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
   * @returns the `value` property value as a DataType object if defined; else undefined
   */
  public getValue(): IDataType | undefined {
    return this.value;
  }

  /**
   * Assigns the provided DataType object value to the `value` property.
   *
   * @decorator `@ChoiceDataTypes('Parameters.parameter.value[x]')`
   *
   * @param value - the `value` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  @ChoiceDataTypes('Parameters.parameter.value[x]')
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
   * @returns the `value` property value as a Base64BinaryType object if defined; else undefined
   */
  public getValueBase64BinaryType(): Base64BinaryType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Base64BinaryType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Base64BinaryType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Base64BinaryType and has a value; `false` otherwise
   */
  public hasValueBase64BinaryType(): boolean {
    return this.hasValue() && this.value instanceof Base64BinaryType;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else undefined
   */
  public getValueBooleanType(): BooleanType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected BooleanType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a CanonicalType object if defined; else undefined
   */
  public getValueCanonicalType(): CanonicalType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected CanonicalType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasValueCanonicalType(): boolean {
    return this.hasValue() && this.value instanceof CanonicalType;
  }

  /**
   * @returns the `value` property value as a CodeType object if defined; else undefined
   */
  public getValueCodeType(): CodeType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof CodeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected CodeType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a CodeType and has a value; `false` otherwise
   */
  public hasValueCodeType(): boolean {
    return this.hasValue() && this.value instanceof CodeType;
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
        `DataType mismatch for Parameters.parameter.value[x]: Expected DateType but encountered ${this.value.fhirType()}`,
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
        `DataType mismatch for Parameters.parameter.value[x]: Expected DateTimeType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a DecimalType object if defined; else undefined
   */
  public getValueDecimalType(): DecimalType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected DecimalType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a IdType object if defined; else undefined
   */
  public getValueIdType(): IdType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof IdType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected IdType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a IdType and has a value; `false` otherwise
   */
  public hasValueIdType(): boolean {
    return this.hasValue() && this.value instanceof IdType;
  }

  /**
   * @returns the `value` property value as a InstantType object if defined; else undefined
   */
  public getValueInstantType(): InstantType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof InstantType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected InstantType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a InstantType and has a value; `false` otherwise
   */
  public hasValueInstantType(): boolean {
    return this.hasValue() && this.value instanceof InstantType;
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
        `DataType mismatch for Parameters.parameter.value[x]: Expected IntegerType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Integer64Type object if defined; else undefined
   */
  public getValueInteger64Type(): Integer64Type | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Integer64Type)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Integer64Type but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Integer64Type and has a value; `false` otherwise
   */
  public hasValueInteger64Type(): boolean {
    return this.hasValue() && this.value instanceof Integer64Type;
  }

  /**
   * @returns the `value` property value as a MarkdownType object if defined; else undefined
   */
  public getValueMarkdownType(): MarkdownType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof MarkdownType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected MarkdownType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a MarkdownType and has a value; `false` otherwise
   */
  public hasValueMarkdownType(): boolean {
    return this.hasValue() && this.value instanceof MarkdownType;
  }

  /**
   * @returns the `value` property value as a OidType object if defined; else undefined
   */
  public getValueOidType(): OidType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof OidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected OidType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a OidType and has a value; `false` otherwise
   */
  public hasValueOidType(): boolean {
    return this.hasValue() && this.value instanceof OidType;
  }

  /**
   * @returns the `value` property value as a PositiveIntType object if defined; else undefined
   */
  public getValuePositiveIntType(): PositiveIntType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected PositiveIntType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasValuePositiveIntType(): boolean {
    return this.hasValue() && this.value instanceof PositiveIntType;
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
        `DataType mismatch for Parameters.parameter.value[x]: Expected StringType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a TimeType object if defined; else undefined
   */
  public getValueTimeType(): TimeType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected TimeType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a UnsignedIntType object if defined; else undefined
   */
  public getValueUnsignedIntType(): UnsignedIntType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof UnsignedIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected UnsignedIntType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a UnsignedIntType and has a value; `false` otherwise
   */
  public hasValueUnsignedIntType(): boolean {
    return this.hasValue() && this.value instanceof UnsignedIntType;
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
        `DataType mismatch for Parameters.parameter.value[x]: Expected UriType but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a UrlType object if defined; else undefined
   */
  public getValueUrlType(): UrlType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof UrlType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected UrlType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a UrlType and has a value; `false` otherwise
   */
  public hasValueUrlType(): boolean {
    return this.hasValue() && this.value instanceof UrlType;
  }

  /**
   * @returns the `value` property value as a UuidType object if defined; else undefined
   */
  public getValueUuidType(): UuidType | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof UuidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected UuidType but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a UuidType and has a value; `false` otherwise
   */
  public hasValueUuidType(): boolean {
    return this.hasValue() && this.value instanceof UuidType;
  }

  /**
   * @returns the `value` property value as a Address object if defined; else undefined
   */
  public getValueAddress(): Address | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Address)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Address but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Address and has a value; `false` otherwise
   */
  public hasValueAddress(): boolean {
    return this.hasValue() && this.value instanceof Address;
  }

  /**
   * @returns the `value` property value as a Age object if defined; else undefined
   */
  public getValueAge(): Age | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Age but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Age and has a value; `false` otherwise
   */
  public hasValueAge(): boolean {
    return this.hasValue() && this.value instanceof Age;
  }

  /**
   * @returns the `value` property value as a Annotation object if defined; else undefined
   */
  public getValueAnnotation(): Annotation | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Annotation)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Annotation but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Annotation and has a value; `false` otherwise
   */
  public hasValueAnnotation(): boolean {
    return this.hasValue() && this.value instanceof Annotation;
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
        `DataType mismatch for Parameters.parameter.value[x]: Expected Attachment but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a CodeableConcept object if defined; else undefined
   */
  public getValueCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected CodeableConcept but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && this.value instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a CodeableReference object if defined; else undefined
   */
  public getValueCodeableReference(): CodeableReference | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof CodeableReference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected CodeableReference but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a CodeableReference and has a value; `false` otherwise
   */
  public hasValueCodeableReference(): boolean {
    return this.hasValue() && this.value instanceof CodeableReference;
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
        `DataType mismatch for Parameters.parameter.value[x]: Expected Coding but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a ContactPoint object if defined; else undefined
   */
  public getValueContactPoint(): ContactPoint | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof ContactPoint)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected ContactPoint but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a ContactPoint and has a value; `false` otherwise
   */
  public hasValueContactPoint(): boolean {
    return this.hasValue() && this.value instanceof ContactPoint;
  }

  /**
   * @returns the `value` property value as a Count object if defined; else undefined
   */
  public getValueCount(): Count | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Count)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Count but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Count and has a value; `false` otherwise
   */
  public hasValueCount(): boolean {
    return this.hasValue() && this.value instanceof Count;
  }

  /**
   * @returns the `value` property value as a Distance object if defined; else undefined
   */
  public getValueDistance(): Distance | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Distance)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Distance but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Distance and has a value; `false` otherwise
   */
  public hasValueDistance(): boolean {
    return this.hasValue() && this.value instanceof Distance;
  }

  /**
   * @returns the `value` property value as a Duration object if defined; else undefined
   */
  public getValueDuration(): Duration | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Duration but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Duration and has a value; `false` otherwise
   */
  public hasValueDuration(): boolean {
    return this.hasValue() && this.value instanceof Duration;
  }

  /**
   * @returns the `value` property value as a HumanName object if defined; else undefined
   */
  public getValueHumanName(): HumanName | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof HumanName)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected HumanName but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a HumanName and has a value; `false` otherwise
   */
  public hasValueHumanName(): boolean {
    return this.hasValue() && this.value instanceof HumanName;
  }

  /**
   * @returns the `value` property value as a Identifier object if defined; else undefined
   */
  public getValueIdentifier(): Identifier | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Identifier but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Identifier and has a value; `false` otherwise
   */
  public hasValueIdentifier(): boolean {
    return this.hasValue() && this.value instanceof Identifier;
  }

  /**
   * @returns the `value` property value as a Money object if defined; else undefined
   */
  public getValueMoney(): Money | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Money but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Money and has a value; `false` otherwise
   */
  public hasValueMoney(): boolean {
    return this.hasValue() && this.value instanceof Money;
  }

  /**
   * @returns the `value` property value as a Period object if defined; else undefined
   */
  public getValuePeriod(): Period | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Period but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Period and has a value; `false` otherwise
   */
  public hasValuePeriod(): boolean {
    return this.hasValue() && this.value instanceof Period;
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
        `DataType mismatch for Parameters.parameter.value[x]: Expected Quantity but encountered ${this.value.fhirType()}`,
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
   * @returns the `value` property value as a Range object if defined; else undefined
   */
  public getValueRange(): Range | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Range but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Range and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return this.hasValue() && this.value instanceof Range;
  }

  /**
   * @returns the `value` property value as a Ratio object if defined; else undefined
   */
  public getValueRatio(): Ratio | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Ratio but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasValueRatio(): boolean {
    return this.hasValue() && this.value instanceof Ratio;
  }

  /**
   * @returns the `value` property value as a RatioRange object if defined; else undefined
   */
  public getValueRatioRange(): RatioRange | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof RatioRange)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected RatioRange but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a RatioRange and has a value; `false` otherwise
   */
  public hasValueRatioRange(): boolean {
    return this.hasValue() && this.value instanceof RatioRange;
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
        `DataType mismatch for Parameters.parameter.value[x]: Expected Reference but encountered ${this.value.fhirType()}`,
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

  /**
   * @returns the `value` property value as a SampledData object if defined; else undefined
   */
  public getValueSampledData(): SampledData | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof SampledData)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected SampledData but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a SampledData and has a value; `false` otherwise
   */
  public hasValueSampledData(): boolean {
    return this.hasValue() && this.value instanceof SampledData;
  }

  /**
   * @returns the `value` property value as a Signature object if defined; else undefined
   */
  public getValueSignature(): Signature | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Signature)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Signature but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Signature and has a value; `false` otherwise
   */
  public hasValueSignature(): boolean {
    return this.hasValue() && this.value instanceof Signature;
  }

  /**
   * @returns the `value` property value as a Timing object if defined; else undefined
   */
  public getValueTiming(): Timing | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Timing but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Timing and has a value; `false` otherwise
   */
  public hasValueTiming(): boolean {
    return this.hasValue() && this.value instanceof Timing;
  }

  /**
   * @returns the `value` property value as a ContactDetail object if defined; else undefined
   */
  public getValueContactDetail(): ContactDetail | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof ContactDetail)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected ContactDetail but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a ContactDetail and has a value; `false` otherwise
   */
  public hasValueContactDetail(): boolean {
    return this.hasValue() && this.value instanceof ContactDetail;
  }

  /**
   * @returns the `value` property value as a DataRequirement object if defined; else undefined
   */
  public getValueDataRequirement(): DataRequirement | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof DataRequirement)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected DataRequirement but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a DataRequirement and has a value; `false` otherwise
   */
  public hasValueDataRequirement(): boolean {
    return this.hasValue() && this.value instanceof DataRequirement;
  }

  /**
   * @returns the `value` property value as a Expression object if defined; else undefined
   */
  public getValueExpression(): Expression | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Expression)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Expression but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Expression and has a value; `false` otherwise
   */
  public hasValueExpression(): boolean {
    return this.hasValue() && this.value instanceof Expression;
  }

  /**
   * @returns the `value` property value as a ParameterDefinition object if defined; else undefined
   */
  public getValueParameterDefinition(): ParameterDefinition | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof ParameterDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected ParameterDefinition but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a ParameterDefinition and has a value; `false` otherwise
   */
  public hasValueParameterDefinition(): boolean {
    return this.hasValue() && this.value instanceof ParameterDefinition;
  }

  /**
   * @returns the `value` property value as a RelatedArtifact object if defined; else undefined
   */
  public getValueRelatedArtifact(): RelatedArtifact | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof RelatedArtifact)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected RelatedArtifact but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a RelatedArtifact and has a value; `false` otherwise
   */
  public hasValueRelatedArtifact(): boolean {
    return this.hasValue() && this.value instanceof RelatedArtifact;
  }

  /**
   * @returns the `value` property value as a TriggerDefinition object if defined; else undefined
   */
  public getValueTriggerDefinition(): TriggerDefinition | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof TriggerDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected TriggerDefinition but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a TriggerDefinition and has a value; `false` otherwise
   */
  public hasValueTriggerDefinition(): boolean {
    return this.hasValue() && this.value instanceof TriggerDefinition;
  }

  /**
   * @returns the `value` property value as a UsageContext object if defined; else undefined
   */
  public getValueUsageContext(): UsageContext | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof UsageContext)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected UsageContext but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a UsageContext and has a value; `false` otherwise
   */
  public hasValueUsageContext(): boolean {
    return this.hasValue() && this.value instanceof UsageContext;
  }

  /**
   * @returns the `value` property value as a Availability object if defined; else undefined
   */
  public getValueAvailability(): Availability | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Availability)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Availability but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Availability and has a value; `false` otherwise
   */
  public hasValueAvailability(): boolean {
    return this.hasValue() && this.value instanceof Availability;
  }

  /**
   * @returns the `value` property value as a ExtendedContactDetail object if defined; else undefined
   */
  public getValueExtendedContactDetail(): ExtendedContactDetail | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof ExtendedContactDetail)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected ExtendedContactDetail but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a ExtendedContactDetail and has a value; `false` otherwise
   */
  public hasValueExtendedContactDetail(): boolean {
    return this.hasValue() && this.value instanceof ExtendedContactDetail;
  }

  /**
   * @returns the `value` property value as a Dosage object if defined; else undefined
   */
  public getValueDosage(): Dosage | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Dosage)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Dosage but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Dosage and has a value; `false` otherwise
   */
  public hasValueDosage(): boolean {
    return this.hasValue() && this.value instanceof Dosage;
  }

  /**
   * @returns the `value` property value as a Meta object if defined; else undefined
   */
  public getValueMeta(): Meta | undefined {
    if (!isDefined<IDataType | undefined>(this.value)) {
      return undefined;
    }
    if (!(this.value instanceof Meta)) {
      throw new InvalidTypeError(
        `DataType mismatch for Parameters.parameter.value[x]: Expected Meta but encountered ${this.value.fhirType()}`,
      );
    }
    return this.value;
  }

  /**
   * @returns `true` if the `value` property exists as a Meta and has a value; `false` otherwise
   */
  public hasValueMeta(): boolean {
    return this.hasValue() && this.value instanceof Meta;
  }

  // End of choice datatype-specific "get"/"has" methods

  /**
   * @returns the `resource` property value as a Resource object if defined; else undefined
   */
  public getResource(): IResource | undefined {
    return this.resource;
  }

  /**
   * Assigns the provided Resource object value to the `resource` property.
   *
   * @param value - the `resource` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid resource type
   */
  public setResource(value: IResource | undefined): this {
    if (isDefined<IResource>(value)) {
      const optErrMsg = `Invalid Parameters.parameter.resource; Provided element is not an instance of Resource.`;
      assertFhirResourceType(value, optErrMsg);
      this.resource = value;
    } else {
      this.resource = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `resource` property exists and has a value; `false` otherwise
   */
  public hasResource(): boolean {
    return isDefined<IResource>(this.resource) && !this.resource.isEmpty();
  }

  /**
   * @returns the `part` property value as a ParametersParameterComponent array
   */
  public getPart(): ParametersParameterComponent[] {
    return this.part ?? ([] as ParametersParameterComponent[]);
  }

  /**
   * Assigns the provided ParametersParameterComponent array value to the `part` property.
   *
   * @param value - the `part` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setPart(value: ParametersParameterComponent[] | undefined): this {
    if (isDefinedList<ParametersParameterComponent>(value)) {
      const optErrMsg = `Invalid Parameters.parameter.part; Provided value array has an element that is not an instance of ParametersParameterComponent.`;
      assertFhirTypeList<ParametersParameterComponent>(value, ParametersParameterComponent, optErrMsg);
      this.part = value;
    } else {
      this.part = undefined;
    }
    return this;
  }

  /**
   * Add the provided ParametersParameterComponent value to the `part` array property.
   *
   * @param value - the `part` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addPart(value: ParametersParameterComponent | undefined): this {
    if (isDefined<ParametersParameterComponent>(value)) {
      const optErrMsg = `Invalid Parameters.parameter.part; Provided element is not an instance of ParametersParameterComponent.`;
      assertFhirType<ParametersParameterComponent>(value, ParametersParameterComponent, optErrMsg);
      this.initPart();
      this.part?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `part` property exists and has a value; `false` otherwise
   */
  public hasPart(): boolean {
    return isDefinedList<ParametersParameterComponent>(this.part) && this.part.some((item: ParametersParameterComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `part` property
   */
  private initPart(): void {
    if(!this.hasPart()) {
      this.part = [] as ParametersParameterComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Parameters.parameter';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.name,
      this.value,
      this.resource,
      this.part,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.name, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): ParametersParameterComponent {
    const dest = new ParametersParameterComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: ParametersParameterComponent): void {
    super.copyValues(dest);
    dest.name = this.name ? this.name.copy() : null;
    dest.value = this.value?.copy() as IDataType;
    dest.resource = this.resource?.copy() as IResource;
    const partList = copyListValues<ParametersParameterComponent>(this.part);
    dest.part = partList.length === 0 ? undefined : partList;
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

    if (this.hasValue()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setPolymorphicValueJson(this.getValue()!, 'value', jsonObj);
    }

    if (this.hasResource()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirResourceJson(this.getResource()!, 'resource', jsonObj);
    }

    if (this.hasPart()) {
      setFhirBackboneElementListJson(this.getPart(), 'part', jsonObj);
    }

    return jsonObj;
  }
}
