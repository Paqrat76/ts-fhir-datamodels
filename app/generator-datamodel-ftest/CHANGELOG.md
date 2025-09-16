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

## [2025-09-16]

### Changed

- Updated dependency
- Updated data model tests to include additional tests for different parsing errors

### Fixed

- Resolved [issue #26](https://github.com/Paqrat76/ts-fhir-datamodels/issues/26) ensuring proper field handling
  for missing  "required" field values in `toJSON()` methods. Also, the `toJSON()` methods will no longer return
  `fieldName: null` for missing "required" field values.


## [2025-08-30]

### Changed

- Updated dependency
- Updated tests based on generator changes
- Cleaned up all test files


## [2025-08-21/1]

### Changed

- Updated dependency


## [2025-08-21]

- Initial release

### Changed

 - Updated dependency
