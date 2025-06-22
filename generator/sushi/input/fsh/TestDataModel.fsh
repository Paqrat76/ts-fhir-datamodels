Resource:       TestDataModel
Parent:         DomainResource
Id:             TestDataModel
Title:          "Test Data Model"
Description:    "Represents a FHIR data model for a non-existent FHIR StructureDefinition. This test class will be tested by a comprehensive test suite to ensure all possible FHIR patterns are tested to ensure reliable generated FHIR data models that use all of these possible patterns."

* ^url = "https://test.ts-fhir-datamodels.com/StructureDefinition/TestDataModel"
* ^purpose = "Provide a test (mock) data model that contains all possible FHIR patterns for data model elements representing all types of FHIR data types having each possible cardinality type. The BackboneElement classes will handle a subset of FHIR data types. This class includes choice and Resource data types along with nested BackboneElement data types."
* ^version = "1.0.0"
* ^experimental = true
* ^publisher = "Paqrat76/ts-fhir-datamodels"
* ^keyword[+] = http://terminology.hl7.org/CodeSystem/definition-use#custom-resource "Custom Resource"

* choice01[x] 0..1 Range or Quantity "choice01"
* choice01[x] ^requirements = "Optional single 'choice' data type supporting 'Range' or 'Quantity'"

* resource01 0..1 Resource "resource01"
* resource01 ^requirements = "Optional single 'Resource' data type"

* backbonePrimitive0x 0..* BackboneElement "backbonePrimitive0x"
* backbonePrimitive0x ^requirements = "Optional list of TestDataModelPrimitiveComponent 'BackboneElement'"
* backbonePrimitive0x insert RuleSetBackboneElement
* backbonePrimitive0x.primitive01 0..1 dateTime "primitive01"
* backbonePrimitive0x.primitive01 ^requirements = "Optional single 'dateTime' data type"
* backbonePrimitive0x.primitive0x 0..* integer "primitive0x"
* backbonePrimitive0x.primitive0x ^requirements = "Optional list of 'integer' data type"
* backbonePrimitive0x.primitive11 1..1 boolean "primitive11"
* backbonePrimitive0x.primitive11 ^requirements = "Required single 'boolean' data type"
* backbonePrimitive0x.primitive1x 1..* string "primitive1x"
* backbonePrimitive0x.primitive1x ^requirements = "Required list of 'string' data type"
* backbonePrimitive0x.choice11[x] 1..1 uri or string "choice11"
* backbonePrimitive0x.choice11[x] ^requirements = "Required single 'choice' data type supporting 'uri' or 'string'"

* backboneComplex01 0..1 BackboneElement "backboneComplex01"
* backboneComplex01 ^requirements = "Optional single TestDataModelComplexComponent 'BackboneElement'"
* backboneComplex01 insert RuleSetBackboneElement
* backboneComplex01.complex01 0..1 HumanName "complex01"
* backboneComplex01.complex01 ^requirements = "Optional single 'HumanName' data type"
* backboneComplex01.complex0x 0..* Address "complex0x"
* backboneComplex01.complex0x ^requirements = "Optional list of 'Address' data type"
* backboneComplex01.complex11 1..1 Dosage "complex11"
* backboneComplex01.complex11 ^requirements = "Required single 'Dosage' data type"
* backboneComplex01.complex1x 1..* Period "complex1x"
* backboneComplex01.complex1x ^requirements = "Required list of 'Period' data type"

* backboneComplex01.backboneReference11 1..1 BackboneElement "backboneReference11"
* backboneComplex01.backboneReference11 ^requirements = "Required single TestDataModelReferenceComponent 'BackboneElement'"
* backboneComplex01.backboneReference11 insert RuleSetBackboneElement
* backboneComplex01.backboneReference11.reference01 0..1 Reference(Resource) "backboneReference11.reference01"
* backboneComplex01.backboneReference11.reference01 ^requirements = "Optional single 'Reference(any)' data type"
* backboneComplex01.backboneReference11.reference0x 0..* Reference(Practitioner or PractitionerRole or Organization) "backboneReference11.reference0x"
* backboneComplex01.backboneReference11.reference0x ^requirements = "Optional list of 'Reference(Practitioner or PractitionerRole or Organization)' data type"
* backboneComplex01.backboneReference11.reference11 1..1 Reference(Patient or SimplePersonModel) "backboneReference11.reference11"
* backboneComplex01.backboneReference11.reference11 ^requirements = "Required single 'Reference(Patient or SimplePersonModel)' data type"
* backboneComplex01.backboneReference11.reference1x 1..* Reference(Condition) "backboneReference11.reference1x"
* backboneComplex01.backboneReference11.reference1x ^requirements = "Required list of 'Reference(Condition)' data type"

* backboneComplex01.backboneReference11.backboneEnumCode1x 1..* BackboneElement "backboneEnumCode1x"
* backboneComplex01.backboneReference11.backboneEnumCode1x ^requirements = "Required list of TestDataModelEnumCodeComponent 'BackboneElement'"
* backboneComplex01.backboneReference11.backboneEnumCode1x insert RuleSetBackboneElement
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode01 0..1 code "backboneEnumCode1x.enumCode01"
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode01 ^requirements = "Optional single 'code' data type with required ValueSet"
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode01 from http://hl7.org/fhir/ValueSet/task-code (required)
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode11 1..1 code "backboneEnumCode1x.enumCode11"
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode11 ^requirements = "Required single 'code' data type with required ValueSet"
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode11 from http://hl7.org/fhir/ValueSet/contributor-type (required)
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode0x 0..* code "backboneEnumCode1x.enumCode0x"
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode0x ^requirements = "Optional list of 'code' data type with required ValueSet"
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode0x from http://hl7.org/fhir/ValueSet/task-status (required)
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode1x 1..* code "backboneEnumCode1x.enumCode1x"
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode1x ^requirements = "Required list of 'code' data type with required ValueSet"
* backboneComplex01.backboneReference11.backboneEnumCode1x.enumCode1x from http://hl7.org/fhir/ValueSet/consent-state-codes (required)
* backboneComplex01.backboneReference11.backboneEnumCode1x.backbonePrimitive01 0..1 contentReference #TestDataModel.backbonePrimitive0x "backboneEnumCode1x.backbonePrimitive01"
* backboneComplex01.backboneReference11.backboneEnumCode1x.backbonePrimitive01 ^requirements = "Optional single TestDataModelPrimitiveComponent 'BackboneElement'"
