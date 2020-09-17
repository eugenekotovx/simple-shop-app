import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shop:[{
            category: 'art',
            products: [
              { id: '1', name: 'Art one', price: 5, total: 7},
              { id: '2', name: 'Art two', price: 15, total: 1}
            ]
          },
          {
            category: 'book',
            products: [
              { id: '3', name: 'Book three', price: 3, total: 5}
            ]
          },
          {
            category: 'Music',
            products: [
              { id: '4', name: 'Music Album four', price: 3, total: 5 }
            ]
          }],
    basket: [],
    basketCounter: 0,
    basketTotalPrice: 0,
    product: {}
  },
  mutations: {
    ADD_PRODUCT(state, item) {
      if (item.total !== 0) {
        let multipleItem = state.basket.find(product => product.id == item.id)
        item.total --
        if (multipleItem) {
          multipleItem.count++
          multipleItem.totalItemPrice = multipleItem.price * multipleItem.count
        } else {
          state.basket.push(item);

          Vue.set(item, 'count', 1)
          Vue.set(item, 'totalItemPrice', item.price)
        }
      }
    },
    INCREMENT_COUNT(state, item) {
      if (item.total !== 0) {
      item.count++
      item.totalItemPrice = item.price * item.count
      item.total --
      }
    },
    DECREMENT_COUNT(state, item) {
      if (item.count === 1) {
        state.basket = state.basket.filter((basketItem) => basketItem.id !== item.id)
      }
      item.count--
      item.total ++
      item.totalItemPrice = item.price * item.count
    },
  },
  actions: {
    addProduct({commit}, item) {
      commit('ADD_PRODUCT', item)
    },
    incrementCount({commit}, item) {
      commit('INCREMENT_COUNT', item)
    },
    decrementCount({commit}, item) {
      commit('DECREMENT_COUNT', item)
    }
  },
  getters: {
    basketTotalPrice: state =>  {
      let totalPrice = 0
      state.basket.forEach(item => {
        totalPrice += item.totalItemPrice
      })
      return totalPrice + '$'
    }
  },
  modules: {
  },
})
