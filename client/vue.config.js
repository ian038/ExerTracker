const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
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
  "transpileDependencies": [
    "vuetify"
  ]
}