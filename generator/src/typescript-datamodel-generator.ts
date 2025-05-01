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
  GeneratedContent,
  generatorPackageLoader,
  GeneratorPackageLoaderOptions,
} from './generator-lib/ts-datamodel-generator-helpers';
import { generateCodeSystemEnum } from './generator-lib/templates/fhir-codesystem-enum-hbs';

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
    const options: FindResourceInfoOptions = { type: ['Type'] };
    const types = this._packageLoader?.findResourceJSONs('*', options) as StructureDefinition[];
    return types.filter((sd) => sd.kind === 'complex-type' && !sd.abstract);
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
   * Extracts required CodeSystems from an array of StructureDefinitions based on their value set bindings.
   *
   * @param {StructureDefinition[]} structureDefinitions - An array of StructureDefinition objects to process.
   *                         It is required that the array is not empty, and each StructureDefinition should have
   *                         properly defined snapshot element definitions.
   * @returns {Map<string, CodeSystem>} A map where keys represent the ElementDefinition.path of the value set bindings
   * and values are the corresponding CodeSystem objects with complete content.
   */
  public getRequiredCodeSystemsFromStructureDefinitions(structureDefinitions: StructureDefinition[]): CodeSystem[] {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);
    assert(structureDefinitions.length > 0, 'structureDefinitions is required');
    const valueSetBindingUrls: Set<string> = new Set<string>();
    const codeSystems: CodeSystem[] = [];

    structureDefinitions.forEach((sd) => {
      assert(sd.snapshot?.element, 'ElementDefinitions must be defined');
      const elementDefinitions: ElementDefinition[] = sd.snapshot.element;
      elementDefinitions.forEach((ed) => {
        if (ed.binding !== undefined && ed.binding.strength === 'required' && ed.binding.valueSet !== undefined) {
          valueSetBindingUrls.add(ed.binding.valueSet);
        }
      });
    });

    valueSetBindingUrls.forEach((value: string) => {
      const codeSystem: CodeSystem | undefined = this.getCodeSystemFromBindingValueSetUrl(value);
      if (
        codeSystem !== undefined &&
        codeSystem.content === 'complete' &&
        codeSystem.concept !== undefined &&
        codeSystem.concept.length > 0
      ) {
        if (codeSystems.findIndex((cs) => cs.url === codeSystem.url) === -1) {
          codeSystems.push(codeSystem);
        }
      }
    });

    return codeSystems;
  }

  /**
   * Generates an array of `GeneratedContent` objects representing enum classes for code systems.
   * This method retrieves all required code systems from a set of structure definitions and generates enum classes for each code system.
   *
   * @returns {GeneratedContent[]} An array of `GeneratedContent` objects containing the generated enum classes for the specified code systems.
   */
  public generateCodeSystemEnumClasses(): GeneratedContent[] {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);

    const generatedContent: Set<GeneratedContent> = new Set<GeneratedContent>();

    const allStructureDefinitions: StructureDefinition[] = [...this.getComplexTypes(), ...this.getResources()];
    const codeSystems: CodeSystem[] = this.getRequiredCodeSystemsFromStructureDefinitions(allStructureDefinitions);

    codeSystems.forEach((value: CodeSystem) => {
      const genContent: GeneratedContent = generateCodeSystemEnum(value, this._fhirPackage);
      generatedContent.add(genContent);
    });

    return Array.from<GeneratedContent>(generatedContent);
  }
}
