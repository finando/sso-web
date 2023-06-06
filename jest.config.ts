import { type Config } from 'jest';

const configuration: Config = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
  setupFilesAfterEnv: ['<rootDir>/test/config/setup.ts'],
  moduleNameMapper: {
    '\\.(ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{tsx,ts,jsx,js}',
    '!src/**/*.d.ts',
    '!src/env.ts',
  ],
};

export default configuration;
