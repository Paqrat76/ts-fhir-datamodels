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
import { FhirPackage, GeneratorApp, GeneratedContent, generatorLogger } from 'generator';

const outputPath = resolve(__dirname, '..', 'src');
const testFhirCacheRoot = resolve(__dirname, '..', 'test', 'ftest-cache');

const testFhirPackage: FhirPackage = {
  release: 'R4',
  pkgName: 'ftest.fhir.r4',
  pkgVersion: '4.0.1',
  baseOutputPath: outputPath,
  pkgLoaderCacheRootPath: testFhirCacheRoot,
  isFunctionalTest: true,
};

/**
 * Generates FHIR data models based on the provided FHIR package and writes them to disk.
 * This includes generating enumerations, complex types, and resources from the package.
 *
 * @returns {Promise<void>} Resolves when data models are generated and written to disk.
 * Throws an error if generated content is invalid or incomplete.
 */
async function generateFunctionalTestDataModels(): Promise<void> {
  generatorLogger('info', `Clearing '${outputPath}' before generating functional test data models...`);
  rmSync(outputPath, { recursive: true, force: true });

  generatorLogger('info', `Generating functional test data models using '.fhir' from '${testFhirCacheRoot}'...`);
  const generator = new GeneratorApp(testFhirPackage);
  const generatedContent: GeneratedContent[] = await generator.generate();
  assert(generatedContent, `Generated content is null or undefined.`);
  // 28 CodeSystemEnums
  // 1 ComplexTypes
  // 13 Resources plus parsable-resource-map base
  // index.ts
  assert(
    generatedContent.length === 43,
    `Generated content should have 74 data models, but has ${String(generatedContent.length)}.`,
  );
  generatorLogger(
    'info',
    `Generated a total of ${String(generatedContent.length)} functional test data models and support files using ${testFhirPackage.pkgName}@${testFhirPackage.pkgVersion}`,
  );
  generator.writeDataModelsToDisk(generatedContent);
  generatorLogger('info', `Functional test data models written to ${outputPath}`);
}

void (async () => {
  await generateFunctionalTestDataModels()
    .then(() => {
      console.log(
        `** Completed generating functional test data models for '${testFhirPackage.pkgName}@${testFhirPackage.pkgVersion}'!`,
      );
    })
    .catch((err: unknown) => {
      console.error('Failure', err);
      process.exit(1);
    });
})();
