import Vue from 'vue'
import Vuex from 'vuex'

import * as shop from '@/store/modules/shop.js'
import * as basket from '@/store/modules/basket.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    basket
  },
  state: {}
})
