const path = require('path');

module.exports = {
    extends: ['@eds-open/eslint-config-bundle/libs/react'],
    rules: {},
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
        requireConfigFile: false,
        babelOptions: {
            babelrc: false,
            configFile: false,
        },
    },
};
