import axios from 'axios'

const shopApi = axios.creat({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getCategorys() {
    return shopApi.get('/shop')
  },
  getCategory(name) {
    return shopApi.get('/shop' + name)
  },
  getProducts(category) {
    return shopApi.get('/shop' + category.products)
  },
  getProduct(category, id) {
     return shopApi.get('/shop' + category.products + id)
  }
}
