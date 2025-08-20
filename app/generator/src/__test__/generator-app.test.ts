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

import { join, resolve } from 'node:path';
import { readdirSync, readFileSync, rmSync } from 'node:fs';
import { GeneratorApp } from '../generator-app';
import { FhirPackage, GeneratedContent } from '../generator-lib/ts-datamodel-generator-helpers';

describe('src/generator-app unit test suite', () => {
  const testOut = resolve(__dirname, 'test-out');
  const testOutIndex = resolve(__dirname, 'test-out', 'index.ts');
  const testOutCodeSystems = join(testOut, 'code-systems');
  const testOutComplexTypes = join(testOut, 'complex-types');
  const testOutResources = join(testOut, 'resources');
  const testFhirCacheRoot = resolve(__dirname, 'utest-cache');
  // While this is a unit test, set `isFunctionalTest` to `true` for testing purposes
  const testFhirPackage: FhirPackage = {
    release: 'R4',
    pkgName: 'utest.fhir.r4',
    pkgVersion: '4.0.1',
    baseOutputPath: testOut,
    pkgLoaderCacheRootPath: testFhirCacheRoot,
    isFunctionalTest: true,
  };

  describe('generator-app generate and write', () => {
    beforeAll(async () => {
      rmSync(testOut, { recursive: true, force: true });

      const generator = new GeneratorApp(testFhirPackage);
      const generatedContent: GeneratedContent[] = await generator.generate();
      expect(generatedContent).toBeDefined();
      // 13 CodeSystemEnums
      // 1 ComplexTypes including its parsable-datatype-map
      // 4 Resources and parsable-resource-map
      expect(generatedContent.length).toBe(18);
      generator.writeDataModelsToDisk(generatedContent);
    });

    it('should generate and write all FHIR R4 artifacts from utest-cache FHIR cache', () => {
      const testOutput: string[] = readdirSync(testOut);
      expect(testOutput).toBeDefined();
      expect(testOutput.length).toBe(4);
      const expectedOutput: string[] = ['code-systems', 'complex-types', 'index.ts', 'resources'];
      expect(testOutput).toEqual(expectedOutput);

      const testCodeSystems: string[] = readdirSync(testOutCodeSystems);
      expect(testCodeSystems).toBeDefined();
      expect(testCodeSystems.length).toBe(13);
      const expectedCodeSystems: string[] = [
        'BundleTypeEnum.ts',
        'ContactPointSystemEnum.ts',
        'ContactPointUseEnum.ts',
        'DaysOfWeekEnum.ts',
        'HttpVerbEnum.ts',
        'IdentifierUseEnum.ts',
        'NarrativeStatusEnum.ts',
        'PublicationStatusEnum.ts',
        'ResourceTypesEnum.ts',
        'SearchComparatorEnum.ts',
        'SearchEntryModeEnum.ts',
        'SearchModifierCodeEnum.ts',
        'SearchParamTypeEnum.ts',
        //'index.ts',
      ];
      expect(testCodeSystems).toEqual(expectedCodeSystems);

      const testComplexTypes: string[] = readdirSync(testOutComplexTypes);
      expect(testComplexTypes).toBeDefined();
      expect(testComplexTypes.length).toBe(1);
      const expectedComplexTypes: string[] = ['complex-datatypes.ts'];
      expect(testComplexTypes).toEqual(expectedComplexTypes);

      const testResources: string[] = readdirSync(testOutResources);
      expect(testResources).toBeDefined();
      expect(testResources.length).toBe(4);
      const expectedResources: string[] = [
        'Bundle.ts',
        'PractitionerRole.ts',
        'SearchParameter.ts',
        'parsable-resource-map.ts',
      ];
      expect(testResources).toEqual(expectedResources);

      expect(testOutIndex).toBeDefined();
      const indexFile = readFileSync(testOutIndex, 'utf8');
      expect(indexFile).toBeDefined();
      expect(indexFile).toMatchSnapshot();
    });
  });

  describe('generator-app verify generated content', () => {
    let generatedContent: GeneratedContent[];

    beforeAll(async () => {
      const generator = new GeneratorApp(testFhirPackage);
      generatedContent = await generator.generate();
      return expect(generatedContent).resolves;
    });

    it('should consistently create GeneratedContent[]', () => {
      // 13 CodeSystemEnums
      // 1 ComplexTypes
      // 4 Resources
      expect(generatedContent.length).toBe(18);

      generatedContent.forEach((generatedContentItem: GeneratedContent) => {
        expect(generatedContentItem).toBeDefined();
        expect(generatedContentItem).toMatchSnapshot();
      });
    });
  });

  // Uncomment to debug the generator against a full FHIR cache
  // describe('generator-app using full FHIR cache for debugging', () => {
  //   const testOut = resolve(__dirname, 'test-out');
  //   const testFhirPackage: FhirPackage = {
  //     release: 'R4',
  //     pkgName: 'hl7.fhir.r4.core',
  //     pkgVersion: '4.0.1',
  //     baseOutputPath: testOut,
  //     pkgLoaderCacheRootPath: os.homedir(),
  //   };
  //
  //   it.skip('should generate data models for debugging', async () => {
  //     const generator = new GeneratorApp(testFhirPackage);
  //     // Add conditional breakpoints in generator code as needed
  //     const generatedContent: GeneratedContent[] = await generator.generate();
  //     expect(generatedContent).toBeDefined();
  //   });
  // });
});
