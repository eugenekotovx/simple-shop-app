import Vue from 'vue'
import Vuex from 'vuex'

import * as shop from '@/store/modules/shop.js'
import * as cart from '@/store/modules/cart.js'
import * as order from '@/store/modules/order.js'
import * as user from '@/store/modules/user.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    cart,
    order,
    user
  },
  state: {}
})
