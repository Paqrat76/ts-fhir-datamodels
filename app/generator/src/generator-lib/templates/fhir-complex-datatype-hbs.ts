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
import { registerStructureDefinitionHandlebarsHelpers } from './handlebars-helpers';
import { getSdHbsProperties, HbsStructureDefinition } from './utils-hbs';
import { StructureDefinition } from '../fhir-artifact-interfaces';
import { FhirPackage, GeneratedComplexTypeContent } from '../ts-datamodel-generator-helpers';

registerStructureDefinitionHandlebarsHelpers();
const classTemplate = readFileSync(resolve(__dirname, 'fhir-complex-datatype.hbs'), 'utf8');
const classGenerator = Handlebars.compile(classTemplate);

// noinspection JSValidateJSDoc
/**
 * Generates a complex type module based on the provided structure definition and associated FHIR package.
 *
 * @param {StructureDefinition} structureDef - The structure definition object that describes the FHIR resource or complex type.
 * @param {ReadonlyMap<string, string>} codeSystemEnumMap - A map where the key represents the path from the source
 *    StructureDefinition and the value is the generated enum name associated with the code system.
 * @param {FhirPackage} fhirPackage - The FHIR package containing the resources and dependencies needed for generation.
 * @returns {GeneratedComplexTypeContent} The generated content including the filename, file extension, type, file contents, and imports.
 */
export function generateComplexType(
  structureDef: StructureDefinition,
  codeSystemEnumMap: ReadonlyMap<string, string>,
  fhirPackage: FhirPackage,
): GeneratedComplexTypeContent {
  const sdHbs: HbsStructureDefinition = getSdHbsProperties(structureDef, codeSystemEnumMap, fhirPackage);

  const classCode: string = classGenerator({ sdHbs });

  return {
    fhirPackage: fhirPackage,
    filename: sdHbs.name,
    fileExtension: 'ts',
    fhirType: 'ComplexType',
    fileContents: classCode,
    fhirCoreImports: new Set<string>(sdHbs.fhirCoreImports),
    generatedImports: new Set<string>(sdHbs.generatedImports),
  } as GeneratedComplexTypeContent;
}
