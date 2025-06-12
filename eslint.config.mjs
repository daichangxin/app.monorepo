import { config as base } from '@eds-open/eslint-config-bundle/libs/index.js';
import fs from 'fs';
import path from 'path';
import * as zx from 'zx';

const zxGlobals = Object.keys(zx).reduce((acc, key) => {
    acc[key] = 'readonly';
    return acc;
}, {});

/**
 * Recursively walks `dir`, looking for the first .css file
 * that has a line starting with @import "tailwindcss
 * @param {string} dir  absolute path to start searching from
 * @returns {string|null}  absolute path to matching CSS, or null if none found
 *
 * @example
 * const twCssPath = findTailwindImportCss(process.cwd())
 */
function findTailwindImportCss(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const found = findTailwindImportCss(fullPath);
      if (found) return found;
    } else if (entry.isFile() && entry.name.endsWith(".css")) {
      // read & scan lines
      const lines = fs.readFileSync(fullPath, "utf8").split(/\r?\n/);
      for (let line of lines) {
        if (line.trim().startsWith(`@import 'tailwindcss'`)) {
          return fullPath;
        }
      }
    }
  }

  return null;
}

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
                config: findTailwindImportCss(process.cwd()),
            }
        }
    }
];

export default config;
