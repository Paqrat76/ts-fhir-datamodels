---
title: Data Model Usage
---

# FHIR Data Model Usage

## Data Model Structure

All generated resource and complex type data models share a common structure.

> [!TIP]
> First, it is helpful to understand ["required" vs. "optional" fields](data-model-features.md#required-vs-optional-fields).

The following describes the common structure of all generated data models:

- **Constructor:** Data models have a `constructor` method for data model initialization.
  Constructor arguments only exist for "required" fields and are used to initialize the "required" fields when the
  data model is instantiated.
  All "required" fields default to `null` when their constructor arguments are not provided.
- **`public static parse()` Method:** Data models have a static `parse()` method that takes a JSON object that is
  deserialized into the object's data elements and returns a new instance of the data model.
  It is basically a static factory method that creates a new instance of the data model from a JSON object.
- **Private Field Definitions:** Data models have private fields for each data element used to store the data element's
  value.
  These private fields are only accessible through the public accessor methods for the data element.
  Their API property documentation includes their FHIR `ElementDefinition` metadata.
- **Public Accessor Methods:** Data models have public accessor methods for each data element.
  These accessor methods are used to get and set the data element's value.
  The FHIR data models have the following standard accessors that can be used in both standard and fluent style:
  - Single field (`max` cardinality = 1): Has `get`/`set`/`has` methods as appropriate for the data type
  - Array field (`max` cardinality > 1): Has `get`/`set`/`has`/`add` methods as appropriate for the data type
    > [!WARNING]
    > When dealing with "array fields," the `set` methods take an array of data elements that **replaces** the existing
    > underlying array.
    > The `add` methods take a single data element and **adds** it to the existing underlying array.
- **Abstract Base Class Implementations:** Data models implement a set of public methods defined in the `Base`
  class as abstract methods and selectively override a set of public boolean methods.
  Refer to [Abstract Base Class Implementation](data-model-features.md#abstract-base-class-implementation) for details.

## Primitive Data Type Usage

FHIR primitive data types are represented in TypeScript as `string`, `number`, `boolean`, and `BigInt()`.
They are implemented using the [Zod](https://zod.dev/) library's `z.string()`, `z.number()`, `z.boolean()`,
and `z.bigint()` methods.
These primitives are defined using [Zod schemas](https://zod.dev/api) that allow for validation and type-safety.
Validation is defined based on the FHIR specification's [primitive type](https://www.hl7.org/fhir/datatypes.html#primitive)
regular expressions and for numbers, the minimum and maximum values.
This allows the use of TypeScript's primitives while also providing validation and type-safety.

While FHIR primitive types are meant to be a single primitive value with no additional data elements, the FHIR
specification does require them to support the `id` and `extension` data elements.
This is achieved by defining the base primitive type (`PrimitiveType`) that combines the FHIR primitive type with
the base `DataType` class (that extends `Element` that extends `Base`).
The base `PrimitiveType` includes the `id` and `extension` data elements and retains the FHIR primitive type as
its `value` property.
As such, they meet the requirements of the [FHIR specification](https://www.hl7.org/fhir/datatypes.html#representations)
regarding their representation in JSON.

The following table shows the mapping among the primitive data types:

| FHIR Primitive Type                                              | TypeScript Primitive | Primitive (Zod type) | PrimitiveType      |
| ---------------------------------------------------------------- | -------------------- | -------------------- | ------------------ |
| [base64Binary](https://hl7.org/fhir/datatypes.html#base64Binary) | `string`             | `fhirBase64Binary`   | `Base64BinaryType` |
| [boolean](https://hl7.org/fhir/datatypes.html#boolean)           | `boolean`            | `fhirBoolean`        | `BooleanType`      |
| [canonical](https://hl7.org/fhir/datatypes.html#canonical)       | `string`             | `fhirCanonical`      | `CanonicalType`    |
| [code](https://hl7.org/fhir/datatypes.html#code)                 | `string`             | `fhirCode`           | `CodeType`         |
| [dateTime](https://hl7.org/fhir/datatypes.html#dateTime)         | `string`             | `fhirDateTime`       | `DateTimeType`     |
| [date](https://hl7.org/fhir/datatypes.html#date)                 | `string`             | `fhirDate`           | `DateType`         |
| [decimal](https://hl7.org/fhir/datatypes.html#decimal)           | `number`             | `fhirDecimal`        | `DecimalType`      |
| [id](https://hl7.org/fhir/datatypes.html#id)                     | `string`             | `fhirId`             | `IdType`           |
| [instant](https://hl7.org/fhir/datatypes.html#instant)           | `string`             | `fhirInstant`        | `InstantType`      |
| [integer](https://hl7.org/fhir/datatypes.html#integer)           | `number`             | `fhirInteger`        | `IntegerType`      |
| [integer64](https://hl7.org/fhir/datatypes.html#integer64)       | `BigInt`             | `fhirInteger64`      | `Integer64Type`    |
| [markdown](https://hl7.org/fhir/datatypes.html#markdown)         | `string`             | `fhirMarkdown`       | `MarkdownType`     |
| [oid](https://hl7.org/fhir/datatypes.html#oid)                   | `string`             | `fhirOid`            | `OidType`          |
| [positiveInt](https://hl7.org/fhir/datatypes.html#positiveInt)   | `number`             | `fhirPositiveInt`    | `PositiveIntType`  |
| [string](https://hl7.org/fhir/datatypes.html#string)             | `string`             | `fhirString`         | `StringType`       |
| [time](https://hl7.org/fhir/datatypes.html#time)                 | `string`             | `fhirTime`           | `TimeType`         |
| [unsignedInt](https://hl7.org/fhir/datatypes.html#unsignedInt)   | `number`             | `fhirUnsignedInt`    | `UnsignedIntType`  |
| [uri](https://hl7.org/fhir/datatypes.html#uri)                   | `string`             | `fhirUri`            | `UriType`          |
| [url](https://hl7.org/fhir/datatypes.html#url)                   | `string`             | `fhirUrl`            | `UrlType`          |
| [uuid](https://hl7.org/fhir/datatypes.html#uuid)                 | `string`             | `fhirUuid`           | `UuidType`         |
| [xhtml](https://hl7.org/fhir/narrative.html#xhtml)               | `string`             | `fhirXhtml`          | `XhtmlType`        |

All data models have one or more "primitive" data elements.
These are represented as `PrimitiveType` objects in the data models.
Convenience methods are provided to handle both primitives (e.g., `fhirString`, `fhirInteger`, etc.) and PrimitiveTypes
(e.g., `StringType`, `IntegerType`, etc.).
These methods follow a standard naming convention based on the FHIR field name: `[get|set]{upperFirst(fieldName)}` for
primitives and `[get|set]{upperFirst(fieldName)}Element` forPrimitiveTypes.
For example:

- Field name: `birthDate` for a FHIR `date` primitive
- Primitive "get"/"set" method names: `getBirthDate()` and `setBirthDate()` for `fhirDate` primitive
- PrimitiveType "get"/"set" method names: `getBirthDateElement()` and `setBirthDateElement()` for `DateType` PrimitiveType

Any primitive or PrimitiveType "setter" will throw a `PrimitiveTypeError` if the provided value does not match the
primitive's validation pattern.

> [!TIP]
> In general, use the "get"/"set" methods for primitives because they do not require the creation of a
> `PrimitiveType` instance.
> When there is a need to add extensions to primitive data elements, use the "get"/"set" methods for PrimitiveTypes
> because they allow you to add extensions to the PrimitiveType instance.

### EnumCodeType Usage

The `EnumCodeType` class extends `CodeType` to represent FHIR `code` data types that have a defined set
of allowed values.
These `EnumCodeType` class methods are defined to automatically include a specific implementation of a "pseudo-enum"
class (`IFhirCodeEnum`) that defines the allowed values.
The `IFhirCodeEnum` class is generated from a FHIR specification's [CodeSystem](https://www.hl7.org/fhir/codesystem.html)
resource when it is specified in the `ElementDefinition.binding` property for the `code` data field.
These "pseudo-enum" classes expose the allowed values as static "enumerated" properties that can be easily referenced.
Using the `EnumCodeType` provides validation of the `code` values from the associated "pseudo-enum" class.

The `EnumCodeType` PrimitiveType class is instantiated with a `fhirCode` value or `CodeType` object along with and the
"pseudo-enum" class instance that defines the allowed values.
If the provided `fhirCode` value or `CodeType` object is not for a valid `code` value, the `EnumCodeType` will
throw a `CodeTypeError`.

Since the `EnumCodeType` class extends `CodeType`, it supports the ability to add the `id` and `extension` data
elements.

In addition to the "get"/"set" methods for `fhirCode` and `CodeType` objects described above, the `EnumCodeType` class
also provides "get"/"set" methods for the `EnumCodeType`.
The "get"/"set" methods for the `EnumCodeType` class instance are named using the following naming convention:
`get{upperFirst(fieldName)}EnumType()` and `set{upperFirst(fieldName)}EnumType()` for `EnumCodeType`.
For example:

- Field name: `gender` for a FHIR `code` primitive
- Primitive "get"/"set" method names: `getGender()` and `setGender()` for `fhirCode` primitive
- PrimitiveType "get"/"set" method names: `getGenderElement()` and `setGenderElement()` for `CodeType` PrimitiveType
- EnumCodeType "get"/"set" method names: `getGenderEnumType()` and `setGenderEnumType()` for `EnumCodeType` PrimitiveType;
  These methods for `EnumCodeType` are only provided because the underlying private field is defined as an `EnumCodeType`.

Any primitive, PrimitiveType, or EnumCodeType "setter" will throw a `InvalidCodeError` if the provided value is not a
valid `code`.

> [!TIP]
> In general, use the "get"/"set" methods for primitive `code` because they do not require the creation of a
> `CodeType` or `EnumCodeType` instance.
> When there is a need to add extensions to primitive `code` elements, use the "get"/"set" methods for `CodeType`
> because they allow you to add extensions to the `CodeType` instance and because they do not require the creation of
> an `EnumCodeType` instance.
> While it is permissible to use the "get"/"set" methods for `EnumCodeType`, it is not recommended because it requires
> the creation of an `EnumCodeType` instance that requires the appropriate "pseudo-enum" class instance as an argument.

#### Determine the Appropriate "Pseudo-Enum" Class

To use the public static code enumerations, you must determine the proper "pseudo-enum" class to use.
All "pseudo-enum" classes are named using the following naming convention: `{CodeSystem.name}Enum`.
For example, the `AdministrativeGenderEnum` "pseudo-enum" class is generated from the
[AdministrativeGender](https://www.hl7.org/fhir/valueset-administrative-gender.html) CodeSystem.

The Data Models documentation provides a list of the "pseudo-enum" classes that are generated from selected FHIR
[CodeSystem](https://www.hl7.org/fhir/codesystem.html) resources where `CodeSystem.status` is set to `active`
and `CodeSystem.content` is set to `complete`.
On the "Data Models Index" page, expand the "CodeSystems" heading to view the list of supported "pseudo-enum" classes.

Individual resource and complex type data models may include one or more data elements that represent a primitive
FHIR `code` data type (i.e., `EnumCodeType`, `CodeType`, `fhirCode`) that is associated with a "pseudo-enum" class.
On the individual "Data Models Index" / "{data model name}" page, you can identify the required "pseudo-enum" classes
for the data model under the "Properties" heading where the property name matches `{camelCase(CodeSystem.name)}Enum`.
Also, under the "Methods" heading, you can locate the "EnumType" accessor methods that require a "pseudo-enum" class
where the method name matches `[get|set|add]{CodeSystem.name}EnumType()`.
In the method documentation, locate the "CodeSystem Enumeration" tag where a link to the required "pseudo-enum" class
is provided.

Following the link to the required `{CodeSystem.name}Enum` class, you can view the list of supported "enumerated"
properties.
By convention, the "enumerated" properties are named with the uppercased `code` value.
The "enumerated" properties are static readonly instances of the `FhirCodeDefinition` object defined as:

```typescript
export interface IFhirCodeDefinition {
  /**
   * Enum name (all UPPERCASE)
   */
  name: string;
  /**
   * A string pattern that identifies a concept as defined by the code system
   */
  code: fhirCode;
  /**
   * A URI that identifies the system
   */
  system?: string | undefined;
  /**
   * A description of the concept as defined by the code system
   */
  display?: string | undefined;
  /**
   * Additional descriptive information about the code
   */
  definition?: string | undefined;
}
```

To use an enumerated primitive `code` value, access the static "enumerated" property for the `code` value.
For example, to use the `AdministrativeGender` `code` value for "female":
`const femaleCode: fhirCode = AdministrativeGenderEnum.FEMALE.code`.

### PrimitiveType Examples

Set and get a primitive data element:

<!-- prettier-ignore -->
```typescript
const patient: Patient = new Patient();
// Set the patient's birth date as a `fhirDate` primitive
patient.setBirthDate('1978-01-28');

const patientBirthDate = patient.getBirthDate();
// Returns '1978-01-28' as `fhirDate`

const patientBirthDateElement: DateType = patient.getBirthDateElement();
// Returns patientBirthDateElement.getValue() = '1978-01-28' as `fhirDate`
// Returns patientBirthDateElement.getId() = undefined
// Returns patientBirthDateElement.getExtension() = [] as IExtension[]
```

Set and get a primitive data element with an `id` and `extension`:

<!-- prettier-ignore -->
```typescript
const patientBirthDateType = new DateType('1978-01-28');
patientBirthDateType.setId('birthDate'); // NOTE: Element.id is rarely used
const birthDateExtension = new Extension(
  'http://example.com/extensions/birthDate',
  new StringType('January 28, 1978'),
);
patientBirthDateType.setExtension([birthDateExtension]);

const patient: Patient = new Patient();
// Set the patient's birth date as a `DateType` PrimitiveType
// with `id` and `extension`
patient.setBirthDateElement(patientBirthDateType);

const patientBirthDate = patient.getBirthDate();
// Returns '1978-01-28' as `fhirDate`

const patientBirthDateElement: DateType = patient.getBirthDateElement();
// Returns patientBirthDateElement.getValue() = '1978-01-28' as `fhirDate`
// Returns patientBirthDateElement.getId() = 'birthDate' as `fhirString`
// Returns patientBirthDateElement.getExtension()[0].getUrl() =
//   'http://example.com/extensions/birthDate' as `fhirUri`
// Returns patientBirthDateElement.getExtension()[0].getValue() =
//   new StringType('January 28, 1978')
```

Set and get an EnumCodeType primitive data element:

<!-- prettier-ignore -->
```typescript
const patient: Patient = new Patient();
// NOTE: Following "setters" examples will throw a CodeTypeError because
//       the provided value is not a valid code!
// patient.setGender('invalidCode');
// patient.setGenderElement(new CodeType('invalidCode'));
//
// NOTE: Following "setters" examples use the recommended approach of using
//       an "enum" code value.
// patient.setGender(AdministrativeGenderEnum.FEMALE.code);
// patient.setGenderElement(new CodeType(AdministrativeGenderEnum.FEMALE.code));

patient.setGender(AdministrativeGenderEnum.FEMALE.code);

const patientGender = patient.getGender();
// Returns 'female' as `fhirCode`
const patientGenderElement = patient.getGenderElement();
// Returns patientGenderElement.getValue() = 'female' as `fhirCode`
// Returns patientGenderElement.getId() = undefined
// Returns patientGenderElement.getExtension() = [] as IExtension[]
const patientGenderEnumType = patient.getGenderEnumType();
// Returns patientGenderEnumType.getValue() = 'female' as `fhirCode`
// Returns patientGenderEnumType.getId() = undefined
// Returns patientGenderEnumType.getExtension() = [] as IExtension[]
```

## Complex Data Type Usage

FHIR complex data types are generated data models that extend the `DataType` base class (that extends `Element`
that extends `Base`).
The following complex data types may include `modifierExtension` data elements and so extend `BackboneType`
(that extends `DataType` that extends `Element` that extends `Base`):

- `Dosage`
- `ElementDefinition`
- `Timing`

These data models are generated from the FHIR specification's [StructureDefinition](https://www.hl7.org/fhir/structuredefinition.html)
resource where `StructureDefinition.kind` is set to `complex-type`.

All complex data models typically contain one or more "primitive" data elements and may contain one or more other
"complex" data elements.

### Complex Data Type Examples

Set and get a complex data element:

<!-- prettier-ignore -->
```typescript
const namePeriod = new Period()
  .setStart('1978-01-28')
  .setEnd('2000-08-06');

const patientNameType = new HumanName();
patientNameType.setFamily('Jones');
patientNameType.addGiven('Jennifer');
patientNameType.addGiven('Marie');
patientNameType.setPrefix(['Ms.']);
// Could also use:
// - `setUse(NameUseEnum.OFFICIAL.code)`
// - `setUseElement(new CodeType(NameUseEnum.OFFICIAL.code))`
// - `setUseEnumType(new EnumCodeType(NameUseEnum.OFFICIAL.code, new NameUseEnum()))`
patientNameType.setUse('official');
patientNameType.setPeriod(namePeriod);

const patient: Patient = new Patient();
patient.setName([patientNameType]);

const patientNameArray = patient.getName();
// Returns array of HumanName objects
// Returns patientNameArray[0].getFamily() = 'Jones' as `fhirString`
// Returns patientNameArray[0].getGiven()[0] = 'Jennifer' as `fhirString`
// Returns patientNameArray[0].getGiven()[1] = 'Marie' as `fhirString`
// Returns patientNameArray[0].getPrefix()[0] = 'Ms.' as `fhirString`
// Returns patientNameArray[0].getUse() = 'official' as `fhirCode`
// Returns patientNameArray[0].getPeriod().getStart() = '1978-01-28' as `fhirDateTime`
// Returns patientNameArray[0].getPeriod().getEnd() = '2000-08-06' as `fhirDateTime`
// Returns patientNameArray[0].getPeriod().getId() = undefined
// Returns patientNameArray[0].getPeriod().getExtension() = [] as IExtension[]
// Returns patientNameArray[0].getId() = undefined
// Returns patientNameArray[0].getExtension() = [] as IExtension[]
```

Set and get a complex data element with an `id` and `extension`:

<!-- prettier-ignore -->
```typescript
const namePeriod = new Period()
  .setStart('1978-01-28')
  .setEnd('2000-08-06');

const patientNameType = new HumanName();
patientNameType.setFamily('Jones');
patientNameType.addGiven('Jennifer');
patientNameType.addGiven('Marie');
patientNameType.setPrefix(['Ms.']);
patientNameType.setUse('official');
patientNameType.setPeriod(namePeriod);

patientNameType.setId('HumanName'); // NOTE: Element.id is rarely used
const patientNameExtension = new Extension(
  'http://hl7.org/fhir/StructureDefinition/language',
  new CodeType('en-US'),
);
patientNameType.addExtension(patientNameExtension);

const patient: Patient = new Patient();
patient.setName([patientNameType]);

const patientNameArray = patient.getName();
// Returns array of HumanName objects
// Returns patientNameArray[0].getFamily() = 'Jones' as `fhirString`
// Returns patientNameArray[0].getGiven()[0] = 'Jennifer' as `fhirString`
// Returns patientNameArray[0].getGiven()[1] = 'Marie' as `fhirString`
// Returns patientNameArray[0].getPrefix()[0] = 'Ms.' as `fhirString`
// Returns patientNameArray[0].getUse() = 'official' as `fhirCode`
// Returns patientNameArray[0].getPeriod().getStart() = '1978-01-28' as `fhirDateTime`
// Returns patientNameArray[0].getPeriod().getEnd() = '2000-08-06' as `fhirDateTime`
// Returns patientNameArray[0].getPeriod().getId() = undefined
// Returns patientNameArray[0].getPeriod().getExtension() = [] as IExtension[]
// Returns patientNameArray[0].getId() = 'HumanName' as `fhirString`
// Returns patientNameArray[0].getExtension()[0].getUrl() =
//   'http://hl7.org/fhir/StructureDefinition/language' as `fhirUri`
// Returns patientNameArray[0].getExtension()[0].getValue() =
//   new CodeType('en-US')
```

## Extension Usage

The FHIR `Extension` class is a core data model that extends the `Element` base class (that extends `Base`).
Every resource or datatype element may include one or more "extension" child elements.
The extension is either "simple" or "complex".
"Simple" extensions have only a required `url` (`fhirUri`) and an optional value implemented as `value[x]` (`IDataType`)
[open data type](https://www.hl7.org/fhir/datatypes.html#open) but no nested extensions.
"Complex" extensions contain the required `url` (`fhirUri`) and one or more nested extensions but no value.
An extension cannot have both a value and nested extensions.

> [!IMPORTANT]
> This constraint is enforced by the `static parse()` method when parsing the source JSON data and by the instance
> `toJSON()` method when serializing the instance's data to JSON.

The core FHIR `Extension` class exposes the value getter/setter methods for the `value[x]` by processing the value as
a `DataType` meaning it can take either a complex data type or PrimitiveType (both extend `DataType`).
Note that the `Extension.value` getter/setter methods cannot directly use FHIR primitive values (e.g., `fhirString`,
`fhirCode`, etc.) because the `Extension.value` property is a `DataType` and not a primitive type.
To use a FHIR primitive, use the PrimitiveType (e.g., `StringType`, `CodeType`, etc.).

The list of supported `value[x]` open data types are specific to each FHIR release (e.g., R4, R5, etc.).
Therefore, the generated complex data models include a FHIR release-specific subclass of the core `Extension` class
that contains additional type-specific "has" and "getter" convenience methods for each of the supported data types.
The "hasValue{datatype}()" (e.g., `hasValueCoding()`, etc.) returns `true` if the extension has a value of the specified
data type, otherwise `false` (i.e., either `undefined` or is not an instance of the specified data type).
The "getValue{datatype}()" (e.g., `getValueCoding()`, etc.) returns the value of the specified data type if the
extension has a value of that specified data type, otherwise throws a `InvalidTypeError`.
If the `Extension.value` is undefined, the "getValue{datatype}()" returns `undefined`.
Keep in mind that the `getValue()` method always returns the `Extension.value` property which is an instance of the
`DataType` subclass.

Since the core `Extension` class does not have the open data type convenience methods, to execute these convenience
methods, the core `Extension` must be cast to the data model package's `Extension`.
See the example below (i.e., `(extensions[0] as Extension).getValueCodeType()`).

### Extension Examples

Set and get a "simple" extension data element:

<!-- prettier-ignore -->
```typescript
const birthSexExtension: Extension = new Extension(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex',
  new CodeType('F'),
);

const patient: Patient = new Patient();
patient.setExtension([birthSexExtension]);

const extensions = patient.getExtension();
// Returns array of Extension objects
// Returns extensions[0].getUrl() =
//   'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex' as `fhirUri`
// Returns extensions[0].getValue() = new CodeType('F')

// Must cast to this package's `Extension` to access the "getValueCodeType()" method.
// Returns (extensions[0] as Extension).getValueCodeType() = new CodeType('F')

// Returns extensions[0].getId() = undefined
// Returns extensions[0].getExtension() = [] as IExtension[]
```

Set and get, using `getExtensionByUrl()`, a "complex" extension data element:

<!-- prettier-ignore -->
```typescript
const ombCoding = new Coding()
  .setSystem('urn:oid:2.16.840.1.113883.6.238')
  .setCode('2054-5');
const detailedCoding = new Coding()
  .setSystem('urn:oid:2.16.840.1.113883.6.238')
  .setCode('2056-0');
const textStringType = new StringType('Black American');

const raceExtension: Extension = new Extension(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race',
);
raceExtension
  .addExtension(new Extension('ombCategory', ombCoding))
  .addExtension(new Extension('detailed', detailedCoding))
  .addExtension(new Extension('text', textStringType));

const patient: Patient = new Patient();
patient.setExtension([raceExtension]);

const patientRaceExtension = patient.getExtensionByUrl(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race',
);
// Returns single Extension object
// Returns patientRaceExtension.getUrl() =
//   'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex' as `fhirUri`
// Returns patientRaceExtension.getValue() = undefined
// Returns patientRaceExtension.getId() = undefined
// Returns patientRaceExtension.getExtension() = array of three extensions
const obmExtension = patientRaceExtension.getExtensionByUrl('ombCategory');
// Returns single Extension object
// Returns obmExtension.getUrl() = 'ombCategory' as `fhirUri`
// Returns obmExtension.getValue() = ombCoding as defined above
// Returns obmExtension.getValueCoding() = ombCoding as defined
//   above // type-specific convenience method
// Returns obmExtension.getId() = undefined
// Returns obmExtension.getExtension() = [] as IExtension[]
const detailedExtension = patientRaceExtension.getExtensionByUrl('detailed');
// Returns single Extension object
// Returns detailedExtension.getUrl() = 'detailed' as `fhirUri`
// Returns detailedExtension.getValue() = detailedCoding as defined above
// Returns detailedExtension.getValueCoding() = detailedCoding as defined
//   above // type-specific convenience method
// Returns detailedExtension.getId() = undefined
// Returns detailedExtension.getExtension() = [] as IExtension[]
const textExtension = patientRaceExtension.getExtensionByUrl('text');
// Returns single Extension object
// Returns textExtension.getUrl() = 'text' as `fhirUri`
// Returns textExtension.getValue() = textStringType as defined above
// Returns textExtension.getValueStringType() = textStringType as defined
//   above // type-specific convenience method
// Returns textExtension.getId() = undefined
// Returns textExtension.getExtension() = [] as IExtension[]
```

## Populating the Patient Resource

The following examples show how to populate the [Patient](https://www.hl7.org/fhir/patient.html) resource using
the `Patient` data model.

### Standard Accessor Usage

<!-- prettier-ignore -->
```typescript
const patient: Patient = new Patient();
// Set "id" assuming this data came from a data source
patient.setId('54321-0013');

// US Core v4.0 Meta.profile example
const meta = new Meta();
meta.addProfile(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient',
);
patient.setMeta(meta);

// US Core v4.0 profile extensions
const raceExtension: Extension = new Extension(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race',
);
const raceOmbCoding = new Coding();
raceOmbCoding.setSystem('urn:oid:2.16.840.1.113883.6.238');
raceOmbCoding.setCode('2054-5');
const raceOmbExtension = new Extension('ombCategory', raceOmbCoding);
const raceDetailedCoding = new Coding();
raceDetailedCoding.setSystem('urn:oid:2.16.840.1.113883.6.238');
raceDetailedCoding.setCode('2056-0');
const raceDetailedExtension = new Extension('detailed', raceDetailedCoding);
const raceTextValue = new StringType('Black American');
const raceTextExtension = new Extension('text', raceTextValue);
raceExtension.addExtension(raceOmbExtension);
raceExtension.addExtension(raceDetailedExtension);
raceExtension.addExtension(raceTextExtension);
patient.addExtension(raceExtension);

const ethnicityExtension: Extension = new Extension(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity',
);
const ethnicityOmbCoding = new Coding();
ethnicityOmbCoding.setSystem('urn:oid:2.16.840.1.113883.6.238');
ethnicityOmbCoding.setCode('2186-5');
const ethnicityOmbExtension = new Extension('ombCategory', ethnicityOmbCoding);
const ethnicityTextValue = new StringType('Not Hispanic or Latino');
const ethnicityTextExtension = new Extension('text', ethnicityTextValue);
ethnicityExtension.addExtension(ethnicityOmbExtension);
ethnicityExtension.addExtension(ethnicityTextExtension);
patient.addExtension(ethnicityExtension);

const birthSexCode = new CodeType('F');
const birthSexExtension: Extension = new Extension(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex',
  birthSexCode,
);
patient.addExtension(birthSexExtension);

const identifierType = new CodeableConcept();
const identifierCoding = new Coding();
identifierCoding.setSystem('http://terminology.hl7.org/CodeSystem/v2-0203');
identifierCoding.setCode('MR');
identifierType.setCoding([identifierCoding]);
const mrnIdentifier = new Identifier();
mrnIdentifier.setUse(IdentifierUseEnum.OFFICIAL.code);
mrnIdentifier.setType(identifierType);
mrnIdentifier.setSystem('http://www.acme.com/identifiers/patient');
mrnIdentifier.setValue('MRN-02468');
patient.addIdentifier(mrnIdentifier);

const patientName = new HumanName();
patientName.setFamily('Jones');
patientName.addGiven('Jennifer');
patientName.addGiven('Marie');
patientName.addPrefix('Ms.');
// Use available EnumCodeType code value
patientName.setUse(NameUseEnum.OFFICIAL.code);
const maidenName = new HumanName();
maidenName.setFamily('Smith');
maidenName.addGiven('Jennifer');
maidenName.addGiven('Marie');
maidenName.addPrefix('Ms.');
// Use available EnumCodeType code value
maidenName.setUse(NameUseEnum.MAIDEN.code);
// Use the "set" method to set an array of HumanName
patient.setName([patientName, maidenName]);

patient.setActive(true);
// Use valid code value instead of available EnumCodeType code
patient.setGender('female');
patient.setBirthDate('1978-01-28');

const patientAddress = new Address();
patientAddress.setLine(['1234 Main ST', 'APT 13']);
patientAddress.setCity('South Bend');
patientAddress.setState('IN');
patientAddress.setPostalCode('46601');
patientAddress.setUse(AddressUseEnum.HOME.code);
patientAddress.setType(AddressTypeEnum.BOTH.code);
// Use the "add" method to add a single Address to the array of Addresses
patient.addAddress(patientAddress);

const maritalStatus = new CodeableConcept();
const maritalCoding = new Coding();
maritalCoding.setSystem('http://terminology.hl7.org/CodeSystem/v3-MaritalStatus');
maritalCoding.setCode('M');
// Use the "set" method to set an array of Coding
maritalStatus.setCoding([maritalCoding]);
patient.setMaritalStatus(maritalStatus);

// Add a BackboneElement "component"
const languagePref = new CodeableConcept();
const languageCoding = new Coding();
languageCoding.setSystem('urn:ietf:bcp:47');
languageCoding.setCode('en-US');
// Use the "set" method to set an array of Coding
languagePref.setCoding([languageCoding]);
languagePref.setText('English (United States)');
const patientCommunication = new PatientCommunicationComponent();
patientCommunication.setLanguage(languagePref);
patientCommunication.setPreferred(true);
// Use the "add" method to add a single PatientCommunicationComponent
// to the array of PatientCommunicationComponent
patient.addCommunication(patientCommunication);

const generalPractitioner = new Reference();
generalPractitioner.setReference('Practitioner/DR-13579');
generalPractitioner.setDisplay('Dr. Perkins');
const generalPractitionerIdentifier = new Identifier();
generalPractitionerIdentifier.setSystem('http://hl7.org/fhir/sid/us-npi');
generalPractitionerIdentifier.setValue('1234567890');
generalPractitionerIdentifier.setUse(IdentifierUseEnum.OFFICIAL.code);
generalPractitioner.setIdentifier(generalPractitionerIdentifier);
// Use the "set" method to set an array of Reference
patient.setGeneralPractitioner([generalPractitioner]);

const managingOrganization = new Reference();
managingOrganization.setReference('Organization/ORG-24680');
managingOrganization.setDisplay('Acme Healthcare');
patient.setManagingOrganization(managingOrganization);
```

### Fluent Style Accessor Usage

<!-- prettier-ignore -->
```typescript
const patient: Patient = new Patient();
// Set "id" assuming this data came from a data source
patient.setId('54321-0013');

// US Core v4.0 Meta.profile example
patient.setMeta(
  new Meta()
    .addProfile(
      'http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient',
    ),
);

// US Core v4.0 profile extensions
const raceExtension: Extension = new Extension(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race',
);
raceExtension
  .addExtension(
    new Extension(
      'ombCategory',
      new Coding()
        .setSystem('urn:oid:2.16.840.1.113883.6.238')
        .setCode('2054-5'),
    ),
  )
  .addExtension(
    new Extension(
      'detailed',
      new Coding()
        .setSystem('urn:oid:2.16.840.1.113883.6.238')
        .setCode('2056-0'),
    ),
  )
  .addExtension(
    new Extension(
      'text',
      new StringType('Black American'),
    ),
  );
const ethnicityExtension: Extension = new Extension(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity',
);
ethnicityExtension
  .addExtension(
    new Extension(
      'ombCategory',
      new Coding()
        .setSystem('urn:oid:2.16.840.1.113883.6.238')
        .setCode('2186-5'),
    ),
  )
  .addExtension(
    new Extension(
      'text',
      new StringType('Not Hispanic or Latino'),
    ),
  );
const birthSexExtension: Extension = new Extension(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex',
  new CodeType('F'),
);
patient
  .addExtension(raceExtension)
  .addExtension(ethnicityExtension)
  .addExtension(birthSexExtension);

patient.addIdentifier(
  new Identifier()
    .setUse(IdentifierUseEnum.OFFICIAL.code)
    .setType(
      new CodeableConcept().addCoding(
        new Coding().setSystem('http://terminology.hl7.org/CodeSystem/v2-0203').setCode('MR'),
      ),
    )
    .setSystem('http://www.acme.com/identifiers/patient')
    .setValue('MRN-02468'),
);

patient
  .addName(
    new HumanName()
      .setFamily('Jones')
      .addGiven('Jennifer')
      .addGiven('Marie')
      .addPrefix('Ms.')
      // Use available EnumCodeType code value
      .setUse(NameUseEnum.OFFICIAL.code),
  )
  .addName(
    new HumanName()
      .setFamily('Smith')
      .addGiven('Jennifer')
      .addGiven('Marie')
      .addPrefix('Ms.')
      // Use available EnumCodeType code value
      .setUse(NameUseEnum.MAIDEN.code),
  );

// Chain setting multiple primitive data types
patient
  .setActive(true)
  // Use valid code value instead of available "pseudo-enum" code
  .setGender('female')
  .setBirthDate('1978-01-28');

patient.addAddress(
  new Address()
    .addLine('1234 Main ST')
    .addLine('APT 13')
    .setCity('South Bend')
    .setState('IN')
    .setPostalCode('46601')
    // Use available EnumCodeType code value
    .setUse(AddressUseEnum.HOME.code)
    // Use available EnumCodeType code value
    .setType(AddressTypeEnum.BOTH.code),
);

patient.setMaritalStatus(
  new CodeableConcept().addCoding(
    new Coding()
      .setSystem('http://terminology.hl7.org/CodeSystem/v3-MaritalStatus')
      .setCode('M'),
  ),
);

// Chain setting BackboneElement "component" data types
patient.addCommunication(
  new PatientCommunicationComponent()
    .setLanguage(
      new CodeableConcept()
        .addCoding(
          new Coding()
            .setSystem('urn:ietf:bcp:47')
            .setCode('en-US'),
        )
        .setText('English (United States)'),
    )
    .setPreferred(true),
);

// Chain setting multiple complex data types
patient
  .addGeneralPractitioner(
    new Reference()
      .setReference('Practitioner/DR-13579')
      .setDisplay('Dr. Perkins')
      .setIdentifier(
        new Identifier()
          .setSystem('http://hl7.org/fhir/sid/us-npi')
          .setValue('1234567890')
          .setUse(IdentifierUseEnum.OFFICIAL.code),
      ),
  )
  .setManagingOrganization(
    new Reference()
      .setReference('Organization/ORG-24680')
      .setDisplay('Acme Healthcare'),
  );
```
