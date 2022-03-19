module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/setupTests.ts',
          '**/*.stories.tsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
        ],
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    /**
     * Avoid enforcing a defaultProps definition for every prop that
     * is not required. Preferred method is default value in function arguments.
     */
    'react/require-default-props': [
      0,
      { forbidDefaultForRequired: true, ignoreFunctionalComponents: true },
    ],
  },
  ignorePatterns: ['.eslintrc.js'],
};
