# FHIR Cache List

## FHIR Resources

**Custom:**
TestDataModel
SimplePersonModel

**Dependent:**
Device
DeviceDefinition
Endpoint
HealthcareService
Location
Organization
Patient
Practitioner
PractitionerRole
RelatedPerson

**Special Case:**
Bundle (extends Resource rather than DomainResource)

## FHIR Complex Types

**Data Types:**
Address
Age
Annotation
Attachment
CodeableConcept
Coding
ContactPoint
Count
Distance
Duration
HumanName
Identifier
Money
Period
Quantity
Range
Ratio
SampledData
Signature
Timing

**MetaDataTypes:**
ContactDetail
Contributor
DataRequirement
Expression
ParameterDefinition
RelatedArtifact
TriggerDefinition
UsageContext

**Special Types:**
Dosage
Meta
Narrative
Reference
Extension

**R4 Under Development Types:** (Required by resource DeviceDefinition)
ProdCharacteristic
ProductShelfLife

## FHIR Cache

### StructureDefinitions

**NOTE:** `**R**` below indicates FHIR Resources; All others are FHIR Complex Data Types

Address
Age
Annotation
Attachment
Bundle **R**
CodeableConcept
Coding
ContactDetail
ContactPoint
Contributor
Count
DataRequirement
Device **R**
DeviceDefinition **R**
Distance
Dosage
Duration
Endpoint **R**
Expression
HealthcareService **R**
HumanName
Identifier
Location **R**
Meta
Money
Narrative
Organization **R**
Patient **R**
ParameterDefinition
Period
Practitioner **R**
PractitionerRole **R**
ProdCharacteristic
ProductShelfLife
Quantity
Range
Ratio
Reference
RelatedArtifact
RelatedPerson **
SampledData
Signature
SimplePersonModel **R**
TestDataModel **R**
Timing
TriggerDefinition
UsageContext

### ValueSets / CodeSystems

http://hl7.org/fhir/ValueSet/address-type / http://hl7.org/fhir/address-type
http://hl7.org/fhir/ValueSet/address-use / http://hl7.org/fhir/address-use
http://hl7.org/fhir/ValueSet/administrative-gender / http://hl7.org/fhir/administrative-gender
http://hl7.org/fhir/ValueSet/all-types / MULTIPLE CodeSystems
http://hl7.org/fhir/ValueSet/bundle-type / https://hl7.org/fhir/codesystem-bundle-type.html
http://hl7.org/fhir/ValueSet/consent-state-codes / http://hl7.org/fhir/consent-state-codes
http://hl7.org/fhir/ValueSet/contact-point-system / http://hl7.org/fhir/contact-point-system
http://hl7.org/fhir/ValueSet/contact-point-use / http://hl7.org/fhir/contact-point-use
http://hl7.org/fhir/ValueSet/contributor-type / http://hl7.org/fhir/contributor-type
http://hl7.org/fhir/ValueSet/currencies / NON-FHIR CodeSystem
http://hl7.org/fhir/ValueSet/days-of-week / http://hl7.org/fhir/days-of-week
http://hl7.org/fhir/ValueSet/device-nametype / http://hl7.org/fhir/device-nametype
http://hl7.org/fhir/ValueSet/device-status / http://hl7.org/fhir/device-status
http://hl7.org/fhir/ValueSet/endpoint-status / http://hl7.org/fhir/endpoint-status
http://hl7.org/fhir/ValueSet/event-timing / MULTIPLE CodeSystems
http://hl7.org/fhir/ValueSet/http-verb / http://hl7.org/fhir/http-verb
http://hl7.org/fhir/ValueSet/identifier-use / http://hl7.org/fhir/identifier-use
http://hl7.org/fhir/ValueSet/languages / NON-FHIR CodeSystem
http://hl7.org/fhir/ValueSet/link-type / http://hl7.org/fhir/link-type
http://hl7.org/fhir/ValueSet/location-mode / http://hl7.org/fhir/location-mode
http://hl7.org/fhir/ValueSet/location-status / http://hl7.org/fhir/location-status
http://hl7.org/fhir/ValueSet/mimetypes / NON-FHIR CodeSystem
http://hl7.org/fhir/ValueSet/name-use / http://hl7.org/fhir/name-use
http://hl7.org/fhir/ValueSet/narrative-status / http://hl7.org/fhir/narrative-status
http://hl7.org/fhir/ValueSet/operation-parameter-use / http://hl7.org/fhir/operation-parameter-use
http://hl7.org/fhir/ValueSet/quantity-comparator / http://hl7.org/fhir/quantity-comparator
http://hl7.org/fhir/ValueSet/related-artifact-type / http://hl7.org/fhir/related-artifact-type
http://hl7.org/fhir/valueset-search-entry-mode.html / http://hl7.org/fhir/search-entry-mode
http://hl7.org/fhir/ValueSet/sort-direction / http://hl7.org/fhir/sort-direction
http://hl7.org/fhir/ValueSet/task-code / http://hl7.org/fhir/CodeSystem/task-code
http://hl7.org/fhir/ValueSet/task-status / http://hl7.org/fhir/task-status
http://hl7.org/fhir/ValueSet/trigger-type / http://hl7.org/fhir/trigger-type
http://hl7.org/fhir/ValueSet/udi-entry-type / http://hl7.org/fhir/udi-entry-type
http://hl7.org/fhir/ValueSet/units-of-time / NON-FHIR CodeSystem
