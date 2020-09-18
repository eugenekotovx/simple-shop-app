// import ShopService from '@/services/ShopService'

export const state = {
  namespaced: true,
  shop:[
        {
         category: 'art',
         products: [
            { id: 1, name: 'Art one', price: 5, total: 7},
            { id: 2, name: 'Art two', price: 15, total: 1}
          ]
        },
        {
         category: 'book',
         products: [
            { id: 3, name: 'Book three', price: 3, total: 5}
          ]
        },
        {
          category: 'Music',
          products: [
            { id: 4, name: 'Music Album four', price: 3, total: 5 }
          ]
        }
      ],
        product: {}, // for productShow
        category: {} // for categoryShow
}

export const mutations = {
  GET_CATEGORY(state, category) {
    state.category = category
  },
  GET_PRODUCT(state, product) {
    //state.category = category
    state.product = product
  }

}

export const actions = {
  getCategory({ commit, getters }, name) {
    var category = getters.getCategoryByName(name)
    if (category) {
      commit('GET_CATEGORY', category)
    }
  },
  getProduct({commit, state}, productId) {
    var prod = state.category.products.find(item => item.id === productId)
    if (prod) {
      commit('GET_PRODUCT', prod)
    }
  }
}


export const getters = {
  getCategoryByName: state => category => {
    return state.shop.find(cat => cat.category === category)
  },
}
