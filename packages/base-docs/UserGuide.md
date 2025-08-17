---
title: User Guide
children:
  - ./sub-docs/data-model-usage.md
  - ./sub-docs/data-model-features.md
  - ./sub-docs/luxon-reference.md
---

# User Guide for FHIR Data Models

The FHIR data models were designed to provide a developer-friendly, type-safe, and easy-to-use way to work with FHIR
resources in Node.js environments.
TypeScript classes are generated for each FHIR resource and complex type as defined in their corresponding
FHIR `StructureDefinition` for their specific FHIR release (`R4`, `R5`, etc.).

Additional "component" classes are also generated for each `BackboneElement` defined in a resource.
While generated as separate classes, these "component" classes have no meaning on their own and should only be used
as a special data type within a resource.

Finally, "pseudo-enumeration" classes based on a FHIR `CodeSystem` were generated for each `code` element defined
in a resource or complex type.
These are generated when the `code` element has a `binding.strength` of `required` with a `binding.valueSet` URL for
a `ValueSet` that is composed by a single `CodeSystem`.
These classes are used to represent the enumerated values of `code` elements required by a data element and to support
validation of allowed code values.

Each FHIR data model package has a single dependency on the `@paq-ts-fhir/fhir-core` package.
The `@paq-ts-fhir/fhir-core` package contains the base data model classes and interfaces, the primitive data types and
PrimitiveType classes, and all the utilities required by the generated data models.
There is no need to directly use the `@paq-ts-fhir/fhir-core` package in your project because the required base
classes and interfaces and the primitive data types and PrimitiveType classes are re-exported by the generated data
model package for your convenience.

## Data Model Class Hierarchy

The FHIR data model class hierarchy is based on the [FHIR Type Framework](https://hl7.org/fhir/types.html).
Abstract base classes and their associated interfaces, defined in the `@paq-ts-fhir/fhir-core` library, are implemented
based on the abstract types defined in this FHIR Type Framework.
These include:

- `Base`
  - `Element`
    - `BackboneElement`
    - `DataType`
      - `BackboneType`
      - `PrimitiveType<T>`
  - `Resource`
    - `DomainResource`

All generated data models extend the abstract base classes described above.
All FHIR resource data models extend either `Resource` or `DomainResource`.
According to the FHIR specification, only `DomainResource`, `Bundle`, `Parameters`, and `Binary` extend `Resource`.
All other FHIR resources extend `DomainResource`.
All FHIR complex data types extend either `DataType` or `BackboneType`.
All FHIR primitive data types extend `PrimitiveType<T>` where `T` represents the FHIR primitive as defined in the
[FHIR Specification](https://www.hl7.org/fhir/datatypes.html#primitive) and implemented in the `@paq-ts-fhir/fhir-core`
library.

## FHIR Artifacts Used in Generation of Data Models

Each release of the FHIR specification includes a set of JSON definition files used to describe various FHIR artifacts.
The primary FHIR artifact used by the data model generator is the
[`StructureDefinition`](https://www.hl7.org/fhir/structuredefinition.html).
The `StructureDefinition` describes a structure — a set of metadata and a set of data element definitions along with
their associated usage rules.
The most important part of the `StructureDefinition`, used by the data model generator, is its
`StructureDefinition.snapshot.element` which contains an array of
[`ElementDefinition`](https://www.hl7.org/fhir/elementdefinition.html) objects describing each element (resource
"field") within the resource.
The `ElementDefinition` or "field" definition includes:

- Element identification
- Element documentation
- Cardinality (min/max number of data elements expressed as `m..n` where `m` represents the min and `n` represents the max)
- Data type definition
- Terminology "binding" (binds terminology definitions to a "coded" data type)
- Many other attributes not needed by the data model generator

## FHIR Validation

References:

- "Validating Resources" page in the FHIR specification provides an overview of how the FHIR specification supports
  validation of resources, including several validation methods:
  - [FHIR R4 Validating Resources](https://www.hl7.org/fhir/R4/validation.html)
  - [FHIR R5 Validating Resources](https://www.hl7.org/fhir/R5/validation.html)
  - [FHIR CI Build Validating Resources](https://build.fhir.org/validation.html)
- [Using the FHIR Validator](https://confluence.hl7.org/spaces/FHIR/pages/35718580/Using+the+FHIR+Validator): Documents
  the use of the FHIR Validator jar for validation

The data model package does not include FHIR validation as it is generally understood.
FHIR validation options are highlighted in the subsections below.
That said, the data models are designed to provide basic data validation described in
[FHIR Data Validation](./sub-docs/data-model-features.md#fhir-data-validation).

### FHIR Validator

The FHIR Validator provides the most complete validation of FHIR resources.
It is a Java application that can be run from the command line or from a Java application.
It provides validation of resources against the FHIR `StructureDefinition`s covering:

- **Structure**: Check that all the content in the resource is as described by the specification, and nothing extra is present
- **Cardinality**: Check that the cardinality of all properties is correct (`min` and `max`)
- **Values**: Check that the values of all properties conform to the rules for the specified types
  (including checking that enumerated codes are valid)
- **Bindings**: Check that codes/displays provided in the Coding/CodeableConcept types are valid
- **Invariants**: Check that the invariants (co-occurrence rules, etc.) have been followed correctly
- **Profiles**: Check that any rules in profiles have been followed (including those listed in the Resource.meta.profile,
  or in CapabilityStatement, or in an ImplementationGuide, or otherwise required by context)
- **Questionnaires**: Check that a QuestionnaireResponse is valid against its matching Questionnaire

To validate a data model instance, you must serialize the data model instance to JSON and then validate the JSON
using the FHIR Validator.

The following links provide online FHIR validation:

- HL7 Online [FHIR Validator](https://validator.fhir.org/): Manually enter or upload resources for validation
- Inferno Online [Resource Validator](https://inferno.healthit.gov/validator/): Manually enter or upload resources
  for validation

The following NPM packages provide Node.js wrappers for the FHIR Validator:

- [fhir-validator-wrapper](https://www.npmjs.com/package/fhir-validator-wrapper)
- [fhir-validator-js](https://www.npmjs.com/package/fhir-validator-js)

### JSON Schema for Validation

The FHIR specification includes a JSON Schema file that defines the structure of the FHIR resources.
The JSON Schema file can be used by JSON validators to validate the JSON representation of a FHIR resource.
It provides validation of resources against the FHIR `StructureDefinition` covering:

- **Structure**: Check that all the content in the resource is as described by the specification, and nothing extra is present
- **Cardinality**: Check that the cardinality of all properties is correct (`min` and `max`)
- **Values**: Check that the values of all properties conform to the rules for the specified types
  (including checking that enumerated codes are valid)
- **Profiles**: Check that any rules in profiles have been followed (slicing is partially supported)

To validate a data model instance, you must serialize the data model instance to JSON and then validate the JSON
using a JSON validator that supports the FHIR JSON Schema.

The JSON Schema files can be downloaded from the FHIR specification "Downloads" page:

- [FHIR R4 JSON Schema](https://www.hl7.org/fhir/R4/downloads.html)
- [FHIR R5 JSON Schema](https://www.hl7.org/fhir/R5/downloads.html)
- [FHIR CI Build JSON Schema](https://build.fhir.org/downloads.html)

A Node.js package is available to validate a data model instance against the FHIR JSON Schema:

- [@bluehalo/fhir-json-schema-validator](https://www.npmjs.com/package/@bluehalo/fhir-json-schema-validator)
