import { OptionDefaults } from 'typedoc';

/** @type {Partial<import('typedoc').TypeDocOptions>} */
const config = {
  extends: '../../typedoc.config.base.mjs',
  name: 'Common Documentation',
  projectDocuments: ['./*.md'],
  // If not set, will result in a warning being printed since it's likely a misconfiguration
  entryPoints: [],
};

export default config;
