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

import { FhirCodeDefinition, IFhirCodeDefinition, IFhirCodeEnum } from '../base-models/core-fhir-codes';
import {
  IBackboneElement,
  IBackboneType,
  IBase,
  IDataType,
  IDomainResource,
  IPrimitiveType,
  IResource,
} from '../base-models/library-interfaces';
import { Base } from '../base-models/Base';
import {
  BackboneElement,
  BackboneType,
  DataType,
  Extension,
  setFhirComplexJson,
  setFhirPrimitiveJson,
} from '../base-models/core-fhir-models';
import { Resource } from '../base-models/Resource';
import { DomainResource } from '../base-models/DomainResource';
import { IntegerType } from '../data-types/primitive/IntegerType';
import { FHIR_MAX_STRING_LENGTH, fhirCode, fhirString } from '../data-types/primitive/primitive-types';
import { StringType } from '../data-types/primitive/StringType';
import { InvalidCodeError } from '../errors/InvalidCodeError';
import { isEmpty, isEmpty as _isEmpty } from '../utility/common-util';
import * as JSON from '../utility/json-helpers';
import { isElementEmpty } from '../utility/fhir-util';
import { assertIsDefined, isDefined } from '../utility/type-guards';
import { strict as assert } from 'node:assert';
import { InvalidTypeError } from '../errors/InvalidTypeError';
import { FhirParser, getPrimitiveTypeJson, ParsableResource } from '../utility/FhirParser';
import { PARSABLE_DATATYPE_MAP } from '../base-models/parsable-datatype-map';
import { INSTANCE_EMPTY_ERROR_MSG } from '../constants';

export {
  FHIR_MIN_INTEGER,
  FHIR_MAX_INTEGER,
  FHIR_MIN_INTEGER64,
  FHIR_MAX_INTEGER64,
} from '../data-types/primitive/primitive-types';

export const UNDEFINED_VALUE = undefined;

/**
 * Common constants used in validation testing
 */

export const INVALID_CODE_VALUE = ' Invalid code ';
export const INVALID_NON_STRING_TYPE_VALUE = 'Invalid datatype';
export const INVALID_NON_STRING_TYPE = new StringType(INVALID_NON_STRING_TYPE_VALUE);
export const INVALID_STRING_TYPE_VALUE = 12345;
export const INVALID_STRING_TYPE = new IntegerType(INVALID_STRING_TYPE_VALUE);
export const INVALID_STRING = '';
export const TOO_BIG_STRING = getString(FHIR_MAX_STRING_LENGTH + 2);

export function getString(maxLength: number): string {
  // https://www.geeksforgeeks.org/javascript-program-for-generating-a-string-of-specific-length/#using-for-loop
  let str = '';
  const characters = '!( abcdefghijklmnopqrstuvwxyz . ABCDEFGHIJKLMNOPQRSTUVWXYZ )?';
  const charLen = characters.length;

  for (let i = 0; i < maxLength; i++) {
    // Generating a random index
    const idx = Math.floor(Math.random() * charLen);
    str += characters.charAt(idx);
  }

  return str;
}

/**
 * Mock objects used in testing
 */

export class MockBase extends Base implements IBase {
  public mockValue: string | undefined = undefined;

  constructor(value?: string) {
    super();
    if (value) {
      this.mockValue = value;
    }
  }

  public fhirType(): string {
    return 'MockBase';
  }

  public isEmpty(): boolean {
    return _isEmpty(this.mockValue);
  }

  public copy(): MockBase {
    const dest = new MockBase();
    this.copyValues(dest);
    return dest;
  }

  protected copyValues(dest: MockBase): void {
    dest.mockValue = this.mockValue;
  }

  // NOT USED
  public toJSON(): JSON.Value | undefined {
    return undefined;
  }
}

