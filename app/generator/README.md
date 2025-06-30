# Generator

## Overview

The generator defined in this mono-repository is not published or used independently.
It is intended to be executed from NPM scripts in the root package.json to generate TypeScript classes representing
FHIR data models for FHIR resources, complex data types, and selected code systems.
These generated TypeScript classes along with the @paq-ts-fhir/fhir-core` library will be published as public NPM
libraries for each supported FHIR release (i.e., R4, R4B, R5, etc.).

## fhir-package-loader

The FHIR Package Loader provides TypeScript/JavaScript classes for loading FHIR packages and querying them for
FHIR resources.
It can load FHIR packages from a local cache, the FHIR registry, an NPM registry, and/or the FHIR build server.
It is used in this project as a dependency library rather than as a CLI application.

- [fhir-package-loader](https://github.com/FHIR/fhir-package-loader/tree/main)
  - [README](https://github.com/FHIR/fhir-package-loader/blob/main/README.md)
    - [Using FHIR Package Loader as a Library](https://github.com/FHIR/fhir-package-loader/blob/main/README.md#using-fhir-package-loader-as-a-library)
  - [PackageLoader](https://github.com/FHIR/fhir-package-loader/blob/main/src/loader/PackageLoader.ts)
  - [ResourceInfo](https://github.com/FHIR/fhir-package-loader/blob/main/src/package/ResourceInfo.ts)
  - [DefaultPackageLoader](https://github.com/FHIR/fhir-package-loader/blob/main/src/loader/DefaultPackageLoader.ts)
  - [BasePackageLoaderOptions](https://github.com/FHIR/fhir-package-loader/blob/main/src/loader/BasePackageLoader.ts#L29)

### Implementation Notes

#### BasePackageLoaderOptions

```typescript
/**
 * Defined in the `fhir-package-loader` BasePackageLoader module
 */
export enum SafeMode {
  OFF = 'OFF', // Default
  FREEZE = 'FREEZE', // JavaScript recursive Object.freeze()
  CLONE = 'CLONE', // Lodash _.deepClone()
}

/**
 * Defined in the `fhir-package-loader` BasePackageLoader module
 */
export type BasePackageLoaderOptions = {
  log?: LogFunction;
  resourceCacheSize?: number; // Defaults to 200
  safeMode?: SafeMode;
};

/**
 * Interface representing the options for loading a generator package.
 *
 * Extends the `BasePackageLoaderOptions` with additional configuration specific to this generator.
 */
export interface GeneratorPackageLoaderOptions extends BasePackageLoaderOptions {
  /**
   * Defines the file system path to the root directory for caching generator packages.
   */
  cacheRootPath: string; // Defaults to `os.homedir()` in function getFhirPackage();
  // Allows overriding the cache root for testing purposes
}
```

#### PackageLoader Implementation

To provide local control of the .fhir cache location, this project uses the FHIR Package Loader's `BasePackageLoader`
rather than the FHIR Package Loader's `defaultPackageLoader`.
This implementation is provided by `function generatorPackageLoader(options: GeneratorPackageLoaderOptions)` in the
ts-datamodel-generator-helpers module.

## Generator Implementation

This generator was designed to be executed from NPM scripts in the root package.json.
The `GeneratorApp` class in the generator-app.ts module provides for the generation of the data models and the writing
of these generated data models to disk within the appropriate NPM workspace (e.g., `packages/r4-datamodels`, etc.).
It is instantiated and used from within the generator's NPM workspace in the index.ts module.
The `function main()` selects the appropriate configuration for the provided FHIR release (i.e., R4, R5, etc.),
instantiates the `GeneratorApp` class with this configuration data and executes the generation of the data models and
their writing to the appropriate NPM workspace for eventual publication.

The `TypescriptDataModelGenerator` class in the typescript-datamodel-generator.ts module is responsible for generating
the TypeScript data models from specified FHIR packages.
The desired FHIR package is loaded using the PackageLoader described above.
It provides access to the required FHIR resources (`StructureDefinition`, `ValueSet`, `CodeSystem`, etc.) used in the
code generation process.

The generator's configuration for each FHIR release is defined by the `interface FhirPackage` in the
ts-datamodel-generator-helpers.ts module.
It represents a FHIR package with details about its release, package information, and related configuration paths.
The configuration is retrieved in the index.ts module from the `function getFhirPackage(fhirRelease: FhirRelease): FhirPackage`
also in the ts-datamodel-generator-helpers.ts module.

### Code Generator Templates

[Handlebars](https://handlebarsjs.com/) templates are used to define all code generation patterns.
The Handlebars template engine provides a great deal of flexibility and support for customization.
It is ideal for generating source code that follows very specific patterns such as our TypeScript FHIR data models.
