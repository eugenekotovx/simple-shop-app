import ShopService from '@/services/ShopService.js'

export const namespaced = true;

export const state = {
  order: {},
  orders: []
}

export const mutations = {
  SET_ORDER(state, order) {
    state.order = order
  },
  ADD_ORDER(state, order) {
    state.orders.push(order)
  }
}
export const actions = {
  getOrder({commit}, order) {
    return ShopService.setOrder(order)
    .then(() => {
      console.log(order)
      commit('SET_ORDER', order)
    })
    .then(() => {
      commit('ADD_ORDER', order)
    })
  }
}
