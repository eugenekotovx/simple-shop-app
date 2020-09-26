<template lang="html">
<div class="">
    <div class="product">
        <Cart/>
        <h1> {{ shop.product.name }}</h1>
        <h2>{{ shop.product.price + '$'}}</h2>
        <p class="product__description">
          {{shop.product.description}}
        </p>
      </div>
      <BuyProductButton class="product-show__button" :product="shop.product"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Cart from '@/components/Cart'
import BuyProductButton from '@/components/BuyProductButton'

export default {
  components: {
    Cart,
    BuyProductButton
  },
  methods: {
    ...mapActions(['addProduct'])
  },
  computed: {
    ...mapState(['shop'])
  },
}
</script>

<style lang="scss" scoped >
  .product {
    display: flex;
    flex-direction: column;
    &__desctiption {
      text-align: left;
    }
  }
</style>
