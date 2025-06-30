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

import { resolve } from 'node:path';
import { FhirPackage } from '../../../../generator-lib/ts-datamodel-generator-helpers';
import { BasePackageLoader, FindResourceInfoOptions } from 'fhir-package-loader';
import {
  ElementDefinition,
  ElementDefinitionType,
  StructureDefinition,
} from '../../../../generator-lib/fhir-artifact-interfaces';
import {
  extractNameFromUrl,
  fixDescriptiveString,
  fixFhirHyperLinks,
  fixPrimitiveElementType,
  getBaseDefinitionType,
  getFieldNames,
  getNumberOfPrimitiveFields,
  getNumberOfReqdFields,
  getPrimitiveJsonType,
  getRequiredConstructorParams,
  getSdHbsProperties,
  hasParsableDataType,
  HbsElementDefinition,
  HbsStructureDefinition,
  is0to0Cardinality,
  isArrayCardinality,
  isPrimitiveDataType,
  isRequired,
  makePascalCase,
  makeUpperSnakeCase,
  stripLineBreaks,
  substituteUnicodeCharacters,
} from '../../../../generator-lib/templates/utils-hbs';
import { TypescriptDataModelGenerator } from '../../../../typescript-datamodel-generator';
import { getGeneratorPackageLoader, testAuditEventSdHbs } from '../../../test-utils';

