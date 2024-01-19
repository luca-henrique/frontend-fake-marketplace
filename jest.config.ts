export default {
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.{js,jsx,tsx,ts}'],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  preset: 'vite-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.css$": ["jest-transform-css", { modules: true }]
  },
  testRegex: '(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  moduleNameMapper: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '@/(.*)$': '<rootDir>/src/$1',
  },
}