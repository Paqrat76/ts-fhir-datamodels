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
  FhirError,
  InstantType,
  InvalidCodeError,
  InvalidTypeError,
  IResource,
  JsonError,
  PrimitiveTypeError,
  UnsignedIntType,
} from '@paq-ts-fhir/fhir-core';
import { Bundle, BundleEntryComponent, BundleLinkComponent } from '../../../src/resources/Bundle';
import { Identifier, Signature } from '../../../src/complex-types/complex-datatypes';
import { BundleTypeEnum } from '../../../src/code-systems/BundleTypeEnum';
import {
  expectInitializedResourceProperties,
  expectResetResourceProperties,
  expectResourceBase,
  expectUndefinedResourceProperties,
  initializeResourceProperties,
  resetResourceProperties,
  undefineResourceProperties,
} from '../../ftest-utils';
import { TestData } from '../../ftest-data';
import {
  DATATYPE_EXTENSION,
  VALID_IDENTIFIER,
  VALID_IDENTIFIER_2,
  VALID_MOCK_COMPLEX_DATATYPE,
  VALID_SIGNATURE,
  VALID_SIGNATURE_2,
} from '../../ftest-mocks';

describe('Bundle', () => {
  const bundleTypeEnum = new BundleTypeEnum();
  const VALID_BUNDLETYPE_BATCH_ENUMCODE = new EnumCodeType(TestData.VALID_BUNDLETYPE_BATCH, bundleTypeEnum);
  const VALID_BUNDLETYPE_COLLECTION_ENUMCODE = new EnumCodeType(TestData.VALID_BUNDLETYPE_COLLECTION, bundleTypeEnum);
  const VALID_BUNDLE_TOTAL = 3;
  const VALID_BUNDLE_TOTAL_2 = 6;
  const VALID_BUNDLE_LINK_RELATION = 'contents';
  const VALID_BUNDLE_LINK_RELATION_2 = 'contents two';
  const VALID_BUNDLE_LINK_URL = 'validUrl';
  const VALID_BUNDLE_LINK_URL_2 = 'validUrl2';

  let bundleLinkComponent: BundleLinkComponent;
  let bundleLinkComponent_2: BundleLinkComponent;
  let bundleEntryComponent: BundleEntryComponent;
  let bundleEntryComponent_2: BundleEntryComponent;
  beforeAll(() => {
    bundleLinkComponent = new BundleLinkComponent(VALID_BUNDLE_LINK_RELATION, VALID_BUNDLE_LINK_URL);
    bundleLinkComponent_2 = new BundleLinkComponent(VALID_BUNDLE_LINK_RELATION_2, VALID_BUNDLE_LINK_URL_2);

    bundleEntryComponent = new BundleEntryComponent();
    bundleEntryComponent.setFullUrl(TestData.VALID_URI);
    bundleEntryComponent_2 = new BundleEntryComponent();
    bundleEntryComponent_2.setFullUrl(TestData.VALID_URI_2);
  });

  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new Bundle();

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasTypeEnumType()).toBe(false);
      expect(testInstance.getTypeEnumType()).toBeNull();
      expect(testInstance.hasTypeElement()).toBe(false);
      expect(testInstance.getTypeElement()).toBeNull();
      expect(testInstance.hasType()).toBe(false);
      expect(testInstance.getType()).toBeNull();
      expect(testInstance.hasTimestampElement()).toBe(false);
      expect(testInstance.getTimestampElement()).toEqual(new InstantType());
      expect(testInstance.hasTimestamp()).toBe(false);
      expect(testInstance.getTimestamp()).toBeUndefined();
      expect(testInstance.hasTotalElement()).toBe(false);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasTotal()).toBe(false);
      expect(testInstance.getTotal()).toBeUndefined();
      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasEntry()).toBe(false);
      expect(testInstance.getEntry()).toEqual([] as BundleEntryComponent[]);
      expect(testInstance.hasSignature()).toBe(false);
      expect(testInstance.getSignature()).toEqual(new Signature());
    });

    it('should be properly instantiated with required elements', () => {
      let testInstance = new Bundle(VALID_BUNDLETYPE_BATCH_ENUMCODE);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasTypeEnumType()).toBe(true);
      expect(testInstance.getTypeEnumType()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE);
      expect(testInstance.hasTypeElement()).toBe(true);
      expect(testInstance.getTypeElement()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE as CodeType);
      expect(testInstance.hasType()).toBe(true);
      expect(testInstance.getType()).toStrictEqual(TestData.VALID_BUNDLETYPE_BATCH);
      expect(testInstance.hasTimestampElement()).toBe(false);
      expect(testInstance.getTimestampElement()).toEqual(new InstantType());
      expect(testInstance.hasTimestamp()).toBe(false);
      expect(testInstance.getTimestamp()).toBeUndefined();
      expect(testInstance.hasTotalElement()).toBe(false);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasTotal()).toBe(false);
      expect(testInstance.getTotal()).toBeUndefined();
      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasEntry()).toBe(false);
      expect(testInstance.getEntry()).toEqual([] as BundleEntryComponent[]);
      expect(testInstance.hasSignature()).toBe(false);
      expect(testInstance.getSignature()).toEqual(new Signature());

      testInstance = new Bundle(VALID_BUNDLETYPE_BATCH_ENUMCODE as CodeType);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasTypeEnumType()).toBe(true);
      expect(testInstance.getTypeEnumType()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE);
      expect(testInstance.hasTypeElement()).toBe(true);
      expect(testInstance.getTypeElement()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE as CodeType);
      expect(testInstance.hasType()).toBe(true);
      expect(testInstance.getType()).toStrictEqual(TestData.VALID_BUNDLETYPE_BATCH);
      expect(testInstance.hasTimestampElement()).toBe(false);
      expect(testInstance.getTimestampElement()).toEqual(new InstantType());
      expect(testInstance.hasTimestamp()).toBe(false);
      expect(testInstance.getTimestamp()).toBeUndefined();
      expect(testInstance.hasTotalElement()).toBe(false);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasTotal()).toBe(false);
      expect(testInstance.getTotal()).toBeUndefined();
      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasEntry()).toBe(false);
      expect(testInstance.getEntry()).toEqual([] as BundleEntryComponent[]);
      expect(testInstance.hasSignature()).toBe(false);
      expect(testInstance.getSignature()).toEqual(new Signature());

      testInstance = new Bundle(TestData.VALID_BUNDLETYPE_BATCH);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasTypeEnumType()).toBe(true);
      expect(testInstance.getTypeEnumType()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE);
      expect(testInstance.hasTypeElement()).toBe(true);
      expect(testInstance.getTypeElement()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE as CodeType);
      expect(testInstance.hasType()).toBe(true);
      expect(testInstance.getType()).toStrictEqual(TestData.VALID_BUNDLETYPE_BATCH);
      expect(testInstance.hasTimestampElement()).toBe(false);
      expect(testInstance.getTimestampElement()).toEqual(new InstantType());
      expect(testInstance.hasTimestamp()).toBe(false);
      expect(testInstance.getTimestamp()).toBeUndefined();
      expect(testInstance.hasTotalElement()).toBe(false);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasTotal()).toBe(false);
      expect(testInstance.getTotal()).toBeUndefined();
      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasEntry()).toBe(false);
      expect(testInstance.getEntry()).toEqual([] as BundleEntryComponent[]);
      expect(testInstance.hasSignature()).toBe(false);
      expect(testInstance.getSignature()).toEqual(new Signature());
    });

    it('should properly copy()', () => {
      const testModel = new Bundle();

      initializeResourceProperties(testModel);

      testModel.setIdentifier(VALID_IDENTIFIER);
      testModel.setTypeEnumType(VALID_BUNDLETYPE_BATCH_ENUMCODE);
      testModel.setTimestamp(TestData.VALID_INSTANT);
      testModel.setTotal(VALID_BUNDLE_TOTAL);
      testModel.setLink([bundleLinkComponent]);
      testModel.setEntry([bundleEntryComponent]);
      testModel.setSignature(VALID_SIGNATURE);

      let testInstance = testModel.copy();

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(true);
      expect(testInstance.getIdentifier()).toEqual(VALID_IDENTIFIER);
      expect(testInstance.hasTypeEnumType()).toBe(true);
      expect(testInstance.getTypeEnumType()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE);
      expect(testInstance.hasTypeElement()).toBe(true);
      expect(testInstance.getTypeElement()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE as CodeType);
      expect(testInstance.hasType()).toBe(true);
      expect(testInstance.getType()).toStrictEqual(TestData.VALID_BUNDLETYPE_BATCH);
      expect(testInstance.hasTimestampElement()).toBe(true);
      expect(testInstance.getTimestampElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasTimestamp()).toBe(true);
      expect(testInstance.getTimestamp()).toStrictEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasTotalElement()).toBe(true);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType(VALID_BUNDLE_TOTAL));
      expect(testInstance.hasTotal()).toBe(true);
      expect(testInstance.getTotal()).toStrictEqual(VALID_BUNDLE_TOTAL);
      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent]);
      expect(testInstance.hasEntry()).toBe(true);
      expect(testInstance.getEntry()).toEqual([bundleEntryComponent]);
      expect(testInstance.hasSignature()).toBe(true);
      expect(testInstance.getSignature()).toEqual(VALID_SIGNATURE);

      // Reset to undefined

      undefineResourceProperties(testModel);

      testModel.setIdentifier(TestData.UNDEFINED_VALUE);
      testModel.setTypeEnumType(TestData.UNDEFINED_VALUE);
      testModel.setTimestamp(TestData.UNDEFINED_VALUE);
      testModel.setTotal(TestData.UNDEFINED_VALUE);
      testModel.setLink(TestData.UNDEFINED_VALUE);
      testModel.setEntry(TestData.UNDEFINED_VALUE);
      testModel.setSignature(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasTypeEnumType()).toBe(false);
      expect(testInstance.getTypeEnumType()).toBeNull();
      expect(testInstance.hasTypeElement()).toBe(false);
      expect(testInstance.getTypeElement()).toBeNull();
      expect(testInstance.hasType()).toBe(false);
      expect(testInstance.getType()).toBeNull();
      expect(testInstance.hasTimestampElement()).toBe(false);
      expect(testInstance.getTimestampElement()).toEqual(new InstantType());
      expect(testInstance.hasTimestamp()).toBe(false);
      expect(testInstance.getTimestamp()).toBeUndefined();
      expect(testInstance.hasTotalElement()).toBe(false);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasTotal()).toBe(false);
      expect(testInstance.getTotal()).toBeUndefined();
      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasEntry()).toBe(false);
      expect(testInstance.getEntry()).toEqual([] as BundleEntryComponent[]);
      expect(testInstance.hasSignature()).toBe(false);
      expect(testInstance.getSignature()).toEqual(new Signature());
    });

    it('should be properly reset by modifying/adding all properties with primitive elements as appropriate', () => {
      const testInstance = new Bundle();

      initializeResourceProperties(testInstance);

      testInstance.setIdentifier(VALID_IDENTIFIER);
      testInstance.setType(TestData.VALID_BUNDLETYPE_BATCH);
      testInstance.setTimestamp(TestData.VALID_INSTANT);
      testInstance.setTotal(VALID_BUNDLE_TOTAL);
      testInstance.setLink([bundleLinkComponent]);
      testInstance.setEntry([bundleEntryComponent]);
      testInstance.setSignature(VALID_SIGNATURE);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(true);
      expect(testInstance.getIdentifier()).toEqual(VALID_IDENTIFIER);
      expect(testInstance.hasTypeEnumType()).toBe(true);
      expect(testInstance.getTypeEnumType()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE);
      expect(testInstance.hasTypeElement()).toBe(true);
      expect(testInstance.getTypeElement()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE as CodeType);
      expect(testInstance.hasType()).toBe(true);
      expect(testInstance.getType()).toStrictEqual(TestData.VALID_BUNDLETYPE_BATCH);
      expect(testInstance.hasTimestampElement()).toBe(true);
      expect(testInstance.getTimestampElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasTimestamp()).toBe(true);
      expect(testInstance.getTimestamp()).toStrictEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasTotalElement()).toBe(true);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType(VALID_BUNDLE_TOTAL));
      expect(testInstance.hasTotal()).toBe(true);
      expect(testInstance.getTotal()).toStrictEqual(VALID_BUNDLE_TOTAL);
      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent]);
      expect(testInstance.hasEntry()).toBe(true);
      expect(testInstance.getEntry()).toEqual([bundleEntryComponent]);
      expect(testInstance.hasSignature()).toBe(true);
      expect(testInstance.getSignature()).toEqual(VALID_SIGNATURE);

      // Reset

      resetResourceProperties(testInstance);

      testInstance.setIdentifier(VALID_IDENTIFIER_2);
      testInstance.setType(TestData.VALID_BUNDLETYPE_COLLECTION);
      testInstance.setTimestamp(TestData.VALID_INSTANT_2);
      testInstance.setTotal(VALID_BUNDLE_TOTAL_2);
      testInstance.addLink(bundleLinkComponent_2);
      testInstance.addEntry(bundleEntryComponent_2);
      testInstance.setSignature(VALID_SIGNATURE_2);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(true);
      expect(testInstance.getIdentifier()).toEqual(VALID_IDENTIFIER_2);
      expect(testInstance.hasTypeEnumType()).toBe(true);
      expect(testInstance.getTypeEnumType()).toEqual(VALID_BUNDLETYPE_COLLECTION_ENUMCODE);
      expect(testInstance.hasTypeElement()).toBe(true);
      expect(testInstance.getTypeElement()).toEqual(VALID_BUNDLETYPE_COLLECTION_ENUMCODE as CodeType);
      expect(testInstance.hasType()).toBe(true);
      expect(testInstance.getType()).toStrictEqual(TestData.VALID_BUNDLETYPE_COLLECTION);
      expect(testInstance.hasTimestampElement()).toBe(true);
      expect(testInstance.getTimestampElement()).toEqual(TestData.VALID_INSTANT_TYPE_2);
      expect(testInstance.hasTimestamp()).toBe(true);
      expect(testInstance.getTimestamp()).toStrictEqual(TestData.VALID_INSTANT_2);
      expect(testInstance.hasTotalElement()).toBe(true);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType(VALID_BUNDLE_TOTAL_2));
      expect(testInstance.hasTotal()).toBe(true);
      expect(testInstance.getTotal()).toStrictEqual(VALID_BUNDLE_TOTAL_2);
      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent, bundleLinkComponent_2]);
      expect(testInstance.hasEntry()).toBe(true);
      expect(testInstance.getEntry()).toEqual([bundleEntryComponent, bundleEntryComponent_2]);
      expect(testInstance.hasSignature()).toBe(true);
      expect(testInstance.getSignature()).toEqual(VALID_SIGNATURE_2);

      // Reset to undefined

      undefineResourceProperties(testInstance);

      testInstance.setIdentifier(TestData.UNDEFINED_VALUE);
      testInstance.setType(TestData.UNDEFINED_VALUE);
      testInstance.setTimestamp(TestData.UNDEFINED_VALUE);
      testInstance.setTotal(TestData.UNDEFINED_VALUE);
      testInstance.setLink(TestData.UNDEFINED_VALUE);
      testInstance.setEntry(TestData.UNDEFINED_VALUE);
      testInstance.setSignature(TestData.UNDEFINED_VALUE);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasTypeEnumType()).toBe(false);
      expect(testInstance.getTypeEnumType()).toBeNull();
      expect(testInstance.hasTypeElement()).toBe(false);
      expect(testInstance.getTypeElement()).toBeNull();
      expect(testInstance.hasType()).toBe(false);
      expect(testInstance.getType()).toBeNull();
      expect(testInstance.hasTimestampElement()).toBe(false);
      expect(testInstance.getTimestampElement()).toEqual(new InstantType());
      expect(testInstance.hasTimestamp()).toBe(false);
      expect(testInstance.getTimestamp()).toBeUndefined();
      expect(testInstance.hasTotalElement()).toBe(false);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasTotal()).toBe(false);
      expect(testInstance.getTotal()).toBeUndefined();
      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasEntry()).toBe(false);
      expect(testInstance.getEntry()).toEqual([] as BundleEntryComponent[]);
      expect(testInstance.hasSignature()).toBe(false);
      expect(testInstance.getSignature()).toEqual(new Signature());
    });

    it('should be properly reset by modifying/adding all properties with PrimitiveType elements as appropriate', () => {
      const testInstance = new Bundle();

      initializeResourceProperties(testInstance);

      testInstance.setIdentifier(VALID_IDENTIFIER);
      testInstance.setTypeElement(VALID_BUNDLETYPE_BATCH_ENUMCODE as CodeType);
      testInstance.setTimestampElement(TestData.VALID_INSTANT_TYPE);
      testInstance.setTotalElement(new UnsignedIntType(VALID_BUNDLE_TOTAL));
      testInstance.setLink([bundleLinkComponent]);
      testInstance.setEntry([bundleEntryComponent]);
      testInstance.setSignature(VALID_SIGNATURE);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(true);
      expect(testInstance.getIdentifier()).toEqual(VALID_IDENTIFIER);
      expect(testInstance.hasTypeEnumType()).toBe(true);
      expect(testInstance.getTypeEnumType()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE);
      expect(testInstance.hasTypeElement()).toBe(true);
      expect(testInstance.getTypeElement()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE as CodeType);
      expect(testInstance.hasType()).toBe(true);
      expect(testInstance.getType()).toStrictEqual(TestData.VALID_BUNDLETYPE_BATCH);
      expect(testInstance.hasTimestampElement()).toBe(true);
      expect(testInstance.getTimestampElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasTimestamp()).toBe(true);
      expect(testInstance.getTimestamp()).toStrictEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasTotalElement()).toBe(true);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType(VALID_BUNDLE_TOTAL));
      expect(testInstance.hasTotal()).toBe(true);
      expect(testInstance.getTotal()).toStrictEqual(VALID_BUNDLE_TOTAL);
      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent]);
      expect(testInstance.hasEntry()).toBe(true);
      expect(testInstance.getEntry()).toEqual([bundleEntryComponent]);
      expect(testInstance.hasSignature()).toBe(true);
      expect(testInstance.getSignature()).toEqual(VALID_SIGNATURE);

      // Reset

      resetResourceProperties(testInstance);

      testInstance.setIdentifier(VALID_IDENTIFIER_2);
      testInstance.setTypeElement(VALID_BUNDLETYPE_COLLECTION_ENUMCODE as CodeType);
      testInstance.setTimestampElement(TestData.VALID_INSTANT_TYPE_2);
      testInstance.setTotalElement(new UnsignedIntType(VALID_BUNDLE_TOTAL_2));
      testInstance.addLink(bundleLinkComponent_2);
      testInstance.addEntry(bundleEntryComponent_2);
      testInstance.setSignature(VALID_SIGNATURE_2);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(true);
      expect(testInstance.getIdentifier()).toEqual(VALID_IDENTIFIER_2);
      expect(testInstance.hasTypeEnumType()).toBe(true);
      expect(testInstance.getTypeEnumType()).toEqual(VALID_BUNDLETYPE_COLLECTION_ENUMCODE);
      expect(testInstance.hasTypeElement()).toBe(true);
      expect(testInstance.getTypeElement()).toEqual(VALID_BUNDLETYPE_COLLECTION_ENUMCODE as CodeType);
      expect(testInstance.hasType()).toBe(true);
      expect(testInstance.getType()).toStrictEqual(TestData.VALID_BUNDLETYPE_COLLECTION);
      expect(testInstance.hasTimestampElement()).toBe(true);
      expect(testInstance.getTimestampElement()).toEqual(TestData.VALID_INSTANT_TYPE_2);
      expect(testInstance.hasTimestamp()).toBe(true);
      expect(testInstance.getTimestamp()).toStrictEqual(TestData.VALID_INSTANT_2);
      expect(testInstance.hasTotalElement()).toBe(true);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType(VALID_BUNDLE_TOTAL_2));
      expect(testInstance.hasTotal()).toBe(true);
      expect(testInstance.getTotal()).toStrictEqual(VALID_BUNDLE_TOTAL_2);
      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent, bundleLinkComponent_2]);
      expect(testInstance.hasEntry()).toBe(true);
      expect(testInstance.getEntry()).toEqual([bundleEntryComponent, bundleEntryComponent_2]);
      expect(testInstance.hasSignature()).toBe(true);
      expect(testInstance.getSignature()).toEqual(VALID_SIGNATURE_2);

      // Reset to undefined

      undefineResourceProperties(testInstance);

      testInstance.setIdentifier(TestData.UNDEFINED_VALUE);
      testInstance.setTypeElement(TestData.UNDEFINED_VALUE);
      testInstance.setTimestampElement(TestData.UNDEFINED_VALUE);
      testInstance.setTotalElement(TestData.UNDEFINED_VALUE);
      testInstance.setLink(TestData.UNDEFINED_VALUE);
      testInstance.setEntry(TestData.UNDEFINED_VALUE);
      testInstance.setSignature(TestData.UNDEFINED_VALUE);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasTypeEnumType()).toBe(false);
      expect(testInstance.getTypeEnumType()).toBeNull();
      expect(testInstance.hasTypeElement()).toBe(false);
      expect(testInstance.getTypeElement()).toBeNull();
      expect(testInstance.hasType()).toBe(false);
      expect(testInstance.getType()).toBeNull();
      expect(testInstance.hasTimestampElement()).toBe(false);
      expect(testInstance.getTimestampElement()).toEqual(new InstantType());
      expect(testInstance.hasTimestamp()).toBe(false);
      expect(testInstance.getTimestamp()).toBeUndefined();
      expect(testInstance.hasTotalElement()).toBe(false);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasTotal()).toBe(false);
      expect(testInstance.getTotal()).toBeUndefined();
      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasEntry()).toBe(false);
      expect(testInstance.getEntry()).toEqual([] as BundleEntryComponent[]);
      expect(testInstance.hasSignature()).toBe(false);
      expect(testInstance.getSignature()).toEqual(new Signature());
    });
  });

  describe('Serialization/Deserialization', () => {
    const altIdentifier = VALID_IDENTIFIER.copy();
    altIdentifier.setId(TestData.DATATYPE_ID);
    altIdentifier.addExtension(DATATYPE_EXTENSION);

    const VALID_JSON = {
      resourceType: 'Bundle',
      id: 'id12345',
      meta: {
        lastUpdated: '2024-01-28T14:30:00.000Z',
      },
      implicitRules: 'implicitRules',
      language: 'en-US',
      identifier: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
        system: 'http://sample/system/one',
        value: 'This is a valid string.',
      },
      type: 'batch',
      timestamp: '2024-01-28T14:30:00.000Z',
      total: 3,
      link: [
        {
          relation: 'contents',
          url: 'validUrl',
        },
      ],
      entry: [
        {
          fullUrl: 'validUri',
        },
      ],
      signature: {
        type: [
          {
            system: 'validUri',
            code: 'testCodeType',
            display: 'TestCodeType',
          },
        ],
        when: '2024-01-28T14:30:00.000Z',
        who: {
          reference: 'Organization/ORG-54321',
        },
      },
    };
    const INVALID_JSON = {
      bogusField: 'bogus value',
    };
    const INVALID_JSON_1 = {
      resourceType: 'Bundle',
      signature: {
        who: [
          {
            reference: 'Organization/ORG-54321',
          },
        ],
      },
    };
    const INVALID_JSON_2 = {
      resourceType: 'Bundle',
      total: true,
    };
    const INVALID_JSON_3 = {
      resourceType: 'Bundle',
      entry: {
        fullUrl: 'validUri',
      },
    };
    const INVALID_JSON_4 = {
      resourceType: 'Bundle',
      type: 'bogus',
    };
    const VALID_JSON_NO_FIELDS = {
      resourceType: 'Bundle',
      id: 'id12345',
      meta: {
        lastUpdated: '2024-01-28T14:30:00.000Z',
      },
      implicitRules: 'implicitRules',
      language: 'en-US',
    };
    const VALID_JSON_NULL_FIELDS = {
      resourceType: 'Bundle',
      id: 'id12345',
      meta: {
        lastUpdated: '2024-01-28T14:30:00.000Z',
      },
      implicitRules: 'implicitRules',
      language: 'en-US',
      identifier: null,
      type: null,
      timestamp: null,
      total: null,
      link: null,
      entry: null,
      signature: null,
      unexpectedField: 'should be ignored without error',
    };

    it('should properly create serialized content', () => {
      const testInstance = new Bundle();

      initializeResourceProperties(testInstance);

      testInstance.setIdentifier(altIdentifier);
      testInstance.setTypeEnumType(VALID_BUNDLETYPE_BATCH_ENUMCODE);
      testInstance.setTimestamp(TestData.VALID_INSTANT);
      testInstance.setTotal(VALID_BUNDLE_TOTAL);
      testInstance.setLink([bundleLinkComponent]);
      testInstance.setEntry([bundleEntryComponent]);
      testInstance.setSignature(VALID_SIGNATURE);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(true);
      expect(testInstance.getIdentifier()).toEqual(altIdentifier);
      expect(testInstance.hasTypeEnumType()).toBe(true);
      expect(testInstance.getTypeEnumType()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE);
      expect(testInstance.hasTypeElement()).toBe(true);
      expect(testInstance.getTypeElement()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE as CodeType);
      expect(testInstance.hasType()).toBe(true);
      expect(testInstance.getType()).toStrictEqual(TestData.VALID_BUNDLETYPE_BATCH);
      expect(testInstance.hasTimestampElement()).toBe(true);
      expect(testInstance.getTimestampElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasTimestamp()).toBe(true);
      expect(testInstance.getTimestamp()).toStrictEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasTotalElement()).toBe(true);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType(VALID_BUNDLE_TOTAL));
      expect(testInstance.hasTotal()).toBe(true);
      expect(testInstance.getTotal()).toStrictEqual(VALID_BUNDLE_TOTAL);
      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent]);
      expect(testInstance.hasEntry()).toBe(true);
      expect(testInstance.getEntry()).toEqual([bundleEntryComponent]);
      expect(testInstance.hasSignature()).toBe(true);
      expect(testInstance.getSignature()).toEqual(VALID_SIGNATURE);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should properly create serialized content with no field values', () => {
      const testInstance = new Bundle();

      initializeResourceProperties(testInstance);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasTypeEnumType()).toBe(false);
      expect(testInstance.getTypeEnumType()).toBeNull();
      expect(testInstance.hasTypeElement()).toBe(false);
      expect(testInstance.getTypeElement()).toBeNull();
      expect(testInstance.hasType()).toBe(false);
      expect(testInstance.getType()).toBeNull();
      expect(testInstance.hasTimestampElement()).toBe(false);
      expect(testInstance.getTimestampElement()).toEqual(new InstantType());
      expect(testInstance.hasTimestamp()).toBe(false);
      expect(testInstance.getTimestamp()).toBeUndefined();
      expect(testInstance.hasTotalElement()).toBe(false);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasTotal()).toBe(false);
      expect(testInstance.getTotal()).toBeUndefined();
      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasEntry()).toBe(false);
      expect(testInstance.getEntry()).toEqual([] as BundleEntryComponent[]);
      expect(testInstance.hasSignature()).toBe(false);
      expect(testInstance.getSignature()).toEqual(new Signature());

      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: Bundle | undefined;
      testInstance = Bundle.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = Bundle.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = Bundle.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should throw FhirError from parse() when JSON is missing required properties', () => {
      const t = () => {
        Bundle.parse(INVALID_JSON);
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow(`Invalid FHIR JSON: Provided JSON is missing the required 'resourceType' field`);
    });

    it('should throw Errors for invalid json types', () => {
      let t = () => {
        Bundle.parse('NOT AN OBJECT');
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`Bundle JSON is not a JSON object.`);

      t = () => {
        Bundle.parse(INVALID_JSON_1);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`Bundle.signature.who JSON is not a JSON object.`);

      t = () => {
        Bundle.parse(INVALID_JSON_2);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`Bundle.total is not a number.`);

      t = () => {
        Bundle.parse(INVALID_JSON_3);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`Bundle.entry is not a JSON array.`);

      t = () => {
        Bundle.parse(INVALID_JSON_4);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown BundleTypeEnum 'code' value 'bogus'`);
    });

    it('should return parsed Bundle for valid json', () => {
      const testInstance: Bundle | undefined = Bundle.parse(VALID_JSON);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(true);
      expect(testInstance.getIdentifier()).toEqual(altIdentifier);
      expect(testInstance.hasTypeEnumType()).toBe(true);
      expect(testInstance.getTypeEnumType()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE);
      expect(testInstance.hasTypeElement()).toBe(true);
      expect(testInstance.getTypeElement()).toEqual(VALID_BUNDLETYPE_BATCH_ENUMCODE as CodeType);
      expect(testInstance.hasType()).toBe(true);
      expect(testInstance.getType()).toStrictEqual(TestData.VALID_BUNDLETYPE_BATCH);
      expect(testInstance.hasTimestampElement()).toBe(true);
      expect(testInstance.getTimestampElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasTimestamp()).toBe(true);
      expect(testInstance.getTimestamp()).toStrictEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasTotalElement()).toBe(true);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType(VALID_BUNDLE_TOTAL));
      expect(testInstance.hasTotal()).toBe(true);
      expect(testInstance.getTotal()).toStrictEqual(VALID_BUNDLE_TOTAL);
      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent]);
      expect(testInstance.hasEntry()).toBe(true);
      expect(testInstance.getEntry()).toEqual([bundleEntryComponent]);
      expect(testInstance.hasSignature()).toBe(true);
      expect(testInstance.getSignature()).toEqual(VALID_SIGNATURE);
    });

    it('should return parsed Bundle for valid json with no field values', () => {
      const testInstance: Bundle | undefined = Bundle.parse(VALID_JSON_NO_FIELDS);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasTypeEnumType()).toBe(false);
      expect(testInstance.getTypeEnumType()).toBeNull();
      expect(testInstance.hasTypeElement()).toBe(false);
      expect(testInstance.getTypeElement()).toBeNull();
      expect(testInstance.hasType()).toBe(false);
      expect(testInstance.getType()).toBeNull();
      expect(testInstance.hasTimestampElement()).toBe(false);
      expect(testInstance.getTimestampElement()).toEqual(new InstantType());
      expect(testInstance.hasTimestamp()).toBe(false);
      expect(testInstance.getTimestamp()).toBeUndefined();
      expect(testInstance.hasTotalElement()).toBe(false);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasTotal()).toBe(false);
      expect(testInstance.getTotal()).toBeUndefined();
      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasEntry()).toBe(false);
      expect(testInstance.getEntry()).toEqual([] as BundleEntryComponent[]);
      expect(testInstance.hasSignature()).toBe(false);
      expect(testInstance.getSignature()).toEqual(new Signature());
    });

    it('should return parsed Bundle for valid json with null field values', () => {
      const testInstance: Bundle | undefined = Bundle.parse(VALID_JSON_NULL_FIELDS);

      expectResourceBase(Bundle as unknown as IResource, testInstance, 'Bundle');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasTypeEnumType()).toBe(false);
      expect(testInstance.getTypeEnumType()).toBeNull();
      expect(testInstance.hasTypeElement()).toBe(false);
      expect(testInstance.getTypeElement()).toBeNull();
      expect(testInstance.hasType()).toBe(false);
      expect(testInstance.getType()).toBeNull();
      expect(testInstance.hasTimestampElement()).toBe(false);
      expect(testInstance.getTimestampElement()).toEqual(new InstantType());
      expect(testInstance.hasTimestamp()).toBe(false);
      expect(testInstance.getTimestamp()).toBeUndefined();
      expect(testInstance.hasTotalElement()).toBe(false);
      expect(testInstance.getTotalElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasTotal()).toBe(false);
      expect(testInstance.getTotal()).toBeUndefined();
      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasEntry()).toBe(false);
      expect(testInstance.getEntry()).toEqual([] as BundleEntryComponent[]);
      expect(testInstance.hasSignature()).toBe(false);
      expect(testInstance.getSignature()).toEqual(new Signature());
    });
  });

  describe('Type Assertion Tests', () => {
    it('constructor: should throw appropriate errors when instantiated with an invalid required data elements', () => {
      let t = () => {
        // @ts-expect-error: Allow for testing
        new Bundle(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid Bundle.type; Provided code value is not an instance of CodeType`);

      t = () => {
        new Bundle(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid Bundle.type; Unknown BundleTypeEnum 'code' value 'Invalid datatype'`);

      t = () => {
        new Bundle(TestData.VALID_TASKCODE_APPROVE);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Invalid Bundle.type; Unknown BundleTypeEnum 'code' value 'approve'`);
    });

    it('identifier: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new Bundle();
      const t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setIdentifier(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.identifier; Provided element is not an instance of Identifier.`);
    });

    it('type: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new Bundle();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setTypeEnumType(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.type; Provided type is not an instance of BundleTypeEnum.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setTypeElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.type; Provided value is not an instance of CodeType.`);

      t = () => {
        testInstance.setType(TestData.VALID_URI);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown BundleTypeEnum 'code' value 'validUri'`);
    });

    it('timestamp: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new Bundle();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setTimestampElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.timestamp; Provided element is not an instance of InstantType.`);

      t = () => {
        testInstance.setTimestamp(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.timestamp (Invalid datatype)`);
    });

    it('total: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new Bundle();
      let t = () => {
        // @ts-expect-error: Allowing for testing
        testInstance.setTotalElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.total; Provided element is not an instance of UnsignedIntType.`);

      t = () => {
        // @ts-expect-error: Allowing for testing
        testInstance.setTotal(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.total (Invalid datatype)`);
    });

    it('link: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new Bundle();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setLink([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Bundle.link; Provided value array has an element that is not an instance of BundleLinkComponent.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addLink(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.link; Provided element is not an instance of BundleLinkComponent.`);
    });

    it('entry: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new Bundle();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setEntry([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Bundle.entry; Provided value array has an element that is not an instance of BundleEntryComponent.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addEntry(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry; Provided element is not an instance of BundleEntryComponent.`);
    });

    it('signature: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new Bundle();
      const t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setSignature(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.signature; Provided element is not an instance of Signature.`);
    });
  });
});
