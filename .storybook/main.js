const webpackCommon = require('../webpack.common');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
        'storybook-css-modules',
        '@storybook/addon-a11y',
        'storybook-addon-rtl',
    ],
    staticDirs: ['../public/assets'],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
    },
    webpackFinal: async (config, { configType }) => {
        const webpackCommonConfig = webpackCommon(
            {},
            { mode: configType.toLowerCase() }
        );
        return {
            ...config,
            optimization: webpackCommonConfig.optimization,
            plugins: [...config.plugins, ...webpackCommonConfig.plugins],
            module: {
                ...config.module,
                rules: webpackCommonConfig.module.rules,
            },
        };
    },
};
