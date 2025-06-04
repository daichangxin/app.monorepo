import { config as base } from '@eds-open/eslint-config-bundle/libs/index.js';
import * as zx from 'zx';

const zxGlobals = Object.keys(zx).reduce((acc, key) => {
    acc[key] = 'readonly';
    return acc;
}, {});

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...base,
    {
        ignores: ['**/*.d.ts', '**/icon-components/**/*', '**/dist/**/*', 'eslint.config.mjs'],
    },
    {
        rules: {
            'max-lines-per-function': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
            '@typescript-eslint/no-use-before-define': 'off',
            '@stylistic/arrow-parens': 'off',
        },
    },
    {
        files: ['server/src/app.ts'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
    {
        files: ['scripts/**/*.mjs'],
        languageOptions: {
            globals: { ...zxGlobals },
        },
        rules: {
            'import/no-unresolved': 'off',
            'import/extensions': 'off',
        },
    },
    {
        settings: {
            tailwindcss: {
                config: './client/tailwind.config.js',
            }
        }
    }
];

export default config;
