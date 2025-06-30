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
import { readdirSync, rmSync } from 'node:fs';
import * as os from 'node:os';
import { GeneratorApp } from '../../generator-app';
import { FhirPackage, GeneratedContent } from '../../generator-lib/ts-datamodel-generator-helpers';

describe('src/generator-app unit test suite', () => {
  const testOut = resolve(__dirname, 'test-out');
  const testOutBase = join(testOut, 'base');
  const testOutCodeSystems = join(testOut, 'code-systems');
  const testOutComplexTypes = join(testOut, 'complex-types');
  const testOutResources = join(testOut, 'resources');
  const testFhirCacheRoot = resolve(__dirname, 'utest-cache');
  const testFhirPackage: FhirPackage = {
    release: 'R4',
    pkgName: 'utest.fhir.r4',
    pkgVersion: '4.0.1',
    baseOutputPath: testOut,
    pkgLoaderCacheRootPath: testFhirCacheRoot,
  };

  describe('generator-app generate and write', () => {
    beforeAll(async () => {
      rmSync(testOut, { recursive: true, force: true });

      const generator = new GeneratorApp(testFhirPackage);
      const generatedContent: GeneratedContent[] = await generator.generate();
      expect(generatedContent).toBeDefined();
      // 13 CodeSystemEnums + index.ts
      // 11 ComplexTypes + index.ts + parsable-datatype-map.ts
      // 3 Resources + index.ts + parsable-resource-map.ts + resource-types.ts
      expect(generatedContent.length).toBe(33);
      generator.writeDataModelsToDisk(generatedContent);
    });

    it('should generate and write all FHIR R4 artifacts from utest-cache FHIR cache', () => {
      const testOutput: string[] = readdirSync(testOut);
      expect(testOutput).toBeDefined();
      expect(testOutput.length).toBe(5);
      const expectedOutput: string[] = ['base', 'code-systems', 'complex-types', 'index.ts', 'resources'];
      expect(testOutput).toEqual(expectedOutput);

      const testBase: string[] = readdirSync(testOutBase);
      expect(testBase).toBeDefined();
      expect(testBase.length).toBe(8);
      const expectedBase: string[] = [
        'DomainResource.ts',
        'Extension.ts',
        'FhirResourceParser.ts',
        'FhirResourceType.ts',
        'README-base.md',
        'Resource.ts',
        'index.ts',
        'resource-helpers.ts',
      ];
      expect(testBase).toEqual(expectedBase);

      const testCodeSystems: string[] = readdirSync(testOutCodeSystems);
      expect(testCodeSystems).toBeDefined();
      expect(testCodeSystems.length).toBe(14);
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
        'index.ts',
      ];
      expect(testCodeSystems).toEqual(expectedCodeSystems);

      const testComplexTypes: string[] = readdirSync(testOutComplexTypes);
      expect(testComplexTypes).toBeDefined();
      expect(testComplexTypes.length).toBe(13);
      const expectedComplexTypes: string[] = [
        'CodeableConcept.ts',
        'Coding.ts',
        'ContactPoint.ts',
        'Duration.ts',
        'Identifier.ts',
        'Meta.ts',
        'Narrative.ts',
        'Period.ts',
        'Reference.ts',
        'Signature.ts',
        'Timing.ts',
        'index.ts',
        'parsable-datatype-map.ts',
      ];
      expect(testComplexTypes).toEqual(expectedComplexTypes);

      const testResources: string[] = readdirSync(testOutResources);
      expect(testResources).toBeDefined();
      expect(testResources.length).toBe(6);
      const expectedResources: string[] = [
        'Bundle.ts',
        'PractitionerRole.ts',
        'SearchParameter.ts',
        'index.ts',
        'parsable-resource-map.ts',
        'resource-types.ts',
      ];
      expect(testResources).toEqual(expectedResources);
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
      // 13 CodeSystemEnums + index.ts
      // 11 ComplexTypes + index.ts + parsable-datatype-map.ts
      // 3 Resources + index.ts + parsable-resource-map.ts + resource-types.ts
      expect(generatedContent.length).toBe(33);

      generatedContent.forEach((generatedContentItem: GeneratedContent) => {
        expect(generatedContentItem).toBeDefined();
        expect(generatedContentItem).toMatchSnapshot();
      });
    });
  });

  describe('generator-app using full FHIR cache for debugging', () => {
    const testOut = resolve(__dirname, 'test-out');
    const testFhirPackage: FhirPackage = {
      release: 'R4',
      pkgName: 'hl7.fhir.r4.core',
      pkgVersion: '4.0.1',
      baseOutputPath: testOut,
      pkgLoaderCacheRootPath: os.homedir(),
    };

    it.skip('should generate data models for debugging', async () => {
      const generator = new GeneratorApp(testFhirPackage);
      // Add conditional breakpoints in generator code as needed
      const generatedContent: GeneratedContent[] = await generator.generate();
      expect(generatedContent).toBeDefined();
    });
  });
});
