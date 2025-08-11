/*
 * Copyright (c) 2024. Joe Paquette
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

import { strict as assert } from 'node:assert';
import { DataType, setFhirComplexListJson, setFhirPrimitiveJson } from '../../base-models/core-fhir-models';
import { IDataType } from '../../base-models/library-interfaces';
import { PARSABLE_DATATYPE_MAP } from '../../base-models/parsable-datatype-map';
import { PARSABLE_RESOURCE_MAP } from '../../base-models/parsable-resource-map';
import { INSTANCE_EMPTY_ERROR_MSG } from '../../constants';
import { Coding } from './Coding';
import { fhirString, fhirStringSchema, parseFhirPrimitiveData } from '../primitive/primitive-types';
import { StringType } from '../primitive/StringType';
import { isEmpty } from '../../utility/common-util';
import { copyListValues, isElementEmpty } from '../../utility/fhir-util';
import * as JSON from '../../utility/json-helpers';
import { assertFhirType, assertFhirTypeList, isDefined, isDefinedList } from '../../utility/type-guards';
import { FhirParser, getPrimitiveTypeJson } from '../../utility/FhirParser';

/**
 * CodeableConcept Class
 *
 * @remarks
 * Base StructureDefinition for CodeableConcept Type: A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 *
 * This is a common pattern in healthcare - a concept that may be defined by one or more codes from formal definitions including LOINC and SNOMED CT, and/or defined by the provision of text that captures a human sense of the concept.
 *
 * **FHIR Specification**
 * - **Short:** Concept - reference to a terminology or just  text
 * - **Definition:** A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 * - **Comment:** Not all terminology uses fit this general pattern. In some cases, models should not use CodeableConcept and use Coding directly and provide their own structure for managing text, codings, translations and the relationship between elements and pre- and post-coordination.
 * - **FHIR Version:** 4.0.1; Normative since 4.0.0
 *
 * @category DataModel: ComplexType
 * @see [FHIR CodeableConcept](http://hl7.org/fhir/StructureDefinition/CodeableConcept)
 */
export class CodeableConcept extends DataType implements IDataType {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  /**
   * Parse the provided `CodeableConcept` JSON to instantiate the CodeableConcept data model.
   *
   * @param sourceJson - JSON representing FHIR `CodeableConcept`
   * @param optSourceField - Optional data source field (e.g. `<complexTypeName>.<complexTypeFieldName>`); defaults to CodeableConcept
   * @returns CodeableConcept data model or undefined for `CodeableConcept`
   */
  public static parse(sourceJson: JSON.Value, optSourceField?: string): CodeableConcept | undefined {
    if (!isDefined<JSON.Value>(sourceJson) || (JSON.isJsonObject(sourceJson) && isEmpty(sourceJson))) {
      return undefined;
    }

    const optSourceValue = isDefined<string>(optSourceField) ? optSourceField : 'CodeableConcept';
    const classJsonObj: JSON.Object = JSON.asObject(sourceJson, `${optSourceValue} JSON`);
    const instance = new CodeableConcept();

    const fhirParser = new FhirParser(PARSABLE_DATATYPE_MAP, PARSABLE_RESOURCE_MAP);
    fhirParser.processElementJson(instance, classJsonObj);

    let fieldName = '';
    let sourceField = '';

    fieldName = 'coding';
    sourceField = `${optSourceValue}.${fieldName}`;
    if (fieldName in classJsonObj) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dataElementJsonArray: JSON.Array = JSON.asArray(classJsonObj[fieldName]!, sourceField);
      dataElementJsonArray.forEach((dataElementJson: JSON.Value, idx) => {
        const datatype: Coding | undefined = Coding.parse(dataElementJson, `${sourceField}[${String(idx)}]`);
        if (datatype !== undefined) {
          instance.addCoding(datatype);
        }
      });
    }

