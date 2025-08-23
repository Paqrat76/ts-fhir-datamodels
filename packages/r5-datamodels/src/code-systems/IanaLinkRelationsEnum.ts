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
 * IanaLinkRelationsEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/CodeSystem/iana-link-relations
 * CodeSystem.name: IanaLinkRelations
 * CodeSystem.description: Link Relation Types defined at https://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1
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
 * FHIR CodeSystem: IanaLinkRelationsEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem IanaLinkRelations](http://hl7.org/fhir/CodeSystem/iana-link-relations)
 */
export class IanaLinkRelationsEnum implements IFhirCodeEnum {
  public static readonly ABOUT = new FhirCodeDefinition(
    'ABOUT',
    'about',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource that is the subject of the link\'s context.',
    'Refers to a resource that is the subject of the link\'s context.',
  );
  public static readonly ACL = new FhirCodeDefinition(
    'ACL',
    'acl',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Asserts that the link target provides an access control description for the link context.',
    'Asserts that the link target provides an access control description for the link context.',
  );
  public static readonly ALTERNATE = new FhirCodeDefinition(
    'ALTERNATE',
    'alternate',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a substitute for this context',
    'Refers to a substitute for this context',
  );
  public static readonly AMPHTML = new FhirCodeDefinition(
    'AMPHTML',
    'amphtml',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Used to reference alternative content that uses the AMP profile of the HTML format.',
    'Used to reference alternative content that uses the AMP profile of the HTML format.',
  );
  public static readonly APPENDIX = new FhirCodeDefinition(
    'APPENDIX',
    'appendix',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to an appendix.',
    'Refers to an appendix.',
  );
  public static readonly APPLE_TOUCH_ICON = new FhirCodeDefinition(
    'APPLE_TOUCH_ICON',
    'apple-touch-icon',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to an icon for the context. Synonym for icon.',
    'Refers to an icon for the context. Synonym for icon.',
  );
  public static readonly APPLE_TOUCH_STARTUP_IMAGE = new FhirCodeDefinition(
    'APPLE_TOUCH_STARTUP_IMAGE',
    'apple-touch-startup-image',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a launch screen for the context.',
    'Refers to a launch screen for the context.',
  );
  public static readonly ARCHIVES = new FhirCodeDefinition(
    'ARCHIVES',
    'archives',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a collection of records, documents, or other       materials of historical interest.',
    'Refers to a collection of records, documents, or other       materials of historical interest.',
  );
  public static readonly AUTHOR = new FhirCodeDefinition(
    'AUTHOR',
    'author',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to the context\'s author.',
    'Refers to the context\'s author.',
  );
  public static readonly BLOCKED_BY = new FhirCodeDefinition(
    'BLOCKED_BY',
    'blocked-by',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies the entity that blocks access to a resource       following receipt of a legal demand.',
    'Identifies the entity that blocks access to a resource       following receipt of a legal demand.',
  );
  public static readonly BOOKMARK = new FhirCodeDefinition(
    'BOOKMARK',
    'bookmark',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Gives a permanent link to use for bookmarking purposes.',
    'Gives a permanent link to use for bookmarking purposes.',
  );
  public static readonly CANONICAL = new FhirCodeDefinition(
    'CANONICAL',
    'canonical',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Designates the preferred version of a resource (the IRI and its contents).',
    'Designates the preferred version of a resource (the IRI and its contents).',
  );
  public static readonly CHAPTER = new FhirCodeDefinition(
    'CHAPTER',
    'chapter',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a chapter in a collection of resources.',
    'Refers to a chapter in a collection of resources.',
  );
  public static readonly CITE_AS = new FhirCodeDefinition(
    'CITE_AS',
    'cite-as',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Indicates that the link target is preferred over the link context for the purpose of permanent citation.',
    'Indicates that the link target is preferred over the link context for the purpose of permanent citation.',
  );
  public static readonly COLLECTION = new FhirCodeDefinition(
    'COLLECTION',
    'collection',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The target IRI points to a resource which represents the collection resource for the context IRI.',
    'The target IRI points to a resource which represents the collection resource for the context IRI.',
  );
  public static readonly CONTENTS = new FhirCodeDefinition(
    'CONTENTS',
    'contents',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a table of contents.',
    'Refers to a table of contents.',
  );
  public static readonly CONVERTED_FROM = new FhirCodeDefinition(
    'CONVERTED_FROM',
    'convertedFrom',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The document linked to was later converted to the       document that contains this link relation.  For example, an RFC can       have a link to the Internet-Draft that became the RFC; in that case,       the link relation would be "convertedFrom".',
    'The document linked to was later converted to the       document that contains this link relation.  For example, an RFC can       have a link to the Internet-Draft that became the RFC; in that case,       the link relation would be "convertedFrom".',
  );
  public static readonly COPYRIGHT = new FhirCodeDefinition(
    'COPYRIGHT',
    'copyright',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a copyright statement that applies to the     link\'s context.',
    'Refers to a copyright statement that applies to the     link\'s context.',
  );
  public static readonly CREATE_FORM = new FhirCodeDefinition(
    'CREATE_FORM',
    'create-form',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The target IRI points to a resource where a submission form can be obtained.',
    'The target IRI points to a resource where a submission form can be obtained.',
  );
  public static readonly CURRENT = new FhirCodeDefinition(
    'CURRENT',
    'current',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource containing the most recent       item(s) in a collection of resources.',
    'Refers to a resource containing the most recent       item(s) in a collection of resources.',
  );
  public static readonly DESCRIBEDBY = new FhirCodeDefinition(
    'DESCRIBEDBY',
    'describedby',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource providing information about the       link\'s context.',
    'Refers to a resource providing information about the       link\'s context.',
  );
  public static readonly DESCRIBES = new FhirCodeDefinition(
    'DESCRIBES',
    'describes',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The relationship A \'describes\' B asserts that       resource A provides a description of resource B. There are no       constraints on the format or representation of either A or B,       neither are there any further constraints on either resource.',
    'The relationship A \'describes\' B asserts that       resource A provides a description of resource B. There are no       constraints on the format or representation of either A or B,       neither are there any further constraints on either resource.',
  );
  public static readonly DISCLOSURE = new FhirCodeDefinition(
    'DISCLOSURE',
    'disclosure',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a list of patent disclosures made with respect to        material for which \'disclosure\' relation is specified.',
    'Refers to a list of patent disclosures made with respect to        material for which \'disclosure\' relation is specified.',
  );
  public static readonly DNS_PREFETCH = new FhirCodeDefinition(
    'DNS_PREFETCH',
    'dns-prefetch',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Used to indicate an origin that will be used to fetch required        resources for the link context, and that the user agent ought to resolve        as early as possible.',
    'Used to indicate an origin that will be used to fetch required        resources for the link context, and that the user agent ought to resolve        as early as possible.',
  );
  public static readonly DUPLICATE = new FhirCodeDefinition(
    'DUPLICATE',
    'duplicate',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource whose available representations       are byte-for-byte identical with the corresponding representations of       the context IRI.',
    'Refers to a resource whose available representations       are byte-for-byte identical with the corresponding representations of       the context IRI.',
  );
  public static readonly EDIT = new FhirCodeDefinition(
    'EDIT',
    'edit',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource that can be used to edit the       link\'s context.',
    'Refers to a resource that can be used to edit the       link\'s context.',
  );
  public static readonly EDIT_FORM = new FhirCodeDefinition(
    'EDIT_FORM',
    'edit-form',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The target IRI points to a resource where a submission form for       editing associated resource can be obtained.',
    'The target IRI points to a resource where a submission form for       editing associated resource can be obtained.',
  );
  public static readonly EDIT_MEDIA = new FhirCodeDefinition(
    'EDIT_MEDIA',
    'edit-media',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource that can be used to edit media       associated with the link\'s context.',
    'Refers to a resource that can be used to edit media       associated with the link\'s context.',
  );
  public static readonly ENCLOSURE = new FhirCodeDefinition(
    'ENCLOSURE',
    'enclosure',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies a related resource that is potentially       large and might require special handling.',
    'Identifies a related resource that is potentially       large and might require special handling.',
  );
  public static readonly EXTERNAL = new FhirCodeDefinition(
    'EXTERNAL',
    'external',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource that is not part of the same site as the current context.',
    'Refers to a resource that is not part of the same site as the current context.',
  );
  public static readonly FIRST = new FhirCodeDefinition(
    'FIRST',
    'first',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'An IRI that refers to the furthest preceding resource     in a series of resources.',
    'An IRI that refers to the furthest preceding resource     in a series of resources.',
  );
  public static readonly GLOSSARY = new FhirCodeDefinition(
    'GLOSSARY',
    'glossary',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a glossary of terms.',
    'Refers to a glossary of terms.',
  );
  public static readonly HELP = new FhirCodeDefinition(
    'HELP',
    'help',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to context-sensitive help.',
    'Refers to context-sensitive help.',
  );
  public static readonly HOSTS = new FhirCodeDefinition(
    'HOSTS',
    'hosts',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource hosted by the server indicated by       the link context.',
    'Refers to a resource hosted by the server indicated by       the link context.',
  );
  public static readonly HUB = new FhirCodeDefinition(
    'HUB',
    'hub',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a hub that enables registration for     notification of updates to the context.',
    'Refers to a hub that enables registration for     notification of updates to the context.',
  );
  public static readonly ICON = new FhirCodeDefinition(
    'ICON',
    'icon',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to an icon representing the link\'s context.',
    'Refers to an icon representing the link\'s context.',
  );
  public static readonly INDEX = new FhirCodeDefinition(
    'INDEX',
    'index',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to an index.',
    'Refers to an index.',
  );
  public static readonly INTERVAL_AFTER = new FhirCodeDefinition(
    'INTERVAL_AFTER',
    'intervalAfter',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval that ends before the beginning of the time interval associated with the context resource',
    'refers to a resource associated with a time interval that ends before the beginning of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_BEFORE = new FhirCodeDefinition(
    'INTERVAL_BEFORE',
    'intervalBefore',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval that begins after the end of the time interval associated with the context resource',
    'refers to a resource associated with a time interval that begins after the end of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_CONTAINS = new FhirCodeDefinition(
    'INTERVAL_CONTAINS',
    'intervalContains',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval that begins after the beginning of the time interval associated with the context resource, and ends before the end of the time interval associated with the context resource',
    'refers to a resource associated with a time interval that begins after the beginning of the time interval associated with the context resource, and ends before the end of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_DISJOINT = new FhirCodeDefinition(
    'INTERVAL_DISJOINT',
    'intervalDisjoint',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval that begins after the end of the time interval associated with the context resource, or ends before the beginning of the time interval associated with the context resource',
    'refers to a resource associated with a time interval that begins after the end of the time interval associated with the context resource, or ends before the beginning of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_DURING = new FhirCodeDefinition(
    'INTERVAL_DURING',
    'intervalDuring',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval that begins before the beginning of the time interval associated with the context resource, and ends after the end of the time interval associated with the context resource',
    'refers to a resource associated with a time interval that begins before the beginning of the time interval associated with the context resource, and ends after the end of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_EQUALS = new FhirCodeDefinition(
    'INTERVAL_EQUALS',
    'intervalEquals',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval whose beginning coincides with the beginning of the time interval associated with the context resource, and whose end coincides with the end of the time interval associated with the context resource',
    'refers to a resource associated with a time interval whose beginning coincides with the beginning of the time interval associated with the context resource, and whose end coincides with the end of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_FINISHED_BY = new FhirCodeDefinition(
    'INTERVAL_FINISHED_BY',
    'intervalFinishedBy',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval that begins after the beginning of the time interval associated with the context resource, and whose end coincides with the end of the time interval associated with the context resource',
    'refers to a resource associated with a time interval that begins after the beginning of the time interval associated with the context resource, and whose end coincides with the end of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_FINISHES = new FhirCodeDefinition(
    'INTERVAL_FINISHES',
    'intervalFinishes',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval that begins before the beginning of the time interval associated with the context resource, and whose end coincides with the end of the time interval associated with the context resource',
    'refers to a resource associated with a time interval that begins before the beginning of the time interval associated with the context resource, and whose end coincides with the end of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_IN = new FhirCodeDefinition(
    'INTERVAL_IN',
    'intervalIn',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval that begins before or is coincident with the beginning of the time interval associated with the context resource, and ends after or is coincident with the end of the time interval associated with the context resource',
    'refers to a resource associated with a time interval that begins before or is coincident with the beginning of the time interval associated with the context resource, and ends after or is coincident with the end of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_MEETS = new FhirCodeDefinition(
    'INTERVAL_MEETS',
    'intervalMeets',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval whose beginning coincides with the end of the time interval associated with the context resource',
    'refers to a resource associated with a time interval whose beginning coincides with the end of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_MET_BY = new FhirCodeDefinition(
    'INTERVAL_MET_BY',
    'intervalMetBy',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval whose end coincides with the beginning of the time interval associated with the context resource',
    'refers to a resource associated with a time interval whose end coincides with the beginning of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_OVERLAPPED_BY = new FhirCodeDefinition(
    'INTERVAL_OVERLAPPED_BY',
    'intervalOverlappedBy',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval that begins before the beginning of the time interval associated with the context resource, and ends after the beginning of the time interval associated with the context resource',
    'refers to a resource associated with a time interval that begins before the beginning of the time interval associated with the context resource, and ends after the beginning of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_OVERLAPS = new FhirCodeDefinition(
    'INTERVAL_OVERLAPS',
    'intervalOverlaps',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval that begins before the end of the time interval associated with the context resource, and ends after the end of the time interval associated with the context resource',
    'refers to a resource associated with a time interval that begins before the end of the time interval associated with the context resource, and ends after the end of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_STARTED_BY = new FhirCodeDefinition(
    'INTERVAL_STARTED_BY',
    'intervalStartedBy',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval whose beginning coincides with the beginning of the time interval associated with the context resource, and ends before the end of the time interval associated with the context resource',
    'refers to a resource associated with a time interval whose beginning coincides with the beginning of the time interval associated with the context resource, and ends before the end of the time interval associated with the context resource',
  );
  public static readonly INTERVAL_STARTS = new FhirCodeDefinition(
    'INTERVAL_STARTS',
    'intervalStarts',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'refers to a resource associated with a time interval whose beginning coincides with the beginning of the time interval associated with the context resource, and ends after the end of the time interval associated with the context resource',
    'refers to a resource associated with a time interval whose beginning coincides with the beginning of the time interval associated with the context resource, and ends after the end of the time interval associated with the context resource',
  );
  public static readonly ITEM = new FhirCodeDefinition(
    'ITEM',
    'item',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The target IRI points to a resource that is a member of the collection represented by the context IRI.',
    'The target IRI points to a resource that is a member of the collection represented by the context IRI.',
  );
  public static readonly LAST = new FhirCodeDefinition(
    'LAST',
    'last',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'An IRI that refers to the furthest following resource       in a series of resources.',
    'An IRI that refers to the furthest following resource       in a series of resources.',
  );
  public static readonly LATEST_VERSION = new FhirCodeDefinition(
    'LATEST_VERSION',
    'latest-version',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Points to a resource containing the latest (e.g.,       current) version of the context.',
    'Points to a resource containing the latest (e.g.,       current) version of the context.',
  );
  public static readonly LICENSE = new FhirCodeDefinition(
    'LICENSE',
    'license',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a license associated with this context.',
    'Refers to a license associated with this context.',
  );
  public static readonly LINKSET = new FhirCodeDefinition(
    'LINKSET',
    'linkset',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The link target of a link with the "linkset" relation       type provides a set of links, including links in which the link       context of the link participates.     ',
    'The link target of a link with the "linkset" relation       type provides a set of links, including links in which the link       context of the link participates.     ',
  );
  public static readonly LRDD = new FhirCodeDefinition(
    'LRDD',
    'lrdd',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to further information about the link\'s context,       expressed as a LRDD ("Link-based Resource Descriptor Document")       resource.  See  for information about       processing this relation type in host-meta documents. When used       elsewhere, it refers to additional links and other metadata.       Multiple instances indicate additional LRDD resources. LRDD       resources MUST have an "application/xrd+xml" representation, and       MAY have others.',
    'Refers to further information about the link\'s context,       expressed as a LRDD ("Link-based Resource Descriptor Document")       resource.  See  for information about       processing this relation type in host-meta documents. When used       elsewhere, it refers to additional links and other metadata.       Multiple instances indicate additional LRDD resources. LRDD       resources MUST have an "application/xrd+xml" representation, and       MAY have others.',
  );
  public static readonly MANIFEST = new FhirCodeDefinition(
    'MANIFEST',
    'manifest',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Links to a manifest file for the context.',
    'Links to a manifest file for the context.',
  );
  public static readonly MASK_ICON = new FhirCodeDefinition(
    'MASK_ICON',
    'mask-icon',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a mask that can be applied to the icon for the context.',
    'Refers to a mask that can be applied to the icon for the context.',
  );
  public static readonly MEDIA_FEED = new FhirCodeDefinition(
    'MEDIA_FEED',
    'media-feed',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a feed of personalised media recommendations relevant to the link context.',
    'Refers to a feed of personalised media recommendations relevant to the link context.',
  );
  public static readonly MEMENTO = new FhirCodeDefinition(
    'MEMENTO',
    'memento',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The Target IRI points to a Memento, a fixed resource that will not change state anymore.',
    'The Target IRI points to a Memento, a fixed resource that will not change state anymore.',
  );
  public static readonly MICROPUB = new FhirCodeDefinition(
    'MICROPUB',
    'micropub',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Links to the context\'s Micropub endpoint.',
    'Links to the context\'s Micropub endpoint.',
  );
  public static readonly MODULEPRELOAD = new FhirCodeDefinition(
    'MODULEPRELOAD',
    'modulepreload',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a module that the user agent is to preemptively fetch and store for use in the current context.',
    'Refers to a module that the user agent is to preemptively fetch and store for use in the current context.',
  );
  public static readonly MONITOR = new FhirCodeDefinition(
    'MONITOR',
    'monitor',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource that can be used to monitor changes in an HTTP resource.     ',
    'Refers to a resource that can be used to monitor changes in an HTTP resource.     ',
  );
  public static readonly MONITOR_GROUP = new FhirCodeDefinition(
    'MONITOR_GROUP',
    'monitor-group',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource that can be used to monitor changes in a specified group of HTTP resources.     ',
    'Refers to a resource that can be used to monitor changes in a specified group of HTTP resources.     ',
  );
  public static readonly NEXT = new FhirCodeDefinition(
    'NEXT',
    'next',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Indicates that the link\'s context is a part of a series, and       that the next in the series is the link target.     ',
    'Indicates that the link\'s context is a part of a series, and       that the next in the series is the link target.     ',
  );
  public static readonly NEXT_ARCHIVE = new FhirCodeDefinition(
    'NEXT_ARCHIVE',
    'next-archive',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to the immediately following archive resource.',
    'Refers to the immediately following archive resource.',
  );
  public static readonly NOFOLLOW = new FhirCodeDefinition(
    'NOFOLLOW',
    'nofollow',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Indicates that the context\'s original author or publisher does not endorse the link target.',
    'Indicates that the context\'s original author or publisher does not endorse the link target.',
  );
  public static readonly NOOPENER = new FhirCodeDefinition(
    'NOOPENER',
    'noopener',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Indicates that any newly created top-level browsing context which results from following the link will not be an auxiliary browsing context.',
    'Indicates that any newly created top-level browsing context which results from following the link will not be an auxiliary browsing context.',
  );
  public static readonly NOREFERRER = new FhirCodeDefinition(
    'NOREFERRER',
    'noreferrer',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Indicates that no referrer information is to be leaked when following the link.',
    'Indicates that no referrer information is to be leaked when following the link.',
  );
  public static readonly OPENER = new FhirCodeDefinition(
    'OPENER',
    'opener',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Indicates that any newly created top-level browsing context which results from following the link will be an auxiliary browsing context.',
    'Indicates that any newly created top-level browsing context which results from following the link will be an auxiliary browsing context.',
  );
  public static readonly OPENID_2_LOCAL_ID = new FhirCodeDefinition(
    'OPENID_2_LOCAL_ID',
    'openid2.local_id',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to an OpenID Authentication server on which the context relies for an assertion that the end user controls an Identifier.',
    'Refers to an OpenID Authentication server on which the context relies for an assertion that the end user controls an Identifier.',
  );
  public static readonly OPENID_2_PROVIDER = new FhirCodeDefinition(
    'OPENID_2_PROVIDER',
    'openid2.provider',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource which accepts OpenID Authentication protocol messages for the context.',
    'Refers to a resource which accepts OpenID Authentication protocol messages for the context.',
  );
  public static readonly ORIGINAL = new FhirCodeDefinition(
    'ORIGINAL',
    'original',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The Target IRI points to an Original Resource.',
    'The Target IRI points to an Original Resource.',
  );
  public static readonly P_3_PV_1 = new FhirCodeDefinition(
    'P_3_PV_1',
    'P3Pv1',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a P3P privacy policy for the context.',
    'Refers to a P3P privacy policy for the context.',
  );
  public static readonly PAYMENT = new FhirCodeDefinition(
    'PAYMENT',
    'payment',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Indicates a resource where payment is accepted.',
    'Indicates a resource where payment is accepted.',
  );
  public static readonly PINGBACK = new FhirCodeDefinition(
    'PINGBACK',
    'pingback',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Gives the address of the pingback resource for the link context.',
    'Gives the address of the pingback resource for the link context.',
  );
  public static readonly PRECONNECT = new FhirCodeDefinition(
    'PRECONNECT',
    'preconnect',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Used to indicate an origin that will be used to fetch required        resources for the link context. Initiating an early connection, which        includes the DNS lookup, TCP handshake, and optional TLS negotiation,        allows the user agent to mask the high latency costs of establishing a        connection.',
    'Used to indicate an origin that will be used to fetch required        resources for the link context. Initiating an early connection, which        includes the DNS lookup, TCP handshake, and optional TLS negotiation,        allows the user agent to mask the high latency costs of establishing a        connection.',
  );
  public static readonly PREDECESSOR_VERSION = new FhirCodeDefinition(
    'PREDECESSOR_VERSION',
    'predecessor-version',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Points to a resource containing the predecessor       version in the version history.     ',
    'Points to a resource containing the predecessor       version in the version history.     ',
  );
  public static readonly PREFETCH = new FhirCodeDefinition(
    'PREFETCH',
    'prefetch',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The prefetch link relation type is used to identify a resource        that might be required by the next navigation from the link context, and        that the user agent ought to fetch, such that the user agent can deliver a        faster response once the resource is requested in the future.',
    'The prefetch link relation type is used to identify a resource        that might be required by the next navigation from the link context, and        that the user agent ought to fetch, such that the user agent can deliver a        faster response once the resource is requested in the future.',
  );
  public static readonly PRELOAD = new FhirCodeDefinition(
    'PRELOAD',
    'preload',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource that should be loaded early in the        processing of the link\'s context, without blocking rendering.',
    'Refers to a resource that should be loaded early in the        processing of the link\'s context, without blocking rendering.',
  );
  public static readonly PRERENDER = new FhirCodeDefinition(
    'PRERENDER',
    'prerender',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Used to identify a resource that might be required by the next        navigation from the link context, and that the user agent ought to fetch        and execute, such that the user agent can deliver a faster response once        the resource is requested in the future.',
    'Used to identify a resource that might be required by the next        navigation from the link context, and that the user agent ought to fetch        and execute, such that the user agent can deliver a faster response once        the resource is requested in the future.',
  );
  public static readonly PREV = new FhirCodeDefinition(
    'PREV',
    'prev',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Indicates that the link\'s context is a part of a series, and       that the previous in the series is the link target.     ',
    'Indicates that the link\'s context is a part of a series, and       that the previous in the series is the link target.     ',
  );
  public static readonly PREVIEW = new FhirCodeDefinition(
    'PREVIEW',
    'preview',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource that provides a preview of the link\'s context.',
    'Refers to a resource that provides a preview of the link\'s context.',
  );
  public static readonly PREVIOUS = new FhirCodeDefinition(
    'PREVIOUS',
    'previous',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to the previous resource in an ordered series       of resources.  Synonym for "prev".',
    'Refers to the previous resource in an ordered series       of resources.  Synonym for "prev".',
  );
  public static readonly PREV_ARCHIVE = new FhirCodeDefinition(
    'PREV_ARCHIVE',
    'prev-archive',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to the immediately preceding archive resource.',
    'Refers to the immediately preceding archive resource.',
  );
  public static readonly PRIVACY_POLICY = new FhirCodeDefinition(
    'PRIVACY_POLICY',
    'privacy-policy',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a privacy policy associated with the link\'s context.',
    'Refers to a privacy policy associated with the link\'s context.',
  );
  public static readonly PROFILE = new FhirCodeDefinition(
    'PROFILE',
    'profile',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifying that a resource representation conforms to a certain profile, without affecting the non-profile semantics of the resource representation.',
    'Identifying that a resource representation conforms to a certain profile, without affecting the non-profile semantics of the resource representation.',
  );
  public static readonly PUBLICATION = new FhirCodeDefinition(
    'PUBLICATION',
    'publication',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Links to a publication manifest. A manifest represents        structured information about a publication, such as informative metadata,        a list of resources, and a default reading order.',
    'Links to a publication manifest. A manifest represents        structured information about a publication, such as informative metadata,        a list of resources, and a default reading order.',
  );
  public static readonly RELATED = new FhirCodeDefinition(
    'RELATED',
    'related',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies a related resource.',
    'Identifies a related resource.',
  );
  public static readonly RESTCONF = new FhirCodeDefinition(
    'RESTCONF',
    'restconf',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies the root of RESTCONF API as configured on this HTTP server.       The "restconf" relation defines the root of the API defined in RFC8040.       Subsequent revisions of RESTCONF will use alternate relation values to support        protocol versioning.',
    'Identifies the root of RESTCONF API as configured on this HTTP server.       The "restconf" relation defines the root of the API defined in RFC8040.       Subsequent revisions of RESTCONF will use alternate relation values to support        protocol versioning.',
  );
  public static readonly REPLIES = new FhirCodeDefinition(
    'REPLIES',
    'replies',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies a resource that is a reply to the context       of the link.     ',
    'Identifies a resource that is a reply to the context       of the link.     ',
  );
  public static readonly RULEINPUT = new FhirCodeDefinition(
    'RULEINPUT',
    'ruleinput',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The resource identified by the link target provides an input value to an      instance of a rule, where the resource which represents the rule instance is      identified by the link context.     ',
    'The resource identified by the link target provides an input value to an      instance of a rule, where the resource which represents the rule instance is      identified by the link context.     ',
  );
  public static readonly SEARCH = new FhirCodeDefinition(
    'SEARCH',
    'search',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource that can be used to search through       the link\'s context and related resources.',
    'Refers to a resource that can be used to search through       the link\'s context and related resources.',
  );
  public static readonly SECTION = new FhirCodeDefinition(
    'SECTION',
    'section',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a section in a collection of resources.',
    'Refers to a section in a collection of resources.',
  );
  public static readonly SELF = new FhirCodeDefinition(
    'SELF',
    'self',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Conveys an identifier for the link\'s context.     ',
    'Conveys an identifier for the link\'s context.     ',
  );
  public static readonly SERVICE = new FhirCodeDefinition(
    'SERVICE',
    'service',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Indicates a URI that can be used to retrieve a       service document.',
    'Indicates a URI that can be used to retrieve a       service document.',
  );
  public static readonly SERVICE_DESC = new FhirCodeDefinition(
    'SERVICE_DESC',
    'service-desc',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies service description for the context that       is primarily intended for consumption by machines.',
    'Identifies service description for the context that       is primarily intended for consumption by machines.',
  );
  public static readonly SERVICE_DOC = new FhirCodeDefinition(
    'SERVICE_DOC',
    'service-doc',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies service documentation for the context that       is primarily intended for human consumption.',
    'Identifies service documentation for the context that       is primarily intended for human consumption.',
  );
  public static readonly SERVICE_META = new FhirCodeDefinition(
    'SERVICE_META',
    'service-meta',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies general metadata for the context that is       primarily intended for consumption by machines.',
    'Identifies general metadata for the context that is       primarily intended for consumption by machines.',
  );
  public static readonly SPONSORED = new FhirCodeDefinition(
    'SPONSORED',
    'sponsored',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource that is within a context that is  		sponsored (such as advertising or another compensation agreement).',
    'Refers to a resource that is within a context that is  		sponsored (such as advertising or another compensation agreement).',
  );
  public static readonly START = new FhirCodeDefinition(
    'START',
    'start',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to the first resource in a collection of       resources.',
    'Refers to the first resource in a collection of       resources.',
  );
  public static readonly STATUS = new FhirCodeDefinition(
    'STATUS',
    'status',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies a resource that represents the context\'s       status.',
    'Identifies a resource that represents the context\'s       status.',
  );
  public static readonly STYLESHEET = new FhirCodeDefinition(
    'STYLESHEET',
    'stylesheet',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a stylesheet.',
    'Refers to a stylesheet.',
  );
  public static readonly SUBSECTION = new FhirCodeDefinition(
    'SUBSECTION',
    'subsection',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource serving as a subsection in a       collection of resources.',
    'Refers to a resource serving as a subsection in a       collection of resources.',
  );
  public static readonly SUCCESSOR_VERSION = new FhirCodeDefinition(
    'SUCCESSOR_VERSION',
    'successor-version',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Points to a resource containing the successor version       in the version history.     ',
    'Points to a resource containing the successor version       in the version history.     ',
  );
  public static readonly SUNSET = new FhirCodeDefinition(
    'SUNSET',
    'sunset',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies a resource that provides information about       the context\'s retirement policy.     ',
    'Identifies a resource that provides information about       the context\'s retirement policy.     ',
  );
  public static readonly TAG = new FhirCodeDefinition(
    'TAG',
    'tag',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Gives a tag (identified by the given address) that applies to       the current document.     ',
    'Gives a tag (identified by the given address) that applies to       the current document.     ',
  );
  public static readonly TERMS_OF_SERVICE = new FhirCodeDefinition(
    'TERMS_OF_SERVICE',
    'terms-of-service',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to the terms of service associated with the link\'s context.',
    'Refers to the terms of service associated with the link\'s context.',
  );
  public static readonly TIMEGATE = new FhirCodeDefinition(
    'TIMEGATE',
    'timegate',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The Target IRI points to a TimeGate for an Original Resource.',
    'The Target IRI points to a TimeGate for an Original Resource.',
  );
  public static readonly TIMEMAP = new FhirCodeDefinition(
    'TIMEMAP',
    'timemap',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'The Target IRI points to a TimeMap for an Original Resource.',
    'The Target IRI points to a TimeMap for an Original Resource.',
  );
  public static readonly TYPE = new FhirCodeDefinition(
    'TYPE',
    'type',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource identifying the abstract semantic type of which the link\'s context is considered to be an instance.',
    'Refers to a resource identifying the abstract semantic type of which the link\'s context is considered to be an instance.',
  );
  public static readonly UGC = new FhirCodeDefinition(
    'UGC',
    'ugc',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a resource that is within a context that is User Generated Content.     ',
    'Refers to a resource that is within a context that is User Generated Content.     ',
  );
  public static readonly UP = new FhirCodeDefinition(
    'UP',
    'up',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Refers to a parent document in a hierarchy of       documents.     ',
    'Refers to a parent document in a hierarchy of       documents.     ',
  );
  public static readonly VERSION_HISTORY = new FhirCodeDefinition(
    'VERSION_HISTORY',
    'version-history',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Points to a resource containing the version history       for the context.     ',
    'Points to a resource containing the version history       for the context.     ',
  );
  public static readonly VIA = new FhirCodeDefinition(
    'VIA',
    'via',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies a resource that is the source of the       information in the link\'s context.     ',
    'Identifies a resource that is the source of the       information in the link\'s context.     ',
  );
  public static readonly WEBMENTION = new FhirCodeDefinition(
    'WEBMENTION',
    'webmention',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Identifies a target URI that supports the Webmention protocol.     This allows clients that mention a resource in some form of publishing process     to contact that endpoint and inform it that this resource has been mentioned.',
    'Identifies a target URI that supports the Webmention protocol.     This allows clients that mention a resource in some form of publishing process     to contact that endpoint and inform it that this resource has been mentioned.',
  );
  public static readonly WORKING_COPY = new FhirCodeDefinition(
    'WORKING_COPY',
    'working-copy',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Points to a working copy for this resource.',
    'Points to a working copy for this resource.',
  );
  public static readonly WORKING_COPY_OF = new FhirCodeDefinition(
    'WORKING_COPY_OF',
    'working-copy-of',
    'http://hl7.org/fhir/CodeSystem/iana-link-relations',
    'Points to the versioned resource from which this       working copy was obtained.     ',
    'Points to the versioned resource from which this       working copy was obtained.     ',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      IanaLinkRelationsEnum.ABOUT,
      IanaLinkRelationsEnum.ACL,
      IanaLinkRelationsEnum.ALTERNATE,
      IanaLinkRelationsEnum.AMPHTML,
      IanaLinkRelationsEnum.APPENDIX,
      IanaLinkRelationsEnum.APPLE_TOUCH_ICON,
      IanaLinkRelationsEnum.APPLE_TOUCH_STARTUP_IMAGE,
      IanaLinkRelationsEnum.ARCHIVES,
      IanaLinkRelationsEnum.AUTHOR,
      IanaLinkRelationsEnum.BLOCKED_BY,
      IanaLinkRelationsEnum.BOOKMARK,
      IanaLinkRelationsEnum.CANONICAL,
      IanaLinkRelationsEnum.CHAPTER,
      IanaLinkRelationsEnum.CITE_AS,
      IanaLinkRelationsEnum.COLLECTION,
      IanaLinkRelationsEnum.CONTENTS,
      IanaLinkRelationsEnum.CONVERTED_FROM,
      IanaLinkRelationsEnum.COPYRIGHT,
      IanaLinkRelationsEnum.CREATE_FORM,
      IanaLinkRelationsEnum.CURRENT,
      IanaLinkRelationsEnum.DESCRIBEDBY,
      IanaLinkRelationsEnum.DESCRIBES,
      IanaLinkRelationsEnum.DISCLOSURE,
      IanaLinkRelationsEnum.DNS_PREFETCH,
      IanaLinkRelationsEnum.DUPLICATE,
      IanaLinkRelationsEnum.EDIT,
      IanaLinkRelationsEnum.EDIT_FORM,
      IanaLinkRelationsEnum.EDIT_MEDIA,
      IanaLinkRelationsEnum.ENCLOSURE,
      IanaLinkRelationsEnum.EXTERNAL,
      IanaLinkRelationsEnum.FIRST,
      IanaLinkRelationsEnum.GLOSSARY,
      IanaLinkRelationsEnum.HELP,
      IanaLinkRelationsEnum.HOSTS,
      IanaLinkRelationsEnum.HUB,
      IanaLinkRelationsEnum.ICON,
      IanaLinkRelationsEnum.INDEX,
      IanaLinkRelationsEnum.INTERVAL_AFTER,
      IanaLinkRelationsEnum.INTERVAL_BEFORE,
      IanaLinkRelationsEnum.INTERVAL_CONTAINS,
      IanaLinkRelationsEnum.INTERVAL_DISJOINT,
      IanaLinkRelationsEnum.INTERVAL_DURING,
      IanaLinkRelationsEnum.INTERVAL_EQUALS,
      IanaLinkRelationsEnum.INTERVAL_FINISHED_BY,
      IanaLinkRelationsEnum.INTERVAL_FINISHES,
      IanaLinkRelationsEnum.INTERVAL_IN,
      IanaLinkRelationsEnum.INTERVAL_MEETS,
      IanaLinkRelationsEnum.INTERVAL_MET_BY,
      IanaLinkRelationsEnum.INTERVAL_OVERLAPPED_BY,
      IanaLinkRelationsEnum.INTERVAL_OVERLAPS,
      IanaLinkRelationsEnum.INTERVAL_STARTED_BY,
      IanaLinkRelationsEnum.INTERVAL_STARTS,
      IanaLinkRelationsEnum.ITEM,
      IanaLinkRelationsEnum.LAST,
      IanaLinkRelationsEnum.LATEST_VERSION,
      IanaLinkRelationsEnum.LICENSE,
      IanaLinkRelationsEnum.LINKSET,
      IanaLinkRelationsEnum.LRDD,
      IanaLinkRelationsEnum.MANIFEST,
      IanaLinkRelationsEnum.MASK_ICON,
      IanaLinkRelationsEnum.MEDIA_FEED,
      IanaLinkRelationsEnum.MEMENTO,
      IanaLinkRelationsEnum.MICROPUB,
      IanaLinkRelationsEnum.MODULEPRELOAD,
      IanaLinkRelationsEnum.MONITOR,
      IanaLinkRelationsEnum.MONITOR_GROUP,
      IanaLinkRelationsEnum.NEXT,
      IanaLinkRelationsEnum.NEXT_ARCHIVE,
      IanaLinkRelationsEnum.NOFOLLOW,
      IanaLinkRelationsEnum.NOOPENER,
      IanaLinkRelationsEnum.NOREFERRER,
      IanaLinkRelationsEnum.OPENER,
      IanaLinkRelationsEnum.OPENID_2_LOCAL_ID,
      IanaLinkRelationsEnum.OPENID_2_PROVIDER,
      IanaLinkRelationsEnum.ORIGINAL,
      IanaLinkRelationsEnum.P_3_PV_1,
      IanaLinkRelationsEnum.PAYMENT,
      IanaLinkRelationsEnum.PINGBACK,
      IanaLinkRelationsEnum.PRECONNECT,
      IanaLinkRelationsEnum.PREDECESSOR_VERSION,
      IanaLinkRelationsEnum.PREFETCH,
      IanaLinkRelationsEnum.PRELOAD,
      IanaLinkRelationsEnum.PRERENDER,
      IanaLinkRelationsEnum.PREV,
      IanaLinkRelationsEnum.PREVIEW,
      IanaLinkRelationsEnum.PREVIOUS,
      IanaLinkRelationsEnum.PREV_ARCHIVE,
      IanaLinkRelationsEnum.PRIVACY_POLICY,
      IanaLinkRelationsEnum.PROFILE,
      IanaLinkRelationsEnum.PUBLICATION,
      IanaLinkRelationsEnum.RELATED,
      IanaLinkRelationsEnum.RESTCONF,
      IanaLinkRelationsEnum.REPLIES,
      IanaLinkRelationsEnum.RULEINPUT,
      IanaLinkRelationsEnum.SEARCH,
      IanaLinkRelationsEnum.SECTION,
      IanaLinkRelationsEnum.SELF,
      IanaLinkRelationsEnum.SERVICE,
      IanaLinkRelationsEnum.SERVICE_DESC,
      IanaLinkRelationsEnum.SERVICE_DOC,
      IanaLinkRelationsEnum.SERVICE_META,
      IanaLinkRelationsEnum.SPONSORED,
      IanaLinkRelationsEnum.START,
      IanaLinkRelationsEnum.STATUS,
      IanaLinkRelationsEnum.STYLESHEET,
      IanaLinkRelationsEnum.SUBSECTION,
      IanaLinkRelationsEnum.SUCCESSOR_VERSION,
      IanaLinkRelationsEnum.SUNSET,
      IanaLinkRelationsEnum.TAG,
      IanaLinkRelationsEnum.TERMS_OF_SERVICE,
      IanaLinkRelationsEnum.TIMEGATE,
      IanaLinkRelationsEnum.TIMEMAP,
      IanaLinkRelationsEnum.TYPE,
      IanaLinkRelationsEnum.UGC,
      IanaLinkRelationsEnum.UP,
      IanaLinkRelationsEnum.VERSION_HISTORY,
      IanaLinkRelationsEnum.VIA,
      IanaLinkRelationsEnum.WEBMENTION,
      IanaLinkRelationsEnum.WORKING_COPY,
      IanaLinkRelationsEnum.WORKING_COPY_OF,
      IanaLinkRelationsEnum.NULL
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
    } else if (IanaLinkRelationsEnum.ABOUT.code === code) {
      return IanaLinkRelationsEnum.ABOUT;
    } else if (IanaLinkRelationsEnum.ACL.code === code) {
      return IanaLinkRelationsEnum.ACL;
    } else if (IanaLinkRelationsEnum.ALTERNATE.code === code) {
      return IanaLinkRelationsEnum.ALTERNATE;
    } else if (IanaLinkRelationsEnum.AMPHTML.code === code) {
      return IanaLinkRelationsEnum.AMPHTML;
    } else if (IanaLinkRelationsEnum.APPENDIX.code === code) {
      return IanaLinkRelationsEnum.APPENDIX;
    } else if (IanaLinkRelationsEnum.APPLE_TOUCH_ICON.code === code) {
      return IanaLinkRelationsEnum.APPLE_TOUCH_ICON;
    } else if (IanaLinkRelationsEnum.APPLE_TOUCH_STARTUP_IMAGE.code === code) {
      return IanaLinkRelationsEnum.APPLE_TOUCH_STARTUP_IMAGE;
    } else if (IanaLinkRelationsEnum.ARCHIVES.code === code) {
      return IanaLinkRelationsEnum.ARCHIVES;
    } else if (IanaLinkRelationsEnum.AUTHOR.code === code) {
      return IanaLinkRelationsEnum.AUTHOR;
    } else if (IanaLinkRelationsEnum.BLOCKED_BY.code === code) {
      return IanaLinkRelationsEnum.BLOCKED_BY;
    } else if (IanaLinkRelationsEnum.BOOKMARK.code === code) {
      return IanaLinkRelationsEnum.BOOKMARK;
    } else if (IanaLinkRelationsEnum.CANONICAL.code === code) {
      return IanaLinkRelationsEnum.CANONICAL;
    } else if (IanaLinkRelationsEnum.CHAPTER.code === code) {
      return IanaLinkRelationsEnum.CHAPTER;
    } else if (IanaLinkRelationsEnum.CITE_AS.code === code) {
      return IanaLinkRelationsEnum.CITE_AS;
    } else if (IanaLinkRelationsEnum.COLLECTION.code === code) {
      return IanaLinkRelationsEnum.COLLECTION;
    } else if (IanaLinkRelationsEnum.CONTENTS.code === code) {
      return IanaLinkRelationsEnum.CONTENTS;
    } else if (IanaLinkRelationsEnum.CONVERTED_FROM.code === code) {
      return IanaLinkRelationsEnum.CONVERTED_FROM;
    } else if (IanaLinkRelationsEnum.COPYRIGHT.code === code) {
      return IanaLinkRelationsEnum.COPYRIGHT;
    } else if (IanaLinkRelationsEnum.CREATE_FORM.code === code) {
      return IanaLinkRelationsEnum.CREATE_FORM;
    } else if (IanaLinkRelationsEnum.CURRENT.code === code) {
      return IanaLinkRelationsEnum.CURRENT;
    } else if (IanaLinkRelationsEnum.DESCRIBEDBY.code === code) {
      return IanaLinkRelationsEnum.DESCRIBEDBY;
    } else if (IanaLinkRelationsEnum.DESCRIBES.code === code) {
      return IanaLinkRelationsEnum.DESCRIBES;
    } else if (IanaLinkRelationsEnum.DISCLOSURE.code === code) {
      return IanaLinkRelationsEnum.DISCLOSURE;
    } else if (IanaLinkRelationsEnum.DNS_PREFETCH.code === code) {
      return IanaLinkRelationsEnum.DNS_PREFETCH;
    } else if (IanaLinkRelationsEnum.DUPLICATE.code === code) {
      return IanaLinkRelationsEnum.DUPLICATE;
    } else if (IanaLinkRelationsEnum.EDIT.code === code) {
      return IanaLinkRelationsEnum.EDIT;
    } else if (IanaLinkRelationsEnum.EDIT_FORM.code === code) {
      return IanaLinkRelationsEnum.EDIT_FORM;
    } else if (IanaLinkRelationsEnum.EDIT_MEDIA.code === code) {
      return IanaLinkRelationsEnum.EDIT_MEDIA;
    } else if (IanaLinkRelationsEnum.ENCLOSURE.code === code) {
      return IanaLinkRelationsEnum.ENCLOSURE;
    } else if (IanaLinkRelationsEnum.EXTERNAL.code === code) {
      return IanaLinkRelationsEnum.EXTERNAL;
    } else if (IanaLinkRelationsEnum.FIRST.code === code) {
      return IanaLinkRelationsEnum.FIRST;
    } else if (IanaLinkRelationsEnum.GLOSSARY.code === code) {
      return IanaLinkRelationsEnum.GLOSSARY;
    } else if (IanaLinkRelationsEnum.HELP.code === code) {
      return IanaLinkRelationsEnum.HELP;
    } else if (IanaLinkRelationsEnum.HOSTS.code === code) {
      return IanaLinkRelationsEnum.HOSTS;
    } else if (IanaLinkRelationsEnum.HUB.code === code) {
      return IanaLinkRelationsEnum.HUB;
    } else if (IanaLinkRelationsEnum.ICON.code === code) {
      return IanaLinkRelationsEnum.ICON;
    } else if (IanaLinkRelationsEnum.INDEX.code === code) {
      return IanaLinkRelationsEnum.INDEX;
    } else if (IanaLinkRelationsEnum.INTERVAL_AFTER.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_AFTER;
    } else if (IanaLinkRelationsEnum.INTERVAL_BEFORE.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_BEFORE;
    } else if (IanaLinkRelationsEnum.INTERVAL_CONTAINS.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_CONTAINS;
    } else if (IanaLinkRelationsEnum.INTERVAL_DISJOINT.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_DISJOINT;
    } else if (IanaLinkRelationsEnum.INTERVAL_DURING.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_DURING;
    } else if (IanaLinkRelationsEnum.INTERVAL_EQUALS.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_EQUALS;
    } else if (IanaLinkRelationsEnum.INTERVAL_FINISHED_BY.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_FINISHED_BY;
    } else if (IanaLinkRelationsEnum.INTERVAL_FINISHES.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_FINISHES;
    } else if (IanaLinkRelationsEnum.INTERVAL_IN.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_IN;
    } else if (IanaLinkRelationsEnum.INTERVAL_MEETS.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_MEETS;
    } else if (IanaLinkRelationsEnum.INTERVAL_MET_BY.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_MET_BY;
    } else if (IanaLinkRelationsEnum.INTERVAL_OVERLAPPED_BY.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_OVERLAPPED_BY;
    } else if (IanaLinkRelationsEnum.INTERVAL_OVERLAPS.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_OVERLAPS;
    } else if (IanaLinkRelationsEnum.INTERVAL_STARTED_BY.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_STARTED_BY;
    } else if (IanaLinkRelationsEnum.INTERVAL_STARTS.code === code) {
      return IanaLinkRelationsEnum.INTERVAL_STARTS;
    } else if (IanaLinkRelationsEnum.ITEM.code === code) {
      return IanaLinkRelationsEnum.ITEM;
    } else if (IanaLinkRelationsEnum.LAST.code === code) {
      return IanaLinkRelationsEnum.LAST;
    } else if (IanaLinkRelationsEnum.LATEST_VERSION.code === code) {
      return IanaLinkRelationsEnum.LATEST_VERSION;
    } else if (IanaLinkRelationsEnum.LICENSE.code === code) {
      return IanaLinkRelationsEnum.LICENSE;
    } else if (IanaLinkRelationsEnum.LINKSET.code === code) {
      return IanaLinkRelationsEnum.LINKSET;
    } else if (IanaLinkRelationsEnum.LRDD.code === code) {
      return IanaLinkRelationsEnum.LRDD;
    } else if (IanaLinkRelationsEnum.MANIFEST.code === code) {
      return IanaLinkRelationsEnum.MANIFEST;
    } else if (IanaLinkRelationsEnum.MASK_ICON.code === code) {
      return IanaLinkRelationsEnum.MASK_ICON;
    } else if (IanaLinkRelationsEnum.MEDIA_FEED.code === code) {
      return IanaLinkRelationsEnum.MEDIA_FEED;
    } else if (IanaLinkRelationsEnum.MEMENTO.code === code) {
      return IanaLinkRelationsEnum.MEMENTO;
    } else if (IanaLinkRelationsEnum.MICROPUB.code === code) {
      return IanaLinkRelationsEnum.MICROPUB;
    } else if (IanaLinkRelationsEnum.MODULEPRELOAD.code === code) {
      return IanaLinkRelationsEnum.MODULEPRELOAD;
    } else if (IanaLinkRelationsEnum.MONITOR.code === code) {
      return IanaLinkRelationsEnum.MONITOR;
    } else if (IanaLinkRelationsEnum.MONITOR_GROUP.code === code) {
      return IanaLinkRelationsEnum.MONITOR_GROUP;
    } else if (IanaLinkRelationsEnum.NEXT.code === code) {
      return IanaLinkRelationsEnum.NEXT;
    } else if (IanaLinkRelationsEnum.NEXT_ARCHIVE.code === code) {
      return IanaLinkRelationsEnum.NEXT_ARCHIVE;
    } else if (IanaLinkRelationsEnum.NOFOLLOW.code === code) {
      return IanaLinkRelationsEnum.NOFOLLOW;
    } else if (IanaLinkRelationsEnum.NOOPENER.code === code) {
      return IanaLinkRelationsEnum.NOOPENER;
    } else if (IanaLinkRelationsEnum.NOREFERRER.code === code) {
      return IanaLinkRelationsEnum.NOREFERRER;
    } else if (IanaLinkRelationsEnum.OPENER.code === code) {
      return IanaLinkRelationsEnum.OPENER;
    } else if (IanaLinkRelationsEnum.OPENID_2_LOCAL_ID.code === code) {
      return IanaLinkRelationsEnum.OPENID_2_LOCAL_ID;
    } else if (IanaLinkRelationsEnum.OPENID_2_PROVIDER.code === code) {
      return IanaLinkRelationsEnum.OPENID_2_PROVIDER;
    } else if (IanaLinkRelationsEnum.ORIGINAL.code === code) {
      return IanaLinkRelationsEnum.ORIGINAL;
    } else if (IanaLinkRelationsEnum.P_3_PV_1.code === code) {
      return IanaLinkRelationsEnum.P_3_PV_1;
    } else if (IanaLinkRelationsEnum.PAYMENT.code === code) {
      return IanaLinkRelationsEnum.PAYMENT;
    } else if (IanaLinkRelationsEnum.PINGBACK.code === code) {
      return IanaLinkRelationsEnum.PINGBACK;
    } else if (IanaLinkRelationsEnum.PRECONNECT.code === code) {
      return IanaLinkRelationsEnum.PRECONNECT;
    } else if (IanaLinkRelationsEnum.PREDECESSOR_VERSION.code === code) {
      return IanaLinkRelationsEnum.PREDECESSOR_VERSION;
    } else if (IanaLinkRelationsEnum.PREFETCH.code === code) {
      return IanaLinkRelationsEnum.PREFETCH;
    } else if (IanaLinkRelationsEnum.PRELOAD.code === code) {
      return IanaLinkRelationsEnum.PRELOAD;
    } else if (IanaLinkRelationsEnum.PRERENDER.code === code) {
      return IanaLinkRelationsEnum.PRERENDER;
    } else if (IanaLinkRelationsEnum.PREV.code === code) {
      return IanaLinkRelationsEnum.PREV;
    } else if (IanaLinkRelationsEnum.PREVIEW.code === code) {
      return IanaLinkRelationsEnum.PREVIEW;
    } else if (IanaLinkRelationsEnum.PREVIOUS.code === code) {
      return IanaLinkRelationsEnum.PREVIOUS;
    } else if (IanaLinkRelationsEnum.PREV_ARCHIVE.code === code) {
      return IanaLinkRelationsEnum.PREV_ARCHIVE;
    } else if (IanaLinkRelationsEnum.PRIVACY_POLICY.code === code) {
      return IanaLinkRelationsEnum.PRIVACY_POLICY;
    } else if (IanaLinkRelationsEnum.PROFILE.code === code) {
      return IanaLinkRelationsEnum.PROFILE;
    } else if (IanaLinkRelationsEnum.PUBLICATION.code === code) {
      return IanaLinkRelationsEnum.PUBLICATION;
    } else if (IanaLinkRelationsEnum.RELATED.code === code) {
      return IanaLinkRelationsEnum.RELATED;
    } else if (IanaLinkRelationsEnum.RESTCONF.code === code) {
      return IanaLinkRelationsEnum.RESTCONF;
    } else if (IanaLinkRelationsEnum.REPLIES.code === code) {
      return IanaLinkRelationsEnum.REPLIES;
    } else if (IanaLinkRelationsEnum.RULEINPUT.code === code) {
      return IanaLinkRelationsEnum.RULEINPUT;
    } else if (IanaLinkRelationsEnum.SEARCH.code === code) {
      return IanaLinkRelationsEnum.SEARCH;
    } else if (IanaLinkRelationsEnum.SECTION.code === code) {
      return IanaLinkRelationsEnum.SECTION;
    } else if (IanaLinkRelationsEnum.SELF.code === code) {
      return IanaLinkRelationsEnum.SELF;
    } else if (IanaLinkRelationsEnum.SERVICE.code === code) {
      return IanaLinkRelationsEnum.SERVICE;
    } else if (IanaLinkRelationsEnum.SERVICE_DESC.code === code) {
      return IanaLinkRelationsEnum.SERVICE_DESC;
    } else if (IanaLinkRelationsEnum.SERVICE_DOC.code === code) {
      return IanaLinkRelationsEnum.SERVICE_DOC;
    } else if (IanaLinkRelationsEnum.SERVICE_META.code === code) {
      return IanaLinkRelationsEnum.SERVICE_META;
    } else if (IanaLinkRelationsEnum.SPONSORED.code === code) {
      return IanaLinkRelationsEnum.SPONSORED;
    } else if (IanaLinkRelationsEnum.START.code === code) {
      return IanaLinkRelationsEnum.START;
    } else if (IanaLinkRelationsEnum.STATUS.code === code) {
      return IanaLinkRelationsEnum.STATUS;
    } else if (IanaLinkRelationsEnum.STYLESHEET.code === code) {
      return IanaLinkRelationsEnum.STYLESHEET;
    } else if (IanaLinkRelationsEnum.SUBSECTION.code === code) {
      return IanaLinkRelationsEnum.SUBSECTION;
    } else if (IanaLinkRelationsEnum.SUCCESSOR_VERSION.code === code) {
      return IanaLinkRelationsEnum.SUCCESSOR_VERSION;
    } else if (IanaLinkRelationsEnum.SUNSET.code === code) {
      return IanaLinkRelationsEnum.SUNSET;
    } else if (IanaLinkRelationsEnum.TAG.code === code) {
      return IanaLinkRelationsEnum.TAG;
    } else if (IanaLinkRelationsEnum.TERMS_OF_SERVICE.code === code) {
      return IanaLinkRelationsEnum.TERMS_OF_SERVICE;
    } else if (IanaLinkRelationsEnum.TIMEGATE.code === code) {
      return IanaLinkRelationsEnum.TIMEGATE;
    } else if (IanaLinkRelationsEnum.TIMEMAP.code === code) {
      return IanaLinkRelationsEnum.TIMEMAP;
    } else if (IanaLinkRelationsEnum.TYPE.code === code) {
      return IanaLinkRelationsEnum.TYPE;
    } else if (IanaLinkRelationsEnum.UGC.code === code) {
      return IanaLinkRelationsEnum.UGC;
    } else if (IanaLinkRelationsEnum.UP.code === code) {
      return IanaLinkRelationsEnum.UP;
    } else if (IanaLinkRelationsEnum.VERSION_HISTORY.code === code) {
      return IanaLinkRelationsEnum.VERSION_HISTORY;
    } else if (IanaLinkRelationsEnum.VIA.code === code) {
      return IanaLinkRelationsEnum.VIA;
    } else if (IanaLinkRelationsEnum.WEBMENTION.code === code) {
      return IanaLinkRelationsEnum.WEBMENTION;
    } else if (IanaLinkRelationsEnum.WORKING_COPY.code === code) {
      return IanaLinkRelationsEnum.WORKING_COPY;
    } else if (IanaLinkRelationsEnum.WORKING_COPY_OF.code === code) {
      return IanaLinkRelationsEnum.WORKING_COPY_OF;
    } else if (IanaLinkRelationsEnum.NULL.code === code) {
      return IanaLinkRelationsEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown IanaLinkRelationsEnum 'code' value '${code}'`);
    }
  }
}
