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
  DataType,
  DomainResource,
  fhirString,
  IDataType,
  IPrimitiveType,
  isElementEmpty,
  JSON,
  setFhirComplexJson,
  setFhirPrimitiveJson,
  StringType,
} from '@paq-ts-fhir/fhir-core';
import {
  Address,
  CodeableConcept,
  Coding,
  Dosage,
  Duration,
  Extension,
  HumanName,
  Identifier,
  Meta,
  Narrative,
  Period,
  Quantity,
  Range,
  Reference,
  Signature,
} from '../src/complex-types/complex-datatypes';
import { TestData } from './ftest-data';

export const VALID_META = new Meta();
VALID_META.setLastUpdated(TestData.VALID_INSTANT);
export const VALID_META_2 = new Meta();
VALID_META_2.setLastUpdated(TestData.VALID_INSTANT_2);

export const VALID_NARRATIVE = new Narrative(TestData.VALID_CODE_GENERATED, TestData.VALID_XHTML);
export const VALID_NARRATIVE_2 = new Narrative(TestData.VALID_CODE_ADDITIONAL, TestData.VALID_XHTML_2);

export const VALID_EXTENSION = new Extension('extUrl');
VALID_EXTENSION.setValue(new StringType('Extension string value'));
export const VALID_EXTENSION_2 = new Extension('extUrl2');
VALID_EXTENSION_2.setValue(new StringType('Extension string value two'));

export const DATATYPE_EXTENSION = new Extension('datatypeExtUrl');
DATATYPE_EXTENSION.setValue(new StringType('Datatype Extension string value'));

export const VALID_MODIFIER_EXTENSION = new Extension('modExtUrl');
VALID_MODIFIER_EXTENSION.setValue(new StringType('Modifier Extension string value'));
export const VALID_MODIFIER_EXTENSION_2 = new Extension('modExtUrl2');
VALID_MODIFIER_EXTENSION_2.setValue(new StringType('Modifier Extension string value two'));

export const VALID_CODING = new Coding();
VALID_CODING.setSystem(TestData.VALID_URI);
VALID_CODING.setCode(TestData.VALID_CODE);
VALID_CODING.setDisplay(TestData.VALID_CODE_DISPLAY);
export const VALID_CODING_2 = new Coding();
VALID_CODING_2.setSystem(TestData.VALID_URI_2);
VALID_CODING_2.setCode(TestData.VALID_CODE_2);
VALID_CODING_2.setDisplay(TestData.VALID_CODE_DISPLAY_2);

export const VALID_CODEABLE_CONCEPT = new CodeableConcept();
VALID_CODEABLE_CONCEPT.setText(TestData.VALID_CODE_DISPLAY);
VALID_CODEABLE_CONCEPT.addCoding(VALID_CODING);
export const VALID_CODEABLE_CONCEPT_2 = new CodeableConcept();
VALID_CODEABLE_CONCEPT_2.setText(TestData.VALID_CODE_DISPLAY_2);
VALID_CODEABLE_CONCEPT_2.addCoding(VALID_CODING_2);

export const VALID_IDENTIFIER = new Identifier();
VALID_IDENTIFIER.setSystem(TestData.VALID_SYSTEM);
VALID_IDENTIFIER.setValue(TestData.VALID_STRING);
export const VALID_IDENTIFIER_2 = new Identifier();
VALID_IDENTIFIER_2.setSystem(TestData.VALID_SYSTEM_2);
VALID_IDENTIFIER_2.setValue(TestData.VALID_STRING_2);

export const VALID_HUMAN_NAME = new HumanName();
VALID_HUMAN_NAME.setFamily(TestData.VALID_FAMILY);
VALID_HUMAN_NAME.setGiven([TestData.VALID_FIRST_NAME, TestData.VALID_MIDDLE_NAME]);
VALID_HUMAN_NAME.addPrefix(TestData.VALID_PREFIX);
VALID_HUMAN_NAME.addSuffix(TestData.VALID_SUFFIX);
export const VALID_HUMAN_NAME_2 = new HumanName();
VALID_HUMAN_NAME_2.setFamily(TestData.VALID_FAMILY_2);
VALID_HUMAN_NAME_2.setGiven([TestData.VALID_FIRST_NAME_2, TestData.VALID_MIDDLE_NAME_2]);
VALID_HUMAN_NAME_2.addPrefix(TestData.VALID_PREFIX_2);
VALID_HUMAN_NAME_2.addSuffix(TestData.VALID_SUFFIX_2);

