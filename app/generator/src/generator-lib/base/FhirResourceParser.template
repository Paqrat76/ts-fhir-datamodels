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
import {
  assertIsDefined,
  CodeType,
  DataType,
  Extension as CoreExtension,
  FhirDataTypeParser,
  getPrimitiveTypeJson,
  IdType,
  InvalidTypeError,
  isDefined,
  isEmpty,
  JSON,
  ParsableDataType,
  parseCodeType,
  parseIdType,
  parseUriType,
  UriType,
} from '@paq-ts-fhir/fhir-core';
import { Meta, Narrative } from '../complex-types';
import { Extension } from './Extension';
import { Resource } from './Resource';
import { DomainResource } from './DomainResource';
import { PARSABLE_RESOURCE_MAP } from '../resources';
import { isFhirResourceType } from './FhirResourceType';

/**
 * Represents a parsable resource that can be constructed and includes a static parse method
 * to create an instance from JSON data.
 *
 * This type is used to encapsulate a class-like structure where instances can be created using the `new` operator,
 * and the class itself has additional functionality for parsing JSON input into an instance of the resource.
 *
 * @typeParam T - Extends the base `Resource`/`BackboneElement` to specify the structure of the object created by this type.
 *
 * `parse` - A static method available on the type that accepts JSON data, parses it, and returns an instance
 *           of the type T. Optionally, a specific field of the JSON data can be targeted by providing
 *           `optSourceField` as a parameter.
 *
 * @category Utilities: FHIR Parsers
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ParsableResource<T extends Resource> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
  parse: (sourceJson: JSON.Value, optSourceField?: string) => T | undefined;
};

/**
 * Provides parsing functionality for FHIR resources, allowing JSON representations of resources to be
 * transformed into their corresponding data model instances. This class handles the processing of
 * individual resources, contained resources, and domain resource structures.
 *
 * @category Utilities: FHIR Parsers
 */
export class FhirResourceParser {
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
  private readonly fhirDataTypeParser: FhirDataTypeParser;