export class MockElement extends DataType implements IDataType {
  constructor(id?: fhirString, extension?: Extension[]) {
    super();
    if (id !== undefined) {
      super.setId(id);
    }
    if (extension !== undefined) {
      super.setExtension(extension);
    }
  }

  public dataTypeName(): string {
    return 'MockElement';
  }

  public override isDataType(): boolean {
    return true;
  }

  public override isEmpty(): boolean {
    return super.isEmpty();
  }

  public copy(): MockElement {
    const dest = new MockElement();
    this.copyValues(dest);
    return dest;
  }
}

export class MockBackboneElement extends BackboneElement implements IBackboneElement {
  constructor(modifierExtension?: Extension[]) {
    super();
    if (modifierExtension !== undefined) {
      super.setModifierExtension(modifierExtension);
    }
  }

  public override isEmpty(): boolean {
    return super.isEmpty();
  }

  public copy(): MockBackboneElement {
    const dest = new MockBackboneElement();
    this.copyValues(dest);
    return dest;
  }
}

export class MockBackboneType extends BackboneType implements IBackboneType {
  constructor(modifierExtension?: Extension[]) {
    super();
    if (modifierExtension !== undefined) {
      super.setModifierExtension(modifierExtension);
    }
  }

  public dataTypeName(): string {
    return 'MockBackboneType';
  }

  public override isEmpty(): boolean {
    return super.isEmpty();
  }

  public copy(): MockBackboneType {
    const dest = new MockBackboneType();
    this.copyValues(dest);
    return dest;
  }
}

export class MockFhirModel extends Base implements IBase {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  public fhirType(): string {
    return 'MockFhirModel';
  }

  public isEmpty(): boolean {
    return true;
  }

  // NOT USED
  public copy(): MockFhirModel {
    const dest = new MockFhirModel();
    this.copyValues(dest);
    return dest;
  }

  // NOT USED
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected copyValues(_dest: MockFhirModel): void {
    return;
  }

  // NOT USED
  public toJSON(): JSON.Value | undefined {
    return undefined;
  }
}

export class MockResource extends Resource implements IResource {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  public override resourceType(): string {
    return 'MockResource';
  }

  public fhirType(): string {
    return 'MockResource';
  }

  public override isEmpty(): boolean {
    return super.isEmpty();
  }

  // NOT USED
  public copy(): MockResource {
    const dest = new MockResource();
    this.copyValues(dest);
    return dest;
  }

  // NOT USED
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected override copyValues(_dest: MockResource): void {
    return;
  }

  public override toJSON(): JSON.Value | undefined {
    // Will always have, at least, the 'resourceType' property from Resource
    const jsonObj = super.toJSON() as JSON.Object;
    return Object.keys(jsonObj).length > 1 ? jsonObj : undefined;
  }
}

export class MockTask extends DomainResource implements IDomainResource {
  public mockPrimitive: StringType | undefined = undefined;
  public mockComplex: MockComplexDataType | undefined = undefined;

  constructor(stringValue?: StringType, mockComplexValue?: MockComplexDataType) {
    super();
    if (stringValue) {
      this.mockPrimitive = stringValue;
    }
    if (mockComplexValue) {
      this.mockComplex = mockComplexValue;
    }
  }

  public override resourceType(): string {
    return 'MockTask';
  }

