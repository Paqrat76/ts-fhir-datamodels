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
 * DeviceMetric Module
 *
 * StructureDefinition.url: http://hl7.org/fhir/StructureDefinition/DeviceMetric
 * StructureDefinition.name: DeviceMetric
 * StructureDefinition.description: Describes a measurement, calculation or setting capability of a device.  The DeviceMetric resource is derived from the ISO/IEEE 11073-10201 Domain Information Model standard, but is more widely applicable. 
 * StructureDefinition.fhirVersion: 5.0.0
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  BackboneElement,
  CodeType,
  DomainResource,
  EnumCodeType,
  FhirParser,
  IBackboneElement,
  IDomainResource,
  InstantType,
  JSON,
  ReferenceTargets,
  assertEnumCodeType,
  assertFhirType,
  assertFhirTypeList,
  constructorCodeValueAsEnumCodeType,
  copyListValues,
  fhirCode,
  fhirCodeSchema,
  fhirInstant,
  fhirInstantSchema,
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
} from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Identifier, PARSABLE_DATATYPE_MAP, Quantity, Reference } from '../complex-types/complex-datatypes';
import { MetricCalibrationStateEnum } from '../code-systems/MetricCalibrationStateEnum';
import { MetricCalibrationTypeEnum } from '../code-systems/MetricCalibrationTypeEnum';
import { MetricCategoryEnum } from '../code-systems/MetricCategoryEnum';
import { MetricOperationalStatusEnum } from '../code-systems/MetricOperationalStatusEnum';
import { PARSABLE_RESOURCE_MAP } from './parsable-resource-map';

/**
 * DeviceMetric Class
 *
 * @remarks
 * Describes a measurement, calculation or setting capability of a device.  The DeviceMetric resource is derived from the ISO/IEEE 11073-10201 Domain Information Model standard, but is more widely applicable. 
 *
 * **FHIR Specification**
 * - **Short:** Measurement, calculation or setting capability of a medical device
 * - **Definition:** Describes a measurement, calculation or setting capability of a device.
 * - **Comment:** The DeviceMetric resource is derived from the ISO/IEEE 11073-10201 Domain Information Model standard, but is more widely applicable.
 * - **FHIR Version:** 5.0.0
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceMetric](http://hl7.org/fhir/StructureDefinition/DeviceMetric)
 */
export class DeviceMetric extends DomainResource implements IDomainResource {
  constructor(type_: CodeableConcept | null = null, device: Reference | null = null, category: EnumCodeType | CodeType | fhirCode | null = null) {
    super();

    this.metricOperationalStatusEnum = new MetricOperationalStatusEnum();
    this.metricCategoryEnum = new MetricCategoryEnum();

    this.type_ = null;
    if (isDefined<CodeableConcept>(type_)) {
      this.setType(type_);
    }

    this.device = null;
    if (isDefined<Reference>(device)) {
      this.setDevice(device);
    }

    this.category = constructorCodeValueAsEnumCodeType<MetricCategoryEnum>(
      category,
      MetricCategoryEnum,
      this.metricCategoryEnum,
      'DeviceMetric.category',
    );
  }

