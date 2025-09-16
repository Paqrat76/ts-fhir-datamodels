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

import {
  CodeType,
  EnumCodeType,
  fhirCode,
  IBackboneElement,
  InvalidCodeError,
  InvalidTypeError,
  JsonError,
  PrimitiveTypeError,
} from '@paq-ts-fhir/fhir-core';
import { ConsentStateCodesEnum } from '../../../src/code-systems/ConsentStateCodesEnum';
import { ContributorTypeEnum } from '../../../src/code-systems/ContributorTypeEnum';
import { TaskCodeEnum } from '../../../src/code-systems/TaskCodeEnum';
import { TaskStatusEnum } from '../../../src/code-systems/TaskStatusEnum';
import {
  TestModelComplexReferenceEnumCodeComponent,
  TestModelPrimitiveComponent,
} from '../../../src/resources/TestModel';
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
import { DATATYPE_EXTENSION, VALID_MOCK_COMPLEX_DATATYPE } from '../../ftest-mocks';

describe('TestModelComplexReferenceEnumCodeComponent', () => {
  const contributorTypeEnum = new ContributorTypeEnum();
  const consentStateCodesEnum = new ConsentStateCodesEnum();
  const taskCodeEnum = new TaskCodeEnum();
  const taskStatusEnum = new TaskStatusEnum();

  const enumCode01 = new EnumCodeType(TestData.VALID_TASKCODE_APPROVE, taskCodeEnum);
  const enumCode01_2 = new EnumCodeType(TestData.VALID_TASKCODE_FULFILL, taskCodeEnum);
  const enumCode0x = new EnumCodeType(TestData.VALID_TASKSTATUS_REQUESTED, taskStatusEnum);
  const enumCode0x_2 = new EnumCodeType(TestData.VALID_TASKSTATUS_ACCEPTED, taskStatusEnum);
  const enumCode11 = new EnumCodeType(TestData.VALID_CONTRIBUTOR_AUTHOR, contributorTypeEnum);
  const enumCode11_2 = new EnumCodeType(TestData.VALID_CONTRIBUTOR_REVIEWER, contributorTypeEnum);
  const enumCode1x = new EnumCodeType(TestData.VALID_CONSENT_DRAFT, consentStateCodesEnum);
  const enumCode1x_2 = new EnumCodeType(TestData.VALID_CONSENT_ACTIVE, consentStateCodesEnum);

  let testModelPrimitiveComponent: TestModelPrimitiveComponent;
  let testModelPrimitiveComponent_2: TestModelPrimitiveComponent;
  beforeAll(() => {
    testModelPrimitiveComponent = new TestModelPrimitiveComponent();
    testModelPrimitiveComponent.setPrimitive01(TestData.VALID_DATETIME);
    testModelPrimitiveComponent.setPrimitive0x([TestData.VALID_INTEGER]);
    testModelPrimitiveComponent.setPrimitive11(TestData.VALID_BOOLEAN_TRUE);
    testModelPrimitiveComponent.setPrimitive1x([TestData.VALID_STRING]);
    testModelPrimitiveComponent.setChoice11(TestData.VALID_URI_TYPE);

    testModelPrimitiveComponent_2 = new TestModelPrimitiveComponent();
    testModelPrimitiveComponent_2.setPrimitive01(TestData.VALID_DATETIME_2);
    testModelPrimitiveComponent_2.setPrimitive0x([TestData.VALID_INTEGER_2]);
    testModelPrimitiveComponent_2.setPrimitive11(TestData.VALID_BOOLEAN_FALSE);
    testModelPrimitiveComponent_2.setPrimitive1x([TestData.VALID_STRING_2]);
    testModelPrimitiveComponent_2.setChoice11(TestData.VALID_URI_TYPE_2);
  });

  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new TestModelComplexReferenceEnumCodeComponent();

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasEnumCode01EnumType()).toBe(false);
      expect(testInstance.getEnumCode01EnumType()).toBeUndefined();
      expect(testInstance.hasEnumCode01Element()).toBe(false);
      expect(testInstance.getEnumCode01Element()).toBeUndefined();
      expect(testInstance.hasEnumCode01()).toBe(false);
      expect(testInstance.getEnumCode01()).toBeUndefined();

      expect(testInstance.hasEnumCode0xEnumType()).toBe(false);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode0xElement()).toBe(false);
      expect(testInstance.getEnumCode0xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode0x()).toBe(false);
      expect(testInstance.getEnumCode0x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(false);
      expect(testInstance.getEnumCode11EnumType()).toBeNull();
      expect(testInstance.hasEnumCode11Element()).toBe(false);
      expect(testInstance.getEnumCode11Element()).toBeNull();
      expect(testInstance.hasEnumCode11()).toBe(false);
      expect(testInstance.getEnumCode11()).toBeNull();

      expect(testInstance.hasEnumCode1xEnumType()).toBe(false);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode1xElement()).toBe(false);
      expect(testInstance.getEnumCode1xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode1x()).toBe(false);
      expect(testInstance.getEnumCode1x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual(new TestModelPrimitiveComponent());
    });

    it('should be properly instantiated with required elements', () => {
      let testInstance = new TestModelComplexReferenceEnumCodeComponent(enumCode11, [enumCode1x]);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasEnumCode01EnumType()).toBe(false);
      expect(testInstance.getEnumCode01EnumType()).toBeUndefined();
      expect(testInstance.hasEnumCode01Element()).toBe(false);
      expect(testInstance.getEnumCode01Element()).toBeUndefined();
      expect(testInstance.hasEnumCode01()).toBe(false);
      expect(testInstance.getEnumCode01()).toBeUndefined();

      expect(testInstance.hasEnumCode0xEnumType()).toBe(false);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode0xElement()).toBe(false);
      expect(testInstance.getEnumCode0xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode0x()).toBe(false);
      expect(testInstance.getEnumCode0x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_AUTHOR);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT]);

      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual(new TestModelPrimitiveComponent());

      testInstance = new TestModelComplexReferenceEnumCodeComponent(enumCode11 as CodeType, [enumCode1x as CodeType]);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasEnumCode01EnumType()).toBe(false);
      expect(testInstance.getEnumCode01EnumType()).toBeUndefined();
      expect(testInstance.hasEnumCode01Element()).toBe(false);
      expect(testInstance.getEnumCode01Element()).toBeUndefined();
      expect(testInstance.hasEnumCode01()).toBe(false);
      expect(testInstance.getEnumCode01()).toBeUndefined();

      expect(testInstance.hasEnumCode0xEnumType()).toBe(false);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode0xElement()).toBe(false);
      expect(testInstance.getEnumCode0xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode0x()).toBe(false);
      expect(testInstance.getEnumCode0x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_AUTHOR);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT]);

      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual(new TestModelPrimitiveComponent());

      testInstance = new TestModelComplexReferenceEnumCodeComponent(TestData.VALID_CONTRIBUTOR_AUTHOR, [
        TestData.VALID_CONSENT_DRAFT,
      ]);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasEnumCode01EnumType()).toBe(false);
      expect(testInstance.getEnumCode01EnumType()).toBeUndefined();
      expect(testInstance.hasEnumCode01Element()).toBe(false);
      expect(testInstance.getEnumCode01Element()).toBeUndefined();
      expect(testInstance.hasEnumCode01()).toBe(false);
      expect(testInstance.getEnumCode01()).toBeUndefined();

      expect(testInstance.hasEnumCode0xEnumType()).toBe(false);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode0xElement()).toBe(false);
      expect(testInstance.getEnumCode0xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode0x()).toBe(false);
      expect(testInstance.getEnumCode0x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_AUTHOR);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT]);

      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual(new TestModelPrimitiveComponent());
    });

    it('should properly copy()', () => {
      const testModel = new TestModelComplexReferenceEnumCodeComponent();

      initializeBackboneElementProperties(testModel, 1);

      testModel.setEnumCode01EnumType(enumCode01);
      testModel.setEnumCode0xEnumType([enumCode0x]);
      testModel.setEnumCode11EnumType(enumCode11);
      testModel.setEnumCode1xEnumType([enumCode1x]);
      testModel.setPrimitive(testModelPrimitiveComponent);

      let testInstance = testModel.copy();

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasEnumCode01EnumType()).toBe(true);
      expect(testInstance.getEnumCode01EnumType()).toEqual(enumCode01);
      expect(testInstance.hasEnumCode01Element()).toBe(true);
      expect(testInstance.getEnumCode01Element()).toEqual(enumCode01 as CodeType);
      expect(testInstance.hasEnumCode01()).toBe(true);
      expect(testInstance.getEnumCode01()).toStrictEqual(TestData.VALID_TASKCODE_APPROVE);

      expect(testInstance.hasEnumCode0xEnumType()).toBe(true);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([enumCode0x]);
      expect(testInstance.hasEnumCode0xElement()).toBe(true);
      expect(testInstance.getEnumCode0xElement()).toEqual([enumCode0x as CodeType]);
      expect(testInstance.hasEnumCode0x()).toBe(true);
      expect(testInstance.getEnumCode0x()).toEqual([TestData.VALID_TASKSTATUS_REQUESTED]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_AUTHOR);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT]);

      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual(testModelPrimitiveComponent);

      // Reset to undefined

      undefineBackboneElementProperties(testModel);

      testModel.setEnumCode01EnumType(TestData.UNDEFINED_VALUE);
      testModel.setEnumCode0xEnumType(TestData.UNDEFINED_VALUE);
      testModel.setEnumCode11EnumType(TestData.UNDEFINED_VALUE);
      testModel.setEnumCode1xEnumType(TestData.UNDEFINED_VALUE);
      testModel.setPrimitive(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasEnumCode01EnumType()).toBe(false);
      expect(testInstance.getEnumCode01EnumType()).toBeUndefined();
      expect(testInstance.hasEnumCode01Element()).toBe(false);
      expect(testInstance.getEnumCode01Element()).toBeUndefined();
      expect(testInstance.hasEnumCode01()).toBe(false);
      expect(testInstance.getEnumCode01()).toBeUndefined();

      expect(testInstance.hasEnumCode0xEnumType()).toBe(false);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode0xElement()).toBe(false);
      expect(testInstance.getEnumCode0xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode0x()).toBe(false);
      expect(testInstance.getEnumCode0x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(false);
      expect(testInstance.getEnumCode11EnumType()).toBeNull();
      expect(testInstance.hasEnumCode11Element()).toBe(false);
      expect(testInstance.getEnumCode11Element()).toBeNull();
      expect(testInstance.hasEnumCode11()).toBe(false);
      expect(testInstance.getEnumCode11()).toBeNull();

      expect(testInstance.hasEnumCode1xEnumType()).toBe(false);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode1xElement()).toBe(false);
      expect(testInstance.getEnumCode1xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode1x()).toBe(false);
      expect(testInstance.getEnumCode1x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual(new TestModelPrimitiveComponent());
    });

    it('should be properly reset by modifying/adding all properties using EnumCodeType', () => {
      const testInstance = new TestModelComplexReferenceEnumCodeComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setEnumCode01EnumType(enumCode01);
      testInstance.setEnumCode0xEnumType([enumCode0x]);
      testInstance.setEnumCode11EnumType(enumCode11);
      testInstance.setEnumCode1xEnumType([enumCode1x]);
      testInstance.setPrimitive(testModelPrimitiveComponent);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasEnumCode01EnumType()).toBe(true);
      expect(testInstance.getEnumCode01EnumType()).toEqual(enumCode01);
      expect(testInstance.hasEnumCode01Element()).toBe(true);
      expect(testInstance.getEnumCode01Element()).toEqual(enumCode01 as CodeType);
      expect(testInstance.hasEnumCode01()).toBe(true);
      expect(testInstance.getEnumCode01()).toStrictEqual(TestData.VALID_TASKCODE_APPROVE);

      expect(testInstance.hasEnumCode0xEnumType()).toBe(true);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([enumCode0x]);
      expect(testInstance.hasEnumCode0xElement()).toBe(true);
      expect(testInstance.getEnumCode0xElement()).toEqual([enumCode0x as CodeType]);
      expect(testInstance.hasEnumCode0x()).toBe(true);
      expect(testInstance.getEnumCode0x()).toEqual([TestData.VALID_TASKSTATUS_REQUESTED]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_AUTHOR);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT]);

      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual(testModelPrimitiveComponent);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setEnumCode01EnumType(enumCode01_2);
      testInstance.addEnumCode0xEnumType(enumCode0x_2);
      testInstance.setEnumCode11EnumType(enumCode11_2);
      testInstance.addEnumCode1xEnumType(enumCode1x_2);
      testInstance.setPrimitive(testModelPrimitiveComponent_2);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetBackboneElementProperties(testInstance);

      expect(testInstance.hasEnumCode01EnumType()).toBe(true);
      expect(testInstance.getEnumCode01EnumType()).toEqual(enumCode01_2);
      expect(testInstance.hasEnumCode01Element()).toBe(true);
      expect(testInstance.getEnumCode01Element()).toEqual(enumCode01_2 as CodeType);
      expect(testInstance.hasEnumCode01()).toBe(true);
      expect(testInstance.getEnumCode01()).toStrictEqual(TestData.VALID_TASKCODE_FULFILL);

      expect(testInstance.hasEnumCode0xEnumType()).toBe(true);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([enumCode0x, enumCode0x_2]);
      expect(testInstance.hasEnumCode0xElement()).toBe(true);
      expect(testInstance.getEnumCode0xElement()).toEqual([enumCode0x as CodeType, enumCode0x_2 as CodeType]);
      expect(testInstance.hasEnumCode0x()).toBe(true);
      expect(testInstance.getEnumCode0x()).toEqual([
        TestData.VALID_TASKSTATUS_REQUESTED,
        TestData.VALID_TASKSTATUS_ACCEPTED,
      ]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11_2);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11_2 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_REVIEWER);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x, enumCode1x_2]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType, enumCode1x_2 as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT, TestData.VALID_CONSENT_ACTIVE]);

      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual(testModelPrimitiveComponent_2);

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      testInstance.setEnumCode01EnumType(TestData.UNDEFINED_VALUE);
      testInstance.setEnumCode0xEnumType(TestData.UNDEFINED_VALUE);
      testInstance.setEnumCode11EnumType(TestData.UNDEFINED_VALUE);
      testInstance.setEnumCode1xEnumType(TestData.UNDEFINED_VALUE);
      testInstance.setPrimitive(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasEnumCode01EnumType()).toBe(false);
      expect(testInstance.getEnumCode01EnumType()).toBeUndefined();
      expect(testInstance.hasEnumCode01Element()).toBe(false);
      expect(testInstance.getEnumCode01Element()).toBeUndefined();
      expect(testInstance.hasEnumCode01()).toBe(false);
      expect(testInstance.getEnumCode01()).toBeUndefined();

      expect(testInstance.hasEnumCode0xEnumType()).toBe(false);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode0xElement()).toBe(false);
      expect(testInstance.getEnumCode0xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode0x()).toBe(false);
      expect(testInstance.getEnumCode0x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(false);
      expect(testInstance.getEnumCode11EnumType()).toBeNull();
      expect(testInstance.hasEnumCode11Element()).toBe(false);
      expect(testInstance.getEnumCode11Element()).toBeNull();
      expect(testInstance.hasEnumCode11()).toBe(false);
      expect(testInstance.getEnumCode11()).toBeNull();

      expect(testInstance.hasEnumCode1xEnumType()).toBe(false);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode1xElement()).toBe(false);
      expect(testInstance.getEnumCode1xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode1x()).toBe(false);
      expect(testInstance.getEnumCode1x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual(new TestModelPrimitiveComponent());
    });

    it('should be properly reset by modifying/adding all properties using CodeType', () => {
      const testInstance = new TestModelComplexReferenceEnumCodeComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setEnumCode01Element(TestData.VALID_TASKCODE_APPROVE_TYPE);
      testInstance.setEnumCode0xElement([TestData.VALID_TASKSTATUS_REQUESTED_TYPE]);
      testInstance.setEnumCode11Element(TestData.VALID_CONTRIBUTOR_AUTHOR_TYPE);
      testInstance.setEnumCode1xElement([TestData.VALID_CONSENT_DRAFT_TYPE]);
      testInstance.setPrimitive(testModelPrimitiveComponent);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasEnumCode01EnumType()).toBe(true);
      expect(testInstance.getEnumCode01EnumType()).toEqual(enumCode01);
      expect(testInstance.hasEnumCode01Element()).toBe(true);
      expect(testInstance.getEnumCode01Element()).toEqual(enumCode01 as CodeType);
      expect(testInstance.hasEnumCode01()).toBe(true);
      expect(testInstance.getEnumCode01()).toStrictEqual(TestData.VALID_TASKCODE_APPROVE);

      expect(testInstance.hasEnumCode0xEnumType()).toBe(true);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([enumCode0x]);
      expect(testInstance.hasEnumCode0xElement()).toBe(true);
      expect(testInstance.getEnumCode0xElement()).toEqual([enumCode0x as CodeType]);
      expect(testInstance.hasEnumCode0x()).toBe(true);
      expect(testInstance.getEnumCode0x()).toEqual([TestData.VALID_TASKSTATUS_REQUESTED]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_AUTHOR);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT]);

      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual(testModelPrimitiveComponent);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setEnumCode01Element(TestData.VALID_TASKCODE_FULFILL_TYPE);
      testInstance.addEnumCode0xElement(TestData.VALID_TASKSTATUS_ACCEPTED_TYPE);
      testInstance.setEnumCode11Element(TestData.VALID_CONTRIBUTOR_REVIEWER_TYPE);
      testInstance.addEnumCode1xElement(TestData.VALID_CONSENT_ACTIVE_TYPE);
      testInstance.setPrimitive(testModelPrimitiveComponent_2);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetBackboneElementProperties(testInstance);

      expect(testInstance.hasEnumCode01EnumType()).toBe(true);
      expect(testInstance.getEnumCode01EnumType()).toEqual(enumCode01_2);
      expect(testInstance.hasEnumCode01Element()).toBe(true);
      expect(testInstance.getEnumCode01Element()).toEqual(enumCode01_2 as CodeType);
      expect(testInstance.hasEnumCode01()).toBe(true);
      expect(testInstance.getEnumCode01()).toStrictEqual(TestData.VALID_TASKCODE_FULFILL);

      expect(testInstance.hasEnumCode0xEnumType()).toBe(true);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([enumCode0x, enumCode0x_2]);
      expect(testInstance.hasEnumCode0xElement()).toBe(true);
      expect(testInstance.getEnumCode0xElement()).toEqual([enumCode0x as CodeType, enumCode0x_2 as CodeType]);
      expect(testInstance.hasEnumCode0x()).toBe(true);
      expect(testInstance.getEnumCode0x()).toEqual([
        TestData.VALID_TASKSTATUS_REQUESTED,
        TestData.VALID_TASKSTATUS_ACCEPTED,
      ]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11_2);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11_2 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_REVIEWER);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x, enumCode1x_2]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType, enumCode1x_2 as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT, TestData.VALID_CONSENT_ACTIVE]);

      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual(testModelPrimitiveComponent_2);

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      testInstance.setEnumCode01Element(TestData.UNDEFINED_VALUE);
      testInstance.setEnumCode0xElement(TestData.UNDEFINED_VALUE);
      testInstance.setEnumCode11Element(TestData.UNDEFINED_VALUE);
      testInstance.setEnumCode1xElement(TestData.UNDEFINED_VALUE);
      testInstance.setPrimitive(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasEnumCode01EnumType()).toBe(false);
      expect(testInstance.getEnumCode01EnumType()).toBeUndefined();
      expect(testInstance.hasEnumCode01Element()).toBe(false);
      expect(testInstance.getEnumCode01Element()).toBeUndefined();
      expect(testInstance.hasEnumCode01()).toBe(false);
      expect(testInstance.getEnumCode01()).toBeUndefined();

      expect(testInstance.hasEnumCode0xEnumType()).toBe(false);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode0xElement()).toBe(false);
      expect(testInstance.getEnumCode0xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode0x()).toBe(false);
      expect(testInstance.getEnumCode0x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(false);
      expect(testInstance.getEnumCode11EnumType()).toBeNull();
      expect(testInstance.hasEnumCode11Element()).toBe(false);
      expect(testInstance.getEnumCode11Element()).toBeNull();
      expect(testInstance.hasEnumCode11()).toBe(false);
      expect(testInstance.getEnumCode11()).toBeNull();

      expect(testInstance.hasEnumCode1xEnumType()).toBe(false);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode1xElement()).toBe(false);
      expect(testInstance.getEnumCode1xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode1x()).toBe(false);
      expect(testInstance.getEnumCode1x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual(new TestModelPrimitiveComponent());
    });

    it('should be properly reset by modifying/adding all properties using fhirCode', () => {
      const testInstance = new TestModelComplexReferenceEnumCodeComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setEnumCode01(TestData.VALID_TASKCODE_APPROVE);
      testInstance.setEnumCode0x([TestData.VALID_TASKSTATUS_REQUESTED]);
      testInstance.setEnumCode11(TestData.VALID_CONTRIBUTOR_AUTHOR);
      testInstance.setEnumCode1x([TestData.VALID_CONSENT_DRAFT]);
      testInstance.setPrimitive(testModelPrimitiveComponent);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasEnumCode01EnumType()).toBe(true);
      expect(testInstance.getEnumCode01EnumType()).toEqual(enumCode01);
      expect(testInstance.hasEnumCode01Element()).toBe(true);
      expect(testInstance.getEnumCode01Element()).toEqual(enumCode01 as CodeType);
      expect(testInstance.hasEnumCode01()).toBe(true);
      expect(testInstance.getEnumCode01()).toStrictEqual(TestData.VALID_TASKCODE_APPROVE);

      expect(testInstance.hasEnumCode0xEnumType()).toBe(true);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([enumCode0x]);
      expect(testInstance.hasEnumCode0xElement()).toBe(true);
      expect(testInstance.getEnumCode0xElement()).toEqual([enumCode0x as CodeType]);
      expect(testInstance.hasEnumCode0x()).toBe(true);
      expect(testInstance.getEnumCode0x()).toEqual([TestData.VALID_TASKSTATUS_REQUESTED]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_AUTHOR);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT]);

      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual(testModelPrimitiveComponent);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setEnumCode01(TestData.VALID_TASKCODE_FULFILL);
      testInstance.addEnumCode0x(TestData.VALID_TASKSTATUS_ACCEPTED);
      testInstance.setEnumCode11(TestData.VALID_CONTRIBUTOR_REVIEWER);
      testInstance.addEnumCode1x(TestData.VALID_CONSENT_ACTIVE);
      testInstance.setPrimitive(testModelPrimitiveComponent_2);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetBackboneElementProperties(testInstance);

      expect(testInstance.hasEnumCode01EnumType()).toBe(true);
      expect(testInstance.getEnumCode01EnumType()).toEqual(enumCode01_2);
      expect(testInstance.hasEnumCode01Element()).toBe(true);
      expect(testInstance.getEnumCode01Element()).toEqual(enumCode01_2 as CodeType);
      expect(testInstance.hasEnumCode01()).toBe(true);
      expect(testInstance.getEnumCode01()).toStrictEqual(TestData.VALID_TASKCODE_FULFILL);

      expect(testInstance.hasEnumCode0xEnumType()).toBe(true);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([enumCode0x, enumCode0x_2]);
      expect(testInstance.hasEnumCode0xElement()).toBe(true);
      expect(testInstance.getEnumCode0xElement()).toEqual([enumCode0x as CodeType, enumCode0x_2 as CodeType]);
      expect(testInstance.hasEnumCode0x()).toBe(true);
      expect(testInstance.getEnumCode0x()).toEqual([
        TestData.VALID_TASKSTATUS_REQUESTED,
        TestData.VALID_TASKSTATUS_ACCEPTED,
      ]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11_2);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11_2 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_REVIEWER);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x, enumCode1x_2]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType, enumCode1x_2 as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT, TestData.VALID_CONSENT_ACTIVE]);

      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual(testModelPrimitiveComponent_2);

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      testInstance.setEnumCode01(TestData.UNDEFINED_VALUE);
      testInstance.setEnumCode0x(TestData.UNDEFINED_VALUE);
      testInstance.setEnumCode11(TestData.UNDEFINED_VALUE);
      testInstance.setEnumCode1x(TestData.UNDEFINED_VALUE);
      testInstance.setPrimitive(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasEnumCode01EnumType()).toBe(false);
      expect(testInstance.getEnumCode01EnumType()).toBeUndefined();
      expect(testInstance.hasEnumCode01Element()).toBe(false);
      expect(testInstance.getEnumCode01Element()).toBeUndefined();
      expect(testInstance.hasEnumCode01()).toBe(false);
      expect(testInstance.getEnumCode01()).toBeUndefined();

      expect(testInstance.hasEnumCode0xEnumType()).toBe(false);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode0xElement()).toBe(false);
      expect(testInstance.getEnumCode0xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode0x()).toBe(false);
      expect(testInstance.getEnumCode0x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(false);
      expect(testInstance.getEnumCode11EnumType()).toBeNull();
      expect(testInstance.hasEnumCode11Element()).toBe(false);
      expect(testInstance.getEnumCode11Element()).toBeNull();
      expect(testInstance.hasEnumCode11()).toBe(false);
      expect(testInstance.getEnumCode11()).toBeNull();

      expect(testInstance.hasEnumCode1xEnumType()).toBe(false);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode1xElement()).toBe(false);
      expect(testInstance.getEnumCode1xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode1x()).toBe(false);
      expect(testInstance.getEnumCode1x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual(new TestModelPrimitiveComponent());
    });
  });

  describe('Serialization/Deserialization', () => {
    const altEnumCodeType01: EnumCodeType = enumCode01.copy();
    altEnumCodeType01.setId(TestData.DATATYPE_ID);
    altEnumCodeType01.addExtension(DATATYPE_EXTENSION);

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
      enumCode01: 'approve',
      _enumCode01: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
      },
      enumCode11: 'author',
      enumCode0x: ['requested'],
      enumCode1x: ['draft'],
      primitive: {
        primitive01: '2024-01-28T14:30:00Z',
        primitive0x: [13579],
        primitive11: true,
        primitive1x: ['This is a valid string.'],
        choice11Uri: 'validUri',
      },
    };
    const INVALID_JSON_1 = {
      enumCode11: ['author'],
    };
    const INVALID_JSON_2 = {
      primitive: {
        primitive0x: [13579, 'NaN'],
      },
    };
    const INVALID_JSON_3 = {
      primitive: {
        primitive1x: 'This is a valid string.',
      },
    };
    const INVALID_JSON_4 = {
      enumCode0x: ['bogus'],
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
      enumCode01: null,
      enumCode11: null,
      enumCode0x: null,
      enumCode1x: null,
      primitive: null,
      unexpectedField: 'should be ignored without error',
    };

    it('should properly create serialized content', () => {
      const testInstance = new TestModelComplexReferenceEnumCodeComponent();

      initializeBackboneElementProperties(testInstance, 2);

      testInstance.setEnumCode01EnumType(altEnumCodeType01);
      testInstance.setEnumCode0xEnumType([enumCode0x]);
      testInstance.setEnumCode11EnumType(enumCode11);
      testInstance.setEnumCode1xEnumType([enumCode1x]);
      testInstance.setPrimitive(testModelPrimitiveComponent);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasEnumCode01EnumType()).toBe(true);
      expect(testInstance.getEnumCode01EnumType()).toEqual(altEnumCodeType01);
      expect(testInstance.hasEnumCode01Element()).toBe(true);
      expect(testInstance.getEnumCode01Element()).toEqual(altEnumCodeType01 as CodeType);
      expect(testInstance.hasEnumCode01()).toBe(true);
      expect(testInstance.getEnumCode01()).toStrictEqual(TestData.VALID_TASKCODE_APPROVE);

      expect(testInstance.hasEnumCode0xEnumType()).toBe(true);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([enumCode0x]);
      expect(testInstance.hasEnumCode0xElement()).toBe(true);
      expect(testInstance.getEnumCode0xElement()).toEqual([enumCode0x as CodeType]);
      expect(testInstance.hasEnumCode0x()).toBe(true);
      expect(testInstance.getEnumCode0x()).toEqual([TestData.VALID_TASKSTATUS_REQUESTED]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_AUTHOR);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT]);

      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual(testModelPrimitiveComponent);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should properly create serialized content with no field values', () => {
      const testInstance = new TestModelComplexReferenceEnumCodeComponent();

      initializeBackboneElementProperties(testInstance, 2);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasEnumCode01EnumType()).toBe(false);
      expect(testInstance.getEnumCode01EnumType()).toBeUndefined();
      expect(testInstance.hasEnumCode01Element()).toBe(false);
      expect(testInstance.getEnumCode01Element()).toBeUndefined();
      expect(testInstance.hasEnumCode01()).toBe(false);
      expect(testInstance.getEnumCode01()).toBeUndefined();

      expect(testInstance.hasEnumCode0xEnumType()).toBe(false);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode0xElement()).toBe(false);
      expect(testInstance.getEnumCode0xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode0x()).toBe(false);
      expect(testInstance.getEnumCode0x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(false);
      expect(testInstance.getEnumCode11EnumType()).toBeNull();
      expect(testInstance.hasEnumCode11Element()).toBe(false);
      expect(testInstance.getEnumCode11Element()).toBeNull();
      expect(testInstance.hasEnumCode11()).toBe(false);
      expect(testInstance.getEnumCode11()).toBeNull();

      expect(testInstance.hasEnumCode1xEnumType()).toBe(false);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode1xElement()).toBe(false);
      expect(testInstance.getEnumCode1xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode1x()).toBe(false);
      expect(testInstance.getEnumCode1x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual(new TestModelPrimitiveComponent());

      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: TestModelComplexReferenceEnumCodeComponent | undefined;
      testInstance = TestModelComplexReferenceEnumCodeComponent.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = TestModelComplexReferenceEnumCodeComponent.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = TestModelComplexReferenceEnumCodeComponent.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should throw Errors for invalid json types', () => {
      let t = () => {
        TestModelComplexReferenceEnumCodeComponent.parse('NOT AN OBJECT');
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexReferenceEnumCodeComponent JSON is not a JSON object.`);

      t = () => {
        TestModelComplexReferenceEnumCodeComponent.parse(INVALID_JSON_1);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexReferenceEnumCodeComponent.enumCode11 is not a string.`);

      t = () => {
        TestModelComplexReferenceEnumCodeComponent.parse(INVALID_JSON_2);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexReferenceEnumCodeComponent.primitive.primitive0x is not a number.`);

      t = () => {
        TestModelComplexReferenceEnumCodeComponent.parse(INVALID_JSON_3);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexReferenceEnumCodeComponent.primitive.primitive1x is not a JSON array.`);

      t = () => {
        TestModelComplexReferenceEnumCodeComponent.parse(INVALID_JSON_4);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown TaskStatusEnum 'code' value 'bogus'`);
    });

    it('should return parsed TestModelComplexReferenceEnumCodeComponent for valid json', () => {
      const testInstance: TestModelComplexReferenceEnumCodeComponent | undefined =
        TestModelComplexReferenceEnumCodeComponent.parse(VALID_JSON);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasEnumCode01EnumType()).toBe(true);
      expect(testInstance.getEnumCode01EnumType()).toEqual(altEnumCodeType01);
      expect(testInstance.hasEnumCode01Element()).toBe(true);
      expect(testInstance.getEnumCode01Element()).toEqual(altEnumCodeType01 as CodeType);
      expect(testInstance.hasEnumCode01()).toBe(true);
      expect(testInstance.getEnumCode01()).toStrictEqual(TestData.VALID_TASKCODE_APPROVE);

      expect(testInstance.hasEnumCode0xEnumType()).toBe(true);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([enumCode0x]);
      expect(testInstance.hasEnumCode0xElement()).toBe(true);
      expect(testInstance.getEnumCode0xElement()).toEqual([enumCode0x as CodeType]);
      expect(testInstance.hasEnumCode0x()).toBe(true);
      expect(testInstance.getEnumCode0x()).toEqual([TestData.VALID_TASKSTATUS_REQUESTED]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(true);
      expect(testInstance.getEnumCode11EnumType()).toEqual(enumCode11);
      expect(testInstance.hasEnumCode11Element()).toBe(true);
      expect(testInstance.getEnumCode11Element()).toEqual(enumCode11 as CodeType);
      expect(testInstance.hasEnumCode11()).toBe(true);
      expect(testInstance.getEnumCode11()).toStrictEqual(TestData.VALID_CONTRIBUTOR_AUTHOR);

      expect(testInstance.hasEnumCode1xEnumType()).toBe(true);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([enumCode1x]);
      expect(testInstance.hasEnumCode1xElement()).toBe(true);
      expect(testInstance.getEnumCode1xElement()).toEqual([enumCode1x as CodeType]);
      expect(testInstance.hasEnumCode1x()).toBe(true);
      expect(testInstance.getEnumCode1x()).toEqual([TestData.VALID_CONSENT_DRAFT]);

      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual(testModelPrimitiveComponent);
    });

    it('should return parsed TestModelComplexReferenceEnumCodeComponent for valid json with no fields', () => {
      const testInstance: TestModelComplexReferenceEnumCodeComponent | undefined =
        TestModelComplexReferenceEnumCodeComponent.parse(VALID_JSON_NO_FIELDS);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasEnumCode01EnumType()).toBe(false);
      expect(testInstance.getEnumCode01EnumType()).toBeUndefined();
      expect(testInstance.hasEnumCode01Element()).toBe(false);
      expect(testInstance.getEnumCode01Element()).toBeUndefined();
      expect(testInstance.hasEnumCode01()).toBe(false);
      expect(testInstance.getEnumCode01()).toBeUndefined();

      expect(testInstance.hasEnumCode0xEnumType()).toBe(false);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode0xElement()).toBe(false);
      expect(testInstance.getEnumCode0xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode0x()).toBe(false);
      expect(testInstance.getEnumCode0x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(false);
      expect(testInstance.getEnumCode11EnumType()).toBeNull();
      expect(testInstance.hasEnumCode11Element()).toBe(false);
      expect(testInstance.getEnumCode11Element()).toBeNull();
      expect(testInstance.hasEnumCode11()).toBe(false);
      expect(testInstance.getEnumCode11()).toBeNull();

      expect(testInstance.hasEnumCode1xEnumType()).toBe(false);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode1xElement()).toBe(false);
      expect(testInstance.getEnumCode1xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode1x()).toBe(false);
      expect(testInstance.getEnumCode1x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual(new TestModelPrimitiveComponent());
    });

    it('should return parsed TestModelComplexReferenceEnumCodeComponent for valid json with null fields', () => {
      const testInstance: TestModelComplexReferenceEnumCodeComponent | undefined =
        TestModelComplexReferenceEnumCodeComponent.parse(VALID_JSON_NULL_FIELDS);

      expectBackboneElementBase(
        TestModelComplexReferenceEnumCodeComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceEnumCodeComponent',
        'TestModel.complex.reference.enumCode',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasEnumCode01EnumType()).toBe(false);
      expect(testInstance.getEnumCode01EnumType()).toBeUndefined();
      expect(testInstance.hasEnumCode01Element()).toBe(false);
      expect(testInstance.getEnumCode01Element()).toBeUndefined();
      expect(testInstance.hasEnumCode01()).toBe(false);
      expect(testInstance.getEnumCode01()).toBeUndefined();

      expect(testInstance.hasEnumCode0xEnumType()).toBe(false);
      expect(testInstance.getEnumCode0xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode0xElement()).toBe(false);
      expect(testInstance.getEnumCode0xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode0x()).toBe(false);
      expect(testInstance.getEnumCode0x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasEnumCode11EnumType()).toBe(false);
      expect(testInstance.getEnumCode11EnumType()).toBeNull();
      expect(testInstance.hasEnumCode11Element()).toBe(false);
      expect(testInstance.getEnumCode11Element()).toBeNull();
      expect(testInstance.hasEnumCode11()).toBe(false);
      expect(testInstance.getEnumCode11()).toBeNull();

      expect(testInstance.hasEnumCode1xEnumType()).toBe(false);
      expect(testInstance.getEnumCode1xEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasEnumCode1xElement()).toBe(false);
      expect(testInstance.getEnumCode1xElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasEnumCode1x()).toBe(false);
      expect(testInstance.getEnumCode1x()).toEqual([] as fhirCode[]);

      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual(new TestModelPrimitiveComponent());
    });
  });

  describe('Type Assertion Tests', () => {
    it('constructor: should throw appropriate errors when instantiated with an invalid required data elements', () => {
      let t = () => {
        // @ts-expect-error: Allow for testing
        new TestModelComplexReferenceEnumCodeComponent(VALID_MOCK_COMPLEX_DATATYPE, null);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode11; Provided code value is not an instance of CodeType`,
      );

      t = () => {
        new TestModelComplexReferenceEnumCodeComponent(TestData.VALID_CODE_TYPE, null);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode11; Unknown ContributorTypeEnum 'code' value 'testCodeType'`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        new TestModelComplexReferenceEnumCodeComponent(null, [VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode1x; Errors: Provided code value is not an instance of CodeType`,
      );

      t = () => {
        new TestModelComplexReferenceEnumCodeComponent(null, [TestData.VALID_CODE_TYPE]);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode1x; Errors: Unknown ConsentStateCodesEnum 'code' value 'testCodeType'`,
      );
    });

    it('enumCode01: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexReferenceEnumCodeComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setEnumCode01EnumType(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode01; Provided type is not an instance of TaskCodeEnum.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setEnumCode01Element(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode01; Provided element is not an instance of CodeType.`,
      );

      t = () => {
        testInstance.setEnumCode01(TestData.INVALID_CODE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode01; Provided value is not an instance of fhirCode.`,
      );

      t = () => {
        testInstance.setEnumCode01(TestData.VALID_URI);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown TaskCodeEnum 'code' value 'validUri'`);
    });

    it('enumCode0x: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexReferenceEnumCodeComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setEnumCode0xEnumType([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode0x; Provided instance array has an element that is not an instance of TaskStatusEnum.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addEnumCode0xEnumType(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode0x; Provided type is not an instance of TaskStatusEnum.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setEnumCode0xElement([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode0x; Provided element array has an element that is not an instance of CodeType.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addEnumCode0xElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode0x; Provided element is not an instance of CodeType.`,
      );

      t = () => {
        testInstance.setEnumCode0x([TestData.INVALID_CODE_VALUE]);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode0x; Provided value is not an instance of fhirCode.`,
      );

      t = () => {
        testInstance.addEnumCode0x(TestData.INVALID_CODE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode0x; Provided value is not an instance of fhirCode.`,
      );

      t = () => {
        testInstance.setEnumCode0x([TestData.VALID_URI]);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown TaskStatusEnum 'code' value 'validUri'`);

      t = () => {
        testInstance.addEnumCode0x(TestData.VALID_URI);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown TaskStatusEnum 'code' value 'validUri'`);
    });

    it('enumCode11: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexReferenceEnumCodeComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setEnumCode11EnumType(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode11; Provided type is not an instance of ContributorTypeEnum.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setEnumCode11Element(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode11; Provided value is not an instance of CodeType.`,
      );

      t = () => {
        testInstance.setEnumCode11(TestData.INVALID_CODE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid TestModel.complex.reference.enumCode.enumCode11 ( Invalid code )`);

      t = () => {
        testInstance.setEnumCode11(TestData.VALID_URI);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown ContributorTypeEnum 'code' value 'validUri'`);
    });

    it('enumCode1x: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexReferenceEnumCodeComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setEnumCode1xEnumType([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode1x; Provided instance array has an element that is not an instance of ConsentStateCodesEnum.`,
      );
      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addEnumCode1xEnumType(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode1x; Provided type is not an instance of ConsentStateCodesEnum.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setEnumCode1xElement([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode1x; Provided element array has an element that is not an instance of CodeType.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addEnumCode1xElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode1x; Provided element is not an instance of CodeType.`,
      );

      t = () => {
        testInstance.setEnumCode1x([TestData.INVALID_CODE_VALUE]);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode1x; Provided value is not an instance of fhirCode.`,
      );

      t = () => {
        testInstance.addEnumCode1x(TestData.INVALID_CODE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.enumCode1x; Provided value is not an instance of fhirCode.`,
      );

      t = () => {
        testInstance.setEnumCode1x([TestData.VALID_URI]);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown ConsentStateCodesEnum 'code' value 'validUri'`);

      t = () => {
        testInstance.addEnumCode1x(TestData.VALID_URI);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown ConsentStateCodesEnum 'code' value 'validUri'`);
    });

    it('primitive: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexReferenceEnumCodeComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPrimitive(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode.primitive; Provided element is not an instance of TestModelPrimitiveComponent.`,
      );
    });
  });
});
