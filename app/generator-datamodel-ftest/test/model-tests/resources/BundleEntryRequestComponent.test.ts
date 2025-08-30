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
  IBackboneElement,
  InstantType,
  InvalidCodeError,
  InvalidTypeError,
  PrimitiveTypeError,
  StringType,
  UriType,
} from '@paq-ts-fhir/fhir-core';
import { BundleEntryRequestComponent } from '../../../src/resources/Bundle';
import { HttpVerbEnum } from '../../../src/code-systems/HttpVerbEnum';
import {
  expectBackboneElementBase,
  expectInitializedElementProperties,
  expectResetElementProperties,
  expectUndefinedElementProperties,
  initializeBackboneElementProperties,
  resetBackboneElementProperties,
  undefineBackboneElementProperties,
} from '../../ftest-utils';
import { TestData } from '../../ftest-data';
import { DATATYPE_EXTENSION, VALID_MOCK_COMPLEX_DATATYPE } from '../../ftest-mocks';

describe('BundleEntryRequestComponent', () => {
  const httpVerbEnum = new HttpVerbEnum();
  const VALID_HTTP_VERB_GET_ENUMCODE = new EnumCodeType(HttpVerbEnum.GET.code, httpVerbEnum);
  const VALID_HTTP_VERB_HEAD_ENUMCODE = new EnumCodeType(HttpVerbEnum.HEAD.code, httpVerbEnum);

  const noneMatchStringType = new StringType('none match');
  const noneMatchStringType_2 = new StringType('none match two');
  const matchStringType = new StringType('match');
  const matchStringType_2 = new StringType('match two');
  const noneExistStringType = new StringType('none exist');
  const noneExistStringType_2 = new StringType('none exist two');

  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new BundleEntryRequestComponent();

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasMethodEnumType()).toBe(false);
      expect(testInstance.getMethodEnumType()).toBeNull();
      expect(testInstance.hasMethodElement()).toBe(false);
      expect(testInstance.getMethodElement()).toBeNull();
      expect(testInstance.hasMethod()).toBe(false);
      expect(testInstance.getMethod()).toBeNull();
      expect(testInstance.hasUrlElement()).toBe(false);
      expect(testInstance.getUrlElement()).toEqual(new UriType());
      expect(testInstance.hasUrl()).toBe(false);
      expect(testInstance.getUrl()).toBeNull();
      expect(testInstance.hasIfNoneMatchElement()).toBe(false);
      expect(testInstance.getIfNoneMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneMatch()).toBe(false);
      expect(testInstance.getIfNoneMatch()).toBeUndefined();
      expect(testInstance.hasIfModifiedSinceElement()).toBe(false);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(new InstantType());
      expect(testInstance.hasIfModifiedSince()).toBe(false);
      expect(testInstance.getIfModifiedSince()).toBeUndefined();
      expect(testInstance.hasIfMatchElement()).toBe(false);
      expect(testInstance.getIfMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfMatch()).toBe(false);
      expect(testInstance.getIfMatch()).toBeUndefined();
      expect(testInstance.hasIfNoneExistElement()).toBe(false);
      expect(testInstance.getIfNoneExistElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneExist()).toBe(false);
      expect(testInstance.getIfNoneExist()).toBeUndefined();
    });

    it('should be properly instantiated with required elements', () => {
      let testInstance = new BundleEntryRequestComponent(VALID_HTTP_VERB_GET_ENUMCODE, TestData.VALID_URI_TYPE);

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasMethodEnumType()).toBe(true);
      expect(testInstance.getMethodEnumType()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE);
      expect(testInstance.hasMethodElement()).toBe(true);
      expect(testInstance.getMethodElement()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE as CodeType);
      expect(testInstance.hasMethod()).toBe(true);
      expect(testInstance.getMethod()).toEqual(HttpVerbEnum.GET.code);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasIfNoneMatchElement()).toBe(false);
      expect(testInstance.getIfNoneMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneMatch()).toBe(false);
      expect(testInstance.getIfNoneMatch()).toBeUndefined();
      expect(testInstance.hasIfModifiedSinceElement()).toBe(false);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(new InstantType());
      expect(testInstance.hasIfModifiedSince()).toBe(false);
      expect(testInstance.getIfModifiedSince()).toBeUndefined();
      expect(testInstance.hasIfMatchElement()).toBe(false);
      expect(testInstance.getIfMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfMatch()).toBe(false);
      expect(testInstance.getIfMatch()).toBeUndefined();
      expect(testInstance.hasIfNoneExistElement()).toBe(false);
      expect(testInstance.getIfNoneExistElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneExist()).toBe(false);
      expect(testInstance.getIfNoneExist()).toBeUndefined();

      testInstance = new BundleEntryRequestComponent(VALID_HTTP_VERB_GET_ENUMCODE as CodeType, TestData.VALID_URI_TYPE);

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasMethodEnumType()).toBe(true);
      expect(testInstance.getMethodEnumType()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE);
      expect(testInstance.hasMethodElement()).toBe(true);
      expect(testInstance.getMethodElement()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE as CodeType);
      expect(testInstance.hasMethod()).toBe(true);
      expect(testInstance.getMethod()).toEqual(HttpVerbEnum.GET.code);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasIfNoneMatchElement()).toBe(false);
      expect(testInstance.getIfNoneMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneMatch()).toBe(false);
      expect(testInstance.getIfNoneMatch()).toBeUndefined();
      expect(testInstance.hasIfModifiedSinceElement()).toBe(false);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(new InstantType());
      expect(testInstance.hasIfModifiedSince()).toBe(false);
      expect(testInstance.getIfModifiedSince()).toBeUndefined();
      expect(testInstance.hasIfMatchElement()).toBe(false);
      expect(testInstance.getIfMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfMatch()).toBe(false);
      expect(testInstance.getIfMatch()).toBeUndefined();
      expect(testInstance.hasIfNoneExistElement()).toBe(false);
      expect(testInstance.getIfNoneExistElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneExist()).toBe(false);
      expect(testInstance.getIfNoneExist()).toBeUndefined();

      testInstance = new BundleEntryRequestComponent(HttpVerbEnum.GET.code, TestData.VALID_URI);

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasMethodEnumType()).toBe(true);
      expect(testInstance.getMethodEnumType()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE);
      expect(testInstance.hasMethodElement()).toBe(true);
      expect(testInstance.getMethodElement()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE as CodeType);
      expect(testInstance.hasMethod()).toBe(true);
      expect(testInstance.getMethod()).toEqual(HttpVerbEnum.GET.code);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasIfNoneMatchElement()).toBe(false);
      expect(testInstance.getIfNoneMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneMatch()).toBe(false);
      expect(testInstance.getIfNoneMatch()).toBeUndefined();
      expect(testInstance.hasIfModifiedSinceElement()).toBe(false);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(new InstantType());
      expect(testInstance.hasIfModifiedSince()).toBe(false);
      expect(testInstance.getIfModifiedSince()).toBeUndefined();
      expect(testInstance.hasIfMatchElement()).toBe(false);
      expect(testInstance.getIfMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfMatch()).toBe(false);
      expect(testInstance.getIfMatch()).toBeUndefined();
      expect(testInstance.hasIfNoneExistElement()).toBe(false);
      expect(testInstance.getIfNoneExistElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneExist()).toBe(false);
      expect(testInstance.getIfNoneExist()).toBeUndefined();
    });

    it('should properly copy()', () => {
      const testModel = new BundleEntryRequestComponent();

      initializeBackboneElementProperties(testModel, 1);

      testModel.setMethodEnumType(VALID_HTTP_VERB_GET_ENUMCODE);
      testModel.setUrlElement(TestData.VALID_URI_TYPE);
      testModel.setIfNoneMatchElement(noneMatchStringType);
      testModel.setIfModifiedSinceElement(TestData.VALID_INSTANT_TYPE);
      testModel.setIfMatchElement(matchStringType);
      testModel.setIfNoneExistElement(noneExistStringType);

      let testInstance: BundleEntryRequestComponent = testModel.copy();

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasMethodEnumType()).toBe(true);
      expect(testInstance.getMethodEnumType()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE);
      expect(testInstance.hasMethodElement()).toBe(true);
      expect(testInstance.getMethodElement()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE as CodeType);
      expect(testInstance.hasMethod()).toBe(true);
      expect(testInstance.getMethod()).toEqual(HttpVerbEnum.GET.code);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasIfNoneMatchElement()).toBe(true);
      expect(testInstance.getIfNoneMatchElement()).toEqual(noneMatchStringType);
      expect(testInstance.hasIfNoneMatch()).toBe(true);
      expect(testInstance.getIfNoneMatch()).toEqual(noneMatchStringType.getValue());
      expect(testInstance.hasIfModifiedSinceElement()).toBe(true);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasIfModifiedSince()).toBe(true);
      expect(testInstance.getIfModifiedSince()).toEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasIfMatchElement()).toBe(true);
      expect(testInstance.getIfMatchElement()).toEqual(matchStringType);
      expect(testInstance.hasIfMatch()).toBe(true);
      expect(testInstance.getIfMatch()).toEqual(matchStringType.getValue());
      expect(testInstance.hasIfNoneExistElement()).toBe(true);
      expect(testInstance.getIfNoneExistElement()).toEqual(noneExistStringType);
      expect(testInstance.hasIfNoneExist()).toBe(true);
      expect(testInstance.getIfNoneExist()).toEqual(noneExistStringType.getValue());

      // Reset to undefined

      undefineBackboneElementProperties(testModel);

      testModel.setMethodEnumType(TestData.UNDEFINED_VALUE);
      testModel.setUrlElement(TestData.UNDEFINED_VALUE);
      testModel.setIfNoneMatchElement(TestData.UNDEFINED_VALUE);
      testModel.setIfModifiedSinceElement(TestData.UNDEFINED_VALUE);
      testModel.setIfMatchElement(TestData.UNDEFINED_VALUE);
      testModel.setIfNoneExistElement(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasMethodEnumType()).toBe(false);
      expect(testInstance.getMethodEnumType()).toBeNull();
      expect(testInstance.hasMethodElement()).toBe(false);
      expect(testInstance.getMethodElement()).toBeNull();
      expect(testInstance.hasMethod()).toBe(false);
      expect(testInstance.getMethod()).toBeNull();
      expect(testInstance.hasUrlElement()).toBe(false);
      expect(testInstance.getUrlElement()).toEqual(new UriType());
      expect(testInstance.hasUrl()).toBe(false);
      expect(testInstance.getUrl()).toBeNull();
      expect(testInstance.hasIfNoneMatchElement()).toBe(false);
      expect(testInstance.getIfNoneMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneMatch()).toBe(false);
      expect(testInstance.getIfNoneMatch()).toBeUndefined();
      expect(testInstance.hasIfModifiedSinceElement()).toBe(false);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(new InstantType());
      expect(testInstance.hasIfModifiedSince()).toBe(false);
      expect(testInstance.getIfModifiedSince()).toBeUndefined();
      expect(testInstance.hasIfMatchElement()).toBe(false);
      expect(testInstance.getIfMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfMatch()).toBe(false);
      expect(testInstance.getIfMatch()).toBeUndefined();
      expect(testInstance.hasIfNoneExistElement()).toBe(false);
      expect(testInstance.getIfNoneExistElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneExist()).toBe(false);
      expect(testInstance.getIfNoneExist()).toBeUndefined();
    });

    it('should be properly reset by modifying/adding all properties with primitive elements as appropriate', () => {
      const testInstance = new BundleEntryRequestComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setMethod(HttpVerbEnum.GET.code);
      testInstance.setUrl(TestData.VALID_URI);
      testInstance.setIfNoneMatch(noneMatchStringType.getValue());
      testInstance.setIfModifiedSince(TestData.VALID_INSTANT);
      testInstance.setIfMatch(matchStringType.getValue());
      testInstance.setIfNoneExist(noneExistStringType.getValue());

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasMethodEnumType()).toBe(true);
      expect(testInstance.getMethodEnumType()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE);
      expect(testInstance.hasMethodElement()).toBe(true);
      expect(testInstance.getMethodElement()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE as CodeType);
      expect(testInstance.hasMethod()).toBe(true);
      expect(testInstance.getMethod()).toEqual(HttpVerbEnum.GET.code);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasIfNoneMatchElement()).toBe(true);
      expect(testInstance.getIfNoneMatchElement()).toEqual(noneMatchStringType);
      expect(testInstance.hasIfNoneMatch()).toBe(true);
      expect(testInstance.getIfNoneMatch()).toEqual(noneMatchStringType.getValue());
      expect(testInstance.hasIfModifiedSinceElement()).toBe(true);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasIfModifiedSince()).toBe(true);
      expect(testInstance.getIfModifiedSince()).toEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasIfMatchElement()).toBe(true);
      expect(testInstance.getIfMatchElement()).toEqual(matchStringType);
      expect(testInstance.hasIfMatch()).toBe(true);
      expect(testInstance.getIfMatch()).toEqual(matchStringType.getValue());
      expect(testInstance.hasIfNoneExistElement()).toBe(true);
      expect(testInstance.getIfNoneExistElement()).toEqual(noneExistStringType);
      expect(testInstance.hasIfNoneExist()).toBe(true);
      expect(testInstance.getIfNoneExist()).toEqual(noneExistStringType.getValue());

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setMethod(HttpVerbEnum.HEAD.code);
      testInstance.setUrl(TestData.VALID_URI_2);
      testInstance.setIfNoneMatch(noneMatchStringType_2.getValue());
      testInstance.setIfModifiedSince(TestData.VALID_INSTANT_2);
      testInstance.setIfMatch(matchStringType_2.getValue());
      testInstance.setIfNoneExist(noneExistStringType_2.getValue());

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetElementProperties(testInstance);

      expect(testInstance.hasMethodEnumType()).toBe(true);
      expect(testInstance.getMethodEnumType()).toEqual(VALID_HTTP_VERB_HEAD_ENUMCODE);
      expect(testInstance.hasMethodElement()).toBe(true);
      expect(testInstance.getMethodElement()).toEqual(VALID_HTTP_VERB_HEAD_ENUMCODE as CodeType);
      expect(testInstance.hasMethod()).toBe(true);
      expect(testInstance.getMethod()).toEqual(HttpVerbEnum.HEAD.code);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE_2);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI_2);
      expect(testInstance.hasIfNoneMatchElement()).toBe(true);
      expect(testInstance.getIfNoneMatchElement()).toEqual(noneMatchStringType_2);
      expect(testInstance.hasIfNoneMatch()).toBe(true);
      expect(testInstance.getIfNoneMatch()).toEqual(noneMatchStringType_2.getValue());
      expect(testInstance.hasIfModifiedSinceElement()).toBe(true);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(TestData.VALID_INSTANT_TYPE_2);
      expect(testInstance.hasIfModifiedSince()).toBe(true);
      expect(testInstance.getIfModifiedSince()).toEqual(TestData.VALID_INSTANT_2);
      expect(testInstance.hasIfMatchElement()).toBe(true);
      expect(testInstance.getIfMatchElement()).toEqual(matchStringType_2);
      expect(testInstance.hasIfMatch()).toBe(true);
      expect(testInstance.getIfMatch()).toEqual(matchStringType_2.getValue());
      expect(testInstance.hasIfNoneExistElement()).toBe(true);
      expect(testInstance.getIfNoneExistElement()).toEqual(noneExistStringType_2);
      expect(testInstance.hasIfNoneExist()).toBe(true);
      expect(testInstance.getIfNoneExist()).toEqual(noneExistStringType_2.getValue());

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      testInstance.setMethod(TestData.UNDEFINED_VALUE);
      testInstance.setUrl(TestData.UNDEFINED_VALUE);
      testInstance.setIfNoneMatch(TestData.UNDEFINED_VALUE);
      testInstance.setIfModifiedSince(TestData.UNDEFINED_VALUE);
      testInstance.setIfMatch(TestData.UNDEFINED_VALUE);
      testInstance.setIfNoneExist(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasMethodEnumType()).toBe(false);
      expect(testInstance.getMethodEnumType()).toBeNull();
      expect(testInstance.hasMethodElement()).toBe(false);
      expect(testInstance.getMethodElement()).toBeNull();
      expect(testInstance.hasMethod()).toBe(false);
      expect(testInstance.getMethod()).toBeNull();
      expect(testInstance.hasUrlElement()).toBe(false);
      expect(testInstance.getUrlElement()).toEqual(new UriType());
      expect(testInstance.hasUrl()).toBe(false);
      expect(testInstance.getUrl()).toBeNull();
      expect(testInstance.hasIfNoneMatchElement()).toBe(false);
      expect(testInstance.getIfNoneMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneMatch()).toBe(false);
      expect(testInstance.getIfNoneMatch()).toBeUndefined();
      expect(testInstance.hasIfModifiedSinceElement()).toBe(false);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(new InstantType());
      expect(testInstance.hasIfModifiedSince()).toBe(false);
      expect(testInstance.getIfModifiedSince()).toBeUndefined();
      expect(testInstance.hasIfMatchElement()).toBe(false);
      expect(testInstance.getIfMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfMatch()).toBe(false);
      expect(testInstance.getIfMatch()).toBeUndefined();
      expect(testInstance.hasIfNoneExistElement()).toBe(false);
      expect(testInstance.getIfNoneExistElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneExist()).toBe(false);
      expect(testInstance.getIfNoneExist()).toBeUndefined();
    });

    it('should be properly reset by modifying/adding all properties with PrimitiveType elements as appropriate', () => {
      const testInstance = new BundleEntryRequestComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setMethodElement(VALID_HTTP_VERB_GET_ENUMCODE as CodeType);
      testInstance.setUrlElement(TestData.VALID_URI_TYPE);
      testInstance.setIfNoneMatchElement(noneMatchStringType);
      testInstance.setIfModifiedSinceElement(TestData.VALID_INSTANT_TYPE);
      testInstance.setIfMatchElement(matchStringType);
      testInstance.setIfNoneExistElement(noneExistStringType);

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasMethodEnumType()).toBe(true);
      expect(testInstance.getMethodEnumType()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE);
      expect(testInstance.hasMethodElement()).toBe(true);
      expect(testInstance.getMethodElement()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE as CodeType);
      expect(testInstance.hasMethod()).toBe(true);
      expect(testInstance.getMethod()).toEqual(HttpVerbEnum.GET.code);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasIfNoneMatchElement()).toBe(true);
      expect(testInstance.getIfNoneMatchElement()).toEqual(noneMatchStringType);
      expect(testInstance.hasIfNoneMatch()).toBe(true);
      expect(testInstance.getIfNoneMatch()).toEqual(noneMatchStringType.getValue());
      expect(testInstance.hasIfModifiedSinceElement()).toBe(true);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasIfModifiedSince()).toBe(true);
      expect(testInstance.getIfModifiedSince()).toEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasIfMatchElement()).toBe(true);
      expect(testInstance.getIfMatchElement()).toEqual(matchStringType);
      expect(testInstance.hasIfMatch()).toBe(true);
      expect(testInstance.getIfMatch()).toEqual(matchStringType.getValue());
      expect(testInstance.hasIfNoneExistElement()).toBe(true);
      expect(testInstance.getIfNoneExistElement()).toEqual(noneExistStringType);
      expect(testInstance.hasIfNoneExist()).toBe(true);
      expect(testInstance.getIfNoneExist()).toEqual(noneExistStringType.getValue());

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setMethodElement(VALID_HTTP_VERB_HEAD_ENUMCODE as CodeType);
      testInstance.setUrlElement(TestData.VALID_URI_TYPE_2);
      testInstance.setIfNoneMatchElement(noneMatchStringType_2);
      testInstance.setIfModifiedSinceElement(TestData.VALID_INSTANT_TYPE_2);
      testInstance.setIfMatchElement(matchStringType_2);
      testInstance.setIfNoneExistElement(noneExistStringType_2);

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetElementProperties(testInstance);

      expect(testInstance.hasMethodEnumType()).toBe(true);
      expect(testInstance.getMethodEnumType()).toEqual(VALID_HTTP_VERB_HEAD_ENUMCODE);
      expect(testInstance.hasMethodElement()).toBe(true);
      expect(testInstance.getMethodElement()).toEqual(VALID_HTTP_VERB_HEAD_ENUMCODE as CodeType);
      expect(testInstance.hasMethod()).toBe(true);
      expect(testInstance.getMethod()).toEqual(HttpVerbEnum.HEAD.code);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE_2);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI_2);
      expect(testInstance.hasIfNoneMatchElement()).toBe(true);
      expect(testInstance.getIfNoneMatchElement()).toEqual(noneMatchStringType_2);
      expect(testInstance.hasIfNoneMatch()).toBe(true);
      expect(testInstance.getIfNoneMatch()).toEqual(noneMatchStringType_2.getValue());
      expect(testInstance.hasIfModifiedSinceElement()).toBe(true);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(TestData.VALID_INSTANT_TYPE_2);
      expect(testInstance.hasIfModifiedSince()).toBe(true);
      expect(testInstance.getIfModifiedSince()).toEqual(TestData.VALID_INSTANT_2);
      expect(testInstance.hasIfMatchElement()).toBe(true);
      expect(testInstance.getIfMatchElement()).toEqual(matchStringType_2);
      expect(testInstance.hasIfMatch()).toBe(true);
      expect(testInstance.getIfMatch()).toEqual(matchStringType_2.getValue());
      expect(testInstance.hasIfNoneExistElement()).toBe(true);
      expect(testInstance.getIfNoneExistElement()).toEqual(noneExistStringType_2);
      expect(testInstance.hasIfNoneExist()).toBe(true);
      expect(testInstance.getIfNoneExist()).toEqual(noneExistStringType_2.getValue());

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      testInstance.setMethodElement(TestData.UNDEFINED_VALUE);
      testInstance.setUrlElement(TestData.UNDEFINED_VALUE);
      testInstance.setIfNoneMatchElement(TestData.UNDEFINED_VALUE);
      testInstance.setIfModifiedSinceElement(TestData.UNDEFINED_VALUE);
      testInstance.setIfMatchElement(TestData.UNDEFINED_VALUE);
      testInstance.setIfNoneExistElement(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasMethodEnumType()).toBe(false);
      expect(testInstance.getMethodEnumType()).toBeNull();
      expect(testInstance.hasMethodElement()).toBe(false);
      expect(testInstance.getMethodElement()).toBeNull();
      expect(testInstance.hasMethod()).toBe(false);
      expect(testInstance.getMethod()).toBeNull();
      expect(testInstance.hasUrlElement()).toBe(false);
      expect(testInstance.getUrlElement()).toEqual(new UriType());
      expect(testInstance.hasUrl()).toBe(false);
      expect(testInstance.getUrl()).toBeNull();
      expect(testInstance.hasIfNoneMatchElement()).toBe(false);
      expect(testInstance.getIfNoneMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneMatch()).toBe(false);
      expect(testInstance.getIfNoneMatch()).toBeUndefined();
      expect(testInstance.hasIfModifiedSinceElement()).toBe(false);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(new InstantType());
      expect(testInstance.hasIfModifiedSince()).toBe(false);
      expect(testInstance.getIfModifiedSince()).toBeUndefined();
      expect(testInstance.hasIfMatchElement()).toBe(false);
      expect(testInstance.getIfMatchElement()).toEqual(new StringType());
      expect(testInstance.hasIfMatch()).toBe(false);
      expect(testInstance.getIfMatch()).toBeUndefined();
      expect(testInstance.hasIfNoneExistElement()).toBe(false);
      expect(testInstance.getIfNoneExistElement()).toEqual(new StringType());
      expect(testInstance.hasIfNoneExist()).toBe(false);
      expect(testInstance.getIfNoneExist()).toBeUndefined();
    });
  });

  describe('Serialization/Deserialization', () => {
    const altUrl = TestData.VALID_URI_TYPE.copy();
    altUrl.setId(TestData.DATATYPE_ID);
    altUrl.addExtension(DATATYPE_EXTENSION);

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
      method: 'GET',
      url: 'validUri',
      _url: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
      },
      ifNoneMatch: 'none match',
      ifModifiedSince: '2024-01-28T14:30:00.000Z',
      ifMatch: 'match',
      ifNoneExist: 'none exist',
    };

    it('should properly create serialized content', () => {
      const testInstance = new BundleEntryRequestComponent(VALID_HTTP_VERB_GET_ENUMCODE, altUrl);

      initializeBackboneElementProperties(testInstance, 2);

      testInstance.setIfNoneMatchElement(noneMatchStringType);
      testInstance.setIfModifiedSinceElement(TestData.VALID_INSTANT_TYPE);
      testInstance.setIfMatchElement(matchStringType);
      testInstance.setIfNoneExistElement(noneExistStringType);

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 2);

      expect(testInstance.hasMethodEnumType()).toBe(true);
      expect(testInstance.getMethodEnumType()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE);
      expect(testInstance.hasMethodElement()).toBe(true);
      expect(testInstance.getMethodElement()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE as CodeType);
      expect(testInstance.hasMethod()).toBe(true);
      expect(testInstance.getMethod()).toEqual(HttpVerbEnum.GET.code);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(altUrl);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasIfNoneMatchElement()).toBe(true);
      expect(testInstance.getIfNoneMatchElement()).toEqual(noneMatchStringType);
      expect(testInstance.hasIfNoneMatch()).toBe(true);
      expect(testInstance.getIfNoneMatch()).toEqual(noneMatchStringType.getValue());
      expect(testInstance.hasIfModifiedSinceElement()).toBe(true);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasIfModifiedSince()).toBe(true);
      expect(testInstance.getIfModifiedSince()).toEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasIfMatchElement()).toBe(true);
      expect(testInstance.getIfMatchElement()).toEqual(matchStringType);
      expect(testInstance.hasIfMatch()).toBe(true);
      expect(testInstance.getIfMatch()).toEqual(matchStringType.getValue());
      expect(testInstance.hasIfNoneExistElement()).toBe(true);
      expect(testInstance.getIfNoneExistElement()).toEqual(noneExistStringType);
      expect(testInstance.hasIfNoneExist()).toBe(true);
      expect(testInstance.getIfNoneExist()).toEqual(noneExistStringType.getValue());

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: BundleEntryRequestComponent | undefined;
      testInstance = BundleEntryRequestComponent.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = BundleEntryRequestComponent.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = BundleEntryRequestComponent.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should return parsed Bundle for valid json', () => {
      const testInstance: BundleEntryRequestComponent | undefined = BundleEntryRequestComponent.parse(VALID_JSON);

      expectBackboneElementBase(
        BundleEntryRequestComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryRequestComponent',
        'Bundle.entry.request',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
      expectInitializedElementProperties(testInstance, 2);

      expect(testInstance.hasMethodEnumType()).toBe(true);
      expect(testInstance.getMethodEnumType()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE);
      expect(testInstance.hasMethodElement()).toBe(true);
      expect(testInstance.getMethodElement()).toEqual(VALID_HTTP_VERB_GET_ENUMCODE as CodeType);
      expect(testInstance.hasMethod()).toBe(true);
      expect(testInstance.getMethod()).toEqual(HttpVerbEnum.GET.code);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(altUrl);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasIfNoneMatchElement()).toBe(true);
      expect(testInstance.getIfNoneMatchElement()).toEqual(noneMatchStringType);
      expect(testInstance.hasIfNoneMatch()).toBe(true);
      expect(testInstance.getIfNoneMatch()).toEqual(noneMatchStringType.getValue());
      expect(testInstance.hasIfModifiedSinceElement()).toBe(true);
      expect(testInstance.getIfModifiedSinceElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasIfModifiedSince()).toBe(true);
      expect(testInstance.getIfModifiedSince()).toEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasIfMatchElement()).toBe(true);
      expect(testInstance.getIfMatchElement()).toEqual(matchStringType);
      expect(testInstance.hasIfMatch()).toBe(true);
      expect(testInstance.getIfMatch()).toEqual(matchStringType.getValue());
      expect(testInstance.hasIfNoneExistElement()).toBe(true);
      expect(testInstance.getIfNoneExistElement()).toEqual(noneExistStringType);
      expect(testInstance.hasIfNoneExist()).toBe(true);
      expect(testInstance.getIfNoneExist()).toEqual(noneExistStringType.getValue());
    });
  });

  describe('Type Assertion Tests', () => {
    it('constructor: should throw appropriate errors when instantiated with an invalid required data elements', () => {
      let t = () => {
        // @ts-expect-error: Allow for testing
        new BundleEntryRequestComponent(VALID_MOCK_COMPLEX_DATATYPE, null);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.method; Provided code value is not an instance of CodeType`);

      t = () => {
        new BundleEntryRequestComponent(TestData.VALID_CODE_TYPE, null);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.method; Unknown HttpVerbEnum 'code' value 'testCodeType'`);

      t = () => {
        // @ts-expect-error: Allow for testing
        new BundleEntryRequestComponent(null, VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.url ([object Object])`);

      t = () => {
        // @ts-expect-error: Allow for testing
        new BundleEntryRequestComponent(null, TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.url; Provided value is not an instance of UriType.`);

      t = () => {
        new BundleEntryRequestComponent(null, TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.url (Invalid datatype)`);
    });

    it('method: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryRequestComponent();

      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setMethodEnumType(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.method; Provided type is not an instance of HttpVerbEnum.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setMethodElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.method; Provided value is not an instance of CodeType.`);

      t = () => {
        testInstance.setMethod(TestData.INVALID_CODE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.method ( Invalid code )`);

      t = () => {
        testInstance.setMethod(TestData.VALID_URI);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown HttpVerbEnum 'code' value 'validUri'`);
    });

    it('url: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryRequestComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setUrlElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.url; Provided value is not an instance of UriType.`);

      t = () => {
        testInstance.setUrl(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.url (Invalid datatype)`);
    });

    it('ifNoneMatch: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryRequestComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setIfNoneMatchElement(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.ifNoneMatch; Provided element is not an instance of StringType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setIfNoneMatch(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.ifNoneMatch (12345)`);
    });

    it('ifModifiedSince: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryRequestComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setIfModifiedSinceElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Bundle.entry.request.ifModifiedSince; Provided element is not an instance of InstantType.`,
      );

      t = () => {
        testInstance.setIfModifiedSince(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.ifModifiedSince (Invalid datatype)`);
    });

    it('ifMatch: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryRequestComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setIfMatchElement(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.ifMatch; Provided element is not an instance of StringType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setIfMatch(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.ifMatch (12345)`);
    });

    it('ifNoneExist: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryRequestComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setIfNoneExistElement(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.ifNoneExist; Provided element is not an instance of StringType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setIfNoneExist(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.request.ifNoneExist (12345)`);
    });
  });
});