  /**
   * Parse the provided `DeviceMetric` JSON to instantiate the DeviceMetric data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceMetric`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceMetric
   * @returns DeviceMetric data model or undefined for `DeviceMetric`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): DeviceMetric | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceMetric';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceMetric();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.verifyResourceType(classJsonObj, 'DeviceMetric');
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

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setType(null);
      } else {
        instance.setType(datatype);
      }
    } else {
      instance.setType(null);
    }

    fieldName = 'unit';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: CodeableConcept | undefined = CodeableConcept.parse(classJsonObj[fieldName]!, sourceField);
      instance.setUnit(datatype);
    }

    fieldName = 'device';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Reference | undefined = Reference.parse(classJsonObj[fieldName]!, sourceField);
      if (datatype === undefined) {
        instance.setDevice(null);
      } else {
        instance.setDevice(datatype);
      }
    } else {
      instance.setDevice(null);
    }

    fieldName = 'operationalStatus';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setOperationalStatusElement(datatype);
    }

    fieldName = 'color';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setColorElement(datatype);
    }

    fieldName = 'category';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      if (datatype === undefined) {
        instance.setCategory(null);
      } else {
        instance.setCategoryElement(datatype);
      }
    } else {
      instance.setCategory(null);
    }

    fieldName = 'measurementFrequency';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const datatype: Quantity | undefined = Quantity.parse(classJsonObj[fieldName]!, sourceField);
      instance.setMeasurementFrequency(datatype);
    }

    fieldName = 'calibration';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const componentJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      componentJsonArray.forEach((componentJson: JSON.Value, idx) => {
        const component: DeviceMetricCalibrationComponent | undefined = DeviceMetricCalibrationComponent.parse(componentJson, `${sourceField}[${String(idx)}]`);
        if (component !== undefined) {
          instance.addCalibration(component);
        }
      });
    }

    return instance;
  }

  /**
   * DeviceMetric.identifier Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Instance identifier
   * - **Definition:** Instance identifiers assigned to a device, by the device or gateway software, manufacturers, other organizations or owners. For example, handle ID.
   * - **Comment:** For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be set to any identifier of the device.
   * - **FHIR Type:** `Identifier`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private identifier?: Identifier[] | undefined;

  /**
   * DeviceMetric.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Identity of metric, for example Heart Rate or PEEP Setting
   * - **Definition:** Describes the type of the metric. For example: Heart Rate, PEEP Setting, etc.
   * - **Comment:** DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private type_: CodeableConcept | null;

  /**
   * DeviceMetric.unit Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Unit of Measure for the Metric
   * - **Definition:** Describes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc.
   * - **Comment:** DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
   * - **FHIR Type:** `CodeableConcept`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private unit?: CodeableConcept | undefined;

  /**
   * DeviceMetric.device Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes the link to the Device
   * - **Definition:** Describes the link to the Device.  This is also known as a channel device.
   * - **Comment:** Note if this is not the top level device - also know as the source device, it may be referenced in the device.parent element.
   * - **FHIR Type:** `Reference`
   *   - _TargetProfiles_: [
   *       'http://hl7.org/fhir/StructureDefinition/Device',
   *     ]
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private device: Reference | null;

  /**
   * FHIR CodeSystem: MetricOperationalStatus
   *
   * @see {@link MetricOperationalStatusEnum }
   */
  private readonly metricOperationalStatusEnum: MetricOperationalStatusEnum;

  /**
   * DeviceMetric.operationalStatus Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** on | off | standby | entered-in-error
   * - **Definition:** Indicates current operational state of the device. For example: On, Off, Standby, etc.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MetricOperationalStatusEnum }
   */
  private operationalStatus?: EnumCodeType | undefined;

  /**
   * DeviceMetric.color Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Color name (from CSS4) or #RRGGBB code
   * - **Definition:** The preferred color associated with the metric (e.g., display color). This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth; the metrics are displayed in different characteristic colors, such as HR in blue, BP in green, and PR and SpO2 in magenta.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private color?: CodeType | undefined;

  /**
   * FHIR CodeSystem: MetricCategory
   *
   * @see {@link MetricCategoryEnum }
   */
  private readonly metricCategoryEnum: MetricCategoryEnum;

  /**
   * DeviceMetric.category Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** measurement | setting | calculation | unspecified
   * - **Definition:** Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 1..1
   * - **isModifier:** false
   * - **isSummary:** true
   *
   * @see CodeSystem Enumeration: {@link MetricCategoryEnum }
   */
  private category: EnumCodeType | null;

  /**
   * DeviceMetric.measurementFrequency Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Indicates how often the metric is taken or recorded
   * - **Definition:** The frequency at which the metric is taken or recorded. Devices measure metrics at a wide range of frequencies; for example, an ECG might sample measurements in the millisecond range, while an NIBP might trigger only once an hour. Less often, the measurementFrequency may be based on a unit other than time, such as distance (e.g. for a measuring wheel). The update period may be different than the measurement frequency, if the device does not update the published observed value with the same frequency as it was measured.
   * - **FHIR Type:** `Quantity`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private measurementFrequency?: Quantity | undefined;

  /**
   * DeviceMetric.calibration Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes the calibrations that have been performed or that are required to be performed
   * - **Definition:** Describes the calibrations that have been performed or that are required to be performed.
   * - **FHIR Type:** `BackboneElement`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private calibration?: DeviceMetricCalibrationComponent[] | undefined;

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
      const optErrMsg = `Invalid DeviceMetric.identifier; Provided value array has an element that is not an instance of Identifier.`;
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
      const optErrMsg = `Invalid DeviceMetric.identifier; Provided element is not an instance of Identifier.`;
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
   * @returns the `type_` property value as a CodeableConcept object if defined; else an empty CodeableConcept object
   */
  public getType(): CodeableConcept {
    return this.type_ ?? new CodeableConcept();
  }

