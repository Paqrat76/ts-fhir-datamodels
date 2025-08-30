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

import * as JSON from '../utility/json-helpers';
import { IBase } from './library-interfaces';

/**
 * Abstract Base Class
 *
 * @remarks
 * Base Type: Base definition for all types defined in FHIR type system.
 *
 * The Base type that all other types specialize.
 * This type has no properties or constraints.
 * This class contains abstract methods useful to all FHIR classes.
 *
 * **FHIR Specification**
 * - **Short**: Base for all types and resources
 * - **Definition**: Base definition for all types defined in FHIR type system.
 * - **FHIR Version**: 5.0.0; Normative since 4.0.0
 *
 * @privateRemarks
 * Loosely based on HAPI FHIR org.hl7.fhir-core.r4.model.Base
 *
 * @category Base Models
 * @see [FHIR Base](http://hl7.org/fhir/StructureDefinition/Base)
 */
export abstract class Base implements IBase {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected constructor() {}

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public abstract fhirType(): string;

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public abstract isEmpty(): boolean;

  /**
   * Creates a copy of the current instance.
   *
   * @privateRemarks
   * Base specification returning `any` is reasonable since all implementing classes will be generated
   * and this method will be overridden by the generated class.
   *
   * @returns the a new instance copied from the current instance
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public abstract copy(): any;

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @privateRemarks
   * Base specification returning `any` is reasonable since all implementing classes will be generated
   * and this method will be overridden by the generated class.
   *
   * @param dest - the copied instance
   * @protected
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected abstract copyValues(dest: any): void;

  /**
   * @returns the JSON value
   */
  public abstract toJSON(): JSON.Value | undefined;

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  public isRequiredFieldsEmpty(): boolean {
    return false;
  }

  /**
   * @returns `true` if the instance is a FHIR resource; `false` otherwise
   */
  public isResource(): boolean {
    return false;
  }

  /**
   * @returns `true` if the instance is a FHIR complex or primitive datatype; `false` otherwise
   */
  public isDataType(): boolean {
    return false;
  }

  /**
   * @returns `true` if the instance is a FHIR complex datatype; `false` otherwise
   */
  public isComplexDataType(): boolean {
    return false;
  }

  /**
   * @returns `true` if the instance is a FHIR primitive datatype; `false` otherwise
   */
  public isPrimitive(): boolean {
    return false;
  }

  /**
   * @returns `true` if the instance is a FHIR primitive boolean datatype; `false` otherwise
   */
  public isBooleanPrimitive(): boolean {
    return false;
  }

  /**
   * @returns `true` if the instance is a FHIR primitive string-based datatype; `false` otherwise
   */
  public isStringPrimitive(): boolean {
    return false;
  }

  /**
   * @returns `true` if the instance is a FHIR primitive number-based datatype; `false` otherwise
   */
  public isNumberPrimitive(): boolean {
    return false;
  }

  /**
   * @returns `true` if the instance is a FHIR primitive bigint-based datatype; `false` otherwise
   */
  public isBigIntPrimitive(): boolean {
    return false;
  }

  /**
   * @returns `true` if the instance is a FHIR primitive datetime-based datatype; `false` otherwise
   */
  public isDateTimePrimitive(): boolean {
    return false;
  }
}
