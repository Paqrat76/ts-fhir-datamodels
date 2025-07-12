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
import { rmSync } from 'node:fs';
import { GeneratorApp } from '../src';
import {
  FhirPackage,
  FhirRelease,
  GeneratedContent,
  generatorLogger,
  getFhirPackage,
} from '../src/generator-lib/ts-datamodel-generator-helpers';

/**
 * Generates data models and supporting files for a specified FHIR release.
 * The function retrieves the appropriate FHIR package, initializes the generator,
 * creates the data models, and writes them to disk.
 *
 * @returns {Promise<void>} A promise that resolves when the data models and supporting files
 * have been successfully generated and written to disk.
 */
async function generateDataModels(): Promise<void> {
  const cliArgs = process.argv;
  const fhirRelease = cliArgs[2] as FhirRelease;

  const fhirPackage: FhirPackage = getFhirPackage(fhirRelease);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const outputPath = resolve(fhirPackage.baseOutputPath!);

  generatorLogger('info', `Clearing '${outputPath}' before generating data models for FHIR ${fhirRelease} release...`);
  rmSync(outputPath, { recursive: true, force: true });

  generatorLogger('info', `Generating data models for FHIR ${fhirRelease} release...`);
  const generator: GeneratorApp = new GeneratorApp(fhirPackage);
  const generatedContent: GeneratedContent[] = await generator.generate();
  generatorLogger(
    'info',
    `Generated a total of ${String(generatedContent.length)} data models and support files for FHIR ${fhirRelease} release using ${fhirPackage.pkgName}@${fhirPackage.pkgVersion}`,
  );
  generator.writeDataModelsToDisk(generatedContent);
  generatorLogger('info', `FHIR ${fhirRelease} data models written to ${outputPath}`);
}

void (async () => {
  await generateDataModels().catch((err: unknown) => {
    console.error('Failure', err);
    process.exit(1);
  });
})();
