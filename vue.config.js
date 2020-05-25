module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sodoku/'
    : '/',
  outputDir: 'docs',
  productionSourceMap: false
}
