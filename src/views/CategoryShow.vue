<template lang="html">
  <div class="">
    <h1> {{ shop.category.category }} in future</h1>
    <div class="category" v-for="product in shop.category.products"  :key="product.id">
      <ProductCard :category="shop.category.category" :product="product"/>
    </div>
  </div>



</template>

<script>
import store from 'vuex'
import {mapState} from 'vuex'
import ProductCard from '@/components/ProductCard'

export default {
  components:{
    ProductCard
  },
  computed: {
    ...mapState(['shop'])
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    store
    .dispatch('shop/getCategory', routeTo.params.category)
    .then(category => {
      routeTo.params.category = category
      next()
    })
    .catch(error => {
      if (error.response && error.response.status == 404) {
        console.log(error.response)
      } else {
        next({ name: 'shop' })
      }
    })
  }
}
</script>

<style lang="css" scoped >
  .category {
    color: blue;
  }
</style>
