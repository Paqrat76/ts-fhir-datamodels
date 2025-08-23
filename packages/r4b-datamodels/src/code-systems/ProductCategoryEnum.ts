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
 * ProductCategoryEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/product-category
 * CodeSystem.name: ProductCategory
 * CodeSystem.description: Biologically Derived Product Category.
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
 * FHIR CodeSystem: ProductCategoryEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ProductCategory](http://hl7.org/fhir/product-category)
 */
export class ProductCategoryEnum implements IFhirCodeEnum {
  public static readonly ORGAN = new FhirCodeDefinition(
    'ORGAN',
    'organ',
    'http://hl7.org/fhir/product-category',
    'Organ',
    'A collection of tissues joined in a structural unit to serve a common function.',
  );
  public static readonly TISSUE = new FhirCodeDefinition(
    'TISSUE',
    'tissue',
    'http://hl7.org/fhir/product-category',
    'Tissue',
    'An ensemble of similar cells and their extracellular matrix from the same origin that together carry out a specific function.',
  );
  public static readonly FLUID = new FhirCodeDefinition(
    'FLUID',
    'fluid',
    'http://hl7.org/fhir/product-category',
    'Fluid',
    'Body fluid.',
  );
  public static readonly CELLS = new FhirCodeDefinition(
    'CELLS',
    'cells',
    'http://hl7.org/fhir/product-category',
    'Cells',
    'Collection of cells.',
  );
  public static readonly BIOLOGICAL_AGENT = new FhirCodeDefinition(
    'BIOLOGICAL_AGENT',
    'biologicalAgent',
    'http://hl7.org/fhir/product-category',
    'BiologicalAgent',
    'Biological agent of unspecified type.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ProductCategoryEnum.ORGAN,
      ProductCategoryEnum.TISSUE,
      ProductCategoryEnum.FLUID,
      ProductCategoryEnum.CELLS,
      ProductCategoryEnum.BIOLOGICAL_AGENT,
      ProductCategoryEnum.NULL
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
    } else if (ProductCategoryEnum.ORGAN.code === code) {
      return ProductCategoryEnum.ORGAN;
    } else if (ProductCategoryEnum.TISSUE.code === code) {
      return ProductCategoryEnum.TISSUE;
    } else if (ProductCategoryEnum.FLUID.code === code) {
      return ProductCategoryEnum.FLUID;
    } else if (ProductCategoryEnum.CELLS.code === code) {
      return ProductCategoryEnum.CELLS;
    } else if (ProductCategoryEnum.BIOLOGICAL_AGENT.code === code) {
      return ProductCategoryEnum.BIOLOGICAL_AGENT;
    } else if (ProductCategoryEnum.NULL.code === code) {
      return ProductCategoryEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ProductCategoryEnum 'code' value '${code}'`);
    }
  }
}
