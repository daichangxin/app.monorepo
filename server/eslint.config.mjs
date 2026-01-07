import { config as importsConfig } from '@eds-open/eslint-config-bundle/imports';
import { config as jsConfig } from '@eds-open/eslint-config-bundle/js';
import { config as typescriptConfig } from '@eds-open/eslint-config-bundle/typescript';
import { config as unusedConfig } from '@eds-open/eslint-config-bundle/unused';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
    ...jsConfig,
    ...typescriptConfig,
    ...importsConfig,
    ...unusedConfig,
    {
        ignores: ['**/*.d.ts'],
    },
];

export default config;
