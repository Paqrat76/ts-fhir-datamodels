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
 * GuideParameterCodeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/guide-parameter-code
 * CodeSystem.name: GuideParameterCode
 * CodeSystem.description: Code of parameter that is input to the guide.
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
 * FHIR CodeSystem: GuideParameterCodeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem GuideParameterCode](http://hl7.org/fhir/guide-parameter-code)
 */
export class GuideParameterCodeEnum implements IFhirCodeEnum {
  public static readonly APPLY = new FhirCodeDefinition(
    'APPLY',
    'apply',
    'http://hl7.org/fhir/guide-parameter-code',
    'Apply Metadata Value',
    'If the value of this string 0..* parameter is one of the metadata fields then all conformance resources will have any specified [Resource].[field] overwritten with the ImplementationGuide.[field], where field is one of: version, date, status, publisher, contact, copyright, experimental, jurisdiction, useContext.',
  );
  public static readonly PATH_RESOURCE = new FhirCodeDefinition(
    'PATH_RESOURCE',
    'path-resource',
    'http://hl7.org/fhir/guide-parameter-code',
    'Resource Path',
    'The value of this string 0..* parameter is a subfolder of the build context\'s location that is to be scanned to load resources. Scope is (if present) a particular resource type.',
  );
  public static readonly PATH_PAGES = new FhirCodeDefinition(
    'PATH_PAGES',
    'path-pages',
    'http://hl7.org/fhir/guide-parameter-code',
    'Pages Path',
    'The value of this string 0..1 parameter is a subfolder of the build context\'s location that contains files that are part of the html content processed by the builder.',
  );
  public static readonly PATH_TX_CACHE = new FhirCodeDefinition(
    'PATH_TX_CACHE',
    'path-tx-cache',
    'http://hl7.org/fhir/guide-parameter-code',
    'Terminology Cache Path',
    'The value of this string 0..1 parameter is a subfolder of the build context\'s location that is used as the terminology cache. If this is not present, the terminology cache is on the local system, not under version control.',
  );
  public static readonly EXPANSION_PARAMETER = new FhirCodeDefinition(
    'EXPANSION_PARAMETER',
    'expansion-parameter',
    'http://hl7.org/fhir/guide-parameter-code',
    'Expansion Profile',
    'The value of this string 0..* parameter is a parameter (name=value) when expanding value sets for this implementation guide. This is particularly used to specify the versions of published terminologies such as SNOMED CT.',
  );
  public static readonly RULE_BROKEN_LINKS = new FhirCodeDefinition(
    'RULE_BROKEN_LINKS',
    'rule-broken-links',
    'http://hl7.org/fhir/guide-parameter-code',
    'Broken Links Rule',
    'The value of this string 0..1 parameter is either "warning" or "error" (default = "error"). If the value is "warning" then IG build tools allow the IG to be considered successfully build even when there is no internal broken links.',
  );
  public static readonly GENERATE_XML = new FhirCodeDefinition(
    'GENERATE_XML',
    'generate-xml',
    'http://hl7.org/fhir/guide-parameter-code',
    'Generate XML',
    'The value of this boolean 0..1 parameter specifies whether the IG publisher creates examples in XML format. If not present, the Publication Tool decides whether to generate XML.',
  );
  public static readonly GENERATE_JSON = new FhirCodeDefinition(
    'GENERATE_JSON',
    'generate-json',
    'http://hl7.org/fhir/guide-parameter-code',
    'Generate JSON',
    'The value of this boolean 0..1 parameter specifies whether the IG publisher creates examples in JSON format. If not present, the Publication Tool decides whether to generate JSON.',
  );
  public static readonly GENERATE_TURTLE = new FhirCodeDefinition(
    'GENERATE_TURTLE',
    'generate-turtle',
    'http://hl7.org/fhir/guide-parameter-code',
    'Generate Turtle',
    'The value of this boolean 0..1 parameter specifies whether the IG publisher creates examples in Turtle format. If not present, the Publication Tool decides whether to generate Turtle.',
  );
  public static readonly HTML_TEMPLATE = new FhirCodeDefinition(
    'HTML_TEMPLATE',
    'html-template',
    'http://hl7.org/fhir/guide-parameter-code',
    'HTML Template',
    'The value of this string singleton parameter is the name of the file to use as the builder template for each generated page (see templating).',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      GuideParameterCodeEnum.APPLY,
      GuideParameterCodeEnum.PATH_RESOURCE,
      GuideParameterCodeEnum.PATH_PAGES,
      GuideParameterCodeEnum.PATH_TX_CACHE,
      GuideParameterCodeEnum.EXPANSION_PARAMETER,
      GuideParameterCodeEnum.RULE_BROKEN_LINKS,
      GuideParameterCodeEnum.GENERATE_XML,
      GuideParameterCodeEnum.GENERATE_JSON,
      GuideParameterCodeEnum.GENERATE_TURTLE,
      GuideParameterCodeEnum.HTML_TEMPLATE,
      GuideParameterCodeEnum.NULL
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
    } else if (GuideParameterCodeEnum.APPLY.code === code) {
      return GuideParameterCodeEnum.APPLY;
    } else if (GuideParameterCodeEnum.PATH_RESOURCE.code === code) {
      return GuideParameterCodeEnum.PATH_RESOURCE;
    } else if (GuideParameterCodeEnum.PATH_PAGES.code === code) {
      return GuideParameterCodeEnum.PATH_PAGES;
    } else if (GuideParameterCodeEnum.PATH_TX_CACHE.code === code) {
      return GuideParameterCodeEnum.PATH_TX_CACHE;
    } else if (GuideParameterCodeEnum.EXPANSION_PARAMETER.code === code) {
      return GuideParameterCodeEnum.EXPANSION_PARAMETER;
    } else if (GuideParameterCodeEnum.RULE_BROKEN_LINKS.code === code) {
      return GuideParameterCodeEnum.RULE_BROKEN_LINKS;
    } else if (GuideParameterCodeEnum.GENERATE_XML.code === code) {
      return GuideParameterCodeEnum.GENERATE_XML;
    } else if (GuideParameterCodeEnum.GENERATE_JSON.code === code) {
      return GuideParameterCodeEnum.GENERATE_JSON;
    } else if (GuideParameterCodeEnum.GENERATE_TURTLE.code === code) {
      return GuideParameterCodeEnum.GENERATE_TURTLE;
    } else if (GuideParameterCodeEnum.HTML_TEMPLATE.code === code) {
      return GuideParameterCodeEnum.HTML_TEMPLATE;
    } else if (GuideParameterCodeEnum.NULL.code === code) {
      return GuideParameterCodeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown GuideParameterCodeEnum 'code' value '${code}'`);
    }
  }
}
