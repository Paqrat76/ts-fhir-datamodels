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

import * as os from 'node:os';
import { TypescriptDataModelGenerator } from '../typescript-datamodel-generator';
import { CodeSystem, StructureDefinition } from '../generator-lib/fhir-artifact-interfaces';
import { FhirPackage, getFhirPackage } from '../generator-lib/ts-datamodel-generator-helpers';

describe('src/typescript-datamodel-generator', () => {
  describe('FHIR R4', () => {
    const FHIR_PACKAGE_R4: FhirPackage = getFhirPackage('R4');

    it('should be defined and properly initialized for FHIR R4', async () => {
      const expectedFhirPackage = {
        release: 'R4',
        pkgName: 'hl7.fhir.r4.core',
        pkgVersion: '4.0.1',
        baseOutputPath: 'packages/r4-datamodels/src',
        pkgLoaderCacheRootPath: os.homedir(),
      } as FhirPackage;

      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R4);
      expect(tsDataModelGenerator).toBeDefined();

      const fhirPackage: FhirPackage = tsDataModelGenerator.fhirPackage;
      expect(fhirPackage).toBeDefined();
      expect(fhirPackage).toEqual(expectedFhirPackage);

      await tsDataModelGenerator.initialize();

      const resources: StructureDefinition[] = tsDataModelGenerator.getResources();
      expect(resources).toBeDefined();
      expect(resources).toHaveLength(146);

      const abstractResources = resources.filter((sd) => sd.abstract);
      expect(abstractResources).toBeDefined();
      expect(abstractResources).toHaveLength(0);

      const complexTypes: StructureDefinition[] = tsDataModelGenerator.getComplexTypes();
      expect(complexTypes).toBeDefined();
      expect(complexTypes).toHaveLength(39);

      const abstractComplexTypes: StructureDefinition[] = complexTypes.filter((sd) => sd.abstract);
      expect(abstractComplexTypes).toBeDefined();
      expect(abstractComplexTypes).toHaveLength(0);

      const otherTypes: StructureDefinition[] = complexTypes.filter((sd) => sd.kind !== 'complex-type');
      expect(otherTypes).toBeDefined();
      expect(otherTypes).toHaveLength(0);
    });

    it('should return the CodeSystem for the provided ElementDefinition.binding.valueSet for FHIR R4', async () => {
      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R4);
      expect(tsDataModelGenerator).toBeDefined();

      await tsDataModelGenerator.initialize();

      // From http://hl7.org/fhir/StructureDefinition/Narrative,
      // the ElementDefinition.binding.valueSet = "http://hl7.org/fhir/ValueSet/narrative-status|4.0.1"

      // Test with a version
      let bindingValueSetUrl = 'http://hl7.org/fhir/ValueSet/narrative-status|4.0.1';
      let codeSystem: CodeSystem | undefined =
        tsDataModelGenerator.getCodeSystemFromBindingValueSetUrl(bindingValueSetUrl);
      expect(codeSystem).toBeDefined();

      // Test without a version
      bindingValueSetUrl = 'http://hl7.org/fhir/ValueSet/narrative-status';
      codeSystem = tsDataModelGenerator.getCodeSystemFromBindingValueSetUrl(bindingValueSetUrl);
      expect(codeSystem).toBeDefined();
    });

    it('should return undefined from an invalid provided ElementDefinition.binding.valueSet for FHIR R4', async () => {
      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R4);
      expect(tsDataModelGenerator).toBeDefined();

      await tsDataModelGenerator.initialize();

      const bindingValueSetUrl = 'invalidUrl';
      const codeSystem: CodeSystem | undefined =
        tsDataModelGenerator.getCodeSystemFromBindingValueSetUrl(bindingValueSetUrl);
      expect(codeSystem).toBeUndefined();
    });

    it('should return Map of CodeSystems for the provided StructureDefinitions for FHIR R4', async () => {
      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R4);
      expect(tsDataModelGenerator).toBeDefined();

      await tsDataModelGenerator.initialize();

      const complexTypes: StructureDefinition[] = tsDataModelGenerator.getComplexTypes();
      expect(complexTypes).toBeDefined();
      expect(complexTypes).toHaveLength(39);

      let result: { codeSystems: CodeSystem[]; codeSystemEnumMap: ReadonlyMap<string, string> } =
        tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(complexTypes);
      expect(result.codeSystems).toBeDefined();
      expect(result.codeSystems.length).toStrictEqual(21);
      expect(result.codeSystemEnumMap).toBeDefined();
      // result.codeSystemEnumMap.size >= result.codeSystems.length due to CodeSystem re-use across StructureDefinitions
      expect(result.codeSystemEnumMap.size).toStrictEqual(25);

      const resources: StructureDefinition[] = tsDataModelGenerator.getResources();
      expect(resources).toBeDefined();
      expect(resources).toHaveLength(146);

      result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(resources);
      expect(result.codeSystems).toBeDefined();
      expect(result.codeSystems.length).toStrictEqual(182);
      expect(result.codeSystemEnumMap).toBeDefined();
      // result.codeSystemEnumMap.size >= result.codeSystems.length due to CodeSystem re-use across StructureDefinitions
      expect(result.codeSystemEnumMap.size).toStrictEqual(305);
    });
  });

  describe('FHIR R4B', () => {
    const FHIR_PACKAGE_R4B: FhirPackage = getFhirPackage('R4B');

    it('should be defined and properly initialized for FHIR R4B', async () => {
      const expectedFhirPackage = {
        release: 'R4B',
        pkgName: 'hl7.fhir.r4b.core',
        pkgVersion: '4.3.0',
        pkgLoaderCacheRootPath: os.homedir(),
      } as FhirPackage;

      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R4B);
      expect(tsDataModelGenerator).toBeDefined();

      const fhirPackage: FhirPackage = tsDataModelGenerator.fhirPackage;
      expect(fhirPackage).toBeDefined();
      expect(fhirPackage).toEqual(expectedFhirPackage);

      await tsDataModelGenerator.initialize();

      const resources: StructureDefinition[] = tsDataModelGenerator.getResources();
      expect(resources).toBeDefined();
      expect(resources).toHaveLength(141);

      const abstractResources = resources.filter((sd) => sd.abstract);
      expect(abstractResources).toBeDefined();
      expect(abstractResources).toHaveLength(0);

      const complexTypes: StructureDefinition[] = tsDataModelGenerator.getComplexTypes();
      expect(complexTypes).toBeDefined();
      expect(complexTypes).toHaveLength(40);

      const abstractComplexTypes: StructureDefinition[] = complexTypes.filter((sd) => sd.abstract);
      expect(abstractComplexTypes).toBeDefined();
      expect(abstractComplexTypes).toHaveLength(0);

      const otherTypes: StructureDefinition[] = complexTypes.filter((sd) => sd.kind !== 'complex-type');
      expect(otherTypes).toBeDefined();
      expect(otherTypes).toHaveLength(0);
    });

    it('should return the CodeSystem for the provided ElementDefinition.binding.valueSet for FHIR R4B', async () => {
      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R4B);
      expect(tsDataModelGenerator).toBeDefined();

      await tsDataModelGenerator.initialize();

      // From http://hl7.org/fhir/StructureDefinition/Narrative,
      // the ElementDefinition.binding.valueSet = "http://hl7.org/fhir/ValueSet/narrative-status|4.3.0"

      // Test with a version
      let bindingValueSetUrl = 'http://hl7.org/fhir/ValueSet/narrative-status|4.3.0';
      let codeSystem: CodeSystem | undefined =
        tsDataModelGenerator.getCodeSystemFromBindingValueSetUrl(bindingValueSetUrl);
      expect(codeSystem).toBeDefined();

      // Test without a version
      bindingValueSetUrl = 'http://hl7.org/fhir/ValueSet/narrative-status';
      codeSystem = tsDataModelGenerator.getCodeSystemFromBindingValueSetUrl(bindingValueSetUrl);
      expect(codeSystem).toBeDefined();
    });

    it('should return undefined from an invalid provided ElementDefinition.binding.valueSet for FHIR R4B', async () => {
      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R4B);
      expect(tsDataModelGenerator).toBeDefined();

      await tsDataModelGenerator.initialize();

      const bindingValueSetUrl = 'invalidUrl';
      const codeSystem: CodeSystem | undefined =
        tsDataModelGenerator.getCodeSystemFromBindingValueSetUrl(bindingValueSetUrl);
      expect(codeSystem).toBeUndefined();
    });

    it('should return Map of CodeSystems for the provided StructureDefinitions for FHIR R4B', async () => {
      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R4B);
      expect(tsDataModelGenerator).toBeDefined();

      await tsDataModelGenerator.initialize();

      const complexTypes: StructureDefinition[] = tsDataModelGenerator.getComplexTypes();
      expect(complexTypes).toBeDefined();
      expect(complexTypes).toHaveLength(40);

      let result: { codeSystems: CodeSystem[]; codeSystemEnumMap: ReadonlyMap<string, string> } =
        tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(complexTypes);
      expect(result.codeSystems).toBeDefined();
      expect(result.codeSystems.length).toStrictEqual(21);
      expect(result.codeSystemEnumMap).toBeDefined();
      // result.codeSystemEnumMap.size >= result.codeSystems.length due to CodeSystem re-use across StructureDefinitions
      expect(result.codeSystemEnumMap.size).toStrictEqual(25);

      const resources: StructureDefinition[] = tsDataModelGenerator.getResources();
      expect(resources).toBeDefined();
      expect(resources).toHaveLength(141);

      result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(resources);
      expect(result.codeSystems).toBeDefined();
      expect(result.codeSystems.length).toStrictEqual(189);
      expect(result.codeSystemEnumMap).toBeDefined();
      // result.codeSystemEnumMap.size >= result.codeSystems.length due to CodeSystem re-use across StructureDefinitions
      expect(result.codeSystemEnumMap.size).toStrictEqual(320);
    });
  });

  describe('FHIR R5', () => {
    const FHIR_PACKAGE_R5: FhirPackage = getFhirPackage('R5');

    it('should be defined and properly initialized for FHIR R5', async () => {
      const expectedFhirPackage = {
        release: 'R5',
        pkgName: 'hl7.fhir.r5.core',
        pkgVersion: '5.0.0',
        pkgLoaderCacheRootPath: os.homedir(),
      } as FhirPackage;

      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R5);
      expect(tsDataModelGenerator).toBeDefined();

      const fhirPackage: FhirPackage = tsDataModelGenerator.fhirPackage;
      expect(fhirPackage).toBeDefined();
      expect(fhirPackage).toEqual(expectedFhirPackage);

      await tsDataModelGenerator.initialize();

      const resources: StructureDefinition[] = tsDataModelGenerator.getResources();
      expect(resources).toBeDefined();
      expect(resources).toHaveLength(158);

      const complexTypes: StructureDefinition[] = tsDataModelGenerator.getComplexTypes();
      expect(complexTypes).toBeDefined();
      expect(complexTypes).toHaveLength(41);

      const abstractComplexTypes: StructureDefinition[] = complexTypes.filter((sd) => sd.abstract);
      expect(abstractComplexTypes).toBeDefined();
      expect(abstractComplexTypes).toHaveLength(0);

      const otherTypes: StructureDefinition[] = complexTypes.filter((sd) => sd.kind !== 'complex-type');
      expect(otherTypes).toBeDefined();
      expect(otherTypes).toHaveLength(0);
    });

    it('should return the CodeSystem for the provided ElementDefinition.binding.valueSet for FHIR R5', async () => {
      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R5);
      expect(tsDataModelGenerator).toBeDefined();

      await tsDataModelGenerator.initialize();

      // From http://hl7.org/fhir/StructureDefinition/Narrative,
      // the ElementDefinition.binding.valueSet = "http://hl7.org/fhir/ValueSet/narrative-status|5.0.0"

      // Test with a version
      let bindingValueSetUrl = 'http://hl7.org/fhir/ValueSet/narrative-status|5.0.0';
      let codeSystem: CodeSystem | undefined =
        tsDataModelGenerator.getCodeSystemFromBindingValueSetUrl(bindingValueSetUrl);
      expect(codeSystem).toBeDefined();

      // Test without a version
      bindingValueSetUrl = 'http://hl7.org/fhir/ValueSet/narrative-status';
      codeSystem = tsDataModelGenerator.getCodeSystemFromBindingValueSetUrl(bindingValueSetUrl);
      expect(codeSystem).toBeDefined();
    });

    it('should return undefined from an invalid provided ElementDefinition.binding.valueSet for FHIR R5', async () => {
      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R5);
      expect(tsDataModelGenerator).toBeDefined();

      await tsDataModelGenerator.initialize();

      const bindingValueSetUrl = 'invalidUrl';
      const codeSystem: CodeSystem | undefined =
        tsDataModelGenerator.getCodeSystemFromBindingValueSetUrl(bindingValueSetUrl);
      expect(codeSystem).toBeUndefined();
    });

    it('should return Map of CodeSystems for the provided StructureDefinitions for FHIR R5', async () => {
      const tsDataModelGenerator = new TypescriptDataModelGenerator(FHIR_PACKAGE_R5);
      expect(tsDataModelGenerator).toBeDefined();

      await tsDataModelGenerator.initialize();

      const complexTypes: StructureDefinition[] = tsDataModelGenerator.getComplexTypes();
      expect(complexTypes).toBeDefined();
      expect(complexTypes).toHaveLength(41);

      let result: { codeSystems: CodeSystem[]; codeSystemEnumMap: ReadonlyMap<string, string> } =
        tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(complexTypes);
      expect(result.codeSystems).toBeDefined();
      expect(result.codeSystems.length).toStrictEqual(26);
      expect(result.codeSystemEnumMap).toBeDefined();
      // result.codeSystemEnumMap.size >= result.codeSystems.length due to CodeSystem re-use across StructureDefinitions
      expect(result.codeSystemEnumMap.size).toStrictEqual(32);

      const resources: StructureDefinition[] = tsDataModelGenerator.getResources();
      expect(resources).toBeDefined();
      expect(resources).toHaveLength(158);

      result = tsDataModelGenerator.getRequiredCodeSystemsFromStructureDefinitions(resources);
      expect(result.codeSystems).toBeDefined();
      expect(result.codeSystems.length).toStrictEqual(202);
      expect(result.codeSystemEnumMap).toBeDefined();
      // result.codeSystemEnumMap.size >= result.codeSystems.length due to CodeSystem re-use across StructureDefinitions
      expect(result.codeSystemEnumMap.size).toStrictEqual(339);
    });
  });

  describe('TypescriptDataModelGenerator using full FHIR cache for debugging', () => {
    it.skip('should be defined and properly initialized for DEBUGGING', async () => {
      const fhirPackage: FhirPackage = getFhirPackage('R4');
      const tsDataModelGenerator = new TypescriptDataModelGenerator(fhirPackage);
      expect(tsDataModelGenerator).toBeDefined();

      await tsDataModelGenerator.initialize();
      // Add conditional breakpoints in TypescriptDataModelGenerator code as needed

      // const resources: StructureDefinition[] = tsDataModelGenerator.getResources();
      // expect(resources).toBeDefined();
      //
      // const filteredResources = resources.filter((sd) => {
      //   return sd.snapshot.element.some((ed) => {
      //     if (ed.max && ed.max !== '1' && ed.type && ed.type.length > 0) {
      //       return ed.type.some((t) => t.code === 'code');
      //     }
      //   });
      // });
      // expect(filteredResources).toBeDefined();

      // const complexTypes: StructureDefinition[] = tsDataModelGenerator.getComplexTypes();
      // expect(complexTypes).toBeDefined();
    });
  });
});
