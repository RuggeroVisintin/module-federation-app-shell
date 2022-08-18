const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');


module.exports = withModuleFederationPlugin({
  remotes: {
    'dashboardMfe': 'http://ruggero-temp-bucket.s3-website-us-east-1.amazonaws.com',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
