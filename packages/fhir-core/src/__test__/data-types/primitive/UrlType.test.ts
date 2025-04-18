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
import { fhirUrl } from '../../../data-types/primitive/primitive-types';
import { StringType } from '../../../data-types/primitive/StringType';
import { UrlType } from '../../../data-types/primitive/UrlType';
import { PrimitiveTypeError } from '../../../errors/PrimitiveTypeError';

describe('UrlType', () => {
  const VALID_URL = `testUrlType` as fhirUrl;
  const VALID_URL_2 = `testUrlType2` as fhirUrl;
  const INVALID_URL = ' invalid Url ' as fhirUrl;

  it('should be properly instantiated as empty', () => {
    const testUrlType = new UrlType();
    expect(testUrlType).toBeDefined();
    expect(testUrlType).toBeInstanceOf(UrlType);
    expect(testUrlType).toBeInstanceOf(PrimitiveType);
    expect(testUrlType.constructor.name).toStrictEqual('UrlType');
    expect(testUrlType.fhirType()).toStrictEqual('url');
    expect(testUrlType.isEmpty()).toBe(true);
    expect(testUrlType.isPrimitive()).toBe(true);
    expect(testUrlType.isStringPrimitive()).toBe(true);
    expect(testUrlType.toJSON()).toBeUndefined();

    // inherited properties from Element
    expect(testUrlType.hasId()).toBe(false);
    expect(testUrlType.getId()).toBeUndefined();
    expect(testUrlType.hasExtension()).toBe(false);
    expect(testUrlType.getExtension()).toEqual([] as Extension[]);
    // primitive value properties
    expect(testUrlType.hasValue()).toBe(false);
    expect(testUrlType.getValue()).toBeUndefined();
    expect(testUrlType.getValueAsString()).toBeUndefined();
  });

  it('should be properly initialized', () => {
    const testUrlType = new UrlType(VALID_URL);
    const testId = 'id1234';
    testUrlType.setId(testId);
    const testExtension = new Extension('testUrl', new StringType('extension string value'));
    testUrlType.addExtension(testExtension);

    expect(testUrlType).toBeDefined();
    expect(testUrlType).toBeInstanceOf(UrlType);
    expect(testUrlType.constructor.name).toStrictEqual('UrlType');
    expect(testUrlType.fhirType()).toStrictEqual('url');
    expect(testUrlType.isEmpty()).toBe(false);
    expect(testUrlType.isPrimitive()).toBe(true);
    expect(testUrlType.isStringPrimitive()).toBe(true);
    expect(testUrlType.toJSON()).toStrictEqual(VALID_URL);
    expect(testUrlType.toSiblingJSON()).toEqual({
      id: 'id1234',
      extension: [
        {
          url: 'testUrl',
          valueString: 'extension string value',
        },
      ],
    });

    // inherited properties from Element
    expect(testUrlType.hasId()).toBe(true);
    expect(testUrlType.getId()).toStrictEqual(testId);
    expect(testUrlType.hasExtension()).toBe(true);
    expect(testUrlType.getExtension()).toEqual([testExtension]);
    // primitive value properties
    expect(testUrlType.hasValue()).toBe(true);
    expect(testUrlType.getValue()).toBeDefined();
    expect(testUrlType.getValue()).toStrictEqual(VALID_URL);
    expect(testUrlType.getValueAsString()).toStrictEqual(VALID_URL);
  });

  it('should throw PrimitiveTypeError when initialized with invalid value', () => {
    const t = () => {
      new UrlType(INVALID_URL);
    };
    expect(t).toThrow(PrimitiveTypeError);
    expect(t).toThrow(`Invalid value for UrlType (${INVALID_URL})`);
  });

  it('should be properly reset by setValue()', () => {
    const testUrlType = new UrlType(VALID_URL);
    expect(testUrlType.isEmpty()).toBe(false);
    expect(testUrlType.hasValue()).toBe(true);
    expect(testUrlType.getValue()).toBeDefined();
    expect(testUrlType.getValue()).toStrictEqual(VALID_URL);
    expect(testUrlType.getValueAsString()).toStrictEqual(VALID_URL);

    testUrlType.setValue(VALID_URL_2);
    expect(testUrlType.isEmpty()).toBe(false);
    expect(testUrlType.hasValue()).toBe(true);
    expect(testUrlType.getValue()).toBeDefined();
    expect(testUrlType.getValue()).toStrictEqual(VALID_URL_2);
    expect(testUrlType.getValueAsString()).toStrictEqual(VALID_URL_2);

    testUrlType.setValue();
    expect(testUrlType.isEmpty()).toBe(true);
    expect(testUrlType.hasValue()).toBe(false);
    expect(testUrlType.getValue()).toBeUndefined();
    expect(testUrlType.getValueAsString()).toBeUndefined();
  });

  it('should throw PrimitiveTypeError when setValue() with invalid value', () => {
    const testUrlType = new UrlType();
    const t = () => {
      testUrlType.setValue(INVALID_URL);
    };
    expect(t).toThrow(PrimitiveTypeError);
    expect(t).toThrow(`Invalid value for UrlType (${INVALID_URL})`);
  });

  it('should properly setValueAsString() with correct values', () => {
    const testUrlType = new UrlType(VALID_URL);
    testUrlType.setValueAsString(VALID_URL_2);
    expect(testUrlType.getValue()).toStrictEqual(VALID_URL_2);
    testUrlType.setValueAsString();
    expect(testUrlType.getValue()).toBeUndefined();
  });

  it('should throw PrimitiveTypeError when setValueAsString() with invalid value', () => {
    const testUrlType = new UrlType();
    const t = () => {
      testUrlType.setValueAsString(INVALID_URL);
    };
    expect(t).toThrow(PrimitiveTypeError);
    expect(t).toThrow(`Invalid value for UrlType (${INVALID_URL})`);
  });

  it('should properly encodeToString with correct values', () => {
    const testUrlType = new UrlType(VALID_URL);
    expect(testUrlType.encodeToString(VALID_URL)).toStrictEqual(VALID_URL);
  });

  it('should throw PrimitiveTypeError when encodeToString() with invalid value', () => {
    const testUrlType = new UrlType();
    const t = () => {
      testUrlType.encodeToString(INVALID_URL);
    };
    expect(t).toThrow(PrimitiveTypeError);
    expect(t).toThrow(`Invalid value for UrlType (${INVALID_URL})`);
  });

  it('should properly parseToPrimitive with correct values', () => {
    const testUrlType = new UrlType();
    expect(testUrlType.parseToPrimitive(VALID_URL)).toStrictEqual(VALID_URL);
  });

  it('should throw PrimitiveTypeError when parseToPrimitive() with invalid value', () => {
    const testUrlType = new UrlType();
    const t = () => {
      testUrlType.parseToPrimitive(INVALID_URL);
    };
    expect(t).toThrow(PrimitiveTypeError);
    expect(t).toThrow(`Invalid value for UrlType (${INVALID_URL})`);
  });

  it('should properly copy()', () => {
    const urlType = new UrlType(VALID_URL);
    const testUrlType = urlType.copy();
    expect(testUrlType).toBeDefined();
    expect(testUrlType).toBeInstanceOf(UrlType);
    expect(testUrlType.constructor.name).toStrictEqual('UrlType');
    expect(testUrlType.fhirType()).toStrictEqual('url');
    expect(testUrlType.isEmpty()).toBe(false);
    expect(testUrlType.isPrimitive()).toBe(true);
    expect(testUrlType.isStringPrimitive()).toBe(true);
    expect(testUrlType.toJSON()).toStrictEqual(VALID_URL);
    expect(testUrlType.hasValue()).toBe(true);
    expect(testUrlType.getValue()).toBeDefined();
    expect(testUrlType.getValue()).toStrictEqual(VALID_URL);
    expect(testUrlType.getValueAsString()).toStrictEqual(VALID_URL);
  });
});
