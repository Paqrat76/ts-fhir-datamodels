# Generator

## Overview

The generator defined here is not published or used independently.
It is intended to be executed from NPM scripts in this project to generate TypeScript classes representing FHIR data
models for FHIR resources and complex data types.
These generated TypeScript classes along with the `src/fhir-core` library will be published as NPM libraries for each
supported FHIR release (i.e., R4, R4B, R5, etc.).

## fhir-package-loader

- [fhir-package-loader](https://github.com/FHIR/fhir-package-loader/tree/main)
  - [README](https://github.com/FHIR/fhir-package-loader/blob/main/README.md)
    - [Using FHIR Package Loader as a Library](https://github.com/FHIR/fhir-package-loader/blob/main/README.md#using-fhir-package-loader-as-a-library)
  - [PackageLoader](https://github.com/FHIR/fhir-package-loader/blob/main/src/loader/PackageLoader.ts)
  - [ResourceInfo](https://github.com/FHIR/fhir-package-loader/blob/main/src/package/ResourceInfo.ts)
