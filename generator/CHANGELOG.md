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

## [0.9.0] - 2025-06-22

### Added

- FHIR Shorthand Sushi project with `*.fsh` files that define custom FHIR resources used only for Generator functional testing
- FHIR artifacts to `test-cache` to support functional testing

### Changed

- Restructured the `__test__` directory to support both generator unit tests and generated data model functional testing


## [0.8.0] - 2025-06-20

### Changed

- Combined/refactored utilities into util-hbs.ts
- Converted selected Maps and Sets into ReadonlyMap<> and ReadonlySet<>
- Refactored handling of Handlebars helpers
- Performed minor code cleanup
- Added/updated Generator unit tests to achieve >90% code coverage


## [0.7.0] - 2025-06-18

### Added

- Selected .fhir cache FHIR artifacts
- Generator for FHIR resources
- Base models (`src/generator-lib/base`) to be copied into generated data model projects

### Changed

- Updated some tests
- Updated fhir-data-types for generator requirements
- Updated Handlebars templates and utilities

### Removed

- Selected .fhir cache FHIR artifacts

### Fixed

- **BUG:** Resolved issue with multiple hyperlinks in utils.ts - `fixFhirHyperLinks()`

## [0.6.0] - 2025-05-31

### Added

- Additional CodeSystems and StructureDefinitions in test-cache/.fhir for FHIR R4

### Changed

- Updated test suite
- Refactored generation of index.ts files for base and generated content
- Completed generator code for the generation of complex-types

### Removed

- Eliminated the generation of complex-types for the SimpleQuantity and MoneyQuantity profiles
- Eliminated the generation of ElementDefinition complex-type


## [0.5.1] - 2025-05-22

### Changed

- Updated dependencies
- Minor code tweaks for clean up of generated complex types


## [0.5.0] - 2025-05-21

### Added

- Cloned fhir-data-type.ts from @paq-ts-fhir/fhir-core to remove its dependency in the Generator project

### Changed

- Continued development for complex data types adding multiple Handlebars partial templates
- Reverted the `complex-type` filter to previous approach and added 'SimpleQuantity' and 'MoneyQuantity'


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
