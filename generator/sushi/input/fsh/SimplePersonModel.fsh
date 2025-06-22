Resource:       SimplePersonModel
Id:             SimplePersonModel
Title:          "Simple Person Model"
Description:    "Represents a very simple FHIR data model for a custom FHIR StructureDefinition."

* ^url = "https://test.ts-fhir-datamodels.com/StructureDefinition/SimplePersonModel"
* ^purpose = "Provide a test (mock) data model to be used in testing the TestDataModel's `DomainResource.contained` feature."
* ^version = "1.0.0"
* ^experimental = true
* ^publisher = "Paqrat76/ts-fhir-datamodels"
* ^keyword[+] = http://terminology.hl7.org/CodeSystem/definition-use#custom-resource "Custom Resource"

* identifier 0..1 SU Identifier "A human identifier for this person" "Identifier for a person within a particular scope."
* identifier ^requirements = "People are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the person. Examples are national person identifier and local identifier."

* name 0..1 SU HumanName "A name associated with the person" "A name associated with the person."

* address 0..* SU Address "An addresses for the person" "One or more addresses for the person."
* address ^requirements = "May need to keep track of person's addresses for contacting, billing or reporting requirements and also to help with identification."

* phone 0..1 SU string "A phone number for this person" "A phone number for this person."
* phone ^comment = "Represents the person's primary phone number."
