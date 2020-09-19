<template lang="html">
  <div class="product-card -shadow">
    <router-link
    :to="{ name: 'product-show', params: { category: $route.params.category, id : product.id }}"
    >
      <h3> {{ product.id}} {{ product.name }}</h3>
      <h3> PRICE: {{ product.price + '$' }}</h3>

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
    },
    category: {
      type: String,
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
    margin-bottom: 10px;
  }
</style>
