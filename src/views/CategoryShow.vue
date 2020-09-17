<template lang="html">
  <div class="">
    <h1> {{ category.category }} in future</h1>
    <div class="" v-for="product in category.products"  :key="product.id">
      <ProductCard :product="product"/>
    </div>
  </div>



</template>

<script>
import ProductCard from '@/components/ProductCard'
import {mapState} from 'vuex'

export default {
  components:{
    ProductCard
  },
  computed: {
    ...mapState(['category'])
  }
}
</script>

<style lang="css" scoped >

</style>
