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

import { DateTime } from 'luxon';
import { Extension, PrimitiveType } from '../../../base-models/core-fhir-models';
import { DateType } from '../../../data-types/primitive/DateType';
import { StringType } from '../../../data-types/primitive/StringType';
import { PrimitiveTypeError } from '../../../errors/PrimitiveTypeError';

describe('DateType', () => {
  const VALID_DATE = `2015-02-07`;
  const VALID_DATE_ISO = '2015-02-07T00:00:00.000';
  const VALID_DATE_2 = `2017-01-01`;
  const INVALID_DATE = `invalid date`;

  describe('PrimitiveType<fhirDate>', () => {
    it('should be properly instantiated as empty', () => {
      const testDateType = new DateType();
      expect(testDateType).toBeDefined();
      expect(testDateType).toBeInstanceOf(DateType);
      expect(testDateType).toBeInstanceOf(PrimitiveType);
      expect(testDateType.constructor.name).toStrictEqual('DateType');
      expect(testDateType.fhirType()).toStrictEqual('date');
      expect(testDateType.isEmpty()).toBe(true);
      expect(testDateType.isPrimitive()).toBe(true);
      expect(testDateType.isDateTimePrimitive()).toBe(true);
      expect(testDateType.toJSON()).toBeUndefined();

      // inherited properties from Element
      expect(testDateType.hasId()).toBe(false);
      expect(testDateType.getId()).toBeUndefined();
      expect(testDateType.hasExtension()).toBe(false);
      expect(testDateType.getExtension()).toEqual([] as Extension[]);
      // primitive value properties
      expect(testDateType.hasValue()).toBe(false);
      expect(testDateType.getValue()).toBeUndefined();
      expect(testDateType.getValueAsString()).toBeUndefined();
    });

    it('should be properly initialized', () => {
      const testDateType = new DateType(VALID_DATE);
      const testId = 'id1234';
      testDateType.setId(testId);
      const testExtension = new Extension('testUrl', new StringType('extension string value'));
      testDateType.addExtension(testExtension);

      expect(testDateType).toBeDefined();
      expect(testDateType).toBeInstanceOf(DateType);
      expect(testDateType.constructor.name).toStrictEqual('DateType');
      expect(testDateType.fhirType()).toStrictEqual('date');
      expect(testDateType.isEmpty()).toBe(false);
      expect(testDateType.isPrimitive()).toBe(true);
      expect(testDateType.isDateTimePrimitive()).toBe(true);
      expect(testDateType.toJSON()).toStrictEqual(VALID_DATE);
      expect(testDateType.toSiblingJSON()).toEqual({
        id: 'id1234',
        extension: [
          {
            url: 'testUrl',
            valueString: 'extension string value',
          },
        ],
      });

      // inherited properties from Element
      expect(testDateType.hasId()).toBe(true);
      expect(testDateType.getId()).toStrictEqual(testId);
      expect(testDateType.hasExtension()).toBe(true);
      expect(testDateType.getExtension()).toEqual([testExtension]);
      // primitive value properties
      expect(testDateType.hasValue()).toBe(true);
      expect(testDateType.getValue()).toBeDefined();
      expect(testDateType.getValue()).toStrictEqual(VALID_DATE);
      expect(testDateType.getValueAsString()).toStrictEqual(VALID_DATE);
    });

    it('should throw PrimitiveTypeError when initialized with invalid value', () => {
      const t = () => {
        new DateType(INVALID_DATE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid value for DateType (${INVALID_DATE})`);
    });

    it('should be properly reset by setValue()', () => {
      const testDateType = new DateType(VALID_DATE);
      expect(testDateType.isEmpty()).toBe(false);
      expect(testDateType.hasValue()).toBe(true);
      expect(testDateType.getValue()).toBeDefined();
      expect(testDateType.getValue()).toStrictEqual(VALID_DATE);
      expect(testDateType.getValueAsString()).toStrictEqual(VALID_DATE);

      testDateType.setValue(VALID_DATE_2);
      expect(testDateType.isEmpty()).toBe(false);
      expect(testDateType.hasValue()).toBe(true);
      expect(testDateType.getValue()).toBeDefined();
      expect(testDateType.getValue()).toStrictEqual(VALID_DATE_2);
      expect(testDateType.getValueAsString()).toStrictEqual(VALID_DATE_2);

      testDateType.setValue();
      expect(testDateType.isEmpty()).toBe(true);
      expect(testDateType.hasValue()).toBe(false);
      expect(testDateType.getValue()).toBeUndefined();
      expect(testDateType.getValueAsString()).toBeUndefined();
    });

    it('should throw PrimitiveTypeError when setValue() with invalid value', () => {
      const testDateType = new DateType(VALID_DATE);
      const t = () => {
        testDateType.setValue(INVALID_DATE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid value for DateType (${INVALID_DATE})`);
    });

    it('should properly setValueAsString() with correct values', () => {
      const testDateType = new DateType(VALID_DATE);
      testDateType.setValueAsString(VALID_DATE_2);
      expect(testDateType.getValue()).toStrictEqual(VALID_DATE_2);
      testDateType.setValueAsString();
      expect(testDateType.getValue()).toBeUndefined();
    });

    it('should throw PrimitiveTypeError when setValueAsString() with invalid value', () => {
      const testDateType = new DateType();
      const t = () => {
        testDateType.setValueAsString(INVALID_DATE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid value for DateType (${INVALID_DATE})`);
    });

    it('should properly encodeToString with correct values', () => {
      const testDateType = new DateType();
      expect(testDateType.encodeToString(VALID_DATE)).toStrictEqual(VALID_DATE);
    });

    it('should throw PrimitiveTypeError when encodeToString() with invalid value', () => {
      const testDateType = new DateType();
      const t = () => {
        testDateType.encodeToString(INVALID_DATE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid value for DateType (${INVALID_DATE})`);
    });

    it('should properly parseToPrimitive with correct values', () => {
      const testDateType = new DateType();
      expect(testDateType.parseToPrimitive(VALID_DATE)).toStrictEqual(VALID_DATE);
    });

    it('should throw PrimitiveTypeError when parseToPrimitive() with invalid value', () => {
      const testDateType = new DateType();
      const t = () => {
        testDateType.parseToPrimitive(INVALID_DATE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid value for DateType (${INVALID_DATE})`);
    });

    it('should properly copy()', () => {
      const dateType = new DateType(VALID_DATE);
      const testDateType = dateType.copy();
      expect(testDateType).toBeDefined();
      expect(testDateType).toBeInstanceOf(DateType);
      expect(testDateType.constructor.name).toStrictEqual('DateType');
      expect(testDateType.fhirType()).toStrictEqual('date');
      expect(testDateType.isEmpty()).toBe(false);
      expect(testDateType.isPrimitive()).toBe(true);
      expect(testDateType.isDateTimePrimitive()).toBe(true);
      expect(testDateType.toJSON()).toStrictEqual(VALID_DATE);
      expect(testDateType.hasValue()).toBe(true);
      expect(testDateType.getValue()).toBeDefined();
      expect(testDateType.getValue()).toStrictEqual(VALID_DATE);
      expect(testDateType.getValueAsString()).toStrictEqual(VALID_DATE);
    });
  });

  describe('DateTypeImpl', () => {
    it('should return undefined from getValueAsDateTime when instantiated as empty', () => {
      const testDateType = new DateType();
      const dtObj = testDateType.getValueAsDateTime();
      expect(dtObj).toBeUndefined();
    });

    it('should return valid DateTime object from getValueAsDateTime when instantiated with valid ISO 8601 string', () => {
      const testDateType = new DateType(VALID_DATE);
      const dtObj = testDateType.getValueAsDateTime();
      expect(dtObj).toBeDefined();
      expect(dtObj?.isValid).toBe(true);
      expect(dtObj?.toISODate()).toStrictEqual(VALID_DATE);
      expect(dtObj?.toISO({ includeOffset: false })).toStrictEqual(VALID_DATE_ISO);
    });

    it('should return undefined from getValueAsDateTimeUTC when instantiated as empty', () => {
      const testDateType = new DateType();
      const dtObj = testDateType.getValueAsDateTimeUTC();
      expect(dtObj).toBeUndefined();
    });

    it('should return valid DateTime object from getValueAsDateTimeUTC when instantiated with valid ISO 8601 string', () => {
      const testDateType = new DateType(VALID_DATE);
      const dtObj = testDateType.getValueAsDateTimeUTC();
      expect(dtObj).toBeDefined();
      expect(dtObj?.isValid).toBe(true);
      expect(dtObj?.toISODate()).toStrictEqual(VALID_DATE);
      expect(dtObj?.toISO({ includeOffset: false })).toStrictEqual(VALID_DATE_ISO);
    });

    it('should properly setValueAsYear with a undefined', () => {
      const testDateType = new DateType(VALID_DATE);
      testDateType.setValueAsYear(undefined);
      expect(testDateType.getValue()).toBeUndefined();
    });

    it('should properly setValueAsYear with a valid DataTime object', () => {
      const sourceInstantType = new DateType(VALID_DATE);
      const testDtObj: DateTime | undefined = sourceInstantType.getValueAsDateTime();
      expect(testDtObj).toBeDefined();
      expect(testDtObj?.isValid).toBe(true);
      expect(testDtObj?.toISODate()).toStrictEqual(VALID_DATE);

      const testDateType = new DateType();
      testDateType.setValueAsYear(testDtObj);
      expect(testDateType.getValue()).toStrictEqual('2015');
    });

    it('should properly setValueAsYearMonth with a undefined', () => {
      const testDateType = new DateType(VALID_DATE);
      testDateType.setValueAsYearMonth(undefined);
      expect(testDateType.getValue()).toBeUndefined();
    });

    it('should properly setValueAsYearMonth with a valid DataTime object', () => {
      const sourceInstantType = new DateType(VALID_DATE);
      const testDtObj: DateTime | undefined = sourceInstantType.getValueAsDateTime();
      expect(testDtObj).toBeDefined();
      expect(testDtObj?.isValid).toBe(true);
      expect(testDtObj?.toISODate()).toStrictEqual(VALID_DATE);

      const testDateType = new DateType();
      testDateType.setValueAsYearMonth(testDtObj);
      expect(testDateType.getValue()).toStrictEqual('2015-02');
    });

    it('should properly setValueAsDateOnly with a undefined', () => {
      const testDateType = new DateType(VALID_DATE);
      testDateType.setValueAsDateOnly(undefined);
      expect(testDateType.getValue()).toBeUndefined();
    });

    it('should properly setValueAsDateOnly with a valid DataTime object', () => {
      const sourceInstantType = new DateType(VALID_DATE);
      const testDtObj: DateTime | undefined = sourceInstantType.getValueAsDateTime();
      expect(testDtObj).toBeDefined();
      expect(testDtObj?.isValid).toBe(true);
      expect(testDtObj?.toISODate()).toStrictEqual(VALID_DATE);

      const testDateType = new DateType();
      testDateType.setValueAsDateOnly(testDtObj);
      expect(testDateType.getValue()).toStrictEqual(VALID_DATE);
    });
  });
});
