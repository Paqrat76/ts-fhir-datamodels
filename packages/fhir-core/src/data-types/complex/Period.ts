/*
 * Copyright (c) 2024. Joe Paquette
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

import { strict as assert } from 'node:assert';
import { DataType, setFhirPrimitiveJson } from '../../base-models/core-fhir-models';
import { IDataType } from '../../base-models/library-interfaces';
import { PARSABLE_DATATYPE_MAP } from '../../base-models/parsable-datatype-map';
import { PARSABLE_RESOURCE_MAP } from '../../base-models/parsable-resource-map';
import { INSTANCE_EMPTY_ERROR_MSG } from '../../constants';
import { DateTimeType } from '../primitive/DateTimeType';
import { fhirDateTime, fhirDateTimeSchema, parseFhirPrimitiveData } from '../primitive/primitive-types';
import { isEmpty } from '../../utility/common-util';
import { isElementEmpty } from '../../utility/fhir-util';
import * as JSON from '../../utility/json-helpers';
import { assertFhirType, isDefined } from '../../utility/type-guards';
import { FhirParser, getPrimitiveTypeJson } from '../../utility/FhirParser';

/**
 * Period Class
 *
 * @remarks
 * Base StructureDefinition for Period Type: A time period defined by a start and end date and optionally time.
 *
 * **FHIR Specification**
 * - **Short:** Time range defined by start and end date/time
 * - **Definition:** A time period defined by a start and end date and optionally time.
 * - **Comment:** A Period specifies a range of time; the context of use will specify whether the entire range applies (e.g. "the patient was an inpatient of the hospital for this time range") or one value from the range applies (e.g. "give to the patient between these two times"). Period is not used for a duration (a measure of elapsed time). See [Duration](https://hl7.org/fhir/datatypes.html#Duration).
 * - **FHIR Version:** 4.0.1
 *
 * @category DataModel: ComplexType
 * @see [FHIR Period](http://hl7.org/fhir/StructureDefinition/Period)
 */
export class Period extends DataType implements IDataType {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `Period` JSON to instantiate the Period data model.
   *
   * @param sourceJson - JSON representing FHIR `Period`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to Period
   * @returns Period data model or undefined for `Period`
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): Period | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'Period';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new Period();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';
    let primitiveJsonType: 'boolean' | 'number' | 'string' = 'string';

    fieldName = 'start';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setStartElement(datatype);
    }

    fieldName = 'end';
    sourceField = `${optSourceValue}.${fieldName}`;
    primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: DateTimeType | undefined = fhirParser.parseDateTimeType(dtJson, dtSiblingJson);
      instance.setEndElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Period.start Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Starting time with inclusive boundary
   * - **Definition:** The start of the period. The boundary is inclusive.
   * - **Comment:** If the low element is missing, the meaning is that the low boundary is not known.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private start?: DateTimeType | undefined;

  /**
   * Period.end Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** End time with inclusive boundary, if not ongoing
   * - **Definition:** The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.
   * - **Comment:** The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has an end value of 2012-02-03.
   * - **FHIR Type:** `dateTime`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private end?: DateTimeType | undefined;

  /**
   * @returns the `start` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getStartElement(): DateTimeType {
    return this.start ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `start` property.
   *
   * @param element - the `start` value
   * @returns this
   */
  public setStartElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Period.start; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.start = element;
    } else {
      this.start = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `start` property exists and has a value; `false` otherwise
   */
  public hasStartElement(): boolean {
    return isDefined<DateTimeType>(this.start) && !this.start.isEmpty();
  }

  /**
   * @returns the `start` property value as a fhirDateTime if defined; else undefined
   */
  public getStart(): fhirDateTime | undefined {
    return this.start?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `start` property.
   *
   * @param value - the `start` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  public setStart(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Period.start (${String(value)})`;
      this.start = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.start = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `start` property exists and has a value; `false` otherwise
   */
  public hasStart(): boolean {
    return this.hasStartElement();
  }

  /**
   * @returns the `end` property value as a DateTimeType object if defined; else an empty DateTimeType object
   */
  public getEndElement(): DateTimeType {
    return this.end ?? new DateTimeType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `end` property.
   *
   * @param element - the `end` value
   * @returns this
   */
  public setEndElement(element: DateTimeType | undefined): this {
    if (isDefined<DateTimeType>(element)) {
      const optErrMsg = `Invalid Period.end; Provided element is not an instance of DateTimeType.`;
      assertFhirType<DateTimeType>(element, DateTimeType, optErrMsg);
      this.end = element;
    } else {
      this.end = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `end` property exists and has a value; `false` otherwise
   */
  public hasEndElement(): boolean {
    return isDefined<DateTimeType>(this.end) && !this.end.isEmpty();
  }

  /**
   * @returns the `end` property value as a fhirDateTime if defined; else undefined
   */
  public getEnd(): fhirDateTime | undefined {
    return this.end?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `end` property.
   *
   * @param value - the `end` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  public setEnd(value: fhirDateTime | undefined): this {
    if (isDefined<fhirDateTime>(value)) {
      const optErrMsg = `Invalid Period.end (${String(value)})`;
      this.end = new DateTimeType(parseFhirPrimitiveData(value, fhirDateTimeSchema, optErrMsg));
    } else {
      this.end = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `end` property exists and has a value; `false` otherwise
   */
  public hasEnd(): boolean {
    return this.hasEndElement();
  }

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'Period';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(this.start, this.end);
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): Period {
    const dest = new Period();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: Period): void {
    super.copyValues(dest);
    dest.start = this.start?.copy();
    dest.end = this.end?.copy();
  }

  /**
   * @returns `true` if the instance is a FHIR complex datatype; `false` otherwise
   */
  public override isComplexDataType(): boolean {
    return true;
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

    if (this.hasStartElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getStartElement(), 'start', jsonObj);
    }

    if (this.hasEndElement()) {
      setFhirPrimitiveJson<fhirDateTime>(this.getEndElement(), 'end', jsonObj);
    }

    return jsonObj;
  }
}
