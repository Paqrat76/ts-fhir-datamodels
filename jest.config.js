'use strict';

/**
 * Jest root configuration for executing all tests in all packages.
 */
module.exports = {
  // All test configuration should be picked up by individual jest.config.js.
  // Jest has some issue when running in multiple projects with different coverage exclusion.
  projects: ['<rootDir>/generator', '<rootDir>/packages/fhir-core'],
  coverageDirectory: '<rootDir>/coverage',
};
