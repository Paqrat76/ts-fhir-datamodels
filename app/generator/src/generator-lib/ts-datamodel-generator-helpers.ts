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
 * Represents the type of FHIR (Fast Healthcare Interoperability Resources) artifact.
 *
 * This type defines the core categories of generated FHIR data models.
 *
 * The possible values are:
 * - 'CodeSystem': Represents a system of codes that define concepts, such as terminologies.
 * - 'ComplexType': Refers to a data structure that encapsulates multiple values or concepts.
 * - 'Resource': Represents a FHIR resource, which is a modular unit of healthcare data.
 * - 'Base': Refers to an artifact considered to be a "base-level" artifact.
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
  /**
   * Indicates whether the current package is to be used for functional testing.
   * This variable is typically used to distinguish between functional testing scenarios
   * and normal application behavior. Its value determines if certain workflows or
   * configurations specific to functional testing are activated.
   */
  isFunctionalTest?: boolean;
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
   * FHIR artifact type: Resource, ComplexType, CodeSystem, "Base"
   */
  fhirType: FhirType;
  /**
   * Generated code content to be written to the file
   */
  fileContents: string;
}

/**
 * Interface representing the content of a generated complex type, extending the functionality
 * of `GeneratedContent` to include specific import handling for FHIR-related and dynamically
 * created content.
 */
export interface GeneratedComplexTypeContent extends GeneratedContent {
  /**
   * Represents a list of strings that specifies imports from the core FHIR library
   */
  fhirCoreImports: Set<string>;
  /**
   * A list of strings that represents dynamically generated import statements.
   * This variable is typically used to store and manage imported module references or paths
   * that are programmatically created during runtime or build processes.
   */
  generatedImports: Set<string>;
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
 * Logs a formatted message with a specified log level for generators.
 *
 * @param {string} level - The severity level of the log (e.g., "info", "warn", "error").
 * @param {string} message - The message to log.
 * @returns {void} This function does not return a value.
 */
export function generatorLogger(level: string, message: string): void {
  console.log(`Generator ${level.toUpperCase()}: ${message}`);
}

// noinspection JSValidateJSDoc
/**
 * Retrieves the FHIR package configuration for a specific FHIR release.
 *
 * @privateRemarks
 * Because this script is intended to be called from each data model package's `package.json`, the `baseOutputPath`
 * defaults to the `src` directory relative to the package's root directory.
 *
 * @param {FhirRelease} fhirRelease - The FHIR release version (e.g., 'R4', 'R4B', 'R5').
 * @param {string} baseOutputPath - Optional override of the default base output path for the specified FHIR release.
 * @returns {FhirPackage} The configuration object for the specified FHIR release, including package name, version, and paths.
 * @throws {Error} If an invalid FHIR release is provided.
 */
export function getFhirPackage(fhirRelease: FhirRelease, baseOutputPath?: string): FhirPackage {
  switch (fhirRelease) {
    case 'R4':
      return {
        release: fhirRelease,
        pkgName: 'hl7.fhir.r4.core',
        pkgVersion: '4.0.1',
        baseOutputPath: baseOutputPath ?? 'src',
        pkgLoaderCacheRootPath: os.homedir(),
        isFunctionalTest: false,
      } as FhirPackage;
    case 'R4B':
      return {
        release: fhirRelease,
        pkgName: 'hl7.fhir.r4b.core',
        pkgVersion: '4.3.0',
        baseOutputPath: baseOutputPath ?? 'src',
        pkgLoaderCacheRootPath: os.homedir(),
        isFunctionalTest: false,
      } as FhirPackage;
    case 'R5':
      return {
        release: fhirRelease,
        pkgName: 'hl7.fhir.r5.core',
        pkgVersion: '5.0.0',
        baseOutputPath: baseOutputPath ?? 'src',
        pkgLoaderCacheRootPath: os.homedir(),
        isFunctionalTest: false,
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

/* istanbul ignore next */
/**
 * Generates the contents of a license file for a given year.
 *
 * @returns {string[]} An array of strings representing the lines of the license file content.
 */
export function generateLicenseContent(): string[] {
  const licenseContent: string[] = [];

  licenseContent.push('/*');
  licenseContent.push(` * Copyright (c) ${String(new Date().getFullYear())}. Joe Paquette`);
  licenseContent.push(' *');
  licenseContent.push(' * Permission is hereby granted, free of charge, to any person obtaining a copy');
  licenseContent.push(' * of this software and associated documentation files (the "Software"), to deal');
  licenseContent.push(' * in the Software without restriction, including without limitation the rights');
  licenseContent.push(' * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell');
  licenseContent.push(' * copies of the Software, and to permit persons to whom the Software is');
  licenseContent.push(' * furnished to do so, subject to the following conditions:');
  licenseContent.push(' *');
  licenseContent.push(' * The above copyright notice and this permission notice shall be included in all');
  licenseContent.push(' * copies or substantial portions of the Software.');
  licenseContent.push(' *');
  licenseContent.push(' * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR');
  licenseContent.push(' * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,');
  licenseContent.push(' * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE');
  licenseContent.push(' * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER');
  licenseContent.push(' * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,');
  licenseContent.push(' * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE');
  licenseContent.push(' * SOFTWARE.');
  licenseContent.push(' *');
  licenseContent.push(' */');

  return licenseContent;
}

/* istanbul ignore next */
/**
 * Generates the content for a module file as an array of strings.
 *
 * @param {string} moduleName - The name of the module for which content is generated.
 * @returns {string[]} An array of strings, where each string represents a line of module content.
 */
export function generateModuleContent(moduleName: string): string[] {
  const moduleContent: string[] = [];

  moduleContent.push('/**');
  moduleContent.push(` * This file is generated by the FHIR Data Model Generator.`);
  moduleContent.push(' * DO NOT make any modifications!');
  moduleContent.push(' * ');
  moduleContent.push(` * ${moduleName} Module`);
  moduleContent.push(' *');
  moduleContent.push(
    ' * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).',
  );
  moduleContent.push(' *');
  if (moduleName === 'index.ts') {
    moduleContent.push(' * @module Data Models Index');
  } else {
    moduleContent.push(' * @packageDocumentation');
  }
  moduleContent.push(' */');

  return moduleContent;
}