  // For this mock, only parse the mockPrimitive
  public static override parse(sourceJson: JSON.Value, optSourceField?: string): MockTask | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }
    const source = isDefined<string>(optSourceField) ? optSourceField : 'MockTask';
    const datatypeJsonObj: JSON.Object = JSON.asObject(sourceJson, `${source} JSON`);
    const instance = new MockTask();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processDomainResourceJson(instance, datatypeJsonObj);

    const fieldName = 'mockPrimitive';
    const sourceField = `${source}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in datatypeJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(
        datatypeJsonObj,
        sourceField,
        fieldName,
        primitiveJsonType,
      );
      instance.mockPrimitive = fhirParser.parseStringType(dtJson, dtSiblingJson);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
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
    return 'Coding';
  }

  public dataTypeName(): string {
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

export class MockCodeEnum implements IFhirCodeEnum {
  // Code definitions copied from NarrativeStatusEnum
  public static readonly GENERATED = new FhirCodeDefinition(
    'GENERATED',
    `generated`,
    `http://hl7.org/fhir/narrative-status`,
    `Generated`,
    `The contents of the narrative are entirely generated from the core elements in the content.`,
  );
  public static readonly EXTENSIONS = new FhirCodeDefinition(
    'EXTENSIONS',
    `extensions`,
    `http://hl7.org/fhir/narrative-status`,
    `Extensions`,
    `The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.`,
  );
  public static readonly ADDITIONAL = new FhirCodeDefinition(
    'ADDITIONAL',
    `additional`,
    `http://hl7.org/fhir/narrative-status`,
    `Additional`,
    `The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.`,
  );
  public static readonly EMPTY = new FhirCodeDefinition(
    'EMPTY',
    `empty`,
    `http://hl7.org/fhir/narrative-status`,
    `Empty`,
    `The contents of the narrative are some equivalent of "No human-readable text provided in this case".`,
  );

  values(): IFhirCodeDefinition[] {
    return [MockCodeEnum.GENERATED, MockCodeEnum.EXTENSIONS, MockCodeEnum.ADDITIONAL, MockCodeEnum.EMPTY];
  }

  fromCode(code: fhirCode | undefined): IFhirCodeDefinition {
    if (code === undefined) {
      throw new InvalidCodeError(`The provided 'code' value is undefined`);
    } else if (MockCodeEnum.GENERATED.code === code) {
      return MockCodeEnum.GENERATED;
    } else if (MockCodeEnum.EXTENSIONS.code === code) {
      return MockCodeEnum.EXTENSIONS;
    } else if (MockCodeEnum.ADDITIONAL.code === code) {
      return MockCodeEnum.ADDITIONAL;
    } else if (MockCodeEnum.EMPTY.code === code) {
      return MockCodeEnum.EMPTY;
    } else {
      throw new InvalidCodeError(`Unknown MockCodeEnum 'code' value '${code}'`);
    }
  }
}

export const PARSABLE_RESOURCE_MAP = new Map<string, ParsableResource<IResource>>();
PARSABLE_RESOURCE_MAP.set('MockResource', MockResource);
PARSABLE_RESOURCE_MAP.set('MockTask', MockTask);

/**
 * Asserts the provided JSON object represents a valid FHIR Resource.
 *
 * @param dataJsonObj - source JSON object
 * @param fhirResourceType - expected FhirResourceType
 * @throws AssertionError for invalid arguments
 * @throws {@link InvalidTypeError} for invalid fhirResourceType
 *
 * @category Type Guards/Assertions
 */
export function assertFhirResourceTypeJson(dataJsonObj: JSON.Object, fhirResourceType: string): void {
  assertIsDefined<JSON.Object>(dataJsonObj, `The dataJsonObj argument is undefined/null.`);
  assertIsDefined<string>(fhirResourceType, `The fhirResourceType argument is undefined/null.`);
  assert(!isEmpty(fhirResourceType), `The fhirResourceType argument is empty.`);
  assert(JSON.isJsonObject(dataJsonObj), `The provided JSON does not represent a JSON object.`);

  if ('resourceType' in dataJsonObj) {
    const resourceTypeValue = JSON.asString(dataJsonObj['resourceType'], `${fhirResourceType}.resourceType`);
    if (resourceTypeValue !== fhirResourceType) {
      throw new InvalidTypeError(
        `Invalid JSON 'resourceType' ('${resourceTypeValue}') value; Should be '${fhirResourceType}'.`,
      );
    }
  } else {
    throw new InvalidTypeError(
      `The provided JSON does not represent a FHIR Resource (missing 'resourceType' element).`,
    );
  }
}
