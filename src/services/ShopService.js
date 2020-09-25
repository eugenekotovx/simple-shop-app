import axios from 'axios'

const shopApi = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getShopData() {
    return shopApi.get('/products/')
  },
  getCategory(params) {
    return shopApi.get('/products/?category=' + params.category)
    .then(category => {
      return category.data
    })
  },
  getProduct(params) {
    return shopApi.get('/products/' + params.id)
    .then(product => {
      return product.data
    })
  },
  setOrder(order) {
    return shopApi.post('/orders', order)
  }
}
