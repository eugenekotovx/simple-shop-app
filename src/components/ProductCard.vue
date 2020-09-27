<template lang="html">
  <div class="product__card -shadow">
    <router-link
    :to="{ name: 'product-show', params: { category: $route.params.category, id : product.id }}"
    >
    <div class="product__wrapper">
      <div class="product__description">
        <h3> {{ product.id}} {{ product.name }}</h3>
        <h3> PRICE: {{ product.price + '$' }}</h3>
      </div>

        <img class="product__img" src="@/assets/img/img.png" alt="">
    </div>

   </router-link>
   <span v-if="product.count">
     in cart: <span>{{product.count}} </span>
     <template v-if="product.total == 0">
       <span class="sold-out"> SOLD OUT </span>
     </template>
   </span>
   <BuyProductButton class="product__btn" :product="product"/>
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

<style lang="scss" scoped >
  .product__img {
    width: 150px;
    height: 150px;
  }
  .sold-out {
    color: red;
  }
  .product{
   &__card {
     display: flex;
     flex-direction: column;
     margin-bottom: 40px;
     border-radius: 25px;
     padding: 20px;
     a {
        color: #1a1a2e;
     }
     margin-bottom: 10px;
   }
   &__btn {
     max-width: 300px;
     margin-left:  auto;
   }
   &__wrapper {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items:  center;
   }
  }
</style>
