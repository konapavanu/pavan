/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "off",
    "react/prop-types": "off",
    // "no-console": "warn", // Warn about using console.log and console.error
    // "no-debugger": "warn", // Warn about using debugger statements
    // "semi": ["error", "always"], // Enforce semicolons
    // "quotes": ["error", "double"], // Enforce double quotes
    // "indent": ["error", 2], // Enforce 2-space indentation
    // "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas in multiline object/array
    // "object-curly-spacing": ["error", "always"], // Enforce spacing in object literals
    // "array-bracket-spacing": ["error", "always"], // Enforce spacing in array literals
    // "react/jsx-uses-vars": "error", // Warn about unused variables in JSX
    // "react/jsx-uses-react": "off" // Disable warning about missing React import in JSX files
  },
};
