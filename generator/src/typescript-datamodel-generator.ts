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
import os from 'node:os';
import { BasePackageLoader, FindResourceInfoOptions, LoadStatus, SafeMode } from 'fhir-package-loader';
import {
  CodeSystem,
  ElementDefinition,
  StructureDefinition,
  ValueSet,
  ValueSetComposeInclude,
} from './generator-lib/fhir-artifact-interfaces';
import {
  FhirPackage,
  FhirType,
  GeneratedContent,
  generatorPackageLoader,
  GeneratorPackageLoaderOptions,
} from './generator-lib/ts-datamodel-generator-helpers';
import { generateCodeSystemEnum } from './generator-lib/templates/fhir-codesystem-enum-hbs';
import { generateComplexType } from './generator-lib/templates/fhir-complex-datatype-hbs';
import { extractNameFromUrl, generatorLogger } from './generator-lib/utils';

const INITIALIZATION_ERROR_MSG = `This TypescriptDataModelGenerator instance must be initialized ('await tsDataModelGenerator.initialize();') before use.`;

/**
 * A class responsible for generating TypeScript data models from specified FHIR packages.
 */
export class TypescriptDataModelGenerator {
  private readonly _fhirPackage: FhirPackage;
  private _packageLoader: BasePackageLoader | undefined;
  private isInitialized = false;

  constructor(fhirPackage: FhirPackage) {
    assert(fhirPackage, 'fhirPackage is required.');

    this._fhirPackage = fhirPackage;
  }

  /**
   * Retrieves the current FHIR package instance.
   *
   * @returns {FhirPackage} The FHIR package associated with this instance.
   */
  public get fhirPackage(): FhirPackage {
    return this._fhirPackage;
  }

