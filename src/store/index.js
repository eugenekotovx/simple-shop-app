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
    product: {}, // for productShow
    category: {} // for categoryShow
  },
  mutations: {
    GET_CATEGORY(state, category) {
      state.category = category
    },
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
    UPDATE_COUNT(state, item) {
      state.item = item
    },
  },
  actions: {
    getCategory({ commit, state }, name) {
      var category = state.shop.find(cat => cat.category === name)

      if (category) {
        commit('GET_CATEGORY', category)
      }
    },
    addProduct({commit}, item) {
      commit('ADD_PRODUCT', item)
    },
    incrementCount({commit}, item) {
      if (item.total !== 0) {
        item.count++
        item.total--
        item.totalItemPrice = item.price * item.count
        commit('UPDATE_COUNT', item)
      }
    },
    decrementCount({commit, state}, item) {
      if (item.count === 1) {
        state.basket = state.basket.filter((basketItem) => basketItem.id !== item.id)
        }
        item.count--
        item.total ++
        item.totalItemPrice = item.price * item.count
        commit('UPDATE_COUNT', item)
      }
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
  modules: {
  },
})
