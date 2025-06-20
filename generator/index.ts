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
import { GeneratorApp } from './src/generator-app';
import {
  FhirRelease,
  GeneratedContent,
  generatorLogger,
  getFhirPackage,
} from './src/generator-lib/ts-datamodel-generator-helpers';

/**
 * The main function orchestrates the FHIR data model generation process.
 * It initializes the generator with the appropriate FHIR package, generates the data models,
 * logs information about the process, and writes the models to disk.
 *
 * @returns {Promise<void>} A promise that resolves when the generation and writing processes are complete.
 */
async function main(): Promise<void> {
  const cliArgs = process.argv;
  const fhirRelease = cliArgs[2] as FhirRelease;
  generatorLogger('info', `Generating data models for FHIR ${fhirRelease} release...`);

  const fhirPackage = getFhirPackage(fhirRelease);
  const generator: GeneratorApp = new GeneratorApp(fhirPackage);
  const generatedContent: GeneratedContent[] = await generator.generate();
  generatorLogger(
    'info',
    `Generated a total of ${String(generatedContent.length)} data models and support files for FHIR ${fhirRelease} release using ${fhirPackage.pkgName}@${fhirPackage.pkgVersion}`,
  );
  generator.writeDataModelsToDisk(generatedContent);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  generatorLogger('info', `FHIR data models written to ${resolve(fhirPackage.baseOutputPath!)}`);
}

main().catch((error: unknown) => {
  console.error('Error:', error);
  process.exit(1);
});
