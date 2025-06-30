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
