// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'turbo',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-mixed-operators': 'error',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'react/react-in-jsx-scope': 'off',
    'turbo/no-undeclared-env-vars': 'off',
  },
};
