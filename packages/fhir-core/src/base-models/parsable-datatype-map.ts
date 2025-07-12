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

import { ParsableDataType } from '../utility/FhirParser';
import { IDataType } from './library-interfaces';
import { CodeableConcept } from '../data-types/complex/CodeableConcept';
import { Coding } from '../data-types/complex/Coding';
import { Meta } from '../data-types/complex/Meta';
import { Narrative } from '../data-types/complex/Narrative';
import { Period } from '../data-types/complex/Period';
import { Reference, Identifier } from '../data-types/complex/Reference-Identifier';

/**
 * PARSABLE_DATATYPE_MAP
 *
 * @remarks
 * Map of all parsable DataTypes where the key is the name of the DataType and the value is its ParsableDataType<DataType> class.
 *
 * @category Utilities: FHIR Parsers
 */
export const PARSABLE_DATATYPE_MAP = new Map<string, ParsableDataType<IDataType>>();
PARSABLE_DATATYPE_MAP.set('CodeableConcept', CodeableConcept);
PARSABLE_DATATYPE_MAP.set('Coding', Coding);
PARSABLE_DATATYPE_MAP.set('Identifier', Identifier);
PARSABLE_DATATYPE_MAP.set('Meta', Meta);
PARSABLE_DATATYPE_MAP.set('Narrative', Narrative);
PARSABLE_DATATYPE_MAP.set('Period', Period);
PARSABLE_DATATYPE_MAP.set('Reference', Reference);
