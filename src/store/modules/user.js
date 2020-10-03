export const namespaced = true;

export const state = {
  user: (JSON.parse(localStorage.getItem('user'))) ? JSON.parse(localStorage.getItem('user')) : {}
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  USER_LOGIN(state) {
    state.user.login = true
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
  }
}
