import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      perfectionist.configs["recommended-natural"],
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unused-vars": "warn",

      "perfectionist/sort-imports": ["warn"],
      "perfectionist/sort-jsx-props": ["warn"],
      "perfectionist/sort-object-types": ["warn"],
      "perfectionist/sort-modules": ["warn"],
      "perfectionist/sort-objects": ["warn"],
      "perfectionist/sort-named-imports": ["warn"],
      "perfectionist/sort-named-exports": ["warn"],
      "perfectionist/sort-union-types": ["warn"],
      "perfectionist/sort-exports": ["warn"],
    },
  },
]);
