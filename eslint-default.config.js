import tsLint from 'typescript-eslint';
import angularLint from 'angular-eslint';
import stylistic from '@stylistic/eslint-plugin';
import sortClassMembers from 'eslint-plugin-sort-class-members';
import unusedImports from 'eslint-plugin-unused-imports';
import preferArrow from 'eslint-plugin-prefer-arrow';
import jsdoc from 'eslint-plugin-jsdoc';
import importPlugin from 'eslint-plugin-import';

const tsConfig = [
  {
    plugins: {
      '@typescript-eslint': tsLint.plugin,
      '@angular-eslint': angularLint.tsPlugin,
      '@stylistic/ts': stylistic,
    },
    rules: {
      'no-console': 'error',
      'no-constant-binary-expression': 'off',
      '@angular-eslint/component-class-suffix': [
        'error',
        {
          suffixes: ['Component', 'View'],
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/directive-class-suffix': [
        'error',
        {
          suffixes: ['Directive', 'Component'],
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/no-input-rename': 'off',
      '@angular-eslint/no-output-on-prefix': 'off',
      '@angular-eslint/no-output-rename': 'off',
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'off',
      '@angular-eslint/no-host-metadata-property': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'off',
      '@typescript-eslint/prefer-regexp-exec': 'off',
      '@typescript-eslint/array-type': [
        'off',
        {
          default: 'array-simple',
        },
      ],
      '@typescript-eslint/no-deprecated': 'warn',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': 'allow-with-description',
        },
      ],
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/consistent-type-exports': ['warn'],
      '@typescript-eslint/consistent-type-imports': ['warn'],
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/dot-notation': [
        'error',
        {
          allowPrivateClassPropertyAccess: true,
          allowProtectedClassPropertyAccess: true,
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowHigherOrderFunctions: false,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        {
          accessibility: 'explicit',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['strictCamelCase'],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: ['typeLike', 'enumMember'],
          format: ['StrictPascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['StrictPascalCase'],
          suffix: ['DTO', 'POJO', 'JSON'],
          filter: {
            regex: '(DTO|POJO|JSON)$',
            match: true,
          },
        },
        {
          selector: 'typeParameter',
          format: ['StrictPascalCase'],
          prefix: ['T'],
          filter: {
            regex: '^T$',
            match: false,
          },
        },
        {
          selector: ['method', 'function'],
          format: ['strictCamelCase'],
          suffix: ['DTO', 'POJO', 'JSON'],
          filter: {
            regex: '(DTO|POJO|JSON)$',
            match: true,
          },
        },
        {
          selector: 'objectLiteralProperty',
          format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: 'objectLiteralProperty',
          format: null,
          filter: {
            regex: '[_]',
            match: true,
          },
        },
        {
          selector: ['objectLiteralProperty', 'typeProperty'],
          format: null,
          modifiers: ['requiresQuotes'],
        },
        {
          selector: 'property',
          format: ['strictCamelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allowSingleOrDouble',
          modifiers: ['static'],
        },
        {
          selector: 'variable',
          format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allowSingleOrDouble',
          modifiers: ['const'],
        },
      ],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unnecessary-qualifier': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          ignoreRestSiblings: true,
          caughtErrors: 'all',
        },
      ],
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowAny: true,
        },
      ],
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        {
          ignoreArrowShorthand: true,
        },
      ],
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
      '@stylistic/ts/object-curly-spacing': ['error', 'always'],
      '@stylistic/ts/lines-between-class-members': [
        'error',
        {
          enforce: [
            { blankLine: 'always', prev: '*', next: 'method' },
            { blankLine: 'always', prev: 'method', next: '*' },
          ],
        },
        { exceptAfterSingleLine: true },
      ],
    },
  },
  {
    ignores: ['**/*.state.ts', '**/*.action.ts', '**/*.actions.ts'],
    plugins: {
      '@typescript-eslint': tsLint.plugin,
    },
    rules: {
      '@typescript-eslint/no-extraneous-class': [
        'error',
        {
          allowConstructorOnly: true,
          allowEmpty: true,
        },
      ],
    },
  },
  {
    plugins: {
      'sort-class-members': sortClassMembers,
    },
    rules: {
      'sort-class-members/sort-class-members': [
        'error',
        {
          accessorPairPositioning: 'together',
          order: [
            '[host-decorators]',
            '[child-decorators]',
            '[input-decorators]',
            '[output-decorators]',
            '[decorators]',
            '[static-properties]',
            '[actions-selectors]',
            '[readonly-properties]',
            '[public-accessor]',
            '[protected-accessor]',
            '[private-accessor]',
            '[public-properties]',
            '[protected-properties]',
            '[private-properties]',
            '[conventional-private-properties]',
            'constructor',
            '[hooks-block]',
            '[resolve-model-method]',
            '[resolve-form-method]',
            '[abstract-methods]',
            '[static-methods]',
            '[public-methods]',
            '[protected-methods]',
            '[private-methods]',
            '[conventional-private-methods]',
          ],
          groups: {
            'host-decorators': [{ groupByDecorator: '/^Host?.+/' }],
            'child-decorators': [{ groupByDecorator: '/^.+Child?.+/' }],
            'input-decorators': [{ groupByDecorator: '/^Input?.+/' }],
            'output-decorators': [{ groupByDecorator: '/^Output?.+/' }],
            'decorators': [{ groupByDecorator: '/^(?!.*(Host|Child|Input|Output)).+$/' }],
            'actions-selectors': [
              { type: 'property', name: '/^selectors/' },
              { type: 'property', name: '/^actions/' },
            ],
            'readonly-properties': [
              {
                type: 'property',
                groupByDecorator: false,
                static: false,
                abstract: false,
                readonly: true,
              },
            ],
            'public-properties': [
              {
                type: 'property',
                accessibility: 'public',
                groupByDecorator: false,
                abstract: false,
                readonly: false,
              },
            ],
            'protected-properties': [
              {
                type: 'property',
                accessibility: 'protected',
                groupByDecorator: false,
                abstract: false,
                readonly: false,
              },
            ],
            'private-properties': [
              {
                type: 'property',
                accessibility: 'private',
                groupByDecorator: false,
                abstract: false,
                readonly: false,
              },
            ],
            'public-accessor': [
              {
                type: 'method',
                kind: 'accessor',
                accessibility: 'public',
                groupByDecorator: false,
              },
            ],
            'protected-accessor': [
              {
                type: 'method',
                kind: 'accessor',
                accessibility: 'protected',
                groupByDecorator: false,
              },
            ],
            'private-accessor': [
              {
                type: 'method',
                kind: 'accessor',
                accessibility: 'private',
                groupByDecorator: false,
              },
            ],
            'hooks-block': [
              { type: 'method', name: '/^onInit/' },
              { type: 'method', name: '/^ngOnInit/' },
              { type: 'method', name: '/^onContentInit/' },
              { type: 'method', name: '/^ngAfterContentInit/' },
              { type: 'method', name: '/^onViewInit/' },
              { type: 'method', name: '/^ngAfterViewInit/' },
              { type: 'method', name: '/^onChanges/' },
              { type: 'method', name: '/^ngOnChanges/' },
              { type: 'method', name: '/^onDestroy/' },
              { type: 'method', name: '/^ngOnDestroy/' },
            ],
            'resolve-model-method': [{ type: 'method', name: '/^resolveModel/' }],
            'resolve-form-method': [{ type: 'method', name: '/^resolveFormConfiguration/' }],
            'abstract-methods': [{ type: 'method', abstract: true }],
            'public-methods': [{ type: 'method', accessibility: 'public', kind: 'nonAccessor' }],
            'protected-methods': [{ type: 'method', accessibility: 'protected', kind: 'nonAccessor' }],
            'private-methods': [{ type: 'method', accessibility: 'private', kind: 'nonAccessor' }],
          },
        },
      ],
    },
  },
];

