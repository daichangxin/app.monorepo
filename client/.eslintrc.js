module.exports = {
    extends: ['@eds-open/eslint-config-bundle/libs/react'],
    rules: {},
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            babelrc: false,
            configFile: false,
        },
    },
};
