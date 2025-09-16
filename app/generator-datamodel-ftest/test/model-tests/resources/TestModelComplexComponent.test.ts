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

import { EnumCodeType, IBackboneElement, InvalidCodeError, InvalidTypeError, JsonError } from '@paq-ts-fhir/fhir-core';
import {
  TestModelComplexComponent,
  TestModelComplexReferenceComponent,
  TestModelComplexReferenceEnumCodeComponent,
} from '../../../src/resources/TestModel';
import { Address, Dosage, HumanName, Period, Reference } from '../../../src/complex-types/complex-datatypes';
import { ConsentStateCodesEnum } from '../../../src/code-systems/ConsentStateCodesEnum';
import { ContributorTypeEnum } from '../../../src/code-systems/ContributorTypeEnum';
import {
  expectBackboneElementBase,
  expectInitializedBackboneElementProperties,
  expectResetBackboneElementProperties,
  expectUndefinedBackboneElementProperties,
  initializeBackboneElementProperties,
  resetBackboneElementProperties,
  undefineBackboneElementProperties,
} from '../../ftest-utils';
import {
  DATATYPE_EXTENSION,
  VALID_ADDRESS,
  VALID_ADDRESS_2,
  VALID_DOSAGE,
  VALID_DOSAGE_2,
  VALID_HUMAN_NAME,
  VALID_HUMAN_NAME_2,
  VALID_MOCK_COMPLEX_DATATYPE,
  VALID_PERIOD,
  VALID_PERIOD_2,
} from '../../ftest-mocks';
import { TestData } from '../../ftest-data';

