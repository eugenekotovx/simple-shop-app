import Vue from "vue";

export const state = {
  cart: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartCounter: 0,
};

export const mutations = {
  ADD_PRODUCT(state, item) {
    state.cart.push(item);
  },
};

export const actions = {
  addProduct({ commit, dispatch }, item) {
    if (item.total !== 0) {
      Vue.set(item, "count", 1);
      Vue.set(item, "totalItemPrice", item.price);
      item.total--;
      commit("ADD_PRODUCT", item);
      dispatch("saveCart");
    }
  },
  incrementCount({ dispatch, getters }, item) {
    let itemInCart = getters.getItemFromCart(item.id);
    if (itemInCart && itemInCart.total !== 0) {
      itemInCart.count++;
      itemInCart.total--;
      dispatch("saveCart");
    }
  },
  decrementCount({ getters, dispatch }, item) {
    let itemInCart = getters.getItemFromCart(item.id);
    if (itemInCart.count === 1) {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== item.id);
    }
    itemInCart.count--;
    itemInCart.total++;
    dispatch("saveCart");
  },
  saveCart({ state }) {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
};

export const getters = {
  cartTotalPrice: (state) => {
    let totalPrice = 0;
    state.cart.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    return totalPrice + "$";
  },
  getItemFromCart: (state) => (id) => {
    return state.cart.find((item) => item.id == id);
  },
};
