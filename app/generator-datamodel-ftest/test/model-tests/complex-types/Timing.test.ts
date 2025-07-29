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

import { DateTimeType, fhirDateTime, InvalidTypeError, PrimitiveTypeError } from '@paq-ts-fhir/fhir-core';
import { CodeableConcept, Timing, TimingRepeatComponent } from '../../../src/complex-types/complex-datatypes';
import { TestData } from '../../ftest-data';
import {
  expectBackboneTypeBase,
  expectInitializedBackboneTypeProperties,
  expectResetBackboneTypeProperties,
  expectUndefinedBackboneTypeProperties,
  initializeBackboneTypeProperties,
  resetBackboneTypeProperties,
  undefineBackboneTypeProperties,
} from '../../ftest-utils';
import {
  DATATYPE_EXTENSION,
  VALID_CODEABLE_CONCEPT,
  VALID_CODEABLE_CONCEPT_2,
  VALID_MOCK_COMPLEX_DATATYPE,
} from '../../ftest-mocks';

describe('Timing', () => {
  let testTimingRepeatComponent: TimingRepeatComponent;
  let testTimingRepeatComponent_2: TimingRepeatComponent;
  beforeAll(() => {
    testTimingRepeatComponent = new TimingRepeatComponent();
    testTimingRepeatComponent.setCount(1);
    testTimingRepeatComponent.setCountMax(1);

    testTimingRepeatComponent_2 = new TimingRepeatComponent();
    testTimingRepeatComponent_2.setCount(2);
    testTimingRepeatComponent_2.setCountMax(2);
  });

  describe('Core', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new Timing();

      expectBackboneTypeBase<Timing>(Timing, testInstance, 'Timing', 'Timing');
      expectUndefinedBackboneTypeProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isComplexDataType()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();

      expect(testInstance.hasEventElement()).toBe(false);
      expect(testInstance.getEventElement()).toEqual([] as DateTimeType[]);
      expect(testInstance.hasEvent()).toBe(false);
      expect(testInstance.getEvent()).toEqual([] as fhirDateTime[]);
      expect(testInstance.hasRepeat()).toBe(false);
      expect(testInstance.getRepeat()).toEqual(new TimingRepeatComponent());
      expect(testInstance.hasCode()).toBe(false);
      expect(testInstance.getCode()).toEqual(new CodeableConcept());
    });

    it('should properly copy()', () => {
      const testModel = new Timing();

      initializeBackboneTypeProperties(testModel, 1);

      testModel.setEvent([TestData.VALID_DATETIME]);
      testModel.setRepeat(testTimingRepeatComponent);
      testModel.setCode(VALID_CODEABLE_CONCEPT);

      let testInstance: Timing = testModel.copy();

      expectBackboneTypeBase<Timing>(Timing, testInstance, 'Timing', 'Timing');
      expectInitializedBackboneTypeProperties(testInstance, 1);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(true);
      expect(testInstance.toJSON()).toBeDefined();

      expect(testInstance.hasEventElement()).toBe(true);
      expect(testInstance.getEventElement()).toEqual([TestData.VALID_DATETIME_TYPE]);
      expect(testInstance.hasEvent()).toBe(true);
      expect(testInstance.getEvent()).toEqual([TestData.VALID_DATETIME]);
      expect(testInstance.hasRepeat()).toBe(true);
      expect(testInstance.getRepeat()).toEqual(testTimingRepeatComponent);
      expect(testInstance.hasCode()).toBe(true);
      expect(testInstance.getCode()).toEqual(VALID_CODEABLE_CONCEPT);

      // Reset to undefined

      undefineBackboneTypeProperties(testModel);

      testModel.setEvent(TestData.UNDEFINED_VALUE);
      testModel.setRepeat(TestData.UNDEFINED_VALUE);
      testModel.setCode(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectBackboneTypeBase<Timing>(Timing, testInstance, 'Timing', 'Timing');
      expectUndefinedBackboneTypeProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isComplexDataType()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();

      expect(testInstance.hasEventElement()).toBe(false);
      expect(testInstance.getEventElement()).toEqual([] as DateTimeType[]);
      expect(testInstance.hasEvent()).toBe(false);
      expect(testInstance.getEvent()).toEqual([] as fhirDateTime[]);
      expect(testInstance.hasRepeat()).toBe(false);
      expect(testInstance.getRepeat()).toEqual(new TimingRepeatComponent());
      expect(testInstance.hasCode()).toBe(false);
      expect(testInstance.getCode()).toEqual(new CodeableConcept());
    });

    it('should be properly reset by modifying all properties (primitive values as appropriate)', () => {
      const testInstance = new Timing();

      initializeBackboneTypeProperties(testInstance, 1);

      testInstance.setEvent([TestData.VALID_DATETIME]);
      testInstance.setRepeat(testTimingRepeatComponent);
      testInstance.setCode(VALID_CODEABLE_CONCEPT);

      expectBackboneTypeBase<Timing>(Timing, testInstance, 'Timing', 'Timing');
      expectInitializedBackboneTypeProperties(testInstance, 1);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(true);
      expect(testInstance.toJSON()).toBeDefined();

      expect(testInstance.hasEventElement()).toBe(true);
      expect(testInstance.getEventElement()).toEqual([TestData.VALID_DATETIME_TYPE]);
      expect(testInstance.hasEvent()).toBe(true);
      expect(testInstance.getEvent()).toEqual([TestData.VALID_DATETIME]);
      expect(testInstance.hasRepeat()).toBe(true);
      expect(testInstance.getRepeat()).toEqual(testTimingRepeatComponent);
      expect(testInstance.hasCode()).toBe(true);
      expect(testInstance.getCode()).toEqual(VALID_CODEABLE_CONCEPT);

      // Reset

      resetBackboneTypeProperties(testInstance);

      testInstance.setEvent([TestData.VALID_DATETIME_2]);
      testInstance.addEvent(TestData.VALID_DATETIME);
      testInstance.setRepeat(testTimingRepeatComponent_2);
      testInstance.setCode(VALID_CODEABLE_CONCEPT_2);

      expectBackboneTypeBase<Timing>(Timing, testInstance, 'Timing', 'Timing');
      expectResetBackboneTypeProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(true);
      expect(testInstance.toJSON()).toBeDefined();

      expect(testInstance.hasEventElement()).toBe(true);
      expect(testInstance.getEventElement()).toEqual([TestData.VALID_DATETIME_TYPE_2, TestData.VALID_DATETIME_TYPE]);
      expect(testInstance.hasEvent()).toBe(true);
      expect(testInstance.getEvent()).toEqual([TestData.VALID_DATETIME_2, TestData.VALID_DATETIME]);
      expect(testInstance.hasRepeat()).toBe(true);
      expect(testInstance.getRepeat()).toEqual(testTimingRepeatComponent_2);
      expect(testInstance.hasCode()).toBe(true);
      expect(testInstance.getCode()).toEqual(VALID_CODEABLE_CONCEPT_2);

      // Reset to undefined

      undefineBackboneTypeProperties(testInstance);

      testInstance.setEvent(TestData.UNDEFINED_VALUE);
      testInstance.setRepeat(TestData.UNDEFINED_VALUE);
      testInstance.setCode(TestData.UNDEFINED_VALUE);

      expectBackboneTypeBase<Timing>(Timing, testInstance, 'Timing', 'Timing');
      expectUndefinedBackboneTypeProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isComplexDataType()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();

      expect(testInstance.hasEventElement()).toBe(false);
      expect(testInstance.getEventElement()).toEqual([] as DateTimeType[]);
      expect(testInstance.hasEvent()).toBe(false);
      expect(testInstance.getEvent()).toEqual([] as fhirDateTime[]);
      expect(testInstance.hasRepeat()).toBe(false);
      expect(testInstance.getRepeat()).toEqual(new TimingRepeatComponent());
      expect(testInstance.hasCode()).toBe(false);
      expect(testInstance.getCode()).toEqual(new CodeableConcept());
    });

    it('should be properly reset by modifying all properties (PrimitiveType values as appropriate)', () => {
      const testInstance = new Timing();

      initializeBackboneTypeProperties(testInstance, 1);

      testInstance.setEventElement([TestData.VALID_DATETIME_TYPE]);
      testInstance.setRepeat(testTimingRepeatComponent);
      testInstance.setCode(VALID_CODEABLE_CONCEPT);

      expectBackboneTypeBase<Timing>(Timing, testInstance, 'Timing', 'Timing');
      expectInitializedBackboneTypeProperties(testInstance, 1);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(true);
      expect(testInstance.toJSON()).toBeDefined();

      expect(testInstance.hasEventElement()).toBe(true);
      expect(testInstance.getEventElement()).toEqual([TestData.VALID_DATETIME_TYPE]);
      expect(testInstance.hasEvent()).toBe(true);
      expect(testInstance.getEvent()).toEqual([TestData.VALID_DATETIME]);
      expect(testInstance.hasRepeat()).toBe(true);
      expect(testInstance.getRepeat()).toEqual(testTimingRepeatComponent);
      expect(testInstance.hasCode()).toBe(true);
      expect(testInstance.getCode()).toEqual(VALID_CODEABLE_CONCEPT);

      // Reset

      resetBackboneTypeProperties(testInstance);

      testInstance.setEventElement([TestData.VALID_DATETIME_TYPE_2]);
      testInstance.addEventElement(TestData.VALID_DATETIME_TYPE);
      testInstance.setRepeat(testTimingRepeatComponent_2);
      testInstance.setCode(VALID_CODEABLE_CONCEPT_2);

      expectBackboneTypeBase<Timing>(Timing, testInstance, 'Timing', 'Timing');
      expectResetBackboneTypeProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(true);
      expect(testInstance.toJSON()).toBeDefined();

      expect(testInstance.hasEventElement()).toBe(true);
      expect(testInstance.getEventElement()).toEqual([TestData.VALID_DATETIME_TYPE_2, TestData.VALID_DATETIME_TYPE]);
      expect(testInstance.hasEvent()).toBe(true);
      expect(testInstance.getEvent()).toEqual([TestData.VALID_DATETIME_2, TestData.VALID_DATETIME]);
      expect(testInstance.hasRepeat()).toBe(true);
      expect(testInstance.getRepeat()).toEqual(testTimingRepeatComponent_2);
      expect(testInstance.hasCode()).toBe(true);
      expect(testInstance.getCode()).toEqual(VALID_CODEABLE_CONCEPT_2);

      // Reset to undefined

      undefineBackboneTypeProperties(testInstance);

      testInstance.setEventElement(TestData.UNDEFINED_VALUE);
      testInstance.setRepeat(TestData.UNDEFINED_VALUE);
      testInstance.setCode(TestData.UNDEFINED_VALUE);

      expectBackboneTypeBase<Timing>(Timing, testInstance, 'Timing', 'Timing');
      expectUndefinedBackboneTypeProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isComplexDataType()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();

      expect(testInstance.hasEventElement()).toBe(false);
      expect(testInstance.getEventElement()).toEqual([] as DateTimeType[]);
      expect(testInstance.hasEvent()).toBe(false);
      expect(testInstance.getEvent()).toEqual([] as fhirDateTime[]);
      expect(testInstance.hasRepeat()).toBe(false);
      expect(testInstance.getRepeat()).toEqual(new TimingRepeatComponent());
      expect(testInstance.hasCode()).toBe(false);
      expect(testInstance.getCode()).toEqual(new CodeableConcept());
    });
  });

  describe('Serialization/Deserialization', () => {
    const altEvent = TestData.VALID_DATETIME_TYPE.copy();
    altEvent.setId(TestData.DATATYPE_ID);
    altEvent.addExtension(DATATYPE_EXTENSION);

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
      event: ['2024-01-28T14:30:00Z'],
      _event: [
        {
          id: 'DT-1357',
          extension: [
            {
              url: 'datatypeExtUrl',
              valueString: 'Datatype Extension string value',
            },
          ],
        },
      ],
      repeat: {
        count: 1,
        countMax: 1,
      },
      code: {
        coding: [
          {
            system: 'validUri',
            code: 'testCodeType',
            display: 'TestCodeType',
          },
        ],
        text: 'TestCodeType',
      },
    };

    it('should properly create serialized content', () => {
      const testModel = new Timing();

      initializeBackboneTypeProperties(testModel, 2);

      testModel.setEventElement([altEvent]);
      testModel.setRepeat(testTimingRepeatComponent);
      testModel.setCode(VALID_CODEABLE_CONCEPT);

      let testInstance: Timing = testModel.copy();

      expectBackboneTypeBase<Timing>(Timing, testInstance, 'Timing', 'Timing');
      expectInitializedBackboneTypeProperties(testInstance, 2);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(true);

      expect(testInstance.hasEventElement()).toBe(true);
      expect(testInstance.getEventElement()).toEqual([altEvent]);
      expect(testInstance.hasEvent()).toBe(true);
      expect(testInstance.getEvent()).toEqual([TestData.VALID_DATETIME]);
      expect(testInstance.hasRepeat()).toBe(true);
      expect(testInstance.getRepeat()).toEqual(testTimingRepeatComponent);
      expect(testInstance.hasCode()).toBe(true);
      expect(testInstance.getCode()).toEqual(VALID_CODEABLE_CONCEPT);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: Timing | undefined = undefined;
      testInstance = Timing.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = Timing.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = Timing.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should return parsed Timing for valid json', () => {
      const testInstance: Timing | undefined = Timing.parse(VALID_JSON);

      expectBackboneTypeBase<Timing>(Timing, testInstance, 'Timing', 'Timing');
      expectInitializedBackboneTypeProperties(testInstance, 2);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(true);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);

      expect(testInstance.hasEventElement()).toBe(true);
      expect(testInstance.getEventElement()).toEqual([altEvent]);
      expect(testInstance.hasEvent()).toBe(true);
      expect(testInstance.getEvent()).toEqual([TestData.VALID_DATETIME]);
      expect(testInstance.hasRepeat()).toBe(true);
      expect(testInstance.getRepeat()).toEqual(testTimingRepeatComponent);
      expect(testInstance.hasCode()).toBe(true);
      expect(testInstance.getCode()).toEqual(VALID_CODEABLE_CONCEPT);
    });
  });

  describe('Type Assertion Tests', () => {
    it('event: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new Timing();
      let t = () => {
        testInstance.setEventElement([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Timing.event; Provided value array has an element that is not an instance of DateTimeType.`,
      );

      t = () => {
        testInstance.setEventElement([TestData.INVALID_NON_STRING_TYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Timing.event; Provided value array has an element that is not an instance of DateTimeType.`,
      );

      t = () => {
        testInstance.addEventElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.event; Provided element is not an instance of DateTimeType.`);

      t = () => {
        testInstance.setEvent([TestData.INVALID_NON_STRING_TYPE_VALUE]);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.event array item (Invalid datatype)`);

      t = () => {
        testInstance.addEvent(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.event array item (Invalid datatype)`);
    });

    it('repeat: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new Timing();
      const t = () => {
        testInstance.setRepeat(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat; Provided element is not an instance of TimingRepeatComponent`);
    });

    it('code: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new Timing();
      const t = () => {
        testInstance.setCode(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.code; Provided element is not an instance of CodeableConcept.`);
    });
  });
});
