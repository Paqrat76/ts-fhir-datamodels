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
 * ResourceTypesEnum Module
 *
 * CodeSystem.url: http://hl7.org/fhir/resource-types
 * CodeSystem.name: ResourceTypes
 * CodeSystem.description: One of the resource types defined as part of this version of FHIR.
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
 * FHIR CodeSystem: ResourceTypesEnum
 *
 * @remarks
 * This class is a "pseudo-enumeration" of code values having FHIR code properties.
 *
 * @category CodeSystems
 * @see [FHIR CodeSystem ResourceTypes](http://hl7.org/fhir/resource-types)
 */
export class ResourceTypesEnum implements IFhirCodeEnum {
  public static readonly ACCOUNT = new FhirCodeDefinition(
    'ACCOUNT',
    'Account',
    'http://hl7.org/fhir/resource-types',
    'Account',
    'A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.',
  );
  public static readonly ACTIVITY_DEFINITION = new FhirCodeDefinition(
    'ACTIVITY_DEFINITION',
    'ActivityDefinition',
    'http://hl7.org/fhir/resource-types',
    'ActivityDefinition',
    'This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.',
  );
  public static readonly ADVERSE_EVENT = new FhirCodeDefinition(
    'ADVERSE_EVENT',
    'AdverseEvent',
    'http://hl7.org/fhir/resource-types',
    'AdverseEvent',
    'Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.',
  );
  public static readonly ALLERGY_INTOLERANCE = new FhirCodeDefinition(
    'ALLERGY_INTOLERANCE',
    'AllergyIntolerance',
    'http://hl7.org/fhir/resource-types',
    'AllergyIntolerance',
    'Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.',
  );
  public static readonly APPOINTMENT = new FhirCodeDefinition(
    'APPOINTMENT',
    'Appointment',
    'http://hl7.org/fhir/resource-types',
    'Appointment',
    'A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).',
  );
  public static readonly APPOINTMENT_RESPONSE = new FhirCodeDefinition(
    'APPOINTMENT_RESPONSE',
    'AppointmentResponse',
    'http://hl7.org/fhir/resource-types',
    'AppointmentResponse',
    'A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.',
  );
  public static readonly AUDIT_EVENT = new FhirCodeDefinition(
    'AUDIT_EVENT',
    'AuditEvent',
    'http://hl7.org/fhir/resource-types',
    'AuditEvent',
    'A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.',
  );
  public static readonly BASIC = new FhirCodeDefinition(
    'BASIC',
    'Basic',
    'http://hl7.org/fhir/resource-types',
    'Basic',
    'Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don\'t map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.',
  );
  public static readonly BINARY = new FhirCodeDefinition(
    'BINARY',
    'Binary',
    'http://hl7.org/fhir/resource-types',
    'Binary',
    'A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.',
  );
  public static readonly BIOLOGICALLY_DERIVED_PRODUCT = new FhirCodeDefinition(
    'BIOLOGICALLY_DERIVED_PRODUCT',
    'BiologicallyDerivedProduct',
    'http://hl7.org/fhir/resource-types',
    'BiologicallyDerivedProduct',
    'A material substance originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity.',
  );
  public static readonly BODY_STRUCTURE = new FhirCodeDefinition(
    'BODY_STRUCTURE',
    'BodyStructure',
    'http://hl7.org/fhir/resource-types',
    'BodyStructure',
    'Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.',
  );
  public static readonly BUNDLE = new FhirCodeDefinition(
    'BUNDLE',
    'Bundle',
    'http://hl7.org/fhir/resource-types',
    'Bundle',
    'A container for a collection of resources.',
  );
  public static readonly CAPABILITY_STATEMENT = new FhirCodeDefinition(
    'CAPABILITY_STATEMENT',
    'CapabilityStatement',
    'http://hl7.org/fhir/resource-types',
    'CapabilityStatement',
    'A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.',
  );
  public static readonly CARE_PLAN = new FhirCodeDefinition(
    'CARE_PLAN',
    'CarePlan',
    'http://hl7.org/fhir/resource-types',
    'CarePlan',
    'Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.',
  );
  public static readonly CARE_TEAM = new FhirCodeDefinition(
    'CARE_TEAM',
    'CareTeam',
    'http://hl7.org/fhir/resource-types',
    'CareTeam',
    'The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.',
  );
  public static readonly CATALOG_ENTRY = new FhirCodeDefinition(
    'CATALOG_ENTRY',
    'CatalogEntry',
    'http://hl7.org/fhir/resource-types',
    'CatalogEntry',
    'Catalog entries are wrappers that contextualize items included in a catalog.',
  );
  public static readonly CHARGE_ITEM = new FhirCodeDefinition(
    'CHARGE_ITEM',
    'ChargeItem',
    'http://hl7.org/fhir/resource-types',
    'ChargeItem',
    'The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.',
  );
  public static readonly CHARGE_ITEM_DEFINITION = new FhirCodeDefinition(
    'CHARGE_ITEM_DEFINITION',
    'ChargeItemDefinition',
    'http://hl7.org/fhir/resource-types',
    'ChargeItemDefinition',
    'The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.',
  );
  public static readonly CLAIM = new FhirCodeDefinition(
    'CLAIM',
    'Claim',
    'http://hl7.org/fhir/resource-types',
    'Claim',
    'A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.',
  );
  public static readonly CLAIM_RESPONSE = new FhirCodeDefinition(
    'CLAIM_RESPONSE',
    'ClaimResponse',
    'http://hl7.org/fhir/resource-types',
    'ClaimResponse',
    'This resource provides the adjudication details from the processing of a Claim resource.',
  );
  public static readonly CLINICAL_IMPRESSION = new FhirCodeDefinition(
    'CLINICAL_IMPRESSION',
    'ClinicalImpression',
    'http://hl7.org/fhir/resource-types',
    'ClinicalImpression',
    'A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient\'s condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.',
  );
  public static readonly CODE_SYSTEM = new FhirCodeDefinition(
    'CODE_SYSTEM',
    'CodeSystem',
    'http://hl7.org/fhir/resource-types',
    'CodeSystem',
    'The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.',
  );
  public static readonly COMMUNICATION = new FhirCodeDefinition(
    'COMMUNICATION',
    'Communication',
    'http://hl7.org/fhir/resource-types',
    'Communication',
    'An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.',
  );
  public static readonly COMMUNICATION_REQUEST = new FhirCodeDefinition(
    'COMMUNICATION_REQUEST',
    'CommunicationRequest',
    'http://hl7.org/fhir/resource-types',
    'CommunicationRequest',
    'A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.',
  );
  public static readonly COMPARTMENT_DEFINITION = new FhirCodeDefinition(
    'COMPARTMENT_DEFINITION',
    'CompartmentDefinition',
    'http://hl7.org/fhir/resource-types',
    'CompartmentDefinition',
    'A compartment definition that defines how resources are accessed on a server.',
  );
  public static readonly COMPOSITION = new FhirCodeDefinition(
    'COMPOSITION',
    'Composition',
    'http://hl7.org/fhir/resource-types',
    'Composition',
    'A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).',
  );
  public static readonly CONCEPT_MAP = new FhirCodeDefinition(
    'CONCEPT_MAP',
    'ConceptMap',
    'http://hl7.org/fhir/resource-types',
    'ConceptMap',
    'A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.',
  );
  public static readonly CONDITION = new FhirCodeDefinition(
    'CONDITION',
    'Condition',
    'http://hl7.org/fhir/resource-types',
    'Condition',
    'A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.',
  );
  public static readonly CONSENT = new FhirCodeDefinition(
    'CONSENT',
    'Consent',
    'http://hl7.org/fhir/resource-types',
    'Consent',
    'A record of a healthcare consumer\'s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.',
  );
  public static readonly CONTRACT = new FhirCodeDefinition(
    'CONTRACT',
    'Contract',
    'http://hl7.org/fhir/resource-types',
    'Contract',
    'Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.',
  );
  public static readonly COVERAGE = new FhirCodeDefinition(
    'COVERAGE',
    'Coverage',
    'http://hl7.org/fhir/resource-types',
    'Coverage',
    'Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.',
  );
  public static readonly COVERAGE_ELIGIBILITY_REQUEST = new FhirCodeDefinition(
    'COVERAGE_ELIGIBILITY_REQUEST',
    'CoverageEligibilityRequest',
    'http://hl7.org/fhir/resource-types',
    'CoverageEligibilityRequest',
    'The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.',
  );
  public static readonly COVERAGE_ELIGIBILITY_RESPONSE = new FhirCodeDefinition(
    'COVERAGE_ELIGIBILITY_RESPONSE',
    'CoverageEligibilityResponse',
    'http://hl7.org/fhir/resource-types',
    'CoverageEligibilityResponse',
    'This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.',
  );
  public static readonly DETECTED_ISSUE = new FhirCodeDefinition(
    'DETECTED_ISSUE',
    'DetectedIssue',
    'http://hl7.org/fhir/resource-types',
    'DetectedIssue',
    'Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.',
  );
  public static readonly DEVICE = new FhirCodeDefinition(
    'DEVICE',
    'Device',
    'http://hl7.org/fhir/resource-types',
    'Device',
    'A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.',
  );
  public static readonly DEVICE_DEFINITION = new FhirCodeDefinition(
    'DEVICE_DEFINITION',
    'DeviceDefinition',
    'http://hl7.org/fhir/resource-types',
    'DeviceDefinition',
    'The characteristics, operational status and capabilities of a medical-related component of a medical device.',
  );
  public static readonly DEVICE_METRIC = new FhirCodeDefinition(
    'DEVICE_METRIC',
    'DeviceMetric',
    'http://hl7.org/fhir/resource-types',
    'DeviceMetric',
    'Describes a measurement, calculation or setting capability of a medical device.',
  );
  public static readonly DEVICE_REQUEST = new FhirCodeDefinition(
    'DEVICE_REQUEST',
    'DeviceRequest',
    'http://hl7.org/fhir/resource-types',
    'DeviceRequest',
    'Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.',
  );
  public static readonly DEVICE_USE_STATEMENT = new FhirCodeDefinition(
    'DEVICE_USE_STATEMENT',
    'DeviceUseStatement',
    'http://hl7.org/fhir/resource-types',
    'DeviceUseStatement',
    'A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.',
  );
  public static readonly DIAGNOSTIC_REPORT = new FhirCodeDefinition(
    'DIAGNOSTIC_REPORT',
    'DiagnosticReport',
    'http://hl7.org/fhir/resource-types',
    'DiagnosticReport',
    'The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.',
  );
  public static readonly DOCUMENT_MANIFEST = new FhirCodeDefinition(
    'DOCUMENT_MANIFEST',
    'DocumentManifest',
    'http://hl7.org/fhir/resource-types',
    'DocumentManifest',
    'A collection of documents compiled for a purpose together with metadata that applies to the collection.',
  );
  public static readonly DOCUMENT_REFERENCE = new FhirCodeDefinition(
    'DOCUMENT_REFERENCE',
    'DocumentReference',
    'http://hl7.org/fhir/resource-types',
    'DocumentReference',
    'A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.',
  );
  public static readonly DOMAIN_RESOURCE = new FhirCodeDefinition(
    'DOMAIN_RESOURCE',
    'DomainResource',
    'http://hl7.org/fhir/resource-types',
    'DomainResource',
    'A resource that includes narrative, extensions, and contained resources.',
  );
  public static readonly EFFECT_EVIDENCE_SYNTHESIS = new FhirCodeDefinition(
    'EFFECT_EVIDENCE_SYNTHESIS',
    'EffectEvidenceSynthesis',
    'http://hl7.org/fhir/resource-types',
    'EffectEvidenceSynthesis',
    'The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.',
  );
  public static readonly ENCOUNTER = new FhirCodeDefinition(
    'ENCOUNTER',
    'Encounter',
    'http://hl7.org/fhir/resource-types',
    'Encounter',
    'An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.',
  );
  public static readonly ENDPOINT = new FhirCodeDefinition(
    'ENDPOINT',
    'Endpoint',
    'http://hl7.org/fhir/resource-types',
    'Endpoint',
    'The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.',
  );
  public static readonly ENROLLMENT_REQUEST = new FhirCodeDefinition(
    'ENROLLMENT_REQUEST',
    'EnrollmentRequest',
    'http://hl7.org/fhir/resource-types',
    'EnrollmentRequest',
    'This resource provides the insurance enrollment details to the insurer regarding a specified coverage.',
  );
  public static readonly ENROLLMENT_RESPONSE = new FhirCodeDefinition(
    'ENROLLMENT_RESPONSE',
    'EnrollmentResponse',
    'http://hl7.org/fhir/resource-types',
    'EnrollmentResponse',
    'This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.',
  );
  public static readonly EPISODE_OF_CARE = new FhirCodeDefinition(
    'EPISODE_OF_CARE',
    'EpisodeOfCare',
    'http://hl7.org/fhir/resource-types',
    'EpisodeOfCare',
    'An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.',
  );
  public static readonly EVENT_DEFINITION = new FhirCodeDefinition(
    'EVENT_DEFINITION',
    'EventDefinition',
    'http://hl7.org/fhir/resource-types',
    'EventDefinition',
    'The EventDefinition resource provides a reusable description of when a particular event can occur.',
  );
  public static readonly EVIDENCE = new FhirCodeDefinition(
    'EVIDENCE',
    'Evidence',
    'http://hl7.org/fhir/resource-types',
    'Evidence',
    'The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.',
  );
  public static readonly EVIDENCE_VARIABLE = new FhirCodeDefinition(
    'EVIDENCE_VARIABLE',
    'EvidenceVariable',
    'http://hl7.org/fhir/resource-types',
    'EvidenceVariable',
    'The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.',
  );
  public static readonly EXAMPLE_SCENARIO = new FhirCodeDefinition(
    'EXAMPLE_SCENARIO',
    'ExampleScenario',
    'http://hl7.org/fhir/resource-types',
    'ExampleScenario',
    'Example of workflow instance.',
  );
  public static readonly EXPLANATION_OF_BENEFIT = new FhirCodeDefinition(
    'EXPLANATION_OF_BENEFIT',
    'ExplanationOfBenefit',
    'http://hl7.org/fhir/resource-types',
    'ExplanationOfBenefit',
    'This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.',
  );
  public static readonly FAMILY_MEMBER_HISTORY = new FhirCodeDefinition(
    'FAMILY_MEMBER_HISTORY',
    'FamilyMemberHistory',
    'http://hl7.org/fhir/resource-types',
    'FamilyMemberHistory',
    'Significant health conditions for a person related to the patient relevant in the context of care for the patient.',
  );
  public static readonly FLAG = new FhirCodeDefinition(
    'FLAG',
    'Flag',
    'http://hl7.org/fhir/resource-types',
    'Flag',
    'Prospective warnings of potential issues when providing care to the patient.',
  );
  public static readonly GOAL = new FhirCodeDefinition(
    'GOAL',
    'Goal',
    'http://hl7.org/fhir/resource-types',
    'Goal',
    'Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.',
  );
  public static readonly GRAPH_DEFINITION = new FhirCodeDefinition(
    'GRAPH_DEFINITION',
    'GraphDefinition',
    'http://hl7.org/fhir/resource-types',
    'GraphDefinition',
    'A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.',
  );
  public static readonly GROUP = new FhirCodeDefinition(
    'GROUP',
    'Group',
    'http://hl7.org/fhir/resource-types',
    'Group',
    'Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn\'t an Organization.',
  );
  public static readonly GUIDANCE_RESPONSE = new FhirCodeDefinition(
    'GUIDANCE_RESPONSE',
    'GuidanceResponse',
    'http://hl7.org/fhir/resource-types',
    'GuidanceResponse',
    'A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.',
  );
  public static readonly HEALTHCARE_SERVICE = new FhirCodeDefinition(
    'HEALTHCARE_SERVICE',
    'HealthcareService',
    'http://hl7.org/fhir/resource-types',
    'HealthcareService',
    'The details of a healthcare service available at a location.',
  );
  public static readonly IMAGING_STUDY = new FhirCodeDefinition(
    'IMAGING_STUDY',
    'ImagingStudy',
    'http://hl7.org/fhir/resource-types',
    'ImagingStudy',
    'Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.',
  );
  public static readonly IMMUNIZATION = new FhirCodeDefinition(
    'IMMUNIZATION',
    'Immunization',
    'http://hl7.org/fhir/resource-types',
    'Immunization',
    'Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.',
  );
  public static readonly IMMUNIZATION_EVALUATION = new FhirCodeDefinition(
    'IMMUNIZATION_EVALUATION',
    'ImmunizationEvaluation',
    'http://hl7.org/fhir/resource-types',
    'ImmunizationEvaluation',
    'Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.',
  );
  public static readonly IMMUNIZATION_RECOMMENDATION = new FhirCodeDefinition(
    'IMMUNIZATION_RECOMMENDATION',
    'ImmunizationRecommendation',
    'http://hl7.org/fhir/resource-types',
    'ImmunizationRecommendation',
    'A patient\'s point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.',
  );
  public static readonly IMPLEMENTATION_GUIDE = new FhirCodeDefinition(
    'IMPLEMENTATION_GUIDE',
    'ImplementationGuide',
    'http://hl7.org/fhir/resource-types',
    'ImplementationGuide',
    'A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.',
  );
  public static readonly INSURANCE_PLAN = new FhirCodeDefinition(
    'INSURANCE_PLAN',
    'InsurancePlan',
    'http://hl7.org/fhir/resource-types',
    'InsurancePlan',
    'Details of a Health Insurance product/plan provided by an organization.',
  );
  public static readonly INVOICE = new FhirCodeDefinition(
    'INVOICE',
    'Invoice',
    'http://hl7.org/fhir/resource-types',
    'Invoice',
    'Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.',
  );
  public static readonly LIBRARY = new FhirCodeDefinition(
    'LIBRARY',
    'Library',
    'http://hl7.org/fhir/resource-types',
    'Library',
    'The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.',
  );
  public static readonly LINKAGE = new FhirCodeDefinition(
    'LINKAGE',
    'Linkage',
    'http://hl7.org/fhir/resource-types',
    'Linkage',
    'Identifies two or more records (resource instances) that refer to the same real-world "occurrence".',
  );
  public static readonly LIST = new FhirCodeDefinition(
    'LIST',
    'List',
    'http://hl7.org/fhir/resource-types',
    'List',
    'A list is a curated collection of resources.',
  );
  public static readonly LOCATION = new FhirCodeDefinition(
    'LOCATION',
    'Location',
    'http://hl7.org/fhir/resource-types',
    'Location',
    'Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.',
  );
  public static readonly MEASURE = new FhirCodeDefinition(
    'MEASURE',
    'Measure',
    'http://hl7.org/fhir/resource-types',
    'Measure',
    'The Measure resource provides the definition of a quality measure.',
  );
  public static readonly MEASURE_REPORT = new FhirCodeDefinition(
    'MEASURE_REPORT',
    'MeasureReport',
    'http://hl7.org/fhir/resource-types',
    'MeasureReport',
    'The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.',
  );
  public static readonly MEDIA = new FhirCodeDefinition(
    'MEDIA',
    'Media',
    'http://hl7.org/fhir/resource-types',
    'Media',
    'A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.',
  );
  public static readonly MEDICATION = new FhirCodeDefinition(
    'MEDICATION',
    'Medication',
    'http://hl7.org/fhir/resource-types',
    'Medication',
    'This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.',
  );
  public static readonly MEDICATION_ADMINISTRATION = new FhirCodeDefinition(
    'MEDICATION_ADMINISTRATION',
    'MedicationAdministration',
    'http://hl7.org/fhir/resource-types',
    'MedicationAdministration',
    'Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.',
  );
  public static readonly MEDICATION_DISPENSE = new FhirCodeDefinition(
    'MEDICATION_DISPENSE',
    'MedicationDispense',
    'http://hl7.org/fhir/resource-types',
    'MedicationDispense',
    'Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.',
  );
  public static readonly MEDICATION_KNOWLEDGE = new FhirCodeDefinition(
    'MEDICATION_KNOWLEDGE',
    'MedicationKnowledge',
    'http://hl7.org/fhir/resource-types',
    'MedicationKnowledge',
    'Information about a medication that is used to support knowledge.',
  );
  public static readonly MEDICATION_REQUEST = new FhirCodeDefinition(
    'MEDICATION_REQUEST',
    'MedicationRequest',
    'http://hl7.org/fhir/resource-types',
    'MedicationRequest',
    'An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.',
  );
  public static readonly MEDICATION_STATEMENT = new FhirCodeDefinition(
    'MEDICATION_STATEMENT',
    'MedicationStatement',
    'http://hl7.org/fhir/resource-types',
    'MedicationStatement',
    'A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient\'s memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.  The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient\'s memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.',
  );
  public static readonly MEDICINAL_PRODUCT = new FhirCodeDefinition(
    'MEDICINAL_PRODUCT',
    'MedicinalProduct',
    'http://hl7.org/fhir/resource-types',
    'MedicinalProduct',
    'Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).',
  );
  public static readonly MEDICINAL_PRODUCT_AUTHORIZATION = new FhirCodeDefinition(
    'MEDICINAL_PRODUCT_AUTHORIZATION',
    'MedicinalProductAuthorization',
    'http://hl7.org/fhir/resource-types',
    'MedicinalProductAuthorization',
    'The regulatory authorization of a medicinal product.',
  );
  public static readonly MEDICINAL_PRODUCT_CONTRAINDICATION = new FhirCodeDefinition(
    'MEDICINAL_PRODUCT_CONTRAINDICATION',
    'MedicinalProductContraindication',
    'http://hl7.org/fhir/resource-types',
    'MedicinalProductContraindication',
    'The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.',
  );
  public static readonly MEDICINAL_PRODUCT_INDICATION = new FhirCodeDefinition(
    'MEDICINAL_PRODUCT_INDICATION',
    'MedicinalProductIndication',
    'http://hl7.org/fhir/resource-types',
    'MedicinalProductIndication',
    'Indication for the Medicinal Product.',
  );
  public static readonly MEDICINAL_PRODUCT_INGREDIENT = new FhirCodeDefinition(
    'MEDICINAL_PRODUCT_INGREDIENT',
    'MedicinalProductIngredient',
    'http://hl7.org/fhir/resource-types',
    'MedicinalProductIngredient',
    'An ingredient of a manufactured item or pharmaceutical product.',
  );
  public static readonly MEDICINAL_PRODUCT_INTERACTION = new FhirCodeDefinition(
    'MEDICINAL_PRODUCT_INTERACTION',
    'MedicinalProductInteraction',
    'http://hl7.org/fhir/resource-types',
    'MedicinalProductInteraction',
    'The interactions of the medicinal product with other medicinal products, or other forms of interactions.',
  );
  public static readonly MEDICINAL_PRODUCT_MANUFACTURED = new FhirCodeDefinition(
    'MEDICINAL_PRODUCT_MANUFACTURED',
    'MedicinalProductManufactured',
    'http://hl7.org/fhir/resource-types',
    'MedicinalProductManufactured',
    'The manufactured item as contained in the packaged medicinal product.',
  );
  public static readonly MEDICINAL_PRODUCT_PACKAGED = new FhirCodeDefinition(
    'MEDICINAL_PRODUCT_PACKAGED',
    'MedicinalProductPackaged',
    'http://hl7.org/fhir/resource-types',
    'MedicinalProductPackaged',
    'A medicinal product in a container or package.',
  );
  public static readonly MEDICINAL_PRODUCT_PHARMACEUTICAL = new FhirCodeDefinition(
    'MEDICINAL_PRODUCT_PHARMACEUTICAL',
    'MedicinalProductPharmaceutical',
    'http://hl7.org/fhir/resource-types',
    'MedicinalProductPharmaceutical',
    'A pharmaceutical product described in terms of its composition and dose form.',
  );
  public static readonly MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT = new FhirCodeDefinition(
    'MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT',
    'MedicinalProductUndesirableEffect',
    'http://hl7.org/fhir/resource-types',
    'MedicinalProductUndesirableEffect',
    'Describe the undesirable effects of the medicinal product.',
  );
  public static readonly MESSAGE_DEFINITION = new FhirCodeDefinition(
    'MESSAGE_DEFINITION',
    'MessageDefinition',
    'http://hl7.org/fhir/resource-types',
    'MessageDefinition',
    'Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.',
  );
  public static readonly MESSAGE_HEADER = new FhirCodeDefinition(
    'MESSAGE_HEADER',
    'MessageHeader',
    'http://hl7.org/fhir/resource-types',
    'MessageHeader',
    'The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.',
  );
  public static readonly MOLECULAR_SEQUENCE = new FhirCodeDefinition(
    'MOLECULAR_SEQUENCE',
    'MolecularSequence',
    'http://hl7.org/fhir/resource-types',
    'MolecularSequence',
    'Raw data describing a biological sequence.',
  );
  public static readonly NAMING_SYSTEM = new FhirCodeDefinition(
    'NAMING_SYSTEM',
    'NamingSystem',
    'http://hl7.org/fhir/resource-types',
    'NamingSystem',
    'A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.',
  );
  public static readonly NUTRITION_ORDER = new FhirCodeDefinition(
    'NUTRITION_ORDER',
    'NutritionOrder',
    'http://hl7.org/fhir/resource-types',
    'NutritionOrder',
    'A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.',
  );
  public static readonly OBSERVATION = new FhirCodeDefinition(
    'OBSERVATION',
    'Observation',
    'http://hl7.org/fhir/resource-types',
    'Observation',
    'Measurements and simple assertions made about a patient, device or other subject.',
  );
  public static readonly OBSERVATION_DEFINITION = new FhirCodeDefinition(
    'OBSERVATION_DEFINITION',
    'ObservationDefinition',
    'http://hl7.org/fhir/resource-types',
    'ObservationDefinition',
    'Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.',
  );
  public static readonly OPERATION_DEFINITION = new FhirCodeDefinition(
    'OPERATION_DEFINITION',
    'OperationDefinition',
    'http://hl7.org/fhir/resource-types',
    'OperationDefinition',
    'A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).',
  );
  public static readonly OPERATION_OUTCOME = new FhirCodeDefinition(
    'OPERATION_OUTCOME',
    'OperationOutcome',
    'http://hl7.org/fhir/resource-types',
    'OperationOutcome',
    'A collection of error, warning, or information messages that result from a system action.',
  );
  public static readonly ORGANIZATION = new FhirCodeDefinition(
    'ORGANIZATION',
    'Organization',
    'http://hl7.org/fhir/resource-types',
    'Organization',
    'A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.',
  );
  public static readonly ORGANIZATION_AFFILIATION = new FhirCodeDefinition(
    'ORGANIZATION_AFFILIATION',
    'OrganizationAffiliation',
    'http://hl7.org/fhir/resource-types',
    'OrganizationAffiliation',
    'Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.',
  );
  public static readonly PARAMETERS = new FhirCodeDefinition(
    'PARAMETERS',
    'Parameters',
    'http://hl7.org/fhir/resource-types',
    'Parameters',
    'This resource is a non-persisted resource used to pass information into and back from an [operation](https://hl7.org/fhir/operations.html). It has no other use, and there is no RESTful endpoint associated with it.',
  );
  public static readonly PATIENT = new FhirCodeDefinition(
    'PATIENT',
    'Patient',
    'http://hl7.org/fhir/resource-types',
    'Patient',
    'Demographics and other administrative information about an individual or animal receiving care or other health-related services.',
  );
  public static readonly PAYMENT_NOTICE = new FhirCodeDefinition(
    'PAYMENT_NOTICE',
    'PaymentNotice',
    'http://hl7.org/fhir/resource-types',
    'PaymentNotice',
    'This resource provides the status of the payment for goods and services rendered, and the request and response resource references.',
  );
  public static readonly PAYMENT_RECONCILIATION = new FhirCodeDefinition(
    'PAYMENT_RECONCILIATION',
    'PaymentReconciliation',
    'http://hl7.org/fhir/resource-types',
    'PaymentReconciliation',
    'This resource provides the details including amount of a payment and allocates the payment items being paid.',
  );
  public static readonly PERSON = new FhirCodeDefinition(
    'PERSON',
    'Person',
    'http://hl7.org/fhir/resource-types',
    'Person',
    'Demographics and administrative information about a person independent of a specific health-related context.',
  );
  public static readonly PLAN_DEFINITION = new FhirCodeDefinition(
    'PLAN_DEFINITION',
    'PlanDefinition',
    'http://hl7.org/fhir/resource-types',
    'PlanDefinition',
    'This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.',
  );
  public static readonly PRACTITIONER = new FhirCodeDefinition(
    'PRACTITIONER',
    'Practitioner',
    'http://hl7.org/fhir/resource-types',
    'Practitioner',
    'A person who is directly or indirectly involved in the provisioning of healthcare.',
  );
  public static readonly PRACTITIONER_ROLE = new FhirCodeDefinition(
    'PRACTITIONER_ROLE',
    'PractitionerRole',
    'http://hl7.org/fhir/resource-types',
    'PractitionerRole',
    'A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.',
  );
  public static readonly PROCEDURE = new FhirCodeDefinition(
    'PROCEDURE',
    'Procedure',
    'http://hl7.org/fhir/resource-types',
    'Procedure',
    'An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.',
  );
  public static readonly PROVENANCE = new FhirCodeDefinition(
    'PROVENANCE',
    'Provenance',
    'http://hl7.org/fhir/resource-types',
    'Provenance',
    'Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.',
  );
  public static readonly QUESTIONNAIRE = new FhirCodeDefinition(
    'QUESTIONNAIRE',
    'Questionnaire',
    'http://hl7.org/fhir/resource-types',
    'Questionnaire',
    'A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.',
  );
  public static readonly QUESTIONNAIRE_RESPONSE = new FhirCodeDefinition(
    'QUESTIONNAIRE_RESPONSE',
    'QuestionnaireResponse',
    'http://hl7.org/fhir/resource-types',
    'QuestionnaireResponse',
    'A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.',
  );
  public static readonly RELATED_PERSON = new FhirCodeDefinition(
    'RELATED_PERSON',
    'RelatedPerson',
    'http://hl7.org/fhir/resource-types',
    'RelatedPerson',
    'Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.',
  );
  public static readonly REQUEST_GROUP = new FhirCodeDefinition(
    'REQUEST_GROUP',
    'RequestGroup',
    'http://hl7.org/fhir/resource-types',
    'RequestGroup',
    'A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".',
  );
  public static readonly RESEARCH_DEFINITION = new FhirCodeDefinition(
    'RESEARCH_DEFINITION',
    'ResearchDefinition',
    'http://hl7.org/fhir/resource-types',
    'ResearchDefinition',
    'The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.',
  );
  public static readonly RESEARCH_ELEMENT_DEFINITION = new FhirCodeDefinition(
    'RESEARCH_ELEMENT_DEFINITION',
    'ResearchElementDefinition',
    'http://hl7.org/fhir/resource-types',
    'ResearchElementDefinition',
    'The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.',
  );
  public static readonly RESEARCH_STUDY = new FhirCodeDefinition(
    'RESEARCH_STUDY',
    'ResearchStudy',
    'http://hl7.org/fhir/resource-types',
    'ResearchStudy',
    'A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.',
  );
  public static readonly RESEARCH_SUBJECT = new FhirCodeDefinition(
    'RESEARCH_SUBJECT',
    'ResearchSubject',
    'http://hl7.org/fhir/resource-types',
    'ResearchSubject',
    'A physical entity which is the primary unit of operational and/or administrative interest in a study.',
  );
  public static readonly RESOURCE = new FhirCodeDefinition(
    'RESOURCE',
    'Resource',
    'http://hl7.org/fhir/resource-types',
    'Resource',
    'This is the base resource type for everything.',
  );
  public static readonly RISK_ASSESSMENT = new FhirCodeDefinition(
    'RISK_ASSESSMENT',
    'RiskAssessment',
    'http://hl7.org/fhir/resource-types',
    'RiskAssessment',
    'An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.',
  );
  public static readonly RISK_EVIDENCE_SYNTHESIS = new FhirCodeDefinition(
    'RISK_EVIDENCE_SYNTHESIS',
    'RiskEvidenceSynthesis',
    'http://hl7.org/fhir/resource-types',
    'RiskEvidenceSynthesis',
    'The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.',
  );
  public static readonly SCHEDULE = new FhirCodeDefinition(
    'SCHEDULE',
    'Schedule',
    'http://hl7.org/fhir/resource-types',
    'Schedule',
    'A container for slots of time that may be available for booking appointments.',
  );
  public static readonly SEARCH_PARAMETER = new FhirCodeDefinition(
    'SEARCH_PARAMETER',
    'SearchParameter',
    'http://hl7.org/fhir/resource-types',
    'SearchParameter',
    'A search parameter that defines a named search item that can be used to search/filter on a resource.',
  );
  public static readonly SERVICE_REQUEST = new FhirCodeDefinition(
    'SERVICE_REQUEST',
    'ServiceRequest',
    'http://hl7.org/fhir/resource-types',
    'ServiceRequest',
    'A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.',
  );
  public static readonly SLOT = new FhirCodeDefinition(
    'SLOT',
    'Slot',
    'http://hl7.org/fhir/resource-types',
    'Slot',
    'A slot of time on a schedule that may be available for booking appointments.',
  );
  public static readonly SPECIMEN = new FhirCodeDefinition(
    'SPECIMEN',
    'Specimen',
    'http://hl7.org/fhir/resource-types',
    'Specimen',
    'A sample to be used for analysis.',
  );
  public static readonly SPECIMEN_DEFINITION = new FhirCodeDefinition(
    'SPECIMEN_DEFINITION',
    'SpecimenDefinition',
    'http://hl7.org/fhir/resource-types',
    'SpecimenDefinition',
    'A kind of specimen with associated set of requirements.',
  );
  public static readonly STRUCTURE_DEFINITION = new FhirCodeDefinition(
    'STRUCTURE_DEFINITION',
    'StructureDefinition',
    'http://hl7.org/fhir/resource-types',
    'StructureDefinition',
    'A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.',
  );
  public static readonly STRUCTURE_MAP = new FhirCodeDefinition(
    'STRUCTURE_MAP',
    'StructureMap',
    'http://hl7.org/fhir/resource-types',
    'StructureMap',
    'A Map of relationships between 2 structures that can be used to transform data.',
  );
  public static readonly SUBSCRIPTION = new FhirCodeDefinition(
    'SUBSCRIPTION',
    'Subscription',
    'http://hl7.org/fhir/resource-types',
    'Subscription',
    'The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.',
  );
  public static readonly SUBSTANCE = new FhirCodeDefinition(
    'SUBSTANCE',
    'Substance',
    'http://hl7.org/fhir/resource-types',
    'Substance',
    'A homogeneous material with a definite composition.',
  );
  public static readonly SUBSTANCE_NUCLEIC_ACID = new FhirCodeDefinition(
    'SUBSTANCE_NUCLEIC_ACID',
    'SubstanceNucleicAcid',
    'http://hl7.org/fhir/resource-types',
    'SubstanceNucleicAcid',
    'Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5\'-3\' direction.',
  );
  public static readonly SUBSTANCE_POLYMER = new FhirCodeDefinition(
    'SUBSTANCE_POLYMER',
    'SubstancePolymer',
    'http://hl7.org/fhir/resource-types',
    'SubstancePolymer',
    'Todo.',
  );
  public static readonly SUBSTANCE_PROTEIN = new FhirCodeDefinition(
    'SUBSTANCE_PROTEIN',
    'SubstanceProtein',
    'http://hl7.org/fhir/resource-types',
    'SubstanceProtein',
    'A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.',
  );
  public static readonly SUBSTANCE_REFERENCE_INFORMATION = new FhirCodeDefinition(
    'SUBSTANCE_REFERENCE_INFORMATION',
    'SubstanceReferenceInformation',
    'http://hl7.org/fhir/resource-types',
    'SubstanceReferenceInformation',
    'Todo.',
  );
  public static readonly SUBSTANCE_SOURCE_MATERIAL = new FhirCodeDefinition(
    'SUBSTANCE_SOURCE_MATERIAL',
    'SubstanceSourceMaterial',
    'http://hl7.org/fhir/resource-types',
    'SubstanceSourceMaterial',
    'Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.',
  );
  public static readonly SUBSTANCE_SPECIFICATION = new FhirCodeDefinition(
    'SUBSTANCE_SPECIFICATION',
    'SubstanceSpecification',
    'http://hl7.org/fhir/resource-types',
    'SubstanceSpecification',
    'The detailed description of a substance, typically at a level beyond what is used for prescribing.',
  );
  public static readonly SUPPLY_DELIVERY = new FhirCodeDefinition(
    'SUPPLY_DELIVERY',
    'SupplyDelivery',
    'http://hl7.org/fhir/resource-types',
    'SupplyDelivery',
    'Record of delivery of what is supplied.',
  );
  public static readonly SUPPLY_REQUEST = new FhirCodeDefinition(
    'SUPPLY_REQUEST',
    'SupplyRequest',
    'http://hl7.org/fhir/resource-types',
    'SupplyRequest',
    'A record of a request for a medication, substance or device used in the healthcare setting.',
  );
  public static readonly TASK = new FhirCodeDefinition(
    'TASK',
    'Task',
    'http://hl7.org/fhir/resource-types',
    'Task',
    'A task to be performed.',
  );
  public static readonly TERMINOLOGY_CAPABILITIES = new FhirCodeDefinition(
    'TERMINOLOGY_CAPABILITIES',
    'TerminologyCapabilities',
    'http://hl7.org/fhir/resource-types',
    'TerminologyCapabilities',
    'A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.',
  );
  public static readonly TEST_REPORT = new FhirCodeDefinition(
    'TEST_REPORT',
    'TestReport',
    'http://hl7.org/fhir/resource-types',
    'TestReport',
    'A summary of information based on the results of executing a TestScript.',
  );
  public static readonly TEST_SCRIPT = new FhirCodeDefinition(
    'TEST_SCRIPT',
    'TestScript',
    'http://hl7.org/fhir/resource-types',
    'TestScript',
    'A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.',
  );
  public static readonly VALUE_SET = new FhirCodeDefinition(
    'VALUE_SET',
    'ValueSet',
    'http://hl7.org/fhir/resource-types',
    'ValueSet',
    'A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](https://hl7.org/fhir/terminologies.html).',
  );
  public static readonly VERIFICATION_RESULT = new FhirCodeDefinition(
    'VERIFICATION_RESULT',
    'VerificationResult',
    'http://hl7.org/fhir/resource-types',
    'VerificationResult',
    'Describes validation requirements, source(s), status and dates for one or more elements.',
  );
  public static readonly VISION_PRESCRIPTION = new FhirCodeDefinition(
    'VISION_PRESCRIPTION',
    'VisionPrescription',
    'http://hl7.org/fhir/resource-types',
    'VisionPrescription',
    'An authorization for the provision of glasses and/or contact lenses to a patient.',
  );

  // NULL added to help check for non-existent value
  public static readonly NULL = new FhirCodeDefinition('NULL', `null`);

  /**
   * @returns an IFhirCodeDefinition[] containing the enumeration of code system code definitions
   */
  values(): IFhirCodeDefinition[] {
    return [
      ResourceTypesEnum.ACCOUNT,
      ResourceTypesEnum.ACTIVITY_DEFINITION,
      ResourceTypesEnum.ADVERSE_EVENT,
      ResourceTypesEnum.ALLERGY_INTOLERANCE,
      ResourceTypesEnum.APPOINTMENT,
      ResourceTypesEnum.APPOINTMENT_RESPONSE,
      ResourceTypesEnum.AUDIT_EVENT,
      ResourceTypesEnum.BASIC,
      ResourceTypesEnum.BINARY,
      ResourceTypesEnum.BIOLOGICALLY_DERIVED_PRODUCT,
      ResourceTypesEnum.BODY_STRUCTURE,
      ResourceTypesEnum.BUNDLE,
      ResourceTypesEnum.CAPABILITY_STATEMENT,
      ResourceTypesEnum.CARE_PLAN,
      ResourceTypesEnum.CARE_TEAM,
      ResourceTypesEnum.CATALOG_ENTRY,
      ResourceTypesEnum.CHARGE_ITEM,
      ResourceTypesEnum.CHARGE_ITEM_DEFINITION,
      ResourceTypesEnum.CLAIM,
      ResourceTypesEnum.CLAIM_RESPONSE,
      ResourceTypesEnum.CLINICAL_IMPRESSION,
      ResourceTypesEnum.CODE_SYSTEM,
      ResourceTypesEnum.COMMUNICATION,
      ResourceTypesEnum.COMMUNICATION_REQUEST,
      ResourceTypesEnum.COMPARTMENT_DEFINITION,
      ResourceTypesEnum.COMPOSITION,
      ResourceTypesEnum.CONCEPT_MAP,
      ResourceTypesEnum.CONDITION,
      ResourceTypesEnum.CONSENT,
      ResourceTypesEnum.CONTRACT,
      ResourceTypesEnum.COVERAGE,
      ResourceTypesEnum.COVERAGE_ELIGIBILITY_REQUEST,
      ResourceTypesEnum.COVERAGE_ELIGIBILITY_RESPONSE,
      ResourceTypesEnum.DETECTED_ISSUE,
      ResourceTypesEnum.DEVICE,
      ResourceTypesEnum.DEVICE_DEFINITION,
      ResourceTypesEnum.DEVICE_METRIC,
      ResourceTypesEnum.DEVICE_REQUEST,
      ResourceTypesEnum.DEVICE_USE_STATEMENT,
      ResourceTypesEnum.DIAGNOSTIC_REPORT,
      ResourceTypesEnum.DOCUMENT_MANIFEST,
      ResourceTypesEnum.DOCUMENT_REFERENCE,
      ResourceTypesEnum.DOMAIN_RESOURCE,
      ResourceTypesEnum.EFFECT_EVIDENCE_SYNTHESIS,
      ResourceTypesEnum.ENCOUNTER,
      ResourceTypesEnum.ENDPOINT,
      ResourceTypesEnum.ENROLLMENT_REQUEST,
      ResourceTypesEnum.ENROLLMENT_RESPONSE,
      ResourceTypesEnum.EPISODE_OF_CARE,
      ResourceTypesEnum.EVENT_DEFINITION,
      ResourceTypesEnum.EVIDENCE,
      ResourceTypesEnum.EVIDENCE_VARIABLE,
      ResourceTypesEnum.EXAMPLE_SCENARIO,
      ResourceTypesEnum.EXPLANATION_OF_BENEFIT,
      ResourceTypesEnum.FAMILY_MEMBER_HISTORY,
      ResourceTypesEnum.FLAG,
      ResourceTypesEnum.GOAL,
      ResourceTypesEnum.GRAPH_DEFINITION,
      ResourceTypesEnum.GROUP,
      ResourceTypesEnum.GUIDANCE_RESPONSE,
      ResourceTypesEnum.HEALTHCARE_SERVICE,
      ResourceTypesEnum.IMAGING_STUDY,
      ResourceTypesEnum.IMMUNIZATION,
      ResourceTypesEnum.IMMUNIZATION_EVALUATION,
      ResourceTypesEnum.IMMUNIZATION_RECOMMENDATION,
      ResourceTypesEnum.IMPLEMENTATION_GUIDE,
      ResourceTypesEnum.INSURANCE_PLAN,
      ResourceTypesEnum.INVOICE,
      ResourceTypesEnum.LIBRARY,
      ResourceTypesEnum.LINKAGE,
      ResourceTypesEnum.LIST,
      ResourceTypesEnum.LOCATION,
      ResourceTypesEnum.MEASURE,
      ResourceTypesEnum.MEASURE_REPORT,
      ResourceTypesEnum.MEDIA,
      ResourceTypesEnum.MEDICATION,
      ResourceTypesEnum.MEDICATION_ADMINISTRATION,
      ResourceTypesEnum.MEDICATION_DISPENSE,
      ResourceTypesEnum.MEDICATION_KNOWLEDGE,
      ResourceTypesEnum.MEDICATION_REQUEST,
      ResourceTypesEnum.MEDICATION_STATEMENT,
      ResourceTypesEnum.MEDICINAL_PRODUCT,
      ResourceTypesEnum.MEDICINAL_PRODUCT_AUTHORIZATION,
      ResourceTypesEnum.MEDICINAL_PRODUCT_CONTRAINDICATION,
      ResourceTypesEnum.MEDICINAL_PRODUCT_INDICATION,
      ResourceTypesEnum.MEDICINAL_PRODUCT_INGREDIENT,
      ResourceTypesEnum.MEDICINAL_PRODUCT_INTERACTION,
      ResourceTypesEnum.MEDICINAL_PRODUCT_MANUFACTURED,
      ResourceTypesEnum.MEDICINAL_PRODUCT_PACKAGED,
      ResourceTypesEnum.MEDICINAL_PRODUCT_PHARMACEUTICAL,
      ResourceTypesEnum.MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT,
      ResourceTypesEnum.MESSAGE_DEFINITION,
      ResourceTypesEnum.MESSAGE_HEADER,
      ResourceTypesEnum.MOLECULAR_SEQUENCE,
      ResourceTypesEnum.NAMING_SYSTEM,
      ResourceTypesEnum.NUTRITION_ORDER,
      ResourceTypesEnum.OBSERVATION,
      ResourceTypesEnum.OBSERVATION_DEFINITION,
      ResourceTypesEnum.OPERATION_DEFINITION,
      ResourceTypesEnum.OPERATION_OUTCOME,
      ResourceTypesEnum.ORGANIZATION,
      ResourceTypesEnum.ORGANIZATION_AFFILIATION,
      ResourceTypesEnum.PARAMETERS,
      ResourceTypesEnum.PATIENT,
      ResourceTypesEnum.PAYMENT_NOTICE,
      ResourceTypesEnum.PAYMENT_RECONCILIATION,
      ResourceTypesEnum.PERSON,
      ResourceTypesEnum.PLAN_DEFINITION,
      ResourceTypesEnum.PRACTITIONER,
      ResourceTypesEnum.PRACTITIONER_ROLE,
      ResourceTypesEnum.PROCEDURE,
      ResourceTypesEnum.PROVENANCE,
      ResourceTypesEnum.QUESTIONNAIRE,
      ResourceTypesEnum.QUESTIONNAIRE_RESPONSE,
      ResourceTypesEnum.RELATED_PERSON,
      ResourceTypesEnum.REQUEST_GROUP,
      ResourceTypesEnum.RESEARCH_DEFINITION,
      ResourceTypesEnum.RESEARCH_ELEMENT_DEFINITION,
      ResourceTypesEnum.RESEARCH_STUDY,
      ResourceTypesEnum.RESEARCH_SUBJECT,
      ResourceTypesEnum.RESOURCE,
      ResourceTypesEnum.RISK_ASSESSMENT,
      ResourceTypesEnum.RISK_EVIDENCE_SYNTHESIS,
      ResourceTypesEnum.SCHEDULE,
      ResourceTypesEnum.SEARCH_PARAMETER,
      ResourceTypesEnum.SERVICE_REQUEST,
      ResourceTypesEnum.SLOT,
      ResourceTypesEnum.SPECIMEN,
      ResourceTypesEnum.SPECIMEN_DEFINITION,
      ResourceTypesEnum.STRUCTURE_DEFINITION,
      ResourceTypesEnum.STRUCTURE_MAP,
      ResourceTypesEnum.SUBSCRIPTION,
      ResourceTypesEnum.SUBSTANCE,
      ResourceTypesEnum.SUBSTANCE_NUCLEIC_ACID,
      ResourceTypesEnum.SUBSTANCE_POLYMER,
      ResourceTypesEnum.SUBSTANCE_PROTEIN,
      ResourceTypesEnum.SUBSTANCE_REFERENCE_INFORMATION,
      ResourceTypesEnum.SUBSTANCE_SOURCE_MATERIAL,
      ResourceTypesEnum.SUBSTANCE_SPECIFICATION,
      ResourceTypesEnum.SUPPLY_DELIVERY,
      ResourceTypesEnum.SUPPLY_REQUEST,
      ResourceTypesEnum.TASK,
      ResourceTypesEnum.TERMINOLOGY_CAPABILITIES,
      ResourceTypesEnum.TEST_REPORT,
      ResourceTypesEnum.TEST_SCRIPT,
      ResourceTypesEnum.VALUE_SET,
      ResourceTypesEnum.VERIFICATION_RESULT,
      ResourceTypesEnum.VISION_PRESCRIPTION,
      ResourceTypesEnum.NULL
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
    } else if (ResourceTypesEnum.ACCOUNT.code === code) {
      return ResourceTypesEnum.ACCOUNT;
    } else if (ResourceTypesEnum.ACTIVITY_DEFINITION.code === code) {
      return ResourceTypesEnum.ACTIVITY_DEFINITION;
    } else if (ResourceTypesEnum.ADVERSE_EVENT.code === code) {
      return ResourceTypesEnum.ADVERSE_EVENT;
    } else if (ResourceTypesEnum.ALLERGY_INTOLERANCE.code === code) {
      return ResourceTypesEnum.ALLERGY_INTOLERANCE;
    } else if (ResourceTypesEnum.APPOINTMENT.code === code) {
      return ResourceTypesEnum.APPOINTMENT;
    } else if (ResourceTypesEnum.APPOINTMENT_RESPONSE.code === code) {
      return ResourceTypesEnum.APPOINTMENT_RESPONSE;
    } else if (ResourceTypesEnum.AUDIT_EVENT.code === code) {
      return ResourceTypesEnum.AUDIT_EVENT;
    } else if (ResourceTypesEnum.BASIC.code === code) {
      return ResourceTypesEnum.BASIC;
    } else if (ResourceTypesEnum.BINARY.code === code) {
      return ResourceTypesEnum.BINARY;
    } else if (ResourceTypesEnum.BIOLOGICALLY_DERIVED_PRODUCT.code === code) {
      return ResourceTypesEnum.BIOLOGICALLY_DERIVED_PRODUCT;
    } else if (ResourceTypesEnum.BODY_STRUCTURE.code === code) {
      return ResourceTypesEnum.BODY_STRUCTURE;
    } else if (ResourceTypesEnum.BUNDLE.code === code) {
      return ResourceTypesEnum.BUNDLE;
    } else if (ResourceTypesEnum.CAPABILITY_STATEMENT.code === code) {
      return ResourceTypesEnum.CAPABILITY_STATEMENT;
    } else if (ResourceTypesEnum.CARE_PLAN.code === code) {
      return ResourceTypesEnum.CARE_PLAN;
    } else if (ResourceTypesEnum.CARE_TEAM.code === code) {
      return ResourceTypesEnum.CARE_TEAM;
    } else if (ResourceTypesEnum.CATALOG_ENTRY.code === code) {
      return ResourceTypesEnum.CATALOG_ENTRY;
    } else if (ResourceTypesEnum.CHARGE_ITEM.code === code) {
      return ResourceTypesEnum.CHARGE_ITEM;
    } else if (ResourceTypesEnum.CHARGE_ITEM_DEFINITION.code === code) {
      return ResourceTypesEnum.CHARGE_ITEM_DEFINITION;
    } else if (ResourceTypesEnum.CLAIM.code === code) {
      return ResourceTypesEnum.CLAIM;
    } else if (ResourceTypesEnum.CLAIM_RESPONSE.code === code) {
      return ResourceTypesEnum.CLAIM_RESPONSE;
    } else if (ResourceTypesEnum.CLINICAL_IMPRESSION.code === code) {
      return ResourceTypesEnum.CLINICAL_IMPRESSION;
    } else if (ResourceTypesEnum.CODE_SYSTEM.code === code) {
      return ResourceTypesEnum.CODE_SYSTEM;
    } else if (ResourceTypesEnum.COMMUNICATION.code === code) {
      return ResourceTypesEnum.COMMUNICATION;
    } else if (ResourceTypesEnum.COMMUNICATION_REQUEST.code === code) {
      return ResourceTypesEnum.COMMUNICATION_REQUEST;
    } else if (ResourceTypesEnum.COMPARTMENT_DEFINITION.code === code) {
      return ResourceTypesEnum.COMPARTMENT_DEFINITION;
    } else if (ResourceTypesEnum.COMPOSITION.code === code) {
      return ResourceTypesEnum.COMPOSITION;
    } else if (ResourceTypesEnum.CONCEPT_MAP.code === code) {
      return ResourceTypesEnum.CONCEPT_MAP;
    } else if (ResourceTypesEnum.CONDITION.code === code) {
      return ResourceTypesEnum.CONDITION;
    } else if (ResourceTypesEnum.CONSENT.code === code) {
      return ResourceTypesEnum.CONSENT;
    } else if (ResourceTypesEnum.CONTRACT.code === code) {
      return ResourceTypesEnum.CONTRACT;
    } else if (ResourceTypesEnum.COVERAGE.code === code) {
      return ResourceTypesEnum.COVERAGE;
    } else if (ResourceTypesEnum.COVERAGE_ELIGIBILITY_REQUEST.code === code) {
      return ResourceTypesEnum.COVERAGE_ELIGIBILITY_REQUEST;
    } else if (ResourceTypesEnum.COVERAGE_ELIGIBILITY_RESPONSE.code === code) {
      return ResourceTypesEnum.COVERAGE_ELIGIBILITY_RESPONSE;
    } else if (ResourceTypesEnum.DETECTED_ISSUE.code === code) {
      return ResourceTypesEnum.DETECTED_ISSUE;
    } else if (ResourceTypesEnum.DEVICE.code === code) {
      return ResourceTypesEnum.DEVICE;
    } else if (ResourceTypesEnum.DEVICE_DEFINITION.code === code) {
      return ResourceTypesEnum.DEVICE_DEFINITION;
    } else if (ResourceTypesEnum.DEVICE_METRIC.code === code) {
      return ResourceTypesEnum.DEVICE_METRIC;
    } else if (ResourceTypesEnum.DEVICE_REQUEST.code === code) {
      return ResourceTypesEnum.DEVICE_REQUEST;
    } else if (ResourceTypesEnum.DEVICE_USE_STATEMENT.code === code) {
      return ResourceTypesEnum.DEVICE_USE_STATEMENT;
    } else if (ResourceTypesEnum.DIAGNOSTIC_REPORT.code === code) {
      return ResourceTypesEnum.DIAGNOSTIC_REPORT;
    } else if (ResourceTypesEnum.DOCUMENT_MANIFEST.code === code) {
      return ResourceTypesEnum.DOCUMENT_MANIFEST;
    } else if (ResourceTypesEnum.DOCUMENT_REFERENCE.code === code) {
      return ResourceTypesEnum.DOCUMENT_REFERENCE;
    } else if (ResourceTypesEnum.DOMAIN_RESOURCE.code === code) {
      return ResourceTypesEnum.DOMAIN_RESOURCE;
    } else if (ResourceTypesEnum.EFFECT_EVIDENCE_SYNTHESIS.code === code) {
      return ResourceTypesEnum.EFFECT_EVIDENCE_SYNTHESIS;
    } else if (ResourceTypesEnum.ENCOUNTER.code === code) {
      return ResourceTypesEnum.ENCOUNTER;
    } else if (ResourceTypesEnum.ENDPOINT.code === code) {
      return ResourceTypesEnum.ENDPOINT;
    } else if (ResourceTypesEnum.ENROLLMENT_REQUEST.code === code) {
      return ResourceTypesEnum.ENROLLMENT_REQUEST;
    } else if (ResourceTypesEnum.ENROLLMENT_RESPONSE.code === code) {
      return ResourceTypesEnum.ENROLLMENT_RESPONSE;
    } else if (ResourceTypesEnum.EPISODE_OF_CARE.code === code) {
      return ResourceTypesEnum.EPISODE_OF_CARE;
    } else if (ResourceTypesEnum.EVENT_DEFINITION.code === code) {
      return ResourceTypesEnum.EVENT_DEFINITION;
    } else if (ResourceTypesEnum.EVIDENCE.code === code) {
      return ResourceTypesEnum.EVIDENCE;
    } else if (ResourceTypesEnum.EVIDENCE_VARIABLE.code === code) {
      return ResourceTypesEnum.EVIDENCE_VARIABLE;
    } else if (ResourceTypesEnum.EXAMPLE_SCENARIO.code === code) {
      return ResourceTypesEnum.EXAMPLE_SCENARIO;
    } else if (ResourceTypesEnum.EXPLANATION_OF_BENEFIT.code === code) {
      return ResourceTypesEnum.EXPLANATION_OF_BENEFIT;
    } else if (ResourceTypesEnum.FAMILY_MEMBER_HISTORY.code === code) {
      return ResourceTypesEnum.FAMILY_MEMBER_HISTORY;
    } else if (ResourceTypesEnum.FLAG.code === code) {
      return ResourceTypesEnum.FLAG;
    } else if (ResourceTypesEnum.GOAL.code === code) {
      return ResourceTypesEnum.GOAL;
    } else if (ResourceTypesEnum.GRAPH_DEFINITION.code === code) {
      return ResourceTypesEnum.GRAPH_DEFINITION;
    } else if (ResourceTypesEnum.GROUP.code === code) {
      return ResourceTypesEnum.GROUP;
    } else if (ResourceTypesEnum.GUIDANCE_RESPONSE.code === code) {
      return ResourceTypesEnum.GUIDANCE_RESPONSE;
    } else if (ResourceTypesEnum.HEALTHCARE_SERVICE.code === code) {
      return ResourceTypesEnum.HEALTHCARE_SERVICE;
    } else if (ResourceTypesEnum.IMAGING_STUDY.code === code) {
      return ResourceTypesEnum.IMAGING_STUDY;
    } else if (ResourceTypesEnum.IMMUNIZATION.code === code) {
      return ResourceTypesEnum.IMMUNIZATION;
    } else if (ResourceTypesEnum.IMMUNIZATION_EVALUATION.code === code) {
      return ResourceTypesEnum.IMMUNIZATION_EVALUATION;
    } else if (ResourceTypesEnum.IMMUNIZATION_RECOMMENDATION.code === code) {
      return ResourceTypesEnum.IMMUNIZATION_RECOMMENDATION;
    } else if (ResourceTypesEnum.IMPLEMENTATION_GUIDE.code === code) {
      return ResourceTypesEnum.IMPLEMENTATION_GUIDE;
    } else if (ResourceTypesEnum.INSURANCE_PLAN.code === code) {
      return ResourceTypesEnum.INSURANCE_PLAN;
    } else if (ResourceTypesEnum.INVOICE.code === code) {
      return ResourceTypesEnum.INVOICE;
    } else if (ResourceTypesEnum.LIBRARY.code === code) {
      return ResourceTypesEnum.LIBRARY;
    } else if (ResourceTypesEnum.LINKAGE.code === code) {
      return ResourceTypesEnum.LINKAGE;
    } else if (ResourceTypesEnum.LIST.code === code) {
      return ResourceTypesEnum.LIST;
    } else if (ResourceTypesEnum.LOCATION.code === code) {
      return ResourceTypesEnum.LOCATION;
    } else if (ResourceTypesEnum.MEASURE.code === code) {
      return ResourceTypesEnum.MEASURE;
    } else if (ResourceTypesEnum.MEASURE_REPORT.code === code) {
      return ResourceTypesEnum.MEASURE_REPORT;
    } else if (ResourceTypesEnum.MEDIA.code === code) {
      return ResourceTypesEnum.MEDIA;
    } else if (ResourceTypesEnum.MEDICATION.code === code) {
      return ResourceTypesEnum.MEDICATION;
    } else if (ResourceTypesEnum.MEDICATION_ADMINISTRATION.code === code) {
      return ResourceTypesEnum.MEDICATION_ADMINISTRATION;
    } else if (ResourceTypesEnum.MEDICATION_DISPENSE.code === code) {
      return ResourceTypesEnum.MEDICATION_DISPENSE;
    } else if (ResourceTypesEnum.MEDICATION_KNOWLEDGE.code === code) {
      return ResourceTypesEnum.MEDICATION_KNOWLEDGE;
    } else if (ResourceTypesEnum.MEDICATION_REQUEST.code === code) {
      return ResourceTypesEnum.MEDICATION_REQUEST;
    } else if (ResourceTypesEnum.MEDICATION_STATEMENT.code === code) {
      return ResourceTypesEnum.MEDICATION_STATEMENT;
    } else if (ResourceTypesEnum.MEDICINAL_PRODUCT.code === code) {
      return ResourceTypesEnum.MEDICINAL_PRODUCT;
    } else if (ResourceTypesEnum.MEDICINAL_PRODUCT_AUTHORIZATION.code === code) {
      return ResourceTypesEnum.MEDICINAL_PRODUCT_AUTHORIZATION;
    } else if (ResourceTypesEnum.MEDICINAL_PRODUCT_CONTRAINDICATION.code === code) {
      return ResourceTypesEnum.MEDICINAL_PRODUCT_CONTRAINDICATION;
    } else if (ResourceTypesEnum.MEDICINAL_PRODUCT_INDICATION.code === code) {
      return ResourceTypesEnum.MEDICINAL_PRODUCT_INDICATION;
    } else if (ResourceTypesEnum.MEDICINAL_PRODUCT_INGREDIENT.code === code) {
      return ResourceTypesEnum.MEDICINAL_PRODUCT_INGREDIENT;
    } else if (ResourceTypesEnum.MEDICINAL_PRODUCT_INTERACTION.code === code) {
      return ResourceTypesEnum.MEDICINAL_PRODUCT_INTERACTION;
    } else if (ResourceTypesEnum.MEDICINAL_PRODUCT_MANUFACTURED.code === code) {
      return ResourceTypesEnum.MEDICINAL_PRODUCT_MANUFACTURED;
    } else if (ResourceTypesEnum.MEDICINAL_PRODUCT_PACKAGED.code === code) {
      return ResourceTypesEnum.MEDICINAL_PRODUCT_PACKAGED;
    } else if (ResourceTypesEnum.MEDICINAL_PRODUCT_PHARMACEUTICAL.code === code) {
      return ResourceTypesEnum.MEDICINAL_PRODUCT_PHARMACEUTICAL;
    } else if (ResourceTypesEnum.MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT.code === code) {
      return ResourceTypesEnum.MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT;
    } else if (ResourceTypesEnum.MESSAGE_DEFINITION.code === code) {
      return ResourceTypesEnum.MESSAGE_DEFINITION;
    } else if (ResourceTypesEnum.MESSAGE_HEADER.code === code) {
      return ResourceTypesEnum.MESSAGE_HEADER;
    } else if (ResourceTypesEnum.MOLECULAR_SEQUENCE.code === code) {
      return ResourceTypesEnum.MOLECULAR_SEQUENCE;
    } else if (ResourceTypesEnum.NAMING_SYSTEM.code === code) {
      return ResourceTypesEnum.NAMING_SYSTEM;
    } else if (ResourceTypesEnum.NUTRITION_ORDER.code === code) {
      return ResourceTypesEnum.NUTRITION_ORDER;
    } else if (ResourceTypesEnum.OBSERVATION.code === code) {
      return ResourceTypesEnum.OBSERVATION;
    } else if (ResourceTypesEnum.OBSERVATION_DEFINITION.code === code) {
      return ResourceTypesEnum.OBSERVATION_DEFINITION;
    } else if (ResourceTypesEnum.OPERATION_DEFINITION.code === code) {
      return ResourceTypesEnum.OPERATION_DEFINITION;
    } else if (ResourceTypesEnum.OPERATION_OUTCOME.code === code) {
      return ResourceTypesEnum.OPERATION_OUTCOME;
    } else if (ResourceTypesEnum.ORGANIZATION.code === code) {
      return ResourceTypesEnum.ORGANIZATION;
    } else if (ResourceTypesEnum.ORGANIZATION_AFFILIATION.code === code) {
      return ResourceTypesEnum.ORGANIZATION_AFFILIATION;
    } else if (ResourceTypesEnum.PARAMETERS.code === code) {
      return ResourceTypesEnum.PARAMETERS;
    } else if (ResourceTypesEnum.PATIENT.code === code) {
      return ResourceTypesEnum.PATIENT;
    } else if (ResourceTypesEnum.PAYMENT_NOTICE.code === code) {
      return ResourceTypesEnum.PAYMENT_NOTICE;
    } else if (ResourceTypesEnum.PAYMENT_RECONCILIATION.code === code) {
      return ResourceTypesEnum.PAYMENT_RECONCILIATION;
    } else if (ResourceTypesEnum.PERSON.code === code) {
      return ResourceTypesEnum.PERSON;
    } else if (ResourceTypesEnum.PLAN_DEFINITION.code === code) {
      return ResourceTypesEnum.PLAN_DEFINITION;
    } else if (ResourceTypesEnum.PRACTITIONER.code === code) {
      return ResourceTypesEnum.PRACTITIONER;
    } else if (ResourceTypesEnum.PRACTITIONER_ROLE.code === code) {
      return ResourceTypesEnum.PRACTITIONER_ROLE;
    } else if (ResourceTypesEnum.PROCEDURE.code === code) {
      return ResourceTypesEnum.PROCEDURE;
    } else if (ResourceTypesEnum.PROVENANCE.code === code) {
      return ResourceTypesEnum.PROVENANCE;
    } else if (ResourceTypesEnum.QUESTIONNAIRE.code === code) {
      return ResourceTypesEnum.QUESTIONNAIRE;
    } else if (ResourceTypesEnum.QUESTIONNAIRE_RESPONSE.code === code) {
      return ResourceTypesEnum.QUESTIONNAIRE_RESPONSE;
    } else if (ResourceTypesEnum.RELATED_PERSON.code === code) {
      return ResourceTypesEnum.RELATED_PERSON;
    } else if (ResourceTypesEnum.REQUEST_GROUP.code === code) {
      return ResourceTypesEnum.REQUEST_GROUP;
    } else if (ResourceTypesEnum.RESEARCH_DEFINITION.code === code) {
      return ResourceTypesEnum.RESEARCH_DEFINITION;
    } else if (ResourceTypesEnum.RESEARCH_ELEMENT_DEFINITION.code === code) {
      return ResourceTypesEnum.RESEARCH_ELEMENT_DEFINITION;
    } else if (ResourceTypesEnum.RESEARCH_STUDY.code === code) {
      return ResourceTypesEnum.RESEARCH_STUDY;
    } else if (ResourceTypesEnum.RESEARCH_SUBJECT.code === code) {
      return ResourceTypesEnum.RESEARCH_SUBJECT;
    } else if (ResourceTypesEnum.RESOURCE.code === code) {
      return ResourceTypesEnum.RESOURCE;
    } else if (ResourceTypesEnum.RISK_ASSESSMENT.code === code) {
      return ResourceTypesEnum.RISK_ASSESSMENT;
    } else if (ResourceTypesEnum.RISK_EVIDENCE_SYNTHESIS.code === code) {
      return ResourceTypesEnum.RISK_EVIDENCE_SYNTHESIS;
    } else if (ResourceTypesEnum.SCHEDULE.code === code) {
      return ResourceTypesEnum.SCHEDULE;
    } else if (ResourceTypesEnum.SEARCH_PARAMETER.code === code) {
      return ResourceTypesEnum.SEARCH_PARAMETER;
    } else if (ResourceTypesEnum.SERVICE_REQUEST.code === code) {
      return ResourceTypesEnum.SERVICE_REQUEST;
    } else if (ResourceTypesEnum.SLOT.code === code) {
      return ResourceTypesEnum.SLOT;
    } else if (ResourceTypesEnum.SPECIMEN.code === code) {
      return ResourceTypesEnum.SPECIMEN;
    } else if (ResourceTypesEnum.SPECIMEN_DEFINITION.code === code) {
      return ResourceTypesEnum.SPECIMEN_DEFINITION;
    } else if (ResourceTypesEnum.STRUCTURE_DEFINITION.code === code) {
      return ResourceTypesEnum.STRUCTURE_DEFINITION;
    } else if (ResourceTypesEnum.STRUCTURE_MAP.code === code) {
      return ResourceTypesEnum.STRUCTURE_MAP;
    } else if (ResourceTypesEnum.SUBSCRIPTION.code === code) {
      return ResourceTypesEnum.SUBSCRIPTION;
    } else if (ResourceTypesEnum.SUBSTANCE.code === code) {
      return ResourceTypesEnum.SUBSTANCE;
    } else if (ResourceTypesEnum.SUBSTANCE_NUCLEIC_ACID.code === code) {
      return ResourceTypesEnum.SUBSTANCE_NUCLEIC_ACID;
    } else if (ResourceTypesEnum.SUBSTANCE_POLYMER.code === code) {
      return ResourceTypesEnum.SUBSTANCE_POLYMER;
    } else if (ResourceTypesEnum.SUBSTANCE_PROTEIN.code === code) {
      return ResourceTypesEnum.SUBSTANCE_PROTEIN;
    } else if (ResourceTypesEnum.SUBSTANCE_REFERENCE_INFORMATION.code === code) {
      return ResourceTypesEnum.SUBSTANCE_REFERENCE_INFORMATION;
    } else if (ResourceTypesEnum.SUBSTANCE_SOURCE_MATERIAL.code === code) {
      return ResourceTypesEnum.SUBSTANCE_SOURCE_MATERIAL;
    } else if (ResourceTypesEnum.SUBSTANCE_SPECIFICATION.code === code) {
      return ResourceTypesEnum.SUBSTANCE_SPECIFICATION;
    } else if (ResourceTypesEnum.SUPPLY_DELIVERY.code === code) {
      return ResourceTypesEnum.SUPPLY_DELIVERY;
    } else if (ResourceTypesEnum.SUPPLY_REQUEST.code === code) {
      return ResourceTypesEnum.SUPPLY_REQUEST;
    } else if (ResourceTypesEnum.TASK.code === code) {
      return ResourceTypesEnum.TASK;
    } else if (ResourceTypesEnum.TERMINOLOGY_CAPABILITIES.code === code) {
      return ResourceTypesEnum.TERMINOLOGY_CAPABILITIES;
    } else if (ResourceTypesEnum.TEST_REPORT.code === code) {
      return ResourceTypesEnum.TEST_REPORT;
    } else if (ResourceTypesEnum.TEST_SCRIPT.code === code) {
      return ResourceTypesEnum.TEST_SCRIPT;
    } else if (ResourceTypesEnum.VALUE_SET.code === code) {
      return ResourceTypesEnum.VALUE_SET;
    } else if (ResourceTypesEnum.VERIFICATION_RESULT.code === code) {
      return ResourceTypesEnum.VERIFICATION_RESULT;
    } else if (ResourceTypesEnum.VISION_PRESCRIPTION.code === code) {
      return ResourceTypesEnum.VISION_PRESCRIPTION;
    } else if (ResourceTypesEnum.NULL.code === code) {
      return ResourceTypesEnum.NULL;
    } else {
      throw new InvalidCodeError(`Unknown ResourceTypesEnum 'code' value '${code}'`);
    }
  }
}
