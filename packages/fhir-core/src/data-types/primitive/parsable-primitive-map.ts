/*
 * Copyright (c) 2025. Joe Paquette
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import * as JSON from '../../utility/json-helpers';
import {
  parseBase64BinaryType,
  parseBooleanType,
  parseCanonicalType,
  parseCodeType,
  parseDateTimeType,
  parseDateType,
  parseDecimalType,
  parseIdType,
  parseInstantType,
  parseInteger64Type,
  parseIntegerType,
  parseMarkdownType,
  parseOidType,
  parsePositiveIntType,
  parseStringType,
  parseTimeType,
  parseUnsignedIntType,
  parseUriType,
  parseUrlType,
  parseUuidType,
  parseXhtmlType,
} from '../../utility/fhir-parsers';
import { Base64BinaryType } from './Base64BinaryType';
import { BooleanType } from './BooleanType';
import { CanonicalType } from './CanonicalType';
import { CodeType } from './CodeType';
import { DateTimeType } from './DateTimeType';
import { DateType } from './DateType';
import { DecimalType } from './DecimalType';
import { IdType } from './IdType';
import { InstantType } from './InstantType';
import { Integer64Type } from './Integer64Type';
import { IntegerType } from './IntegerType';
import { MarkdownType } from './MarkdownType';
import { OidType } from './OidType';
import { PositiveIntType } from './PositiveIntType';
import { StringType } from './StringType';
import { TimeType } from './TimeType';
import { UnsignedIntType } from './UnsignedIntType';
import { UriType } from './UriType';
import { UrlType } from './UrlType';
import { UuidType } from './UuidType';
import { XhtmlType } from './XhtmlType';

/**
 * A map that associates string keys with functions, where each function is responsible
 * for parsing a specific primitive data type or value.
 *
 * This mapping provides a mechanism to handle the parsing of FHIR primitive data
 * types programmatically by referencing the appropriate function for the
 * corresponding key. The keys typically represent the names or identifiers
 * of the data types, and the functions contain the logic required
 * to convert JSON representations into their respective data types.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const PARSABLE_PRIMITIVE_MAP = new Map<string, Function>();
PARSABLE_PRIMITIVE_MAP.set(
  'valueBase64Binary',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): Base64BinaryType | undefined =>
    parseBase64BinaryType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueBooleanType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): BooleanType | undefined =>
    parseBooleanType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueCanonicalType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): CanonicalType | undefined =>
    parseCanonicalType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueCodeType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): CodeType | undefined => parseCodeType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueDateTimeType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): DateTimeType | undefined =>
    parseDateTimeType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueDateType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): DateType | undefined => parseDateType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueDecimalType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): DecimalType | undefined =>
    parseDecimalType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueIdType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): IdType | undefined => parseIdType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueInstantType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): InstantType | undefined =>
    parseInstantType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueInteger64Type',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): Integer64Type | undefined =>
    parseInteger64Type(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueIntegerType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): IntegerType | undefined =>
    parseIntegerType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueMarkdownType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): MarkdownType | undefined =>
    parseMarkdownType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueOidType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): OidType | undefined => parseOidType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valuePositiveIntType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): PositiveIntType | undefined =>
    parsePositiveIntType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueStringType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): StringType | undefined =>
    parseStringType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueTimeType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): TimeType | undefined => parseTimeType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueUnsignedIntType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): UnsignedIntType | undefined =>
    parseUnsignedIntType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueUriType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): UriType | undefined => parseUriType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueUrlType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): UrlType | undefined => parseUrlType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueUuidType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): UuidType | undefined => parseUuidType(json, siblingJson),
);
PARSABLE_PRIMITIVE_MAP.set(
  'valueXhtmlType',
  (json: JSON.Value | undefined, siblingJson?: JSON.Value): XhtmlType | undefined => parseXhtmlType(json, siblingJson),
);
