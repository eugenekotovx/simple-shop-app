<template lang="html">
<div class="">
    <div class="product">
        <h1> {{ shop.product.name }}</h1>
        <h2>{{ shop.product.price + '$'}}</h2>
        <p class="product__description">
          {{shop.product.description}}
        </p>
      </div>
      <BaseButton @click="addProduct(shop.product)"> Add product in cart </BaseButton>
      <BaseButton
      @click="addProduct(shop.product)"
      buttonClass="button-active">
      <BaseIcon
      :width="37"
      :height="37"
      :name="'cart'"
      /> Add product in cart </BaseButton>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
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
