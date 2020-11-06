/* eslint-env node */

module.exports = {
  extends: [
    'prettier',
    'franqsanz',
    'airbnb-base',
    'plugin:node/recommended'
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {}
};