export const VALID_ADDRESS = new Address();
VALID_ADDRESS.setUse(TestData.VALID_USE_HOME);
VALID_ADDRESS.setType(TestData.VALID_TYPE_POSTAL);
VALID_ADDRESS.setLine([TestData.VALID_LINE_A, TestData.VALID_LINE_B]);
VALID_ADDRESS.setCity(TestData.VALID_CITY);
VALID_ADDRESS.setState(TestData.VALID_STATE);
VALID_ADDRESS.setPostalCode(TestData.VALID_POSTAL);
VALID_ADDRESS.setCountry(TestData.VALID_COUNTRY);
export const VALID_ADDRESS_2 = new Address();
VALID_ADDRESS_2.setUse(TestData.VALID_USE_WORK);
VALID_ADDRESS_2.setType(TestData.VALID_TYPE_PHYSICAL);
VALID_ADDRESS_2.setLine([TestData.VALID_LINE_A_2, TestData.VALID_LINE_B_2]);
VALID_ADDRESS_2.setCity(TestData.VALID_CITY_2);
VALID_ADDRESS_2.setState(TestData.VALID_STATE_2);
VALID_ADDRESS_2.setPostalCode(TestData.VALID_POSTAL_2);
VALID_ADDRESS_2.setCountry(TestData.VALID_COUNTRY);

export const VALID_QUANTITY = new Quantity();
VALID_QUANTITY.setValue(TestData.VALID_DECIMAL);
export const VALID_QUANTITY_2 = new Quantity();
VALID_QUANTITY_2.setValue(TestData.VALID_DECIMAL_2);
export const VALID_QUANTITY_3 = new Quantity();
VALID_QUANTITY_3.setValue(TestData.VALID_DECIMAL_3);
export const VALID_QUANTITY_4 = new Quantity();
VALID_QUANTITY_4.setValue(TestData.VALID_DECIMAL_4);

export const VALID_RANGE = new Range();
VALID_RANGE.setLow(VALID_QUANTITY);
VALID_RANGE.setHigh(VALID_QUANTITY_2);
export const VALID_RANGE_2 = new Range();
VALID_RANGE_2.setLow(VALID_QUANTITY_3);
VALID_RANGE_2.setHigh(VALID_QUANTITY_4);

export const VALID_DURATION = new Duration();
VALID_DURATION.setValue(TestData.VALID_DECIMAL);
export const VALID_DURATION_2 = new Duration();
VALID_DURATION_2.setValue(TestData.VALID_DECIMAL_2);

export const VALID_PERIOD = new Period();
VALID_PERIOD.setStart(TestData.VALID_START_DATETIME);
VALID_PERIOD.setEnd(TestData.VALID_END_DATETIME);
export const VALID_PERIOD_2 = new Period();
VALID_PERIOD_2.setStart(TestData.VALID_START_DATETIME_2);

export const VALID_DOSAGE = new Dosage();
VALID_DOSAGE.setSequence(0);
VALID_DOSAGE.setText(TestData.VALID_STRING);
VALID_DOSAGE.setPatientInstruction(TestData.VALID_STRING_2);
VALID_DOSAGE.setAsNeeded(TestData.VALID_BOOLEAN_TRUE_TYPE);
export const VALID_DOSAGE_2 = new Dosage();
VALID_DOSAGE_2.setSequence(1);
VALID_DOSAGE_2.setText(TestData.VALID_STRING_2);
VALID_DOSAGE_2.setPatientInstruction(TestData.VALID_STRING);
VALID_DOSAGE_2.setAsNeeded(TestData.VALID_BOOLEAN_FALSE_TYPE);

export const VALID_PERSON_REFERENCE = new Reference();
VALID_PERSON_REFERENCE.setReference(TestData.VALID_PERSON_REFERENCE_VALUE);
export const VALID_PERSON_REFERENCE_2 = new Reference();
VALID_PERSON_REFERENCE_2.setReference(TestData.VALID_PERSON_REFERENCE_VALUE_2);

export const VALID_HEALTHCARESERVICE_REFERENCE = new Reference();
VALID_HEALTHCARESERVICE_REFERENCE.setReference(TestData.VALID_HEALTHCARESERVICE_REFERENCE_VALUE);
export const VALID_HEALTHCARESERVICE_REFERENCE_2 = new Reference();
VALID_HEALTHCARESERVICE_REFERENCE_2.setReference(TestData.VALID_HEALTHCARESERVICE_REFERENCE_VALUE_2);

export const VALID_LOCATION_REFERENCE = new Reference();
VALID_LOCATION_REFERENCE.setReference(TestData.VALID_LOCATION_REFERENCE_VALUE);
export const VALID_LOCATION_REFERENCE_2 = new Reference();
VALID_LOCATION_REFERENCE_2.setReference(TestData.VALID_LOCATION_REFERENCE_VALUE_2);

