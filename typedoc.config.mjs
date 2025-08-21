import { OptionDefaults } from 'typedoc';

/** @type {Partial<import('typedoc').TypeDocOptions>} */
const config = {
  name: 'Data Model Libraries',
  entryPoints: ['packages/base-docs', 'packages/r4-datamodels'],
  entryPointStrategy: 'packages',
  packageOptions: {
    entryPoints: ['src/index.ts'],
  },
  navigation: {
    includeCategories: true,
  },
  includeVersion: true,
  cleanOutputDir: true,
  out: 'docs-site',
  sort: ['source-order'],
  plugin: ['typedoc-plugin-zod'],
};

export default config;
