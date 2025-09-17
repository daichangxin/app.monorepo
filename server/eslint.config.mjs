import { jsConfig, typescriptConfig, importsConfig, unusedConfig } from '@eds-open/eslint-config-bundle/libs/index.js'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...jsConfig,
    ...typescriptConfig,
    ...importsConfig,
    ...unusedConfig,
    {
        ignores: ['**/*.d.ts', 'eslint.config.mjs'],
    },
    {
        rules: {
            'max-lines-per-function': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
        },
    }
];

export default config;
