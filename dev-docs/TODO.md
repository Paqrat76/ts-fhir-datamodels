# TODO

## Feature Set

- Handle complex data types that include properties having the `Element` data type (i.e. pseudo-BackboneType).
- Handle complex data types that extend `BackboneElement` rather than `Element` (i.e., Dosage, ElementDefinition, Timing).
- Move `Resource`, `DomainResource`, `Extension`, and all code systems and complex data types to be generated
  - Adjust utilities as needed
- Improve test coverage in `fhir-core/src/utility/fhir-parsers.ts`
- Investigate strategies to resolve required complex data types in `fhir-core` and their inclusion in generated
  complex types.
- Investigate strategies to resolve circular references caused by:
  - fhir-contained-resource-parser/getFhirModelParseResults(...)
  - fhir-parsers/getValueXData(...)

## Possible Considerations (future roadmap)

- Investigate approaches to implementing complex data type invariant "rules" (e.g., Period: "+ Rule: If present,
  start SHALL have a lower value than end")
- Investigate approaches to implementing resource invariant "rules"/"constraints"
- Investigate serialization output option to only include FHIR "summary" fields
  - Ref: [Summary](https://hl7.org/fhir/r4/search.html#summary)
- HAPI FHIR Features
  - [Custom Structures](https://hapifhir.io/hapi-fhir/docs/model/custom_structures.html)
  - [Bundle Builder](https://hapifhir.io/hapi-fhir/docs/model/bundle_builder.html)
  - [Narrative Generator](https://hapifhir.io/hapi-fhir/docs/model/narrative_generation.html)
