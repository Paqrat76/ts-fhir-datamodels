# generator-datamodel-ftest

This project is intended to simulate the production projects for FHIR data models.
It contains a limited FHIR cache (`.fhir`) containing the custom FHIR StructureDefinitions used to generate two custom
FHIR data models along with all dependent FHIR artifacts for resources, complex data types, and selected ValueSets and
CodeSystems.
The generated content in this project is used specifically for functional testing of these generated code files.

## Background

The `generator` project provides the mechanism to consume FHIR `StructureDefinition`s for a specified FHIR release
to generate TypeScript classes (data models) representing each FHIR resource, complex data type, and associated
CodeSystem pseudo-enums.
This `generator` project includes a comprehensive unit test suite that focuses on the generator itself.

A TypeScript library (`fhir-core`) has been created for use within the generated TypeScript classes.
This core library contains the base classes and the FHIR primitive data type definitions used by the
generated classes as well as various common utilities and helpers required by the generated TypeScript classes.
This library includes its own comprehensive unit test suite.

The generated TypeScript classes are not just "plain old objects" — they are sophisticated data models.
They include private data element properties and public methods that provide for reading and modifying the values of
these data elements along with additional convenience methods.
Public methods are provided to help identify the type of FHIR resource and to facilitate the handling
of class instances.
Additionally, they contain public methods used to serialize and deserialize the data according to the FHIR
specification.

Testing all generated classes is not possible, so we must test the patterns used to generate these data models.
FHIR resources have many common characteristics that can be defined in various patterns that are used by the
code generator templates.
These various patterns can be tested, giving us confidence that generated classes will be dependable.
Refer to [# FHIR Data Model Design](../../dev-docs/fhir-data-model-design.md) for more information.