  constructor(parsableDataTypeMap: Map<string, ParsableDataType<DataType>>) {
    this.fhirDataTypeParser = new FhirDataTypeParser(parsableDataTypeMap);
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
  public parser<T extends Resource>(
    className: ParsableResource<T>,
    sourceJson: JSON.Value,
    optSourceField?: string,
  ): T | undefined {
    return className.parse(sourceJson, optSourceField);
  }

  /**
   * Processes the given JSON data and updates the provided Resource instance accordingly.
   *
   * @param {Resource} instance - The data model instance that extends Resource to be updated. Must be defined.
   * @param {JSON.Value | undefined} dataJson - The JSON data object containing the resource properties to process.
   *                                            Can be undefined.
   */
  public processResourceJson(instance: Resource, dataJson: JSON.Value | undefined): void {
    assertIsDefined<Resource>(instance, `Provided instance is undefined/null`);
    if (!JSON.hasFhirData(dataJson)) {
      return;
    }

    const sourceResource: string = instance.constructor.name;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const resourceObj: JSON.Object = JSON.asObject(dataJson!, `${sourceResource} JSON`);

    if ('id' in resourceObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(resourceObj, `${sourceResource}.id`, 'id', 'string');
      const datatype: IdType | undefined = parseIdType(dtJson, dtSiblingJson);
      instance.setIdElement(datatype);
    }

    if ('meta' in resourceObj) {
      //const datatype: Meta | undefined = Meta.parse(resourceObj['meta'], `${sourceResource}.meta`);
      const datatype: Meta | undefined = this.fhirDataTypeParser.parser<Meta>(
        Meta,
        resourceObj['meta'],
        `${sourceResource}.meta`,
      );
      instance.setMeta(datatype);
    }

    if ('implicitRules' in resourceObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(
        resourceObj,
        `${sourceResource}.implicitRules`,
        'implicitRules',
        'string',
      );
      const datatype: UriType | undefined = parseUriType(dtJson, dtSiblingJson);
      instance.setImplicitRulesElement(datatype);
    }

    if ('language' in resourceObj) {
      const { dtJson, dtSiblingJson } = getPrimitiveTypeJson(
        resourceObj,
        `${sourceResource}.language`,
        'language',
        'string',
      );
      const datatype: CodeType | undefined = parseCodeType(dtJson, dtSiblingJson);
      instance.setLanguageElement(datatype);
    }
  }

  /**
   * Processes a JSON representation of a DomainResource instance and populates its properties with the corresponding data.
   *
   * @param {DomainResource} instance - The data model instance that extends DomainResource to be updated. Must be defined.
   * @param {JSON.Value | undefined} dataJson - The JSON data used to populate the DomainResource instance.
   *                                            Can be undefined.
   */
  public processDomainResourceJson(instance: DomainResource, dataJson: JSON.Value | undefined): void {
    assertIsDefined<DomainResource>(instance, `Provided instance is undefined/null`);
    if (!JSON.hasFhirData(dataJson)) {
      return;
    }

    const sourceResource: string = instance.constructor.name;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const resourceObj: JSON.Object = JSON.asObject(dataJson!, `${sourceResource} JSON`);

    this.processResourceJson(instance, resourceObj);

    if ('text' in resourceObj) {
      const datatype: Narrative | undefined = this.fhirDataTypeParser.parser<Narrative>(
        Narrative,
        resourceObj['text'],
        `${sourceResource}.text`,
      );
      instance.setText(datatype);
    }

    if ('contained' in resourceObj) {
      const containedJsonArray: JSON.Array = JSON.asArray(resourceObj['contained'], `${sourceResource}.contained`);
      this.parseContainedResources(instance, containedJsonArray, `${sourceResource}.contained`);
    }

    if ('extension' in resourceObj) {
      const extensionArray = JSON.asArray(resourceObj['extension'], `${sourceResource}.extension`);
      extensionArray.forEach((extensionJson: JSON.Value) => {
        const datatype: CoreExtension | undefined = this.fhirDataTypeParser.parseExtension(
          extensionJson as JSON.Object,
        );
        if (datatype !== undefined) {
          instance.addExtension(datatype as Extension);
        }
      });
    }

    if ('modifierExtension' in resourceObj) {
      const modifierExtensionArray = JSON.asArray(
        resourceObj['modifierExtension'],
        `${sourceResource}.modifierExtension`,
      );
      modifierExtensionArray.forEach((extensionJson: JSON.Value) => {
        const datatype: CoreExtension | undefined = this.fhirDataTypeParser.parseExtension(
          extensionJson as JSON.Object,
        );
        if (datatype !== undefined) {
          instance.addModifierExtension(datatype as Extension);
        }
      });
    }
  }

  /**
   * Parses the contained resources from a given JSON array and adds them to the provided DomainResource instance.
   *
   * @param {DomainResource} instance - The DomainResource instance to which the parsed resources will be added. This parameter is required.
   * @param {JSON.Array} containedJsonArray - The JSON array containing the resources to be parsed. This parameter is required.
   * @param {string} sourceField - The source field used for tracking resource provenance during parsing. This parameter is required.
   */
  public parseContainedResources(instance: DomainResource, containedJsonArray: JSON.Array, sourceField: string): void {
    assert.ok(instance, 'instance argument is required');
    assert.ok(containedJsonArray, 'containedJsonArray argument is required');
    assert.ok(sourceField, 'sourceField argument is required');

    containedJsonArray.forEach((containedJson: JSON.Value, idx) => {
      const datatype: Resource | undefined = this.parseInlineResource(containedJson, `${sourceField}[${String(idx)}]`);
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
   * @returns {Resource | undefined} The parsed Resource object if the JSON conforms to a valid resource structure, otherwise undefined.
   * @throws {InvalidTypeError} If the JSON is missing the 'resourceType' property, or if the 'resourceType' value is invalid.
   */
  public parseInlineResource(json: JSON.Value | undefined, sourceField: string): Resource | undefined {
    if (!isDefined<JSON.Value>(json) || (JSON.isJsonObject(json) && isEmpty(json))) {
      return undefined;
    }
    const jsonObj: JSON.Object = JSON.asObject(json, sourceField);

    let resourceTypeValue: string;
    if ('resourceType' in jsonObj) {
      resourceTypeValue = JSON.asString(jsonObj['resourceType'], `${sourceField}.resourceType`);
      if (!isFhirResourceType(resourceTypeValue)) {
        throw new InvalidTypeError(`Invalid JSON 'resourceType' ('${resourceTypeValue}') value.`);
      }
    } else {
      throw new InvalidTypeError(
        `The provided JSON does not represent a FHIR Resource (missing 'resourceType' element).`,
      );
    }

    const className: ParsableResource<Resource> | undefined = PARSABLE_RESOURCE_MAP.get(resourceTypeValue);
    if (className === undefined) {
      // Should not happen, but...
      throw new InvalidTypeError(
        `'resourceType' ('${resourceTypeValue}') does not exist in the PARSABLE_RESOURCE_MAP.`,
      );
    } else {
      const parsedResult = className.parse(jsonObj);
      if (parsedResult === undefined) {
        return undefined;
      }
      return parsedResult;
    }
  }
}
