// const Koa = require('koa')
// const router = require('./api/index.js')
import Koa from 'koa'
import router from './api/index.js'

const app = new Koa()

const port = '8082'
const host = '0.0.0.0'

app.use(router.routes())
// 当路由不存在时会报错404，加上这个中间件，会报请求方式不被允许
app.use(router.allowedMethods())

app.listen(port, host, () => {
  console.log(`API server listening on ${host}:${port}`)
})
