import ShopService from '@/services/ShopService'

export const namespaced = true;

export const state = {
  shop:[],
  product: {}, // for productShow
  category: {} // for categoryShow
}

export const mutations = {
  SET_CATEGORYS(state, categorys) {
    state.shop = categorys
  },
  SET_CATEGORY(state, category) {
    state.category = category
  },
  SET_PRODUCT(state, product) {
    state.product = product
  }
}

export const actions = {
    getCategorys({ commit }) {
      return ShopService.getShopData()
      .then(response => {
        commit('SET_CATEGORYS', response.data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    getCategory({ commit, getters }, name) {
      if (name.category == state.category.category) {
        return state.category
      }

      var category = getters.getCategoryByName(name.category)

      if (category) {
        commit('SET_CATEGORY', category)
        return category
      } else {
        return ShopService.getCategory(name)
        .then(response => {
          commit('SET_CATEGORY', response.data[0])
          return response.data[0]
        })
      }
  },
   getProduct({ dispatch, commit, getters }, params ) {
    dispatch('getCategory', params)
    .then(() => {
      let prod = getters.getProductById(params)
      if (prod) {
        commit('SET_PRODUCT', prod)
        return prod
      }
    })
  }
}


export const getters = {
  getCategoryByName: state => category => {
    return state.shop.find(cat => cat.category === category)
  },
  getProductById: state => params => {
    let id = Number(params.id)
    return state.category.products.find(product => product.id === id)
  }
}
