import { OptionDefaults } from 'typedoc';

/** @type {Partial<import('typedoc').TypeDocOptions>} */
const config = {
  excludeInternal: true,
  excludePrivate: false,
  includeVersion: true,
  suppressCommentWarningsInDeclarationFiles: true,
  blockTags: [...OptionDefaults.blockTags, '@decorator', '@since'],
  inlineTags: [...OptionDefaults.inlineTags, '@link'],
  categoryOrder: [
    'Base Models',
    'Data Types: Primitive Base Types',
    'Data Models: PrimitiveType',
    'Data Models: ComplexType',
    'Data Models: Resource',
    'CodeSystems',
    'Errors',
    '*',
  ],
  sort: ['static-first', 'visibility'],
};

export default config;
