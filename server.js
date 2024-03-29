const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const devProxy = {
  '/app': {
    target: 'https://nextapi-git-master-yang1206.vercel.app', // 端口自己配置合适的
    pathRewrite: {
      '^/app': '/',
    },
    changeOrigin: true,
  },
}

const port = parseInt(process.env.PORT, 10) || 5000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
})
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    if (dev && devProxy) {
      Object.keys(devProxy).forEach((context) => {
        server.use(createProxyMiddleware(context, devProxy[context]))
      })
    }

    server.all('*', (req, res) => {
      handle(req, res)
    })

    server.listen(port, (err) => {
      if (err)
        throw err
        /* eslint-disable no-console */
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(() => {

  })
