# Base Modules

Ideally, the TypeScript files in this `base` directory would be in the `@paq-ts-fhir/fhir-core` project, but these
source files have dependencies on the generated complex data types.
Therefore, these source files are maintained in the `generator/src/generator-lib/base` directory and are copied into
the `packages/rX-datamodels/src/base` directory when the FHIR release specific data models are generated.
