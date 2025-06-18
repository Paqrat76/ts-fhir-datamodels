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

import {
  Base64BinaryType,
  BooleanType,
  CanonicalType,
  CodeType,
  DataType,
  DateTimeType,
  DateType,
  DecimalType,
  Extension as CoreExtension,
  IdType,
  InstantType,
  IntegerType,
  InvalidTypeError,
  isDefined,
  isEmpty,
  JSON,
  MarkdownType,
  OidType,
  parseExtension,
  PositiveIntType,
  StringType,
  TimeType,
  UnsignedIntType,
  UriType,
  UrlType,
  UuidType,
} from '@paq-ts-fhir/fhir-core';
import {
  Address,
  Age,
  Annotation,
  Attachment,
  CodeableConcept,
  Coding,
  ContactDetail,
  ContactPoint,
  Contributor,
  Count,
  DataRequirement,
  Distance,
  Dosage,
  Duration,
  Expression,
  HumanName,
  Identifier,
  Meta,
  Money,
  ParameterDefinition,
  Period,
  Quantity,
  Range,
  Ratio,
  Reference,
  RelatedArtifact,
  SampledData,
  Signature,
  Timing,
  TriggerDefinition,
  UsageContext,
} from '../complex-types';

/**
 * Extension Class
 *
 * @remarks
 * Base StructureDefinition for Extension Type: Optional Extension Element - found in all resources.
 *
 * The ability to add extensions in a structured way is what keeps FHIR resources simple.
 * Extends `Extension` from @paq-ts-fhir/fhir-core to include getXxxx/hasXxxx public methods for the open data types
 * and the static parse method.
 *
 * **FHIR Specification**
 * - **Short:** Optional Extensions Element
 * - **Definition:** Optional Extension Element - found in all resources.
 * - **FHIR Version:** 4.0.1
 *
 * @category Base Models
 * @see [FHIR Extension](http://hl7.org/fhir/StructureDefinition/Extension)
 * @see [FHIR Extensibility](https://hl7.org/fhir/extensibility.html)
 */
export class Extension extends CoreExtension {
  /**
   * Parse the provided `Extension` JSON to instantiate the Extension data model.
   *
   * @param sourceJson - JSON representing FHIR `Extension`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Extension
   * @returns Extension data model or undefined for `Extension`
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): Extension | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }
    const source = isDefined<string>(optSourceField) ? optSourceField : 'Extension';
    const extensionJsonObj: JSON.Object = JSON.asObject(sourceJson, `${source} JSON`);

    return parseExtension(extensionJsonObj) as Extension;
  }

  /**
   * @returns {boolean} Returns true if the data type is complex; otherwise, returns false.
   */
  public override isComplexDataType(): boolean {
    return true;
  }

  // *** NOTE ***
  // Next "get"/"has" methods are added for each open data type - one pair of methods for each open data type

  /**
   * @returns the `value` property value as a Base64BinaryType object if defined; else undefined
   */
  public getValueBase64BinaryType(): Base64BinaryType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Base64BinaryType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Base64BinaryType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Base64BinaryType and has a value; `false` otherwise
   */
  public hasValueBase64BinaryType(): boolean {
    return this.hasValue() && super.getValue() instanceof Base64BinaryType;
  }

  /**
   * @returns the `value` property value as a BooleanType object if defined; else undefined
   */
  public getValueBooleanType(): BooleanType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof BooleanType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected BooleanType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a BooleanType and has a value; `false` otherwise
   */
  public hasValueBooleanType(): boolean {
    return this.hasValue() && super.getValue() instanceof BooleanType;
  }

  /**
   * @returns the `value` property value as a CanonicalType object if defined; else undefined
   */
  public getValueCanonicalType(): CanonicalType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof CanonicalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected CanonicalType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a CanonicalType and has a value; `false` otherwise
   */
  public hasValueCanonicalType(): boolean {
    return this.hasValue() && super.getValue() instanceof CanonicalType;
  }

