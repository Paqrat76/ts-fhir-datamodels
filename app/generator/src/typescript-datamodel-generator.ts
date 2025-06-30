// noinspection JSValidateJSDoc

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
import { kebabCase } from 'lodash';
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
  generateLicenseContent,
  generateModuleContent,
  generatorLogger,
  generatorPackageLoader,
  GeneratorPackageLoaderOptions,
} from './generator-lib/ts-datamodel-generator-helpers';
import { generateCodeSystemEnum } from './generator-lib/templates/fhir-codesystem-enum-hbs';
import { generateComplexType } from './generator-lib/templates/fhir-complex-datatype-hbs';
import { generateResource } from './generator-lib/templates/fhir-resource-hbs';
import { extractNameFromUrl } from './generator-lib/templates/utils-hbs';

const INITIALIZATION_ERROR_MSG = `This TypescriptDataModelGenerator instance must be initialized ('await tsDataModelGenerator.initialize();') before use.`;

/**
 * A class responsible for generating TypeScript data models from specified FHIR packages.
 */
export class TypescriptDataModelGenerator {
  private readonly _fhirPackage: FhirPackage;
  private readonly _isDebug: boolean;
  private _packageLoader: BasePackageLoader | undefined;
  private isInitialized = false;

  private tsGenLogger = (level: string, message: string) => {
    console.log(`TS Generator ${level.toUpperCase()}: ${message}`);
  };

  constructor(fhirPackage: FhirPackage, debug = false) {
    assert(fhirPackage, 'fhirPackage is required.');

    this._fhirPackage = fhirPackage;
    this._isDebug = debug;
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
    return types.filter((sd) => sd.kind === 'complex-type' && !sd.abstract && sd.type !== 'Extension');
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
    } else if (this._isDebug) {
      this.tsGenLogger('warn', `ValueSet ${valueSetUrl} does not exist or have a 'compose' element.`);
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
    codeSystemEnumMap: ReadonlyMap<string, string>;
  } {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);
    assert(structureDefinitions.length > 0, 'structureDefinitions is required');
    const valueSetBindingUrls: Map<string, string> = new Map<string, string>();

    structureDefinitions.forEach((sd) => {
      assert(sd.snapshot?.element, 'ElementDefinitions must be defined');
      const elementDefinitions: ElementDefinition[] = sd.snapshot.element;
      elementDefinitions.forEach((ed) => {
        if (
          ed.type !== undefined &&
          ed.type.length === 1 &&
          ed.type[0]?.code === 'code' &&
          ed.binding !== undefined &&
          ed.binding.strength === 'required' &&
          ed.binding.valueSet !== undefined
        ) {
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
          codeSystems.push(codeSystem);
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const enumName = `${extractNameFromUrl(codeSystem.url!)}Enum`;
        codeSystemEnumNames.set(key, enumName);
      }
    });

    const readonlyEnumNames: ReadonlyMap<string, string> = new Map<string, string>(codeSystemEnumNames);

    return { codeSystems, codeSystemEnumMap: readonlyEnumNames };
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
    codeSystemEnumMap: ReadonlyMap<string, string>;
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
      `Generated ${String(generatedContent.size)} code system enum data models for FHIR ${this._fhirPackage.release} release using ${this._fhirPackage.pkgName}@${this._fhirPackage.pkgVersion}`,
    );

    const indexContent: GeneratedContent = this.generateTypeIndex(generatedContent, 'CodeSystem');
    generatedContent.add(indexContent);

    return {
      generatedContent: Array.from<GeneratedContent>(generatedContent),
      codeSystemEnumMap: codeSystemEnumMap,
    };
  }

  /**
   * Generates data model classes for complex types defined in the FHIR package.
   *
   * @param {ReadonlyMap<string, string>} codeSystemEnumMap - A mapping of code systems to their corresponding enumerations
   *                                                  where the key represents the path from the source.
   * @returns {GeneratedContent[]} An array of generated content objects representing the data model classes for complex types.
   */
  public generateComplexTypeClasses(codeSystemEnumMap: ReadonlyMap<string, string>): GeneratedContent[] {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);

