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

import { InvalidCodeError } from '@paq-ts-fhir/fhir-core';
import { AddressTypeEnum } from 'gensrc/code-systems/AddressTypeEnum';

describe('AddressTypeEnum', () => {
  describe('values()', () => {
    it('should return all defined FHIR code definitions', () => {
      const addressTypeEnum = new AddressTypeEnum();
      const expectedValues = [
        AddressTypeEnum.POSTAL,
        AddressTypeEnum.PHYSICAL,
        AddressTypeEnum.BOTH,
        AddressTypeEnum.NULL,
      ];

      expect(addressTypeEnum.values()).toEqual(expectedValues);
    });
  });

  describe('fromCode()', () => {
    const addressTypeEnum = new AddressTypeEnum();

    it('should return POSTAL for the "postal" code', () => {
      expect(addressTypeEnum.fromCode('postal')).toEqual(AddressTypeEnum.POSTAL);
    });

    it('should return PHYSICAL for the "physical" code', () => {
      expect(addressTypeEnum.fromCode('physical')).toEqual(AddressTypeEnum.PHYSICAL);
    });

    it('should return BOTH for the "both" code', () => {
      expect(addressTypeEnum.fromCode('both')).toEqual(AddressTypeEnum.BOTH);
    });

    it('should return NULL for the "null" code', () => {
      expect(addressTypeEnum.fromCode('null')).toEqual(AddressTypeEnum.NULL);
    });

    it('should throw InvalidCodeError for an undefined code', () => {
      expect(() => addressTypeEnum.fromCode(undefined)).toThrow(
        new InvalidCodeError(`The provided 'code' value is undefined`),
      );
    });

    it('should throw InvalidCodeError for an unknown code', () => {
      const invalidCode = 'unknown';
      expect(() => addressTypeEnum.fromCode(invalidCode)).toThrow(
        new InvalidCodeError(`Unknown AddressTypeEnum 'code' value '${invalidCode}'`),
      );
    });
  });
});