  /**
   * @returns the `value` property value as a CodeType object if defined; else undefined
   */
  public getValueCodeType(): CodeType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof CodeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected CodeType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a CodeType and has a value; `false` otherwise
   */
  public hasValueCodeType(): boolean {
    return this.hasValue() && super.getValue() instanceof CodeType;
  }

  /**
   * @returns the `value` property value as a DateType object if defined; else undefined
   */
  public getValueDateType(): DateType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof DateType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected DateType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a DateType and has a value; `false` otherwise
   */
  public hasValueDateType(): boolean {
    return this.hasValue() && super.getValue() instanceof DateType;
  }

  /**
   * @returns the `value` property value as a DateTimeType object if defined; else undefined
   */
  public getValueDateTimeType(): DateTimeType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof DateTimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected DateTimeType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a DateTimeType and has a value; `false` otherwise
   */
  public hasValueDateTimeType(): boolean {
    return this.hasValue() && super.getValue() instanceof DateTimeType;
  }

  /**
   * @returns the `value` property value as a DecimalType object if defined; else undefined
   */
  public getValueDecimalType(): DecimalType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof DecimalType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected DecimalType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a DecimalType and has a value; `false` otherwise
   */
  public hasValueDecimalType(): boolean {
    return this.hasValue() && super.getValue() instanceof DecimalType;
  }

  /**
   * @returns the `value` property value as a IdType object if defined; else undefined
   */
  public getValueIdType(): IdType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof IdType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected IdType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a IdType and has a value; `false` otherwise
   */
  public hasValueIdType(): boolean {
    return this.hasValue() && super.getValue() instanceof IdType;
  }

  /**
   * @returns the `value` property value as a InstantType object if defined; else undefined
   */
  public getValueInstantType(): InstantType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof InstantType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected InstantType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a InstantType and has a value; `false` otherwise
   */
  public hasValueInstantType(): boolean {
    return this.hasValue() && super.getValue() instanceof InstantType;
  }

  /**
   * @returns the `value` property value as a IntegerType object if defined; else undefined
   */
  public getValueIntegerType(): IntegerType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof IntegerType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected IntegerType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a IntegerType and has a value; `false` otherwise
   */
  public hasValueIntegerType(): boolean {
    return this.hasValue() && super.getValue() instanceof IntegerType;
  }

  /**
   * @returns the `value` property value as a MarkdownType object if defined; else undefined
   */
  public getValueMarkdownType(): MarkdownType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof MarkdownType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected MarkdownType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a MarkdownType and has a value; `false` otherwise
   */
  public hasValueMarkdownType(): boolean {
    return this.hasValue() && super.getValue() instanceof MarkdownType;
  }

  /**
   * @returns the `value` property value as a OidType object if defined; else undefined
   */
  public getValueOidType(): OidType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof OidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected OidType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a OidType and has a value; `false` otherwise
   */
  public hasValueOidType(): boolean {
    return this.hasValue() && super.getValue() instanceof OidType;
  }

  /**
   * @returns the `value` property value as a PositiveIntType object if defined; else undefined
   */
  public getValuePositiveIntType(): PositiveIntType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof PositiveIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected PositiveIntType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a PositiveIntType and has a value; `false` otherwise
   */
  public hasValuePositiveIntType(): boolean {
    return this.hasValue() && super.getValue() instanceof PositiveIntType;
  }

  /**
   * @returns the `value` property value as a StringType object if defined; else undefined
   */
  public getValueStringType(): StringType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof StringType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected StringType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a StringType and has a value; `false` otherwise
   */
  public hasValueStringType(): boolean {
    return this.hasValue() && super.getValue() instanceof StringType;
  }

  /**
   * @returns the `value` property value as a TimeType object if defined; else undefined
   */
  public getValueTimeType(): TimeType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof TimeType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected TimeType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a TimeType and has a value; `false` otherwise
   */
  public hasValueTimeType(): boolean {
    return this.hasValue() && super.getValue() instanceof TimeType;
  }

