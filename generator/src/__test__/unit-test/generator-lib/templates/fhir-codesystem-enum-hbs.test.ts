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
import { BasePackageLoader, FindResourceInfoOptions } from 'fhir-package-loader';
import { FhirPackage } from '../../../../generator-lib/ts-datamodel-generator-helpers';
import { CodeSystem } from '../../../../generator-lib/fhir-artifact-interfaces';
import { getCsHbsProperties, HbsCodeSystem } from '../../../../generator-lib/templates/fhir-codesystem-enum-hbs';
import { getGeneratorPackageLoader } from '../../test-utils';

describe('src/generator-lib/templates/fhir-codesystem-enum-hbs', () => {
  const testFhirCacheRoot = resolve(__dirname, '../..', 'utest-cache');

  let testFhirPackage: FhirPackage;
  let packageLoader: BasePackageLoader;

  beforeAll(async () => {
    testFhirPackage = {
      release: 'R4',
      pkgName: 'test.fhir.r4',
      pkgVersion: '4.0.1',
      pkgLoaderCacheRootPath: testFhirCacheRoot,
    };
    packageLoader = await getGeneratorPackageLoader(testFhirPackage);
  });

  describe('getCsHbsProperties', () => {
    it('should return the correct HbsCodeSystem properties for CodeSystem-bundle-type', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const codeSystem = packageLoader.findResourceJSON('bundle-type', options) as CodeSystem;
      const hbsCodeSystem: HbsCodeSystem = getCsHbsProperties(codeSystem, testFhirPackage);
      expect(hbsCodeSystem).toBeDefined();
      expect(hbsCodeSystem).toMatchSnapshot();
    });

    it('should return the correct HbsCodeSystem properties for CodeSystem-contact-point-system', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const codeSystem = packageLoader.findResourceJSON('contact-point-system', options) as CodeSystem;
      const hbsCodeSystem: HbsCodeSystem = getCsHbsProperties(codeSystem, testFhirPackage);
      expect(hbsCodeSystem).toBeDefined();
      expect(hbsCodeSystem).toMatchSnapshot();
    });

    it('should return the correct HbsCodeSystem properties for CodeSystem-contact-point-use', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const codeSystem = packageLoader.findResourceJSON('contact-point-use', options) as CodeSystem;
      const hbsCodeSystem: HbsCodeSystem = getCsHbsProperties(codeSystem, testFhirPackage);
      expect(hbsCodeSystem).toBeDefined();
      expect(hbsCodeSystem).toMatchSnapshot();
    });

    it('should return the correct HbsCodeSystem properties for CodeSystem-days-of-week', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const codeSystem = packageLoader.findResourceJSON('days-of-week', options) as CodeSystem;
      const hbsCodeSystem: HbsCodeSystem = getCsHbsProperties(codeSystem, testFhirPackage);
      expect(hbsCodeSystem).toBeDefined();
      expect(hbsCodeSystem).toMatchSnapshot();
    });

    it('should return the correct HbsCodeSystem properties for CodeSystem-http-verb', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const codeSystem = packageLoader.findResourceJSON('http-verb', options) as CodeSystem;
      const hbsCodeSystem: HbsCodeSystem = getCsHbsProperties(codeSystem, testFhirPackage);
      expect(hbsCodeSystem).toBeDefined();
      expect(hbsCodeSystem).toMatchSnapshot();
    });

    it('should return the correct HbsCodeSystem properties for CodeSystem-identifier-use', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const codeSystem = packageLoader.findResourceJSON('identifier-use', options) as CodeSystem;
      const hbsCodeSystem: HbsCodeSystem = getCsHbsProperties(codeSystem, testFhirPackage);
      expect(hbsCodeSystem).toBeDefined();
      expect(hbsCodeSystem).toMatchSnapshot();
    });

    it('should return the correct HbsCodeSystem properties for CodeSystem-name-use', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const codeSystem = packageLoader.findResourceJSON('name-use', options) as CodeSystem;
      const hbsCodeSystem: HbsCodeSystem = getCsHbsProperties(codeSystem, testFhirPackage);
      expect(hbsCodeSystem).toBeDefined();
      expect(hbsCodeSystem).toMatchSnapshot();
    });

    it('should return the correct HbsCodeSystem properties for CodeSystem-narrative-status', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const codeSystem = packageLoader.findResourceJSON('narrative-status', options) as CodeSystem;
      const hbsCodeSystem: HbsCodeSystem = getCsHbsProperties(codeSystem, testFhirPackage);
      expect(hbsCodeSystem).toBeDefined();
      expect(hbsCodeSystem).toMatchSnapshot();
    });

    it('should return the correct HbsCodeSystem properties for CodeSystem-quantity-comparator', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const codeSystem = packageLoader.findResourceJSON('quantity-comparator', options) as CodeSystem;
      const hbsCodeSystem: HbsCodeSystem = getCsHbsProperties(codeSystem, testFhirPackage);
      expect(hbsCodeSystem).toBeDefined();
      expect(hbsCodeSystem).toMatchSnapshot();
    });

    it('should return the correct HbsCodeSystem properties for CodeSystem-search-entry-mode', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const codeSystem = packageLoader.findResourceJSON('search-entry-mode', options) as CodeSystem;
      const hbsCodeSystem: HbsCodeSystem = getCsHbsProperties(codeSystem, testFhirPackage);
      expect(hbsCodeSystem).toBeDefined();
      expect(hbsCodeSystem).toMatchSnapshot();
    });

    it('should return the correct HbsCodeSystem properties for CodeSystem-trigger-type', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const codeSystem = packageLoader.findResourceJSON('trigger-type', options) as CodeSystem;
      const hbsCodeSystem: HbsCodeSystem = getCsHbsProperties(codeSystem, testFhirPackage);
      expect(hbsCodeSystem).toBeDefined();
      expect(hbsCodeSystem).toMatchSnapshot();
    });
  });
});
