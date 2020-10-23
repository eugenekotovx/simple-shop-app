import ShopService from "@/services/ShopService";

export const namespaced = true;

export const state = {
  categories: [],
  product: {}, // for productShow
  products: [], // for products
  perPage: 4
};

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  LOAD_PRODUCTS(state, products) {
    state.products.push(...products);
  },
  SET_PRODUCTS(state) {
    state.products = [];
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  }
};

export const actions = {
  getShopData({ commit, state }) {
    if (state.categories.length) {
      return state.categories;
    }
    return ShopService.getCategories()
      .then(categories => {
        commit("SET_CATEGORIES", Object.values(categories.data));
      })
      .catch(error => {
        console.log(error);
      });
  },
  getProducts({ commit }, { perPage, page, params }) {
    return ShopService.getProducts(perPage, page, params).then(products => {
      commit("LOAD_PRODUCTS", products.data);
      return products.data;
    });
  },
  setCategory({ commit }) {
    commit("SET_PRODUCTS");
  },
  getProduct({ commit, state }, params) {
    if (params.id == state.product.id) {
      return state.categories.product;
    } else {
      return ShopService.getProduct(params).then(product => {
        commit("SET_PRODUCT", product.data);
        return product.data;
      });
    }
  }
};
