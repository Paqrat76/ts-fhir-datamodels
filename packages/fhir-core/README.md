# fhir-core

The design of the generated FHIR release-specific data models is inspired by the data models defined in the
[HAPI FHIR](https://hapifhir.io/) Java library.
Separate packages in this mono-repository contain the FHIR release-specific generated data models.
Each of those packages depend on this `fhir-core` package.

This `fhir-core` package is a TypeScript library providing common base data models, primitive FHIR data types,
custom errors, and various utilities required by the FHIR release-specific generated data model packages.

## References

### FHIR Specifications

- [FHIR R4](https://hl7.org/fhir/R4)
- [FHIR R4B](https://hl7.org/fhir/R4B)
- [FHIR R5](https://hl7.org/fhir/R5)
- [FHIR (6.0.0-ballot2)](https://hl7.org/fhir/6.0.0-ballot2)
- [FHIR (CI-build)](https://build.fhir.org/index.html)

### HAPI FHIR

#### Reference Links

- hapi-fhir-base ([JavaDoc](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-base/), [Source](https://github.com/hapifhir/hapi-fhir/tree/master/hapi-fhir-base))
- hapi-fhir-structures-r4 ([JavaDoc](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-structures-r4/))
- hapi-fhir-structures-r5 ([JavaDoc](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-structures-r5/))
- org.hl7.fhir.core ([Source](https://github.com/hapifhir/org.hl7.fhir.core))
  - org.hl7.fhir.r4 ([Source](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r4))
  - org.hl7.fhir.r4b ([Source](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r4b))
  - org.hl7.fhir.r5 ([Source](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r5))

#### Package Links

##### hapifhir/hapi-fhir

GitHub: [hapifhir/hapi-fhir](https://github.com/hapifhir/hapi-fhir)

- HAPI base classes and interfaces: [ca.uhn.fhir.model.api](https://github.com/hapifhir/hapi-fhir/tree/master/hapi-fhir-base/src/main/java/ca/uhn/fhir/model/api)
  - [JavaDocs](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-base/ca/uhn/fhir/model/api/package-summary.html)
- HAPI Annotations: [ca.uhn.fhir.model.api.annotation](https://github.com/hapifhir/hapi-fhir/tree/master/hapi-fhir-base/src/main/java/ca/uhn/fhir/model/api/annotation)
  - [JavaDocs](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-base/ca/uhn/fhir/model/api/annotation/package-summary.html)
- HAPI FHIR primitive definition classes (XxxxDt): [ca.uhn.fhir.model.primitive](https://github.com/hapifhir/hapi-fhir/tree/master/hapi-fhir-base/src/main/java/ca/uhn/fhir/model/primitive)
  - [JavaDocs](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-base/ca/uhn/fhir/model/primitive/package-summary.html)
- FHIR base interfaces: [org.hl7.fhir.instance.model.api](https://github.com/hapifhir/hapi-fhir/tree/master/hapi-fhir-base/src/main/java/org/hl7/fhir/instance/model/api)
  - [JavaDocs](https://hapifhir.io/hapi-fhir/apidocs/hapi-fhir-base/org/hl7/fhir/instance/model/api/package-summary.html)

##### hapifhir/org.hl7.fhir.core

GitHub: [hapifhir/org.hl7.fhir.core](https://github.com/hapifhir/org.hl7.fhir.core)

- Core FHIR R4: [org.hl7.fhir.r4](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r4/src/main/java/org/hl7/fhir/r4)

  - Element model classes: [org.hl7.fhir.r4.elementmodel](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r4/src/main/java/org/hl7/fhir/r4/elementmodel)
  - FHIR datatype and resource classes: [org.hl7.fhir.r4.model](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r4/src/main/java/org/hl7/fhir/r4/model)
    - Includes `XxxxType` that extends `PrimitiveType<T>` that extends `Type`

- Core FHIR R5: [org.hl7.fhir.r5](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r5/src/main/java/org/hl7/fhir/r5)
  - Element model classes: [org.hl7.fhir.r5.elementmodel](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r5/src/main/java/org/hl7/fhir/r5/elementmodel)
  - Extensions: [org.hl7.fhir.r5.extensions](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r5/src/main/java/org/hl7/fhir/r5/extensions)
  - FHIR datatype and resource classes: [org.hl7.fhir.r5.model](https://github.com/hapifhir/org.hl7.fhir.core/tree/master/org.hl7.fhir.r5/src/main/java/org/hl7/fhir/r5/model)
