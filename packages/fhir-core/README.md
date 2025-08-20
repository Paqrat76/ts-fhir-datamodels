# FHIR Core Library

This `@paq-ts-fhir/fhir-core` package is a TypeScript library providing common base data models, primitive FHIR data
types, custom errors, and various utilities required by the FHIR release-specific generated data model packages.

This package is the sole dependency of the FHIR release-specific generated data model packages.
It is not designed or intended for general use in any other context.

## Background

The design of the generated FHIR release-specific data models is inspired by the data models defined in the
[HAPI FHIR](https://hapifhir.io/) Java library.
Separate packages in the parent mono-repository contain the FHIR release-specific generated data models.
Each of those packages depend on this `@paq-ts-fhir/fhir-core` package.
The only dependencies of this package are:

- [Luxon](https://moment.github.io/luxon/) library
- [Zod](https://zod.dev/) library

## FHIR Specifications

- [FHIR R4](https://hl7.org/fhir/R4)
- [FHIR R4B](https://hl7.org/fhir/R4B)
- [FHIR R5](https://hl7.org/fhir/R5)
- [FHIR (6.0.0-ballot3)](https://hl7.org/fhir/6.0.0-ballot3)
- [FHIR (CI-build)](https://build.fhir.org/index.html)

## Usage Notes

### Luxon Date/Time Handling for FHIR Primitive `date`, `dateTime`, and `instant`

#### FHIR Date/Time Primitives

The FHIR specification defines date/time primitive data types represented by strings of specific ISO 8601 variations.

**NOTE:** Where a timezone offset (`+zz:zz`/`-zz:zz`) is specified, UTC (`Z`) may also be specified.

- [date](https://hl7.org/fhir/R5/datatypes.html#date)
  - `YYYY`
  - `YYYY-MM`
  - `YYYY-MM-DD`
- [dateTime](https://hl7.org/fhir/R5/datatypes.html#dateTime)
  - `YYYY`
  - `YYYY-MM`
  - `YYYY-MM-DD`
  - `YYYY-MM-DDThh:mm:ss+zz:zz` / `YYYY-MM-DDThh:mm:ssZ`
  - `YYYY-MM-DDThh:mm:ss.000+zz:zz` / `YYYY-MM-DDThh:mm:ss.000Z`
- [instant](https://hl7.org/fhir/R5/datatypes.html#instant)
  - `YYYY-MM-DDThh:mm:ss.sss+zz:zz` / `YYYY-MM-DDThh:mm:ss.sssZ`

#### Luxon Date/Time Library

The [Luzon](https://moment.github.io/luxon/#/) library is the de-facto date/time handling library for JavaScript.
It is a powerful, modern, and friendly wrapper for JavaScript dates and times.
It provides support for date/times, durations, and intervals that are immutable with native time zone and Intl
support (no locale or tz files).
The provided [APIs](https://moment.github.io/luxon/api-docs/index.html) are unambiguous and chainable.
Additionally, Luxon supports handling for time zones and offsets ([Time zones and offsets](https://moment.github.io/luxon/#/zones?id=time-zones-and-offsets)).

The following Luxon capabilities are usd to support FHIR date/time related primitives.

##### Luxon Parsing ([ISO 8601](https://moment.github.io/luxon/#/parsing?id=iso-8601))

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

##### Luxon Formatting ([ISO 8601](https://moment.github.io/luxon/#/parsing?id=iso-8601)) for FHIR

- toISO
  - `dt.toISO();` //=> '2017-04-20T11:32:00.000-04:00'
  - `dt.toISO({ suppressMilliseconds: true });` //=> '2017-04-20T11:32:00-04:00'
  - `dt.toISODate();` //=> '2017-04-20'
- toFormat
  - `dt.toFormat("yyyy");` //=> '2017'
  - `dt.toFormat("yyyy-MM");` //=> '2017-04'

#### Provided Date/Time Utilities

The [date-time-util.ts](src/utility/date-time-util.ts) module provides convenience wrappers included in the `DateTimeUtil` namespace for
Luxon DataTime parsing and formatting to support FHIR specified date/time primitive data types.
These are available for independent date handling use cases.
They have also been wrapped in the FHIR PrimitiveType DateType (`interface DateTypeImpl`),
DateTimeType (`interface DateTimeTypeImpl`), and InstantType (`interface InstantTypeImpl`) implementations as
convenience methods.

The `getDateTimeObject()` and `getDateTimeObjectAsUTC()` creation methods in the `date-time-util.ts` module return a valid
Luxon DataTime object that allows full access to the Luxon DataTime APIs for virtually any kind of date/time handling.
The `getValueAs[FHIR Primitive]` methods take a Luxon DateTime object as the method argument that is then formatted
appropriately into the allowed FHIR primitive format and returned as a string.

#### Handling Time Zones and Offsets

The Luxon library supports handling for time zones and offsets.
The recommended approach is to use the `getDateTimeObjectAsUTC()` creation method.
It automatically converts the provided ISO 8601 datetime string into UTC and returns a UTC DateTime object.

The `getDateTimeObject()` creation method provides an optional `opts` parameter to control the creation of the DateTime
object (see [fromISO(text, opts)](https://moment.github.io/luxon/api-docs/index.html#datetimefromiso) `opts` parameter
for supported options).
In particular, refer to `opts.zone` and `opts.setZone` options for managing time zones and offsets.
The following use cases are supported:

- `opts` parameter **NOT** provided or `opts.zone` and `opts.setZone` options **NOT** specified
  - provided ISO 8601 text string **DOES NOT** include a time zone offset:
    - the created DateTime object will default to the system's "local" time zone
  - provided ISO 8601 text string **DOES** include a time zone offset:
    - the created DateTime object will default to the system's "local" time zone after applying the provided time zone offset
  - provided ISO 8601 text string **DOES** specify UTC (as `Z`):
    - the created DateTime object will default to the system's "local" time zone after converting UTC to the "local" time zone
- `opts` parameter provided with `opts.setZone` option set to `true`
  - provided ISO 8601 text string **DOES NOT** include a time zone offset:
    - the created DateTime object will default to the system's "local" time zone
  - provided ISO 8601 text string **DOES** include a time zone offset:
    - the created DateTime object will set the DateTime object's time zone based on the provided time zone offset
  - provided ISO 8601 text string **DOES** specify UTC (as `Z`):
    - the created DateTime object will set the DateTime object's time zone to UTC
- `opts` parameter provided with `opts.zone` option set to a valid time zone
  - provided ISO 8601 text string **DOES NOT** include a time zone offset:
    - the created DateTime object will set the DateTime object's time zone based on the provided time zone
  - provided ISO 8601 text string **DOES** include a time zone offset:
    - the created DateTime object will set the DateTime object's time zone based on the provided time zone after applying the provided time zone offset
  - provided ISO 8601 text string **DOES** specify UTC (as `Z`):
    - the created DateTime object will set the DateTime object's time zone based on the provided time zone after converting UTC to the provided time zone
