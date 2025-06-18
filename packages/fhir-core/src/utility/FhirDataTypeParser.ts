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

import { strict as assert } from 'node:assert';
import { BackboneElement, BackboneType, DataType, Extension } from '../base-models/core-fhir-models';
import { FhirDataType, OPEN_DATA_TYPE_KEY_NAMES, OPEN_DATA_TYPES } from '../data-types/FhirDataType';
import { FhirError } from '../errors/FhirError';
import {
  INSTANCE_EMPTY_ERROR_MSG,
  INVALID_VALUEX_MULTIPLE_PROPERTIES,
  INVALID_VALUEX_PROPERTY,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
} from '../constants';
import * as JSON from './json-helpers';
import { assertIsDefined } from './type-guards';
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
} from './fhir-parsers';
import { getChoiceDatatypeDefsForField, getOpenDatatypeFields } from './decorators';
import { upperFirst } from './common-util';

/**
 * Represents a parsable data type that can be constructed and includes a static parse method
 * to create an instance from JSON data.
 *
 * This type is used to encapsulate a class-like structure where instances can be created using the `new` operator,
 * and the class itself has additional functionality for parsing JSON input into an instance of the data type.
 *
 * @typeParam T - Extends the base `DataType` to specify the structure of the object created by this type.
 *
 * `parse` - A static method available on the type that accepts JSON data, parses it, and returns an instance
 *           of the type T. Optionally, a specific field of the JSON data can be targeted by providing
 *           `optSourceField` as a parameter.
 *
 * @category Utilities: FHIR Parsers
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ParsableDataType<T extends DataType> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
  parse: (sourceJson: JSON.Value, optSourceField?: string) => T | undefined;
};

/**
 * A utility class for parsing and processing FHIR data types from JSON objects.
 * This class manages the conversion of JSON representations into FHIR-compliant complex and primitive data types,
 * supports handling extensions and backbone elements, and integrates datatype-specific parsing logic.
 *
 * @category Utilities: FHIR Parsers
 */
export class FhirDataTypeParser {
  /**
   * A map that associates a string key with a `ParsableDataType` instance.
   * This map is used to define supported FHIR complex data types that exist in the FHIR release.
   *
   * Key:
   *   - A string that represents the name or identifier of the data type.
   *
   * Value:
   *   - An instance of `ParsableDataType` associated with a specific `DataType`.
   */
  private readonly parsableDataTypeMap: Map<string, ParsableDataType<DataType>>;

  constructor(parsableDataTypeMap: Map<string, ParsableDataType<DataType>>) {
    this.parsableDataTypeMap = parsableDataTypeMap;
  }

  /**
   * Parses the provided JSON source into an instance of the specified data type.
   *
   * @template {string} T - the specific complex data type
   * @param {ParsableDataType<T>} className - The class defining the data type to which the JSON should be parsed.
   * @param {JSON.Value} sourceJson - The JSON value that serves as the source for parsing.
   * @param {string} [optSourceField] - An optional source field name to identify the data model source field.
   * @returns {T | undefined} The parsed data as an instance of the specified type, or undefined if parsing fails.
   */
  public parser<T extends DataType>(
    className: ParsableDataType<T>,
    sourceJson: JSON.Value,
    optSourceField?: string,
  ): T | undefined {
    return className.parse(sourceJson, optSourceField);
  }

  /**
   * Parses a given JSON object to create an Extension instance, handling nested extensions and value[x] types.
   *
   * @param {JSON.Object | undefined} json - The JSON object representing the FHIR Extension.
   *                                         If undefined or does not contain valid FHIR data, will return undefined.
   * @returns {Extension | undefined} The initialized Extension instance derived from the JSON object, or undefined if input is invalid.
   *                                  Throws an error if required properties are missing.
   * @throws {FhirError} If the Extension.url property is not provided.
   */
  public parseExtension(json: JSON.Object | undefined): Extension | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const extensionJsonObj: JSON.Object = JSON.asObject(json!, 'Extension JSON');
    const instance = new Extension(null);

    if ('url' in extensionJsonObj) {
      instance.setUrl(JSON.asString(extensionJsonObj['url'], 'Extension.url JSON'));
    } else {
      throw new FhirError(`${REQUIRED_PROPERTIES_REQD_IN_JSON} Extension.url`);
    }

    if ('id' in extensionJsonObj) {
      instance.setId(JSON.asString(extensionJsonObj['id'], 'Extension.id JSON'));
    }

    const extensions = [] as Extension[];
    if ('extension' in extensionJsonObj) {
      // Extension has child extensions only
      const extensionJsonArray: JSON.Array = JSON.asArray(extensionJsonObj['extension']);
      extensionJsonArray.forEach((extensionJson: JSON.Value) => {
        const extension: Extension | undefined = this.parseExtension(extensionJson as JSON.Object);
        if (extension !== undefined) {
          extensions.push(extension);
        }
      });
    }

