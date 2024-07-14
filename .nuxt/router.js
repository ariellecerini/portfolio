import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _85e0f260 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0ad11064 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _03dfe4c2 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _5225e62d = () => interopDefault(import('../pages/portfolio/communications-design/index.vue' /* webpackChunkName: "pages/portfolio/communications-design/index" */))
const _c04cce6e = () => interopDefault(import('../pages/portfolio/design-research/index.vue' /* webpackChunkName: "pages/portfolio/design-research/index" */))
const _5166fda6 = () => interopDefault(import('../pages/portfolio/ui-ux-design/index.vue' /* webpackChunkName: "pages/portfolio/ui-ux-design/index" */))
const _3545f664 = () => interopDefault(import('../pages/portfolio/web-design/index.vue' /* webpackChunkName: "pages/portfolio/web-design/index" */))
const _46713cd6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _506f44e5 = () => interopDefault(import('../pages/portfolio/communications-design/_slug.vue' /* webpackChunkName: "pages/portfolio/communications-design/_slug" */))
const _c3ba10fe = () => interopDefault(import('../pages/portfolio/design-research/_slug.vue' /* webpackChunkName: "pages/portfolio/design-research/_slug" */))
const _4fb05c5e = () => interopDefault(import('../pages/portfolio/ui-ux-design/_slug.vue' /* webpackChunkName: "pages/portfolio/ui-ux-design/_slug" */))
const _38b338f4 = () => interopDefault(import('../pages/portfolio/web-design/_slug.vue' /* webpackChunkName: "pages/portfolio/web-design/_slug" */))
const _0e3e52f4 = () => interopDefault(import('../pages/portfolio/_slug.vue' /* webpackChunkName: "pages/portfolio/_slug" */))

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
    component: _85e0f260,
    name: "about"
  }, {
    path: "/portfolio",
    component: _0ad11064,
    name: "portfolio"
  }, {
    path: "/test",
    component: _03dfe4c2,
    name: "test"
  }, {
    path: "/portfolio/communications-design",
    component: _5225e62d,
    name: "portfolio-communications-design"
  }, {
    path: "/portfolio/design-research",
    component: _c04cce6e,
    name: "portfolio-design-research"
  }, {
    path: "/portfolio/ui-ux-design",
    component: _5166fda6,
    name: "portfolio-ui-ux-design"
  }, {
    path: "/portfolio/web-design",
    component: _3545f664,
    name: "portfolio-web-design"
  }, {
    path: "/",
    component: _46713cd6,
    name: "index"
  }, {
    path: "/portfolio/communications-design/:slug?",
    component: _506f44e5,
    name: "portfolio-communications-design-slug"
  }, {
    path: "/portfolio/design-research/:slug?",
    component: _c3ba10fe,
    name: "portfolio-design-research-slug"
  }, {
    path: "/portfolio/ui-ux-design/:slug?",
    component: _4fb05c5e,
    name: "portfolio-ui-ux-design-slug"
  }, {
    path: "/portfolio/web-design/:slug?",
    component: _38b338f4,
    name: "portfolio-web-design-slug"
  }, {
    path: "/portfolio/:slug",
    component: _0e3e52f4,
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
