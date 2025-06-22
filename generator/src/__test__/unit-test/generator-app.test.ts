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
import { readdirSync, rmSync } from 'node:fs';
import * as os from 'node:os';
import { GeneratorApp } from '../../generator-app';
import { FhirPackage, GeneratedContent } from '../../generator-lib/ts-datamodel-generator-helpers';

describe('src/generator-app', () => {
  describe('generator-app using partial FHIR cache', () => {
    const testOut = resolve(__dirname, 'test-out', 'test-fhir-r4');
    const testOutCodeSystems = resolve(__dirname, 'test-out', 'test-fhir-r4', 'code-systems');
    const testOutComplexTypes = resolve(__dirname, 'test-out', 'test-fhir-r4', 'complex-types');
    const testOutResources = resolve(__dirname, 'test-out', 'test-fhir-r4', 'resources');
    const testFhirCacheRoot = resolve(__dirname, '..', 'test-cache');
    const testFhirPackage: FhirPackage = {
      release: 'R4',
      pkgName: 'test.fhir.r4',
      pkgVersion: '4.0.1',
      baseOutputPath: testOut,
      pkgLoaderCacheRootPath: testFhirCacheRoot,
    };

    beforeEach(() => {
      rmSync(testOut, { recursive: true, force: true });
    });

    it('should generate FHIR R4 artifacts from test cache', async () => {
      const generator = new GeneratorApp(testFhirPackage);
      const generatedContent: GeneratedContent[] = await generator.generate();
      expect(generatedContent).toBeDefined();
      // 10 CodeSystemEnums + index.ts
      // 14 ComplexTypes + index.ts + parsable-datatype-map.ts
      // 4 Resources + index.ts + parsable-resource-map.ts + resource-types.ts
      expect(generatedContent.length).toBe(34);
    });

    it('should generate and write all FHIR R4 artifacts from test cache', async () => {
      const generator = new GeneratorApp(testFhirPackage);
      const generatedContent: GeneratedContent[] = await generator.generate();
      expect(generatedContent).toBeDefined();
      // 10 CodeSystemEnums + index.ts
      // 14 ComplexTypes + index.ts + parsable-datatype-map.ts
      // 4 Resources + index.ts + parsable-resource-map.ts + resource-types.ts
      expect(generatedContent.length).toBe(34);

      generator.writeDataModelsToDisk(generatedContent);

      const testOutput: string[] = readdirSync(testOut);
      expect(testOutput).toBeDefined();
      expect(testOutput.length).toBe(5);
      const expectedOutput: string[] = ['base', 'code-systems', 'complex-types', 'index.ts', 'resources'];
      expect(testOutput).toEqual(expectedOutput);

      const testCodeSystems: string[] = readdirSync(testOutCodeSystems);
      expect(testCodeSystems).toBeDefined();
      expect(testCodeSystems.length).toBe(11);
      const expectedCodeSystems: string[] = [
        'AuditEventActionEnum.ts',
        'AuditEventOutcomeEnum.ts',
        'ConsentStateCodesEnum.ts',
        'ContributorTypeEnum.ts',
        'DaysOfWeekEnum.ts',
        'NarrativeStatusEnum.ts',
        'NetworkTypeEnum.ts',
        'QuantityComparatorEnum.ts',
        'TaskCodeEnum.ts',
        'TaskStatusEnum.ts',
        'index.ts',
      ];
      expect(testCodeSystems).toEqual(expectedCodeSystems);

      const testComplexTypes: string[] = readdirSync(testOutComplexTypes);
      expect(testComplexTypes).toBeDefined();
      expect(testComplexTypes.length).toBe(16);
      const expectedComplexTypes: string[] = [
        'Address.ts',
        'CodeableConcept.ts',
        'Coding.ts',
        'Dosage.ts',
        'Duration.ts',
        'HumanName.ts',
        'Identifier.ts',
        'Narrative.ts',
        'Period.ts',
        'Quantity.ts',
        'Range.ts',
        'Ratio.ts',
        'Reference.ts',
        'Timing.ts',
        'index.ts',
        'parsable-datatype-map.ts',
      ];
      expect(testComplexTypes).toEqual(expectedComplexTypes);

      const testResources: string[] = readdirSync(testOutResources);
      expect(testResources).toBeDefined();
      expect(testResources.length).toBe(7);
      const expectedResources: string[] = [
        'AuditEvent.ts',
        'Parameters.ts',
        'SimplePersonModel.ts',
        'TestDataModel.ts',
        'index.ts',
        'parsable-resource-map.ts',
        'resource-types.ts',
      ];
      expect(testResources).toEqual(expectedResources);
    });
  });

  describe('generator-app using full FHIR cache for debugging', () => {
    const testOut = resolve(__dirname, 'test-out', 'test-fhir-r4');
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
