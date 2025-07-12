// noinspection JSValidateJSDoc

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
import * as os from 'node:os';
import { join, resolve } from 'node:path';
import { emptyDirSync, ensureDirSync, outputFileSync } from 'fs-extra';
import { TypescriptDataModelGenerator } from './typescript-datamodel-generator';
import {
  FhirPackage,
  GeneratedContent,
  generateLicenseContent,
  generateModuleContent,
} from './generator-lib/ts-datamodel-generator-helpers';

/**
 * Represents the main application class responsible for generating and managing FHIR-based TypeScript data models.
 */
export class GeneratorApp {
  private readonly _fhirPackage: FhirPackage;
  private readonly tsGenerator: TypescriptDataModelGenerator;

  constructor(fhirPackage: FhirPackage, debug = false) {
    assert(fhirPackage, 'fhirPackage is required.');

    this._fhirPackage = fhirPackage;
    this.tsGenerator = new TypescriptDataModelGenerator(fhirPackage, debug);
  }

  /**
   * Asynchronously generates content based on the initialized TypeScript generator.
   *
   * @remarks
   * The method initializes the TypeScript generator, generates FHIR CodeSystem Enum classes,
   * and returns an array containing the generated content.
   *
   * @returns {Promise<GeneratedContent[]>} A promise that resolves to an array of generated content.
   */
  public async generate(): Promise<GeneratedContent[]> {
    await this.tsGenerator.initialize();

    const generatedContent: GeneratedContent[] = [];

    // Generate the FHIR CodeSystem Enum classes
    const codeSystemEnumClasses = this.tsGenerator.generateCodeSystemEnumClasses();
    generatedContent.push(...codeSystemEnumClasses.generatedContent);

    // Generate the FHIR ComplexType classes
    const complexTypeClasses: GeneratedContent[] = this.tsGenerator.generateComplexTypeClasses(
      codeSystemEnumClasses.codeSystemEnumMap,
    );
    generatedContent.push(...complexTypeClasses);

    // Generate the FHIR Resource classes
    const resourceClasses: GeneratedContent[] = this.tsGenerator.generateResourceClasses(
      codeSystemEnumClasses.codeSystemEnumMap,
    );
    generatedContent.push(...resourceClasses);

    return generatedContent;
  }

  /**
   * Writes the provided generated data models to disk at the specified output path.
   *
   * @remarks
   * This method ensures the output directory is prepared and creates all necessary subdirectories for the files.
   * It writes the file contents to disk and generates a barrel file (index.ts) for exports.
   *
   * @param {GeneratedContent[]} generatedContent - A list of generated content models containing filenames,
   * file extensions, and file content that needs to be written to disk.
   */
  public writeDataModelsToDisk(generatedContent: GeneratedContent[]): void {
    assert(generatedContent.length > 0, `GeneratorApp.writeDataModelsToDisk:: generatedContent is empty.`);
    assert(
      this._fhirPackage.baseOutputPath,
      `GeneratorApp.writeDataModelsToDisk:: fhirPackage.baseOutputPath is undefined.`,
    );

    const baseOutputPath = resolve(this._fhirPackage.baseOutputPath);

    DESTINATION_SUB_DIRECTORY_MAP.values().forEach((value) => {
      const generatedPath = join(baseOutputPath, value);
      emptyDirSync(generatedPath);
    });

    const barrelLines: Set<string> = new Set<string>();
    barrelLines.add(`export { Resource, DomainResource } from '@paq-ts-fhir/fhir-core';`);

    generatedContent.forEach((content) => {
      /* istanbul ignore next */
      const filename = content.fileExtension ? `${content.filename}.${content.fileExtension}` : content.filename;
      const destDir: string | undefined = DESTINATION_SUB_DIRECTORY_MAP.get(content.fhirType);
      assert(destDir, `GeneratorApp.writeDataModelsToDisk:: Unknown FHIR type: ${content.fhirType}`);
      const filesOutputPath = join(baseOutputPath, destDir);

      try {
        ensureDirSync(filesOutputPath);
        const fullFileName = join(filesOutputPath, filename);

        // Default writeFile option:
        // 'w' - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
        outputFileSync(fullFileName, content.fileContents);

        const barrelLine = `export * from './${destDir}/${content.filename}';`;
        barrelLines.add(barrelLine);
      } catch (err) {
        /* istanbul ignore next */
        throw new Error(`Generator.writeArtifactsToDisk:: Error writing artifacts to disk in ${filesOutputPath}.`, {
          cause: err,
        });
      }
    });

    const fileLines: string[] = [
      ...generateLicenseContent(),
      '',
      ...generateModuleContent(`index.ts`),
      '',
      ...Array.from(barrelLines).sort(),
    ];
    const barrelOutputPath = resolve(baseOutputPath, 'index.ts');
    outputFileSync(barrelOutputPath, fileLines.join(os.EOL).concat(os.EOL));
  }
}

/**
 * A map that defines the subdirectory structure for various destination types.
 * The keys represent the destination types, and the values correspond to the
 * respective subdirectory names where those types should be stored.
 *
 * Key-value pairs:
 * - 'CodeSystem': Maps to the 'code-systems' subdirectory.
 * - 'ComplexType': Maps to the 'complex-types' subdirectory.
 * - 'Resource': Maps to the 'resources' subdirectory.
 *
 * Designed to facilitate organized storage of content types in corresponding
 * subdirectories.
 *
 * @type {Map<string, string>}
 */
const DESTINATION_SUB_DIRECTORY_MAP: Map<string, string> = new Map<string, string>([
  ['Base', 'base'],
  ['CodeSystem', 'code-systems'],
  ['ComplexType', 'complex-types'],
  ['Resource', 'resources'],
]);
