<template lang="html">
  <div class="">
    <div v-for="product in cart.cart" :key="product.id">
      <ProductCard :product="product" />
    </div>
    <div class="">
      {{ cartTotalPrice }}
    </div>
    <h2>
      <router-link to="/order-create">
        <BaseButton buttonClass="button-active">Purchase</BaseButton>
      </router-link>
    </h2>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
import {mapState, mapGetters} from 'vuex'

export default {
  components: {
    ProductCard
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotalPrice'])
  }
}
</script>

<style lang="css" scoped >

</style>
