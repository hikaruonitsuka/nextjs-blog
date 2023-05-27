module.exports = {
  root: true,
  extends: ['next', 'prettier', 'plugin:tailwindcss/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
