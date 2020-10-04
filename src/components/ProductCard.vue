<template lang="html">
  <div class="product__card -shadow">
    <router-link
    :to="{ name: 'product-show', params: { id : product.id, product: product }}"
    >
    <div class="product__wrapper">
      <div class="product__description">
        <h3> {{ product.id}} {{ product.name }}</h3>
        <h3> PRICE: {{ product.price + '$' }}</h3>
      </div>

        <img class="product__img" :src="require(`@/assets/img/` + product.name.split(' ').join('_') + '.png')" alt="">
    </div>
   </router-link>
   <BaseButton @click="addProduct(product)"> Add product in cart </BaseButton>
   <span v-if="product.count" class="cart__counter">
     in cart: <span>{{product.count}} </span>
     <template v-if="product.total == 0">
       <span class="sold-out"> SOLD OUT </span>
     </template>
   </span>
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
    ...mapActions(['addProduct'])
  }
}
</script>

<style lang="scss" scoped >
  .cart__counter {
    max-width: 150px;
    width: 100%;
    margin-left: auto;
    text-align: center;
    margin-top: 10px;
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
     padding: 20px;
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
