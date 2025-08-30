---
title: Release Notes
---

# Release Notes for FHIR Data Model Libraries

## Overview

The packages in this mono-repository that can be released are `@paq-ts-fhir/fhir-core` and the FHIR release-specific
packages (e.g., `@paq-ts-fhir/r4-datamodels`, `@paq-ts-fhir/r4b-datamodels`, `@paq-ts-fhir/r5-datamodels`).
These packages are published to NPM as public libraries.

The `@paq-ts-fhir/fhir-core` package is a TypeScript library providing common base data models, primitive FHIR data
types, custom errors, and various utilities required by the FHIR release-specific generated data model packages.
This package is the sole dependency of the FHIR release-specific generated data model packages.

The FHIR release-specific projects contain the generated data models for all FHIR release-specific resources and
complex types along with the "pseudo-enum" classes for a related set of FHIR `CodeSystem`s.

While it is conceivable that the `@paq-ts-fhir/fhir-core` package could be released without releasing updated
FHIR release-specific packages, the expected pattern is to release all packages together.
This document will contain release notes for each release of these packages.

## Release Notes

### Release 2025-08-23

**Summary:** This is the initial release of all the listed packages.

**Released Packages:**

- `@paq-ts-fhir/fhir-core@1.0.0`
- `@paq-ts-fhir/r4-datamodels@1.0.1`
- `@paq-ts-fhir/r4b-datamodels@1.0.1`
- `@paq-ts-fhir/r5-datamodels@1.0.1`

### Release 2025-08-30

**Summary:** This release resolved [Issue #21](https://github.com/Paqrat76/ts-fhir-datamodels/issues/21).

**Released Packages:**

- `@paq-ts-fhir/fhir-core@1.1.0`
- `@paq-ts-fhir/r4-datamodels@1.1.0`
- `@paq-ts-fhir/r4b-datamodels@1.1.0`
- `@paq-ts-fhir/r5-datamodels@1.1.0`

**What Changed:**

- The `public isRequiredFieldsEmpty(): boolean {...}` method was added to the `Base` data model.
  This method is overridden in all data models having "required" fields (min cardinality > 0).
  It should be used to determine if a data model instance has any "required" fields that are not set.
- The static `parse(...)` method was modified to no longer throw a `FhirError` if the provided JSON object is missing
  "required" fields.
  Instead, the `parse(...)` method will return a data model instance with the "required" fields set to `null`.
- The instance `toJSON(...)` method was modified to no longer throw a `FhirError` if any of the provided data model
  instance's "required" fields are not set.
  Instead, the `toJSON(...)` method will return a JSON object with the "required" fields set to `null`.
- All "setter" methods no longer throw a `FhirError` if the provided value is `undefined` or `null`.
  Instead, the "setter" method will set the "required" field value to `null`.
- All single "required" field "getter" methods no longer return `null` if the field value is `null`.
  Instead, where possible, the "getter" method will return an empty instance of the field's data model type just like
  the "optional" field "getter" methods do.
  This is not possible for the following types (each will return `null` as before):
  - Primitive values (e.g., `fhirString`, etc.)
  - Choice data types
  - EnumCodeType
  - Resource
