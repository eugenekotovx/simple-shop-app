<template lang="html">
  <div class="product-card -shadow">
    <router-link :to="{ name: 'product-show', params: { id : product.id, product: product }}">
      <h1> {{ product.id}} {{ product.name }}</h1>
      <h2> PRICE: {{ product.price + '$' }}</h2>

   </router-link>
   <span v-if="product.count">
     in basket: <span>{{product.count}} </span>
     <template v-if="product.total == 0">
       <h2 class="sold-out"> SOLD OUT </h2>
     </template>
   </span>
   <BuyProductButton :product="product"/>
  </div>
</template>

<script>
import BuyProductButton from '@/components/BuyProductButton'
export default {
  components: {
    BuyProductButton
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="css" scoped >
  .sold-out {
    color: red;
  }
  .product-card {
    border: 3px solid blue;
    margin-bottom: 10px;
  }
</style>
