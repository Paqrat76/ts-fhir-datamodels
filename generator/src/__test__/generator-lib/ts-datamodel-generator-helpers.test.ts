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
import { resolve } from 'node:path';
import {
  FhirPackage,
  generatorPackageLoader,
  GeneratorPackageLoaderOptions,
  getFhirPackage,
} from '../../generator-lib/ts-datamodel-generator-helpers';
import { BasePackageLoader, LoadStatus, SafeMode } from 'fhir-package-loader';

describe('src/generator-lib/ts-datamodel-generator-helpers', () => {
  describe('getFhirPackage', () => {
    it('should return the correct FhirPackage for FHIR R4', () => {
      const expected = {
        release: 'R4',
        pkgName: 'hl7.fhir.r4.core',
        pkgVersion: '4.0.1',
        baseOutputPath: 'packages/r4-datamodels/src',
        pkgLoaderCacheRootPath: os.homedir(),
      } as FhirPackage;
      const fhirPackage = getFhirPackage('R4');
      expect(fhirPackage).toEqual(expected);
    });

    it('should return the correct FhirPackage for FHIR R4B', () => {
      const expected = {
        release: 'R4B',
        pkgName: 'hl7.fhir.r4b.core',
        pkgVersion: '4.3.0',
        // TODO: add baseOutputPath
        pkgLoaderCacheRootPath: os.homedir(),
      } as FhirPackage;
      const fhirPackage = getFhirPackage('R4B');
      expect(fhirPackage).toEqual(expected);
    });

    it('should return the correct FhirPackage for FHIR R5', () => {
      const expected = {
        release: 'R5',
        pkgName: 'hl7.fhir.r5.core',
        pkgVersion: '5.0.0',
        // TODO: add baseOutputPath
        pkgLoaderCacheRootPath: os.homedir(),
      } as FhirPackage;
      const fhirPackage = getFhirPackage('R5');
      expect(fhirPackage).toEqual(expected);
    });

    it('should throw Error for unknown FHIR release', () => {
      expect(() => {
        // @ts-expect-error: allow for testing
        getFhirPackage('R0');
      }).toThrow('Invalid FHIR Release: R0');
    });
  });

  describe('generatorPackageLoader', () => {
    it('should return the appropriate PackageLoader', async () => {
      const fplLogger = (level: string, message: string) => {
        console.log(`${level}: ${message}`);
      };
      const options: GeneratorPackageLoaderOptions = {
        log: fplLogger,
        safeMode: SafeMode.FREEZE,
        cacheRootPath: resolve(__dirname, '..', 'test-cache'),
      };

      const packageLoader: BasePackageLoader = await generatorPackageLoader(options);
      const status: LoadStatus = await packageLoader.loadPackage('test.fhir.r4', '4.0.1');
      expect(status).toEqual(LoadStatus.LOADED);
    });
  });
});
