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

import { FhirError, InvalidTypeError, PrimitiveTypeError, StringType } from '@paq-ts-fhir/fhir-core';
import { Parameters, ParametersParameterComponent } from 'gensrc/resources/Parameters';
import { SimplePersonModel } from 'gensrc/resources/SimplePersonModel';
import {
  expectBackboneElementBase,
  expectInitializedResourceProperties,
  expectResetResourceProperties,
  expectResourceBase,
  expectUndefinedBackboneElementProperties,
  expectUndefinedResourceProperties,
  initializeBackboneElementProperties,
  initializeResourceProperties,
  resetResourceProperties,
  undefineResourceProperties,
} from '../../ftest-utils';
import {
  DATATYPE_EXTENSION,
  VALID_ADDRESS,
  VALID_ADDRESS_2,
  VALID_EXTENSION_2,
  VALID_HUMAN_NAME,
  VALID_HUMAN_NAME_2,
  VALID_IDENTIFIER,
  VALID_IDENTIFIER_2,
  VALID_MOCK_COMPLEX_DATATYPE,
  VALID_MODIFIER_EXTENSION_2,
} from '../../ftest-mocks';
import { TestData } from '../../ftest-data';
import { AssertionError } from 'node:assert';

describe('Parameters', () => {
  // ************************************************************************************
  // NOTE: The Parameters resource definition contains the following constraint:
  //   - A parameter must have one and only one of (value, resource, part)
  // For testing purposes, that constraint is IGNORED!
  // ************************************************************************************

  const VALID_PARAMETER_NAME = 'BackboneElement Name';
  const VALID_PARAMETER_NAME_2 = 'BackboneElement Name Two';
  const VALID_PART_PARAMETER_NAME = 'Part Parameter Name';
  const VALID_PART_PARAMETER_NAME_2 = 'Part Parameter Name Two';

  let testComponentModel: ParametersParameterComponent;
  let testComponentModel_2: ParametersParameterComponent;
  let testParameterPart: ParametersParameterComponent;
  let testParameterPart_2: ParametersParameterComponent;
  let testResource: SimplePersonModel;
  let testResource_2: SimplePersonModel;
  beforeAll(() => {
    testResource = new SimplePersonModel();
    testResource.setIdentifier(VALID_IDENTIFIER);
    testResource.setName(VALID_HUMAN_NAME);
    testResource.setAddress([VALID_ADDRESS]);
    testResource.setPhoneElement(new StringType(TestData.VALID_PHONE));
    testResource_2 = new SimplePersonModel();
    testResource_2.setIdentifier(VALID_IDENTIFIER_2);
    testResource_2.setName(VALID_HUMAN_NAME_2);
    testResource_2.setAddress([VALID_ADDRESS_2]);
    testResource_2.setPhoneElement(new StringType(TestData.VALID_PHONE_2));

    testParameterPart = new ParametersParameterComponent(VALID_PART_PARAMETER_NAME);
    testParameterPart.setValue(VALID_ADDRESS);

    testComponentModel = new ParametersParameterComponent();
    initializeBackboneElementProperties(testComponentModel, 1);
    testComponentModel.setName(VALID_PARAMETER_NAME);
    testComponentModel.setValue(VALID_HUMAN_NAME);
    testComponentModel.setResource(testResource);
    testComponentModel.setPart([testParameterPart]);

    testParameterPart_2 = new ParametersParameterComponent(VALID_PART_PARAMETER_NAME_2);
    testParameterPart_2.setValue(VALID_ADDRESS_2);

    testComponentModel_2 = new ParametersParameterComponent();
    initializeBackboneElementProperties(testComponentModel_2, 1);
    testComponentModel_2.setName(VALID_PARAMETER_NAME_2);
    testComponentModel_2.setValue(VALID_HUMAN_NAME_2);
    testComponentModel_2.setResource(testResource_2);
    testComponentModel_2.setPart([testParameterPart_2]);
  });

  describe('Base Tests', () => {
    it('Parameters: should be properly instantiated as empty', () => {
      const testInstance = new Parameters();

      expectResourceBase<Parameters>(Parameters, testInstance, 'Parameters');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedResourceProperties(testInstance);

      expect(testInstance.hasParameter()).toBe(false);
      expect(testInstance.getParameter()).toEqual([] as ParametersParameterComponent[]);
    });

    it('ParametersParameterComponent: should be properly instantiated as empty', () => {
      const testInstance = new ParametersParameterComponent();

      expectBackboneElementBase<ParametersParameterComponent>(
        ParametersParameterComponent,
        testInstance,
        'ParametersParameterComponent',
        'Parameters.parameter',
      );
      expect(testInstance.isEmpty()).toBe(true);
      const t = () => {
        testInstance.toJSON();
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow('The following required properties do not exist: Parameters.parameter.name');
      expectUndefinedBackboneElementProperties(testInstance);

      expect(testInstance.hasNameElement()).toBe(false);
      expect(testInstance.getNameElement()).toBeNull();
      expect(testInstance.hasName()).toBe(false);
      expect(testInstance.getName()).toBeNull();
      expect(testInstance.hasValue()).toBe(false);
      expect(testInstance.getValue()).toBeUndefined();
      expect(testInstance.hasResource()).toBe(false);
      expect(testInstance.getResource()).toBeUndefined();
      expect(testInstance.hasPart()).toBe(false);
      expect(testInstance.getPart()).toEqual([] as ParametersParameterComponent[]);
    });

    it('should properly copy()', () => {
      const testModel = new Parameters();
      initializeResourceProperties(testModel);
      testModel.setParameter([testComponentModel]);

      let testInstance: Parameters = testModel.copy();

      expectResourceBase<Parameters>(Parameters, testInstance, 'Parameters');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasParameter()).toBe(true);
      expect(testInstance.getParameter()).toEqual([testComponentModel]);

      const testComponentInstance: ParametersParameterComponent = testInstance.getParameter()[0];
      expect(testComponentInstance.hasNameElement()).toBe(true);
      expect(testComponentInstance.getNameElement()).toEqual(new StringType(VALID_PARAMETER_NAME));
      expect(testComponentInstance.hasName()).toBe(true);
      expect(testComponentInstance.getName()).toStrictEqual(VALID_PARAMETER_NAME);
      expect(testComponentInstance.hasValue()).toBe(true);
      expect(testComponentInstance.getValue()).toEqual(VALID_HUMAN_NAME);
      expect(testComponentInstance.hasResource()).toBe(true);
      expect(testComponentInstance.getResource()).toEqual(testResource);
      expect(testComponentInstance.hasPart()).toBe(true);
      expect(testComponentInstance.getPart()).toEqual([testParameterPart]);

      // Reset to undefined

      undefineResourceProperties(testModel);
      testModel.setParameter(TestData.UNDEFINED_VALUE);

      testInstance = testModel.copy();

      expectResourceBase<Parameters>(Parameters, testInstance, 'Parameters');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedResourceProperties(testInstance);

      expect(testInstance.hasParameter()).toBe(false);
      expect(testInstance.getParameter()).toEqual([] as ParametersParameterComponent[]);
    });

    it('should be properly reset by modifying all properties', () => {
      const testInstance = new Parameters();
      initializeResourceProperties(testInstance);
      testInstance.setParameter([testComponentModel]);

      expectResourceBase<Parameters>(Parameters, testInstance, 'Parameters');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasParameter()).toBe(true);
      expect(testInstance.getParameter()).toEqual([testComponentModel]);

      let testComponentInstance: ParametersParameterComponent = testInstance.getParameter()[0];
      expect(testComponentInstance.hasNameElement()).toBe(true);
      expect(testComponentInstance.getNameElement()).toEqual(new StringType(VALID_PARAMETER_NAME));
      expect(testComponentInstance.hasName()).toBe(true);
      expect(testComponentInstance.getName()).toStrictEqual(VALID_PARAMETER_NAME);
      expect(testComponentInstance.hasValue()).toBe(true);
      expect(testComponentInstance.getValue()).toEqual(VALID_HUMAN_NAME);
      expect(testComponentInstance.hasResource()).toBe(true);
      expect(testComponentInstance.getResource()).toEqual(testResource);
      expect(testComponentInstance.hasPart()).toBe(true);
      expect(testComponentInstance.getPart()).toEqual([testParameterPart]);

      // Reset

      resetResourceProperties(testInstance);
      testInstance.setParameter([testComponentModel_2]);

      expectResourceBase<Parameters>(Parameters, testInstance, 'Parameters');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toBeDefined();
      expectResetResourceProperties(testInstance);

      expect(testInstance.hasParameter()).toBe(true);
      expect(testInstance.getParameter()).toEqual([testComponentModel_2]);

      testComponentInstance = testInstance.getParameter()[0];
      expect(testComponentInstance.hasNameElement()).toBe(true);
      expect(testComponentInstance.getNameElement()).toEqual(new StringType(VALID_PARAMETER_NAME_2));
      expect(testComponentInstance.hasName()).toBe(true);
      expect(testComponentInstance.getName()).toStrictEqual(VALID_PARAMETER_NAME_2);
      expect(testComponentInstance.hasValue()).toBe(true);
      expect(testComponentInstance.getValue()).toEqual(VALID_HUMAN_NAME_2);
      expect(testComponentInstance.hasResource()).toBe(true);
      expect(testComponentInstance.getResource()).toEqual(testResource_2);
      expect(testComponentInstance.hasPart()).toBe(true);
      expect(testComponentInstance.getPart()).toEqual([testParameterPart_2]);

      // Reset to undefined

      undefineResourceProperties(testInstance);
      testInstance.setParameter(TestData.UNDEFINED_VALUE);

      expectResourceBase<Parameters>(Parameters, testInstance, 'Parameters');
      expect(testInstance.isEmpty()).toBe(true);
      expect(testInstance.toJSON()).toBeUndefined();
      expectUndefinedResourceProperties(testInstance);

      expect(testInstance.hasParameter()).toBe(false);
      expect(testInstance.getParameter()).toEqual([] as ParametersParameterComponent[]);
    });
  });

  describe('Serialization/Deserialization', () => {
    let altPart: ParametersParameterComponent;
    let altParameter: ParametersParameterComponent;
    beforeAll(() => {
      altPart = testParameterPart.copy();
      altPart.setId(TestData.DATATYPE_ID);
      altPart.addExtension(DATATYPE_EXTENSION);

      altParameter = testComponentModel.copy();
      altParameter.addExtension(VALID_EXTENSION_2);
      altParameter.addModifierExtension(VALID_MODIFIER_EXTENSION_2);
      altParameter.setPart([altPart]);
    });

    const VALID_JSON = {
      resourceType: 'Parameters',
      id: 'id12345',
      meta: {
        lastUpdated: '2024-01-28T14:30:00.000Z',
      },
      implicitRules: 'implicitRules',
      language: 'en-US',
      parameter: [
        {
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
          name: 'BackboneElement Name',
          valueHumanName: {
            family: 'Surname',
            given: ['First', 'Middle'],
            prefix: ['Mr.'],
            suffix: ['Sr.'],
          },
          resource: {
            resourceType: 'SimplePersonModel',
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
            phone: '888-555-1234',
          },
          part: [
            {
              id: 'DT-1357',
              extension: [
                {
                  url: 'datatypeExtUrl',
                  valueString: 'Datatype Extension string value',
                },
              ],
              name: 'Part Parameter Name',
              valueAddress: {
                use: 'home',
                type: 'postal',
                line: ['1234 Main ST', 'APT 15A'],
                city: 'Nashua',
                state: 'NH',
                postalCode: '03064',
                country: 'US',
              },
            },
          ],
        },
      ],
    };
    const INVALID_JSON = {
      bogusField: 'bogus value',
    };

    it('should throw FhirError from toJSON() when ParametersParameterComponent instantiated with missing required properties', () => {
      const testInstance = new ParametersParameterComponent();
      const t = () => {
        testInstance.toJSON();
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow(`The following required properties do not exist: Parameters.parameter.name`);
    });

    it('should properly create serialized content', () => {
      const testInstance = new Parameters();
      initializeResourceProperties(testInstance);
      testInstance.setParameter([altParameter]);

      expectResourceBase<Parameters>(Parameters, testInstance, 'Parameters');
      expect(testInstance.isEmpty()).toBe(false);
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasParameter()).toBe(true);
      expect(testInstance.getParameter()).toEqual([altParameter]);

      const testComponentInstance: ParametersParameterComponent = testInstance.getParameter()[0];
      expect(testComponentInstance.hasNameElement()).toBe(true);
      expect(testComponentInstance.getNameElement()).toEqual(new StringType(VALID_PARAMETER_NAME));
      expect(testComponentInstance.hasName()).toBe(true);
      expect(testComponentInstance.getName()).toStrictEqual(VALID_PARAMETER_NAME);
      expect(testComponentInstance.hasValue()).toBe(true);
      expect(testComponentInstance.getValue()).toEqual(VALID_HUMAN_NAME);
      expect(testComponentInstance.hasResource()).toBe(true);
      expect(testComponentInstance.getResource()).toEqual(testResource);
      expect(testComponentInstance.hasPart()).toBe(true);
      expect(testComponentInstance.getPart()).toEqual([altPart]);

      expect(testInstance.toJSON()).toEqual(VALID_JSON);
    });

    it('should return undefined when parsed with no json', () => {
      let testInstance: Parameters | undefined = undefined;
      testInstance = Parameters.parse({});
      expect(testInstance).toBeUndefined();

      testInstance = Parameters.parse(null);
      expect(testInstance).toBeUndefined();

      testInstance = Parameters.parse(undefined);
      expect(testInstance).toBeUndefined();
    });

    it('should throw FhirError from ParametersParameterComponent parse() when JSON is missing required properties', () => {
      const t = () => {
        ParametersParameterComponent.parse(INVALID_JSON);
      };
      expect(t).toThrow(FhirError);
      expect(t).toThrow(
        `The following required properties must be included in the provided JSON: ParametersParameterComponent.name`,
      );
    });

    it('should return parsed Parameters for valid json', () => {
      const testInstance = Parameters.parse(VALID_JSON);

      expectResourceBase<Parameters>(Parameters, testInstance, 'Parameters');
      expect(testInstance.isEmpty()).toBe(false);
      expect(testInstance.toJSON()).toEqual(VALID_JSON);
      expectInitializedResourceProperties(testInstance);

      expect(testInstance.hasParameter()).toBe(true);
      expect(testInstance.getParameter()).toEqual([altParameter]);

      const testComponentInstance: ParametersParameterComponent = testInstance.getParameter()[0];
      expect(testComponentInstance.hasNameElement()).toBe(true);
      expect(testComponentInstance.getNameElement()).toEqual(new StringType(VALID_PARAMETER_NAME));
      expect(testComponentInstance.hasName()).toBe(true);
      expect(testComponentInstance.getName()).toStrictEqual(VALID_PARAMETER_NAME);
      expect(testComponentInstance.hasValue()).toBe(true);
      expect(testComponentInstance.getValue()).toEqual(VALID_HUMAN_NAME);
      expect(testComponentInstance.hasResource()).toBe(true);
      expect(testComponentInstance.getResource()).toEqual(testResource);
      expect(testComponentInstance.hasPart()).toBe(true);
      expect(testComponentInstance.getPart()).toEqual([altPart]);
    });
  });

  describe('Type Assertion Tests', () => {
    it('Parameters.parameter: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new Parameters();
      let t = () => {
        testInstance.setParameter([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Parameters.parameter; Provided value array has an element that is not an instance of ParametersParameterComponent.`,
      );

      t = () => {
        testInstance.addParameter(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Parameters.parameter; Provided element is not an instance of ParametersParameterComponent.`,
      );
    });

    it('ParametersParameterComponent constructor: should throw appropriate errors when instantiated with an invalid required data elements', () => {
      let t = () => {
        new ParametersParameterComponent(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Parameters.parameter.name ([object Object])`);

      t = () => {
        new ParametersParameterComponent(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Parameters.parameter.name; Provided value is not an instance of StringType.`);

      t = () => {
        new ParametersParameterComponent(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Parameters.parameter.name (12345)`);
    });

    it('ParametersParameterComponent name: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new ParametersParameterComponent();
      let t = () => {
        testInstance.setNameElement(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Parameters.parameter.name; Provided value is not an instance of StringType.`);

      t = () => {
        testInstance.setNameElement(TestData.INVALID_STRING_TYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Parameters.parameter.name; Provided value is not an instance of StringType.`);

      t = () => {
        testInstance.setName(TestData.INVALID_STRING_TYPE_VALUE);
      };
      expect(t).toThrow(PrimitiveTypeError);
      expect(t).toThrow(`Invalid Parameters.parameter.name (12345)`);

      t = () => {
        testInstance.setName(undefined);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(`Parameters.parameter.name is required`);

      t = () => {
        testInstance.setName(null);
      };
      expect(t).toThrow(AssertionError);
      expect(t).toThrow(`Parameters.parameter.name is required`);
    });

    it('ParametersParameterComponent value: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new ParametersParameterComponent();
      let t = () => {
        testInstance.setValue(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `ChoiceDataTypes decorator on setValue (Parameters.parameter.value[x]) expects the 'value' argument type (MockComplexDataType) to be a supported DataType`,
      );
    });

    it('ParametersParameterComponent resource: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new ParametersParameterComponent();
      let t = () => {
        testInstance.setResource(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(`Invalid Parameters.parameter.resource; Provided element is not an instance of Resource.`);
    });

    it('ParametersParameterComponent part: should throw appropriate errors for an invalid datatype', () => {
      const testInstance = new ParametersParameterComponent();
      let t = () => {
        testInstance.setPart([VALID_MOCK_COMPLEX_DATATYPE]);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Parameters.parameter.part; Provided value array has an element that is not an instance of ParametersParameterComponent.`,
      );

      t = () => {
        testInstance.addPart(VALID_MOCK_COMPLEX_DATATYPE);
      };
      expect(t).toThrow(InvalidTypeError);
      expect(t).toThrow(
        `Invalid Parameters.parameter.part; Provided element is not an instance of ParametersParameterComponent.`,
      );
    });
  });
});
