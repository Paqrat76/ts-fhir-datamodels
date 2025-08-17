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
import { FhirError, IBackboneElement, InvalidTypeError, PrimitiveTypeError } from '@paq-ts-fhir/fhir-core';
import { BundleLinkComponent } from '../../../src/resources/Bundle';
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
import { DATATYPE_EXTENSION } from '../../ftest-mocks';

describe('BundleLinkComponent', () => {
  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new BundleLinkComponent();

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(true);
      const t = () => {
        testInstance.toJSON();
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow('The following required properties do not exist: Bundle.link.relation, Bundle.link.url');
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasRelationElement()).toBe(false);
      expect(testInstance.getRelationElement()).toBeNull();
      expect(testInstance.hasRelation()).toBe(false);
      expect(testInstance.getRelation()).toBeNull();
      expect(testInstance.hasUrlElement()).toBe(false);
      expect(testInstance.getUrlElement()).toBeNull();
      expect(testInstance.hasUrl()).toBe(false);
      expect(testInstance.getUrl()).toBeNull();
    });

    it('should be properly instantiated with required elements', () => {
      let testInstance = new BundleLinkComponent(TestData.VALID_STRING_TYPE, TestData.VALID_URI_TYPE);

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);

      testInstance = new BundleLinkComponent(TestData.VALID_STRING, TestData.VALID_URI);

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);
    });

    it('should properly copy()', () => {
      const testModel = new BundleLinkComponent(TestData.VALID_STRING_TYPE, TestData.VALID_URI_TYPE);

      initializeBackboneElementProperties(testModel, 1);

      let testInstance: BundleLinkComponent = testModel.copy();

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);

      // Reset to undefined

      undefineBackboneElementProperties(testModel);

      let t = () => {
        testModel.setRelation(TestData.UNDEFINED_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('Bundle.link.relation is required');
      t = () => {
        testModel.setUrl(TestData.UNDEFINED_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('Bundle.link.url is required');

      testInstance = testModel.copy();

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);
    });

    it('should be properly reset by modifying/adding all properties with primitive elements as appropriate', () => {
      const testInstance = new BundleLinkComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setRelation(TestData.VALID_STRING);
      testInstance.setUrl(TestData.VALID_URI);

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setRelation(TestData.VALID_STRING_2);
      testInstance.setUrl(TestData.VALID_URI_2);

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetElementProperties(testInstance);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(TestData.VALID_STRING_TYPE_2);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING_2);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE_2);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI_2);

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      let t = () => {
        testInstance.setRelation(TestData.UNDEFINED_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('Bundle.link.relation is required');
      t = () => {
        testInstance.setUrl(TestData.UNDEFINED_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('Bundle.link.url is required');

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(TestData.VALID_STRING_TYPE_2);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING_2);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE_2);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI_2);
    });

    it('should be properly reset by modifying/adding all properties with PrimitiveType elements as appropriate', () => {
      const testInstance = new BundleLinkComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setRelationElement(TestData.VALID_STRING_TYPE);
      testInstance.setUrlElement(TestData.VALID_URI_TYPE);

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setRelationElement(TestData.VALID_STRING_TYPE_2);
      testInstance.setUrlElement(TestData.VALID_URI_TYPE_2);

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetElementProperties(testInstance);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(TestData.VALID_STRING_TYPE_2);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING_2);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE_2);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI_2);

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      let t = () => {
        testInstance.setRelation(TestData.UNDEFINED_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('Bundle.link.relation is required');
      t = () => {
        testInstance.setUrl(TestData.UNDEFINED_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('Bundle.link.url is required');

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(TestData.VALID_STRING_TYPE_2);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING_2);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE_2);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI_2);
    });
  });

  describe('Serialization/Deserialization', () => {
    const altRelation = TestData.VALID_STRING_TYPE.copy();
    altRelation.setId(TestData.DATATYPE_ID);
    altRelation.addExtension(DATATYPE_EXTENSION);

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
      relation: 'This is a valid string.',
      _relation: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
      },
      url: 'validUri',
    };
    const INVALID_JSON = {
      bogusField: 'bogus value',
    };

    it('should throw FhirError from toJSON() when instantiated with missing required properties', () => {
      const testInstance = new BundleLinkComponent();
      const t = () => {
        testInstance.toJSON();
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow(`The following required properties do not exist: Bundle.link.relation, Bundle.link.url`);
    });

    it('should properly create serialized content', () => {
      const testInstance = new BundleLinkComponent(altRelation, TestData.VALID_URI_TYPE);

      initializeBackboneElementProperties(testInstance, 2);

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expectInitializedElementProperties(testInstance, 2);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(altRelation);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: BundleLinkComponent | undefined = undefined;
      testInstance = BundleLinkComponent.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = BundleLinkComponent.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = BundleLinkComponent.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should throw FhirError from parse() when JSON is missing required properties', () => {
      const t = () => {
        BundleLinkComponent.parse(INVALID_JSON);
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow(
        `The following required properties must be included in the provided JSON: BundleLinkComponent.relation, BundleLinkComponent.url`,
      );
    });

    it('should return parsed Bundle for valid json', () => {
      const testInstance: BundleLinkComponent | undefined = BundleLinkComponent.parse(VALID_JSON);

      expectBackboneElementBase(
        BundleLinkComponent as unknown as IBackboneElement,
        testInstance,
        'BundleLinkComponent',
        'Bundle.link',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
      expectInitializedElementProperties(testInstance, 2);

      expect(testInstance.hasRelationElement()).toBe(true);
      expect(testInstance.getRelationElement()).toEqual(altRelation);
      expect(testInstance.hasRelation()).toBe(true);
      expect(testInstance.getRelation()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasUrlElement()).toBe(true);
      expect(testInstance.getUrlElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasUrl()).toBe(true);
      expect(testInstance.getUrl()).toEqual(TestData.VALID_URI);
    });
  });

  describe('Type Assertion Tests', () => {
    it('constructor: should throw appropriate errors when instantiated with an invalid required data elements', () => {
      let t = () => {
        new BundleLinkComponent(TestData.INVALID_STRING_TYPE, null);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.link.relation; Provided value is not an instance of StringType.`);

      t = () => {
        new BundleLinkComponent(TestData.INVALID_STRING_TYPE_VALUE, null);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.link.relation (12345)`);

      t = () => {
        new BundleLinkComponent(null, TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.link.url; Provided value is not an instance of UriType.`);

      t = () => {
        new BundleLinkComponent(null, TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.link.url (Invalid datatype)`);
    });

    it('relation: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleLinkComponent();
      let t = () => {
        testInstance.setRelationElement(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.link.relation; Provided value is not an instance of StringType.`);

      t = () => {
        testInstance.setRelation(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.link.relation (12345)`);
    });

    it('url: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleLinkComponent();
      let t = () => {
        testInstance.setUrlElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.link.url; Provided value is not an instance of UriType.`);

      t = () => {
        testInstance.setUrl(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.link.url (Invalid datatype)`);
    });
  });
});