    if (extensions.length > 0) {
      instance.setExtension(extensions);
    } else {
      // Extension might have one value[x]
      const dataTypeValue: DataType | undefined = this.getValueXData(extensionJsonObj, 'value');
      if (dataTypeValue !== undefined) {
        instance.setValue(dataTypeValue);
      }
    }

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Processes the given JSON representation of a FHIR element and updates the provided instance accordingly.
   *
   * @param instance - The DataType instance to populate with processed values.
   * @param dataTypeJson - The JSON representation of the FHIR element. If undefined, the method will return without processing.
   */
  public processElementJson(instance: DataType, dataTypeJson: JSON.Value | undefined): void {
    assertIsDefined<DataType>(instance, `Provided instance is undefined/null`);
    if (!JSON.hasFhirData(dataTypeJson)) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const element: JSON.Object = JSON.asObject(dataTypeJson!, `${instance.constructor.name} Element`);

    if ('id' in element) {
      instance.setId(JSON.asString(element['id'], `${instance.constructor.name}.id`));
    }

    if ('extension' in element) {
      const extensions = [] as Extension[];
      const extensionArray = element['extension'] as JSON.Array;
      for (const extensionJson of extensionArray) {
        const extension: Extension | undefined = this.parseExtension(extensionJson as JSON.Object);
        if (extension !== undefined) {
          extensions.push(extension);
        }
      }
      if (extensions.length > 0) {
        instance.setExtension(extensions);
      }
    }
  }

  /**
   * Processes a JSON representation of a `BackboneElement` and updates the provided instance with the parsed data.
   *
   * @param {BackboneElement} instance - The `BackboneElement` instance to be populated with data.
   * @param {JSON.Value | undefined} dataJson - The JSON data containing the attributes of the `BackboneElement`. It can be undefined if no data is provided.
   */
  public processBackboneElementJson(instance: BackboneElement, dataJson: JSON.Value | undefined): void {
    assertIsDefined<BackboneElement>(instance, `Provided instance is undefined/null`);
    if (!JSON.hasFhirData(dataJson)) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const backboneElement: JSON.Object = JSON.asObject(dataJson!, `${instance.constructor.name} BackboneElement`);

    if ('id' in backboneElement) {
      instance.setId(JSON.asString(backboneElement['id'], `${instance.constructor.name}.id`));
    }

    if ('extension' in backboneElement) {
      const extensions = [] as Extension[];
      const extensionArray = backboneElement['extension'] as JSON.Array;
      for (const extensionJson of extensionArray) {
        const extension: Extension | undefined = this.parseExtension(extensionJson as JSON.Object);
        if (extension !== undefined) {
          extensions.push(extension);
        }
      }
      if (extensions.length > 0) {
        instance.setExtension(extensions);
      }
    }

    if ('modifierExtension' in backboneElement) {
      const modifierExtensions = [] as Extension[];
      const modifierExtensionArray = backboneElement['modifierExtension'] as JSON.Array;
      for (const extensionJson of modifierExtensionArray) {
        const extension: Extension | undefined = this.parseExtension(extensionJson as JSON.Object);
        if (extension !== undefined) {
          modifierExtensions.push(extension);
        }
      }
      if (modifierExtensions.length > 0) {
        instance.setModifierExtension(modifierExtensions);
      }
    }
  }

  /**
   * Processes a BackboneType JSON object and populates the given BackboneType instance with its data.
   *
   * @param {BackboneType} instance - The BackboneType instance to populate. Must not be null or undefined.
   * @param {JSON.Value | undefined} dataJson - The JSON structure containing the BackboneType data. If undefined or not containing valid FHIR data, the method exits without modifying the instance.
   */
  public processBackboneTypeJson(instance: BackboneType, dataJson: JSON.Value | undefined): void {
    assertIsDefined<BackboneType>(instance, `Provided instance is undefined/null`);
    if (!JSON.hasFhirData(dataJson)) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const backboneType: JSON.Object = JSON.asObject(dataJson!, `${instance.constructor.name} BackboneType`);

    if ('id' in backboneType) {
      instance.setId(JSON.asString(backboneType['id'], `${instance.constructor.name}.id`));
    }

    if ('extension' in backboneType) {
      const extensions = [] as Extension[];
      const extensionArray = backboneType['extension'] as JSON.Array;
      for (const extensionJson of extensionArray) {
        const extension: Extension | undefined = this.parseExtension(extensionJson as JSON.Object);
        if (extension !== undefined) {
          extensions.push(extension);
        }
      }
      if (extensions.length > 0) {
        instance.setExtension(extensions);
      }
    }

    if ('modifierExtension' in backboneType) {
      const modifierExtensions = [] as Extension[];
      const modifierExtensionArray = backboneType['modifierExtension'] as JSON.Array;
      for (const extensionJson of modifierExtensionArray) {
        const extension: Extension | undefined = this.parseExtension(extensionJson as JSON.Object);
        if (extension !== undefined) {
          modifierExtensions.push(extension);
        }
      }
      if (modifierExtensions.length > 0) {
        instance.setModifierExtension(modifierExtensions);
      }
    }
  }

