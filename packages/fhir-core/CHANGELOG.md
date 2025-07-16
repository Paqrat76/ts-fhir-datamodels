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

## [0.6.0] 2025-07-??

### Added

### Changed

- Updated all complex data models to be consistent with generated complex data models

### Deprecated

### Removed

### Fixed

### Security


## [0.5.0] - 2025-07-12

### Changed

- Updated dependencies
- Minor code cleanup

### Fixed

- Breaking changes caused by upgrading Zod to new v4.0


## [0.4.0] - 2025-07-08

### Added

- Interfaces for each of the core model classes in library-interfaces.ts
- FhirParser class
- Unit tests to increase code coverage

### Changed

- Updated dependencies
- Moved IBase into library-interfaces.ts, deleting IBase.ts
- Updated utilities to reference the core interfaces rather than the core model classes
- Updated data type classes to reference the core interfaces rather than the core model classes
- Moved all parser utilities into new FhirParser class
- Updated all FHIR data type lists and renamed FhirDataType.ts to fhir-data-types.ts

### Removed

- FhirResourceType thereby eliminating the typing of FHIR resources types


## [0.3.4] - 2025-06-18

### Changed

- Updated dependencies
- Updated FHIR-related parsers


## [0.3.3] - 2025-05-31

### Changed

- Updated dependencies
- Eliminated all JSDoc @inheritDoc tags by filling out all header comment blocks to resolve Typedoc warnings


## [0.3.2] - 2025-05-22

### Changed

- Updated dependencies


## [0.3.1] - 2025-05-21

### Changed

- Updated dependencies


## [0.3.0] - 2025-05-16

### Changed

- Updated dependencies
- Changed export of utility/json-helpers to a named export

## [0.2.0] - 2025-05-01

### Changed

- Updated dependencies


## [0.1.0] - 2025-04-10

### Added

- Created `packages/fhir-core` project
  - Moved the `fhir-core` source and test code into `packages/fhir-core`

### Changed

- Updated dependencies and fixed associated lint issues
