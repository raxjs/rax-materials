const { eslint, deepmerge } = require('@ice/spec');

module.exports = deepmerge(eslint, {
  rules: {
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/html-has-lang": 0
  },
});
