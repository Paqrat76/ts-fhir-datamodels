# Functional Data Model Testing

## Background

The `generator` project provides the mechanism to consume FHIR `StructureDefinition`s for a specified FHIR release
to generate TypeScript classes (data models) representing each FHIR resource, complex data type, and associated
CodeSystem pseudo-enums.
This `generator` project includes a comprehensive unit test suite.

A TypeScript library (`fhir-core`) has been created for use within the generated TypeScript classes.
This core library contains the FHIR primitive data type definitions used by the generated classes
as well as various common utilities and helpers required by the generated TypeScript classes.
This library includes its own comprehensive unit test suite.

The generated TypeScript classes are not just "plain old objects" — they are sophisticated data models.
They include private data element properties and public methods that provide for reading and modifying the values of
these data elements.
Public helper methods are provided to help identify the type of FHIR resource and to facilitate the handling
of class instances.
Additionally, they contain public methods used to serialize and deserialize the data according to the FHIR
specification.

Testing all generated classes is not possible, so we must test the patterns used to generate these data models.
FHIR resources have many common characteristics that can be defined in various patterns that are used by the
code generator templates.
These various patterns can be tested, giving us confidence that generated classes will be dependable.

Code patterns have been defined and applied to the various Handlebars templates used in the `generator`.
Testing these code patterns is necessary to ensure generated code works as expected.
To test all of these code patterns, we created two custom FHIR `StructureDefinition`s to define custom FHIR
resources that contain all the possible patterns.
These two two custom FHIR `StructureDefinition`s will be consumed by the `generator` to generate their associated
data models.
These custom generated data models are only used to perform a comprehensive set of functional tests to verify the
patterns used to create the data models result is correct code.

## Data Model Requirements

The primary custom FHIR data model shall support the following requirements:

- Extends `DomainResource`
  - **NOTE:** The FHIR `Parameters` resource that extends `Resource` will be included in the test `.fhir` cache
    rather than defining a custom FHIR `StructureDefinition`.
- Contains nested `BackboneElement`s
- Contains a shared `BackboneElement` (`StructureDefinition.contentReference`)
- Fields to represent the following data element types
  - BackboneElement type (represents a separate generated "component" class)
  - Choice data type (uses TypeScript decorators) (single field only)
  - Complex data type
  - EnumCodeType (required internal FHIR codes extends primitive CodeType class)
  - Primitive data type
  - Reference data type (uses TypeScript decorators)
  - Resource data type (optional single field only)
    > NOTE: While no specific rule exists in the FHIR specification, use of Resource as an element data type is
            limited to Bundle and Parameters. In these use cases, the data element is always a single, optional
            value (0..1).
            The exception is the DomainResource.contained. It is always an optional list (0..*).
- Private class fields define data elements containing the above data element types
  - Optional single fields (0..1) and optional list fields (0...m where m > 0) must support `undefined`
  - Required single fields (1..1) and required list fields (n...m where n > 0 and m >= n) must support `null`
- Constructors must initialize "required single fields", "required list fields", and "required EnumCodeType fields"
  where `null` is the default initialization value
- Fully defined static `parse()` method
- Fully defined `toJson()` method
- The following patterns demonstrate the characteristics for each of the above data element types:
  - Optional single field (cardinality `0..1`)
    - [ ] BackboneElement type / TBD01
    - [ ] Choice data type / **choice01**
    - [ ] Complex data type / **complex01**
    - [ ] EnumCodeType / **enumCode01**
    - [ ] Primitive data type / **primitive01**
    - [ ] Reference data type / **reference01**
    - [ ] Resource data type / **resource01**
  - Required single field (cardinality `1..1`)
    - [ ] BackboneElement type / TBD11
    - [ ] Choice data type / **choice11**
    - [ ] Complex data type / **complex11**
    - [ ] EnumCodeType / **enumCode11**
    - [ ] Primitive data type / **primitive11**
    - [ ] Reference data type / **reference11**
  - Optional list field (cardinality `0..*`)
    - [ ] BackboneElement type / TBD0x
    - [ ] Complex data type / **complex0x**
    - [ ] EnumCodeType / **enumCode0x**
    - [ ] Primitive data type / **primitive0x**
    - [ ] Reference data type / **reference0x**
  - Required list field (cardinality `1..*`)
    - [ ] BackboneElement type / TBD1x
    - [ ] Complex data type / **complex1x**
    - [ ] EnumCodeType / **enumCode1x**
    - [ ] Primitive data type / **primitive1x**
    - [ ] Reference data type / **reference1x**
