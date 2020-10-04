<template lang="html">
  <div class="product__card -shadow">
    <router-link
    :to="{ name: 'product-show', params: { id : product.id, product: product }}"
    >
    <div class="product__wrapper">
      <div class="product__description">
        <h3> {{ product.name }}</h3>
        <h3> PRICE: {{ product.price + '$' }}</h3>
      </div>

        <img class="product__img" :src="require(`@/assets/img/` + product.name.split(' ').join('_') + '.png')" alt="">
    </div>
   </router-link>
   <div class="product__group">
       <BaseButton
       buttonClass="button-active"
       v-if="!product.count"
       @click.once="addProduct(product)">
       <BaseIcon
       :width="37"
       :height="37"
       :name="'cart'"
       />
       <span class="button__text">
         Add product in cart
       </span>
      </BaseButton>
      <div class="product__controls" v-if="product.count >= 1">
        <BaseButton
        type="button"
        buttonClass="button-active"
        @click="decrementCount(product)"
        >-</BaseButton>
        <BaseButton
        type="button"
        buttonClass="button-active"
        @click="incrementCount(product)"
        >+</BaseButton>
      </div>
     <template>
       <span v-if="product.total !== 0 & product.count >= 1" class="cart__counter">
         in cart: <span>{{product.count}} </span>
       </span>
       <span  v-else-if="product.total == 0" class="cart__counter sold-out"> SOLD OUT </span>
     </template>
   </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  components: {
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
  methods: {
    ...mapActions(['addProduct', 'incrementCount','decrementCount'])
    }
  }

</script>

<style lang="scss" scoped >
  .cart__counter {
    max-width: 150px;
    width: 100%;
    text-align: center;
  }
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
     padding: 20px 0;
     a {
        color: #1a1a2e;
     }
     margin-bottom: 10px;
   }
   &__group {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
   }
   &__wrapper {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items:  center;
   }
   &__controls {
     display: flex;
   }
  }
</style>