describe('src/generator-lib/templates/utils-hbs', () => {
  describe('Handlebars Helper Functions', () => {
    describe('getRequiredConstructorParams', () => {
      it('Should return empty string from "empty" input', () => {
        expect(getRequiredConstructorParams(null)).toStrictEqual('');
        expect(getRequiredConstructorParams(undefined)).toStrictEqual('');
        expect(getRequiredConstructorParams([])).toStrictEqual('');
      });

      it('Should return empty string when HbsElementDefinitions are not "isRequired"', () => {
        const testHbsElementDefinitions = testAuditEventSdHbs.childComponents[1].elementDefinitions;
        const expected = '';
        expect(getRequiredConstructorParams(testHbsElementDefinitions)).toStrictEqual(expected);
      });

      it('Should return valid string when HbsElementDefinitions has "isRequired"', () => {
        let testHbsElementDefinitions: HbsElementDefinition[] = testAuditEventSdHbs.parentComponent.elementDefinitions;
        let expected =
          'type_: Coding | null = null, recorded: InstantType | fhirInstant | null = null, agent: AuditEventAgentComponent[] | null = null, source: AuditEventSourceComponent | null = null';
        expect(getRequiredConstructorParams(testHbsElementDefinitions)).toStrictEqual(expected);

        testHbsElementDefinitions = testAuditEventSdHbs.childComponents[4].elementDefinitions;
        expected = 'type_: StringType | fhirString | null = null, value: DataType | null = null';
        expect(getRequiredConstructorParams(testHbsElementDefinitions)).toStrictEqual(expected);
      });
    });
  });

  describe(`Common Utilities`, () => {
    describe(`substituteUnicodeCharacters`, () => {
      [
        {
          unicodeTag: `NON_BREAKING_HYPHEN`,
          testString: `It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements.`,
          expectedString: `It should be specified using the ISO 3166 - 1 alpha-2 code elements.`,
        },
        {
          unicodeTag: `HORIZONTAL_ELLIPSIS`,
          testString: `Encounter (e.g. admission, billing, discharge …)`,
          expectedString: `Encounter (e.g. admission, billing, discharge ...)`,
        },
        {
          unicodeTag: `RIGHT_SINGLE_QUOTATION_MARK`,
          testString: `The nucleotide sequence will be always entered in the 5’-3’ direction.`,
          expectedString: `The nucleotide sequence will be always entered in the 5'-3' direction.`,
        },
        {
          unicodeTag: `LEFT_SINGLE_QUOTATION_MARK`,
          testString: `captured in the 5‘-3‘direction consistent with the base sequences`,
          expectedString: `captured in the 5'-3'direction consistent with the base sequences`,
        },
        {
          unicodeTag: `DOUBLE_QUOTATION_MARKS`,
          testString: `NOTE “Placed on the market” refers to the release`,
          expectedString: `NOTE "Placed on the market" refers to the release`,
        },
        {
          unicodeTag: `MULTIPLE`,
          testString: `NOTE \u201CPlaced on the market\u201D refers to the special\u2011release \u2026`,
          expectedString: `NOTE "Placed on the market" refers to the special-release ...`,
        },
        {
          unicodeTag: `MULTIPLE_SPACES`,
          testString: `NOTE \ufeffPlaced on the market\u2002 refers to the special\u3000release`,
          expectedString: `NOTE  Placed on the market  refers to the special release`,
        },
      ].forEach(({ unicodeTag, testString, expectedString }) => {
        it(`Should replace ${unicodeTag} unicode character(s) with ASCII character(s)`, () => {
          const newString = substituteUnicodeCharacters(testString);
          expect(newString).toStrictEqual(expectedString);
        });
      });
    });

    describe(`makePascalCase`, () => {
      it(`Should return empty string from null input`, () => {
        expect(makePascalCase(null)).toBe('');
      });

      it(`Should return empty string from empty input`, () => {
        expect(makePascalCase('')).toBe('');
      });

      it(`Should return valid string from non-empty lowercase input`, () => {
        expect(makePascalCase('all_lower_case')).toBe('AllLowerCase');
      });

      it(`Should return valid string from non-empty uppercase input`, () => {
        // Note: All upper case have not been seen in the wild but mixed case has
        expect(makePascalCase('FIRST-secondAndThird-FOURTH')).toBe('FirstSecondAndThirdFourth');
      });
    });

    describe(`makeUpperSnakeCase`, () => {
      it(`Should return empty string from null input`, () => {
        expect(makeUpperSnakeCase(null)).toBe('');
      });

      it(`Should return empty string from empty input`, () => {
        expect(makeUpperSnakeCase('')).toBe('');
      });

      it(`Should return valid string from non-empty lowercase input`, () => {
        expect(makeUpperSnakeCase('all_lower_case')).toBe('ALL_LOWER_CASE');
      });

      it(`Should return valid string from non-empty uppercase input`, () => {
        expect(makeUpperSnakeCase('FIRST-secondAndThird-FOURTH')).toBe('FIRST_SECOND_AND_THIRD_FOURTH');
      });
    });

    describe(`stripLineBreaks`, () => {
      it(`Should return empty string from null input`, () => {
        expect(stripLineBreaks(null)).toBe('');
      });

      it(`Should return empty string from undefined input`, () => {
        expect(stripLineBreaks(undefined)).toBe('');
      });

      it(`Should return empty string from empty input`, () => {
        expect(stripLineBreaks('')).toBe('');
      });

      it(`Should return valid string from input having linefeeds`, () => {
        expect(stripLineBreaks('valid\nstring\nwith\nlinefeed')).toBe('valid string with linefeed');
      });

      it(`Should return valid string from input having carriage returns`, () => {
        expect(stripLineBreaks('valid\rstring\rwith\rcarriage\rreturns')).toBe('valid string with carriage returns');
      });

      it(`Should return valid string from input having carriage returns and linefeeds`, () => {
        expect(stripLineBreaks('valid\rstring\nwith\rcarriage\nreturns\r\nand\r\nlinefeeds')).toBe(
          'valid string with carriage returns and linefeeds',
        );
      });
    });

    describe('fixFhirHyperLinks', () => {
      it('Should return original string where it does not contain any FHIR hyperlinks', () => {
        const testString = 'This is a test string';
        const fixedString = fixFhirHyperLinks(testString);
        expect(fixedString).toStrictEqual(testString);
      });

      it('Should return fixed string where it contains a single FHIR hyperlink', () => {
        const testString =
          'This is a test string with a FHIR hyperlink: [Simple FHIRPath Profile](fhirpath.html#simple)';
        const fixedString = fixFhirHyperLinks(testString);
        expect(fixedString).toStrictEqual(
          'This is a test string with a FHIR hyperlink: [Simple FHIRPath Profile](https://hl7.org/fhir/fhirpath.html#simple)',
        );
      });

      it('Should return fixed string where it contains multiple FHIR hyperlinks', () => {
        const testStrings = [
          'Multiple FHIR hyperlinks',
          ': [Simple FHIRPath Profile](fhirpath.HTML#simple)',
          'and [Provenance.signature](provenance-definitions.html#Provenance.signature)',
          'etc.',
        ];
        const fixedString = fixFhirHyperLinks(testStrings.join(' '));
        expect(fixedString).toStrictEqual(
          'Multiple FHIR hyperlinks : [Simple FHIRPath Profile](https://hl7.org/fhir/fhirpath.HTML#simple) and [Provenance.signature](https://hl7.org/fhir/provenance-definitions.html#Provenance.signature) etc.',
        );
      });
    });

    describe(`extractNameFromUrl`, () => {
      it(`Should return AssertionError string from null input`, () => {
        expect(() => {
          extractNameFromUrl(null);
        }).toThrow('Invalid url (null)');
      });

      it(`Should return AssertionError from undefined input`, () => {
        expect(() => {
          extractNameFromUrl(undefined);
        }).toThrow('Invalid url (undefined)');
      });

      it(`Should return AssertionError from empty input`, () => {
        expect(() => {
          extractNameFromUrl('');
        }).toThrow('Invalid url ()');
      });

      it(`Should return AssertionError from invalid url input`, () => {
        expect(() => {
          extractNameFromUrl('invalidUrl');
        }).toThrow('Invalid url (invalidUrl)');
      });

      it(`Should return valid name from valid url`, () => {
        expect(extractNameFromUrl('http://hl7.org/fhir/FHIR-version')).toBe('FhirVersion');
        expect(extractNameFromUrl('http://hl7.org/fhir/identifier-use')).toBe('IdentifierUse');
        expect(extractNameFromUrl('http://hl7.org/fhir/StructureDefinition/Narrative')).toBe('Narrative');
        expect(extractNameFromUrl('http://hl7.org/fhir/ValueSet/narrative-status')).toBe('NarrativeStatus');
      });
    });

    describe(`isPrimitiveDataType`, () => {
      it(`Should return false for non-primitive type`, () => {
        expect(isPrimitiveDataType('Period')).toBe(false);
      });

      it(`Should return true for primitive type`, () => {
        expect(isPrimitiveDataType('positiveInt')).toBe(true);
      });
    });

    describe(`getPrimitiveJsonType`, () => {
      it(`Should return undefined for non-primitive FhirDataType`, () => {
        expect(getPrimitiveJsonType('Period')).toBeUndefined();
      });

      it(`Should return 'boolean' for primitive boolean FhirDataType`, () => {
        expect(getPrimitiveJsonType('boolean')).toStrictEqual('boolean');
      });

      it(`Should return 'number' for valid primitive number FhirDataTypes`, () => {
        expect(getPrimitiveJsonType('decimal')).toStrictEqual('number');
        expect(getPrimitiveJsonType('integer')).toStrictEqual('number');
        expect(getPrimitiveJsonType('integer64')).toStrictEqual('number');
        expect(getPrimitiveJsonType('positiveInt')).toStrictEqual('number');
        expect(getPrimitiveJsonType('unsignedInt')).toStrictEqual('number');
      });

      it(`Should return 'string' for valid primitive string FhirDataTypes`, () => {
        expect(getPrimitiveJsonType('base64Binary')).toStrictEqual('string');
        expect(getPrimitiveJsonType('string')).toStrictEqual('string');
        expect(getPrimitiveJsonType('markdown')).toStrictEqual('string');
        expect(getPrimitiveJsonType('url')).toStrictEqual('string');
      });
    });

    describe('fixDescriptiveString', () => {
      it('Should return undefined for undefined input', () => {
        expect(fixDescriptiveString(undefined)).toBeUndefined();
      });

      it('Should return original string for input with no issues', () => {
        const testString = 'This is a test string with no issues';
        expect(fixDescriptiveString(testString)).toStrictEqual(testString);
      });

      it('Should return fixed string for input with line breaks', () => {
        const testString = 'valid\rstring\nwith\rcarriage\nreturns\r\nand\r\nline feeds';
        const expected = 'valid string with carriage returns and line feeds';
        expect(fixDescriptiveString(testString)).toStrictEqual(expected);
      });

      it('Should return fixed string for input with Unicode characters', () => {
        const testString = `NOTE \u201CPlaced on the market\u201D refers to the special\u2011release \u2026`;
        const expected = `NOTE "Placed on the market" refers to the special-release ...`;
        expect(fixDescriptiveString(testString)).toStrictEqual(expected);
      });

      it('Should return fixed string for input with hyperlinks', () => {
        const testStrings = [
          'Multiple FHIR hyperlinks',
          ': [Simple FHIRPath Profile](fhirpath.HTML#simple)',
          'and [Provenance.signature](provenance-definitions.html#Provenance.signature)',
          'etc.',
        ];
        const expected = `Multiple FHIR hyperlinks : [Simple FHIRPath Profile](https://hl7.org/fhir/fhirpath.HTML#simple) and [Provenance.signature](https://hl7.org/fhir/provenance-definitions.html#Provenance.signature) etc.`;
        expect(fixDescriptiveString(testStrings.join(' '))).toStrictEqual(expected);
      });

      it('Should return fixed string for input with all fixable issues', () => {
        const testString = `This is a \u201Ctest string\u201D with various issues\r\nincluding a 'hyperlink'\u00A0[Simple FHIRPath Profile](fhirpath.html#simple) \u2026`;
        const expected = `This is a "test string" with various issues including a \\'hyperlink\\' [Simple FHIRPath Profile](https://hl7.org/fhir/fhirpath.html#simple) ...`;
        expect(fixDescriptiveString(testString)).toStrictEqual(expected);
      });
    });

    describe('getNumberOfReqdFields', () => {
      it('Should return 0 for empty input', () => {
        expect(getNumberOfReqdFields([])).toBe(0);
      });

      it('Should return 0 for no required fields', () => {
        const testHbsElementDefinitions: HbsElementDefinition[] =
          testAuditEventSdHbs.childComponents[1].elementDefinitions;
        expect(getNumberOfReqdFields(testHbsElementDefinitions)).toBe(0);
      });

      it('Should return the correct number for array having required fields', () => {
        const testHbsElementDefinitions: HbsElementDefinition[] =
          testAuditEventSdHbs.parentComponent.elementDefinitions;
        expect(getNumberOfReqdFields(testHbsElementDefinitions)).toBe(4);
      });
    });

    describe('getNumberOfPrimitiveFields', () => {
      it('Should return 0 for empty input', () => {
        expect(getNumberOfPrimitiveFields([])).toBe(0);
      });

      it('Should return 0 for no primitive fields', () => {
        const testHbsElementDefinitions: HbsElementDefinition[] =
          testAuditEventSdHbs.childComponents[4].elementDefinitions;
        // Change the HbsElementDefinition objects to not be primitives
        testHbsElementDefinitions.forEach((ed) => {
          ed.isComplexType = true;
          ed.isPrimitiveType = false;
        });
        expect(getNumberOfPrimitiveFields(testHbsElementDefinitions)).toBe(0);
      });

      it('Should return the correct number for array having primitive fields', () => {
        const testHbsElementDefinitions: HbsElementDefinition[] =
          testAuditEventSdHbs.parentComponent.elementDefinitions;
        expect(getNumberOfPrimitiveFields(testHbsElementDefinitions)).toBe(4);
      });
    });

    describe('hasParsableDataType', () => {
      it('Should return false for "empty" inputs', () => {
        expect(hasParsableDataType('', [])).toBe(false);
      });

      it('Should return false for non-parsable inputs', () => {
        const testHbsElementDefinitions: HbsElementDefinition[] =
          testAuditEventSdHbs.childComponents[1].elementDefinitions;
        expect(hasParsableDataType('notParsableBase', testHbsElementDefinitions)).toBe(false);
      });

      it('Should return true for a parsable base and non-parsable element definitions inputs', () => {
        const testHbsElementDefinitions: HbsElementDefinition[] =
          testAuditEventSdHbs.childComponents[1].elementDefinitions;
        expect(hasParsableDataType('DataType', testHbsElementDefinitions)).toBe(true);
        expect(hasParsableDataType('BackboneElement', testHbsElementDefinitions)).toBe(true);
        expect(hasParsableDataType('BackboneType', testHbsElementDefinitions)).toBe(true);
        expect(hasParsableDataType('Element', testHbsElementDefinitions)).toBe(true);
      });

      it('Should return true for a parsable base and parsable element definitions inputs', () => {
        const testHbsElementDefinitions: HbsElementDefinition[] =
          testAuditEventSdHbs.parentComponent.elementDefinitions;
        expect(hasParsableDataType('DataType', testHbsElementDefinitions)).toBe(true);
        expect(hasParsableDataType('BackboneElement', testHbsElementDefinitions)).toBe(true);
        expect(hasParsableDataType('BackboneType', testHbsElementDefinitions)).toBe(true);
        expect(hasParsableDataType('Element', testHbsElementDefinitions)).toBe(true);
      });
    });

    describe('isRequired', () => {
      it('Should return false for undefined input', () => {
        const element = { min: undefined } as ElementDefinition;
        expect(isRequired(element)).toBe(false);
      });

      it('Should return false for non-required input', () => {
        const element = { min: 0 } as ElementDefinition;
        expect(isRequired(element)).toBe(false);
      });

      it('Should return true for required input', () => {
        let element = { min: 1 } as ElementDefinition;
        expect(isRequired(element)).toBe(true);

        element = { min: 9 } as ElementDefinition;
        expect(isRequired(element)).toBe(true);
      });
    });

    describe('isArrayCardinality', () => {
      it('Should return false for undefined input', () => {
        const element = { max: undefined } as ElementDefinition;
        expect(isArrayCardinality(element)).toBe(false);
      });

      it('Should return false for improper input', () => {
        const element = { max: 'zzz' } as ElementDefinition;
        expect(isArrayCardinality(element)).toBe(false);
      });

      it('Should return false for max = 1', () => {
        const element = { max: '1' } as ElementDefinition;
        expect(isArrayCardinality(element)).toBe(false);
      });

      it('Should return true for max > 1', () => {
        const element = { max: '5' } as ElementDefinition;
        expect(isArrayCardinality(element)).toBe(true);
      });

      it('Should return true for max = *', () => {
        const element = { max: '*' } as ElementDefinition;
        expect(isArrayCardinality(element)).toBe(true);
      });

      it('Should return false for base.max = 1', () => {
        const element = { max: '*', base: { max: '1' } } as ElementDefinition;
        expect(isArrayCardinality(element)).toBe(false);
      });

      it('Should return true for base.max > 1', () => {
        const element = { max: '1', base: { max: '5' } } as ElementDefinition;
        expect(isArrayCardinality(element)).toBe(true);
      });
    });

    describe('is0to0Cardinality', () => {
      it('Should return false for undefined input', () => {
        const element = { min: undefined, max: undefined } as ElementDefinition;
        expect(is0to0Cardinality(element)).toBe(false);
      });

      it('Should return false for min = 1', () => {
        const element = { min: 1, max: undefined } as ElementDefinition;
        expect(is0to0Cardinality(element)).toBe(false);
      });

      it('Should return false for min = 0 and undefined max', () => {
        const element = { min: 0, max: undefined } as ElementDefinition;
        expect(is0to0Cardinality(element)).toBe(false);
      });

      it('Should return false for min = 0 and max > 0', () => {
        const element = { min: 0, max: '1' } as ElementDefinition;
        expect(is0to0Cardinality(element)).toBe(false);
      });

      it('Should return false for min = 1 and max > 0', () => {
        const element = { min: 1, max: '1' } as ElementDefinition;
        expect(is0to0Cardinality(element)).toBe(false);
      });

      it('Should return false for min = 0 and max = *', () => {
        const element = { min: 0, max: '*' } as ElementDefinition;
        expect(is0to0Cardinality(element)).toBe(false);
      });

      it('Should return false for min = 0 and invalid max', () => {
        const element = { min: 0, max: 'zzz' } as ElementDefinition;
        expect(is0to0Cardinality(element)).toBe(false);
      });

      it('Should return true for min = 0 and max = 0', () => {
        const element = { min: 0, max: '0' } as ElementDefinition;
        expect(is0to0Cardinality(element)).toBe(true);
      });
    });

    describe('fixPrimitiveElementType', () => {
      it(`Should return source ElementDefinitionType[] for non-primitive types`, () => {
        const testEdt = { code: 'Period' } as ElementDefinitionType;
        expect(fixPrimitiveElementType([testEdt])).toStrictEqual([testEdt]);
      });

      it(`Should return fixed ElementDefinitionType[] for primitive 'http://hl7.org/fhirpath/System.String'`, () => {
        const testEdt = { code: 'http://hl7.org/fhirpath/System.String' } as ElementDefinitionType;
        const expected = { code: 'string' } as ElementDefinitionType;
        expect(fixPrimitiveElementType([testEdt])).toStrictEqual([expected]);
      });

      it(`Should return fixed ElementDefinitionType[] for valid extension`, () => {
        const testEdt = {
          code: 'http://hl7.org/fhirpath/System.String',
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type',
              valueUrl: 'markdown',
            },
          ],
        } as ElementDefinitionType;
        const expected = {
          code: 'markdown',
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type',
              valueUrl: 'markdown',
            },
          ],
        } as ElementDefinitionType;
        expect(fixPrimitiveElementType([testEdt])).toStrictEqual([expected]);
      });

      it(`Should return source ElementDefinitionType[] for invalid extension`, () => {
        const testEdt = {
          code: 'Coding',
          extension: [
            {
              url: 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type',
              valueUrl: 'invalid',
            },
          ],
        } as ElementDefinitionType;
        expect(fixPrimitiveElementType([testEdt])).toStrictEqual([testEdt]);
      });
    });

    describe('getFieldNames', () => {
      it('Should return undefined for root ElementDefinition.path', () => {
        expect(getFieldNames({ path: '' } as ElementDefinition)).toBeUndefined();
        expect(getFieldNames({ path: 'AuditEvent' } as ElementDefinition)).toBeUndefined();
        expect(getFieldNames({ path: 'AuditEvent-property' } as ElementDefinition)).toBeUndefined();
      });

      it('Should return valid field names for valid ElementDefinition.path', () => {
        const testElementDefinition = { path: 'AuditEvent.subtype' } as ElementDefinition;
        const expected = { fieldName: 'subtype', fieldIdentifierName: 'subtype' };
        expect(getFieldNames(testElementDefinition)).toStrictEqual(expected);
      });

      it('Should return valid field names for reserved keyword ElementDefinition.path', () => {
        const testElementDefinition = { path: 'AuditEvent.type' } as ElementDefinition;
        const expected = { fieldName: 'type', fieldIdentifierName: 'type_' };
        expect(getFieldNames(testElementDefinition)).toStrictEqual(expected);
      });

      it('Should return valid field names for special cases of ElementDefinition.path', () => {
        // Anomalies in FHIR specifications where the field name duplicates a generated field method name

        let testElementDefinition = { path: 'ClaimResponse.addItem' } as ElementDefinition;
        let expected = { fieldName: 'addItem', fieldIdentifierName: 'addItem_' };
        expect(getFieldNames(testElementDefinition)).toStrictEqual(expected);

        testElementDefinition = { path: 'ExplanationOfBenefit.addItem' } as ElementDefinition;
        expected = { fieldName: 'addItem', fieldIdentifierName: 'addItem_' };
        expect(getFieldNames(testElementDefinition)).toStrictEqual(expected);
      });
    });

    describe('getBaseDefinitionType', () => {
      it('Should throw AssertionError for invalid source StructureDefinition', () => {
        let sourceSd = {
          kind: 'logical',
        } as StructureDefinition;
        expect(() => {
          getBaseDefinitionType(sourceSd);
        }).toThrow(
          'StructureDefinition.kind is expected to be one of [complex-type, resource]; Unexpected StructureDefinition.kind: logical',
        );

        sourceSd = {
          kind: 'complex-type',
        } as StructureDefinition;
        expect(() => {
          getBaseDefinitionType(sourceSd);
        }).toThrow('StructureDefinition.baseDefinition is expected to be defined');

        sourceSd = {
          kind: 'complex-type',
          baseDefinition: 'invalidBaseDefinition',
        } as StructureDefinition;
        expect(() => {
          getBaseDefinitionType(sourceSd);
        }).toThrow('StructureDefinition.baseDefinition is expected to have at least two parts');

        sourceSd = {
          kind: 'resource',
          baseDefinition: 'baseUrl/InvalidBaseDefinition',
        } as StructureDefinition;
        expect(() => {
          getBaseDefinitionType(sourceSd);
        }).toThrow(
          'baseDefinition is expected to be one of [Resource, DomainResource]; Unexpected baseDefinition: InvalidBaseDefinition',
        );
      });

      it('Should return correct baseDefinitionType for valid complex-type StructureDefinition', () => {
        let sourceSd = {
          kind: 'complex-type',
          baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Element',
        } as StructureDefinition;
        expect(getBaseDefinitionType(sourceSd)).toStrictEqual('DataType');

        sourceSd = {
          kind: 'complex-type',
          baseDefinition: 'http://hl7.org/fhir/StructureDefinition/BackboneElement',
        } as StructureDefinition;
        expect(getBaseDefinitionType(sourceSd)).toStrictEqual('BackboneType');

        sourceSd = {
          kind: 'complex-type',
          baseDefinition: 'http://hl7.org/fhir/StructureDefinition/BackboneType',
        } as StructureDefinition;
        expect(getBaseDefinitionType(sourceSd)).toStrictEqual('BackboneType');

        sourceSd = {
          kind: 'complex-type',
          baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Quantity',
        } as StructureDefinition;
        expect(getBaseDefinitionType(sourceSd)).toStrictEqual('DataType');
      });

      it('Should return correct baseDefinitionType for valid resource StructureDefinition', () => {
        let sourceSd = {
          kind: 'resource',
          baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Resource',
        } as StructureDefinition;
        expect(getBaseDefinitionType(sourceSd)).toStrictEqual('Resource');

        sourceSd = {
          kind: 'resource',
          baseDefinition: 'http://hl7.org/fhir/StructureDefinition/DomainResource',
        } as StructureDefinition;
        expect(getBaseDefinitionType(sourceSd)).toStrictEqual('DomainResource');
      });
    });
  });

  describe('getSdHbsProperties', () => {
    const testFhirCacheRoot = resolve(__dirname, '../..', 'utest-cache');

    let testFhirPackage: FhirPackage;
    let packageLoader: BasePackageLoader;
    let tsDataModelGenerator: TypescriptDataModelGenerator;
    let packageStructureDefinitions: StructureDefinition[];

    beforeAll(async () => {
      testFhirPackage = {
        release: 'R4',
        pkgName: 'utest.fhir.r4',
        pkgVersion: '4.0.1',
        pkgLoaderCacheRootPath: testFhirCacheRoot,
      };
      packageLoader = await getGeneratorPackageLoader(testFhirPackage);
      tsDataModelGenerator = new TypescriptDataModelGenerator(testFhirPackage);
      await tsDataModelGenerator.initialize();
      const options: FindResourceInfoOptions = { type: ['Type', 'Resource'] };
      packageStructureDefinitions = packageLoader.findResourceJSONs('*', options) as StructureDefinition[];
    });

    describe('ComplexTypes HbsProperties', () => {
      it('should return the correct properties for StructureDefinition-CodeableConcept', () => {
        const options: FindResourceInfoOptions = { type: ['Type'] };
        const structureDefinition = packageLoader.findResourceJSON('CodeableConcept', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-Coding', () => {
        const options: FindResourceInfoOptions = { type: ['Type'] };
        const structureDefinition = packageLoader.findResourceJSON('Coding', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-ContactPoint', () => {
        const options: FindResourceInfoOptions = { type: ['Type'] };
        const structureDefinition = packageLoader.findResourceJSON('ContactPoint', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-Duration', () => {
        const options: FindResourceInfoOptions = { type: ['Type'] };
        const structureDefinition = packageLoader.findResourceJSON('Duration', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-Identifier', () => {
        const options: FindResourceInfoOptions = { type: ['Type'] };
        const structureDefinition = packageLoader.findResourceJSON('Identifier', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-Meta', () => {
        const options: FindResourceInfoOptions = { type: ['Type'] };
        const structureDefinition = packageLoader.findResourceJSON('Meta', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-Narrative', () => {
        const options: FindResourceInfoOptions = { type: ['Type'] };
        const structureDefinition = packageLoader.findResourceJSON('Narrative', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-Period', () => {
        const options: FindResourceInfoOptions = { type: ['Type'] };
        const structureDefinition = packageLoader.findResourceJSON('Period', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-Reference', () => {
        const options: FindResourceInfoOptions = { type: ['Type'] };
        const structureDefinition = packageLoader.findResourceJSON('Reference', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-Signature', () => {
        const options: FindResourceInfoOptions = { type: ['Type'] };
        const structureDefinition = packageLoader.findResourceJSON('Signature', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-Timing', () => {
        const options: FindResourceInfoOptions = { type: ['Type'] };
        const structureDefinition = packageLoader.findResourceJSON('Timing', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });
    });

    describe('Resources HbsProperties', () => {
      it('should return the correct properties for StructureDefinition-Bundle', () => {
        const options: FindResourceInfoOptions = { type: ['Resource'] };
        const structureDefinition = packageLoader.findResourceJSON('Bundle', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-PractitionerRole', () => {
        const options: FindResourceInfoOptions = { type: ['Resource'] };
        const structureDefinition = packageLoader.findResourceJSON('PractitionerRole', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();
        expect(sdHbsProperties).toMatchSnapshot();
      });

      it('should return the correct properties for StructureDefinition-SearchParameter', () => {
        const options: FindResourceInfoOptions = { type: ['Resource'] };
        const structureDefinition = packageLoader.findResourceJSON('SearchParameter', options) as StructureDefinition;
        const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

        const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
          structureDefinition,
          result.codeSystemEnumMap,
          testFhirPackage,
        );
        expect(sdHbsProperties).toBeDefined();

        // There are rare cases where more than one field has an EnumCodeType using the same Enum class resulting in
        // duplicate declarations. To prevent this, we can look for duplicate HbsElementDefinitionType.codeSystemName
        // values and set all except the first isDupeCodeSystemName to true. Refer to constructor-required.hbs and
        // private-field-declaration.hbs for how the HbsElementDefinitionType.codeSystemName is used.
        const resourceTypeEds: HbsElementDefinition[] = sdHbsProperties.parentComponent.elementDefinitions.filter(
          (ed: HbsElementDefinition) => ed.type.codeSystemName && ed.type.codeSystemName === 'ResourceTypes',
        );
        expect(resourceTypeEds).toHaveLength(2);
        const isDupeCodeSystemName = resourceTypeEds.some((ed: HbsElementDefinition) => ed.type.isDupeCodeSystemName);
        expect(isDupeCodeSystemName).toBe(true);
        const isNotDupeCodeSystemName = resourceTypeEds.some(
          (ed: HbsElementDefinition) => !ed.type.isDupeCodeSystemName,
        );
        expect(isNotDupeCodeSystemName).toBe(true);

        expect(sdHbsProperties).toMatchSnapshot();
      });
    });
  });
});
