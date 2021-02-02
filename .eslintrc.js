module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': ['error', { ObjectPattern: { multiline: true } }],
    'react/jsx-curly-brace-presence': ['error', { children: 'ignore' }],
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['node_modules', 'src'],
      },
    },
    react: { version: 'detect' },
  },
};
