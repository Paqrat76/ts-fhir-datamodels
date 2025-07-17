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

import * as os from 'node:os';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import Handlebars from 'handlebars';
import { GeneratedComplexTypeContent } from '../ts-datamodel-generator-helpers';

const fileTemplate = readFileSync(resolve(__dirname, 'fhir-combined-complex-datatypes.hbs'), 'utf8');
const fileGenerator = Handlebars.compile(fileTemplate);

// **NOTE**
// Because the @paq-ts-fhir/fhir-core 'Resource' and 'DomainResource' base resources make use of the following complex
// types, the generated complex types are not actual instances of those specified in @paq-ts-fhir/fhir-core and
// cannot be used directly in any generated content. Therefore, these generated complex types will be excluded from
// the generated content and are replaced with the corresponding complex types exported from @paq-ts-fhir/fhir-core.
const CORE_COMPLEX_DATATYPES_NAME = [
  'CodeableConcept',
  'Coding',
  'Identifier',
  'Meta',
  'Narrative',
  'Period',
  'Reference',
];

export interface HbsComplexTypes {
  fhirCoreImports: string[];
  generatedImports: string[];
  parseableMap: string;
  complexTypesContent: string[];
}

/**
 * Generates a string representation of Handlebars complex types for a given parsable map content and generated content.
 *
 * @param {GeneratedComplexTypeContent} parsableMapContent - The parsable map content, including its associated imports and file contents.
 * @param {Set<GeneratedComplexTypeContent>} generatedContent - A set of generated complex type content containing imports and file contents to include in the output.
 * @returns {string} The generated string representation of the Handlebars complex types.
 */
export function getHbsComplexTypes(
  parsableMapContent: GeneratedComplexTypeContent,
  generatedContent: Set<GeneratedComplexTypeContent>,
): string {
  // Remove the generated content for the CORE_COMPLEX_DATATYPES_NAME.
  // They will be replaced with exports from @paq-ts-fhir/fhir-core.
  const filteredGeneratedContent = new Set<GeneratedComplexTypeContent>();
  generatedContent.forEach((genContent: GeneratedComplexTypeContent) => {
    if (!CORE_COMPLEX_DATATYPES_NAME.includes(genContent.filename)) {
      filteredGeneratedContent.add(genContent);
    }
  });

  // Initialize the generatedFhirCoreImports Set with the CORE_COMPLEX_DATATYPES_NAME
  const generatedFhirCoreImports = new Set<string>(CORE_COMPLEX_DATATYPES_NAME);
  filteredGeneratedContent.forEach((genContent: GeneratedComplexTypeContent) => {
    genContent.fhirCoreImports.forEach((fhirCoreImport) => {
      generatedFhirCoreImports.add(fhirCoreImport);
    });
  });
  parsableMapContent.fhirCoreImports.forEach((fhirCoreImport) => {
    generatedFhirCoreImports.add(fhirCoreImport);
  });

  const generatedContentImports = new Set<string>();
  filteredGeneratedContent.forEach((genContent: GeneratedComplexTypeContent) => {
    genContent.generatedImports.forEach((genImport) => {
      if (genImport.includes('/code-systems/') || genImport.includes('PARSABLE_RESOURCE_MAP')) {
        // Only include "code systems" imports; All complex data types are included in the single file,
        // so no imports are needed.
        generatedContentImports.add(genImport);
      }
    });
  });

  const coreComplexTypesContentComment = `// The fhir-core complex types must be exported from @paq-ts-fhir/fhir-core rather than using the generated complex types.`;
  const coreComplexTypesContentExports = `export { ${CORE_COMPLEX_DATATYPES_NAME.join(', ')} } from '@paq-ts-fhir/fhir-core';`;
  const complexTypesContent: string[] = [
    `${coreComplexTypesContentComment}${os.EOL}${coreComplexTypesContentExports}${os.EOL}`,
  ];
  const filteredComplexTypesContent = Array.from(filteredGeneratedContent).map((content) =>
    content.fileContents.trim(),
  );
  complexTypesContent.push(...filteredComplexTypesContent);

  const hbsComplexTypes = {
    fhirCoreImports: Array.from(generatedFhirCoreImports).sort(),
    generatedImports: Array.from(generatedContentImports).sort(),
    parseableMap: parsableMapContent.fileContents.trim(),
    complexTypesContent: complexTypesContent,
  } as HbsComplexTypes;

  return fileGenerator({ hbsComplexTypes });
}