const jsConfig = [
  {
    plugins: {
      'unused-imports': unusedImports,
      'prefer-arrow': preferArrow,
      'jsdoc': jsdoc,
      '@stylistic/js': stylistic,
      'import': importPlugin,
    },
    rules: {
      'arrow-parens': ['off', 'as-needed'],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'only-multiline',
        },
      ],
      'curly': ['error', 'all'],
      'eqeqeq': [
        'error',
        'always',
        {
          null: 'ignore',
        },
      ],
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
        },
      ],
      'guard-for-in': 'off',
      'max-classes-per-file': 'off',
      'no-alert': 'error',
      'no-bitwise': 'off',
      'no-case-declarations': 'off',
      'no-var': 'error',
      'padded-blocks': ['warn', 'never'],
      'quote-props': ['error', 'consistent-as-needed'],
      'quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'padding-line-between-statements': [
        'warn',
        {
          prev: 'import',
          next: '*',
          blankLine: 'always',
        },
        {
          prev: 'import',
          next: 'import',
          blankLine: 'any',
        },
        {
          prev: 'export',
          next: '*',
          blankLine: 'always',
        },
        {
          prev: 'export',
          next: 'export',
          blankLine: 'any',
        },
        {
          prev: 'expression',
          next: ['const', 'let', 'var', 'block-like', 'function', 'class'],
          blankLine: 'always',
        },
        {
          prev: ['class', 'function'],
          next: '*',
          blankLine: 'always',
        },
        {
          prev: 'function',
          next: 'function',
          blankLine: 'always',
        },
        {
          prev: ['const', 'let', 'var'],
          next: '*',
          blankLine: 'always',
        },
        {
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
          blankLine: 'any',
        },
        {
          prev: 'block-like',
          next: '*',
          blankLine: 'always',
        },
      ],
      'spaced-comment': [
        'warn',
        'always',
        {
          line: {
            markers: ['/'],
            exceptions: ['-', '+'],
          },
          block: {
            markers: ['!'],
            exceptions: ['*'],
            balanced: true,
          },
        },
      ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
        },
      ],
      'yoda': [
        'warn',
        'never',
        {
          exceptRange: true,
        },
      ],
      'import/named': 'off',
      'import/no-unresolved': 'off',
      '@stylistic/js/multiline-comment-style': ['warn', 'bare-block'],
      'jsdoc/no-types': 'off',
      'jsdoc/convert-to-jsdoc-comments': [
        'warn',
        {
          contexts: ['MethodDefinition', 'ClassDeclaration', 'TSInterfaceDeclaration'],
          contextsBeforeAndAfter: ['MethodDefinition', 'ClassDeclaration', 'TSInterfaceDeclaration'],
          allowedPrefixes: ['@ts-', 'istanbul ', 'c8 ', 'v8 ', 'eslint', 'prettier-', '--', '==', 'noinspection'],
        },
      ],
      'prefer-arrow/prefer-arrow-functions': [
        'error',
        {
          allowStandaloneDeclarations: true,
        },
      ],
      'unused-imports/no-unused-imports': 'warn',
    },
  },
  {
    ignores: ['**/*.state.ts', '**/*.action.ts', '**/*.actions.ts'],
    rules: {
      'max-classes-per-file': [
        'error',
        {
          ignoreExpressions: true,
          max: 2,
        },
      ],
    },
  },
];

const htmlConfig = [
  {
    plugins: {
      '@angular-eslint/template': angularLint.templatePlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          parser: 'angular',
        },
      ],
      '@angular-eslint/template/attributes-order': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/eqeqeq': [
        'error',
        {
          allowNullOrUndefined: true,
        },
      ],
    },
  },
];

export const eslintDefaultConfig = { jsConfig, tsConfig, htmlConfig };
