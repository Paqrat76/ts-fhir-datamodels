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
  DecimalType,
  EnumCodeType,
  fhirCode,
  fhirTime,
  IElement,
  InvalidCodeError,
  InvalidTypeError,
  JsonError,
  PositiveIntType,
  PrimitiveTypeError,
  TimeType,
  UnsignedIntType,
} from '@paq-ts-fhir/fhir-core';
import { DaysOfWeekEnum } from '../../../src/code-systems/DaysOfWeekEnum';
import { TimingRepeatComponent } from '../../../src/complex-types/complex-datatypes';
import {
  expectElementBase,
  expectInitializedElementProperties,
  expectResetElementProperties,
  expectUndefinedElementProperties,
  initializeElementProperties,
  resetElementProperties,
  undefineElementProperties,
} from '../../ftest-utils';
import { TestData } from '../../ftest-data';
import {
  DATATYPE_EXTENSION,
  VALID_DURATION,
  VALID_MOCK_COMPLEX_DATATYPE,
  VALID_PERIOD,
  VALID_PERIOD_2,
  VALID_RANGE,
} from '../../ftest-mocks';

describe('TimingRepeatComponent', () => {
  let daysOfWeekEnum: DaysOfWeekEnum;
  let daysOfWeekMonEnum: EnumCodeType;
  let daysOfWeekFriEnum: EnumCodeType;
  let VALID_OFFSET_0: UnsignedIntType;
  beforeAll(() => {
    daysOfWeekEnum = new DaysOfWeekEnum();
    daysOfWeekMonEnum = new EnumCodeType(DaysOfWeekEnum.MON.code, daysOfWeekEnum);
    daysOfWeekFriEnum = new EnumCodeType(DaysOfWeekEnum.FRI.code, daysOfWeekEnum);
    VALID_OFFSET_0 = new UnsignedIntType(0);
  });

  describe('Core', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new TimingRepeatComponent();

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );
      expectUndefinedElementProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toBeUndefined();

      expect(testInstance.hasBounds()).toBe(false);
      expect(testInstance.getBounds()).toBeUndefined();

      expect(testInstance.hasCountElement()).toBe(false);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCount()).toBe(false);
      expect(testInstance.getCount()).toBeUndefined();

      expect(testInstance.hasCountMaxElement()).toBe(false);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCountMax()).toBe(false);
      expect(testInstance.getCountMax()).toBeUndefined();

      expect(testInstance.hasDurationElement()).toBe(false);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType());
      expect(testInstance.hasDuration()).toBe(false);
      expect(testInstance.getDuration()).toBeUndefined();

      expect(testInstance.hasDurationMaxElement()).toBe(false);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasDurationMax()).toBe(false);
      expect(testInstance.getDurationMax()).toBeUndefined();

      expect(testInstance.hasDurationUnitElement()).toBe(false);
      expect(testInstance.getDurationUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasDurationUnit()).toBe(false);
      expect(testInstance.getDurationUnit()).toBeUndefined();

      expect(testInstance.hasFrequencyElement()).toBe(false);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequency()).toBe(false);
      expect(testInstance.getFrequency()).toBeUndefined();

      expect(testInstance.hasFrequencyMaxElement()).toBe(false);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequencyMax()).toBe(false);
      expect(testInstance.getFrequencyMax()).toBeUndefined();

      expect(testInstance.hasPeriodElement()).toBe(false);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriod()).toBe(false);
      expect(testInstance.getPeriod()).toBeUndefined();

      expect(testInstance.hasPeriodMaxElement()).toBe(false);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriodMax()).toBe(false);
      expect(testInstance.getPeriodMax()).toBeUndefined();

      expect(testInstance.hasPeriodUnitElement()).toBe(false);
      expect(testInstance.getPeriodUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasPeriodUnit()).toBe(false);
      expect(testInstance.getPeriodUnit()).toBeUndefined();

      expect(testInstance.hasDayOfWeekEnumType()).toBe(false);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasDayOfWeekElement()).toBe(false);
      expect(testInstance.getDayOfWeekElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasDayOfWeek()).toBe(false);
      expect(testInstance.getDayOfWeek()).toEqual([] as fhirCode[]);

      expect(testInstance.hasTimeOfDayElement()).toBe(false);
      expect(testInstance.getTimeOfDayElement()).toEqual([] as TimeType[]);
      expect(testInstance.hasTimeOfDay()).toBe(false);
      expect(testInstance.getTimeOfDay()).toEqual([] as fhirTime[]);

      expect(testInstance.hasTimeOfDayElement()).toBe(false);
      expect(testInstance.getTimeOfDayElement()).toEqual([] as TimeType[]);
      expect(testInstance.hasTimeOfDay()).toBe(false);
      expect(testInstance.getTimeOfDay()).toEqual([] as fhirTime[]);

      expect(testInstance.hasWhenElement()).toBe(false);
      expect(testInstance.getWhenElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasWhen()).toBe(false);
      expect(testInstance.getWhen()).toEqual([] as fhirCode[]);

      expect(testInstance.hasOffsetElement()).toBe(false);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasOffset()).toBe(false);
      expect(testInstance.getOffset()).toBeUndefined();
    });

    it('should properly copy()', () => {
      const testModel = new TimingRepeatComponent();

      initializeElementProperties(testModel, 1);

      testModel.setBounds(VALID_PERIOD);
      testModel.setCount(1);
      testModel.setCountMax(2);
      testModel.setDuration(1.0);
      testModel.setDurationMax(2.0);
      testModel.setDurationUnit(TestData.VALID_CODE);
      testModel.setFrequency(1);
      testModel.setFrequencyMax(2);
      testModel.setPeriod(1.0);
      testModel.setPeriodMax(2.0);
      testModel.setPeriodUnit(TestData.VALID_CODE);
      testModel.setDayOfWeek([DaysOfWeekEnum.MON.code, DaysOfWeekEnum.FRI.code]);
      testModel.setTimeOfDay(['08:00:00', '17:00:00']);
      testModel.setWhen([TestData.VALID_CODE]);
      testModel.setOffset(0);

      let testInstance: TimingRepeatComponent = testModel.copy();

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testModel,
        'TimingRepeatComponent',
        'Timing.repeat',
      );

      expectInitializedElementProperties(testInstance, 1);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();

      expect(testInstance.hasBounds()).toBe(true);
      expect(testInstance.getBounds()).toEqual(VALID_PERIOD);

      expect(testInstance.hasCountElement()).toBe(true);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType(1));
      expect(testInstance.hasCount()).toBe(true);
      expect(testInstance.getCount()).toStrictEqual(1);

      expect(testInstance.hasCountMaxElement()).toBe(true);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType(2));
      expect(testInstance.hasCountMax()).toBe(true);
      expect(testInstance.getCountMax()).toStrictEqual(2);

      expect(testInstance.hasDurationElement()).toBe(true);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType(1.0));
      expect(testInstance.hasDuration()).toBe(true);
      expect(testInstance.getDuration()).toStrictEqual(1.0);

      expect(testInstance.hasDurationMaxElement()).toBe(true);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType(2.0));
      expect(testInstance.hasDurationMax()).toBe(true);
      expect(testInstance.getDurationMax()).toStrictEqual(2.0);

      expect(testInstance.hasDurationUnitElement()).toBe(true);
      expect(testInstance.getDurationUnitElement()).toEqual(TestData.VALID_CODE_TYPE);
      expect(testInstance.hasDurationUnit()).toBe(true);
      expect(testInstance.getDurationUnit()).toEqual(TestData.VALID_CODE);

      expect(testInstance.hasFrequencyElement()).toBe(true);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType(1));
      expect(testInstance.hasFrequency()).toBe(true);
      expect(testInstance.getFrequency()).toStrictEqual(1);

      expect(testInstance.hasFrequencyMaxElement()).toBe(true);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType(2));
      expect(testInstance.hasFrequencyMax()).toBe(true);
      expect(testInstance.getFrequencyMax()).toStrictEqual(2);

      expect(testInstance.hasPeriodElement()).toBe(true);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType(1.0));
      expect(testInstance.hasPeriod()).toBe(true);
      expect(testInstance.getPeriod()).toStrictEqual(1.0);

      expect(testInstance.hasPeriodMaxElement()).toBe(true);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType(2.0));
      expect(testInstance.hasPeriodMax()).toBe(true);
      expect(testInstance.getPeriodMax()).toStrictEqual(2.0);

      expect(testInstance.hasPeriodUnitElement()).toBe(true);
      expect(testInstance.getPeriodUnitElement()).toEqual(TestData.VALID_CODE_TYPE);
      expect(testInstance.hasPeriodUnit()).toBe(true);
      expect(testInstance.getPeriodUnit()).toStrictEqual(TestData.VALID_CODE);

      expect(testInstance.hasDayOfWeekEnumType()).toBe(true);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([daysOfWeekMonEnum, daysOfWeekFriEnum]);
      expect(testInstance.hasDayOfWeekElement()).toBe(true);
      expect(testInstance.getDayOfWeekElement()).toEqual([
        daysOfWeekMonEnum as CodeType,
        daysOfWeekFriEnum as CodeType,
      ]);
      expect(testInstance.hasDayOfWeek()).toBe(true);
      expect(testInstance.getDayOfWeek()).toEqual([DaysOfWeekEnum.MON.code, DaysOfWeekEnum.FRI.code]);

      expect(testInstance.hasTimeOfDayElement()).toBe(true);
      expect(testInstance.getTimeOfDayElement()).toEqual([new TimeType('08:00:00'), new TimeType('17:00:00')]);
      expect(testInstance.hasTimeOfDay()).toBe(true);
      expect(testInstance.getTimeOfDay()).toEqual(['08:00:00', '17:00:00']);

      expect(testInstance.hasWhenElement()).toBe(true);
      expect(testInstance.getWhenElement()).toEqual([TestData.VALID_CODE_TYPE]);
      expect(testInstance.hasWhen()).toBe(true);
      expect(testInstance.getWhen()).toEqual([TestData.VALID_CODE]);

      expect(testInstance.hasOffsetElement()).toBe(true);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType(0));
      expect(testInstance.hasOffset()).toBe(true);
      expect(testInstance.getOffset()).toStrictEqual(0);

      // Reset to undefined

      undefineElementProperties(testModel);

      testModel.setBounds(TestData.UNDEFINED_VALUE);
      testModel.setCount(TestData.UNDEFINED_VALUE);
      testModel.setCountMax(TestData.UNDEFINED_VALUE);
      testModel.setDuration(TestData.UNDEFINED_VALUE);
      testModel.setDurationMax(TestData.UNDEFINED_VALUE);
      testModel.setDurationUnit(TestData.UNDEFINED_VALUE);
      testModel.setFrequency(TestData.UNDEFINED_VALUE);
      testModel.setFrequencyMax(TestData.UNDEFINED_VALUE);
      testModel.setPeriod(TestData.UNDEFINED_VALUE);
      testModel.setPeriodMax(TestData.UNDEFINED_VALUE);
      testModel.setPeriodUnit(TestData.UNDEFINED_VALUE);
      testModel.setDayOfWeek(TestData.UNDEFINED_VALUE);
      testModel.setTimeOfDay(TestData.UNDEFINED_VALUE);
      testModel.setWhen(TestData.UNDEFINED_VALUE);
      testModel.setOffset(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );
      expectUndefinedElementProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toBeUndefined();

      expect(testInstance.hasBounds()).toBe(false);
      expect(testInstance.getBounds()).toBeUndefined();

      expect(testInstance.hasCountElement()).toBe(false);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCount()).toBe(false);
      expect(testInstance.getCount()).toBeUndefined();

      expect(testInstance.hasCountMaxElement()).toBe(false);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCountMax()).toBe(false);
      expect(testInstance.getCountMax()).toBeUndefined();

      expect(testInstance.hasDurationElement()).toBe(false);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType());
      expect(testInstance.hasDuration()).toBe(false);
      expect(testInstance.getDuration()).toBeUndefined();

      expect(testInstance.hasDurationMaxElement()).toBe(false);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasDurationMax()).toBe(false);
      expect(testInstance.getDurationMax()).toBeUndefined();

      expect(testInstance.hasDurationUnitElement()).toBe(false);
      expect(testInstance.getDurationUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasDurationUnit()).toBe(false);
      expect(testInstance.getDurationUnit()).toBeUndefined();

      expect(testInstance.hasFrequencyElement()).toBe(false);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequency()).toBe(false);
      expect(testInstance.getFrequency()).toBeUndefined();

      expect(testInstance.hasFrequencyMaxElement()).toBe(false);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequencyMax()).toBe(false);
      expect(testInstance.getFrequencyMax()).toBeUndefined();

      expect(testInstance.hasPeriodElement()).toBe(false);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriod()).toBe(false);
      expect(testInstance.getPeriod()).toBeUndefined();

      expect(testInstance.hasPeriodMaxElement()).toBe(false);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriodMax()).toBe(false);
      expect(testInstance.getPeriodMax()).toBeUndefined();

      expect(testInstance.hasPeriodUnitElement()).toBe(false);
      expect(testInstance.getPeriodUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasPeriodUnit()).toBe(false);
      expect(testInstance.getPeriodUnit()).toBeUndefined();

      expect(testInstance.hasDayOfWeekEnumType()).toBe(false);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasDayOfWeekElement()).toBe(false);
      expect(testInstance.getDayOfWeekElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasDayOfWeek()).toBe(false);
      expect(testInstance.getDayOfWeek()).toEqual([] as fhirCode[]);

      expect(testInstance.hasTimeOfDayElement()).toBe(false);
      expect(testInstance.getTimeOfDayElement()).toEqual([] as TimeType[]);
      expect(testInstance.hasTimeOfDay()).toBe(false);
      expect(testInstance.getTimeOfDay()).toEqual([] as fhirTime[]);

      expect(testInstance.hasTimeOfDayElement()).toBe(false);
      expect(testInstance.getTimeOfDayElement()).toEqual([] as TimeType[]);
      expect(testInstance.hasTimeOfDay()).toBe(false);
      expect(testInstance.getTimeOfDay()).toEqual([] as fhirTime[]);

      expect(testInstance.hasWhenElement()).toBe(false);
      expect(testInstance.getWhenElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasWhen()).toBe(false);
      expect(testInstance.getWhen()).toEqual([] as fhirCode[]);

      expect(testInstance.hasOffsetElement()).toBe(false);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasOffset()).toBe(false);
      expect(testInstance.getOffset()).toBeUndefined();
    });

    it('should be properly reset by modifying all properties (primitive values as appropriate)', () => {
      const testInstance = new TimingRepeatComponent();

      initializeElementProperties(testInstance, 1);

      testInstance.setBounds(VALID_PERIOD);
      testInstance.setCount(1);
      testInstance.setCountMax(2);
      testInstance.setDuration(1.0);
      testInstance.setDurationMax(2.0);
      testInstance.setDurationUnit(TestData.VALID_CODE);
      testInstance.setFrequency(1);
      testInstance.setFrequencyMax(2);
      testInstance.setPeriod(1.0);
      testInstance.setPeriodMax(2.0);
      testInstance.setPeriodUnit(TestData.VALID_CODE);
      testInstance.setDayOfWeek([DaysOfWeekEnum.MON.code]);
      testInstance.setTimeOfDay(['08:00:00']);
      testInstance.setWhen([TestData.VALID_CODE]);
      testInstance.setOffset(0);

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );

      expectInitializedElementProperties(testInstance, 1);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();

      expect(testInstance.hasBounds()).toBe(true);
      expect(testInstance.getBounds()).toEqual(VALID_PERIOD);

      expect(testInstance.hasCountElement()).toBe(true);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType(1));
      expect(testInstance.hasCount()).toBe(true);
      expect(testInstance.getCount()).toStrictEqual(1);

      expect(testInstance.hasCountMaxElement()).toBe(true);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType(2));
      expect(testInstance.hasCountMax()).toBe(true);
      expect(testInstance.getCountMax()).toStrictEqual(2);

      expect(testInstance.hasDurationElement()).toBe(true);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType(1.0));
      expect(testInstance.hasDuration()).toBe(true);
      expect(testInstance.getDuration()).toStrictEqual(1.0);

      expect(testInstance.hasDurationMaxElement()).toBe(true);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType(2.0));
      expect(testInstance.hasDurationMax()).toBe(true);
      expect(testInstance.getDurationMax()).toStrictEqual(2.0);

      expect(testInstance.hasDurationUnitElement()).toBe(true);
      expect(testInstance.getDurationUnitElement()).toEqual(TestData.VALID_CODE_TYPE);
      expect(testInstance.hasDurationUnit()).toBe(true);
      expect(testInstance.getDurationUnit()).toEqual(TestData.VALID_CODE);

      expect(testInstance.hasFrequencyElement()).toBe(true);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType(1));
      expect(testInstance.hasFrequency()).toBe(true);
      expect(testInstance.getFrequency()).toStrictEqual(1);

      expect(testInstance.hasFrequencyMaxElement()).toBe(true);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType(2));
      expect(testInstance.hasFrequencyMax()).toBe(true);
      expect(testInstance.getFrequencyMax()).toStrictEqual(2);

      expect(testInstance.hasPeriodElement()).toBe(true);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType(1.0));
      expect(testInstance.hasPeriod()).toBe(true);
      expect(testInstance.getPeriod()).toStrictEqual(1.0);

      expect(testInstance.hasPeriodMaxElement()).toBe(true);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType(2.0));
      expect(testInstance.hasPeriodMax()).toBe(true);
      expect(testInstance.getPeriodMax()).toStrictEqual(2.0);

      expect(testInstance.hasPeriodUnitElement()).toBe(true);
      expect(testInstance.getPeriodUnitElement()).toEqual(TestData.VALID_CODE_TYPE);
      expect(testInstance.hasPeriodUnit()).toBe(true);
      expect(testInstance.getPeriodUnit()).toStrictEqual(TestData.VALID_CODE);

      expect(testInstance.hasDayOfWeekEnumType()).toBe(true);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([daysOfWeekMonEnum]);
      expect(testInstance.hasDayOfWeekElement()).toBe(true);
      expect(testInstance.getDayOfWeekElement()).toEqual([daysOfWeekMonEnum as CodeType]);
      expect(testInstance.hasDayOfWeek()).toBe(true);
      expect(testInstance.getDayOfWeek()).toEqual([DaysOfWeekEnum.MON.code]);

      expect(testInstance.hasTimeOfDayElement()).toBe(true);
      expect(testInstance.getTimeOfDayElement()).toEqual([new TimeType('08:00:00')]);
      expect(testInstance.hasTimeOfDay()).toBe(true);
      expect(testInstance.getTimeOfDay()).toEqual(['08:00:00']);

      expect(testInstance.hasWhenElement()).toBe(true);
      expect(testInstance.getWhenElement()).toEqual([TestData.VALID_CODE_TYPE]);
      expect(testInstance.hasWhen()).toBe(true);
      expect(testInstance.getWhen()).toEqual([TestData.VALID_CODE]);

      expect(testInstance.hasOffsetElement()).toBe(true);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType(0));
      expect(testInstance.hasOffset()).toBe(true);
      expect(testInstance.getOffset()).toStrictEqual(0);

      // Reset

      resetElementProperties(testInstance);

      testInstance.setBounds(VALID_PERIOD_2);
      testInstance.setCount(10);
      testInstance.setCountMax(20);
      testInstance.setDuration(10.0);
      testInstance.setDurationMax(20.0);
      testInstance.setDurationUnit(TestData.VALID_CODE_2);
      testInstance.setFrequency(10);
      testInstance.setFrequencyMax(20);
      testInstance.setPeriod(10.0);
      testInstance.setPeriodMax(20.0);
      testInstance.setPeriodUnit(TestData.VALID_CODE_2);
      testInstance.addDayOfWeek(DaysOfWeekEnum.FRI.code);
      testInstance.addTimeOfDay('17:00:00');
      testInstance.addWhen(TestData.VALID_CODE_2);
      testInstance.setOffset(10);

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );

      expectResetElementProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();

      expect(testInstance.hasBounds()).toBe(true);
      expect(testInstance.getBounds()).toEqual(VALID_PERIOD_2);

      expect(testInstance.hasCountElement()).toBe(true);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType(10));
      expect(testInstance.hasCount()).toBe(true);
      expect(testInstance.getCount()).toStrictEqual(10);

      expect(testInstance.hasCountMaxElement()).toBe(true);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType(20));
      expect(testInstance.hasCountMax()).toBe(true);
      expect(testInstance.getCountMax()).toStrictEqual(20);

      expect(testInstance.hasDurationElement()).toBe(true);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType(10.0));
      expect(testInstance.hasDuration()).toBe(true);
      expect(testInstance.getDuration()).toStrictEqual(10.0);

      expect(testInstance.hasDurationMaxElement()).toBe(true);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType(20.0));
      expect(testInstance.hasDurationMax()).toBe(true);
      expect(testInstance.getDurationMax()).toStrictEqual(20.0);

      expect(testInstance.hasDurationUnitElement()).toBe(true);
      expect(testInstance.getDurationUnitElement()).toEqual(TestData.VALID_CODE_TYPE_2);
      expect(testInstance.hasDurationUnit()).toBe(true);
      expect(testInstance.getDurationUnit()).toEqual(TestData.VALID_CODE_2);

      expect(testInstance.hasFrequencyElement()).toBe(true);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType(10));
      expect(testInstance.hasFrequency()).toBe(true);
      expect(testInstance.getFrequency()).toStrictEqual(10);

      expect(testInstance.hasFrequencyMaxElement()).toBe(true);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType(20));
      expect(testInstance.hasFrequencyMax()).toBe(true);
      expect(testInstance.getFrequencyMax()).toStrictEqual(20);

      expect(testInstance.hasPeriodElement()).toBe(true);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType(10.0));
      expect(testInstance.hasPeriod()).toBe(true);
      expect(testInstance.getPeriod()).toStrictEqual(10.0);

      expect(testInstance.hasPeriodMaxElement()).toBe(true);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType(20.0));
      expect(testInstance.hasPeriodMax()).toBe(true);
      expect(testInstance.getPeriodMax()).toStrictEqual(20.0);

      expect(testInstance.hasPeriodUnitElement()).toBe(true);
      expect(testInstance.getPeriodUnitElement()).toEqual(TestData.VALID_CODE_TYPE_2);
      expect(testInstance.hasPeriodUnit()).toBe(true);
      expect(testInstance.getPeriodUnit()).toStrictEqual(TestData.VALID_CODE_2);

      expect(testInstance.hasDayOfWeekEnumType()).toBe(true);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([daysOfWeekMonEnum, daysOfWeekFriEnum]);
      expect(testInstance.hasDayOfWeekElement()).toBe(true);
      expect(testInstance.getDayOfWeekElement()).toEqual([
        daysOfWeekMonEnum as CodeType,
        daysOfWeekFriEnum as CodeType,
      ]);
      expect(testInstance.hasDayOfWeek()).toBe(true);
      expect(testInstance.getDayOfWeek()).toEqual([DaysOfWeekEnum.MON.code, DaysOfWeekEnum.FRI.code]);

      expect(testInstance.hasTimeOfDayElement()).toBe(true);
      expect(testInstance.getTimeOfDayElement()).toEqual([new TimeType('08:00:00'), new TimeType('17:00:00')]);
      expect(testInstance.hasTimeOfDay()).toBe(true);
      expect(testInstance.getTimeOfDay()).toEqual(['08:00:00', '17:00:00']);

      expect(testInstance.hasWhenElement()).toBe(true);
      expect(testInstance.getWhenElement()).toEqual([TestData.VALID_CODE_TYPE, TestData.VALID_CODE_TYPE_2]);
      expect(testInstance.hasWhen()).toBe(true);
      expect(testInstance.getWhen()).toEqual([TestData.VALID_CODE, TestData.VALID_CODE_2]);

      expect(testInstance.hasOffsetElement()).toBe(true);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType(10));
      expect(testInstance.hasOffset()).toBe(true);
      expect(testInstance.getOffset()).toStrictEqual(10);

      // Reset to undefined

      undefineElementProperties(testInstance);

      testInstance.setBounds(TestData.UNDEFINED_VALUE);
      testInstance.setCount(TestData.UNDEFINED_VALUE);
      testInstance.setCountMax(TestData.UNDEFINED_VALUE);
      testInstance.setDuration(TestData.UNDEFINED_VALUE);
      testInstance.setDurationMax(TestData.UNDEFINED_VALUE);
      testInstance.setDurationUnit(TestData.UNDEFINED_VALUE);
      testInstance.setFrequency(TestData.UNDEFINED_VALUE);
      testInstance.setFrequencyMax(TestData.UNDEFINED_VALUE);
      testInstance.setPeriod(TestData.UNDEFINED_VALUE);
      testInstance.setPeriodMax(TestData.UNDEFINED_VALUE);
      testInstance.setPeriodUnit(TestData.UNDEFINED_VALUE);
      testInstance.setDayOfWeek(TestData.UNDEFINED_VALUE);
      testInstance.setTimeOfDay(TestData.UNDEFINED_VALUE);
      testInstance.setWhen(TestData.UNDEFINED_VALUE);
      testInstance.setOffset(TestData.UNDEFINED_VALUE);

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );
      expectUndefinedElementProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toBeUndefined();

      expect(testInstance.hasBounds()).toBe(false);
      expect(testInstance.getBounds()).toBeUndefined();

      expect(testInstance.hasCountElement()).toBe(false);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCount()).toBe(false);
      expect(testInstance.getCount()).toBeUndefined();

      expect(testInstance.hasCountMaxElement()).toBe(false);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCountMax()).toBe(false);
      expect(testInstance.getCountMax()).toBeUndefined();

      expect(testInstance.hasDurationElement()).toBe(false);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType());
      expect(testInstance.hasDuration()).toBe(false);
      expect(testInstance.getDuration()).toBeUndefined();

      expect(testInstance.hasDurationMaxElement()).toBe(false);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasDurationMax()).toBe(false);
      expect(testInstance.getDurationMax()).toBeUndefined();

      expect(testInstance.hasDurationUnitElement()).toBe(false);
      expect(testInstance.getDurationUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasDurationUnit()).toBe(false);
      expect(testInstance.getDurationUnit()).toBeUndefined();

      expect(testInstance.hasFrequencyElement()).toBe(false);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequency()).toBe(false);
      expect(testInstance.getFrequency()).toBeUndefined();

      expect(testInstance.hasFrequencyMaxElement()).toBe(false);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequencyMax()).toBe(false);
      expect(testInstance.getFrequencyMax()).toBeUndefined();

      expect(testInstance.hasPeriodElement()).toBe(false);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriod()).toBe(false);
      expect(testInstance.getPeriod()).toBeUndefined();

      expect(testInstance.hasPeriodMaxElement()).toBe(false);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriodMax()).toBe(false);
      expect(testInstance.getPeriodMax()).toBeUndefined();

      expect(testInstance.hasPeriodUnitElement()).toBe(false);
      expect(testInstance.getPeriodUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasPeriodUnit()).toBe(false);
      expect(testInstance.getPeriodUnit()).toBeUndefined();

      expect(testInstance.hasDayOfWeekEnumType()).toBe(false);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasDayOfWeekElement()).toBe(false);
      expect(testInstance.getDayOfWeekElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasDayOfWeek()).toBe(false);
      expect(testInstance.getDayOfWeek()).toEqual([] as fhirCode[]);

      expect(testInstance.hasTimeOfDayElement()).toBe(false);
      expect(testInstance.getTimeOfDayElement()).toEqual([] as TimeType[]);
      expect(testInstance.hasTimeOfDay()).toBe(false);
      expect(testInstance.getTimeOfDay()).toEqual([] as fhirTime[]);

      expect(testInstance.hasTimeOfDayElement()).toBe(false);
      expect(testInstance.getTimeOfDayElement()).toEqual([] as TimeType[]);
      expect(testInstance.hasTimeOfDay()).toBe(false);
      expect(testInstance.getTimeOfDay()).toEqual([] as fhirTime[]);

      expect(testInstance.hasWhenElement()).toBe(false);
      expect(testInstance.getWhenElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasWhen()).toBe(false);
      expect(testInstance.getWhen()).toEqual([] as fhirCode[]);

      expect(testInstance.hasOffsetElement()).toBe(false);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasOffset()).toBe(false);
      expect(testInstance.getOffset()).toBeUndefined();
    });

    it('should be properly reset by modifying all properties (PrimitiveType values as appropriate)', () => {
      const testInstance = new TimingRepeatComponent();

      initializeElementProperties(testInstance, 1);

      testInstance.setBounds(VALID_PERIOD);
      testInstance.setCountElement(new PositiveIntType(1));
      testInstance.setCountMaxElement(new PositiveIntType(2));
      testInstance.setDurationElement(new DecimalType(1.0));
      testInstance.setDurationMaxElement(new DecimalType(2.0));
      testInstance.setDurationUnitElement(TestData.VALID_CODE_TYPE);
      testInstance.setFrequencyElement(new PositiveIntType(1));
      testInstance.setFrequencyMaxElement(new PositiveIntType(2));
      testInstance.setPeriodElement(new DecimalType(1.0));
      testInstance.setPeriodMaxElement(new DecimalType(2.0));
      testInstance.setPeriodUnitElement(TestData.VALID_CODE_TYPE);
      testInstance.setDayOfWeekElement([new CodeType(DaysOfWeekEnum.MON.code)]);
      testInstance.setTimeOfDayElement([new TimeType('08:00:00')]);
      testInstance.setWhenElement([TestData.VALID_CODE_TYPE]);
      testInstance.setOffsetElement(new UnsignedIntType(0));

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );

      expectInitializedElementProperties(testInstance, 1);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();

      expect(testInstance.hasBounds()).toBe(true);
      expect(testInstance.getBounds()).toEqual(VALID_PERIOD);

      expect(testInstance.hasBoundsDuration()).toBe(false);
      let t = () => {
        testInstance.getBoundsDuration();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for Timing.repeat.bounds[x]: Expected Duration but encountered Period`);
      expect(testInstance.hasBoundsRange()).toBe(false);
      t = () => {
        testInstance.getBoundsRange();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for Timing.repeat.bounds[x]: Expected Range but encountered Period`);
      expect(testInstance.hasBoundsPeriod()).toBe(true);
      expect(testInstance.getBoundsPeriod()).toEqual(VALID_PERIOD);

      expect(testInstance.hasCountElement()).toBe(true);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType(1));
      expect(testInstance.hasCount()).toBe(true);
      expect(testInstance.getCount()).toStrictEqual(1);

      expect(testInstance.hasCountMaxElement()).toBe(true);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType(2));
      expect(testInstance.hasCountMax()).toBe(true);
      expect(testInstance.getCountMax()).toStrictEqual(2);

      expect(testInstance.hasDurationElement()).toBe(true);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType(1.0));
      expect(testInstance.hasDuration()).toBe(true);
      expect(testInstance.getDuration()).toStrictEqual(1.0);

      expect(testInstance.hasDurationMaxElement()).toBe(true);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType(2.0));
      expect(testInstance.hasDurationMax()).toBe(true);
      expect(testInstance.getDurationMax()).toStrictEqual(2.0);

      expect(testInstance.hasDurationUnitElement()).toBe(true);
      expect(testInstance.getDurationUnitElement()).toEqual(TestData.VALID_CODE_TYPE);
      expect(testInstance.hasDurationUnit()).toBe(true);
      expect(testInstance.getDurationUnit()).toEqual(TestData.VALID_CODE);

      expect(testInstance.hasFrequencyElement()).toBe(true);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType(1));
      expect(testInstance.hasFrequency()).toBe(true);
      expect(testInstance.getFrequency()).toStrictEqual(1);

      expect(testInstance.hasFrequencyMaxElement()).toBe(true);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType(2));
      expect(testInstance.hasFrequencyMax()).toBe(true);
      expect(testInstance.getFrequencyMax()).toStrictEqual(2);

      expect(testInstance.hasPeriodElement()).toBe(true);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType(1.0));
      expect(testInstance.hasPeriod()).toBe(true);
      expect(testInstance.getPeriod()).toStrictEqual(1.0);

      expect(testInstance.hasPeriodMaxElement()).toBe(true);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType(2.0));
      expect(testInstance.hasPeriodMax()).toBe(true);
      expect(testInstance.getPeriodMax()).toStrictEqual(2.0);

      expect(testInstance.hasPeriodUnitElement()).toBe(true);
      expect(testInstance.getPeriodUnitElement()).toEqual(TestData.VALID_CODE_TYPE);
      expect(testInstance.hasPeriodUnit()).toBe(true);
      expect(testInstance.getPeriodUnit()).toStrictEqual(TestData.VALID_CODE);

      expect(testInstance.hasDayOfWeekEnumType()).toBe(true);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([daysOfWeekMonEnum]);
      expect(testInstance.hasDayOfWeekElement()).toBe(true);
      expect(testInstance.getDayOfWeekElement()).toEqual([daysOfWeekMonEnum as CodeType]);
      expect(testInstance.hasDayOfWeek()).toBe(true);
      expect(testInstance.getDayOfWeek()).toEqual([DaysOfWeekEnum.MON.code]);

      expect(testInstance.hasTimeOfDayElement()).toBe(true);
      expect(testInstance.getTimeOfDayElement()).toEqual([new TimeType('08:00:00')]);
      expect(testInstance.hasTimeOfDay()).toBe(true);
      expect(testInstance.getTimeOfDay()).toEqual(['08:00:00']);

      expect(testInstance.hasWhenElement()).toBe(true);
      expect(testInstance.getWhenElement()).toEqual([TestData.VALID_CODE_TYPE]);
      expect(testInstance.hasWhen()).toBe(true);
      expect(testInstance.getWhen()).toEqual([TestData.VALID_CODE]);

      expect(testInstance.hasOffsetElement()).toBe(true);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType(0));
      expect(testInstance.hasOffset()).toBe(true);
      expect(testInstance.getOffset()).toStrictEqual(0);

      // Reset

      resetElementProperties(testInstance);

      testInstance.setBounds(VALID_PERIOD_2);
      testInstance.setCountElement(new PositiveIntType(10));
      testInstance.setCountMaxElement(new PositiveIntType(20));
      testInstance.setDurationElement(new DecimalType(10.0));
      testInstance.setDurationMaxElement(new DecimalType(20.0));
      testInstance.setDurationUnitElement(TestData.VALID_CODE_TYPE_2);
      testInstance.setFrequencyElement(new PositiveIntType(10));
      testInstance.setFrequencyMaxElement(new PositiveIntType(20));
      testInstance.setPeriodElement(new DecimalType(10.0));
      testInstance.setPeriodMaxElement(new DecimalType(20.0));
      testInstance.setPeriodUnitElement(TestData.VALID_CODE_TYPE_2);
      testInstance.addDayOfWeekElement(new CodeType(DaysOfWeekEnum.FRI.code));
      testInstance.addTimeOfDayElement(new TimeType('17:00:00'));
      testInstance.addWhenElement(TestData.VALID_CODE_TYPE_2);
      testInstance.setOffsetElement(new UnsignedIntType(10));

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );

      expectResetElementProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();

      expect(testInstance.hasBounds()).toBe(true);
      expect(testInstance.getBounds()).toEqual(VALID_PERIOD_2);

      expect(testInstance.hasBoundsDuration()).toBe(false);
      t = () => {
        testInstance.getBoundsDuration();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for Timing.repeat.bounds[x]: Expected Duration but encountered Period`);
      expect(testInstance.hasBoundsRange()).toBe(false);
      t = () => {
        testInstance.getBoundsRange();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for Timing.repeat.bounds[x]: Expected Range but encountered Period`);
      expect(testInstance.hasBoundsPeriod()).toBe(true);
      expect(testInstance.getBoundsPeriod()).toEqual(VALID_PERIOD_2);

      expect(testInstance.hasCountElement()).toBe(true);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType(10));
      expect(testInstance.hasCount()).toBe(true);
      expect(testInstance.getCount()).toStrictEqual(10);

      expect(testInstance.hasCountMaxElement()).toBe(true);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType(20));
      expect(testInstance.hasCountMax()).toBe(true);
      expect(testInstance.getCountMax()).toStrictEqual(20);

      expect(testInstance.hasDurationElement()).toBe(true);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType(10.0));
      expect(testInstance.hasDuration()).toBe(true);
      expect(testInstance.getDuration()).toStrictEqual(10.0);

      expect(testInstance.hasDurationMaxElement()).toBe(true);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType(20.0));
      expect(testInstance.hasDurationMax()).toBe(true);
      expect(testInstance.getDurationMax()).toStrictEqual(20.0);

      expect(testInstance.hasDurationUnitElement()).toBe(true);
      expect(testInstance.getDurationUnitElement()).toEqual(TestData.VALID_CODE_TYPE_2);
      expect(testInstance.hasDurationUnit()).toBe(true);
      expect(testInstance.getDurationUnit()).toEqual(TestData.VALID_CODE_2);

      expect(testInstance.hasFrequencyElement()).toBe(true);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType(10));
      expect(testInstance.hasFrequency()).toBe(true);
      expect(testInstance.getFrequency()).toStrictEqual(10);

      expect(testInstance.hasFrequencyMaxElement()).toBe(true);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType(20));
      expect(testInstance.hasFrequencyMax()).toBe(true);
      expect(testInstance.getFrequencyMax()).toStrictEqual(20);

      expect(testInstance.hasPeriodElement()).toBe(true);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType(10.0));
      expect(testInstance.hasPeriod()).toBe(true);
      expect(testInstance.getPeriod()).toStrictEqual(10.0);

      expect(testInstance.hasPeriodMaxElement()).toBe(true);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType(20.0));
      expect(testInstance.hasPeriodMax()).toBe(true);
      expect(testInstance.getPeriodMax()).toStrictEqual(20.0);

      expect(testInstance.hasPeriodUnitElement()).toBe(true);
      expect(testInstance.getPeriodUnitElement()).toEqual(TestData.VALID_CODE_TYPE_2);
      expect(testInstance.hasPeriodUnit()).toBe(true);
      expect(testInstance.getPeriodUnit()).toStrictEqual(TestData.VALID_CODE_2);

      expect(testInstance.hasDayOfWeekEnumType()).toBe(true);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([daysOfWeekMonEnum, daysOfWeekFriEnum]);
      expect(testInstance.hasDayOfWeekElement()).toBe(true);
      expect(testInstance.getDayOfWeekElement()).toEqual([
        daysOfWeekMonEnum as CodeType,
        daysOfWeekFriEnum as CodeType,
      ]);
      expect(testInstance.hasDayOfWeek()).toBe(true);
      expect(testInstance.getDayOfWeek()).toEqual([DaysOfWeekEnum.MON.code, DaysOfWeekEnum.FRI.code]);

      expect(testInstance.hasTimeOfDayElement()).toBe(true);
      expect(testInstance.getTimeOfDayElement()).toEqual([new TimeType('08:00:00'), new TimeType('17:00:00')]);
      expect(testInstance.hasTimeOfDay()).toBe(true);
      expect(testInstance.getTimeOfDay()).toEqual(['08:00:00', '17:00:00']);

      expect(testInstance.hasWhenElement()).toBe(true);
      expect(testInstance.getWhenElement()).toEqual([TestData.VALID_CODE_TYPE, TestData.VALID_CODE_TYPE_2]);
      expect(testInstance.hasWhen()).toBe(true);
      expect(testInstance.getWhen()).toEqual([TestData.VALID_CODE, TestData.VALID_CODE_2]);

      expect(testInstance.hasOffsetElement()).toBe(true);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType(10));
      expect(testInstance.hasOffset()).toBe(true);
      expect(testInstance.getOffset()).toStrictEqual(10);

      // Reset ChoiceDataTypes

      testInstance.setBounds(VALID_DURATION);

      expect(testInstance.hasBounds()).toBe(true);
      expect(testInstance.getBounds()).toEqual(VALID_DURATION);
      expect(testInstance.hasBoundsDuration()).toBe(true);
      expect(testInstance.getBoundsDuration()).toEqual(VALID_DURATION);
      expect(testInstance.hasBoundsRange()).toBe(false);
      t = () => {
        testInstance.getBoundsRange();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for Timing.repeat.bounds[x]: Expected Range but encountered Duration`);
      expect(testInstance.hasBoundsPeriod()).toBe(false);
      t = () => {
        testInstance.getBoundsPeriod();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for Timing.repeat.bounds[x]: Expected Period but encountered Duration`);

      testInstance.setBounds(VALID_RANGE);

      expect(testInstance.hasBounds()).toBe(true);
      expect(testInstance.getBounds()).toEqual(VALID_RANGE);
      expect(testInstance.hasBoundsDuration()).toBe(false);
      t = () => {
        testInstance.getBoundsDuration();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for Timing.repeat.bounds[x]: Expected Duration but encountered Range`);
      expect(testInstance.hasBoundsRange()).toBe(true);
      expect(testInstance.getBoundsRange()).toEqual(VALID_RANGE);
      expect(testInstance.hasBoundsPeriod()).toBe(false);
      t = () => {
        testInstance.getBoundsPeriod();
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`DataType mismatch for Timing.repeat.bounds[x]: Expected Period but encountered Range`);

      // Reset EnumCodeTypes

      const daysOfWeekTueEnum = new EnumCodeType(DaysOfWeekEnum.TUE.code, daysOfWeekEnum);
      const daysOfWeekThuEnum = new EnumCodeType(DaysOfWeekEnum.THU.code, daysOfWeekEnum);

      testInstance.setDayOfWeekEnumType([daysOfWeekTueEnum]);
      testInstance.addDayOfWeekEnumType(daysOfWeekThuEnum);

      expect(testInstance.hasDayOfWeekEnumType()).toBe(true);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([daysOfWeekTueEnum, daysOfWeekThuEnum]);
      expect(testInstance.hasDayOfWeekElement()).toBe(true);
      expect(testInstance.getDayOfWeekElement()).toEqual([
        daysOfWeekTueEnum as CodeType,
        daysOfWeekThuEnum as CodeType,
      ]);
      expect(testInstance.hasDayOfWeek()).toBe(true);
      expect(testInstance.getDayOfWeek()).toEqual([DaysOfWeekEnum.TUE.code, DaysOfWeekEnum.THU.code]);

      testInstance.setDayOfWeekEnumType(TestData.UNDEFINED_VALUE);

      expect(testInstance.hasDayOfWeekEnumType()).toBe(false);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasDayOfWeekElement()).toBe(false);
      expect(testInstance.getDayOfWeekElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasDayOfWeek()).toBe(false);
      expect(testInstance.getDayOfWeek()).toEqual([] as fhirCode[]);

      // Reset to undefined

      undefineElementProperties(testInstance);

      testInstance.setBounds(TestData.UNDEFINED_VALUE);
      testInstance.setCountElement(TestData.UNDEFINED_VALUE);
      testInstance.setCountMaxElement(TestData.UNDEFINED_VALUE);
      testInstance.setDurationElement(TestData.UNDEFINED_VALUE);
      testInstance.setDurationMaxElement(TestData.UNDEFINED_VALUE);
      testInstance.setDurationUnitElement(TestData.UNDEFINED_VALUE);
      testInstance.setFrequencyElement(TestData.UNDEFINED_VALUE);
      testInstance.setFrequencyMaxElement(TestData.UNDEFINED_VALUE);
      testInstance.setPeriodElement(TestData.UNDEFINED_VALUE);
      testInstance.setPeriodMaxElement(TestData.UNDEFINED_VALUE);
      testInstance.setPeriodUnitElement(TestData.UNDEFINED_VALUE);
      testInstance.setDayOfWeekElement(TestData.UNDEFINED_VALUE);
      testInstance.setTimeOfDayElement(TestData.UNDEFINED_VALUE);
      testInstance.setWhenElement(TestData.UNDEFINED_VALUE);
      testInstance.setOffsetElement(TestData.UNDEFINED_VALUE);

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );
      expectUndefinedElementProperties(testInstance);
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toBeUndefined();

      expect(testInstance.hasBounds()).toBe(false);
      expect(testInstance.getBounds()).toBeUndefined();
      expect(testInstance.hasBoundsDuration()).toBe(false);
      expect(testInstance.getBoundsDuration()).toBeUndefined();
      expect(testInstance.hasBoundsRange()).toBe(false);
      expect(testInstance.getBoundsRange()).toBeUndefined();
      expect(testInstance.hasBoundsPeriod()).toBe(false);
      expect(testInstance.getBoundsPeriod()).toBeUndefined();

      expect(testInstance.hasCountElement()).toBe(false);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCount()).toBe(false);
      expect(testInstance.getCount()).toBeUndefined();

      expect(testInstance.hasCountMaxElement()).toBe(false);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCountMax()).toBe(false);
      expect(testInstance.getCountMax()).toBeUndefined();

      expect(testInstance.hasDurationElement()).toBe(false);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType());
      expect(testInstance.hasDuration()).toBe(false);
      expect(testInstance.getDuration()).toBeUndefined();

      expect(testInstance.hasDurationMaxElement()).toBe(false);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasDurationMax()).toBe(false);
      expect(testInstance.getDurationMax()).toBeUndefined();

      expect(testInstance.hasDurationUnitElement()).toBe(false);
      expect(testInstance.getDurationUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasDurationUnit()).toBe(false);
      expect(testInstance.getDurationUnit()).toBeUndefined();

      expect(testInstance.hasFrequencyElement()).toBe(false);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequency()).toBe(false);
      expect(testInstance.getFrequency()).toBeUndefined();

      expect(testInstance.hasFrequencyMaxElement()).toBe(false);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequencyMax()).toBe(false);
      expect(testInstance.getFrequencyMax()).toBeUndefined();

      expect(testInstance.hasPeriodElement()).toBe(false);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriod()).toBe(false);
      expect(testInstance.getPeriod()).toBeUndefined();

      expect(testInstance.hasPeriodMaxElement()).toBe(false);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriodMax()).toBe(false);
      expect(testInstance.getPeriodMax()).toBeUndefined();

      expect(testInstance.hasPeriodUnitElement()).toBe(false);
      expect(testInstance.getPeriodUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasPeriodUnit()).toBe(false);
      expect(testInstance.getPeriodUnit()).toBeUndefined();

      expect(testInstance.hasDayOfWeekEnumType()).toBe(false);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([] as EnumCodeType[]);
      expect(testInstance.hasDayOfWeekElement()).toBe(false);
      expect(testInstance.getDayOfWeekElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasDayOfWeek()).toBe(false);
      expect(testInstance.getDayOfWeek()).toEqual([] as fhirCode[]);

      expect(testInstance.hasTimeOfDayElement()).toBe(false);
      expect(testInstance.getTimeOfDayElement()).toEqual([] as TimeType[]);
      expect(testInstance.hasTimeOfDay()).toBe(false);
      expect(testInstance.getTimeOfDay()).toEqual([] as fhirTime[]);

      expect(testInstance.hasTimeOfDayElement()).toBe(false);
      expect(testInstance.getTimeOfDayElement()).toEqual([] as TimeType[]);
      expect(testInstance.hasTimeOfDay()).toBe(false);
      expect(testInstance.getTimeOfDay()).toEqual([] as fhirTime[]);

      expect(testInstance.hasWhenElement()).toBe(false);
      expect(testInstance.getWhenElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasWhen()).toBe(false);
      expect(testInstance.getWhen()).toEqual([] as fhirCode[]);

      expect(testInstance.hasOffsetElement()).toBe(false);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasOffset()).toBe(false);
      expect(testInstance.getOffset()).toBeUndefined();
    });
  });

  describe('Serialization/Deserialization', () => {
    let altOffset: UnsignedIntType;
    beforeAll(() => {
      altOffset = VALID_OFFSET_0.copy();
      altOffset.setId(TestData.DATATYPE_ID);
      altOffset.addExtension(DATATYPE_EXTENSION);
    });

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
      boundsPeriod: {
        start: '2024-03-15T00:00:00.000Z',
        end: '2024-07-03T01:00:00.000Z',
      },
      count: 1,
      countMax: 2,
      duration: 1,
      durationMax: 2,
      durationUnit: 'testCodeType',
      frequency: 1,
      frequencyMax: 2,
      period: 1,
      periodMax: 2,
      periodUnit: 'testCodeType',
      dayOfWeek: ['mon', 'fri'],
      timeOfDay: ['08:00:00', '17:00:00'],
      when: ['testCodeType'],
      offset: 0,
      _offset: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
      },
    };
    const INVALID_JSON_1 = {
      boundsPeriod: [
        {
          start: '2024-03-15T00:00:00.000Z',
          end: '2024-07-03T01:00:00.000Z',
        },
      ],
      count: 1,
      countMax: 2,
      duration: 1,
      durationMax: 2,
      durationUnit: 'testCodeType',
      frequency: 1,
      frequencyMax: 2,
      period: 1,
      periodMax: 2,
      periodUnit: 'testCodeType',
      dayOfWeek: ['mon', 'fri'],
      timeOfDay: ['08:00:00', '17:00:00'],
      when: ['testCodeType'],
      offset: 0,
    };
    const INVALID_JSON_2 = {
      boundsPeriod: {
        start: '2024-03-15T00:00:00.000Z',
        end: '2024-07-03T01:00:00.000Z',
      },
      count: '1',
      countMax: 2,
      duration: 1,
      durationMax: 2,
      durationUnit: 'testCodeType',
      frequency: 1,
      frequencyMax: 2,
      period: 1,
      periodMax: 2,
      periodUnit: 'testCodeType',
      dayOfWeek: ['mon', 'fri'],
      timeOfDay: ['08:00:00', '17:00:00'],
      when: ['testCodeType'],
      offset: 0,
    };
    const INVALID_JSON_3 = {
      boundsPeriod: {
        start: '2024-03-15T00:00:00.000Z',
        end: '2024-07-03T01:00:00.000Z',
      },
      count: 1,
      countMax: 2,
      duration: 1,
      durationMax: 2,
      durationUnit: ' test Code Type ',
      frequency: 1,
      frequencyMax: 2,
      period: 1,
      periodMax: 2,
      periodUnit: 'testCodeType',
      dayOfWeek: ['mon', 'fri'],
      timeOfDay: ['08:00:00', '17:00:00'],
      when: ['testCodeType'],
      offset: 0,
    };
    const INVALID_JSON_4 = {
      boundsPeriod: {
        start: '2024-03-15T00:00:00.000Z',
        end: '2024-07-03T01:00:00.000Z',
      },
      count: 1,
      countMax: 2,
      duration: 1,
      durationMax: 2,
      durationUnit: 'testCodeType',
      frequency: 1,
      frequencyMax: 2,
      period: 1,
      periodMax: 2,
      periodUnit: 'testCodeType',
      dayOfWeek: ['mon', 'fri'],
      timeOfDay: ['08:00:00', '17:00:00'],
      when: 'testCodeType',
      offset: 0,
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
      boundsPeriod: null,
      count: null,
      countMax: null,
      duration: null,
      durationMax: null,
      durationUnit: null,
      frequency: null,
      frequencyMax: null,
      period: null,
      periodMax: null,
      periodUnit: null,
      dayOfWeek: null,
      timeOfDay: null,
      when: null,
      offset: null,
      unexpectedField: 'should be ignored without error',
    };

    it('should properly create serialized content', () => {
      const testInstance = new TimingRepeatComponent();

      initializeElementProperties(testInstance, 2);

      testInstance.setBounds(VALID_PERIOD);
      testInstance.setCount(1);
      testInstance.setCountMax(2);
      testInstance.setDuration(1.0);
      testInstance.setDurationMax(2.0);
      testInstance.setDurationUnit(TestData.VALID_CODE);
      testInstance.setFrequency(1);
      testInstance.setFrequencyMax(2);
      testInstance.setPeriod(1.0);
      testInstance.setPeriodMax(2.0);
      testInstance.setPeriodUnit(TestData.VALID_CODE);
      testInstance.setDayOfWeek([DaysOfWeekEnum.MON.code, DaysOfWeekEnum.FRI.code]);
      testInstance.setTimeOfDay(['08:00:00', '17:00:00']);
      testInstance.setWhen([TestData.VALID_CODE]);
      testInstance.setOffsetElement(altOffset);

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );
      expectInitializedElementProperties(testInstance, 2);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(false);

      expect(testInstance.hasBounds()).toBe(true);
      expect(testInstance.getBounds()).toEqual(VALID_PERIOD);

      expect(testInstance.hasCountElement()).toBe(true);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType(1));
      expect(testInstance.hasCount()).toBe(true);
      expect(testInstance.getCount()).toStrictEqual(1);

      expect(testInstance.hasCountMaxElement()).toBe(true);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType(2));
      expect(testInstance.hasCountMax()).toBe(true);
      expect(testInstance.getCountMax()).toStrictEqual(2);

      expect(testInstance.hasDurationElement()).toBe(true);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType(1.0));
      expect(testInstance.hasDuration()).toBe(true);
      expect(testInstance.getDuration()).toStrictEqual(1.0);

      expect(testInstance.hasDurationMaxElement()).toBe(true);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType(2.0));
      expect(testInstance.hasDurationMax()).toBe(true);
      expect(testInstance.getDurationMax()).toStrictEqual(2.0);

      expect(testInstance.hasDurationUnitElement()).toBe(true);
      expect(testInstance.getDurationUnitElement()).toEqual(TestData.VALID_CODE_TYPE);
      expect(testInstance.hasDurationUnit()).toBe(true);
      expect(testInstance.getDurationUnit()).toEqual(TestData.VALID_CODE);

      expect(testInstance.hasFrequencyElement()).toBe(true);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType(1));
      expect(testInstance.hasFrequency()).toBe(true);
      expect(testInstance.getFrequency()).toStrictEqual(1);

      expect(testInstance.hasFrequencyMaxElement()).toBe(true);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType(2));
      expect(testInstance.hasFrequencyMax()).toBe(true);
      expect(testInstance.getFrequencyMax()).toStrictEqual(2);

      expect(testInstance.hasPeriodElement()).toBe(true);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType(1.0));
      expect(testInstance.hasPeriod()).toBe(true);
      expect(testInstance.getPeriod()).toStrictEqual(1.0);

      expect(testInstance.hasPeriodMaxElement()).toBe(true);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType(2.0));
      expect(testInstance.hasPeriodMax()).toBe(true);
      expect(testInstance.getPeriodMax()).toStrictEqual(2.0);

      expect(testInstance.hasPeriodUnitElement()).toBe(true);
      expect(testInstance.getPeriodUnitElement()).toEqual(TestData.VALID_CODE_TYPE);
      expect(testInstance.hasPeriodUnit()).toBe(true);
      expect(testInstance.getPeriodUnit()).toStrictEqual(TestData.VALID_CODE);

      expect(testInstance.hasDayOfWeekEnumType()).toBe(true);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([daysOfWeekMonEnum, daysOfWeekFriEnum]);
      expect(testInstance.hasDayOfWeekElement()).toBe(true);
      expect(testInstance.getDayOfWeekElement()).toEqual([
        daysOfWeekMonEnum as CodeType,
        daysOfWeekFriEnum as CodeType,
      ]);
      expect(testInstance.hasDayOfWeek()).toBe(true);
      expect(testInstance.getDayOfWeek()).toEqual([DaysOfWeekEnum.MON.code, DaysOfWeekEnum.FRI.code]);

      expect(testInstance.hasTimeOfDayElement()).toBe(true);
      expect(testInstance.getTimeOfDayElement()).toEqual([new TimeType('08:00:00'), new TimeType('17:00:00')]);
      expect(testInstance.hasTimeOfDay()).toBe(true);
      expect(testInstance.getTimeOfDay()).toEqual(['08:00:00', '17:00:00']);

      expect(testInstance.hasWhenElement()).toBe(true);
      expect(testInstance.getWhenElement()).toEqual([TestData.VALID_CODE_TYPE]);
      expect(testInstance.hasWhen()).toBe(true);
      expect(testInstance.getWhen()).toEqual([TestData.VALID_CODE]);

      expect(testInstance.hasOffsetElement()).toBe(true);
      expect(testInstance.getOffsetElement()).toEqual(altOffset);
      expect(testInstance.hasOffset()).toBe(true);
      expect(testInstance.getOffset()).toStrictEqual(0);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should properly create serialized content with no fields', () => {
      const testInstance = new TimingRepeatComponent();

      initializeElementProperties(testInstance, 2);

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );
      expectInitializedElementProperties(testInstance, 2);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(false);

      expect(testInstance.hasBounds()).toBe(false);
      expect(testInstance.getBounds()).toBeUndefined();

      expect(testInstance.hasCountElement()).toBe(false);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCount()).toBe(false);
      expect(testInstance.getCount()).toBeUndefined();

      expect(testInstance.hasCountMaxElement()).toBe(false);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCountMax()).toBe(false);
      expect(testInstance.getCountMax()).toBeUndefined();

      expect(testInstance.hasDurationElement()).toBe(false);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType());
      expect(testInstance.hasDuration()).toBe(false);
      expect(testInstance.getDuration()).toBeUndefined();

      expect(testInstance.hasDurationMaxElement()).toBe(false);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasDurationMax()).toBe(false);
      expect(testInstance.getDurationMax()).toBeUndefined();

      expect(testInstance.hasDurationUnitElement()).toBe(false);
      expect(testInstance.getDurationUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasDurationUnit()).toBe(false);
      expect(testInstance.getDurationUnit()).toBeUndefined();

      expect(testInstance.hasFrequencyElement()).toBe(false);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequency()).toBe(false);
      expect(testInstance.getFrequency()).toBeUndefined();

      expect(testInstance.hasFrequencyMaxElement()).toBe(false);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequencyMax()).toBe(false);
      expect(testInstance.getFrequencyMax()).toBeUndefined();

      expect(testInstance.hasPeriodElement()).toBe(false);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriod()).toBe(false);
      expect(testInstance.getPeriod()).toBeUndefined();

      expect(testInstance.hasPeriodMaxElement()).toBe(false);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriodMax()).toBe(false);
      expect(testInstance.getPeriodMax()).toBeUndefined();

      expect(testInstance.hasPeriodUnitElement()).toBe(false);
      expect(testInstance.getPeriodUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasPeriodUnit()).toBe(false);
      expect(testInstance.getPeriodUnit()).toBeUndefined();

      expect(testInstance.hasDayOfWeekEnumType()).toBe(false);
      expect(testInstance.getDayOfWeekEnumType()).toEqual(new Array<EnumCodeType>());
      expect(testInstance.hasDayOfWeekElement()).toBe(false);
      expect(testInstance.getDayOfWeekElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasDayOfWeek()).toBe(false);
      expect(testInstance.getDayOfWeek()).toEqual([] as fhirCode[]);

      expect(testInstance.hasTimeOfDayElement()).toBe(false);
      expect(testInstance.getTimeOfDayElement()).toEqual([] as TimeType[]);
      expect(testInstance.hasTimeOfDay()).toBe(false);
      expect(testInstance.getTimeOfDay()).toEqual([] as fhirTime[]);

      expect(testInstance.hasWhenElement()).toBe(false);
      expect(testInstance.getWhenElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasWhen()).toBe(false);
      expect(testInstance.getWhen()).toEqual([] as fhirCode[]);

      expect(testInstance.hasOffsetElement()).toBe(false);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasOffset()).toBe(false);
      expect(testInstance.getOffset()).toBeUndefined();

      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);
    });

    it('should throw Errors for invalid json types', () => {
      let t = () => {
        TimingRepeatComponent.parse('NOT AN OBJECT');
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TimingRepeatComponent JSON is not a JSON object.`);

      t = () => {
        TimingRepeatComponent.parse(INVALID_JSON_1);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`Failed to parse TimingRepeatComponent.bounds[x]: Period JSON is not a JSON object.`);

      t = () => {
        TimingRepeatComponent.parse(INVALID_JSON_2);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TimingRepeatComponent.count is not a number.`);

      t = () => {
        TimingRepeatComponent.parse(INVALID_JSON_3);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid value for CodeType ( test Code Type )`);

      t = () => {
        TimingRepeatComponent.parse(INVALID_JSON_4);
      };
      expect(t).toThrow(JsonError);
      expect(t).toThrow(`TimingRepeatComponent.when is not a JSON array.`);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: TimingRepeatComponent | undefined;
      testInstance = TimingRepeatComponent.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = TimingRepeatComponent.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = TimingRepeatComponent.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should return parsed Timing for valid json', () => {
      const testInstance: TimingRepeatComponent = TimingRepeatComponent.parse(VALID_JSON);

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );

      expectInitializedElementProperties(testInstance, 2);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);

      expect(testInstance.hasBounds()).toBe(true);
      expect(testInstance.getBounds()).toEqual(VALID_PERIOD);

      expect(testInstance.hasCountElement()).toBe(true);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType(1));
      expect(testInstance.hasCount()).toBe(true);
      expect(testInstance.getCount()).toStrictEqual(1);

      expect(testInstance.hasCountMaxElement()).toBe(true);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType(2));
      expect(testInstance.hasCountMax()).toBe(true);
      expect(testInstance.getCountMax()).toStrictEqual(2);

      expect(testInstance.hasDurationElement()).toBe(true);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType(1.0));
      expect(testInstance.hasDuration()).toBe(true);
      expect(testInstance.getDuration()).toStrictEqual(1.0);

      expect(testInstance.hasDurationMaxElement()).toBe(true);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType(2.0));
      expect(testInstance.hasDurationMax()).toBe(true);
      expect(testInstance.getDurationMax()).toStrictEqual(2.0);

      expect(testInstance.hasDurationUnitElement()).toBe(true);
      expect(testInstance.getDurationUnitElement()).toEqual(TestData.VALID_CODE_TYPE);
      expect(testInstance.hasDurationUnit()).toBe(true);
      expect(testInstance.getDurationUnit()).toEqual(TestData.VALID_CODE);

      expect(testInstance.hasFrequencyElement()).toBe(true);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType(1));
      expect(testInstance.hasFrequency()).toBe(true);
      expect(testInstance.getFrequency()).toStrictEqual(1);

      expect(testInstance.hasFrequencyMaxElement()).toBe(true);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType(2));
      expect(testInstance.hasFrequencyMax()).toBe(true);
      expect(testInstance.getFrequencyMax()).toStrictEqual(2);

      expect(testInstance.hasPeriodElement()).toBe(true);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType(1.0));
      expect(testInstance.hasPeriod()).toBe(true);
      expect(testInstance.getPeriod()).toStrictEqual(1.0);

      expect(testInstance.hasPeriodMaxElement()).toBe(true);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType(2.0));
      expect(testInstance.hasPeriodMax()).toBe(true);
      expect(testInstance.getPeriodMax()).toStrictEqual(2.0);

      expect(testInstance.hasPeriodUnitElement()).toBe(true);
      expect(testInstance.getPeriodUnitElement()).toEqual(TestData.VALID_CODE_TYPE);
      expect(testInstance.hasPeriodUnit()).toBe(true);
      expect(testInstance.getPeriodUnit()).toStrictEqual(TestData.VALID_CODE);

      expect(testInstance.hasDayOfWeekEnumType()).toBe(true);
      expect(testInstance.getDayOfWeekEnumType()).toEqual([daysOfWeekMonEnum, daysOfWeekFriEnum]);
      expect(testInstance.hasDayOfWeekElement()).toBe(true);
      expect(testInstance.getDayOfWeekElement()).toEqual([
        daysOfWeekMonEnum as CodeType,
        daysOfWeekFriEnum as CodeType,
      ]);
      expect(testInstance.hasDayOfWeek()).toBe(true);
      expect(testInstance.getDayOfWeek()).toEqual([DaysOfWeekEnum.MON.code, DaysOfWeekEnum.FRI.code]);

      expect(testInstance.hasTimeOfDayElement()).toBe(true);
      expect(testInstance.getTimeOfDayElement()).toEqual([new TimeType('08:00:00'), new TimeType('17:00:00')]);
      expect(testInstance.hasTimeOfDay()).toBe(true);
      expect(testInstance.getTimeOfDay()).toEqual(['08:00:00', '17:00:00']);

      expect(testInstance.hasWhenElement()).toBe(true);
      expect(testInstance.getWhenElement()).toEqual([TestData.VALID_CODE_TYPE]);
      expect(testInstance.hasWhen()).toBe(true);
      expect(testInstance.getWhen()).toEqual([TestData.VALID_CODE]);

      expect(testInstance.hasOffsetElement()).toBe(true);
      expect(testInstance.getOffsetElement()).toEqual(altOffset);
      expect(testInstance.hasOffset()).toBe(true);
      expect(testInstance.getOffset()).toStrictEqual(0);
    });

    it('should return parsed Timing for valid json with no field values', () => {
      const testInstance: TimingRepeatComponent = TimingRepeatComponent.parse(VALID_JSON_NO_FIELDS);

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );

      expectInitializedElementProperties(testInstance, 2);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);

      expect(testInstance.hasBounds()).toBe(false);
      expect(testInstance.getBounds()).toBeUndefined();

      expect(testInstance.hasCountElement()).toBe(false);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCount()).toBe(false);
      expect(testInstance.getCount()).toBeUndefined();

      expect(testInstance.hasCountMaxElement()).toBe(false);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCountMax()).toBe(false);
      expect(testInstance.getCountMax()).toBeUndefined();

      expect(testInstance.hasDurationElement()).toBe(false);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType());
      expect(testInstance.hasDuration()).toBe(false);
      expect(testInstance.getDuration()).toBeUndefined();

      expect(testInstance.hasDurationMaxElement()).toBe(false);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasDurationMax()).toBe(false);
      expect(testInstance.getDurationMax()).toBeUndefined();

      expect(testInstance.hasDurationUnitElement()).toBe(false);
      expect(testInstance.getDurationUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasDurationUnit()).toBe(false);
      expect(testInstance.getDurationUnit()).toBeUndefined();

      expect(testInstance.hasFrequencyElement()).toBe(false);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequency()).toBe(false);
      expect(testInstance.getFrequency()).toBeUndefined();

      expect(testInstance.hasFrequencyMaxElement()).toBe(false);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequencyMax()).toBe(false);
      expect(testInstance.getFrequencyMax()).toBeUndefined();

      expect(testInstance.hasPeriodElement()).toBe(false);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriod()).toBe(false);
      expect(testInstance.getPeriod()).toBeUndefined();

      expect(testInstance.hasPeriodMaxElement()).toBe(false);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriodMax()).toBe(false);
      expect(testInstance.getPeriodMax()).toBeUndefined();

      expect(testInstance.hasPeriodUnitElement()).toBe(false);
      expect(testInstance.getPeriodUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasPeriodUnit()).toBe(false);
      expect(testInstance.getPeriodUnit()).toBeUndefined();

      expect(testInstance.hasDayOfWeekEnumType()).toBe(false);
      expect(testInstance.getDayOfWeekEnumType()).toEqual(new Array<EnumCodeType>());
      expect(testInstance.hasDayOfWeekElement()).toBe(false);
      expect(testInstance.getDayOfWeekElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasDayOfWeek()).toBe(false);
      expect(testInstance.getDayOfWeek()).toEqual([] as fhirCode[]);

      expect(testInstance.hasTimeOfDayElement()).toBe(false);
      expect(testInstance.getTimeOfDayElement()).toEqual([] as TimeType[]);
      expect(testInstance.hasTimeOfDay()).toBe(false);
      expect(testInstance.getTimeOfDay()).toEqual([] as fhirTime[]);

      expect(testInstance.hasWhenElement()).toBe(false);
      expect(testInstance.getWhenElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasWhen()).toBe(false);
      expect(testInstance.getWhen()).toEqual([] as fhirCode[]);

      expect(testInstance.hasOffsetElement()).toBe(false);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasOffset()).toBe(false);
      expect(testInstance.getOffset()).toBeUndefined();
    });

    it('should return parsed Timing for valid json with null field values', () => {
      const testInstance: TimingRepeatComponent = TimingRepeatComponent.parse(VALID_JSON_NULL_FIELDS);

      expectElementBase(
        TimingRepeatComponent as unknown as IElement,
        testInstance,
        'TimingRepeatComponent',
        'Timing.repeat',
      );

      expectInitializedElementProperties(testInstance, 2);
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.isComplexDataType()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON_NO_FIELDS);

      expect(testInstance.hasBounds()).toBe(false);
      expect(testInstance.getBounds()).toBeUndefined();

      expect(testInstance.hasCountElement()).toBe(false);
      expect(testInstance.getCountElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCount()).toBe(false);
      expect(testInstance.getCount()).toBeUndefined();

      expect(testInstance.hasCountMaxElement()).toBe(false);
      expect(testInstance.getCountMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasCountMax()).toBe(false);
      expect(testInstance.getCountMax()).toBeUndefined();

      expect(testInstance.hasDurationElement()).toBe(false);
      expect(testInstance.getDurationElement()).toEqual(new DecimalType());
      expect(testInstance.hasDuration()).toBe(false);
      expect(testInstance.getDuration()).toBeUndefined();

      expect(testInstance.hasDurationMaxElement()).toBe(false);
      expect(testInstance.getDurationMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasDurationMax()).toBe(false);
      expect(testInstance.getDurationMax()).toBeUndefined();

      expect(testInstance.hasDurationUnitElement()).toBe(false);
      expect(testInstance.getDurationUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasDurationUnit()).toBe(false);
      expect(testInstance.getDurationUnit()).toBeUndefined();

      expect(testInstance.hasFrequencyElement()).toBe(false);
      expect(testInstance.getFrequencyElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequency()).toBe(false);
      expect(testInstance.getFrequency()).toBeUndefined();

      expect(testInstance.hasFrequencyMaxElement()).toBe(false);
      expect(testInstance.getFrequencyMaxElement()).toEqual(new PositiveIntType());
      expect(testInstance.hasFrequencyMax()).toBe(false);
      expect(testInstance.getFrequencyMax()).toBeUndefined();

      expect(testInstance.hasPeriodElement()).toBe(false);
      expect(testInstance.getPeriodElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriod()).toBe(false);
      expect(testInstance.getPeriod()).toBeUndefined();

      expect(testInstance.hasPeriodMaxElement()).toBe(false);
      expect(testInstance.getPeriodMaxElement()).toEqual(new DecimalType());
      expect(testInstance.hasPeriodMax()).toBe(false);
      expect(testInstance.getPeriodMax()).toBeUndefined();

      expect(testInstance.hasPeriodUnitElement()).toBe(false);
      expect(testInstance.getPeriodUnitElement()).toEqual(new CodeType());
      expect(testInstance.hasPeriodUnit()).toBe(false);
      expect(testInstance.getPeriodUnit()).toBeUndefined();

      expect(testInstance.hasDayOfWeekEnumType()).toBe(false);
      expect(testInstance.getDayOfWeekEnumType()).toEqual(new Array<EnumCodeType>());
      expect(testInstance.hasDayOfWeekElement()).toBe(false);
      expect(testInstance.getDayOfWeekElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasDayOfWeek()).toBe(false);
      expect(testInstance.getDayOfWeek()).toEqual([] as fhirCode[]);

      expect(testInstance.hasTimeOfDayElement()).toBe(false);
      expect(testInstance.getTimeOfDayElement()).toEqual([] as TimeType[]);
      expect(testInstance.hasTimeOfDay()).toBe(false);
      expect(testInstance.getTimeOfDay()).toEqual([] as fhirTime[]);

      expect(testInstance.hasWhenElement()).toBe(false);
      expect(testInstance.getWhenElement()).toEqual([] as CodeType[]);
      expect(testInstance.hasWhen()).toBe(false);
      expect(testInstance.getWhen()).toEqual([] as fhirCode[]);

      expect(testInstance.hasOffsetElement()).toBe(false);
      expect(testInstance.getOffsetElement()).toEqual(new UnsignedIntType());
      expect(testInstance.hasOffset()).toBe(false);
      expect(testInstance.getOffset()).toBeUndefined();
    });
  });

  describe('Type Assertion Tests', () => {
    it('bounds: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      const t = () => {
        testInstance.setBounds(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ChoiceDataTypes decorator on setBounds (Timing.repeat.bounds[x]) expects the 'value' argument type (MockComplexDataType) to be a supported DataType`,
      );
    });

    it('count: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setCountElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.count; Provided element is not an instance of PositiveIntType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setCountElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.count; Provided element is not an instance of PositiveIntType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setCount(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.count (Invalid datatype)`);
    });

    it('countMax: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setCountMaxElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.countMax; Provided element is not an instance of PositiveIntType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setCountMaxElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.countMax; Provided element is not an instance of PositiveIntType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setCountMax(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.countMax (Invalid datatype)`);
    });

    it('duration: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDurationElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.duration; Provided element is not an instance of DecimalType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDurationElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.duration; Provided element is not an instance of DecimalType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDuration(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.duration (Invalid datatype)`);
    });

    it('durationMax: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDurationMaxElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.durationMax; Provided element is not an instance of DecimalType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDurationMaxElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.durationMax; Provided element is not an instance of DecimalType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDurationMax(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.durationMax (Invalid datatype)`);
    });

    it('durationUnit: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDurationUnitElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.durationUnit; Provided element is not an instance of CodeType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDurationUnitElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.durationUnit; Provided element is not an instance of CodeType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDurationUnit(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.durationUnit (12345)`);
    });

    it('frequency: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setFrequencyElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.frequency; Provided element is not an instance of PositiveIntType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setFrequencyElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.frequency; Provided element is not an instance of PositiveIntType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setFrequency(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.frequency (Invalid datatype)`);
    });

    it('frequencyMax: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setFrequencyMaxElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.frequencyMax; Provided element is not an instance of PositiveIntType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setFrequencyMaxElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.frequencyMax; Provided element is not an instance of PositiveIntType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setFrequencyMax(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.frequencyMax (Invalid datatype)`);
    });

    it('period: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPeriodElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.period; Provided element is not an instance of DecimalType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPeriodElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.period; Provided element is not an instance of DecimalType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPeriod(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.period (Invalid datatype)`);
    });

    it('periodMax: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPeriodMaxElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.periodMax; Provided element is not an instance of DecimalType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPeriodMaxElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.periodMax; Provided element is not an instance of DecimalType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPeriodMax(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.periodMax (Invalid datatype)`);
    });

    it('periodUnit: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPeriodUnitElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.periodUnit; Provided element is not an instance of CodeType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPeriodUnitElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.periodUnit; Provided element is not an instance of CodeType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setPeriodUnit(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.periodUnit (12345)`);
    });

    it('dayOfWeek: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDayOfWeekEnumType([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Timing.repeat.dayOfWeek; Provided instance array has an element that is not an instance of DaysOfWeekEnum.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDayOfWeekEnumType([TestData.INVALID_NON_STRING_TYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Timing.repeat.dayOfWeek; Provided instance array has an element that is not an instance of DaysOfWeekEnum.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addDayOfWeekEnumType(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.dayOfWeek; Provided type is not an instance of DaysOfWeekEnum.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDayOfWeekElement([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Timing.repeat.dayOfWeek; Provided element array has an element that is not an instance of CodeType.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setDayOfWeekElement([TestData.INVALID_NON_STRING_TYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Timing.repeat.dayOfWeek; Provided element array has an element that is not an instance of CodeType.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addDayOfWeekElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.dayOfWeek; Provided element is not an instance of CodeType.`);

      t = () => {
        testInstance.setDayOfWeek([TestData.INVALID_NON_STRING_TYPE_VALUE]);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown DaysOfWeekEnum 'code' value 'Invalid datatype'`);

      t = () => {
        testInstance.addDayOfWeek(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown DaysOfWeekEnum 'code' value 'Invalid datatype'`);
    });

    it('timeOfDay: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setTimeOfDayElement([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Timing.repeat.timeOfDay; Provided value array has an element that is not an instance of TimeType.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setTimeOfDayElement([TestData.INVALID_NON_STRING_TYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Timing.repeat.timeOfDay; Provided value array has an element that is not an instance of TimeType.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addTimeOfDayElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.timeOfDay; Provided element is not an instance of TimeType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setTimeOfDay([TestData.INVALID_STRING_TYPE_VALUE]);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.timeOfDay array item (12345)`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addTimeOfDay(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.timeOfDay array item (12345)`);
    });

    it('when: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setWhenElement([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Timing.repeat.when; Provided value array has an element that is not an instance of CodeType.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setWhenElement([TestData.INVALID_NON_STRING_TYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Timing.repeat.when; Provided value array has an element that is not an instance of CodeType.`,
      );

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addWhenElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.when; Provided element is not an instance of CodeType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setWhen([TestData.INVALID_STRING_TYPE_VALUE]);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.when array item (12345`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.addWhen(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.when array item (12345)`);
    });

    it('offset: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new TimingRepeatComponent();
      let t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setOffsetElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.offset; Provided element is not an instance of UnsignedIntType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setOffsetElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.offset; Provided element is not an instance of UnsignedIntType.`);

      t = () => {
        // @ts-expect-error: Allow for testing
        testInstance.setOffset(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Timing.repeat.offset (Invalid datatype)`);
    });
  });
});
