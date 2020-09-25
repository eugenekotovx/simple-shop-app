import ShopService from '@/services/ShopService'

export const namespaced = true;

export const state = {
  shop:[],
  product: {}, // for productShow
  category: [] // for categoryShow
}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.shop = categories
  },
  SET_CATEGORY(state, category) {
    state.category = category
  },
  SET_PRODUCT(state, product) {
    state.product = product
  }
}

export const actions = {
    getCategories({ commit, state }) {
      if (state.shop.length) {
        return state.shop
      }
      return ShopService.getShopData()
      .then(response => {
        commit('SET_CATEGORIES', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    getCategory({ commit }, params) {
      var test = state.category.find(item => item.category == params.category)

      if (test) {
        return state.category
      } else {
        return ShopService.getCategory(params)
        .then(category => {
          commit('SET_CATEGORY', category)
          return category
        })
      }
     },
     getProduct({  commit, state }, params ) {
       if (params.id == state.product.id) {
         return state.shop.product
       } else {
         return ShopService.getProduct(params)
         .then(product => {
           commit('SET_PRODUCT', product)
           return product
          })
         }
       }
     }
