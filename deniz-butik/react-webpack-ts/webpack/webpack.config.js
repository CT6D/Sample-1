// Helps merge either dev or prod config file w/ webpack.common.js
// requires a new dev dependency package for webpack merging 
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// f() allows us to pass env variables from package.json
module.exports = (envVars) => {
    const { env } = envVars;
    const envConfig = require(`./webpack.${env}.js`);
    const config = merge(envConfig, commonConfig);
    return config;
}
