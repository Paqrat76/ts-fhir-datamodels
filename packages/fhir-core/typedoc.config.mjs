import { OptionDefaults } from 'typedoc';

// Typedoc configuration file is required for a proper understanding of the JSDoc comments in the source code.
// Selected content from this fhir-core package is re-exported in the generated FHIR data model packages meaning
// that the JSDoc comments in this project's source code are used to generate the documentation for the generated
// FHIR data model packages.

/** @type {Partial<import('typedoc').TypeDocOptions>} */
const config = {
  extends: '../../typedoc.config.base.mjs',
  name: '@paq-ts-fhir/fhir-core',
};

export default config;