  /**
   * Parses an open data type from the given JSON object using the specified source field and metadata.
   *
   * @param {JSON.Object} jsonObj - The JSON object containing the data to be parsed.
   * @param {string} sourceField - The source field name within the JSON object to parse.
   * @param {string} fieldName - The field name used to derive and match potential open data types.
   * @param {DecoratorMetadataObject | null} metadata - The metadata object that provides additional context for parsing.
   * @returns {DataType | undefined} The parsed data type if a matching type is found, or undefined if no matching type is identified.
   */
  public parseOpenDataType(
    jsonObj: JSON.Object,
    sourceField: string,
    fieldName: string,
    metadata: DecoratorMetadataObject | null,
  ): DataType | undefined {
    if (!JSON.hasFhirData(jsonObj)) {
      return undefined;
    }
    assertIsDefined<string>(sourceField, `The sourceField argument is undefined/null.`);
    assertIsDefined<string>(fieldName, `The fieldName argument is undefined/null.`);
    assertIsDefined<DecoratorMetadataObject>(metadata, `The metadata argument is undefined/null.`);

    // Strip the '[x]' from the fieldName but not the sourceField
    let plainFieldName = fieldName;
    const posX = fieldName.toLowerCase().lastIndexOf('[x]');
    if (posX > 0) {
      plainFieldName = fieldName.substring(0, posX);
    }
    // Replace any array indices with '[i].'
    const regex = new RegExp(/\[\d+\]\./g);
    const checkSourceField = sourceField.replaceAll(regex, '[i].');

    const openDatatypeFields: string[] = getOpenDatatypeFields(metadata);
    if (openDatatypeFields.includes(checkSourceField)) {
      const supportedFieldNames = OPEN_DATA_TYPES.map((item) => `${plainFieldName}${upperFirst(item)}`);
      return this.getParsedType(jsonObj, sourceField, plainFieldName, supportedFieldNames);
    }

    return undefined;
  }

  /**
   * Parses a polymorphic data type from a given JSON object based on a provided field name, source field,
   * and associated metadata, returning the corresponding data type if applicable.
   *
   * @param {JSON.Object} jsonObj - The JSON object containing the data to parse.
   * @param {string} sourceField - The original field name as it appears in the source.
   * @param {string} fieldName - The normalized or expected field name to use for parsing.
   * @param {DecoratorMetadataObject | null} metadata - Metadata object providing decorator information, or null if not applicable.
   * @returns {DataType | undefined} - The parsed data type if successful, or undefined if parsing cannot be performed.
   */
  public parsePolymorphicDataType(
    jsonObj: JSON.Object,
    sourceField: string,
    fieldName: string,
    metadata: DecoratorMetadataObject | null,
  ): DataType | undefined {
    if (!JSON.hasFhirData(jsonObj)) {
      return undefined;
    }
    assertIsDefined<string>(sourceField, `The sourceField argument is undefined/null.`);
    assertIsDefined<string>(fieldName, `The fieldName argument is undefined/null.`);
    assertIsDefined<DecoratorMetadataObject>(metadata, `The metadata argument is undefined/null.`);

    // Strip the '[x]' from the fieldName but not the sourceField
    let plainFieldName = fieldName;
    const posX = fieldName.toLowerCase().lastIndexOf('[x]');
    if (posX > 0) {
      plainFieldName = fieldName.substring(0, posX);
    }

    const choiceDataTypes: FhirDataType[] = getChoiceDatatypeDefsForField(metadata, plainFieldName);
    const supportedFieldNames = choiceDataTypes.map((item) => `${plainFieldName}${upperFirst(item)}`);

    return this.getParsedType(jsonObj, sourceField, plainFieldName, supportedFieldNames);
  }

