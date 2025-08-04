Resource:       TestModel
Parent:         DomainResource
Id:             TestModel
Title:          "Test Data Model"
Description:    "Represents a FHIR data model for a custom FHIR StructureDefinition. This class will be tested by a comprehensive test suite covering all possible FHIR patterns."

* ^url = "https://test.ts-fhir-datamodels.com/StructureDefinition/TestModel"
* ^purpose = "Provide a test (mock) data model that contains all possible FHIR patterns for data model elements representing all types of FHIR data types having each possible cardinality type. The BackboneElement classes will handle a subset of FHIR data types. This class includes choice and Resource data types along with nested BackboneElement data types."
* ^version = "1.0.0"
* ^experimental = true
* ^publisher = "Paqrat76/ts-fhir-datamodels"
* ^keyword[+] = http://terminology.hl7.org/CodeSystem/definition-use#custom-resource "Custom Resource"

* choice01[x] 0..1 Range or Quantity "choice01"
* choice01[x] ^requirements = "Optional single 'choice' data type supporting 'Range' or 'Quantity'"

* resource01 0..1 Resource "resource01"
* resource01 ^requirements = "Optional single 'Resource' data type"

* primitive 0..* BackboneElement "BackboneElement containing primitive datatype patterns"
* primitive ^requirements = "Optional list of TestModelPrimitiveComponent 'BackboneElement'"
* primitive insert RuleSetBackboneElement
* primitive.primitive01 0..1 dateTime "primitive01"
* primitive.primitive01 ^requirements = "Optional single 'dateTime' data type"
* primitive.primitive0x 0..* integer "primitive0x"
* primitive.primitive0x ^requirements = "Optional list of 'integer' data type"
* primitive.primitive11 1..1 boolean "primitive11"
* primitive.primitive11 ^requirements = "Required single 'boolean' data type"
* primitive.primitive1x 1..* string "primitive1x"
* primitive.primitive1x ^requirements = "Required list of 'string' data type"
* primitive.choice11[x] 1..1 uri or string "choice11"
* primitive.choice11[x] ^requirements = "Required single 'choice' data type supporting 'uri' or 'string'"

* complex 0..1 BackboneElement "BackboneElement containing complex datatype patterns"
* complex ^requirements = "Optional single TestModelComplexComponent 'BackboneElement'"
* complex insert RuleSetBackboneElement
* complex.complex01 0..1 HumanName "complex01"
* complex.complex01 ^requirements = "Optional single 'HumanName' data type"
* complex.complex0x 0..* Address "complex0x"
* complex.complex0x ^requirements = "Optional list of 'Address' data type"
* complex.complex11 1..1 Dosage "complex11"
* complex.complex11 ^requirements = "Required single 'Dosage' data type"
* complex.complex1x 1..* Period "complex1x"
* complex.complex1x ^requirements = "Required list of 'Period' data type"

* complex.reference 1..1 BackboneElement "BackboneElement containing reference datatype patterns"
* complex.reference ^requirements = "Required single TestModelComplexReferenceComponent 'BackboneElement'"
* complex.reference insert RuleSetBackboneElement
* complex.reference.reference01 0..1 Reference(Location) "reference.reference01"
* complex.reference.reference01 ^requirements = "Optional single 'Reference(any)' data type"
* complex.reference.reference0x 0..* Reference(Practitioner or PractitionerRole or Organization) "reference.reference0x"
* complex.reference.reference0x ^requirements = "Optional list of 'Reference(Practitioner or PractitionerRole or Organization)' data type"
* complex.reference.reference11 1..1 Reference(SimplePersonModel) "reference.reference11"
* complex.reference.reference11 ^requirements = "Required single 'Reference(Patient or SimplePersonModel)' data type"
* complex.reference.reference1x 1..* Reference(HealthcareService) "reference.reference1x"
* complex.reference.reference1x ^requirements = "Required list of 'Reference(Condition)' data type"

* complex.reference.enumCode 1..* BackboneElement "BackboneElement containing EnumCode datatype patterns"
* complex.reference.enumCode ^requirements = "Required list of TestModelComplexReferenceEnumCodeComponent 'BackboneElement'"
* complex.reference.enumCode insert RuleSetBackboneElement
* complex.reference.enumCode.enumCode01 0..1 code "enumCode.enumCode01"
* complex.reference.enumCode.enumCode01 ^requirements = "Optional single 'code' data type with required ValueSet"
* complex.reference.enumCode.enumCode01 from http://hl7.org/fhir/ValueSet/task-code (required)
* complex.reference.enumCode.enumCode11 1..1 code "enumCode.enumCode11"
* complex.reference.enumCode.enumCode11 ^requirements = "Required single 'code' data type with required ValueSet"
* complex.reference.enumCode.enumCode11 from http://hl7.org/fhir/ValueSet/contributor-type (required)
* complex.reference.enumCode.enumCode0x 0..* code "enumCode.enumCode0x"
* complex.reference.enumCode.enumCode0x ^requirements = "Optional list of 'code' data type with required ValueSet"
* complex.reference.enumCode.enumCode0x from http://hl7.org/fhir/ValueSet/task-status (required)
* complex.reference.enumCode.enumCode1x 1..* code "enumCode.enumCode1x"
* complex.reference.enumCode.enumCode1x ^requirements = "Required list of 'code' data type with required ValueSet"
* complex.reference.enumCode.enumCode1x from http://hl7.org/fhir/ValueSet/consent-state-codes (required)
* complex.reference.enumCode.primitive 0..1 contentReference #TestModel.primitive "enumCode.primitive"
* complex.reference.enumCode.primitive ^requirements = "Optional single TestModelPrimitiveComponent 'BackboneElement'"
