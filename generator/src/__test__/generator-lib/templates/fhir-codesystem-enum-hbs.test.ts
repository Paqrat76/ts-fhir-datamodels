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

import { resolve } from 'node:path';
import { BasePackageLoader, FindResourceInfoOptions } from 'fhir-package-loader';
import { FhirPackage, GeneratedContent } from '../../../generator-lib/ts-datamodel-generator-helpers';
import { CodeSystem } from '../../../generator-lib/fhir-artifact-interfaces';
import { generateCodeSystemEnum } from '../../../generator-lib/templates/fhir-codesystem-enum-hbs';
import { getGeneratorPackageLoader } from '../../test-utils';

describe('src/generator-lib/templates/fhir-codesystem-enum-hbs', () => {
  const testFhirCacheRoot = resolve(__dirname, '../..', 'test-cache');

  let testFhirPackage: FhirPackage;
  let packageLoader: BasePackageLoader;

  beforeAll(async () => {
    testFhirPackage = {
      release: 'R4',
      pkgName: 'test.fhir.r4',
      pkgVersion: '4.0.1',
      pkgLoaderCacheRootPath: testFhirCacheRoot,
    };
    packageLoader = await getGeneratorPackageLoader(testFhirPackage);
  });

  describe('generateCodeSystemEnums', () => {
    it('should generate code system enum for CodeSystem-FHIR-version', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const fhirVersionCodeSystem = packageLoader.findResourceJSON('FHIR-version', options) as CodeSystem;
      const generatedContent: GeneratedContent = generateCodeSystemEnum(fhirVersionCodeSystem, testFhirPackage);
      expect(generatedContent.fhirPackage).toEqual(testFhirPackage);
      expect(generatedContent.filename).toStrictEqual('FhirVersionEnum');
      expect(generatedContent.fileExtension).toStrictEqual('ts');
      expect(generatedContent.fhirType).toStrictEqual('CodeSystem');

      const fileContents: string = generatedContent.fileContents;
      expect(fileContents).toBeDefined();
      expect(fileContents).toEqual(expect.stringContaining('* FhirVersionEnum Module'));
      expect(fileContents).toEqual(expect.stringContaining('* CodeSystem.url: http://hl7.org/fhir/FHIR-version'));
      expect(fileContents).toEqual(expect.stringContaining('* CodeSystem.name: FhirVersion'));
      expect(fileContents).toEqual(expect.stringContaining('* CodeSystem.description: All published FHIR Versions.'));
      expect(fileContents).toEqual(expect.stringContaining('* CodeSystem.version: 4.0.1'));
      expect(fileContents).toEqual(expect.stringContaining('* CodeSystem.caseSensitive: true'));
      expect(fileContents).toEqual(
        expect.stringContaining(
          'public static readonly _0_01 = new FhirCodeDefinition(\n' +
            "    '_0_01',\n" +
            "    '0.01',\n" +
            "    'http://hl7.org/fhir/FHIR-version',\n" +
            "    '0.01',\n" +
            "    'Oldest archived version of FHIR.',\n" +
            '  );',
        ),
      );
      expect(fileContents).toEqual(expect.stringContaining('public static readonly _1_0_2 = new FhirCodeDefinition'));
      expect(fileContents).toEqual(expect.stringContaining('public static readonly _3_0_1 = new FhirCodeDefinition('));
      expect(fileContents).toEqual(expect.stringContaining('public static readonly _4_0_0 = new FhirCodeDefinition('));
      expect(fileContents).toEqual(expect.stringContaining('public static readonly _4_0_1 = new FhirCodeDefinition('));
      expect(fileContents).toEqual(
        expect.stringContaining("public static readonly NULL = new FhirCodeDefinition('NULL', `null`);"),
      );
      expect(fileContents).toEqual(
        expect.stringContaining(
          'values(): IFhirCodeDefinition[] {\n' +
            '    return [\n' +
            '      FhirVersionEnum._0_01,\n' +
            '      FhirVersionEnum._0_05,\n' +
            '      FhirVersionEnum._0_06,\n' +
            '      FhirVersionEnum._0_11,\n' +
            '      FhirVersionEnum._0_0_80,\n' +
            '      FhirVersionEnum._0_0_81,\n' +
            '      FhirVersionEnum._0_0_82,\n' +
            '      FhirVersionEnum._0_4_0,\n' +
            '      FhirVersionEnum._0_5_0,\n' +
            '      FhirVersionEnum._1_0_0,\n' +
            '      FhirVersionEnum._1_0_1,\n' +
            '      FhirVersionEnum._1_0_2,\n' +
            '      FhirVersionEnum._1_1_0,\n' +
            '      FhirVersionEnum._1_4_0,\n' +
            '      FhirVersionEnum._1_6_0,\n' +
            '      FhirVersionEnum._1_8_0,\n' +
            '      FhirVersionEnum._3_0_0,\n' +
            '      FhirVersionEnum._3_0_1,\n' +
            '      FhirVersionEnum._3_3_0,\n' +
            '      FhirVersionEnum._3_5_0,\n' +
            '      FhirVersionEnum._4_0_0,\n' +
            '      FhirVersionEnum._4_0_1,\n' +
            '      FhirVersionEnum.NULL\n' +
            '    ];\n' +
            '  }',
        ),
      );
      expect(fileContents).toEqual(
        expect.stringContaining(
          'fromCode(code: fhirCode | undefined): IFhirCodeDefinition {\n' +
            '    if (code === undefined) {\n' +
            "      throw new InvalidCodeError(`The provided 'code' value is undefined`);\n" +
            '    } else if (FhirVersionEnum._0_01.code === code) {\n' +
            '      return FhirVersionEnum._0_01;\n' +
            '    } else if (FhirVersionEnum._0_05.code === code) {\n' +
            '      return FhirVersionEnum._0_05;\n' +
            '    } else if (FhirVersionEnum._0_06.code === code) {\n' +
            '      return FhirVersionEnum._0_06;\n' +
            '    } else if (FhirVersionEnum._0_11.code === code) {\n' +
            '      return FhirVersionEnum._0_11;\n' +
            '    } else if (FhirVersionEnum._0_0_80.code === code) {\n' +
            '      return FhirVersionEnum._0_0_80;\n' +
            '    } else if (FhirVersionEnum._0_0_81.code === code) {\n' +
            '      return FhirVersionEnum._0_0_81;\n' +
            '    } else if (FhirVersionEnum._0_0_82.code === code) {\n' +
            '      return FhirVersionEnum._0_0_82;\n' +
            '    } else if (FhirVersionEnum._0_4_0.code === code) {\n' +
            '      return FhirVersionEnum._0_4_0;\n' +
            '    } else if (FhirVersionEnum._0_5_0.code === code) {\n' +
            '      return FhirVersionEnum._0_5_0;\n' +
            '    } else if (FhirVersionEnum._1_0_0.code === code) {\n' +
            '      return FhirVersionEnum._1_0_0;\n' +
            '    } else if (FhirVersionEnum._1_0_1.code === code) {\n' +
            '      return FhirVersionEnum._1_0_1;\n' +
            '    } else if (FhirVersionEnum._1_0_2.code === code) {\n' +
            '      return FhirVersionEnum._1_0_2;\n' +
            '    } else if (FhirVersionEnum._1_1_0.code === code) {\n' +
            '      return FhirVersionEnum._1_1_0;\n' +
            '    } else if (FhirVersionEnum._1_4_0.code === code) {\n' +
            '      return FhirVersionEnum._1_4_0;\n' +
            '    } else if (FhirVersionEnum._1_6_0.code === code) {\n' +
            '      return FhirVersionEnum._1_6_0;\n' +
            '    } else if (FhirVersionEnum._1_8_0.code === code) {\n' +
            '      return FhirVersionEnum._1_8_0;\n' +
            '    } else if (FhirVersionEnum._3_0_0.code === code) {\n' +
            '      return FhirVersionEnum._3_0_0;\n' +
            '    } else if (FhirVersionEnum._3_0_1.code === code) {\n' +
            '      return FhirVersionEnum._3_0_1;\n' +
            '    } else if (FhirVersionEnum._3_3_0.code === code) {\n' +
            '      return FhirVersionEnum._3_3_0;\n' +
            '    } else if (FhirVersionEnum._3_5_0.code === code) {\n' +
            '      return FhirVersionEnum._3_5_0;\n' +
            '    } else if (FhirVersionEnum._4_0_0.code === code) {\n' +
            '      return FhirVersionEnum._4_0_0;\n' +
            '    } else if (FhirVersionEnum._4_0_1.code === code) {\n' +
            '      return FhirVersionEnum._4_0_1;\n' +
            '    } else if (FhirVersionEnum.NULL.code === code) {\n' +
            '      return FhirVersionEnum.NULL;\n' +
            '    } else {\n' +
            "      throw new InvalidCodeError(`Unknown FhirVersionEnum 'code' value '${String(code)}'`);\n" +
            '    }\n' +
            '  }',
        ),
      );
    });

    it('should generate code system enum for CodeSystem-quantity-comparator', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const quantityComparatorCodeSystem = packageLoader.findResourceJSON('quantity-comparator', options) as CodeSystem;
      const generatedContent: GeneratedContent = generateCodeSystemEnum(quantityComparatorCodeSystem, testFhirPackage);
      expect(generatedContent.fhirPackage).toEqual(testFhirPackage);
      expect(generatedContent.filename).toStrictEqual('QuantityComparatorEnum');
      expect(generatedContent.fileExtension).toStrictEqual('ts');
      expect(generatedContent.fhirType).toStrictEqual('CodeSystem');

      const fileContents: string = generatedContent.fileContents;
      expect(fileContents).toBeDefined();
      expect(fileContents).toEqual(expect.stringContaining('* QuantityComparatorEnum Module'));
      expect(fileContents).toEqual(
        expect.stringContaining('* CodeSystem.url: http://hl7.org/fhir/quantity-comparator'),
      );
      expect(fileContents).toEqual(expect.stringContaining('* CodeSystem.name: QuantityComparator'));
      expect(fileContents).toEqual(
        expect.stringContaining('* CodeSystem.description: How the Quantity should be understood and represented.'),
      );
      expect(fileContents).toEqual(expect.stringContaining('* CodeSystem.version: 4.0.1'));
      expect(fileContents).toEqual(expect.stringContaining('* CodeSystem.caseSensitive: true'));
      expect(fileContents).toEqual(
        expect.stringContaining(
          'public static readonly GREATER_THAN_OR_EQUAL_TO = new FhirCodeDefinition(\n' +
            "    'GREATER_THAN_OR_EQUAL_TO',\n" +
            "    '>=',\n" +
            "    'http://hl7.org/fhir/quantity-comparator',\n" +
            "    'Greater or Equal to',\n" +
            "    'The actual value is greater than or equal to the given value.',\n" +
            '  );',
        ),
      );
      expect(fileContents).toEqual(
        expect.stringContaining('public static readonly LESS_THAN = new FhirCodeDefinition'),
      );
      expect(fileContents).toEqual(
        expect.stringContaining('public static readonly LESS_THAN_OR_EQUAL_TO = new FhirCodeDefinition('),
      );
      expect(fileContents).toEqual(
        expect.stringContaining('public static readonly GREATER_THAN = new FhirCodeDefinition('),
      );
      expect(fileContents).toEqual(
        expect.stringContaining("public static readonly NULL = new FhirCodeDefinition('NULL', `null`);"),
      );
      expect(fileContents).toEqual(
        expect.stringContaining(
          'values(): IFhirCodeDefinition[] {\n' +
            '    return [\n' +
            '      QuantityComparatorEnum.LESS_THAN,\n' +
            '      QuantityComparatorEnum.LESS_THAN_OR_EQUAL_TO,\n' +
            '      QuantityComparatorEnum.GREATER_THAN_OR_EQUAL_TO,\n' +
            '      QuantityComparatorEnum.GREATER_THAN,\n' +
            '      QuantityComparatorEnum.NULL\n' +
            '    ];\n' +
            '  }',
        ),
      );
      expect(fileContents).toEqual(
        expect.stringContaining(
          'fromCode(code: fhirCode | undefined): IFhirCodeDefinition {\n' +
            '    if (code === undefined) {\n' +
            "      throw new InvalidCodeError(`The provided 'code' value is undefined`);\n" +
            '    } else if (QuantityComparatorEnum.LESS_THAN.code === code) {\n' +
            '      return QuantityComparatorEnum.LESS_THAN;\n' +
            '    } else if (QuantityComparatorEnum.LESS_THAN_OR_EQUAL_TO.code === code) {\n' +
            '      return QuantityComparatorEnum.LESS_THAN_OR_EQUAL_TO;\n' +
            '    } else if (QuantityComparatorEnum.GREATER_THAN_OR_EQUAL_TO.code === code) {\n' +
            '      return QuantityComparatorEnum.GREATER_THAN_OR_EQUAL_TO;\n' +
            '    } else if (QuantityComparatorEnum.GREATER_THAN.code === code) {\n' +
            '      return QuantityComparatorEnum.GREATER_THAN;\n' +
            '    } else if (QuantityComparatorEnum.NULL.code === code) {\n' +
            '      return QuantityComparatorEnum.NULL;\n' +
            '    } else {\n' +
            "      throw new InvalidCodeError(`Unknown QuantityComparatorEnum 'code' value '${String(code)}'`);\n" +
            '    }\n' +
            '  }',
        ),
      );
    });

    it('should generate code system enum for CodeSystem missing select attributes', () => {
      const options: FindResourceInfoOptions = { type: ['CodeSystem'] };
      const identifierUseCodeSystem = packageLoader.findResourceJSON('identifier-use', options) as CodeSystem;
      // Remove selected attributes to test behavior when they do not exist
      delete identifierUseCodeSystem.description;
      delete identifierUseCodeSystem.version;
      delete identifierUseCodeSystem.caseSensitive;
      const numConcepts = identifierUseCodeSystem.concept.length;
      for (let i = 0; i < numConcepts; i++) {
        delete identifierUseCodeSystem.concept[i].display;
        delete identifierUseCodeSystem.concept[i].definition;
      }

      const generatedContent: GeneratedContent = generateCodeSystemEnum(identifierUseCodeSystem, testFhirPackage);
      expect(generatedContent.fhirPackage).toEqual(testFhirPackage);
      expect(generatedContent.filename).toStrictEqual('IdentifierUseEnum');
      expect(generatedContent.fileExtension).toStrictEqual('ts');

      const fileContents: string = generatedContent.fileContents;
      expect(fileContents).toBeDefined();
      expect(fileContents).toEqual(expect.stringContaining('* CodeSystem.description: "description not provided"'));
      expect(fileContents).toEqual(expect.stringContaining('* CodeSystem.version: 4.0.1'));
      expect(fileContents).toEqual(expect.stringContaining('* CodeSystem.caseSensitive: false'));
      expect(fileContents).toEqual(
        expect.stringContaining(
          'public static readonly USUAL = new FhirCodeDefinition(\n' +
            "    'USUAL',\n" +
            "    'usual',\n" +
            "    'http://hl7.org/fhir/identifier-use',\n" +
            '  );',
        ),
      );
    });
  });
});
