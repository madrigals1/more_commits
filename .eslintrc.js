module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-console': 2,
    'no-continue': 0,
    'no-lonely-if': 0,
    'no-underscore-dangle': 0,
    'max-classes-per-file': 0,
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreTemplateLiterals: true,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 0,
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
};
