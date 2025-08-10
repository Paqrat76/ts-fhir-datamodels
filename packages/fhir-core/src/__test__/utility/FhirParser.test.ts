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
import { PARSABLE_DATATYPE_MAP } from '../../base-models/parsable-datatype-map';
import {
  FhirParser,
  getPrimitiveTypeJson,
  getPrimitiveTypeListJson,
  PrimitiveTypeJson,
} from '../../utility/FhirParser';
import {
  FHIR_MAX_INTEGER,
  FHIR_MAX_INTEGER64,
  FHIR_MIN_INTEGER,
  FHIR_MIN_INTEGER64,
} from '../../data-types/primitive/primitive-types';
import { Base64BinaryType } from '../../data-types/primitive/Base64BinaryType';
import { PrimitiveTypeError } from '../../errors/PrimitiveTypeError';
import { Extension } from '../../base-models/core-fhir-models';
import { StringType } from '../../data-types/primitive/StringType';
import { BooleanType } from '../../data-types/primitive/BooleanType';
import { CanonicalType } from '../../data-types/primitive/CanonicalType';
import { CodeType } from '../../data-types/primitive/CodeType';
import { DateTimeType } from '../../data-types/primitive/DateTimeType';
import { DateType } from '../../data-types/primitive/DateType';
import { DecimalType } from '../../data-types/primitive/DecimalType';
import { IdType } from '../../data-types/primitive/IdType';
import { InstantType } from '../../data-types/primitive/InstantType';
import { Integer64Type } from '../../data-types/primitive/Integer64Type';
import { IntegerType } from '../../data-types/primitive/IntegerType';
import { MarkdownType } from '../../data-types/primitive/MarkdownType';
import { OidType } from '../../data-types/primitive/OidType';
import { PositiveIntType } from '../../data-types/primitive/PositiveIntType';
import { TimeType } from '../../data-types/primitive/TimeType';
import { UnsignedIntType } from '../../data-types/primitive/UnsignedIntType';
import { UriType } from '../../data-types/primitive/UriType';
import { UrlType } from '../../data-types/primitive/UrlType';
import { UuidType } from '../../data-types/primitive/UuidType';
import { XhtmlType } from '../../data-types/primitive/XhtmlType';
import { FhirError } from '../../errors/FhirError';
import {
  IBackboneElement,
  IBackboneType,
  IDataType,
  IDomainResource,
  IResource,
} from '../../base-models/library-interfaces';
import {
  MockBackboneElement,
  MockBackboneType,
  MockElement,
  MockResource,
  MockTask,
  TOO_BIG_STRING,
  PARSABLE_RESOURCE_MAP,
} from '../test-utils';
import { TestData } from '../test-data';

