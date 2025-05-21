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

## [0.5.0] - 2025-05-21

### Added

- Cloned FhirDataType.ts from @paq-ts-fhir/fhir-core to remove its dependency in the Generator project

### Changed

- Continued development for complex data types adding multiple Handlebars partial templates
- Reverted the `complex-type` filter to previous approach and added 'SimpleQuantity' and 'MoneyQuantity'

### Deprecated

### Removed

### Fixed

### Security


## [0.4.0] - 2025-05-17

### Changed

- Continued development for complex data types adding multiple Handlebars partial templates
- Tightened the `complex-type` filter to exclude StructureDefinitions having
  ext.url === 'http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status' with ext.valueCode === 'draft'


## [0.3.0] - 2025-05-16

### Added

- Added code to generate complex data types (work-in-progress)

### Changed

- Updated dependencies
- Minor updates to CodeSystem Enum class generator
- Minor updates to TypeScript data model generator
- Changed approach for generated barrel files from a single top-level file to directory-level files


## [0.2.0] - 2025-05-01

### Added

- Created the initial code to generate data models and write them to disk in the appropriate NPM package.
  Only the selected CodeSystem Enum classes are currently generated.
- Added unit tests for all current code.

### Changed

- Updated project configuration and the README.md


## [0.1.0] - 2025-04-10

### Added

- Created `generator` project
