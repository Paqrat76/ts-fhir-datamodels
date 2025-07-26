# TypeScript FHIR Data Models

**NOTE: This project is a work-in-progress!!**

## Overview

This project generates TypeScript FHIR data models inspired by the [HAPI FHIR](https://hapifhir.io/hapi-fhir/docs/model/working_with_resources.html)
data models (FHIR R4 and later versions).
The generator consumes FHIR artifacts for selected FHIR releases to generate the data models using class templates.
The data models are generated for FHIR resources and complex data types using FHIR StructureDefinitions.
FHIR CodeSystems are used to generate "pseudo-enums" for FHIR `code` data elements defined in StructureDefinitions
having a `required` binding.
This project also includes a FHIR core library (`fhir-core`) used by all generated data models.
It includes the base models, primitive FHIR data types, utilities, and custom errors.

## Development Plan

This project will be constructed in the following phases:

1. (**Completed**) Creation and initialization of the project and GitHub repository as a mono-repository
   - Initial creation of the `fhir-core` package by migrating it from GitHub [typescript-hapi-models-poc](https://github.com/Paqrat76/typescript-hapi-models-poc/tree/main/src/fhir-core)
2. (**Completed**) Creation of the data model generator
   - Create generator module
   - Create stub package for `r4-datamodels`
   - Complete generator module that can generate all code (CodeSystem pseudo-enum classes, complex type data models,
     resource data models) for FHIR R4
     - all generated code passes linting without errors or warnings
     - Typedoc does not report any errors or warnings for generated content
3. (**Completed**) Add comprehensive testing for generator
   - Unit tests for generator components with coverage exceeding 90%
   - Functional tests for generated content. This will be achieved using custom FHIR artifacts (StructureDefinitions and
     CodeSystems) used to generate content that covers all possible template combinations (refer to `typescript-hapi-models-poc`
     [src/test-models](https://github.com/Paqrat76/typescript-hapi-models-poc/tree/main/src/test-models) and
     [test/test-models](https://github.com/Paqrat76/typescript-hapi-models-poc/tree/main/test/test-models)).
4. (**Completed**) Cleanup the `fhir-core` package. The goal is to trim down the project to only include the primitive data type
   implementations, base models, dependent complex type models, utilities, errors, etc. Ensure unit test coverage
   exceeds 90%.
5. (**Work-in-Progress**) Fill out project documentation for all aspects of this mono-repository
6. Add the `r4b-datamodels` and `r5-datamodels` packages. The `r6-datamodels`package will be added when FHIR R6 is released.
7. Finalize component documentation (using [Typedoc](https://typedoc.org/)) for each package. Implement the publication
   of this documentation for consumers of these packages.
8. In each of the data model packages, implement the publication process to the NPM repository to make these libraries
   available for use by FHIR developers.
