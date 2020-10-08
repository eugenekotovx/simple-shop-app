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
  getCategories() {
    return shopApi.get('/products/')
    .then(products => {
      var categories = [...new Set(products.data.map(item => item.category))]
      return categories
    })
  },
  getProducts(params, perPage, page) {
    return shopApi.get('/products/?category=' + params.category + '&_limit=' + perPage + '&_page=' + page)
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
  getUserOrders(userId) {
    return shopApi.get('/orders?userId=' + userId)
  },
  setOrder(order) {
    return shopApi.post('/orders', order)
  }
}
