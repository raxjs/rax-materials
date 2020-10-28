const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('rax-ts', {
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    '@iceworks/best-practices/no-js-in-ts-project': 'off'
  }
});
