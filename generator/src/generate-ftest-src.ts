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

import { strict as assert } from 'node:assert';
import { resolve } from 'node:path';
import { rmSync } from 'node:fs';
import { FhirPackage, GeneratedContent } from './generator-lib/ts-datamodel-generator-helpers';
import { GeneratorApp } from './generator-app';

const testOut = resolve(__dirname, 'generated-ftest-src');
const testFhirCacheRoot = resolve(__dirname, '__test__', 'functional-test', 'ftest-cache');

const testFhirPackage: FhirPackage = {
  release: 'R4',
  pkgName: 'test.fhir.r4',
  pkgVersion: '4.0.1',
  baseOutputPath: testOut,
  pkgLoaderCacheRootPath: testFhirCacheRoot,
};

/**
 * Generates data models from a specified FHIR package and writes the
 * generated content to disk. Ensures the generated content meets
 * predefined expectations in terms of structure and quantity.
 *
 * @returns {Promise<void>} A promise that resolves once the data models
 * have been successfully generated and written to disk.
 */
async function generateDataModels(): Promise<void> {
  rmSync(testOut, { recursive: true, force: true });

  const generator = new GeneratorApp(testFhirPackage);
  const generatedContent: GeneratedContent[] = await generator.generate();
  assert(generatedContent, `Generated content is null or undefined.`);
  // 25 CodeSystemEnums + index.ts
  // 34 ComplexTypes + index.ts + parsable-datatype-map.ts
  // 12 Resources + index.ts + parsable-resource-map.ts + resource-types.ts
  assert(
    generatedContent.length === 77,
    `Generated content should have 77 data models, but has ${String(generatedContent.length)}.`,
  );
  generator.writeDataModelsToDisk(generatedContent);
}

void (async () => {
  await generateDataModels()
    .then(() => {
      console.log(
        `** Completed generating data models for '${testFhirPackage.pkgName}@${testFhirPackage.pkgVersion}'!`,
      );
    })
    .catch((err: unknown) => {
      console.error('failure', err);
    });
})();
