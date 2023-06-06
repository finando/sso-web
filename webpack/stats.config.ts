import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import prod from './prod.config';

import type { Configuration } from 'webpack';

const configuration: Configuration = merge<Configuration>(prod, {
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
      generateStatsFile: true,
    }),
  ],
});

export default configuration;
