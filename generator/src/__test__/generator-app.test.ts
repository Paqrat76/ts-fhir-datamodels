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
import { readdirSync } from 'node:fs';
import { GeneratorApp } from '../generator-app';
import { FhirPackage, GeneratedContent } from '../generator-lib/ts-datamodel-generator-helpers';

describe('src/generator-app', () => {
  const testOut = resolve(__dirname, 'test-out', 'test-fhir-r4');
  const testOutCodeSystems = resolve(__dirname, 'test-out', 'test-fhir-r4', 'code-systems');
  const testFhirCacheRoot = resolve(__dirname, 'test-cache');
  const testFhirPackage: FhirPackage = {
    release: 'R4',
    pkgName: 'test.fhir.r4',
    pkgVersion: '4.0.1',
    baseOutputPath: testOut,
    pkgLoaderCacheRootPath: testFhirCacheRoot,
  };

  it('should generate all FHIR R4 artifacts', async () => {
    const generator = new GeneratorApp(testFhirPackage);
    const generatedContent: GeneratedContent[] = await generator.generate();
    expect(generatedContent).toBeDefined();
    expect(generatedContent.length).toBe(2); // 2 CodeSystemEnums, ??
  });

  it('should generate and write all FHIR R4 artifacts', async () => {
    const generator = new GeneratorApp(testFhirPackage);
    const generatedContent: GeneratedContent[] = await generator.generate();
    expect(generatedContent).toBeDefined();
    expect(generatedContent.length).toBe(2); // 2 CodeSystemEnums, ??

    generator.writeDataModelsToDisk(generatedContent);

    const testOutput: string[] = readdirSync(testOut);
    expect(testOutput).toBeDefined();
    expect(testOutput.length).toBe(2);
    const expectedOutput: string[] = ['index.ts', 'code-systems'];
    expect(testOutput).toEqual(expect.arrayContaining(expectedOutput));

    const testCodeSystems: string[] = readdirSync(testOutCodeSystems);
    expect(testCodeSystems).toBeDefined();
    expect(testCodeSystems.length).toBe(2);
    const expectedCodeSystems: string[] = ['IdentifierUseEnum.ts', 'NarrativeStatusEnum.ts'];
    expect(testCodeSystems).toEqual(expect.arrayContaining(expectedCodeSystems));
  });
});
