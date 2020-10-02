export const namespaced = true;

export const state = {
  user: (JSON.parse(localStorage.getItem('user'))) ? JSON.parse(localStorage.getItem('user')) : {}
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  registerUser({commit}, user) {
    commit('SET_USER', user)
    localStorage.setItem('user', JSON.stringify(user))
  }
}
