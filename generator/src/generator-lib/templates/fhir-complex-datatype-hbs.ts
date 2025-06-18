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
import { camelCase, upperFirst } from 'lodash';
import * as Handlebars from 'handlebars';
import { getRequiredConstructorParams, getSdHbsProperties, HbsStructureDefinition } from './utils-hbs';
import { StructureDefinition } from '../fhir-artifact-interfaces';
import { FhirPackage, GeneratedContent } from '../ts-datamodel-generator-helpers';

const classTemplate = readFileSync(resolve(__dirname, 'fhir-complex-datatype.hbs'), 'utf8');
const constructorRequiredPartial = readFileSync(resolve(__dirname, 'partials', 'constructor-required.hbs'), 'utf8');
const privateFieldDeclarationPartial = readFileSync(
  resolve(__dirname, 'partials', 'private-field-declaration.hbs'),
  'utf8',
);
const publicBaseMethodsPartial = readFileSync(resolve(__dirname, 'partials', 'public-base-methods.hbs'), 'utf8');
const publicFieldMethodsPartial = readFileSync(resolve(__dirname, 'partials', 'public-field-methods.hbs'), 'utf8');
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
const publicStaticParseMethodPartial = readFileSync(
  resolve(__dirname, 'partials', 'public-static-parse-method.hbs'),
  'utf8',
);
const publicToJSONMethodPartial = readFileSync(resolve(__dirname, 'partials', 'public-toJSON-method.hbs'), 'utf8');
const fhirChildComponentPartial = readFileSync(resolve(__dirname, 'partials', 'fhir-child-component.hbs'), 'utf8');

Handlebars.registerHelper('requiredConstructorParams', getRequiredConstructorParams);
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
Handlebars.registerPartial('publicFieldMethodsPartial', publicFieldMethodsPartial);
Handlebars.registerPartial('publicFieldMethodsChoicePartial', publicFieldMethodsChoicePartial);
Handlebars.registerPartial('publicFieldMethodsComplexPartial', publicFieldMethodsComplexPartial);
Handlebars.registerPartial('publicFieldMethodsEnumCodePartial', publicFieldMethodsEnumCodePartial);
Handlebars.registerPartial('publicFieldMethodsPrimitivePartial', publicFieldMethodsPrimitivePartial);
Handlebars.registerPartial('publicFieldMethodsReferencePartial', publicFieldMethodsReferencePartial);
Handlebars.registerPartial('publicStaticParseMethodPartial', publicStaticParseMethodPartial);
Handlebars.registerPartial('publicToJSONMethodPartial', publicToJSONMethodPartial);
Handlebars.registerPartial('fhirChildComponentPartial', fhirChildComponentPartial);

const classGenerator = Handlebars.compile(classTemplate);

/**
 * Generates a complex type module based on the provided structure definition and associated FHIR package.
 *
 * @param {StructureDefinition} structureDef - The structure definition object that describes the FHIR resource or complex type.
 * @param {Map<string, string>} codeSystemEnumMap - A map where the key represents the path from the source
 *    StructureDefinition and the value is the generated enum name associated with the code system.
 * @param {FhirPackage} fhirPackage - The FHIR package containing the resources and dependencies needed for generation.
 * @returns {GeneratedContent} The generated content including the filename, file extension, type, and file contents.
 */
export function generateComplexType(
  structureDef: StructureDefinition,
  codeSystemEnumMap: Map<string, string>,
  fhirPackage: FhirPackage,
): GeneratedContent {
  const sdHbs: HbsStructureDefinition = getSdHbsProperties(structureDef, codeSystemEnumMap, fhirPackage);

  const classCode: string = classGenerator({ sdHbs });

  return {
    fhirPackage: fhirPackage,
    filename: sdHbs.name,
    fileExtension: 'ts',
    fhirType: 'ComplexType',
    fileContents: classCode,
  } as GeneratedContent;
}
