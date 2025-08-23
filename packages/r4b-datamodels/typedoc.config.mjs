import { OptionDefaults } from 'typedoc';

/** @type {Partial<import('typedoc').TypeDocOptions>} */
const config = {
  extends: '../../typedoc.config.base.mjs',
  name: '@paq-ts-fhir/r4b-datamodels',
  html: '../docs-site/r4b-datamodels',
};

export default config;
