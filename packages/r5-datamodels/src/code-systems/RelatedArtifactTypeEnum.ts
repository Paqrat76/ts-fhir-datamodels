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
 * CodeSystem.version: 5.0.0
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
    'The target artifact is a summary of the justification for the knowledge resource including supporting evidence, relevant guidelines, or other clinically important information. This information is intended to provide a way to make the justification for the knowledge resource available to the consumer of interventions or results produced by the knowledge resource.',
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
    'The previous version of the knowledge artifact, used to establish an ordering of versions of an artifact, independent of the status of each version.',
  );
  public static readonly SUCCESSOR = new FhirCodeDefinition(
    'SUCCESSOR',
    'successor',
    'http://hl7.org/fhir/related-artifact-type',
    'Successor',
    'The subsequent version of the knowledge artfact, used to establish an ordering of versions of an artifact, independent of the status of each version.',
  );
  public static readonly DERIVED_FROM = new FhirCodeDefinition(
    'DERIVED_FROM',
    'derived-from',
    'http://hl7.org/fhir/related-artifact-type',
    'Derived From',
    'This artifact is derived from the target artifact. This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but is modified to capture either a different set of overall requirements, or a more specific set of requirements such as those involved in a particular institution or clinical setting. The artifact may be derived from one or more target artifacts.',
  );
  public static readonly DEPENDS_ON = new FhirCodeDefinition(
    'DEPENDS_ON',
    'depends-on',
    'http://hl7.org/fhir/related-artifact-type',
    'Depends On',
    'This artifact depends on the target artifact. There is a requirement to use the target artifact in the creation or interpretation of this artifact.',
  );
  public static readonly COMPOSED_OF = new FhirCodeDefinition(
    'COMPOSED_OF',
    'composed-of',
    'http://hl7.org/fhir/related-artifact-type',
    'Composed Of',
    'This artifact is composed of the target artifact. This artifact is constructed with the target artifact as a component. The target artifact is a part of this artifact. (A dataset is composed of data.).',
  );
  public static readonly PART_OF = new FhirCodeDefinition(
    'PART_OF',
    'part-of',
    'http://hl7.org/fhir/related-artifact-type',
    'Part Of',
    'This artifact is a part of the target artifact. The target artifact is composed of this artifact (and possibly other artifacts).',
  );
  public static readonly AMENDS = new FhirCodeDefinition(
    'AMENDS',
    'amends',
    'http://hl7.org/fhir/related-artifact-type',
    'Amends',
    'This artifact amends or changes the target artifact. This artifact adds additional information that is functionally expected to replace information in the target artifact. This artifact replaces a part but not all of the target artifact.',
  );
  public static readonly AMENDED_WITH = new FhirCodeDefinition(
    'AMENDED_WITH',
    'amended-with',
    'http://hl7.org/fhir/related-artifact-type',
    'Amended With',
    'This artifact is amended with or changed by the target artifact. There is information in this artifact that should be functionally replaced with information in the target artifact.',
  );
  public static readonly APPENDS = new FhirCodeDefinition(
    'APPENDS',
    'appends',
    'http://hl7.org/fhir/related-artifact-type',
    'Appends',
    'This artifact adds additional information to the target artifact. The additional information does not replace or change information in the target artifact.',
  );
  public static readonly APPENDED_WITH = new FhirCodeDefinition(
    'APPENDED_WITH',
    'appended-with',
    'http://hl7.org/fhir/related-artifact-type',
    'Appended With',
    'This artifact has additional information in the target artifact.',
  );
  public static readonly CITES = new FhirCodeDefinition(
    'CITES',
    'cites',
    'http://hl7.org/fhir/related-artifact-type',
    'Cites',
    'This artifact cites the target artifact. This may be a bibliographic citation for papers, references, or other relevant material for the knowledge resource. This is intended to allow for citation of related material, but that was not necessarily specifically prepared in connection with this knowledge resource.',
  );
  public static readonly CITED_BY = new FhirCodeDefinition(
    'CITED_BY',
    'cited-by',
    'http://hl7.org/fhir/related-artifact-type',
    'Cited By',
    'This artifact is cited by the target artifact.',
  );
  public static readonly COMMENTS_ON = new FhirCodeDefinition(
    'COMMENTS_ON',
    'comments-on',
    'http://hl7.org/fhir/related-artifact-type',
    'Is Comment On',
    'This artifact contains comments about the target artifact.',
  );
  public static readonly COMMENT_IN = new FhirCodeDefinition(
    'COMMENT_IN',
    'comment-in',
    'http://hl7.org/fhir/related-artifact-type',
    'Has Comment In',
    'This artifact has comments about it in the target artifact.  The type of comments may be expressed in the targetClassifier element such as reply, review, editorial, feedback, solicited, unsolicited, structured, unstructured.',
  );
  public static readonly CONTAINS = new FhirCodeDefinition(
    'CONTAINS',
    'contains',
    'http://hl7.org/fhir/related-artifact-type',
    'Contains',
    'This artifact is a container in which the target artifact is contained. A container is a data structure whose instances are collections of other objects. (A database contains the dataset.).',
  );
  public static readonly CONTAINED_IN = new FhirCodeDefinition(
    'CONTAINED_IN',
    'contained-in',
    'http://hl7.org/fhir/related-artifact-type',
    'Contained In',
    'This artifact is contained in the target artifact. The target artifact is a data structure whose instances are collections of other objects.',
  );
  public static readonly CORRECTS = new FhirCodeDefinition(
    'CORRECTS',
    'corrects',
    'http://hl7.org/fhir/related-artifact-type',
    'Corrects',
    'This artifact identifies errors and replacement content for the target artifact.',
  );
  public static readonly CORRECTION_IN = new FhirCodeDefinition(
    'CORRECTION_IN',
    'correction-in',
    'http://hl7.org/fhir/related-artifact-type',
    'Correction In',
    'This artifact has corrections to it in the target artifact. The target artifact identifies errors and replacement content for this artifact.',
  );
  public static readonly REPLACES = new FhirCodeDefinition(
    'REPLACES',
    'replaces',
    'http://hl7.org/fhir/related-artifact-type',
    'Replaces',
    'This artifact replaces or supersedes the target artifact. The target artifact may be considered deprecated.',
  );
  public static readonly REPLACED_WITH = new FhirCodeDefinition(
    'REPLACED_WITH',
    'replaced-with',
    'http://hl7.org/fhir/related-artifact-type',
    'Replaced With',
    'This artifact is replaced with or superseded by the target artifact. This artifact may be considered deprecated.',
  );
  public static readonly RETRACTS = new FhirCodeDefinition(
    'RETRACTS',
    'retracts',
    'http://hl7.org/fhir/related-artifact-type',
    'Retracts',
    'This artifact retracts the target artifact. The content that was published in the target artifact should be considered removed from publication and should no longer be considered part of the public record.',
  );
  public static readonly RETRACTED_BY = new FhirCodeDefinition(
    'RETRACTED_BY',
    'retracted-by',
    'http://hl7.org/fhir/related-artifact-type',
    'Retracted By',
    'This artifact is retracted by the target artifact. The content that was published in this artifact should be considered removed from publication and should no longer be considered part of the public record.',
  );
  public static readonly SIGNS = new FhirCodeDefinition(
    'SIGNS',
    'signs',
    'http://hl7.org/fhir/related-artifact-type',
    'Signs',
    'This artifact is a signature of the target artifact.',
  );
  public static readonly SIMILAR_TO = new FhirCodeDefinition(
    'SIMILAR_TO',
    'similar-to',
    'http://hl7.org/fhir/related-artifact-type',
    'Similar To',
    'This artifact has characteristics in common with the target artifact. This relationship may be used in systems to "deduplicate" knowledge artifacts from different sources, or in systems to show "similar items".',
  );
  public static readonly SUPPORTS = new FhirCodeDefinition(
    'SUPPORTS',
    'supports',
    'http://hl7.org/fhir/related-artifact-type',
    'Supports',
    'This artifact provides additional support for the target artifact. The type of support  is not documentation as it does not describe, explain, or instruct regarding the target artifact.',
  );
  public static readonly SUPPORTED_WITH = new FhirCodeDefinition(
    'SUPPORTED_WITH',
    'supported-with',
    'http://hl7.org/fhir/related-artifact-type',
    'Supported With',
    'The target artifact contains additional information related to the knowledge artifact but is not documentation as the additional information does not describe, explain, or instruct regarding the knowledge artifact content or application. This could include an associated dataset.',
  );
  public static readonly TRANSFORMS = new FhirCodeDefinition(
    'TRANSFORMS',
    'transforms',
    'http://hl7.org/fhir/related-artifact-type',
    'Transforms',
    'This artifact was generated by transforming the target artifact (e.g., format or language conversion). This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but changes are only apparent in form and there is only one target artifact with the "transforms" relationship type.',
  );
  public static readonly TRANSFORMED_INTO = new FhirCodeDefinition(
    'TRANSFORMED_INTO',
    'transformed-into',
    'http://hl7.org/fhir/related-artifact-type',
    'Transformed Into',
    'This artifact was transformed into the target artifact (e.g., by format or language conversion).',
  );
  public static readonly TRANSFORMED_WITH = new FhirCodeDefinition(
    'TRANSFORMED_WITH',
    'transformed-with',
    'http://hl7.org/fhir/related-artifact-type',
    'Transformed With',
    'This artifact was generated by transforming a related artifact (e.g., format or language conversion), noted separately with the "transforms" relationship type. This transformation used the target artifact to inform the transformation. The target artifact may be a conversion script or translation guide.',
  );
  public static readonly DOCUMENTS = new FhirCodeDefinition(
    'DOCUMENTS',
    'documents',
    'http://hl7.org/fhir/related-artifact-type',
    'Documents',
    'This artifact provides additional documentation for the target artifact. This could include additional instructions on usage as well as additional information on clinical context or appropriateness.',
  );
  public static readonly SPECIFICATION_OF = new FhirCodeDefinition(
    'SPECIFICATION_OF',
    'specification-of',
    'http://hl7.org/fhir/related-artifact-type',
    'Specification Of',
    'The target artifact is a precise description of a concept in this artifact. This may be used when the RelatedArtifact datatype is used in elements contained in this artifact.',
  );
  public static readonly CREATED_WITH = new FhirCodeDefinition(
    'CREATED_WITH',
    'created-with',
    'http://hl7.org/fhir/related-artifact-type',
    'Created With',
    'This artifact was created with the target artifact. The target artifact is a tool or support material used in the creation of the artifact, and not content that the artifact was derived from.',
  );
  public static readonly CITE_AS = new FhirCodeDefinition(
    'CITE_AS',
    'cite-as',
    'http://hl7.org/fhir/related-artifact-type',
    'Cite As',
    'The related artifact is the citation for this artifact.',
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
      RelatedArtifactTypeEnum.PART_OF,
      RelatedArtifactTypeEnum.AMENDS,
      RelatedArtifactTypeEnum.AMENDED_WITH,
      RelatedArtifactTypeEnum.APPENDS,
      RelatedArtifactTypeEnum.APPENDED_WITH,
      RelatedArtifactTypeEnum.CITES,
      RelatedArtifactTypeEnum.CITED_BY,
      RelatedArtifactTypeEnum.COMMENTS_ON,
      RelatedArtifactTypeEnum.COMMENT_IN,
      RelatedArtifactTypeEnum.CONTAINS,
      RelatedArtifactTypeEnum.CONTAINED_IN,
      RelatedArtifactTypeEnum.CORRECTS,
      RelatedArtifactTypeEnum.CORRECTION_IN,
      RelatedArtifactTypeEnum.REPLACES,
      RelatedArtifactTypeEnum.REPLACED_WITH,
      RelatedArtifactTypeEnum.RETRACTS,
      RelatedArtifactTypeEnum.RETRACTED_BY,
      RelatedArtifactTypeEnum.SIGNS,
      RelatedArtifactTypeEnum.SIMILAR_TO,
      RelatedArtifactTypeEnum.SUPPORTS,
      RelatedArtifactTypeEnum.SUPPORTED_WITH,
      RelatedArtifactTypeEnum.TRANSFORMS,
      RelatedArtifactTypeEnum.TRANSFORMED_INTO,
      RelatedArtifactTypeEnum.TRANSFORMED_WITH,
      RelatedArtifactTypeEnum.DOCUMENTS,
      RelatedArtifactTypeEnum.SPECIFICATION_OF,
      RelatedArtifactTypeEnum.CREATED_WITH,
      RelatedArtifactTypeEnum.CITE_AS,
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
    } else if (RelatedArtifactTypeEnum.PART_OF.code === code) {
      return RelatedArtifactTypeEnum.PART_OF;
    } else if (RelatedArtifactTypeEnum.AMENDS.code === code) {
      return RelatedArtifactTypeEnum.AMENDS;
    } else if (RelatedArtifactTypeEnum.AMENDED_WITH.code === code) {
      return RelatedArtifactTypeEnum.AMENDED_WITH;
    } else if (RelatedArtifactTypeEnum.APPENDS.code === code) {
      return RelatedArtifactTypeEnum.APPENDS;
    } else if (RelatedArtifactTypeEnum.APPENDED_WITH.code === code) {
      return RelatedArtifactTypeEnum.APPENDED_WITH;
    } else if (RelatedArtifactTypeEnum.CITES.code === code) {
      return RelatedArtifactTypeEnum.CITES;
    } else if (RelatedArtifactTypeEnum.CITED_BY.code === code) {
      return RelatedArtifactTypeEnum.CITED_BY;
    } else if (RelatedArtifactTypeEnum.COMMENTS_ON.code === code) {
      return RelatedArtifactTypeEnum.COMMENTS_ON;
    } else if (RelatedArtifactTypeEnum.COMMENT_IN.code === code) {
      return RelatedArtifactTypeEnum.COMMENT_IN;
    } else if (RelatedArtifactTypeEnum.CONTAINS.code === code) {
      return RelatedArtifactTypeEnum.CONTAINS;
    } else if (RelatedArtifactTypeEnum.CONTAINED_IN.code === code) {
      return RelatedArtifactTypeEnum.CONTAINED_IN;
    } else if (RelatedArtifactTypeEnum.CORRECTS.code === code) {
      return RelatedArtifactTypeEnum.CORRECTS;
    } else if (RelatedArtifactTypeEnum.CORRECTION_IN.code === code) {
      return RelatedArtifactTypeEnum.CORRECTION_IN;
    } else if (RelatedArtifactTypeEnum.REPLACES.code === code) {
      return RelatedArtifactTypeEnum.REPLACES;
    } else if (RelatedArtifactTypeEnum.REPLACED_WITH.code === code) {
      return RelatedArtifactTypeEnum.REPLACED_WITH;
    } else if (RelatedArtifactTypeEnum.RETRACTS.code === code) {
      return RelatedArtifactTypeEnum.RETRACTS;
    } else if (RelatedArtifactTypeEnum.RETRACTED_BY.code === code) {
      return RelatedArtifactTypeEnum.RETRACTED_BY;
    } else if (RelatedArtifactTypeEnum.SIGNS.code === code) {
      return RelatedArtifactTypeEnum.SIGNS;
    } else if (RelatedArtifactTypeEnum.SIMILAR_TO.code === code) {
      return RelatedArtifactTypeEnum.SIMILAR_TO;
    } else if (RelatedArtifactTypeEnum.SUPPORTS.code === code) {
      return RelatedArtifactTypeEnum.SUPPORTS;
    } else if (RelatedArtifactTypeEnum.SUPPORTED_WITH.code === code) {
      return RelatedArtifactTypeEnum.SUPPORTED_WITH;
    } else if (RelatedArtifactTypeEnum.TRANSFORMS.code === code) {
      return RelatedArtifactTypeEnum.TRANSFORMS;
    } else if (RelatedArtifactTypeEnum.TRANSFORMED_INTO.code === code) {
      return RelatedArtifactTypeEnum.TRANSFORMED_INTO;
    } else if (RelatedArtifactTypeEnum.TRANSFORMED_WITH.code === code) {
      return RelatedArtifactTypeEnum.TRANSFORMED_WITH;
    } else if (RelatedArtifactTypeEnum.DOCUMENTS.code === code) {
      return RelatedArtifactTypeEnum.DOCUMENTS;
    } else if (RelatedArtifactTypeEnum.SPECIFICATION_OF.code === code) {
      return RelatedArtifactTypeEnum.SPECIFICATION_OF;
    } else if (RelatedArtifactTypeEnum.CREATED_WITH.code === code) {
      return RelatedArtifactTypeEnum.CREATED_WITH;
    } else if (RelatedArtifactTypeEnum.CITE_AS.code === code) {
      return RelatedArtifactTypeEnum.CITE_AS;
    } else if (RelatedArtifactTypeEnum.NULL.code === code) {
      return RelatedArtifactTypeEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown RelatedArtifactTypeEnum 'code' value '${code}'`);
    }
  }
}
