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
    return shopApi.get('/shop/')
  },
  getCategory(name) {
    return shopApi.get('/shop/?category=' + name.category)
  }
}
