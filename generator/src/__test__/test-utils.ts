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

import { BasePackageLoader, LoadStatus, SafeMode } from 'fhir-package-loader';
import {
  FhirPackage,
  generatorPackageLoader,
  GeneratorPackageLoaderOptions,
} from '../generator-lib/ts-datamodel-generator-helpers';

/**
 * Returns the generatorPackageLoader() implementation of the BasePackageLoader using SafeMode.CLONE
 * for testing purposes
 *
 * @param fhirPackage - FHIR package definition
 * @returns Promise<BasePackageLoader>
 */
export async function getGeneratorPackageLoader(fhirPackage: FhirPackage): Promise<BasePackageLoader> {
  const fplLogger = (level: string, message: string) => {
    console.log(`${level}: ${message}`);
  };
  const options: GeneratorPackageLoaderOptions = {
    log: fplLogger,
    safeMode: SafeMode.CLONE,
    cacheRootPath: fhirPackage.pkgLoaderCacheRootPath,
  };
  const packageLoader: BasePackageLoader = await generatorPackageLoader(options);
  const status = await packageLoader.loadPackage(fhirPackage.pkgName, fhirPackage.pkgVersion);
  if (status !== LoadStatus.LOADED) {
    throw new Error(
      `Failed to load FHIR package ${fhirPackage.pkgName}@${fhirPackage.pkgVersion}; (actual load status: ${status})`,
    );
  }

  return packageLoader;
}
