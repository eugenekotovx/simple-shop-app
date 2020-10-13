<template lang="html">
  <div class="product__card -shadow">
    <router-link
    :to="{ name: 'product-show', params: { id : product.id, product: product }}"
    >
    <div class="product__wrapper">
      <img class="product__img"
      :src="require(`@/assets/img/` + product.name.split(' ').join('_') + '.png')"
      alt="">
      <div class="product__description">
        <span class="product__name"> {{ product.name }} - </span>
        <span class="product__price"> {{ product.price + '$' }}</span>
      </div>
    </div>
   </router-link>
   <ProductControls :product="product"/>
  </div>
</template>

<script>
import ProductControls from '@/components/ProductControls'
export default {
  components: {
    ProductControls
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    category: {
      type: String,
    }
  },
}

</script>

<style lang="scss" scoped >
  .product__img {
    width: 150px;
    height: 150px;
  }
  .product{
   &__card {
     display: flex;
     flex-direction: column;
     margin-bottom: 40px;
     border-radius: 25px;
     padding: 20px 0;
     a {
        color: #1a1a2e;
     }
     margin-bottom: 10px;
   }
   &__wrapper {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items:  center;
   }
  }
</style>