  /**
   * Assigns the provided CodeableConcept object value to the `type_` property.
   *
   * @param value - the `type_` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setType(value: CodeableConcept | undefined | null): this {
    if (isDefined<CodeableConcept>(value)) {
      const optErrMsg = `Invalid DeviceMetric.type; Provided element is not an instance of CodeableConcept.`;
      assertFhirType<CodeableConcept>(value, CodeableConcept, optErrMsg);
      this.type_ = value;
    } else {
      this.type_ = null;
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
      const optErrMsg = `Invalid DeviceMetric.unit; Provided element is not an instance of CodeableConcept.`;
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
   * @returns the `device` property value as a Reference object if defined; else an empty Reference object
   */
  public getDevice(): Reference {
    return this.device ?? new Reference();
  }

  /**
   * Assigns the provided Device object value to the `device` property.
   *
   * @decorator `@ReferenceTargets('DeviceMetric.device', ['Device',])`
   *
   * @param value - the `device` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data type or reference value
   */
  @ReferenceTargets('DeviceMetric.device', [
    'Device',
  ])
  public setDevice(value: Reference | undefined | null): this {
    if (isDefined<Reference>(value)) {
      // assertFhirType<Reference>(value, Reference) unnecessary because @ReferenceTargets decorator ensures proper type/value
      this.device = value;
    } else {
      this.device = null;
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
   * @returns the `operationalStatus` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MetricOperationalStatusEnum }
   */
  public getOperationalStatusEnumType(): EnumCodeType | undefined {
    return this.operationalStatus;
  }

  /**
   * Assigns the provided EnumCodeType value to the `operationalStatus` property.
   *
   * @param enumType - the `operationalStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MetricOperationalStatusEnum }
   */
  public setOperationalStatusEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid DeviceMetric.operationalStatus';
      assertEnumCodeType<MetricOperationalStatusEnum>(enumType, MetricOperationalStatusEnum, errMsgPrefix);
      this.operationalStatus = enumType;
    } else {
      this.operationalStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operationalStatus` property exists and has a value; `false` otherwise
   */
  public hasOperationalStatusEnumType(): boolean {
    return isDefined<EnumCodeType>(this.operationalStatus) && !this.operationalStatus.isEmpty() && this.operationalStatus.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `operationalStatus` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MetricOperationalStatusEnum }
   */
  public getOperationalStatusElement(): CodeType | undefined {
    if (this.operationalStatus === undefined) {
      return undefined;
    }
    return this.operationalStatus as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `operationalStatus` property.
   *
   * @param element - the `operationalStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MetricOperationalStatusEnum }
   */
  public setOperationalStatusElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DeviceMetric.operationalStatus; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.operationalStatus = new EnumCodeType(element, this.metricOperationalStatusEnum);
    } else {
      this.operationalStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operationalStatus` property exists and has a value; `false` otherwise
   */
  public hasOperationalStatusElement(): boolean {
    return this.hasOperationalStatusEnumType();
  }

  /**
   * @returns the `operationalStatus` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MetricOperationalStatusEnum }
   */
  public getOperationalStatus(): fhirCode | undefined {
    if (this.operationalStatus === undefined) {
      return undefined;
    }
    return this.operationalStatus.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `operationalStatus` property.
   *
   * @param value - the `operationalStatus` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link MetricOperationalStatusEnum }
   */
  public setOperationalStatus(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DeviceMetric.operationalStatus; Provided value is not an instance of fhirCode.`;
      this.operationalStatus = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.metricOperationalStatusEnum);
    } else {
      this.operationalStatus = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `operationalStatus` property exists and has a value; `false` otherwise
   */
  public hasOperationalStatus(): boolean {
    return this.hasOperationalStatusEnumType();
  }

  /**
   * @returns the `color` property value as a CodeType object if defined; else an empty CodeType object
   */
  public getColorElement(): CodeType {
    return this.color ?? new CodeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `color` property.
   *
   * @param element - the `color` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setColorElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DeviceMetric.color; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.color = element;
    } else {
      this.color = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `color` property exists and has a value; `false` otherwise
   */
  public hasColorElement(): boolean {
    return isDefined<CodeType>(this.color) && !this.color.isEmpty();
  }

  /**
   * @returns the `color` property value as a fhirCode if defined; else undefined
   */
  public getColor(): fhirCode | undefined {
    return this.color?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `color` property.
   *
   * @param value - the `color` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setColor(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DeviceMetric.color (${String(value)})`;
      this.color = new CodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg));
    } else {
      this.color = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `color` property exists and has a value; `false` otherwise
   */
  public hasColor(): boolean {
    return this.hasColorElement();
  }

  /**
   * @returns the `category` property value as a EnumCodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MetricCategoryEnum }
   */
  public getCategoryEnumType(): EnumCodeType | null {
    return this.category;
  }

  /**
   * Assigns the provided EnumCodeType value to the `category` property.
   *
   * @param enumType - the `category` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MetricCategoryEnum }
   */
  public setCategoryEnumType(enumType: EnumCodeType | undefined | null): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = `Invalid DeviceMetric.category`;
      assertEnumCodeType<MetricCategoryEnum>(enumType, MetricCategoryEnum, errMsgPrefix);
      this.category = enumType;
    } else {
      this.category = null;
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
   * @returns the `category` property value as a CodeType if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MetricCategoryEnum }
   */
  public getCategoryElement(): CodeType | null {
    if (this.category === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link MetricCategoryEnum }
   */
  public setCategoryElement(element: CodeType | undefined | null): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DeviceMetric.category; Provided value is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.category = new EnumCodeType(element, this.metricCategoryEnum);
    } else {
      this.category = null;
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
   * @returns the `category` property value as a fhirCode if defined; else null
   *
   * @see CodeSystem Enumeration: {@link MetricCategoryEnum }
   */
  public getCategory(): fhirCode | null {
    if (this.category === null) {
      return null;
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
   * @see CodeSystem Enumeration: {@link MetricCategoryEnum }
   */
  public setCategory(value: fhirCode | undefined | null): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DeviceMetric.category (${String(value)})`;
      this.category = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.metricCategoryEnum);
    } else {
      this.category = null;
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
   * @returns the `measurementFrequency` property value as a Quantity object if defined; else an empty Quantity object
   */
  public getMeasurementFrequency(): Quantity {
    return this.measurementFrequency ?? new Quantity();
  }

  /**
   * Assigns the provided MeasurementFrequency object value to the `measurementFrequency` property.
   *
   * @param value - the `measurementFrequency` object value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setMeasurementFrequency(value: Quantity | undefined): this {
    if (isDefined<Quantity>(value)) {
      const optErrMsg = `Invalid DeviceMetric.measurementFrequency; Provided element is not an instance of Quantity.`;
      assertFhirType<Quantity>(value, Quantity, optErrMsg);
      this.measurementFrequency = value;
    } else {
      this.measurementFrequency = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `measurementFrequency` property exists and has a value; `false` otherwise
   */
  public hasMeasurementFrequency(): boolean {
    return isDefined<Quantity>(this.measurementFrequency) && !this.measurementFrequency.isEmpty();
  }

  /**
   * @returns the `calibration` property value as a DeviceMetricCalibrationComponent array
   */
  public getCalibration(): DeviceMetricCalibrationComponent[] {
    return this.calibration ?? ([] as DeviceMetricCalibrationComponent[]);
  }

  /**
   * Assigns the provided DeviceMetricCalibrationComponent array value to the `calibration` property.
   *
   * @param value - the `calibration` array value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public setCalibration(value: DeviceMetricCalibrationComponent[] | undefined): this {
    if (isDefinedList<DeviceMetricCalibrationComponent>(value)) {
      const optErrMsg = `Invalid DeviceMetric.calibration; Provided value array has an element that is not an instance of DeviceMetricCalibrationComponent.`;
      assertFhirTypeList<DeviceMetricCalibrationComponent>(value, DeviceMetricCalibrationComponent, optErrMsg);
      this.calibration = value;
    } else {
      this.calibration = undefined;
    }
    return this;
  }

  /**
   * Add the provided DeviceMetricCalibrationComponent value to the `calibration` array property.
   *
   * @param value - the `calibration` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   */
  public addCalibration(value: DeviceMetricCalibrationComponent | undefined): this {
    if (isDefined<DeviceMetricCalibrationComponent>(value)) {
      const optErrMsg = `Invalid DeviceMetric.calibration; Provided element is not an instance of DeviceMetricCalibrationComponent.`;
      assertFhirType<DeviceMetricCalibrationComponent>(value, DeviceMetricCalibrationComponent, optErrMsg);
      this.initCalibration();
      this.calibration?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `calibration` property exists and has a value; `false` otherwise
   */
  public hasCalibration(): boolean {
    return isDefinedList<DeviceMetricCalibrationComponent>(this.calibration) && this.calibration.some((item: DeviceMetricCalibrationComponent) => !item.isEmpty());
  }

  /**
   * Initialize the `calibration` property
   */
  private initCalibration(): void {
    if(!this.hasCalibration()) {
      this.calibration = [] as DeviceMetricCalibrationComponent[];
    }
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceMetric';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.identifier,
      this.type_,
      this.unit,
      this.device,
      this.operationalStatus,
      this.color,
      this.category,
      this.measurementFrequency,
      this.calibration,
    );
  }

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public override isRequiredFieldsEmpty(): boolean {
    return isRequiredElementEmpty(
      this.type_, this.device, this.category, 
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceMetric {
    const dest = new DeviceMetric();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceMetric): void {
    super.copyValues(dest);
    const identifierList = copyListValues<Identifier>(this.identifier);
    dest.identifier = identifierList.length === 0 ? undefined : identifierList;
    dest.type_ = this.type_ ? this.type_.copy() : null;
    dest.unit = this.unit?.copy();
    dest.device = this.device ? this.device.copy() : null;
    dest.operationalStatus = this.operationalStatus?.copy();
    dest.color = this.color?.copy();
    dest.category = this.category ? this.category.copy() : null;
    dest.measurementFrequency = this.measurementFrequency?.copy();
    const calibrationList = copyListValues<DeviceMetricCalibrationComponent>(this.calibration);
    dest.calibration = calibrationList.length === 0 ? undefined : calibrationList;
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

    if (this.hasType()) {
      setFhirComplexJson(this.getType(), 'type', jsonObj);
    } else {
      jsonObj['type'] = null;
    }

    if (this.hasUnit()) {
      setFhirComplexJson(this.getUnit(), 'unit', jsonObj);
    }

    if (this.hasDevice()) {
      setFhirComplexJson(this.getDevice(), 'device', jsonObj);
    } else {
      jsonObj['device'] = null;
    }

    if (this.hasOperationalStatusElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getOperationalStatusElement()!, 'operationalStatus', jsonObj);
    }

    if (this.hasColorElement()) {
      setFhirPrimitiveJson<fhirCode>(this.getColorElement(), 'color', jsonObj);
    }

    if (this.hasCategoryElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getCategoryElement()!, 'category', jsonObj);
    } else {
      jsonObj['category'] = null;
    }

    if (this.hasMeasurementFrequency()) {
      setFhirComplexJson(this.getMeasurementFrequency(), 'measurementFrequency', jsonObj);
    }

    if (this.hasCalibration()) {
      setFhirBackboneElementListJson(this.getCalibration(), 'calibration', jsonObj);
    }

    return jsonObj;
  }
}

/**
 * DeviceMetricCalibrationComponent Class
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** Describes the calibrations that have been performed or that are required to be performed
 * - **Definition:** Describes the calibrations that have been performed or that are required to be performed.
 *
 * @category Data Models: Resource
 * @see [FHIR DeviceMetric](http://hl7.org/fhir/StructureDefinition/DeviceMetric)
 */
export class DeviceMetricCalibrationComponent extends BackboneElement implements IBackboneElement {
  constructor() {
    super();

    this.metricCalibrationTypeEnum = new MetricCalibrationTypeEnum();
    this.metricCalibrationStateEnum = new MetricCalibrationStateEnum();
  }

  /**
   * Parse the provided `DeviceMetricCalibrationComponent` JSON to instantiate the DeviceMetricCalibrationComponent data model.
   *
   * @param sourceJson - JSON representing FHIR `DeviceMetricCalibrationComponent`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to DeviceMetricCalibrationComponent
   * @returns DeviceMetricCalibrationComponent data model or undefined for `DeviceMetricCalibrationComponent`
   * @throws {@link JsonError} if the provided JSON is not a valid JSON object
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): DeviceMetricCalibrationComponent | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'DeviceMetricCalibrationComponent';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new DeviceMetricCalibrationComponent();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processBackboneElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'type';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setTypeElement(datatype);
    }

    fieldName = 'state';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: CodeType | undefined = fhirParser.parseCodeType(dtJson, dtSiblingJson);
      instance.setStateElement(datatype);
    }

    fieldName = 'time';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: InstantType | undefined = fhirParser.parseInstantType(dtJson, dtSiblingJson);
      instance.setTimeElement(datatype);
    }

    return instance;
  }

  /**
   * FHIR CodeSystem: MetricCalibrationType
   *
   * @see {@link MetricCalibrationTypeEnum }
   */
  private readonly metricCalibrationTypeEnum: MetricCalibrationTypeEnum;

  /**
   * DeviceMetric.calibration.type Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** unspecified | offset | gain | two-point
   * - **Definition:** Describes the type of the calibration method.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationTypeEnum }
   */
  private type_?: EnumCodeType | undefined;

  /**
   * FHIR CodeSystem: MetricCalibrationState
   *
   * @see {@link MetricCalibrationStateEnum }
   */
  private readonly metricCalibrationStateEnum: MetricCalibrationStateEnum;

  /**
   * DeviceMetric.calibration.state Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** not-calibrated | calibration-required | calibrated | unspecified
   * - **Definition:** Describes the state of the calibration.
   * - **FHIR Type:** `code`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationStateEnum }
   */
  private state?: EnumCodeType | undefined;

  /**
   * DeviceMetric.calibration.time Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Describes the time last calibration has been performed
   * - **Definition:** Describes the time last calibration has been performed.
   * - **FHIR Type:** `instant`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** false
   */
  private time?: InstantType | undefined;

  /* eslint-disable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the `type_` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationTypeEnum }
   */
  public getTypeEnumType(): EnumCodeType | undefined {
    return this.type_;
  }

  /**
   * Assigns the provided EnumCodeType value to the `type_` property.
   *
   * @param enumType - the `type_` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationTypeEnum }
   */
  public setTypeEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid DeviceMetric.calibration.type';
      assertEnumCodeType<MetricCalibrationTypeEnum>(enumType, MetricCalibrationTypeEnum, errMsgPrefix);
      this.type_ = enumType;
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeEnumType(): boolean {
    return isDefined<EnumCodeType>(this.type_) && !this.type_.isEmpty() && this.type_.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `type_` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationTypeEnum }
   */
  public getTypeElement(): CodeType | undefined {
    if (this.type_ === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link MetricCalibrationTypeEnum }
   */
  public setTypeElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DeviceMetric.calibration.type; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.type_ = new EnumCodeType(element, this.metricCalibrationTypeEnum);
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasTypeElement(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `type_` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationTypeEnum }
   */
  public getType(): fhirCode | undefined {
    if (this.type_ === undefined) {
      return undefined;
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
   * @see CodeSystem Enumeration: {@link MetricCalibrationTypeEnum }
   */
  public setType(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DeviceMetric.calibration.type; Provided value is not an instance of fhirCode.`;
      this.type_ = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.metricCalibrationTypeEnum);
    } else {
      this.type_ = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `type_` property exists and has a value; `false` otherwise
   */
  public hasType(): boolean {
    return this.hasTypeEnumType();
  }

  /**
   * @returns the `state` property value as a EnumCodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationStateEnum }
   */
  public getStateEnumType(): EnumCodeType | undefined {
    return this.state;
  }

  /**
   * Assigns the provided EnumCodeType value to the `state` property.
   *
   * @param enumType - the `state` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code values
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationStateEnum }
   */
  public setStateEnumType(enumType: EnumCodeType | undefined): this {
    if (isDefined<EnumCodeType>(enumType)) {
      const errMsgPrefix = 'Invalid DeviceMetric.calibration.state';
      assertEnumCodeType<MetricCalibrationStateEnum>(enumType, MetricCalibrationStateEnum, errMsgPrefix);
      this.state = enumType;
    } else {
      this.state = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `state` property exists and has a value; `false` otherwise
   */
  public hasStateEnumType(): boolean {
    return isDefined<EnumCodeType>(this.state) && !this.state.isEmpty() && this.state.fhirCodeEnumeration.length > 0;
  }

  /**
   * @returns the `state` property value as a CodeType if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationStateEnum }
   */
  public getStateElement(): CodeType | undefined {
    if (this.state === undefined) {
      return undefined;
    }
    return this.state as CodeType;
  }

  /**
   * Assigns the provided PrimitiveType value to the `state` property.
   *
   * @param element - the `state` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link InvalidTypeError} for invalid data types
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationStateEnum }
   */
  public setStateElement(element: CodeType | undefined): this {
    if (isDefined<CodeType>(element)) {
      const optErrMsg = `Invalid DeviceMetric.calibration.state; Provided element is not an instance of CodeType.`;
      assertFhirType<CodeType>(element, CodeType, optErrMsg);
      this.state = new EnumCodeType(element, this.metricCalibrationStateEnum);
    } else {
      this.state = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `state` property exists and has a value; `false` otherwise
   */
  public hasStateElement(): boolean {
    return this.hasStateEnumType();
  }

  /**
   * @returns the `state` property value as a fhirCode if defined; else undefined
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationStateEnum }
   */
  public getState(): fhirCode | undefined {
    if (this.state === undefined) {
      return undefined;
    }
    return this.state.fhirCode.code;
  }

  /**
   * Assigns the provided primitive value to the `state` property.
   *
   * @param value - the `state` value
   * @returns this
   * @throws {@link InvalidCodeError} for invalid code value
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   *
   * @see CodeSystem Enumeration: {@link MetricCalibrationStateEnum }
   */
  public setState(value: fhirCode | undefined): this {
    if (isDefined<fhirCode>(value)) {
      const optErrMsg = `Invalid DeviceMetric.calibration.state; Provided value is not an instance of fhirCode.`;
      this.state = new EnumCodeType(parseFhirPrimitiveData(value, fhirCodeSchema, optErrMsg), this.metricCalibrationStateEnum);
    } else {
      this.state = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `state` property exists and has a value; `false` otherwise
   */
  public hasState(): boolean {
    return this.hasStateEnumType();
  }

  /**
   * @returns the `time` property value as a InstantType object if defined; else an empty InstantType object
   */
  public getTimeElement(): InstantType {
    return this.time ?? new InstantType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `time` property.
   *
   * @param element - the `time` value
   * @returns this
   * @throws {@link InvalidTypeError} for invalid data types
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTimeElement(element: InstantType | undefined): this {
    if (isDefined<InstantType>(element)) {
      const optErrMsg = `Invalid DeviceMetric.calibration.time; Provided element is not an instance of InstantType.`;
      assertFhirType<InstantType>(element, InstantType, optErrMsg);
      this.time = element;
    } else {
      this.time = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `time` property exists and has a value; `false` otherwise
   */
  public hasTimeElement(): boolean {
    return isDefined<InstantType>(this.time) && !this.time.isEmpty();
  }

  /**
   * @returns the `time` property value as a fhirInstant if defined; else undefined
   */
  public getTime(): fhirInstant | undefined {
    return this.time?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `time` property.
   *
   * @param value - the `time` value
   * @returns this
   * @throws {@link PrimitiveTypeError} for invalid primitive types
   */
  public setTime(value: fhirInstant | undefined): this {
    if (isDefined<fhirInstant>(value)) {
      const optErrMsg = `Invalid DeviceMetric.calibration.time (${String(value)})`;
      this.time = new InstantType(parseFhirPrimitiveData(value, fhirInstantSchema, optErrMsg));
    } else {
      this.time = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `time` property exists and has a value; `false` otherwise
   */
  public hasTime(): boolean {
    return this.hasTimeElement();
  }

  /* eslint-enable @typescript-eslint/no-unnecessary-type-conversion */

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'DeviceMetric.calibration';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(
      this.type_,
      this.state,
      this.time,
    );
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): DeviceMetricCalibrationComponent {
    const dest = new DeviceMetricCalibrationComponent();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: DeviceMetricCalibrationComponent): void {
    super.copyValues(dest);
    dest.type_ = this.type_?.copy();
    dest.state = this.state?.copy();
    dest.time = this.time?.copy();
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

    if (this.hasTypeElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getTypeElement()!, 'type', jsonObj);
    }

    if (this.hasStateElement()) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setFhirPrimitiveJson<fhirCode>(this.getStateElement()!, 'state', jsonObj);
    }

    if (this.hasTimeElement()) {
      setFhirPrimitiveJson<fhirInstant>(this.getTimeElement(), 'time', jsonObj);
    }

    return jsonObj;
  }
}
