<template lang="html">
  <div class="">
    <h1> {{ $route.params.category }} in future</h1>
    <div class="" v-for="product in $route.params.products"  :key="product.id">
      <ProductCard :product="product"/>
    </div>
  </div>



</template>

<script>
import ProductCard from '@/components/ProductCard'
export default {
  components:{
    ProductCard
  },
  props: {
  }
}
</script>

<style lang="css" scoped >

</style>
