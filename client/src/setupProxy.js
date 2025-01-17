const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'http://server:5555',
      changeOrigin: true
    })
  )
}
