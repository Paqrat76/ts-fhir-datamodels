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
 * FhirTypesEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/fhir-types
 * CodeSystem.name: FhirTypes
 * CodeSystem.description: One of the types defined as part of this version of FHIR.
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
 * FHIR CodeSystem: FhirTypesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem FhirTypes](http://hl7.org/fhir/fhir-types)
 */
export class FhirTypesEnum implements IFhirCodeEnum {
  public static readonly BASE = new FhirCodeDefinition(
    'BASE',
    'Base',
    'http://hl7.org/fhir/fhir-types',
    'Base',
    'Base Type: Base definition for all types defined in FHIR type system.',
  );
  public static readonly ELEMENT = new FhirCodeDefinition(
    'ELEMENT',
    'Element',
    'http://hl7.org/fhir/fhir-types',
    'Element',
    'Element Type: Base definition for all elements in a resource.',
  );
  public static readonly BACKBONE_ELEMENT = new FhirCodeDefinition(
    'BACKBONE_ELEMENT',
    'BackboneElement',
    'http://hl7.org/fhir/fhir-types',
    'BackboneElement',
    'BackboneElement Type: Base definition for all elements that are defined inside a resource - but not those in a data type.',
  );
  public static readonly DATA_TYPE = new FhirCodeDefinition(
    'DATA_TYPE',
    'DataType',
    'http://hl7.org/fhir/fhir-types',
    'DataType',
    'DataType Type: The base class for all re-useable types defined as part of the FHIR Specification.',
  );
  public static readonly ADDRESS = new FhirCodeDefinition(
    'ADDRESS',
    'Address',
    'http://hl7.org/fhir/fhir-types',
    'Address',
    'Address Type: An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world. The ISO21090-codedString may be used to provide a coded representation of the contents of strings in an Address.',
  );
  public static readonly ANNOTATION = new FhirCodeDefinition(
    'ANNOTATION',
    'Annotation',
    'http://hl7.org/fhir/fhir-types',
    'Annotation',
    'Annotation Type: A  text note which also  contains information about who made the statement and when.',
  );
  public static readonly ATTACHMENT = new FhirCodeDefinition(
    'ATTACHMENT',
    'Attachment',
    'http://hl7.org/fhir/fhir-types',
    'Attachment',
    'Attachment Type: For referring to data content defined in other formats.',
  );
  public static readonly AVAILABILITY = new FhirCodeDefinition(
    'AVAILABILITY',
    'Availability',
    'http://hl7.org/fhir/fhir-types',
    'Availability',
    'Availability Type: Availability data for an {item}.',
  );
  public static readonly BACKBONE_TYPE = new FhirCodeDefinition(
    'BACKBONE_TYPE',
    'BackboneType',
    'http://hl7.org/fhir/fhir-types',
    'BackboneType',
    'BackboneType Type: Base definition for the few data types that are allowed to carry modifier extensions.',
  );
  public static readonly DOSAGE = new FhirCodeDefinition(
    'DOSAGE',
    'Dosage',
    'http://hl7.org/fhir/fhir-types',
    'Dosage',
    'Dosage Type: Indicates how the medication is/was taken or should be taken by the patient.',
  );
  public static readonly ELEMENT_DEFINITION = new FhirCodeDefinition(
    'ELEMENT_DEFINITION',
    'ElementDefinition',
    'http://hl7.org/fhir/fhir-types',
    'ElementDefinition',
    'ElementDefinition Type: Captures constraints on each element within the resource, profile, or extension.',
  );
  public static readonly MARKETING_STATUS = new FhirCodeDefinition(
    'MARKETING_STATUS',
    'MarketingStatus',
    'http://hl7.org/fhir/fhir-types',
    'MarketingStatus',
    'MarketingStatus Type: The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.',
  );
  public static readonly PRODUCT_SHELF_LIFE = new FhirCodeDefinition(
    'PRODUCT_SHELF_LIFE',
    'ProductShelfLife',
    'http://hl7.org/fhir/fhir-types',
    'ProductShelfLife',
    'ProductShelfLife Type: The shelf-life and storage information for a medicinal product item or container can be described using this class.',
  );
  public static readonly TIMING = new FhirCodeDefinition(
    'TIMING',
    'Timing',
    'http://hl7.org/fhir/fhir-types',
    'Timing',
    'Timing Type: Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.',
  );
  public static readonly CODEABLE_CONCEPT = new FhirCodeDefinition(
    'CODEABLE_CONCEPT',
    'CodeableConcept',
    'http://hl7.org/fhir/fhir-types',
    'CodeableConcept',
    'CodeableConcept Type: A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.',
  );
  public static readonly CODEABLE_REFERENCE = new FhirCodeDefinition(
    'CODEABLE_REFERENCE',
    'CodeableReference',
    'http://hl7.org/fhir/fhir-types',
    'CodeableReference',
    'CodeableReference Type: A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class).',
  );
  public static readonly CODING = new FhirCodeDefinition(
    'CODING',
    'Coding',
    'http://hl7.org/fhir/fhir-types',
    'Coding',
    'Coding Type: A reference to a code defined by a terminology system.',
  );
  public static readonly CONTACT_DETAIL = new FhirCodeDefinition(
    'CONTACT_DETAIL',
    'ContactDetail',
    'http://hl7.org/fhir/fhir-types',
    'ContactDetail',
    'ContactDetail Type: Specifies contact information for a person or organization.',
  );
  public static readonly CONTACT_POINT = new FhirCodeDefinition(
    'CONTACT_POINT',
    'ContactPoint',
    'http://hl7.org/fhir/fhir-types',
    'ContactPoint',
    'ContactPoint Type: Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.',
  );
  public static readonly CONTRIBUTOR = new FhirCodeDefinition(
    'CONTRIBUTOR',
    'Contributor',
    'http://hl7.org/fhir/fhir-types',
    'Contributor',
    'Contributor Type: A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.',
  );
  public static readonly DATA_REQUIREMENT = new FhirCodeDefinition(
    'DATA_REQUIREMENT',
    'DataRequirement',
    'http://hl7.org/fhir/fhir-types',
    'DataRequirement',
    'DataRequirement Type: Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.',
  );
  public static readonly EXPRESSION = new FhirCodeDefinition(
    'EXPRESSION',
    'Expression',
    'http://hl7.org/fhir/fhir-types',
    'Expression',
    'Expression Type: A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.',
  );
  public static readonly EXTENDED_CONTACT_DETAIL = new FhirCodeDefinition(
    'EXTENDED_CONTACT_DETAIL',
    'ExtendedContactDetail',
    'http://hl7.org/fhir/fhir-types',
    'ExtendedContactDetail',
    'ExtendedContactDetail Type: Specifies contact information for a specific purpose over a period of time, might be handled/monitored by a specific named person or organization.',
  );
  public static readonly EXTENSION = new FhirCodeDefinition(
    'EXTENSION',
    'Extension',
    'http://hl7.org/fhir/fhir-types',
    'Extension',
    'Extension Type: Optional Extension Element - found in all resources.',
  );
  public static readonly HUMAN_NAME = new FhirCodeDefinition(
    'HUMAN_NAME',
    'HumanName',
    'http://hl7.org/fhir/fhir-types',
    'HumanName',
    'HumanName Type: A name, normally of a human, that can be used for other living entities (e.g. animals but not organizations) that have been assigned names by a human and may need the use of name parts or the need for usage information.',
  );
  public static readonly IDENTIFIER = new FhirCodeDefinition(
    'IDENTIFIER',
    'Identifier',
    'http://hl7.org/fhir/fhir-types',
    'Identifier',
    'Identifier Type: An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.',
  );
  public static readonly META = new FhirCodeDefinition(
    'META',
    'Meta',
    'http://hl7.org/fhir/fhir-types',
    'Meta',
    'Meta Type: The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
  );
  public static readonly MONETARY_COMPONENT = new FhirCodeDefinition(
    'MONETARY_COMPONENT',
    'MonetaryComponent',
    'http://hl7.org/fhir/fhir-types',
    'MonetaryComponent',
    'MonetaryComponent Type: Availability data for an {item}.',
  );
  public static readonly MONEY = new FhirCodeDefinition(
    'MONEY',
    'Money',
    'http://hl7.org/fhir/fhir-types',
    'Money',
    'Money Type: An amount of economic utility in some recognized currency.',
  );
  public static readonly NARRATIVE = new FhirCodeDefinition(
    'NARRATIVE',
    'Narrative',
    'http://hl7.org/fhir/fhir-types',
    'Narrative',
    'Narrative Type: A human-readable summary of the resource conveying the essential clinical and business information for the resource.',
  );
  public static readonly PARAMETER_DEFINITION = new FhirCodeDefinition(
    'PARAMETER_DEFINITION',
    'ParameterDefinition',
    'http://hl7.org/fhir/fhir-types',
    'ParameterDefinition',
    'ParameterDefinition Type: The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.',
  );
  public static readonly PERIOD = new FhirCodeDefinition(
    'PERIOD',
    'Period',
    'http://hl7.org/fhir/fhir-types',
    'Period',
    'Period Type: A time period defined by a start and end date and optionally time.',
  );
  public static readonly PRIMITIVE_TYPE = new FhirCodeDefinition(
    'PRIMITIVE_TYPE',
    'PrimitiveType',
    'http://hl7.org/fhir/fhir-types',
    'PrimitiveType',
    'PrimitiveType Type: The base type for all re-useable types defined that have a simple property.',
  );
  public static readonly BASE_64_BINARY = new FhirCodeDefinition(
    'BASE_64_BINARY',
    'base64Binary',
    'http://hl7.org/fhir/fhir-types',
    'base64Binary',
    'base64Binary Type: A stream of bytes',
  );
  public static readonly BOOLEAN = new FhirCodeDefinition(
    'BOOLEAN',
    'boolean',
    'http://hl7.org/fhir/fhir-types',
    'boolean',
    'boolean Type: Value of "true" or "false"',
  );
  public static readonly DATE = new FhirCodeDefinition(
    'DATE',
    'date',
    'http://hl7.org/fhir/fhir-types',
    'date',
    'date Type: A date or partial date (e.g. just year or year + month). There is no UTC offset. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.',
  );
  public static readonly DATE_TIME = new FhirCodeDefinition(
    'DATE_TIME',
    'dateTime',
    'http://hl7.org/fhir/fhir-types',
    'dateTime',
    'dateTime Type: A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a UTC offset SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.',
  );
  public static readonly DECIMAL = new FhirCodeDefinition(
    'DECIMAL',
    'decimal',
    'http://hl7.org/fhir/fhir-types',
    'decimal',
    'decimal Type: A rational number with implicit precision',
  );
  public static readonly INSTANT = new FhirCodeDefinition(
    'INSTANT',
    'instant',
    'http://hl7.org/fhir/fhir-types',
    'instant',
    'instant Type: An instant in time - known at least to the second',
  );
  public static readonly INTEGER = new FhirCodeDefinition(
    'INTEGER',
    'integer',
    'http://hl7.org/fhir/fhir-types',
    'integer',
    'integer Type: A whole number',
  );
  public static readonly POSITIVE_INT = new FhirCodeDefinition(
    'POSITIVE_INT',
    'positiveInt',
    'http://hl7.org/fhir/fhir-types',
    'positiveInt',
    'positiveInt type: An integer with a value that is positive (e.g. >0)',
  );
  public static readonly UNSIGNED_INT = new FhirCodeDefinition(
    'UNSIGNED_INT',
    'unsignedInt',
    'http://hl7.org/fhir/fhir-types',
    'unsignedInt',
    'unsignedInt type: An integer with a value that is not negative (e.g. >= 0)',
  );
  public static readonly INTEGER_64 = new FhirCodeDefinition(
    'INTEGER_64',
    'integer64',
    'http://hl7.org/fhir/fhir-types',
    'integer64',
    'integer64 Type: A very large whole number',
  );
  public static readonly STRING = new FhirCodeDefinition(
    'STRING',
    'string',
    'http://hl7.org/fhir/fhir-types',
    'string',
    'string Type: A sequence of Unicode characters',
  );
  public static readonly CODE = new FhirCodeDefinition(
    'CODE',
    'code',
    'http://hl7.org/fhir/fhir-types',
    'code',
    'code type: A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents',
  );
  public static readonly ID = new FhirCodeDefinition(
    'ID',
    'id',
    'http://hl7.org/fhir/fhir-types',
    'id',
    'id type: Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.',
  );
  public static readonly MARKDOWN = new FhirCodeDefinition(
    'MARKDOWN',
    'markdown',
    'http://hl7.org/fhir/fhir-types',
    'markdown',
    'markdown type: A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine',
  );
  public static readonly TIME = new FhirCodeDefinition(
    'TIME',
    'time',
    'http://hl7.org/fhir/fhir-types',
    'time',
    'time Type: A time during the day, with no date specified',
  );
  public static readonly URI = new FhirCodeDefinition(
    'URI',
    'uri',
    'http://hl7.org/fhir/fhir-types',
    'uri',
    'uri Type: String of characters used to identify a name or a resource',
  );
  public static readonly CANONICAL = new FhirCodeDefinition(
    'CANONICAL',
    'canonical',
    'http://hl7.org/fhir/fhir-types',
    'canonical',
    'canonical type: A URI that is a reference to a canonical URL on a FHIR resource',
  );
  public static readonly OID = new FhirCodeDefinition(
    'OID',
    'oid',
    'http://hl7.org/fhir/fhir-types',
    'oid',
    'oid type: An OID represented as a URI',
  );
  public static readonly URL = new FhirCodeDefinition(
    'URL',
    'url',
    'http://hl7.org/fhir/fhir-types',
    'url',
    'url type: A URI that is a literal reference',
  );
  public static readonly UUID = new FhirCodeDefinition(
    'UUID',
    'uuid',
    'http://hl7.org/fhir/fhir-types',
    'uuid',
    'uuid type: A UUID, represented as a URI',
  );
  public static readonly QUANTITY = new FhirCodeDefinition(
    'QUANTITY',
    'Quantity',
    'http://hl7.org/fhir/fhir-types',
    'Quantity',
    'Quantity Type: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.',
  );
  public static readonly AGE = new FhirCodeDefinition(
    'AGE',
    'Age',
    'http://hl7.org/fhir/fhir-types',
    'Age',
    'Age Type: A duration of time during which an organism (or a process) has existed.',
  );
  public static readonly COUNT = new FhirCodeDefinition(
    'COUNT',
    'Count',
    'http://hl7.org/fhir/fhir-types',
    'Count',
    'Count Type: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.',
  );
  public static readonly DISTANCE = new FhirCodeDefinition(
    'DISTANCE',
    'Distance',
    'http://hl7.org/fhir/fhir-types',
    'Distance',
    'Distance Type: A length - a value with a unit that is a physical distance.',
  );
  public static readonly DURATION = new FhirCodeDefinition(
    'DURATION',
    'Duration',
    'http://hl7.org/fhir/fhir-types',
    'Duration',
    'Duration Type: A length of time.',
  );
  public static readonly RANGE = new FhirCodeDefinition(
    'RANGE',
    'Range',
    'http://hl7.org/fhir/fhir-types',
    'Range',
    'Range Type: A set of ordered Quantities defined by a low and high limit.',
  );
  public static readonly RATIO = new FhirCodeDefinition(
    'RATIO',
    'Ratio',
    'http://hl7.org/fhir/fhir-types',
    'Ratio',
    'Ratio Type: A relationship of two Quantity values - expressed as a numerator and a denominator.',
  );
  public static readonly RATIO_RANGE = new FhirCodeDefinition(
    'RATIO_RANGE',
    'RatioRange',
    'http://hl7.org/fhir/fhir-types',
    'RatioRange',
    'RatioRange Type: A range of ratios expressed as a low and high numerator and a denominator.',
  );
  public static readonly REFERENCE = new FhirCodeDefinition(
    'REFERENCE',
    'Reference',
    'http://hl7.org/fhir/fhir-types',
    'Reference',
    'Reference Type: A reference from one resource to another.',
  );
  public static readonly RELATED_ARTIFACT = new FhirCodeDefinition(
    'RELATED_ARTIFACT',
    'RelatedArtifact',
    'http://hl7.org/fhir/fhir-types',
    'RelatedArtifact',
    'RelatedArtifact Type: Related artifacts such as additional documentation, justification, or bibliographic references.',
  );
  public static readonly SAMPLED_DATA = new FhirCodeDefinition(
    'SAMPLED_DATA',
    'SampledData',
    'http://hl7.org/fhir/fhir-types',
    'SampledData',
    'SampledData Type: A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.',
  );
  public static readonly SIGNATURE = new FhirCodeDefinition(
    'SIGNATURE',
    'Signature',
    'http://hl7.org/fhir/fhir-types',
    'Signature',
    'Signature Type: A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.',
  );
  public static readonly TRIGGER_DEFINITION = new FhirCodeDefinition(
    'TRIGGER_DEFINITION',
    'TriggerDefinition',
    'http://hl7.org/fhir/fhir-types',
    'TriggerDefinition',
    'TriggerDefinition Type: A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.',
  );
  public static readonly USAGE_CONTEXT = new FhirCodeDefinition(
    'USAGE_CONTEXT',
    'UsageContext',
    'http://hl7.org/fhir/fhir-types',
    'UsageContext',
    'UsageContext Type: Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).',
  );
  public static readonly VIRTUAL_SERVICE_DETAIL = new FhirCodeDefinition(
    'VIRTUAL_SERVICE_DETAIL',
    'VirtualServiceDetail',
    'http://hl7.org/fhir/fhir-types',
    'VirtualServiceDetail',
    'VirtualServiceDetail Type: Virtual Service Contact Details.',
  );
  public static readonly XHTML = new FhirCodeDefinition(
    'XHTML',
    'xhtml',
    'http://hl7.org/fhir/fhir-types',
    'xhtml',
    'xhtml Type definition',
  );
  public static readonly RESOURCE = new FhirCodeDefinition(
    'RESOURCE',
    'Resource',
    'http://hl7.org/fhir/fhir-types',
    'Resource',
    'This is the base resource type for everything.',
  );
  public static readonly BINARY = new FhirCodeDefinition(
    'BINARY',
    'Binary',
    'http://hl7.org/fhir/fhir-types',
    'Binary',
    'A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.',
  );
  public static readonly BUNDLE = new FhirCodeDefinition(
    'BUNDLE',
    'Bundle',
    'http://hl7.org/fhir/fhir-types',
    'Bundle',
    'A container for a collection of resources.',
  );
  public static readonly DOMAIN_RESOURCE = new FhirCodeDefinition(
    'DOMAIN_RESOURCE',
    'DomainResource',
    'http://hl7.org/fhir/fhir-types',
    'DomainResource',
    'A resource that includes narrative, extensions, and contained resources.',
  );
  public static readonly ACCOUNT = new FhirCodeDefinition(
    'ACCOUNT',
    'Account',
    'http://hl7.org/fhir/fhir-types',
    'Account',
    'A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.',
  );
  public static readonly ACTIVITY_DEFINITION = new FhirCodeDefinition(
    'ACTIVITY_DEFINITION',
    'ActivityDefinition',
    'http://hl7.org/fhir/fhir-types',
    'ActivityDefinition',
    'This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.',
  );
  public static readonly ACTOR_DEFINITION = new FhirCodeDefinition(
    'ACTOR_DEFINITION',
    'ActorDefinition',
    'http://hl7.org/fhir/fhir-types',
    'ActorDefinition',
    'The ActorDefinition resource is used to describe an actor - a human or an application that plays a role in data exchange, and that may have obligations associated with the role the actor plays.',
  );
  public static readonly ADMINISTRABLE_PRODUCT_DEFINITION = new FhirCodeDefinition(
    'ADMINISTRABLE_PRODUCT_DEFINITION',
    'AdministrableProductDefinition',
    'http://hl7.org/fhir/fhir-types',
    'AdministrableProductDefinition',
    'A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).',
  );
  public static readonly ADVERSE_EVENT = new FhirCodeDefinition(
    'ADVERSE_EVENT',
    'AdverseEvent',
    'http://hl7.org/fhir/fhir-types',
    'AdverseEvent',
    'An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical  research trial management.  Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers.  Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints.',
  );
  public static readonly ALLERGY_INTOLERANCE = new FhirCodeDefinition(
    'ALLERGY_INTOLERANCE',
    'AllergyIntolerance',
    'http://hl7.org/fhir/fhir-types',
    'AllergyIntolerance',
    'Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.',
  );
  public static readonly APPOINTMENT = new FhirCodeDefinition(
    'APPOINTMENT',
    'Appointment',
    'http://hl7.org/fhir/fhir-types',
    'Appointment',
    'A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).',
  );
  public static readonly APPOINTMENT_RESPONSE = new FhirCodeDefinition(
    'APPOINTMENT_RESPONSE',
    'AppointmentResponse',
    'http://hl7.org/fhir/fhir-types',
    'AppointmentResponse',
    'A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.',
  );
  public static readonly ARTIFACT_ASSESSMENT = new FhirCodeDefinition(
    'ARTIFACT_ASSESSMENT',
    'ArtifactAssessment',
    'http://hl7.org/fhir/fhir-types',
    'ArtifactAssessment',
    'This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content.',
  );
  public static readonly AUDIT_EVENT = new FhirCodeDefinition(
    'AUDIT_EVENT',
    'AuditEvent',
    'http://hl7.org/fhir/fhir-types',
    'AuditEvent',
    'A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis.',
  );
  public static readonly BASIC = new FhirCodeDefinition(
    'BASIC',
    'Basic',
    'http://hl7.org/fhir/fhir-types',
    'Basic',
    'Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don\'t map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.',
  );
  public static readonly BIOLOGICALLY_DERIVED_PRODUCT = new FhirCodeDefinition(
    'BIOLOGICALLY_DERIVED_PRODUCT',
    'BiologicallyDerivedProduct',
    'http://hl7.org/fhir/fhir-types',
    'BiologicallyDerivedProduct',
    'A biological material originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.',
  );
  public static readonly BIOLOGICALLY_DERIVED_PRODUCT_DISPENSE = new FhirCodeDefinition(
    'BIOLOGICALLY_DERIVED_PRODUCT_DISPENSE',
    'BiologicallyDerivedProductDispense',
    'http://hl7.org/fhir/fhir-types',
    'BiologicallyDerivedProductDispense',
    'A record of dispensation of a biologically derived product.',
  );
  public static readonly BODY_STRUCTURE = new FhirCodeDefinition(
    'BODY_STRUCTURE',
    'BodyStructure',
    'http://hl7.org/fhir/fhir-types',
    'BodyStructure',
    'Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.',
  );
  public static readonly CANONICAL_RESOURCE = new FhirCodeDefinition(
    'CANONICAL_RESOURCE',
    'CanonicalResource',
    'http://hl7.org/fhir/fhir-types',
    'CanonicalResource',
    'Common Interface declaration for conformance and knowledge artifact resources.',
  );
  public static readonly CAPABILITY_STATEMENT = new FhirCodeDefinition(
    'CAPABILITY_STATEMENT',
    'CapabilityStatement',
    'http://hl7.org/fhir/fhir-types',
    'CapabilityStatement',
    'A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server or Client for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.',
  );
  public static readonly CARE_PLAN = new FhirCodeDefinition(
    'CARE_PLAN',
    'CarePlan',
    'http://hl7.org/fhir/fhir-types',
    'CarePlan',
    'Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.',
  );
  public static readonly CARE_TEAM = new FhirCodeDefinition(
    'CARE_TEAM',
    'CareTeam',
    'http://hl7.org/fhir/fhir-types',
    'CareTeam',
    'The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care.',
  );
  public static readonly CHARGE_ITEM = new FhirCodeDefinition(
    'CHARGE_ITEM',
    'ChargeItem',
    'http://hl7.org/fhir/fhir-types',
    'ChargeItem',
    'The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.',
  );
  public static readonly CHARGE_ITEM_DEFINITION = new FhirCodeDefinition(
    'CHARGE_ITEM_DEFINITION',
    'ChargeItemDefinition',
    'http://hl7.org/fhir/fhir-types',
    'ChargeItemDefinition',
    'The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.',
  );
  public static readonly CITATION = new FhirCodeDefinition(
    'CITATION',
    'Citation',
    'http://hl7.org/fhir/fhir-types',
    'Citation',
    'The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.',
  );
  public static readonly CLAIM = new FhirCodeDefinition(
    'CLAIM',
    'Claim',
    'http://hl7.org/fhir/fhir-types',
    'Claim',
    'A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.',
  );
  public static readonly CLAIM_RESPONSE = new FhirCodeDefinition(
    'CLAIM_RESPONSE',
    'ClaimResponse',
    'http://hl7.org/fhir/fhir-types',
    'ClaimResponse',
    'This resource provides the adjudication details from the processing of a Claim resource.',
  );
  public static readonly CLINICAL_IMPRESSION = new FhirCodeDefinition(
    'CLINICAL_IMPRESSION',
    'ClinicalImpression',
    'http://hl7.org/fhir/fhir-types',
    'ClinicalImpression',
    'A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient\'s condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.',
  );
  public static readonly CLINICAL_USE_DEFINITION = new FhirCodeDefinition(
    'CLINICAL_USE_DEFINITION',
    'ClinicalUseDefinition',
    'http://hl7.org/fhir/fhir-types',
    'ClinicalUseDefinition',
    'A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.',
  );
  public static readonly CODE_SYSTEM = new FhirCodeDefinition(
    'CODE_SYSTEM',
    'CodeSystem',
    'http://hl7.org/fhir/fhir-types',
    'CodeSystem',
    'The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.',
  );
  public static readonly COMMUNICATION = new FhirCodeDefinition(
    'COMMUNICATION',
    'Communication',
    'http://hl7.org/fhir/fhir-types',
    'Communication',
    'A clinical or business level record of information being transmitted or shared; e.g. an alert that was sent to a responsible provider, a public health agency communication to a provider/reporter in response to a case report for a reportable condition.',
  );
  public static readonly COMMUNICATION_REQUEST = new FhirCodeDefinition(
    'COMMUNICATION_REQUEST',
    'CommunicationRequest',
    'http://hl7.org/fhir/fhir-types',
    'CommunicationRequest',
    'A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.',
  );
  public static readonly COMPARTMENT_DEFINITION = new FhirCodeDefinition(
    'COMPARTMENT_DEFINITION',
    'CompartmentDefinition',
    'http://hl7.org/fhir/fhir-types',
    'CompartmentDefinition',
    'A compartment definition that defines how resources are accessed on a server.',
  );
  public static readonly COMPOSITION = new FhirCodeDefinition(
    'COMPOSITION',
    'Composition',
    'http://hl7.org/fhir/fhir-types',
    'Composition',
    'A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).',
  );
  public static readonly CONCEPT_MAP = new FhirCodeDefinition(
    'CONCEPT_MAP',
    'ConceptMap',
    'http://hl7.org/fhir/fhir-types',
    'ConceptMap',
    'A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.',
  );
  public static readonly CONDITION = new FhirCodeDefinition(
    'CONDITION',
    'Condition',
    'http://hl7.org/fhir/fhir-types',
    'Condition',
    'A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.',
  );
  public static readonly CONDITION_DEFINITION = new FhirCodeDefinition(
    'CONDITION_DEFINITION',
    'ConditionDefinition',
    'http://hl7.org/fhir/fhir-types',
    'ConditionDefinition',
    'A definition of a condition and information relevant to managing it.',
  );
  public static readonly CONSENT = new FhirCodeDefinition(
    'CONSENT',
    'Consent',
    'http://hl7.org/fhir/fhir-types',
    'Consent',
    'A record of a healthcare consumer\'s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.',
  );
  public static readonly CONTRACT = new FhirCodeDefinition(
    'CONTRACT',
    'Contract',
    'http://hl7.org/fhir/fhir-types',
    'Contract',
    'Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.',
  );
  public static readonly COVERAGE = new FhirCodeDefinition(
    'COVERAGE',
    'Coverage',
    'http://hl7.org/fhir/fhir-types',
    'Coverage',
    'Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.',
  );
  public static readonly COVERAGE_ELIGIBILITY_REQUEST = new FhirCodeDefinition(
    'COVERAGE_ELIGIBILITY_REQUEST',
    'CoverageEligibilityRequest',
    'http://hl7.org/fhir/fhir-types',
    'CoverageEligibilityRequest',
    'The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.',
  );
  public static readonly COVERAGE_ELIGIBILITY_RESPONSE = new FhirCodeDefinition(
    'COVERAGE_ELIGIBILITY_RESPONSE',
    'CoverageEligibilityResponse',
    'http://hl7.org/fhir/fhir-types',
    'CoverageEligibilityResponse',
    'This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.',
  );
  public static readonly DETECTED_ISSUE = new FhirCodeDefinition(
    'DETECTED_ISSUE',
    'DetectedIssue',
    'http://hl7.org/fhir/fhir-types',
    'DetectedIssue',
    'Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, gaps in care, etc.',
  );
  public static readonly DEVICE = new FhirCodeDefinition(
    'DEVICE',
    'Device',
    'http://hl7.org/fhir/fhir-types',
    'Device',
    'This resource describes the properties (regulated, has real time clock, etc.), adminstrative (manufacturer name, model number, serial number, firmware, etc.), and type (knee replacement, blood pressure cuff, MRI, etc.) of a physical unit (these values do not change much within a given module, for example the serail number, manufacturer name, and model number). An actual unit may consist of several modules in a distinct hierarchy and these are represented by multiple Device resources and bound through the \'parent\' element.',
  );
  public static readonly DEVICE_ASSOCIATION = new FhirCodeDefinition(
    'DEVICE_ASSOCIATION',
    'DeviceAssociation',
    'http://hl7.org/fhir/fhir-types',
    'DeviceAssociation',
    'A record of association of a device.',
  );
  public static readonly DEVICE_DEFINITION = new FhirCodeDefinition(
    'DEVICE_DEFINITION',
    'DeviceDefinition',
    'http://hl7.org/fhir/fhir-types',
    'DeviceDefinition',
    'This is a specialized resource that defines the characteristics and capabilities of a device.',
  );
  public static readonly DEVICE_DISPENSE = new FhirCodeDefinition(
    'DEVICE_DISPENSE',
    'DeviceDispense',
    'http://hl7.org/fhir/fhir-types',
    'DeviceDispense',
    'Indicates that a device is to be or has been dispensed for a named person/patient.  This includes a description of the product (supply) provided and the instructions for using the device.',
  );
  public static readonly DEVICE_METRIC = new FhirCodeDefinition(
    'DEVICE_METRIC',
    'DeviceMetric',
    'http://hl7.org/fhir/fhir-types',
    'DeviceMetric',
    'Describes a measurement, calculation or setting capability of a device.  The DeviceMetric resource is derived from the ISO/IEEE 11073-10201 Domain Information Model standard, but is more widely applicable. ',
  );
  public static readonly DEVICE_REQUEST = new FhirCodeDefinition(
    'DEVICE_REQUEST',
    'DeviceRequest',
    'http://hl7.org/fhir/fhir-types',
    'DeviceRequest',
    'Represents a request a device to be provided to a specific patient. The device may be an implantable device to be subsequently implanted, or an external assistive device, such as a walker, to be delivered and subsequently be used.',
  );
  public static readonly DEVICE_USAGE = new FhirCodeDefinition(
    'DEVICE_USAGE',
    'DeviceUsage',
    'http://hl7.org/fhir/fhir-types',
    'DeviceUsage',
    'A record of a device being used by a patient where the record is the result of a report from the patient or a clinician.',
  );
  public static readonly DIAGNOSTIC_REPORT = new FhirCodeDefinition(
    'DIAGNOSTIC_REPORT',
    'DiagnosticReport',
    'http://hl7.org/fhir/fhir-types',
    'DiagnosticReport',
    'The findings and interpretation of diagnostic tests performed on patients, groups of patients, products, substances, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports. The report also includes non-clinical context such as batch analysis and stability reporting of products and substances.',
  );
  public static readonly DOCUMENT_REFERENCE = new FhirCodeDefinition(
    'DOCUMENT_REFERENCE',
    'DocumentReference',
    'http://hl7.org/fhir/fhir-types',
    'DocumentReference',
    'A reference to a document of any kind for any purpose. While the term "document" implies a more narrow focus, for this resource this "document" encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare.  The DocumentReference resource provides metadata about the document so that the document can be discovered and managed.  The actual content may be inline base64 encoded data or provided by direct reference.',
  );
  public static readonly ENCOUNTER = new FhirCodeDefinition(
    'ENCOUNTER',
    'Encounter',
    'http://hl7.org/fhir/fhir-types',
    'Encounter',
    'An interaction between healthcare provider(s), and/or patient(s) for the purpose of providing healthcare service(s) or assessing the health status of patient(s).',
  );
  public static readonly ENCOUNTER_HISTORY = new FhirCodeDefinition(
    'ENCOUNTER_HISTORY',
    'EncounterHistory',
    'http://hl7.org/fhir/fhir-types',
    'EncounterHistory',
    'A record of significant events/milestones key data throughout the history of an Encounter',
  );
  public static readonly ENDPOINT = new FhirCodeDefinition(
    'ENDPOINT',
    'Endpoint',
    'http://hl7.org/fhir/fhir-types',
    'Endpoint',
    'The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server, or a s/Mime email address. This may include any security context information.',
  );
  public static readonly ENROLLMENT_REQUEST = new FhirCodeDefinition(
    'ENROLLMENT_REQUEST',
    'EnrollmentRequest',
    'http://hl7.org/fhir/fhir-types',
    'EnrollmentRequest',
    'This resource provides the insurance enrollment details to the insurer regarding a specified coverage.',
  );
  public static readonly ENROLLMENT_RESPONSE = new FhirCodeDefinition(
    'ENROLLMENT_RESPONSE',
    'EnrollmentResponse',
    'http://hl7.org/fhir/fhir-types',
    'EnrollmentResponse',
    'This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.',
  );
  public static readonly EPISODE_OF_CARE = new FhirCodeDefinition(
    'EPISODE_OF_CARE',
    'EpisodeOfCare',
    'http://hl7.org/fhir/fhir-types',
    'EpisodeOfCare',
    'An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.',
  );
  public static readonly EVENT_DEFINITION = new FhirCodeDefinition(
    'EVENT_DEFINITION',
    'EventDefinition',
    'http://hl7.org/fhir/fhir-types',
    'EventDefinition',
    'The EventDefinition resource provides a reusable description of when a particular event can occur.',
  );
  public static readonly EVIDENCE = new FhirCodeDefinition(
    'EVIDENCE',
    'Evidence',
    'http://hl7.org/fhir/fhir-types',
    'Evidence',
    'The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.',
  );
  public static readonly EVIDENCE_REPORT = new FhirCodeDefinition(
    'EVIDENCE_REPORT',
    'EvidenceReport',
    'http://hl7.org/fhir/fhir-types',
    'EvidenceReport',
    'The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.',
  );
  public static readonly EVIDENCE_VARIABLE = new FhirCodeDefinition(
    'EVIDENCE_VARIABLE',
    'EvidenceVariable',
    'http://hl7.org/fhir/fhir-types',
    'EvidenceVariable',
    'The EvidenceVariable resource describes an element that knowledge (Evidence) is about.',
  );
  public static readonly EXAMPLE_SCENARIO = new FhirCodeDefinition(
    'EXAMPLE_SCENARIO',
    'ExampleScenario',
    'http://hl7.org/fhir/fhir-types',
    'ExampleScenario',
    'A walkthrough of a workflow showing the interaction between systems and the instances shared, possibly including the evolution of instances over time.',
  );
  public static readonly EXPLANATION_OF_BENEFIT = new FhirCodeDefinition(
    'EXPLANATION_OF_BENEFIT',
    'ExplanationOfBenefit',
    'http://hl7.org/fhir/fhir-types',
    'ExplanationOfBenefit',
    'This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.',
  );
  public static readonly FAMILY_MEMBER_HISTORY = new FhirCodeDefinition(
    'FAMILY_MEMBER_HISTORY',
    'FamilyMemberHistory',
    'http://hl7.org/fhir/fhir-types',
    'FamilyMemberHistory',
    'Significant health conditions for a person related to the patient relevant in the context of care for the patient.',
  );
  public static readonly FLAG = new FhirCodeDefinition(
    'FLAG',
    'Flag',
    'http://hl7.org/fhir/fhir-types',
    'Flag',
    'Prospective warnings of potential issues when providing care to the patient.',
  );
  public static readonly FORMULARY_ITEM = new FhirCodeDefinition(
    'FORMULARY_ITEM',
    'FormularyItem',
    'http://hl7.org/fhir/fhir-types',
    'FormularyItem',
    'This resource describes a product or service that is available through a program and includes the conditions and constraints of availability.  All of the information in this resource is specific to the inclusion of the item in the formulary and is not inherent to the item itself.',
  );
  public static readonly GENOMIC_STUDY = new FhirCodeDefinition(
    'GENOMIC_STUDY',
    'GenomicStudy',
    'http://hl7.org/fhir/fhir-types',
    'GenomicStudy',
    'A set of analyses performed to analyze and generate genomic data.',
  );
  public static readonly GOAL = new FhirCodeDefinition(
    'GOAL',
    'Goal',
    'http://hl7.org/fhir/fhir-types',
    'Goal',
    'Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.',
  );
  public static readonly GRAPH_DEFINITION = new FhirCodeDefinition(
    'GRAPH_DEFINITION',
    'GraphDefinition',
    'http://hl7.org/fhir/fhir-types',
    'GraphDefinition',
    'A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.',
  );
  public static readonly GROUP = new FhirCodeDefinition(
    'GROUP',
    'Group',
    'http://hl7.org/fhir/fhir-types',
    'Group',
    'Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn\'t an Organization.',
  );
  public static readonly GUIDANCE_RESPONSE = new FhirCodeDefinition(
    'GUIDANCE_RESPONSE',
    'GuidanceResponse',
    'http://hl7.org/fhir/fhir-types',
    'GuidanceResponse',
    'A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.',
  );
  public static readonly HEALTHCARE_SERVICE = new FhirCodeDefinition(
    'HEALTHCARE_SERVICE',
    'HealthcareService',
    'http://hl7.org/fhir/fhir-types',
    'HealthcareService',
    'The details of a healthcare service available at a location or in a catalog.  In the case where there is a hierarchy of services (for example, Lab -> Pathology -> Wound Cultures), this can be represented using a set of linked HealthcareServices.',
  );
  public static readonly IMAGING_SELECTION = new FhirCodeDefinition(
    'IMAGING_SELECTION',
    'ImagingSelection',
    'http://hl7.org/fhir/fhir-types',
    'ImagingSelection',
    'A selection of DICOM SOP instances and/or frames within a single Study and Series. This might include additional specifics such as an image region, an Observation UID or a Segmentation Number, allowing linkage to an Observation Resource or transferring this information along with the ImagingStudy Resource.',
  );
  public static readonly IMAGING_STUDY = new FhirCodeDefinition(
    'IMAGING_STUDY',
    'ImagingStudy',
    'http://hl7.org/fhir/fhir-types',
    'ImagingStudy',
    'Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.',
  );
  public static readonly IMMUNIZATION = new FhirCodeDefinition(
    'IMMUNIZATION',
    'Immunization',
    'http://hl7.org/fhir/fhir-types',
    'Immunization',
    'Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.',
  );
  public static readonly IMMUNIZATION_EVALUATION = new FhirCodeDefinition(
    'IMMUNIZATION_EVALUATION',
    'ImmunizationEvaluation',
    'http://hl7.org/fhir/fhir-types',
    'ImmunizationEvaluation',
    'Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.',
  );
  public static readonly IMMUNIZATION_RECOMMENDATION = new FhirCodeDefinition(
    'IMMUNIZATION_RECOMMENDATION',
    'ImmunizationRecommendation',
    'http://hl7.org/fhir/fhir-types',
    'ImmunizationRecommendation',
    'A patient\'s point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.',
  );
  public static readonly IMPLEMENTATION_GUIDE = new FhirCodeDefinition(
    'IMPLEMENTATION_GUIDE',
    'ImplementationGuide',
    'http://hl7.org/fhir/fhir-types',
    'ImplementationGuide',
    'A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.',
  );
  public static readonly INGREDIENT = new FhirCodeDefinition(
    'INGREDIENT',
    'Ingredient',
    'http://hl7.org/fhir/fhir-types',
    'Ingredient',
    'An ingredient of a manufactured item or pharmaceutical product.',
  );
  public static readonly INSURANCE_PLAN = new FhirCodeDefinition(
    'INSURANCE_PLAN',
    'InsurancePlan',
    'http://hl7.org/fhir/fhir-types',
    'InsurancePlan',
    'Details of a Health Insurance product/plan provided by an organization.',
  );
  public static readonly INVENTORY_ITEM = new FhirCodeDefinition(
    'INVENTORY_ITEM',
    'InventoryItem',
    'http://hl7.org/fhir/fhir-types',
    'InventoryItem',
    'functional description of an inventory item used in inventory and supply-related workflows.',
  );
  public static readonly INVENTORY_REPORT = new FhirCodeDefinition(
    'INVENTORY_REPORT',
    'InventoryReport',
    'http://hl7.org/fhir/fhir-types',
    'InventoryReport',
    'A report of inventory or stock items.',
  );
  public static readonly INVOICE = new FhirCodeDefinition(
    'INVOICE',
    'Invoice',
    'http://hl7.org/fhir/fhir-types',
    'Invoice',
    'Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.',
  );
  public static readonly LIBRARY = new FhirCodeDefinition(
    'LIBRARY',
    'Library',
    'http://hl7.org/fhir/fhir-types',
    'Library',
    'The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.',
  );
  public static readonly LINKAGE = new FhirCodeDefinition(
    'LINKAGE',
    'Linkage',
    'http://hl7.org/fhir/fhir-types',
    'Linkage',
    'Identifies two or more records (resource instances) that refer to the same real-world "occurrence".',
  );
  public static readonly LIST = new FhirCodeDefinition(
    'LIST',
    'List',
    'http://hl7.org/fhir/fhir-types',
    'List',
    'A List is a curated collection of resources, for things such as problem lists, allergy lists, facility list, organization list, etc.',
  );
  public static readonly LOCATION = new FhirCodeDefinition(
    'LOCATION',
    'Location',
    'http://hl7.org/fhir/fhir-types',
    'Location',
    'Details and position information for a place where services are provided and resources and participants may be stored, found, contained, or accommodated.',
  );
  public static readonly MANUFACTURED_ITEM_DEFINITION = new FhirCodeDefinition(
    'MANUFACTURED_ITEM_DEFINITION',
    'ManufacturedItemDefinition',
    'http://hl7.org/fhir/fhir-types',
    'ManufacturedItemDefinition',
    'The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.',
  );
  public static readonly MEASURE = new FhirCodeDefinition(
    'MEASURE',
    'Measure',
    'http://hl7.org/fhir/fhir-types',
    'Measure',
    'The Measure resource provides the definition of a quality measure.',
  );
  public static readonly MEASURE_REPORT = new FhirCodeDefinition(
    'MEASURE_REPORT',
    'MeasureReport',
    'http://hl7.org/fhir/fhir-types',
    'MeasureReport',
    'The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.',
  );
  public static readonly MEDICATION = new FhirCodeDefinition(
    'MEDICATION',
    'Medication',
    'http://hl7.org/fhir/fhir-types',
    'Medication',
    'This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.',
  );
  public static readonly MEDICATION_ADMINISTRATION = new FhirCodeDefinition(
    'MEDICATION_ADMINISTRATION',
    'MedicationAdministration',
    'http://hl7.org/fhir/fhir-types',
    'MedicationAdministration',
    'Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion. Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. This event can also be used to record waste using a status of not-done and the appropriate statusReason.',
  );
  public static readonly MEDICATION_DISPENSE = new FhirCodeDefinition(
    'MEDICATION_DISPENSE',
    'MedicationDispense',
    'http://hl7.org/fhir/fhir-types',
    'MedicationDispense',
    'Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.',
  );
  public static readonly MEDICATION_KNOWLEDGE = new FhirCodeDefinition(
    'MEDICATION_KNOWLEDGE',
    'MedicationKnowledge',
    'http://hl7.org/fhir/fhir-types',
    'MedicationKnowledge',
    'Information about a medication that is used to support knowledge.',
  );
  public static readonly MEDICATION_REQUEST = new FhirCodeDefinition(
    'MEDICATION_REQUEST',
    'MedicationRequest',
    'http://hl7.org/fhir/fhir-types',
    'MedicationRequest',
    'An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.',
  );
  public static readonly MEDICATION_STATEMENT = new FhirCodeDefinition(
    'MEDICATION_STATEMENT',
    'MedicationStatement',
    'http://hl7.org/fhir/fhir-types',
    'MedicationStatement',
    'A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient\'s memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.  The primary difference between a medicationstatement and a medicationadministration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medicationstatement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the Medication Statement information may come from the patient\'s memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.',
  );
  public static readonly MEDICINAL_PRODUCT_DEFINITION = new FhirCodeDefinition(
    'MEDICINAL_PRODUCT_DEFINITION',
    'MedicinalProductDefinition',
    'http://hl7.org/fhir/fhir-types',
    'MedicinalProductDefinition',
    'Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs, to support prescribing, adverse events management etc.).',
  );
  public static readonly MESSAGE_DEFINITION = new FhirCodeDefinition(
    'MESSAGE_DEFINITION',
    'MessageDefinition',
    'http://hl7.org/fhir/fhir-types',
    'MessageDefinition',
    'Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.',
  );
  public static readonly MESSAGE_HEADER = new FhirCodeDefinition(
    'MESSAGE_HEADER',
    'MessageHeader',
    'http://hl7.org/fhir/fhir-types',
    'MessageHeader',
    'The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.',
  );
  public static readonly METADATA_RESOURCE = new FhirCodeDefinition(
    'METADATA_RESOURCE',
    'MetadataResource',
    'http://hl7.org/fhir/fhir-types',
    'MetadataResource',
    'Common Interface declaration for conformance and knowledge artifact resources.',
  );
  public static readonly MOLECULAR_SEQUENCE = new FhirCodeDefinition(
    'MOLECULAR_SEQUENCE',
    'MolecularSequence',
    'http://hl7.org/fhir/fhir-types',
    'MolecularSequence',
    'Representation of a molecular sequence.',
  );
  public static readonly NAMING_SYSTEM = new FhirCodeDefinition(
    'NAMING_SYSTEM',
    'NamingSystem',
    'http://hl7.org/fhir/fhir-types',
    'NamingSystem',
    'A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.',
  );
  public static readonly NUTRITION_INTAKE = new FhirCodeDefinition(
    'NUTRITION_INTAKE',
    'NutritionIntake',
    'http://hl7.org/fhir/fhir-types',
    'NutritionIntake',
    'A record of food or fluid that is being consumed by a patient.  A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient\'s memory, from a nutrition label,  or from a clinician documenting observed intake.',
  );
  public static readonly NUTRITION_ORDER = new FhirCodeDefinition(
    'NUTRITION_ORDER',
    'NutritionOrder',
    'http://hl7.org/fhir/fhir-types',
    'NutritionOrder',
    'A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.',
  );
  public static readonly NUTRITION_PRODUCT = new FhirCodeDefinition(
    'NUTRITION_PRODUCT',
    'NutritionProduct',
    'http://hl7.org/fhir/fhir-types',
    'NutritionProduct',
    'A food or supplement that is consumed by patients.',
  );
  public static readonly OBSERVATION = new FhirCodeDefinition(
    'OBSERVATION',
    'Observation',
    'http://hl7.org/fhir/fhir-types',
    'Observation',
    'Measurements and simple assertions made about a patient, device or other subject.',
  );
  public static readonly OBSERVATION_DEFINITION = new FhirCodeDefinition(
    'OBSERVATION_DEFINITION',
    'ObservationDefinition',
    'http://hl7.org/fhir/fhir-types',
    'ObservationDefinition',
    'Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.',
  );
  public static readonly OPERATION_DEFINITION = new FhirCodeDefinition(
    'OPERATION_DEFINITION',
    'OperationDefinition',
    'http://hl7.org/fhir/fhir-types',
    'OperationDefinition',
    'A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).',
  );
  public static readonly OPERATION_OUTCOME = new FhirCodeDefinition(
    'OPERATION_OUTCOME',
    'OperationOutcome',
    'http://hl7.org/fhir/fhir-types',
    'OperationOutcome',
    'A collection of error, warning, or information messages that result from a system action.',
  );
  public static readonly ORGANIZATION = new FhirCodeDefinition(
    'ORGANIZATION',
    'Organization',
    'http://hl7.org/fhir/fhir-types',
    'Organization',
    'A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.',
  );
  public static readonly ORGANIZATION_AFFILIATION = new FhirCodeDefinition(
    'ORGANIZATION_AFFILIATION',
    'OrganizationAffiliation',
    'http://hl7.org/fhir/fhir-types',
    'OrganizationAffiliation',
    'Defines an affiliation/assotiation/relationship between 2 distinct organizations, that is not a part-of relationship/sub-division relationship.',
  );
  public static readonly PACKAGED_PRODUCT_DEFINITION = new FhirCodeDefinition(
    'PACKAGED_PRODUCT_DEFINITION',
    'PackagedProductDefinition',
    'http://hl7.org/fhir/fhir-types',
    'PackagedProductDefinition',
    'A medically related item or items, in a container or package.',
  );
  public static readonly PATIENT = new FhirCodeDefinition(
    'PATIENT',
    'Patient',
    'http://hl7.org/fhir/fhir-types',
    'Patient',
    'Demographics and other administrative information about an individual or animal receiving care or other health-related services.',
  );
  public static readonly PAYMENT_NOTICE = new FhirCodeDefinition(
    'PAYMENT_NOTICE',
    'PaymentNotice',
    'http://hl7.org/fhir/fhir-types',
    'PaymentNotice',
    'This resource provides the status of the payment for goods and services rendered, and the request and response resource references.',
  );
  public static readonly PAYMENT_RECONCILIATION = new FhirCodeDefinition(
    'PAYMENT_RECONCILIATION',
    'PaymentReconciliation',
    'http://hl7.org/fhir/fhir-types',
    'PaymentReconciliation',
    'This resource provides the details including amount of a payment and allocates the payment items being paid.',
  );
  public static readonly PERMISSION = new FhirCodeDefinition(
    'PERMISSION',
    'Permission',
    'http://hl7.org/fhir/fhir-types',
    'Permission',
    'Permission resource holds access rules for a given data and context.',
  );
  public static readonly PERSON = new FhirCodeDefinition(
    'PERSON',
    'Person',
    'http://hl7.org/fhir/fhir-types',
    'Person',
    'Demographics and administrative information about a person independent of a specific health-related context.',
  );
  public static readonly PLAN_DEFINITION = new FhirCodeDefinition(
    'PLAN_DEFINITION',
    'PlanDefinition',
    'http://hl7.org/fhir/fhir-types',
    'PlanDefinition',
    'This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical and non-clinical artifacts such as clinical decision support rules, order sets, protocols, and drug quality specifications.',
  );
  public static readonly PRACTITIONER = new FhirCodeDefinition(
    'PRACTITIONER',
    'Practitioner',
    'http://hl7.org/fhir/fhir-types',
    'Practitioner',
    'A person who is directly or indirectly involved in the provisioning of healthcare or related services.',
  );
  public static readonly PRACTITIONER_ROLE = new FhirCodeDefinition(
    'PRACTITIONER_ROLE',
    'PractitionerRole',
    'http://hl7.org/fhir/fhir-types',
    'PractitionerRole',
    'A specific set of Roles/Locations/specialties/services that a practitioner may perform, or has performed at an organization during a period of time.',
  );
  public static readonly PROCEDURE = new FhirCodeDefinition(
    'PROCEDURE',
    'Procedure',
    'http://hl7.org/fhir/fhir-types',
    'Procedure',
    'An action that is or was performed on or for a patient, practitioner, device, organization, or location. For example, this can be a physical intervention on a patient like an operation, or less invasive like long term services, counseling, or hypnotherapy.  This can be a quality or safety inspection for a location, organization, or device.  This can be an accreditation procedure on a practitioner for licensing.',
  );
  public static readonly PROVENANCE = new FhirCodeDefinition(
    'PROVENANCE',
    'Provenance',
    'http://hl7.org/fhir/fhir-types',
    'Provenance',
    'Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.',
  );
  public static readonly QUESTIONNAIRE = new FhirCodeDefinition(
    'QUESTIONNAIRE',
    'Questionnaire',
    'http://hl7.org/fhir/fhir-types',
    'Questionnaire',
    'A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.',
  );
  public static readonly QUESTIONNAIRE_RESPONSE = new FhirCodeDefinition(
    'QUESTIONNAIRE_RESPONSE',
    'QuestionnaireResponse',
    'http://hl7.org/fhir/fhir-types',
    'QuestionnaireResponse',
    'A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.',
  );
  public static readonly REGULATED_AUTHORIZATION = new FhirCodeDefinition(
    'REGULATED_AUTHORIZATION',
    'RegulatedAuthorization',
    'http://hl7.org/fhir/fhir-types',
    'RegulatedAuthorization',
    'Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.',
  );
  public static readonly RELATED_PERSON = new FhirCodeDefinition(
    'RELATED_PERSON',
    'RelatedPerson',
    'http://hl7.org/fhir/fhir-types',
    'RelatedPerson',
    'Information about a person that is involved in a patient\'s health or the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.',
  );
  public static readonly REQUEST_ORCHESTRATION = new FhirCodeDefinition(
    'REQUEST_ORCHESTRATION',
    'RequestOrchestration',
    'http://hl7.org/fhir/fhir-types',
    'RequestOrchestration',
    'A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".',
  );
  public static readonly REQUIREMENTS = new FhirCodeDefinition(
    'REQUIREMENTS',
    'Requirements',
    'http://hl7.org/fhir/fhir-types',
    'Requirements',
    'The Requirements resource is used to describe an actor - a human or an application that plays a role in data exchange, and that may have obligations associated with the role the actor plays.',
  );
  public static readonly RESEARCH_STUDY = new FhirCodeDefinition(
    'RESEARCH_STUDY',
    'ResearchStudy',
    'http://hl7.org/fhir/fhir-types',
    'ResearchStudy',
    'A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future.',
  );
  public static readonly RESEARCH_SUBJECT = new FhirCodeDefinition(
    'RESEARCH_SUBJECT',
    'ResearchSubject',
    'http://hl7.org/fhir/fhir-types',
    'ResearchSubject',
    'A ResearchSubject is a participant or object which is the recipient of investigative activities in a research study.',
  );
  public static readonly RISK_ASSESSMENT = new FhirCodeDefinition(
    'RISK_ASSESSMENT',
    'RiskAssessment',
    'http://hl7.org/fhir/fhir-types',
    'RiskAssessment',
    'An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.',
  );
  public static readonly SCHEDULE = new FhirCodeDefinition(
    'SCHEDULE',
    'Schedule',
    'http://hl7.org/fhir/fhir-types',
    'Schedule',
    'A container for slots of time that may be available for booking appointments.',
  );
  public static readonly SEARCH_PARAMETER = new FhirCodeDefinition(
    'SEARCH_PARAMETER',
    'SearchParameter',
    'http://hl7.org/fhir/fhir-types',
    'SearchParameter',
    'A search parameter that defines a named search item that can be used to search/filter on a resource.',
  );
  public static readonly SERVICE_REQUEST = new FhirCodeDefinition(
    'SERVICE_REQUEST',
    'ServiceRequest',
    'http://hl7.org/fhir/fhir-types',
    'ServiceRequest',
    'A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.',
  );
  public static readonly SLOT = new FhirCodeDefinition(
    'SLOT',
    'Slot',
    'http://hl7.org/fhir/fhir-types',
    'Slot',
    'A slot of time on a schedule that may be available for booking appointments.',
  );
  public static readonly SPECIMEN = new FhirCodeDefinition(
    'SPECIMEN',
    'Specimen',
    'http://hl7.org/fhir/fhir-types',
    'Specimen',
    'A sample to be used for analysis.',
  );
  public static readonly SPECIMEN_DEFINITION = new FhirCodeDefinition(
    'SPECIMEN_DEFINITION',
    'SpecimenDefinition',
    'http://hl7.org/fhir/fhir-types',
    'SpecimenDefinition',
    'A kind of specimen with associated set of requirements.',
  );
  public static readonly STRUCTURE_DEFINITION = new FhirCodeDefinition(
    'STRUCTURE_DEFINITION',
    'StructureDefinition',
    'http://hl7.org/fhir/fhir-types',
    'StructureDefinition',
    'A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.',
  );
  public static readonly STRUCTURE_MAP = new FhirCodeDefinition(
    'STRUCTURE_MAP',
    'StructureMap',
    'http://hl7.org/fhir/fhir-types',
    'StructureMap',
    'A Map of relationships between 2 structures that can be used to transform data.',
  );
  public static readonly SUBSCRIPTION = new FhirCodeDefinition(
    'SUBSCRIPTION',
    'Subscription',
    'http://hl7.org/fhir/fhir-types',
    'Subscription',
    'The subscription resource describes a particular client\'s request to be notified about a SubscriptionTopic.',
  );
  public static readonly SUBSCRIPTION_STATUS = new FhirCodeDefinition(
    'SUBSCRIPTION_STATUS',
    'SubscriptionStatus',
    'http://hl7.org/fhir/fhir-types',
    'SubscriptionStatus',
    'The SubscriptionStatus resource describes the state of a Subscription during notifications. It is not persisted.',
  );
  public static readonly SUBSCRIPTION_TOPIC = new FhirCodeDefinition(
    'SUBSCRIPTION_TOPIC',
    'SubscriptionTopic',
    'http://hl7.org/fhir/fhir-types',
    'SubscriptionTopic',
    'Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic.',
  );
  public static readonly SUBSTANCE = new FhirCodeDefinition(
    'SUBSTANCE',
    'Substance',
    'http://hl7.org/fhir/fhir-types',
    'Substance',
    'A homogeneous material with a definite composition.',
  );
  public static readonly SUBSTANCE_DEFINITION = new FhirCodeDefinition(
    'SUBSTANCE_DEFINITION',
    'SubstanceDefinition',
    'http://hl7.org/fhir/fhir-types',
    'SubstanceDefinition',
    'The detailed description of a substance, typically at a level beyond what is used for prescribing.',
  );
  public static readonly SUBSTANCE_NUCLEIC_ACID = new FhirCodeDefinition(
    'SUBSTANCE_NUCLEIC_ACID',
    'SubstanceNucleicAcid',
    'http://hl7.org/fhir/fhir-types',
    'SubstanceNucleicAcid',
    'Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5\'-3\' direction.',
  );
  public static readonly SUBSTANCE_POLYMER = new FhirCodeDefinition(
    'SUBSTANCE_POLYMER',
    'SubstancePolymer',
    'http://hl7.org/fhir/fhir-types',
    'SubstancePolymer',
    'Properties of a substance specific to it being a polymer.',
  );
  public static readonly SUBSTANCE_PROTEIN = new FhirCodeDefinition(
    'SUBSTANCE_PROTEIN',
    'SubstanceProtein',
    'http://hl7.org/fhir/fhir-types',
    'SubstanceProtein',
    'A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.',
  );
  public static readonly SUBSTANCE_REFERENCE_INFORMATION = new FhirCodeDefinition(
    'SUBSTANCE_REFERENCE_INFORMATION',
    'SubstanceReferenceInformation',
    'http://hl7.org/fhir/fhir-types',
    'SubstanceReferenceInformation',
    'Todo.',
  );
  public static readonly SUBSTANCE_SOURCE_MATERIAL = new FhirCodeDefinition(
    'SUBSTANCE_SOURCE_MATERIAL',
    'SubstanceSourceMaterial',
    'http://hl7.org/fhir/fhir-types',
    'SubstanceSourceMaterial',
    'Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.',
  );
  public static readonly SUPPLY_DELIVERY = new FhirCodeDefinition(
    'SUPPLY_DELIVERY',
    'SupplyDelivery',
    'http://hl7.org/fhir/fhir-types',
    'SupplyDelivery',
    'Record of delivery of what is supplied.',
  );
  public static readonly SUPPLY_REQUEST = new FhirCodeDefinition(
    'SUPPLY_REQUEST',
    'SupplyRequest',
    'http://hl7.org/fhir/fhir-types',
    'SupplyRequest',
    'A record of a non-patient specific request for a medication, substance, device, certain types of biologically derived product, and nutrition product used in the healthcare setting.',
  );
  public static readonly TASK = new FhirCodeDefinition(
    'TASK',
    'Task',
    'http://hl7.org/fhir/fhir-types',
    'Task',
    'A task to be performed.',
  );
  public static readonly TERMINOLOGY_CAPABILITIES = new FhirCodeDefinition(
    'TERMINOLOGY_CAPABILITIES',
    'TerminologyCapabilities',
    'http://hl7.org/fhir/fhir-types',
    'TerminologyCapabilities',
    'A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.',
  );
  public static readonly TEST_PLAN = new FhirCodeDefinition(
    'TEST_PLAN',
    'TestPlan',
    'http://hl7.org/fhir/fhir-types',
    'TestPlan',
    'A plan for executing testing on an artifact or specifications',
  );
  public static readonly TEST_REPORT = new FhirCodeDefinition(
    'TEST_REPORT',
    'TestReport',
    'http://hl7.org/fhir/fhir-types',
    'TestReport',
    'A summary of information based on the results of executing a TestScript.',
  );
  public static readonly TEST_SCRIPT = new FhirCodeDefinition(
    'TEST_SCRIPT',
    'TestScript',
    'http://hl7.org/fhir/fhir-types',
    'TestScript',
    'A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.',
  );
  public static readonly TRANSPORT = new FhirCodeDefinition(
    'TRANSPORT',
    'Transport',
    'http://hl7.org/fhir/fhir-types',
    'Transport',
    'Record of transport.',
  );
  public static readonly VALUE_SET = new FhirCodeDefinition(
    'VALUE_SET',
    'ValueSet',
    'http://hl7.org/fhir/fhir-types',
    'ValueSet',
    'A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](https://hl7.org/fhir/terminologies.html).',
  );
  public static readonly VERIFICATION_RESULT = new FhirCodeDefinition(
    'VERIFICATION_RESULT',
    'VerificationResult',
    'http://hl7.org/fhir/fhir-types',
    'VerificationResult',
    'Describes validation requirements, source(s), status and dates for one or more elements.',
  );
  public static readonly VISION_PRESCRIPTION = new FhirCodeDefinition(
    'VISION_PRESCRIPTION',
    'VisionPrescription',
    'http://hl7.org/fhir/fhir-types',
    'VisionPrescription',
    'An authorization for the provision of glasses and/or contact lenses to a patient.',
  );
  public static readonly PARAMETERS = new FhirCodeDefinition(
    'PARAMETERS',
    'Parameters',
    'http://hl7.org/fhir/fhir-types',
    'Parameters',
    'This resource is used to pass information into and back from an operation (whether invoked directly from REST or within a messaging environment).  It is not persisted or allowed to be referenced by other resources except as described in the definition of the Parameters resource.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      FhirTypesEnum.BASE,
      FhirTypesEnum.ELEMENT,
      FhirTypesEnum.BACKBONE_ELEMENT,
      FhirTypesEnum.DATA_TYPE,
      FhirTypesEnum.ADDRESS,
      FhirTypesEnum.ANNOTATION,
      FhirTypesEnum.ATTACHMENT,
      FhirTypesEnum.AVAILABILITY,
      FhirTypesEnum.BACKBONE_TYPE,
      FhirTypesEnum.DOSAGE,
      FhirTypesEnum.ELEMENT_DEFINITION,
      FhirTypesEnum.MARKETING_STATUS,
      FhirTypesEnum.PRODUCT_SHELF_LIFE,
      FhirTypesEnum.TIMING,
      FhirTypesEnum.CODEABLE_CONCEPT,
      FhirTypesEnum.CODEABLE_REFERENCE,
      FhirTypesEnum.CODING,
      FhirTypesEnum.CONTACT_DETAIL,
      FhirTypesEnum.CONTACT_POINT,
      FhirTypesEnum.CONTRIBUTOR,
      FhirTypesEnum.DATA_REQUIREMENT,
      FhirTypesEnum.EXPRESSION,
      FhirTypesEnum.EXTENDED_CONTACT_DETAIL,
      FhirTypesEnum.EXTENSION,
      FhirTypesEnum.HUMAN_NAME,
      FhirTypesEnum.IDENTIFIER,
      FhirTypesEnum.META,
      FhirTypesEnum.MONETARY_COMPONENT,
      FhirTypesEnum.MONEY,
      FhirTypesEnum.NARRATIVE,
      FhirTypesEnum.PARAMETER_DEFINITION,
      FhirTypesEnum.PERIOD,
      FhirTypesEnum.PRIMITIVE_TYPE,
      FhirTypesEnum.BASE_64_BINARY,
      FhirTypesEnum.BOOLEAN,
      FhirTypesEnum.DATE,
      FhirTypesEnum.DATE_TIME,
      FhirTypesEnum.DECIMAL,
      FhirTypesEnum.INSTANT,
      FhirTypesEnum.INTEGER,
      FhirTypesEnum.POSITIVE_INT,
      FhirTypesEnum.UNSIGNED_INT,
      FhirTypesEnum.INTEGER_64,
      FhirTypesEnum.STRING,
      FhirTypesEnum.CODE,
      FhirTypesEnum.ID,
      FhirTypesEnum.MARKDOWN,
      FhirTypesEnum.TIME,
      FhirTypesEnum.URI,
      FhirTypesEnum.CANONICAL,
      FhirTypesEnum.OID,
      FhirTypesEnum.URL,
      FhirTypesEnum.UUID,
      FhirTypesEnum.QUANTITY,
      FhirTypesEnum.AGE,
      FhirTypesEnum.COUNT,
      FhirTypesEnum.DISTANCE,
      FhirTypesEnum.DURATION,
      FhirTypesEnum.RANGE,
      FhirTypesEnum.RATIO,
      FhirTypesEnum.RATIO_RANGE,
      FhirTypesEnum.REFERENCE,
      FhirTypesEnum.RELATED_ARTIFACT,
      FhirTypesEnum.SAMPLED_DATA,
      FhirTypesEnum.SIGNATURE,
      FhirTypesEnum.TRIGGER_DEFINITION,
      FhirTypesEnum.USAGE_CONTEXT,
      FhirTypesEnum.VIRTUAL_SERVICE_DETAIL,
      FhirTypesEnum.XHTML,
      FhirTypesEnum.RESOURCE,
      FhirTypesEnum.BINARY,
      FhirTypesEnum.BUNDLE,
      FhirTypesEnum.DOMAIN_RESOURCE,
      FhirTypesEnum.ACCOUNT,
      FhirTypesEnum.ACTIVITY_DEFINITION,
      FhirTypesEnum.ACTOR_DEFINITION,
      FhirTypesEnum.ADMINISTRABLE_PRODUCT_DEFINITION,
      FhirTypesEnum.ADVERSE_EVENT,
      FhirTypesEnum.ALLERGY_INTOLERANCE,
      FhirTypesEnum.APPOINTMENT,
      FhirTypesEnum.APPOINTMENT_RESPONSE,
      FhirTypesEnum.ARTIFACT_ASSESSMENT,
      FhirTypesEnum.AUDIT_EVENT,
      FhirTypesEnum.BASIC,
      FhirTypesEnum.BIOLOGICALLY_DERIVED_PRODUCT,
      FhirTypesEnum.BIOLOGICALLY_DERIVED_PRODUCT_DISPENSE,
      FhirTypesEnum.BODY_STRUCTURE,
      FhirTypesEnum.CANONICAL_RESOURCE,
      FhirTypesEnum.CAPABILITY_STATEMENT,
      FhirTypesEnum.CARE_PLAN,
      FhirTypesEnum.CARE_TEAM,
      FhirTypesEnum.CHARGE_ITEM,
      FhirTypesEnum.CHARGE_ITEM_DEFINITION,
      FhirTypesEnum.CITATION,
      FhirTypesEnum.CLAIM,
      FhirTypesEnum.CLAIM_RESPONSE,
      FhirTypesEnum.CLINICAL_IMPRESSION,
      FhirTypesEnum.CLINICAL_USE_DEFINITION,
      FhirTypesEnum.CODE_SYSTEM,
      FhirTypesEnum.COMMUNICATION,
      FhirTypesEnum.COMMUNICATION_REQUEST,
      FhirTypesEnum.COMPARTMENT_DEFINITION,
      FhirTypesEnum.COMPOSITION,
      FhirTypesEnum.CONCEPT_MAP,
      FhirTypesEnum.CONDITION,
      FhirTypesEnum.CONDITION_DEFINITION,
      FhirTypesEnum.CONSENT,
      FhirTypesEnum.CONTRACT,
      FhirTypesEnum.COVERAGE,
      FhirTypesEnum.COVERAGE_ELIGIBILITY_REQUEST,
      FhirTypesEnum.COVERAGE_ELIGIBILITY_RESPONSE,
      FhirTypesEnum.DETECTED_ISSUE,
      FhirTypesEnum.DEVICE,
      FhirTypesEnum.DEVICE_ASSOCIATION,
      FhirTypesEnum.DEVICE_DEFINITION,
      FhirTypesEnum.DEVICE_DISPENSE,
      FhirTypesEnum.DEVICE_METRIC,
      FhirTypesEnum.DEVICE_REQUEST,
      FhirTypesEnum.DEVICE_USAGE,
      FhirTypesEnum.DIAGNOSTIC_REPORT,
      FhirTypesEnum.DOCUMENT_REFERENCE,
      FhirTypesEnum.ENCOUNTER,
      FhirTypesEnum.ENCOUNTER_HISTORY,
      FhirTypesEnum.ENDPOINT,
      FhirTypesEnum.ENROLLMENT_REQUEST,
      FhirTypesEnum.ENROLLMENT_RESPONSE,
      FhirTypesEnum.EPISODE_OF_CARE,
      FhirTypesEnum.EVENT_DEFINITION,
      FhirTypesEnum.EVIDENCE,
      FhirTypesEnum.EVIDENCE_REPORT,
      FhirTypesEnum.EVIDENCE_VARIABLE,
      FhirTypesEnum.EXAMPLE_SCENARIO,
      FhirTypesEnum.EXPLANATION_OF_BENEFIT,
      FhirTypesEnum.FAMILY_MEMBER_HISTORY,
      FhirTypesEnum.FLAG,
      FhirTypesEnum.FORMULARY_ITEM,
      FhirTypesEnum.GENOMIC_STUDY,
      FhirTypesEnum.GOAL,
      FhirTypesEnum.GRAPH_DEFINITION,
      FhirTypesEnum.GROUP,
      FhirTypesEnum.GUIDANCE_RESPONSE,
      FhirTypesEnum.HEALTHCARE_SERVICE,
      FhirTypesEnum.IMAGING_SELECTION,
      FhirTypesEnum.IMAGING_STUDY,
      FhirTypesEnum.IMMUNIZATION,
      FhirTypesEnum.IMMUNIZATION_EVALUATION,
      FhirTypesEnum.IMMUNIZATION_RECOMMENDATION,
      FhirTypesEnum.IMPLEMENTATION_GUIDE,
      FhirTypesEnum.INGREDIENT,
      FhirTypesEnum.INSURANCE_PLAN,
      FhirTypesEnum.INVENTORY_ITEM,
      FhirTypesEnum.INVENTORY_REPORT,
      FhirTypesEnum.INVOICE,
      FhirTypesEnum.LIBRARY,
      FhirTypesEnum.LINKAGE,
      FhirTypesEnum.LIST,
      FhirTypesEnum.LOCATION,
      FhirTypesEnum.MANUFACTURED_ITEM_DEFINITION,
      FhirTypesEnum.MEASURE,
      FhirTypesEnum.MEASURE_REPORT,
      FhirTypesEnum.MEDICATION,
      FhirTypesEnum.MEDICATION_ADMINISTRATION,
      FhirTypesEnum.MEDICATION_DISPENSE,
      FhirTypesEnum.MEDICATION_KNOWLEDGE,
      FhirTypesEnum.MEDICATION_REQUEST,
      FhirTypesEnum.MEDICATION_STATEMENT,
      FhirTypesEnum.MEDICINAL_PRODUCT_DEFINITION,
      FhirTypesEnum.MESSAGE_DEFINITION,
      FhirTypesEnum.MESSAGE_HEADER,
      FhirTypesEnum.METADATA_RESOURCE,
      FhirTypesEnum.MOLECULAR_SEQUENCE,
      FhirTypesEnum.NAMING_SYSTEM,
      FhirTypesEnum.NUTRITION_INTAKE,
      FhirTypesEnum.NUTRITION_ORDER,
      FhirTypesEnum.NUTRITION_PRODUCT,
      FhirTypesEnum.OBSERVATION,
      FhirTypesEnum.OBSERVATION_DEFINITION,
      FhirTypesEnum.OPERATION_DEFINITION,
      FhirTypesEnum.OPERATION_OUTCOME,
      FhirTypesEnum.ORGANIZATION,
      FhirTypesEnum.ORGANIZATION_AFFILIATION,
      FhirTypesEnum.PACKAGED_PRODUCT_DEFINITION,
      FhirTypesEnum.PATIENT,
      FhirTypesEnum.PAYMENT_NOTICE,
      FhirTypesEnum.PAYMENT_RECONCILIATION,
      FhirTypesEnum.PERMISSION,
      FhirTypesEnum.PERSON,
      FhirTypesEnum.PLAN_DEFINITION,
      FhirTypesEnum.PRACTITIONER,
      FhirTypesEnum.PRACTITIONER_ROLE,
      FhirTypesEnum.PROCEDURE,
      FhirTypesEnum.PROVENANCE,
      FhirTypesEnum.QUESTIONNAIRE,
      FhirTypesEnum.QUESTIONNAIRE_RESPONSE,
      FhirTypesEnum.REGULATED_AUTHORIZATION,
      FhirTypesEnum.RELATED_PERSON,
      FhirTypesEnum.REQUEST_ORCHESTRATION,
      FhirTypesEnum.REQUIREMENTS,
      FhirTypesEnum.RESEARCH_STUDY,
      FhirTypesEnum.RESEARCH_SUBJECT,
      FhirTypesEnum.RISK_ASSESSMENT,
      FhirTypesEnum.SCHEDULE,
      FhirTypesEnum.SEARCH_PARAMETER,
      FhirTypesEnum.SERVICE_REQUEST,
      FhirTypesEnum.SLOT,
      FhirTypesEnum.SPECIMEN,
      FhirTypesEnum.SPECIMEN_DEFINITION,
      FhirTypesEnum.STRUCTURE_DEFINITION,
      FhirTypesEnum.STRUCTURE_MAP,
      FhirTypesEnum.SUBSCRIPTION,
      FhirTypesEnum.SUBSCRIPTION_STATUS,
      FhirTypesEnum.SUBSCRIPTION_TOPIC,
      FhirTypesEnum.SUBSTANCE,
      FhirTypesEnum.SUBSTANCE_DEFINITION,
      FhirTypesEnum.SUBSTANCE_NUCLEIC_ACID,
      FhirTypesEnum.SUBSTANCE_POLYMER,
      FhirTypesEnum.SUBSTANCE_PROTEIN,
      FhirTypesEnum.SUBSTANCE_REFERENCE_INFORMATION,
      FhirTypesEnum.SUBSTANCE_SOURCE_MATERIAL,
      FhirTypesEnum.SUPPLY_DELIVERY,
      FhirTypesEnum.SUPPLY_REQUEST,
      FhirTypesEnum.TASK,
      FhirTypesEnum.TERMINOLOGY_CAPABILITIES,
      FhirTypesEnum.TEST_PLAN,
      FhirTypesEnum.TEST_REPORT,
      FhirTypesEnum.TEST_SCRIPT,
      FhirTypesEnum.TRANSPORT,
      FhirTypesEnum.VALUE_SET,
      FhirTypesEnum.VERIFICATION_RESULT,
      FhirTypesEnum.VISION_PRESCRIPTION,
      FhirTypesEnum.PARAMETERS,
      FhirTypesEnum.NULL
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
    } else if (FhirTypesEnum.BASE.code === code) {
      return FhirTypesEnum.BASE;
    } else if (FhirTypesEnum.ELEMENT.code === code) {
      return FhirTypesEnum.ELEMENT;
    } else if (FhirTypesEnum.BACKBONE_ELEMENT.code === code) {
      return FhirTypesEnum.BACKBONE_ELEMENT;
    } else if (FhirTypesEnum.DATA_TYPE.code === code) {
      return FhirTypesEnum.DATA_TYPE;
    } else if (FhirTypesEnum.ADDRESS.code === code) {
      return FhirTypesEnum.ADDRESS;
    } else if (FhirTypesEnum.ANNOTATION.code === code) {
      return FhirTypesEnum.ANNOTATION;
    } else if (FhirTypesEnum.ATTACHMENT.code === code) {
      return FhirTypesEnum.ATTACHMENT;
    } else if (FhirTypesEnum.AVAILABILITY.code === code) {
      return FhirTypesEnum.AVAILABILITY;
    } else if (FhirTypesEnum.BACKBONE_TYPE.code === code) {
      return FhirTypesEnum.BACKBONE_TYPE;
    } else if (FhirTypesEnum.DOSAGE.code === code) {
      return FhirTypesEnum.DOSAGE;
    } else if (FhirTypesEnum.ELEMENT_DEFINITION.code === code) {
      return FhirTypesEnum.ELEMENT_DEFINITION;
    } else if (FhirTypesEnum.MARKETING_STATUS.code === code) {
      return FhirTypesEnum.MARKETING_STATUS;
    } else if (FhirTypesEnum.PRODUCT_SHELF_LIFE.code === code) {
      return FhirTypesEnum.PRODUCT_SHELF_LIFE;
    } else if (FhirTypesEnum.TIMING.code === code) {
      return FhirTypesEnum.TIMING;
    } else if (FhirTypesEnum.CODEABLE_CONCEPT.code === code) {
      return FhirTypesEnum.CODEABLE_CONCEPT;
    } else if (FhirTypesEnum.CODEABLE_REFERENCE.code === code) {
      return FhirTypesEnum.CODEABLE_REFERENCE;
    } else if (FhirTypesEnum.CODING.code === code) {
      return FhirTypesEnum.CODING;
    } else if (FhirTypesEnum.CONTACT_DETAIL.code === code) {
      return FhirTypesEnum.CONTACT_DETAIL;
    } else if (FhirTypesEnum.CONTACT_POINT.code === code) {
      return FhirTypesEnum.CONTACT_POINT;
    } else if (FhirTypesEnum.CONTRIBUTOR.code === code) {
      return FhirTypesEnum.CONTRIBUTOR;
    } else if (FhirTypesEnum.DATA_REQUIREMENT.code === code) {
      return FhirTypesEnum.DATA_REQUIREMENT;
    } else if (FhirTypesEnum.EXPRESSION.code === code) {
      return FhirTypesEnum.EXPRESSION;
    } else if (FhirTypesEnum.EXTENDED_CONTACT_DETAIL.code === code) {
      return FhirTypesEnum.EXTENDED_CONTACT_DETAIL;
    } else if (FhirTypesEnum.EXTENSION.code === code) {
      return FhirTypesEnum.EXTENSION;
    } else if (FhirTypesEnum.HUMAN_NAME.code === code) {
      return FhirTypesEnum.HUMAN_NAME;
    } else if (FhirTypesEnum.IDENTIFIER.code === code) {
      return FhirTypesEnum.IDENTIFIER;
    } else if (FhirTypesEnum.META.code === code) {
      return FhirTypesEnum.META;
    } else if (FhirTypesEnum.MONETARY_COMPONENT.code === code) {
      return FhirTypesEnum.MONETARY_COMPONENT;
    } else if (FhirTypesEnum.MONEY.code === code) {
      return FhirTypesEnum.MONEY;
    } else if (FhirTypesEnum.NARRATIVE.code === code) {
      return FhirTypesEnum.NARRATIVE;
    } else if (FhirTypesEnum.PARAMETER_DEFINITION.code === code) {
      return FhirTypesEnum.PARAMETER_DEFINITION;
    } else if (FhirTypesEnum.PERIOD.code === code) {
      return FhirTypesEnum.PERIOD;
    } else if (FhirTypesEnum.PRIMITIVE_TYPE.code === code) {
      return FhirTypesEnum.PRIMITIVE_TYPE;
    } else if (FhirTypesEnum.BASE_64_BINARY.code === code) {
      return FhirTypesEnum.BASE_64_BINARY;
    } else if (FhirTypesEnum.BOOLEAN.code === code) {
      return FhirTypesEnum.BOOLEAN;
    } else if (FhirTypesEnum.DATE.code === code) {
      return FhirTypesEnum.DATE;
    } else if (FhirTypesEnum.DATE_TIME.code === code) {
      return FhirTypesEnum.DATE_TIME;
    } else if (FhirTypesEnum.DECIMAL.code === code) {
      return FhirTypesEnum.DECIMAL;
    } else if (FhirTypesEnum.INSTANT.code === code) {
      return FhirTypesEnum.INSTANT;
    } else if (FhirTypesEnum.INTEGER.code === code) {
      return FhirTypesEnum.INTEGER;
    } else if (FhirTypesEnum.POSITIVE_INT.code === code) {
      return FhirTypesEnum.POSITIVE_INT;
    } else if (FhirTypesEnum.UNSIGNED_INT.code === code) {
      return FhirTypesEnum.UNSIGNED_INT;
    } else if (FhirTypesEnum.INTEGER_64.code === code) {
      return FhirTypesEnum.INTEGER_64;
    } else if (FhirTypesEnum.STRING.code === code) {
      return FhirTypesEnum.STRING;
    } else if (FhirTypesEnum.CODE.code === code) {
      return FhirTypesEnum.CODE;
    } else if (FhirTypesEnum.ID.code === code) {
      return FhirTypesEnum.ID;
    } else if (FhirTypesEnum.MARKDOWN.code === code) {
      return FhirTypesEnum.MARKDOWN;
    } else if (FhirTypesEnum.TIME.code === code) {
      return FhirTypesEnum.TIME;
    } else if (FhirTypesEnum.URI.code === code) {
      return FhirTypesEnum.URI;
    } else if (FhirTypesEnum.CANONICAL.code === code) {
      return FhirTypesEnum.CANONICAL;
    } else if (FhirTypesEnum.OID.code === code) {
      return FhirTypesEnum.OID;
    } else if (FhirTypesEnum.URL.code === code) {
      return FhirTypesEnum.URL;
    } else if (FhirTypesEnum.UUID.code === code) {
      return FhirTypesEnum.UUID;
    } else if (FhirTypesEnum.QUANTITY.code === code) {
      return FhirTypesEnum.QUANTITY;
    } else if (FhirTypesEnum.AGE.code === code) {
      return FhirTypesEnum.AGE;
    } else if (FhirTypesEnum.COUNT.code === code) {
      return FhirTypesEnum.COUNT;
    } else if (FhirTypesEnum.DISTANCE.code === code) {
      return FhirTypesEnum.DISTANCE;
    } else if (FhirTypesEnum.DURATION.code === code) {
      return FhirTypesEnum.DURATION;
    } else if (FhirTypesEnum.RANGE.code === code) {
      return FhirTypesEnum.RANGE;
    } else if (FhirTypesEnum.RATIO.code === code) {
      return FhirTypesEnum.RATIO;
    } else if (FhirTypesEnum.RATIO_RANGE.code === code) {
      return FhirTypesEnum.RATIO_RANGE;
    } else if (FhirTypesEnum.REFERENCE.code === code) {
      return FhirTypesEnum.REFERENCE;
    } else if (FhirTypesEnum.RELATED_ARTIFACT.code === code) {
      return FhirTypesEnum.RELATED_ARTIFACT;
    } else if (FhirTypesEnum.SAMPLED_DATA.code === code) {
      return FhirTypesEnum.SAMPLED_DATA;
    } else if (FhirTypesEnum.SIGNATURE.code === code) {
      return FhirTypesEnum.SIGNATURE;
    } else if (FhirTypesEnum.TRIGGER_DEFINITION.code === code) {
      return FhirTypesEnum.TRIGGER_DEFINITION;
    } else if (FhirTypesEnum.USAGE_CONTEXT.code === code) {
      return FhirTypesEnum.USAGE_CONTEXT;
    } else if (FhirTypesEnum.VIRTUAL_SERVICE_DETAIL.code === code) {
      return FhirTypesEnum.VIRTUAL_SERVICE_DETAIL;
    } else if (FhirTypesEnum.XHTML.code === code) {
      return FhirTypesEnum.XHTML;
    } else if (FhirTypesEnum.RESOURCE.code === code) {
      return FhirTypesEnum.RESOURCE;
    } else if (FhirTypesEnum.BINARY.code === code) {
      return FhirTypesEnum.BINARY;
    } else if (FhirTypesEnum.BUNDLE.code === code) {
      return FhirTypesEnum.BUNDLE;
    } else if (FhirTypesEnum.DOMAIN_RESOURCE.code === code) {
      return FhirTypesEnum.DOMAIN_RESOURCE;
    } else if (FhirTypesEnum.ACCOUNT.code === code) {
      return FhirTypesEnum.ACCOUNT;
    } else if (FhirTypesEnum.ACTIVITY_DEFINITION.code === code) {
      return FhirTypesEnum.ACTIVITY_DEFINITION;
    } else if (FhirTypesEnum.ACTOR_DEFINITION.code === code) {
      return FhirTypesEnum.ACTOR_DEFINITION;
    } else if (FhirTypesEnum.ADMINISTRABLE_PRODUCT_DEFINITION.code === code) {
      return FhirTypesEnum.ADMINISTRABLE_PRODUCT_DEFINITION;
    } else if (FhirTypesEnum.ADVERSE_EVENT.code === code) {
      return FhirTypesEnum.ADVERSE_EVENT;
    } else if (FhirTypesEnum.ALLERGY_INTOLERANCE.code === code) {
      return FhirTypesEnum.ALLERGY_INTOLERANCE;
    } else if (FhirTypesEnum.APPOINTMENT.code === code) {
      return FhirTypesEnum.APPOINTMENT;
    } else if (FhirTypesEnum.APPOINTMENT_RESPONSE.code === code) {
      return FhirTypesEnum.APPOINTMENT_RESPONSE;
    } else if (FhirTypesEnum.ARTIFACT_ASSESSMENT.code === code) {
      return FhirTypesEnum.ARTIFACT_ASSESSMENT;
    } else if (FhirTypesEnum.AUDIT_EVENT.code === code) {
      return FhirTypesEnum.AUDIT_EVENT;
    } else if (FhirTypesEnum.BASIC.code === code) {
      return FhirTypesEnum.BASIC;
    } else if (FhirTypesEnum.BIOLOGICALLY_DERIVED_PRODUCT.code === code) {
      return FhirTypesEnum.BIOLOGICALLY_DERIVED_PRODUCT;
    } else if (FhirTypesEnum.BIOLOGICALLY_DERIVED_PRODUCT_DISPENSE.code === code) {
      return FhirTypesEnum.BIOLOGICALLY_DERIVED_PRODUCT_DISPENSE;
    } else if (FhirTypesEnum.BODY_STRUCTURE.code === code) {
      return FhirTypesEnum.BODY_STRUCTURE;
    } else if (FhirTypesEnum.CANONICAL_RESOURCE.code === code) {
      return FhirTypesEnum.CANONICAL_RESOURCE;
    } else if (FhirTypesEnum.CAPABILITY_STATEMENT.code === code) {
      return FhirTypesEnum.CAPABILITY_STATEMENT;
    } else if (FhirTypesEnum.CARE_PLAN.code === code) {
      return FhirTypesEnum.CARE_PLAN;
    } else if (FhirTypesEnum.CARE_TEAM.code === code) {
      return FhirTypesEnum.CARE_TEAM;
    } else if (FhirTypesEnum.CHARGE_ITEM.code === code) {
      return FhirTypesEnum.CHARGE_ITEM;
    } else if (FhirTypesEnum.CHARGE_ITEM_DEFINITION.code === code) {
      return FhirTypesEnum.CHARGE_ITEM_DEFINITION;
    } else if (FhirTypesEnum.CITATION.code === code) {
      return FhirTypesEnum.CITATION;
    } else if (FhirTypesEnum.CLAIM.code === code) {
      return FhirTypesEnum.CLAIM;
    } else if (FhirTypesEnum.CLAIM_RESPONSE.code === code) {
      return FhirTypesEnum.CLAIM_RESPONSE;
    } else if (FhirTypesEnum.CLINICAL_IMPRESSION.code === code) {
      return FhirTypesEnum.CLINICAL_IMPRESSION;
    } else if (FhirTypesEnum.CLINICAL_USE_DEFINITION.code === code) {
      return FhirTypesEnum.CLINICAL_USE_DEFINITION;
    } else if (FhirTypesEnum.CODE_SYSTEM.code === code) {
      return FhirTypesEnum.CODE_SYSTEM;
    } else if (FhirTypesEnum.COMMUNICATION.code === code) {
      return FhirTypesEnum.COMMUNICATION;
    } else if (FhirTypesEnum.COMMUNICATION_REQUEST.code === code) {
      return FhirTypesEnum.COMMUNICATION_REQUEST;
    } else if (FhirTypesEnum.COMPARTMENT_DEFINITION.code === code) {
      return FhirTypesEnum.COMPARTMENT_DEFINITION;
    } else if (FhirTypesEnum.COMPOSITION.code === code) {
      return FhirTypesEnum.COMPOSITION;
    } else if (FhirTypesEnum.CONCEPT_MAP.code === code) {
      return FhirTypesEnum.CONCEPT_MAP;
    } else if (FhirTypesEnum.CONDITION.code === code) {
      return FhirTypesEnum.CONDITION;
    } else if (FhirTypesEnum.CONDITION_DEFINITION.code === code) {
      return FhirTypesEnum.CONDITION_DEFINITION;
    } else if (FhirTypesEnum.CONSENT.code === code) {
      return FhirTypesEnum.CONSENT;
    } else if (FhirTypesEnum.CONTRACT.code === code) {
      return FhirTypesEnum.CONTRACT;
    } else if (FhirTypesEnum.COVERAGE.code === code) {
      return FhirTypesEnum.COVERAGE;
    } else if (FhirTypesEnum.COVERAGE_ELIGIBILITY_REQUEST.code === code) {
      return FhirTypesEnum.COVERAGE_ELIGIBILITY_REQUEST;
    } else if (FhirTypesEnum.COVERAGE_ELIGIBILITY_RESPONSE.code === code) {
      return FhirTypesEnum.COVERAGE_ELIGIBILITY_RESPONSE;
    } else if (FhirTypesEnum.DETECTED_ISSUE.code === code) {
      return FhirTypesEnum.DETECTED_ISSUE;
    } else if (FhirTypesEnum.DEVICE.code === code) {
      return FhirTypesEnum.DEVICE;
    } else if (FhirTypesEnum.DEVICE_ASSOCIATION.code === code) {
      return FhirTypesEnum.DEVICE_ASSOCIATION;
    } else if (FhirTypesEnum.DEVICE_DEFINITION.code === code) {
      return FhirTypesEnum.DEVICE_DEFINITION;
    } else if (FhirTypesEnum.DEVICE_DISPENSE.code === code) {
      return FhirTypesEnum.DEVICE_DISPENSE;
    } else if (FhirTypesEnum.DEVICE_METRIC.code === code) {
      return FhirTypesEnum.DEVICE_METRIC;
    } else if (FhirTypesEnum.DEVICE_REQUEST.code === code) {
      return FhirTypesEnum.DEVICE_REQUEST;
    } else if (FhirTypesEnum.DEVICE_USAGE.code === code) {
      return FhirTypesEnum.DEVICE_USAGE;
    } else if (FhirTypesEnum.DIAGNOSTIC_REPORT.code === code) {
      return FhirTypesEnum.DIAGNOSTIC_REPORT;
    } else if (FhirTypesEnum.DOCUMENT_REFERENCE.code === code) {
      return FhirTypesEnum.DOCUMENT_REFERENCE;
    } else if (FhirTypesEnum.ENCOUNTER.code === code) {
      return FhirTypesEnum.ENCOUNTER;
    } else if (FhirTypesEnum.ENCOUNTER_HISTORY.code === code) {
      return FhirTypesEnum.ENCOUNTER_HISTORY;
    } else if (FhirTypesEnum.ENDPOINT.code === code) {
      return FhirTypesEnum.ENDPOINT;
    } else if (FhirTypesEnum.ENROLLMENT_REQUEST.code === code) {
      return FhirTypesEnum.ENROLLMENT_REQUEST;
    } else if (FhirTypesEnum.ENROLLMENT_RESPONSE.code === code) {
      return FhirTypesEnum.ENROLLMENT_RESPONSE;
    } else if (FhirTypesEnum.EPISODE_OF_CARE.code === code) {
      return FhirTypesEnum.EPISODE_OF_CARE;
    } else if (FhirTypesEnum.EVENT_DEFINITION.code === code) {
      return FhirTypesEnum.EVENT_DEFINITION;
    } else if (FhirTypesEnum.EVIDENCE.code === code) {
      return FhirTypesEnum.EVIDENCE;
    } else if (FhirTypesEnum.EVIDENCE_REPORT.code === code) {
      return FhirTypesEnum.EVIDENCE_REPORT;
    } else if (FhirTypesEnum.EVIDENCE_VARIABLE.code === code) {
      return FhirTypesEnum.EVIDENCE_VARIABLE;
    } else if (FhirTypesEnum.EXAMPLE_SCENARIO.code === code) {
      return FhirTypesEnum.EXAMPLE_SCENARIO;
    } else if (FhirTypesEnum.EXPLANATION_OF_BENEFIT.code === code) {
      return FhirTypesEnum.EXPLANATION_OF_BENEFIT;
    } else if (FhirTypesEnum.FAMILY_MEMBER_HISTORY.code === code) {
      return FhirTypesEnum.FAMILY_MEMBER_HISTORY;
    } else if (FhirTypesEnum.FLAG.code === code) {
      return FhirTypesEnum.FLAG;
    } else if (FhirTypesEnum.FORMULARY_ITEM.code === code) {
      return FhirTypesEnum.FORMULARY_ITEM;
    } else if (FhirTypesEnum.GENOMIC_STUDY.code === code) {
      return FhirTypesEnum.GENOMIC_STUDY;
    } else if (FhirTypesEnum.GOAL.code === code) {
      return FhirTypesEnum.GOAL;
    } else if (FhirTypesEnum.GRAPH_DEFINITION.code === code) {
      return FhirTypesEnum.GRAPH_DEFINITION;
    } else if (FhirTypesEnum.GROUP.code === code) {
      return FhirTypesEnum.GROUP;
    } else if (FhirTypesEnum.GUIDANCE_RESPONSE.code === code) {
      return FhirTypesEnum.GUIDANCE_RESPONSE;
    } else if (FhirTypesEnum.HEALTHCARE_SERVICE.code === code) {
      return FhirTypesEnum.HEALTHCARE_SERVICE;
    } else if (FhirTypesEnum.IMAGING_SELECTION.code === code) {
      return FhirTypesEnum.IMAGING_SELECTION;
    } else if (FhirTypesEnum.IMAGING_STUDY.code === code) {
      return FhirTypesEnum.IMAGING_STUDY;
    } else if (FhirTypesEnum.IMMUNIZATION.code === code) {
      return FhirTypesEnum.IMMUNIZATION;
    } else if (FhirTypesEnum.IMMUNIZATION_EVALUATION.code === code) {
      return FhirTypesEnum.IMMUNIZATION_EVALUATION;
    } else if (FhirTypesEnum.IMMUNIZATION_RECOMMENDATION.code === code) {
      return FhirTypesEnum.IMMUNIZATION_RECOMMENDATION;
    } else if (FhirTypesEnum.IMPLEMENTATION_GUIDE.code === code) {
      return FhirTypesEnum.IMPLEMENTATION_GUIDE;
    } else if (FhirTypesEnum.INGREDIENT.code === code) {
      return FhirTypesEnum.INGREDIENT;
    } else if (FhirTypesEnum.INSURANCE_PLAN.code === code) {
      return FhirTypesEnum.INSURANCE_PLAN;
    } else if (FhirTypesEnum.INVENTORY_ITEM.code === code) {
      return FhirTypesEnum.INVENTORY_ITEM;
    } else if (FhirTypesEnum.INVENTORY_REPORT.code === code) {
      return FhirTypesEnum.INVENTORY_REPORT;
    } else if (FhirTypesEnum.INVOICE.code === code) {
      return FhirTypesEnum.INVOICE;
    } else if (FhirTypesEnum.LIBRARY.code === code) {
      return FhirTypesEnum.LIBRARY;
    } else if (FhirTypesEnum.LINKAGE.code === code) {
      return FhirTypesEnum.LINKAGE;
    } else if (FhirTypesEnum.LIST.code === code) {
      return FhirTypesEnum.LIST;
    } else if (FhirTypesEnum.LOCATION.code === code) {
      return FhirTypesEnum.LOCATION;
    } else if (FhirTypesEnum.MANUFACTURED_ITEM_DEFINITION.code === code) {
      return FhirTypesEnum.MANUFACTURED_ITEM_DEFINITION;
    } else if (FhirTypesEnum.MEASURE.code === code) {
      return FhirTypesEnum.MEASURE;
    } else if (FhirTypesEnum.MEASURE_REPORT.code === code) {
      return FhirTypesEnum.MEASURE_REPORT;
    } else if (FhirTypesEnum.MEDICATION.code === code) {
      return FhirTypesEnum.MEDICATION;
    } else if (FhirTypesEnum.MEDICATION_ADMINISTRATION.code === code) {
      return FhirTypesEnum.MEDICATION_ADMINISTRATION;
    } else if (FhirTypesEnum.MEDICATION_DISPENSE.code === code) {
      return FhirTypesEnum.MEDICATION_DISPENSE;
    } else if (FhirTypesEnum.MEDICATION_KNOWLEDGE.code === code) {
      return FhirTypesEnum.MEDICATION_KNOWLEDGE;
    } else if (FhirTypesEnum.MEDICATION_REQUEST.code === code) {
      return FhirTypesEnum.MEDICATION_REQUEST;
    } else if (FhirTypesEnum.MEDICATION_STATEMENT.code === code) {
      return FhirTypesEnum.MEDICATION_STATEMENT;
    } else if (FhirTypesEnum.MEDICINAL_PRODUCT_DEFINITION.code === code) {
      return FhirTypesEnum.MEDICINAL_PRODUCT_DEFINITION;
    } else if (FhirTypesEnum.MESSAGE_DEFINITION.code === code) {
      return FhirTypesEnum.MESSAGE_DEFINITION;
    } else if (FhirTypesEnum.MESSAGE_HEADER.code === code) {
      return FhirTypesEnum.MESSAGE_HEADER;
    } else if (FhirTypesEnum.METADATA_RESOURCE.code === code) {
      return FhirTypesEnum.METADATA_RESOURCE;
    } else if (FhirTypesEnum.MOLECULAR_SEQUENCE.code === code) {
      return FhirTypesEnum.MOLECULAR_SEQUENCE;
    } else if (FhirTypesEnum.NAMING_SYSTEM.code === code) {
      return FhirTypesEnum.NAMING_SYSTEM;
    } else if (FhirTypesEnum.NUTRITION_INTAKE.code === code) {
      return FhirTypesEnum.NUTRITION_INTAKE;
    } else if (FhirTypesEnum.NUTRITION_ORDER.code === code) {
      return FhirTypesEnum.NUTRITION_ORDER;
    } else if (FhirTypesEnum.NUTRITION_PRODUCT.code === code) {
      return FhirTypesEnum.NUTRITION_PRODUCT;
    } else if (FhirTypesEnum.OBSERVATION.code === code) {
      return FhirTypesEnum.OBSERVATION;
    } else if (FhirTypesEnum.OBSERVATION_DEFINITION.code === code) {
      return FhirTypesEnum.OBSERVATION_DEFINITION;
    } else if (FhirTypesEnum.OPERATION_DEFINITION.code === code) {
      return FhirTypesEnum.OPERATION_DEFINITION;
    } else if (FhirTypesEnum.OPERATION_OUTCOME.code === code) {
      return FhirTypesEnum.OPERATION_OUTCOME;
    } else if (FhirTypesEnum.ORGANIZATION.code === code) {
      return FhirTypesEnum.ORGANIZATION;
    } else if (FhirTypesEnum.ORGANIZATION_AFFILIATION.code === code) {
      return FhirTypesEnum.ORGANIZATION_AFFILIATION;
    } else if (FhirTypesEnum.PACKAGED_PRODUCT_DEFINITION.code === code) {
      return FhirTypesEnum.PACKAGED_PRODUCT_DEFINITION;
    } else if (FhirTypesEnum.PATIENT.code === code) {
      return FhirTypesEnum.PATIENT;
    } else if (FhirTypesEnum.PAYMENT_NOTICE.code === code) {
      return FhirTypesEnum.PAYMENT_NOTICE;
    } else if (FhirTypesEnum.PAYMENT_RECONCILIATION.code === code) {
      return FhirTypesEnum.PAYMENT_RECONCILIATION;
    } else if (FhirTypesEnum.PERMISSION.code === code) {
      return FhirTypesEnum.PERMISSION;
    } else if (FhirTypesEnum.PERSON.code === code) {
      return FhirTypesEnum.PERSON;
    } else if (FhirTypesEnum.PLAN_DEFINITION.code === code) {
      return FhirTypesEnum.PLAN_DEFINITION;
    } else if (FhirTypesEnum.PRACTITIONER.code === code) {
      return FhirTypesEnum.PRACTITIONER;
    } else if (FhirTypesEnum.PRACTITIONER_ROLE.code === code) {
      return FhirTypesEnum.PRACTITIONER_ROLE;
    } else if (FhirTypesEnum.PROCEDURE.code === code) {
      return FhirTypesEnum.PROCEDURE;
    } else if (FhirTypesEnum.PROVENANCE.code === code) {
      return FhirTypesEnum.PROVENANCE;
    } else if (FhirTypesEnum.QUESTIONNAIRE.code === code) {
      return FhirTypesEnum.QUESTIONNAIRE;
    } else if (FhirTypesEnum.QUESTIONNAIRE_RESPONSE.code === code) {
      return FhirTypesEnum.QUESTIONNAIRE_RESPONSE;
    } else if (FhirTypesEnum.REGULATED_AUTHORIZATION.code === code) {
      return FhirTypesEnum.REGULATED_AUTHORIZATION;
    } else if (FhirTypesEnum.RELATED_PERSON.code === code) {
      return FhirTypesEnum.RELATED_PERSON;
    } else if (FhirTypesEnum.REQUEST_ORCHESTRATION.code === code) {
      return FhirTypesEnum.REQUEST_ORCHESTRATION;
    } else if (FhirTypesEnum.REQUIREMENTS.code === code) {
      return FhirTypesEnum.REQUIREMENTS;
    } else if (FhirTypesEnum.RESEARCH_STUDY.code === code) {
      return FhirTypesEnum.RESEARCH_STUDY;
    } else if (FhirTypesEnum.RESEARCH_SUBJECT.code === code) {
      return FhirTypesEnum.RESEARCH_SUBJECT;
    } else if (FhirTypesEnum.RISK_ASSESSMENT.code === code) {
      return FhirTypesEnum.RISK_ASSESSMENT;
    } else if (FhirTypesEnum.SCHEDULE.code === code) {
      return FhirTypesEnum.SCHEDULE;
    } else if (FhirTypesEnum.SEARCH_PARAMETER.code === code) {
      return FhirTypesEnum.SEARCH_PARAMETER;
    } else if (FhirTypesEnum.SERVICE_REQUEST.code === code) {
      return FhirTypesEnum.SERVICE_REQUEST;
    } else if (FhirTypesEnum.SLOT.code === code) {
      return FhirTypesEnum.SLOT;
    } else if (FhirTypesEnum.SPECIMEN.code === code) {
      return FhirTypesEnum.SPECIMEN;
    } else if (FhirTypesEnum.SPECIMEN_DEFINITION.code === code) {
      return FhirTypesEnum.SPECIMEN_DEFINITION;
    } else if (FhirTypesEnum.STRUCTURE_DEFINITION.code === code) {
      return FhirTypesEnum.STRUCTURE_DEFINITION;
    } else if (FhirTypesEnum.STRUCTURE_MAP.code === code) {
      return FhirTypesEnum.STRUCTURE_MAP;
    } else if (FhirTypesEnum.SUBSCRIPTION.code === code) {
      return FhirTypesEnum.SUBSCRIPTION;
    } else if (FhirTypesEnum.SUBSCRIPTION_STATUS.code === code) {
      return FhirTypesEnum.SUBSCRIPTION_STATUS;
    } else if (FhirTypesEnum.SUBSCRIPTION_TOPIC.code === code) {
      return FhirTypesEnum.SUBSCRIPTION_TOPIC;
    } else if (FhirTypesEnum.SUBSTANCE.code === code) {
      return FhirTypesEnum.SUBSTANCE;
    } else if (FhirTypesEnum.SUBSTANCE_DEFINITION.code === code) {
      return FhirTypesEnum.SUBSTANCE_DEFINITION;
    } else if (FhirTypesEnum.SUBSTANCE_NUCLEIC_ACID.code === code) {
      return FhirTypesEnum.SUBSTANCE_NUCLEIC_ACID;
    } else if (FhirTypesEnum.SUBSTANCE_POLYMER.code === code) {
      return FhirTypesEnum.SUBSTANCE_POLYMER;
    } else if (FhirTypesEnum.SUBSTANCE_PROTEIN.code === code) {
      return FhirTypesEnum.SUBSTANCE_PROTEIN;
    } else if (FhirTypesEnum.SUBSTANCE_REFERENCE_INFORMATION.code === code) {
      return FhirTypesEnum.SUBSTANCE_REFERENCE_INFORMATION;
    } else if (FhirTypesEnum.SUBSTANCE_SOURCE_MATERIAL.code === code) {
      return FhirTypesEnum.SUBSTANCE_SOURCE_MATERIAL;
    } else if (FhirTypesEnum.SUPPLY_DELIVERY.code === code) {
      return FhirTypesEnum.SUPPLY_DELIVERY;
    } else if (FhirTypesEnum.SUPPLY_REQUEST.code === code) {
      return FhirTypesEnum.SUPPLY_REQUEST;
    } else if (FhirTypesEnum.TASK.code === code) {
      return FhirTypesEnum.TASK;
    } else if (FhirTypesEnum.TERMINOLOGY_CAPABILITIES.code === code) {
      return FhirTypesEnum.TERMINOLOGY_CAPABILITIES;
    } else if (FhirTypesEnum.TEST_PLAN.code === code) {
      return FhirTypesEnum.TEST_PLAN;
    } else if (FhirTypesEnum.TEST_REPORT.code === code) {
      return FhirTypesEnum.TEST_REPORT;
    } else if (FhirTypesEnum.TEST_SCRIPT.code === code) {
      return FhirTypesEnum.TEST_SCRIPT;
    } else if (FhirTypesEnum.TRANSPORT.code === code) {
      return FhirTypesEnum.TRANSPORT;
    } else if (FhirTypesEnum.VALUE_SET.code === code) {
      return FhirTypesEnum.VALUE_SET;
    } else if (FhirTypesEnum.VERIFICATION_RESULT.code === code) {
      return FhirTypesEnum.VERIFICATION_RESULT;
    } else if (FhirTypesEnum.VISION_PRESCRIPTION.code === code) {
      return FhirTypesEnum.VISION_PRESCRIPTION;
    } else if (FhirTypesEnum.PARAMETERS.code === code) {
      return FhirTypesEnum.PARAMETERS;
    } else if (FhirTypesEnum.NULL.code === code) {
      return FhirTypesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown FhirTypesEnum 'code' value '${code}'`);
    }
  }
}
