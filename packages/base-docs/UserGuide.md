---
title: User Guide
children:
  - ./sub-docs/data-model-usage.md
  - ./sub-docs/data-model-features.md
  - ./sub-docs/luxon-reference.md
---

# User Guide for FHIR Data Models

The TypeScript data models in this package were generated for all FHIR resources and complex types.
TypeScript classes were generated for each FHIR resource and complex type as defined in their corresponding
FHIR `StructureDefinition` for their specific FHIR release (`R4`, `R5`, etc.).

Additional "component" classes were also generated for each `BackboneElement` defined in a resource.
While generated as separate classes, these "component" classes have no meaning on their own and should only be used
as a special data type within a resource.

Finally, "pseudo-enumeration" classes based on a FHIR `CodeSystem` were generated for each `code` element defined
in a resource or complex type.
These are generated when the `code` element has a `binding.strength` of `required` with a `binding.valueSet` URL.
These classes are used to represent the values of `code` elements that are defined in the FHIR specification.

## Data Model Class Hierarchy

The FHIR data model class hierarchy is based on the [FHIR Type Framework](https://hl7.org/fhir/types.html).
Abstract base classes and their associated interfaces, defined in the `@paq-ts-fhir/fhir-core` library, were implemented
based on the abstract types defined in this FHIR Type Framework.

### Abstract Base Class

The abstract `Base` class is the root of the class hierarchy.
All other base classes, and therefore all classes that extend these base classes, extend `Base`.
While not defined by the FHIR specification, this `Base` class contains methods that are common to all data models.

The following abstract methods are implemented in all data model classes:

- `public abstract fhirType(): string` - Returns the FHIR type name of the data model.
- `public abstract isEmpty(): boolean` - Returns `true` if the data model instance has no data, `false` otherwise.
- `public abstract copy(): any` - Creates and returns a copy of the current instance.
- `protected abstract copyValues(dest: any): void` - Copies the current instance's elements into the provided object.
  Called by `copy()` and by `super.copyValues(dest: any)` in subclassed data models' implementation of `copyValues()`.
- `public abstract toJSON(): JSON.Value | undefined` - Returns a JSON representation of the data model (serialization)
  according to the FHIR specification.

The following public methods in `Base` all return `false` and are overridden as appropriate in subclassed data models:

- `public isResource(): boolean` - Returns `true` from the `Resource` abstract class
- `public isDataType(): boolean` - Returns `true` from the `DataType` abstract class
- `public isComplexDataType(): boolean` - Returns `true` from all generated data models representing FHIR complex data types
- `public isPrimitive(): boolean` - Returns `true` from the `PrimitiveType<T>` abstract class
- `public isBooleanPrimitive(): boolean` - Returns `true` from the `BooleanType` data model
- `public isStringPrimitive(): boolean` - Returns `true` from all string-based `PrimitiveType` data models
- `public isNumberPrimitive(): boolean` - Returns `true` from all number-based `PrimitiveType` data models
- `public isBigIntPrimitive(): boolean` - Returns `true` from the `Integer64Type` data model
- `public isDateTimePrimitive(): boolean` - Returns `true` from all dateTime-based `PrimitiveType` data models

### Generated Data Model Classes

All generated data models extend the abstract base classes described above.
All FHIR resource data models extend either `Resource` or `DomainResource`.
According to the FHIR specification, only `DomainResource`, `Bundle`, `Parameters`, and `Binary` extend `Resource`.
All other FHIR resources extend `DomainResource`.
All FHIR complex data types extend either `DataType` or `BackboneType`.
All FHIR primitive data types extend `PrimitiveType<T>` where `T` represents the FHIR primitive as defined in the
[FHIR Specification](https://www.hl7.org/fhir/datatypes.html#primitive) and implemented in the `@paq-ts-fhir/fhir-core`
library.

## FHIR Artifacts Used in Generation of Data Models

The FHIR specification includes a set of JSON definition files used to describe various FHIR artifacts.
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
