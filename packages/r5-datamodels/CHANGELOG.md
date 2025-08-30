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

## [1.1.1]

### Fixed

- Publication failure


## [1.1.0] - 2025-08-30

### Changed

- Re-generated FHIR R5 data models using @paq-ts-fhir/fhir-core 1.1.0; These changes resolved
  [issue #21](https://github.com/Paqrat76/ts-fhir-datamodels/issues/21) making "required" field handling
  more permissive by elimination of thrown errors for missing "required" field values in "setters", `static parse()`
  methods, and `toJSON()` methods.


## [1.0.1] - 2025-08-23

### Changed

- Updated @paq-ts-fhir/fhir-core dependency


## [1.0.0] - 2025-08-23

- Initial FHIR R5 data models creation/release
