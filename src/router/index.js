import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Shop.vue'
import store from '@/store/index'
import ProductsList from '../views/ProductsList'
import ProductShow from '../views/ProductShow'
import OrderCreate from '../views/OrderCreate'
import UserProfile from '../views/UserProfile'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/shop',
    name: 'Shop',
    component: Home
  },
  {
    path: '/order-create',
    name: 'order-create',
    component: OrderCreate
  },
  {
    path: '/shop/:category',
    name: 'products-list',
    component: ProductsList,
    props: true,
  },
  {
    path: '/user/:id',
    name: 'user-show',
    component: UserProfile,
    props: true
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
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CartShow.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
