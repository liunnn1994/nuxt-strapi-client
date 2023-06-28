module.exports = {
  plugins: ["jsdoc", "import", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:jsdoc/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "@nuxt/eslint-config",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": "error",
    // import
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
  },
  ignorePatterns: ["*.json"],
};
