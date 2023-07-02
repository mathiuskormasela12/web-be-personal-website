/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.ts',
    '!dist',
    '!test',
    '!e2e',
    '!coverage'
  ],
  coverageThreshold: {
    global: {
      statements: 92,
      lines: 92,
      branches: 92,
      functions: 92
    }
  }
}
