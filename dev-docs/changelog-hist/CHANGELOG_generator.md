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

## [2025-08-21]

### Changed

- Updated generator's JSDoc comments for the generated index.ts for generated doc content
- Jest snapshot test updates for generated doc content

## [2025-08-20]

### Changed

- Changed compilation output from `dist` to `lib`
- Helper function `getFhirPackage()` by adding optional argument `baseOutputPath` used to override the default output
  path `src` for the generated content in the FHIR release specific packages.
- Updated tests as needed

### Removed

- Unnecessary `version` property from this "private" `package.json`

## [0.14.1] - 2025-08-17

### Changed

- Updated README documentation
- Updated fhir-core library exports in the generated index.ts
- Snapshot testing for generated root index.ts
- Updated dependencies
- Resolved linting issues in generated code due to updated ESLint version
- Updated Handlebars templates to support tweaks to the generated Typedoc documentation

### Fixed

- Resource parsing issue: add check for existence of `resourceType` property

## [0.14.0] - 2025-07-29

### Added

- Configuration to support "istanbul ignore" for testing purposes

## [0.13.0] - 2025-07-25

### Changed

- Refactored tests for elimination of "base" directory
- Modified generator to combine all generated complex datatypes into a single file to resolve circular references
- Simplified field naming in TestModel.fsh (renamed from TestDataModel.fsh)

### Removed

- Eliminated use of "base" directory for parsable-xxx-map files

### Fixed

- Various minor issues identified from functional tests

## [0.12.0] - 2025-07-12

### Changed

- Updated dependencies
- Updated Generator app, utilities, and templates to resolve issues in generated content
- Updated/added unit tests

### Removed

- All "base" content - no longer needed after refactorings in @paq-ts-fhir/fhir-core
- All function tests and associated test materials

## [0.11.0] - 2025-06-30

### Added

- TypeScript script to generate the FHIR data models for functional testing

### Changed

- Updated dependencies
- Updated the generator test FHIR caches
- Refactored how to set debug mode for the generator
- Changed referenced resources in TestDataModel StructureDefinition to reduce the number of dependencies
-

### Fixed

- Bug where CodeSystem hierarchical code levels were not handled
- Bug where more than one field has an EnumCodeType using the same Enum class resulting in duplicate declarations

## [0.10.0] - 2025-06-25

### Added

- Separate fhir-cache (.fhir) directories into separate unit and functional test caches
- Separate `generator-app.test.ts` for functional testing
- `generateLicenseContent()` and `generateModuleContent()` for generated content

### Changed

- Reorganized generator testing into separate unit and functional test directories
- Updated unit tests

### Removed

- Original `test-cache` directory
- Commented out code blocks

### Fixed

- Several minor bugs revealed by updated tests

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
