'use strict';

import { baseConfig } from '../../jest.config.base.mjs';
import packageJSON from './package.json' with { type: 'json' };

/**
 * Package-specific Jest configuration. Loads the base Jest configuration as the first line.
 * All lines following the first line override or add to the base configuration. Using the
 * 'displayName' property will result in Jest providing the package name for each test comment
 * in the terminal output.
 */
export default {
  ...baseConfig,
  displayName: packageJSON.name,
  transform: {
    '^.+\\.(ts)$': '<rootDir>/../../node_modules/ts-jest',
  },
  moduleFileExtensions: ['js', 'ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  roots: ['<rootDir>', '<rootDir>/src', '<rootDir>/test'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/', '/lib/', '/scripts/'],
  collectCoverageFrom: [
    '<rootDir>/src/resources/Bundle.ts',
    '<rootDir>/src/resources/SimplePersonModel.ts',
    '<rootDir>/src/resources/TestModel.ts',
    '<rootDir>/src/complex-types/complex-datatypes.ts',
    '<rootDir>/src/code-systems/AddressTypeEnum.ts',
    '<rootDir>/src/code-systems/TriggerTypeEnum.ts',
    '!<rootDir>/src/index.ts',
    '!<rootDir>/scripts/**',
    '!<rootDir>/test/**',
    '!<rootDir>/lib/**',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
