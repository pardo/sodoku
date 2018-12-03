module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/sodoku/'
    : '/',
    outputDir: 'docs'
}