- All get/set/has methods for each single field as appropriate for the data type
- All get/set/has/add/init methods for each list field as appropriate for the data type
- The `copyValues()` method uses the following patterns for each of the four cardinality characteristics:

  - Optional single field (cardinality `0..1`)

    ```typescript
    dest.xxxxFieldName = this.xxxxFieldName?.copy();
    ```

  - Required single field (cardinality `1..1`)

    ```typescript
    dest.xxxxFieldName = this.xxxxFieldName ? this.xxxxFieldName.copy() : null;
    ```

  - Optional list field (cardinality `0..*`)

    ```typescript
    const xxxxFieldNameList = copyListValues<XxxxDataType>(this.xxxxFieldName);
    dest.xxxxFieldName = xxxxFieldNameList.length === 0 ? undefined : xxxxFieldNameList;
    ```

  - Required list field (cardinality `1..*`)

    ```typescript
    const xxxxFieldNameList = copyListValues<XxxxDataType>(this.xxxxFieldName);
    dest.xxxxFieldName = xxxxFieldNameList.length === 0 ? null : xxxxFieldNameList;
    ```

- Uses appropriate utilities/helpers defined in the core library
- Uses actual FHIR primitive types defined in the core library and the generated FHIR complex types
- Uses several actual FHIR code systems (implements `IFhirCodeEnum`) to be used only for testing
  - [ ] ContributorTypeEnum: https://hl7.org/fhir/R4/codesystem-contributor-type.html
  - [ ] ConsentStateEnum: https://hl7.org/fhir/R4/codesystem-consent-state-codes.html
  - [ ] TaskCodeEnum: https://hl7.org/fhir/R4/codesystem-task-code.html
  - [ ] TaskStatusEnum: https://hl7.org/fhir/R4/codesystem-task-status.html
- Uses a simple custom FHIR data model to be used for testing `DomainResource.contained`

## Data Model Definition

Refer to examples:

- [Hand-crafted data models](https://github.com/Paqrat76/typescript-hapi-models-poc/tree/main/src/test-models)
- [Hand-crafted data model tests](https://github.com/Paqrat76/typescript-hapi-models-poc/tree/main/test/test-models)

### TestDataModel Base Requirements

BackboneElement nesting:

- TestDataModelPrimitiveComponent
- TestDataModelComplexComponent
  - TestDataModelReferenceComponent
    - TestDataModelEnumCodeComponent
      - TestDataModelPrimitiveComponent (`StructureDefinition.contentReference`)

### TestDataModel Class Definitions

- TestDataModel (`DomainResource`)

  - `resourceType`: `TestDataModel`
  - `fhirType()` => `TestDataModel`
  - choice01[x]?: `Range` | `Quantity` | `undefined`;
  - resource01?: `Resource` | `undefined`;
  - backbonePrimitive0x?: `TestDataModelPrimitiveComponent[]` | `undefined`;
  - backboneComplex01?: `TestDataModelComplexComponent` | `undefined`;

- TestDataModelPrimitiveComponent (`BackboneElement`)

  - primitive01?: `DateTimeType` | `undefined`;
  - primitive0x?: `IntegerType[]` | `undefined`;
  - primitive11: `BooleanType` | `null`;
  - primitive1x: `StringType[]` | `null`;
  - choice11[x]: `UriType` | `StringType` | `null`;

- TestDataModelComplexComponent (`BackboneElement`)

  - complex01?: `HumanName` | `undefined`;
  - complex0x?: `Address`[] | `undefined`;
  - complex11: `Dosage` | `null`;
  - complex1x: `Period[]` | `null`;
  - backboneReference11: `TestDataModelReferenceComponent` | `null`;

- TestDataModelReferenceComponent (`BackboneElement`)

  - reference01?: `Reference` | `undefined`; // ANY
  - reference0x?: `Reference[]` | `undefined`; // `Practitioner`, `PractitionerRole`, `Organization`
  - reference11: `Reference` | `null`; // `Patient`, `SimplePersonModel` (for testing `contained`)
  - reference1x: `Reference[]` | `null`; // `Condition`
  - backboneEnumCode1x: `TestDataModelEnumCodeComponent[]` | `null`;

- TestDataModelEnumCodeComponent (`BackboneElement`)

  - enumCode01?: `EnumCodeType` | `undefined`; // `TaskCodeEnum`
  - enumCode0x?: `EnumCodeType[]` | `undefined`; // `ContributorTypeEnum`
  - enumCode11: `EnumCodeType` | `null`; // `TaskStatusEnum`
  - enumCode1x: `EnumCodeType[]` | `null`; // `ConsentStateEnum`
  - backbonePrimitive01?: `TestDataModelPrimitiveComponent` | `undefined`;

### SimplePersonModel Class Definition

**NOTE:** Used for `DomainResource.contained` testing

- SimplePersonModel (`DomainResource`)

  - `resourceType`: `SimplePersonModel`
  - `fhirType()` => `SimplePersonModel`
  - identifier?: Identifier | undefined;
  - name?: HumanName | undefined;
  - address?: Address[] | undefined
  - phone?: StringType | undefined
