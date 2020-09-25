import Vue from 'vue'

export const state = {
   cart: [],
   cartCounter: 0
}

export const mutations = {
  ADD_PRODUCT(state, item) {
    state.cart.push(item)
    Vue.set(item, 'count', 1)
    Vue.set(item, 'totalItemPrice', item.price)
  },
  UPDATE_COUNT(state, item) {
    state.item = item
  }
}

export const actions = {
  addProduct({commit, state}, item) {
    if (item.total !== 0) {
      let multipleItem = state.cart.find(product => product.id == item.id)
      item.total --
      if (multipleItem) {
        multipleItem.count++
        multipleItem.totalItemPrice = multipleItem.price * multipleItem.count
        commit('UPDATE_COUNT', multipleItem)
      } else {
        commit('ADD_PRODUCT', item)
      }
    }
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
      state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id)
      }
      item.count--
      item.total ++
      item.totalItemPrice = item.price * item.count
      commit('UPDATE_COUNT', item)
    }
}

export const getters = {
  cartTotalPrice: state =>  {
    let totalPrice = 0
    state.cart.forEach(item => {
      totalPrice += item.totalItemPrice
    })
    return totalPrice + '$'
  },
}
