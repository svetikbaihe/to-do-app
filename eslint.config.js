import globals from 'globals';
import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    // Apply ESLint to the specified file types
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],

    // Specify parser and language options
    languageOptions: {
      globals: globals.browser,
      parser: typescriptParser,
    },

    // Specify directories or files to ignore
    ignores: ['dist/**', '**/*.config.js', '!**/eslint.config.js'],

    // Declare ESLint plugins
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptPlugin,
    },

    // Configure React settings
    settings: {
      react: {
        version: 'detect',
        pragma: 'React',
        fragment: 'Fragment',
      },
    },

    // Define ESLint rules
    rules: {
      // Example rules
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Prettier-related rules
      ...eslintConfigPrettier.rules,
    },
  },

  // Include base ESLint and TypeScript rules
  js.configs.recommended,
  typescriptPlugin.configs.recommended,
  react.configs.flat.recommended,
];
