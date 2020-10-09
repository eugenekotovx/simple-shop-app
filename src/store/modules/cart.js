import Vue from 'vue'

export const state = {
   cart: (JSON.parse(localStorage.getItem('cart'))) ? JSON.parse(localStorage.getItem('cart')) : [],
   cartCounter: 0
}

export const mutations = {
  ADD_PRODUCT(state, item) {
    state.cart.push(item)
  },
  UPDATE_COUNT(state, item) {
    state.item = item
  }
}

export const actions = {
  addProduct({commit, dispatch}, item) {
    if (item.total !== 0) {
      commit('ADD_PRODUCT', item)
      Vue.set(item, 'count', 1)
      Vue.set(item, 'totalItemPrice', item.price)
      dispatch('saveCart')
    }
  },
  incrementCount({commit, dispatch}, item) {
    if (item.total !== 0) {
      item.count++
      item.total--
      item.totalItemPrice = item.price * item.count
      commit('UPDATE_COUNT', item)
      dispatch('saveCart')
    }
  },
  decrementCount({commit, state, dispatch}, item) {
    if (item.count === 1) {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id)
      }
      item.count--
      item.total ++
      item.totalItemPrice = item.price * item.count
      commit('UPDATE_COUNT', item)
      dispatch('saveCart')
    },
    saveCart({state}) {
      localStorage.setItem('cart', JSON.stringify(state.cart))
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