  /**
   * @returns the `value` property value as a UnsignedIntType object if defined; else undefined
   */
  public getValueUnsignedIntType(): UnsignedIntType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof UnsignedIntType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected UnsignedIntType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a UnsignedIntType and has a value; `false` otherwise
   */
  public hasValueUnsignedIntType(): boolean {
    return this.hasValue() && super.getValue() instanceof UnsignedIntType;
  }

  /**
   * @returns the `value` property value as a UriType object if defined; else undefined
   */
  public getValueUriType(): UriType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof UriType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected UriType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a UriType and has a value; `false` otherwise
   */
  public hasValueUriType(): boolean {
    return this.hasValue() && super.getValue() instanceof UriType;
  }

  /**
   * @returns the `value` property value as a UrlType object if defined; else undefined
   */
  public getValueUrlType(): UrlType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof UrlType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected UrlType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a UrlType and has a value; `false` otherwise
   */
  public hasValueUrlType(): boolean {
    return this.hasValue() && super.getValue() instanceof UrlType;
  }

  /**
   * @returns the `value` property value as a UuidType object if defined; else undefined
   */
  public getValueUuidType(): UuidType | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof UuidType)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected UuidType but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a UuidType and has a value; `false` otherwise
   */
  public hasValueUuidType(): boolean {
    return this.hasValue() && super.getValue() instanceof UuidType;
  }

  /**
   * @returns the `value` property value as a Address object if defined; else undefined
   */
  public getValueAddress(): Address | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Address)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Address but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Address and has a value; `false` otherwise
   */
  public hasValueAddress(): boolean {
    return this.hasValue() && super.getValue() instanceof Address;
  }

  /**
   * @returns the `value` property value as a Age object if defined; else undefined
   */
  public getValueAge(): Age | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Age)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Age but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Age and has a value; `false` otherwise
   */
  public hasValueAge(): boolean {
    return this.hasValue() && super.getValue() instanceof Age;
  }

  /**
   * @returns the `value` property value as a Annotation object if defined; else undefined
   */
  public getValueAnnotation(): Annotation | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Annotation)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Annotation but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Annotation and has a value; `false` otherwise
   */
  public hasValueAnnotation(): boolean {
    return this.hasValue() && super.getValue() instanceof Annotation;
  }

  /**
   * @returns the `value` property value as a Attachment object if defined; else undefined
   */
  public getValueAttachment(): Attachment | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Attachment)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Attachment but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Attachment and has a value; `false` otherwise
   */
  public hasValueAttachment(): boolean {
    return this.hasValue() && super.getValue() instanceof Attachment;
  }

  /**
   * @returns the `value` property value as a CodeableConcept object if defined; else undefined
   */
  public getValueCodeableConcept(): CodeableConcept | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof CodeableConcept)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected CodeableConcept but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a CodeableConcept and has a value; `false` otherwise
   */
  public hasValueCodeableConcept(): boolean {
    return this.hasValue() && super.getValue() instanceof CodeableConcept;
  }

  /**
   * @returns the `value` property value as a Coding object if defined; else undefined
   */
  public getValueCoding(): Coding | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Coding)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Coding but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Coding and has a value; `false` otherwise
   */
  public hasValueCoding(): boolean {
    return this.hasValue() && super.getValue() instanceof Coding;
  }

  /**
   * @returns the `value` property value as a ContactPoint object if defined; else undefined
   */
  public getValueContactPoint(): ContactPoint | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof ContactPoint)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected ContactPoint but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a ContactPoint and has a value; `false` otherwise
   */
  public hasValueContactPoint(): boolean {
    return this.hasValue() && super.getValue() instanceof ContactPoint;
  }

  /**
   * @returns the `value` property value as a Count object if defined; else undefined
   */
  public getValueCount(): Count | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Count)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Count but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Count and has a value; `false` otherwise
   */
  public hasValueCount(): boolean {
    return this.hasValue() && super.getValue() instanceof Count;
  }

  /**
   * @returns the `value` property value as a Distance object if defined; else undefined
   */
  public getValueDistance(): Distance | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Distance)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Distance but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Distance and has a value; `false` otherwise
   */
  public hasValueDistance(): boolean {
    return this.hasValue() && super.getValue() instanceof Distance;
  }

  /**
   * @returns the `value` property value as a Duration object if defined; else undefined
   */
  public getValueDuration(): Duration | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Duration)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Duration but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Duration and has a value; `false` otherwise
   */
  public hasValueDuration(): boolean {
    return this.hasValue() && super.getValue() instanceof Duration;
  }

  /**
   * @returns the `value` property value as a HumanName object if defined; else undefined
   */
  public getValueHumanName(): HumanName | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof HumanName)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected HumanName but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a HumanName and has a value; `false` otherwise
   */
  public hasValueHumanName(): boolean {
    return this.hasValue() && super.getValue() instanceof HumanName;
  }

  /**
   * @returns the `value` property value as a Identifier object if defined; else undefined
   */
  public getValueIdentifier(): Identifier | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Identifier)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Identifier but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Identifier and has a value; `false` otherwise
   */
  public hasValueIdentifier(): boolean {
    return this.hasValue() && super.getValue() instanceof Identifier;
  }

  /**
   * @returns the `value` property value as a Money object if defined; else undefined
   */
  public getValueMoney(): Money | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Money)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Money but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Money and has a value; `false` otherwise
   */
  public hasValueMoney(): boolean {
    return this.hasValue() && super.getValue() instanceof Money;
  }

  /**
   * @returns the `value` property value as a Period object if defined; else undefined
   */
  public getValuePeriod(): Period | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Period)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Period but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Period and has a value; `false` otherwise
   */
  public hasValuePeriod(): boolean {
    return this.hasValue() && super.getValue() instanceof Period;
  }

  /**
   * @returns the `value` property value as a Quantity object if defined; else undefined
   */
  public getValueQuantity(): Quantity | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Quantity)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Quantity but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Quantity and has a value; `false` otherwise
   */
  public hasValueQuantity(): boolean {
    return this.hasValue() && super.getValue() instanceof Quantity;
  }

  /**
   * @returns the `value` property value as a Range object if defined; else undefined
   */
  public getValueRange(): Range | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Range)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Range but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Range and has a value; `false` otherwise
   */
  public hasValueRange(): boolean {
    return this.hasValue() && super.getValue() instanceof Range;
  }

  /**
   * @returns the `value` property value as a Ratio object if defined; else undefined
   */
  public getValueRatio(): Ratio | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Ratio)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Ratio but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Ratio and has a value; `false` otherwise
   */
  public hasValueRatio(): boolean {
    return this.hasValue() && super.getValue() instanceof Ratio;
  }

  /**
   * @returns the `value` property value as a Reference object if defined; else undefined
   */
  public getValueReference(): Reference | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Reference)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Reference but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Reference and has a value; `false` otherwise
   */
  public hasValueReference(): boolean {
    return this.hasValue() && super.getValue() instanceof Reference;
  }

  /**
   * @returns the `value` property value as a SampledData object if defined; else undefined
   */
  public getValueSampledData(): SampledData | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof SampledData)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected SampledData but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a SampledData and has a value; `false` otherwise
   */
  public hasValueSampledData(): boolean {
    return this.hasValue() && super.getValue() instanceof SampledData;
  }

  /**
   * @returns the `value` property value as a Signature object if defined; else undefined
   */
  public getValueSignature(): Signature | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Signature)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Signature but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Signature and has a value; `false` otherwise
   */
  public hasValueSignature(): boolean {
    return this.hasValue() && super.getValue() instanceof Signature;
  }

  /**
   * @returns the `value` property value as a Timing object if defined; else undefined
   */
  public getValueTiming(): Timing | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Timing)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Timing but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Timing and has a value; `false` otherwise
   */
  public hasValueTiming(): boolean {
    return this.hasValue() && super.getValue() instanceof Timing;
  }

  /**
   * @returns the `value` property value as a ContactDetail object if defined; else undefined
   */
  public getValueContactDetail(): ContactDetail | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof ContactDetail)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected ContactDetail but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a ContactDetail and has a value; `false` otherwise
   */
  public hasValueContactDetail(): boolean {
    return this.hasValue() && super.getValue() instanceof ContactDetail;
  }

  /**
   * @returns the `value` property value as a Contributor object if defined; else undefined
   */
  public getValueContributor(): Contributor | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Contributor)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Contributor but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Contributor and has a value; `false` otherwise
   */
  public hasValueContributor(): boolean {
    return this.hasValue() && super.getValue() instanceof Contributor;
  }

  /**
   * @returns the `value` property value as a DataRequirement object if defined; else undefined
   */
  public getValueDataRequirement(): DataRequirement | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof DataRequirement)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected DataRequirement but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a DataRequirement and has a value; `false` otherwise
   */
  public hasValueDataRequirement(): boolean {
    return this.hasValue() && super.getValue() instanceof DataRequirement;
  }

  /**
   * @returns the `value` property value as a Expression object if defined; else undefined
   */
  public getValueExpression(): Expression | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Expression)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Expression but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Expression and has a value; `false` otherwise
   */
  public hasValueExpression(): boolean {
    return this.hasValue() && super.getValue() instanceof Expression;
  }

  /**
   * @returns the `value` property value as a ParameterDefinition object if defined; else undefined
   */
  public getValueParameterDefinition(): ParameterDefinition | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof ParameterDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected ParameterDefinition but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a ParameterDefinition and has a value; `false` otherwise
   */
  public hasValueParameterDefinition(): boolean {
    return this.hasValue() && super.getValue() instanceof ParameterDefinition;
  }

  /**
   * @returns the `value` property value as a RelatedArtifact object if defined; else undefined
   */
  public getValueRelatedArtifact(): RelatedArtifact | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof RelatedArtifact)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected RelatedArtifact but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a RelatedArtifact and has a value; `false` otherwise
   */
  public hasValueRelatedArtifact(): boolean {
    return this.hasValue() && super.getValue() instanceof RelatedArtifact;
  }

  /**
   * @returns the `value` property value as a TriggerDefinition object if defined; else undefined
   */
  public getValueTriggerDefinition(): TriggerDefinition | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof TriggerDefinition)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected TriggerDefinition but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a TriggerDefinition and has a value; `false` otherwise
   */
  public hasValueTriggerDefinition(): boolean {
    return this.hasValue() && super.getValue() instanceof TriggerDefinition;
  }

  /**
   * @returns the `value` property value as a UsageContext object if defined; else undefined
   */
  public getValueUsageContext(): UsageContext | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof UsageContext)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected UsageContext but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a UsageContext and has a value; `false` otherwise
   */
  public hasValueUsageContext(): boolean {
    return this.hasValue() && super.getValue() instanceof UsageContext;
  }

  /**
   * @returns the `value` property value as a Dosage object if defined; else undefined
   */
  public getValueDosage(): Dosage | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Dosage)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Dosage but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Dosage and has a value; `false` otherwise
   */
  public hasValueDosage(): boolean {
    return this.hasValue() && super.getValue() instanceof Dosage;
  }

  /**
   * @returns the `value` property value as a Meta object if defined; else undefined
   */
  public getValueMeta(): Meta | undefined {
    if (!isDefined<DataType | undefined>(super.getValue())) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const superValue: DataType = super.getValue()!;
    if (!(superValue instanceof Meta)) {
      throw new InvalidTypeError(
        `DataType mismatch for Extension.value[x]: Expected Meta but encountered ${superValue.fhirType()}`,
      );
    }
    return superValue;
  }

  /**
   * @returns `true` if the `value` property exists as a Meta and has a value; `false` otherwise
   */
  public hasValueMeta(): boolean {
    return this.hasValue() && super.getValue() instanceof Meta;
  }
}