  /**
   * Initializes the package loader and loads the required FHIR package.
   * Ensures that the initialization process is only performed once.
   *
   * @returns {Promise<void>} A promise that resolves when the initialization is complete and the FHIR package is loaded.
   *                          Throws an error if the package cannot be loaded successfully.
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) {
      return;
    }

    const fplLogger = (level: string, message: string) => {
      console.log(`FPL ${level.toUpperCase()}: ${message}`);
    };

    const options: GeneratorPackageLoaderOptions = {
      log: fplLogger,
      safeMode: SafeMode.FREEZE,
      cacheRootPath: this._fhirPackage.pkgLoaderCacheRootPath,
    };
    this._packageLoader = await generatorPackageLoader(options);
    const status = await this._packageLoader.loadPackage(this._fhirPackage.pkgName, this._fhirPackage.pkgVersion);
    if (status !== LoadStatus.LOADED) {
      /* istanbul ignore next */
      throw new Error(
        `Failed to load FHIR package ${this._fhirPackage.pkgName}@${this._fhirPackage.pkgVersion}; (actual load status: ${status})`,
      );
    }

    this.isInitialized = true;
  }

  /**
   * Retrieves a list of non-abstract structure definitions categorized as resources (kind "resource" and
   * derivation "specialization" and "abstract" is false).
   *
   * @returns {StructureDefinition[]} An array of structure definitions representing resources.
   */
  public getResources(): StructureDefinition[] {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);
    const options: FindResourceInfoOptions = { type: ['Resource'] };
    const resources = this._packageLoader?.findResourceJSONs('*', options) as StructureDefinition[];
    return resources.filter((sd) => !sd.abstract);
  }

  /**
   * Retrieves all complex type StructureDefinitions (kind "complex-type" and derivation "specialization" and
   * "abstract" is false) from the package loader that are not abstract.
   *
   * @returns {StructureDefinition[]} An array of structure definitions representing non-abstract complex types.
   */
  public getComplexTypes(): StructureDefinition[] {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);
    // FPL 'Type': a StructureDefinition w/ kind "primitive-type", "complex-type", or "datatype" and derivation = "specialization"
    const options: FindResourceInfoOptions = { type: ['Type'] };
    const types = this._packageLoader?.findResourceJSONs('*', options) as StructureDefinition[];

    // Filter out the Extension complex-type because it is provided in @paq-ts-fhir/fhir-core and is extended in base/Extension.ts
    return types.filter(
      (sd) => sd.kind === 'complex-type' && !sd.abstract && sd.type !== 'Extension' && sd.type !== 'ElementDefinition',
    );
  }

  /**
   * Retrieves a CodeSystem resource based on the provided binding ValueSet URL.
   *
   * @remarks
   * This method attempts to resolve a CodeSystem by iterating through the `compose` section
   * of the ValueSet identified by the provided URL, if the ValueSet has one include and
   * a defined CodeSystem URL.
   *
   * @param bindingValueSetUrl - The URL of the ValueSet to extract the associated CodeSystem from.
   *                             The URL can include a version specification separated by `|`,
   *                             but only the base URL is considered.
   * @returns The CodeSystem associated with the given ValueSet or undefined if none can be resolved.
   */
  public getCodeSystemFromBindingValueSetUrl(bindingValueSetUrl: string): CodeSystem | undefined {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);
    const valueSetUrlParts = bindingValueSetUrl.split('|');
    assert(valueSetUrlParts.length > 0, 'bindingValueSetUrl must be a valid URL');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const valueSetUrl = valueSetUrlParts[0]!;
    let options: FindResourceInfoOptions = { type: ['ValueSet'] };
    const valueSet = this._packageLoader?.findResourceJSON(valueSetUrl, options) as ValueSet | undefined;
    if (valueSet?.compose?.include) {
      const composeInclude: ValueSetComposeInclude[] = valueSet.compose.include;
      if (composeInclude.length === 1) {
        const codeSystemUrl = composeInclude[0]?.system;
        if (codeSystemUrl !== undefined) {
          options = { type: ['CodeSystem'] };
          const codeSystemJson = this._packageLoader?.findResourceJSON(codeSystemUrl, options) as
            | CodeSystem
            | undefined;
          if (codeSystemJson !== undefined) {
            return codeSystemJson;
          }
        }
      }
    }
    return undefined;
  }

  /**
   * Extracts and returns the required code systems and their associated enum names
   * from a list of provided StructureDefinition objects. This method ensures that all
   * required value sets with bindings are resolved to their respective code systems.
   *
   * @param {StructureDefinition[]} structureDefinitions - An array of StructureDefinition objects.
   * These definitions are analyzed to extract value set bindings that are marked as required.
   * @returns {object} An object containing:
   *  - `codeSystems` (CodeSystem[]): A list of CodeSystem objects that are marked as complete
   *    and have concepts defined.
   *  - `codeSystemEnumMap` (Map<string, string>): A map where the key represents the path from the provided
   *    StructureDefinition and the value is the generated enum name associated with the code system.
   */
  public getRequiredCodeSystemsFromStructureDefinitions(structureDefinitions: StructureDefinition[]): {
    codeSystems: CodeSystem[];
    codeSystemEnumMap: Map<string, string>;
  } {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);
    assert(structureDefinitions.length > 0, 'structureDefinitions is required');
    const valueSetBindingUrls: Map<string, string> = new Map<string, string>();

    structureDefinitions.forEach((sd) => {
      assert(sd.snapshot?.element, 'ElementDefinitions must be defined');
      const elementDefinitions: ElementDefinition[] = sd.snapshot.element;
      elementDefinitions.forEach((ed) => {
        if (ed.binding !== undefined && ed.binding.strength === 'required' && ed.binding.valueSet !== undefined) {
          valueSetBindingUrls.set(ed.path, ed.binding.valueSet);
        }
      });
    });

    const codeSystems: CodeSystem[] = [];
    const codeSystemEnumNames: Map<string, string> = new Map<string, string>();

    valueSetBindingUrls.forEach((value: string, key: string) => {
      const codeSystem: CodeSystem | undefined = this.getCodeSystemFromBindingValueSetUrl(value);
      if (
        codeSystem !== undefined &&
        codeSystem.content === 'complete' &&
        codeSystem.concept !== undefined &&
        codeSystem.concept.length > 0
      ) {
        // CodeSystems can be used in multiple ValueSets/StructureDefinitions, so we capture only its first use
        if (codeSystems.findIndex((cs) => cs.url === codeSystem.url) === -1) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const enumName = `${extractNameFromUrl(codeSystem.url!)}Enum`;
          codeSystemEnumNames.set(key, enumName);
          codeSystems.push(codeSystem);
        }
      }
    });

    return { codeSystems, codeSystemEnumMap: codeSystemEnumNames };
  }

  /**
   * Generates code system enum classes based on the FHIR structure definitions and required code systems.
   *
   * This method processes complex types and resources to determine the necessary code systems
   * and then generates corresponding code system enum data models. Logs the number of generated enums
   * along with the associated FHIR package information.
   *
   * @returns {object} An object containing:
   *  - `generatedContent` (GeneratedContent[]): An array of generated enum data models representing code systems.
   *  - `codeSystemEnumMap` (Map<string, string>): A map where the key represents the path from the source
   *    StructureDefinition and the value is the generated enum name associated with the code system.
   */
  public generateCodeSystemEnumClasses(): {
    generatedContent: GeneratedContent[];
    codeSystemEnumMap: Map<string, string>;
  } {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);

    const generatedContent: Set<GeneratedContent> = new Set<GeneratedContent>();

    const allStructureDefinitions: StructureDefinition[] = [...this.getComplexTypes(), ...this.getResources()];
    const { codeSystems, codeSystemEnumMap } =
      this.getRequiredCodeSystemsFromStructureDefinitions(allStructureDefinitions);

    codeSystems.forEach((value: CodeSystem) => {
      const genContent: GeneratedContent = generateCodeSystemEnum(value, this._fhirPackage);
      generatedContent.add(genContent);
    });

    generatorLogger(
      'info',
      `Generated ${String(generatedContent.size)} code system enum data model(s) for FHIR ${this._fhirPackage.release} release using ${this._fhirPackage.pkgName}@${this._fhirPackage.pkgVersion}`,
    );

    this.generateTypeIndex(generatedContent, 'CodeSystem');

    return {
      generatedContent: Array.from<GeneratedContent>(generatedContent),
      codeSystemEnumMap: codeSystemEnumMap,
    };
  }

  /**
   * Generates data model classes for complex types defined in the FHIR package.
   *
   * @param {Map<string, string>} codeSystemEnumMap - A mapping of code systems to their corresponding enumerations
   *                                                  where the key represents the path from the source.
   * @returns {GeneratedContent[]} An array of generated content objects representing the data model classes for complex types.
   */
  public generateComplexTypeClasses(codeSystemEnumMap: Map<string, string>): GeneratedContent[] {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);

    const generatedContent: Set<GeneratedContent> = new Set<GeneratedContent>();

    const complexTypes: StructureDefinition[] = this.getComplexTypes();

    complexTypes.forEach((value: StructureDefinition) => {
      const genContent: GeneratedContent = generateComplexType(value, codeSystemEnumMap, this._fhirPackage);
      generatedContent.add(genContent);
    });

    generatorLogger(
      'info',
      `Generated ${String(generatedContent.size)} complex type data model(s) for FHIR ${this._fhirPackage.release} release using ${this._fhirPackage.pkgName}@${this._fhirPackage.pkgVersion}`,
    );

    this.generateTypeIndex(generatedContent, 'ComplexType');

    return Array.from<GeneratedContent>(generatedContent);
  }

  /**
   * Generates a type index file by iterating over a set of generated content,
   * creating export statements for each file, and adding the resulting index content
   * to the provided set of generated content.
   *
   * @param {Set<GeneratedContent>} generatedContent - A set of generated content objects representing files to be indexed.
   * @param {FhirType} fhirType - The FHIR type associated with the generated content.
   */
  private generateTypeIndex(generatedContent: Set<GeneratedContent>, fhirType: FhirType) {
    const indexEntries: string[] = [];
    generatedContent.forEach((value: GeneratedContent) => {
      indexEntries.push(`export * from './${value.filename}';`);
    });
    const indexContent: GeneratedContent = {
      fhirPackage: this._fhirPackage,
      filename: 'index',
      fileExtension: 'ts',
      fhirType: fhirType,
      fileContents: indexEntries.join(os.EOL).concat(os.EOL),
    };
    generatedContent.add(indexContent);
  }
}
