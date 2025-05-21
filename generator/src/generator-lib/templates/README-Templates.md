# Handlebar Templates

## Background

The [Paqrat76/typescript-hapi-models-poc](https://github.com/Paqrat76/typescript-hapi-models-poc) GitHub project
provided a "proof of concept" for FHIR data models created in TypeScript that were inspired by the [HAPI FHIR](https://hapifhir.io/)
models (FHIR R4 and later versions).
A select group of TypeScript data models for FHIR complex data types and FHIR resources were handcrafted to create and
validate a detailed design for data models.
This work resulted in a set of text-based "templates" that contain selected methods and related code blocks to be used
when handcrafting additional FHIR resource data models classes.
They evolved from some early efforts to provide sample data type methods that could be copied/pasted into handcrafted
FHIR resource data models.
These templates were used to create handcrafted FHIR resource data models to provide a consistent and repeatable process
for defining the necessary class properties and associated methods.
Using these templates also validated that the code blocks are correct for each of the scenarios.
When the POC project was completed, the handcrafted data models became examples that inform the data model templates
to be used to generate FHIR complex data types and FHIR resources.
The text-based "templates" seen in Paqrat76/typescript-hapi-models-poc [zTemplates](https://github.com/Paqrat76/typescript-hapi-models-poc/tree/main/zTemplates)
became the detailed design for creating Handlebars partial templates for the various patterns for class properties and
their associated class methods.

## Implementation

The `generator-lib/templates` directory contains all Handlebars template files (`*.hbs`) and their associated template
code support files (`*-hbs.ts`).
The files in the `generator-lib/templates` directory are for the data models,
Those in the `generator-lib/templates/partials` directory contain Handlebars partial templates for the various patterns
for class properties and their associated class methods needed within the generated data models.

The Handlebars expressions that map to the "xxxx" variables found in the text-based "templates" in the
Paqrat76/typescript-hapi-models-poc zTemplates are:

- XxxxParentClassName => `{{sdHbs.name}}`
- XxxxParentClassElement.xxxxFieldName => `{{edHbs.path}}`
- xxxxFieldName => `{{edHbs.fieldName}}`
- XxxxFieldName => `{{upperFirst edHbs.fieldName}}`
- XxxxClass => `{{edHbs.type.code}}`
- XxxxPrimitiveType => `{{edHbs.type.code}}`
- xxxxPrimitive => `fhir{{upperFirst edHbs.type.fhirDataType}}`
- xxxxClassEnum => `{{camelCase edHbs.type.codeSystemEnumName}}`
- XxxxClassEnum => `{{edHbs.type.codeSystemEnumName}}`
- XxxxChoiceDataType => `{{this}}` in `{{#each edHbs.type.choiceDataTypes}}...{{/each}}`
- XxxxReferenceTypeList => `{{this}}` in `{{#each edHbs.type.targetResource}}...{{/each}}`
- xxxxJsonType => `{{edHbs.type.primitiveJsonType}}`
