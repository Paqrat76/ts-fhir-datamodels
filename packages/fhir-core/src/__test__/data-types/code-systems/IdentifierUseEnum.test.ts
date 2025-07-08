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

import { FhirCodeDefinition } from '../../../base-models/core-fhir-codes';
import { InvalidCodeError } from '../../../errors/InvalidCodeError';
import { IdentifierUseEnum } from '../../../data-types/code-systems/IdentifierUseEnum';

describe('IdentifierUseEnum', () => {
  const INVALID_CODE = ' invalid CodeType ';
  const UNDEFINED_CODE = undefined;
  const testIdentifierUseEnum = new IdentifierUseEnum();

  it('should be fully defined', () => {
    expect(testIdentifierUseEnum.values()).toHaveLength(6);
    const expectedEnums = [
      IdentifierUseEnum.USUAL,
      IdentifierUseEnum.OFFICIAL,
      IdentifierUseEnum.TEMP,
      IdentifierUseEnum.SECONDARY,
      IdentifierUseEnum.OLD,
      IdentifierUseEnum.NULL,
    ];
    expect(testIdentifierUseEnum.values()).toEqual(expect.arrayContaining(expectedEnums));

    let enumValue = testIdentifierUseEnum.fromCode('usual');
    expect(enumValue).toBeDefined();
    expect(enumValue).toEqual(IdentifierUseEnum.USUAL);

    enumValue = testIdentifierUseEnum.fromCode('official');
    expect(enumValue).toBeDefined();
    expect(enumValue).toEqual(IdentifierUseEnum.OFFICIAL);

    enumValue = testIdentifierUseEnum.fromCode('temp');
    expect(enumValue).toBeDefined();
    expect(enumValue).toEqual(IdentifierUseEnum.TEMP);

    enumValue = testIdentifierUseEnum.fromCode('secondary');
    expect(enumValue).toBeDefined();
    expect(enumValue).toEqual(IdentifierUseEnum.SECONDARY);

    enumValue = testIdentifierUseEnum.fromCode('old');
    expect(enumValue).toBeDefined();
    expect(enumValue).toEqual(IdentifierUseEnum.OLD);

    enumValue = testIdentifierUseEnum.fromCode('null');
    expect(enumValue).toBeDefined();
    expect(enumValue).toEqual(IdentifierUseEnum.NULL);
  });

  it('should throw InvalidCodeError when executing fromCode() with undefined code value', () => {
    const t = () => {
      testIdentifierUseEnum.fromCode(UNDEFINED_CODE);
    };
    expect(t).toThrow(InvalidCodeError);
    expect(t).toThrow(`The provided 'code' value is undefined`);
  });

  it('should throw InvalidCodeError when executing fromCode() with unknown code value', () => {
    const t = () => {
      testIdentifierUseEnum.fromCode(INVALID_CODE);
    };
    expect(t).toThrow(InvalidCodeError);
    expect(t).toThrow(`Unknown IdentifierUseEnum 'code' value '${INVALID_CODE}'`);
  });

  it('should properly define IdentifierUseEnum.USUAL', () => {
    expect(IdentifierUseEnum.USUAL).toBeDefined();
    expect(IdentifierUseEnum.USUAL).toBeInstanceOf(FhirCodeDefinition);
    expect(IdentifierUseEnum.USUAL.name).toStrictEqual('USUAL');
    expect(IdentifierUseEnum.USUAL.code).toStrictEqual('usual');
    expect(IdentifierUseEnum.USUAL.system).toStrictEqual('http://hl7.org/fhir/identifier-use');
    expect(IdentifierUseEnum.USUAL.display).toStrictEqual('Usual');
    expect(IdentifierUseEnum.USUAL.definition).toStrictEqual(
      `The identifier recommended for display and use in real-world interactions.`,
    );
    expect(IdentifierUseEnum.USUAL.toJSON()).toStrictEqual('usual');
  });

  it('should properly define IdentifierUseEnum.OFFICIAL', () => {
    expect(IdentifierUseEnum.OFFICIAL).toBeDefined();
    expect(IdentifierUseEnum.OFFICIAL).toBeInstanceOf(FhirCodeDefinition);
    expect(IdentifierUseEnum.OFFICIAL.name).toStrictEqual('OFFICIAL');
    expect(IdentifierUseEnum.OFFICIAL.code).toStrictEqual('official');
    expect(IdentifierUseEnum.OFFICIAL.system).toStrictEqual('http://hl7.org/fhir/identifier-use');
    expect(IdentifierUseEnum.OFFICIAL.display).toStrictEqual('Official');
    expect(IdentifierUseEnum.OFFICIAL.definition).toStrictEqual(
      `The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.`,
    );
    expect(IdentifierUseEnum.OFFICIAL.toJSON()).toStrictEqual('official');
  });

  it('should properly define IdentifierUseEnum.TEMP', () => {
    expect(IdentifierUseEnum.TEMP).toBeDefined();
    expect(IdentifierUseEnum.TEMP).toBeInstanceOf(FhirCodeDefinition);
    expect(IdentifierUseEnum.TEMP.name).toStrictEqual('TEMP');
    expect(IdentifierUseEnum.TEMP.code).toStrictEqual('temp');
    expect(IdentifierUseEnum.TEMP.system).toStrictEqual('http://hl7.org/fhir/identifier-use');
    expect(IdentifierUseEnum.TEMP.display).toStrictEqual('Temp');
    expect(IdentifierUseEnum.TEMP.definition).toStrictEqual(`A temporary identifier.`);
    expect(IdentifierUseEnum.TEMP.toJSON()).toStrictEqual('temp');
  });

  it('should properly define IdentifierUseEnum.SECONDARY', () => {
    expect(IdentifierUseEnum.SECONDARY).toBeDefined();
    expect(IdentifierUseEnum.SECONDARY).toBeInstanceOf(FhirCodeDefinition);
    expect(IdentifierUseEnum.SECONDARY.name).toStrictEqual('SECONDARY');
    expect(IdentifierUseEnum.SECONDARY.code).toStrictEqual('secondary');
    expect(IdentifierUseEnum.SECONDARY.system).toStrictEqual('http://hl7.org/fhir/identifier-use');
    expect(IdentifierUseEnum.SECONDARY.display).toStrictEqual('Secondary');
    expect(IdentifierUseEnum.SECONDARY.definition).toStrictEqual(
      `An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.`,
    );
    expect(IdentifierUseEnum.SECONDARY.toJSON()).toStrictEqual('secondary');
  });

  it('should properly define IdentifierUseEnum.OLD', () => {
    expect(IdentifierUseEnum.OLD).toBeDefined();
    expect(IdentifierUseEnum.OLD).toBeInstanceOf(FhirCodeDefinition);
    expect(IdentifierUseEnum.OLD.name).toStrictEqual('OLD');
    expect(IdentifierUseEnum.OLD.code).toStrictEqual('old');
    expect(IdentifierUseEnum.OLD.system).toStrictEqual('http://hl7.org/fhir/identifier-use');
    expect(IdentifierUseEnum.OLD.display).toStrictEqual('Old');
    expect(IdentifierUseEnum.OLD.definition).toStrictEqual(
      `The identifier id no longer considered valid, but may be relevant for search purposes. E.g. Changes to identifier schemes, account merges, etc.`,
    );
    expect(IdentifierUseEnum.OLD.toJSON()).toStrictEqual('old');
  });
});
