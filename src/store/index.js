import Vue from 'vue'
import Vuex from 'vuex'

import * as shop from '@/store/modules/shop.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop
  },
  state: {
    basket: [],
    basketCounter: 0,
    basketTotalPrice: 0,
  },
  mutations: {
    ADD_PRODUCT(state, item) {
      state.basket.push(item)
      Vue.set(item, 'count', 1)
      Vue.set(item, 'totalItemPrice', item.price)
    },
    UPDATE_COUNT(state, item) {
      state.item = item
    },
  },
  actions: {
    addProduct({commit, state}, item) {
      if (item.total !== 0) {
        let multipleItem = state.basket.find(product => product.id == item.id)
        item.total --
        if (multipleItem) {
          multipleItem.count++
          multipleItem.totalItemPrice = multipleItem.price * multipleItem.count
          item = multipleItem
          commit('UPDATE_COUNT', item)
        } else {
          commit('ADD_PRODUCT', item)
        }
      }
    },
   },
  getters: {
    basketTotalPrice: state =>  {
      let totalPrice = 0
      state.basket.forEach(item => {
        totalPrice += item.totalItemPrice
      })
      return totalPrice + '$'
    },
    getProductById: state => id => {
      return state.product.find(product => product.id === id)
    },
  },
})
