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

## [0.4.1] - 2025-08-??

### Added

### Changed

- Updated README documentation
- Updated dependency

### Deprecated

### Removed

### Fixed

### Security


## [0.4.0] - 2025-07-29

### Changed

- Updated dependency
- Moved `./src/__test__` to `./test`
- Moved `./src/gnerated` to `./src`
- Completed functional test suite

### Fixed

- Local Jest configuration to resolve intermittent Jest issue: "Cannot find module" from CLI


## [0.3.0] - 2025-07-25

### Added

- Test mocks and test utilities to facilitate functional testing
- StructureDefinition-Parameters.json to ftest-cache for functional testing for a resource that extends Resource rather than DomainResource
- Functional tests for TestModel and its component classes
- Functional tests for Parameters resource and Timing complex type

### Changed

- Update dependency
- Refactored tests for elimination of "generated/base" directory
- Refactored tests for combining all complex datatypes into a single file to resolve circular dependencies
- Updated README-Functional-Testing.md
- Updated SimplePersonModel and AddressTypeEnum functional tests


## [0.2.0] - 2025-07-12

### Added

- Functional test infrastructure
- Initial set of test data to support functional tests

### Changed

- Update dependency


## [0.1.0] - 2025-06-30

### Added

- Created initial `app/generator-datamodel-ftest` project for generated FHIR R4 test data models for functional testing
