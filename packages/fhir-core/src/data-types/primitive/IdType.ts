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
import { fhirId, fhirIdSchema, parseFhirPrimitiveData } from './primitive-types';
import { IPrimitiveType } from '../../base-models/library-interfaces';

/**
 * Id Class
 *
 * @remarks
 * Base StructureDefinition for id type: Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.) Ids are case-insensitive.
 *
 * **FHIR Specification**
 * - **Short:** Primitive Type id
 * - **Definition:** Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.) Ids are case-insensitive.
 * - **Comment:** RFC 4122
 * - **FHIR Version:** 4.0.1; Normative since 4.0.0
 *
 * @category Datatypes: Primitive
 * @see [FHIR id](http://hl7.org/fhir/StructureDefinition/id)
 */
export class IdType extends PrimitiveType<fhirId> implements IPrimitiveType<fhirId> {
  /**
   * @param value - the value of the primitive `fhirId`
   * @throws PrimitiveTypeError for invalid value
   */
  constructor(value?: fhirId) {
    super();
    this.assignValue(value);
  }

  public override setValue(value?: fhirId): this {
    this.assignValue(value);
    return this;
  }

  public encodeToString(value: fhirId): string {
    return parseFhirPrimitiveData(value, fhirIdSchema, this.typeErrorMessage(value)).toString();
  }

  public parseToPrimitive(value: string): fhirId {
    return parseFhirPrimitiveData(value, fhirIdSchema, this.typeErrorMessage(value));
  }

  public override fhirType(): string {
    return 'id';
  }

  public override isStringPrimitive(): boolean {
    return true;
  }

  public override copy(): IdType {
    const dest = new IdType();
    this.copyValues(dest);
    return dest;
  }

  protected override copyValues(dest: IdType): void {
    super.copyValues(dest);
    dest.setValueAsString(this.getValueAsString());
  }

  private assignValue(value: fhirId | undefined): void {
    if (isDefined<fhirId>(value)) {
      super.setValue(parseFhirPrimitiveData(value, fhirIdSchema, this.typeErrorMessage(value)));
    } else {
      super.setValue(undefined);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private typeErrorMessage(value: any): string {
    return `Invalid value for IdType (${String(value)})`;
  }
}
