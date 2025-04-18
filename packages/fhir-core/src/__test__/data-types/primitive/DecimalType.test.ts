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

import { Extension, PrimitiveType } from '../../../base-models/core-fhir-models';
import { DecimalType } from '../../../data-types/primitive/DecimalType';
import { StringType } from '../../../data-types/primitive/StringType';
import { PrimitiveTypeError } from '../../../errors/PrimitiveTypeError';

describe('DecimalType', () => {
  const VALID_DECIMAL = -1234.56789;
  const VALID_DECIMAL_2 = 0.0;
  const VALID_DECIMAL_3 = 1234.56789;
  const INVALID_DECIMAL = Number.MAX_VALUE;

  it('should be properly instantiated as empty', () => {
    const testDecimalType = new DecimalType();
    expect(testDecimalType).toBeDefined();
    expect(testDecimalType).toBeInstanceOf(DecimalType);
    expect(testDecimalType).toBeInstanceOf(PrimitiveType);
    expect(testDecimalType.constructor.name).toStrictEqual('DecimalType');
    expect(testDecimalType.fhirType()).toStrictEqual('decimal');
    expect(testDecimalType.isEmpty()).toBe(true);
    expect(testDecimalType.isPrimitive()).toBe(true);
    expect(testDecimalType.isNumberPrimitive()).toBe(true);
    expect(testDecimalType.toJSON()).toBeUndefined();

    // inherited properties from Element
    expect(testDecimalType.hasId()).toBe(false);
    expect(testDecimalType.getId()).toBeUndefined();
    expect(testDecimalType.hasExtension()).toBe(false);
    expect(testDecimalType.getExtension()).toEqual([] as Extension[]);
    // primitive value properties
    expect(testDecimalType.hasValue()).toBe(false);
    expect(testDecimalType.getValue()).toBeUndefined();
    expect(testDecimalType.getValueAsString()).toBeUndefined();
  });

  it('should be properly initialized', () => {
    const testDecimalType = new DecimalType(VALID_DECIMAL);
    const testId = 'id1234';
    testDecimalType.setId(testId);
    const testExtension = new Extension('testUrl', new StringType('extension string value'));
    testDecimalType.addExtension(testExtension);

    expect(testDecimalType).toBeDefined();
    expect(testDecimalType).toBeInstanceOf(DecimalType);
    expect(testDecimalType.constructor.name).toStrictEqual('DecimalType');
    expect(testDecimalType.fhirType()).toStrictEqual('decimal');
    expect(testDecimalType.isEmpty()).toBe(false);
    expect(testDecimalType.isPrimitive()).toBe(true);
    expect(testDecimalType.isNumberPrimitive()).toBe(true);
    expect(testDecimalType.toJSON()).toStrictEqual(VALID_DECIMAL);
    expect(testDecimalType.toSiblingJSON()).toEqual({
      id: 'id1234',
      extension: [
        {
          url: 'testUrl',
          valueString: 'extension string value',
        },
      ],
    });

    // inherited properties from Element
    expect(testDecimalType.hasId()).toBe(true);
    expect(testDecimalType.getId()).toStrictEqual(testId);
    expect(testDecimalType.hasExtension()).toBe(true);
    expect(testDecimalType.getExtension()).toEqual([testExtension]);
    // primitive value properties
    expect(testDecimalType.hasValue()).toBe(true);
    expect(testDecimalType.getValue()).toBeDefined();
    expect(testDecimalType.getValue()).toStrictEqual(VALID_DECIMAL);
    expect(testDecimalType.getValueAsString()).toStrictEqual(VALID_DECIMAL.toString());
  });

  it('should throw PrimitiveTypeError when initialized with an invalid integer', () => {
    const t = () => {
      new DecimalType(INVALID_DECIMAL);
    };
    expect(t).toThrow(PrimitiveTypeError);
    expect(t).toThrow('Invalid value for DecimalType');
  });

  it('should be properly reset by setValue()', () => {
    const testDecimalType = new DecimalType(VALID_DECIMAL);
    expect(testDecimalType.isEmpty()).toBe(false);
    expect(testDecimalType.hasValue()).toBe(true);
    expect(testDecimalType.getValue()).toBeDefined();
    expect(testDecimalType.getValue()).toStrictEqual(VALID_DECIMAL);
    expect(testDecimalType.getValueAsString()).toStrictEqual(VALID_DECIMAL.toString());

    testDecimalType.setValue(VALID_DECIMAL_2);
    expect(testDecimalType.isEmpty()).toBe(false);
    expect(testDecimalType.hasValue()).toBe(true);
    expect(testDecimalType.getValue()).toBeDefined();
    expect(testDecimalType.getValue()).toStrictEqual(VALID_DECIMAL_2);
    expect(testDecimalType.getValueAsString()).toStrictEqual(VALID_DECIMAL_2.toString());

    testDecimalType.setValue(VALID_DECIMAL_3);
    expect(testDecimalType.isEmpty()).toBe(false);
    expect(testDecimalType.hasValue()).toBe(true);
    expect(testDecimalType.getValue()).toBeDefined();
    expect(testDecimalType.getValue()).toStrictEqual(VALID_DECIMAL_3);
    expect(testDecimalType.getValueAsString()).toStrictEqual(VALID_DECIMAL_3.toString());

    testDecimalType.setValue();
    expect(testDecimalType.isEmpty()).toBe(true);
    expect(testDecimalType.hasValue()).toBe(false);
    expect(testDecimalType.getValue()).toBeUndefined();
    expect(testDecimalType.getValueAsString()).toBeUndefined();
  });

  it('should throw PrimitiveTypeError when setValue() with an invalid value', () => {
    const testDecimalType = new DecimalType();
    const t = () => {
      testDecimalType.setValue(INVALID_DECIMAL);
    };
    expect(t).toThrow(PrimitiveTypeError);
    expect(t).toThrow('Invalid value for DecimalType');
  });

  it('should properly setValueAsString() with correct values', () => {
    const testDecimalType = new DecimalType(VALID_DECIMAL);
    testDecimalType.setValueAsString(VALID_DECIMAL_2.toString());
    expect(testDecimalType.getValue()).toStrictEqual(VALID_DECIMAL_2);
    testDecimalType.setValueAsString(VALID_DECIMAL_3.toString());
    expect(testDecimalType.getValue()).toStrictEqual(VALID_DECIMAL_3);
    testDecimalType.setValueAsString();
    expect(testDecimalType.getValue()).toBeUndefined();
  });

  it('should throw PrimitiveTypeError when setValueAsString() with an invalid value', () => {
    const testDecimalType = new DecimalType();
    const t = () => {
      testDecimalType.setValueAsString(INVALID_DECIMAL.toString());
    };
    expect(t).toThrow(PrimitiveTypeError);
    expect(t).toThrow('Invalid value for DecimalType');
  });

  it('should properly encodeToString with correct values', () => {
    const testDecimalType = new DecimalType();
    expect(testDecimalType.encodeToString(VALID_DECIMAL)).toStrictEqual(VALID_DECIMAL.toString());
  });

  it('should throw PrimitiveTypeError when encodeToString() with an invalid value', () => {
    const testDecimalType = new DecimalType();
    const t = () => {
      testDecimalType.encodeToString(INVALID_DECIMAL);
    };
    expect(t).toThrow(PrimitiveTypeError);
    expect(t).toThrow('Invalid value for DecimalType');
  });

  it('should properly parseToPrimitive with correct values', () => {
    const testDecimalType = new DecimalType();
    expect(testDecimalType.parseToPrimitive(VALID_DECIMAL.toString())).toStrictEqual(VALID_DECIMAL);
  });

  it('should throw PrimitiveTypeError when parseToPrimitive() with an invalid value', () => {
    const testDecimalType = new DecimalType();
    const t = () => {
      testDecimalType.parseToPrimitive(INVALID_DECIMAL.toString());
    };
    expect(t).toThrow(PrimitiveTypeError);
    expect(t).toThrow('Invalid value for DecimalType');
  });

  it('should throw TypeError when parseToPrimitive() with a NaN', () => {
    const testDecimalType = new DecimalType();
    const t = () => {
      testDecimalType.parseToPrimitive('not_a_number');
    };
    expect(t).toThrow(PrimitiveTypeError);
    expect(t).toThrow('Invalid value for DecimalType (not_a_number)');
  });

  it('should properly copy()', () => {
    const integerType = new DecimalType(VALID_DECIMAL);
    const testDecimalType = integerType.copy();
    expect(testDecimalType).toBeDefined();
    expect(testDecimalType).toBeInstanceOf(DecimalType);
    expect(testDecimalType.constructor.name).toStrictEqual('DecimalType');
    expect(testDecimalType.fhirType()).toStrictEqual('decimal');
    expect(testDecimalType.isEmpty()).toBe(false);
    expect(testDecimalType.isPrimitive()).toBe(true);
    expect(testDecimalType.isNumberPrimitive()).toBe(true);
    expect(testDecimalType.toJSON()).toStrictEqual(VALID_DECIMAL);
    expect(testDecimalType.hasValue()).toBe(true);
    expect(testDecimalType.getValue()).toBeDefined();
    expect(testDecimalType.getValue()).toStrictEqual(VALID_DECIMAL);
    expect(testDecimalType.getValueAsString()).toStrictEqual(VALID_DECIMAL.toString());
  });
});
