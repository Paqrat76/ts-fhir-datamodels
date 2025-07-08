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
import { Extension } from '../base-models/core-fhir-models';
import { DATA_TYPE_KEY_NAMES, FhirDataType } from '../base-models/fhir-data-types';
import {
  IBackboneElement,
  IBackboneType,
  IDataType,
  IDomainResource,
  IExtension,
  IMeta,
  INarrative,
  IResource,
} from '../base-models/library-interfaces';
import { isEmpty, upperFirst } from './common-util';
import { getChoiceDatatypeDefsForField } from './decorators';
import * as JSON from './json-helpers';
import { assertIsDefined, assertIsString, isDefined } from './type-guards';
import {
  INSTANCE_EMPTY_ERROR_MSG,
  INVALID_VALUEX_MULTIPLE_PROPERTIES,
  INVALID_VALUEX_PROPERTY,
  REQUIRED_PROPERTIES_REQD_IN_JSON,
} from '../constants';
import { Base64BinaryType } from '../data-types/primitive/Base64BinaryType';
import { BooleanType } from '../data-types/primitive/BooleanType';
import { CanonicalType } from '../data-types/primitive/CanonicalType';
import { CodeType } from '../data-types/primitive/CodeType';
import { DateTimeType } from '../data-types/primitive/DateTimeType';
import { DateType } from '../data-types/primitive/DateType';
import { DecimalType } from '../data-types/primitive/DecimalType';
import { IdType } from '../data-types/primitive/IdType';
import { InstantType } from '../data-types/primitive/InstantType';
import { Integer64Type } from '../data-types/primitive/Integer64Type';
import { IntegerType } from '../data-types/primitive/IntegerType';
import { MarkdownType } from '../data-types/primitive/MarkdownType';
import { OidType } from '../data-types/primitive/OidType';
import { PositiveIntType } from '../data-types/primitive/PositiveIntType';
import { StringType } from '../data-types/primitive/StringType';
import { TimeType } from '../data-types/primitive/TimeType';
import { UnsignedIntType } from '../data-types/primitive/UnsignedIntType';
import { UriType } from '../data-types/primitive/UriType';
import { UrlType } from '../data-types/primitive/UrlType';
import { UuidType } from '../data-types/primitive/UuidType';
import { XhtmlType } from '../data-types/primitive/XhtmlType';
import { FhirError } from '../errors/FhirError';

/* eslint-disable @typescript-eslint/consistent-type-definitions */

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
export type ParsableDataType<T extends IDataType> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
  parse: (sourceJson: JSON.Value, optSourceField?: string) => T | undefined;
};

/**
 * Represents a parsable resource that can be constructed and includes a static parse method
 * to create an instance from JSON data.
 *
 * This type is used to encapsulate a class-like structure where instances can be created using the `new` operator,
 * and the class itself has additional functionality for parsing JSON input into an instance of the resource.
 *
 * @typeParam T - Extends the base `Resource` to specify the structure of the object created by this type.
 *
 * `parse` - A static method available on the type that accepts JSON data, parses it, and returns an instance
 *           of the type T. Optionally, a specific field of the JSON data can be targeted by providing
 *           `optSourceField` as a parameter.
 *
 * @category Utilities: FHIR Parsers
 */
export type ParsableResource<T extends IResource> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
  parse: (sourceJson: JSON.Value, optSourceField?: string) => T | undefined;
};

/* eslint-enable @typescript-eslint/consistent-type-definitions */

/**
 * Represents a JSON structure that contains a primitive value and an associated sibling object.
 *
 * This interface is designed to encapsulate the handling of JSON primitive data types along with a related Element JSON object.
 *
 * - `dtJson`: Represents a primitive JSON value, which can be one of string, number, boolean, null, or undefined.
 * - `dtSiblingJson`: Represents a JSON object associated with `dtJson` to provide the related Element.
 *
 * @interface
 * @category Utilities: FHIR Parsers
 */
export interface PrimitiveTypeJson {
  dtJson: JSON.Value | undefined;
  dtSiblingJson: JSON.Object | undefined;
}

/**
 * A utility class for parsing and processing FHIR data types from JSON objects.
 * This class manages the conversion of JSON representations into FHIR-compliant complex and primitive data types,
 * supports handling extensions and backbone elements, and integrates datatype-specific parsing logic.
 *
 * @category Utilities: FHIR Parsers
 */
