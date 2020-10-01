<template lang="html">
  <div class="">
    <div v-for="product in cart.cart" :key="product.id">
      <ProductCard :product="product" />
    </div>
    <h2>
      <router-link to="/order-create">
        <button name="button">Purchase</button></router-link>
    </h2>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import {mapState} from 'vuex'

export default {
  components: {
    ProductCard
  },
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style lang="css" scoped >

</style>
