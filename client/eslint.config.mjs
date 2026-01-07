import { config as base } from '@eds-open/eslint-config-bundle';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...base,
    {
        ignores: ['**/*.d.ts', '**/dist/**/*'],
    },
    {
        settings: {
            tailwindcss: {
                config: resolve(dirname(fileURLToPath(import.meta.url)), 'src/assets/css/tailwind.css'),
            },
        },
    },
];

export default config;