    const generatedContent: Set<GeneratedContent> = new Set<GeneratedContent>();

    const complexTypes: StructureDefinition[] = this.getComplexTypes();
    complexTypes.forEach((value: StructureDefinition) => {
      const genContent: GeneratedContent = generateComplexType(value, codeSystemEnumMap, this._fhirPackage);
      generatedContent.add(genContent);
    });

    generatorLogger(
      'info',
      `Generated ${String(generatedContent.size)} complex type data models for FHIR ${this._fhirPackage.release} release using ${this._fhirPackage.pkgName}@${this._fhirPackage.pkgVersion}`,
    );

    const parsableMapContent: GeneratedContent = this.generateParsableMap(generatedContent, 'ComplexType');
    generatedContent.add(parsableMapContent);

    const indexContent: GeneratedContent = this.generateTypeIndex(generatedContent, 'ComplexType');
    generatedContent.add(indexContent);

    return Array.from<GeneratedContent>(generatedContent);
  }

  /**
   * Generates data model classes for resources defined in the FHIR package.
   *
   * @param {ReadonlyMap<string, string>} codeSystemEnumMap - A mapping of code systems to their corresponding enumerations
   *                                                  where the key represents the path from the source.
   * @returns {GeneratedContent[]} An array of generated content objects representing the data model classes for resources.
   */
  public generateResourceClasses(codeSystemEnumMap: ReadonlyMap<string, string>): GeneratedContent[] {
    assert(this.isInitialized, INITIALIZATION_ERROR_MSG);

    const generatedContent: Set<GeneratedContent> = new Set<GeneratedContent>();

    const resources: StructureDefinition[] = this.getResources();
    resources.forEach((value: StructureDefinition) => {
      const genContent: GeneratedContent = generateResource(value, codeSystemEnumMap, this._fhirPackage);
      generatedContent.add(genContent);
    });

    generatorLogger(
      'info',
      `Generated ${String(generatedContent.size)} resource data models for FHIR ${this._fhirPackage.release} release using ${this._fhirPackage.pkgName}@${this._fhirPackage.pkgVersion}`,
    );

    const resourceTypesContent: GeneratedContent = this.generateResourceTypes(generatedContent);
    const parsableMapContent: GeneratedContent = this.generateParsableMap(generatedContent, 'Resource');
    generatedContent.add(resourceTypesContent);
    generatedContent.add(parsableMapContent);

    const indexContent: GeneratedContent = this.generateTypeIndex(generatedContent, 'Resource');
    generatedContent.add(indexContent);

    return Array.from<GeneratedContent>(generatedContent);
  }

  /**
   * Generates resource types based on the provided set of generated content.
   *
   * @param {Set<GeneratedContent>} generatedContent - A set of `GeneratedContent` objects containing details about the generated resources.
   * @returns {GeneratedContent} The generated content object containing the resource types content
   */
  private generateResourceTypes(generatedContent: Set<GeneratedContent>): GeneratedContent {
    const fileName = 'resource-types';

    const headerLines: string[] = [];
    headerLines.push(`/**`);
    headerLines.push(` * FHIR resource types`);
    headerLines.push(` *`);
    headerLines.push(` * @remarks`);
    headerLines.push(` * All defined FHIR resources that ultimately extend from Resource.`);
    headerLines.push(` *`);
    headerLines.push(` * @category Type Guards/Assertions`);
    headerLines.push(` */`);

    const contentLines: string[] = [`  'Resource',`];
    generatedContent.forEach((genContent: GeneratedContent) => {
      contentLines.push(`  '${genContent.filename}',`);
    });
    contentLines.sort();
    contentLines.unshift(`export const RESOURCE_TYPES = [`);
    contentLines.push(`] as const;`);

    const fileLines: string[] = [
      ...generateLicenseContent(),
      '',
      ...generateModuleContent(`${fileName}.ts`),
      '',
      ...headerLines,
      ...contentLines,
    ];

    return {
      fhirPackage: this._fhirPackage,
      filename: fileName,
      fileExtension: 'ts',
      fhirType: 'Resource',
      fileContents: fileLines.join(os.EOL).concat(os.EOL),
    } as GeneratedContent;
  }

  /**
   * Generates a parsable map for FHIR resources or complex types.
   *
   * @param {Set<GeneratedContent>} generatedContent - A set of generated content objects to be processed and added to the parsable map.
   * @param {FhirType} fhirType - The type of FHIR element being parsed, either 'ComplexType' or 'Resource'.
   * @returns {GeneratedContent} The generated content containing the file details and the constructed map.
   */
  private generateParsableMap(generatedContent: Set<GeneratedContent>, fhirType: FhirType): GeneratedContent {
    assert(
      fhirType === 'ComplexType' || fhirType === 'Resource',
      'fhirType must be either "ComplexType" or "Resource".',
    );

    let mapName: string;
    let parsableType: string;
    let parsableTypeName: string;
    let parsableModelType: string;
    let importParsable: string;
    if (fhirType === 'ComplexType') {
      mapName = 'PARSABLE_DATATYPE_MAP';
      parsableType = `ParsableDataType<DataType>`;
      parsableTypeName = 'ParsableDataType';
      parsableModelType = 'DataType';
      importParsable = '@paq-ts-fhir/fhir-core';
    } else {
      mapName = 'PARSABLE_RESOURCE_MAP';
      parsableType = `ParsableResource<Resource>`;
      parsableTypeName = 'ParsableResource';
      parsableModelType = 'Resource';
      importParsable = '../base';
    }
    const fileName = kebabCase(mapName);

    const headerLines: string[] = [];
    headerLines.push(`/**`);
    headerLines.push(` * ${mapName}`);
    headerLines.push(` *`);
    headerLines.push(` * @remarks`);
    headerLines.push(
      ` * Map of all parsable ${parsableModelType}s where the key is the name of the ${parsableModelType} and the value is its ${parsableType} class.`,
    );
    headerLines.push(` *`);
    headerLines.push(` * @category Utilities: FHIR Parsers`);
    headerLines.push(` */`);

    const imports: string[] = [];
    imports.push(`import { ${parsableModelType}, ${parsableTypeName} } from '${importParsable}';`);

    const mapEntries: string[] = [`export const ${mapName} = new Map<string, ${parsableType}>();`];

    generatedContent.forEach((genContent: GeneratedContent) => {
      imports.push(`import { ${genContent.filename} } from './${genContent.filename}';`);
      mapEntries.push(`${mapName}.set('${genContent.filename}', ${genContent.filename});`);
    });

    const fileLines: string[] = [
      ...generateLicenseContent(),
      '',
      ...generateModuleContent(`${fileName}.ts`),
      '',
      ...imports,
      '',
      ...headerLines,
      ...mapEntries,
    ];

    return {
      fhirPackage: this._fhirPackage,
      filename: fileName,
      fileExtension: 'ts',
      fhirType: fhirType,
      fileContents: fileLines.join(os.EOL).concat(os.EOL),
    } as GeneratedContent;
  }

  /**
   * Generates an index file for a specific FHIR type by creating export statements
   * for all generated content files related to the specified type.
   *
   * @param {Set<GeneratedContent>} generatedContent - A set of generated content files that should be included in the index.
   * @param {FhirType} fhirType - The FHIR type for which the index file is being generated.
   * @returns {GeneratedContent} The generated index file content
   */
  private generateTypeIndex(generatedContent: Set<GeneratedContent>, fhirType: FhirType): GeneratedContent {
    const fileName = 'index';

    const indexEntries: string[] = [];
    generatedContent.forEach((genContent: GeneratedContent) => {
      indexEntries.push(`export * from './${genContent.filename}';`);
    });

    const fileLines: string[] = [
      ...generateLicenseContent(),
      '',
      ...generateModuleContent(`${fileName}.ts`),
      '',
      ...indexEntries.sort(),
    ];

    return {
      fhirPackage: this._fhirPackage,
      filename: fileName,
      fileExtension: 'ts',
      fhirType: fhirType,
      fileContents: fileLines.join(os.EOL).concat(os.EOL),
    } as GeneratedContent;
  }
}