  /**
   * Parses the specified field from a JSON object and returns its corresponding data type if valid.
   *
   * @param {JSON.Object} jsonObj - The JSON object to parse the field data from.
   * @param {string} sourceField - The name of the source field for error messaging.
   * @param {string} fieldName - The specific field name to check and parse from jsonObj.
   * @param {string[]} supportedFieldNames - A list of valid field names that are supported for parsing.
   * @returns {DataType | undefined} The parsed data type if valid, or undefined if parsing fails or the field is not present.
   * @throws {FhirError} If the field name exists directly in the JSON or if multiple matching fields are found.
   * @throws {TypeError} If an error occurs while parsing the data type.
   * @throws {Error} If an unexpected parsing error occurs.
   */
  private getParsedType(
    jsonObj: JSON.Object,
    sourceField: string,
    fieldName: string,
    supportedFieldNames: string[],
  ): DataType | undefined {
    const valueKeys = Object.keys(jsonObj).filter((key) => key.startsWith(fieldName));

    if (fieldName in jsonObj) {
      throw new FhirError(INVALID_VALUEX_PROPERTY);
    } else if (valueKeys.length > 1) {
      throw new FhirError(`${INVALID_VALUEX_MULTIPLE_PROPERTIES} ${valueKeys.join(', ')}`);
    } else if (valueKeys[0] !== undefined && supportedFieldNames.includes(valueKeys[0])) {
      let instance: DataType | undefined = undefined;
      try {
        instance = this.getValueXData(jsonObj, fieldName);
      } catch (err) {
        if (err instanceof TypeError) {
          throw new TypeError(`Failed to parse ${sourceField}: ${err.message}`, err);
        } else {
          const unexpectedErrorMsg = `Unexpected error parsing ${sourceField} from the provided JSON`;
          throw new Error(unexpectedErrorMsg);
        }
      }
      return instance;
    }
    return undefined;
  }

  /**
   * Retrieves and parses a specific data type value from the provided JSON object
   * based on the specified field name. This method handles both primitive and
   * complex data types, as well as their corresponding sibling values for primitives.
   *
   * @param {JSON.Object} jsonObj - The JSON object containing the data to be parsed.
   * @param {string} fieldName - The field name used to identify the specific data type key in the JSON object.
   * @returns {DataType | undefined} - The parsed data as an instance of the specified type, or undefined if the key is not found or cannot be parsed.
   */
  private getValueXData(jsonObj: JSON.Object, fieldName: string): DataType | undefined {
    const valueXKey = Object.keys(jsonObj).find((key) =>
      OPEN_DATA_TYPE_KEY_NAMES.includes(key.replace(fieldName, 'value')),
    );

    if (valueXKey !== undefined && valueXKey in jsonObj) {
      const dataValue: JSON.Value | undefined = jsonObj[valueXKey];
      const siblingDataValue: JSON.Value | undefined = jsonObj[`_${valueXKey}`];
      const switchKey = valueXKey.replace(fieldName, 'value');
      const mapKey = valueXKey.replace(fieldName, '');

      if (dataValue !== undefined) {
        switch (switchKey) {
          case 'valueBase64Binary':
            return parseBase64BinaryType(dataValue, siblingDataValue);
          case 'valueBoolean':
            return parseBooleanType(dataValue, siblingDataValue);
          case 'valueCanonical':
            return parseCanonicalType(dataValue, siblingDataValue);
          case 'valueCode':
            // NOTE - EnumCodeType is a subclass of CodeType and will always be serialized/parsed as a CodeType
            return parseCodeType(dataValue, siblingDataValue);
          case 'valueDate':
            return parseDateType(dataValue, siblingDataValue);
          case 'valueDateTime':
            return parseDateTimeType(dataValue, siblingDataValue);
          case 'valueDecimal':
            return parseDecimalType(dataValue, siblingDataValue);
          case 'valueId':
            return parseIdType(dataValue, siblingDataValue);
          case 'valueInstant':
            return parseInstantType(dataValue, siblingDataValue);
          case 'valueInteger':
            return parseIntegerType(dataValue, siblingDataValue);
          case 'valueInteger64':
            return parseInteger64Type(dataValue, siblingDataValue);
          case 'valueMarkdown':
            return parseMarkdownType(dataValue, siblingDataValue);
          case 'valueOid':
            return parseOidType(dataValue, siblingDataValue);
          case 'valuePositiveInt':
            return parsePositiveIntType(dataValue, siblingDataValue);
          case 'valueString':
            return parseStringType(dataValue, siblingDataValue);
          case 'valueTime':
            return parseTimeType(dataValue, siblingDataValue);
          case 'valueUnsignedInt':
            return parseUnsignedIntType(dataValue, siblingDataValue);
          case 'valueUri':
            return parseUriType(dataValue, siblingDataValue);
          case 'valueUrl':
            return parseUrlType(dataValue, siblingDataValue);
          case 'valueUuid':
            return parseUuidType(dataValue, siblingDataValue);
          // case 'valueXhtml': NOT INCLUDED IN OPEN DATATYPES

          default:
            // Not a primitive data type, so it must be a complex data type
            if (this.parsableDataTypeMap.has(mapKey)) {
              const parsableClass: ParsableDataType<DataType> | undefined = this.parsableDataTypeMap.get(mapKey);
              assert(parsableClass, `parsableClass data model for '${mapKey}' is not defined`);
              return this.parser<DataType>(parsableClass, dataValue);
            }
        }
      }
    }

    return undefined;
  }
}
