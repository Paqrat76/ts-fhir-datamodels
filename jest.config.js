'use strict';

/**
 * Jest root configuration for executing all tests in all packages.
 */
module.exports = {
  // All test configuration should be picked up by individual jest.config.js.
  // Jest has some issue when running in multiple projects with different coverage exclusion.
  projects: [
    '<rootDir>/app/generator/jest.config.js',
    '<rootDir>/app/generator-datamodel-ftest/jest.config.js',
    '<rootDir>/packages/fhir-core/jest.config.js',
  ],
  coverageDirectory: '<rootDir>/coverage',
};
