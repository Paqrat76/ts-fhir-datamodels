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

- Updated dependencies

### Fixed

- [issue #26](https://github.com/Paqrat76/ts-fhir-datamodels/issues/26): Fixed the issue with generated static `parse()`
  methods throwing a JsonError when the JSON array element has null as its value.


## [2025-09-13]

### Changed

- Updated dependencies
- Minor "prettier" formatting changes in various Handlebars templates (*.hbs)

### Removed

- Commented out unit tests used for debugging


## [2025-08-30]

### Added

- Implementation of `public override isRequiredFieldsEmpty(): boolean {...}` for data models having "required" fields

### Changed

- Implementation of all "required" field "setters" to accept undefined/null values without throwing a "value is required" error
- Implementation of single "required" field "getters" to return an empty data model instance instead of returning `null` where possible;
  This is not possible for the following types (return `null` as before): primitive values (e.g., `fhirString`, etc.), choice data types, EnumCodeType, and Resource
- Implementation of `static parse()` method to accept undefined/null JSON values for "required" fields without throwing a "value is required" error
- Implementation of `toJSON()` method to return null JSON values for missing "required" fields without throwing a "value is required" error


## [2025-08-23]

### Fixed

- `fixFhirHyperLinks()` function to handle HTML anchor "href" values in addition to Markdown hyperlinks
- The population of `HbsCodeSystemConcept.display` value by adding `fixDescriptiveString(concept.display)`
  and fixed the HBS template to NOT HTML-escape the value
- The issue with missing import for MonetaryComponent complex type
- The issue with 'instance' being used both as a resource field name and a variable name


## [2025-08-21]

- Initial release
