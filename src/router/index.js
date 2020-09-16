import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Shop.vue'
import CategoryShow from '../views/CategoryShow'
import ProductShow from '../views/ProductShow'

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
    path: '/shop/:category/:id',
    name: 'product-show',
    component: ProductShow,
    props: true
  },
  {
    path: '/basket',
    name: 'Basket',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BasketShow.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
