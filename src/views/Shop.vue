<template>
  <div class="">
    <Basket/>
    <div class="" v-for="category in shop"  :key="category.name">
      <router-link :to="{ name: 'category', params: {category : category.category, products: category.products }}">
        <h1>
            {{ category.category }}
        </h1>
       </router-link>
      <h3 v-for="product in category.products"  :key="product.id">
        <ProductCard :product="product"/>
      </h3>
    </div>

  </div>

</template>

<script>

import {mapActions, mapState} from 'vuex'
import ProductCard from '@/components/ProductCard'
import Basket from '@/components/Basket'

export default {
  name: 'Shop',
  components: {
    Basket,
    ProductCard
  },
  computed: {
    ...mapState(['shop'])
  },
  methods: {
    ...mapActions(['addProduct']),
  }
}
</script>
<style media="screen">
  .shop-category {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid green;
    border-radius: 25px;
    margin-bottom: 5px
  }
  .btn {
    height: 24px;
  }
</style>
