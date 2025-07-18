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

import { PrimitiveType } from '../../base-models/core-fhir-models';
import {
  DateTimeOpts,
  getDateTimeObject,
  getDateTimeObjectAsUTC,
  getValueAsDateOnly,
  getValueAsYear,
  getValueAsYearMonth,
} from '../../utility/date-time-util';
import { isDefined } from '../../utility/type-guards';
import { DateTime } from 'luxon';
import { DateTypeImpl, fhirDate, fhirDateSchema, parseFhirPrimitiveData } from './primitive-types';
import { IPrimitiveType } from '../../base-models/library-interfaces';

/**
 * Date Class
 *
 * @remarks
 * Base StructureDefinition for date Type: A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date. Dates SHALL be valid dates.
 *
 * **FHIR Specification**
 * - **Short:** Primitive Type date
 * - **Definition:** A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date. Dates SHALL be valid dates.
 * - **FHIR Version:** 4.0.1; Normative since 4.0.0
 *
 * @category Datatypes: Primitive
 * @see [FHIR date](http://hl7.org/fhir/StructureDefinition/date)
 */
export class DateType extends PrimitiveType<fhirDate> implements IPrimitiveType<fhirDate>, DateTypeImpl {
  /**
   * @param value - the value of the primitive `fhirDate`
   * @throws PrimitiveTypeError for invalid value
   */
  constructor(value?: fhirDate) {
    super();
    this.assignValue(value);
  }

  public override setValue(value?: fhirDate): this {
    this.assignValue(value);
    return this;
  }

  public getValueAsDateTime(opts?: DateTimeOpts): DateTime | undefined {
    const currValue = this.getValue();
    return getDateTimeObject(currValue, opts);
  }

  public getValueAsDateTimeUTC(): DateTime | undefined {
    const currValue = this.getValue();
    return getDateTimeObjectAsUTC(currValue);
  }

  public setValueAsYear(dt: DateTime | undefined): this {
    const newValue = getValueAsYear(dt);
    this.assignValue(newValue);
    return this;
  }

  public setValueAsYearMonth(dt: DateTime | undefined): this {
    const newValue = getValueAsYearMonth(dt);
    this.assignValue(newValue);
    return this;
  }

  public setValueAsDateOnly(dt: DateTime | undefined): this {
    const newValue = getValueAsDateOnly(dt);
    this.assignValue(newValue);
    return this;
  }

  public encodeToString(value: fhirDate): string {
    return parseFhirPrimitiveData(value, fhirDateSchema, this.typeErrorMessage(value)).toString();
  }

  public parseToPrimitive(value: string): fhirDate {
    return parseFhirPrimitiveData(value, fhirDateSchema, this.typeErrorMessage(value));
  }

  public override fhirType(): string {
    return 'date';
  }

  public override isDateTimePrimitive(): boolean {
    return true;
  }

  public override copy(): DateType {
    const dest = new DateType();
    this.copyValues(dest);
    return dest;
  }

  protected override copyValues(dest: DateType): void {
    super.copyValues(dest);
    dest.setValueAsString(this.getValueAsString());
  }

  private assignValue(value: fhirDate | undefined): void {
    if (isDefined<fhirDate>(value)) {
      super.setValue(parseFhirPrimitiveData(value, fhirDateSchema, this.typeErrorMessage(value)));
    } else {
      super.setValue(undefined);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private typeErrorMessage(value: any): string {
    return `Invalid value for DateType (${String(value)})`;
  }
}
