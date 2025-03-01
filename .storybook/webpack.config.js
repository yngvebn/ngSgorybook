const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.devtool = "inline-source-map";
  config.output.filename = "[name].[chunkhash].bundle.js";
  config.output.sourceMapFilename = "[file].map";
  // Return the altered config
  return config;
};
