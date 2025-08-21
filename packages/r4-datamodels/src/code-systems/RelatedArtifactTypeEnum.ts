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
 * RelatedArtifactTypeEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/related-artifact-type
 * CodeSystem.name: RelatedArtifactType
 * CodeSystem.description: The type of relationship to the related artifact.
 * CodeSystem.version: 4.0.1
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
 * FHIR CodeSystem: RelatedArtifactTypeEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem RelatedArtifactType](http://hl7.org/fhir/related-artifact-type)
 */
export class RelatedArtifactTypeEnum implements IFhirCodeEnum {
  public static readonly DOCUMENTATION = new FhirCodeDefinition(
    'DOCUMENTATION',
    'documentation',
    'http://hl7.org/fhir/related-artifact-type',
    'Documentation',
    'Additional documentation for the knowledge resource. This would include additional instructions on usage as well as additional information on clinical context or appropriateness.',
  );
  public static readonly JUSTIFICATION = new FhirCodeDefinition(
    'JUSTIFICATION',
    'justification',
    'http://hl7.org/fhir/related-artifact-type',
    'Justification',
    'A summary of the justification for the knowledge resource including supporting evidence, relevant guidelines, or other clinically important information. This information is intended to provide a way to make the justification for the knowledge resource available to the consumer of interventions or results produced by the knowledge resource.',
  );
  public static readonly CITATION = new FhirCodeDefinition(
    'CITATION',
    'citation',
    'http://hl7.org/fhir/related-artifact-type',
    'Citation',
    'Bibliographic citation for papers, references, or other relevant material for the knowledge resource. This is intended to allow for citation of related material, but that was not necessarily specifically prepared in connection with this knowledge resource.',
  );
  public static readonly PREDECESSOR = new FhirCodeDefinition(
    'PREDECESSOR',
    'predecessor',
    'http://hl7.org/fhir/related-artifact-type',
    'Predecessor',
    'The previous version of the knowledge resource.',
  );
  public static readonly SUCCESSOR = new FhirCodeDefinition(
    'SUCCESSOR',
    'successor',
    'http://hl7.org/fhir/related-artifact-type',
    'Successor',
    'The next version of the knowledge resource.',
  );
  public static readonly DERIVED_FROM = new FhirCodeDefinition(
    'DERIVED_FROM',
    'derived-from',
    'http://hl7.org/fhir/related-artifact-type',
    'Derived From',
    'The knowledge resource is derived from the related artifact. This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but is modified to capture either a different set of overall requirements, or a more specific set of requirements such as those involved in a particular institution or clinical setting.',
  );
  public static readonly DEPENDS_ON = new FhirCodeDefinition(
    'DEPENDS_ON',
    'depends-on',
    'http://hl7.org/fhir/related-artifact-type',
    'Depends On',
    'The knowledge resource depends on the given related artifact.',
  );
  public static readonly COMPOSED_OF = new FhirCodeDefinition(
    'COMPOSED_OF',
    'composed-of',
    'http://hl7.org/fhir/related-artifact-type',
    'Composed Of',
    'The knowledge resource is composed of the given related artifact.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      RelatedArtifactTypeEnum.DOCUMENTATION,
      RelatedArtifactTypeEnum.JUSTIFICATION,
      RelatedArtifactTypeEnum.CITATION,
      RelatedArtifactTypeEnum.PREDECESSOR,
      RelatedArtifactTypeEnum.SUCCESSOR,
      RelatedArtifactTypeEnum.DERIVED_FROM,
      RelatedArtifactTypeEnum.DEPENDS_ON,
      RelatedArtifactTypeEnum.COMPOSED_OF,
      RelatedArtifactTypeEnum.NULL
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
    } else if (RelatedArtifactTypeEnum.DOCUMENTATION.code === code) {
      return RelatedArtifactTypeEnum.DOCUMENTATION;
    } else if (RelatedArtifactTypeEnum.JUSTIFICATION.code === code) {
      return RelatedArtifactTypeEnum.JUSTIFICATION;
    } else if (RelatedArtifactTypeEnum.CITATION.code === code) {
      return RelatedArtifactTypeEnum.CITATION;
    } else if (RelatedArtifactTypeEnum.PREDECESSOR.code === code) {
      return RelatedArtifactTypeEnum.PREDECESSOR;
    } else if (RelatedArtifactTypeEnum.SUCCESSOR.code === code) {
      return RelatedArtifactTypeEnum.SUCCESSOR;
    } else if (RelatedArtifactTypeEnum.DERIVED_FROM.code === code) {
      return RelatedArtifactTypeEnum.DERIVED_FROM;
    } else if (RelatedArtifactTypeEnum.DEPENDS_ON.code === code) {
      return RelatedArtifactTypeEnum.DEPENDS_ON;
    } else if (RelatedArtifactTypeEnum.COMPOSED_OF.code === code) {
      return RelatedArtifactTypeEnum.COMPOSED_OF;
    } else if (RelatedArtifactTypeEnum.NULL.code === code) {
      return RelatedArtifactTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown RelatedArtifactTypeEnum 'code' value '${code}'`);
    }
  }
}
