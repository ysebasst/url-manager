import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'


export default defineConfig([
  { ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
    '**/out/**',
    './package-lock.json',
    './pull_request_template.md',
  ],
  },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  { 
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], 
    languageOptions: { globals: globals.browser },
    rules: {
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
      'comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline',
      }],
      'semi': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'indent': ['error', 2, {
        'SwitchCase': 1,
        'VariableDeclarator': 'first',
        'outerIIFEBody': 1,
        'MemberExpression': 1,
        'FunctionDeclaration': {'parameters': 'first'},
        'FunctionExpression': {'parameters': 'first'},
        'CallExpression': {'arguments': 'first'},
        'ArrayExpression': 1,
        'ObjectExpression': 1,
        'ImportDeclaration': 1,
        'flatTernaryExpressions': false,
        'offsetTernaryExpressions': true,
        'ignoreComments': false,
      }],
      'max-len': ['error', { 
        'code': 80,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
        'ignoreComments': false,
      }],
    },
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { react: pluginReact },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [pluginReact.configs.flat.recommended],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
  { 
    files: ['**/*.json'], 
    plugins: { json }, 
    language: 'json/json', 
    extends: ['json/recommended'],
    rules: {
      'json/json-with-comments': 'off',
    },
  },
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/commonmark', extends: ['markdown/recommended'] },
  { 
    files: ['**/*.css'], 
    plugins: { css }, 
    language: 'css/css', 
    extends: ['css/recommended'],
    rules: {
      'css/use-baseline': 'off',
      'css/no-invalid-at-rules': 'off',
    },
  },
])
