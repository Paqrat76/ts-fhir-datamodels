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

## [2026-08-20]

### Added

- Generated (JetBrains AI) app/generator/src/generator-lib/README-generator-lib.md to document the core data model generator code for future maintenance

### Changed

- Changed minimum Node/NPM versions to lts/krypton (24.11/11.6.1) throughout the mono-repo
- Updated dependencies/devDependencies throughout the mono-repo
- Minor content fixes to dev-docs/fhir-data-model-design.md
- Updated tsconfig's compilerOptions for module, target, and lib supporting Node v24 LTS

### Fixed

- Fixed the project developer's email address throughout the mono-repo

### Security

- Added "allowScripts" for "unrs-resolver@1.12.2"
- Fixed CVE-2026-14257 and CVE-2026-69152


## [2026-07-11]

### Changed

- Updated dependencies
- Updated eslint version and configuration
- Updated several generated copyright dates in Jest snapshots
- Updated email address in all package.json files

### Fixed

- Fixed several minor eslint issues


## [2025-09-16]

### Changed

- Updated dependencies
- Updated eslint configuration


## [2025-09-13]

### Changed

- Updated dependencies
- Updated eslint configuration


## [2025-09-03]

### Changed

- Updated dependencies

### Removed

- `./docs-site` from `main` branch; Will use permanent `gh-pages` branch for publishing `./docs-site`


## [2025-08-30]

### Added

- CONTRIBUTING.md and SECURITY.md files

### Changed

- Updated dependencies
- Updated `fhir-core` and `generator` to resolve [issue #21](https://github.com/Paqrat76/ts-fhir-datamodels/issues/21)
- Re-generated FHIR data models using the updated @paq-ts-fhir/fhir-core@1.1.0; These changes resolved issue #21
  making "required" field handling more permissive by elimination of thrown errors for missing "required" field
  values in "setters", `static parse()` methods, and `toJSON()` methods.
- Updated generated documentation in `docs-site/`


## [2025-08-23]

### Added

- `@paq-ts-fhir/r4b-datamodels` project
- `@paq-ts-fhir/r5-datamodels` project

### Changed

- Updated dependencies
- Updated `generator` with minor tweaks based on generation of R4B and R5 data models
- Updated `base-docs` to correct typos
- Released `@paq-ts-fhir/r4-datamodels@1.0.0`, `@paq-ts-fhir/r4b-datamodels@1.0.0`. `@paq-ts-fhir/r5-datamodels@1.0.0`
- Updated generated documentation in `docs-site/`


## [2025-08-21/1]

### Changed

- Released `@paq-ts-fhir/fhir-core@1.0.0-rc.1`, `@paq-ts-fhir/r4-datamodels@1.0.0-rc.1`
- Updated generated documentation in `docs-site/`


## [2025-08-21]

- Initial release
  - `@paq-ts-fhir/fhir-core@1.0.0-rc.0`
  - `@paq-ts-fhir/r4-datamodels@1.0.0-rc.0`
  - Updated generated documentation in `docs-site/`
