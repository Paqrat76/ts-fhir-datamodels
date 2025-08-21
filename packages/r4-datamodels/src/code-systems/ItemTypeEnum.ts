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

/**
 * This file is generated from a FHIR CodeSystem definition.
 * DO NOT make any modifications!
 *
 * ItemTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/item-type
 * CodeSystem.name: ItemType
 * CodeSystem.description: Distinguishes groups from questions and display text and indicates data type for questions.
 * CodeSystem.version: 4.0.1
 * CodeSystem.caseSensitive: true
 *
 * For questions, suggestions, or bugs, please open an issue at [GitHub ts-fhir-datamodels/issues](https://github.com/Paqrat76/ts-fhir-datamodels/issues).
 *
 * @packageDocumentation
 */

import {
  fhirCode,
  FhirCodeDefinition,
  IFhirCodeDefinition,
  IFhirCodeEnum,
  InvalidCodeError,
} from '@paq-ts-fhir/fhir-core';

/**
 * FHIR CodeSystem: ItemTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ItemType](http://hl7.org/fhir/item-type)
 */
export class ItemTypeEnum implements IFhirCodeEnum {
  public static readonly GROUP = new FhirCodeDefinition(
    'GROUP',
    'group',
    'http://hl7.org/fhir/item-type',
    'Group',
    'An item with no direct answer but should have at least one child item.',
  );
  public static readonly DISPLAY = new FhirCodeDefinition(
    'DISPLAY',
    'display',
    'http://hl7.org/fhir/item-type',
    'Display',
    'Text for display that will not capture an answer or have child items.',
  );
  public static readonly QUESTION = new FhirCodeDefinition(
    'QUESTION',
    'question',
    'http://hl7.org/fhir/item-type',
    'Question',
    'An item that defines a specific answer to be captured, and which may have child items. (the answer provided in the QuestionnaireResponse should be of the defined datatype).',
  );
  public static readonly BOOLEAN = new FhirCodeDefinition(
    'BOOLEAN',
    'boolean',
    'http://hl7.org/fhir/item-type',
    'Boolean',
    'Question with a yes/no answer (valueBoolean).',
  );
  public static readonly DECIMAL = new FhirCodeDefinition(
    'DECIMAL',
    'decimal',
    'http://hl7.org/fhir/item-type',
    'Decimal',
    'Question with is a real number answer (valueDecimal).',
  );
  public static readonly INTEGER = new FhirCodeDefinition(
    'INTEGER',
    'integer',
    'http://hl7.org/fhir/item-type',
    'Integer',
    'Question with an integer answer (valueInteger).',
  );
  public static readonly DATE = new FhirCodeDefinition(
    'DATE',
    'date',
    'http://hl7.org/fhir/item-type',
    'Date',
    'Question with a date answer (valueDate).',
  );
  public static readonly DATE_TIME = new FhirCodeDefinition(
    'DATE_TIME',
    'dateTime',
    'http://hl7.org/fhir/item-type',
    'Date Time',
    'Question with a date and time answer (valueDateTime).',
  );
  public static readonly TIME = new FhirCodeDefinition(
    'TIME',
    'time',
    'http://hl7.org/fhir/item-type',
    'Time',
    'Question with a time (hour:minute:second) answer independent of date. (valueTime).',
  );
  public static readonly STRING = new FhirCodeDefinition(
    'STRING',
    'string',
    'http://hl7.org/fhir/item-type',
    'String',
    'Question with a short (few words to short sentence) free-text entry answer (valueString).',
  );
  public static readonly TEXT = new FhirCodeDefinition(
    'TEXT',
    'text',
    'http://hl7.org/fhir/item-type',
    'Text',
    'Question with a long (potentially multi-paragraph) free-text entry answer (valueString).',
  );
  public static readonly URL = new FhirCodeDefinition(
    'URL',
    'url',
    'http://hl7.org/fhir/item-type',
    'Url',
    'Question with a URL (website, FTP site, etc.) answer (valueUri).',
  );
  public static readonly CHOICE = new FhirCodeDefinition(
    'CHOICE',
    'choice',
    'http://hl7.org/fhir/item-type',
    'Choice',
    'Question with a Coding drawn from a list of possible answers (specified in either the answerOption property, or via the valueset referenced in the answerValueSet property) as an answer (valueCoding).',
  );
  public static readonly OPEN_CHOICE = new FhirCodeDefinition(
    'OPEN_CHOICE',
    'open-choice',
    'http://hl7.org/fhir/item-type',
    'Open Choice',
    'Answer is a Coding drawn from a list of possible answers (as with the choice type) or a free-text entry in a string (valueCoding or valueString).',
  );
  public static readonly ATTACHMENT = new FhirCodeDefinition(
    'ATTACHMENT',
    'attachment',
    'http://hl7.org/fhir/item-type',
    'Attachment',
    'Question with binary content such as an image, PDF, etc. as an answer (valueAttachment).',
  );
  public static readonly REFERENCE = new FhirCodeDefinition(
    'REFERENCE',
    'reference',
    'http://hl7.org/fhir/item-type',
    'Reference',
    'Question with a reference to another resource (practitioner, organization, etc.) as an answer (valueReference).',
  );
  public static readonly QUANTITY = new FhirCodeDefinition(
    'QUANTITY',
    'quantity',
    'http://hl7.org/fhir/item-type',
    'Quantity',
    'Question with a combination of a numeric value and unit, potentially with a comparator (<, >, etc.) as an answer. (valueQuantity) There is an extension \'http://hl7.org/fhir/StructureDefinition/questionnaire-unit\' that can be used to define what unit should be captured (or the unit that has a ucum conversion from the provided unit).',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ItemTypeEnum.GROUP,
      ItemTypeEnum.DISPLAY,
      ItemTypeEnum.QUESTION,
      ItemTypeEnum.BOOLEAN,
      ItemTypeEnum.DECIMAL,
      ItemTypeEnum.INTEGER,
      ItemTypeEnum.DATE,
      ItemTypeEnum.DATE_TIME,
      ItemTypeEnum.TIME,
      ItemTypeEnum.STRING,
      ItemTypeEnum.TEXT,
      ItemTypeEnum.URL,
      ItemTypeEnum.CHOICE,
      ItemTypeEnum.OPEN_CHOICE,
      ItemTypeEnum.ATTACHMENT,
      ItemTypeEnum.REFERENCE,
      ItemTypeEnum.QUANTITY,
      ItemTypeEnum.NULL
    ];
  }

  /**
   * Converts a given FHIR code into its corresponding FHIR code definition.
   *
   * @param {fhirCode | undefined} code - The FHIR code to be converted. If undefined, an error will be thrown.
   * @returns {IFhirCodeDefinition} The FHIR code definition corresponding to the provided code.
   * @throws {@link InvalidCodeError} for undefined or invalid code value
   */
  fromCode(code: fhirCode | undefined): IFhirCodeDefinition {
    if (code === undefined) {
      throw new InvalidCodeError(`The provided 'code' value is undefined`);
    } else if (ItemTypeEnum.GROUP.code === code) {
      return ItemTypeEnum.GROUP;
    } else if (ItemTypeEnum.DISPLAY.code === code) {
      return ItemTypeEnum.DISPLAY;
    } else if (ItemTypeEnum.QUESTION.code === code) {
      return ItemTypeEnum.QUESTION;
    } else if (ItemTypeEnum.BOOLEAN.code === code) {
      return ItemTypeEnum.BOOLEAN;
    } else if (ItemTypeEnum.DECIMAL.code === code) {
      return ItemTypeEnum.DECIMAL;
    } else if (ItemTypeEnum.INTEGER.code === code) {
      return ItemTypeEnum.INTEGER;
    } else if (ItemTypeEnum.DATE.code === code) {
      return ItemTypeEnum.DATE;
    } else if (ItemTypeEnum.DATE_TIME.code === code) {
      return ItemTypeEnum.DATE_TIME;
    } else if (ItemTypeEnum.TIME.code === code) {
      return ItemTypeEnum.TIME;
    } else if (ItemTypeEnum.STRING.code === code) {
      return ItemTypeEnum.STRING;
    } else if (ItemTypeEnum.TEXT.code === code) {
      return ItemTypeEnum.TEXT;
    } else if (ItemTypeEnum.URL.code === code) {
      return ItemTypeEnum.URL;
    } else if (ItemTypeEnum.CHOICE.code === code) {
      return ItemTypeEnum.CHOICE;
    } else if (ItemTypeEnum.OPEN_CHOICE.code === code) {
      return ItemTypeEnum.OPEN_CHOICE;
    } else if (ItemTypeEnum.ATTACHMENT.code === code) {
      return ItemTypeEnum.ATTACHMENT;
    } else if (ItemTypeEnum.REFERENCE.code === code) {
      return ItemTypeEnum.REFERENCE;
    } else if (ItemTypeEnum.QUANTITY.code === code) {
      return ItemTypeEnum.QUANTITY;
    } else if (ItemTypeEnum.NULL.code === code) {
      return ItemTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ItemTypeEnum 'code' value '${code}'`);
    }
  }
}
