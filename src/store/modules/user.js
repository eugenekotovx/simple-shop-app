import ShopService from '@/services/ShopService'

export const namespaced = true;

export const state = {
  user: (JSON.parse(localStorage.getItem('user'))) ? JSON.parse(localStorage.getItem('user')) : {login: false, orders: []}
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  USER_LOGIN(state) {
    state.user.login = true
  },
  SET_USER_ORDERS(state, orders) {
    state.user.orders = orders
  }
}

export const actions = {
  async registerUser({commit, dispatch}, user) {
    await commit('SET_USER', user)
    dispatch('updateAuth')
    localStorage.setItem('user', JSON.stringify(user))
  },
  updateAuth({commit}) {
    commit('USER_LOGIN')
  },
  getOrders({commit}, userId) {
    return ShopService.getUserOrders(userId)
    .then((orders) => {
      commit('SET_USER_ORDERS', orders.data)
    })
  }
}
