'use strict';

const base = require('../../jest.config.base');
const pkg = require('./package');

/**
 * Package-specific Jest configuration. Loads the base Jest configuration as the first line.
 * All lines following the first line override or add to the base configuration. Using the
 * 'displayName' property will result in Jest providing the package name for each test comment
 * in the terminal output.
 */
module.exports = {
  ...base,
  displayName: pkg.name,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/__test__/**',
    '!<rootDir>/src/**/fhir-contained-resource-parser.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/dist/**',
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
