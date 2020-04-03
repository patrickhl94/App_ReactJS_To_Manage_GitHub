module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'react/prefer-stateless-function': 'off',
    'react/no-unused-state': 'off',
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'off',
    'camelcase': 'off',
    'no-unused-vars': ['error', { 'argdIgnorePAtter': 'next' }],
    'linebreak-style': 0,
    'global-require': 0,
    'react/prop-types': 'off'
  },
};
