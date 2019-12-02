const path = require('path');

// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [path.resolve('./', 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre',
      },
      {
        test: /\.css$/,
        exclude: [path.resolve('./', 'node_modules')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: false,
              localsConvention: 'camelCase'
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: (loader) => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('postcss-preset-env')(),
                require('stylelint')(),
              ],
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: [path.resolve('./', 'node_modules')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: false,
              localsConvention: 'camelCase',
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: false },
          }
        ],
      },
    ],
  },
};
