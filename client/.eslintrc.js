const path = require('path');

module.exports = {
    extends: ['@eds-open/eslint-config-bundle/libs/react'],
    rules: {
        'max-lines-per-function': ['error', { max: 150, skipBlankLines: true, skipComments: true }],
        '@typescript-eslint/consistent-type-imports': ['error'],
    },
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
        requireConfigFile: false,
        babelOptions: {
            babelrc: false,
            configFile: false,
        },
    },
};
