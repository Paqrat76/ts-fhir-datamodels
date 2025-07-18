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
import { isDefined } from '../../utility/type-guards';
import { fhirString, fhirStringSchema, parseFhirPrimitiveData } from './primitive-types';
import { IPrimitiveType } from '../../base-models/library-interfaces';

/**
 * String Class
 *
 * @remarks
 * Base StructureDefinition for string Type: A sequence of Unicode characters
 *
 * **FHIR Specification**
 * - **Short:** Primitive Type string
 * - **Definition:** A sequence of Unicode characters
 * - **Comment:** Note that FHIR strings SHALL NOT exceed 1MB in size
 * - **FHIR Version:** 4.0.1; Normative since 4.0.0
 *
 * @category Datatypes: Primitive
 * @see [FHIR string](http://hl7.org/fhir/StructureDefinition/string)
 */
export class StringType extends PrimitiveType<fhirString> implements IPrimitiveType<fhirString> {
  /**
   * @param value - the value of the primitive `fhirString`
   * @throws PrimitiveTypeError for invalid value
   */
  constructor(value?: fhirString) {
    super();
    this.assignValue(value);
  }

  public override setValue(value?: fhirString): this {
    this.assignValue(value);
    return this;
  }

  public encodeToString(value: fhirString): string {
    return parseFhirPrimitiveData(value, fhirStringSchema, this.typeErrorMessage()).toString();
  }

  public parseToPrimitive(value: string): fhirString {
    return parseFhirPrimitiveData(value, fhirStringSchema, this.typeErrorMessage());
  }

  public override fhirType(): string {
    return 'string';
  }

  public override isStringPrimitive(): boolean {
    return true;
  }

  public override copy(): StringType {
    const dest = new StringType();
    this.copyValues(dest);
    return dest;
  }

  protected override copyValues(dest: StringType): void {
    super.copyValues(dest);
    dest.setValueAsString(this.getValueAsString());
  }

  private assignValue(value: fhirString | undefined): void {
    if (isDefined<fhirString>(value)) {
      super.setValue(parseFhirPrimitiveData(value, fhirStringSchema, this.typeErrorMessage()));
    } else {
      super.setValue(undefined);
    }
  }

  private typeErrorMessage(): string {
    return `Invalid value for StringType`;
  }
}
