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
import { FhirPackage, GeneratedContent, GeneratorApp } from 'generator';

describe('generator-datamodel-ftest Functional Test Suite', () => {
  const testOut = resolve(__dirname, '..', 'generated');
  const testOutCodeSystems = join(testOut, 'code-systems');
  const testOutComplexTypes = join(testOut, 'complex-types');
  const testOutResources = join(testOut, 'resources');
  const testFhirCacheRoot = resolve(__dirname, 'ftest-cache');
  const testFhirPackage: FhirPackage = {
    release: 'R4',
    pkgName: 'ftest.fhir.r4',
    pkgVersion: '4.0.1',
    baseOutputPath: testOut,
    pkgLoaderCacheRootPath: testFhirCacheRoot,
  };
  // 25 CodeSystemEnums
  // 1 ComplexTypes (single file with all complex types to resolve circular references)
  // 12 Resources + parsable-resource-map.ts
  const EXPECTED_NUM_GENERATED_MODELS = 39;

  describe('generator-app generate and write', () => {
    beforeAll(async () => {
      rmSync(testOut, { recursive: true, force: true });

      const generator = new GeneratorApp(testFhirPackage);
      const generatedContent: GeneratedContent[] = await generator.generate();
      expect(generatedContent).toBeDefined();
      expect(generatedContent.length).toBe(EXPECTED_NUM_GENERATED_MODELS);
      generator.writeDataModelsToDisk(generatedContent);
    });

    it('should generate and write all FHIR R4 artifacts from ftest-cache FHIR cache', () => {
      const testOutput: string[] = readdirSync(testOut);
      expect(testOutput).toBeDefined();
      expect(testOutput.length).toBe(4);
      const expectedOutput: string[] = ['code-systems', 'complex-types', 'index.ts', 'resources'];
      expect(testOutput).toEqual(expectedOutput);

      const testCodeSystems: string[] = readdirSync(testOutCodeSystems);
      expect(testCodeSystems).toBeDefined();
      expect(testCodeSystems.length).toBe(25);
      // NOTE: There should NOT be any Enum classes for certain cases such as:
      // - ValueSet http://hl7.org/fhir/ValueSet/all-languages (non-FHIR code system - http://tools.ietf.org/html/bcp47)
      // - ValueSet http://hl7.org/fhir/ValueSet/currencies (non-FHIR code system - https://www.iso.org/iso-4217-currency-codes.html)
      // - ValueSet http://hl7.org/fhir/ValueSet/event-timing (multiple code systems)
      // - ValueSet http://hl7.org/fhir/ValueSet/fhir-types (It is generated based on the information defined in this specification. The definition will remain fixed across versions, but the actual contents will change from version to version.)
      // - ValueSet http://hl7.org/fhir/ValueSet/mimetypes (non-FHIR code system - http://tools.ietf.org/html/bcp13)
      // - ValueSet http://hl7.org/fhir/ValueSet/ucum-units (non-FHIR code system - http://unitsofmeasure.org)
      // - ValueSet http://hl7.org/fhir/ValueSet/units-of-time (non-FHIR code system - http://unitsofmeasure.org)
      const expectedCodeSystems: string[] = [
        'AddressTypeEnum.ts',
        'AddressUseEnum.ts',
        'AdministrativeGenderEnum.ts',
        'ConsentStateCodesEnum.ts',
        'ContactPointSystemEnum.ts',
        'ContactPointUseEnum.ts',
        'ContributorTypeEnum.ts',
        'DaysOfWeekEnum.ts',
        'DeviceNametypeEnum.ts',
        'DeviceStatusEnum.ts',
        'EndpointStatusEnum.ts',
        'IdentifierUseEnum.ts',
        'LinkTypeEnum.ts',
        'LocationModeEnum.ts',
        'LocationStatusEnum.ts',
        'NameUseEnum.ts',
        'NarrativeStatusEnum.ts',
        'OperationParameterUseEnum.ts',
        'QuantityComparatorEnum.ts',
        'RelatedArtifactTypeEnum.ts',
        'SortDirectionEnum.ts',
        'TaskCodeEnum.ts',
        'TaskStatusEnum.ts',
        'TriggerTypeEnum.ts',
        'UdiEntryTypeEnum.ts',
      ];
      expect(testCodeSystems).toEqual(expectedCodeSystems);

      const testComplexTypes: string[] = readdirSync(testOutComplexTypes);
      expect(testComplexTypes).toBeDefined();
      expect(testComplexTypes.length).toBe(1);
      const expectedComplexTypes: string[] = ['complex-datatypes.ts'];
      expect(testComplexTypes).toEqual(expectedComplexTypes);

      const testResources: string[] = readdirSync(testOutResources);
      expect(testResources).toBeDefined();
      expect(testResources.length).toBe(13);
      const expectedResources: string[] = [
        'Device.ts',
        'DeviceDefinition.ts',
        'Endpoint.ts',
        'HealthcareService.ts',
        'Location.ts',
        'Organization.ts',
        'Patient.ts',
        'Practitioner.ts',
        'PractitionerRole.ts',
        'RelatedPerson.ts',
        'SimplePersonModel.ts',
        'TestDataModel.ts',
        'parsable-resource-map.ts',
      ];
      expect(testResources).toEqual(expectedResources);
    });
  });

  describe('generator-app verify generated content', () => {
    let generatedContent: GeneratedContent[];

    beforeAll(async () => {
      const generator = new GeneratorApp(testFhirPackage, true);
      generatedContent = await generator.generate();
      return expect(generatedContent).resolves;
    });

    it('should consistently create GeneratedContent[]', () => {
      expect(generatedContent).toBeDefined();
      expect(generatedContent.length).toBe(EXPECTED_NUM_GENERATED_MODELS);

      generatedContent.forEach((generatedContentItem: GeneratedContent) => {
        expect(generatedContentItem).toBeDefined();
        expect(generatedContentItem).toMatchSnapshot();
      });
    });
  });
});
