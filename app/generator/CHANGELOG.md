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

## [2025-08-23]

### Fixed

- `fixFhirHyperLinks()` function to handle HTML anchor "href" values in addition to Markdown hyperlinks
- The population of `HbsCodeSystemConcept.display` value by adding `fixDescriptiveString(concept.display)`
  and fixed the HBS template to NOT HTML-escape the value
- The issue with missing import for MonetaryComponent complex type
- The issue with 'instance' being used both as a resource field name and a variable name


## [2025-08-21]

- Initial release
