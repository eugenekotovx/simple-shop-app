import Vue from 'vue'
import Vuex from 'vuex'

import * as shop from '@/store/modules/shop.js'
import * as cart from '@/store/modules/cart.js'
import * as order from '@/store/modules/order.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    cart,
    order
  },
  state: {}
})
