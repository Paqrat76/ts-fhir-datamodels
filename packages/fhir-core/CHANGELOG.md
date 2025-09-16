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

## [1.2.0] - 2025-09-16

### Changed

- Updated dependencies
- Updated complex data model tests to include additional tests for different parsing errors

### Fixed

- Resolved [issue #26](https://github.com/Paqrat76/ts-fhir-datamodels/issues/26) ensuring proper field handling
  for missing  "required" field values in `toJSON()` methods. Also, the `toJSON()` methods will no longer return
  `fieldName: null` for missing "required" field values.


## [1.1.0] - 2025-08-30

### Added

- `Base.isRequiredFieldsEmpty()` - returns `true` if and only if the data model has required fields (min cardinality > 0)
  and at least one of those required fields in the instance is empty

### Changed

- Updated dependencies
- Updated Narrative to properly handle missing required field values
- Updated unit tests to plug some coverage gaps


## [1.0.0] - 2025-08-23

### Changed

- Updated version for release


## [1.0.0-rc.1] - 2025-08-21

### Changed

- Updated README.md


## [1.0.0-rc.0] - 2025-08-21

- Initial release
