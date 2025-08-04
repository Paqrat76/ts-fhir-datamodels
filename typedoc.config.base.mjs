import { OptionDefaults } from 'typedoc';

/** @type {Partial<import('typedoc').TypeDocOptions>} */
const config = {
  excludeInternal: true,
  excludePrivate: false,
  includeVersion: true,
  suppressCommentWarningsInDeclarationFiles: true,
  blockTags: [...OptionDefaults.blockTags, '@decorator', '@since'],
  inlineTags: [...OptionDefaults.inlineTags, '@link'],
  sort: ['static-first', 'visibility'],
};

export default config;
