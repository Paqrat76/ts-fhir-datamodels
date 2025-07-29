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
import { AddressTypeEnum } from '../../../src/code-systems/AddressTypeEnum';
import { TriggerTypeEnum } from '../../../src/code-systems/TriggerTypeEnum';

describe('TypeEnum', () => {
  // AddressTypeEnum represents the majority of generated code system enums having a single hierarchical level.
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

  // TriggerTypeEnum represents those generated code system enums having multi-level hierarchy flattened in the
  // generated Enum classes.
  describe('TriggerTypeEnum', () => {
    describe('values()', () => {
      it('should return all defined FHIR code definitions', () => {
        const triggerTypeEnum = new TriggerTypeEnum();
        const expectedValues = [
          TriggerTypeEnum.NAMED_EVENT,
          TriggerTypeEnum.PERIODIC,
          TriggerTypeEnum.DATA_CHANGED,
          TriggerTypeEnum.DATA_ADDED,
          TriggerTypeEnum.DATA_MODIFIED,
          TriggerTypeEnum.DATA_REMOVED,
          TriggerTypeEnum.DATA_ACCESSED,
          TriggerTypeEnum.DATA_ACCESS_ENDED,
          TriggerTypeEnum.NULL,
        ];

        expect(triggerTypeEnum.values()).toEqual(expectedValues);
      });
    });

    describe('fromCode()', () => {
      const triggerTypeEnum = new TriggerTypeEnum();

      it('should return NAMED_EVENT for the "named-event" code', () => {
        expect(triggerTypeEnum.fromCode('named-event')).toEqual(TriggerTypeEnum.NAMED_EVENT);
      });

      it('should return PERIODIC for the "periodic" code', () => {
        expect(triggerTypeEnum.fromCode('periodic')).toEqual(TriggerTypeEnum.PERIODIC);
      });

      it('should return DATA_CHANGED for the "data-changed" code', () => {
        expect(triggerTypeEnum.fromCode('data-changed')).toEqual(TriggerTypeEnum.DATA_CHANGED);
      });

      it('should return DATA_ADDED for the "data-added" code', () => {
        expect(triggerTypeEnum.fromCode('data-added')).toEqual(TriggerTypeEnum.DATA_ADDED);
      });

      it('should return DATA_MODIFIED for the "data-modified" code', () => {
        expect(triggerTypeEnum.fromCode('data-modified')).toEqual(TriggerTypeEnum.DATA_MODIFIED);
      });

      it('should return DATA_REMOVED for the "data-removed" code', () => {
        expect(triggerTypeEnum.fromCode('data-removed')).toEqual(TriggerTypeEnum.DATA_REMOVED);
      });

      it('should return DATA_ACCESSED for the "data-accessed" code', () => {
        expect(triggerTypeEnum.fromCode('data-accessed')).toEqual(TriggerTypeEnum.DATA_ACCESSED);
      });

      it('should return DATA_ACCESS_ENDED for the "data-access-ended" code', () => {
        expect(triggerTypeEnum.fromCode('data-access-ended')).toEqual(TriggerTypeEnum.DATA_ACCESS_ENDED);
      });

      it('should return NULL for the "null" code', () => {
        expect(triggerTypeEnum.fromCode('null')).toEqual(TriggerTypeEnum.NULL);
      });

      it('should throw InvalidCodeError for an undefined code', () => {
        expect(() => triggerTypeEnum.fromCode(undefined)).toThrow(
          new InvalidCodeError(`The provided 'code' value is undefined`),
        );
      });

      it('should throw InvalidCodeError for an unknown code', () => {
        const invalidCode = 'unknown';
        expect(() => triggerTypeEnum.fromCode(invalidCode)).toThrow(
          new InvalidCodeError(`Unknown TriggerTypeEnum 'code' value '${invalidCode}'`),
        );
      });
    });
  });
});
