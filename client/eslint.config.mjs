import { config as base } from '@eds-open/eslint-config-bundle/libs/index.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...base,
    {
        ignores: ['**/*.d.ts', '**/dist/**/*', 'eslint.config.mjs'],
    },
    {
        rules: {
            'max-lines-per-function': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
            '@typescript-eslint/no-use-before-define': 'off',
            '@stylistic/arrow-parens': 'off',
        },
    },
    {
        settings: {
            tailwindcss: {
                config: dirname(fileURLToPath(import.meta.url)) + '/src/assets/css/tailwind.css',
            },
        },
    },
];

export default config;
