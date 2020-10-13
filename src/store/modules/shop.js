import ShopService from '@/services/ShopService'

export const namespaced = true;

export const state = {
  shop:[],
  product: {}, // for productShow
  category: [], // for productsList
  perPage: 4
}

export const mutations = {
  SET_CATEGORIES(state, data) {
    state.shop = data
  },
  LOAD_PRODUCTS(state, products) {
    state.category.push(...products)
  },
  SET_PRODUCTS(state) {
    state.category = []
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
      return ShopService.getCategories()
      .then(response => {
        commit('SET_CATEGORIES', response)
      })
      .catch(error => {
        console.log(error)
      })
    },
    getProducts({ commit }, {params, perPage, page}) {
        return ShopService.getProducts(params, perPage, page)
        .then(products => {
          commit('LOAD_PRODUCTS', products.data)
          return products.data
        })
     },
     setCategory({commit}) {
         commit('SET_PRODUCTS')
         return state.category
     },
     getProduct({  commit, state }, params ) {
       if (params.id == state.product.id) {
         return state.shop.product
       } else {
         return ShopService.getProduct(params)
         .then(product => {
           commit('SET_PRODUCT', product.data)
           return product.data
          })
         }
       }
     }
