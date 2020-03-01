const path = require('path')
module.exports = {
  configureWebpack: {
    name: 'vue-forms',
    resolve: {
      alias: {
        Forms: path.resolve(__dirname, 'src/forms/index.js')
      }
    }
  }
}
