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

import * as path from 'node:path';
import * as os from 'node:os';
import {
  BasePackageLoader,
  BasePackageLoaderOptions,
  BuildDotFhirDotOrgClient,
  createSQLJSPackageDB,
  CurrentBuildClientOptions,
  DefaultRegistryClient,
  DiskBasedPackageCache,
  PackageCacheOptions,
  RegistryClientOptions,
} from 'fhir-package-loader';

/**
 * Represents the different releases of the FHIR (Fast Healthcare Interoperability Resources) standard that are supported.
 *
 * FHIR is a standard describing data formats and elements (known as "resources") and an application programming interface (API)
 * for exchanging electronic health records (EHR). This type specifies the allowed versions of FHIR releases.
 *
 * The possible values are:
 * - 'R4': Denotes FHIR Release 4.
 * - 'R4B': Denotes FHIR Release 4B, an incremental update to R4.
 * - 'R5': Denotes FHIR Release 5.
 */
export type FhirRelease = 'R4' | 'R4B' | 'R5';

/**
 * Represents the type of a FHIR (Fast Healthcare Interoperability Resources) artifact.
 *
 * This type defines the core categories of generated FHIR data models.
 *
 * The possible values are:
 * - 'CodeSystem': Represents a system of codes that define concepts, such as terminologies.
 * - 'ComplexType': Refers to a data structure that encapsulates multiple values or concepts.
 * - 'Resource': Represents a FHIR resource, which is a modular unit of healthcare data.
 */
export type FhirType = 'CodeSystem' | 'ComplexType' | 'Resource';

/**
 * Represents a FHIR package with details about its release, package information,
 * and related configuration paths.
 */
export interface FhirPackage {
  /**
   * FhirRelease Type for the desired HL7 Core FHIR package
   */
  release: FhirRelease;
  /**
   * HL7 Core FHIR package name for the specified `release`
   */
  pkgName: string;
  /**
   * HL7 Core FHIR package version for the specified `release`
   */
  pkgVersion: string;
  /**
   * The baseOutputPath for the generated data models
   */
  baseOutputPath?: string;
  /**
   * FHIR cache root path. Defaults to `os.homedir()` in function getFhirPackage().
   */
  pkgLoaderCacheRootPath: string;
}

/**
 * Represents the structure and metadata for generated content related to a FHIR artifact.
 *
 * The TypescriptDataModelGenerator generates the desired code content and returns
 * an array of this GeneratedContent. This output is then used to write these
 * code files to disk for eventual "publication".
 */
export interface GeneratedContent {
  /**
   * Current FhirPackage definition
   */
  fhirPackage: FhirPackage;
  /**
   * The file name to be used for the generated content
   */
  filename: string;
  /**
   * Optional file extension to be used for the generated content
   */
  fileExtension?: string;
  /**
   * FHIR artifact type: Resource, ComplexType, CodeSystem
   */
  fhirType: FhirType;
  /**
   * Generated code content to be written to the file
   */
  fileContents: string;
}

/**
 * Interface representing the options for loading a generator package.
 *
 * Extends the `BasePackageLoaderOptions` with additional configuration specific to generator packages.
 */
export interface GeneratorPackageLoaderOptions extends BasePackageLoaderOptions {
  /**
   * Defines the file system path to the root directory for caching generator packages.
   */
  cacheRootPath: string;
}

/**
 * Retrieves the FHIR package configuration for a specific FHIR release.
 *
 * @param {FhirRelease} fhirRelease - The FHIR release version (e.g., 'R4', 'R4B', 'R5').
 * @returns {FhirPackage} The configuration object for the specified FHIR release, including package name, version, and paths.
 * @throws {Error} If an invalid FHIR release is provided.
 */
export function getFhirPackage(fhirRelease: FhirRelease): FhirPackage {
  switch (fhirRelease) {
    case 'R4':
      return {
        release: fhirRelease,
        pkgName: 'hl7.fhir.r4.core',
        pkgVersion: '4.0.1',
        baseOutputPath: 'packages/r4-datamodels/src',
        pkgLoaderCacheRootPath: os.homedir(),
      } as FhirPackage;
    case 'R4B':
      return {
        release: fhirRelease,
        pkgName: 'hl7.fhir.r4b.core',
        pkgVersion: '4.3.0',
        // TODO: add baseOutputPath
        pkgLoaderCacheRootPath: os.homedir(),
      } as FhirPackage;
    case 'R5':
      return {
        release: fhirRelease,
        pkgName: 'hl7.fhir.r5.core',
        pkgVersion: '5.0.0',
        // TODO: add baseOutputPath
        pkgLoaderCacheRootPath: os.homedir(),
      } as FhirPackage;
    default:
      throw new Error(`Invalid FHIR Release: ${String(fhirRelease)}`);
  }
}

/**
 * Generates and returns a BasePackageLoader instance configured with necessary dependencies for package management.
 *
 * @param {GeneratorPackageLoaderOptions} options - Configuration options for the generator package loader,
 * including cache root path and logger instance.
 * @returns {Promise<BasePackageLoader>} A promise that resolves to an instantiated BasePackageLoader object.
 */
export async function generatorPackageLoader(options: GeneratorPackageLoaderOptions): Promise<BasePackageLoader> {
  const packageDB = await createSQLJSPackageDB();
  const fhirCache = path.join(options.cacheRootPath, '.fhir', 'packages');
  const packageCache = new DiskBasedPackageCache(fhirCache, { log: options.log } as PackageCacheOptions);
  const registryClient = new DefaultRegistryClient({ log: options.log } as RegistryClientOptions);
  const buildClient = new BuildDotFhirDotOrgClient({ log: options.log } as CurrentBuildClientOptions);

  return new BasePackageLoader(packageDB, packageCache, registryClient, buildClient, options);
}
