import globals from 'globals';
import eslint from '@eslint/js';
import tslint from 'typescript-eslint';
import angularLint from 'angular-eslint';
import prettierConfigs from 'eslint-plugin-prettier/recommended';
import { eslintDefaultConfig } from './eslint-default.config.js';

export default tslint.config(
  {
    ignores: [
      '**/target',
      '**/node_modules',
      '**/docs',
      '**/karma.conf.cjs',
      'src/app/analytics/**/*.ts',
      'src/app/report-charts/**/*.ts',
    ],
  },
  eslint.configs.recommended,
  prettierConfigs,
  {
    files: ['**/*.ts'],
    extends: [
      ...tslint.configs.strictTypeChecked,
      ...tslint.configs.stylisticTypeChecked,
      ...angularLint.configs.tsRecommended,
      ...eslintDefaultConfig.jsConfig,
      ...eslintDefaultConfig.tsConfig,
    ],
    languageOptions: {
      parser: tslint.parser,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
      },
    },
  },
  {
    files: ['**/*.js'],
    extends: [...eslintDefaultConfig.jsConfig],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        createDefaultProgram: true,
      },
    },
  },
  {
    files: ['**/*.html'],
    ignores: ['**/*inline-template-*.component.html'],
    extends: [...angularLint.configs.templateRecommended, ...eslintDefaultConfig.htmlConfig],
    languageOptions: {
      parser: angularLint.templateParser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: true,
      },
    },
    processor: angularLint.processInlineTemplates,
  },
);
