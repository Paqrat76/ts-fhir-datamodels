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

These custom resource data models make use of standard FHIR data types and reference standard FHIR resources.
The primitive FHIR data types are defined in `@paq-ts-fhir/fhir-core`.
The complex FHIR data types are generated along with the FHIR resources.
A separate FHIR cache (`.fhir`) was created in `functional-test/ftest-cache` to contain the two custom FHIR
resources along with all dependent FHIR resources and complex data types.
Additionally, ValueSets and CodeSystems required to generate the pseudo-enum classes for those used by
the `code` primitive data type having a "required" ValueSet binding are included.

## Data Model Requirements

The primary custom FHIR data model shall support the following requirements:

- Extends `DomainResource`
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
    > limited to Bundle and Parameters. In these use cases, the data element is always a single, optional
    > value (0..1).
    > The exception is the DomainResource.contained. It is always an optional list (0..\*).
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
  - backbonePrimitive0x?: `TestDataModelPrimitiveComponent[]` | `undefined`
  - backboneComplex01?: `TestDataModelComplexComponent` | `undefined`

- TestDataModelPrimitiveComponent (`BackboneElement`)
  - primitive01?: `DateTimeType` | `undefined`
  - primitive0x?: `IntegerType[]` | `undefined`
  - primitive11: `BooleanType` | `null`
  - primitive1x: `StringType[]` | `null`
  - choice11[x]: `UriType` | `StringType` | `null`

- TestDataModelComplexComponent (`BackboneElement`)
  - complex01?: `HumanName` | `undefined`
  - complex0x?: `Address`[] | `undefined`
  - complex11: `Dosage` | `null`
  - complex1x: `Period[]` | `null`
  - backboneReference11: `TestDataModelReferenceComponent` | `null`

- TestDataModelReferenceComponent (`BackboneElement`)
  - reference01?: `Reference` | `undefined` // ANY
  - reference0x?: `Reference[]` | `undefined` // `Practitioner`, `PractitionerRole`, `Organization`
  - reference11: `Reference` | `null` // `SimplePersonModel` (for testing `contained`)
  - reference1x: `Reference[]` | `null` // `HealthcareService`
  - backboneEnumCode1x: `TestDataModelEnumCodeComponent[]` | `null`

- TestDataModelEnumCodeComponent (`BackboneElement`)
  - enumCode01?: `EnumCodeType` | `undefined` // `TaskCodeEnum`
  - enumCode0x?: `EnumCodeType[]` | `undefined` // `ContributorTypeEnum`
  - enumCode11: `EnumCodeType` | `null` // `TaskStatusEnum`
  - enumCode1x: `EnumCodeType[]` | `null` // `ConsentStateEnum`
  - backbonePrimitive01?: `TestDataModelPrimitiveComponent` | `undefined` (`StructureDefinition.contentReference`)

### SimplePersonModel Class Definition

**NOTE:** Used for `DomainResource.contained` testing

- SimplePersonModel (`DomainResource`)
  - `resourceType`: `SimplePersonModel`
  - `fhirType()` => `SimplePersonModel`
  - identifier?: Identifier | undefined;
  - name?: HumanName | undefined;
  - address?: Address[] | undefined
  - phone?: StringType | undefined

## Minimum Requirements for the Test FHIR Cache (`.fhir`)

The required base classes are defined separately in the `base` directory and do not need to be included in the FHIR cache.
Also, primitive data types are defined in `@paq-ts-fhir/fhir-core` and do not need to be included.

### Custom FHIR Resources

- `TestDataModel`
- `SimplePersonModel`

### Dependent FHIR Resources for References

Direct dependencies:

- `HealthcareService`
- `Practitioner`
- `PractitionerRole`
- `Organization`

Indirect dependencies (references in direct dependencies):

- For `HealthcareService`
  - `Organization`
  - `Location`
  - `Endpoint`
- For `Practitioner`
  - `Organization`
- For `PractitionerRole`
  - `Practitioner`
  - `Organization`
  - `HealthcareService`
  - `Endpoint`
- For `Organization`
  - `Organization`
  - `Endpoint`

Indirect dependencies (references in indirect dependencies):

- For `Location`
  - `Organization`
  - `Location`
  - `Endpoint`
- For `Endpoint`
  - `Organization`
- For `Signature`
  - `Device`
  - `Organization`
  - `Patient`
  - `PractitionerRole`
  - `Practitioner`
  - `RelatedPerson`
- For `Device`
  - `DeviceDefinition`
  - `Device`
  - `Location`
  - `Organization`
  - `Patient`
- For `DeviceDefinition`
  - `DeviceDefinition`
  - `Organization`
- For `Patient`
  - `Organization`
  - `Patient`
  - `PractitionerRole`
  - `Practitioner`
- For `RelatedPerson`
  - `Patient`

### FHIR Complex Data Types

**Data Types:**

- `Address`
- `Age`
- `Annotation`
- `Attachment`
- `CodeableConcept`
- `Coding`
- `ContactPoint`
- `Count`
- `Distance`
- `Duration`
- `HumanName`
- `Identifier`
- `Money`
- `Period`
- `Quantity`
- `Range`
- `Ratio`
- `SampledData`
- `Signature`
- `Timing`

**MetaData Types:**

- `ContactDetail`
- `Contributor`
- `DataRequirement`
- `Expression`
- `ParameterDefinition`
- `RelatedArtifact`
- `TriggerDefinition`
- `UsageContext`

**Special Types:**

- `Dosage`
- `Meta`
- `Narrative`
- `Reference`

**R4 Under Development Types:** (Required by resource `DeviceDefinition`)

- `ProdCharacteristic`
- `ProductShelfLife`

### Dependent ValueSets/CodeSystems

