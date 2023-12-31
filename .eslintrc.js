module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
  ],
  plugins: ["@typescript-eslint"],
  // add your custom rules here
  rules: {
    'no-console': 'off',
  },
  overrides: [
    {
      files: [
        'pages/**/*.vue',
        'layouts/**/*.vue'
      ],
      rules: {
        'vue/multi-word-component-names': 0
      }
    }
  ]
}
