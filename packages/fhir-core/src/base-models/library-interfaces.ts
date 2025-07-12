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
 * This module contains the interfaces for the core FHIR models.
 *
 * @remarks
 * The FHIR specification defines the Element type from which all other non-Resource types extend.
 * Its definition includes the FHIR Extension type. From a programming perspective, this introduces
 * circular dependencies because all of these types inherit from Element or one of its child types,
 * and they all include an element of a list of Extension types.
 *
 * In TypeScript, having each of these models in separate files results in circular dependencies
 * that cannot be resolved by typical strategies such as extracting common elements into a sharable
 * module. Therefore, these modules are collected into this single file. This preserves the correct
 * model representations with their correct inheritance without introducing circular dependencies.
 *
 * Because this module will be used by packages containing generated data models, interfaces for
 * several complex data types are provided that are dependencies of `Resource` and `DomainResource`.
 *
 * @see [FHIR Type Framework](https://hl7.org/fhir/R5/types.html)
 *
 * @module
 */

import {
  fhirBoolean,
  fhirCanonical,
  fhirCode,
  fhirId,
  fhirInstant,
  fhirString,
  fhirUri,
  fhirXhtml,
} from '../data-types/primitive/primitive-types';
import { BooleanType } from '../data-types/primitive/BooleanType';
import { CanonicalType } from '../data-types/primitive/CanonicalType';
import { CodeType, EnumCodeType } from '../data-types/primitive/CodeType';
import { IdType } from '../data-types/primitive/IdType';
import { InstantType } from '../data-types/primitive/InstantType';
import { StringType } from '../data-types/primitive/StringType';
import { UriType } from '../data-types/primitive/UriType';
import { XhtmlType } from '../data-types/primitive/XhtmlType';
import * as JSON from '../utility/json-helpers';

/**
 * Base interface to specify methods used by utilities, etc.
 *
 * @category Base Models
 * @interface
 */
export interface IBase {
  /**
   * @returns the FHIR type defined in the FHIR standard
   */
  fhirType: () => string;

  /**
   * Determines if any value in typeNames equals the current fhirType() value
   *
   * @param typeNames - array of FHIR type names
   * @returns true if any value in typeNames equals (case-insensitive) the current fhirType() value; false otherwise
   */
  hasFireType: (...typeNames: string[]) => boolean;

  /**
   * @returns `true` if the instance is empty; `false` otherwise
   */
  isEmpty: () => boolean;

  /**
   * Creates a copy of the current instance.
   *
   * @privateRemarks
   * Base specification returning `any` is reasonable since all implementing classes will be generated
   * and this method will be overridden by the generated class.
   *
   * @returns the a new instance copied from the current instance
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  copy: () => any;

  // NOTE: `copyValues(dest: any): void` is a protected method in `Base` and is included here for documentation
  //copyValues: (dest: any) => void;

  /**
   * @returns the JSON value
   */
  toJSON: () => JSON.Value | undefined;

  /**
   * @returns `true` if the instance is a FHIR resource; `false` otherwise
   */
  isResource: () => boolean;

  /**
   * @returns `true` if the instance is a FHIR complex datatype; `false` otherwise
   */
  isComplexDataType: () => boolean;

  /**
   * @returns `true` if the instance is a FHIR primitive datatype; `false` otherwise
   */
  isPrimitive: () => boolean;

  /**
   * @returns `true` if the instance is a FHIR primitive boolean datatype; `false` otherwise
   */
  isBooleanPrimitive: () => boolean;

  /**
   * @returns `true` if the instance is a FHIR primitive string-based datatype; `false` otherwise
   */
  isStringPrimitive: () => boolean;

  /**
   * @returns `true` if the instance is a FHIR primitive number-based datatype; `false` otherwise
   */
  isNumberPrimitive: () => boolean;

  /**
   * @returns `true` if the instance is a FHIR primitive bigint-based datatype; `false` otherwise
   */
  isBigIntPrimitive: () => boolean;

  /**
   * @returns `true` if the instance is a FHIR primitive datetime-based datatype; `false` otherwise
   */
  isDateTimePrimitive: () => boolean;
}

/**
 * Base interface to specify `extension` specific methods used by
 * Element and Resource.
 *
 * @category Base Models
 */
export interface IBaseExtension {
  /**
   * Returns the array of `extension` values
   */
  getExtension: () => IExtension[] | undefined;

  /**
   * Assigns the provided array of Extension values to the `extension` property.
   *
   * @param extension - array of Extensions
   */
  setExtension: (extension: IExtension[] | undefined) => this;

  /**
   * Determines if the `extension` property exists.
   *
   * @remarks If the url is provided, determines if an Extension having
   * the provided url exists. If the url is not provided, determines
   * if the `extension` property exists and has any values.
   *
   * @param url - the url that identifies a specific Extension
   * @throws AssertionError for invalid url
   */
  hasExtension: (url?: fhirUri) => boolean;

  /**
   * Returns the Extension having the provided url.
   *
   * @param url - the url that identifies a specific Extension
   * @throws AssertionError for invalid url
   */
  getExtensionByUrl: (url: fhirUri) => IExtension | undefined;

  /**
   * Adds the provided Extension to the `extension` property array.
   *
   * @param extension - the Extension value to add to the `extension` property array
   */
  addExtension: (extension: IExtension | undefined) => this;

  /**
   * Removes the Extension having the provided url from the `extension` property array.
   *
   * @param url - the url that identifies a specific Extension to remove
   * @throws AssertionError for invalid url
   */
  removeExtension: (url: fhirUri) => void;
}

/**
 * Base interface to specify `modifierExtension` specific methods used by
 * BackboneElement and BackboneType.
 *
 * @category Base Models
 */
export interface IBaseModifierExtension {
  /**
   * Returns the array of `modifierExtension` values
   */
  getModifierExtension: () => IExtension[] | undefined;

  /**
   * Assigns the provided array of Extension values to the `modifierExtension` property.
   *
   * @param extension - array of Extensions
   */
  setModifierExtension: (extension: IExtension[] | undefined) => this;

  /**
   * Determines if the `modifierExtension` property exists.
   *
   * @remarks If the url is provided, determines if an Extension having
   * the provided url exists. If the url is not provided, determines
   * if the `modifierExtension` property exists and has any values.
   *
   * @param url - the url that identifies a specific Extension
   * @throws AssertionError for invalid url
   */
  hasModifierExtension: (url?: fhirUri) => boolean;

  /**
   * Returns the Extension having the provided url.
   *
   * @param url - the url that identifies a specific Extension
   * @throws AssertionError for invalid url
   */
  getModifierExtensionByUrl: (url: fhirUri) => IExtension | undefined;

  /**
   * Adds the provided Extension to the `modifierExtension` property array.
   *
   * @param extension - the Extension value to add to the `modifierExtension` property array
   */
  addModifierExtension: (extension: IExtension | undefined) => this;

  /**
   * Removes the Extension having the provided url from the `modifierExtension` property array.
   *
   * @param url - the url that identifies a specific Extension to remove
   * @throws AssertionError for invalid url
   */
  removeModifierExtension: (url: fhirUri) => void;
}

/**
 * Interface IElement represents a base element structure that extends the functionalities
 * of IBase and IBaseExtension, providing additional methods for handling the `id` property.
 *
 * @category Base Models
 */
export interface IElement extends IBase, IBaseExtension {
  /**
   * @returns the `id` property value
   */
  getId: () => fhirString | undefined;

  /**
   * Assigns the provided value to the `id` property.
   *
   * @param value - the `id` value
   * @returns this
   * @throws PrimitiveTypeError for invalid value
   */
  setId: (value: fhirString | undefined) => this;

  /**
   * @returns `true` if `id` exists and has a value; `false` otherwise
   */
  hasId: () => boolean;
}

/**
 * Represents a BackboneElement interface, which serves as a reusable, extendable component
 * in the data model. This interface extends the functionalities of IElement and
 * IBaseModifierExtension, including structured elements and modification capabilities.
 *
 * A BackboneElement is typically used to structure nested resources or complex data
 * types consistently. It allows for extensions and modifier extensions
 * that do not alter the basic meaning of the element but provide additional
 * data observation or context.
 *
 * @category Base Models
 */
export interface IBackboneElement extends IElement, IBaseModifierExtension {}

/**
 * Interface representing a data type that extends the functionality of the IElement interface.
 * Represents both FHIR complex data types and FHIR primitive data types.
 *
 * @category Base Models
 */
export interface IDataType extends IElement {
  /**
   * @returns `true` if the instance is a FHIR complex or primitive datatype; `false` otherwise
   */
  isDataType: () => boolean;
}

/**
 * Represents a Backbone type which extends the properties and behaviors of both IDataType and IBaseModifierExtension.
 * This interface is intended to define a structure commonly used in data modeling contexts to represent composite
 * or hierarchical properties.
 *
 * The IBackboneType typically includes additional metadata or constraints applied to a specific subset of data.
 * By combining multiple interfaces, it supports a standardized way of defining reusable and modifiable components.
 *
 * @category Base Models
 */
export interface IBackboneType extends IDataType, IBaseModifierExtension {}

/**
 * Represents a generic primitive type interface, extending the `IDataType` interface.
 * Provides methods to interact with and manipulate the underlying value of the primitive type.
 *
 * @template T - The type of the primitive value.
 *
 * @category Base Models
 */
export interface IPrimitiveType<T> extends IDataType {
  /**
   * @returns the generic T property value
   */
  getValue: () => T | undefined;

  /**
   * Assigns the provided `value`.
   *
   * @param value - the generic T value
   * @returns this
   * @throws PrimitiveTypeError for invalid value
   */
  setValue: (value?: T) => this;

  /**
   * @returns `true` if the generic T value exists and has a value; `false` otherwise
   */
  hasValue: () => boolean;

  /**
   * @returns the generic T property value as a `string`
   */
  getValueAsString: () => string | undefined;

  /**
   * Assigns the provided value and coerces it to the T type.
   *
   * @param value - the `string` value of the primitive type
   * @throws PrimitiveTypeError for invalid value
   */
  setValueAsString: (value?: string) => void;

  /**
   * Encodes the provided generic T value as a `string`.
   *
   * @param value - the generic T value
   * @returns the `string` representation of T
   * @throws PrimitiveTypeError for invalid value
   */
  encodeToString: (value: T) => string;

  /**
   * Parses the provided `string` value and coerces it into the generic T value.
   *
   * @param value - the `string` representation of the generic T value
   * @returns the generic T value
   * @throws PrimitiveTypeError for invalid value
   */
  parseToPrimitive: (value: string) => T;

  /**
   * @returns the primitive data type's sibling JSON value containing the `id` and/or `extension` properties
   *
   * @see [Representations - JSON](https://hl7.org/fhir/R5/datatypes.html#representations)
   */
  toSiblingJSON: () => JSON.Value | undefined;
}

/**
 * Represents an interface for an extension, which contains an `url` that defines its meaning, and a `value`
 * that holds the associated data. Extends the `IElement` interface.
 *
 * @category Base Models
 */
export interface IExtension extends IElement {
  /**
   * @returns the `url` property value
   */
  getUrl: () => fhirUri | null;

  /**
   * Assigns the provided value to the `url` property.
   *
   * @param value - the url value
   * @returns this
   * @throws AssertionError for invalid value
   */
  setUrl: (value: fhirUri) => this;

  /**
   * @returns `true` if the `url` property exists and has a value; `false` otherwise
   */
  hasUrl: () => boolean;

  /**
   * @returns the `value` property value
   */
  getValue: () => IDataType | undefined;

  /**
   * Assigns the provided value to the `value` property.
   *
   * @param value - the `value` value
   * @returns this
   */
  setValue: (value: IDataType | undefined) => this;

  /**
   * @returns `true` if the `value` property exists and has a value; `false` otherwise
   */
  hasValue: () => boolean;
}

/**
 * Represents a coding concept with various properties including system, code, display, version, and user selection.
 * This interface provides methods to get, set, and check the existence of these properties both as primitive values
 * and as PrimitiveType elements.
 *
 * @category Base Models
 */
export interface ICoding extends IBase, IDataType {
  /**
   * @returns the `system` property value as a PrimitiveType
   */
  getSystemElement: () => UriType;

  /**
   * Assigns the provided PrimitiveType value to the `system` property.
   *
   * @param element - the `system` value
   * @returns this
   */
  setSystemElement: (element: UriType | undefined) => this;

  /**
   * @returns `true` if the `system` property exists and has a value; `false` otherwise
   */
  hasSystemElement: () => boolean;

  /**
   * @returns the `system` property value as a primitive value
   */
  getSystem: () => fhirUri | undefined;

  /**
   * Assigns the provided primitive value to the `system` property.
   *
   * @param value - the `system` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setSystem: (value: fhirUri | undefined) => this;

  /**
   * @returns `true` if the `system` property exists and has a value; `false` otherwise
   */
  hasSystem: () => boolean;

  /**
   * @returns the `version` property value as a PrimitiveType
   */
  getVersionElement: () => StringType;

  /**
   * Assigns the provided PrimitiveType value to the `version` property.
   *
   * @param element - the `version` value
   * @returns this
   */
  setVersionElement: (element: StringType | undefined) => this;

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  hasVersionElement: () => boolean;

  /**
   * @returns the `version` property value as a primitive value
   */
  getVersion: () => fhirString | undefined;

  /**
   * Assigns the provided primitive value to the `version` property.
   *
   * @param value - the `version` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setVersion: (value: fhirString | undefined) => this;

  /**
   * @returns `true` if the `version` property exists and has a value; `false` otherwise
   */
  hasVersion: () => boolean;

  /**
   * @returns the `code` property value as a PrimitiveType
   */
  getCodeElement: () => CodeType;

  /**
   * Assigns the provided PrimitiveType value to the `code` property.
   *
   * @param element - the `code` value
   * @returns this
   */
  setCodeElement: (element: CodeType | undefined) => this;

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  hasCodeElement: () => boolean;

  /**
   * @returns the `code` property value as a primitive value
   */
  getCode: () => fhirCode | undefined;

  /**
   * Assigns the provided primitive value to the `code` property.
   *
   * @param value - the `code` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setCode: (value: fhirCode | undefined) => this;

  /**
   * @returns `true` if the `code` property exists and has a value; `false` otherwise
   */
  hasCode: () => boolean;

  /**
   * @returns the `display` property value as a PrimitiveType
   */
  getDisplayElement: () => StringType;

  /**
   * Assigns the provided PrimitiveType value to the `display` property.
   *
   * @param element - the `display` value
   * @returns this
   */
  setDisplayElement: (element: StringType | undefined) => this;

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  hasDisplayElement: () => boolean;

  /**
   * @returns the `display` property value as a primitive value
   */
  getDisplay: () => fhirString | undefined;

  /**
   * Assigns the provided primitive value to the `display` property.
   *
   * @param value - the `display` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setDisplay: (value: fhirString | undefined) => this;

  /**
   * @returns `true` if the `display` property exists and has a value; `false` otherwise
   */
  hasDisplay: () => boolean;

  /**
   * @returns the `userSelected` property value as a PrimitiveType
   */
  getUserSelectedElement: () => BooleanType;

  /**
   * Assigns the provided PrimitiveType value to the `userSelected` property.
   *
   * @param element - the `userSelected` value
   * @returns this
   */
  setUserSelectedElement: (element: BooleanType | undefined) => this;

  /**
   * @returns `true` if the `userSelected` property exists and has a value; `false` otherwise
   */
  hasUserSelectedElement: () => boolean;

  /**
   * @returns the `userSelected` property value as a primitive value
   */
  getUserSelected: () => fhirBoolean | undefined;

  /**
   * Assigns the provided primitive value to the `userSelected` property.
   *
   * @param value - the `userSelected` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setUserSelected: (value: fhirBoolean | undefined) => this;

  /**
   * @returns `true` if the `userSelected` property exists and has a value; `false` otherwise
   */
  hasUserSelected: () => boolean;
}

/**
 * Represents metadata information, extending the functionality provided by the IDataType interface.
 * Designed to handle various metadata properties such as version identifiers, timestamps, URIs, profiles, security codes, and tags.
 * Offers operations for getting, setting, adding, and verifying the existence of these properties.
 *
 * @category Base Models
 */
export interface IMeta extends IBase, IDataType {
  /**
   * @returns the `versionId` property value as a PrimitiveType
   */
  getVersionIdElement: () => IdType;

  /**
   * Assigns the provided PrimitiveType value to the `versionId` property.
   *
   * @param element - the `versionId` value
   * @returns this
   */
  setVersionIdElement: (element: IdType | undefined) => this;

  /**
   * @returns `true` if the `versionId` property exists and has a value; `false` otherwise
   */
  hasVersionIdElement: () => boolean;

  /**
   * @returns the `versionId` property value as a primitive value
   */
  getVersionId: () => fhirId | undefined;

  /**
   * Assigns the provided primitive value to the `versionId` property.
   *
   * @param value - the `versionId` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setVersionId: (value: fhirId | undefined) => this;

  /**
   * @returns `true` if the `versionId` property exists and has a value; `false` otherwise
   */
  hasVersionId: () => boolean;

  /**
   * @returns the `lastUpdated` property value as a PrimitiveType
   */
  getLastUpdatedElement: () => InstantType;

  /**
   * Assigns the provided PrimitiveType value to the `lastUpdated` property.
   *
   * @param element - the `lastUpdated` value
   * @returns this
   */
  setLastUpdatedElement: (element: InstantType | undefined) => this;

  /**
   * @returns `true` if the `lastUpdated` property exists and has a value; `false` otherwise
   */
  hasLastUpdatedElement: () => boolean;

  /**
   * @returns the `lastUpdated` property value as a primitive value
   */
  getLastUpdated: () => fhirInstant | undefined;

  /**
   * Assigns the provided primitive value to the `lastUpdated` property.
   *
   * @param value - the `lastUpdated` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setLastUpdated: (value: fhirInstant | undefined) => this;

  /**
   * @returns `true` if the `lastUpdated` property exists and has a value; `false` otherwise
   */
  hasLastUpdated: () => boolean;

  /**
   * @returns the `source` property value as a PrimitiveType
   */
  getSourceElement: () => UriType;

  /**
   * Assigns the provided PrimitiveType value to the `source` property.
   *
   * @param element - the `source` value
   * @returns this
   */
  setSourceElement: (element: UriType | undefined) => this;

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  hasSourceElement: () => boolean;

  /**
   * @returns the `source` property value as a primitive value
   */
  getSource: () => fhirUri | undefined;

  /**
   * Assigns the provided primitive value to the `source` property.
   *
   * @param value - the `source` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setSource: (value: fhirUri | undefined) => this;

  /**
   * @returns `true` if the `source` property exists and has a value; `false` otherwise
   */
  hasSource: () => boolean;

  /**
   * @returns the `profile` property value as a PrimitiveType array
   */
  getProfileElement: () => CanonicalType[];

  /**
   * Assigns the provided PrimitiveType array value to the `profile` property.
   *
   * @param element - the `profile` array value
   * @returns this
   */
  setProfileElement: (element: CanonicalType[] | undefined) => this;

  /**
   * Add the provided PrimitiveType value to the `profile` array property.
   *
   * @param element - the `profile` value
   * @returns this
   */
  addProfileElement: (element: CanonicalType | undefined) => this;

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  hasProfileElement: () => boolean;

  /**
   * @returns the `profile` property value as a primitive value array
   */
  getProfile: () => fhirCanonical[];

  /**
   * Assigns the provided primitive value array to the `profile` property.
   *
   * @param value - the `profile` value array
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setProfile: (value: fhirCanonical[] | undefined) => this;

  /**
   * Add the provided primitive value to the `profile` array property.
   *
   * @param value - the `profile` value
   * @returns this
   */
  addProfile: (value: fhirCanonical | undefined) => this;

  /**
   * @returns `true` if the `profile` property exists and has a value; `false` otherwise
   */
  hasProfile: () => boolean;

  /**
   * @returns the `security` property value as a Coding array
   */
  getSecurity: () => ICoding[];

  /**
   * Assigns the provided Coding array value to the `security` property.
   *
   * @param value - the `security` array value
   * @returns this
   */
  setSecurity: (value: ICoding[] | undefined) => this;

  /**
   * Add the provided Coding value to the `security` array property.
   *
   * @param value - the `security` value
   * @returns this
   */
  addSecurity: (value: ICoding | undefined) => this;

  /**
   * @returns `true` if the `security` property exists and has a value; `false` otherwise
   */
  hasSecurity: () => boolean;

  /**
   * @returns the `tag` property value as a Coding array
   */
  getTag: () => ICoding[];

  /**
   * Assigns the provided Coding array value to the `tag` property.
   *
   * @param value - the `tag` array value
   * @returns this
   */
  setTag: (value: ICoding[] | undefined) => this;

  /**
   * Add the provided Coding value to the `tag` array property.
   *
   * @param value - the `tag` value
   * @returns this
   */
  addTag: (value: ICoding | undefined) => this;

  /**
   * @returns `true` if the `tag` property exists and has a value; `false` otherwise
   */
  hasTag: () => boolean;
}

/**
 * Interface representing a narrative type in a FHIR (Fast Healthcare Interoperability Resources) data model.
 * INarrative extends from IDataType and provides methods for accessing and modifying properties such as `status` and `div`.
 *
 * @category Base Models
 */
export interface INarrative extends IBase, IDataType {
  /**
   * @returns the `status` property value as a EnumCodeType
   */
  getStatusEnumType: () => EnumCodeType | null;

  /**
   * Assigns the provided EnumCodeType value to the `status` property.
   *
   * @param enumType - the `status` value
   * @returns this
   */
  setStatusEnumType: (enumType: EnumCodeType) => this;

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  hasStatusEnumType: () => boolean;

  /**
   * @returns the `status` property value as a PrimitiveType
   */
  getStatusElement: () => CodeType | null;

  /**
   * Assigns the provided PrimitiveType value to the `status` property.
   *
   * @param element - the `status` value
   * @returns this
   */
  setStatusElement: (element: CodeType) => this;

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  hasStatusElement: () => boolean;

  /**
   * @returns the `status` property value as a primitive value
   */
  getStatus: () => fhirCode | null;

  /**
   * Assigns the provided primitive value to the `status` property.
   *
   * @param value - the `status` value
   * @returns this
   */
  setStatus: (value: fhirCode) => this;

  /**
   * @returns `true` if the `status` property exists and has a value; `false` otherwise
   */
  hasStatus: () => boolean;

  /**
   * @returns the `div` property value as a PrimitiveType
   */
  getDivElement: () => XhtmlType | null;

  /**
   * Assigns the provided PrimitiveType value to the `div` property.
   *
   * @param element - the `div` value
   * @returns this
   */
  setDivElement: (element: XhtmlType) => this;

  /**
   * @returns `true` if the `div` property exists and has a value; `false` otherwise
   */
  hasDivElement: () => boolean;

  /**
   * @returns the `div` property value as a primitive value
   */
  getDiv: () => fhirXhtml | null;

  /**
   * Assigns the provided primitive value to the `div` property.
   *
   * @param value - the `div` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setDiv: (value: fhirXhtml) => this;

  /**
   * @returns `true` if the `div` property exists and has a value; `false` otherwise
   */
  hasDiv: () => boolean;
}

/**
 * Interface representing a FHIR resource that extends the `IBase` interface.
 * Provides methods to get, set, and check the existence of core FHIR resource properties
 * such as `id`, `meta`, `implicitRules`, and `language`.
 *
 * @category Base Models
 */
export interface IResource extends IBase {
  /**
   * @returns the FHIR resource type as defined by the FHIR specification
   */
  resourceType: () => string;

  /**
   * @returns the `id` property value as a PrimitiveType
   */
  getIdElement: () => IdType;

  /**
   * Assigns the provided PrimitiveType value to the `id` property.
   *
   * @param element - the `id` value
   * @returns this
   */
  setIdElement: (element: IdType | undefined) => this;

  /**
   * @returns `true` if the `id` property exists and has a value; `false` otherwise
   */
  hasIdElement: () => boolean;

  /**
   * @returns the `id` property value as a primitive value
   */
  getId: () => fhirId | undefined;

  /**
   * Assigns the provided value to the `meta` property.
   *
   * @param value - the `meta` value
   * @returns this
   */
  setId: (value: fhirId | undefined) => this;

  /**
   * @returns `true` if the `id` property exists and has a value; `false` otherwise
   */
  hasId: () => boolean;

  /**
   * @returns the `meta` property value as a Meta
   */
  getMeta: () => IMeta;

  /**
   * Assigns the provided value to the `meta` property.
   *
   * @param value - the `meta` value
   * @returns this
   */
  setMeta: (value: IMeta | undefined) => this;

  /**
   * @returns `true` if the `meta` property exists and has a value; `false` otherwise
   */
  hasMeta: () => boolean;

  /**
   * @returns the `implicitRules` property value as a PrimitiveType
   */
  getImplicitRulesElement: () => UriType;

  /**
   * Assigns the provided PrimitiveType value to the `implicitRules` property.
   *
   * @param element - the `implicitRules` value
   * @returns this
   */
  setImplicitRulesElement: (element: UriType | undefined) => this;

  /**
   * @returns `true` if the `implicitRules` property exists and has a value; `false` otherwise
   */
  hasImplicitRulesElement: () => boolean;

  /**
   * @returns the `implicitRules` property value as a primitive value
   */
  getImplicitRules: () => fhirUri | undefined;

  /**
   * Assigns the provided primitive value to the `implicitRules` property.
   *
   * @param value - the `implicitRules` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setImplicitRules: (value: fhirUri | undefined) => this;

  /**
   * @returns `true` if the `system` property exists and has a value; `false` otherwise
   */
  hasImplicitRules: () => boolean;

  /**
   * @returns the `language` property value as a PrimitiveType
   */
  getLanguageElement: () => CodeType;

  /**
   * Assigns the provided PrimitiveType value to the `language` property.
   *
   * @param element - the `language` value
   * @returns this
   */
  setLanguageElement: (element: CodeType | undefined) => this;

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  hasLanguageElement: () => boolean;

  /**
   * @returns the `language` property value as a primitive value
   */
  getLanguage: () => fhirCode | undefined;

  /**
   * Assigns the provided primitive value to the `language` property.
   *
   * @param value - the `language` value
   * @returns this
   * @throws PrimitiveTypeError for invalid primitive types
   */
  setLanguage: (value: fhirCode | undefined) => this;

  /**
   * @returns `true` if the `language` property exists and has a value; `false` otherwise
   */
  hasLanguage: () => boolean;
}

/**
 * Represents a domain-level resource that extends the core IResource with additional
 * properties like text, contained resources, and extensions. This interface builds upon
 * foundational FHIR interfaces (IResource, IBase, IBaseExtension, IBaseModifierExtension).
 *
 * @category Base Models
 */
export interface IDomainResource extends IResource, IBase, IBaseExtension, IBaseModifierExtension {
  /**
   * @returns the `text` property value as a Narrative
   */
  getText: () => INarrative;

  /**
   * Assigns the provided value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   */
  setText: (value: INarrative | undefined) => this;

  /**
   * Assigns the provided value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   */
  hasText: () => boolean;

  /**
   * @returns the `contained` property value as a Resource array
   */
  getContained: () => IResource[];

  /**
   * Assigns the provided Resource array value to the `contained` property.
   *
   * @param value - the `contained` array value
   * @returns this
   */
  setContained: (value: IResource[] | undefined) => this;

  /**
   * Add the provided Resource value to the `contained` array property.
   *
   * @param value - the `contained` value
   * @returns this
   */
  addContained: (value: IResource | undefined) => this;

  /**
   * @returns `true` if the `contained` property exists and has a value; `false` otherwise
   */
  hasContained: () => boolean;

  /**
   * @returns the array of `extension` values
   */
  getExtension: () => IExtension[];

  /**
   * Assigns the provided array of Extension values to the `extension` property.
   *
   * @param extension - array of Extensions
   * @returns this
   */
  setExtension: (extension: IExtension[] | undefined) => this;

  /**
   * Adds the provided Extension to the `extension` property array.
   *
   * @param extension - the Extension value to add to the `extension` property array
   * @returns this
   */
  addExtension: (extension: IExtension | undefined) => this;

  /**
   * Determines if the `extension` property exists.
   *
   * @remarks If the url is provided, determines if an Extension having
   * the provided url exists. If the url is not provided, determines
   * if the `extension` property exists and has any values.
   *
   * @param url - the url that identifies a specific Extension
   * @returns `true` if an Extension has the provided url; false otherwise
   * @throws AssertionError for invalid url
   */
  hasExtension: (url?: fhirUri) => boolean;

  /**
   * @returns the array of `modifierExtension` values
   */
  getModifierExtension: () => IExtension[];

  /**
   * Assigns the provided array of Extension values to the `modifierExtension` property.
   *
   * @param extension - array of Extensions
   * @returns this
   */
  setModifierExtension: (extension: IExtension[] | undefined) => this;

  /**
   * Adds the provided Extension to the `modifierExtension` property array.
   *
   * @param extension - the Extension value to add to the `modifierExtension` property array
   * @returns this
   */
  addModifierExtension: (extension: IExtension | undefined) => this;

  /**
   * Determines if the `modifierExtension` property exists.
   *
   * @remarks If the url is provided, determines if an Extension having
   * the provided url exists. If the url is not provided, determines
   * if the `modifierExtension` property exists and has any values.
   *
   * @param url - the url that identifies a specific Extension
   * @returns `true` if an Extension has the provided url
   * @throws AssertionError for invalid url
   */
  hasModifierExtension: (url?: fhirUri) => boolean;
}
