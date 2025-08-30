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

import { fhirCode, fhirId, fhirString, fhirUri } from '../data-types/primitive/primitive-types';
import { Meta } from '../data-types/complex/Meta';
import { Narrative } from '../data-types/complex/Narrative';
import { CodeType } from '../data-types/primitive/CodeType';
import { IdType } from '../data-types/primitive/IdType';
import { UriType } from '../data-types/primitive/UriType';
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
  // copyValues: (dest: any) => void;

  /**
   * @returns the JSON value
   */
  toJSON: () => JSON.Value | undefined;

  /**
   * @returns `true` if and only if the data model has required fields (min cardinality > 0)
   * and at least one of those required fields in the instance is empty; `false` otherwise
   */
  isRequiredFieldsEmpty: () => boolean;

  /**
   * @returns `true` if the instance is a FHIR resource; `false` otherwise
   */
  isResource: () => boolean;

  /**
   * @returns `true` if the instance is a FHIR complex or primitive datatype; `false` otherwise
   */
  isDataType: () => boolean;

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
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
   */
  hasExtension: (url?: fhirUri) => boolean;

  /**
   * Returns the Extension having the provided url.
   *
   * @param url - the url that identifies a specific Extension
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
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
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
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
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
   */
  hasModifierExtension: (url?: fhirUri) => boolean;

  /**
   * Returns the Extension having the provided url.
   *
   * @param url - the url that identifies a specific Extension
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
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
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
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
   * @throws {@link PrimitiveTypeError} for invalid value
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

  /**
   * @returns the complex or primitive data model type name (e.g., 'Period", 'StringType', `UriType', etc.)
   */
  dataTypeName: () => string;
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
   * @throws {@link PrimitiveTypeError} for invalid value
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
   * @throws {@link PrimitiveTypeError} for invalid value
   */
  setValueAsString: (value?: string) => void;

  /**
   * Encodes the provided generic T value as a `string`.
   *
   * @param value - the generic T value
   * @returns the `string` representation of T
   * @throws {@link PrimitiveTypeError} for invalid value
   */
  encodeToString: (value: T) => string;

  /**
   * Parses the provided `string` value and coerces it into the generic T value.
   *
   * @param value - the `string` representation of the generic T value
   * @returns the generic T value
   * @throws {@link PrimitiveTypeError} for invalid value
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
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid value
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
  getMeta: () => Meta;

  /**
   * Assigns the provided value to the `meta` property.
   *
   * @param value - the `meta` value
   * @returns this
   */
  setMeta: (value: Meta | undefined) => this;

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
   * @throws {@link PrimitiveTypeError} for invalid primitive types
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
   * @throws {@link PrimitiveTypeError} for invalid primitive types
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
  getText: () => Narrative;

  /**
   * Assigns the provided value to the `text` property.
   *
   * @param value - the `text` value
   * @returns this
   */
  setText: (value: Narrative | undefined) => this;

  /**
   * Assigns the provided value to the `text` property.
   *
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
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
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
   * @throws [AssertionError](https://nodejs.org/docs/latest-v22.x/api/assert.html#class-assertassertionerror) for invalid url
   */
  hasModifierExtension: (url?: fhirUri) => boolean;
}
