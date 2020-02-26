module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
  ],
  rules: {
    'max-len': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
