const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('rax-ts', {
  rules: {
    '@iceworks/best-practices/no-js-in-ts-project': 'off'
  }
});
