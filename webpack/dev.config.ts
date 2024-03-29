import { join, resolve } from 'path';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { type Configuration } from 'webpack';
import {
  mergeWithCustomize,
  customizeArray,
  CustomizeRule,
} from 'webpack-merge';

import 'webpack-dev-server';

import base from './base.config';

export default mergeWithCustomize<Configuration>({
  customizeArray: customizeArray({
    'module.rules': CustomizeRule.Replace,
  }),
})(base, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  resolve: {
    alias: Object.fromEntries(
      ['react', 'react-dom', 'styled-components'].map((library) => [
        library,
        join(__dirname, '..', 'node_modules', library),
      ])
    ),
  },
  devServer: {
    host: '0.0.0.0',
    port: 8005,
    liveReload: false,
    client: {
      overlay: true,
    },
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }],
    },
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app?.get('/config.js', (_, response) =>
        response.status(204).send()
      );

      return middlewares;
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: resolve(__dirname, '../.babelrc.json'),
              plugins: ['react-refresh/babel'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: resolve(__dirname, '../tsconfig.lib.json'),
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: 'tsconfig.lib.json',
      },
    }),
  ],
});
