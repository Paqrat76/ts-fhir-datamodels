RuleSet:  RuleSetBackboneElement
// Sushi does not generate the id, extensions, and modifierExtension for BackboneElements

* id 0..1 string "Unique id for inter-element referencing" "Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces."
* id ^representation[+] = #xmlAttr
* id ^base.path = "Element.id"
* id ^type[+].extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type"
* id ^type[=].extension[=].valueUrl = "string"
* id ^type[=].code = "http://hl7.org/fhirpath/System.String"

* extension 0..* Extension "Additional content defined by implementations" "May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension."
* extension ^comment = "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone."
* extension ^base.path = "Element.extension"
* extension ^constraint[+].key = "ele-1"
* extension ^constraint[=].severity = #error
* extension ^constraint[=].human = "All FHIR elements must have a @value or children"
* extension ^constraint[=].expression = "hasValue() or (children().count() > id.count())"
* extension ^constraint[=].xpath = "@value|f:*|h:div"
* extension ^constraint[=].source = "http://hl7.org/fhir/StructureDefinition/Element"
* extension ^constraint[+].key = "ext-1"
* extension ^constraint[=].severity = #error
* extension ^constraint[=].human = "Must have either extensions or value[x], not both"
* extension ^constraint[=].expression = "extension.exists() != value.exists()"
* extension ^constraint[=].xpath = "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])"
* extension ^constraint[=].source = "http://hl7.org/fhir/StructureDefinition/Extension"

* modifierExtension 0..* SU Extension "Extensions that cannot be ignored even if unrecognized" "May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself)."
* modifierExtension ^comment = "There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone."
* modifierExtension ^requirements = "Modifier extensions allow for extensions that *cannot* be safely ignored to be clearly distinguished from the vast majority of extensions which can be safely ignored.  This promotes interoperability by eliminating the need for implementers to prohibit the presence of extensions. For further information, see the [definition of modifier extensions](extensibility.html#modifierExtension)."
* modifierExtension ^base.path = "BackboneElement.modifierExtension"
* modifierExtension ^constraint[+].key = "ele-1"
* modifierExtension ^constraint[=].severity = #error
* modifierExtension ^constraint[=].human = "All FHIR elements must have a @value or children"
* modifierExtension ^constraint[=].expression = "hasValue() or (children().count() > id.count())"
* modifierExtension ^constraint[=].xpath = "@value|f:*|h:div"
* modifierExtension ^constraint[=].source = "http://hl7.org/fhir/StructureDefinition/Element"
* modifierExtension ^constraint[+].key = "ext-1"
* modifierExtension ^constraint[=].severity = #error
* modifierExtension ^constraint[=].human = "Must have either extensions or value[x], not both"
* modifierExtension ^constraint[=].expression = "extension.exists() != value.exists()"
* modifierExtension ^constraint[=].xpath = "exists(f:extension)!=exists(f:*[starts-with(local-name(.), \"value\")])"
* modifierExtension ^constraint[=].source = "http://hl7.org/fhir/StructureDefinition/Extension"
* modifierExtension ^isModifier = true
* modifierExtension ^isModifierReason = "Modifier extensions are expected to modify the meaning or interpretation of the element that contains them"