describe('TestModelComplexComponent', () => {
  let testModelComplexReferenceComponent: TestModelComplexReferenceComponent;
  let testModelComplexReferenceComponent_2: TestModelComplexReferenceComponent;
  let testModelComplexReferenceComponent_Empty: TestModelComplexReferenceComponent;
  let testDataModelEnumCodeComponent: TestModelComplexReferenceEnumCodeComponent;
  beforeAll(() => {
    const VALID_SIMPLE_PERSON_REFERENCE = new Reference();
    VALID_SIMPLE_PERSON_REFERENCE.setReference(`SimplePersonModel/${TestData.VALID_PERSON_REFERENCE_VALUE}`);
    const VALID_SIMPLE_PERSON_REFERENCE_2 = new Reference();
    VALID_SIMPLE_PERSON_REFERENCE_2.setReference(`SimplePersonModel/${TestData.VALID_PERSON_REFERENCE_VALUE_2}`);

    const VALID_HEALTHCARESERVICE_REFERENCE = new Reference();
    VALID_HEALTHCARESERVICE_REFERENCE.setReference(TestData.VALID_HEALTHCARESERVICE_REFERENCE_VALUE);
    const VALID_HEALTHCARESERVICE_REFERENCE_2 = new Reference();
    VALID_HEALTHCARESERVICE_REFERENCE_2.setReference(TestData.VALID_HEALTHCARESERVICE_REFERENCE_VALUE_2);

    const contributorTypeEnum = new ContributorTypeEnum();
    const consentStateCodesEnum = new ConsentStateCodesEnum();

    let enumCode11 = new EnumCodeType(TestData.VALID_CONTRIBUTOR_AUTHOR, contributorTypeEnum);
    let enumCode1x = new EnumCodeType(TestData.VALID_CONSENT_DRAFT, consentStateCodesEnum);
    testDataModelEnumCodeComponent = new TestModelComplexReferenceEnumCodeComponent(enumCode11, [enumCode1x]);

    testModelComplexReferenceComponent = new TestModelComplexReferenceComponent(
      VALID_SIMPLE_PERSON_REFERENCE,
      [VALID_HEALTHCARESERVICE_REFERENCE],
      [testDataModelEnumCodeComponent],
    );

    enumCode11 = new EnumCodeType(TestData.VALID_CONTRIBUTOR_REVIEWER, contributorTypeEnum);
    enumCode1x = new EnumCodeType(TestData.VALID_CONSENT_ACTIVE, consentStateCodesEnum);
    const testDataModelEnumCodeComponent_2 = new TestModelComplexReferenceEnumCodeComponent(enumCode11, [enumCode1x]);

    testModelComplexReferenceComponent_2 = new TestModelComplexReferenceComponent(
      VALID_SIMPLE_PERSON_REFERENCE_2,
      [VALID_HEALTHCARESERVICE_REFERENCE_2],
      [testDataModelEnumCodeComponent_2],
    );

    testModelComplexReferenceComponent_Empty = new TestModelComplexReferenceComponent();
  });

  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new TestModelComplexComponent();

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasComplex01()).toBe(false);
      expect(testInstance.getComplex01()).toEqual(new HumanName());
      expect(testInstance.hasComplex0x()).toBe(false);
      expect(testInstance.getComplex0x()).toEqual([] as Address[]);
      expect(testInstance.hasComplex11()).toBe(false);
      expect(testInstance.getComplex11()).toEqual(new Dosage());
      expect(testInstance.hasComplex1x()).toBe(false);
      expect(testInstance.getComplex1x()).toEqual([] as Period[]);
      expect(testInstance.hasReference()).toBe(false);
      expect(testInstance.getReference()).toEqual(new TestModelComplexReferenceComponent());
    });

    it('should be properly instantiated with required elements', () => {
      const testInstance = new TestModelComplexComponent(
        VALID_DOSAGE,
        [VALID_PERIOD],
        testModelComplexReferenceComponent,
      );

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasComplex01()).toBe(false);
      expect(testInstance.getComplex01()).toEqual(new HumanName());
      expect(testInstance.hasComplex0x()).toBe(false);
      expect(testInstance.getComplex0x()).toEqual([] as Address[]);
      expect(testInstance.hasComplex11()).toBe(true);
      expect(testInstance.getComplex11()).toEqual(VALID_DOSAGE);
      expect(testInstance.hasComplex1x()).toBe(true);
      expect(testInstance.getComplex1x()).toEqual([VALID_PERIOD]);
      expect(testInstance.hasReference()).toBe(true);
      expect(testInstance.getReference()).toEqual(testModelComplexReferenceComponent);
    });

    it('should properly copy()', () => {
      const testModel = new TestModelComplexComponent();

      initializeBackboneElementProperties(testModel, 1);

      testModel.setComplex01(VALID_HUMAN_NAME);
      testModel.setComplex0x([VALID_ADDRESS]);
      testModel.setComplex11(VALID_DOSAGE);
      testModel.setComplex1x([VALID_PERIOD]);
      testModel.setReference(testModelComplexReferenceComponent);

      let testInstance: TestModelComplexComponent = testModel.copy();

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasComplex01()).toBe(true);
      expect(testInstance.getComplex01()).toEqual(VALID_HUMAN_NAME);
      expect(testInstance.hasComplex0x()).toBe(true);
      expect(testInstance.getComplex0x()).toEqual([VALID_ADDRESS]);
      expect(testInstance.hasComplex11()).toBe(true);
      expect(testInstance.getComplex11()).toEqual(VALID_DOSAGE);
      expect(testInstance.hasComplex1x()).toBe(true);
      expect(testInstance.getComplex1x()).toEqual([VALID_PERIOD]);
      expect(testInstance.hasReference()).toBe(true);
      expect(testInstance.getReference()).toEqual(testModelComplexReferenceComponent);

      // Reset to empty

      undefineBackboneElementProperties(testModel);

      testModel.setComplex01(TestData.UNDEFINED_VALUE);
      testModel.setComplex0x(TestData.UNDEFINED_VALUE);
      testModel.setComplex11(TestData.UNDEFINED_VALUE);
      testModel.setComplex1x(TestData.UNDEFINED_VALUE);
      testModel.setReference(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasComplex01()).toBe(false);
      expect(testInstance.getComplex01()).toEqual(new HumanName());
      expect(testInstance.hasComplex0x()).toBe(false);
      expect(testInstance.getComplex0x()).toEqual([] as Address[]);
      expect(testInstance.hasComplex11()).toBe(false);
      expect(testInstance.getComplex11()).toEqual(new Dosage());
      expect(testInstance.hasComplex1x()).toBe(false);
      expect(testInstance.getComplex1x()).toEqual([] as Period[]);
      expect(testInstance.hasReference()).toBe(false);
      expect(testInstance.getReference()).toEqual(new TestModelComplexReferenceComponent());
    });

    it('should be properly reset by modifying/adding all properties', () => {
      const testInstance = new TestModelComplexComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setComplex01(VALID_HUMAN_NAME);
      testInstance.setComplex0x([VALID_ADDRESS]);
      testInstance.setComplex11(VALID_DOSAGE);
      testInstance.setComplex1x([VALID_PERIOD]);
      testInstance.setReference(testModelComplexReferenceComponent);

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasComplex01()).toBe(true);
      expect(testInstance.getComplex01()).toEqual(VALID_HUMAN_NAME);
      expect(testInstance.hasComplex0x()).toBe(true);
      expect(testInstance.getComplex0x()).toEqual([VALID_ADDRESS]);
      expect(testInstance.hasComplex11()).toBe(true);
      expect(testInstance.getComplex11()).toEqual(VALID_DOSAGE);
      expect(testInstance.hasComplex1x()).toBe(true);
      expect(testInstance.getComplex1x()).toEqual([VALID_PERIOD]);
      expect(testInstance.hasReference()).toBe(true);
      expect(testInstance.getReference()).toEqual(testModelComplexReferenceComponent);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setComplex01(VALID_HUMAN_NAME_2);
      testInstance.setComplex0x([VALID_ADDRESS_2]);
      testInstance.setComplex11(VALID_DOSAGE_2);
      testInstance.setComplex1x([VALID_PERIOD_2]);
      testInstance.setReference(testModelComplexReferenceComponent_2);

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetBackboneElementProperties(testInstance);

      expect(testInstance.hasComplex01()).toBe(true);
      expect(testInstance.getComplex01()).toEqual(VALID_HUMAN_NAME_2);
      expect(testInstance.hasComplex0x()).toBe(true);
      expect(testInstance.getComplex0x()).toEqual([VALID_ADDRESS_2]);
      expect(testInstance.hasComplex11()).toBe(true);
      expect(testInstance.getComplex11()).toEqual(VALID_DOSAGE_2);
      expect(testInstance.hasComplex1x()).toBe(true);
      expect(testInstance.getComplex1x()).toEqual([VALID_PERIOD_2]);
      expect(testInstance.hasReference()).toBe(true);
      expect(testInstance.getReference()).toEqual(testModelComplexReferenceComponent_2);

      // Reset to empty

      undefineBackboneElementProperties(testInstance);

      testInstance.setComplex01(TestData.UNDEFINED_VALUE);
      testInstance.setComplex0x(TestData.UNDEFINED_VALUE);
      testInstance.setComplex11(TestData.UNDEFINED_VALUE);
      testInstance.setComplex1x(TestData.UNDEFINED_VALUE);
      testInstance.setReference(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasComplex01()).toBe(false);
      expect(testInstance.getComplex01()).toEqual(new HumanName());
      expect(testInstance.hasComplex0x()).toBe(false);
      expect(testInstance.getComplex0x()).toEqual([] as Address[]);
      expect(testInstance.hasComplex11()).toBe(false);
      expect(testInstance.getComplex11()).toEqual(new Dosage());
      expect(testInstance.hasComplex1x()).toBe(false);
      expect(testInstance.getComplex1x()).toEqual([] as Period[]);
      expect(testInstance.hasReference()).toBe(false);
      expect(testInstance.getReference()).toEqual(new TestModelComplexReferenceComponent());
    });
  });

  describe('Serialization/Deserialization', () => {
    const altHumanName: HumanName = VALID_HUMAN_NAME.copy();
    altHumanName.setId(TestData.DATATYPE_ID);
    altHumanName.addExtension(DATATYPE_EXTENSION);

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
      complex01: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
        family: 'Surname',
        given: ['First', 'Middle'],
        prefix: ['Mr.'],
        suffix: ['Sr.'],
      },
      complex0x: [
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
          reference: 'SimplePersonModel/SimplePersonModel/PER-13579',
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
    };
    const INVALID_JSON_1 = {
      complex01: [
        {
          family: 'Surname',
          given: ['First', 'Middle'],
        },
      ],
    };
    const INVALID_JSON_2 = {
      complex0x: [
        {
          use: 'home',
          type: 'postal',
          city: 'Nashua',
          state: 'NH',
          postalCode: 3064,
        },
      ],
    };
    const INVALID_JSON_3 = {
      complex1x: {
        start: '2024-03-15T00:00:00.000Z',
        end: '2024-07-03T01:00:00.000Z',
      },
    };
    const INVALID_JSON_4 = {
      reference: {
        enumCode: [
          {
            enumCode1x: ['bogus'],
          },
        ],
      },
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
      complex01: null,
      complex0x: null,
      complex11: null,
      complex1x: null,
      reference: null,
      unexpectedField: 'should be ignored without error',
    };

    it('should properly create serialized content', () => {
      const testInstance = new TestModelComplexComponent();

      initializeBackboneElementProperties(testInstance, 2);

      testInstance.setComplex01(altHumanName);
      testInstance.setComplex0x([VALID_ADDRESS]);
      testInstance.setComplex11(VALID_DOSAGE);
      testInstance.setComplex1x([VALID_PERIOD]);
      testInstance.setReference(testModelComplexReferenceComponent);

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasComplex01()).toBe(true);
      expect(testInstance.getComplex01()).toEqual(altHumanName);
      expect(testInstance.hasComplex0x()).toBe(true);
      expect(testInstance.getComplex0x()).toEqual([VALID_ADDRESS]);
      expect(testInstance.hasComplex11()).toBe(true);
      expect(testInstance.getComplex11()).toEqual(VALID_DOSAGE);
      expect(testInstance.hasComplex1x()).toBe(true);
      expect(testInstance.getComplex1x()).toEqual([VALID_PERIOD]);
      expect(testInstance.hasReference()).toBe(true);
      expect(testInstance.getReference()).toEqual(testModelComplexReferenceComponent);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should properly create serialized content with no field values', () => {
      const testInstance = new TestModelComplexComponent();

      initializeBackboneElementProperties(testInstance, 2);

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasComplex01()).toBe(false);
      expect(testInstance.getComplex01()).toEqual(new HumanName());
      expect(testInstance.hasComplex0x()).toBe(false);
      expect(testInstance.getComplex0x()).toEqual([] as Address[]);
      expect(testInstance.hasComplex11()).toBe(false);
      expect(testInstance.getComplex11()).toEqual(new Dosage());
      expect(testInstance.hasComplex1x()).toBe(false);
      expect(testInstance.getComplex1x()).toEqual([] as Period[]);
      expect(testInstance.hasReference()).toBe(false);
      expect(testInstance.getReference()).toEqual(testModelComplexReferenceComponent_Empty);

      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: TestModelComplexComponent | undefined;
      testInstance = TestModelComplexComponent.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = TestModelComplexComponent.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = TestModelComplexComponent.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should throw Errors for invalid json types', () => {
      let t = () => {
        TestModelComplexComponent.parse('NOT AN OBJECT');
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexComponent JSON is not a JSON object.`);

      t = () => {
        TestModelComplexComponent.parse(INVALID_JSON_1);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexComponent.complex01 JSON is not a JSON object.`);

      t = () => {
        TestModelComplexComponent.parse(INVALID_JSON_2);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexComponent.complex0x[0].postalCode is not a string.`);

      t = () => {
        TestModelComplexComponent.parse(INVALID_JSON_3);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexComponent.complex1x is not a JSON array.`);

      t = () => {
        TestModelComplexComponent.parse(INVALID_JSON_4);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown ConsentStateCodesEnum 'code' value 'bogus'`);
    });

    it('should return parsed TestModelComplexComponent for valid json', () => {
      const testInstance: TestModelComplexComponent | undefined = TestModelComplexComponent.parse(VALID_JSON);

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasComplex01()).toBe(true);
      expect(testInstance.getComplex01()).toEqual(altHumanName);
      expect(testInstance.hasComplex0x()).toBe(true);
      expect(testInstance.getComplex0x()).toEqual([VALID_ADDRESS]);
      expect(testInstance.hasComplex11()).toBe(true);
      expect(testInstance.getComplex11()).toEqual(VALID_DOSAGE);
      expect(testInstance.hasComplex1x()).toBe(true);
      expect(testInstance.getComplex1x()).toEqual([VALID_PERIOD]);
      expect(testInstance.hasReference()).toBe(true);
      expect(testInstance.getReference()).toEqual(testModelComplexReferenceComponent);
    });

    it('should return parsed TestModelComplexComponent for valid json with no field values', () => {
      const testInstance: TestModelComplexComponent | undefined = TestModelComplexComponent.parse(VALID_JSON_NO_FIELDS);

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasComplex01()).toBe(false);
      expect(testInstance.getComplex01()).toEqual(new HumanName());
      expect(testInstance.hasComplex0x()).toBe(false);
      expect(testInstance.getComplex0x()).toEqual([] as Address[]);
      expect(testInstance.hasComplex11()).toBe(false);
      expect(testInstance.getComplex11()).toEqual(new Dosage());
      expect(testInstance.hasComplex1x()).toBe(false);
      expect(testInstance.getComplex1x()).toEqual([] as Period[]);
      expect(testInstance.hasReference()).toBe(false);
      expect(testInstance.getReference()).toEqual(testModelComplexReferenceComponent_Empty);
    });

    it('should return parsed TestModelComplexComponent for valid json with null field values', () => {
      const testInstance: TestModelComplexComponent | undefined =
        TestModelComplexComponent.parse(VALID_JSON_NULL_FIELDS);

      expectBackboneElementBase(
        TestModelComplexComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasComplex01()).toBe(false);
      expect(testInstance.getComplex01()).toEqual(new HumanName());
      expect(testInstance.hasComplex0x()).toBe(false);
      expect(testInstance.getComplex0x()).toEqual([] as Address[]);
      expect(testInstance.hasComplex11()).toBe(false);
      expect(testInstance.getComplex11()).toEqual(new Dosage());
      expect(testInstance.hasComplex1x()).toBe(false);
      expect(testInstance.getComplex1x()).toEqual([] as Period[]);
      expect(testInstance.hasReference()).toBe(false);
      expect(testInstance.getReference()).toEqual(testModelComplexReferenceComponent_Empty);
    });
  });

  describe('Type Assertion Tests', () => {
    it('constructor: should throw appropriate errors when instantiated with an invalid required data elements', () => {
      let t = () => {
        // @ts-expect-error: allow for testing
        new TestModelComplexComponent(VALID_MOCK_COMPLEX_DATATYPE, null, null);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.complex.complex11; Provided element is not an instance of Dosage.`);

      t = () => {
        // @ts-expect-error: allow for testing
        new TestModelComplexComponent(null, [VALID_MOCK_COMPLEX_DATATYPE], null);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.complex1x; Provided value array has an element that is not an instance of Period.`,
      );

      t = () => {
        // @ts-expect-error: allow for testing
        new TestModelComplexComponent(null, null, VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference; Provided element is not an instance of TestModelComplexReferenceComponent.`,
      );
    });

    it('complex01: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexComponent();
      let t = () => {
        // @ts-expect-error: allow for testing
        testInstance.setComplex01(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.complex.complex01; Provided element is not an instance of HumanName.`);
    });

    it('complex0x: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexComponent();
      let t = () => {
        // @ts-expect-error: allow for testing
        testInstance.setComplex0x([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.complex0x; Provided value array has an element that is not an instance of Address.`,
      );

      t = () => {
        // @ts-expect-error: allow for testing
        testInstance.addComplex0x(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.complex.complex0x; Provided element is not an instance of Address.`);
    });

    it('complex11: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexComponent();
      const t = () => {
        // @ts-expect-error: allow for testing
        testInstance.setComplex11(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.complex.complex11; Provided element is not an instance of Dosage.`);
    });

    it('complex1x: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexComponent();
      let t = () => {
        // @ts-expect-error: allow for testing
        testInstance.setComplex1x([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.complex1x; Provided value array has an element that is not an instance of Period.`,
      );

      t = () => {
        // @ts-expect-error: allow for testing
        testInstance.addComplex1x(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.complex.complex1x; Provided element is not an instance of Period.`);
    });

    it('reference: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexComponent();
      const t = () => {
        // @ts-expect-error: allow for testing
        testInstance.setReference(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference; Provided element is not an instance of TestModelComplexReferenceComponent.`,
      );
    });
  });
});
