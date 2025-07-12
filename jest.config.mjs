'use strict';

/**
 * Jest root configuration for executing all tests in all packages.
 */
export default {
  // All test configuration should be picked up by individual jest.config.mjs.
  // Jest has some issue when running in multiple projects with different coverage exclusion.
  projects: [
    '<rootDir>/app/generator/jest.config.mjs',
    '<rootDir>/app/generator-datamodel-ftest/jest.config.mjs',
    '<rootDir>/packages/fhir-core/jest.config.mjs',
  ],
  coverageDirectory: '<rootDir>/coverage',
};
