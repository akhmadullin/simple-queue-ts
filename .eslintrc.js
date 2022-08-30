module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'arrow-body-style': 'off',
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignorePattern: '<path([sS]*?)/>',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
