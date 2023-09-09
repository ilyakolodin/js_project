module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb-base",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "html"],
  rules: {
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 2,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'no-console': ['error', { 'allow': ['warn', 'log'] }],
    'prettier/prettier': ['error', { 'singleQuote': true }],
    'import/prefer-default-export': 'off',

    // allow paren-less arrow functions
    'arrow-parens': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
