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
  IBackboneElement,
  InvalidCodeError,
  InvalidTypeError,
  PrimitiveTypeError,
} from '@paq-ts-fhir/fhir-core';
import { BundleEntrySearchComponent } from '../../../src/resources/Bundle';
import { SearchEntryModeEnum } from '../../../src/code-systems/SearchEntryModeEnum';
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
import { DATATYPE_EXTENSION, VALID_MOCK_COMPLEX_DATATYPE } from '../../ftest-mocks';

describe('BundleEntrySearchComponent', () => {
  const searchEntryModeEnum = new SearchEntryModeEnum();
  const VALID_SEARCH_MODE_INCLUDE_ENUMCODE = new EnumCodeType(SearchEntryModeEnum.INCLUDE.code, searchEntryModeEnum);
  const VALID_SEARCH_MODE_OUTCOME_ENUMCODE = new EnumCodeType(SearchEntryModeEnum.OUTCOME.code, searchEntryModeEnum);
  const VALID_SEARCH_MODE_MATCH_ENUMCODE = new EnumCodeType(SearchEntryModeEnum.MATCH.code, searchEntryModeEnum);

  describe('Base Tests', () => {
    it('should be properly instantiated as empty', () => {
      const testInstance = new BundleEntrySearchComponent();

      expectBackboneElementBase(
        BundleEntrySearchComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntrySearchComponent',
        'Bundle.entry.search',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasModeEnumType()).toBe(false);
      expect(testInstance.getModeEnumType()).toBeUndefined();
      expect(testInstance.hasModeElement()).toBe(false);
      expect(testInstance.getModeElement()).toBeUndefined();
      expect(testInstance.hasMode()).toBe(false);
      expect(testInstance.getMode()).toBeUndefined();
      expect(testInstance.hasScoreElement()).toBe(false);
      expect(testInstance.getScoreElement()).toEqual(new DecimalType());
      expect(testInstance.hasScore()).toBe(false);
      expect(testInstance.getScore()).toBeUndefined();
    });

    it('should properly copy()', () => {
      const testModel = new BundleEntrySearchComponent();

      initializeBackboneElementProperties(testModel, 1);

      testModel.setModeEnumType(VALID_SEARCH_MODE_INCLUDE_ENUMCODE);
      testModel.setScoreElement(TestData.VALID_DECIMAL_TYPE);

      let testInstance: BundleEntrySearchComponent = testModel.copy();

      expectBackboneElementBase(
        BundleEntrySearchComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntrySearchComponent',
        'Bundle.entry.search',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasModeEnumType()).toBe(true);
      expect(testInstance.getModeEnumType()).toEqual(VALID_SEARCH_MODE_INCLUDE_ENUMCODE);
      expect(testInstance.hasModeElement()).toBe(true);
      expect(testInstance.getModeElement()).toEqual(VALID_SEARCH_MODE_INCLUDE_ENUMCODE as CodeType);
      expect(testInstance.hasMode()).toBe(true);
      expect(testInstance.getMode()).toEqual(SearchEntryModeEnum.INCLUDE.code);
      expect(testInstance.hasScoreElement()).toBe(true);
      expect(testInstance.getScoreElement()).toEqual(TestData.VALID_DECIMAL_TYPE);
      expect(testInstance.hasScore()).toBe(true);
      expect(testInstance.getScore()).toEqual(TestData.VALID_DECIMAL);

      // Reset to undefined

      undefineBackboneElementProperties(testModel);

      testModel.setModeEnumType(TestData.UNDEFINED_VALUE);
      testModel.setScoreElement(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectBackboneElementBase(
        BundleEntrySearchComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntrySearchComponent',
        'Bundle.entry.search',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasModeEnumType()).toBe(false);
      expect(testInstance.getModeEnumType()).toBeUndefined();
      expect(testInstance.hasModeElement()).toBe(false);
      expect(testInstance.getModeElement()).toBeUndefined();
      expect(testInstance.hasMode()).toBe(false);
      expect(testInstance.getMode()).toBeUndefined();
      expect(testInstance.hasScoreElement()).toBe(false);
      expect(testInstance.getScoreElement()).toEqual(new DecimalType());
      expect(testInstance.hasScore()).toBe(false);
      expect(testInstance.getScore()).toBeUndefined();
    });

    it('should be properly reset by modifying/adding all properties', () => {
      const testInstance = new BundleEntrySearchComponent();

      initializeBackboneElementProperties(testInstance, 1);

      testInstance.setModeEnumType(VALID_SEARCH_MODE_INCLUDE_ENUMCODE);
      testInstance.setScoreElement(TestData.VALID_DECIMAL_TYPE);

      expectBackboneElementBase(
        BundleEntrySearchComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntrySearchComponent',
        'Bundle.entry.search',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 1);

      expect(testInstance.hasModeEnumType()).toBe(true);
      expect(testInstance.getModeEnumType()).toEqual(VALID_SEARCH_MODE_INCLUDE_ENUMCODE);
      expect(testInstance.hasModeElement()).toBe(true);
      expect(testInstance.getModeElement()).toEqual(VALID_SEARCH_MODE_INCLUDE_ENUMCODE as CodeType);
      expect(testInstance.hasMode()).toBe(true);
      expect(testInstance.getMode()).toEqual(SearchEntryModeEnum.INCLUDE.code);
      expect(testInstance.hasScoreElement()).toBe(true);
      expect(testInstance.getScoreElement()).toEqual(TestData.VALID_DECIMAL_TYPE);
      expect(testInstance.hasScore()).toBe(true);
      expect(testInstance.getScore()).toEqual(TestData.VALID_DECIMAL);

      // Reset

      resetBackboneElementProperties(testInstance);

      testInstance.setModeElement(VALID_SEARCH_MODE_OUTCOME_ENUMCODE as CodeType);
      testInstance.setScoreElement(TestData.VALID_DECIMAL_TYPE_2);

      expectBackboneElementBase(
        BundleEntrySearchComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntrySearchComponent',
        'Bundle.entry.search',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetElementProperties(testInstance);

      expect(testInstance.hasModeEnumType()).toBe(true);
      expect(testInstance.getModeEnumType()).toEqual(VALID_SEARCH_MODE_OUTCOME_ENUMCODE);
      expect(testInstance.hasModeElement()).toBe(true);
      expect(testInstance.getModeElement()).toEqual(VALID_SEARCH_MODE_OUTCOME_ENUMCODE as CodeType);
      expect(testInstance.hasMode()).toBe(true);
      expect(testInstance.getMode()).toEqual(SearchEntryModeEnum.OUTCOME.code);
      expect(testInstance.hasScoreElement()).toBe(true);
      expect(testInstance.getScoreElement()).toEqual(TestData.VALID_DECIMAL_TYPE_2);
      expect(testInstance.hasScore()).toBe(true);
      expect(testInstance.getScore()).toEqual(TestData.VALID_DECIMAL_2);

      // Reset using primitives

      initializeBackboneElementProperties(testInstance, 2);

      testInstance.setMode(SearchEntryModeEnum.MATCH.code);
      testInstance.setScore(TestData.VALID_DECIMAL_3);

      expectBackboneElementBase(
        BundleEntrySearchComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntrySearchComponent',
        'Bundle.entry.search',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedElementProperties(testInstance, 2);

      expect(testInstance.hasModeEnumType()).toBe(true);
      expect(testInstance.getModeEnumType()).toEqual(VALID_SEARCH_MODE_MATCH_ENUMCODE);
      expect(testInstance.hasModeElement()).toBe(true);
      expect(testInstance.getModeElement()).toEqual(VALID_SEARCH_MODE_MATCH_ENUMCODE as CodeType);
      expect(testInstance.hasMode()).toBe(true);
      expect(testInstance.getMode()).toEqual(SearchEntryModeEnum.MATCH.code);
      expect(testInstance.hasScoreElement()).toBe(true);
      expect(testInstance.getScoreElement()).toEqual(TestData.VALID_DECIMAL_TYPE_3);
      expect(testInstance.hasScore()).toBe(true);
      expect(testInstance.getScore()).toEqual(TestData.VALID_DECIMAL_3);

      // Reset to undefined

      undefineBackboneElementProperties(testInstance);

      testInstance.setModeEnumType(TestData.UNDEFINED_VALUE);
      testInstance.setScoreElement(TestData.UNDEFINED_VALUE);

      expectBackboneElementBase(
        BundleEntrySearchComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntrySearchComponent',
        'Bundle.entry.search',
      );
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedElementProperties(testInstance);

      expect(testInstance.hasModeEnumType()).toBe(false);
      expect(testInstance.getModeEnumType()).toBeUndefined();
      expect(testInstance.hasModeElement()).toBe(false);
      expect(testInstance.getModeElement()).toBeUndefined();
      expect(testInstance.hasMode()).toBe(false);
      expect(testInstance.getMode()).toBeUndefined();
      expect(testInstance.hasScoreElement()).toBe(false);
      expect(testInstance.getScoreElement()).toEqual(new DecimalType());
      expect(testInstance.hasScore()).toBe(false);
      expect(testInstance.getScore()).toBeUndefined();

      // Reset to undefined for Element

      testInstance.setModeElement(TestData.UNDEFINED_VALUE);
      testInstance.setScoreElement(TestData.UNDEFINED_VALUE);

      expect(testInstance.hasModeEnumType()).toBe(false);
      expect(testInstance.getModeEnumType()).toBeUndefined();
      expect(testInstance.hasModeElement()).toBe(false);
      expect(testInstance.getModeElement()).toBeUndefined();
      expect(testInstance.hasMode()).toBe(false);
      expect(testInstance.getMode()).toBeUndefined();
      expect(testInstance.hasScoreElement()).toBe(false);
      expect(testInstance.getScoreElement()).toEqual(new DecimalType());
      expect(testInstance.hasScore()).toBe(false);
      expect(testInstance.getScore()).toBeUndefined();

      // Reset to undefined for primitives

      testInstance.setMode(TestData.UNDEFINED_VALUE);
      testInstance.setScore(TestData.UNDEFINED_VALUE);

      expect(testInstance.hasModeEnumType()).toBe(false);
      expect(testInstance.getModeEnumType()).toBeUndefined();
      expect(testInstance.hasModeElement()).toBe(false);
      expect(testInstance.getModeElement()).toBeUndefined();
      expect(testInstance.hasMode()).toBe(false);
      expect(testInstance.getMode()).toBeUndefined();
      expect(testInstance.hasScoreElement()).toBe(false);
      expect(testInstance.getScoreElement()).toEqual(new DecimalType());
      expect(testInstance.hasScore()).toBe(false);
      expect(testInstance.getScore()).toBeUndefined();
    });
  });

  describe('Serialization/Deserialization', () => {
    const altModeEnumType = VALID_SEARCH_MODE_INCLUDE_ENUMCODE.copy();
    altModeEnumType.setId(TestData.DATATYPE_ID);
    altModeEnumType.addExtension(DATATYPE_EXTENSION);

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
      mode: 'include',
      _mode: {
        id: 'DT-1357',
        extension: [
          {
            url: 'datatypeExtUrl',
            valueString: 'Datatype Extension string value',
          },
        ],
      },
      score: 128.1978,
    };

    it('should properly create serialized content', () => {
      const testInstance = new BundleEntrySearchComponent();

      initializeBackboneElementProperties(testInstance, 2);

      testInstance.setModeEnumType(altModeEnumType);
      testInstance.setScoreElement(TestData.VALID_DECIMAL_TYPE);

      expectBackboneElementBase(
        BundleEntrySearchComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntrySearchComponent',
        'Bundle.entry.search',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expectInitializedElementProperties(testInstance, 2);

      expect(testInstance.hasModeEnumType()).toBe(true);
      expect(testInstance.getModeEnumType()).toEqual(altModeEnumType);
      expect(testInstance.hasModeElement()).toBe(true);
      expect(testInstance.getModeElement()).toEqual(altModeEnumType as CodeType);
      expect(testInstance.hasMode()).toBe(true);
      expect(testInstance.getMode()).toEqual(SearchEntryModeEnum.INCLUDE.code);
      expect(testInstance.hasScoreElement()).toBe(true);
      expect(testInstance.getScoreElement()).toEqual(TestData.VALID_DECIMAL_TYPE);
      expect(testInstance.hasScore()).toBe(true);
      expect(testInstance.getScore()).toEqual(TestData.VALID_DECIMAL);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: BundleEntrySearchComponent | undefined = undefined;
      testInstance = BundleEntrySearchComponent.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = BundleEntrySearchComponent.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = BundleEntrySearchComponent.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should return parsed Bundle for valid json', () => {
      const testInstance = BundleEntrySearchComponent.parse(VALID_JSON);

      expectBackboneElementBase(
        BundleEntrySearchComponent as unknown as IBackboneElement,
        testInstance,
        'BundleEntrySearchComponent',
        'Bundle.entry.search',
      );
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
      expectInitializedElementProperties(testInstance, 2);

      expect(testInstance.hasModeEnumType()).toBe(true);
      expect(testInstance.getModeEnumType()).toEqual(altModeEnumType);
      expect(testInstance.hasModeElement()).toBe(true);
      expect(testInstance.getModeElement()).toEqual(altModeEnumType as CodeType);
      expect(testInstance.hasMode()).toBe(true);
      expect(testInstance.getMode()).toEqual(SearchEntryModeEnum.INCLUDE.code);
      expect(testInstance.hasScoreElement()).toBe(true);
      expect(testInstance.getScoreElement()).toEqual(TestData.VALID_DECIMAL_TYPE);
      expect(testInstance.hasScore()).toBe(true);
      expect(testInstance.getScore()).toEqual(TestData.VALID_DECIMAL);
    });
  });

  describe('Type Assertion Tests', () => {
    it('mode: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntrySearchComponent();
      let t = () => {
        testInstance.setModeEnumType(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.search.mode; Provided type is not an instance of SearchEntryModeEnum.`);

      t = () => {
        testInstance.setModeElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.search.mode; Provided element is not an instance of CodeType.`);

      t = () => {
        testInstance.setMode(TestData.INVALID_CODE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.search.mode; Provided value is not an instance of fhirCode.`);

      t = () => {
        testInstance.setMode(TestData.VALID_URI);
      };
      expect(t).toThrow(InvalidCodeError);
      expect(t).toThrow(`Unknown SearchEntryModeEnum 'code' value 'validUri'`);
    });

    it('score: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new BundleEntrySearchComponent();
      let t = () => {
        testInstance.setScoreElement(TestData.INVALID_NON_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.search.score; Provided element is not an instance of DecimalType.`);

      t = () => {
        testInstance.setScore(TestData.INVALID_NON_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Bundle.entry.search.score (Invalid datatype)`);
    });
  });
});
