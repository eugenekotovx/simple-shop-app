import ShopService from '@/services/ShopService.js'

export const namespaced = true;

export const state = {
  order: {}
}

export const mutations = {
  SET_ORDER(state, order) {
    state.order = order
  }
}
export const actions = {
  getOrder({commit}, order) {
    return ShopService.setOrder(order)
    .then(() => {
      console.log(order)
      commit('SET_ORDER', order)
    })
  }
}
