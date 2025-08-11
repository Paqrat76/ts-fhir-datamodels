---
title: Data Model Usage
---

# FHIR Data Model Usage Patterns

The examples below demonstrate how to use the FHIR data models.
The FHIR data models have the following standard accessors:

- Single field (`max` cardinality = 1): Has `get`/`set`/`has` methods as appropriate for the data type
- Array field (`max` cardinality > 1): Has `get`/`set`/`has`/`add` methods as appropriate for the data type

These accessors can be used in both standard and fluent style.

**NOTE:**
When dealing with "array fields," the `set` methods take an array of data elements that **replaces** the existing
underlying array.
The `add` methods take a single data element and **adds** it to the existing underlying array.

## Primitive Data Type Usage

FHIR primitive data types are represented in TypeScript as `string`, `number`, `boolean`, and `BigInt()`.
They are implemented using the [Zod](https://zod.dev/) library's `z.string()`, `z.number()`, `z.boolean()`,
and `z.bigint()` methods.
These primitives are defined using Zod's "schema" feature that allows for validation and type-safety.
Validation is defined based on the FHIR specification's [primitive type](https://www.hl7.org/fhir/R5/datatypes.html#primitive)
regular expressions and for numbers, the minimum and maximum values.
This allows the use of TypeScript's primitives while also providing validation and type-safety.

While FHIR primitive types are meant to be a single primitive value with no additional data elements, the FHIR
specification does require them to support the `id` and `extension` data elements.
This is achieved by defining a base primitive type (`PrimitiveType`) that combines the FHIR primitive type with the
the base `DataType` class (that extends `Element` that extends `Base`).
The base `PrimitiveType` includes the `id` and `extension` data elements and retains the FHIR primitive type as
its `value` property.
As such, they meet the requirements of the [FHIR specification](https://www.hl7.org/fhir/R5/datatypes.html#representations)
regarding their representation in JSON.

The following table shows the mapping among the primitive data types:

| FHIR Primitive Type | TypeScript Primitive | Primitive (Zod type) | PrimitiveType      |
| ------------------- | -------------------- | -------------------- | ------------------ |
| `base64Binary`      | `string`             | `fhirBase64Binary`   | `Base64BinaryType` |
| `boolean`           | `boolean`            | `fhirBoolean`        | `BooleanType`      |
| `canonical`         | `string`             | `fhirCanonical`      | `CanonicalType`    |
| `code`              | `string`             | `fhirCode`           | `CodeType`         |
| `dateTime`          | `string`             | `fhirDateTime`       | `DateTimeType`     |
| `date`              | `string`             | `fhirDate`           | `DateType`         |
| `decimal`           | `number`             | `fhirDecimal`        | `DecimalType`      |
| `id`                | `string`             | `fhirId`             | `IdType`           |
| `instant`           | `string`             | `fhirInstant`        | `InstantType`      |
| `integer`           | `number`             | `fhirInteger`        | `IntegerType`      |
| `integer64`         | `BigInt`             | `fhirInteger64`      | `Integer64Type`    |
| `markdown`          | `string`             | `fhirMarkdown`       | `MarkdownType`     |
| `oid`               | `string`             | `fhirOid`            | `OidType`          |
| `positiveInt`       | `number`             | `fhirPositiveInt`    | `PositiveIntType`  |
| `string`            | `string`             | `fhirString`         | `StringType`       |
| `time`              | `string`             | `fhirTime`           | `TimeType`         |
| `unsignedInt`       | `number`             | `fhirUnsignedInt`    | `UnsignedIntType`  |
| `uri`               | `string`             | `fhirUri`            | `UriType`          |
| `url`               | `string`             | `fhirUrl`            | `UrlType`          |
| `uuid`              | `string`             | `fhirUuid`           | `UuidType`         |
| `xhtml`             | `string`             | `fhirXhtml`          | `XhtmlType`        |

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

### EnumCodeType Usage

The `EnumCodeType` PrimitiveType class extends `CodeType` to represent FHIR `code` data types that have a defined set
of allowed values.
These `EnumCodeType` class methods are defined to automatically include a specific implementation of a "pseudo-enum"
class (`IFhirCodeEnum`) that defines the allowed values.
The `IFhirCodeEnum` class is generated from a FHIR specification's [CodeSystem](https://www.hl7.org/fhir/codesystem.html)
resource when it is specified in the `ElementDefinition.binding` property for the `code` data field.
These "pseudo-enum" classes expose the allowed values as static "enumerated" properties that can be easily referenced.
Using the `EnumCodeType` provides validation of the `code` values from the associated "pseudo-enum" class.

The `EnumCodeType` class is instantiated with a `fhirCode` value or `CodeType` object along with and the
"pseudo-enum" class instance that defines the allowed values.
If the provided `fhirCode` value or `CodeType` object is not for a valid `code` value, the `EnumCodeType` will
throw a `CodeTypeError`.

Since the `EnumCodeType` class extends `CodeType`, it supports the ability to add the `id` and `extension` data
elements.

### PrimitiveType Examples

Set and get a primitive data element:

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

```typescript
const patientBirthDateType = new DateType('1978-01-28');
patientBirthDateType.setId('birthDate'); // NOTE: Element.id is rarely used
const birthDateExtension = new Extension('http://example.com/extensions/birthDate', new StringType('January 28, 1978'));
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

```typescript
const patient: Patient = new Patient();
// NOTE: Following "setters" will throw a CodeTypeError if the provided value
//       is not a valid code
// patient.setGender('invalidCode');
// patient.setGenderElement(new CodeType('invalidCode'));
// NOTE: Following "setters" use the recommended approach of using an "enum"
//       code value
// patient.setGender(AdministrativeGenderEnum.FEMALE.code);
// patient.setGenderElement(new CodeType(AdministrativeGenderEnum.FEMALE.code));

const genderEnumCodeType = new EnumCodeType(AdministrativeGenderEnum.FEMALE.code, new AdministrativeGenderEnum());
patient.setGenderEnumType(genderEnumCodeType);

const patientGenderEnumType = patient.getGenderEnumType();
// Returns patientGenderEnumType.getValue() = 'female' as `fhirCode`
// Returns patientGenderEnumType.getId() = undefined
// Returns patientGenderEnumType.getExtension() = [] as IExtension[]
const patientGenderElement = patient.getGenderElement();
// Returns patientGenderElement.getValue() = 'female' as `fhirCode`
// Returns patientGenderElement.getId() = undefined
// Returns patientGenderElement.getExtension() = [] as IExtension[]
const patientGender = patient.getGender();
// Returns 'female' as `fhirCode`
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

All complex data models typically contain one or more "primitive" data elements and may contain one or more "complex"
data elements.

### Complex Data Type Examples

Set and get a complex data element:

```typescript
const namePeriod = new Period().setStart('1978-01-28').setEnd('2000-08-06');

const patientNameType = new HumanName();
patientNameType.setFamily('Jones');
patientNameType.addGiven('Jennifer');
patientNameType.addGiven('Marie');
patientNameType.setPrefix(['Ms.']);
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
// Returns patientNameArray[0].getUse() = 'official' as `fhirString`
// Returns patientNameArray[0].getPeriod().getStart() = '1978-01-28' as `fhirDateTime`
// Returns patientNameArray[0].getPeriod().getEnd() = '2000-08-06' as `fhirDateTime`
// Returns patientNameArray[0].getPeriod().getId() = undefined
// Returns patientNameArray[0].getPeriod().getExtension() = [] as IExtension[]
// Returns patientNameArray[0].getId() = undefined
// Returns patientNameArray[0].getExtension() = [] as IExtension[]
```

Set and get a complex data element with an `id` and `extension`:

```typescript
const namePeriod = new Period().setStart('1978-01-28').setEnd('2000-08-06');

const patientNameType = new HumanName();
patientNameType.setFamily('Jones');
patientNameType.addGiven('Jennifer');
patientNameType.addGiven('Marie');
patientNameType.setPrefix(['Ms.']);
patientNameType.setUse('official');
patientNameType.setPeriod(namePeriod);

patientNameType.setId('HumanName'); // NOTE: Element.id is rarely used
const patientNameExtension = new Extension('http://hl7.org/fhir/StructureDefinition/language', new CodeType('en-US'));
patientNameType.addExtension(patientNameExtension);

const patient: Patient = new Patient();
patient.setName([patientNameType]);

const patientNameArray = patient.getName();
// Returns array of HumanName objects
// Returns patientNameArray[0].getFamily() = 'Jones' as `fhirString`
// Returns patientNameArray[0].getGiven()[0] = 'Jennifer' as `fhirString`
// Returns patientNameArray[0].getGiven()[1] = 'Marie' as `fhirString`
// Returns patientNameArray[0].getPrefix()[0] = 'Ms.' as `fhirString`
// Returns patientNameArray[0].getUse() = 'official' as `fhirString`
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
[open data type](https://www.hl7.org/fhir/R5/datatypes.html#open) and no nested extensions.
"Complex" extensions contain the required `url` (`fhirUri`) and one or more nested extensions and no value.
An extension cannot have both a value and nested extensions.

The core FHIR `Extension` class exposes the value getter/setter methods for the `value[x]` by processing the value as
a `DataType` meaning it can take either a complex data type or PrimitiveType (both extend `DataType`).
Note that the `Extension.value` getter/setter methods cannot directly use FHIR primitive values (e.g., `fhirString`,
`fhirCode`, etc.) because the `Extension.value` property is a `DataType` and not a primitive type.
To use a FHIR primitive, use the PrimitiveType (e.g., `StringType`, `CodeType`, etc.).

The list of supported `value[x]` open data types are specific to each FHIR release (e.g., R4, R5, etc.).
Therefore, the generated complex data models include a FHIR release specific subclass of the core `Extension` class
that contains additional type-specific "has" and "getter" convenience methods for each of the supported data types.
The "hasValue{datatype}()" (e.g., `hasValueCoding()`, etc.) returns `true` if the extension has a value of the specified
data type, otherwise `false`.
The "getValue{datatype}()" (e.g., `getValueCoding()`, etc.) returns the value of the specified data type if the
extension has a value of that specified data type, otherwise throws a `InvalidTypeError`.
If the `Extension.value` is undefined, the "getValue{datatype}()" returns `undefined`.

Since the core `Extension` class does not have the open data type convenience methods, to execute these convenience
methods, the core `Extension` must be cast to the data model package's `Extension`.
See the example below (i.e., `(extensions[0] as Extension).getValueCodeType()`).

### Extension Examples

Set and get a "simple" extension data element:

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

```typescript
const ombCoding = new Coding().setSystem('urn:oid:2.16.840.1.113883.6.238').setCode('2054-5');
const detailedCoding = new Coding().setSystem('urn:oid:2.16.840.1.113883.6.238').setCode('2056-0');
const textStringType = new StringType('Black American');

const raceExtension: Extension = new Extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race');
raceExtension
  .addExtension(new Extension('ombCategory', ombCoding))
  .addExtension(new Extension('detailed', detailedCoding))
  .addExtension(new Extension('text', textStringType));

const patient: Patient = new Patient();
patient.setExtension([raceExtension]);

const patientRaceExtension = patient.getExtensionByUrl('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race');
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

## Populating the Patient Resource using Standard Accessors

```typescript
const patient: Patient = new Patient();
// Set "id" assuming this data came from a data source
patient.setId('54321-0013');

// US Core v4.0 Meta.profile example
const meta = new Meta();
meta.addProfile('http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient');
patient.setMeta(meta);

// US Core v4.0 profile extensions
const raceExtension: Extension = new Extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race');
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

## Populating the Patient Resource Using Fluent Style Accessors

```typescript
const patient: Patient = new Patient();
// Set "id" assuming this data came from a data source
patient.setId('54321-0013');

// US Core v4.0 Meta.profile example
patient.setMeta(new Meta().addProfile('http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient'));

// US Core v4.0 profile extensions
const raceExtension: Extension = new Extension('http://hl7.org/fhir/us/core/StructureDefinition/us-core-race');
raceExtension
  .addExtension(
    new Extension('ombCategory', new Coding().setSystem('urn:oid:2.16.840.1.113883.6.238').setCode('2054-5')),
  )
  .addExtension(new Extension('detailed', new Coding().setSystem('urn:oid:2.16.840.1.113883.6.238').setCode('2056-0')))
  .addExtension(new Extension('text', new StringType('Black American')));
const ethnicityExtension: Extension = new Extension(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity',
);
ethnicityExtension
  .addExtension(
    new Extension('ombCategory', new Coding().setSystem('urn:oid:2.16.840.1.113883.6.238').setCode('2186-5')),
  )
  .addExtension(new Extension('text', new StringType('Not Hispanic or Latino')));
const birthSexExtension: Extension = new Extension(
  'http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex',
  new CodeType('F'),
);
patient.addExtension(raceExtension).addExtension(ethnicityExtension).addExtension(birthSexExtension);

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
  // Use valid code value instead of available EnumCodeType code
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
    new Coding().setSystem('http://terminology.hl7.org/CodeSystem/v3-MaritalStatus').setCode('M'),
  ),
);

// Chain setting BackboneElement "component" data types
patient.addCommunication(
  new PatientCommunicationComponent()
    .setLanguage(
      new CodeableConcept()
        .addCoding(new Coding().setSystem('urn:ietf:bcp:47').setCode('en-US'))
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
  .setManagingOrganization(new Reference().setReference('Organization/ORG-24680').setDisplay('Acme Healthcare'));
```
