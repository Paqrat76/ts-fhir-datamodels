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
import { NarrativeStatusEnum } from '../../../data-types/code-systems/NarrativeStatusEnum';
import { InvalidCodeError } from '../../../errors/InvalidCodeError';

describe('NarrativeStatusEnum', () => {
  const INVALID_CODE = ' invalid CodeType ';
  const UNDEFINED_CODE = undefined;
  const testNarrativeStatusEnum = new NarrativeStatusEnum();

  it('should be fully defined', () => {
    expect(testNarrativeStatusEnum.values()).toHaveLength(5);
    const expectedEnums = [
      NarrativeStatusEnum.GENERATED,
      NarrativeStatusEnum.EXTENSIONS,
      NarrativeStatusEnum.ADDITIONAL,
      NarrativeStatusEnum.EMPTY,
      NarrativeStatusEnum.NULL,
    ];
    expect(testNarrativeStatusEnum.values()).toEqual(expect.arrayContaining(expectedEnums));

    let enumValue = testNarrativeStatusEnum.fromCode('generated');
    expect(enumValue).toBeDefined();
    expect(enumValue).toEqual(NarrativeStatusEnum.GENERATED);

    enumValue = testNarrativeStatusEnum.fromCode('extensions');
    expect(enumValue).toBeDefined();
    expect(enumValue).toEqual(NarrativeStatusEnum.EXTENSIONS);

    enumValue = testNarrativeStatusEnum.fromCode('additional');
    expect(enumValue).toBeDefined();
    expect(enumValue).toEqual(NarrativeStatusEnum.ADDITIONAL);

    enumValue = testNarrativeStatusEnum.fromCode('empty');
    expect(enumValue).toBeDefined();
    expect(enumValue).toEqual(NarrativeStatusEnum.EMPTY);

    enumValue = testNarrativeStatusEnum.fromCode('null');
    expect(enumValue).toBeDefined();
    expect(enumValue).toEqual(NarrativeStatusEnum.NULL);
  });

  it('should throw InvalidCodeError when executing fromCode() with undefined code value', () => {
    const t = () => {
      testNarrativeStatusEnum.fromCode(UNDEFINED_CODE);
    };
    expect(t).toThrow(InvalidCodeError);
    expect(t).toThrow(`The provided 'code' value is undefined`);
  });

  it('should throw InvalidCodeError when executing fromCode() with unknown code value', () => {
    const t = () => {
      testNarrativeStatusEnum.fromCode(INVALID_CODE);
    };
    expect(t).toThrow(InvalidCodeError);
    expect(t).toThrow(`Unknown NarrativeStatusEnum 'code' value '${INVALID_CODE}'`);
  });

  it('should properly define NarrativeStatusEnum.GENERATED', () => {
    expect(NarrativeStatusEnum.GENERATED).toBeDefined();
    expect(NarrativeStatusEnum.GENERATED).toBeInstanceOf(FhirCodeDefinition);
    expect(NarrativeStatusEnum.GENERATED.name).toStrictEqual('GENERATED');
    expect(NarrativeStatusEnum.GENERATED.code).toStrictEqual('generated');
    expect(NarrativeStatusEnum.GENERATED.system).toStrictEqual('http://hl7.org/fhir/narrative-status');
    expect(NarrativeStatusEnum.GENERATED.display).toStrictEqual('Generated');
    expect(NarrativeStatusEnum.GENERATED.definition).toStrictEqual(
      `The contents of the narrative are entirely generated from the core elements in the content.`,
    );
    expect(NarrativeStatusEnum.GENERATED.toJSON()).toStrictEqual('generated');
  });

  it('should properly define NarrativeStatusEnum.EXTENSIONS', () => {
    expect(NarrativeStatusEnum.EXTENSIONS).toBeDefined();
    expect(NarrativeStatusEnum.EXTENSIONS).toBeInstanceOf(FhirCodeDefinition);
    expect(NarrativeStatusEnum.EXTENSIONS.name).toStrictEqual('EXTENSIONS');
    expect(NarrativeStatusEnum.EXTENSIONS.code).toStrictEqual('extensions');
    expect(NarrativeStatusEnum.EXTENSIONS.system).toStrictEqual('http://hl7.org/fhir/narrative-status');
    expect(NarrativeStatusEnum.EXTENSIONS.display).toStrictEqual('Extensions');
    expect(NarrativeStatusEnum.EXTENSIONS.definition).toStrictEqual(
      `The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.`,
    );
    expect(NarrativeStatusEnum.EXTENSIONS.toJSON()).toStrictEqual('extensions');
  });

  it('should properly define NarrativeStatusEnum.ADDITIONAL', () => {
    expect(NarrativeStatusEnum.ADDITIONAL).toBeDefined();
    expect(NarrativeStatusEnum.ADDITIONAL).toBeInstanceOf(FhirCodeDefinition);
    expect(NarrativeStatusEnum.ADDITIONAL.name).toStrictEqual('ADDITIONAL');
    expect(NarrativeStatusEnum.ADDITIONAL.code).toStrictEqual('additional');
    expect(NarrativeStatusEnum.ADDITIONAL.system).toStrictEqual('http://hl7.org/fhir/narrative-status');
    expect(NarrativeStatusEnum.ADDITIONAL.display).toStrictEqual('Additional');
    expect(NarrativeStatusEnum.ADDITIONAL.definition).toStrictEqual(
      `The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.`,
    );
    expect(NarrativeStatusEnum.ADDITIONAL.toJSON()).toStrictEqual('additional');
  });

  it('should properly define NarrativeStatusEnum.EMPTY', () => {
    expect(NarrativeStatusEnum.EMPTY).toBeDefined();
    expect(NarrativeStatusEnum.EMPTY).toBeInstanceOf(FhirCodeDefinition);
    expect(NarrativeStatusEnum.EMPTY.name).toStrictEqual('EMPTY');
    expect(NarrativeStatusEnum.EMPTY.code).toStrictEqual('empty');
    expect(NarrativeStatusEnum.EMPTY.system).toStrictEqual('http://hl7.org/fhir/narrative-status');
    expect(NarrativeStatusEnum.EMPTY.display).toStrictEqual('Empty');
    expect(NarrativeStatusEnum.EMPTY.definition).toStrictEqual(
      `The contents of the narrative are some equivalent of "No human-readable text provided in this case".`,
    );
    expect(NarrativeStatusEnum.EMPTY.toJSON()).toStrictEqual('empty');
  });
});
