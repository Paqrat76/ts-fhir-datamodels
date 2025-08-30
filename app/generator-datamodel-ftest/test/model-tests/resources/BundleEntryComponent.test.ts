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

import { EnumCodeType, IBackboneElement, InvalidTypeError, PrimitiveTypeError, UriType } from '@paq-ts-fhir/fhir-core';
import {
  BundleEntryComponent,
  BundleEntryRequestComponent,
  BundleEntryResponseComponent,
  BundleEntrySearchComponent,
  BundleLinkComponent,
} from '../../../src/resources/Bundle';
import { HttpVerbEnum } from '../../../src/code-systems/HttpVerbEnum';
import { SearchEntryModeEnum } from '../../../src/code-systems/SearchEntryModeEnum';
import { SimplePersonModel } from '../../../src/resources/SimplePersonModel';
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
import {
  DATATYPE_EXTENSION,
  VALID_ADDRESS,
  VALID_ADDRESS_2,
  VALID_HUMAN_NAME,
  VALID_HUMAN_NAME_2,
  VALID_IDENTIFIER,
  VALID_IDENTIFIER_2,
  VALID_MOCK_COMPLEX_DATATYPE,
} from '../../ftest-mocks';

describe('BundleEntryComponent', () => {
  const searchEntryModeEnum = new SearchEntryModeEnum();
  const VALID_SEARCH_MODE_INCLUDE_ENUMCODE = new EnumCodeType(SearchEntryModeEnum.INCLUDE.code, searchEntryModeEnum);
  const VALID_SEARCH_MODE_OUTCOME_ENUMCODE = new EnumCodeType(SearchEntryModeEnum.OUTCOME.code, searchEntryModeEnum);
  const httpVerbEnum = new HttpVerbEnum();
  const VALID_HTTP_VERB_GET_ENUMCODE = new EnumCodeType(HttpVerbEnum.GET.code, httpVerbEnum);
  const VALID_HTTP_VERB_HEAD_ENUMCODE = new EnumCodeType(HttpVerbEnum.HEAD.code, httpVerbEnum);

  let bundleLinkComponent: BundleLinkComponent;
  let bundleLinkComponent_2: BundleLinkComponent;
  let bundleEntrySearchComponent: BundleEntrySearchComponent;
  let bundleEntrySearchComponent_2: BundleEntrySearchComponent;
  let bundleEntryRequestComponent: BundleEntryRequestComponent;
  let bundleEntryRequestComponent_2: BundleEntryRequestComponent;
  let bundleEntryResponseComponent: BundleEntryResponseComponent;
  let bundleEntryResponseComponent_2: BundleEntryResponseComponent;
  let simplePersonModel: SimplePersonModel;
  let simplePersonModel_2: SimplePersonModel;
  beforeAll(() => {
    bundleLinkComponent = new BundleLinkComponent(TestData.VALID_STRING_TYPE, TestData.VALID_URI_TYPE);
    bundleLinkComponent_2 = new BundleLinkComponent(TestData.VALID_STRING_TYPE_2, TestData.VALID_URI_TYPE_2);
    bundleEntrySearchComponent = new BundleEntrySearchComponent();
    bundleEntrySearchComponent.setModeEnumType(VALID_SEARCH_MODE_INCLUDE_ENUMCODE);
    bundleEntrySearchComponent_2 = new BundleEntrySearchComponent();
    bundleEntrySearchComponent_2.setModeEnumType(VALID_SEARCH_MODE_OUTCOME_ENUMCODE);
    bundleEntryRequestComponent = new BundleEntryRequestComponent(
      VALID_HTTP_VERB_GET_ENUMCODE,
      TestData.VALID_URI_TYPE,
    );
    bundleEntryRequestComponent_2 = new BundleEntryRequestComponent(
      VALID_HTTP_VERB_HEAD_ENUMCODE,
      TestData.VALID_URI_TYPE_2,
    );
    bundleEntryResponseComponent = new BundleEntryResponseComponent(TestData.VALID_STRING_TYPE);
    bundleEntryResponseComponent_2 = new BundleEntryResponseComponent(TestData.VALID_STRING_TYPE_2);

    simplePersonModel = new SimplePersonModel();
    simplePersonModel.setId(TestData.VALID_ID);
    simplePersonModel.setIdentifier(VALID_IDENTIFIER);
    simplePersonModel.setName(VALID_HUMAN_NAME);
    simplePersonModel.setAddress([VALID_ADDRESS]);
    simplePersonModel_2 = new SimplePersonModel();
    simplePersonModel_2.setId(TestData.VALID_ID_2);
    simplePersonModel_2.setIdentifier(VALID_IDENTIFIER_2);
    simplePersonModel_2.setName(VALID_HUMAN_NAME_2);
    simplePersonModel_2.setAddress([VALID_ADDRESS_2]);
  });

  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new BundleEntryComponent();

      expectBackboneElementBase(
        BundleEntryComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryComponent',
        'Bundle.entry',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasFullUrlElement()).toBe(false);
      expect(testInstance.getFullUrlElement()).toEqual(new UriType());
      expect(testInstance.hasFullUrl()).toBe(false);
      expect(testInstance.getFullUrl()).toBeUndefined();
      expect(testInstance.hasResource()).toBe(false);
      expect(testInstance.getResource()).toBeUndefined();
      expect(testInstance.hasSearch()).toBe(false);
      expect(testInstance.getSearch()).toEqual(new BundleEntrySearchComponent());
      expect(testInstance.hasRequest()).toBe(false);
      expect(testInstance.getRequest()).toEqual(new BundleEntryRequestComponent());
      expect(testInstance.hasResponse()).toBe(false);
      expect(testInstance.getResponse()).toEqual(new BundleEntryResponseComponent());
    });

    it('should properly copy()', () => {
      const testModel = new BundleEntryComponent();

      initializeBackboneElementProperties(testModel, 1);

      testModel.setLink([bundleLinkComponent]);
      testModel.setFullUrlElement(TestData.VALID_URI_TYPE);
      testModel.setResource(simplePersonModel);
      testModel.setSearch(bundleEntrySearchComponent);
      testModel.setRequest(bundleEntryRequestComponent);
      testModel.setResponse(bundleEntryResponseComponent);

      let testInstance: BundleEntryComponent = testModel.copy();

      expectBackboneElementBase(
        BundleEntryComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryComponent',
        'Bundle.entry',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent]);
      expect(testInstance.hasFullUrlElement()).toBe(true);
      expect(testInstance.getFullUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasFullUrl()).toBe(true);
      expect(testInstance.getFullUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasResource()).toBe(true);
      expect(testInstance.getResource()).toEqual(simplePersonModel);
      expect(testInstance.hasSearch()).toBe(true);
      expect(testInstance.getSearch()).toEqual(bundleEntrySearchComponent);
      expect(testInstance.hasRequest()).toBe(true);
      expect(testInstance.getRequest()).toEqual(bundleEntryRequestComponent);
      expect(testInstance.hasResponse()).toBe(true);
      expect(testInstance.getResponse()).toEqual(bundleEntryResponseComponent);

      // Reset to undefined

      undefineBackboneElementProperties(testModel);

      testModel.setLink(TestData.UNDEFINED_VALUE);
      testModel.setFullUrlElement(TestData.UNDEFINED_VALUE);
      testModel.setResource(TestData.UNDEFINED_VALUE);
      testModel.setSearch(TestData.UNDEFINED_VALUE);
      testModel.setRequest(TestData.UNDEFINED_VALUE);
      testModel.setResponse(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectBackboneElementBase(
        BundleEntryComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryComponent',
        'Bundle.entry',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasFullUrlElement()).toBe(false);
      expect(testInstance.getFullUrlElement()).toEqual(new UriType());
      expect(testInstance.hasFullUrl()).toBe(false);
      expect(testInstance.getFullUrl()).toBeUndefined();
      expect(testInstance.hasResource()).toBe(false);
      expect(testInstance.getResource()).toBeUndefined();
      expect(testInstance.hasSearch()).toBe(false);
      expect(testInstance.getSearch()).toEqual(new BundleEntrySearchComponent());
      expect(testInstance.hasRequest()).toBe(false);
      expect(testInstance.getRequest()).toEqual(new BundleEntryRequestComponent());
      expect(testInstance.hasResponse()).toBe(false);
      expect(testInstance.getResponse()).toEqual(new BundleEntryResponseComponent());
    });

    it('should be properly reset by modifying/adding all properties', () => {
      const testInstance = new BundleEntryComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setLink([bundleLinkComponent]);
      testInstance.setFullUrlElement(TestData.VALID_URI_TYPE);
      testInstance.setResource(simplePersonModel);
      testInstance.setSearch(bundleEntrySearchComponent);
      testInstance.setRequest(bundleEntryRequestComponent);
      testInstance.setResponse(bundleEntryResponseComponent);

      expectBackboneElementBase(
        BundleEntryComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryComponent',
        'Bundle.entry',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent]);
      expect(testInstance.hasFullUrlElement()).toBe(true);
      expect(testInstance.getFullUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasFullUrl()).toBe(true);
      expect(testInstance.getFullUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasResource()).toBe(true);
      expect(testInstance.getResource()).toEqual(simplePersonModel);
      expect(testInstance.hasSearch()).toBe(true);
      expect(testInstance.getSearch()).toEqual(bundleEntrySearchComponent);
      expect(testInstance.hasRequest()).toBe(true);
      expect(testInstance.getRequest()).toEqual(bundleEntryRequestComponent);
      expect(testInstance.hasResponse()).toBe(true);
      expect(testInstance.getResponse()).toEqual(bundleEntryResponseComponent);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.addLink(bundleLinkComponent_2);
      testInstance.setFullUrl(TestData.VALID_URI_2);
      testInstance.setResource(simplePersonModel_2);
      testInstance.setSearch(bundleEntrySearchComponent_2);
      testInstance.setRequest(bundleEntryRequestComponent_2);
      testInstance.setResponse(bundleEntryResponseComponent_2);

      expectBackboneElementBase(
        BundleEntryComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryComponent',
        'Bundle.entry',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetElementProperties(testInstance);

      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent, bundleLinkComponent_2]);
      expect(testInstance.hasFullUrlElement()).toBe(true);
      expect(testInstance.getFullUrlElement()).toEqual(TestData.VALID_URI_TYPE_2);
      expect(testInstance.hasFullUrl()).toBe(true);
      expect(testInstance.getFullUrl()).toEqual(TestData.VALID_URI_2);
      expect(testInstance.hasResource()).toBe(true);
      expect(testInstance.getResource()).toEqual(simplePersonModel_2);
      expect(testInstance.hasSearch()).toBe(true);
      expect(testInstance.getSearch()).toEqual(bundleEntrySearchComponent_2);
      expect(testInstance.hasRequest()).toBe(true);
      expect(testInstance.getRequest()).toEqual(bundleEntryRequestComponent_2);
      expect(testInstance.hasResponse()).toBe(true);
      expect(testInstance.getResponse()).toEqual(bundleEntryResponseComponent_2);

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      testInstance.setLink(TestData.UNDEFINED_VALUE);
      testInstance.setFullUrl(TestData.UNDEFINED_VALUE);
      testInstance.setResource(TestData.UNDEFINED_VALUE);
      testInstance.setSearch(TestData.UNDEFINED_VALUE);
      testInstance.setRequest(TestData.UNDEFINED_VALUE);
      testInstance.setResponse(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase(
        BundleEntryComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryComponent',
        'Bundle.entry',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasLink()).toBe(false);
      expect(testInstance.getLink()).toEqual([] as BundleLinkComponent[]);
      expect(testInstance.hasFullUrlElement()).toBe(false);
      expect(testInstance.getFullUrlElement()).toEqual(new UriType());
      expect(testInstance.hasFullUrl()).toBe(false);
      expect(testInstance.getFullUrl()).toBeUndefined();
      expect(testInstance.hasResource()).toBe(false);
      expect(testInstance.getResource()).toBeUndefined();
      expect(testInstance.hasSearch()).toBe(false);
      expect(testInstance.getSearch()).toEqual(new BundleEntrySearchComponent());
      expect(testInstance.hasRequest()).toBe(false);
      expect(testInstance.getRequest()).toEqual(new BundleEntryRequestComponent());
      expect(testInstance.hasResponse()).toBe(false);
      expect(testInstance.getResponse()).toEqual(new BundleEntryResponseComponent());
    });
  });

  describe('Serialization/Deserialization', () => {
    const altFullUrl = TestData.VALID_URI_TYPE.copy();
    altFullUrl.setId(TestData.DATATYPE_ID);
    altFullUrl.addExtension(DATATYPE_EXTENSION);

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
      link: [
        {
          relation: 'This is a valid string.',
          url: 'validUri',
        },
      ],
      fullUrl: 'validUri',
      _fullUrl: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
      },
      resource: {
        resourceType: 'SimplePersonModel',
        id: 'id12345',
        identifier: {
          system: 'http://sample/system/one',
          value: 'This is a valid string.',
        },
        name: {
          family: 'Surname',
          given: ['First', 'Middle'],
          prefix: ['Mr.'],
          suffix: ['Sr.'],
        },
        address: [
          {
            use: 'home',
            type: 'postal',
            line: ['1234 Main ST', 'APT 15A'],
            city: 'Nashua',
            state: 'NH',
            postalCode: '03064',
            country: 'US',
          },
        ],
      },
      search: {
        mode: 'include',
      },
      request: {
        method: 'GET',
        url: 'validUri',
      },
      response: {
        status: 'This is a valid string.',
      },
    };

    it('should properly create serialized content', () => {
      const testInstance = new BundleEntryComponent();

      initializeBackboneElementProperties(testInstance, 2);

      testInstance.setLink([bundleLinkComponent]);
      testInstance.setFullUrlElement(altFullUrl);
      testInstance.setResource(simplePersonModel);
      testInstance.setSearch(bundleEntrySearchComponent);
      testInstance.setRequest(bundleEntryRequestComponent);
      testInstance.setResponse(bundleEntryResponseComponent);

      expectBackboneElementBase(
        BundleEntryComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryComponent',
        'Bundle.entry',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expectInitializedElementProperties(testInstance, 2);

      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent]);
      expect(testInstance.hasFullUrlElement()).toBe(true);
      expect(testInstance.getFullUrlElement()).toEqual(altFullUrl);
      expect(testInstance.hasFullUrl()).toBe(true);
      expect(testInstance.getFullUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasResource()).toBe(true);
      expect(testInstance.getResource()).toEqual(simplePersonModel);
      expect(testInstance.hasSearch()).toBe(true);
      expect(testInstance.getSearch()).toEqual(bundleEntrySearchComponent);
      expect(testInstance.hasRequest()).toBe(true);
      expect(testInstance.getRequest()).toEqual(bundleEntryRequestComponent);
      expect(testInstance.hasResponse()).toBe(true);
      expect(testInstance.getResponse()).toEqual(bundleEntryResponseComponent);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: BundleEntryComponent | undefined;
      testInstance = BundleEntryComponent.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = BundleEntryComponent.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = BundleEntryComponent.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should return parsed Bundle for valid json', () => {
      const testInstance = BundleEntryComponent.parse(VALID_JSON);

      expectBackboneElementBase(
        BundleEntryComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntryComponent',
        'Bundle.entry',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
      expectInitializedElementProperties(testInstance, 2);

      expect(testInstance.hasLink()).toBe(true);
      expect(testInstance.getLink()).toEqual([bundleLinkComponent]);
      expect(testInstance.hasFullUrlElement()).toBe(true);
      expect(testInstance.getFullUrlElement()).toEqual(altFullUrl);
      expect(testInstance.hasFullUrl()).toBe(true);
      expect(testInstance.getFullUrl()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasResource()).toBe(true);
      expect(testInstance.getResource()).toEqual(simplePersonModel);
      expect(testInstance.hasSearch()).toBe(true);
      expect(testInstance.getSearch()).toEqual(bundleEntrySearchComponent);
      expect(testInstance.hasRequest()).toBe(true);
      expect(testInstance.getRequest()).toEqual(bundleEntryRequestComponent);
      expect(testInstance.hasResponse()).toBe(true);
      expect(testInstance.getResponse()).toEqual(bundleEntryResponseComponent);
    });
  });

  describe('Type Assertion Tests', () => {
    it('link: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setLink([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Bundle.entry.link; Provided value array has an element that is not an instance of BundleLinkComponent.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addLink(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.link; Provided element is not an instance of BundleLinkComponent.`);
    });

    it('fullUrl: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setFullUrlElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.fullUrl; Provided element is not an instance of UriType.`);

      t = () => {
        testInstance.setFullUrl(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.fullUrl (Invalid datatype)`);
    });

    it('resource: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryComponent();
      const t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setResource(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.resource; Provided element is not an instance of Resource.`);
    });

    it('search: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryComponent();
      const t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setSearch(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Bundle.entry.search; Provided element is not an instance of BundleEntrySearchComponent.`,
      );
    });

    it('request: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryComponent();
      const t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setRequest(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Bundle.entry.request; Provided element is not an instance of BundleEntryRequestComponent.`,
      );
    });

    it('response: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryComponent();
      const t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setResponse(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Bundle.entry.response; Provided element is not an instance of BundleEntryResponseComponent.`,
      );
    });
  });
});
