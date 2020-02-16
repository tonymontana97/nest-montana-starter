module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        project: path.resolve(__dirname, './tsconfig.json'),
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'off',
            {
                overrides: {
                    constructors: 'off',
                },
            },
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        'simple-import-sort/sort': 'error',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-use-before-declare': 'off',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
            },
        ],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': ['error', 'as-needed'],
        camelcase: 'error',
        complexity: 'off',
        'constructor-super': 'error',
        curly: 'error',
        'dot-notation': 'error',
        'eol-last': 'error',
        eqeqeq: ['error', 'smart'],
        'guard-for-in': 'error',
        'id-match': 'error',
        'import/no-default-export': 'error',
        'import/no-internal-modules': 'off',
        'import/order': 'off',
        'max-classes-per-file': ['error', 1],
        'max-len': [
            'error',
            {
                code: 150,
            },
        ],
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-console': [
            'error',
            {
                allow: [
                    'info',
                    'dirxml',
                    'warn',
                    'error',
                    'dir',
                    'timeLog',
                    'assert',
                    'clear',
                    'count',
                    'countReset',
                    'group',
                    'groupCollapsed',
                    'groupEnd',
                    'table',
                    'Console',
                    'markTimeline',
                    'profile',
                    'profileEnd',
                    'timeline',
                    'timelineEnd',
                    'timeStamp',
                    'context',
                ],
            },
        ],
        'no-debugger': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-extra-bind': 'error',
        'no-fallthrough': 'error',
        'no-invalid-this': 'error',
        'no-irregular-whitespace': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
            },
        ],
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-redeclare': 'error',
        'no-return-await': 'error',
        'no-sequences': 'error',
        'no-shadow': [
            'error',
            {
                hoist: 'all',
            },
        ],
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        radix: 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'use-isnan': 'error',
        'valid-typeof': 'off',
        '@typescript-eslint/tslint/config': [
            'error',
            {
                rulesDirectory: [
                    './node_modules/tslint-eslint-rules/dist/rules',
                    './node_modules/tslint-config-prettier/lib',
                    './node_modules/tslint-consistent-codestyle/rules',
                ],
                rules: {
                    align: [true, 'parameters', 'statements', 'members'],
                    'comment-format': [true, 'check-space'],
                    'import-spacing': true,
                    'jsdoc-format': [true, 'check-multiline-start'],
                    'naming-convention': [
                        true,
                        {
                            type: 'default',
                            format: 'camelCase',
                            leadingUnderscore: 'forbid',
                            trailingUnderscore: 'forbid',
                        },
                        {
                            type: 'variable',
                            modifiers: ['global', 'const'],
                            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                        },
                        {
                            type: 'parameter',
                            modifiers: 'unused',
                            leadingUnderscore: 'allow',
                        },
                        {
                            type: 'member',
                            modifiers: 'private',
                            leadingUnderscore: 'require',
                        },
                        {
                            type: 'member',
                            modifiers: 'protected',
                            leadingUnderscore: 'require',
                        },
                        {
                            type: 'property',
                            modifiers: ['public', 'static', 'const'],
                            format: 'UPPER_CASE',
                        },
                        {
                            type: 'type',
                            format: 'PascalCase',
                        },
                        {
                            type: 'interface',
                            prefix: 'I',
                        },
                        {
                            type: 'genericTypeParameter',
                            regex: '^[A-Z]$',
                        },
                        {
                            type: 'enumMember',
                            format: 'UPPER_CASE',
                        },
                    ],
                    'no-accessor-recursion': true,
                    'no-as-type-assertion': true,
                    'no-collapsible-if': true,
                    'no-implicit-dependencies': true,
                    'no-multi-spaces': true,
                    'no-reference-import': true,
                    'no-return-undefined': [true, 'allow-void-expression'],
                    'no-unnecessary-callback-wrapper': true,
                    'no-unnecessary-else': true,
                    'no-unnecessary-type-annotation': true,
                    'no-var-before-return': true,
                    'number-literal-format': true,
                    'object-shorthand-properties-first': true,
                    'one-line': [
                        true,
                        'check-open-brace',
                        'check-catch',
                        'check-else',
                        'check-finally',
                        'check-whitespace',
                    ],
                    'parameter-properties': [true, 'leading', 'member-access'],
                    'prefer-conditional-expression': true,
                    'prefer-const-enum': true,
                    'prefer-switch': [
                        true,
                        {
                            'min-cases': 3,
                        },
                    ],
                    'prefer-while': true,
                    'switch-final-break': true,
                    'trailing-comma': [
                        true,
                        {
                            singleline: 'never',
                            multiline: 'always',
                        },
                    ],
                    whitespace: [
                        true,
                        'check-branch',
                        'check-decl',
                        'check-operator',
                        'check-separator',
                        'check-type',
                        'check-type-operator',
                        'check-rest-spread',
                    ],
                },
            },
        ],
    },
};