Resources:

- For `TestDataModel`
  - http://hl7.org/fhir/ValueSet/consent-state-codes / http://hl7.org/fhir/consent-state-codes
  - http://hl7.org/fhir/ValueSet/contributor-type / http://hl7.org/fhir/contributor-type
  - http://hl7.org/fhir/ValueSet/task-code / http://hl7.org/fhir/CodeSystem/task-code
  - http://hl7.org/fhir/ValueSet/task-status / http://hl7.org/fhir/task-status
- For `SimplePersonModelModel` - N/A
- For `HealthcareService`
  - http://hl7.org/fhir/ValueSet/days-of-week / http://hl7.org/fhir/days-of-week
- For `Practitioner`
  - http://hl7.org/fhir/ValueSet/administrative-gender / http://hl7.org/fhir/administrative-gender
- For `PractitionerRole`
  - http://hl7.org/fhir/ValueSet/days-of-week / http://hl7.org/fhir/days-of-week
- For `Organization` - N/A
- For `Location`
  - http://hl7.org/fhir/ValueSet/location-status / http://hl7.org/fhir/location-status
  - http://hl7.org/fhir/ValueSet/location-mode / http://hl7.org/fhir/location-mode
  - http://hl7.org/fhir/ValueSet/days-of-week / http://hl7.org/fhir/days-of-week
- For `Endpoint`
  - http://hl7.org/fhir/ValueSet/endpoint-status / http://hl7.org/fhir/location-mode
  - http://hl7.org/fhir/ValueSet/mimetypes / NON-FHIR CodeSystem
- For `Device`
  - http://hl7.org/fhir/ValueSet/udi-entry-type / http://hl7.org/fhir/udi-entry-type
  - http://hl7.org/fhir/ValueSet/device-status / http://hl7.org/fhir/device-status
  - http://hl7.org/fhir/ValueSet/device-nametype / http://hl7.org/fhir/device-nametype
- For `DeviceDefinition`
  - http://hl7.org/fhir/ValueSet/device-nametype / http://hl7.org/fhir/device-nametype
- For `Patient`
  - http://hl7.org/fhir/ValueSet/administrative-gender / http://hl7.org/fhir/administrative-gender
  - http://hl7.org/fhir/ValueSet/link-type / http://hl7.org/fhir/link-type
- For `RelatedPerson`
  - http://hl7.org/fhir/ValueSet/administrative-gender / http://hl7.org/fhir/administrative-gender

Complex Data Types:

- For `Address`
  - http://hl7.org/fhir/ValueSet/address-type / http://hl7.org/fhir/address-type
  - http://hl7.org/fhir/ValueSet/address-use / http://hl7.org/fhir/address-use
- For `Age` - N/A
- For `Annotation` - N/A
- For `Attachment`
  - http://hl7.org/fhir/ValueSet/mimetypes / NON-FHIR CodeSystem
  - http://hl7.org/fhir/ValueSet/languages / NON-FHIR CodeSystem
- For `CodeableConcept` - N/A
- For `Coding` - N/A
- For `ContactDetail` - N/A
- For `ContactPoint`
  - http://hl7.org/fhir/ValueSet/contact-point-system / http://hl7.org/fhir/contact-point-system
  - http://hl7.org/fhir/ValueSet/contact-point-use / http://hl7.org/fhir/contact-point-use
- For `Contributor`
  - http://hl7.org/fhir/ValueSet/contributor-type / http://hl7.org/fhir/contributor-type
- For `Count` - N/A
- For `DataRequirement`
  - http://hl7.org/fhir/ValueSet/all-types / MULTIPLE CodeSystems
  - http://hl7.org/fhir/ValueSet/sort-direction / http://hl7.org/fhir/sort-direction
- For `Distance` - N/A
- For `Dosage` - N/A
- For `Duration` - N/A
- For `Expression` - N/A
- For `HumanName`
  - http://hl7.org/fhir/ValueSet/name-use / http://hl7.org/fhir/name-use
- For `Identifier`
  - http://hl7.org/fhir/ValueSet/identifier-use / http://hl7.org/fhir/identifier-use
- For `Meta` - N/A
- For `Money`
  - http://hl7.org/fhir/ValueSet/currencies / NON-FHIR CodeSystem
- For `Narrative`
  - http://hl7.org/fhir/ValueSet/narrative-status / http://hl7.org/fhir/narrative-status
- For `ParameterDefinition`
  - http://hl7.org/fhir/ValueSet/operation-parameter-use / http://hl7.org/fhir/operation-parameter-use
  - http://hl7.org/fhir/ValueSet/all-types / MULTIPLE CodeSystems
- For `Period` - N/A
- For `Quantity`
  - http://hl7.org/fhir/ValueSet/quantity-comparator / http://hl7.org/fhir/quantity-comparator
- For `Range` - N/A
- For `Ratio` - N/A
- For `Reference` - N/A
- For `RelatedArtifact`
  - http://hl7.org/fhir/ValueSet/related-artifact-type / http://hl7.org/fhir/related-artifact-type
- For `SampledData` - N/A
- For `Signature`
  - http://hl7.org/fhir/ValueSet/mimetypes / NON-FHIR CodeSystem
- For `Timing`
  - http://hl7.org/fhir/ValueSet/days-of-week / http://hl7.org/fhir/days-of-week
  - http://hl7.org/fhir/ValueSet/units-of-time / NON-FHIR CodeSystem
  - http://hl7.org/fhir/ValueSet/event-timing / MULTIPLE CodeSystems
- For `TriggerDefinition`
  - http://hl7.org/fhir/ValueSet/trigger-type / http://hl7.org/fhir/trigger-type
- For `UsageContext` - N/A
