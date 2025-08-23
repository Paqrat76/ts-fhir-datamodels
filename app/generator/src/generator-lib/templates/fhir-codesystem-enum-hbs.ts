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
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import * as Handlebars from 'handlebars';
import { extractNameFromUrl, fixDescriptiveString, makeUpperSnakeCase } from './utils-hbs';
import { FhirPackage, GeneratedContent } from '../ts-datamodel-generator-helpers';
import { CodeSystem, CodeSystemConcept } from '../fhir-artifact-interfaces';

const classTemplate = readFileSync(resolve(__dirname, 'fhir-codesystem-enum.hbs'), 'utf8');
const classGenerator = Handlebars.compile(classTemplate);

/**
 * Generates an enumeration class for the provided CodeSystem in the context of a FHIR package.
 *
 * @param {CodeSystem} codeSystem - The CodeSystem object containing the data to generate the enum class.
 * @param {FhirPackage} fhirPackage - The FHIR package providing context and additional information for generating the class.
 * @returns {GeneratedContent} An object containing information about the generated content, including the filename, file extension, content type, and generated code.
 */
export function generateCodeSystemEnum(codeSystem: CodeSystem, fhirPackage: FhirPackage): GeneratedContent {
  const csHbs: HbsCodeSystem = getCsHbsProperties(codeSystem, fhirPackage);

  const classCode: string = classGenerator({ csHbs });

  return {
    fhirPackage: fhirPackage,
    filename: `${csHbs.name}Enum`,
    fileExtension: 'ts',
    fhirType: 'CodeSystem',
    fileContents: classCode,
  } as GeneratedContent;
}

/**
 * Represents a concept within a FHIR code system for a Handlebars template.
 * This interface captures the essential properties required to define a concept, including its
 * identifying code, name, enumeration, and metadata for display or definition purposes.
 *
 * Properties:
 * - `name`: The unique name or identifier of the concept.
 * - `enum`: The enumerated value representing the concept, typically used within the context of coding systems.
 * - `code`: A short string that uniquely identifies the concept within the code system.
 * - `url`: The URL that references the complete context or definition of the concept.
 * - `display`: (Optional) A user-friendly display name for the concept, typically used in interfaces or visualization.
 * - `definition`: (Optional) A detailed explanation or definition describing the purpose or intent of the concept.
 */
interface HbsCodeSystemConcept {
  name: string;
  enum: string;
  code: string;
  url: string;
  display: string | undefined;
  definition: string | undefined;
}

/**
 * Represents a structured code system in a FHIR context for a Handlebars template.
 *
 * This interface provides metadata and structural information about a code system,
 * including its identifier, descriptive details, versioning, and case sensitivity,
 * along with the associated list of concepts defining the code system's taxonomy or terminology.
 */
export interface HbsCodeSystem {
  name: string;
  url: string;
  description: string | undefined;
  version: string | undefined;
  caseSensitive: boolean | undefined;
  concept: HbsCodeSystemConcept[];
}

/**
 * A Map object that acts as an association between comparator enum keys and their corresponding names.
 * Used for mapping string-based keys to their respective string descriptions or identifiers.
 *
 * The keys in this map represent the names of comparator enums, while the values provide
 * corresponding human-readable or standardized representations.
 *
 * This map facilitates quick lookups and translations of comparator enum keys to associated names.
 */
const ComparatorEnumNameMap = new Map<string, string>();
ComparatorEnumNameMap.set('<', 'LESS_THAN');
ComparatorEnumNameMap.set('=', 'EQUAL_TO');
ComparatorEnumNameMap.set('>', 'GREATER_THAN');
ComparatorEnumNameMap.set('<=', 'LESS_THAN_OR_EQUAL_TO');
ComparatorEnumNameMap.set('>=', 'GREATER_THAN_OR_EQUAL_TO');
ComparatorEnumNameMap.set('!=', 'NOT_EQUAL_TO');

/**
 * Generates an HbsCodeSystem object for a Handlebars template with properties derived from a given CodeSystem and FHIR package.
 *
 * @param {CodeSystem} codeSystem - The CodeSystem object containing the source data.
 * @param {FhirPackage} fhirPackage - The FHIR package providing additional metadata such as package version.
 * @returns {HbsCodeSystem} - The transformed HbsCodeSystem object containing structured properties, such as concepts, name, URL, and metadata.
 */
export function getCsHbsProperties(codeSystem: CodeSystem, fhirPackage: FhirPackage): HbsCodeSystem {
  assert(codeSystem.url, 'CodeSystem.url is expected to exist');

  const codeSystemName = extractNameFromUrl(codeSystem.url);

  assert(
    codeSystem.concept && codeSystem.concept.length > 0,
    `${codeSystemName} does not contain a valid CodeSystem.concept`,
  );

  const flattenedHbsCodeSystemConcepts: HbsCodeSystemConcept[] = flattenHbsCodeSystemConcepts(
    codeSystem.concept,
    codeSystemName,
    codeSystem.url,
  );
  assert(
    flattenedHbsCodeSystemConcepts.length > 0,
    `${codeSystemName} does not contain any CodeSystem.concept entries`,
  );

  return {
    name: codeSystemName,
    url: codeSystem.url,
    description: fixDescriptiveString(codeSystem.description) ?? `"description not provided"`,
    version: codeSystem.version ?? fhirPackage.pkgVersion,
    caseSensitive: codeSystem.caseSensitive ?? false,
    concept: flattenedHbsCodeSystemConcepts,
  } as HbsCodeSystem;
}

/**
 * Flattens a nested structure of CodeSystemConcepts into a flat list of HbsCodeSystemConcepts.
 *
 * @param {CodeSystemConcept[]} concepts - An array of CodeSystemConcept objects, potentially including nested concepts.
 * @param {string} codeSystemName - The name of the code system to be applied to all concepts.
 * @param {string} codeSystemUrl - The URL of the code system to be applied to all concepts.
 * @returns {HbsCodeSystemConcept[]} A flat array of HbsCodeSystemConcept objects derived from the input structure.
 */
function flattenHbsCodeSystemConcepts(
  concepts: CodeSystemConcept[],
  codeSystemName: string,
  codeSystemUrl: string,
): HbsCodeSystemConcept[] {
  const returnHbsCodeSystemConcepts: HbsCodeSystemConcept[] = [];

  concepts.forEach((concept: CodeSystemConcept) => {
    const codeStr = concept.code;

    let enumStr: string;
    if (/^(<=|>=|!=|<|>|=)$/.exec(codeStr) !== null) {
      // IS A comparator
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      enumStr = ComparatorEnumNameMap.get(codeStr)!;
    } else {
      // IS NOT A comparator
      enumStr = makeUpperSnakeCase(codeStr);
      if (!/^[a-zA-Z_$]/.exec(enumStr)) {
        enumStr = `_${enumStr}`;
      }
    }

    const hbsCodeSystemConcept = {
      name: codeSystemName,
      enum: enumStr,
      code: codeStr,
      url: codeSystemUrl,
      display: fixDescriptiveString(concept.display),
      definition: fixDescriptiveString(concept.definition),
    } as HbsCodeSystemConcept;
    returnHbsCodeSystemConcepts.push(hbsCodeSystemConcept);

    if (concept.concept && concept.concept.length > 0) {
      const childHbsCodeSystemConcepts: HbsCodeSystemConcept[] = flattenHbsCodeSystemConcepts(
        concept.concept,
        codeSystemName,
        codeSystemUrl,
      );
      returnHbsCodeSystemConcepts.push(...childHbsCodeSystemConcepts);
    }
  });

  return returnHbsCodeSystemConcepts;
}
