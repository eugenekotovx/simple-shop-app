import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Shop.vue'
import store from '@/store/index'
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
    name: 'category-show',
    component: CategoryShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
      .dispatch('shop/getCategory', routeTo.params)
      .then(() => {
        next()
      })
      .catch(error => {
        if (error.response && error.response.status == 404) {
          console.log(error.response)
        } else {
          next({ name: 'shop' })
        }
      })
    },
  },
  {
    path: '/shop/:category/:id',
    name: 'product-show',
    component: ProductShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
      .dispatch('shop/getProduct', routeTo.params)
      .then(() => {
        next()
      })
      .catch(error => {
        if (error.response && error.response.status == 404) {
          console.log(error.response)
        } else {
          next({ name: 'shop' })
        }
      })
    }
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