    fieldName = 'text';
    sourceField = `${optSourceValue}.${fieldName}`;
    const primitiveJsonType = 'string';
    if (fieldName in classJsonObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(classJsonObj, sourceField, fieldName, primitiveJsonType);
      const datatype: StringType | undefined = fhirParser.parseStringType(dtJson, dtSiblingJson);
      instance.setTextElement(datatype);
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * CodeableConcept.coding Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Code defined by a terminology system
   * - **Definition:** A reference to a code defined by a terminology system.
   * - **Comment:** Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
   * - **Requirements:** Allows for alternative encodings within a code system, and translations to other code systems.
   * - **FHIR Type:** `Coding`
   * - **Cardinality:** 0..*
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private coding?: Coding[] | undefined;

  /**
   * CodeableConcept.text Element
   *
   * @remarks
   * **FHIR Specification**
   * - **Short:** Plain text representation of the concept
   * - **Definition:** A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.
   * - **Comment:** Very often the text is the same as a displayName of one of the codings.
   * - **Requirements:** The codes from the terminologies do not always capture the correct meaning with all the nuances of the human using them, or sometimes there is no appropriate code at all. In these cases, the text is used to capture the full meaning of the source.
   * - **FHIR Type:** `string`
   * - **Cardinality:** 0..1
   * - **isModifier:** false
   * - **isSummary:** true
   */
  private text?: StringType | undefined;

  /**
   * @returns the `coding` property value as a Coding array
   */
  public getCoding(): Coding[] {
    return this.coding ?? ([] as Coding[]);
  }

  /**
   * Assigns the provided Coding array value to the `coding` property.
   *
   * @param value - the `coding` array value
   * @returns this
   */
  public setCoding(value: Coding[] | undefined): this {
    if (isDefinedList<Coding>(value)) {
      const optErrMsg = `Invalid CodeableConcept.coding; Provided value array has an element that is not an instance of Coding.`;
      assertFhirTypeList<Coding>(value, Coding, optErrMsg);
      this.coding = value;
    } else {
      this.coding = undefined;
    }
    return this;
  }

  /**
   * Add the provided Coding value to the `coding` array property.
   *
   * @param value - the `coding` value
   * @returns this
   */
  public addCoding(value: Coding | undefined): this {
    if (isDefined<Coding>(value)) {
      const optErrMsg = `Invalid CodeableConcept.coding; Provided element is not an instance of Coding.`;
      assertFhirType<Coding>(value, Coding, optErrMsg);
      this.initCoding();
      this.coding?.push(value);
    }
    return this;
  }

  /**
   * @returns `true` if the `coding` property exists and has a value; `false` otherwise
   */
  public hasCoding(): boolean {
    return isDefinedList<Coding>(this.coding) && this.coding.some((item: Coding) => !item.isEmpty());
  }

  /**
   * Initialize the `coding` property
   */
  private initCoding(): void {
    if (!this.hasCoding()) {
      this.coding = [] as Coding[];
    }
  }

  /**
   * @returns the `text` property value as a StringType object if defined; else an empty StringType object
   */
  public getTextElement(): StringType {
    return this.text ?? new StringType();
  }

  /**
   * Assigns the provided PrimitiveType value to the `text` property.
   *
   * @param element - the `text` value
   * @returns this
   */
  public setTextElement(element: StringType | undefined): this {
    if (isDefined<StringType>(element)) {
      const optErrMsg = `Invalid CodeableConcept.text; Provided element is not an instance of StringType.`;
      assertFhirType<StringType>(element, StringType, optErrMsg);
      this.text = element;
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasTextElement(): boolean {
    return isDefined<StringType>(this.text) && !this.text.isEmpty();
  }

  /**
   * @returns the `text` property value as a fhirString if defined; else undefined
   */
  public getText(): fhirString | undefined {
    return this.text?.getValue();
  }

  /**
   * Assigns the provided primitive value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  public setText(value: fhirString | undefined): this {
    if (isDefined<fhirString>(value)) {
      const optErrMsg = `Invalid CodeableConcept.text (${value})`;
      this.text = new StringType(parseFhirPrimitiveData(value, fhirStringSchema, optErrMsg));
    } else {
      this.text = undefined;
    }
    return this;
  }

  /**
   * @returns `true` if the `text` property exists and has a value; `false` otherwise
   */
  public hasText(): boolean {
    return this.hasTextElement();
  }

  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  public override fhirType(): string {
    return 'CodeableConcept';
  }

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  public override isEmpty(): boolean {
    return super.isEmpty() && isElementEmpty(this.coding, this.text);
  }

  /**
   * Creates a copy of the current instance.
   *
   * @returns the a new instance copied from the current instance
   */
  public override copy(): CodeableConcept {
    const dest = new CodeableConcept();
    this.copyValues(dest);
    return dest;
  }

  /**
   * Copies the current instance's elements into the provided object.
   *
   * @param dest - the copied instance
   * @protected
   */
  protected override copyValues(dest: CodeableConcept): void {
    super.copyValues(dest);
    const codingList = copyListValues<Coding>(this.coding);
    dest.coding = codingList.length === 0 ? undefined : codingList;
    dest.text = this.text?.copy();
  }

  /**
   * @returns `true` if the instance is a FHIR complex datatype; `false` otherwise
   */
  public override isComplexDataType(): boolean {
    return true;
  }

  /**
   * @returns the complex or primitive data model type name (e.g., 'Period", 'StringType', `UriType', etc.)
   */
  public override dataTypeName(): string {
    return this.constructor.name;
  }

  /**
   * @returns the JSON value or undefined if the instance is empty
   */
  public override toJSON(): JSON.Value | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let jsonObj = super.toJSON() as JSON.Object | undefined;
    jsonObj ??= {} as JSON.Object;

    if (this.hasCoding()) {
      setFhirComplexListJson(this.getCoding(), 'coding', jsonObj);
    }

    if (this.hasTextElement()) {
      setFhirPrimitiveJson<fhirString>(this.getTextElement(), 'text', jsonObj);
    }

    return jsonObj;
  }
}
