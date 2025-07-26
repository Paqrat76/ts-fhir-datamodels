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

import { EnumCodeType, InvalidTypeError } from '@paq-ts-fhir/fhir-core';
import { ConsentStateCodesEnum } from 'gensrc/code-systems/ConsentStateCodesEnum';
import { ContributorTypeEnum } from 'gensrc/code-systems/ContributorTypeEnum';
import { Reference } from 'gensrc/complex-types/complex-datatypes';
import { SimplePersonModel } from 'gensrc/resources/SimplePersonModel';
import {
  TestModel,
  TestModelComplexComponent,
  TestModelComplexReferenceComponent,
  TestModelComplexReferenceEnumCodeComponent,
  TestModelPrimitiveComponent,
} from 'gensrc/resources/TestModel';
import { TestData } from '../../ftest-data';
import {
  DATATYPE_EXTENSION,
  VALID_ADDRESS,
  VALID_ADDRESS_2,
  VALID_DOSAGE,
  VALID_DOSAGE_2,
  VALID_EXTENSION_2,
  VALID_HUMAN_NAME,
  VALID_HUMAN_NAME_2,
  VALID_IDENTIFIER,
  VALID_IDENTIFIER_2,
  VALID_MOCK_COMPLEX_DATATYPE,
  VALID_MOCK_TASK,
  VALID_MOCK_TASK_2,
  VALID_PERIOD,
  VALID_PERIOD_2,
  VALID_QUANTITY,
  VALID_RANGE,
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

describe('TestModel', () => {
  const CONTAINED_SIMPLE_PERSON_MODEL = new SimplePersonModel();
  CONTAINED_SIMPLE_PERSON_MODEL.setId(TestData.CONTAINED_PERSON_ID);
  CONTAINED_SIMPLE_PERSON_MODEL.setIdentifier(VALID_IDENTIFIER);
  CONTAINED_SIMPLE_PERSON_MODEL.setName(VALID_HUMAN_NAME);
  CONTAINED_SIMPLE_PERSON_MODEL.setAddress([VALID_ADDRESS]);
  const CONTAINED_SIMPLE_PERSON_MODEL_2 = new SimplePersonModel();
  CONTAINED_SIMPLE_PERSON_MODEL_2.setId(TestData.CONTAINED_PERSON_ID_2);
  CONTAINED_SIMPLE_PERSON_MODEL_2.setIdentifier(VALID_IDENTIFIER_2);
  CONTAINED_SIMPLE_PERSON_MODEL_2.setName(VALID_HUMAN_NAME_2);
  CONTAINED_SIMPLE_PERSON_MODEL_2.setAddress([VALID_ADDRESS_2]);

  const SIMPLE_PERSON_MODEL_RESOURCE = CONTAINED_SIMPLE_PERSON_MODEL_2.copy();
  SIMPLE_PERSON_MODEL_RESOURCE.setId(TestData.VALID_ID_2);
  SIMPLE_PERSON_MODEL_RESOURCE.setExtension([VALID_EXTENSION_2]);

  let testTestModelPrimitiveComponent: TestModelPrimitiveComponent;
  let testTestModelPrimitiveComponent_2: TestModelPrimitiveComponent;
  let testTestModelComplexComponent: TestModelComplexComponent;
  let testTestModelComplexComponent_2: TestModelComplexComponent;
  beforeAll(() => {
    const CONTAINED_PERSON_REFERENCE = new Reference();
    CONTAINED_PERSON_REFERENCE.setReference(`SimplePersonModel/${TestData.CONTAINED_PERSON_ID}`);

    const VALID_HEALTHCARESERVICE_REFERENCE = new Reference();
    VALID_HEALTHCARESERVICE_REFERENCE.setReference(TestData.VALID_HEALTHCARESERVICE_REFERENCE_VALUE);
    const VALID_HEALTHCARESERVICE_REFERENCE_2 = new Reference();
    VALID_HEALTHCARESERVICE_REFERENCE_2.setReference(TestData.VALID_HEALTHCARESERVICE_REFERENCE_VALUE_2);

    const VALID_PERSON_REFERENCE_2 = new Reference();
    VALID_PERSON_REFERENCE_2.setReference(TestData.VALID_PERSON_REFERENCE_VALUE_2);

    const contributorTypeEnum = new ContributorTypeEnum();
    const consentStateCodesEnum = new ConsentStateCodesEnum();

    let enumCode11 = new EnumCodeType(TestData.VALID_CONTRIBUTOR_AUTHOR, contributorTypeEnum);
    let enumCode1x = new EnumCodeType(TestData.VALID_CONSENT_DRAFT, consentStateCodesEnum);
    const testDataModelEnumCodeComponent = new TestModelComplexReferenceEnumCodeComponent(enumCode11, [enumCode1x]);
    const testTestModelReferenceComponent = new TestModelComplexReferenceComponent(
      CONTAINED_PERSON_REFERENCE,
      [VALID_HEALTHCARESERVICE_REFERENCE],
      [testDataModelEnumCodeComponent],
    );
    testTestModelComplexComponent = new TestModelComplexComponent(
      VALID_DOSAGE,
      [VALID_PERIOD],
      testTestModelReferenceComponent,
    );

    enumCode11 = new EnumCodeType(TestData.VALID_CONTRIBUTOR_REVIEWER, contributorTypeEnum);
    enumCode1x = new EnumCodeType(TestData.VALID_CONSENT_ACTIVE, consentStateCodesEnum);
    const testDataModelEnumCodeComponent_2 = new TestModelComplexReferenceEnumCodeComponent(enumCode11, [enumCode1x]);
    const testTestModelReferenceComponent_2 = new TestModelComplexReferenceComponent(
      VALID_PERSON_REFERENCE_2,
      [VALID_HEALTHCARESERVICE_REFERENCE_2],
      [testDataModelEnumCodeComponent_2],
    );
    testTestModelComplexComponent_2 = new TestModelComplexComponent(
      VALID_DOSAGE_2,
      [VALID_PERIOD_2],
      testTestModelReferenceComponent_2,
    );

    testTestModelPrimitiveComponent = new TestModelPrimitiveComponent(
      TestData.VALID_BOOLEAN_TRUE,
      [TestData.VALID_STRING],
      TestData.VALID_URI_TYPE,
    );
    testTestModelPrimitiveComponent_2 = new TestModelPrimitiveComponent(
      TestData.VALID_BOOLEAN_FALSE,
      [TestData.VALID_STRING_2],
      TestData.VALID_URI_TYPE_2,
    );
  });

  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new TestModel();

      expectDomainResourceBase<TestModel>(TestModel, testInstance, 'TestModel');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedDomainResourceProperties(testInstance);

      expect(testInstance.hasChoice01()).toBe(false);
      expect(testInstance.getChoice01()).toBeUndefined();
      expect(testInstance.hasChoice01Quantity()).toBe(false);
      expect(testInstance.getChoice01Quantity()).toBeUndefined();
      expect(testInstance.hasChoice01Range()).toBe(false);
      expect(testInstance.getChoice01Range()).toBeUndefined();
      expect(testInstance.hasResource01()).toBe(false);
      expect(testInstance.getResource01()).toBeUndefined();
      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual([] as TestModelPrimitiveComponent[]);
      expect(testInstance.hasComplex()).toBe(false);
      expect(testInstance.getComplex()).toEqual(new TestModelComplexComponent(null, null, null, null));
    });

    it('should properly copy()', () => {
      const testModel = new TestModel();

      initializeDomainResourceProperties(testModel, 1);

      testModel.setChoice01(VALID_QUANTITY);
      testModel.setResource01(VALID_MOCK_TASK);
      testModel.setPrimitive([testTestModelPrimitiveComponent]);
      testModel.setComplex(testTestModelComplexComponent);

      let testInstance: TestModel = testModel.copy();

      expectDomainResourceBase<TestModel>(TestModel, testInstance, 'TestModel');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedDomainResourceProperties(testInstance, 1);

      expect(testInstance.hasChoice01()).toBe(true);
      expect(testInstance.getChoice01()).toEqual(VALID_QUANTITY);
      expect(testInstance.hasChoice01Quantity()).toBe(true);
      expect(testInstance.getChoice01Quantity()).toEqual(VALID_QUANTITY);
      expect(testInstance.hasChoice01Range()).toBe(false);
      const t = () => {
        testInstance.getChoice01Range();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for TestModel.choice01[x]: Expected Range but encountered Quantity`);
      expect(testInstance.hasResource01()).toBe(true);
      expect(testInstance.getResource01()).toEqual(VALID_MOCK_TASK);
      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual([testTestModelPrimitiveComponent]);
      expect(testInstance.hasComplex()).toBe(true);
      expect(testInstance.getComplex()).toEqual(testTestModelComplexComponent);

      // Reset to undefined

      undefineDomainResourceProperties(testModel);

      testModel.setChoice01(TestData.UNDEFINED_VALUE);
      testModel.setResource01(TestData.UNDEFINED_VALUE);
      testModel.setPrimitive(TestData.UNDEFINED_VALUE);
      testModel.setComplex(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectDomainResourceBase<TestModel>(TestModel, testInstance, 'TestModel');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedDomainResourceProperties(testInstance);

      expect(testInstance.hasChoice01()).toBe(false);
      expect(testInstance.getChoice01()).toBeUndefined();
      expect(testInstance.hasChoice01Quantity()).toBe(false);
      expect(testInstance.getChoice01Quantity()).toBeUndefined();
      expect(testInstance.hasChoice01Range()).toBe(false);
      expect(testInstance.getChoice01Range()).toBeUndefined();
      expect(testInstance.hasResource01()).toBe(false);
      expect(testInstance.getResource01()).toBeUndefined();
      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual([] as TestModelPrimitiveComponent[]);
      expect(testInstance.hasComplex()).toBe(false);
      expect(testInstance.getComplex()).toEqual(new TestModelComplexComponent(null, null, null, null));
    });

    it('should be properly reset by modifying/adding all properties', () => {
      const testInstance = new TestModel();

      initializeDomainResourceProperties(testInstance, 1);

      testInstance.setChoice01(VALID_QUANTITY);
      testInstance.setResource01(VALID_MOCK_TASK);
      testInstance.setPrimitive([testTestModelPrimitiveComponent]);
      testInstance.setComplex(testTestModelComplexComponent);

      expectDomainResourceBase<TestModel>(TestModel, testInstance, 'TestModel');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedDomainResourceProperties(testInstance, 1);

      expect(testInstance.hasChoice01()).toBe(true);
      expect(testInstance.getChoice01()).toEqual(VALID_QUANTITY);
      expect(testInstance.hasChoice01Quantity()).toBe(true);
      expect(testInstance.getChoice01Quantity()).toEqual(VALID_QUANTITY);
      expect(testInstance.hasChoice01Range()).toBe(false);
      let t = () => {
        testInstance.getChoice01Range();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for TestModel.choice01[x]: Expected Range but encountered Quantity`);
      expect(testInstance.hasResource01()).toBe(true);
      expect(testInstance.getResource01()).toEqual(VALID_MOCK_TASK);
      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual([testTestModelPrimitiveComponent]);
      expect(testInstance.hasComplex()).toBe(true);
      expect(testInstance.getComplex()).toEqual(testTestModelComplexComponent);

      // Reset

      resetDomainResourceProperties(testInstance);

      testInstance.setChoice01(VALID_RANGE);
      testInstance.setResource01(VALID_MOCK_TASK_2);
      testInstance.addPrimitive(testTestModelPrimitiveComponent_2);
      testInstance.setComplex(testTestModelComplexComponent_2);

      expectDomainResourceBase<TestModel>(TestModel, testInstance, 'TestModel');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetDomainResourceProperties(testInstance);

      expect(testInstance.hasChoice01()).toBe(true);
      expect(testInstance.getChoice01()).toEqual(VALID_RANGE);
      expect(testInstance.hasChoice01Quantity()).toBe(false);
      t = () => {
        testInstance.getChoice01Quantity();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for TestModel.choice01[x]: Expected Quantity but encountered Range`);
      expect(testInstance.hasChoice01Range()).toBe(true);
      expect(testInstance.getChoice01Range()).toEqual(VALID_RANGE);
      expect(testInstance.hasResource01()).toBe(true);
      expect(testInstance.getResource01()).toEqual(VALID_MOCK_TASK_2);
      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual([testTestModelPrimitiveComponent, testTestModelPrimitiveComponent_2]);
      expect(testInstance.hasComplex()).toBe(true);
      expect(testInstance.getComplex()).toEqual(testTestModelComplexComponent_2);

      // Reset to undefined

      undefineDomainResourceProperties(testInstance);

      testInstance.setChoice01(TestData.UNDEFINED_VALUE);
      testInstance.setResource01(TestData.UNDEFINED_VALUE);
      testInstance.setPrimitive(TestData.UNDEFINED_VALUE);
      testInstance.setComplex(TestData.UNDEFINED_VALUE);

      expectDomainResourceBase<TestModel>(TestModel, testInstance, 'TestModel');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedDomainResourceProperties(testInstance);

      expect(testInstance.hasChoice01()).toBe(false);
      expect(testInstance.getChoice01()).toBeUndefined();
      expect(testInstance.hasChoice01Quantity()).toBe(false);
      expect(testInstance.getChoice01Quantity()).toBeUndefined();
      expect(testInstance.hasChoice01Range()).toBe(false);
      expect(testInstance.getChoice01Range()).toBeUndefined();
      expect(testInstance.hasResource01()).toBe(false);
      expect(testInstance.getResource01()).toBeUndefined();
      expect(testInstance.hasPrimitive()).toBe(false);
      expect(testInstance.getPrimitive()).toEqual([] as TestModelPrimitiveComponent[]);
      expect(testInstance.hasComplex()).toBe(false);
      expect(testInstance.getComplex()).toEqual(new TestModelComplexComponent(null, null, null, null));
    });
  });

  describe('Serialization/Deserialization', () => {
    const choice01 = VALID_QUANTITY.copy();
    choice01.setId(TestData.DATATYPE_ID);
    choice01.addExtension(DATATYPE_EXTENSION);

    const VALID_JSON = {
      resourceType: 'TestModel',
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
      contained: [
        {
          resourceType: 'SimplePersonModel',
          id: '#SMP-1',
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
      ],
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
      choice01Quantity: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
        value: 128.1978,
      },
      resource01: {
        resourceType: 'SimplePersonModel',
        id: 'id67890',
        extension: [
          {
            url: 'extUrl2',
            valueString: 'Extension string value two',
          },
        ],
        identifier: {
          system: 'http://sample/system/two',
          value: 'This is another valid string.',
        },
        name: {
          family: 'LastName',
          given: ['First2', 'Middle2'],
          prefix: ['Ms.'],
          suffix: ['MD'],
        },
        address: [
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
      },
      primitive: [
        {
          primitive11: true,
          primitive1x: ['This is a valid string.'],
          choice11Uri: 'validUri',
        },
      ],
      complex: {
        complex11: {
          sequence: 0,
          text: 'This is a valid string.',
          patientInstruction: 'This is another valid string.',
          asNeededBoolean: true,
        },
        complex1x: [
          {
            start: '2024-03-15T00:00:00.000Z',
            end: '2024-07-03T01:00:00.000Z',
          },
        ],
        reference: {
          reference11: {
            reference: 'SimplePersonModel/#SMP-1',
          },
          reference1x: [
            {
              reference: 'HealthcareService/HS-24680',
            },
          ],
          enumCode: [
            {
              enumCode11: 'author',
              enumCode1x: ['draft'],
            },
          ],
        },
      },
    };

    it('should properly create serialized content', () => {
      const testInstance = new TestModel();

      initializeDomainResourceProperties(testInstance, 2, CONTAINED_SIMPLE_PERSON_MODEL);

      testInstance.setChoice01(choice01);
      testInstance.setResource01(SIMPLE_PERSON_MODEL_RESOURCE);
      testInstance.setPrimitive([testTestModelPrimitiveComponent]);
      testInstance.setComplex(testTestModelComplexComponent);

      expectDomainResourceBase<TestModel>(TestModel, testInstance, 'TestModel');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should return undefined when deserialize with no json', () => {
      let testInstance: TestModel | undefined = undefined;
      testInstance = TestModel.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = TestModel.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = TestModel.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should return parsed TestModel for valid json', () => {
      const testInstance: TestModel | undefined = TestModel.parse(VALID_JSON);

      expectDomainResourceBase<TestModel>(TestModel, testInstance, 'TestModel');
      expect(testInstance?.isEmpty()).toBe(false);
      expect(testInstance?.toJSON()).toEqual(VALID_JSON);
      expectInitializedDomainResourceProperties(testInstance, 2, CONTAINED_SIMPLE_PERSON_MODEL);

      expect(testInstance.hasChoice01()).toBe(true);
      expect(testInstance.getChoice01()).toEqual(choice01);
      expect(testInstance.hasChoice01Quantity()).toBe(true);
      expect(testInstance.getChoice01Quantity()).toEqual(choice01);
      expect(testInstance.hasChoice01Range()).toBe(false);
      const t = () => {
        testInstance.getChoice01Range();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for TestModel.choice01[x]: Expected Range but encountered Quantity`);
      expect(testInstance.hasResource01()).toBe(true);
      expect(testInstance.getResource01()).toEqual(SIMPLE_PERSON_MODEL_RESOURCE);
      expect(testInstance.hasPrimitive()).toBe(true);
      expect(testInstance.getPrimitive()).toEqual([testTestModelPrimitiveComponent]);
      expect(testInstance.hasComplex()).toBe(true);
      expect(testInstance.getComplex()).toEqual(testTestModelComplexComponent);
    });
  });

  describe('Type Assertion Tests', () => {
    it('choice01: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModel();
      const t = () => {
        testInstance.setChoice01(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ChoiceDataTypes decorator on setChoice01 (TestModel.choice01[x]) expects the 'value' argument type (MockComplexDataType) to be a supported DataType`,
      );
    });

    it('resource01: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModel();
      const t = () => {
        testInstance.setResource01(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.resource01; Provided element is not an instance of Resource.`);
    });

    it('primitive: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModel();
      let t = () => {
        testInstance.setPrimitive([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.primitive; Provided value array has an element that is not an instance of TestModelPrimitiveComponent.`,
      );

      t = () => {
        testInstance.addPrimitive(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.primitive; Provided element is not an instance of TestModelPrimitiveComponent.`,
      );
    });

    it('complex: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModel();
      let t = () => {
        testInstance.setComplex(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.complex; Provided element is not an instance of TestModelComplexComponent.`);
    });
  });
});
