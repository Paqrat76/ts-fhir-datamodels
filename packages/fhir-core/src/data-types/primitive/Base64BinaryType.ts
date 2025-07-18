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
import { fhirBase64Binary, fhirBase64BinarySchema, parseFhirPrimitiveData } from './primitive-types';
import { IPrimitiveType } from '../../base-models/library-interfaces';

/**
 * Base64Binary Class
 *
 * @remarks
 * Base StructureDefinition for base64Binary Type: A stream of bytes
 *
 * **FHIR Specification**
 * - **Short:** Primitive Type base64Binary
 * - **Definition:** A stream of bytes
 * - **Comment:** A stream of bytes, base64 encoded
 * - **FHIR Version:** 4.0.1; Normative since 4.0.0
 *
 * @category Datatypes: Primitive
 * @see [FHIR base64Binary](http://hl7.org/fhir/StructureDefinition/base64Binary)
 */
export class Base64BinaryType extends PrimitiveType<fhirBase64Binary> implements IPrimitiveType<fhirBase64Binary> {
  /**
   * @param value - the value of the primitive `fhirBase64Binary`
   * @throws PrimitiveTypeError for invalid value
   */
  constructor(value?: fhirBase64Binary) {
    super();
    this.assignValue(value);
  }

  public override setValue(value?: fhirBase64Binary): this {
    this.assignValue(value);
    return this;
  }

  public encodeToString(value: fhirBase64Binary): string {
    return parseFhirPrimitiveData(value, fhirBase64BinarySchema, this.typeErrorMessage()).toString();
  }

  public parseToPrimitive(value: string): fhirBase64Binary {
    return parseFhirPrimitiveData(value, fhirBase64BinarySchema, this.typeErrorMessage());
  }

  public override fhirType(): string {
    return 'base64Binary';
  }

  public override isStringPrimitive(): boolean {
    return true;
  }

  public override copy(): Base64BinaryType {
    const dest = new Base64BinaryType();
    this.copyValues(dest);
    return dest;
  }

  protected override copyValues(dest: Base64BinaryType): void {
    super.copyValues(dest);
    dest.setValueAsString(this.getValueAsString());
  }

  private assignValue(value: fhirBase64Binary | undefined): void {
    if (isDefined<fhirBase64Binary>(value)) {
      super.setValue(parseFhirPrimitiveData(value, fhirBase64BinarySchema, this.typeErrorMessage()));
    } else {
      super.setValue(undefined);
    }
  }

  private typeErrorMessage(): string {
    return `Invalid value for Base64BinaryType`;
  }
}
