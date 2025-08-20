# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

---

## [2025-08-20]

### Changed

- Globally changed compilation output from `dist` to `lib`
- Updated dependencies
- Streamlined NPM `scripts` im `package.json
- Updated the mono-repo's README.md file

### Removed

- Unnecessary `version` property from this "private" `package.json`


## [0.16.0] - 2025-08-17

### Added

- `public abstract dataTypeName(): string;` to `DataType` and `IDataType`; Updated all data type classes and generators to implement this method

### Changed

- Updated all README and dev-docs content
- Updated Typedoc base config
- Updated dependencies
- Updated eslint dependencies and fixed new lint issues
- Updated ESLint and Typedoc configurations
- Updated TypeScript to latest version (5.9.2)


## [0.15.0] - 2025-07-29

### Changed

- Updated dependencies
- Completed functional test suite in app/generator-datamodel-ftest

### Fixed

- app/generated-datamodel-ftest project's Jest configuration to resolve intermittent Jest issue: "Cannot find module" from CLI

### Security

- Resolved `critical` security issue ([CVE-2025-7783](https://www.cve.org/cverecord?id=CVE-2025-7783)) with `form-data`


## [0.14.0] - 2025-07-25

### Changed

- Updated dependencies
- Updated project configurations
- Allow Prettier and ESLint to be executed from app/generator and packages/fhir-core workspaces


## [0.13.0] - 2025-07-12

### Added

- dev-docs/fhir-open-datatypes.xls to document FHIR open data types across all relevant FHIR releases

### Changed

- Updated dependencies
- Updated @paq-ts-fhir/fhir-core: refactored parsing utilities and added interfaces for each of the core model classes
- Updated app/generator and app/generator-datamodel-ftest projects - refer to their CHANGELOG.md files
- Converted all Jest config files from 'js' to 'mjs'

## [0.12.0] - 2025-06-30

### Added

- Created initial `app/generator-datamodel-ftest` project for generated FHIR R4 test data models for functional testing
- Restructured functional testing for generator project

### Changed

- Updated dependencies


## [0.11.0] - 2025-06-25

### Changed

- Updated dependencies
- Minor project config updates
- Reorganized generator testing into separate unit and functional test directories


## [0.10.0] - 2025-06-22

### Changed

- Updated Generator project to prepare for functional testing of data models


## [0.9.0] - 2025-06-20

### Changed

- Updated dependencies
- Added/updated Generator unit tests to achieve >90% code coverage


## [0.8.0] - 2025-06-18

### Added

- Generator for FHIR resources

### Changed

- Updated dependencies
- Updated `packages/r4-datamodels` project
- Updated `packages/fhir-core` project
- Updated `generator` project
- Updated minimum Node/NPM to LTS "Jod"

## [0.7.0] - 2025-05-31

### Changed

- Updated dependencies
- Refactored selected NPM script definitions in package.json
- Eliminated all JSDoc @inheritDoc tags in fhir-core package
- Completed generator code for the generation of complex-types


## [0.6.1] - 2025-05-21

### Changed

- Minor code tweaks for clean up of generated complex types
- Updated fhir-core dependencies


## [0.6.0] - 2025-05-21

### Changed

- Updated dev dependencies
- Updated the generator code for complex data types (work-in-progress)


## [0.5.0] - 2025-05-17

### Added

### Changed

- Updated dev dependencies
- Updated the generator code for complex data types (work-in-progress)

### Deprecated

### Removed

### Fixed

### Security


## [0.4.0] - 2025-05-16

### Added

- Added the initial generator code for complex types (work-in-progress)

### Changed

- Updated dev dependencies
- Updated the generator code for code system enums
- Updated the base generator code


## [0.3.0] - 2025-05-01

### Added

- Added support for the initial FHIR R4 data model package (`@paq-ts-fhir/r4-datamodels`)
- Added the initial generator code for code system enums

### Changed

- Updated dev dependencies
- Updated tooling configurations for the mono-repository


## [0.2.0] - 2025-04-10

### Added

- Created `generator` project

### Changed

- Converted `ts-fhir-datamodels` project into a mono-repo
  - Moved the `fhir-core` source and test code into `packages/fhir-core`
- Updated dependencies and fixed associated lint issues


## [0.1.0] - 2025-03-31

### Added

- `ts-fhir-datamodels` project initialized from Paqrat76/typescript-hapi-models-poc
