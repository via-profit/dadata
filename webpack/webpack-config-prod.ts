import fs from 'fs';
import path from 'path';
import { BannerPlugin, Configuration, Compiler } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import packageInfo from '../package.json';
import webpackBaseConfig from './webpack-config-base';

const webpackProdConfig: Configuration = merge(webpackBaseConfig, {
  entry: {
    index: path.resolve(__dirname, '../src/index.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  mode: 'production',
  plugins: [
    new BannerPlugin({
      banner: `
Via Profit / DaData API

DaData     https://dadata.ru
Repository ${packageInfo.repository.url}
Contact    ${packageInfo.support}
      `,
      test: /index\.js/,
    }),
    {
      apply: (compiler: Compiler) => {
        compiler.hooks.beforeRun.tapAsync('WebpackBeforeBuild', (_, callback) => {

          if (fs.existsSync(path.join(__dirname, '../dist/'))) {
            fs.rmdirSync(path.join(__dirname, '../dist/'), { recursive: true })
          }

          callback();
        });

        compiler.hooks.afterEmit.tapAsync('WebpackAfterBuild', (_, callback) => {
          const files = fs.readdirSync(path.join(__dirname, '../src/@types'));
          files.forEach((filename) => {
            if (filename === 'env.d.ts') {
              return;
            }

            fs.copyFileSync(
              path.resolve(__dirname, `../src/@types/${filename}`),
              path.resolve(__dirname, `../dist/${filename}`),
            );
          });
          callback();
        });

      },
    },
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE ? 'server' : 'disabled',
      openAnalyzer: true,
    }) as any,
  ],
});

export default webpackProdConfig;
