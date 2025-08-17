---
title: Data Model Features
---

# FHIR Data Model Common Features

All data models were designed with a set of common approaches and features that will govern how they are used in
your development.

## Abstract Base Class Implementation

The abstract `Base` class is the root of the class hierarchy.
All other base classes, and therefore all classes that extend these base classes, extend `Base`.
While the FHIR specification does not define properties or methods for `Base`, this `Base` class contains methods
that are common to all data models.

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
  (not including the FHIR `time` string primitive)

## FHIR Data Validation

The data model package does not include FHIR validation as it is generally understood.
FHIR validation is a complex topic and is beyond the scope of this package.
See [FHIR Validation](../UserGuide.md#fhir-validation) for more information.
That said, the data models are designed to provide basic data validation as follows:

- **Cardinality:** Cardinality is handled by the "getters" for a supported data type of the data element.
  - Data elements having a cardinality of `0..1` or `1..1` have "get" methods that allow only a single value.
  - Data elements having a cardinality of `0..*` or `1..*` have "get" methods that require an array of values and "add"
    methods that allow only a single value.
- **Required Data Elements:** All "required" data elements (`max` cardinality >= 1) are validated to ensure they are present.
  This is achieved during serialization (instance `toJSON()` method) and deserialization (static `parse()` method).
  If a required data element is found missing during processing, a `FhirError` is thrown.
  See [Required vs. Optional Fields](#required-vs-optional-fields) below for more information.
- **Data Type Usage:** All data elements are validated to ensure the correct data type is provided.
  All "get" and "add" methods are type-safe and will throw an error (`InvalidTypeError` or `PrimitiveTypeError`)
  if the data element is not of the correct type or correct value.
  - **Primitives:** Ultimately, all data is expressed as [FHIR Primitive Types](https://hl7.org/fhir/datatypes.html#primitive).
    Primitive types are defined as TypeScript types (e.g., `fhirBase64Binary`, `fhirBoolean`, etc.) and are implemented
    using the [Zod](https://zod.dev/) library.
    Zod "schemas" for each type were created using the FHIR primitive type regular expressions and any specified limits.
    FHIR regexs are used "as is" without modification EXCEPT the addition of start (`^`) and end (`$`).
    For example, the `fhirId` type is defined as: `z.string().regex(/^[A-Za-z0-9\-\.]{1,64}$/)`.
    Validation failures for primitive values are reported as `PrimitiveTypeError`.
  - **FHIR Codes:** The primitive FHIR `code` primitive type is a special case.
    When a primitive `code` is defined in the resource's `StructureDefinition` with a `binding.strength` of `required`
    and a `binding.valueSet` URL that associates a FHIR `ValueSet` that is composed by a single `CodeSystem`, a
    "pseudo-enumeration" class is generated based on the `CodeSystem`.
    This class is used to represent the valid `code` values and to support validation of allowed `code` values.
    The `fhirCode` type is restricted to the `code` values defined in the `CodeSystem`.
    Validation failures for `fhirCode` values are reported as `InvalidCodeError`.
  - **FHIR Date/DateTime/Instant:** The primitive FHIR `date`, `dateTime` and `instant` primitive types are also special
    cases.
    The `fhirDate`, `fhirDateTime` and `fhirInstant` primitive types are defined using the FHIR specification's regular
    expressions for `date`, `dateTime` and `instant` respectively.
    These regular expressions are generally accurate, but edge cases exist where an invalid value is allowed.
    To catch these edge cases, the `fhirDate`, `fhirDateTime` and `fhirInstant` types make use of the
    [Luxon](https://moment.github.io/luxon/) library to validate the values.
    Validation failures for `date`, `dateTime` and `instant` values are reported as `InvalidDateError`.
    See [Date/DateTime/Instant Data Types](#datedatetimeinstant-data-types) below for more information.
  - **FHIR Choice Types:** [Choice](https://hl7.org/fhir/formats.html#choice) data types are supported.
    TypeScript decorators are used to define allowed data types and to validate that only the allowed data types are
    provided.
    These decorators throw an `InvalidTypeError` if the data type is not allowed.
  - **FHIR Reference Type:** FHIR `Reference` data types are supported.
    A TypeScript decorator is used to validate that only the allowed data reference values are provided.
    These decorators throw an `InvalidTypeError` if the reference value is not allowed.

## Required vs. Optional Fields

Data model private "fields" are defined from their corresponding FHIR `ElementDefinition` and can be classified as:

- Optional single field (cardinality `0..1`) - single data element
- Required single field (cardinality `1..1`) - single data element
- Optional list field (cardinality `0..*`) - multiple data elements implemented as an array
- Required list field (cardinality `1..*`) - multiple data elements implemented as an array

All generated data models have a `constructor` method for data model initialization.
Constructor arguments only exist for "required" fields and are used to initialize the "required" fields when the
data model is instantiated.
All "required" fields default to `null` when their constructor arguments are not provided.

The "optional" vs. "required" data elements are governed by their minimum cardinality.
Within all data models, "optional" fields use `undefined` and "required" fields use `null` when no data is present.
So, JSON representations of resource data will not have keys/values for missing "optional" data elements while keys
will exist for "required" data elements having a `null` value when no data is present.

Data model serialization (instance `toJSON()` method) and deserialization (static `parse()` method) will throw a
`FhirError` if a "required" data element is missing.

## Date/DateTime/Instant Data Types

The `DateTimeUtil` namespace provides convenience wrapper functions for
[Luxon `DataTime`](https://moment.github.io/luxon/api-docs/index.html#datetime) parsing and formatting to
support FHIR specified datetime primitive data types.
These are available for independent datetime handling use cases.
They have also been incorporated in the FHIR PrimitiveType `DateType` (implements `interface DateTypeImpl`),
`DateTimeType` (implements `interface DateTimeTypeImpl`), and `InstantType` (implements`interface InstantTypeImpl`)
implementations as convenience methods.

Refer to the [Luxon DateTime Reference](luxon-reference.md) for more information.

## Choice/Open Data Types

FHIR resources can be defined wth [`Choice`](https://hl7.org/fhir/formats.html#choice)
and [`Open`](https://hl7.org/fhir/datatypes.html#open) data types.
Because the FHIR `ElementDefinition` defines the allowed data types for both "choice" and "open" data types the same way,
the data model is always generated using the "choice" decorators (`@OpenDataTypesMeta`/`@ChoiceDataTypes`) to
define/validate the allowed data types.
These decorators throw an `InvalidTypeError` if the "getter" method is provided a data type that is not allowed.

## Reference Data Types

The FHIR `Reference` data type can be used in both resource and complex type data models.
It is handled like any other complex data type element except that its "getter" methods have a decorator
(`@ReferenceTargets`) that validates the `reference` element value based on the allowed target references.
Target references are specified in the FHIR `ElementDefinition` for the data element.
This decorator throws an `InvalidTypeError` if the "getter" method is provided a reference value that is not allowed.

For example, the `Reference` data type is used in the `Patient.generalPractitioner` property.
The allowed target references are `Organization`, `Practitioner`, and `PractitionerRole`.
While `setGeneralPractitioner(new Reference.setReference('Organization/Org12345'))` will pass validation,
`setGeneralPractitioner(new Reference.setReference('RelatedPerson/Per98765'))` will fail validation because
`RelatedPerson` is not one of the allowed target references.

## Resource Data Types

The FHIR `Resource` data type is only specified for use in `Bundle` (`0..1`), `Parameters` (`0..1`), and
`DomainResource` (`0..*`).
It is handled like any other complex data type element.
The "getter" methods throw an `InvalidTypeError` if they are provided a data type that is not a resource.

## BackboneElement Classes

The [BackboneElement](https://hl7.org/fhir/types.html#BackboneElement) is a base definition for complex elements
defined as part of a resource definition — that is, elements that have children that are defined in the resource.
For example, the `Patient` resource has a `contact` property that is a `BackboneElement` that defines seven "child"
data elements representing contact parties for the patient.
The `Patient.contact` data element is a list of these contact parties (e.g., guardian, partner, friend) for the patient.

While `BackboneElement`s are implemented as separate data model classes, they are not meant to be used as independent
data models.
They should be considered a special case of complex data types and treated like any other complex data type.
Their parent "getter" methods throw an `InvalidTypeError` if they are provided a data type that is not the specific
`BackboneElement` class.
By convention, `BackboneElement` data model classes are named based on its parent property name with `Component` appended.
For example, the `Patient.contact` child data elements are implemented as the `PatientContactComponent` data model class.

## Serialization and Deserialization

All FHIR data are exchanged over networks in specific formats, such as JSON, XML, and RDF/Turtle, but JSON is the most
common format used for data exchange.
The FHIR specification defines the [JSON Representation of Resources](https://hl7.org/fhir/json.html#primitive) used
for this data exchange.
All FHIR JSON data is represented as a JSON object with a mandatory `resourceType` property that identifies the
resource type.

All generated TypeScript data model classes implement methods for serialization and deserialization of FHIR-defined
JSON objects.
Incoming JSON data is parsed by the data model's `static parse()` method.
The `static parse()` method consumes the JSON object and returns a populated instance of the FHIR data model.
Outgoing JSON data is generated by the data model's `toJSON()` method.
The `toJSON()` method returns a FHIR JSON object representing the data model instance.

Both serialization and deserialization throw a `FhirError` if the provided JSON representation is not a valid JSON
object, the JSON representation is malformed, or the JSON representation is missing "required" data elements.

> [!NOTE]
> There will be cases where the data in these FHIR data models must be saved to or retrieved from a datastore/database.
> Because of the wide variety of datastores/databases, the data model package does not provide a specific
> implementation for this use case.
> The expectation is that the datastore/database will provide some sort of adapter for this use case.
> The adapter would need to support the serialization and deserialization of FHIR JSON objects for integrating with
> these FHIR data models.

## Expected Errors

The following `Error` types are expected to be thrown by the generated data models:

- `AssertionError` - Error thrown when an assertion fails.
  Assertions are used to validate the internal data model state.
  An `AssertionError` probably indicates a bug in the data model code.

The following custom errors (extends [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error))
are expected to be thrown by the generated data models:

- `FhirError` - Error thrown when some aspect of the FHIR specification is violated.
- `InvalidCodeError` - Error thrown when an unknown code in a "code enumerator" is provided.
- `InvalidDateTimeError` - Error thrown when a Luxon DateTime object is invalid
- `InvalidTypeError` - Error thrown when an invalid type is provided
- `JsonError` - Error thrown when parsing invalid JSON data and when "required" fields are identified as missing when
  serializing or deserializing
- `PrimitiveTypeError` - Error thrown when instances of primitive types fail validation.

### Primitive Type Validation Errors

Primitive values and PrimitiveType instances always validate their values when they are set by the `constructor` and
the `setValue()` method.
If validation fails, a `PrimitiveTypeError` is thrown with a message indicating the invalid value.

When a FHIR `code` data element's definition includes a "required" terminology binding, the data element is implemented
as an `EnumCodeType`.
When the primitive (`get<Fieldname>`), PrimitiveType (`get<Fieldname>Element`), or EnumCodeType (`get<Fieldname>EnumType`)
accessors are set to an invalid code value, an `InvalidCodeError` is thrown with a message indicating the invalid code.

### DateTime Validation Errors

When using the `DateTimeUtil` namespace described above, the Luxon `DateTime` class validates its values within the
`DateTimeUtil` wrapper functions.
If validation fails within these wrapper functions, a `InvalidDateTimeError` is thrown with a message indicating the
invalid value.

### Data Model Element Validation Errors

In all data models, the following type-based accessor methods always validate their values:

- `set<Fieldname>Element` - PrimitiveType accessor method validates for an invalid single element and for invalid list elements
- `add<Fieldname>Element` - PrimitiveType accessor method validates for an invalid single element
- `set<Fieldname>` - Primitive, complex type, and BackboneElement accessor method validates for an invalid single element
  and for invalid list elements
- `add<Fieldname>` - Primitive, complex type, and BackboneElement accessor method validates for an invalid single element

For primitive validation errors, a `PrimitiveTypeError` is thrown with a message indicating the invalid value.
For all accessors the data type is validated to ensure the value is of the correct type.
If the value is not of the correct type, an `InvalidTypeError` is thrown with a message indicating the invalid type.
This includes when the value is not of the correct type for a "choice" data type (e.g., `value[x]`).

### Serialization/Deserialization Errors

The `FhirError` is thrown when the provided JSON representation is not a valid JSON object or
when the JSON representation is missing required data elements.
