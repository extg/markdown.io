'use strict';

// https://dennisreimann.de/articles/vue-cli-serve-express.html
const configureAPI = require('./src/server/configure')

module.exports = {
  devServer: {
    before: configureAPI
  }
}
