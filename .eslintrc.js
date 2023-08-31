module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'next',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
    },
  ],
};
