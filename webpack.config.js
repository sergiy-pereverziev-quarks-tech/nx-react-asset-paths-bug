const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.output.assetModuleFilename = 'media/[name].[hash][ext]';

  const moduleRules = config.module.rules;

  const imageRule = moduleRules.find(rule => rule.test.toString().indexOf('png') !== -1);
  delete imageRule.generator;

  return config;
});
