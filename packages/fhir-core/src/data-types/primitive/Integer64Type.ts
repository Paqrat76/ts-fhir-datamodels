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
import * as JSON from '../../utility/json-helpers';
import { isDefined } from '../../utility/type-guards';
import { fhirInteger64, fhirInteger64Schema, parseFhirPrimitiveData } from './primitive-types';
import { IPrimitiveType } from '../../base-models/library-interfaces';

/**
 * Integer64 Class
 *
 * @remarks
 * integer64 Type: A very large whole number
 *
 * **FHIR Specification**
 * - **Short:** Primitive Type integer64
 * - **Definition:** A very large whole number
 * - **Comment:** Typically this is used for record counters (e.g. database keys)
 * - **FHIR Version:** 5.0.0
 *
 * @category Datatypes: Primitive
 * @see [FHIR integer64](http://hl7.org/fhir/StructureDefinition/integer64)
 */
export class Integer64Type extends PrimitiveType<fhirInteger64> implements IPrimitiveType<fhirInteger64> {
  /**
   * @param value - the value of the primitive `fhirInteger64`
   * @throws PrimitiveTypeError for invalid value
   */
  constructor(value?: fhirInteger64) {
    super();
    this.assignValue(value);
  }

  public override setValue(value?: fhirInteger64): this {
    this.assignValue(value);
    return this;
  }

  public encodeToString(value: fhirInteger64): string {
    return parseFhirPrimitiveData(value, fhirInteger64Schema, this.typeErrorMessage(value)).toString();
  }

  public parseToPrimitive(value: string): fhirInteger64 {
    return parseFhirPrimitiveData(value, fhirInteger64Schema, this.typeErrorMessage(value));
  }

  public override fhirType(): string {
    return 'integer64';
  }

  public override isBigIntPrimitive(): boolean {
    return true;
  }

  public override copy(): Integer64Type {
    const dest = new Integer64Type();
    this.copyValues(dest);
    return dest;
  }

  protected override copyValues(dest: Integer64Type): void {
    super.copyValues(dest);
    dest.setValueAsString(this.getValueAsString());
  }

  public override toJSON(): JSON.Value | undefined {
    // Ref: https://hl7.org/fhir/json.html#primitive
    // The FHIR types integer, unsignedInt, positiveInt and decimal are represented as a JSON number,
    // the FHIR type boolean as a JSON boolean, and all other types
    //   (including integer64)
    // are represented as a JSON string which has the same content as that specified for the relevant
    // datatype. Whitespace is always significant (i.e. no leading and trailing spaces for non-strings).
    return this.hasValue() ? (String(this.getValue()) as JSON.Value) : undefined;
  }

  private assignValue(value: fhirInteger64 | undefined): void {
    if (isDefined<fhirInteger64>(value)) {
      super.setValue(parseFhirPrimitiveData(value, fhirInteger64Schema, this.typeErrorMessage(value)));
    } else {
      super.setValue(undefined);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private typeErrorMessage(value: any): string {
    return `Invalid value for Integer64Type (${String(value)})`;
  }
}
