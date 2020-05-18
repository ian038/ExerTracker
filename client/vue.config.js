const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/exercise': {
        target: 'http://localhost:5000'
      },
      '/user': {
        target: 'http://localhost:5000'
      },
      '/auth': {
        target: 'http://localhost:5000'
      }
    }
  },
  outputDir: path.resolve(__dirname, '../server/public'),
  "transpileDependencies": [
    "vuetify"
  ]
}