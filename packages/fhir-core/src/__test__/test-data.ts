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

import { BooleanType } from '../data-types/primitive/BooleanType';
import { CodeType } from '../data-types/primitive/CodeType';
import { DateTimeType } from '../data-types/primitive/DateTimeType';
import { DecimalType } from '../data-types/primitive/DecimalType';
import { IntegerType } from '../data-types/primitive/IntegerType';
import { fhirUri } from '../data-types/primitive/primitive-types';
import { StringType } from '../data-types/primitive/StringType';
import { UriType } from '../data-types/primitive/UriType';
import { Period } from '../data-types/complex/Period';
import { MockComplexDataType, MockTask } from './test-utils';

/**
 * Common test data used by the TestDataModel and SimplePersonModel tests.
 *
 * @module
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace TestData {
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

  export const VALID_STRING = 'This is a valid string.';
  export const VALID_STRING_TYPE = new StringType(VALID_STRING);
  export const VALID_STRING_2 = 'This is another valid string.';
  export const VALID_STRING_TYPE_2 = new StringType(VALID_STRING_2);

  export const VALID_INTEGER = 13579;
  export const VALID_INTEGER_TYPE = new IntegerType(VALID_INTEGER);
  export const VALID_INTEGER_2 = 24680;
  export const VALID_INTEGER_TYPE_2 = new IntegerType(VALID_INTEGER_2);

  export const VALID_DATETIME = `2024-01-28T14:30:00.000Z`;
  export const VALID_DATETIME_TYPE = new DateTimeType(VALID_DATETIME);
  export const VALID_DATETIME_2 = `2024-07-21T15:15:00.000Z`;
  export const VALID_DATETIME_TYPE_2 = new DateTimeType(VALID_DATETIME_2);

  export const VALID_DECIMAL = 128.1978;
  export const VALID_DECIMAL_TYPE = new DecimalType(VALID_DECIMAL);
  export const VALID_DECIMAL_2 = 721.198;
  export const VALID_DECIMAL_TYPE_2 = new DecimalType(VALID_DECIMAL_2);

  export const VALID_URI = 'validUri' as fhirUri;
  export const VALID_URI_TYPE = new UriType(VALID_URI);
  export const VALID_URI_2 = 'validUri2' as fhirUri;
  export const VALID_URI_TYPE_2 = new UriType(VALID_URI_2);

  export const VALID_MOCK_COMPLEX_DATATYPE = new MockComplexDataType('test/system', 'test-code');
  export const VALID_MOCK_COMPLEX_DATATYPE_2 = new MockComplexDataType('test/system2', 'test-code2');

  const VALID_START_DATETIME = `2024-03-15T00:00:00.000Z`;
  const VALID_END_DATETIME = `2024-07-03T01:00:00.000Z`;
  export const VALID_PERIOD = new Period();
  VALID_PERIOD.setStart(VALID_START_DATETIME);
  VALID_PERIOD.setEnd(VALID_END_DATETIME);
  const VALID_START_DATETIME_2 = `2024-10-31T15:00:00.000Z`;
  export const VALID_PERIOD_2 = new Period();
  VALID_PERIOD_2.setStart(VALID_START_DATETIME_2);

  export const VALID_TASK_NAME = 'MockTask Name';
  export const VALID_TASK_NAME_2 = 'MockTask Name Two';
  export const VALID_MOCK_TASK = new MockTask(new StringType(VALID_TASK_NAME), VALID_MOCK_COMPLEX_DATATYPE);
  export const VALID_MOCK_TASK_2 = new MockTask(new StringType(VALID_TASK_NAME_2), VALID_MOCK_COMPLEX_DATATYPE_2);
}
