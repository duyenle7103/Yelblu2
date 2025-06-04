
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import pluginImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      react: pluginReact,
      "simple-import-sort": pluginImportSort
    },
    extends: ["js/recommended"]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
