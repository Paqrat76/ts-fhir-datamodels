'use strict';

/*
 * Jest base configuration extended by 'jest.config.mjs' in each package.
 * NOTE: '<rootDir>' here will be expanded in the actual package to be the fully qualified package directory.
 */

/** @type {import('jest').Config} */
export const baseConfig = {
  clearMocks: true,
  testEnvironment: 'node',
  verbose: true,
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  testRunner: 'jest-circus/runner',
  collectCoverage: false,
  coverageReporters: ['text', 'cobertura', 'lcov'],
  coverageDirectory: '<rootDir>/coverage/',
};
