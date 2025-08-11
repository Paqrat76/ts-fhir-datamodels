# FHIR R4 Data Models

The TypeScript data models in this package were generated for all FHIR resources and complex types.
TypeScript classes were generated for each FHIR resource and complex type as defined by their corresponding
FHIR `StructureDefinition` for [FHIR R4](https://hl7.org/fhir/R4/index.html).

## Background

The [HAPI FHIR](https://hapifhir.io/hapi-fhir/docs/model/working_with_resources.html) ecosystem (implemented in Java)
includes data model classes representing FHIR resources and data types.
These data model classes include a number of getters and setters for the basic properties of that data model along with
many convenience methods.
These HAPI FHIR data models provided the inspiration for the design of the data models generated for this project.

A proof-of-concept (POC) project was undertaken to arrive at a design for TypeScript that could easily be applied to
generated data models.
This POC project resulted in contents for a core library that contains the base data models, implementations of the FHIR
primitive data types, and various utilities required by the data models.
These are implemented in the `@paq-ts-fhir/fhir-core` library.
The generated data model projects take this library as their sole dependency.
Additionally, a set of implementation patterns were identified to facilitate code generation of data models for
resources and complex data types.

## Data Model Classes

The FHIR data model class hierarchy is based on the [FHIR Type Framework](https://hl7.org/fhir/types.html).
All FHIR resource data models extend either `Resource` or `DomainResource`.
According to the FHIR specification, only `DomainResource`, `Bundle`, `Parameters`, and `Binary` extend `Resource`.
All other FHIR resources extend `DomainResource`.
All FHIR complex data types extend either `DataType` or `BackboneType`.
All FHIR primitive data types extend `PrimitiveType<T>` where `T` represents the FHIR primitive as defined in the
[FHIR Specification](https://www.hl7.org/fhir/datatypes.html#primitive) and implemented in the `@paq-ts-fhir/fhir-core`
library.

Additional "component" classes are also generated for each `BackboneElement` defined in a resource.
While generated as separate classes, these "component" classes have no meaning on their own and should only be used
as a special data type defined within a resource.

Finally, "pseudo-enumeration" classes based on a FHIR `CodeSystem` were generated for each `code` element defined
in a resource or complex type.
These are generated when the `code` element has a `binding.strength` of `required` with a `binding.valueSet` URL.
These classes are used to represent the values of `code` elements that are defined in the FHIR specification.

## Additional Information

**TODO:** Add the link to the `@paq-ts-fhir/fhir-core` library documentation.

For background information on the generation of these data models,
refer to content in [dev-docs](https://github.com/Paqrat76/ts-fhir-datamodels/tree/main/dev-docs).

Data model documentation is provided in `./docs/index.html`.