export class FhirParser {
  /**
   * A map that associates a string key to a specific ParsableDataType instance.
   *
   * The `parsableDataTypeMap` serves as a lookup table where keys represent
   * identifiable strings corresponding to specific data types, and values
   * are the associated ParsableDataType objects that define the parsing logic
   * and behavior for the respective data type.
   *
   * Key Value Structure:
   * - `string`: A unique identifier representing the associated data type.
   * - `ParsableDataType<IDataType>`: An instance of ParsableDataType that
   *   encapsulates the parsing functionality and metadata for the specific data type.
   */
  private readonly parsableDataTypeMap: Map<string, ParsableDataType<IDataType>>;
  /**
   * A map that associates a string key to a specific ParsableResource instance.
   *
   * The `parsableResourceMap` serves as a lookup table where keys represent
   * identifiable strings corresponding to specific resources, and values
   * are the associated ParsableResource objects that define the parsing logic
   * and behavior for the respective resource.
   *
   * Key Value Structure:
   * - `string`: A unique identifier representing the associated resource.
   * - `ParsableResource<IResource>`: An instance of ParsableResource that
   *   encapsulates the parsing functionality and metadata for the specific resource.
   */
  private readonly parsableResourceMap: Map<string, ParsableResource<IResource>>;

  constructor(
    parsableDataTypeMap: Map<string, ParsableDataType<IDataType>>,
    parsableResourceMap: Map<string, ParsableResource<IResource>>,
  ) {
    this.parsableDataTypeMap = parsableDataTypeMap;
    this.parsableResourceMap = parsableResourceMap;
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
  public parseDataType<T extends IDataType>(
    className: ParsableDataType<T>,
    sourceJson: JSON.Value,
    optSourceField?: string,
  ): T | undefined {
    return className.parse(sourceJson, optSourceField);
  }

  /**
   * Parses the provided JSON source into an instance of the specified resource.
   *
   * @template {string} T - the specific resource
   * @param {ParsableResource<T>} className - The class defining the resource to which the JSON should be parsed.
   * @param {JSON.Value} sourceJson - The JSON value that serves as the source for parsing.
   * @param {string} [optSourceField] - An optional source field name to identify the data model source field.
   * @returns {T | undefined} The parsed data as an instance of the specified resource, or undefined if parsing fails.
   */
  public parseResource<T extends IResource>(
    className: ParsableResource<T>,
    sourceJson: JSON.Value,
    optSourceField?: string,
  ): T | undefined {
    return className.parse(sourceJson, optSourceField);
  }

  //region DataType Parser Helpers

  /**
   * Parses a given JSON object to create an Extension instance, handling nested extensions and value[x] types.
   *
   * @param {JSON.Object | undefined} json - The JSON object representing the FHIR Extension.
   *                                         If undefined or does not contain valid FHIR data, will return undefined.
   * @returns {Extension | undefined} The initialized Extension instance derived from the JSON object, or undefined if input is invalid.
   *                                  Throws an error if required properties are missing.
   * @throws {FhirError} If the Extension.url property is not provided.
   */
  public parseExtension(json: JSON.Object | undefined): IExtension | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const extensionJsonObj: JSON.Object = JSON.asObject(json!, 'Extension JSON');
    const instance = new Extension(null);

    // Extended Element might contain 'id' and/or 'extension'
    if ('id' in extensionJsonObj) {
      instance.setId(JSON.asString(extensionJsonObj['id'], 'Extension.id JSON'));
    }

    const extensions = [] as IExtension[];
    if ('extension' in extensionJsonObj) {
      // Extension has child extensions only
      const extensionJsonArray: JSON.Array = JSON.asArray(extensionJsonObj['extension']);
      extensionJsonArray.forEach((extensionJson: JSON.Value) => {
        const extension: IExtension | undefined = this.parseExtension(extensionJson as JSON.Object);
        if (extension !== undefined) {
          extensions.push(extension);
        }
      });
    }

    // Extension must have 'url' and might have 'value[x]'
    if ('url' in extensionJsonObj) {
      instance.setUrl(JSON.asString(extensionJsonObj['url'], 'Extension.url JSON'));
    } else {
      throw new FhirError(`${REQUIRED_PROPERTIES_REQD_IN_JSON} Extension.url`);
    }

    const dataTypeValue: IDataType | undefined = this.getFhirDataTypeParseResults(extensionJsonObj, 'value');

    // Constraint "ext-1": "Must have either extensions or value[x], not both"
    if (dataTypeValue !== undefined && extensions.length > 0) {
      throw new FhirError(`The Extension must have either 'extension's or 'value[x]', not both`);
    }

    if (dataTypeValue !== undefined) {
      instance.setValue(dataTypeValue);
    } else if (extensions.length > 0) {
      instance.setExtension(extensions);
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
  public processElementJson(instance: IDataType, dataTypeJson: JSON.Value | undefined): void {
    assertIsDefined<IDataType>(instance, `Provided instance is undefined/null`);
    if (!JSON.hasFhirData(dataTypeJson)) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const element: JSON.Object = JSON.asObject(dataTypeJson!, `${instance.constructor.name} Element`);

    if ('id' in element) {
      instance.setId(JSON.asString(element['id'], `${instance.constructor.name}.id`));
    }

    if ('extension' in element) {
      const extensions = [] as IExtension[];
      const extensionArray = element['extension'] as JSON.Array;
      for (const extensionJson of extensionArray) {
        const extension: IExtension | undefined = this.parseExtension(extensionJson as JSON.Object);
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
   * @param {IBackboneElement} instance - The `BackboneElement` instance to be populated with data.
   * @param {JSON.Value | undefined} dataJson - The JSON data containing the attributes of the `BackboneElement`. It can be undefined if no data is provided.
   */
  public processBackboneElementJson(instance: IBackboneElement, dataJson: JSON.Value | undefined): void {
    assertIsDefined<IBackboneElement>(instance, `Provided instance is undefined/null`);
    if (!JSON.hasFhirData(dataJson)) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const backboneElement: JSON.Object = JSON.asObject(dataJson!, `${instance.constructor.name} BackboneElement`);

    if ('id' in backboneElement) {
      instance.setId(JSON.asString(backboneElement['id'], `${instance.constructor.name}.id`));
    }

    if ('extension' in backboneElement) {
      const extensions = [] as IExtension[];
      const extensionArray = backboneElement['extension'] as JSON.Array;
      for (const extensionJson of extensionArray) {
        const extension: IExtension | undefined = this.parseExtension(extensionJson as JSON.Object);
        if (extension !== undefined) {
          extensions.push(extension);
        }
      }
      if (extensions.length > 0) {
        instance.setExtension(extensions);
      }
    }

    if ('modifierExtension' in backboneElement) {
      const modifierExtensions = [] as IExtension[];
      const modifierExtensionArray = backboneElement['modifierExtension'] as JSON.Array;
      for (const extensionJson of modifierExtensionArray) {
        const extension: IExtension | undefined = this.parseExtension(extensionJson as JSON.Object);
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
   * @param {IBackboneType} instance - The BackboneType instance to populate. Must not be null or undefined.
   * @param {JSON.Value | undefined} dataJson - The JSON structure containing the BackboneType data. If undefined or not containing valid FHIR data, the method exits without modifying the instance.
   */
  public processBackboneTypeJson(instance: IBackboneType, dataJson: JSON.Value | undefined): void {
    assertIsDefined<IBackboneType>(instance, `Provided instance is undefined/null`);
    if (!JSON.hasFhirData(dataJson)) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const backboneType: JSON.Object = JSON.asObject(dataJson!, `${instance.constructor.name} BackboneType`);

    if ('id' in backboneType) {
      instance.setId(JSON.asString(backboneType['id'], `${instance.constructor.name}.id`));
    }

    if ('extension' in backboneType) {
      const extensions = [] as IExtension[];
      const extensionArray = backboneType['extension'] as JSON.Array;
      for (const extensionJson of extensionArray) {
        const extension: IExtension | undefined = this.parseExtension(extensionJson as JSON.Object);
        if (extension !== undefined) {
          extensions.push(extension);
        }
      }
      if (extensions.length > 0) {
        instance.setExtension(extensions);
      }
    }

    if ('modifierExtension' in backboneType) {
      const modifierExtensions = [] as IExtension[];
      const modifierExtensionArray = backboneType['modifierExtension'] as JSON.Array;
      for (const extensionJson of modifierExtensionArray) {
        const extension: IExtension | undefined = this.parseExtension(extensionJson as JSON.Object);
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
   * Parses a polymorphic data type from a given JSON object based on a provided field name, source field,
   * and associated metadata, returning the corresponding data type if applicable.
   *
   * @param {JSON.Object} jsonObj - The JSON object containing the data to parse.
   * @param {string} sourceField - The original field name as it appears in the source.
   * @param {string} fieldName - The normalized or expected field name to use for parsing.
   * @param {DecoratorMetadataObject | null} metadata - Metadata object providing decorator information, or null if not applicable.
   * @returns {IDataType | undefined} - The parsed data type if successful, or undefined if parsing cannot be performed.
   */
  public parsePolymorphicDataType(
    jsonObj: JSON.Object,
    sourceField: string,
    fieldName: string,
    metadata: DecoratorMetadataObject | null,
  ): IDataType | undefined {
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

    return this.getParsedDataType(jsonObj, sourceField, plainFieldName, supportedFieldNames);
  }

  /**
   * Parses the specified field from a JSON object and returns its corresponding data type if valid.
   *
   * @param {JSON.Object} jsonObj - The JSON object to parse the field data from.
   * @param {string} sourceField - The name of the source field for error messaging.
   * @param {string} fieldName - The specific field name to check and parse from jsonObj.
   * @param {string[]} supportedFieldNames - A list of valid field names that are supported for parsing.
   * @returns {IDataType | undefined} The parsed data type if valid, or undefined if parsing fails or the field is not present.
   * @throws {FhirError} If the field name exists directly in the JSON or if multiple matching fields are found.
   * @throws {TypeError} If an error occurs while parsing the data type.
   * @throws {Error} If an unexpected parsing error occurs.
   */
  private getParsedDataType(
    jsonObj: JSON.Object,
    sourceField: string,
    fieldName: string,
    supportedFieldNames: string[],
  ): IDataType | undefined {
    const valueKeys = Object.keys(jsonObj).filter((key) => key.startsWith(fieldName));

    if (fieldName in jsonObj) {
      throw new FhirError(INVALID_VALUEX_PROPERTY);
    } else if (valueKeys.length > 1) {
      throw new FhirError(`${INVALID_VALUEX_MULTIPLE_PROPERTIES} ${valueKeys.join(', ')}`);
    } else if (valueKeys[0] !== undefined && supportedFieldNames.includes(valueKeys[0])) {
      let instance: IDataType | undefined = undefined;
      try {
        instance = this.getFhirDataTypeParseResults(jsonObj, fieldName);
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
   * @returns {IDataType | undefined} - The parsed data as an instance of the specified type, or undefined if the key is not found or cannot be parsed.
   */
  private getFhirDataTypeParseResults(jsonObj: JSON.Object, fieldName: string): IDataType | undefined {
    const valueXKey = Object.keys(jsonObj).find((key) => DATA_TYPE_KEY_NAMES.includes(key.replace(fieldName, 'value')));

    if (valueXKey !== undefined && valueXKey in jsonObj) {
      const dataValue: JSON.Value | undefined = jsonObj[valueXKey];
      const siblingDataValue: JSON.Value | undefined = jsonObj[`_${valueXKey}`];
      const switchKey = valueXKey.replace(fieldName, 'value');
      const mapKey = valueXKey.replace(fieldName, '');

      if (dataValue !== undefined) {
        // Testing will NOT exercise all possible data types, so ignore for coverage
        /* istanbul ignore next */
        switch (switchKey) {
          case 'valueBase64Binary':
            return this.parseBase64BinaryType(dataValue, siblingDataValue);
          case 'valueBoolean':
            return this.parseBooleanType(dataValue, siblingDataValue);
          case 'valueCanonical':
            return this.parseCanonicalType(dataValue, siblingDataValue);
          case 'valueCode':
            // NOTE - EnumCodeType is a subclass of CodeType and will always be serialized/parsed as a CodeType
            return this.parseCodeType(dataValue, siblingDataValue);
          case 'valueDate':
            return this.parseDateType(dataValue, siblingDataValue);
          case 'valueDateTime':
            return this.parseDateTimeType(dataValue, siblingDataValue);
          case 'valueDecimal':
            return this.parseDecimalType(dataValue, siblingDataValue);
          case 'valueId':
            return this.parseIdType(dataValue, siblingDataValue);
          case 'valueInstant':
            return this.parseInstantType(dataValue, siblingDataValue);
          case 'valueInteger':
            return this.parseIntegerType(dataValue, siblingDataValue);
          case 'valueInteger64':
            return this.parseInteger64Type(dataValue, siblingDataValue);
          case 'valueMarkdown':
            return this.parseMarkdownType(dataValue, siblingDataValue);
          case 'valueOid':
            return this.parseOidType(dataValue, siblingDataValue);
          case 'valuePositiveInt':
            return this.parsePositiveIntType(dataValue, siblingDataValue);
          case 'valueString':
            return this.parseStringType(dataValue, siblingDataValue);
          case 'valueTime':
            return this.parseTimeType(dataValue, siblingDataValue);
          case 'valueUnsignedInt':
            return this.parseUnsignedIntType(dataValue, siblingDataValue);
          case 'valueUri':
            return this.parseUriType(dataValue, siblingDataValue);
          case 'valueUrl':
            return this.parseUrlType(dataValue, siblingDataValue);
          case 'valueUuid':
            return this.parseUuidType(dataValue, siblingDataValue);
          case 'valueXhtml':
            return this.parseXhtmlType(dataValue, siblingDataValue);

          default:
            // Not a primitive data type, so it must be a complex data type
            if (this.parsableDataTypeMap.has(mapKey)) {
              const parsableClass: ParsableDataType<IDataType> | undefined = this.parsableDataTypeMap.get(mapKey);
              assert(parsableClass, `parsableClass data model for field name '${fieldName}' is not defined`);
              return this.parseDataType<IDataType>(parsableClass, dataValue);
            } else {
              throw new FhirError(`Unsupported data type for field name '${fieldName}'`);
            }
        }
      }
    }

    return undefined;
  }

  //endregion

  //region Resource Parser Helpers

  /**
   * Processes the given JSON data and updates the provided Resource instance accordingly.
   *
   * @param {IResource} instance - The data model instance that extends Resource to be updated. Must be defined.
   * @param {JSON.Value | undefined} dataJson - The JSON data object containing the resource properties to process.
   *                                            Can be undefined.
   */
  public processResourceJson(instance: IResource, dataJson: JSON.Value | undefined): void {
    assertIsDefined<IResource>(instance, `Provided instance is undefined/null`);
    if (!JSON.hasFhirData(dataJson)) {
      return;
    }

    const sourceResource: string = instance.constructor.name;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const resourceObj: JSON.Object = JSON.asObject(dataJson!, `${sourceResource} JSON`);

    if ('id' in resourceObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(resourceObj, `${sourceResource}.id`, 'id', 'string');
      const datatype: IdType | undefined = this.parseIdType(dtJson, dtSiblingJson);
      instance.setIdElement(datatype);
    }

    if ('meta' in resourceObj) {
      if (this.parsableDataTypeMap.has('Meta')) {
        const parsableClass = this.parsableDataTypeMap.get('Meta') as ParsableDataType<IMeta>;
        assert(parsableClass, `parsableClass data model for ${sourceResource}.meta is not defined`);
        const datatype = this.parseDataType<IMeta>(parsableClass, resourceObj['meta'], `${sourceResource}.meta`);
        if (datatype !== undefined) {
          instance.setMeta(datatype);
        }
      } else {
        throw new FhirError(`Unsupported data type for ${sourceResource}.meta`);
      }
    }

    if ('implicitRules' in resourceObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(
        resourceObj,
        `${sourceResource}.implicitRules`,
        'implicitRules',
        'string',
      );
      const datatype: UriType | undefined = this.parseUriType(dtJson, dtSiblingJson);
      instance.setImplicitRulesElement(datatype);
    }

    if ('language' in resourceObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(
        resourceObj,
        `${sourceResource}.language`,
        'language',
        'string',
      );
      const datatype: CodeType | undefined = this.parseCodeType(dtJson, dtSiblingJson);
      instance.setLanguageElement(datatype);
    }
  }

  /**
   * Processes the given JSON data and updates the provided DomainResource instance accordingly.
   *
   * @param {IDomainResource} instance - The data model instance that extends DomainResource to be updated. Must be defined.
   * @param {JSON.Value | undefined} dataJson - The JSON data used to populate the DomainResource instance.
   *                                            Can be undefined.
   */
  public processDomainResourceJson(instance: IDomainResource, dataJson: JSON.Value | undefined): void {
    assertIsDefined<IDomainResource>(instance, `Provided instance is undefined/null`);
    if (!JSON.hasFhirData(dataJson)) {
      return;
    }

    const sourceResource: string = instance.constructor.name;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const resourceObj: JSON.Object = JSON.asObject(dataJson!, `${sourceResource} JSON`);

    this.processResourceJson(instance, resourceObj);

    if ('text' in resourceObj) {
      if (this.parsableDataTypeMap.has('Narrative')) {
        const parsableClass = this.parsableDataTypeMap.get('Narrative') as ParsableDataType<INarrative>;
        assert(parsableClass, `parsableClass data model for ${sourceResource}.text is not defined`);
        const datatype = this.parseDataType<INarrative>(parsableClass, resourceObj['text'], `${sourceResource}.text`);
        if (datatype !== undefined) {
          instance.setText(datatype);
        }
      } else {
        throw new FhirError(`Unsupported data type for ${sourceResource}.text`);
      }
    }

    if ('contained' in resourceObj) {
      const containedJsonArray: JSON.Array = JSON.asArray(resourceObj['contained'], `${sourceResource}.contained`);
      this.parseContainedResources(instance, containedJsonArray, `${sourceResource}.contained`);
    }

    if ('extension' in resourceObj) {
      const extensionArray = JSON.asArray(resourceObj['extension'], `${sourceResource}.extension`);
      extensionArray.forEach((extensionJson: JSON.Value) => {
        const datatype: IExtension | undefined = this.parseExtension(extensionJson as JSON.Object);
        if (datatype !== undefined) {
          instance.addExtension(datatype);
        }
      });
    }

    if ('modifierExtension' in resourceObj) {
      const modifierExtensionArray = JSON.asArray(
        resourceObj['modifierExtension'],
        `${sourceResource}.modifierExtension`,
      );
      modifierExtensionArray.forEach((extensionJson: JSON.Value) => {
        const datatype: IExtension | undefined = this.parseExtension(extensionJson as JSON.Object);
        if (datatype !== undefined) {
          instance.addModifierExtension(datatype);
        }
      });
    }
  }

  /**
   * Parses the contained resources from a given JSON array and adds them to the provided DomainResource instance.
   *
   * @param {IDomainResource} instance - The DomainResource instance to which the parsed resources will be added. This parameter is required.
   * @param {JSON.Array} containedJsonArray - The JSON array containing the resources to be parsed. This parameter is required.
   * @param {string} sourceField - The source field used for tracking resource provenance during parsing. This parameter is required.
   */
  public parseContainedResources(instance: IDomainResource, containedJsonArray: JSON.Array, sourceField: string): void {
    assert.ok(instance, 'instance argument is required');
    assert.ok(containedJsonArray, 'containedJsonArray argument is required');
    assert.ok(sourceField, 'sourceField argument is required');

    containedJsonArray.forEach((containedJson: JSON.Value, idx) => {
      const datatype: IResource | undefined = this.parseInlineResource(containedJson, `${sourceField}[${String(idx)}]`);
      if (datatype !== undefined) {
        instance.addContained(datatype);
      }
    });
  }

  /**
   * Parses an inline JSON resource and returns a Resource object if parsing is successful.
   *
   * @param {JSON.Value | undefined} json - The JSON object representing the resource to parse. Can be undefined or empty.
   * @param {string} sourceField - The field name or reference for identifying the source of the JSON data, used for error reporting.
   * @returns {IResource | undefined} The parsed Resource object if the JSON conforms to a valid resource structure, otherwise undefined.
   * @throws {FhirError} If the JSON is missing the 'resourceType' property.
   */
  private parseInlineResource(json: JSON.Value | undefined, sourceField: string): IResource | undefined {
    if (!isDefined<JSON.Value>(json) || (JSON.isJsonObject(json) && isEmpty(json))) {
      return undefined;
    }
    const jsonObj: JSON.Object = JSON.asObject(json, sourceField);

    let resourceTypeValue: string;
    if ('resourceType' in jsonObj) {
      resourceTypeValue = JSON.asString(jsonObj['resourceType'], `${sourceField}.resourceType`);
    } else {
      throw new FhirError(`The provided JSON does not represent a FHIR Resource (missing 'resourceType' element).`);
    }

    const className: ParsableResource<IResource> | undefined = this.parsableResourceMap.get(resourceTypeValue);
    if (className === undefined) {
      throw new FhirError(`'resourceType' ('${resourceTypeValue}') does not exist in the PARSABLE_RESOURCE_MAP.`);
    } else {
      return this.parseResource<IResource>(className, jsonObj, sourceField);
    }
  }

  //endregion

  //region Primitive Parsers

  /**
   * Parses a JSON object input to create and populate an instance of `Base64BinaryType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {Base64BinaryType | undefined} - Returns an instance of `Base64BinaryType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseBase64BinaryType(json: JSON.Value | undefined, siblingJson?: JSON.Value): Base64BinaryType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new Base64BinaryType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `BooleanType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {BooleanType | undefined} Returns an instance of `BooleanType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseBooleanType(json: JSON.Value | undefined, siblingJson?: JSON.Value): BooleanType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new BooleanType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asBoolean(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `CanonicalType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {CanonicalType | undefined} Returns an instance of `CanonicalType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseCanonicalType(json: JSON.Value | undefined, siblingJson?: JSON.Value): CanonicalType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new CanonicalType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `CodeType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {CodeType | undefined} Returns an instance of `CodeType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseCodeType(json: JSON.Value | undefined, siblingJson?: JSON.Value): CodeType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new CodeType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `DateTimeType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {DateTimeType | undefined} Returns an instance of `DateTimeType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseDateTimeType(json: JSON.Value | undefined, siblingJson?: JSON.Value): DateTimeType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new DateTimeType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `DateType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {DateType | undefined} Returns an instance of `DateType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseDateType(json: JSON.Value | undefined, siblingJson?: JSON.Value): DateType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new DateType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `DecimalType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {DecimalType | undefined} Returns an instance of `DecimalType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseDecimalType(json: JSON.Value | undefined, siblingJson?: JSON.Value): DecimalType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new DecimalType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asNumber(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `IdType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {IdType | undefined} Returns an instance of `IdType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseIdType(json: JSON.Value | undefined, siblingJson?: JSON.Value): IdType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new IdType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `InstantType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {InstantType | undefined} Returns an instance of `InstantType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseInstantType(json: JSON.Value | undefined, siblingJson?: JSON.Value): InstantType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new InstantType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `IntegerType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {IntegerType | undefined} Returns an instance of `IntegerType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseIntegerType(json: JSON.Value | undefined, siblingJson?: JSON.Value): IntegerType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new IntegerType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asNumber(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `Integer64Type`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {Integer64Type | undefined} Returns an instance of `Integer64Type` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseInteger64Type(json: JSON.Value | undefined, siblingJson?: JSON.Value): Integer64Type | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new Integer64Type();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const int64Value = JSON.asString(json!, `json argument for ${instance.constructor.name}`);
    instance.setValue(BigInt(int64Value));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `MarkdownType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {MarkdownType | undefined} Returns an instance of `MarkdownType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseMarkdownType(json: JSON.Value | undefined, siblingJson?: JSON.Value): MarkdownType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new MarkdownType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `OidType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {OidType | undefined} Returns an instance of `OidType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseOidType(json: JSON.Value | undefined, siblingJson?: JSON.Value): OidType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new OidType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `PositiveIntType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {PositiveIntType | undefined} Returns an instance of `PositiveIntType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parsePositiveIntType(json: JSON.Value | undefined, siblingJson?: JSON.Value): PositiveIntType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new PositiveIntType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asNumber(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `StringType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {StringType | undefined} Returns an instance of `StringType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseStringType(json: JSON.Value | undefined, siblingJson?: JSON.Value): StringType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new StringType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `TimeType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {TimeType | undefined} Returns an instance of `TimeType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseTimeType(json: JSON.Value | undefined, siblingJson?: JSON.Value): TimeType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new TimeType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `UnsignedIntType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {UnsignedIntType | undefined} Returns an instance of `UnsignedIntType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseUnsignedIntType(json: JSON.Value | undefined, siblingJson?: JSON.Value): UnsignedIntType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new UnsignedIntType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asNumber(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `UriType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {UriType | undefined} Returns an instance of `UriType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseUriType(json: JSON.Value | undefined, siblingJson?: JSON.Value): UriType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new UriType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `UrlType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {UrlType | undefined} Returns an instance of `UrlType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseUrlType(json: JSON.Value | undefined, siblingJson?: JSON.Value): UrlType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new UrlType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `UuidType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {UuidType | undefined} Returns an instance of `UuidType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseUuidType(json: JSON.Value | undefined, siblingJson?: JSON.Value): UuidType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new UuidType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  /**
   * Parses a JSON object input to create and populate an instance of `XhtmlType`.
   *
   * @param {JSON.Value | undefined} json - The JSON object to be parsed.
   * @param {JSON.Value} [siblingJson] - An optional sibling JSON object representing the inherited Element.
   * @returns {XhtmlType | undefined} Returns an instance of `XhtmlType` if parsing is successful and valid; otherwise, returns undefined.
   */
  public parseXhtmlType(json: JSON.Value | undefined, siblingJson?: JSON.Value): XhtmlType | undefined {
    if (!JSON.hasFhirData(json)) {
      return undefined;
    }

    const instance = new XhtmlType();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instance.setValue(JSON.asString(json!, `json argument for ${instance.constructor.name}`));
    this.processElementJson(instance, siblingJson);

    assert(!instance.isEmpty(), INSTANCE_EMPTY_ERROR_MSG);
    return instance;
  }

  //endregion
}

/**
 * Returns the primitive data type's value and its sibling Element, if any.
 *
 * @param datatypeJsonObj - source JSON object
 * @param sourceField - source data type name
 * @param primitiveFieldName - primitive's field name in datatypeJsonObj
 * @param jsonType - type of expected field's data
 * @returns object containing the primitive data plus its Element data, if any
 *
 * @category Utilities: FHIR Parsers
 */
export function getPrimitiveTypeJson(
  datatypeJsonObj: JSON.Object,
  sourceField: string,
  primitiveFieldName: string,
  jsonType: 'boolean' | 'number' | 'string',
): PrimitiveTypeJson {
  if (!JSON.hasFhirData(datatypeJsonObj)) {
    return { dtJson: undefined, dtSiblingJson: undefined };
  }
  assertIsDefined<string>(sourceField, `Provided sourceField is undefined/null`);
  assertIsString(sourceField, `Provided sourceField is not a string`);
  assertIsDefined<string>(primitiveFieldName, `Provided primitiveFieldName is undefined/null`);
  assertIsString(primitiveFieldName, `Provided primitiveFieldName is not a string`);
  assertIsDefined<string>(jsonType, `Provided jsonType is undefined/null`);
  assertIsString(jsonType, `Provided jsonType is not a string`);
  // Calling function should have already ensured this is true!
  assert(primitiveFieldName in datatypeJsonObj, `${primitiveFieldName} does not exist in provided JSON.Object!`);

  let dtJson: JSON.Value | undefined = undefined;
  if (isDefined<JSON.Value>(datatypeJsonObj[primitiveFieldName])) {
    if (jsonType === 'boolean') {
      dtJson = JSON.asBoolean(datatypeJsonObj[primitiveFieldName], sourceField);
    } else if (jsonType === 'number') {
      dtJson = JSON.asNumber(datatypeJsonObj[primitiveFieldName], sourceField);
    } else {
      dtJson = JSON.asString(datatypeJsonObj[primitiveFieldName], sourceField);
    }
  }

  const siblingFieldName = `_${primitiveFieldName}`;
  let dtSiblingJson: JSON.Object | undefined = undefined;
  if (siblingFieldName in datatypeJsonObj) {
    if (datatypeJsonObj[siblingFieldName] !== undefined) {
      dtSiblingJson = JSON.asObject(
        datatypeJsonObj[siblingFieldName],
        sourceField.replace(primitiveFieldName, siblingFieldName),
      );
    }
  }

  return { dtJson: dtJson, dtSiblingJson: dtSiblingJson };
}

/**
 * Returns an array containing the primitive data type's value and its sibling Element, if any.
 *
 * @param datatypeJsonObj - source JSON object
 * @param sourceField - source data type name
 * @param primitiveFieldName - primitive's field name in datatypeJsonObj
 * @param jsonType - type of expected field's data
 * @returns array containing objects of the primitive data plus its Element data, if any
 *
 * @category Utilities: FHIR Parsers
 */
export function getPrimitiveTypeListJson(
  datatypeJsonObj: JSON.Object,
  sourceField: string,
  primitiveFieldName: string,
  jsonType: 'boolean' | 'number' | 'string',
): PrimitiveTypeJson[] {
  if (!JSON.hasFhirData(datatypeJsonObj)) {
    return [];
  }
  assertIsDefined<string>(sourceField, `Provided sourceField is undefined/null`);
  assertIsString(sourceField, `Provided sourceField is not a string`);
  assertIsDefined<string>(primitiveFieldName, `Provided primitiveFieldName is undefined/null`);
  assertIsString(primitiveFieldName, `Provided primitiveFieldName is not a string`);
  assertIsDefined<string>(jsonType, `Provided jsonType is undefined/null`);
  assertIsString(jsonType, `Provided jsonType is not a string`);
  // Calling function should have already ensured this is true!
  assert(primitiveFieldName in datatypeJsonObj, `${primitiveFieldName} does not exist in provided JSON.Object!`);

  const dataJsonArray: JSON.Array = JSON.asArray(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    datatypeJsonObj[primitiveFieldName]!,
    sourceField,
  );

  const siblingFieldName = `_${primitiveFieldName}`;
  let dataElementJsonArray: JSON.Array | undefined = undefined;
  if (siblingFieldName in datatypeJsonObj) {
    dataElementJsonArray = JSON.asArray(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      datatypeJsonObj[siblingFieldName]!,
      sourceField.replace(primitiveFieldName, siblingFieldName),
    );
    // FHIR specification requires both arrays to be same size with null sibling values when there is no matching sibling element
    // [JSON representation of primitive elements](https://hl7.org/fhir/R4/json.html#primitive)
    assert(
      dataJsonArray.length === dataElementJsonArray.length,
      `Invalid JSON: Contrary to FHIR Specification, ${sourceField} and ${sourceField.replace(primitiveFieldName, siblingFieldName)} have different sizes!`,
    );
  }

  // At this point, dataJsonArray and dataElementJsonArray, if defined, have the same length
  const primitiveTypeJsonArray: PrimitiveTypeJson[] = [];
  dataJsonArray.forEach((dataJson: JSON.Value, idx) => {
    const primitiveJsonObj = {} as JSON.Object;
    primitiveJsonObj[primitiveFieldName] = dataJson;
    if (isDefined<JSON.Array>(dataElementJsonArray) && isDefined<JSON.Value>(dataElementJsonArray[idx])) {
      primitiveJsonObj[siblingFieldName] = dataElementJsonArray[idx];
    }
    const result: PrimitiveTypeJson = getPrimitiveTypeJson(primitiveJsonObj, sourceField, primitiveFieldName, jsonType);
    primitiveTypeJsonArray.push(result);
  });

  return primitiveTypeJsonArray;
}
