import axios from "axios";

const shopApi = axios.create({
  baseURL: `https://my-json-server.typicode.com/eugenekotovx/mock-food-api/`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 10000
});

export default {
  getCategories() {
    return shopApi.get("/categories/").then(categories => {
      return categories;
    });
  },
  getProducts(perPage, page, params) {
    if (params) {
      return shopApi.get(
        "/products/?category=" +
          params.category +
          "&_limit=" +
          perPage +
          "&_page=" +
          page
      );
    }
    return shopApi.get("/products?_limit=" + perPage + "&_page=" + page);
  },
  getProduct(params) {
    return shopApi.get("/products/" + params.id).then(product => {
      return product;
    });
  },
  getUserOrders(userId) {
    return shopApi.get("/orders?userId=" + userId);
  },
  setOrder(order) {
    return shopApi.post("/orders", order);
  }
};
