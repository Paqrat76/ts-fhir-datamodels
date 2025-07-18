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

import { AssertionError } from 'node:assert';
import { IFhirCodeDefinition } from '../../base-models/core-fhir-codes';
import { BooleanType } from '../../data-types/primitive/BooleanType';
import {
  CodeType,
  constructorCodeValueAsEnumCodeType,
  constructorCodeValueAsEnumCodeTypeList,
  EnumCodeType,
} from '../../data-types/primitive/CodeType';
import { DateTimeType } from '../../data-types/primitive/DateTimeType';
import { fhirUrl } from '../../data-types/primitive/primitive-types';
import { StringType } from '../../data-types/primitive/StringType';
import { UriType } from '../../data-types/primitive/UriType';
import { InvalidCodeError } from '../../errors/InvalidCodeError';
import { InvalidTypeError } from '../../errors/InvalidTypeError';
import { copyListValues, extractFieldName, isElementEmpty, validateUrl } from '../../utility/fhir-util';
import { TestTypeEnum } from '../TestTypeEnum';
import { MockCodeEnum, MockComplexDataType } from '../test-utils';
import { TestData } from '../test-data';

describe('fhir-util', () => {
  describe('isElementEmpty', () => {
    const TEST_UNDEFINED = undefined;
    const TEST_NULL = null;
    const TEST_BOOLEAN_TYPE_UNDEF = new BooleanType();
    const TEST_DATETIME_TYPE_UNDEF = new DateTimeType();
    const TEST_STRING_TYPE_UNDEF = new StringType();
    const TEST_URI_TYPE_UNDEF = new UriType();
    const TEST_URI_TYPE_UNDEF_ARRAY = [new UriType()];

    const TEST_BOOLEAN_TYPE = new BooleanType(true);
    const TEST_DATETIME_TYPE = new DateTimeType('2024-07-03');
    const TEST_STRING_TYPE = new StringType('stringValue');
    const TEST_URI_TYPE = new UriType('uriValue');
    const TEST_URI_TYPE_ARRAY = [new UriType('uriValue')];

    it('should return true for no elements', () => {
      let result = isElementEmpty(TEST_UNDEFINED);
      expect(result).toBe(true);

      result = isElementEmpty(TEST_NULL);
      expect(result).toBe(true);

      result = isElementEmpty([]);
      expect(result).toBe(true);
    });

    it('should return true for all undefined/null types', () => {
      let result = isElementEmpty(TEST_BOOLEAN_TYPE_UNDEF);
      expect(result).toBe(true);
      result = isElementEmpty(TEST_BOOLEAN_TYPE_UNDEF, TEST_DATETIME_TYPE_UNDEF);
      expect(result).toBe(true);
      result = isElementEmpty(TEST_BOOLEAN_TYPE_UNDEF, TEST_DATETIME_TYPE_UNDEF, TEST_STRING_TYPE_UNDEF);
      expect(result).toBe(true);
      result = isElementEmpty(
        TEST_BOOLEAN_TYPE_UNDEF,
        TEST_DATETIME_TYPE_UNDEF,
        TEST_STRING_TYPE_UNDEF,
        TEST_URI_TYPE_UNDEF,
      );
      expect(result).toBe(true);
      result = isElementEmpty(
        TEST_BOOLEAN_TYPE_UNDEF,
        TEST_DATETIME_TYPE_UNDEF,
        TEST_STRING_TYPE_UNDEF,
        TEST_URI_TYPE_UNDEF,
        TEST_URI_TYPE_UNDEF_ARRAY,
      );
      expect(result).toBe(true);
      result = isElementEmpty(
        TEST_BOOLEAN_TYPE_UNDEF,
        TEST_DATETIME_TYPE_UNDEF,
        TEST_STRING_TYPE_UNDEF,
        TEST_URI_TYPE_UNDEF,
        TEST_URI_TYPE_UNDEF_ARRAY,
        TEST_NULL,
      );
      expect(result).toBe(true);
    });

    it('should return false for at least one defined types', () => {
      const result = isElementEmpty(
        TEST_BOOLEAN_TYPE_UNDEF,
        TEST_DATETIME_TYPE_UNDEF,
        TEST_STRING_TYPE_UNDEF,
        TEST_URI_TYPE_UNDEF,
        TEST_URI_TYPE_UNDEF_ARRAY,
        TEST_NULL,
        TEST_STRING_TYPE,
      );
      expect(result).toBe(false);
    });

    it('should return false for all non-empty types', () => {
      let result = isElementEmpty(TEST_BOOLEAN_TYPE);
      expect(result).toBe(false);
      result = isElementEmpty(TEST_BOOLEAN_TYPE, TEST_DATETIME_TYPE);
      expect(result).toBe(false);
      result = isElementEmpty(TEST_BOOLEAN_TYPE, TEST_DATETIME_TYPE, TEST_STRING_TYPE);
      expect(result).toBe(false);
      result = isElementEmpty(TEST_BOOLEAN_TYPE, TEST_DATETIME_TYPE, TEST_STRING_TYPE, TEST_URI_TYPE);
      expect(result).toBe(false);
      result = isElementEmpty(
        TEST_BOOLEAN_TYPE,
        TEST_DATETIME_TYPE,
        TEST_STRING_TYPE,
        TEST_URI_TYPE,
        TEST_URI_TYPE_ARRAY,
      );
      expect(result).toBe(false);
    });

    it('should return false for array of non-empty types', () => {
      const result = isElementEmpty(TEST_URI_TYPE_ARRAY);
      expect(result).toBe(false);
    });
  });

  describe('validateUrl', () => {
    const VALID_URL = `testUrlType` as fhirUrl;
    const INVALID_URL = ' invalid Url ' as fhirUrl;
    const UNDEFINED_URL = undefined;

    it('should not throw errors for valid url', () => {
      validateUrl(VALID_URL);
      const t = () => {
        validateUrl(VALID_URL);
      };
      expect(t).not.toThrow();
    });

    it('should throw AssertionError for invalid URL', () => {
      const t = () => {
        validateUrl(INVALID_URL);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(`The url must be a valid fhirUri`);
    });

    it('should throw AssertionError for undefined URL', () => {
      const t = () => {
        validateUrl(UNDEFINED_URL);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Provided url is not a string`);
    });
  });

  describe('extractFieldName', () => {
    it('should return valid fieldName for standard source field name', () => {
      expect(extractFieldName('Group.member.entity')).toStrictEqual('entity');
    });

    it('should return valid fieldName for polymorphic source field name', () => {
      expect(extractFieldName('Group.characteristic.value[x]')).toStrictEqual('value');
    });
  });

  describe('copyListValues', () => {
    it('should return empty array for undefined/null source', () => {
      const undefArray = copyListValues<StringType>(undefined);
      expect(undefArray).toBeDefined();
      expect(undefArray).toHaveLength(0);

      const nullArray = copyListValues<MockComplexDataType>(null);
      expect(nullArray).toBeDefined();
      expect(nullArray).toHaveLength(0);
    });

    it('should return deep copy of provided PrimitiveType array', () => {
      const testStringTypeArray: StringType[] = [new StringType('string1'), new StringType('string2')];
      expect(testStringTypeArray).toBe(testStringTypeArray);
      const copyStringTypeArray: StringType[] = copyListValues<StringType>(testStringTypeArray);
      expect(copyStringTypeArray).toBe(copyStringTypeArray);

      expect(copyStringTypeArray).toHaveLength(2);
      expect(copyStringTypeArray).not.toBe(testStringTypeArray);
      expect(copyStringTypeArray[0]).not.toBe(testStringTypeArray[0]);
      expect(copyStringTypeArray[0]).toEqual(testStringTypeArray[0]);
      expect(copyStringTypeArray[1]).not.toBe(testStringTypeArray[1]);
      expect(copyStringTypeArray[1]).toEqual(testStringTypeArray[1]);
    });

    it('should return deep copy of provided Complex array', () => {
      const testPeriodArray: MockComplexDataType[] = [
        TestData.VALID_MOCK_COMPLEX_DATATYPE,
        TestData.VALID_MOCK_COMPLEX_DATATYPE_2,
      ];
      expect(testPeriodArray).toBe(testPeriodArray);

      const copyPeriodArray: MockComplexDataType[] = copyListValues<MockComplexDataType>(testPeriodArray);
      expect(copyPeriodArray).toBe(copyPeriodArray);

      expect(copyPeriodArray).toHaveLength(2);
      expect(copyPeriodArray).not.toBe(testPeriodArray);
      expect(copyPeriodArray[0]).not.toBe(testPeriodArray[0]);
      expect(copyPeriodArray[0]).toEqual(testPeriodArray[0]);
      expect(copyPeriodArray[1]).not.toBe(testPeriodArray[1]);
      expect(copyPeriodArray[1]).toEqual(testPeriodArray[1]);
    });
  });

  describe('constructorCodeValueAsEnumCodeType', () => {
    const property = 'ClassName.propName';
    const mockTypeEnum = new MockCodeEnum();
    const validCode = 'generated';
    const validCodeType = new CodeType(validCode);
    const validEnumCodeType = new EnumCodeType(validCode, mockTypeEnum);
    const groupTypeEnum = new TestTypeEnum();
    const invalidEnumCodeType = new EnumCodeType('person', groupTypeEnum);
    const expectedFhirCode = {
      name: 'GENERATED',
      code: `generated`,
      system: `http://hl7.org/fhir/narrative-status`,
      display: `Generated`,
      definition: `The contents of the narrative are entirely generated from the core elements in the content.`,
    } as IFhirCodeDefinition;

    it('should return null for null code', () => {
      const result: EnumCodeType | null = constructorCodeValueAsEnumCodeType(
        null,
        MockCodeEnum,
        mockTypeEnum,
        property,
      );
      expect(result).toBeNull();
    });

    it('should return valid EnumCodeType for valid code', () => {
      const result: EnumCodeType | null = constructorCodeValueAsEnumCodeType(
        validCode,
        MockCodeEnum,
        mockTypeEnum,
        property,
      );
      expect(result).not.toBeNull();
      expect(result).toBeDefined();
      expect(result?.fhirType()).toStrictEqual('code');
      expect(result?.getValueAsString()).toStrictEqual(validCode);
      expect(result?.fhirCode).toEqual(expectedFhirCode);
    });

    it('should return valid EnumCodeType for valid CodeType', () => {
      const result: EnumCodeType | null = constructorCodeValueAsEnumCodeType(
        validCodeType,
        MockCodeEnum,
        mockTypeEnum,
        property,
      );
      expect(result).not.toBeNull();
      expect(result).toBeDefined();
      expect(result?.fhirType()).toStrictEqual('code');
      expect(result?.getValueAsString()).toStrictEqual(validCode);
      expect(result?.fhirCode).toEqual(expectedFhirCode);
    });

    it('should return valid EnumCodeType for MockCodeEnum', () => {
      const result: EnumCodeType | null = constructorCodeValueAsEnumCodeType(
        validEnumCodeType,
        MockCodeEnum,
        mockTypeEnum,
        property,
      );
      expect(result).not.toBeNull();
      expect(result).toBeDefined();
      expect(result?.fhirType()).toStrictEqual('code');
      expect(result?.getValueAsString()).toStrictEqual(validCode);
      expect(result?.fhirCode).toEqual(expectedFhirCode);
    });

    it('should throw InvalidCodeError when instantiated with invalid EnumCodeType value', () => {
      const t = () => {
        constructorCodeValueAsEnumCodeType(invalidEnumCodeType, MockCodeEnum, mockTypeEnum, property);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid ${property}; Invalid type parameter (TestTypeEnum); Should be MockCodeEnum.`);
    });

    it('should throw InvalidCodeError when instantiated with invalid CodeType value', () => {
      const t = () => {
        constructorCodeValueAsEnumCodeType(new CodeType('invalidCodeType'), MockCodeEnum, mockTypeEnum, property);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid ${property}; Unknown MockCodeEnum 'code' value 'invalidCodeType'`);
    });

    it('should throw InvalidCodeError when instantiated with invalid fhirCode value', () => {
      const t = () => {
        constructorCodeValueAsEnumCodeType('invalidFhirCode', MockCodeEnum, mockTypeEnum, property);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid ${property}; Unknown MockCodeEnum 'code' value 'invalidFhirCode'`);
    });

    it('should throw InvalidCodeError when instantiated with non-CodeType value', () => {
      const t = () => {
        // @ts-expect-error: allow invalid type for testing
        constructorCodeValueAsEnumCodeType(new StringType('invalidCodeType'), MockCodeEnum, mockTypeEnum, property);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid ${property}; Provided code value is not an instance of CodeType`);
    });
  });

  describe('constructorCodeValueAsEnumCodeTypeList', () => {
    const property = 'ClassName.propName';
    const mockTypeEnum = new MockCodeEnum();
    const validCode = 'generated';
    const validCodeType = new CodeType(validCode);
    const validEnumCodeType = new EnumCodeType(validCode, mockTypeEnum);
    const groupTypeEnum = new TestTypeEnum();
    const invalidEnumCodeType = new EnumCodeType('person', groupTypeEnum);
    const expectedFhirCode = {
      name: 'GENERATED',
      code: `generated`,
      system: `http://hl7.org/fhir/narrative-status`,
      display: `Generated`,
      definition: `The contents of the narrative are entirely generated from the core elements in the content.`,
    } as IFhirCodeDefinition;

    it('should return null for null code', () => {
      const results: EnumCodeType[] | null = constructorCodeValueAsEnumCodeTypeList(
        null,
        MockCodeEnum,
        mockTypeEnum,
        property,
      );
      expect(results).toBeNull();
    });

    it('should return valid EnumCodeType for valid code', () => {
      const results: EnumCodeType[] | null = constructorCodeValueAsEnumCodeTypeList(
        [validCode],
        MockCodeEnum,
        mockTypeEnum,
        property,
      );
      expect(results).not.toBeNull();
      expect(results).toBeDefined();
      expect(results).toHaveLength(1);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const result0: EnumCodeType = results[0]!;
      expect(result0).not.toBeNull();
      expect(result0).toBeDefined();
      expect(result0.fhirType()).toStrictEqual('code');
      expect(result0.getValueAsString()).toStrictEqual(validCode);
      expect(result0.fhirCode).toEqual(expectedFhirCode);
    });

    it('should return valid EnumCodeType for valid CodeType', () => {
      const results: EnumCodeType[] | null = constructorCodeValueAsEnumCodeTypeList(
        [validCodeType],
        MockCodeEnum,
        mockTypeEnum,
        property,
      );
      expect(results).not.toBeNull();
      expect(results).toBeDefined();
      expect(results).toHaveLength(1);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const result0: EnumCodeType = results[0]!;
      expect(result0.fhirType()).toStrictEqual('code');
      expect(result0.getValueAsString()).toStrictEqual(validCode);
      expect(result0.fhirCode).toEqual(expectedFhirCode);
    });

    it('should return valid EnumCodeType for MockCodeEnum', () => {
      const results: EnumCodeType[] | null = constructorCodeValueAsEnumCodeTypeList(
        [validEnumCodeType],
        MockCodeEnum,
        mockTypeEnum,
        property,
      );
      expect(results).not.toBeNull();
      expect(results).toBeDefined();
      expect(results).toHaveLength(1);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const result0: EnumCodeType = results[0]!;
      expect(result0.fhirType()).toStrictEqual('code');
      expect(result0.getValueAsString()).toStrictEqual(validCode);
      expect(result0.fhirCode).toEqual(expectedFhirCode);
    });

    it('should throw InvalidCodeError when instantiated with invalid EnumCodeType value', () => {
      const t = () => {
        constructorCodeValueAsEnumCodeTypeList([invalidEnumCodeType], MockCodeEnum, mockTypeEnum, property);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid ${property}; Errors: Invalid type parameter (TestTypeEnum); Should be MockCodeEnum.`);
    });

    it('should throw InvalidCodeError when instantiated with invalid CodeType value', () => {
      const t = () => {
        constructorCodeValueAsEnumCodeTypeList([new CodeType('invalidCodeType')], MockCodeEnum, mockTypeEnum, property);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid ${property}; Errors: Unknown MockCodeEnum 'code' value 'invalidCodeType'`);
    });

    it('should throw InvalidCodeError when instantiated with invalid fhirCode value', () => {
      const t = () => {
        constructorCodeValueAsEnumCodeTypeList(['invalidFhirCode'], MockCodeEnum, mockTypeEnum, property);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid ${property}; Errors: Unknown MockCodeEnum 'code' value 'invalidFhirCode'`);
    });

    it('should throw InvalidCodeError when instantiated with non-CodeType value', () => {
      const t = () => {
        constructorCodeValueAsEnumCodeTypeList(
          // @ts-expect-error: allow for testing
          [new StringType('invalidCodeType')],
          MockCodeEnum,
          mockTypeEnum,
          property,
        );
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid ${property}; Errors: Provided code value is not an instance of CodeType`);
    });
  });
});
