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
import { EnumCodeType, FhirError, IBackboneElement, InvalidTypeError } from '@paq-ts-fhir/fhir-core';
import {
  TestModelComplexComponent,
  TestModelComplexReferenceComponent,
  TestModelComplexReferenceEnumCodeComponent,
} from '../../../src/resources/TestModel';
import { Address, HumanName, Period, Reference } from '../../../src/complex-types/complex-datatypes';
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
  });

  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new TestModelComplexComponent();

      expectBackboneElementBase(
        TestModelComplexComponent as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(true);
      const t = () => {
        testInstance.toJSON();
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow(
        'The following required properties do not exist: TestModel.complex.complex11, TestModel.complex.complex1x, TestModel.complex.reference',
      );
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasComplex01()).toBe(false);
      expect(testInstance.getComplex01()).toEqual(new HumanName());
      expect(testInstance.hasComplex0x()).toBe(false);
      expect(testInstance.getComplex0x()).toEqual([] as Address[]);
      expect(testInstance.hasComplex11()).toBe(false);
      expect(testInstance.getComplex11()).toBeNull();
      expect(testInstance.hasComplex1x()).toBe(false);
      expect(testInstance.getComplex1x()).toEqual([] as Period[]);
      expect(testInstance.hasReference()).toBe(false);
      expect(testInstance.getReference()).toBeNull();
    });

    it('should be properly instantiated with required elements', () => {
      const testInstance = new TestModelComplexComponent(
        VALID_DOSAGE,
        [VALID_PERIOD],
        testModelComplexReferenceComponent,
      );

      expectBackboneElementBase(
        TestModelComplexComponent as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
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
        TestModelComplexComponent as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
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
      let t = () => {
        testModel.setComplex11(null);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('TestModel.complex.complex11 is required');
      t = () => {
        testModel.setComplex1x(null);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('TestModel.complex.complex1x is required');
      t = () => {
        testModel.setReference(null);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('TestModel.complex.reference is required');

      testInstance = testModel.copy();

      expectBackboneElementBase(
        TestModelComplexComponent as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
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

    it('should be properly reset by modifying/adding all properties', () => {
      const testInstance = new TestModelComplexComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setComplex01(VALID_HUMAN_NAME);
      testInstance.setComplex0x([VALID_ADDRESS]);
      testInstance.setComplex11(VALID_DOSAGE);
      testInstance.setComplex1x([VALID_PERIOD]);
      testInstance.setReference(testModelComplexReferenceComponent);

      expectBackboneElementBase(
        TestModelComplexComponent as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
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
        TestModelComplexComponent as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
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
      let t = () => {
        testInstance.setComplex11(null);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('TestModel.complex.complex11 is required');
      t = () => {
        testInstance.setComplex1x(null);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('TestModel.complex.complex1x is required');
      t = () => {
        testInstance.setReference(null);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow('TestModel.complex.reference is required');

      expectBackboneElementBase(
        TestModelComplexComponent as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasComplex01()).toBe(false);
      expect(testInstance.getComplex01()).toEqual(new HumanName());
      expect(testInstance.hasComplex0x()).toBe(false);
      expect(testInstance.getComplex0x()).toEqual([] as Address[]);
      expect(testInstance.hasComplex11()).toBe(true);
      expect(testInstance.getComplex11()).toEqual(VALID_DOSAGE_2);
      expect(testInstance.hasComplex1x()).toBe(true);
      expect(testInstance.getComplex1x()).toEqual([VALID_PERIOD_2]);
      expect(testInstance.hasReference()).toBe(true);
      expect(testInstance.getReference()).toEqual(testModelComplexReferenceComponent_2);
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
    const INVALID_JSON = {
      bogusField: 'bogus value',
    };

    it('should throw FhirError from toJSON() when instantiated with missing required properties', () => {
      const testInstance = new TestModelComplexComponent();
      const t = () => {
        testInstance.toJSON();
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow(
        `The following required properties do not exist: TestModel.complex.complex11, TestModel.complex.complex1x, TestModel.complex.reference`,
      );
    });

    it('should properly create serialized content', () => {
      const testInstance = new TestModelComplexComponent();

      initializeBackboneElementProperties(testInstance, 2);

      testInstance.setComplex01(altHumanName);
      testInstance.setComplex0x([VALID_ADDRESS]);
      testInstance.setComplex11(VALID_DOSAGE);
      testInstance.setComplex1x([VALID_PERIOD]);
      testInstance.setReference(testModelComplexReferenceComponent);

      expectBackboneElementBase(
        TestModelComplexComponent as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
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

    it('should return undefined when parsed with no json', () => {
      let testInstance: TestModelComplexComponent | undefined = undefined;
      testInstance = TestModelComplexComponent.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = TestModelComplexComponent.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = TestModelComplexComponent.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should throw FhirError from parse() when JSON is missing required properties', () => {
      const t = () => {
        TestModelComplexComponent.parse(INVALID_JSON);
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow(
        `The following required properties must be included in the provided JSON: TestModelComplexComponent.complex11, TestModelComplexComponent.complex1x, TestModelComplexComponent.reference`,
      );
    });

    it('should return parsed TestModelComplexComponent for valid json', () => {
      const testInstance: TestModelComplexComponent | undefined = TestModelComplexComponent.parse(VALID_JSON);

      expectBackboneElementBase(
        TestModelComplexComponent as IBackboneElement,
        testInstance,
        'TestModelComplexComponent',
        'TestModel.complex',
      );
      expect(testInstance.isEmpty()).toBe(false);
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
  });

  describe('Type Assertion Tests', () => {
    it('constructor: should throw appropriate errors when instantiated with an invalid required data elements', () => {
      let t = () => {
        new TestModelComplexComponent(VALID_MOCK_COMPLEX_DATATYPE, null, null);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.complex.complex11; Provided element is not an instance of Dosage.`);

      t = () => {
        new TestModelComplexComponent(null, [VALID_MOCK_COMPLEX_DATATYPE], null);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.complex1x; Provided value array has an element that is not an instance of Period.`,
      );

      t = () => {
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
        testInstance.setComplex01(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.complex.complex01; Provided element is not an instance of HumanName.`);
    });

    it('complex0x: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexComponent();
      let t = () => {
        testInstance.setComplex0x([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.complex0x; Provided value array has an element that is not an instance of Address.`,
      );

      t = () => {
        testInstance.addComplex0x(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.complex.complex0x; Provided element is not an instance of Address.`);
    });

    it('complex11: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexComponent();
      let t = () => {
        testInstance.setComplex11(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.complex.complex11; Provided element is not an instance of Dosage.`);

      t = () => {
        testInstance.setComplex11(undefined);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(`TestModel.complex.complex11 is required`);

      t = () => {
        testInstance.setComplex11(null);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(`TestModel.complex.complex11 is required`);
    });

    it('complex1x: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexComponent();
      let t = () => {
        testInstance.setComplex1x([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.complex1x; Provided value array has an element that is not an instance of Period.`,
      );

      t = () => {
        testInstance.addComplex1x(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid TestModel.complex.complex1x; Provided element is not an instance of Period.`);

      t = () => {
        testInstance.setComplex1x(undefined);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(`TestModel.complex.complex1x is required`);

      t = () => {
        testInstance.setComplex1x(null);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(`TestModel.complex.complex1x is required`);
    });

    it('reference: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TestModelComplexComponent();
      let t = () => {
        testInstance.setReference(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference; Provided element is not an instance of TestModelComplexReferenceComponent.`,
      );

      t = () => {
        testInstance.setReference(undefined);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(`TestModel.complex.reference is required`);

      t = () => {
        testInstance.setReference(null);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(`TestModel.complex.reference is required`);
    });
  });
});
