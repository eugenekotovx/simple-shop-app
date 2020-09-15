import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Shop.vue'
import CategoryShow from '../views/CategoryShow'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/shop',
    name: 'Shop',
    component: Home
  },
  {
    path: '/shop/:category',
    name: 'category',
    component: CategoryShow,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
