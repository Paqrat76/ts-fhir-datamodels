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
  extractNameFromUrl,
  makePascalCase,
  makeUpperSnakeCase,
  stripLineBreaks,
  substituteUnicodeCharacters,
} from '../../generator-lib/utils';

describe(`src/generator-lib/utils`, () => {
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
});
