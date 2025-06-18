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
import { FhirPackage } from '../../../generator-lib/ts-datamodel-generator-helpers';
import { BasePackageLoader, FindResourceInfoOptions } from 'fhir-package-loader';
import { getGeneratorPackageLoader } from '../../test-utils';
import { StructureDefinition } from '../../../generator-lib/fhir-artifact-interfaces';
import { getSdHbsProperties, HbsStructureDefinition } from '../../../generator-lib/templates/utils-hbs';
import { TypescriptDataModelGenerator } from '../../../typescript-datamodel-generator';

describe('src/generator-lib/templates/utils-hbs', () => {
  describe('getSdHbsProperties', () => {
    const testFhirCacheRoot = resolve(__dirname, '../..', 'test-cache');

    let testFhirPackage: FhirPackage;
    let packageLoader: BasePackageLoader;
    let tsDataModelGenerator: TypescriptDataModelGenerator;
    let packageStructureDefinitions: StructureDefinition[];

    beforeAll(async () => {
      testFhirPackage = {
        release: 'R4',
        pkgName: 'test.fhir.r4',
        pkgVersion: '4.0.1',
        pkgLoaderCacheRootPath: testFhirCacheRoot,
      };
      packageLoader = await getGeneratorPackageLoader(testFhirPackage);
      tsDataModelGenerator = new TypescriptDataModelGenerator(testFhirPackage);
      await tsDataModelGenerator.initialize();
      const options: FindResourceInfoOptions = { type: ['Type'] };
      packageStructureDefinitions = packageLoader.findResourceJSONs('*', options) as StructureDefinition[];
    });

    it.skip('should return the correct properties for StructureDefinition-DataRequirement', () => {
      const options: FindResourceInfoOptions = { type: ['Type'] };
      const dataRequirementStructureDefinition = packageLoader.findResourceJSON(
        'DataRequirement',
        options,
      ) as StructureDefinition;
      const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

      const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
        dataRequirementStructureDefinition,
        result.codeSystemEnumMap,
        testFhirPackage,
      );
      expect(sdHbsProperties).toBeDefined();
    });

    it.skip('should return the correct properties for StructureDefinition-Identifier', () => {
      const options: FindResourceInfoOptions = { type: ['Type'] };
      const identifierStructureDefinition = packageLoader.findResourceJSON(
        'Identifier',
        options,
      ) as StructureDefinition;
      const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

      const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
        identifierStructureDefinition,
        result.codeSystemEnumMap,
        testFhirPackage,
      );
      expect(sdHbsProperties).toBeDefined();
    });

    it('should return the correct properties for StructureDefinition-Narrative', () => {
      const options: FindResourceInfoOptions = { type: ['Type'] };
      const narrativeStructureDefinition = packageLoader.findResourceJSON('Narrative', options) as StructureDefinition;
      const result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(packageStructureDefinitions);

      const sdHbsProperties: HbsStructureDefinition = getSdHbsProperties(
        narrativeStructureDefinition,
        result.codeSystemEnumMap,
        testFhirPackage,
      );
      expect(sdHbsProperties).toBeDefined();
    });
  });
});
