require('dotenv').config();
const path = require('path');
const withSass = require('@zeit/next-sass');

const {
  APP_NAME,
  API_URL_DEVELOPMENT,
  API_URL_PRODUCTION,
  NODE_ENV,
} = process.env;

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[path][name]_[local]-[hash:base64:5]',
  },
  env: {
    appName: APP_NAME,
    apiUrl: NODE_ENV === 'development' ? API_URL_DEVELOPMENT : API_URL_PRODUCTION,
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.module.rules.push({
      enforce: 'pre',
      test: /.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: ['./styles/index.scss'],
      },
    });
    return config;
  },
});
