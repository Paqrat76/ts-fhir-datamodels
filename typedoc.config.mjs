import { OptionDefaults } from 'typedoc';

/** @type {Partial<import('typedoc').TypeDocOptions>} */
const config = {
  name: 'Data Model Libraries',
  entryPoints: ['packages/base-docs', 'packages/r4-datamodels', 'packages/r4b-datamodels', 'packages/r5-datamodels'],
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
  customFooterHtml: `Last Published: ${new Date().toString()}`,
  sort: ['source-order'],
  plugin: ['typedoc-plugin-zod'],
};

export default config;
