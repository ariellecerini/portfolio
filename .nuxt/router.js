import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _79d68257 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _908a12d6 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _ef6ff590 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _590505b4 = () => interopDefault(import('../pages/portfolio/communications-design/index.vue' /* webpackChunkName: "pages/portfolio/communications-design/index" */))
const _064ca990 = () => interopDefault(import('../pages/portfolio/design-research/index.vue' /* webpackChunkName: "pages/portfolio/design-research/index" */))
const _01c7fa3f = () => interopDefault(import('../pages/portfolio/ui-ux-design/index.vue' /* webpackChunkName: "pages/portfolio/ui-ux-design/index" */))
const _0ed653a7 = () => interopDefault(import('../pages/portfolio/web-design/index.vue' /* webpackChunkName: "pages/portfolio/web-design/index" */))
const _cce345c8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _574e646c = () => interopDefault(import('../pages/portfolio/communications-design/_slug.vue' /* webpackChunkName: "pages/portfolio/communications-design/_slug" */))
const _04960848 = () => interopDefault(import('../pages/portfolio/design-research/_slug.vue' /* webpackChunkName: "pages/portfolio/design-research/_slug" */))
const _001158f7 = () => interopDefault(import('../pages/portfolio/ui-ux-design/_slug.vue' /* webpackChunkName: "pages/portfolio/ui-ux-design/_slug" */))
const _0d1fb25f = () => interopDefault(import('../pages/portfolio/web-design/_slug.vue' /* webpackChunkName: "pages/portfolio/web-design/_slug" */))
const _93f75566 = () => interopDefault(import('../pages/portfolio/_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _79d68257,
    name: "about"
  }, {
    path: "/portfolio",
    component: _908a12d6,
    name: "portfolio"
  }, {
    path: "/test",
    component: _ef6ff590,
    name: "test"
  }, {
    path: "/portfolio/communications-design",
    component: _590505b4,
    name: "portfolio-communications-design"
  }, {
    path: "/portfolio/design-research",
    component: _064ca990,
    name: "portfolio-design-research"
  }, {
    path: "/portfolio/ui-ux-design",
    component: _01c7fa3f,
    name: "portfolio-ui-ux-design"
  }, {
    path: "/portfolio/web-design",
    component: _0ed653a7,
    name: "portfolio-web-design"
  }, {
    path: "/",
    component: _cce345c8,
    name: "index"
  }, {
    path: "/portfolio/communications-design/:slug?",
    component: _574e646c,
    name: "portfolio-communications-design-slug"
  }, {
    path: "/portfolio/design-research/:slug?",
    component: _04960848,
    name: "portfolio-design-research-slug"
  }, {
    path: "/portfolio/ui-ux-design/:slug?",
    component: _001158f7,
    name: "portfolio-ui-ux-design-slug"
  }, {
    path: "/portfolio/web-design/:slug?",
    component: _0d1fb25f,
    name: "portfolio-web-design-slug"
  }, {
    path: "/portfolio/:slug",
    component: _93f75566,
    name: "portfolio-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
