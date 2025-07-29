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
  FhirError,
  InstantType,
  InvalidTypeError,
  PrimitiveTypeError,
  StringType,
  UriType,
} from '@paq-ts-fhir/fhir-core';
import { BundleEntryResponseComponent } from '../../../src/resources/Bundle';
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

describe('BundleEntryResponseComponent', () => {
  const HTTP_STATUS_404 = '404 Not Found';
  const HTTP_STATUS_404_TYPE = new StringType(HTTP_STATUS_404);
  const HTTP_STATUS_400 = '400 Bad Request';
  const HTTP_STATUS_400_TYPE = new StringType(HTTP_STATUS_400);

  const OUTCOME_SIMPLE_PERSON_MODEL = new SimplePersonModel();
  OUTCOME_SIMPLE_PERSON_MODEL.setId(TestData.VALID_ID);
  OUTCOME_SIMPLE_PERSON_MODEL.setIdentifier(VALID_IDENTIFIER);
  OUTCOME_SIMPLE_PERSON_MODEL.setName(VALID_HUMAN_NAME);
  OUTCOME_SIMPLE_PERSON_MODEL.setAddress([VALID_ADDRESS]);
  const OUTCOME_SIMPLE_PERSON_MODEL_2 = new SimplePersonModel();
  OUTCOME_SIMPLE_PERSON_MODEL_2.setId(TestData.VALID_ID_2);
  OUTCOME_SIMPLE_PERSON_MODEL_2.setIdentifier(VALID_IDENTIFIER_2);
  OUTCOME_SIMPLE_PERSON_MODEL_2.setName(VALID_HUMAN_NAME_2);
  OUTCOME_SIMPLE_PERSON_MODEL_2.setAddress([VALID_ADDRESS_2]);

  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new BundleEntryResponseComponent();

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(true);
      const t = () => {
        testInstance.toJSON();
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow('The following required properties do not exist: Bundle.entry.response.status');
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasStatusElement()).toBe(false);
      expect(testInstance.getStatusElement()).toBeNull();
      expect(testInstance.hasStatus()).toBe(false);
      expect(testInstance.getStatus()).toBeNull();
      expect(testInstance.hasLocationElement()).toBe(false);
      expect(testInstance.getLocationElement()).toEqual(new UriType());
      expect(testInstance.hasLocation()).toBe(false);
      expect(testInstance.getLocation()).toBeUndefined();
      expect(testInstance.hasEtagElement()).toBe(false);
      expect(testInstance.getEtagElement()).toEqual(new StringType());
      expect(testInstance.hasEtag()).toBe(false);
      expect(testInstance.getEtag()).toBeUndefined();
      expect(testInstance.hasLastModifiedElement()).toBe(false);
      expect(testInstance.getLastModifiedElement()).toEqual(new InstantType());
      expect(testInstance.hasLastModified()).toBe(false);
      expect(testInstance.getLastModified()).toBeUndefined();
      expect(testInstance.hasOutcome()).toBe(false);
      expect(testInstance.getOutcome()).toBeUndefined();
    });

    it('should be properly instantiated with required elements', () => {
      let testInstance = new BundleEntryResponseComponent(HTTP_STATUS_404_TYPE);

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_404_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_404);
      expect(testInstance.hasLocationElement()).toBe(false);
      expect(testInstance.getLocationElement()).toEqual(new UriType());
      expect(testInstance.hasLocation()).toBe(false);
      expect(testInstance.getLocation()).toBeUndefined();
      expect(testInstance.hasEtagElement()).toBe(false);
      expect(testInstance.getEtagElement()).toEqual(new StringType());
      expect(testInstance.hasEtag()).toBe(false);
      expect(testInstance.getEtag()).toBeUndefined();
      expect(testInstance.hasLastModifiedElement()).toBe(false);
      expect(testInstance.getLastModifiedElement()).toEqual(new InstantType());
      expect(testInstance.hasLastModified()).toBe(false);
      expect(testInstance.getLastModified()).toBeUndefined();
      expect(testInstance.hasOutcome()).toBe(false);
      expect(testInstance.getOutcome()).toBeUndefined();

      testInstance = new BundleEntryResponseComponent(HTTP_STATUS_404);

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_404_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_404);
      expect(testInstance.hasLocationElement()).toBe(false);
      expect(testInstance.getLocationElement()).toEqual(new UriType());
      expect(testInstance.hasLocation()).toBe(false);
      expect(testInstance.getLocation()).toBeUndefined();
      expect(testInstance.hasEtagElement()).toBe(false);
      expect(testInstance.getEtagElement()).toEqual(new StringType());
      expect(testInstance.hasEtag()).toBe(false);
      expect(testInstance.getEtag()).toBeUndefined();
      expect(testInstance.hasLastModifiedElement()).toBe(false);
      expect(testInstance.getLastModifiedElement()).toEqual(new InstantType());
      expect(testInstance.hasLastModified()).toBe(false);
      expect(testInstance.getLastModified()).toBeUndefined();
      expect(testInstance.hasOutcome()).toBe(false);
    });

    it('should properly copy()', () => {
      const testModel = new BundleEntryResponseComponent();

      initializeBackboneElementProperties(testModel, 1);

      testModel.setStatusElement(HTTP_STATUS_404_TYPE);
      testModel.setLocationElement(TestData.VALID_URI_TYPE);
      testModel.setEtagElement(TestData.VALID_STRING_TYPE);
      testModel.setLastModifiedElement(TestData.VALID_INSTANT_TYPE);
      testModel.setOutcome(OUTCOME_SIMPLE_PERSON_MODEL);

      let testInstance: BundleEntryResponseComponent = testModel.copy();

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_404_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_404);
      expect(testInstance.hasLocationElement()).toBe(true);
      expect(testInstance.getLocationElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasLocation()).toBe(true);
      expect(testInstance.getLocation()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasEtagElement()).toBe(true);
      expect(testInstance.getEtagElement()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasEtag()).toBe(true);
      expect(testInstance.getEtag()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasLastModifiedElement()).toBe(true);
      expect(testInstance.getLastModifiedElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasLastModified()).toBe(true);
      expect(testInstance.getLastModified()).toEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasOutcome()).toBe(true);
      expect(testInstance.getOutcome()).toEqual(OUTCOME_SIMPLE_PERSON_MODEL);

      // Reset to undefined

      undefineBackboneElementProperties(testModel);

      const t = () => {
        testModel.setStatusElement(TestData.UNDEFINED_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('Bundle.entry.response.status is required');

      testModel.setLocationElement(TestData.UNDEFINED_VALUE);
      testModel.setEtagElement(TestData.UNDEFINED_VALUE);
      testModel.setLastModifiedElement(TestData.UNDEFINED_VALUE);
      testModel.setOutcome(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_404_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_404);
      expect(testInstance.hasLocationElement()).toBe(false);
      expect(testInstance.getLocationElement()).toEqual(new UriType());
      expect(testInstance.hasLocation()).toBe(false);
      expect(testInstance.getLocation()).toBeUndefined();
      expect(testInstance.hasEtagElement()).toBe(false);
      expect(testInstance.getEtagElement()).toEqual(new StringType());
      expect(testInstance.hasEtag()).toBe(false);
      expect(testInstance.getEtag()).toBeUndefined();
      expect(testInstance.hasLastModifiedElement()).toBe(false);
      expect(testInstance.getLastModifiedElement()).toEqual(new InstantType());
      expect(testInstance.hasLastModified()).toBe(false);
      expect(testInstance.getLastModified()).toBeUndefined();
      expect(testInstance.hasOutcome()).toBe(false);
      expect(testInstance.getOutcome()).toBeUndefined();
    });

    it('should be properly reset by modifying/adding all properties with primitive elements as appropriate', () => {
      const testInstance = new BundleEntryResponseComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setStatus(HTTP_STATUS_404);
      testInstance.setLocation(TestData.VALID_URI);
      testInstance.setEtag(TestData.VALID_STRING);
      testInstance.setLastModified(TestData.VALID_INSTANT);
      testInstance.setOutcome(OUTCOME_SIMPLE_PERSON_MODEL);

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_404_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_404);
      expect(testInstance.hasLocationElement()).toBe(true);
      expect(testInstance.getLocationElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasLocation()).toBe(true);
      expect(testInstance.getLocation()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasEtagElement()).toBe(true);
      expect(testInstance.getEtagElement()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasEtag()).toBe(true);
      expect(testInstance.getEtag()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasLastModifiedElement()).toBe(true);
      expect(testInstance.getLastModifiedElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasLastModified()).toBe(true);
      expect(testInstance.getLastModified()).toEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasOutcome()).toBe(true);
      expect(testInstance.getOutcome()).toEqual(OUTCOME_SIMPLE_PERSON_MODEL);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setStatus(HTTP_STATUS_400);
      testInstance.setLocation(TestData.VALID_URI_2);
      testInstance.setEtag(TestData.VALID_STRING_2);
      testInstance.setLastModified(TestData.VALID_INSTANT_2);
      testInstance.setOutcome(OUTCOME_SIMPLE_PERSON_MODEL_2);

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetElementProperties(testInstance);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_400_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_400);
      expect(testInstance.hasLocationElement()).toBe(true);
      expect(testInstance.getLocationElement()).toEqual(TestData.VALID_URI_TYPE_2);
      expect(testInstance.hasLocation()).toBe(true);
      expect(testInstance.getLocation()).toEqual(TestData.VALID_URI_2);
      expect(testInstance.hasEtagElement()).toBe(true);
      expect(testInstance.getEtagElement()).toEqual(TestData.VALID_STRING_TYPE_2);
      expect(testInstance.hasEtag()).toBe(true);
      expect(testInstance.getEtag()).toEqual(TestData.VALID_STRING_2);
      expect(testInstance.hasLastModifiedElement()).toBe(true);
      expect(testInstance.getLastModifiedElement()).toEqual(TestData.VALID_INSTANT_TYPE_2);
      expect(testInstance.hasLastModified()).toBe(true);
      expect(testInstance.getLastModified()).toEqual(TestData.VALID_INSTANT_2);
      expect(testInstance.hasOutcome()).toBe(true);
      expect(testInstance.getOutcome()).toEqual(OUTCOME_SIMPLE_PERSON_MODEL_2);

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      const t = () => {
        testInstance.setStatus(TestData.UNDEFINED_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('Bundle.entry.response.status is required');

      testInstance.setLocation(TestData.UNDEFINED_VALUE);
      testInstance.setEtag(TestData.UNDEFINED_VALUE);
      testInstance.setLastModified(TestData.UNDEFINED_VALUE);
      testInstance.setOutcome(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_400_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_400);
      expect(testInstance.hasLocationElement()).toBe(false);
      expect(testInstance.getLocationElement()).toEqual(new UriType());
      expect(testInstance.hasLocation()).toBe(false);
      expect(testInstance.getLocation()).toBeUndefined();
      expect(testInstance.hasEtagElement()).toBe(false);
      expect(testInstance.getEtagElement()).toEqual(new StringType());
      expect(testInstance.hasEtag()).toBe(false);
      expect(testInstance.getEtag()).toBeUndefined();
      expect(testInstance.hasLastModifiedElement()).toBe(false);
      expect(testInstance.getLastModifiedElement()).toEqual(new InstantType());
      expect(testInstance.hasLastModified()).toBe(false);
      expect(testInstance.getLastModified()).toBeUndefined();
      expect(testInstance.hasOutcome()).toBe(false);
      expect(testInstance.getOutcome()).toBeUndefined();
    });

    it('should be properly reset by modifying/adding all properties with PrimitiveType elements as appropriate', () => {
      const testInstance = new BundleEntryResponseComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setStatusElement(HTTP_STATUS_404_TYPE);
      testInstance.setLocationElement(TestData.VALID_URI_TYPE);
      testInstance.setEtagElement(TestData.VALID_STRING_TYPE);
      testInstance.setLastModifiedElement(TestData.VALID_INSTANT_TYPE);
      testInstance.setOutcome(OUTCOME_SIMPLE_PERSON_MODEL);

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_404_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_404);
      expect(testInstance.hasLocationElement()).toBe(true);
      expect(testInstance.getLocationElement()).toEqual(TestData.VALID_URI_TYPE);
      expect(testInstance.hasLocation()).toBe(true);
      expect(testInstance.getLocation()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasEtagElement()).toBe(true);
      expect(testInstance.getEtagElement()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasEtag()).toBe(true);
      expect(testInstance.getEtag()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasLastModifiedElement()).toBe(true);
      expect(testInstance.getLastModifiedElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasLastModified()).toBe(true);
      expect(testInstance.getLastModified()).toEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasOutcome()).toBe(true);
      expect(testInstance.getOutcome()).toEqual(OUTCOME_SIMPLE_PERSON_MODEL);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setStatusElement(HTTP_STATUS_400_TYPE);
      testInstance.setLocationElement(TestData.VALID_URI_TYPE_2);
      testInstance.setEtagElement(TestData.VALID_STRING_TYPE_2);
      testInstance.setLastModifiedElement(TestData.VALID_INSTANT_TYPE_2);
      testInstance.setOutcome(OUTCOME_SIMPLE_PERSON_MODEL_2);

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetElementProperties(testInstance);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_400_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_400);
      expect(testInstance.hasLocationElement()).toBe(true);
      expect(testInstance.getLocationElement()).toEqual(TestData.VALID_URI_TYPE_2);
      expect(testInstance.hasLocation()).toBe(true);
      expect(testInstance.getLocation()).toEqual(TestData.VALID_URI_2);
      expect(testInstance.hasEtagElement()).toBe(true);
      expect(testInstance.getEtagElement()).toEqual(TestData.VALID_STRING_TYPE_2);
      expect(testInstance.hasEtag()).toBe(true);
      expect(testInstance.getEtag()).toEqual(TestData.VALID_STRING_2);
      expect(testInstance.hasLastModifiedElement()).toBe(true);
      expect(testInstance.getLastModifiedElement()).toEqual(TestData.VALID_INSTANT_TYPE_2);
      expect(testInstance.hasLastModified()).toBe(true);
      expect(testInstance.getLastModified()).toEqual(TestData.VALID_INSTANT_2);
      expect(testInstance.hasOutcome()).toBe(true);
      expect(testInstance.getOutcome()).toEqual(OUTCOME_SIMPLE_PERSON_MODEL_2);

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      const t = () => {
        testInstance.setStatusElement(TestData.UNDEFINED_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('Bundle.entry.response.status is required');

      testInstance.setLocationElement(TestData.UNDEFINED_VALUE);
      testInstance.setEtagElement(TestData.UNDEFINED_VALUE);
      testInstance.setLastModifiedElement(TestData.UNDEFINED_VALUE);
      testInstance.setOutcome(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_400_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_400);
      expect(testInstance.hasLocationElement()).toBe(false);
      expect(testInstance.getLocationElement()).toEqual(new UriType());
      expect(testInstance.hasLocation()).toBe(false);
      expect(testInstance.getLocation()).toBeUndefined();
      expect(testInstance.hasEtagElement()).toBe(false);
      expect(testInstance.getEtagElement()).toEqual(new StringType());
      expect(testInstance.hasEtag()).toBe(false);
      expect(testInstance.getEtag()).toBeUndefined();
      expect(testInstance.hasLastModifiedElement()).toBe(false);
      expect(testInstance.getLastModifiedElement()).toEqual(new InstantType());
      expect(testInstance.hasLastModified()).toBe(false);
      expect(testInstance.getLastModified()).toBeUndefined();
      expect(testInstance.hasOutcome()).toBe(false);
      expect(testInstance.getOutcome()).toBeUndefined();
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
      status: '404 Not Found',
      location: 'validUri',
      _location: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
      },
      etag: 'This is a valid string.',
      lastModified: '2024-01-28T14:30:00.000Z',
      outcome: {
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
    };
    const INVALID_JSON = {
      bogusField: 'bogus value',
    };

    it('should throw FhirError from toJSON() when instantiated with missing required properties', () => {
      const testInstance = new BundleEntryResponseComponent();
      const t = () => {
        testInstance.toJSON();
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow(`The following required properties do not exist: Bundle.entry.response.status`);
    });

    it('should properly create serialized content', () => {
      const testInstance = new BundleEntryResponseComponent();

      initializeBackboneElementProperties(testInstance, 2);

      testInstance.setStatusElement(HTTP_STATUS_404_TYPE);
      testInstance.setLocationElement(altUrl);
      testInstance.setEtagElement(TestData.VALID_STRING_TYPE);
      testInstance.setLastModifiedElement(TestData.VALID_INSTANT_TYPE);
      testInstance.setOutcome(OUTCOME_SIMPLE_PERSON_MODEL);

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expectInitializedElementProperties(testInstance, 2);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_404_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_404);
      expect(testInstance.hasLocationElement()).toBe(true);
      expect(testInstance.getLocationElement()).toEqual(altUrl);
      expect(testInstance.hasLocation()).toBe(true);
      expect(testInstance.getLocation()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasEtagElement()).toBe(true);
      expect(testInstance.getEtagElement()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasEtag()).toBe(true);
      expect(testInstance.getEtag()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasLastModifiedElement()).toBe(true);
      expect(testInstance.getLastModifiedElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasLastModified()).toBe(true);
      expect(testInstance.getLastModified()).toEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasOutcome()).toBe(true);
      expect(testInstance.getOutcome()).toEqual(OUTCOME_SIMPLE_PERSON_MODEL);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: BundleEntryResponseComponent | undefined = undefined;
      testInstance = BundleEntryResponseComponent.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = BundleEntryResponseComponent.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = BundleEntryResponseComponent.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should throw FhirError from parse() when JSON is missing required properties', () => {
      const t = () => {
        BundleEntryResponseComponent.parse(INVALID_JSON);
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow(
        `The following required properties must be included in the provided JSON: BundleEntryResponseComponent.status`,
      );
    });

    it('should return parsed Bundle for valid json', () => {
      const testInstance: BundleEntryResponseComponent | undefined = BundleEntryResponseComponent.parse(VALID_JSON);

      expectBackboneElementBase<BundleEntryResponseComponent>(
        BundleEntryResponseComponent,
        testInstance,
        'BundleEntryResponseComponent',
        'Bundle.entry.response',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
      expectInitializedElementProperties(testInstance, 2);

      expect(testInstance.hasStatusElement()).toBe(true);
      expect(testInstance.getStatusElement()).toEqual(HTTP_STATUS_404_TYPE);
      expect(testInstance.hasStatus()).toBe(true);
      expect(testInstance.getStatus()).toEqual(HTTP_STATUS_404);
      expect(testInstance.hasLocationElement()).toBe(true);
      expect(testInstance.getLocationElement()).toEqual(altUrl);
      expect(testInstance.hasLocation()).toBe(true);
      expect(testInstance.getLocation()).toEqual(TestData.VALID_URI);
      expect(testInstance.hasEtagElement()).toBe(true);
      expect(testInstance.getEtagElement()).toEqual(TestData.VALID_STRING_TYPE);
      expect(testInstance.hasEtag()).toBe(true);
      expect(testInstance.getEtag()).toEqual(TestData.VALID_STRING);
      expect(testInstance.hasLastModifiedElement()).toBe(true);
      expect(testInstance.getLastModifiedElement()).toEqual(TestData.VALID_INSTANT_TYPE);
      expect(testInstance.hasLastModified()).toBe(true);
      expect(testInstance.getLastModified()).toEqual(TestData.VALID_INSTANT);
      expect(testInstance.hasOutcome()).toBe(true);
      expect(testInstance.getOutcome()).toEqual(OUTCOME_SIMPLE_PERSON_MODEL);
    });
  });

  describe('Type Assertion Tests', () => {
    it('constructor: should throw appropriate errors when instantiated with an invalid required data elements', () => {
      let t = () => {
        new BundleEntryResponseComponent(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.response.status ([object Object])`);

      t = () => {
        new BundleEntryResponseComponent(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.response.status; Provided value is not an instance of StringType.`);

      t = () => {
        new BundleEntryResponseComponent(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.response.status (12345)`);
    });

    it('status: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryResponseComponent();
      let t = () => {
        testInstance.setStatusElement(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.response.status; Provided value is not an instance of StringType.`);

      t = () => {
        testInstance.setStatus(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.response.status (12345)`);

      t = () => {
        testInstance.setStatusElement(TestData.UNDEFINED_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(`Bundle.entry.response.status is required`);

      t = () => {
        testInstance.setStatus(TestData.UNDEFINED_VALUE);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(`Bundle.entry.response.status is required`);
    });

    it('location: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryResponseComponent();
      let t = () => {
        testInstance.setLocationElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.response.location; Provided element is not an instance of UriType.`);

      t = () => {
        testInstance.setLocation(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.response.location (Invalid datatype)`);
    });

    it('etag: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryResponseComponent();
      let t = () => {
        testInstance.setEtagElement(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.response.etag; Provided element is not an instance of StringType.`);

      t = () => {
        testInstance.setEtag(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.response.etag (12345)`);
    });

    it('lastModified: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryResponseComponent();
      let t = () => {
        testInstance.setLastModifiedElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Bundle.entry.response.lastModified; Provided element is not an instance of InstantType.`,
      );

      t = () => {
        testInstance.setLastModified(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.response.lastModified (Invalid datatype)`);
    });

    it('outcome: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntryResponseComponent();
      const t = () => {
        testInstance.setOutcome(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.response.outcome; Provided element is not an instance of Resource.`);
    });
  });
});