export const VALID_ORGANIZATION_REFERENCE = new Reference();
VALID_ORGANIZATION_REFERENCE.setReference(TestData.VALID_ORGANIZATION_REFERENCE_VALUE);
export const VALID_ORGANIZATION_REFERENCE_2 = new Reference();
VALID_ORGANIZATION_REFERENCE_2.setReference(TestData.VALID_ORGANIZATION_REFERENCE_VALUE_2);

export const VALID_SIGNATURE = new Signature([VALID_CODING], TestData.VALID_INSTANT_TYPE, VALID_ORGANIZATION_REFERENCE);
export const VALID_SIGNATURE_2 = new Signature(
  [VALID_CODING_2],
  TestData.VALID_INSTANT_TYPE_2,
  VALID_ORGANIZATION_REFERENCE_2,
);

export class MockTask extends DomainResource {
  public mockPrimitive: StringType | undefined = undefined;
  public mockComplex: Period | undefined = undefined;

  constructor(stringValue?: StringType, periodValue?: Period) {
    super();
    if (stringValue) {
      this.mockPrimitive = stringValue;
    }
    if (periodValue) {
      this.mockComplex = periodValue;
    }
  }

  public resourceType(): string {
    return 'MockTask';
  }

  public fhirType(): string {
    return 'MockTask';
  }

  public override isEmpty(): boolean {
    return super.isEmpty() && this.mockPrimitive === undefined && this.mockComplex === undefined;
  }

  public copy(): MockTask {
    const dest = new MockTask();
    this.copyValues(dest);
    return dest;
  }

  protected override copyValues(dest: MockTask): void {
    super.copyValues(dest);
    dest.mockPrimitive = this.mockPrimitive?.copy();
    dest.mockComplex = this.mockComplex?.copy();
    return;
  }

  public override toJSON(): JSON.Value | undefined {
    // Will always have, at least, the 'resourceType' property from Resource
    const jsonObj = super.toJSON() as JSON.Object;

    if (this.mockPrimitive !== undefined) {
      setFhirPrimitiveJson<fhirString>(this.mockPrimitive, 'mockPrimitive', jsonObj);
    }

    if (this.mockComplex !== undefined) {
      setFhirComplexJson(this.mockComplex, 'mockComplex', jsonObj);
    }

    // jsonObj will always have, at least, the 'resourceType' property from Resource.
    // If that is all jsonObj has, return undefined.
    return Object.keys(jsonObj).length > 1 ? jsonObj : undefined;
  }
}

export const VALID_MOCK_TASK = new MockTask(new StringType(TestData.VALID_TASK_NAME), VALID_PERIOD);
export const VALID_MOCK_TASK_2 = new MockTask(new StringType(TestData.VALID_TASK_NAME_2), VALID_PERIOD_2);

export class MockComplexDataType extends DataType implements IDataType {
  public mockSystem: StringType | undefined = undefined;
  public mockCode: StringType | undefined = undefined;

  constructor(system?: fhirString, code?: fhirString) {
    super();
    if (system) {
      this.mockSystem = new StringType(system);
    }
    if (code) {
      this.mockCode = new StringType(code);
    }
  }

  public override fhirType(): string {
    return 'MockComplexDataType';
  }

  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(this.mockSystem, this.mockCode);
  }

  public override isComplexDataType(): boolean {
    return true;
  }

  public copy(): MockComplexDataType {
    const dest = new MockComplexDataType();
    this.copyValues(dest);
    return dest;
  }

  protected override copyValues(dest: MockComplexDataType): void {
    super.copyValues(dest);
    dest.mockSystem = this.mockSystem?.copy();
    dest.mockCode = this.mockCode?.copy();
  }

  public override dataTypeName(): string {
    return 'MockComplexDataType';
  }

  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    setFhirPrimitiveJson<fhirString>(this.mockSystem as IPrimitiveType<string>, 'mockSystem', jsonObj);
    setFhirPrimitiveJson<fhirString>(this.mockCode as IPrimitiveType<string>, 'mockCode', jsonObj);

    return jsonObj;
  }
}

export const VALID_MOCK_COMPLEX_DATATYPE = new MockComplexDataType(
  TestData.VALID_SYSTEM,
  TestData.VALID_CODE_GENERATED,
);
export const VALID_MOCK_COMPLEX_DATATYPE_2 = new MockComplexDataType(
  TestData.VALID_SYSTEM_2,
  TestData.VALID_CODE_ADDITIONAL,
);
