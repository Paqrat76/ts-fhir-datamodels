# Project Design Notes

## General References

### FHIR Specifications

- [FHIR R4](https://hl7.org/fhir/R4)
- [FHIR R4B](https://hl7.org/fhir/R4B)
- [FHIR R5](https://hl7.org/fhir/R5)
- [FHIR (6.0.0-ballot2)](https://hl7.org/fhir/6.0.0-ballot2)
- [FHIR (CI-build)](https://build.fhir.org/index.html)

### HAPI FHIR

#### Reference Links

- hapi-fhir-base ([JavaDoc](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-base/), [Source](https://github.com/hapifhir/hapi-fhir/tree/master/hapi-fhir-base))
- hapi-fhir-structures-r4 ([JavaDoc](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-structures-r4/))
- hapi-fhir-structures-r5 ([JavaDoc](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-structures-r5/))
- org.hl7.fhir.core ([Source](https://github.com/hapifhir/org.hl7.fhir.core))
  - org.hl7.fhir.r4 ([Source](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r4))
  - org.hl7.fhir.r4b ([Source](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r4b))
  - org.hl7.fhir.r5 ([Source](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r5))

#### Package Links

##### hapifhir/hapi-fhir

GitHub: [hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)

- HAPI base classes and interfaces: [ca.uhn.fhir.model.api](https://github.com/hapifhir/hapi-fhir/tree/master/hapi-fhir-base/src/main/java/ca/uhn/fhir/model/api)
  - [JavaDocs](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-base/ca/uhn/fhir/model/api/package-summary.html)
- HAPI Annotations: [ca.uhn.fhir.model.api.annotation](https://github.com/hapifhir/hapi-fhir/tree/master/hapi-fhir-base/src/main/java/ca/uhn/fhir/model/api/annotation)
  - [JavaDocs](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-base/ca/uhn/fhir/model/api/annotation/package-summary.html)
- HAPI FHIR primitive definition classes (XxxxDt): [ca.uhn.fhir.model.primitive](https://github.com/hapifhir/hapi-fhir/tree/master/hapi-fhir-base/src/main/java/ca/uhn/fhir/model/primitive)
  - [JavaDocs](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-base/ca/uhn/fhir/model/primitive/package-summary.html)
- FHIR base interfaces: [org.hl7.fhir.instance.model.api](https://github.com/hapifhir/hapi-fhir/tree/master/hapi-fhir-base/src/main/java/org/hl7/fhir/instance/model/api)
  - [JavaDocs](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-base/org/hl7/fhir/instance/model/api/package-summary.html)

##### hapifhir/org.hl7.fhir.core

GitHub: [hapifhir/org.hl7.fhir.core](https://github.com/hapifhir/org.hl7.fhir.core)

- Core FHIR R4: [org.hl7.fhir.r4](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r4/src/main/java/org/hl7/fhir/r4)
  - Element model classes: [org.hl7.fhir.r4.elementmodel](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r4/src/main/java/org/hl7/fhir/r4/elementmodel)
  - FHIR datatype and resource classes: [org.hl7.fhir.r4.model](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r4/src/main/java/org/hl7/fhir/r4/model)
    - Includes `XxxxType` that extends `PrimitiveType<T>` that extends `Type`

- Core FHIR R5: [org.hl7.fhir.r5](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r5/src/main/java/org/hl7/fhir/r5)
  - Element model classes: [org.hl7.fhir.r5.elementmodel](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r5/src/main/java/org/hl7/fhir/r5/elementmodel)
  - Extensions: [org.hl7.fhir.r5.extensions](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r5/src/main/java/org/hl7/fhir/r5/extensions)
  - FHIR datatype and resource classes: [org.hl7.fhir.r5.model](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r5/src/main/java/org/hl7/fhir/r5/model)

### Zod Library (TypeScript-first Schema Declaration and Validation)

The FHIR primitive data types are defined using the Zod library.

- [zod](https://www.npmjs.com/package/zod)
  - Documentation [Zod](https://zod.dev/)
    - [Ecosystem](https://zod.dev/?id=ecosystem)
  - GitHub [colinhacks/zod](https://github.com/colinhacks/zod)
  - Tutorial [Zod](https://www.totaltypescript.com/tutorials/zod)
- Zod Related Libraries
  - Zod [API Libraries](https://zod.dev/?id=api-libraries)
  - Zod [Zod to X](https://zod.dev/?id=zod-to-x)
  - Zod [X to Zod](https://zod.dev/?id=x-to-zod)
  - Zod [Mocking](https://zod.dev/?id=mocking)
  - Zod [Utilities for Zod](https://zod.dev/?id=utilities-for-zod)
  - [zod-validation-error](https://www.npmjs.com/package/zod-validation-error)
  - [zod-error](https://www.npmjs.com/package/zod-error)
  - [zod-metadata](https://www.npmjs.com/package/zod-metadata) - metadata support for Zod schemas
  - [zod-opts](https://www.npmjs.com/package/zod-opts) - parsing and validating command-line arguments
  - [validatorjs/validator.js](https://github.com/validatorjs/validator.js) - use in conjunction with `Refinements`
  - [NPM zod Search](https://www.npmjs.com/search?q=keywords:zod)
- Articles
  - [A step-by-step guide on how to use Zod Library to build type-safe applications with TypeScript.](https://medium.com/@brianridolcedev/a-step-by-step-guide-on-how-to-use-zod-library-to-build-type-safe-applications-with-typescript-7010d46e1200)
  - [Schema validation in TypeScript with Zod](https://blog.logrocket.com/schema-validation-typescript-zod/)
  - [Effortless Data Validation with Zod](https://blog.stackademic.com/boost-your-typescript-skills-effortless-data-validation-with-zod-4eb05177fb5f)
  - [Validate Environment Variables With Zod](https://catalins.tech/validate-environment-variables-with-zod/)
  - [Zod: Zero to Hero Series](https://dev.to/shaharke/series/26937)

## JavaScript Object Serialization/Deserialization

### FHIR Guidance

- FHIR [JSON Representation of Resources](https://hl7.org/fhir/R5/json.html#2.6.2)
- FHIR [JSON representation of primitive elements](https://hl7.org/fhir/R5/json.html#primitive)
  - **Representation**
    - FHIR elements with primitive datatypes are represented in two parts:
      - A JSON property with the name of the element, which has a JSON type of `number`, `boolean`, or `string`
      - a JSON property with \_ prepended to the name of the element, which, if present, contains the value's `id` and/or `extensions`
    - The FHIR types `integer`, `unsignedInt`, `positiveInt` and `decimal` are represented as a `JSON number`,
      the FHIR type `boolean` as a `JSON boolean`, and all other types (including `integer64`) are represented as a
      `JSON string` which has the same content as that specified for the relevant datatype. Whitespace is always
      significant (i.e. no leading and trailing spaces for non-strings).
  - **Repeating Primitives (`x..*`)**
    - In the case where the primitive element may repeat, it is represented in two arrays. `JSON null` values are used
      to fill out both arrays so that the `id` and/or `extension` are aligned with the matching value in the first array.

      ```json
        "code": [ "au", "nz" ],
        "_code": [
          null,
          {
            "extension" : [ {
              "url" : "http://hl7.org/fhir/StructureDefinition/display",
              "valueString" : "New Zealand a.k.a Kiwiland"
            }]
          }
        ]
      ```

### Usage

All generated TypeScript data model classes implement methods for serialization and deserialization.
Serialization is accomplished by the class's `toJSON()` method returning a JSON object as defined by FHIR.
Deserialization is accomplished by the class's `static parse()` method consuming a JSON object as defined by FHIR
returning a populated instance of the FHIR data model.

## Date/DateTime Handling

### FHIR Date/Time Primitives

**NOTE:** Where a timezone (`+zz:zz`) is specified, UTC (`Z`) may also be specified

- [date](https://hl7.org/fhir/R5/datatypes.html#date)
  - `YYYY`
  - `YYYY-MM`
  - `YYYY-MM-DD`
- [dateTime](https://hl7.org/fhir/R5/datatypes.html#dateTime)
  - `YYYY`
  - `YYYY-MM`
  - `YYYY-MM-DD`
  - `YYYY-MM-DDThh:mm:ss+zz:zz` / `YYYY-MM-DDThh:mm:ssZ`
  - `YYYY-MM-DDThh:mm:ss.sss+zz:zz` / `YYYY-MM-DDThh:mm:ss.sssZ`
- [instant](https://hl7.org/fhir/R5/datatypes.html#instant)
  - `YYYY-MM-DDThh:mm:ss.sss+zz:zz` / `YYYY-MM-DDThh:mm:ss.sssZ`

### Luxon

- **References**
  - NPM [Luxon](https://www.npmjs.com/package/luxon)
  - Home [Luxon](https://moment.github.io/luxon/#/)
    - [Changing the default zone](https://moment.github.io/luxon/#/zones?id=changing-the-default-zone)
      - `Settings.defaultZone = "utc";`
      - `DateTime.local().zoneName;` //=> 'UTC
    - [Luxon Validity](https://moment.github.io/luxon/#/validity)
    - [Luxon API](https://moment.github.io/luxon/api-docs/index.html)
    - [Some Luxon examples](https://moment.github.io/luxon/demo/global.html)

- **Notes**
  - **Immutable**, chainable, unambiguous API
  - Native time zone and Intl support (no locale or tz files)
  - Months in Luxon are 1-indexed instead of 0-indexed like in Moment and the native Date type
  - Luxon has both a Duration type and an Interval type
  - Luxon parsers are very strict
  - Luxon uses getters instead of accessor methods, so `dateTime.year` instead of `dateTime.year()`
  - Luxon centralizes its "setters", like `dateTime.set({year: 2016, month: 4})` instead of `dateTime.year(2016).month(4)`

#### Luxon Parsing ([ISO 8601](https://moment.github.io/luxon/#/parsing?id=iso-8601))

- All supported FHIR formats are directly parsable by Luzon
  - `const dt: DateTime = DateTime.fromISO("2016");`
  - `const dt: DateTime = DateTime.fromISO("2016-05");`
  - `const dt: DateTime = DateTime.fromISO("2016-05-25");`
  - `const dt: DateTime = DateTime.fromISO("2016-05-25T09:24:15Z");`
  - `const dt: DateTime = DateTime.fromISO("2016-05-25T09:24:15-04.00");`
  - `const dt: DateTime = DateTime.fromISO("2016-05-25T09:24:15.123Z");`
  - `const dt: DateTime = DateTime.fromISO("2016-05-25T09:24:15.123-04.00");`
- DateTime.fromISO() will default to the system's local timezone unless an offset is included in the dateTime string
  or a timezone option is provided to override the default:
  - `const dt: DateTime = DateTime.fromISO("2016-05-25T09:24:15Z");`
  - `const dt: DateTime = DateTime.fromISO("2016-05-25T09:24:15-04.00");`
  - `const dt: DateTime = DateTime.fromISO("2016-05-25", { zone: "utc" });`
  - `const dt: DateTime = DateTime.fromISO("2016-05-25", { zone: "America/New_York" });`
- `DateTime.now().toISO()` will default to the system's local date/time and timezone in ISO format
- `DateTime.utc().toISO()` will default to UTC and timezone in ISO format

#### Luxon Formatting ([ISO 8601](https://moment.github.io/luxon/#/parsing?id=iso-8601))

- to ISO
  - `dt.toISO();` //=> '2017-04-20T11:32:00.000-04:00'
  - `dt.toISO({ suppressMilliseconds: true });` //=> '2017-04-20T11:32:00-04:00'
  - `dt.toISODate();` //=> '2017-04-20'
- to Format
  - `dt.toFormat("yyyy");` //=> '2017'
  - `dt.toFormat("yyyy-MM");` //=> '2017-04'

## Design Decisions

### JavaScript Object Serialization/Deserialization Approach

After researching this subject in many articles on the web and after investigating the various serialization/deserialization
libraries (see above), I came to the conclusion that a "generic" approach to serialization/deserialization was overkill
in this use case. While complex and primitive data type models are handcrafted, the ultimate goal is to use a code
generator to create all FHIR resource data models for each version of FHIR. From experience, creating class templates
for a code generator is a straight-forward process. Trying to generalize the serialization/deserialization functionality
adds unnecessary complexity to the templates and the generated code.

My goal for the serialization/deserialization functionality was to access the functionality from the FHIR resource data
model classes - not from a separate "tool"/"parser" as is the case in the HAPI FHIR project. To that end, I decided to
provide a public `toJSON()` instance method on each FHIR resource data model class to perform the serialization. This
allows consumers of these data model classes to manipulate the data models instances as needed and then when ready,
execute the `toJSON()` method of the instance to render the FHIR compatible JSON data object. For the deserialization
process, I decided to provide a public static `parse(sourceJson: JSON.Object)` method that can consume the provided
JSON data object and return a fully populated FHIR resource data model instance.

### Code Documentation

#### Background

Most Node-based projects make use of [JSDoc](https://jsdoc.app/) for documenting the code base and optionally
generating project documentation.
For projects using TypeScript, Microsoft provides the [JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html).
This combination works for many cases.
In my case, this was not a satisfactory approach. My biggest issue is the inability to provide documentation
for TypeScript `type` definitions.
Generating the project documentation using JSDoc and TypeScript felt like a kluge.

As an alternative, Microsoft provides [TSDoc](https://tsdoc.org/) as a replacement for JSDoc in TypeScript projects.
"TSDoc is a proposal to standardize the doc comments used in TypeScript code, so that different tools can extract content
without getting confused by each other's markup.
Microsoft also provides a library package that provides an open source reference implementation of a parser.
Using this library is an easy way to ensure that your tool is 100% compatible with the standard."

I decided to investigate TSDoc for my use in this project.
I noticed the TSDoc documentation mentions various tools that interact with the JSDoc/TSDoc notations and tags.
One that caught my eye is [TypeDoc](https://typedoc.org/).
It generates project documentation based on JSDoc/TSDoc notations and tags.
Its home page is very brief.
It provides a 2-step process to use TypeDoc out of the box:

```shell
# Install
npm install --save-dev typedoc

# Execute typedoc on your project
npx typedoc src/index.ts
```

Following the above steps, I was pleasantly surprised by the quality of the automatic generation of the project's documentation.
The current state of the project had very limited JSDoc notations, but TypeDoc generated very good documentation based
on the actual TypeScript code. Where JSDoc notation existed, TypeDoc parsed that content and added it to the generated
documentation.
I was immediately sold on TypeDoc!

The TypeDoc ecosystem includes plugins for various uses.
I was thrilled when I discovered a plugin for Zod (described above).
TypeDoc provides extensive configuration, but in my case, I only needed to included five (5) options!

**Therefore, I am using TypeDoc to generate project documentation!**

##### WARNINGS for Code Generator

- We will need to check header descriptive content for relative links
  (e.g., `[Location](location.html#)`) to the FHIR specification to change them to absolute links
  (e.g., `[Location](https://hl7.org/fhir/location.html#)`).
- We will need to check header descriptive content for whitespace characters (e.g., `\t`, `\n`, etc.) replacing
  them with a `space`:

  ```typescript
  /**
   * Replace line breaks (i.e., '\n' and '\r') with a single space (i.e., ' ').
   * Replace with a space character rather than an empty string to prevent combining
   * text where the only separating whitespace is '\n' or '\r' (observed in various
   * StructureDefinition descriptions).
   *
   * @param str - source string value
   * @returns new string value with each line break replaced with a space character
   */
  export const stripLineBreaks = (str: string | undefined | null): string => {
    const tempValue = str || '';
    const regex = /[\r\n]+/g;
    return tempValue.replace(regex, ' ');
  };
  ```

#### Class Header Template

```typescript
/**
 * <StructureDefinition.type> Class
 *
 * @remarks
 * <StructureDefinition.description>
 *
 * <StructureDefinition.purpose>
 *
 * **FHIR Specification**
 * - **Short:** <StructureDefinition.snapshot.element[0]?.short>
 * - **Definition:** <StructureDefinition.snapshot.element[0]?.definition>
 * - **Comment:** <StructureDefinition.snapshot.element[0]?.comment>
 * - **Requirements:** <StructureDefinition.snapshot.element[0]?.requirements>
 * - **FHIR Version:** <StructureDefinition.fhirVersion>
 *
 * @privateRemarks
 * Loosely based on HAPI FHIR org.hl7.fhir-core.r4.model.<StructureDefinition.type>
 *
 * @category Resource Models | Datatypes: Complex
 * @see [FHIR <StructureDefinition.type>](<StructureDefinition.url>)
 */
```

#### Component (BackboneElement) Class Header Template

The `<StructureDefinition.snapshot.element[i].path>` will be reformatted to `<ReformattedPathComponent>` as follows:

- The `path` value will be PascalCase
- The `.` separator will be removed
- 'Component' will be appended to the reformatted `path`

```typescript
/**
 * <ReformattedPathComponent> Subclass for `<StructureDefinition.snapshot.element[i].path>`
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** <StructureDefinition.snapshot.element[i]?.short>
 * - **Definition:** <StructureDefinition.snapshot.element[i]?.definition>
 * - **Comment:** <StructureDefinition.snapshot.element[i]?.comment>
 * - **Requirements:** <StructureDefinition.snapshot.element[i]?.requirements>
 *
 * @category Resource Models
 * @see [FHIR <StructureDefinition.type>](<StructureDefinition.url>)
 */
```

#### Field Header Template

```typescript
/**
 * <StructureDefinition.snapshot.element[i].path> Element
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** <StructureDefinition.snapshot.element[i]?.short>
 * - **Definition:** <StructureDefinition.snapshot.element[i]?.definition>
 * - **Comment:** <StructureDefinition.snapshot.element[i]?.comment>
 * - **Requirements:** <StructureDefinition.snapshot.element[i]?.requirements>
 * - **FHIR Type:** `<StructureDefinition.snapshot.element[i].type.code[0]>`
 *   - _TargetProfiles_: [ <StructureDefinition.snapshot.element[i].type.code[0].taretProfile[?]> ]
 * - **Cardinality:** <StructureDefinition.snapshot.element[i].min>..<StructureDefinition.snapshot.element[i].max>
 * - **isModifier:** <StructureDefinition.snapshot.element[i].isModifier>
 * - **isModifierReason:** <StructureDefinition.snapshot.element[i].isModifierReason?>
 * - **isSummary:** <StructureDefinition.snapshot.element[i].isSummary>
 */
```

#### Polymorphic Field Header Template

```typescript
/**
 * <StructureDefinition.snapshot.element[i].path> Element
 *
 * @remarks
 * **FHIR Specification**
 * - **Short:** <StructureDefinition.snapshot.element[i]?.short>
 * - **Definition:** <StructureDefinition.snapshot.element[i]?.definition>
 * - **Comment:** <StructureDefinition.snapshot.element[i]?.comment>
 * - **Requirements:** <StructureDefinition.snapshot.element[i]?.requirements>
 * - **FHIR Types:**
 *   - `<StructureDefinition.snapshot.element[i].type.code[j]>`
 *     - _TargetProfiles_: [ <StructureDefinition.snapshot.element[i].type.code[0].taretProfile[?]> ]
 * - **Cardinality:** <StructureDefinition.snapshot.element[i].min>..<StructureDefinition.snapshot.element[i].max>
 * - **isModifier:** <StructureDefinition.snapshot.element[i].isModifier>
 * - **isModifierReason:** <StructureDefinition.snapshot.element[i].isModifierReason?>
 * - **isSummary:** <StructureDefinition.snapshot.element[i].isSummary>
 */
```

### TypeScript Circular References

References:

- [How to fix nasty circular dependency issues once and for all in JavaScript & TypeScript](https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de)
- [Tired of circular dependency in Typescript/Node.js?](https://dev.to/tahsinature/tired-of-circular-dependency-in-typescriptnodejs-4i0a)
- [Detect, Prevent, and Fix: Circular Dependencies In JavaScript and TypeScript](https://javascript.plainenglish.io/detect-prevent-and-fix-circular-dependencies-in-javascript-and-typescript-7d9819d37ce2)

The FHIR specification defines data types and resources (data models) based on the [FHIR Type Framework](https://hl7.org/fhir/R5/types.html).
Ultimately, the specification defines these data structures for exchanging healthcare data using JSON and/or XML.
By design, circular references in the specification cannot be prevented but are not a problem in the actual data structures.
Examples of circular references in the FHIR specification include:

- The FHIR Reference data type includes the Identifier data type while the Identifier data type includes the Reference
  data type.
- All data types inherit from the FHIR Element that includes a property for FHIR Extensions while the FHIR
  Extension references almost all FHIR data types.

When designing data structures using TypeScript, these circular references cannot be avoided and must be resolved.
Various strategies exist to resolve circular references such as:

- Use relative imports inside the same module
- Move common code into a separate file to be imported
- Move code from one module to another
- Last resort: Combine files with circular dependencies into one file

Unfortunately, due to the FHIR specification, the "last resort" above has been occasionally used in this project.
When this has been done, a file/module header block documents these cases.
