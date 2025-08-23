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
 * StructureDefinitionKindEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/structure-definition-kind
 * CodeSystem.name: StructureDefinitionKind
 * CodeSystem.description: Defines the type of structure that a definition is describing.
 * CodeSystem.version: 4.3.0
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
 * FHIR CodeSystem: StructureDefinitionKindEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem StructureDefinitionKind](http://hl7.org/fhir/structure-definition-kind)
 */
export class StructureDefinitionKindEnum implements IFhirCodeEnum {
  public static readonly PRIMITIVE_TYPE = new FhirCodeDefinition(
    'PRIMITIVE_TYPE',
    'primitive-type',
    'http://hl7.org/fhir/structure-definition-kind',
    'Primitive Data Type',
    'A primitive type that has a value and an extension. These can be used throughout complex datatype, Resource and extension definitions. Only the base specification can define primitive types.',
  );
  public static readonly COMPLEX_TYPE = new FhirCodeDefinition(
    'COMPLEX_TYPE',
    'complex-type',
    'http://hl7.org/fhir/structure-definition-kind',
    'Complex Data Type',
    'A  complex structure that defines a set of data elements that is suitable for use in \'resources\'. The base specification defines a number of complex types, and other specifications can define additional types. These structures do not have a maintained identity.',
  );
  public static readonly RESOURCE = new FhirCodeDefinition(
    'RESOURCE',
    'resource',
    'http://hl7.org/fhir/structure-definition-kind',
    'Resource',
    'A \'resource\' - a directed acyclic graph of elements that aggregrates other types into an identifiable entity. The base FHIR resources are defined by the FHIR specification itself but other \'resources\' can be defined in additional specifications (though these will not be recognised as \'resources\' by the FHIR specification (i.e. they do not get end-points etc, or act as the targets of references in FHIR defined resources - though other specificatiosn can treat them this way).',
  );
  public static readonly LOGICAL = new FhirCodeDefinition(
    'LOGICAL',
    'logical',
    'http://hl7.org/fhir/structure-definition-kind',
    'Logical',
    'A pattern or a template that is not intended to be a real resource or complex type.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      StructureDefinitionKindEnum.PRIMITIVE_TYPE,
      StructureDefinitionKindEnum.COMPLEX_TYPE,
      StructureDefinitionKindEnum.RESOURCE,
      StructureDefinitionKindEnum.LOGICAL,
      StructureDefinitionKindEnum.NULL
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
    } else if (StructureDefinitionKindEnum.PRIMITIVE_TYPE.code === code) {
      return StructureDefinitionKindEnum.PRIMITIVE_TYPE;
    } else if (StructureDefinitionKindEnum.COMPLEX_TYPE.code === code) {
      return StructureDefinitionKindEnum.COMPLEX_TYPE;
    } else if (StructureDefinitionKindEnum.RESOURCE.code === code) {
      return StructureDefinitionKindEnum.RESOURCE;
    } else if (StructureDefinitionKindEnum.LOGICAL.code === code) {
      return StructureDefinitionKindEnum.LOGICAL;
    } else if (StructureDefinitionKindEnum.NULL.code === code) {
      return StructureDefinitionKindEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown StructureDefinitionKindEnum 'code' value '${code}'`);
    }
  }
}
