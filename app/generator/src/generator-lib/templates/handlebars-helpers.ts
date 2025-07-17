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

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import Handlebars from 'handlebars';
import { camelCase, upperFirst } from 'lodash';
import {
  getCastInterface,
  getComplexTypeImplements,
  getFieldDataType,
  getRequiredConstructorParams,
  getStaticParseKeywords,
} from './utils-hbs';

/**
 * Registers custom Handlebars helpers and partials for templating purposes. This method integrates various
 * helper functions and partial templates to facilitate the rendering process using Handlebars. These helpers
 * and partials are specifically used when processing templates for FHIR StructureDefinitions.
 */
export function registerStructureDefinitionHandlebarsHelpers() {
  const constructorRequiredPartial = readFileSync(resolve(__dirname, 'partials', 'constructor-required.hbs'), 'utf8');
  const privateFieldDeclarationPartial = readFileSync(
    resolve(__dirname, 'partials', 'private-field-declaration.hbs'),
    'utf8',
  );
  const publicBaseMethodsPartial = readFileSync(resolve(__dirname, 'partials', 'public-base-methods.hbs'), 'utf8');
  const publicExtensionMethodsChoicePartial = readFileSync(
    resolve(__dirname, 'partials', 'public-extension-methods-choice.hbs'),
    'utf8',
  );
  const publicFieldMethodsPartial = readFileSync(resolve(__dirname, 'partials', 'public-field-methods.hbs'), 'utf8');
  const publicFieldMethodsBackbonePartial = readFileSync(
    resolve(__dirname, 'partials', 'public-field-methods-backbone.hbs'),
    'utf8',
  );
  const publicFieldMethodsChoicePartial = readFileSync(
    resolve(__dirname, 'partials', 'public-field-methods-choice.hbs'),
    'utf8',
  );
  const publicFieldMethodsComplexPartial = readFileSync(
    resolve(__dirname, 'partials', 'public-field-methods-complex.hbs'),
    'utf8',
  );
  const publicFieldMethodsEnumCodePartial = readFileSync(
    resolve(__dirname, 'partials', 'public-field-methods-enumcode.hbs'),
    'utf8',
  );
  const publicFieldMethodsPrimitivePartial = readFileSync(
    resolve(__dirname, 'partials', 'public-field-methods-primitive.hbs'),
    'utf8',
  );
  const publicFieldMethodsReferencePartial = readFileSync(
    resolve(__dirname, 'partials', 'public-field-methods-reference.hbs'),
    'utf8',
  );
  const publicFieldMethodsResourcePartial = readFileSync(
    resolve(__dirname, 'partials', 'public-field-methods-resource.hbs'),
    'utf8',
  );

  const publicStaticParseMethodPartial = readFileSync(
    resolve(__dirname, 'partials', 'public-static-parse-method.hbs'),
    'utf8',
  );
  const publicToJSONMethodPartial = readFileSync(resolve(__dirname, 'partials', 'public-toJSON-method.hbs'), 'utf8');
  const fhirChildComponentPartial = readFileSync(resolve(__dirname, 'partials', 'fhir-child-component.hbs'), 'utf8');

  Handlebars.registerHelper('requiredConstructorParams', getRequiredConstructorParams);
  Handlebars.registerHelper('complexTypeImplements', getComplexTypeImplements);
  Handlebars.registerHelper('fieldDataType', getFieldDataType);
  Handlebars.registerHelper('staticParseKeywords', getStaticParseKeywords);
  Handlebars.registerHelper('castInterface', getCastInterface);
  Handlebars.registerHelper('camelCase', function (source: string): string {
    return camelCase(source);
  });
  Handlebars.registerHelper('upperFirst', function (source: string): string {
    return upperFirst(source);
  });
  Handlebars.registerHelper('upperCamelCase', function (source: string): string {
    return upperFirst(camelCase(source));
  });

  Handlebars.registerPartial('constructorRequiredPartial', constructorRequiredPartial);
  Handlebars.registerPartial('privateFieldDeclarationPartial', privateFieldDeclarationPartial);
  Handlebars.registerPartial('publicBaseMethodsPartial', publicBaseMethodsPartial);
  Handlebars.registerPartial('publicExtensionMethodsChoicePartial', publicExtensionMethodsChoicePartial);
  Handlebars.registerPartial('publicFieldMethodsPartial', publicFieldMethodsPartial);
  Handlebars.registerPartial('publicFieldMethodsBackbonePartial', publicFieldMethodsBackbonePartial);
  Handlebars.registerPartial('publicFieldMethodsChoicePartial', publicFieldMethodsChoicePartial);
  Handlebars.registerPartial('publicFieldMethodsComplexPartial', publicFieldMethodsComplexPartial);
  Handlebars.registerPartial('publicFieldMethodsEnumCodePartial', publicFieldMethodsEnumCodePartial);
  Handlebars.registerPartial('publicFieldMethodsPrimitivePartial', publicFieldMethodsPrimitivePartial);
  Handlebars.registerPartial('publicFieldMethodsReferencePartial', publicFieldMethodsReferencePartial);
  Handlebars.registerPartial('publicFieldMethodsResourcePartial', publicFieldMethodsResourcePartial);
  Handlebars.registerPartial('publicStaticParseMethodPartial', publicStaticParseMethodPartial);
  Handlebars.registerPartial('publicToJSONMethodPartial', publicToJSONMethodPartial);
  Handlebars.registerPartial('fhirChildComponentPartial', fhirChildComponentPartial);
}
