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
import {
  BooleanType,
  DateTimeType,
  fhirInteger,
  fhirString,
  IBackboneElement,
  IntegerType,
  InvalidCodeError,
  InvalidTypeError,
  JsonError,
  PrimitiveTypeError,
  StringType,
} from '@paq-ts-fhir/fhir-core';
import { TestModelPrimitiveComponent } from '../../../src/resources/TestModel';
import {
  expectBackboneElementBase,
  expectInitializedBackboneElementProperties,
  expectResetBackboneElementProperties,
  expectUndefinedBackboneElementProperties,
  initializeBackboneElementProperties,
  resetBackboneElementProperties,
  undefineBackboneElementProperties,
} from '../../ftest-utils';
import { TestData } from '../../ftest-data';
import { DATATYPE_EXTENSION, VALID_MOCK_COMPLEX_DATATYPE, VALID_PERIOD } from '../../ftest-mocks';

describe('TestModelPrimitiveComponent', () => {
  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new TestModelPrimitiveComponent();

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasPrimitive01Element()).toBe(false);
      expect(testInstance.getPrimitive01Element()).toEqual(new DateTimeType());
      expect(testInstance.hasPrimitive01()).toBe(false);
      expect(testInstance.getPrimitive01()).toBeUndefined();
      expect(testInstance.hasPrimitive0xElement()).toBe(false);
      expect(testInstance.getPrimitive0xElement()).toEqual([] as IntegerType[]);
      expect(testInstance.hasPrimitive0x()).toBe(false);
      expect(testInstance.getPrimitive0x()).toEqual([] as fhirInteger[]);
      expect(testInstance.hasPrimitive11Element()).toBe(false);
      expect(testInstance.getPrimitive11Element()).toEqual(new BooleanType());
      expect(testInstance.hasPrimitive11()).toBe(false);
      expect(testInstance.getPrimitive11()).toBeNull();
      expect(testInstance.hasPrimitive1xElement()).toBe(false);
      expect(testInstance.getPrimitive1xElement()).toEqual([] as StringType[]);
      expect(testInstance.hasPrimitive1x()).toBe(false);
      expect(testInstance.getPrimitive1x()).toEqual([] as fhirString[]);
      expect(testInstance.hasChoice11()).toBe(false);
      expect(testInstance.getChoice11()).toBeNull();
      expect(testInstance.hasChoice11UriType()).toBe(false);
      expect(testInstance.getChoice11UriType()).toBeNull();
      expect(testInstance.hasChoice11StringType()).toBe(false);
      expect(testInstance.getChoice11StringType()).toBeNull();
    });

    it('should be properly instantiated with required primitive elements', () => {
      const testInstance = new TestModelPrimitiveComponent(
        TestData.VALID_BOOLEAN_TRUE,
        [TestData.VALID_STRING],
        TestData.VALID_URI_TYPE,
      );

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasPrimitive01Element()).toBe(false);
      expect(testInstance.getPrimitive01Element()).toEqual(new DateTimeType());
      expect(testInstance.hasPrimitive01()).toBe(false);
      expect(testInstance.getPrimitive01()).toBeUndefined();
      expect(testInstance.hasPrimitive0xElement()).toBe(false);
      expect(testInstance.getPrimitive0xElement()).toEqual([] as IntegerType[]);
      expect(testInstance.hasPrimitive0x()).toBe(false);
      expect(testInstance.getPrimitive0x()).toEqual([] as fhirInteger[]);
      expect(testInstance.hasPrimitive11Element()).toBe(true);
      expect(testInstance.getPrimitive11Element()).toEqual(TestData.VALID_BOOLEAN_TRUE_TYPE);
      expect(testInstance.hasPrimitive11()).toBe(true);
      expect(testInstance.getPrimitive11()).toEqual(TestData.VALID_BOOLEAN_TRUE);
      expect(testInstance.hasPrimitive1xElement()).toBe(true);
      expect(testInstance.getPrimitive1xElement()).toEqual([TestData.VALID_STRING_TYPE]);
      expect(testInstance.hasPrimitive1x()).toBe(true);
      expect(testInstance.getPrimitive1x()).toEqual([TestData.VALID_STRING]);
      expect(testInstance.hasChoice11()).toBe(true);
      expect(testInstance.getChoice11()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasChoice11StringType()).toBe(false);
      const t = () => {
        testInstance.getChoice11StringType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `DataType mismatch for TestModel.primitive.choice11[x]: Expected StringType but encountered uri`,
      );
      expect(testInstance.hasChoice11UriType()).toBe(true);
      expect(testInstance.getChoice11UriType()).toEqual(TestData.VALID_URI_TYPE);
    });

    it('should be properly instantiated with required PrimitiveType elements', () => {
      const testInstance = new TestModelPrimitiveComponent(
        TestData.VALID_BOOLEAN_TRUE_TYPE,
        [TestData.VALID_STRING_TYPE],
        TestData.VALID_STRING_TYPE_2,
      );
      initializeBackboneElementProperties(testInstance, 1);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasPrimitive01Element()).toBe(false);
      expect(testInstance.getPrimitive01Element()).toEqual(new DateTimeType());
      expect(testInstance.hasPrimitive01()).toBe(false);
      expect(testInstance.getPrimitive01()).toBeUndefined();
      expect(testInstance.hasPrimitive0xElement()).toBe(false);
      expect(testInstance.getPrimitive0xElement()).toEqual([] as IntegerType[]);
      expect(testInstance.hasPrimitive0x()).toBe(false);
      expect(testInstance.getPrimitive0x()).toEqual([] as fhirInteger[]);
      expect(testInstance.hasPrimitive11Element()).toBe(true);
      expect(testInstance.getPrimitive11Element()).toEqual(TestData.VALID_BOOLEAN_TRUE_TYPE);
      expect(testInstance.hasPrimitive11()).toBe(true);
      expect(testInstance.getPrimitive11()).toEqual(TestData.VALID_BOOLEAN_TRUE);
      expect(testInstance.hasPrimitive1xElement()).toBe(true);
      expect(testInstance.getPrimitive1xElement()).toEqual([TestData.VALID_STRING_TYPE]);
      expect(testInstance.hasPrimitive1x()).toBe(true);
      expect(testInstance.getPrimitive1x()).toEqual([TestData.VALID_STRING]);
      expect(testInstance.hasChoice11()).toBe(true);
      expect(testInstance.getChoice11()).toEqual(TestData.VALID_STRING_TYPE_2);
      expect(testInstance.hasChoice11StringType()).toBe(true);
      expect(testInstance.getChoice11StringType()).toEqual(TestData.VALID_STRING_TYPE_2);
      expect(testInstance.hasChoice11UriType()).toBe(false);
      const t = () => {
        testInstance.getChoice11UriType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `DataType mismatch for TestModel.primitive.choice11[x]: Expected UriType but encountered string`,
      );
    });

    it('should properly copy() with primitive elements', () => {
      const testModel = new TestModelPrimitiveComponent(null, null, null);

      initializeBackboneElementProperties(testModel, 1);

      testModel.setPrimitive01(TestData.VALID_DATETIME);
      testModel.setPrimitive0x([TestData.VALID_INTEGER]);
      testModel.setPrimitive11(TestData.VALID_BOOLEAN_TRUE);
      testModel.setPrimitive1x([TestData.VALID_STRING]);
      testModel.setChoice11(TestData.VALID_URI_TYPE);

      let testInstance = testModel.copy();

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasPrimitive01Element()).toBe(true);
      expect(testInstance.getPrimitive01Element()).toEqual(TestData.VALID_DATETIME_TYPE);
      expect(testInstance.hasPrimitive01()).toBe(true);
      expect(testInstance.getPrimitive01()).toEqual(TestData.VALID_DATETIME);
      expect(testInstance.hasPrimitive0xElement()).toBe(true);
      expect(testInstance.getPrimitive0xElement()).toEqual([TestData.VALID_INTEGER_TYPE]);
      expect(testInstance.hasPrimitive0x()).toBe(true);
      expect(testInstance.getPrimitive0x()).toEqual([TestData.VALID_INTEGER]);
      expect(testInstance.hasPrimitive11Element()).toBe(true);
      expect(testInstance.getPrimitive11Element()).toEqual(TestData.VALID_BOOLEAN_TRUE_TYPE);
      expect(testInstance.hasPrimitive11()).toBe(true);
      expect(testInstance.getPrimitive11()).toEqual(TestData.VALID_BOOLEAN_TRUE);
      expect(testInstance.hasPrimitive1xElement()).toBe(true);
      expect(testInstance.getPrimitive1xElement()).toEqual([TestData.VALID_STRING_TYPE]);
      expect(testInstance.hasPrimitive1x()).toBe(true);
      expect(testInstance.getPrimitive1x()).toEqual([TestData.VALID_STRING]);
      expect(testInstance.hasChoice11()).toBe(true);
      expect(testInstance.getChoice11()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasChoice11StringType()).toBe(false);
      let t = () => {
        testInstance.getChoice11StringType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `DataType mismatch for TestModel.primitive.choice11[x]: Expected StringType but encountered uri`,
      );
      expect(testInstance.hasChoice11UriType()).toBe(true);
      expect(testInstance.getChoice11UriType()).toEqual(TestData.VALID_URI_TYPE);

      // Reset to empty

      undefineBackboneElementProperties(testModel);

      testModel.setPrimitive01(TestData.UNDEFINED_VALUE);
      testModel.setPrimitive0x(TestData.UNDEFINED_VALUE);
      testModel.setPrimitive11(TestData.UNDEFINED_VALUE);
      testModel.setPrimitive1x(TestData.UNDEFINED_VALUE);
      testModel.setChoice11(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasPrimitive01Element()).toBe(false);
      expect(testInstance.getPrimitive01Element()).toEqual(new DateTimeType());
      expect(testInstance.hasPrimitive01()).toBe(false);
      expect(testInstance.getPrimitive01()).toBeUndefined();
      expect(testInstance.hasPrimitive0xElement()).toBe(false);
      expect(testInstance.getPrimitive0xElement()).toEqual([] as IntegerType[]);
      expect(testInstance.hasPrimitive0x()).toBe(false);
      expect(testInstance.getPrimitive0x()).toEqual([] as fhirInteger[]);

      expect(testInstance.hasPrimitive11Element()).toBe(false);
      expect(testInstance.getPrimitive11Element()).toEqual(new BooleanType());
      expect(testInstance.hasPrimitive11()).toBe(false);
      expect(testInstance.getPrimitive11()).toBeNull();
      expect(testInstance.hasPrimitive1xElement()).toBe(false);
      expect(testInstance.getPrimitive1xElement()).toEqual([] as StringType[]);
      expect(testInstance.hasPrimitive1x()).toBe(false);
      expect(testInstance.getPrimitive1x()).toEqual([] as fhirString[]);
      expect(testInstance.hasChoice11()).toBe(false);
      expect(testInstance.getChoice11()).toBeNull();
      expect(testInstance.hasChoice11StringType()).toBe(false);
      expect(testInstance.getChoice11StringType()).toBeNull();
      expect(testInstance.hasChoice11UriType()).toBe(false);
      expect(testInstance.getChoice11UriType()).toBeNull();
    });

    it('should properly copy() with PrimitiveType elements', () => {
      const testModel = new TestModelPrimitiveComponent(null, null, null);

      initializeBackboneElementProperties(testModel, 1);

      testModel.setPrimitive01Element(TestData.VALID_DATETIME_TYPE);
      testModel.setPrimitive0xElement([TestData.VALID_INTEGER_TYPE]);
      testModel.setPrimitive11Element(TestData.VALID_BOOLEAN_TRUE_TYPE);
      testModel.setPrimitive1xElement([TestData.VALID_STRING_TYPE]);
      testModel.setChoice11(TestData.VALID_STRING_TYPE_2);

      let testInstance = testModel.copy();

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasPrimitive01Element()).toBe(true);
      expect(testInstance.getPrimitive01Element()).toEqual(TestData.VALID_DATETIME_TYPE);
      expect(testInstance.hasPrimitive01()).toBe(true);
      expect(testInstance.getPrimitive01()).toEqual(TestData.VALID_DATETIME);
      expect(testInstance.hasPrimitive0xElement()).toBe(true);
      expect(testInstance.getPrimitive0xElement()).toEqual([TestData.VALID_INTEGER_TYPE]);
      expect(testInstance.hasPrimitive0x()).toBe(true);
      expect(testInstance.getPrimitive0x()).toEqual([TestData.VALID_INTEGER]);
      expect(testInstance.hasPrimitive11Element()).toBe(true);
      expect(testInstance.getPrimitive11Element()).toEqual(TestData.VALID_BOOLEAN_TRUE_TYPE);
      expect(testInstance.hasPrimitive11()).toBe(true);
      expect(testInstance.getPrimitive11()).toEqual(TestData.VALID_BOOLEAN_TRUE);
      expect(testInstance.hasPrimitive1xElement()).toBe(true);
      expect(testInstance.getPrimitive1xElement()).toEqual([TestData.VALID_STRING_TYPE]);
      expect(testInstance.hasPrimitive1x()).toBe(true);
      expect(testInstance.getPrimitive1x()).toEqual([TestData.VALID_STRING]);
      expect(testInstance.hasChoice11()).toBe(true);
      expect(testInstance.getChoice11()).toEqual(TestData.VALID_STRING_TYPE_2);
      expect(testInstance.hasChoice11StringType()).toBe(true);
      expect(testInstance.getChoice11StringType()).toEqual(TestData.VALID_STRING_TYPE_2);
      expect(testInstance.hasChoice11UriType()).toBe(false);
      let t = () => {
        testInstance.getChoice11UriType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `DataType mismatch for TestModel.primitive.choice11[x]: Expected UriType but encountered string`,
      );

      // Reset to empty

      undefineBackboneElementProperties(testModel);

      testModel.setPrimitive01(TestData.UNDEFINED_VALUE);
      testModel.setPrimitive0x(TestData.UNDEFINED_VALUE);
      testModel.setPrimitive11(TestData.UNDEFINED_VALUE);
      testModel.setPrimitive1x(TestData.UNDEFINED_VALUE);
      testModel.setChoice11(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasPrimitive01Element()).toBe(false);
      expect(testInstance.getPrimitive01Element()).toEqual(new DateTimeType());
      expect(testInstance.hasPrimitive01()).toBe(false);
      expect(testInstance.getPrimitive01()).toBeUndefined();
      expect(testInstance.hasPrimitive0xElement()).toBe(false);
      expect(testInstance.getPrimitive0xElement()).toEqual([] as IntegerType[]);
      expect(testInstance.hasPrimitive0x()).toBe(false);
      expect(testInstance.getPrimitive0x()).toEqual([] as fhirInteger[]);

      expect(testInstance.hasPrimitive11Element()).toBe(false);
      expect(testInstance.getPrimitive11Element()).toEqual(new BooleanType());
      expect(testInstance.hasPrimitive11()).toBe(false);
      expect(testInstance.getPrimitive11()).toBeNull();
      expect(testInstance.hasPrimitive1xElement()).toBe(false);
      expect(testInstance.getPrimitive1xElement()).toEqual([] as StringType[]);
      expect(testInstance.hasPrimitive1x()).toBe(false);
      expect(testInstance.getPrimitive1x()).toEqual([] as fhirString[]);
      expect(testInstance.hasChoice11()).toBe(false);
      expect(testInstance.getChoice11()).toBeNull();
      expect(testInstance.hasChoice11StringType()).toBe(false);
      expect(testInstance.getChoice11StringType()).toBeNull();
      expect(testInstance.hasChoice11UriType()).toBe(false);
      expect(testInstance.getChoice11UriType()).toBeNull();
    });

    it('should be properly reset by modifying/adding all properties with primitive elements', () => {
      const testInstance = new TestModelPrimitiveComponent(null, null, null);

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setPrimitive01(TestData.VALID_DATETIME);
      testInstance.setPrimitive0x([TestData.VALID_INTEGER]);
      testInstance.setPrimitive11(TestData.VALID_BOOLEAN_TRUE);
      testInstance.setPrimitive1x([TestData.VALID_STRING]);
      testInstance.setChoice11(TestData.VALID_URI_TYPE);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasPrimitive01Element()).toBe(true);
      expect(testInstance.getPrimitive01Element()).toEqual(TestData.VALID_DATETIME_TYPE);
      expect(testInstance.hasPrimitive01()).toBe(true);
      expect(testInstance.getPrimitive01()).toEqual(TestData.VALID_DATETIME);
      expect(testInstance.hasPrimitive0xElement()).toBe(true);
      expect(testInstance.getPrimitive0xElement()).toEqual([TestData.VALID_INTEGER_TYPE]);
      expect(testInstance.hasPrimitive0x()).toBe(true);
      expect(testInstance.getPrimitive0x()).toEqual([TestData.VALID_INTEGER]);
      expect(testInstance.hasPrimitive11Element()).toBe(true);
      expect(testInstance.getPrimitive11Element()).toEqual(TestData.VALID_BOOLEAN_TRUE_TYPE);
      expect(testInstance.hasPrimitive11()).toBe(true);
      expect(testInstance.getPrimitive11()).toEqual(TestData.VALID_BOOLEAN_TRUE);
      expect(testInstance.hasPrimitive1xElement()).toBe(true);
      expect(testInstance.getPrimitive1xElement()).toEqual([TestData.VALID_STRING_TYPE]);
      expect(testInstance.hasPrimitive1x()).toBe(true);
      expect(testInstance.getPrimitive1x()).toEqual([TestData.VALID_STRING]);
      expect(testInstance.hasChoice11()).toBe(true);
      expect(testInstance.getChoice11()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasChoice11StringType()).toBe(false);
      let t = () => {
        testInstance.getChoice11StringType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `DataType mismatch for TestModel.primitive.choice11[x]: Expected StringType but encountered uri`,
      );
      expect(testInstance.hasChoice11UriType()).toBe(true);
      expect(testInstance.getChoice11UriType()).toEqual(TestData.VALID_URI_TYPE);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setPrimitive01(TestData.VALID_DATETIME_2);
      testInstance.addPrimitive0x(TestData.VALID_INTEGER_2);
      testInstance.setPrimitive11(TestData.VALID_BOOLEAN_FALSE);
      testInstance.addPrimitive1x(TestData.VALID_STRING_2);
      testInstance.setChoice11(TestData.VALID_STRING_TYPE);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetBackboneElementProperties(testInstance);

      expect(testInstance.hasPrimitive01Element()).toBe(true);
      expect(testInstance.getPrimitive01Element()).toEqual(TestData.VALID_DATETIME_TYPE_2);
      expect(testInstance.hasPrimitive01()).toBe(true);
      expect(testInstance.getPrimitive01()).toEqual(TestData.VALID_DATETIME_2);
      expect(testInstance.hasPrimitive0xElement()).toBe(true);
      expect(testInstance.getPrimitive0xElement()).toEqual([
        TestData.VALID_INTEGER_TYPE,
        TestData.VALID_INTEGER_TYPE_2,
      ]);
      expect(testInstance.hasPrimitive0x()).toBe(true);
      expect(testInstance.getPrimitive0x()).toEqual([TestData.VALID_INTEGER, TestData.VALID_INTEGER_2]);
      expect(testInstance.hasPrimitive11Element()).toBe(true);
      expect(testInstance.getPrimitive11Element()).toEqual(TestData.VALID_BOOLEAN_FALSE_TYPE);
      expect(testInstance.hasPrimitive11()).toBe(true);
      expect(testInstance.getPrimitive11()).toEqual(TestData.VALID_BOOLEAN_FALSE);
      expect(testInstance.hasPrimitive1xElement()).toBe(true);
      expect(testInstance.getPrimitive1xElement()).toEqual([TestData.VALID_STRING_TYPE, TestData.VALID_STRING_TYPE_2]);
      expect(testInstance.hasPrimitive1x()).toBe(true);
      expect(testInstance.getPrimitive1x()).toEqual([TestData.VALID_STRING, TestData.VALID_STRING_2]);
      expect(testInstance.hasChoice11()).toBe(true);
      expect(testInstance.getChoice11()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasChoice11StringType()).toBe(true);
      expect(testInstance.getChoice11StringType()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasChoice11UriType()).toBe(false);
      t = () => {
        testInstance.getChoice11UriType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `DataType mismatch for TestModel.primitive.choice11[x]: Expected UriType but encountered string`,
      );

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      testInstance.setPrimitive01(TestData.UNDEFINED_VALUE);
      testInstance.setPrimitive0x(TestData.UNDEFINED_VALUE);
      testInstance.setPrimitive11(TestData.UNDEFINED_VALUE);
      testInstance.setPrimitive1x(TestData.UNDEFINED_VALUE);
      testInstance.setChoice11(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasPrimitive01Element()).toBe(false);
      expect(testInstance.getPrimitive01Element()).toEqual(new DateTimeType());
      expect(testInstance.hasPrimitive01()).toBe(false);
      expect(testInstance.getPrimitive01()).toBeUndefined();
      expect(testInstance.hasPrimitive0xElement()).toBe(false);
      expect(testInstance.getPrimitive0xElement()).toEqual([] as IntegerType[]);
      expect(testInstance.hasPrimitive0x()).toBe(false);
      expect(testInstance.getPrimitive0x()).toEqual([] as fhirInteger[]);

      expect(testInstance.hasPrimitive11Element()).toBe(false);
      expect(testInstance.getPrimitive11Element()).toEqual(new BooleanType());
      expect(testInstance.hasPrimitive11()).toBe(false);
      expect(testInstance.getPrimitive11()).toBeNull();
      expect(testInstance.hasPrimitive1xElement()).toBe(false);
      expect(testInstance.getPrimitive1xElement()).toEqual([] as StringType[]);
      expect(testInstance.hasPrimitive1x()).toBe(false);
      expect(testInstance.getPrimitive1x()).toEqual([] as fhirString[]);
      expect(testInstance.hasChoice11()).toBe(false);
      expect(testInstance.getChoice11()).toBeNull();
      expect(testInstance.hasChoice11StringType()).toBe(false);
      expect(testInstance.getChoice11StringType()).toBeNull();
      expect(testInstance.hasChoice11UriType()).toBe(false);
      expect(testInstance.getChoice11UriType()).toBeNull();
    });

    it('should be properly reset by modifying/adding all properties with PrimitiveType elements', () => {
      const testInstance = new TestModelPrimitiveComponent(null, null, null);

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setPrimitive01Element(TestData.VALID_DATETIME_TYPE);
      testInstance.setPrimitive0xElement([TestData.VALID_INTEGER_TYPE]);
      testInstance.setPrimitive11Element(TestData.VALID_BOOLEAN_TRUE_TYPE);
      testInstance.setPrimitive1xElement([TestData.VALID_STRING_TYPE]);
      testInstance.setChoice11(TestData.VALID_URI_TYPE);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasPrimitive01Element()).toBe(true);
      expect(testInstance.getPrimitive01Element()).toEqual(TestData.VALID_DATETIME_TYPE);
      expect(testInstance.hasPrimitive01()).toBe(true);
      expect(testInstance.getPrimitive01()).toEqual(TestData.VALID_DATETIME);
      expect(testInstance.hasPrimitive0xElement()).toBe(true);
      expect(testInstance.getPrimitive0xElement()).toEqual([TestData.VALID_INTEGER_TYPE]);
      expect(testInstance.hasPrimitive0x()).toBe(true);
      expect(testInstance.getPrimitive0x()).toEqual([TestData.VALID_INTEGER]);
      expect(testInstance.hasPrimitive11Element()).toBe(true);
      expect(testInstance.getPrimitive11Element()).toEqual(TestData.VALID_BOOLEAN_TRUE_TYPE);
      expect(testInstance.hasPrimitive11()).toBe(true);
      expect(testInstance.getPrimitive11()).toEqual(TestData.VALID_BOOLEAN_TRUE);
      expect(testInstance.hasPrimitive1xElement()).toBe(true);
      expect(testInstance.getPrimitive1xElement()).toEqual([TestData.VALID_STRING_TYPE]);
      expect(testInstance.hasPrimitive1x()).toBe(true);
      expect(testInstance.getPrimitive1x()).toEqual([TestData.VALID_STRING]);
      expect(testInstance.hasChoice11()).toBe(true);
      expect(testInstance.getChoice11()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasChoice11StringType()).toBe(false);
      let t = () => {
        testInstance.getChoice11StringType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `DataType mismatch for TestModel.primitive.choice11[x]: Expected StringType but encountered uri`,
      );
      expect(testInstance.hasChoice11UriType()).toBe(true);
      expect(testInstance.getChoice11UriType()).toEqual(TestData.VALID_URI_TYPE);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setPrimitive01Element(TestData.VALID_DATETIME_TYPE_2);
      testInstance.addPrimitive0xElement(TestData.VALID_INTEGER_TYPE_2);
      testInstance.setPrimitive11Element(TestData.VALID_BOOLEAN_FALSE_TYPE);
      testInstance.addPrimitive1xElement(TestData.VALID_STRING_TYPE_2);
      testInstance.setChoice11(TestData.VALID_STRING_TYPE);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetBackboneElementProperties(testInstance);

      expect(testInstance.hasPrimitive01Element()).toBe(true);
      expect(testInstance.getPrimitive01Element()).toEqual(TestData.VALID_DATETIME_TYPE_2);
      expect(testInstance.hasPrimitive01()).toBe(true);
      expect(testInstance.getPrimitive01()).toEqual(TestData.VALID_DATETIME_2);
      expect(testInstance.hasPrimitive0xElement()).toBe(true);
      expect(testInstance.getPrimitive0xElement()).toEqual([
        TestData.VALID_INTEGER_TYPE,
        TestData.VALID_INTEGER_TYPE_2,
      ]);
      expect(testInstance.hasPrimitive0x()).toBe(true);
      expect(testInstance.getPrimitive0x()).toEqual([TestData.VALID_INTEGER, TestData.VALID_INTEGER_2]);
      expect(testInstance.hasPrimitive11Element()).toBe(true);
      expect(testInstance.getPrimitive11Element()).toEqual(TestData.VALID_BOOLEAN_FALSE_TYPE);
      expect(testInstance.hasPrimitive11()).toBe(true);
      expect(testInstance.getPrimitive11()).toEqual(TestData.VALID_BOOLEAN_FALSE);
      expect(testInstance.hasPrimitive1xElement()).toBe(true);
      expect(testInstance.getPrimitive1xElement()).toEqual([TestData.VALID_STRING_TYPE, TestData.VALID_STRING_TYPE_2]);
      expect(testInstance.hasPrimitive1x()).toBe(true);
      expect(testInstance.getPrimitive1x()).toEqual([TestData.VALID_STRING, TestData.VALID_STRING_2]);
      expect(testInstance.hasChoice11()).toBe(true);
      expect(testInstance.getChoice11()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasChoice11StringType()).toBe(true);
      expect(testInstance.getChoice11StringType()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasChoice11UriType()).toBe(false);
      t = () => {
        testInstance.getChoice11UriType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `DataType mismatch for TestModel.primitive.choice11[x]: Expected UriType but encountered string`,
      );

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      testInstance.setPrimitive01Element(TestData.UNDEFINED_VALUE);
      testInstance.setPrimitive0xElement(TestData.UNDEFINED_VALUE);
      testInstance.setPrimitive11Element(TestData.UNDEFINED_VALUE);
      testInstance.setPrimitive1xElement(TestData.UNDEFINED_VALUE);
      testInstance.setChoice11(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasPrimitive01Element()).toBe(false);
      expect(testInstance.getPrimitive01Element()).toEqual(new DateTimeType());
      expect(testInstance.hasPrimitive01()).toBe(false);
      expect(testInstance.getPrimitive01()).toBeUndefined();
      expect(testInstance.hasPrimitive0xElement()).toBe(false);
      expect(testInstance.getPrimitive0xElement()).toEqual([] as IntegerType[]);
      expect(testInstance.hasPrimitive0x()).toBe(false);
      expect(testInstance.getPrimitive0x()).toEqual([] as fhirInteger[]);

      expect(testInstance.hasPrimitive11Element()).toBe(false);
      expect(testInstance.getPrimitive11Element()).toEqual(new BooleanType());
      expect(testInstance.hasPrimitive11()).toBe(false);
      expect(testInstance.getPrimitive11()).toBeNull();
      expect(testInstance.hasPrimitive1xElement()).toBe(false);
      expect(testInstance.getPrimitive1xElement()).toEqual([] as StringType[]);
      expect(testInstance.hasPrimitive1x()).toBe(false);
      expect(testInstance.getPrimitive1x()).toEqual([] as fhirString[]);
      expect(testInstance.hasChoice11()).toBe(false);
      expect(testInstance.getChoice11()).toBeNull();
      expect(testInstance.hasChoice11StringType()).toBe(false);
      expect(testInstance.getChoice11StringType()).toBeNull();
      expect(testInstance.hasChoice11UriType()).toBe(false);
      expect(testInstance.getChoice11UriType()).toBeNull();
    });
  });

  describe('Serialization/Deserialization', () => {
    const altDateTime = TestData.VALID_DATETIME_TYPE.copy();
    altDateTime.setId(TestData.DATATYPE_ID);
    altDateTime.addExtension(DATATYPE_EXTENSION);

    const VALID_JSON = {
      id: 'id12345',
      extension: [
        {
          url: 'extUrl',
          valueString: 'Extension string value',
        },
        {
          url: 'extUrl2',
          valueString: 'Extension string value two',
        },
      ],
      modifierExtension: [
        {
          url: 'modExtUrl',
          valueString: 'Modifier Extension string value',
        },
        {
          url: 'modExtUrl2',
          valueString: 'Modifier Extension string value two',
        },
      ],
      primitive01: '2024-01-28T14:30:00Z',
      _primitive01: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
      },
      primitive0x: [13579, 24680],
      primitive11: true,
      primitive1x: ['This is a valid string.', 'This is another valid string.'],
      choice11Uri: 'validUri',
    };
    const INVALID_JSON_1 = {
      primitive01: ['2024-01-28T14:30:00Z'],
    };
    const INVALID_JSON_2 = {
      primitive11: 1234,
    };
    const INVALID_JSON_3 = {
      primitive0x: 13579,
    };
    const VALID_JSON_NO_FIELDS = {
      id: 'id12345',
      extension: [
        {
          url: 'extUrl',
          valueString: 'Extension string value',
        },
        {
          url: 'extUrl2',
          valueString: 'Extension string value two',
        },
      ],
      modifierExtension: [
        {
          url: 'modExtUrl',
          valueString: 'Modifier Extension string value',
        },
        {
          url: 'modExtUrl2',
          valueString: 'Modifier Extension string value two',
        },
      ],
    };
    const VALID_JSON_NULL_FIELDS = {
      id: 'id12345',
      extension: [
        {
          url: 'extUrl',
          valueString: 'Extension string value',
        },
        {
          url: 'extUrl2',
          valueString: 'Extension string value two',
        },
      ],
      modifierExtension: [
        {
          url: 'modExtUrl',
          valueString: 'Modifier Extension string value',
        },
        {
          url: 'modExtUrl2',
          valueString: 'Modifier Extension string value two',
        },
      ],
      primitive01: null,
      primitive0x: null,
      primitive11: null,
      primitive1x: null,
      choice11Uri: null,
      unexpectedField: 'should be ignored without error',
    };

    it('should properly create serialized content', () => {
      const testInstance = new TestModelPrimitiveComponent(null, null, null);

      initializeBackboneElementProperties(testInstance, 2);

      testInstance.setPrimitive01Element(altDateTime);
      testInstance.setPrimitive0xElement([TestData.VALID_INTEGER_TYPE]);
      testInstance.addPrimitive0xElement(TestData.VALID_INTEGER_TYPE_2);
      testInstance.setPrimitive11Element(TestData.VALID_BOOLEAN_TRUE_TYPE);
      testInstance.setPrimitive1xElement([TestData.VALID_STRING_TYPE]);
      testInstance.addPrimitive1xElement(TestData.VALID_STRING_TYPE_2);
      testInstance.setChoice11(TestData.VALID_URI_TYPE);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasPrimitive01Element()).toBe(true);
      expect(testInstance.getPrimitive01Element()).toEqual(altDateTime);
      expect(testInstance.hasPrimitive01()).toBe(true);
      expect(testInstance.getPrimitive01()).toEqual(TestData.VALID_DATETIME);
      expect(testInstance.hasPrimitive0xElement()).toBe(true);
      expect(testInstance.getPrimitive0xElement()).toEqual([
        TestData.VALID_INTEGER_TYPE,
        TestData.VALID_INTEGER_TYPE_2,
      ]);
      expect(testInstance.hasPrimitive0x()).toBe(true);
      expect(testInstance.getPrimitive0x()).toEqual([TestData.VALID_INTEGER, TestData.VALID_INTEGER_2]);
      expect(testInstance.hasPrimitive11Element()).toBe(true);
      expect(testInstance.getPrimitive11Element()).toEqual(TestData.VALID_BOOLEAN_TRUE_TYPE);
      expect(testInstance.hasPrimitive11()).toBe(true);
      expect(testInstance.getPrimitive11()).toEqual(TestData.VALID_BOOLEAN_TRUE);
      expect(testInstance.hasPrimitive1xElement()).toBe(true);
      expect(testInstance.getPrimitive1xElement()).toEqual([TestData.VALID_STRING_TYPE, TestData.VALID_STRING_TYPE_2]);
      expect(testInstance.hasPrimitive1x()).toBe(true);
      expect(testInstance.getPrimitive1x()).toEqual([TestData.VALID_STRING, TestData.VALID_STRING_2]);
      expect(testInstance.hasChoice11()).toBe(true);
      expect(testInstance.getChoice11()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasChoice11StringType()).toBe(false);
      let t = () => {
        testInstance.getChoice11StringType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `DataType mismatch for TestModel.primitive.choice11[x]: Expected StringType but encountered uri`,
      );
      expect(testInstance.hasChoice11UriType()).toBe(true);
      expect(testInstance.getChoice11UriType()).toEqual(TestData.VALID_URI_TYPE);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should properly create serialized content with no field values', () => {
      const testInstance = new TestModelPrimitiveComponent(null, null, null);

      initializeBackboneElementProperties(testInstance, 2);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasPrimitive01Element()).toBe(false);
      expect(testInstance.getPrimitive01Element()).toEqual(new DateTimeType());
      expect(testInstance.hasPrimitive01()).toBe(false);
      expect(testInstance.getPrimitive01()).toBeUndefined();
      expect(testInstance.hasPrimitive0xElement()).toBe(false);
      expect(testInstance.getPrimitive0xElement()).toEqual([] as IntegerType[]);
      expect(testInstance.hasPrimitive0x()).toBe(false);
      expect(testInstance.getPrimitive0x()).toEqual([] as fhirInteger[]);
      expect(testInstance.hasPrimitive11Element()).toBe(false);
      expect(testInstance.getPrimitive11Element()).toEqual(new BooleanType());
      expect(testInstance.hasPrimitive11()).toBe(false);
      expect(testInstance.getPrimitive11()).toBeNull();
      expect(testInstance.hasPrimitive1xElement()).toBe(false);
      expect(testInstance.getPrimitive1xElement()).toEqual([] as StringType[]);
      expect(testInstance.hasPrimitive1x()).toBe(false);
      expect(testInstance.getPrimitive1x()).toEqual([] as fhirString[]);
      expect(testInstance.hasChoice11()).toBe(false);
      expect(testInstance.getChoice11()).toBeNull();
      expect(testInstance.hasChoice11StringType()).toBe(false);
      expect(testInstance.getChoice11StringType()).toBeNull();
      expect(testInstance.hasChoice11UriType()).toBe(false);
      expect(testInstance.getChoice11UriType()).toBeNull();

      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: TestModelPrimitiveComponent | undefined;
      testInstance = TestModelPrimitiveComponent.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = TestModelPrimitiveComponent.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = TestModelPrimitiveComponent.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should throw Errors for invalid json types', () => {
      let t = () => {
        TestModelPrimitiveComponent.parse('NOT AN OBJECT');
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelPrimitiveComponent JSON is not a JSON object.`);

      t = () => {
        TestModelPrimitiveComponent.parse(INVALID_JSON_1);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelPrimitiveComponent.primitive01 is not a string.`);

      t = () => {
        TestModelPrimitiveComponent.parse(INVALID_JSON_2);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelPrimitiveComponent.primitive11 is not a boolean.`);

      t = () => {
        TestModelPrimitiveComponent.parse(INVALID_JSON_3);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelPrimitiveComponent.primitive0x is not a JSON array.`);
    });

    it('should return parsed TestModelPrimitiveComponent for valid json', () => {
      const testInstance: TestModelPrimitiveComponent | undefined = TestModelPrimitiveComponent.parse(VALID_JSON);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance?.toJSON()).toEqual(VALID_JSON);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasPrimitive01Element()).toBe(true);
      expect(testInstance.getPrimitive01Element()).toEqual(altDateTime);
      expect(testInstance.hasPrimitive01()).toBe(true);
      expect(testInstance.getPrimitive01()).toEqual(TestData.VALID_DATETIME);
      expect(testInstance.hasPrimitive0xElement()).toBe(true);
      expect(testInstance.getPrimitive0xElement()).toEqual([
        TestData.VALID_INTEGER_TYPE,
        TestData.VALID_INTEGER_TYPE_2,
      ]);
      expect(testInstance.hasPrimitive0x()).toBe(true);
      expect(testInstance.getPrimitive0x()).toEqual([TestData.VALID_INTEGER, TestData.VALID_INTEGER_2]);
      expect(testInstance.hasPrimitive11Element()).toBe(true);
      expect(testInstance.getPrimitive11Element()).toEqual(TestData.VALID_BOOLEAN_TRUE_TYPE);
      expect(testInstance.hasPrimitive11()).toBe(true);
      expect(testInstance.getPrimitive11()).toEqual(TestData.VALID_BOOLEAN_TRUE);
      expect(testInstance.hasPrimitive1xElement()).toBe(true);
      expect(testInstance.getPrimitive1xElement()).toEqual([TestData.VALID_STRING_TYPE, TestData.VALID_STRING_TYPE_2]);
      expect(testInstance.hasPrimitive1x()).toBe(true);
      expect(testInstance.getPrimitive1x()).toEqual([TestData.VALID_STRING, TestData.VALID_STRING_2]);
      expect(testInstance.hasChoice11()).toBe(true);
      expect(testInstance.getChoice11()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasChoice11StringType()).toBe(false);
      let t = () => {
        testInstance.getChoice11StringType();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `DataType mismatch for TestModel.primitive.choice11[x]: Expected StringType but encountered uri`,
      );
      expect(testInstance.hasChoice11UriType()).toBe(true);
      expect(testInstance.getChoice11UriType()).toEqual(TestData.VALID_URI_TYPE);
    });

    it('should return parsed TestModelPrimitiveComponent for valid json with no field values', () => {
      const testInstance: TestModelPrimitiveComponent | undefined =
        TestModelPrimitiveComponent.parse(VALID_JSON_NO_FIELDS);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance?.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasPrimitive01Element()).toBe(false);
      expect(testInstance.getPrimitive01Element()).toEqual(new DateTimeType());
      expect(testInstance.hasPrimitive01()).toBe(false);
      expect(testInstance.getPrimitive01()).toBeUndefined();
      expect(testInstance.hasPrimitive0xElement()).toBe(false);
      expect(testInstance.getPrimitive0xElement()).toEqual([] as IntegerType[]);
      expect(testInstance.hasPrimitive0x()).toBe(false);
      expect(testInstance.getPrimitive0x()).toEqual([] as fhirInteger[]);
      expect(testInstance.hasPrimitive11Element()).toBe(false);
      expect(testInstance.getPrimitive11Element()).toEqual(new BooleanType());
      expect(testInstance.hasPrimitive11()).toBe(false);
      expect(testInstance.getPrimitive11()).toBeNull();
      expect(testInstance.hasPrimitive1xElement()).toBe(false);
      expect(testInstance.getPrimitive1xElement()).toEqual([] as StringType[]);
      expect(testInstance.hasPrimitive1x()).toBe(false);
      expect(testInstance.getPrimitive1x()).toEqual([] as fhirString[]);
      expect(testInstance.hasChoice11()).toBe(false);
      expect(testInstance.getChoice11()).toBeNull();
      expect(testInstance.hasChoice11StringType()).toBe(false);
      expect(testInstance.getChoice11StringType()).toBeNull();
      expect(testInstance.hasChoice11UriType()).toBe(false);
      expect(testInstance.getChoice11UriType()).toBeNull();
    });

    it('should return parsed TestModelPrimitiveComponent for valid json with null field values', () => {
      const testInstance: TestModelPrimitiveComponent | undefined =
        TestModelPrimitiveComponent.parse(VALID_JSON_NULL_FIELDS);

      expectBackboneElementBase(
        TestModelPrimitiveComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelPrimitiveComponent',
        'TestModel.primitive',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance?.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasPrimitive01Element()).toBe(false);
      expect(testInstance.getPrimitive01Element()).toEqual(new DateTimeType());
      expect(testInstance.hasPrimitive01()).toBe(false);
      expect(testInstance.getPrimitive01()).toBeUndefined();
      expect(testInstance.hasPrimitive0xElement()).toBe(false);
      expect(testInstance.getPrimitive0xElement()).toEqual([] as IntegerType[]);
      expect(testInstance.hasPrimitive0x()).toBe(false);
      expect(testInstance.getPrimitive0x()).toEqual([] as fhirInteger[]);
      expect(testInstance.hasPrimitive11Element()).toBe(false);
      expect(testInstance.getPrimitive11Element()).toEqual(new BooleanType());
      expect(testInstance.hasPrimitive11()).toBe(false);
      expect(testInstance.getPrimitive11()).toBeNull();
      expect(testInstance.hasPrimitive1xElement()).toBe(false);
      expect(testInstance.getPrimitive1xElement()).toEqual([] as StringType[]);
      expect(testInstance.hasPrimitive1x()).toBe(false);
      expect(testInstance.getPrimitive1x()).toEqual([] as fhirString[]);
      expect(testInstance.hasChoice11()).toBe(false);
      expect(testInstance.getChoice11()).toBeNull();
      expect(testInstance.hasChoice11StringType()).toBe(false);
      expect(testInstance.getChoice11StringType()).toBeNull();
      expect(testInstance.hasChoice11UriType()).toBe(false);
      expect(testInstance.getChoice11UriType()).toBeNull();
    });
  });

  describe('Type Assertion Tests', () => {
    it('constructor: should throw appropriate errors when instantiated with an invalid required data elements', () => {
      let t = () => {
        // @ts-expect-error: Allow for testing
        new TestModelPrimitiveComponent(TestData.INVALID_NON_STRING_TYPE, null, null);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.primitive.primitive11; Provided value is not an instance of BooleanType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        new TestModelPrimitiveComponent(TestData.INVALID_NON_STRING_TYPE_VALUE, null, null);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid TestModel.primitive.primitive11 (Invalid datatype)`);

      t = () => {
        // @ts-expect-error: Allow for testing
        new TestModelPrimitiveComponent(null, [TestData.INVALID_STRING_TYPE], null);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.primitive.primitive1x; Provided value array has an element that is not an instance of StringType.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        new TestModelPrimitiveComponent(null, [TestData.INVALID_STRING_TYPE_VALUE], null);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid TestModel.primitive.primitive1x array item (12345)`);

      t = () => {
        new TestModelPrimitiveComponent(null, null, VALID_PERIOD);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ChoiceDataTypes decorator on setChoice11 (TestModel.primitive.choice11[x]) expects the 'value' argument type (Period) to be a supported DataType`,
      );

      t = () => {
        new TestModelPrimitiveComponent(null, null, TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ChoiceDataTypes decorator on setChoice11 (TestModel.primitive.choice11[x]) expects the 'value' argument type (integer) to be a supported DataType`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        new TestModelPrimitiveComponent(null, null, TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(
        `ChoiceDataTypes decorator on setChoice11 (TestModel.primitive.choice11[x]) expects a single argument to be type of 'DataType | undefined | null'`,
      );
    });

    it('primitive01: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelPrimitiveComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPrimitive01Element(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.primitive.primitive01; Provided element is not an instance of DateTimeType.`,
      );

      t = () => {
        testInstance.setPrimitive01(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid TestModel.primitive.primitive01 (Invalid datatype)`);
    });

    it('primitive0x: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelPrimitiveComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPrimitive0xElement([TestData.INVALID_NON_STRING_TYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.primitive.primitive0x; Provided value array has an element that is not an instance of IntegerType.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addPrimitive0xElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.primitive.primitive0x; Provided element is not an instance of IntegerType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPrimitive0x([TestData.INVALID_NON_STRING_TYPE_VALUE]);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid TestModel.primitive.primitive0x array item (Invalid datatype)`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addPrimitive0x(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid TestModel.primitive.primitive0x array item (Invalid datatype)`);
    });

    it('primitive11: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelPrimitiveComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPrimitive11Element(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.primitive.primitive11; Provided value is not an instance of BooleanType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPrimitive11(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid TestModel.primitive.primitive11 (Invalid datatype)`);
    });

    it('primitive1x: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelPrimitiveComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPrimitive1xElement([TestData.INVALID_STRING_TYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        'Invalid TestModel.primitive.primitive1x; Provided value array has an element that is not an instance of StringType.',
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addPrimitive1xElement(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow('Invalid TestModel.primitive.primitive1x; Provided element is not an instance of StringType.');

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPrimitive1x([TestData.INVALID_STRING_TYPE_VALUE]);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow('Invalid TestModel.primitive.primitive1x array item (12345)');

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addPrimitive1x(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow('Invalid TestModel.primitive.primitive1x array item (12345)');
    });

    it('choice11: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelPrimitiveComponent();
      const t = () => {
        testInstance.setChoice11(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ChoiceDataTypes decorator on setChoice11 (TestModel.primitive.choice11[x]) expects the 'value' argument type (MockComplexDataType) to be a supported DataType`,
      );
    });
  });
});
