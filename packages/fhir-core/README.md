# FHIR Core Library

This `@paq-ts-fhir/fhir-core` package is a TypeScript library providing common base data models, primitive FHIR data
types, custom errors, and various utilities required by the FHIR release-specific generated data model packages.

This package is the sole dependency of the FHIR release-specific generated data model packages.
It is not designed or intended for general use in any other context.

## Background

The design of the generated FHIR release-specific data models is inspired by the data models defined in the
[HAPI FHIR](https://hapifhir.io/) Java library.
Separate packages in the parent mono-repository contain the FHIR release-specific generated data models.
Each of those packages depend on this `@paq-ts-fhir/fhir-core` package.
The only dependencies of this package are:

- [Luxon](https://moment.github.io/luxon/) library
- [Zod](https://zod.dev/) library

## FHIR Specifications

- [FHIR R4](https://hl7.org/fhir/R4)
- [FHIR R4B](https://hl7.org/fhir/R4B)
- [FHIR R5](https://hl7.org/fhir/R5)
- [FHIR (6.0.0-ballot3)](https://hl7.org/fhir/6.0.0-ballot3)
- [FHIR (CI-build)](https://build.fhir.org/index.html)
