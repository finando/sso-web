import { merge } from 'webpack-merge';

import base from './base.config';

import type { Configuration } from 'webpack';

const configuration: Configuration = merge<Configuration>(base, {
  mode: 'production',
  devtool: 'source-map',
  target: ['web', 'es5'],
  output: {
    filename: '[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      maxSize: 40000,
      cacheGroups: {
        mainVendors: {
          test: ({ resource = '' }: Record<string, string>) =>
            resource.includes('node_modules'),
          name: ({ context = '' }: Record<string, string>) =>
            `main.vendor.${
              context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)?.[1] ??
              ''.replace('@', '')
            }`,
          chunks: ({ name }) => name === 'main',
        },
      },
    },
  },
});

export default configuration;
