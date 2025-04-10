'use strict';

/**
 * Jest base configuration extended by 'jest.config.js' in each package.
 * NOTE: '<rootDir>' here will be expanded in the actual package to be the fully qualified package directory.
 */
module.exports = {
  clearMocks: true,
  testEnvironment: 'node',
  verbose: true,
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts)$': '<rootDir>/../../node_modules/ts-jest',
  },
  testRunner: 'jest-circus/runner',
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/__test__/**',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/dist/**',
  ],
  coverageReporters: ['text', 'cobertura', 'lcov'],
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
