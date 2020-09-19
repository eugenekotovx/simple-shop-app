<template lang="html">
  <div class="">
    <h1> {{ shop.category.category }} in future</h1>
    <div class="category" v-for="product in shop.category.products"  :key="product.id">
      <ProductCard :category="$route.params.category" :product="product"/>
    </div>
  </div>



</template>

<script>
import {mapState} from 'vuex'
import ProductCard from '@/components/ProductCard'

export default {
  components:{
    ProductCard
  },
  computed: {
    ...mapState(['shop'])
  },
}
</script>

<style lang="css" scoped >
  .category {
    color: blue;
  }
</style>
