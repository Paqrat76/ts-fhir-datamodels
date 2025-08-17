import { OptionDefaults } from 'typedoc';

/** @type {Partial<import('typedoc').TypeDocOptions>} */
const config = {
  name: 'ts-fhir-datamodels',
  entryPoints: ['packages/*'],
  entryPointStrategy: 'packages',
  packageOptions: {
    entryPoints: ['src/index.ts'],
  },
  out: 'merged-docs',
  sort: ['source-order'],
};

export default config;
