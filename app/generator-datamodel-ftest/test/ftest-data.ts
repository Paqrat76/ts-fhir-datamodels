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

import {
  BooleanType,
  CodeType,
  DateTimeType,
  DecimalType,
  IdType,
  InstantType,
  IntegerType,
  StringType,
  UriType,
  fhirUri,
} from '@paq-ts-fhir/fhir-core';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace TestData {
  export const VALID_ID = 'id12345';
  export const VALID_ID_TYPE = new IdType(VALID_ID);
  export const IMPLICIT_RULES_VALUE = 'implicitRules';
  export const LANGUAGE_VALUE = 'en-US';
  export const VALID_CODE_GENERATED = `generated`;
  export const VALID_XHTML = '<div xmlns="http://www.w3.org/1999/xhtml">text</div>';

  export const VALID_ID_2 = 'id67890';
  export const VALID_ID_TYPE_2 = new IdType(VALID_ID_2);
  export const IMPLICIT_RULES_VALUE_2 = 'implicitRules2';
  export const LANGUAGE_VALUE_2 = 'en-UK';
  export const VALID_CODE_ADDITIONAL = `additional`;
  export const VALID_XHTML_2 = '<div xmlns="http://www.w3.org/1999/xhtml">text two</div>';

  export const DATATYPE_ID = 'DT-1357';
  export const DATATYPE_ID_2 = 'DT-2468';
  export const CONTAINED_PERSON_ID = '#SMP-1';
  export const CONTAINED_PERSON_ID_2 = '#SMP-2';

  export const INVALID_CODE_VALUE = ' Invalid code ';
  export const INVALID_CODE_TYPE = new StringType(INVALID_CODE_VALUE);
  export const INVALID_NON_STRING_TYPE_VALUE = 'Invalid datatype';
  export const INVALID_NON_STRING_TYPE = new StringType(INVALID_NON_STRING_TYPE_VALUE);
  export const INVALID_STRING_TYPE_VALUE = 12345;
  export const INVALID_STRING_TYPE = new IntegerType(INVALID_STRING_TYPE_VALUE);

  export const UNDEFINED_VALUE = undefined;

  export const VALID_BUNDLETYPE_BATCH = `batch`;
  export const VALID_BUNDLETYPE_BATCH_TYPE = new CodeType(VALID_BUNDLETYPE_BATCH);
  export const VALID_BUNDLETYPE_COLLECTION = `collection`;
  export const VALID_BUNDLETYPE_COLLECTION_TYPE = new CodeType(VALID_BUNDLETYPE_COLLECTION);

  export const VALID_CONSENT_DRAFT = `draft`;
  export const VALID_CONSENT_DRAFT_TYPE = new CodeType(VALID_CONSENT_DRAFT);
  export const VALID_CONSENT_ACTIVE = `active`;
  export const VALID_CONSENT_ACTIVE_TYPE = new CodeType(VALID_CONSENT_ACTIVE);

  export const VALID_CONTRIBUTOR_AUTHOR = `author`;
  export const VALID_CONTRIBUTOR_AUTHOR_TYPE = new CodeType(VALID_CONTRIBUTOR_AUTHOR);
  export const VALID_CONTRIBUTOR_REVIEWER = `reviewer`;
  export const VALID_CONTRIBUTOR_REVIEWER_TYPE = new CodeType(VALID_CONTRIBUTOR_REVIEWER);

  export const VALID_TASKCODE_APPROVE = `approve`;
  export const VALID_TASKCODE_APPROVE_TYPE = new CodeType(VALID_TASKCODE_APPROVE);
  export const VALID_TASKCODE_FULFILL = `fulfill`;
  export const VALID_TASKCODE_FULFILL_TYPE = new CodeType(VALID_TASKCODE_FULFILL);

  export const VALID_TASKSTATUS_REQUESTED = `requested`;
  export const VALID_TASKSTATUS_REQUESTED_TYPE = new CodeType(VALID_TASKSTATUS_REQUESTED);
  export const VALID_TASKSTATUS_ACCEPTED = `accepted`;
  export const VALID_TASKSTATUS_ACCEPTED_TYPE = new CodeType(VALID_TASKSTATUS_ACCEPTED);

  export const VALID_BOOLEAN_TRUE = true;
  export const VALID_BOOLEAN_TRUE_TYPE = new BooleanType(VALID_BOOLEAN_TRUE);
  export const VALID_BOOLEAN_FALSE = false;
  export const VALID_BOOLEAN_FALSE_TYPE = new BooleanType(VALID_BOOLEAN_FALSE);

  export const VALID_CODE = `testCodeType`;
  export const VALID_CODE_TYPE = new CodeType(VALID_CODE);
  export const VALID_CODE_2 = `testCodeType2`;
  export const VALID_CODE_TYPE_2 = new CodeType(VALID_CODE_2);

  export const VALID_CODE_DISPLAY = `TestCodeType`;
  export const VALID_CODE_DISPLAY_TYPE = new StringType(VALID_CODE_DISPLAY);
  export const VALID_CODE_DISPLAY_2 = `TestCodeType2`;
  export const VALID_CODE_DISPLAY_TYPE_2 = new StringType(VALID_CODE_DISPLAY_2);

  export const VALID_STRING = 'This is a valid string.';
  export const VALID_STRING_TYPE = new StringType(VALID_STRING);
  export const VALID_STRING_2 = 'This is another valid string.';
  export const VALID_STRING_TYPE_2 = new StringType(VALID_STRING_2);

  export const VALID_INTEGER = 13579;
  export const VALID_INTEGER_TYPE = new IntegerType(VALID_INTEGER);
  export const VALID_INTEGER_2 = 24680;
  export const VALID_INTEGER_TYPE_2 = new IntegerType(VALID_INTEGER_2);

  export const VALID_INSTANT = `2024-01-28T14:30:00.000Z`;
  export const VALID_INSTANT_TYPE = new InstantType(VALID_INSTANT);
  export const VALID_INSTANT_2 = `2024-07-21T15:15:00.000Z`;
  export const VALID_INSTANT_TYPE_2 = new InstantType(VALID_INSTANT_2);

  export const VALID_DATETIME = `2024-01-28T14:30:00Z`;
  export const VALID_DATETIME_TYPE = new DateTimeType(VALID_DATETIME);
  export const VALID_DATETIME_2 = `2024-07-21T15:15:00Z`;
  export const VALID_DATETIME_TYPE_2 = new DateTimeType(VALID_DATETIME_2);

  export const VALID_DECIMAL = 128.1978;
  export const VALID_DECIMAL_TYPE = new DecimalType(VALID_DECIMAL);
  export const VALID_DECIMAL_2 = 721.198;
  export const VALID_DECIMAL_TYPE_2 = new DecimalType(VALID_DECIMAL_2);
  export const VALID_DECIMAL_3 = 0.01;
  export const VALID_DECIMAL_TYPE_3 = new DecimalType(VALID_DECIMAL_3);
  export const VALID_DECIMAL_4 = 1.001;
  export const VALID_DECIMAL_TYPE_4 = new DecimalType(VALID_DECIMAL_4);

  export const VALID_URI = 'validUri' as fhirUri;
  export const VALID_URI_TYPE = new UriType(VALID_URI);
  export const VALID_URI_2 = 'validUri2' as fhirUri;
  export const VALID_URI_TYPE_2 = new UriType(VALID_URI_2);

  export const VALID_PERSON_REFERENCE_VALUE = 'SimplePersonModel/PER-13579';
  export const VALID_PERSON_REFERENCE_VALUE_2 = 'SimplePersonModel/PER-97531';

  export const VALID_HEALTHCARESERVICE_REFERENCE_VALUE = 'HealthcareService/HS-24680';
  export const VALID_HEALTHCARESERVICE_REFERENCE_VALUE_2 = 'HealthcareService/HS-08642';

  export const VALID_LOCATION_REFERENCE_VALUE = 'Location/LOC-12345';
  export const VALID_LOCATION_REFERENCE_VALUE_2 = 'Location/LOC-67890';

  export const VALID_ORGANIZATION_REFERENCE_VALUE = 'Organization/ORG-54321';
  export const VALID_ORGANIZATION_REFERENCE_VALUE_2 = 'Organization/ORG-09876';

  export const VALID_START_DATETIME = `2024-03-15T00:00:00.000Z`;
  export const VALID_END_DATETIME = `2024-07-03T01:00:00.000Z`;
  export const VALID_START_DATETIME_2 = `2024-10-31T15:00:00.000Z`;

  export const VALID_SYSTEM = 'http://sample/system/one';
  export const VALID_SYSTEM_2 = 'http://sample/system/two';

  export const VALID_TASK_NAME = 'MockTask Name';
  export const VALID_TASK_NAME_2 = 'MockTask Name Two';

  export const VALID_FAMILY = 'Surname';
  export const VALID_FAMILY_2 = 'LastName';
  export const VALID_FIRST_NAME = 'First';
  export const VALID_FIRST_NAME_2 = 'First2';
  export const VALID_MIDDLE_NAME = 'Middle';
  export const VALID_MIDDLE_NAME_2 = 'Middle2';
  export const VALID_PREFIX = 'Mr.';
  export const VALID_PREFIX_2 = 'Ms.';
  export const VALID_SUFFIX = 'Sr.';
  export const VALID_SUFFIX_2 = 'MD';

  export const VALID_USE_HOME = `home`;
  export const VALID_USE_WORK = `work`;
  export const VALID_TYPE_POSTAL = `postal`;
  export const VALID_TYPE_PHYSICAL = `physical`;
  export const VALID_LINE_A = '1234 Main ST';
  export const VALID_LINE_A_2 = '4321 Central ST';
  export const VALID_LINE_B = 'APT 15A';
  export const VALID_LINE_B_2 = 'Suite 123';
  export const VALID_CITY = 'Nashua';
  export const VALID_CITY_2 = 'Renton';
  export const VALID_STATE = 'NH';
  export const VALID_STATE_2 = 'WA';
  export const VALID_POSTAL = '03064';
  export const VALID_POSTAL_2 = '98058';
  export const VALID_COUNTRY = 'US';

  export const VALID_PHONE = '888-555-1234';
  export const VALID_PHONE_TYPE = new StringType(VALID_PHONE);
  export const VALID_PHONE_2 = '888-555-9876';
  export const VALID_PHONE_TYPE_2 = new StringType(VALID_PHONE_2);
}
