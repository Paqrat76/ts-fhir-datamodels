import { OptionDefaults } from 'typedoc';

/** @type {Partial<import('typedoc').TypeDocOptions>} */
const config = {
  extends: '../../typedoc.config.base.mjs',
  name: '@paq-ts-fhir/r4-datamodels',
  html: '../docs-site/r4-datamodels',
};

export default config;
