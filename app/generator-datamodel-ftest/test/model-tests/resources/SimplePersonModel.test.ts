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

import { FhirError, IDomainResource, InvalidTypeError, PrimitiveTypeError, StringType } from '@paq-ts-fhir/fhir-core';
import { Address, HumanName, Identifier } from '../../../src/complex-types/complex-datatypes';
import { SimplePersonModel } from '../../../src/resources/SimplePersonModel';
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
import {
  expectDomainResourceBase,
  expectInitializedDomainResourceProperties,
  expectResetDomainResourceProperties,
  expectUndefinedDomainResourceProperties,
  initializeDomainResourceProperties,
  resetDomainResourceProperties,
  undefineDomainResourceProperties,
} from '../../ftest-utils';

describe('SimplePersonModel', () => {
  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new SimplePersonModel();

      expectDomainResourceBase(SimplePersonModel as unknown as IDomainResource, testInstance, 'SimplePersonModel');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedDomainResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasName()).toBe(false);
      expect(testInstance.getName()).toEqual(new HumanName());
      expect(testInstance.hasAddress()).toBe(false);
      expect(testInstance.getAddress()).toEqual([] as Address[]);
      expect(testInstance.hasPhoneElement()).toBe(false);
      expect(testInstance.getPhoneElement()).toEqual(new StringType());
      expect(testInstance.hasPhone()).toBe(false);
      expect(testInstance.getPhone()).toBeUndefined();
    });

    it('should properly copy()', () => {
      const testModel = new SimplePersonModel();

      initializeDomainResourceProperties(testModel, 1);

      testModel.setIdentifier(VALID_IDENTIFIER);
      testModel.setName(VALID_HUMAN_NAME);
      testModel.setAddress([VALID_ADDRESS]);
      testModel.setPhoneElement(new StringType(TestData.VALID_PHONE));

      let testInstance = testModel.copy();

      expectDomainResourceBase(SimplePersonModel as unknown as IDomainResource, testInstance, 'SimplePersonModel');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedDomainResourceProperties(testInstance, 1);

      expect(testInstance.hasIdentifier()).toBe(true);
      expect(testInstance.getIdentifier()).toEqual(VALID_IDENTIFIER);
      expect(testInstance.hasName()).toBe(true);
      expect(testInstance.getName()).toEqual(VALID_HUMAN_NAME);
      expect(testInstance.hasAddress()).toBe(true);
      expect(testInstance.getAddress()).toEqual([VALID_ADDRESS]);
      expect(testInstance.hasPhoneElement()).toBe(true);
      expect(testInstance.getPhoneElement()).toEqual(TestData.VALID_PHONE_TYPE);
      expect(testInstance.hasPhone()).toBe(true);
      expect(testInstance.getPhone()).toStrictEqual(TestData.VALID_PHONE);

      // Reset to undefined

      undefineDomainResourceProperties(testModel);

      testModel.setIdentifier(TestData.UNDEFINED_VALUE);
      testModel.setName(TestData.UNDEFINED_VALUE);
      testModel.setAddress(TestData.UNDEFINED_VALUE);
      testModel.setPhoneElement(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectDomainResourceBase(SimplePersonModel as unknown as IDomainResource, testInstance, 'SimplePersonModel');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedDomainResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasName()).toBe(false);
      expect(testInstance.getName()).toEqual(new HumanName());
      expect(testInstance.hasAddress()).toBe(false);
      expect(testInstance.getAddress()).toEqual([] as Address[]);
      expect(testInstance.hasPhoneElement()).toBe(false);
      expect(testInstance.getPhoneElement()).toEqual(new StringType());
      expect(testInstance.hasPhone()).toBe(false);
      expect(testInstance.getPhone()).toBeUndefined();
    });

    it('should be properly reset by modifying all properties', () => {
      const testInstance = new SimplePersonModel();

      initializeDomainResourceProperties(testInstance, 1);

      testInstance.setIdentifier(VALID_IDENTIFIER);
      testInstance.setName(VALID_HUMAN_NAME);
      testInstance.setAddress([VALID_ADDRESS]);
      testInstance.setPhoneElement(TestData.VALID_PHONE_TYPE);

      expectDomainResourceBase(SimplePersonModel as unknown as IDomainResource, testInstance, 'SimplePersonModel');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedDomainResourceProperties(testInstance, 1);

      // SimplePersonModel properties
      expect(testInstance.hasIdentifier()).toBe(true);
      expect(testInstance.getIdentifier()).toEqual(VALID_IDENTIFIER);
      expect(testInstance.hasName()).toBe(true);
      expect(testInstance.getName()).toEqual(VALID_HUMAN_NAME);
      expect(testInstance.hasAddress()).toBe(true);
      expect(testInstance.getAddress()).toEqual([VALID_ADDRESS]);
      expect(testInstance.hasPhoneElement()).toBe(true);
      expect(testInstance.getPhoneElement()).toEqual(TestData.VALID_PHONE_TYPE);
      expect(testInstance.hasPhone()).toBe(true);
      expect(testInstance.getPhone()).toStrictEqual(TestData.VALID_PHONE);

      // Reset

      resetDomainResourceProperties(testInstance);

      testInstance.setIdentifier(VALID_IDENTIFIER_2);
      testInstance.setName(VALID_HUMAN_NAME_2);
      testInstance.addAddress(VALID_ADDRESS_2);
      testInstance.setPhone(TestData.VALID_PHONE_2);

      expectDomainResourceBase(SimplePersonModel as unknown as IDomainResource, testInstance, 'SimplePersonModel');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetDomainResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(true);
      expect(testInstance.getIdentifier()).toEqual(VALID_IDENTIFIER_2);
      expect(testInstance.hasName()).toBe(true);
      expect(testInstance.getName()).toEqual(VALID_HUMAN_NAME_2);
      expect(testInstance.hasAddress()).toBe(true);
      expect(testInstance.getAddress()).toEqual([VALID_ADDRESS, VALID_ADDRESS_2]);
      expect(testInstance.hasPhoneElement()).toBe(true);
      expect(testInstance.getPhoneElement()).toEqual(TestData.VALID_PHONE_TYPE_2);
      expect(testInstance.hasPhone()).toBe(true);
      expect(testInstance.getPhone()).toStrictEqual(TestData.VALID_PHONE_2);

      // Reset to undefined

      undefineDomainResourceProperties(testInstance);

      testInstance.setIdentifier(TestData.UNDEFINED_VALUE);
      testInstance.setName(TestData.UNDEFINED_VALUE);
      testInstance.setAddress(TestData.UNDEFINED_VALUE);
      testInstance.setPhone(TestData.UNDEFINED_VALUE);

      expectDomainResourceBase(SimplePersonModel as unknown as IDomainResource, testInstance, 'SimplePersonModel');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedDomainResourceProperties(testInstance);

      expect(testInstance.hasIdentifier()).toBe(false);
      expect(testInstance.getIdentifier()).toEqual(new Identifier());
      expect(testInstance.hasName()).toBe(false);
      expect(testInstance.getName()).toEqual(new HumanName());
      expect(testInstance.hasAddress()).toBe(false);
      expect(testInstance.getAddress()).toEqual([] as Address[]);
      expect(testInstance.hasPhoneElement()).toBe(false);
      expect(testInstance.getPhoneElement()).toEqual(new StringType());
      expect(testInstance.hasPhone()).toBe(false);
      expect(testInstance.getPhone()).toBeUndefined();
    });
  });

  describe('Serialization/Deserialization', () => {
    const altPhone = TestData.VALID_PHONE_TYPE.copy();
    altPhone.setId(TestData.DATATYPE_ID);
    altPhone.addExtension(DATATYPE_EXTENSION);

    const VALID_JSON = {
      resourceType: 'SimplePersonModel',
      id: 'id12345',
      meta: {
        lastUpdated: '2024-01-28T14:30:00.000Z',
      },
      implicitRules: 'implicitRules',
      language: 'en-US',
      text: {
        status: 'generated',
        div: '<div xmlns="http://www.w3.org/1999/xhtml">text</div>',
      },
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
        {
          use: 'work',
          type: 'physical',
          line: ['4321 Central ST', 'Suite 123'],
          city: 'Renton',
          state: 'WA',
          postalCode: '98058',
          country: 'US',
        },
      ],
      phone: '888-555-1234',
      _phone: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
      },
    };
    const INVALID_JSON = {
      bogusField: 'bogus value',
    };

    it('should properly create serialized content', () => {
      const testInstance = new SimplePersonModel();

      initializeDomainResourceProperties(testInstance, 2);

      testInstance.setIdentifier(VALID_IDENTIFIER);
      testInstance.setName(VALID_HUMAN_NAME);
      testInstance.setAddress([VALID_ADDRESS, VALID_ADDRESS_2]);
      testInstance.setPhoneElement(altPhone);

      expectDomainResourceBase(SimplePersonModel as unknown as IDomainResource, testInstance, 'SimplePersonModel');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: SimplePersonModel | undefined = undefined;
      testInstance = SimplePersonModel.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = SimplePersonModel.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = SimplePersonModel.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should throw FhirError from parse() when JSON is missing required properties', () => {
      const t = () => {
        SimplePersonModel.parse(INVALID_JSON);
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow(`Invalid FHIR JSON: Provided JSON is missing the required 'resourceType' field`);
    });

    it('should return parsed SimplePersonModel for valid json', () => {
      const testInstance: SimplePersonModel | undefined = SimplePersonModel.parse(VALID_JSON);

      expectDomainResourceBase(SimplePersonModel as unknown as IDomainResource, testInstance, 'SimplePersonModel');
      expect(testInstance?.isEmpty()).toBe(false);
      expect(testInstance?.toJSON()).toEqual(VALID_JSON);
      expectInitializedDomainResourceProperties(testInstance, 2);

      expect(testInstance.hasIdentifier()).toBe(true);
      expect(testInstance.getIdentifier()).toEqual(VALID_IDENTIFIER);
      expect(testInstance.hasName()).toBe(true);
      expect(testInstance.getName()).toEqual(VALID_HUMAN_NAME);
      expect(testInstance.hasAddress()).toBe(true);
      expect(testInstance.getAddress()).toEqual([VALID_ADDRESS, VALID_ADDRESS_2]);
      expect(testInstance.hasPhoneElement()).toBe(true);
      expect(testInstance.getPhoneElement()).toEqual(altPhone);
      expect(testInstance.hasPhone()).toBe(true);
      expect(testInstance.getPhone()).toStrictEqual(TestData.VALID_PHONE);
    });
  });

  describe('Type Assertion Tests', () => {
    it('identifier: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new SimplePersonModel();
      const t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setIdentifier(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid SimplePersonModel.identifier; Provided element is not an instance of Identifier.`);
    });

    it('name: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new SimplePersonModel();
      const t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setName(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid SimplePersonModel.name; Provided element is not an instance of HumanName.`);
    });

    it('address: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new SimplePersonModel();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setAddress([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid SimplePersonModel.address; Provided value array has an element that is not an instance of Address.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addAddress(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid SimplePersonModel.address; Provided element is not an instance of Address.`);
    });

    it('phone: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new SimplePersonModel();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPhoneElement(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid SimplePersonModel.phone; Provided element is not an instance of StringType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPhone(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid SimplePersonModel.phone (12345)`);
    });
  });
});