describe('FhirParser', () => {
  let fhirParser: FhirParser;
  beforeAll(() => {
    fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    expect(fhirParser).toBeDefined();
  });

  describe('Core Parsers', () => {
    describe('parseExtension', () => {
      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseExtension({});
        expect(testType).toBeUndefined();

        testType = fhirParser.parseExtension(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseExtension(null);
        expect(testType).toBeUndefined();
      });

      it('should return Extension for valid json with value[x]', () => {
        const VALID_EXTENSION_JSON = {
          url: 'testUrl',
          valueString: 'extension string value',
        };
        const expectedValue = new StringType('extension string value');

        const testType = fhirParser.parseExtension(VALID_EXTENSION_JSON);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(Extension);
        expect(testType?.constructor.name).toStrictEqual('Extension');
        expect(testType?.fhirType()).toStrictEqual('Extension');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
        expect(testType?.hasUrl()).toBe(true);
        expect(testType?.getUrl()).toStrictEqual('testUrl');
        expect(testType?.hasValue()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(expectedValue);
      });

      it('should return Extension for valid json with extensions', () => {
        const VALID_EXTENSION_JSON = {
          id: 'extId',
          url: 'testUrl',
          extension: [
            {
              url: 'childUrl1',
              valueString: 'child extension string value 1',
            },
            {
              url: 'childUrl2',
              valueString: 'child extension string value 2',
            },
          ],
        };
        const expectedChild1 = new Extension('childUrl1', new StringType('child extension string value 1'));
        const expectedChild2 = new Extension('childUrl2', new StringType('child extension string value 2'));

        const testType = fhirParser.parseExtension(VALID_EXTENSION_JSON);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(Extension);
        expect(testType?.constructor.name).toStrictEqual('Extension');
        expect(testType?.fhirType()).toStrictEqual('Extension');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.hasId()).toBe(true);
        expect(testType?.getId()).toStrictEqual('extId');
        expect(testType?.hasExtension()).toBe(true);
        expect(testType?.getExtension()).toHaveLength(2);
        expect(testType?.getExtension()).toEqual([expectedChild1, expectedChild2]);
        expect(testType?.hasUrl()).toBe(true);
        expect(testType?.getUrl()).toStrictEqual('testUrl');
        expect(testType?.hasValue()).toBe(false);
        expect(testType?.hasUrl()).toBe(true);
        expect(testType?.getUrl()).toStrictEqual('testUrl');
        expect(testType?.hasValue()).toBe(false);
      });

      it('should throw FhirError for missing url', () => {
        const INVALID_EXTENSION_JSON = {
          id: 'extId',
          valueString: 'extension string value',
        };

        const t = () => {
          fhirParser.parseExtension(INVALID_EXTENSION_JSON);
        };
        expect(t).toThrow(FhirError);
        expect(t).toThrow(`The following required properties must be included in the provided JSON: Extension.url`);
      });

      it('should throw FhirError for invalid json', () => {
        const INVALID_EXTENSION_JSON = {
          url: 'testUrl',
          valueString: 'extension string value',
          extension: [
            {
              url: 'childUrl1',
              valueString: 'child extension string value 1',
            },
            {
              url: 'childUrl2',
              valueString: 'child extension string value 2',
            },
          ],
        };

        const t = () => {
          fhirParser.parseExtension(INVALID_EXTENSION_JSON);
        };
        expect(t).toThrow(FhirError);
        expect(t).toThrow(`The Extension must have either 'extension's or 'value[x]', not both`);
      });
    });

    describe('parseElement', () => {
      let instance: IDataType;
      beforeEach(() => {
        instance = new MockElement();
      });

      it('should return undefined for empty json', () => {
        fhirParser.processElementJson(instance, {});
        expect(instance.isEmpty()).toBe(true);

        fhirParser.processElementJson(instance, undefined);
        expect(instance.isEmpty()).toBe(true);

        fhirParser.processElementJson(instance, null);
        expect(instance.isEmpty()).toBe(true);
      });

      it('should return correct instance for valid json', () => {
        const VALID_JSON = {
          id: 'idBE123',
          extension: [
            {
              url: 'validUrl1',
              valueString: 'This is a valid string 1',
            },
          ],
        };

        fhirParser.processElementJson(instance, VALID_JSON);
        expect(instance).toBeDefined();
        expect(instance).toBeInstanceOf(MockElement);
        expect(instance.constructor.name).toStrictEqual('MockElement');
        expect(instance.fhirType()).toStrictEqual('Element');
        expect(instance.isEmpty()).toBe(false);
        expect(instance.toJSON()).toEqual(VALID_JSON);
      });

      it('should throw TypeError for invalid json type', () => {
        const INVALID_JSON = {
          id: 123,
        };

        const t = () => {
          fhirParser.processElementJson(instance, INVALID_JSON);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`MockElement.id is not a string.`);
      });
    });

    describe('parseBackboneElement', () => {
      let instance: IBackboneElement;
      beforeEach(() => {
        instance = new MockBackboneElement();
      });

      it('should return undefined for empty json', () => {
        fhirParser.processBackboneElementJson(instance, {});
        expect(instance.isEmpty()).toBe(true);

        fhirParser.processBackboneElementJson(instance, undefined);
        expect(instance.isEmpty()).toBe(true);

        fhirParser.processBackboneElementJson(instance, null);
        expect(instance.isEmpty()).toBe(true);
      });

      it('should return correct instance for valid json', () => {
        const VALID_JSON = {
          id: 'idBE123',
          extension: [
            {
              url: 'validUrl1',
              valueString: 'This is a valid string 1',
            },
          ],
          modifierExtension: [
            {
              url: 'validUrl2',
              valueString: 'This is a valid string 2',
            },
          ],
        };

        fhirParser.processBackboneElementJson(instance, VALID_JSON);
        expect(instance).toBeDefined();
        expect(instance).toBeInstanceOf(MockBackboneElement);
        expect(instance.constructor.name).toStrictEqual('MockBackboneElement');
        expect(instance.fhirType()).toStrictEqual('BackboneElement');
        expect(instance.isEmpty()).toBe(false);
        expect(instance.toJSON()).toEqual(VALID_JSON);
      });

      it('should throw TypeError for invalid json type', () => {
        const INVALID_JSON = {
          id: 123,
        };

        const t = () => {
          fhirParser.processBackboneElementJson(instance, INVALID_JSON);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`MockBackboneElement.id is not a string.`);
      });
    });

    describe('parseBackboneType', () => {
      let instance: IBackboneType;
      beforeEach(() => {
        instance = new MockBackboneType();
      });

      it('should return undefined for empty json', () => {
        fhirParser.processBackboneTypeJson(instance, {});
        expect(instance.isEmpty()).toBe(true);

        fhirParser.processBackboneTypeJson(instance, undefined);
        expect(instance.isEmpty()).toBe(true);

        fhirParser.processBackboneTypeJson(instance, null);
        expect(instance.isEmpty()).toBe(true);
      });

      it('should return correct instance for valid json', () => {
        const VALID_JSON = {
          id: 'idBE123',
          extension: [
            {
              url: 'validUrl1',
              valueString: 'This is a valid string 1',
            },
          ],
          modifierExtension: [
            {
              url: 'validUrl2',
              valueString: 'This is a valid string 2',
            },
          ],
        };

        fhirParser.processBackboneTypeJson(instance, VALID_JSON);
        expect(instance).toBeDefined();
        expect(instance).toBeInstanceOf(MockBackboneType);
        expect(instance.constructor.name).toStrictEqual('MockBackboneType');
        expect(instance.fhirType()).toStrictEqual('BackboneType');
        expect(instance.isEmpty()).toBe(false);
        expect(instance.toJSON()).toEqual(VALID_JSON);
      });

      it('should throw TypeError for invalid json type', () => {
        const INVALID_JSON = {
          id: 123,
        };

        const t = () => {
          fhirParser.processBackboneTypeJson(instance, INVALID_JSON);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`MockBackboneType.id is not a string.`);
      });
    });

    describe('parseResource', () => {
      let instance: IResource;
      beforeEach(() => {
        instance = new MockResource();
      });

      it('should return undefined for empty json', () => {
        fhirParser.processResourceJson(instance, {});
        expect(instance.isEmpty()).toBe(true);

        fhirParser.processResourceJson(instance, undefined);
        expect(instance.isEmpty()).toBe(true);

        fhirParser.processResourceJson(instance, null);
        expect(instance.isEmpty()).toBe(true);
      });

      it('should return correct instance for valid json', () => {
        const VALID_JSON = {
          resourceType: 'MockResource',
          id: 'idR123',
          meta: {
            versionId: 'v1',
            lastUpdated: '2017-01-01T00:00:00.000Z',
            source: 'sourceUri',
            profile: ['profileCanonical'],
            security: [
              {
                system: 'securitySystem',
                code: 'securityCode',
              },
            ],
            tag: [
              {
                system: 'tagSystem',
                code: 'tagCode',
              },
            ],
          },
          implicitRules: 'validImplicitUrl',
          language: 'en-US',
        };

        fhirParser.processResourceJson(instance, VALID_JSON);
        expect(instance).toBeDefined();
        expect(instance).toBeInstanceOf(MockResource);
        expect(instance.constructor.name).toStrictEqual('MockResource');
        expect(instance.resourceType()).toStrictEqual('MockResource');
        expect(instance.fhirType()).toStrictEqual('MockResource');
        expect(instance.isEmpty()).toBe(false);
        expect(instance.toJSON()).toEqual(VALID_JSON);
      });

      it('should throw TypeError for invalid json type', () => {
        const INVALID_JSON = {
          resourceType: 'MockResource',
          id: 12345,
        };

        const t = () => {
          fhirParser.processResourceJson(instance, INVALID_JSON);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`MockResource.id is not a string.`);
      });
    });

    describe('parseDomainResource', () => {
      let instance: IDomainResource;
      beforeEach(() => {
        instance = new MockTask();
      });

      it('should return undefined for empty json', () => {
        fhirParser.processDomainResourceJson(instance, {});
        expect(instance.isEmpty()).toBe(true);

        fhirParser.processDomainResourceJson(instance, undefined);
        expect(instance.isEmpty()).toBe(true);

        fhirParser.processDomainResourceJson(instance, null);
        expect(instance.isEmpty()).toBe(true);
      });

      it('should return correct instance for valid json', () => {
        const VALID_JSON = {
          resourceType: 'MockTask',
          id: 'idR123',
          meta: {
            versionId: 'v1',
            lastUpdated: '2017-01-01T00:00:00.000Z',
            source: 'sourceUri',
            profile: ['profileCanonical'],
            security: [
              {
                system: 'securitySystem',
                code: 'securityCode',
              },
            ],
            tag: [
              {
                system: 'tagSystem',
                code: 'tagCode',
              },
            ],
          },
          implicitRules: 'validImplicitUrl',
          language: 'en-US',
          text: {
            status: 'generated',
            div: '<div xmlns="http://www.w3.org/1999/xhtml">text</div>',
          },
          contained: [
            {
              resourceType: 'MockTask',
              id: '#containedId',
              mockPrimitive: 'mockPrimitiveValue',
            },
          ],
          extension: [
            {
              url: 'extUrl',
              valueString: 'Extension string value',
            },
          ],
          modifierExtension: [
            {
              url: 'modExtUrl',
              valueString: 'ModifierExtension string value',
            },
          ],
        };

        fhirParser.processDomainResourceJson(instance, VALID_JSON);
        expect(instance).toBeDefined();
        expect(instance).toBeInstanceOf(MockTask);
        expect(instance.constructor.name).toStrictEqual('MockTask');
        expect(instance.resourceType()).toStrictEqual('MockTask');
        expect(instance.fhirType()).toStrictEqual('MockTask');
        expect(instance.isEmpty()).toBe(false);
        expect(instance.toJSON()).toEqual(VALID_JSON);
      });

      it('should throw TypeError for invalid json type', () => {
        const INVALID_JSON = {
          resourceType: 'MockTask',
          id: 12345,
        };

        const t = () => {
          fhirParser.processDomainResourceJson(instance, INVALID_JSON);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`MockTask.id is not a string.`);
      });
    });

    describe('parseContainedResources', () => {
      it('should throw AssertionError for missing arguments', () => {
        const instance = new MockTask();
        const sourceField = 'sourceField';
        const CONTAINED_JSON = {
          resourceType: 'MockTask',
          id: '#containedId',
          mockPrimitive: 'containedPrimitiveValue',
        };

        let t = () => {
          fhirParser.parseContainedResources(instance, [CONTAINED_JSON], sourceField);
        };
        expect(t).not.toThrow(AssertionError);

        t = () => {
          fhirParser.parseContainedResources(undefined, [CONTAINED_JSON], sourceField);
        };
        expect(t).toThrow(AssertionError);
        expect(t).toThrow(`instance argument is required`);

        t = () => {
          fhirParser.parseContainedResources(instance, undefined, sourceField);
        };
        expect(t).toThrow(AssertionError);
        expect(t).toThrow(`containedJsonArray argument is required`);

        t = () => {
          fhirParser.parseContainedResources(instance, [CONTAINED_JSON], undefined);
        };
        expect(t).toThrow(AssertionError);
        expect(t).toThrow(`sourceField argument is require`);
      });

      it('should return correct instance for valid json', () => {
        const instance = new MockTask();
        instance.setId('idR123');
        instance.mockPrimitive = new StringType('mockPrimitiveValue');

        const CONTAINED_JSON = {
          resourceType: 'MockTask',
          id: '#containedId',
          mockPrimitive: 'containedPrimitiveValue',
        };
        const VALID_JSON = {
          resourceType: 'MockTask',
          id: 'idR123',
          contained: [CONTAINED_JSON],
          mockPrimitive: 'mockPrimitiveValue',
        };

        fhirParser.parseContainedResources(instance, [CONTAINED_JSON], 'contained');
        expect(instance).toBeDefined();
        expect(instance).toBeInstanceOf(MockTask);
        expect(instance.constructor.name).toStrictEqual('MockTask');
        expect(instance.resourceType()).toStrictEqual('MockTask');
        expect(instance.fhirType()).toStrictEqual('MockTask');
        expect(instance.isEmpty()).toBe(false);
        expect(instance.toJSON()).toEqual(VALID_JSON);
      });
    });

    describe('parsePolymorphicDataType', () => {
      it('should return undefined for empty json', () => {
        const sourceField = 'sourceField';
        const fieldName = 'fieldName';

        let testType: IDataType | undefined = fhirParser.parsePolymorphicDataType({}, sourceField, fieldName, null);
        expect(testType).toBeUndefined();

        testType = fhirParser.parsePolymorphicDataType(undefined, sourceField, fieldName, null);
        expect(testType).toBeUndefined();

        testType = fhirParser.parsePolymorphicDataType(null, sourceField, fieldName, null);
        expect(testType).toBeUndefined();
      });

      it('should throw AssertionError for missing arguments', () => {
        const sourceField = 'sourceField';
        const fieldName = 'fieldName';
        const dummyMeta: DecoratorMetadataObject = { ChoiceDatatypes: { fieldName: ['id', 'string'] } };

        let t = () => {
          fhirParser.parsePolymorphicDataType({ bogusJson: true }, sourceField, fieldName, dummyMeta);
        };
        expect(t).not.toThrow(AssertionError);

        t = () => {
          fhirParser.parsePolymorphicDataType({ bogusJson: true }, undefined, fieldName, null);
        };
        expect(t).toThrow(AssertionError);
        expect(t).toThrow(`The sourceField argument is undefined/null.`);

        t = () => {
          fhirParser.parsePolymorphicDataType({ bogusJson: true }, sourceField, undefined, null);
        };
        expect(t).toThrow(AssertionError);
        expect(t).toThrow(`The fieldName argument is undefined/null.`);

        t = () => {
          fhirParser.parsePolymorphicDataType({ bogusJson: true }, sourceField, fieldName, undefined);
        };
        expect(t).toThrow(AssertionError);
        expect(t).toThrow(`The metadata argument is undefined/null.`);

        t = () => {
          fhirParser.parsePolymorphicDataType({ bogusJson: true }, sourceField, fieldName, null);
        };
        expect(t).toThrow(AssertionError);
        expect(t).toThrow(`The metadata argument is undefined/null.`);
      });

      it('should return correct instance for valid json', () => {
        const sourceField = 'Model.polyField[x]';
        const fieldName = 'polyField[x]';
        const polyFieldMeta: DecoratorMetadataObject = {
          ChoiceDatatypes: [{ fieldName: 'polyField', fieldTypes: ['string', 'Period'] }],
        };

        const VALID_JSON_STRING = { polyFieldString: 'This is a string.' };
        let validDataType: IDataType = new StringType('This is a string.');
        let testType: IDataType | undefined = fhirParser.parsePolymorphicDataType(
          VALID_JSON_STRING,
          sourceField,
          fieldName,
          polyFieldMeta,
        );
        expect(testType).toBeDefined();
        expect(testType).toEqual(validDataType);

        const VALID_JSON_PERIOD = {
          polyFieldPeriod: { start: TestData.VALID_PERIOD.getStart(), end: TestData.VALID_PERIOD.getEnd() },
        };
        validDataType = TestData.VALID_PERIOD;
        testType = fhirParser.parsePolymorphicDataType(VALID_JSON_PERIOD, sourceField, fieldName, polyFieldMeta);
        expect(testType).toBeDefined();
        expect(testType).toEqual(validDataType);
      });
    });
  });

  describe('Primitive Datatype Parsers', () => {
    const EMPTY_STRING = '';
    const SIBLING_ELEMENT_SIMPLE = {
      id: 'id1234',
      extension: [
        {
          id: 'extId',
          url: 'testUrl',
          valueString: 'extension string value',
        },
      ],
    };
    const EXPECTED_EXTENSION_SIMPLE = new Extension('testUrl', new StringType('extension string value'));
    EXPECTED_EXTENSION_SIMPLE.setId('extId');

    const SIBLING_ELEMENT_COMPLEX = {
      extension: [
        {
          url: 'testUrl',
          extension: [
            {
              id: 'childId1',
              url: 'childUrl1',
              valueString: 'child extension string value 1',
            },
            {
              url: 'childUrl2',
              valueString: 'child extension string value 2',
            },
          ],
        },
      ],
    };
    const EXPECTED_EXTENSION_COMPLEX = new Extension('testUrl');
    const EXPECTED_EXTENSION_CHILD_1 = new Extension('childUrl1', new StringType('child extension string value 1'));
    EXPECTED_EXTENSION_CHILD_1.setId('childId1');
    const EXPECTED_EXTENSION_CHILD_2 = new Extension('childUrl2', new StringType('child extension string value 2'));
    EXPECTED_EXTENSION_COMPLEX.setExtension([EXPECTED_EXTENSION_CHILD_1, EXPECTED_EXTENSION_CHILD_2]);

    describe('getPrimitiveTypeJson', () => {
      it('should return PrimitiveTypeJson with undefined properties for empty json', () => {
        const sourceField = 'sourceField';
        const primitiveFieldName = 'primitiveFieldName';
        const jsonType = 'string';
        const expected = { dtJson: undefined, dtSiblingJson: undefined };

        let testType: PrimitiveTypeJson = getPrimitiveTypeJson({}, sourceField, primitiveFieldName, jsonType);
        expect(testType).toEqual(expected);

        testType = getPrimitiveTypeJson(undefined, sourceField, primitiveFieldName, jsonType);
        expect(testType).toEqual(expected);

        testType = getPrimitiveTypeJson(null, sourceField, primitiveFieldName, jsonType);
        expect(testType).toEqual(expected);
      });

      it('should return PrimitiveTypeJson with without sibling Element', () => {
        const resourceObj = {
          resourceType: 'MockResource',
          id: 'idR123',
        };
        const expected = { dtJson: 'idR123', dtSiblingJson: undefined };

        const testType: PrimitiveTypeJson = getPrimitiveTypeJson(resourceObj, 'MockResource.id', 'id', 'string');
        expect(testType).toBeDefined();
        expect(testType).toEqual(expected);
      });

      it('should return PrimitiveTypeJson with with sibling Element', () => {
        const resourceObjSimple = {
          resourceType: 'MockResource',
          id: 'idR123',
          _id: SIBLING_ELEMENT_SIMPLE,
        };
        const expectedSimple = { dtJson: 'idR123', dtSiblingJson: SIBLING_ELEMENT_SIMPLE };
        let testType: PrimitiveTypeJson = getPrimitiveTypeJson(resourceObjSimple, 'MockResource.id', 'id', 'string');
        expect(testType).toBeDefined();
        expect(testType).toEqual(expectedSimple);

        const resourceObjComplex = {
          resourceType: 'MockResource',
          id: 'idR123',
          _id: SIBLING_ELEMENT_COMPLEX,
        };
        const expectedComplex = { dtJson: 'idR123', dtSiblingJson: SIBLING_ELEMENT_COMPLEX };
        testType = getPrimitiveTypeJson(resourceObjComplex, 'MockResource.id', 'id', 'string');
        expect(testType).toBeDefined();
        expect(testType).toEqual(expectedComplex);
      });
    });

    describe('getPrimitiveTypeListJson', () => {
      it('should return empty array for empty json', () => {
        const sourceField = 'sourceField';
        const primitiveFieldName = 'primitiveFieldName';
        const jsonType = 'string';

        let testType: PrimitiveTypeJson[] = getPrimitiveTypeListJson({}, sourceField, primitiveFieldName, jsonType);
        expect(testType).toHaveLength(0);

        testType = getPrimitiveTypeListJson(undefined, sourceField, primitiveFieldName, jsonType);
        expect(testType).toHaveLength(0);

        testType = getPrimitiveTypeListJson(null, sourceField, primitiveFieldName, jsonType);
        expect(testType).toHaveLength(0);
      });

      it('should return PrimitiveTypeJson with without sibling Element', () => {
        const resourceObj = {
          resourceType: 'MockResource',
          id: ['idR123', 'idR456'],
        };
        const expected = [
          { dtJson: 'idR123', dtSiblingJson: undefined },
          { dtJson: 'idR456', dtSiblingJson: undefined },
        ];

        const testType: PrimitiveTypeJson[] = getPrimitiveTypeListJson(resourceObj, 'MockResource.id', 'id', 'string');
        expect(testType).toBeDefined();
        expect(testType).toEqual(expected);
      });

      it('should return PrimitiveTypeJson with with sibling Element', () => {
        const resourceObj = {
          resourceType: 'MockResource',
          id: ['idR123', 'idR456', 'idR789'],
          _id: [SIBLING_ELEMENT_SIMPLE, undefined, SIBLING_ELEMENT_COMPLEX],
        };
        const expected = [
          { dtJson: 'idR123', dtSiblingJson: SIBLING_ELEMENT_SIMPLE },
          { dtJson: 'idR456', dtSiblingJson: undefined },
          { dtJson: 'idR789', dtSiblingJson: SIBLING_ELEMENT_COMPLEX },
        ];
        const testType: PrimitiveTypeJson[] = getPrimitiveTypeListJson(resourceObj, 'MockResource.id', 'id', 'string');
        expect(testType).toBeDefined();
        expect(testType).toEqual(expected);
      });
    });

    describe('parseBase64BinaryType', () => {
      const VALID_BASE64BINARY = `dGVzdEJhc2U2NEJpbmFyeQ==`;
      const INVALID_BASE64BINARY = 'invalidBase64Binary';

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseBase64BinaryType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseBase64BinaryType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseBase64BinaryType(null);
        expect(testType).toBeUndefined();
      });

      it('should return Base64BinaryType for valid json', () => {
        const testType = fhirParser.parseBase64BinaryType(VALID_BASE64BINARY);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(Base64BinaryType);
        expect(testType?.constructor.name).toStrictEqual('Base64BinaryType');
        expect(testType?.fhirType()).toStrictEqual('base64Binary');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_BASE64BINARY);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return Base64BinaryType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseBase64BinaryType(VALID_BASE64BINARY, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(Base64BinaryType);
        expect(testType?.constructor.name).toStrictEqual('Base64BinaryType');
        expect(testType?.fhirType()).toStrictEqual('base64Binary');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_BASE64BINARY);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return Base64BinaryType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseBase64BinaryType(VALID_BASE64BINARY, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(Base64BinaryType);
        expect(testType?.constructor.name).toStrictEqual('Base64BinaryType');
        expect(testType?.fhirType()).toStrictEqual('base64Binary');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_BASE64BINARY);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseBase64BinaryType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for Base64BinaryType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseBase64BinaryType(INVALID_BASE64BINARY);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for Base64BinaryType`);
      });
    });

    describe('parseBooleanType', () => {
      const INVALID_BOOLEAN = 'invalidBoolean';

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseBooleanType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseBooleanType(null);
        expect(testType).toBeUndefined();
      });

      it('should return BooleanType for valid json', () => {
        const testType = fhirParser.parseBooleanType(true);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(BooleanType);
        expect(testType?.constructor.name).toStrictEqual('BooleanType');
        expect(testType?.fhirType()).toStrictEqual('boolean');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isBooleanPrimitive()).toBe(true);
        expect(testType?.getValue()).toBe(true);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return BooleanType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseBooleanType(false, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(BooleanType);
        expect(testType?.constructor.name).toStrictEqual('BooleanType');
        expect(testType?.fhirType()).toStrictEqual('boolean');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isBooleanPrimitive()).toBe(true);
        expect(testType?.getValue()).toBe(false);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return BooleanType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseBooleanType(false, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(BooleanType);
        expect(testType?.constructor.name).toStrictEqual('BooleanType');
        expect(testType?.fhirType()).toStrictEqual('boolean');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isBooleanPrimitive()).toBe(true);
        expect(testType?.getValue()).toBe(false);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseBooleanType(INVALID_BOOLEAN);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for BooleanType is not a boolean`);
      });
    });

    describe('parseCanonicalType', () => {
      const VALID_CANONICAL = `testCanonicalType`;
      const INVALID_CANONICAL = ' invalid Url ';

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseCanonicalType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseCanonicalType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseCanonicalType(null);
        expect(testType).toBeUndefined();
      });

      it('should return CanonicalType for valid json', () => {
        const testType = fhirParser.parseCanonicalType(VALID_CANONICAL);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(CanonicalType);
        expect(testType?.constructor.name).toStrictEqual('CanonicalType');
        expect(testType?.fhirType()).toStrictEqual('canonical');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_CANONICAL);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return CanonicalType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseCanonicalType(VALID_CANONICAL, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(CanonicalType);
        expect(testType?.constructor.name).toStrictEqual('CanonicalType');
        expect(testType?.fhirType()).toStrictEqual('canonical');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_CANONICAL);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return CanonicalType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseCanonicalType(VALID_CANONICAL, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(CanonicalType);
        expect(testType?.constructor.name).toStrictEqual('CanonicalType');
        expect(testType?.fhirType()).toStrictEqual('canonical');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_CANONICAL);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseCanonicalType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for CanonicalType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseCanonicalType(INVALID_CANONICAL);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for CanonicalType`);
      });
    });

    describe('parseCodeType', () => {
      const VALID_CODE = `testCodeType`;
      const INVALID_CODE = ' invalid CodeType ';

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseCodeType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseCodeType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseCodeType(null);
        expect(testType).toBeUndefined();
      });

      it('should return CodeType for valid json', () => {
        const testType = fhirParser.parseCodeType(VALID_CODE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(CodeType);
        expect(testType?.constructor.name).toStrictEqual('CodeType');
        expect(testType?.fhirType()).toStrictEqual('code');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_CODE);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return CodeType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseCodeType(VALID_CODE, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(CodeType);
        expect(testType?.constructor.name).toStrictEqual('CodeType');
        expect(testType?.fhirType()).toStrictEqual('code');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_CODE);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return CodeType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseCodeType(VALID_CODE, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(CodeType);
        expect(testType?.constructor.name).toStrictEqual('CodeType');
        expect(testType?.fhirType()).toStrictEqual('code');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_CODE);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseCodeType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for CodeType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseCodeType(INVALID_CODE);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for CodeType`);
      });
    });

    describe('parseDateTimeType', () => {
      const VALID_DATETIME = `2015-02-07T13:28:17.239+02:00`;
      const INVALID_DATETIME = `invalid date time`;

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseDateTimeType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseDateTimeType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseDateTimeType(null);
        expect(testType).toBeUndefined();
      });

      it('should return DateTimeType for valid json', () => {
        const testType = fhirParser.parseDateTimeType(VALID_DATETIME);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(DateTimeType);
        expect(testType?.constructor.name).toStrictEqual('DateTimeType');
        expect(testType?.fhirType()).toStrictEqual('dateTime');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isDateTimePrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_DATETIME);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return DateTimeType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseDateTimeType(VALID_DATETIME, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(DateTimeType);
        expect(testType?.constructor.name).toStrictEqual('DateTimeType');
        expect(testType?.fhirType()).toStrictEqual('dateTime');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isDateTimePrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_DATETIME);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return DateTimeType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseDateTimeType(VALID_DATETIME, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(DateTimeType);
        expect(testType?.constructor.name).toStrictEqual('DateTimeType');
        expect(testType?.fhirType()).toStrictEqual('dateTime');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isDateTimePrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_DATETIME);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseDateTimeType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for DateTimeType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseDateTimeType(INVALID_DATETIME);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for DateTimeType`);
      });
    });

    describe('parseDateType', () => {
      const VALID_DATE = `2015-02-07`;
      const INVALID_DATE = `invalid date`;

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseDateType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseDateType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseDateType(null);
        expect(testType).toBeUndefined();
      });

      it('should return DateType for valid json', () => {
        const testType = fhirParser.parseDateType(VALID_DATE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(DateType);
        expect(testType?.constructor.name).toStrictEqual('DateType');
        expect(testType?.fhirType()).toStrictEqual('date');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isDateTimePrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_DATE);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return DateType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseDateType(VALID_DATE, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(DateType);
        expect(testType?.constructor.name).toStrictEqual('DateType');
        expect(testType?.fhirType()).toStrictEqual('date');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isDateTimePrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_DATE);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return DateType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseDateType(VALID_DATE, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(DateType);
        expect(testType?.constructor.name).toStrictEqual('DateType');
        expect(testType?.fhirType()).toStrictEqual('date');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isDateTimePrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_DATE);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseDateType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for DateType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseDateType(INVALID_DATE);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for DateType`);
      });
    });

    describe('parseDecimalType', () => {
      const VALID_DECIMAL = -1234.56789;
      const INVALID_DECIMAL = Number.MAX_VALUE;

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseDecimalType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseDecimalType(null);
        expect(testType).toBeUndefined();
      });

      it('should return DecimalType for valid json', () => {
        const testType = fhirParser.parseDecimalType(VALID_DECIMAL);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(DecimalType);
        expect(testType?.constructor.name).toStrictEqual('DecimalType');
        expect(testType?.fhirType()).toStrictEqual('decimal');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_DECIMAL);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return DecimalType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseDecimalType(VALID_DECIMAL, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(DecimalType);
        expect(testType?.constructor.name).toStrictEqual('DecimalType');
        expect(testType?.fhirType()).toStrictEqual('decimal');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_DECIMAL);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return DecimalType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseDecimalType(VALID_DECIMAL, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(DecimalType);
        expect(testType?.constructor.name).toStrictEqual('DecimalType');
        expect(testType?.fhirType()).toStrictEqual('decimal');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_DECIMAL);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseDecimalType('abc');
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for DecimalType is not a number`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseDecimalType(INVALID_DECIMAL);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for DecimalType`);
      });
    });

    describe('parseIdType', () => {
      const VALID_ID = `testIdType`;
      const INVALID_ID = ' invalid Uri ';

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseIdType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseIdType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseIdType(null);
        expect(testType).toBeUndefined();
      });

      it('should return IdType for valid json', () => {
        const testType = fhirParser.parseIdType(VALID_ID);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(IdType);
        expect(testType?.constructor.name).toStrictEqual('IdType');
        expect(testType?.fhirType()).toStrictEqual('id');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_ID);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return IdType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseIdType(VALID_ID, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(IdType);
        expect(testType?.constructor.name).toStrictEqual('IdType');
        expect(testType?.fhirType()).toStrictEqual('id');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_ID);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return IdType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseIdType(VALID_ID, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(IdType);
        expect(testType?.constructor.name).toStrictEqual('IdType');
        expect(testType?.fhirType()).toStrictEqual('id');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_ID);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseIdType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for IdType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseIdType(INVALID_ID);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for IdType`);
      });
    });

    describe('parseInstantType', () => {
      const VALID_INSTANT = `2015-02-07T13:28:17.239+02:00`;
      const INVALID_INSTANT = `invalid instant`;

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseInstantType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseInstantType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseInstantType(null);
        expect(testType).toBeUndefined();
      });

      it('should return InstantType for valid json', () => {
        const testType = fhirParser.parseInstantType(VALID_INSTANT);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(InstantType);
        expect(testType?.constructor.name).toStrictEqual('InstantType');
        expect(testType?.fhirType()).toStrictEqual('instant');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isDateTimePrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INSTANT);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return InstantType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseInstantType(VALID_INSTANT, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(InstantType);
        expect(testType?.constructor.name).toStrictEqual('InstantType');
        expect(testType?.fhirType()).toStrictEqual('instant');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isDateTimePrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INSTANT);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return InstantType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseInstantType(VALID_INSTANT, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(InstantType);
        expect(testType?.constructor.name).toStrictEqual('InstantType');
        expect(testType?.fhirType()).toStrictEqual('instant');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isDateTimePrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INSTANT);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseInstantType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for InstantType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseInstantType(INVALID_INSTANT);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for InstantType`);
      });
    });

    describe('parseInteger64Type', () => {
      const VALID_INTEGER64 = FHIR_MIN_INTEGER64;
      const INVALID_INTEGER64 = FHIR_MAX_INTEGER64 + BigInt(1);
      const VALID_INTEGER64_JSON = String(VALID_INTEGER64);
      const INVALID_INTEGER64_JSON = String(INVALID_INTEGER64);

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseInteger64Type(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseInteger64Type(null);
        expect(testType).toBeUndefined();
      });

      it('should return Integer64Type for valid json', () => {
        const testType = fhirParser.parseInteger64Type(VALID_INTEGER64_JSON);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(Integer64Type);
        expect(testType?.constructor.name).toStrictEqual('Integer64Type');
        expect(testType?.fhirType()).toStrictEqual('integer64');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isBigIntPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER64);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return Integer64Type for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseInteger64Type(VALID_INTEGER64_JSON, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(Integer64Type);
        expect(testType?.constructor.name).toStrictEqual('Integer64Type');
        expect(testType?.fhirType()).toStrictEqual('integer64');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isBigIntPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER64);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return Integer64Type for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseInteger64Type(VALID_INTEGER64_JSON, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(Integer64Type);
        expect(testType?.constructor.name).toStrictEqual('Integer64Type');
        expect(testType?.fhirType()).toStrictEqual('integer64');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isBigIntPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER64);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseInteger64Type(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for Integer64Type is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseInteger64Type(INVALID_INTEGER64_JSON);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for Integer64Type`);
      });
    });

    describe('parseIntegerType', () => {
      const VALID_INTEGER = FHIR_MIN_INTEGER;
      const INVALID_INTEGER = FHIR_MAX_INTEGER + 1;

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseIntegerType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseIntegerType(null);
        expect(testType).toBeUndefined();
      });

      it('should return IntegerType for valid json', () => {
        const testType = fhirParser.parseIntegerType(VALID_INTEGER);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(IntegerType);
        expect(testType?.constructor.name).toStrictEqual('IntegerType');
        expect(testType?.fhirType()).toStrictEqual('integer');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return IntegerType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseIntegerType(VALID_INTEGER, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(IntegerType);
        expect(testType?.constructor.name).toStrictEqual('IntegerType');
        expect(testType?.fhirType()).toStrictEqual('integer');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return IntegerType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseIntegerType(VALID_INTEGER, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(IntegerType);
        expect(testType?.constructor.name).toStrictEqual('IntegerType');
        expect(testType?.fhirType()).toStrictEqual('integer');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseIntegerType('abc');
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for IntegerType is not a number`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseIntegerType(INVALID_INTEGER);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for IntegerType`);
      });
    });

    describe('parseMarkdownType', () => {
      const VALID_MARKDOWN = 'This is a **valid** _string_.';
      const INVALID_MARKDOWN = TOO_BIG_STRING;

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseMarkdownType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseMarkdownType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseMarkdownType(null);
        expect(testType).toBeUndefined();
      });

      it('should return MarkdownType for valid json', () => {
        const testType = fhirParser.parseMarkdownType(VALID_MARKDOWN);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(MarkdownType);
        expect(testType?.constructor.name).toStrictEqual('MarkdownType');
        expect(testType?.fhirType()).toStrictEqual('markdown');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_MARKDOWN);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return MarkdownType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseMarkdownType(VALID_MARKDOWN, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(MarkdownType);
        expect(testType?.constructor.name).toStrictEqual('MarkdownType');
        expect(testType?.fhirType()).toStrictEqual('markdown');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_MARKDOWN);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return MarkdownType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseMarkdownType(VALID_MARKDOWN, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(MarkdownType);
        expect(testType?.constructor.name).toStrictEqual('MarkdownType');
        expect(testType?.fhirType()).toStrictEqual('markdown');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_MARKDOWN);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseMarkdownType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for MarkdownType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseMarkdownType(INVALID_MARKDOWN);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for MarkdownType`);
      });
    });

    describe('parseOidType', () => {
      const VALID_OID = `urn:oid:1.2.3.4.5`;
      const INVALID_OID = '1.3.5.7.9';

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseOidType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseOidType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseOidType(null);
        expect(testType).toBeUndefined();
      });

      it('should return OidType for valid json', () => {
        const testType = fhirParser.parseOidType(VALID_OID);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(OidType);
        expect(testType?.constructor.name).toStrictEqual('OidType');
        expect(testType?.fhirType()).toStrictEqual('oid');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_OID);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return OidType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseOidType(VALID_OID, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(OidType);
        expect(testType?.constructor.name).toStrictEqual('OidType');
        expect(testType?.fhirType()).toStrictEqual('oid');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_OID);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return OidType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseOidType(VALID_OID, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(OidType);
        expect(testType?.constructor.name).toStrictEqual('OidType');
        expect(testType?.fhirType()).toStrictEqual('oid');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_OID);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseOidType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for OidType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseOidType(INVALID_OID);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for OidType`);
      });
    });

    describe('parsePositiveIntType', () => {
      const VALID_INTEGER = 1;
      const INVALID_INTEGER = 0;

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parsePositiveIntType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parsePositiveIntType(null);
        expect(testType).toBeUndefined();
      });

      it('should return PositiveIntType for valid json', () => {
        const testType = fhirParser.parsePositiveIntType(VALID_INTEGER);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(PositiveIntType);
        expect(testType?.constructor.name).toStrictEqual('PositiveIntType');
        expect(testType?.fhirType()).toStrictEqual('positiveInt');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return PositiveIntType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parsePositiveIntType(VALID_INTEGER, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(PositiveIntType);
        expect(testType?.constructor.name).toStrictEqual('PositiveIntType');
        expect(testType?.fhirType()).toStrictEqual('positiveInt');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return PositiveIntType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parsePositiveIntType(VALID_INTEGER, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(PositiveIntType);
        expect(testType?.constructor.name).toStrictEqual('PositiveIntType');
        expect(testType?.fhirType()).toStrictEqual('positiveInt');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parsePositiveIntType('abc');
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for PositiveIntType is not a number`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parsePositiveIntType(INVALID_INTEGER);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for PositiveIntType`);
      });
    });

    describe('parseStringType', () => {
      const VALID_STRING = 'This is a valid string.';
      const INVALID_STRING = TOO_BIG_STRING;

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseStringType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseStringType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseStringType(null);
        expect(testType).toBeUndefined();
      });

      it('should return StringType for valid json', () => {
        const testType = fhirParser.parseStringType(VALID_STRING);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(StringType);
        expect(testType?.constructor.name).toStrictEqual('StringType');
        expect(testType?.fhirType()).toStrictEqual('string');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_STRING);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return StringType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseStringType(VALID_STRING, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(StringType);
        expect(testType?.constructor.name).toStrictEqual('StringType');
        expect(testType?.fhirType()).toStrictEqual('string');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_STRING);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return StringType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseStringType(VALID_STRING, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(StringType);
        expect(testType?.constructor.name).toStrictEqual('StringType');
        expect(testType?.fhirType()).toStrictEqual('string');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_STRING);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseStringType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for StringType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseStringType(INVALID_STRING);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for StringType`);
      });
    });

    describe('parseTimeType', () => {
      const VALID_TIME = `13:28:17`;
      const INVALID_TIME = `invalid time`;

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseTimeType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseTimeType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseTimeType(null);
        expect(testType).toBeUndefined();
      });

      it('should return TimeType for valid json', () => {
        const testType = fhirParser.parseTimeType(VALID_TIME);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(TimeType);
        expect(testType?.constructor.name).toStrictEqual('TimeType');
        expect(testType?.fhirType()).toStrictEqual('time');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_TIME);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return TimeType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseTimeType(VALID_TIME, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(TimeType);
        expect(testType?.constructor.name).toStrictEqual('TimeType');
        expect(testType?.fhirType()).toStrictEqual('time');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_TIME);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return TimeType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseTimeType(VALID_TIME, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(TimeType);
        expect(testType?.constructor.name).toStrictEqual('TimeType');
        expect(testType?.fhirType()).toStrictEqual('time');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_TIME);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseTimeType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for TimeType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseTimeType(INVALID_TIME);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for TimeType`);
      });
    });

    describe('parseUnsignedIntType', () => {
      const VALID_INTEGER = 0;
      const INVALID_INTEGER = -1;

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseUnsignedIntType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseUnsignedIntType(null);
        expect(testType).toBeUndefined();
      });

      it('should return UnsignedIntType for valid json', () => {
        const testType = fhirParser.parseUnsignedIntType(VALID_INTEGER);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UnsignedIntType);
        expect(testType?.constructor.name).toStrictEqual('UnsignedIntType');
        expect(testType?.fhirType()).toStrictEqual('unsignedInt');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return UnsignedIntType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseUnsignedIntType(VALID_INTEGER, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UnsignedIntType);
        expect(testType?.constructor.name).toStrictEqual('UnsignedIntType');
        expect(testType?.fhirType()).toStrictEqual('unsignedInt');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return UnsignedIntType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseUnsignedIntType(VALID_INTEGER, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UnsignedIntType);
        expect(testType?.constructor.name).toStrictEqual('UnsignedIntType');
        expect(testType?.fhirType()).toStrictEqual('unsignedInt');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isNumberPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_INTEGER);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseUnsignedIntType('abc');
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for UnsignedIntType is not a number`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseUnsignedIntType(INVALID_INTEGER);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for UnsignedIntType`);
      });
    });

    describe('parseUriType', () => {
      const VALID_URI = `testUriType`;
      const INVALID_URI = ' invalid Uri ';

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseUriType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseUriType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseUriType(null);
        expect(testType).toBeUndefined();
      });

      it('should return UriType for valid json', () => {
        const testType = fhirParser.parseUriType(VALID_URI);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UriType);
        expect(testType?.constructor.name).toStrictEqual('UriType');
        expect(testType?.fhirType()).toStrictEqual('uri');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_URI);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return UriType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseUriType(VALID_URI, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UriType);
        expect(testType?.constructor.name).toStrictEqual('UriType');
        expect(testType?.fhirType()).toStrictEqual('uri');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_URI);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return UriType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseUriType(VALID_URI, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UriType);
        expect(testType?.constructor.name).toStrictEqual('UriType');
        expect(testType?.fhirType()).toStrictEqual('uri');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_URI);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseUriType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for UriType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseUriType(INVALID_URI);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for UriType`);
      });
    });

    describe('parseUrlType', () => {
      const VALID_URL = `testUrlType`;
      const INVALID_URL = ' invalid Url ';

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseUrlType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseUrlType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseUrlType(null);
        expect(testType).toBeUndefined();
      });

      it('should return UrlType for valid json', () => {
        const testType = fhirParser.parseUrlType(VALID_URL);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UrlType);
        expect(testType?.constructor.name).toStrictEqual('UrlType');
        expect(testType?.fhirType()).toStrictEqual('url');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_URL);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return UrlType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseUrlType(VALID_URL, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UrlType);
        expect(testType?.constructor.name).toStrictEqual('UrlType');
        expect(testType?.fhirType()).toStrictEqual('url');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_URL);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return UrlType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseUrlType(VALID_URL, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UrlType);
        expect(testType?.constructor.name).toStrictEqual('UrlType');
        expect(testType?.fhirType()).toStrictEqual('url');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_URL);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseUrlType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for UrlType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseUrlType(INVALID_URL);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for UrlType`);
      });
    });

    describe('parseUuidType', () => {
      const VALID_UUID = `urn:uuid:c757873d-ec9a-4326-a141-556f43239520`;
      const INVALID_UUID = '6AD7EDAD-8F73-4A43-9CCB-8D72679FFD9C';

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseUuidType(EMPTY_STRING);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseUuidType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseUuidType(null);
        expect(testType).toBeUndefined();
      });

      it('should return UuidType for valid json', () => {
        const testType = fhirParser.parseUuidType(VALID_UUID);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UuidType);
        expect(testType?.constructor.name).toStrictEqual('UuidType');
        expect(testType?.fhirType()).toStrictEqual('uuid');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_UUID);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should return UuidType for valid json with simple siblingJson', () => {
        const testType = fhirParser.parseUuidType(VALID_UUID, SIBLING_ELEMENT_SIMPLE);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UuidType);
        expect(testType?.constructor.name).toStrictEqual('UuidType');
        expect(testType?.fhirType()).toStrictEqual('uuid');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_UUID);
        expect(testType?.getId()).toStrictEqual('id1234');
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_SIMPLE]);
      });

      it('should return UuidType for valid json with complex siblingJson', () => {
        const testType = fhirParser.parseUuidType(VALID_UUID, SIBLING_ELEMENT_COMPLEX);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(UuidType);
        expect(testType?.constructor.name).toStrictEqual('UuidType');
        expect(testType?.fhirType()).toStrictEqual('uuid');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_UUID);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.getExtension()).toStrictEqual([EXPECTED_EXTENSION_COMPLEX]);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseUuidType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for UuidType is not a string`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseUuidType(INVALID_UUID);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for UuidType`);
      });
    });

    describe('parseXhtmlType', () => {
      const VALID_XHTML = `<div xmlns="http://www.w3.org/1999/xhtml">text</div>`;
      const INVALID_XHTML = ' cannot start with whitespace';

      it('should return undefined for empty json', () => {
        let testType = fhirParser.parseXhtmlType(undefined);
        expect(testType).toBeUndefined();

        testType = fhirParser.parseXhtmlType(null);
        expect(testType).toBeUndefined();
      });

      it('should return XhtmlType for valid json', () => {
        const testType = fhirParser.parseXhtmlType(VALID_XHTML);
        expect(testType).toBeDefined();
        expect(testType).toBeInstanceOf(XhtmlType);
        expect(testType?.constructor.name).toStrictEqual('XhtmlType');
        expect(testType?.fhirType()).toStrictEqual('xhtml');
        expect(testType?.isEmpty()).toBe(false);
        expect(testType?.isPrimitive()).toBe(true);
        expect(testType?.isStringPrimitive()).toBe(true);
        expect(testType?.getValue()).toStrictEqual(VALID_XHTML);
        expect(testType?.hasId()).toBe(false);
        expect(testType?.hasExtension()).toBe(false);
      });

      it('should throw TypeError for invalid json type', () => {
        const t = () => {
          fhirParser.parseXhtmlType(123);
        };
        expect(t).toThrow(TypeError);
        expect(t).toThrow(`json argument for XhtmlType is not a string`);
      });

      it('should throw TypeError for adding an extension', () => {
        const t = () => {
          fhirParser.parseXhtmlType(VALID_XHTML, SIBLING_ELEMENT_SIMPLE);
        };
        expect(t).toThrow(FhirError);
        expect(t).toThrow(`According to the FHIR specification, Extensions are not permitted on the xhtml type`);
      });

      it('should throw PrimitiveTypeError for invalid json value', () => {
        const t = () => {
          fhirParser.parseXhtmlType(INVALID_XHTML);
        };
        expect(t).toThrow(PrimitiveTypeError);
        expect(t).toThrow(`Invalid value for XhtmlType`);
      });
    });
  });
});
