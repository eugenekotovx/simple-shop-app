<template lang="html">
<div class="">
    <div class="product">
        <h1> {{ shop.product.name }}</h1>
        <h2>{{ shop.product.price + '$'}}</h2>
        <div class="product__info">
            <img class="product__img" :src="require(`@/assets/img/` + shop.product.name.split(' ').join('_') + '.png')" alt="">
          <p class="product__description">
            {{shop.product.description}}
          </p>
        </div>
      </div>
      <ProductControls :product="shop.product"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ProductControls from '@/components/ProductControls'
export default {
  components: {
    ProductControls
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
    &__info {
      display: flex;
      flex-direction: column;
    }
    &__description {
      text-align: center;
    }
    &__img {
      max-width: 40%;
      margin: 0 auto;
    }
  }
</style>
