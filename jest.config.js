const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  collectCoverageFrom: [
    '<rootDir>/src/main/**/*.ts',
    '!<rootDir>/src/main/web/**',
    '!**/tests/**/*.ts'
  ],
  coverageDirectory: process.env.JEST_CLOVER_OUTPUT_DIR,
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  setupFiles: ['dotenv/config']
}