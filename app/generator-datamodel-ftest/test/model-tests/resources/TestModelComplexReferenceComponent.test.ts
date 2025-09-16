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
import { ConsentStateCodesEnum } from '../../../src/code-systems/ConsentStateCodesEnum';
import { ContributorTypeEnum } from '../../../src/code-systems/ContributorTypeEnum';
import { Reference } from '../../../src/complex-types/complex-datatypes';
import {
  TestModelComplexReferenceComponent,
  TestModelComplexReferenceEnumCodeComponent,
} from '../../../src/resources/TestModel';
import { TestData } from '../../ftest-data';
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
  VALID_HEALTHCARESERVICE_REFERENCE,
  VALID_HEALTHCARESERVICE_REFERENCE_2,
  VALID_LOCATION_REFERENCE,
  VALID_LOCATION_REFERENCE_2,
  VALID_MOCK_COMPLEX_DATATYPE,
  VALID_ORGANIZATION_REFERENCE,
  VALID_ORGANIZATION_REFERENCE_2,
  VALID_PERSON_REFERENCE,
  VALID_PERSON_REFERENCE_2,
} from '../../ftest-mocks';

describe('TestModelComplexReferenceComponent', () => {
  let testTestModelComplexReferenceEnumCodeComponent: TestModelComplexReferenceEnumCodeComponent;
  let testTestModelComplexReferenceEnumCodeComponent_2: TestModelComplexReferenceEnumCodeComponent;
  let testTestModelComplexReferenceEnumCodeComponent_Empty: TestModelComplexReferenceEnumCodeComponent;
  beforeAll(() => {
    const contributorTypeEnum = new ContributorTypeEnum();
    const consentStateCodesEnum = new ConsentStateCodesEnum();

    let enumCode11 = new EnumCodeType(TestData.VALID_CONTRIBUTOR_AUTHOR, contributorTypeEnum);
    let enumCode1x = new EnumCodeType(TestData.VALID_CONSENT_DRAFT, consentStateCodesEnum);
    testTestModelComplexReferenceEnumCodeComponent = new TestModelComplexReferenceEnumCodeComponent(enumCode11, [
      enumCode1x,
    ]);

    enumCode11 = new EnumCodeType(TestData.VALID_CONTRIBUTOR_REVIEWER, contributorTypeEnum);
    enumCode1x = new EnumCodeType(TestData.VALID_CONSENT_ACTIVE, consentStateCodesEnum);
    testTestModelComplexReferenceEnumCodeComponent_2 = new TestModelComplexReferenceEnumCodeComponent(enumCode11, [
      enumCode1x,
    ]);

    testTestModelComplexReferenceEnumCodeComponent_Empty = new TestModelComplexReferenceEnumCodeComponent();
  });

  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new TestModelComplexReferenceComponent();

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasReference01()).toBe(false);
      expect(testInstance.getReference01()).toEqual(new Reference());
      expect(testInstance.hasReference0x()).toBe(false);
      expect(testInstance.getReference0x()).toEqual([] as Reference[]);
      expect(testInstance.hasReference11()).toBe(false);
      expect(testInstance.getReference11()).toEqual(new Reference());
      expect(testInstance.hasReference1x()).toBe(false);
      expect(testInstance.getReference1x()).toEqual([] as Reference[]);
      expect(testInstance.hasEnumCode()).toBe(false);
      expect(testInstance.getEnumCode()).toEqual([] as TestModelComplexReferenceEnumCodeComponent[]);
    });

    it('should be properly instantiated with required elements', () => {
      const testInstance = new TestModelComplexReferenceComponent(
        VALID_PERSON_REFERENCE,
        [VALID_HEALTHCARESERVICE_REFERENCE],
        [testTestModelComplexReferenceEnumCodeComponent],
      );

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasReference01()).toBe(false);
      expect(testInstance.getReference01()).toEqual(new Reference());
      expect(testInstance.hasReference0x()).toBe(false);
      expect(testInstance.getReference0x()).toEqual([] as Reference[]);
      expect(testInstance.hasReference11()).toBe(true);
      expect(testInstance.getReference11()).toEqual(VALID_PERSON_REFERENCE);
      expect(testInstance.hasReference1x()).toEqual(true);
      expect(testInstance.getReference1x()).toEqual([VALID_HEALTHCARESERVICE_REFERENCE]);
      expect(testInstance.hasEnumCode()).toBe(true);
      expect(testInstance.getEnumCode()).toEqual([testTestModelComplexReferenceEnumCodeComponent]);
    });

    it('should properly copy()', () => {
      const testModel = new TestModelComplexReferenceComponent();

      initializeBackboneElementProperties(testModel, 1);

      testModel.setReference01(VALID_LOCATION_REFERENCE);
      testModel.setReference0x([VALID_ORGANIZATION_REFERENCE]);
      testModel.setReference11(VALID_PERSON_REFERENCE);
      testModel.setReference1x([VALID_HEALTHCARESERVICE_REFERENCE]);
      testModel.setEnumCode([testTestModelComplexReferenceEnumCodeComponent]);

      let testInstance: TestModelComplexReferenceComponent = testModel.copy();

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasReference01()).toBe(true);
      expect(testInstance.getReference01()).toEqual(VALID_LOCATION_REFERENCE);
      expect(testInstance.hasReference0x()).toBe(true);
      expect(testInstance.getReference0x()).toEqual([VALID_ORGANIZATION_REFERENCE]);
      expect(testInstance.hasReference11()).toBe(true);
      expect(testInstance.getReference11()).toEqual(VALID_PERSON_REFERENCE);
      expect(testInstance.hasReference1x()).toEqual(true);
      expect(testInstance.getReference1x()).toEqual([VALID_HEALTHCARESERVICE_REFERENCE]);
      expect(testInstance.hasEnumCode()).toBe(true);
      expect(testInstance.getEnumCode()).toEqual([testTestModelComplexReferenceEnumCodeComponent]);

      // Reset to empty

      undefineBackboneElementProperties(testModel);

      testModel.setReference01(TestData.UNDEFINED_VALUE);
      testModel.setReference0x(TestData.UNDEFINED_VALUE);
      testModel.setReference11(TestData.UNDEFINED_VALUE);
      testModel.setReference1x(TestData.UNDEFINED_VALUE);
      testModel.setEnumCode(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasReference01()).toBe(false);
      expect(testInstance.getReference01()).toEqual(new Reference());
      expect(testInstance.hasReference0x()).toBe(false);
      expect(testInstance.getReference0x()).toEqual([] as Reference[]);
      expect(testInstance.hasReference11()).toBe(false);
      expect(testInstance.getReference11()).toEqual(new Reference());
      expect(testInstance.hasReference1x()).toEqual(false);
      expect(testInstance.getReference1x()).toEqual([] as Reference[]);
      expect(testInstance.hasEnumCode()).toBe(false);
      expect(testInstance.getEnumCode()).toEqual([] as TestModelComplexReferenceEnumCodeComponent[]);
    });

    it('should be properly reset by modifying/adding all properties', () => {
      const testInstance = new TestModelComplexReferenceComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setReference01(VALID_LOCATION_REFERENCE);
      testInstance.setReference0x([VALID_ORGANIZATION_REFERENCE]);
      testInstance.setReference11(VALID_PERSON_REFERENCE);
      testInstance.setReference1x([VALID_HEALTHCARESERVICE_REFERENCE]);
      testInstance.setEnumCode([testTestModelComplexReferenceEnumCodeComponent]);

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedBackboneElementProperties(testInstance, 1);

      expect(testInstance.hasReference01()).toBe(true);
      expect(testInstance.getReference01()).toEqual(VALID_LOCATION_REFERENCE);
      expect(testInstance.hasReference0x()).toBe(true);
      expect(testInstance.getReference0x()).toEqual([VALID_ORGANIZATION_REFERENCE]);
      expect(testInstance.hasReference11()).toBe(true);
      expect(testInstance.getReference11()).toEqual(VALID_PERSON_REFERENCE);
      expect(testInstance.hasReference1x()).toEqual(true);
      expect(testInstance.getReference1x()).toEqual([VALID_HEALTHCARESERVICE_REFERENCE]);
      expect(testInstance.hasEnumCode()).toBe(true);
      expect(testInstance.getEnumCode()).toEqual([testTestModelComplexReferenceEnumCodeComponent]);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setReference01(VALID_LOCATION_REFERENCE_2);
      testInstance.addReference0x(VALID_ORGANIZATION_REFERENCE_2);
      testInstance.setReference11(VALID_PERSON_REFERENCE_2);
      testInstance.addReference1x(VALID_HEALTHCARESERVICE_REFERENCE_2);
      testInstance.addEnumCode(testTestModelComplexReferenceEnumCodeComponent_2);

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetBackboneElementProperties(testInstance);

      expect(testInstance.hasReference01()).toBe(true);
      expect(testInstance.getReference01()).toEqual(VALID_LOCATION_REFERENCE_2);
      expect(testInstance.hasReference0x()).toBe(true);
      expect(testInstance.getReference0x()).toEqual([VALID_ORGANIZATION_REFERENCE, VALID_ORGANIZATION_REFERENCE_2]);
      expect(testInstance.hasReference11()).toBe(true);
      expect(testInstance.getReference11()).toEqual(VALID_PERSON_REFERENCE_2);
      expect(testInstance.hasReference1x()).toEqual(true);
      expect(testInstance.getReference1x()).toEqual([
        VALID_HEALTHCARESERVICE_REFERENCE,
        VALID_HEALTHCARESERVICE_REFERENCE_2,
      ]);
      expect(testInstance.hasEnumCode()).toBe(true);
      expect(testInstance.getEnumCode()).toEqual([
        testTestModelComplexReferenceEnumCodeComponent,
        testTestModelComplexReferenceEnumCodeComponent_2,
      ]);

      // Reset to empty

      undefineBackboneElementProperties(testInstance);

      testInstance.setReference01(TestData.UNDEFINED_VALUE);
      testInstance.setReference0x(TestData.UNDEFINED_VALUE);
      testInstance.setReference11(TestData.UNDEFINED_VALUE);
      testInstance.setReference1x(TestData.UNDEFINED_VALUE);
      testInstance.setEnumCode(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasReference01()).toBe(false);
      expect(testInstance.getReference01()).toEqual(new Reference());
      expect(testInstance.hasReference0x()).toBe(false);
      expect(testInstance.getReference0x()).toEqual([] as Reference[]);
      expect(testInstance.hasReference11()).toBe(false);
      expect(testInstance.getReference11()).toEqual(new Reference());
      expect(testInstance.hasReference1x()).toEqual(false);
      expect(testInstance.getReference1x()).toEqual([] as Reference[]);
      expect(testInstance.hasEnumCode()).toBe(false);
      expect(testInstance.getEnumCode()).toEqual([] as TestModelComplexReferenceEnumCodeComponent[]);
    });
  });

  describe('Serialization/Deserialization', () => {
    const altLocationReference: Reference = VALID_LOCATION_REFERENCE.copy();
    altLocationReference.setId(TestData.DATATYPE_ID);
    altLocationReference.addExtension(DATATYPE_EXTENSION);

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
      reference01: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
        reference: 'Location/LOC-12345',
      },
      reference0x: [
        {
          reference: 'Organization/ORG-54321',
        },
        {
          reference: 'Organization/ORG-09876',
        },
      ],
      reference11: {
        reference: 'SimplePersonModel/PER-13579',
      },
      reference1x: [
        {
          reference: 'HealthcareService/HS-24680',
        },
        {
          reference: 'HealthcareService/HS-08642',
        },
      ],
      enumCode: [
        {
          enumCode11: 'author',
          enumCode1x: ['draft'],
        },
        {
          enumCode11: 'reviewer',
          enumCode1x: ['active'],
        },
      ],
    };
    const INVALID_JSON_1 = {
      reference01: [
        {
          reference: 'Location/LOC-12345',
        },
      ],
    };
    const INVALID_JSON_2 = {
      reference0x: [
        {
          reference: false,
        },
      ],
    };
    const INVALID_JSON_3 = {
      reference0x: {
        reference: 'Organization/ORG-54321',
      },
    };
    const INVALID_JSON_4 = {
      enumCode: [
        {
          enumCode11: 'bogus',
        },
      ],
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
      reference01: null,
      reference0x: null,
      reference11: null,
      reference1x: null,
      enumCode: null,
      unexpectedField: 'should be ignored without error',
    };

    it('should properly create serialized content', () => {
      const testInstance = new TestModelComplexReferenceComponent();

      initializeBackboneElementProperties(testInstance, 2);

      testInstance.setReference01(altLocationReference);
      testInstance.setReference0x([VALID_ORGANIZATION_REFERENCE]);
      testInstance.addReference0x(VALID_ORGANIZATION_REFERENCE_2);
      testInstance.setReference11(VALID_PERSON_REFERENCE);
      testInstance.setReference1x([VALID_HEALTHCARESERVICE_REFERENCE]);
      testInstance.addReference1x(VALID_HEALTHCARESERVICE_REFERENCE_2);
      testInstance.setEnumCode([testTestModelComplexReferenceEnumCodeComponent]);
      testInstance.addEnumCode(testTestModelComplexReferenceEnumCodeComponent_2);

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasReference01()).toBe(true);
      expect(testInstance.getReference01()).toEqual(altLocationReference);
      expect(testInstance.hasReference0x()).toBe(true);
      expect(testInstance.getReference0x()).toEqual([VALID_ORGANIZATION_REFERENCE, VALID_ORGANIZATION_REFERENCE_2]);
      expect(testInstance.hasReference11()).toBe(true);
      expect(testInstance.getReference11()).toEqual(VALID_PERSON_REFERENCE);
      expect(testInstance.hasReference1x()).toEqual(true);
      expect(testInstance.getReference1x()).toEqual([
        VALID_HEALTHCARESERVICE_REFERENCE,
        VALID_HEALTHCARESERVICE_REFERENCE_2,
      ]);
      expect(testInstance.hasEnumCode()).toBe(true);
      expect(testInstance.getEnumCode()).toEqual([
        testTestModelComplexReferenceEnumCodeComponent,
        testTestModelComplexReferenceEnumCodeComponent_2,
      ]);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should properly create serialized content with no fields', () => {
      const testInstance = new TestModelComplexReferenceComponent();

      initializeBackboneElementProperties(testInstance, 2);

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasReference01()).toBe(false);
      expect(testInstance.getReference01()).toEqual(new Reference());
      expect(testInstance.hasReference0x()).toBe(false);
      expect(testInstance.getReference0x()).toEqual([] as Reference[]);
      expect(testInstance.hasReference11()).toBe(false);
      expect(testInstance.getReference11()).toEqual(new Reference());
      expect(testInstance.hasReference1x()).toEqual(false);
      expect(testInstance.getReference1x()).toEqual([] as Reference[]);
      expect(testInstance.hasEnumCode()).toBe(false);
      expect(testInstance.getEnumCode()).toEqual([] as TestModelComplexReferenceEnumCodeComponent[]);

      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: TestModelComplexReferenceComponent | undefined;
      testInstance = TestModelComplexReferenceComponent.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = TestModelComplexReferenceComponent.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = TestModelComplexReferenceComponent.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should throw Errors for invalid json types', () => {
      let t = () => {
        TestModelComplexReferenceComponent.parse('NOT AN OBJECT');
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexReferenceComponent JSON is not a JSON object.`);

      t = () => {
        TestModelComplexReferenceComponent.parse(INVALID_JSON_1);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexReferenceComponent.reference01 JSON is not a JSON object.`);

      t = () => {
        TestModelComplexReferenceComponent.parse(INVALID_JSON_2);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexReferenceComponent.reference0x[0].reference is not a string.`);

      t = () => {
        TestModelComplexReferenceComponent.parse(INVALID_JSON_3);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TestModelComplexReferenceComponent.reference0x is not a JSON array.`);

      t = () => {
        TestModelComplexReferenceComponent.parse(INVALID_JSON_4);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown ContributorTypeEnum 'code' value 'bogus'`);
    });

    it('should return parsed TestModelComplexReferenceComponent for valid json', () => {
      const testInstance: TestModelComplexReferenceComponent | undefined =
        TestModelComplexReferenceComponent.parse(VALID_JSON);

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasReference01()).toBe(true);
      expect(testInstance.getReference01()).toEqual(altLocationReference);
      expect(testInstance.hasReference0x()).toBe(true);
      expect(testInstance.getReference0x()).toEqual([VALID_ORGANIZATION_REFERENCE, VALID_ORGANIZATION_REFERENCE_2]);
      expect(testInstance.hasReference11()).toBe(true);
      expect(testInstance.getReference11()).toEqual(VALID_PERSON_REFERENCE);
      expect(testInstance.hasReference1x()).toEqual(true);
      expect(testInstance.getReference1x()).toEqual([
        VALID_HEALTHCARESERVICE_REFERENCE,
        VALID_HEALTHCARESERVICE_REFERENCE_2,
      ]);
      expect(testInstance.hasEnumCode()).toBe(true);
      expect(testInstance.getEnumCode()).toEqual([
        testTestModelComplexReferenceEnumCodeComponent,
        testTestModelComplexReferenceEnumCodeComponent_2,
      ]);
    });

    it('should return parsed TestModelComplexReferenceComponent for valid json with no fields', () => {
      const testInstance: TestModelComplexReferenceComponent | undefined =
        TestModelComplexReferenceComponent.parse(VALID_JSON_NO_FIELDS);

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasReference01()).toBe(false);
      expect(testInstance.getReference01()).toEqual(new Reference());
      expect(testInstance.hasReference0x()).toBe(false);
      expect(testInstance.getReference0x()).toEqual([] as Reference[]);
      expect(testInstance.hasReference11()).toBe(false);
      expect(testInstance.getReference11()).toEqual(new Reference());
      expect(testInstance.hasReference1x()).toEqual(false);
      expect(testInstance.getReference1x()).toEqual([] as Reference[]);
      expect(testInstance.hasEnumCode()).toBe(false);
      expect(testInstance.getEnumCode()).toEqual([] as TestModelComplexReferenceEnumCodeComponent[]);
    });

    it('should return parsed TestModelComplexReferenceComponent for valid json with null fields', () => {
      const testInstance: TestModelComplexReferenceComponent | undefined =
        TestModelComplexReferenceComponent.parse(VALID_JSON_NULL_FIELDS);

      expectBackboneElementBase(
        TestModelComplexReferenceComponent as unknown as IBackboneElement,
        testInstance,
        'TestModelComplexReferenceComponent',
        'TestModel.complex.reference',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isRequiredFieldsEmpty()).toBe(true);
      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
      expectInitializedBackboneElementProperties(testInstance, 2);

      expect(testInstance.hasReference01()).toBe(false);
      expect(testInstance.getReference01()).toEqual(new Reference());
      expect(testInstance.hasReference0x()).toBe(false);
      expect(testInstance.getReference0x()).toEqual([] as Reference[]);
      expect(testInstance.hasReference11()).toBe(false);
      expect(testInstance.getReference11()).toEqual(new Reference());
      expect(testInstance.hasReference1x()).toEqual(false);
      expect(testInstance.getReference1x()).toEqual([] as Reference[]);
      expect(testInstance.hasEnumCode()).toBe(false);
      expect(testInstance.getEnumCode()).toEqual([] as TestModelComplexReferenceEnumCodeComponent[]);
    });
  });

  describe('Type Assertion Tests', () => {
    it('constructor: should throw appropriate errors when instantiated with an invalid required data elements', () => {
      let t = () => {
        // @ts-expect-error: Allow for testing
        new TestModelComplexReferenceComponent(VALID_MOCK_COMPLEX_DATATYPE, null, null);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ReferenceTargets decorator on setReference11 (TestModel.complex.reference.reference11) expects a single argument to be type of 'Reference | undefined | null'`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        new TestModelComplexReferenceComponent(null, [VALID_MOCK_COMPLEX_DATATYPE], null);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ReferenceTargets decorator on setReference1x (TestModel.complex.reference.reference1x) expects argument[0] to be type of 'Reference'`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        new TestModelComplexReferenceComponent(null, null, [VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode; Provided value array has an element that is not an instance of TestModelComplexReferenceEnumCodeComponent.`,
      );
    });

    it('reference01: should throw appropriate errors for an invalid datatype', () => {
      const testTestDataModelReferenceComponent = new TestModelComplexReferenceComponent();
      const t = () => {
        // @ts-expect-error: Allow for testing
        testTestDataModelReferenceComponent.setReference01(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ReferenceTargets decorator on setReference01 (TestModel.complex.reference.reference01) expects a single argument to be type of 'Reference | undefined | null'`,
      );
    });

    it('reference0x: should throw appropriate errors for an invalid datatype', () => {
      const testTestDataModelReferenceComponent = new TestModelComplexReferenceComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testTestDataModelReferenceComponent.setReference0x([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ReferenceTargets decorator on setReference0x (TestModel.complex.reference.reference0x) expects argument[0] to be type of 'Reference'`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testTestDataModelReferenceComponent.addReference0x(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ReferenceTargets decorator on addReference0x (TestModel.complex.reference.reference0x) expects a single argument to be type of 'Reference | undefined | null'`,
      );
    });

    it('reference11: should throw appropriate errors for an invalid datatype', () => {
      const testTestDataModelReferenceComponent = new TestModelComplexReferenceComponent();
      const t = () => {
        // @ts-expect-error: Allow for testing
        testTestDataModelReferenceComponent.setReference11(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ReferenceTargets decorator on setReference11 (TestModel.complex.reference.reference11) expects a single argument to be type of 'Reference | undefined | null'`,
      );
    });

    it('reference1x: should throw appropriate errors for an invalid datatype', () => {
      const testTestDataModelReferenceComponent = new TestModelComplexReferenceComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testTestDataModelReferenceComponent.setReference1x([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ReferenceTargets decorator on setReference1x (TestModel.complex.reference.reference1x) expects argument[0] to be type of 'Reference'`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testTestDataModelReferenceComponent.addReference1x(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ReferenceTargets decorator on addReference1x (TestModel.complex.reference.reference1x) expects a single argument to be type of 'Reference | undefined | null'`,
      );
    });

    it('enumCode: should throw appropriate errors for an invalid datatype', () => {
      const testTestDataModelReferenceComponent = new TestModelComplexReferenceComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testTestDataModelReferenceComponent.setEnumCode([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode; Provided value array has an element that is not an instance of TestModelComplexReferenceEnumCodeComponent.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testTestDataModelReferenceComponent.addEnumCode(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid TestModel.complex.reference.enumCode; Provided element is not an instance of TestModelComplexReferenceEnumCodeComponent.`,
      );
    });
  });
});
