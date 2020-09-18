// import ShopService from '@/services/ShopService'

export const state = {
  namespaced: true,
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
        product: {}, // for productShow
        category: {} // for categoryShow
}

export const mutations = {
  GET_CATEGORY(state, category) {
    state.category = category
  },

}

export const actions = {
  getCategory({ commit, state }, name) {
    var category = state.shop.find(cat => cat.category === name)
    if (category) {
      commit('GET_CATEGORY', category)
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
      state.basket = state.basket.filter((basketItem) => basketItem.id !== item.id)
      }
      item.count--
      item.total ++
      item.totalItemPrice = item.price * item.count
      commit('UPDATE_COUNT', item)
    }
}
