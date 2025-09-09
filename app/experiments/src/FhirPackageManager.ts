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
import { BasePackageLoader, FindResourceInfoOptions, LoadStatus, SafeMode } from 'fhir-package-loader';
import {
  FhirPackage,
  generatorPackageLoader,
  GeneratorPackageLoaderOptions,
} from 'generator/src/generator-lib/ts-datamodel-generator-helpers';

const INITIALIZATION_ERROR_MSG = `This FhirPackageManager instance must be initialized ('await fhirPackageManager.initialize();') before use.`;

export class FhirPackageManager {
  private readonly _fhirPackage: FhirPackage;
  private _packageLoader: BasePackageLoader | undefined;
  private isInitialized = false;

  private fpmLogger = (level: string, message: string) => {
    console.log(`FPM ${level.toUpperCase()}: ${message}`);
  };

  constructor(fhirPackage: FhirPackage) {
    assert(fhirPackage, 'fhirPackage is required.');
    this._fhirPackage = fhirPackage;
  }

  /**
   * Retrieves the current FHIR package instance.
   *
   * @returns {FhirPackage} The FHIR package associated with this instance.
   */
  public get fhirPackage(): FhirPackage {
    return this._fhirPackage;
  }

  /**
   * Initializes the package loader and loads the required FHIR package.
   * Ensures that the initialization process is only performed once.
   *
   * @returns {Promise<void>} A promise that resolves when the initialization is complete and the FHIR package is loaded.
   *                          Throws an error if the package cannot be loaded successfully.
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) {
      return;
    }

    const fplLogger = (level: string, message: string) => {
      console.log(`FPL ${level.toUpperCase()}: ${message}`);
    };
    const options: GeneratorPackageLoaderOptions = {
      log: fplLogger,
      safeMode: SafeMode.FREEZE,
      cacheRootPath: this._fhirPackage.pkgLoaderCacheRootPath,
    };
    this._packageLoader = await generatorPackageLoader(options);
    const status = await this._packageLoader.loadPackage(this._fhirPackage.pkgName, this._fhirPackage.pkgVersion);
    if (status !== LoadStatus.LOADED) {
      /* istanbul ignore next */
      throw new Error(
        `Failed to load FHIR package ${this._fhirPackage.pkgName}@${this._fhirPackage.pkgVersion}; (actual load status: ${status})`,
      );
    }

    this.isInitialized = true;
  }

  /**
   * Retrieves an array of FHIR Artifacts based on the provided key and options.
   *
   * @param {string} key - The key used for identifying the FHIR artifact type (e.g., 'StructureDefinition', etc.);
   *                       key will be matched against FHIR artifact by their id, name, or url; use '*' for all
   *                       FHIR artifact types defined in types.
   * @param {FindResourceInfoOptions} options - The options to customize the resource search criteria.
   * @see https://github.com/FHIR/fhir-package-loader/blob/main/src/package/ResourceInfo.ts
   * @returns {any[]} An array of structure definitions matching the key and options.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getFhirArtifacts(key: string, options: FindResourceInfoOptions): any[] | undefined {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);
    const fhirArtifacts = this._packageLoader?.findResourceJSONs(key, options);
    if (fhirArtifacts) {
      this.fpmLogger(
        'info',
        `Found ${String(fhirArtifacts.length)} FHIR artifacts for key '${key}' and options: ${JSON.stringify(options)}`,
      );
    } else {
      this.fpmLogger('info', `Did not find FHIR artifacts for key '${key}' and options: ${JSON.stringify(options)}`);
    }
    return fhirArtifacts;
  }
}
