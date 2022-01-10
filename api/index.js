// const Router = require('koa-router')
// const router = new Router()
// const test = require('./test').list
// const hello = require('./hello').hello

import Router from 'koa-router'
import { test } from './test.js'
import { hello } from './hello.js'

const router = new Router()

const routes = [
  {
    method: 'get',
    path: '/test',
    controller: test
  },
  {
    method: 'get',
    path: '/hello',
    controller: hello
  }
]

routes.forEach(item => {
  const { method, path, controller } = item
  router[method](path, controller)
})

export default router
